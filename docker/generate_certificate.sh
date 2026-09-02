#!/usr/bin/env bash

set -euo pipefail

script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
app_dir=$(cd -- "$script_dir/.." && pwd)
env_file="$app_dir/.env"
certificate_dir="$script_dir/certificates"
private_dir="$certificate_dir/private"
public_dir="$certificate_dir/public"
server_dir="$certificate_dir/server"

read_env_value() {
    local key=$1
    local line
    line=$(awk -v wanted="$key" '
        index($0, wanted "=") == 1 { value = substr($0, length(wanted) + 2) }
        END { print value }
    ' "$env_file")
    line=${line%$'\r'}
    if [[ $line == \"*\" && $line == *\" ]]; then
        line=${line:1:${#line}-2}
    elif [[ $line == \'*\' && $line == *\' ]]; then
        line=${line:1:${#line}-2}
    fi
    printf '%s' "$line"
}

is_ipv4_address() {
    local address=$1
    local octet
    local -a octets
    IFS='.' read -r -a octets <<< "$address"
    [[ ${#octets[@]} -eq 4 ]] || return 1
    for octet in "${octets[@]}"; do
        [[ $octet =~ ^[0-9]{1,3}$ ]] || return 1
        ((10#$octet <= 255)) || return 1
    done
}

if [[ ! -f $env_file ]]; then
    printf 'Missing environment file: %s\n' "$env_file" >&2
    exit 1
fi
if ! command -v openssl >/dev/null 2>&1; then
    printf 'OpenSSL is required to generate local certificates.\n' >&2
    exit 1
fi

local_network=$(read_env_value LOCAL_NETWORK)
app_hostname=$(read_env_value APP_HOSTNAME)
if [[ $local_network != true ]]; then
    printf 'LOCAL_NETWORK is not true; local certificate generation is not required.\n'
    exit 0
fi
if ! is_ipv4_address "$app_hostname"; then
    printf 'APP_HOSTNAME must be a valid IPv4 address in local mode. Received: %s\n' "$app_hostname" >&2
    exit 1
fi

umask 077
mkdir -p "$private_dir" "$public_dir" "$server_dir"

ca_key="$private_dir/local-ca.key"
ca_cert="$public_dir/local-ca.crt"
server_key="$server_dir/server.key"
server_leaf="$private_dir/server-leaf.crt"
server_cert="$server_dir/server.crt"

if [[ ! -s $ca_key || ! -s $ca_cert ]]; then
    printf 'Generating the AR Museum local certificate authority...\n'
    openssl genrsa -out "$ca_key" 4096
    openssl req -x509 -new -sha256 -key "$ca_key" -days 3650 \
        -subj '/C=CZ/O=AR Museum Local/CN=AR Museum Local CA' \
        -addext 'basicConstraints=critical,CA:TRUE,pathlen:0' \
        -addext 'keyUsage=critical,keyCertSign,cRLSign' \
        -out "$ca_cert"
fi

regenerate_server=false
if [[ ! -s $server_key || ! -s $server_leaf || ! -s $server_cert ]]; then
    regenerate_server=true
elif ! openssl verify -CAfile "$ca_cert" "$server_leaf" >/dev/null 2>&1; then
    regenerate_server=true
elif ! openssl x509 -checkend 2592000 -noout -in "$server_leaf" >/dev/null 2>&1; then
    regenerate_server=true
elif ! openssl x509 -in "$server_leaf" -noout -ext subjectAltName 2>/dev/null \
    | grep -Fq "IP Address:$app_hostname"; then
    regenerate_server=true
fi

if [[ $regenerate_server == true ]]; then
    printf 'Generating the HTTPS certificate for %s...\n' "$app_hostname"
    temporary_dir=$(mktemp -d "${TMPDIR:-/tmp}/ar-museum-cert.XXXXXX")
    trap 'rm -rf -- "$temporary_dir"' EXIT
    cat > "$temporary_dir/server.ext" <<EOF
basicConstraints=critical,CA:FALSE
keyUsage=critical,digitalSignature,keyEncipherment
extendedKeyUsage=serverAuth
subjectAltName=IP:$app_hostname
subjectKeyIdentifier=hash
authorityKeyIdentifier=keyid,issuer
EOF
    openssl genrsa -out "$server_key" 2048
    openssl req -new -sha256 -key "$server_key" \
        -subj "/C=CZ/O=AR Museum Local/CN=$app_hostname" \
        -out "$temporary_dir/server.csr"
    openssl x509 -req -sha256 -in "$temporary_dir/server.csr" \
        -CA "$ca_cert" -CAkey "$ca_key" -CAcreateserial \
        -days 825 -extfile "$temporary_dir/server.ext" -out "$server_leaf"
    cp "$server_leaf" "$server_cert"
    printf '\n' >> "$server_cert"
    cat "$ca_cert" >> "$server_cert"
fi

cp "$ca_cert" "$public_dir/local-ca.pem"
openssl x509 -in "$ca_cert" -outform DER -out "$public_dir/local-ca.der"

certificate_payload=$(openssl base64 -A -in "$public_dir/local-ca.der")
profile_uuid=$(uuidgen | tr '[:lower:]' '[:upper:]')
payload_uuid=$(uuidgen | tr '[:lower:]' '[:upper:]')
cat > "$public_dir/local-ca.mobileconfig" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>PayloadCertificateFileName</key>
            <string>ar-museum-local-ca.der</string>
            <key>PayloadContent</key>
            <data>$certificate_payload</data>
            <key>PayloadDescription</key>
            <string>Trusts the local AR Museum HTTPS server.</string>
            <key>PayloadDisplayName</key>
            <string>AR Museum Local CA</string>
            <key>PayloadIdentifier</key>
            <string>museum.ar.local.ca</string>
            <key>PayloadType</key>
            <string>com.apple.security.root</string>
            <key>PayloadUUID</key>
            <string>$payload_uuid</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDescription</key>
    <string>Installs the AR Museum local certificate authority.</string>
    <key>PayloadDisplayName</key>
    <string>AR Museum Local HTTPS</string>
    <key>PayloadIdentifier</key>
    <string>museum.ar.local.profile</string>
    <key>PayloadOrganization</key>
    <string>AR Museum</string>
    <key>PayloadRemovalDisallowed</key>
    <false/>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>$profile_uuid</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
EOF

chmod 600 "$ca_key" "$server_key" "$server_leaf"
chmod 644 "$ca_cert" "$public_dir/local-ca.pem" "$public_dir/local-ca.der" \
    "$public_dir/local-ca.mobileconfig" "$server_cert"

printf '\nCertificates are ready for https://%s\n' "$app_hostname"
printf 'Install the public CA from http://%s/certificate-setup.php before opening HTTPS.\n' "$app_hostname"
