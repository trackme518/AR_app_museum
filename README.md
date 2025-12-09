# AR app guide for Museum of Prague

## Technology stack
The goal is to create an web based web XR app optimized for ipad 11 (mobile device with a browser), that will spawn virtual personas. These personas are anchored in the real world and rendered as 2.5D animated billboarads (animated texture on the plane always facing a camera). User can have a reealtime conversation with the personas thanks to using LLM API calling local backend running on [LMStudio](https://lmstudio.ai/) with OpenAI compatible completations API. Web app is packaged as a PWA - Progressive Web App.  

## For who?
The app is targeted towards children. Children are organized into groups of 1-3 kids that get assigned different virtual personas. Their task it to get an information from the personas that is vital to solving a puzzle. Each group needs to put their finding together to solve the puzzle.

## Why?
We want to engage children in critical thinking, provide multimodal interaction, multi-user collaboration and incorporate modern technology in the experience to show other uses for it then just passive consumption. The end goal is education rooted in the current exhbition theme. 

## Team
* Programming, software engineering
  * Ondřej Sýkora, bachelor student at ČVUT FEL
* Educational supervision, cognitive psychology and text content
  * Eliška Krahulíková
* Graphics
  * ???
* Technical Supervision, project coordination
  * MgA. Vojtěch Leischner, PhD.

server {
    listen 443 ssl;
    server_name 192.168.100.9 localhost 127.0.0.1;

    ssl_certificate /etc/nginx/ssl/192.168.100.9.pem;
    ssl_certificate_key /etc/nginx/ssl/192.168.100.9-key.pem;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_buffering off;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:1234/;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_buffering off;

        add_header Access-Control-Allow-Origin "*" always;
        add_header Access-Control-Allow-Methods "GET, POST, OPTIONS" always;
        add_header Access-Control-Allow-Headers "Content-Type, Authorization" always;

        if ($request_method = OPTIONS) {
            return 204;
        }
    }
}
