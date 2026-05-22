const gi = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, _i = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, $u = 0, rc = 1, ed = 2, gp = 3, _p = 0, qc = 1, td = 2, un = 3, gn = 0, It = 1, tn = 2, yp = 2, In = 0, Ti = 1, oc = 2, ac = 3, cc = 4, nd = 5, xi = 100, id = 101, sd = 102, lc = 103, hc = 104, rd = 200, od = 201, ad = 202, cd = 203, Yc = 204, Kc = 205, ld = 206, hd = 207, ud = 208, dd = 209, fd = 210, pd = 0, md = 1, gd = 2, Ao = 3, _d = 4, yd = 5, xd = 6, vd = 7, cr = 0, Md = 1, Sd = 2, pn = 0, Ed = 1, bd = 2, Td = 3, Ad = 4, wd = 5, Lo = 300, Zn = 301, Jn = 302, Js = 303, js = 304, Ss = 306, jn = 1e3, bt = 1001, fs = 1002, lt = 1003, Qs = 1004, xp = 1004, ls = 1005, vp = 1005, nt = 1006, Po = 1007, Mp = 1007, _n = 1008, Sp = 1008, Un = 1009, Rd = 1010, Cd = 1011, Io = 1012, Zc = 1013, Ln = 1014, kt = 1015, dn = 1016, Jc = 1017, jc = 1018, Xn = 1020, Ld = 1021, zt = 1023, Pd = 1024, Id = 1025, qn = 1026, Ri = 1027, Ud = 1028, Qc = 1029, Dd = 1030, $c = 1031, el = 1033, yo = 33776, xo = 33777, vo = 33778, Mo = 33779, uc = 35840, dc = 35841, fc = 35842, pc = 35843, Nd = 36196, mc = 37492, gc = 37496, _c = 37808, yc = 37809, xc = 37810, vc = 37811, Mc = 37812, Sc = 37813, Ec = 37814, bc = 37815, Tc = 37816, Ac = 37817, wc = 37818, Rc = 37819, Cc = 37820, Lc = 37821, So = 36492, Od = 36283, Pc = 36284, Ic = 36285, Uc = 36286, Fd = 2200, Bd = 2201, zd = 2202, ps = 2300, Ci = 2301, Eo = 2302, Mi = 2400, Si = 2401, $s = 2402, Uo = 2500, tl = 2501, kd = 0, nl = 1, wo = 2, il = 3e3, Yn = 3001, Hd = 3200, Gd = 3201, ei = 0, Vd = 1, Kn = "", De = "srgb", Kt = "srgb-linear", sl = "display-p3", Ep = 0, bo = 7680, bp = 7681, Tp = 7682, Ap = 7683, wp = 34055, Rp = 34056, Cp = 5386, Lp = 512, Pp = 513, Ip = 514, Up = 515, Dp = 516, Np = 517, Op = 518, Wd = 519, Xd = 512, qd = 513, Yd = 514, Kd = 515, Zd = 516, Jd = 517, jd = 518, Qd = 519, er = 35044, Fp = 35048, Bp = 35040, zp = 35045, kp = 35049, Hp = 35041, Gp = 35046, Vp = 35050, Wp = 35042, Xp = "100", Dc = "300 es", Ro = 1035, fn = 2e3, tr = 2001;
class xn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, o = i.length; s < o; s++)
        i[s].call(this, e);
      e.target = null;
    }
  }
}
const Tt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Xl = 1234567;
const Ai = Math.PI / 180, ms = 180 / Math.PI;
function Vt() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Tt[r & 255] + Tt[r >> 8 & 255] + Tt[r >> 16 & 255] + Tt[r >> 24 & 255] + "-" + Tt[e & 255] + Tt[e >> 8 & 255] + "-" + Tt[e >> 16 & 15 | 64] + Tt[e >> 24 & 255] + "-" + Tt[t & 63 | 128] + Tt[t >> 8 & 255] + "-" + Tt[t >> 16 & 255] + Tt[t >> 24 & 255] + Tt[n & 255] + Tt[n >> 8 & 255] + Tt[n >> 16 & 255] + Tt[n >> 24 & 255]).toLowerCase();
}
function ht(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function rl(r, e) {
  return (r % e + e) % e;
}
function qp(r, e, t, n, i) {
  return n + (r - e) * (i - n) / (t - e);
}
function Yp(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function qs(r, e, t) {
  return (1 - t) * r + t * e;
}
function Kp(r, e, t, n) {
  return qs(r, e, 1 - Math.exp(-t * n));
}
function Zp(r, e = 1) {
  return e - Math.abs(rl(r, e * 2) - e);
}
function Jp(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
}
function jp(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
}
function Qp(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function $p(r, e) {
  return r + Math.random() * (e - r);
}
function em(r) {
  return r * (0.5 - Math.random());
}
function tm(r) {
  r !== void 0 && (Xl = r);
  let e = Xl += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function nm(r) {
  return r * Ai;
}
function im(r) {
  return r * ms;
}
function Nc(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function $d(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function Co(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function sm(r, e, t, n, i) {
  const s = Math.cos, o = Math.sin, a = s(t / 2), c = o(t / 2), l = s((e + n) / 2), h = o((e + n) / 2), u = s((e - n) / 2), d = o((e - n) / 2), f = s((n - e) / 2), m = o((n - e) / 2);
  switch (i) {
    case "XYX":
      r.set(a * h, c * u, c * d, a * l);
      break;
    case "YZY":
      r.set(c * d, a * h, c * u, a * l);
      break;
    case "ZXZ":
      r.set(c * u, c * d, a * h, a * l);
      break;
    case "XZX":
      r.set(a * h, c * m, c * f, a * l);
      break;
    case "YXY":
      r.set(c * f, a * h, c * m, a * l);
      break;
    case "ZYZ":
      r.set(c * m, c * f, a * h, a * l);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function Ht(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Ge(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const ef = {
  DEG2RAD: Ai,
  RAD2DEG: ms,
  generateUUID: Vt,
  clamp: ht,
  euclideanModulo: rl,
  mapLinear: qp,
  inverseLerp: Yp,
  lerp: qs,
  damp: Kp,
  pingpong: Zp,
  smoothstep: Jp,
  smootherstep: jp,
  randInt: Qp,
  randFloat: $p,
  randFloatSpread: em,
  seededRandom: tm,
  degToRad: nm,
  radToDeg: im,
  isPowerOfTwo: Nc,
  ceilPowerOfTwo: $d,
  floorPowerOfTwo: Co,
  setQuaternionFromProperEuler: sm,
  normalize: Ge,
  denormalize: Ht
};
class Z {
  constructor(e = 0, t = 0) {
    Z.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ht(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, o = this.y - e.y;
    return this.x = s * n - o * i + e.x, this.y = s * i + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class He {
  constructor(e, t, n, i, s, o, a, c, l) {
    He.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, o, a, c, l);
  }
  set(e, t, n, i, s, o, a, c, l) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = a, h[3] = t, h[4] = s, h[5] = c, h[6] = n, h[7] = o, h[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, o = n[0], a = n[3], c = n[6], l = n[1], h = n[4], u = n[7], d = n[2], f = n[5], m = n[8], y = i[0], g = i[3], p = i[6], x = i[1], _ = i[4], v = i[7], S = i[2], E = i[5], T = i[8];
    return s[0] = o * y + a * x + c * S, s[3] = o * g + a * _ + c * E, s[6] = o * p + a * v + c * T, s[1] = l * y + h * x + u * S, s[4] = l * g + h * _ + u * E, s[7] = l * p + h * v + u * T, s[2] = d * y + f * x + m * S, s[5] = d * g + f * _ + m * E, s[8] = d * p + f * v + m * T, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8];
    return t * o * h - t * a * l - n * s * h + n * a * c + i * s * l - i * o * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], u = h * o - a * l, d = a * c - h * s, f = l * s - o * c, m = t * u + n * d + i * f;
    if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const y = 1 / m;
    return e[0] = u * y, e[1] = (i * l - h * n) * y, e[2] = (a * n - i * o) * y, e[3] = d * y, e[4] = (h * t - i * c) * y, e[5] = (i * s - a * t) * y, e[6] = f * y, e[7] = (n * c - l * t) * y, e[8] = (o * t - n * s) * y, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, s, o, a) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * o + l * a) + o + e,
      -i * l,
      i * c,
      -i * (-l * o + c * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(Qo.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Qo.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Qo.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Qo = /* @__PURE__ */ new He();
function tf(r) {
  for (let e = r.length - 1; e >= 0; --e)
    if (r[e] >= 65535) return !0;
  return !1;
}
const rm = {
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
};
function os(r, e) {
  return new rm[r](e);
}
function nr(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
const ql = {};
function Ys(r) {
  r in ql || (ql[r] = !0, console.warn(r));
}
function hs(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function $o(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
const om = /* @__PURE__ */ new He().fromArray([
  0.8224621,
  0.0331941,
  0.0170827,
  0.177538,
  0.9668058,
  0.0723974,
  -1e-7,
  1e-7,
  0.9105199
]), am = /* @__PURE__ */ new He().fromArray([
  1.2249401,
  -0.0420569,
  -0.0196376,
  -0.2249404,
  1.0420571,
  -0.0786361,
  1e-7,
  0,
  1.0982735
]);
function cm(r) {
  return r.convertSRGBToLinear().applyMatrix3(am);
}
function lm(r) {
  return r.applyMatrix3(om).convertLinearToSRGB();
}
const hm = {
  [Kt]: (r) => r,
  [De]: (r) => r.convertSRGBToLinear(),
  [sl]: cm
}, um = {
  [Kt]: (r) => r,
  [De]: (r) => r.convertLinearToSRGB(),
  [sl]: lm
}, Xt = {
  enabled: !0,
  get legacyMode() {
    return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), !this.enabled;
  },
  set legacyMode(r) {
    console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), this.enabled = !r;
  },
  get workingColorSpace() {
    return Kt;
  },
  set workingColorSpace(r) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(r, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return r;
    const n = hm[e], i = um[t];
    if (n === void 0 || i === void 0)
      throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);
    return i(n(r));
  },
  fromWorkingColorSpace: function(r, e) {
    return this.convert(r, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(r, e) {
    return this.convert(r, e, this.workingColorSpace);
  }
};
let Fi;
class ol {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Fi === void 0 && (Fi = nr("canvas")), Fi.width = e.width, Fi.height = e.height;
      const n = Fi.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Fi;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = nr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let o = 0; o < s.length; o++)
        s[o] = hs(s[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(hs(t[n] / 255) * 255) : t[n] = hs(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let dm = 0;
class Ei {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: dm++ }), this.uuid = Vt(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let o = 0, a = i.length; o < a; o++)
          i[o].isDataTexture ? s.push(ea(i[o].image)) : s.push(ea(i[o]));
      } else
        s = ea(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function ea(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? ol.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let fm = 0;
class rt extends xn {
  constructor(e = rt.DEFAULT_IMAGE, t = rt.DEFAULT_MAPPING, n = bt, i = bt, s = nt, o = _n, a = zt, c = Un, l = rt.DEFAULT_ANISOTROPY, h = Kn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: fm++ }), this.uuid = Vt(), this.name = "", this.source = new Ei(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new Z(0, 0), this.repeat = new Z(1, 1), this.center = new Z(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new He(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = h === Yn ? De : Kn), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Lo) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case jn:
          e.x = e.x - Math.floor(e.x);
          break;
        case bt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case fs:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case jn:
          e.y = e.y - Math.floor(e.y);
          break;
        case bt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case fs:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === De ? Yn : il;
  }
  set encoding(e) {
    Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === Yn ? De : Kn;
  }
}
rt.DEFAULT_IMAGE = null;
rt.DEFAULT_MAPPING = Lo;
rt.DEFAULT_ANISOTROPY = 1;
class et {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    et.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * s, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * s, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * s, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const c = e.elements, l = c[0], h = c[4], u = c[8], d = c[1], f = c[5], m = c[9], y = c[2], g = c[6], p = c[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - y) < 0.01 && Math.abs(m - g) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + y) < 0.1 && Math.abs(m + g) < 0.1 && Math.abs(l + f + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const _ = (l + 1) / 2, v = (f + 1) / 2, S = (p + 1) / 2, E = (h + d) / 4, T = (u + y) / 4, A = (m + g) / 4;
      return _ > v && _ > S ? _ < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(_), i = E / n, s = T / n) : v > S ? v < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(v), n = E / i, s = A / i) : S < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(S), n = T / s, i = A / s), this.set(n, i, s, t), this;
    }
    let x = Math.sqrt((g - m) * (g - m) + (u - y) * (u - y) + (d - h) * (d - h));
    return Math.abs(x) < 1e-3 && (x = 1), this.x = (g - m) / x, this.y = (u - y) / x, this.z = (d - h) / x, this.w = Math.acos((l + f + p - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class nn extends xn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new et(0, 0, e, t), this.scissorTest = !1, this.viewport = new et(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (Ys("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === Yn ? De : Kn), this.texture = new rt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : nt, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Ei(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Do extends rt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = lt, this.minFilter = lt, this.wrapR = bt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class pm extends nn {
  constructor(e = 1, t = 1, n = 1) {
    super(e, t), this.isWebGLArrayRenderTarget = !0, this.depth = n, this.texture = new Do(null, e, t, n), this.texture.isRenderTargetTexture = !0;
  }
}
class al extends rt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = lt, this.minFilter = lt, this.wrapR = bt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class mm extends nn {
  constructor(e = 1, t = 1, n = 1) {
    super(e, t), this.isWebGL3DRenderTarget = !0, this.depth = n, this.texture = new al(null, e, t, n), this.texture.isRenderTargetTexture = !0;
  }
}
class gm extends nn {
  constructor(e = 1, t = 1, n = 1, i = {}) {
    super(e, t, i), this.isWebGLMultipleRenderTargets = !0;
    const s = this.texture;
    this.texture = [];
    for (let o = 0; o < n; o++)
      this.texture[o] = s.clone(), this.texture[o].isRenderTargetTexture = !0;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let i = 0, s = this.texture.length; i < s; i++)
        this.texture[i].image.width = e, this.texture[i].image.height = t, this.texture[i].image.depth = n;
      this.dispose();
    }
    return this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t), this;
  }
  copy(e) {
    this.dispose(), this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.texture.length = 0;
    for (let t = 0, n = e.texture.length; t < n; t++)
      this.texture[t] = e.texture[t].clone(), this.texture[t].isRenderTargetTexture = !0;
    return this;
  }
}
class Et {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, o, a) {
    let c = n[i + 0], l = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = s[o + 0], f = s[o + 1], m = s[o + 2], y = s[o + 3];
    if (a === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (a === 1) {
      e[t + 0] = d, e[t + 1] = f, e[t + 2] = m, e[t + 3] = y;
      return;
    }
    if (u !== y || c !== d || l !== f || h !== m) {
      let g = 1 - a;
      const p = c * d + l * f + h * m + u * y, x = p >= 0 ? 1 : -1, _ = 1 - p * p;
      if (_ > Number.EPSILON) {
        const S = Math.sqrt(_), E = Math.atan2(S, p * x);
        g = Math.sin(g * E) / S, a = Math.sin(a * E) / S;
      }
      const v = a * x;
      if (c = c * g + d * v, l = l * g + f * v, h = h * g + m * v, u = u * g + y * v, g === 1 - a) {
        const S = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
        c *= S, l *= S, h *= S, u *= S;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, o) {
    const a = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], u = s[o], d = s[o + 1], f = s[o + 2], m = s[o + 3];
    return e[t] = a * m + h * u + c * f - l * d, e[t + 1] = c * m + h * d + l * u - a * f, e[t + 2] = l * m + h * f + a * d - c * u, e[t + 3] = h * m - a * u - c * d - l * f, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x, i = e._y, s = e._z, o = e._order, a = Math.cos, c = Math.sin, l = a(n / 2), h = a(i / 2), u = a(s / 2), d = c(n / 2), f = c(i / 2), m = c(s / 2);
    switch (o) {
      case "XYZ":
        this._x = d * h * u + l * f * m, this._y = l * f * u - d * h * m, this._z = l * h * m + d * f * u, this._w = l * h * u - d * f * m;
        break;
      case "YXZ":
        this._x = d * h * u + l * f * m, this._y = l * f * u - d * h * m, this._z = l * h * m - d * f * u, this._w = l * h * u + d * f * m;
        break;
      case "ZXY":
        this._x = d * h * u - l * f * m, this._y = l * f * u + d * h * m, this._z = l * h * m + d * f * u, this._w = l * h * u - d * f * m;
        break;
      case "ZYX":
        this._x = d * h * u - l * f * m, this._y = l * f * u + d * h * m, this._z = l * h * m - d * f * u, this._w = l * h * u + d * f * m;
        break;
      case "YZX":
        this._x = d * h * u + l * f * m, this._y = l * f * u + d * h * m, this._z = l * h * m - d * f * u, this._w = l * h * u - d * f * m;
        break;
      case "XZY":
        this._x = d * h * u - l * f * m, this._y = l * f * u - d * h * m, this._z = l * h * m + d * f * u, this._w = l * h * u + d * f * m;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], o = t[1], a = t[5], c = t[9], l = t[2], h = t[6], u = t[10], d = n + a + u;
    if (d > 0) {
      const f = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / f, this._x = (h - c) * f, this._y = (s - l) * f, this._z = (o - i) * f;
    } else if (n > a && n > u) {
      const f = 2 * Math.sqrt(1 + n - a - u);
      this._w = (h - c) / f, this._x = 0.25 * f, this._y = (i + o) / f, this._z = (s + l) / f;
    } else if (a > u) {
      const f = 2 * Math.sqrt(1 + a - n - u);
      this._w = (s - l) / f, this._x = (i + o) / f, this._y = 0.25 * f, this._z = (c + h) / f;
    } else {
      const f = 2 * Math.sqrt(1 + u - n - a);
      this._w = (o - i) / f, this._x = (s + l) / f, this._y = (c + h) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ht(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, s = e._z, o = e._w, a = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = n * h + o * a + i * l - s * c, this._y = i * h + o * c + s * a - n * l, this._z = s * h + o * l + n * c - i * a, this._w = o * h - n * a - i * c - s * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, s = this._z, o = this._w;
    let a = o * e._w + n * e._x + i * e._y + s * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
      return this._w = o, this._x = n, this._y = i, this._z = s, this;
    const c = 1 - a * a;
    if (c <= Number.EPSILON) {
      const f = 1 - t;
      return this._w = f * o + t * this._w, this._x = f * n + t * this._x, this._y = f * i + t * this._y, this._z = f * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, a), u = Math.sin((1 - t) * h) / l, d = Math.sin(t * h) / l;
    return this._w = o * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = s * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class R {
  constructor(e = 0, t = 0, n = 0) {
    R.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Yl.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Yl.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, o = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * o, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * o, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, o = e.y, a = e.z, c = e.w, l = c * t + o * i - a * n, h = c * n + a * t - s * i, u = c * i + s * n - o * t, d = -s * t - o * n - a * i;
    return this.x = l * c + d * -s + h * -a - u * -o, this.y = h * c + d * -o + u * -s - l * -a, this.z = u * c + d * -a + l * -o - h * -s, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, s = e.z, o = t.x, a = t.y, c = t.z;
    return this.x = i * c - s * a, this.y = s * o - n * c, this.z = n * a - i * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return ta.copy(this).projectOnVector(e), this.sub(ta);
  }
  reflect(e) {
    return this.sub(ta.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ht(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const ta = /* @__PURE__ */ new R(), Yl = /* @__PURE__ */ new Et();
class rn {
  constructor(e = new R(1 / 0, 1 / 0, 1 / 0), t = new R(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(En.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(En.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = En.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    if (e.updateWorldMatrix(!1, !1), e.boundingBox !== void 0)
      e.boundingBox === null && e.computeBoundingBox(), Bi.copy(e.boundingBox), Bi.applyMatrix4(e.matrixWorld), this.union(Bi);
    else {
      const i = e.geometry;
      if (i !== void 0)
        if (t && i.attributes !== void 0 && i.attributes.position !== void 0) {
          const s = i.attributes.position;
          for (let o = 0, a = s.count; o < a; o++)
            En.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld), this.expandByPoint(En);
        } else
          i.boundingBox === null && i.computeBoundingBox(), Bi.copy(i.boundingBox), Bi.applyMatrix4(e.matrixWorld), this.union(Bi);
    }
    const n = e.children;
    for (let i = 0, s = n.length; i < s; i++)
      this.expandByObject(n[i], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, En), En.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Ps), Cr.subVectors(this.max, Ps), zi.subVectors(e.a, Ps), ki.subVectors(e.b, Ps), Hi.subVectors(e.c, Ps), On.subVectors(ki, zi), Fn.subVectors(Hi, ki), oi.subVectors(zi, Hi);
    let t = [
      0,
      -On.z,
      On.y,
      0,
      -Fn.z,
      Fn.y,
      0,
      -oi.z,
      oi.y,
      On.z,
      0,
      -On.x,
      Fn.z,
      0,
      -Fn.x,
      oi.z,
      0,
      -oi.x,
      -On.y,
      On.x,
      0,
      -Fn.y,
      Fn.x,
      0,
      -oi.y,
      oi.x,
      0
    ];
    return !na(t, zi, ki, Hi, Cr) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !na(t, zi, ki, Hi, Cr)) ? !1 : (Lr.crossVectors(On, Fn), t = [Lr.x, Lr.y, Lr.z], na(t, zi, ki, Hi, Cr));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, En).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(En).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Sn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Sn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Sn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Sn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Sn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Sn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Sn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Sn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Sn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Sn = [
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R()
], En = /* @__PURE__ */ new R(), Bi = /* @__PURE__ */ new rn(), zi = /* @__PURE__ */ new R(), ki = /* @__PURE__ */ new R(), Hi = /* @__PURE__ */ new R(), On = /* @__PURE__ */ new R(), Fn = /* @__PURE__ */ new R(), oi = /* @__PURE__ */ new R(), Ps = /* @__PURE__ */ new R(), Cr = /* @__PURE__ */ new R(), Lr = /* @__PURE__ */ new R(), ai = /* @__PURE__ */ new R();
function na(r, e, t, n, i) {
  for (let s = 0, o = r.length - 3; s <= o; s += 3) {
    ai.fromArray(r, s);
    const a = i.x * Math.abs(ai.x) + i.y * Math.abs(ai.y) + i.z * Math.abs(ai.z), c = e.dot(ai), l = t.dot(ai), h = n.dot(ai);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > a)
      return !1;
  }
  return !0;
}
const _m = /* @__PURE__ */ new rn(), Is = /* @__PURE__ */ new R(), ia = /* @__PURE__ */ new R();
class Zt {
  constructor(e = new R(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : _m.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, o = e.length; s < o; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Is.subVectors(e, this.center);
    const t = Is.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Is, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (ia.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Is.copy(e.center).add(ia)), this.expandByPoint(Is.copy(e.center).sub(ia))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const bn = /* @__PURE__ */ new R(), sa = /* @__PURE__ */ new R(), Pr = /* @__PURE__ */ new R(), Bn = /* @__PURE__ */ new R(), ra = /* @__PURE__ */ new R(), Ir = /* @__PURE__ */ new R(), oa = /* @__PURE__ */ new R();
class Es {
  constructor(e = new R(), t = new R(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, bn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = bn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (bn.copy(this.origin).addScaledVector(this.direction, t), bn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    sa.copy(e).add(t).multiplyScalar(0.5), Pr.copy(t).sub(e).normalize(), Bn.copy(this.origin).sub(sa);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(Pr), a = Bn.dot(this.direction), c = -Bn.dot(Pr), l = Bn.lengthSq(), h = Math.abs(1 - o * o);
    let u, d, f, m;
    if (h > 0)
      if (u = o * c - a, d = o * a - c, m = s * h, u >= 0)
        if (d >= -m)
          if (d <= m) {
            const y = 1 / h;
            u *= y, d *= y, f = u * (u + o * d + 2 * a) + d * (o * u + d + 2 * c) + l;
          } else
            d = s, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * c) + l;
        else
          d = -s, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * c) + l;
      else
        d <= -m ? (u = Math.max(0, -(-o * s + a)), d = u > 0 ? -s : Math.min(Math.max(-s, -c), s), f = -u * u + d * (d + 2 * c) + l) : d <= m ? (u = 0, d = Math.min(Math.max(-s, -c), s), f = d * (d + 2 * c) + l) : (u = Math.max(0, -(o * s + a)), d = u > 0 ? s : Math.min(Math.max(-s, -c), s), f = -u * u + d * (d + 2 * c) + l);
    else
      d = o > 0 ? -s : s, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(sa).addScaledVector(Pr, d), f;
  }
  intersectSphere(e, t) {
    bn.subVectors(e.center, this.origin);
    const n = bn.dot(this.direction), i = bn.dot(bn) - n * n, s = e.radius * e.radius;
    if (i > s) return null;
    const o = Math.sqrt(s - i), a = n - o, c = n + o;
    return c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, o, a, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (n = (e.min.x - d.x) * l, i = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l, i = (e.min.x - d.x) * l), h >= 0 ? (s = (e.min.y - d.y) * h, o = (e.max.y - d.y) * h) : (s = (e.max.y - d.y) * h, o = (e.min.y - d.y) * h), n > o || s > i || ((s > n || isNaN(n)) && (n = s), (o < i || isNaN(i)) && (i = o), u >= 0 ? (a = (e.min.z - d.z) * u, c = (e.max.z - d.z) * u) : (a = (e.max.z - d.z) * u, c = (e.min.z - d.z) * u), n > c || a > i) || ((a > n || n !== n) && (n = a), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, bn) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    ra.subVectors(t, e), Ir.subVectors(n, e), oa.crossVectors(ra, Ir);
    let o = this.direction.dot(oa), a;
    if (o > 0) {
      if (i) return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    Bn.subVectors(this.origin, e);
    const c = a * this.direction.dot(Ir.crossVectors(Bn, Ir));
    if (c < 0)
      return null;
    const l = a * this.direction.dot(ra.cross(Bn));
    if (l < 0 || c + l > o)
      return null;
    const h = -a * Bn.dot(oa);
    return h < 0 ? null : this.at(h / o, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ne {
  constructor(e, t, n, i, s, o, a, c, l, h, u, d, f, m, y, g) {
    Ne.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, o, a, c, l, h, u, d, f, m, y, g);
  }
  set(e, t, n, i, s, o, a, c, l, h, u, d, f, m, y, g) {
    const p = this.elements;
    return p[0] = e, p[4] = t, p[8] = n, p[12] = i, p[1] = s, p[5] = o, p[9] = a, p[13] = c, p[2] = l, p[6] = h, p[10] = u, p[14] = d, p[3] = f, p[7] = m, p[11] = y, p[15] = g, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Ne().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / Gi.setFromMatrixColumn(e, 0).length(), s = 1 / Gi.setFromMatrixColumn(e, 1).length(), o = 1 / Gi.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const d = o * h, f = o * u, m = a * h, y = a * u;
      t[0] = c * h, t[4] = -c * u, t[8] = l, t[1] = f + m * l, t[5] = d - y * l, t[9] = -a * c, t[2] = y - d * l, t[6] = m + f * l, t[10] = o * c;
    } else if (e.order === "YXZ") {
      const d = c * h, f = c * u, m = l * h, y = l * u;
      t[0] = d + y * a, t[4] = m * a - f, t[8] = o * l, t[1] = o * u, t[5] = o * h, t[9] = -a, t[2] = f * a - m, t[6] = y + d * a, t[10] = o * c;
    } else if (e.order === "ZXY") {
      const d = c * h, f = c * u, m = l * h, y = l * u;
      t[0] = d - y * a, t[4] = -o * u, t[8] = m + f * a, t[1] = f + m * a, t[5] = o * h, t[9] = y - d * a, t[2] = -o * l, t[6] = a, t[10] = o * c;
    } else if (e.order === "ZYX") {
      const d = o * h, f = o * u, m = a * h, y = a * u;
      t[0] = c * h, t[4] = m * l - f, t[8] = d * l + y, t[1] = c * u, t[5] = y * l + d, t[9] = f * l - m, t[2] = -l, t[6] = a * c, t[10] = o * c;
    } else if (e.order === "YZX") {
      const d = o * c, f = o * l, m = a * c, y = a * l;
      t[0] = c * h, t[4] = y - d * u, t[8] = m * u + f, t[1] = u, t[5] = o * h, t[9] = -a * h, t[2] = -l * h, t[6] = f * u + m, t[10] = d - y * u;
    } else if (e.order === "XZY") {
      const d = o * c, f = o * l, m = a * c, y = a * l;
      t[0] = c * h, t[4] = -u, t[8] = l * h, t[1] = d * u + y, t[5] = o * h, t[9] = f * u - m, t[2] = m * u - f, t[6] = a * h, t[10] = y * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(ym, e, xm);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Ft.subVectors(e, t), Ft.lengthSq() === 0 && (Ft.z = 1), Ft.normalize(), zn.crossVectors(n, Ft), zn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ft.x += 1e-4 : Ft.z += 1e-4, Ft.normalize(), zn.crossVectors(n, Ft)), zn.normalize(), Ur.crossVectors(Ft, zn), i[0] = zn.x, i[4] = Ur.x, i[8] = Ft.x, i[1] = zn.y, i[5] = Ur.y, i[9] = Ft.y, i[2] = zn.z, i[6] = Ur.z, i[10] = Ft.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, o = n[0], a = n[4], c = n[8], l = n[12], h = n[1], u = n[5], d = n[9], f = n[13], m = n[2], y = n[6], g = n[10], p = n[14], x = n[3], _ = n[7], v = n[11], S = n[15], E = i[0], T = i[4], A = i[8], M = i[12], b = i[1], P = i[5], F = i[9], D = i[13], N = i[2], B = i[6], J = i[10], W = i[14], X = i[3], Q = i[7], te = i[11], ue = i[15];
    return s[0] = o * E + a * b + c * N + l * X, s[4] = o * T + a * P + c * B + l * Q, s[8] = o * A + a * F + c * J + l * te, s[12] = o * M + a * D + c * W + l * ue, s[1] = h * E + u * b + d * N + f * X, s[5] = h * T + u * P + d * B + f * Q, s[9] = h * A + u * F + d * J + f * te, s[13] = h * M + u * D + d * W + f * ue, s[2] = m * E + y * b + g * N + p * X, s[6] = m * T + y * P + g * B + p * Q, s[10] = m * A + y * F + g * J + p * te, s[14] = m * M + y * D + g * W + p * ue, s[3] = x * E + _ * b + v * N + S * X, s[7] = x * T + _ * P + v * B + S * Q, s[11] = x * A + _ * F + v * J + S * te, s[15] = x * M + _ * D + v * W + S * ue, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], o = e[1], a = e[5], c = e[9], l = e[13], h = e[2], u = e[6], d = e[10], f = e[14], m = e[3], y = e[7], g = e[11], p = e[15];
    return m * (+s * c * u - i * l * u - s * a * d + n * l * d + i * a * f - n * c * f) + y * (+t * c * f - t * l * d + s * o * d - i * o * f + i * l * h - s * c * h) + g * (+t * l * u - t * a * f - s * o * u + n * o * f + s * a * h - n * l * h) + p * (-i * a * h - t * c * u + t * a * d + i * o * u - n * o * d + n * c * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], u = e[9], d = e[10], f = e[11], m = e[12], y = e[13], g = e[14], p = e[15], x = u * g * l - y * d * l + y * c * f - a * g * f - u * c * p + a * d * p, _ = m * d * l - h * g * l - m * c * f + o * g * f + h * c * p - o * d * p, v = h * y * l - m * u * l + m * a * f - o * y * f - h * a * p + o * u * p, S = m * u * c - h * y * c - m * a * d + o * y * d + h * a * g - o * u * g, E = t * x + n * _ + i * v + s * S;
    if (E === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const T = 1 / E;
    return e[0] = x * T, e[1] = (y * d * s - u * g * s - y * i * f + n * g * f + u * i * p - n * d * p) * T, e[2] = (a * g * s - y * c * s + y * i * l - n * g * l - a * i * p + n * c * p) * T, e[3] = (u * c * s - a * d * s - u * i * l + n * d * l + a * i * f - n * c * f) * T, e[4] = _ * T, e[5] = (h * g * s - m * d * s + m * i * f - t * g * f - h * i * p + t * d * p) * T, e[6] = (m * c * s - o * g * s - m * i * l + t * g * l + o * i * p - t * c * p) * T, e[7] = (o * d * s - h * c * s + h * i * l - t * d * l - o * i * f + t * c * f) * T, e[8] = v * T, e[9] = (m * u * s - h * y * s - m * n * f + t * y * f + h * n * p - t * u * p) * T, e[10] = (o * y * s - m * a * s + m * n * l - t * y * l - o * n * p + t * a * p) * T, e[11] = (h * a * s - o * u * s - h * n * l + t * u * l + o * n * f - t * a * f) * T, e[12] = S * T, e[13] = (h * y * i - m * u * i + m * n * d - t * y * d - h * n * g + t * u * g) * T, e[14] = (m * a * i - o * y * i - m * n * c + t * y * c + o * n * g - t * a * g) * T, e[15] = (o * u * i - h * a * i + h * n * c - t * u * c - o * n * d + t * a * d) * T, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, o = e.x, a = e.y, c = e.z, l = s * o, h = s * a;
    return this.set(
      l * o + n,
      l * a - i * c,
      l * c + i * a,
      0,
      l * a + i * c,
      h * a + n,
      h * c - i * o,
      0,
      l * c - i * a,
      h * c + i * o,
      s * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, s, o) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      o,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, s = t._x, o = t._y, a = t._z, c = t._w, l = s + s, h = o + o, u = a + a, d = s * l, f = s * h, m = s * u, y = o * h, g = o * u, p = a * u, x = c * l, _ = c * h, v = c * u, S = n.x, E = n.y, T = n.z;
    return i[0] = (1 - (y + p)) * S, i[1] = (f + v) * S, i[2] = (m - _) * S, i[3] = 0, i[4] = (f - v) * E, i[5] = (1 - (d + p)) * E, i[6] = (g + x) * E, i[7] = 0, i[8] = (m + _) * T, i[9] = (g - x) * T, i[10] = (1 - (d + y)) * T, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Gi.set(i[0], i[1], i[2]).length();
    const o = Gi.set(i[4], i[5], i[6]).length(), a = Gi.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], jt.copy(this);
    const l = 1 / s, h = 1 / o, u = 1 / a;
    return jt.elements[0] *= l, jt.elements[1] *= l, jt.elements[2] *= l, jt.elements[4] *= h, jt.elements[5] *= h, jt.elements[6] *= h, jt.elements[8] *= u, jt.elements[9] *= u, jt.elements[10] *= u, t.setFromRotationMatrix(jt), n.x = s, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, i, s, o, a = fn) {
    const c = this.elements, l = 2 * s / (t - e), h = 2 * s / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i);
    let f, m;
    if (a === fn)
      f = -(o + s) / (o - s), m = -2 * o * s / (o - s);
    else if (a === tr)
      f = -o / (o - s), m = -o * s / (o - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return c[0] = l, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = h, c[9] = d, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = f, c[14] = m, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, o, a = fn) {
    const c = this.elements, l = 1 / (t - e), h = 1 / (n - i), u = 1 / (o - s), d = (t + e) * l, f = (n + i) * h;
    let m, y;
    if (a === fn)
      m = (o + s) * u, y = -2 * u;
    else if (a === tr)
      m = s * u, y = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -d, c[1] = 0, c[5] = 2 * h, c[9] = 0, c[13] = -f, c[2] = 0, c[6] = 0, c[10] = y, c[14] = -m, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Gi = /* @__PURE__ */ new R(), jt = /* @__PURE__ */ new Ne(), ym = /* @__PURE__ */ new R(0, 0, 0), xm = /* @__PURE__ */ new R(1, 1, 1), zn = /* @__PURE__ */ new R(), Ur = /* @__PURE__ */ new R(), Ft = /* @__PURE__ */ new R(), Kl = /* @__PURE__ */ new Ne(), Zl = /* @__PURE__ */ new Et();
class lr {
  constructor(e = 0, t = 0, n = 0, i = lr.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, s = i[0], o = i[4], a = i[8], c = i[1], l = i[5], h = i[9], u = i[2], d = i[6], f = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(ht(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(d, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ht(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ht(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-ht(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-o, l));
        break;
      case "YZX":
        this._z = Math.asin(ht(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(a, f));
        break;
      case "XZY":
        this._z = Math.asin(-ht(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, f), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Kl.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Kl, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Zl.setFromEuler(this), this.setFromQuaternion(Zl, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
lr.DEFAULT_ORDER = "XYZ";
class No {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let vm = 0;
const Jl = /* @__PURE__ */ new R(), Vi = /* @__PURE__ */ new Et(), Tn = /* @__PURE__ */ new Ne(), Dr = /* @__PURE__ */ new R(), Us = /* @__PURE__ */ new R(), Mm = /* @__PURE__ */ new R(), Sm = /* @__PURE__ */ new Et(), jl = /* @__PURE__ */ new R(1, 0, 0), Ql = /* @__PURE__ */ new R(0, 1, 0), $l = /* @__PURE__ */ new R(0, 0, 1), Em = { type: "added" }, eh = { type: "removed" };
class je extends xn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: vm++ }), this.uuid = Vt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = je.DEFAULT_UP.clone();
    const e = new R(), t = new lr(), n = new Et(), i = new R(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(o), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new Ne()
      },
      normalMatrix: {
        value: new He()
      }
    }), this.matrix = new Ne(), this.matrixWorld = new Ne(), this.matrixAutoUpdate = je.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new No(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Vi.setFromAxisAngle(e, t), this.quaternion.multiply(Vi), this;
  }
  rotateOnWorldAxis(e, t) {
    return Vi.setFromAxisAngle(e, t), this.quaternion.premultiply(Vi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(jl, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ql, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis($l, e);
  }
  translateOnAxis(e, t) {
    return Jl.copy(e).applyQuaternion(this.quaternion), this.position.add(Jl.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(jl, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ql, e);
  }
  translateZ(e) {
    return this.translateOnAxis($l, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Tn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Dr.copy(e) : Dr.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), Us.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Tn.lookAt(Us, Dr, this.up) : Tn.lookAt(Dr, Us, this.up), this.quaternion.setFromRotationMatrix(Tn), i && (Tn.extractRotation(i.matrixWorld), Vi.setFromRotationMatrix(Tn), this.quaternion.premultiply(Vi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Em)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(eh)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(eh);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Tn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Tn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Tn), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0)
        return o;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, s = this.children.length; i < s; i++) {
      const o = this.children[i].getObjectsByProperty(e, t);
      o.length > 0 && (n = n.concat(o));
    }
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Us, e, Mm), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Us, Sm, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let s = 0, o = i.length; s < o; s++) {
        const a = i[s];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function s(a, c) {
      return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const c = a.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const u = c[l];
            s(e.shapes, u);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          a.push(s(e.materials, this.material[c]));
        i.material = a;
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++)
        i.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const c = this.animations[a];
        i.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const a = o(e.geometries), c = o(e.materials), l = o(e.textures), h = o(e.images), u = o(e.shapes), d = o(e.skeletons), f = o(e.animations), m = o(e.nodes);
      a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), f.length > 0 && (n.animations = f), m.length > 0 && (n.nodes = m);
    }
    return n.object = i, n;
    function o(a) {
      const c = [];
      for (const l in a) {
        const h = a[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
je.DEFAULT_UP = /* @__PURE__ */ new R(0, 1, 0);
je.DEFAULT_MATRIX_AUTO_UPDATE = !0;
je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Qt = /* @__PURE__ */ new R(), An = /* @__PURE__ */ new R(), aa = /* @__PURE__ */ new R(), wn = /* @__PURE__ */ new R(), Wi = /* @__PURE__ */ new R(), Xi = /* @__PURE__ */ new R(), th = /* @__PURE__ */ new R(), ca = /* @__PURE__ */ new R(), la = /* @__PURE__ */ new R(), ha = /* @__PURE__ */ new R();
let Nr = !1;
class Dt {
  constructor(e = new R(), t = new R(), n = new R()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Qt.subVectors(e, t), i.cross(Qt);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, s) {
    Qt.subVectors(i, t), An.subVectors(n, t), aa.subVectors(e, t);
    const o = Qt.dot(Qt), a = Qt.dot(An), c = Qt.dot(aa), l = An.dot(An), h = An.dot(aa), u = o * l - a * a;
    if (u === 0)
      return s.set(-2, -1, -1);
    const d = 1 / u, f = (l * c - a * h) * d, m = (o * h - a * c) * d;
    return s.set(1 - f - m, m, f);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, wn), wn.x >= 0 && wn.y >= 0 && wn.x + wn.y <= 1;
  }
  static getUV(e, t, n, i, s, o, a, c) {
    return Nr === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Nr = !0), this.getInterpolation(e, t, n, i, s, o, a, c);
  }
  static getInterpolation(e, t, n, i, s, o, a, c) {
    return this.getBarycoord(e, t, n, i, wn), c.setScalar(0), c.addScaledVector(s, wn.x), c.addScaledVector(o, wn.y), c.addScaledVector(a, wn.z), c;
  }
  static isFrontFacing(e, t, n, i) {
    return Qt.subVectors(n, t), An.subVectors(e, t), Qt.cross(An).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Qt.subVectors(this.c, this.b), An.subVectors(this.a, this.b), Qt.cross(An).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Dt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Dt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return Nr === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Nr = !0), Dt.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  getInterpolation(e, t, n, i, s) {
    return Dt.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return Dt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Dt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let o, a;
    Wi.subVectors(i, n), Xi.subVectors(s, n), ca.subVectors(e, n);
    const c = Wi.dot(ca), l = Xi.dot(ca);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    la.subVectors(e, i);
    const h = Wi.dot(la), u = Xi.dot(la);
    if (h >= 0 && u <= h)
      return t.copy(i);
    const d = c * u - h * l;
    if (d <= 0 && c >= 0 && h <= 0)
      return o = c / (c - h), t.copy(n).addScaledVector(Wi, o);
    ha.subVectors(e, s);
    const f = Wi.dot(ha), m = Xi.dot(ha);
    if (m >= 0 && f <= m)
      return t.copy(s);
    const y = f * l - c * m;
    if (y <= 0 && l >= 0 && m <= 0)
      return a = l / (l - m), t.copy(n).addScaledVector(Xi, a);
    const g = h * m - f * u;
    if (g <= 0 && u - h >= 0 && f - m >= 0)
      return th.subVectors(s, i), a = (u - h) / (u - h + (f - m)), t.copy(i).addScaledVector(th, a);
    const p = 1 / (g + y + d);
    return o = y * p, a = d * p, t.copy(n).addScaledVector(Wi, o).addScaledVector(Xi, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let bm = 0;
class gt extends xn {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: bm++ }), this.uuid = Vt(), this.name = "", this.type = "Material", this.blending = Ti, this.side = gn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = Yc, this.blendDst = Kc, this.blendEquation = xi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Ao, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Wd, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = bo, this.stencilZFail = bo, this.stencilZPass = bo, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Ti && (n.blending = this.blending), this.side !== gn && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const o = [];
      for (const a in s) {
        const c = s[a];
        delete c.metadata, o.push(c);
      }
      return o;
    }
    if (t) {
      const s = i(e.textures), o = i(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
const nf = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, $t = { h: 0, s: 0, l: 0 }, Or = { h: 0, s: 0, l: 0 };
function ua(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
class de {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = De) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Xt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = Xt.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Xt.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = Xt.workingColorSpace) {
    if (e = rl(e, 1), t = ht(t, 0, 1), n = ht(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = ua(o, s, e + 1 / 3), this.g = ua(o, s, e), this.b = ua(o, s, e - 1 / 3);
    }
    return Xt.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = De) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const o = i[1], a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], o = s.length;
      if (o === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (o === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = De) {
    const n = nf[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = hs(e.r), this.g = hs(e.g), this.b = hs(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = $o(e.r), this.g = $o(e.g), this.b = $o(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = De) {
    return Xt.fromWorkingColorSpace(At.copy(this), e), Math.round(ht(At.r * 255, 0, 255)) * 65536 + Math.round(ht(At.g * 255, 0, 255)) * 256 + Math.round(ht(At.b * 255, 0, 255));
  }
  getHexString(e = De) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Xt.workingColorSpace) {
    Xt.fromWorkingColorSpace(At.copy(this), t);
    const n = At.r, i = At.g, s = At.b, o = Math.max(n, i, s), a = Math.min(n, i, s);
    let c, l;
    const h = (a + o) / 2;
    if (a === o)
      c = 0, l = 0;
    else {
      const u = o - a;
      switch (l = h <= 0.5 ? u / (o + a) : u / (2 - o - a), o) {
        case n:
          c = (i - s) / u + (i < s ? 6 : 0);
          break;
        case i:
          c = (s - n) / u + 2;
          break;
        case s:
          c = (n - i) / u + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = h, e;
  }
  getRGB(e, t = Xt.workingColorSpace) {
    return Xt.fromWorkingColorSpace(At.copy(this), t), e.r = At.r, e.g = At.g, e.b = At.b, e;
  }
  getStyle(e = De) {
    Xt.fromWorkingColorSpace(At.copy(this), e);
    const t = At.r, n = At.g, i = At.b;
    return e !== De ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL($t), $t.h += e, $t.s += t, $t.l += n, this.setHSL($t.h, $t.s, $t.l), this;
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL($t), e.getHSL(Or);
    const n = qs($t.h, Or.h, t), i = qs($t.s, Or.s, t), s = qs($t.l, Or.l, t);
    return this.setHSL(n, i, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * i, this.g = s[1] * t + s[4] * n + s[7] * i, this.b = s[2] * t + s[5] * n + s[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const At = /* @__PURE__ */ new de();
de.NAMES = nf;
class Gt extends gt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new de(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = cr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Cn = /* @__PURE__ */ Tm();
function Tm() {
  const r = new ArrayBuffer(4), e = new Float32Array(r), t = new Uint32Array(r), n = new Uint32Array(512), i = new Uint32Array(512);
  for (let c = 0; c < 256; ++c) {
    const l = c - 127;
    l < -27 ? (n[c] = 0, n[c | 256] = 32768, i[c] = 24, i[c | 256] = 24) : l < -14 ? (n[c] = 1024 >> -l - 14, n[c | 256] = 1024 >> -l - 14 | 32768, i[c] = -l - 1, i[c | 256] = -l - 1) : l <= 15 ? (n[c] = l + 15 << 10, n[c | 256] = l + 15 << 10 | 32768, i[c] = 13, i[c | 256] = 13) : l < 128 ? (n[c] = 31744, n[c | 256] = 64512, i[c] = 24, i[c | 256] = 24) : (n[c] = 31744, n[c | 256] = 64512, i[c] = 13, i[c | 256] = 13);
  }
  const s = new Uint32Array(2048), o = new Uint32Array(64), a = new Uint32Array(64);
  for (let c = 1; c < 1024; ++c) {
    let l = c << 13, h = 0;
    for (; (l & 8388608) === 0; )
      l <<= 1, h -= 8388608;
    l &= -8388609, h += 947912704, s[c] = l | h;
  }
  for (let c = 1024; c < 2048; ++c)
    s[c] = 939524096 + (c - 1024 << 13);
  for (let c = 1; c < 31; ++c)
    o[c] = c << 23;
  o[31] = 1199570944, o[32] = 2147483648;
  for (let c = 33; c < 63; ++c)
    o[c] = 2147483648 + (c - 32 << 23);
  o[63] = 3347054592;
  for (let c = 1; c < 64; ++c)
    c !== 32 && (a[c] = 1024);
  return {
    floatView: e,
    uint32View: t,
    baseTable: n,
    shiftTable: i,
    mantissaTable: s,
    exponentTable: o,
    offsetTable: a
  };
}
function Ut(r) {
  Math.abs(r) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), r = ht(r, -65504, 65504), Cn.floatView[0] = r;
  const e = Cn.uint32View[0], t = e >> 23 & 511;
  return Cn.baseTable[t] + ((e & 8388607) >> Cn.shiftTable[t]);
}
function Vs(r) {
  const e = r >> 10;
  return Cn.uint32View[0] = Cn.mantissaTable[Cn.offsetTable[e] + (r & 1023)] + Cn.exponentTable[e], Cn.floatView[0];
}
const Ws = {
  toHalfFloat: Ut,
  fromHalfFloat: Vs
}, mt = /* @__PURE__ */ new R(), Fr = /* @__PURE__ */ new Z();
class $e {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = er, this.updateRange = { offset: 0, count: -1 }, this.gpuType = kt, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Fr.fromBufferAttribute(this, t), Fr.applyMatrix3(e), this.setXY(t, Fr.x, Fr.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        mt.fromBufferAttribute(this, t), mt.applyMatrix3(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      mt.fromBufferAttribute(this, t), mt.applyMatrix4(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      mt.fromBufferAttribute(this, t), mt.applyNormalMatrix(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      mt.fromBufferAttribute(this, t), mt.transformDirection(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Ge(t, this.array), n = Ge(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Ge(t, this.array), n = Ge(n, this.array), i = Ge(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = Ge(t, this.array), n = Ge(n, this.array), i = Ge(i, this.array), s = Ge(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== er && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class Am extends $e {
  constructor(e, t, n) {
    super(new Int8Array(e), t, n);
  }
}
class wm extends $e {
  constructor(e, t, n) {
    super(new Uint8Array(e), t, n);
  }
}
class Rm extends $e {
  constructor(e, t, n) {
    super(new Uint8ClampedArray(e), t, n);
  }
}
class Cm extends $e {
  constructor(e, t, n) {
    super(new Int16Array(e), t, n);
  }
}
class cl extends $e {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Lm extends $e {
  constructor(e, t, n) {
    super(new Int32Array(e), t, n);
  }
}
class ll extends $e {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Pm extends $e {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n), this.isFloat16BufferAttribute = !0;
  }
  getX(e) {
    let t = Vs(this.array[e * this.itemSize]);
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.array[e * this.itemSize] = Ut(t), this;
  }
  getY(e) {
    let t = Vs(this.array[e * this.itemSize + 1]);
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.array[e * this.itemSize + 1] = Ut(t), this;
  }
  getZ(e) {
    let t = Vs(this.array[e * this.itemSize + 2]);
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.array[e * this.itemSize + 2] = Ut(t), this;
  }
  getW(e) {
    let t = Vs(this.array[e * this.itemSize + 3]);
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.array[e * this.itemSize + 3] = Ut(t), this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Ge(t, this.array), n = Ge(n, this.array)), this.array[e + 0] = Ut(t), this.array[e + 1] = Ut(n), this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Ge(t, this.array), n = Ge(n, this.array), i = Ge(i, this.array)), this.array[e + 0] = Ut(t), this.array[e + 1] = Ut(n), this.array[e + 2] = Ut(i), this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = Ge(t, this.array), n = Ge(n, this.array), i = Ge(i, this.array), s = Ge(s, this.array)), this.array[e + 0] = Ut(t), this.array[e + 1] = Ut(n), this.array[e + 2] = Ut(i), this.array[e + 3] = Ut(s), this;
  }
}
class be extends $e {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
class Im extends $e {
  constructor(e, t, n) {
    super(new Float64Array(e), t, n);
  }
}
let Um = 0;
const Wt = /* @__PURE__ */ new Ne(), da = /* @__PURE__ */ new je(), qi = /* @__PURE__ */ new R(), Bt = /* @__PURE__ */ new rn(), Ds = /* @__PURE__ */ new rn(), vt = /* @__PURE__ */ new R();
class Ve extends xn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Um++ }), this.uuid = Vt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (tf(e) ? ll : cl)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new He().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Wt.makeRotationFromQuaternion(e), this.applyMatrix4(Wt), this;
  }
  rotateX(e) {
    return Wt.makeRotationX(e), this.applyMatrix4(Wt), this;
  }
  rotateY(e) {
    return Wt.makeRotationY(e), this.applyMatrix4(Wt), this;
  }
  rotateZ(e) {
    return Wt.makeRotationZ(e), this.applyMatrix4(Wt), this;
  }
  translate(e, t, n) {
    return Wt.makeTranslation(e, t, n), this.applyMatrix4(Wt), this;
  }
  scale(e, t, n) {
    return Wt.makeScale(e, t, n), this.applyMatrix4(Wt), this;
  }
  lookAt(e) {
    return da.lookAt(e), da.updateMatrix(), this.applyMatrix4(da.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(qi).negate(), this.translate(qi.x, qi.y, qi.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new be(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new rn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new R(-1 / 0, -1 / 0, -1 / 0),
        new R(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          Bt.setFromBufferAttribute(s), this.morphTargetsRelative ? (vt.addVectors(this.boundingBox.min, Bt.min), this.boundingBox.expandByPoint(vt), vt.addVectors(this.boundingBox.max, Bt.max), this.boundingBox.expandByPoint(vt)) : (this.boundingBox.expandByPoint(Bt.min), this.boundingBox.expandByPoint(Bt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Zt());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Bt.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          Ds.setFromBufferAttribute(a), this.morphTargetsRelative ? (vt.addVectors(Bt.min, Ds.min), Bt.expandByPoint(vt), vt.addVectors(Bt.max, Ds.max), Bt.expandByPoint(vt)) : (Bt.expandByPoint(Ds.min), Bt.expandByPoint(Ds.max));
        }
      Bt.getCenter(n);
      let i = 0;
      for (let s = 0, o = e.count; s < o; s++)
        vt.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(vt));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s], c = this.morphTargetsRelative;
          for (let l = 0, h = a.count; l < h; l++)
            vt.fromBufferAttribute(a, l), c && (qi.fromBufferAttribute(e, l), vt.add(qi)), i = Math.max(i, n.distanceToSquared(vt));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, s = t.normal.array, o = t.uv.array, a = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new $e(new Float32Array(4 * a), 4));
    const c = this.getAttribute("tangent").array, l = [], h = [];
    for (let b = 0; b < a; b++)
      l[b] = new R(), h[b] = new R();
    const u = new R(), d = new R(), f = new R(), m = new Z(), y = new Z(), g = new Z(), p = new R(), x = new R();
    function _(b, P, F) {
      u.fromArray(i, b * 3), d.fromArray(i, P * 3), f.fromArray(i, F * 3), m.fromArray(o, b * 2), y.fromArray(o, P * 2), g.fromArray(o, F * 2), d.sub(u), f.sub(u), y.sub(m), g.sub(m);
      const D = 1 / (y.x * g.y - g.x * y.y);
      isFinite(D) && (p.copy(d).multiplyScalar(g.y).addScaledVector(f, -y.y).multiplyScalar(D), x.copy(f).multiplyScalar(y.x).addScaledVector(d, -g.x).multiplyScalar(D), l[b].add(p), l[P].add(p), l[F].add(p), h[b].add(x), h[P].add(x), h[F].add(x));
    }
    let v = this.groups;
    v.length === 0 && (v = [{
      start: 0,
      count: n.length
    }]);
    for (let b = 0, P = v.length; b < P; ++b) {
      const F = v[b], D = F.start, N = F.count;
      for (let B = D, J = D + N; B < J; B += 3)
        _(
          n[B + 0],
          n[B + 1],
          n[B + 2]
        );
    }
    const S = new R(), E = new R(), T = new R(), A = new R();
    function M(b) {
      T.fromArray(s, b * 3), A.copy(T);
      const P = l[b];
      S.copy(P), S.sub(T.multiplyScalar(T.dot(P))).normalize(), E.crossVectors(A, P);
      const D = E.dot(h[b]) < 0 ? -1 : 1;
      c[b * 4] = S.x, c[b * 4 + 1] = S.y, c[b * 4 + 2] = S.z, c[b * 4 + 3] = D;
    }
    for (let b = 0, P = v.length; b < P; ++b) {
      const F = v[b], D = F.start, N = F.count;
      for (let B = D, J = D + N; B < J; B += 3)
        M(n[B + 0]), M(n[B + 1]), M(n[B + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new $e(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, f = n.count; d < f; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new R(), s = new R(), o = new R(), a = new R(), c = new R(), l = new R(), h = new R(), u = new R();
      if (e)
        for (let d = 0, f = e.count; d < f; d += 3) {
          const m = e.getX(d + 0), y = e.getX(d + 1), g = e.getX(d + 2);
          i.fromBufferAttribute(t, m), s.fromBufferAttribute(t, y), o.fromBufferAttribute(t, g), h.subVectors(o, s), u.subVectors(i, s), h.cross(u), a.fromBufferAttribute(n, m), c.fromBufferAttribute(n, y), l.fromBufferAttribute(n, g), a.add(h), c.add(h), l.add(h), n.setXYZ(m, a.x, a.y, a.z), n.setXYZ(y, c.x, c.y, c.z), n.setXYZ(g, l.x, l.y, l.z);
        }
      else
        for (let d = 0, f = t.count; d < f; d += 3)
          i.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), h.subVectors(o, s), u.subVectors(i, s), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."), this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      vt.fromBufferAttribute(e, t), vt.normalize(), e.setXYZ(t, vt.x, vt.y, vt.z);
  }
  toNonIndexed() {
    function e(a, c) {
      const l = a.array, h = a.itemSize, u = a.normalized, d = new l.constructor(c.length * h);
      let f = 0, m = 0;
      for (let y = 0, g = c.length; y < g; y++) {
        a.isInterleavedBufferAttribute ? f = c[y] * a.data.stride + a.offset : f = c[y] * h;
        for (let p = 0; p < h; p++)
          d[m++] = l[f++];
      }
      return new $e(d, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Ve(), n = this.index.array, i = this.attributes;
    for (const a in i) {
      const c = i[a], l = e(c, n);
      t.setAttribute(a, l);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const c = [], l = s[a];
      for (let h = 0, u = l.length; h < u; h++) {
        const d = l[h], f = e(d, n);
        c.push(f);
      }
      t.morphAttributes[a] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, c = o.length; a < c; a++) {
      const l = o[a];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let u = 0, d = l.length; u < d; u++) {
        const f = l[u];
        h.push(f.toJSON(e.data));
      }
      h.length > 0 && (i[c] = h, s = !0);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const h = i[l];
      this.setAttribute(l, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const h = [], u = s[l];
      for (let d = 0, f = u.length; d < f; d++)
        h.push(u[d].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let l = 0, h = o.length; l < h; l++) {
      const u = o[l];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const nh = /* @__PURE__ */ new Ne(), ci = /* @__PURE__ */ new Es(), Br = /* @__PURE__ */ new Zt(), ih = /* @__PURE__ */ new R(), Yi = /* @__PURE__ */ new R(), Ki = /* @__PURE__ */ new R(), Zi = /* @__PURE__ */ new R(), fa = /* @__PURE__ */ new R(), zr = /* @__PURE__ */ new R(), kr = /* @__PURE__ */ new Z(), Hr = /* @__PURE__ */ new Z(), Gr = /* @__PURE__ */ new Z(), sh = /* @__PURE__ */ new R(), rh = /* @__PURE__ */ new R(), oh = /* @__PURE__ */ new R(), Vr = /* @__PURE__ */ new R(), Wr = /* @__PURE__ */ new R();
class St extends je {
  constructor(e = new Ve(), t = new Gt()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      zr.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = a[c], u = s[c];
        h !== 0 && (fa.fromBufferAttribute(u, e), o ? zr.addScaledVector(fa, h) : zr.addScaledVector(fa.sub(t), h));
      }
      t.add(zr);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Br.copy(n.boundingSphere), Br.applyMatrix4(s), ci.copy(e.ray).recast(e.near), !(Br.containsPoint(ci.origin) === !1 && (ci.intersectSphere(Br, ih) === null || ci.origin.distanceToSquared(ih) > (e.far - e.near) ** 2)) && (nh.copy(s).invert(), ci.copy(e.ray).applyMatrix4(nh), !(n.boundingBox !== null && ci.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, ci)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const s = this.geometry, o = this.material, a = s.index, c = s.attributes.position, l = s.attributes.uv, h = s.attributes.uv1, u = s.attributes.normal, d = s.groups, f = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let m = 0, y = d.length; m < y; m++) {
          const g = d[m], p = o[g.materialIndex], x = Math.max(g.start, f.start), _ = Math.min(a.count, Math.min(g.start + g.count, f.start + f.count));
          for (let v = x, S = _; v < S; v += 3) {
            const E = a.getX(v), T = a.getX(v + 1), A = a.getX(v + 2);
            i = Xr(this, p, e, n, l, h, u, E, T, A), i && (i.faceIndex = Math.floor(v / 3), i.face.materialIndex = g.materialIndex, t.push(i));
          }
        }
      else {
        const m = Math.max(0, f.start), y = Math.min(a.count, f.start + f.count);
        for (let g = m, p = y; g < p; g += 3) {
          const x = a.getX(g), _ = a.getX(g + 1), v = a.getX(g + 2);
          i = Xr(this, o, e, n, l, h, u, x, _, v), i && (i.faceIndex = Math.floor(g / 3), t.push(i));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(o))
        for (let m = 0, y = d.length; m < y; m++) {
          const g = d[m], p = o[g.materialIndex], x = Math.max(g.start, f.start), _ = Math.min(c.count, Math.min(g.start + g.count, f.start + f.count));
          for (let v = x, S = _; v < S; v += 3) {
            const E = v, T = v + 1, A = v + 2;
            i = Xr(this, p, e, n, l, h, u, E, T, A), i && (i.faceIndex = Math.floor(v / 3), i.face.materialIndex = g.materialIndex, t.push(i));
          }
        }
      else {
        const m = Math.max(0, f.start), y = Math.min(c.count, f.start + f.count);
        for (let g = m, p = y; g < p; g += 3) {
          const x = g, _ = g + 1, v = g + 2;
          i = Xr(this, o, e, n, l, h, u, x, _, v), i && (i.faceIndex = Math.floor(g / 3), t.push(i));
        }
      }
  }
}
function Dm(r, e, t, n, i, s, o, a) {
  let c;
  if (e.side === It ? c = n.intersectTriangle(o, s, i, !0, a) : c = n.intersectTriangle(i, s, o, e.side === gn, a), c === null) return null;
  Wr.copy(a), Wr.applyMatrix4(r.matrixWorld);
  const l = t.ray.origin.distanceTo(Wr);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Wr.clone(),
    object: r
  };
}
function Xr(r, e, t, n, i, s, o, a, c, l) {
  r.getVertexPosition(a, Yi), r.getVertexPosition(c, Ki), r.getVertexPosition(l, Zi);
  const h = Dm(r, e, t, n, Yi, Ki, Zi, Vr);
  if (h) {
    i && (kr.fromBufferAttribute(i, a), Hr.fromBufferAttribute(i, c), Gr.fromBufferAttribute(i, l), h.uv = Dt.getInterpolation(Vr, Yi, Ki, Zi, kr, Hr, Gr, new Z())), s && (kr.fromBufferAttribute(s, a), Hr.fromBufferAttribute(s, c), Gr.fromBufferAttribute(s, l), h.uv1 = Dt.getInterpolation(Vr, Yi, Ki, Zi, kr, Hr, Gr, new Z()), h.uv2 = h.uv1), o && (sh.fromBufferAttribute(o, a), rh.fromBufferAttribute(o, c), oh.fromBufferAttribute(o, l), h.normal = Dt.getInterpolation(Vr, Yi, Ki, Zi, sh, rh, oh, new R()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = {
      a,
      b: c,
      c: l,
      normal: new R(),
      materialIndex: 0
    };
    Dt.getNormal(Yi, Ki, Zi, u.normal), h.face = u;
  }
  return h;
}
class ti extends Ve {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: o
    };
    const a = this;
    i = Math.floor(i), s = Math.floor(s), o = Math.floor(o);
    const c = [], l = [], h = [], u = [];
    let d = 0, f = 0;
    m("z", "y", "x", -1, -1, n, t, e, o, s, 0), m("z", "y", "x", 1, -1, n, t, -e, o, s, 1), m("x", "z", "y", 1, 1, e, n, t, i, o, 2), m("x", "z", "y", 1, -1, e, n, -t, i, o, 3), m("x", "y", "z", 1, -1, e, t, n, i, s, 4), m("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(c), this.setAttribute("position", new be(l, 3)), this.setAttribute("normal", new be(h, 3)), this.setAttribute("uv", new be(u, 2));
    function m(y, g, p, x, _, v, S, E, T, A, M) {
      const b = v / T, P = S / A, F = v / 2, D = S / 2, N = E / 2, B = T + 1, J = A + 1;
      let W = 0, X = 0;
      const Q = new R();
      for (let te = 0; te < J; te++) {
        const ue = te * P - D;
        for (let H = 0; H < B; H++) {
          const ne = H * b - F;
          Q[y] = ne * x, Q[g] = ue * _, Q[p] = N, l.push(Q.x, Q.y, Q.z), Q[y] = 0, Q[g] = 0, Q[p] = E > 0 ? 1 : -1, h.push(Q.x, Q.y, Q.z), u.push(H / T), u.push(1 - te / A), W += 1;
        }
      }
      for (let te = 0; te < A; te++)
        for (let ue = 0; ue < T; ue++) {
          const H = d + ue + B * te, ne = d + ue + B * (te + 1), ie = d + (ue + 1) + B * (te + 1), pe = d + (ue + 1) + B * te;
          c.push(H, ne, pe), c.push(ne, ie, pe), X += 6;
        }
      a.addGroup(f, X, M), f += X, d += W;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ti(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function gs(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function Pt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = gs(r[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function Nm(r) {
  const e = [];
  for (let t = 0; t < r.length; t++)
    e.push(r[t].clone());
  return e;
}
function sf(r) {
  return r.getRenderTarget() === null ? r.outputColorSpace : Kt;
}
const rf = { clone: gs, merge: Pt };
var Om = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Fm = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class yn extends gt {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Om, this.fragmentShader = Fm, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1
      // set to use shader texture LOD
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = gs(e.uniforms), this.uniformsGroups = Nm(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture ? t.uniforms[i] = {
        type: "t",
        value: o.toJSON(e).uuid
      } : o && o.isColor ? t.uniforms[i] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: o.toArray()
      } : t.uniforms[i] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Oo extends je {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ne(), this.projectionMatrix = new Ne(), this.projectionMatrixInverse = new Ne(), this.coordinateSystem = fn;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Mt extends Oo {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = ms * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Ai * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return ms * 2 * Math.atan(
      Math.tan(Ai * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, i, s, o) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Ai * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = o.fullWidth, l = o.fullHeight;
      s += o.offsetX * i / c, t -= o.offsetY * n / l, i *= o.width / c, n *= o.height / l;
    }
    const a = this.filmOffset;
    a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Ji = -90, ji = 1;
class of extends je {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null;
    const i = new Mt(Ji, ji, e, t);
    i.layers = this.layers, this.add(i);
    const s = new Mt(Ji, ji, e, t);
    s.layers = this.layers, this.add(s);
    const o = new Mt(Ji, ji, e, t);
    o.layers = this.layers, this.add(o);
    const a = new Mt(Ji, ji, e, t);
    a.layers = this.layers, this.add(a);
    const c = new Mt(Ji, ji, e, t);
    c.layers = this.layers, this.add(c);
    const l = new Mt(Ji, ji, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, s, o, a, c] = t;
    for (const l of t) this.remove(l);
    if (e === fn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === tr)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [i, s, o, a, c, l] = this.children, h = e.getRenderTarget(), u = e.toneMapping, d = e.xr.enabled;
    e.toneMapping = pn, e.xr.enabled = !1;
    const f = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, c), n.texture.generateMipmaps = f, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(h), e.toneMapping = u, e.xr.enabled = d, n.texture.needsPMREMUpdate = !0;
  }
}
class hr extends rt {
  constructor(e, t, n, i, s, o, a, c, l, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Zn, super(e, t, n, i, s, o, a, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class af extends nn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    t.encoding !== void 0 && (Ys("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === Yn ? De : Kn), this.texture = new hr(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : nt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new ti(5, 5, 5), s = new yn({
      name: "CubemapFromEquirect",
      uniforms: gs(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: It,
      blending: In
    });
    s.uniforms.tEquirect.value = t;
    const o = new St(i, s), a = t.minFilter;
    return t.minFilter === _n && (t.minFilter = nt), new of(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const pa = /* @__PURE__ */ new R(), Bm = /* @__PURE__ */ new R(), zm = /* @__PURE__ */ new He();
class Vn {
  constructor(e = new R(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = pa.subVectors(n, t).cross(Bm.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(pa), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || zm.getNormalMatrix(e), i = this.coplanarPoint(pa).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const li = /* @__PURE__ */ new Zt(), qr = /* @__PURE__ */ new R();
class Fo {
  constructor(e = new Vn(), t = new Vn(), n = new Vn(), i = new Vn(), s = new Vn(), o = new Vn()) {
    this.planes = [e, t, n, i, s, o];
  }
  set(e, t, n, i, s, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(s), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = fn) {
    const n = this.planes, i = e.elements, s = i[0], o = i[1], a = i[2], c = i[3], l = i[4], h = i[5], u = i[6], d = i[7], f = i[8], m = i[9], y = i[10], g = i[11], p = i[12], x = i[13], _ = i[14], v = i[15];
    if (n[0].setComponents(c - s, d - l, g - f, v - p).normalize(), n[1].setComponents(c + s, d + l, g + f, v + p).normalize(), n[2].setComponents(c + o, d + h, g + m, v + x).normalize(), n[3].setComponents(c - o, d - h, g - m, v - x).normalize(), n[4].setComponents(c - a, d - u, g - y, v - _).normalize(), t === fn)
      n[5].setComponents(c + a, d + u, g + y, v + _).normalize();
    else if (t === tr)
      n[5].setComponents(a, u, y, _).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(li);
  }
  intersectsSprite(e) {
    return li.center.set(0, 0, 0), li.radius = 0.7071067811865476, li.applyMatrix4(e.matrixWorld), this.intersectsSphere(li);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (qr.x = i.normal.x > 0 ? e.max.x : e.min.x, qr.y = i.normal.y > 0 ? e.max.y : e.min.y, qr.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(qr) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function cf() {
  let r = null, e = !1, t = null, n = null;
  function i(s, o) {
    t(s, o), n = r.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = r.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      r.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      r = s;
    }
  };
}
function km(r, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(l, h) {
    const u = l.array, d = l.usage, f = r.createBuffer();
    r.bindBuffer(h, f), r.bufferData(h, u, d), l.onUploadCallback();
    let m;
    if (u instanceof Float32Array)
      m = r.FLOAT;
    else if (u instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          m = r.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        m = r.UNSIGNED_SHORT;
    else if (u instanceof Int16Array)
      m = r.SHORT;
    else if (u instanceof Uint32Array)
      m = r.UNSIGNED_INT;
    else if (u instanceof Int32Array)
      m = r.INT;
    else if (u instanceof Int8Array)
      m = r.BYTE;
    else if (u instanceof Uint8Array)
      m = r.UNSIGNED_BYTE;
    else if (u instanceof Uint8ClampedArray)
      m = r.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
    return {
      buffer: f,
      type: m,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: l.version
    };
  }
  function s(l, h, u) {
    const d = h.array, f = h.updateRange;
    r.bindBuffer(u, l), f.count === -1 ? r.bufferSubData(u, 0, d) : (t ? r.bufferSubData(
      u,
      f.offset * d.BYTES_PER_ELEMENT,
      d,
      f.offset,
      f.count
    ) : r.bufferSubData(
      u,
      f.offset * d.BYTES_PER_ELEMENT,
      d.subarray(f.offset, f.offset + f.count)
    ), f.count = -1), h.onUploadCallback();
  }
  function o(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function a(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    h && (r.deleteBuffer(h.buffer), n.delete(l));
  }
  function c(l, h) {
    if (l.isGLBufferAttribute) {
      const d = n.get(l);
      (!d || d.version < l.version) && n.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const u = n.get(l);
    u === void 0 ? n.set(l, i(l, h)) : u.version < l.version && (s(u.buffer, l, h), u.version = l.version);
  }
  return {
    get: o,
    remove: a,
    update: c
  };
}
class bs extends Ve {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, o = t / 2, a = Math.floor(n), c = Math.floor(i), l = a + 1, h = c + 1, u = e / a, d = t / c, f = [], m = [], y = [], g = [];
    for (let p = 0; p < h; p++) {
      const x = p * d - o;
      for (let _ = 0; _ < l; _++) {
        const v = _ * u - s;
        m.push(v, -x, 0), y.push(0, 0, 1), g.push(_ / a), g.push(1 - p / c);
      }
    }
    for (let p = 0; p < c; p++)
      for (let x = 0; x < a; x++) {
        const _ = x + l * p, v = x + l * (p + 1), S = x + 1 + l * (p + 1), E = x + 1 + l * p;
        f.push(_, v, E), f.push(v, S, E);
      }
    this.setIndex(f), this.setAttribute("position", new be(m, 3)), this.setAttribute("normal", new be(y, 3)), this.setAttribute("uv", new be(g, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new bs(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Hm = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Gm = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Vm = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Wm = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Xm = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, qm = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Ym = "vec3 transformed = vec3( position );", Km = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Zm = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Jm = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, jm = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Qm = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, $m = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, eg = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, tg = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, ng = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, ig = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, sg = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, rg = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, og = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, ag = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, cg = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, lg = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, hg = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, ug = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, dg = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, fg = "gl_FragColor = linearToOutputTexel( gl_FragColor );", pg = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, mg = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, gg = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, _g = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, yg = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, xg = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, vg = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Mg = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Sg = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Eg = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, bg = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Tg = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Ag = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, wg = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Rg = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Cg = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Lg = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Pg = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Ig = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Ug = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Dg = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Ng = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`, Og = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Fg = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Bg = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, zg = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, kg = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Hg = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Gg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Vg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Wg = `#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`, Xg = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, qg = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Yg = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Kg = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Zg = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Jg = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, jg = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Qg = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, $g = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, e0 = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`, t0 = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, n0 = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, i0 = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, s0 = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, r0 = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, o0 = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, a0 = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, c0 = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, l0 = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, h0 = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, u0 = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, d0 = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, f0 = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, p0 = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, m0 = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, g0 = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, _0 = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, y0 = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, x0 = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, v0 = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, M0 = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, S0 = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, E0 = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, b0 = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, T0 = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, A0 = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, w0 = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, R0 = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, C0 = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, L0 = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, P0 = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, I0 = `#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, U0 = `#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, D0 = `#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, N0 = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const O0 = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, F0 = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, B0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, z0 = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, k0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, H0 = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, G0 = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, V0 = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, W0 = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, X0 = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, q0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Y0 = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, K0 = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Z0 = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, J0 = `#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, j0 = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Q0 = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, $0 = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, e_ = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, t_ = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, n_ = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, i_ = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, s_ = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, r_ = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, o_ = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, a_ = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, c_ = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, l_ = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, h_ = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, u_ = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, d_ = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, f_ = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, p_ = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, m_ = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, ke = {
  alphamap_fragment: Hm,
  alphamap_pars_fragment: Gm,
  alphatest_fragment: Vm,
  alphatest_pars_fragment: Wm,
  aomap_fragment: Xm,
  aomap_pars_fragment: qm,
  begin_vertex: Ym,
  beginnormal_vertex: Km,
  bsdfs: Zm,
  iridescence_fragment: Jm,
  bumpmap_pars_fragment: jm,
  clipping_planes_fragment: Qm,
  clipping_planes_pars_fragment: $m,
  clipping_planes_pars_vertex: eg,
  clipping_planes_vertex: tg,
  color_fragment: ng,
  color_pars_fragment: ig,
  color_pars_vertex: sg,
  color_vertex: rg,
  common: og,
  cube_uv_reflection_fragment: ag,
  defaultnormal_vertex: cg,
  displacementmap_pars_vertex: lg,
  displacementmap_vertex: hg,
  emissivemap_fragment: ug,
  emissivemap_pars_fragment: dg,
  encodings_fragment: fg,
  encodings_pars_fragment: pg,
  envmap_fragment: mg,
  envmap_common_pars_fragment: gg,
  envmap_pars_fragment: _g,
  envmap_pars_vertex: yg,
  envmap_physical_pars_fragment: Lg,
  envmap_vertex: xg,
  fog_vertex: vg,
  fog_pars_vertex: Mg,
  fog_fragment: Sg,
  fog_pars_fragment: Eg,
  gradientmap_pars_fragment: bg,
  lightmap_fragment: Tg,
  lightmap_pars_fragment: Ag,
  lights_lambert_fragment: wg,
  lights_lambert_pars_fragment: Rg,
  lights_pars_begin: Cg,
  lights_toon_fragment: Pg,
  lights_toon_pars_fragment: Ig,
  lights_phong_fragment: Ug,
  lights_phong_pars_fragment: Dg,
  lights_physical_fragment: Ng,
  lights_physical_pars_fragment: Og,
  lights_fragment_begin: Fg,
  lights_fragment_maps: Bg,
  lights_fragment_end: zg,
  logdepthbuf_fragment: kg,
  logdepthbuf_pars_fragment: Hg,
  logdepthbuf_pars_vertex: Gg,
  logdepthbuf_vertex: Vg,
  map_fragment: Wg,
  map_pars_fragment: Xg,
  map_particle_fragment: qg,
  map_particle_pars_fragment: Yg,
  metalnessmap_fragment: Kg,
  metalnessmap_pars_fragment: Zg,
  morphcolor_vertex: Jg,
  morphnormal_vertex: jg,
  morphtarget_pars_vertex: Qg,
  morphtarget_vertex: $g,
  normal_fragment_begin: e0,
  normal_fragment_maps: t0,
  normal_pars_fragment: n0,
  normal_pars_vertex: i0,
  normal_vertex: s0,
  normalmap_pars_fragment: r0,
  clearcoat_normal_fragment_begin: o0,
  clearcoat_normal_fragment_maps: a0,
  clearcoat_pars_fragment: c0,
  iridescence_pars_fragment: l0,
  output_fragment: h0,
  packing: u0,
  premultiplied_alpha_fragment: d0,
  project_vertex: f0,
  dithering_fragment: p0,
  dithering_pars_fragment: m0,
  roughnessmap_fragment: g0,
  roughnessmap_pars_fragment: _0,
  shadowmap_pars_fragment: y0,
  shadowmap_pars_vertex: x0,
  shadowmap_vertex: v0,
  shadowmask_pars_fragment: M0,
  skinbase_vertex: S0,
  skinning_pars_vertex: E0,
  skinning_vertex: b0,
  skinnormal_vertex: T0,
  specularmap_fragment: A0,
  specularmap_pars_fragment: w0,
  tonemapping_fragment: R0,
  tonemapping_pars_fragment: C0,
  transmission_fragment: L0,
  transmission_pars_fragment: P0,
  uv_pars_fragment: I0,
  uv_pars_vertex: U0,
  uv_vertex: D0,
  worldpos_vertex: N0,
  background_vert: O0,
  background_frag: F0,
  backgroundCube_vert: B0,
  backgroundCube_frag: z0,
  cube_vert: k0,
  cube_frag: H0,
  depth_vert: G0,
  depth_frag: V0,
  distanceRGBA_vert: W0,
  distanceRGBA_frag: X0,
  equirect_vert: q0,
  equirect_frag: Y0,
  linedashed_vert: K0,
  linedashed_frag: Z0,
  meshbasic_vert: J0,
  meshbasic_frag: j0,
  meshlambert_vert: Q0,
  meshlambert_frag: $0,
  meshmatcap_vert: e_,
  meshmatcap_frag: t_,
  meshnormal_vert: n_,
  meshnormal_frag: i_,
  meshphong_vert: s_,
  meshphong_frag: r_,
  meshphysical_vert: o_,
  meshphysical_frag: a_,
  meshtoon_vert: c_,
  meshtoon_frag: l_,
  points_vert: h_,
  points_frag: u_,
  shadow_vert: d_,
  shadow_frag: f_,
  sprite_vert: p_,
  sprite_frag: m_
}, he = {
  common: {
    diffuse: { value: /* @__PURE__ */ new de(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new He() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new He() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new He() }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new He() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new He() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new He() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new He() },
    normalScale: { value: /* @__PURE__ */ new Z(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new He() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new He() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new He() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new He() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new de(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new de(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new He() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new He() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new de(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Z(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new He() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new He() },
    alphaTest: { value: 0 }
  }
}, en = {
  basic: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.specularmap,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.fog
    ]),
    vertexShader: ke.meshbasic_vert,
    fragmentShader: ke.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.specularmap,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new de(0) }
      }
    ]),
    vertexShader: ke.meshlambert_vert,
    fragmentShader: ke.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.specularmap,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new de(0) },
        specular: { value: /* @__PURE__ */ new de(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: ke.meshphong_vert,
    fragmentShader: ke.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.roughnessmap,
      he.metalnessmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new de(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: ke.meshphysical_vert,
    fragmentShader: ke.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.gradientmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new de(0) }
      }
    ]),
    vertexShader: ke.meshtoon_vert,
    fragmentShader: ke.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: ke.meshmatcap_vert,
    fragmentShader: ke.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Pt([
      he.points,
      he.fog
    ]),
    vertexShader: ke.points_vert,
    fragmentShader: ke.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: ke.linedashed_vert,
    fragmentShader: ke.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.displacementmap
    ]),
    vertexShader: ke.depth_vert,
    fragmentShader: ke.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ke.meshnormal_vert,
    fragmentShader: ke.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Pt([
      he.sprite,
      he.fog
    ]),
    vertexShader: ke.sprite_vert,
    fragmentShader: ke.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new He() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: ke.background_vert,
    fragmentShader: ke.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: ke.backgroundCube_vert,
    fragmentShader: ke.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: ke.cube_vert,
    fragmentShader: ke.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: ke.equirect_vert,
    fragmentShader: ke.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new R() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: ke.distanceRGBA_vert,
    fragmentShader: ke.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Pt([
      he.lights,
      he.fog,
      {
        color: { value: /* @__PURE__ */ new de(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ke.shadow_vert,
    fragmentShader: ke.shadow_frag
  }
};
en.physical = {
  uniforms: /* @__PURE__ */ Pt([
    en.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new He() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new He() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Z(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new He() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new He() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new He() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new de(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new He() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new He() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new He() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Z() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new He() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new de(0) },
      specularColor: { value: /* @__PURE__ */ new de(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new He() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new He() },
      anisotropyVector: { value: /* @__PURE__ */ new Z() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new He() }
    }
  ]),
  vertexShader: ke.meshphysical_vert,
  fragmentShader: ke.meshphysical_frag
};
const Yr = { r: 0, b: 0, g: 0 };
function g_(r, e, t, n, i, s, o) {
  const a = new de(0);
  let c = s === !0 ? 0 : 1, l, h, u = null, d = 0, f = null;
  function m(g, p) {
    let x = !1, _ = p.isScene === !0 ? p.background : null;
    switch (_ && _.isTexture && (_ = (p.backgroundBlurriness > 0 ? t : e).get(_)), _ === null ? y(a, c) : _ && _.isColor && (y(_, 1), x = !0), r.xr.getEnvironmentBlendMode()) {
      case "opaque":
        x = !0;
        break;
      case "additive":
        n.buffers.color.setClear(0, 0, 0, 1, o), x = !0;
        break;
      case "alpha-blend":
        n.buffers.color.setClear(0, 0, 0, 0, o), x = !0;
        break;
    }
    (r.autoClear || x) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), _ && (_.isCubeTexture || _.mapping === Ss) ? (h === void 0 && (h = new St(
      new ti(1, 1, 1),
      new yn({
        name: "BackgroundCubeMaterial",
        uniforms: gs(en.backgroundCube.uniforms),
        vertexShader: en.backgroundCube.vertexShader,
        fragmentShader: en.backgroundCube.fragmentShader,
        side: It,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(E, T, A) {
      this.matrixWorld.copyPosition(A.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), h.material.uniforms.envMap.value = _, h.material.uniforms.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = p.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, h.material.toneMapped = _.colorSpace !== De, (u !== _ || d !== _.version || f !== r.toneMapping) && (h.material.needsUpdate = !0, u = _, d = _.version, f = r.toneMapping), h.layers.enableAll(), g.unshift(h, h.geometry, h.material, 0, 0, null)) : _ && _.isTexture && (l === void 0 && (l = new St(
      new bs(2, 2),
      new yn({
        name: "BackgroundMaterial",
        uniforms: gs(en.background.uniforms),
        vertexShader: en.background.vertexShader,
        fragmentShader: en.background.fragmentShader,
        side: gn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = _, l.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, l.material.toneMapped = _.colorSpace !== De, _.matrixAutoUpdate === !0 && _.updateMatrix(), l.material.uniforms.uvTransform.value.copy(_.matrix), (u !== _ || d !== _.version || f !== r.toneMapping) && (l.material.needsUpdate = !0, u = _, d = _.version, f = r.toneMapping), l.layers.enableAll(), g.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function y(g, p) {
    g.getRGB(Yr, sf(r)), n.buffers.color.setClear(Yr.r, Yr.g, Yr.b, p, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(g, p = 1) {
      a.set(g), c = p, y(a, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(g) {
      c = g, y(a, c);
    },
    render: m
  };
}
function __(r, e, t, n) {
  const i = r.getParameter(r.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, a = {}, c = g(null);
  let l = c, h = !1;
  function u(N, B, J, W, X) {
    let Q = !1;
    if (o) {
      const te = y(W, J, B);
      l !== te && (l = te, f(l.object)), Q = p(N, W, J, X), Q && x(N, W, J, X);
    } else {
      const te = B.wireframe === !0;
      (l.geometry !== W.id || l.program !== J.id || l.wireframe !== te) && (l.geometry = W.id, l.program = J.id, l.wireframe = te, Q = !0);
    }
    X !== null && t.update(X, r.ELEMENT_ARRAY_BUFFER), (Q || h) && (h = !1, A(N, B, J, W), X !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.get(X).buffer));
  }
  function d() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function f(N) {
    return n.isWebGL2 ? r.bindVertexArray(N) : s.bindVertexArrayOES(N);
  }
  function m(N) {
    return n.isWebGL2 ? r.deleteVertexArray(N) : s.deleteVertexArrayOES(N);
  }
  function y(N, B, J) {
    const W = J.wireframe === !0;
    let X = a[N.id];
    X === void 0 && (X = {}, a[N.id] = X);
    let Q = X[B.id];
    Q === void 0 && (Q = {}, X[B.id] = Q);
    let te = Q[W];
    return te === void 0 && (te = g(d()), Q[W] = te), te;
  }
  function g(N) {
    const B = [], J = [], W = [];
    for (let X = 0; X < i; X++)
      B[X] = 0, J[X] = 0, W[X] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: B,
      enabledAttributes: J,
      attributeDivisors: W,
      object: N,
      attributes: {},
      index: null
    };
  }
  function p(N, B, J, W) {
    const X = l.attributes, Q = B.attributes;
    let te = 0;
    const ue = J.getAttributes();
    for (const H in ue)
      if (ue[H].location >= 0) {
        const ie = X[H];
        let pe = Q[H];
        if (pe === void 0 && (H === "instanceMatrix" && N.instanceMatrix && (pe = N.instanceMatrix), H === "instanceColor" && N.instanceColor && (pe = N.instanceColor)), ie === void 0 || ie.attribute !== pe || pe && ie.data !== pe.data) return !0;
        te++;
      }
    return l.attributesNum !== te || l.index !== W;
  }
  function x(N, B, J, W) {
    const X = {}, Q = B.attributes;
    let te = 0;
    const ue = J.getAttributes();
    for (const H in ue)
      if (ue[H].location >= 0) {
        let ie = Q[H];
        ie === void 0 && (H === "instanceMatrix" && N.instanceMatrix && (ie = N.instanceMatrix), H === "instanceColor" && N.instanceColor && (ie = N.instanceColor));
        const pe = {};
        pe.attribute = ie, ie && ie.data && (pe.data = ie.data), X[H] = pe, te++;
      }
    l.attributes = X, l.attributesNum = te, l.index = W;
  }
  function _() {
    const N = l.newAttributes;
    for (let B = 0, J = N.length; B < J; B++)
      N[B] = 0;
  }
  function v(N) {
    S(N, 0);
  }
  function S(N, B) {
    const J = l.newAttributes, W = l.enabledAttributes, X = l.attributeDivisors;
    J[N] = 1, W[N] === 0 && (r.enableVertexAttribArray(N), W[N] = 1), X[N] !== B && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](N, B), X[N] = B);
  }
  function E() {
    const N = l.newAttributes, B = l.enabledAttributes;
    for (let J = 0, W = B.length; J < W; J++)
      B[J] !== N[J] && (r.disableVertexAttribArray(J), B[J] = 0);
  }
  function T(N, B, J, W, X, Q, te) {
    te === !0 ? r.vertexAttribIPointer(N, B, J, X, Q) : r.vertexAttribPointer(N, B, J, W, X, Q);
  }
  function A(N, B, J, W) {
    if (n.isWebGL2 === !1 && (N.isInstancedMesh || W.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    _();
    const X = W.attributes, Q = J.getAttributes(), te = B.defaultAttributeValues;
    for (const ue in Q) {
      const H = Q[ue];
      if (H.location >= 0) {
        let ne = X[ue];
        if (ne === void 0 && (ue === "instanceMatrix" && N.instanceMatrix && (ne = N.instanceMatrix), ue === "instanceColor" && N.instanceColor && (ne = N.instanceColor)), ne !== void 0) {
          const ie = ne.normalized, pe = ne.itemSize, _e = t.get(ne);
          if (_e === void 0) continue;
          const me = _e.buffer, Ce = _e.type, we = _e.bytesPerElement, Ye = n.isWebGL2 === !0 && (Ce === r.INT || Ce === r.UNSIGNED_INT || ne.gpuType === Zc);
          if (ne.isInterleavedBufferAttribute) {
            const Pe = ne.data, U = Pe.stride, ce = ne.offset;
            if (Pe.isInstancedInterleavedBuffer) {
              for (let j = 0; j < H.locationSize; j++)
                S(H.location + j, Pe.meshPerAttribute);
              N.isInstancedMesh !== !0 && W._maxInstanceCount === void 0 && (W._maxInstanceCount = Pe.meshPerAttribute * Pe.count);
            } else
              for (let j = 0; j < H.locationSize; j++)
                v(H.location + j);
            r.bindBuffer(r.ARRAY_BUFFER, me);
            for (let j = 0; j < H.locationSize; j++)
              T(
                H.location + j,
                pe / H.locationSize,
                Ce,
                ie,
                U * we,
                (ce + pe / H.locationSize * j) * we,
                Ye
              );
          } else {
            if (ne.isInstancedBufferAttribute) {
              for (let Pe = 0; Pe < H.locationSize; Pe++)
                S(H.location + Pe, ne.meshPerAttribute);
              N.isInstancedMesh !== !0 && W._maxInstanceCount === void 0 && (W._maxInstanceCount = ne.meshPerAttribute * ne.count);
            } else
              for (let Pe = 0; Pe < H.locationSize; Pe++)
                v(H.location + Pe);
            r.bindBuffer(r.ARRAY_BUFFER, me);
            for (let Pe = 0; Pe < H.locationSize; Pe++)
              T(
                H.location + Pe,
                pe / H.locationSize,
                Ce,
                ie,
                pe * we,
                pe / H.locationSize * Pe * we,
                Ye
              );
          }
        } else if (te !== void 0) {
          const ie = te[ue];
          if (ie !== void 0)
            switch (ie.length) {
              case 2:
                r.vertexAttrib2fv(H.location, ie);
                break;
              case 3:
                r.vertexAttrib3fv(H.location, ie);
                break;
              case 4:
                r.vertexAttrib4fv(H.location, ie);
                break;
              default:
                r.vertexAttrib1fv(H.location, ie);
            }
        }
      }
    }
    E();
  }
  function M() {
    F();
    for (const N in a) {
      const B = a[N];
      for (const J in B) {
        const W = B[J];
        for (const X in W)
          m(W[X].object), delete W[X];
        delete B[J];
      }
      delete a[N];
    }
  }
  function b(N) {
    if (a[N.id] === void 0) return;
    const B = a[N.id];
    for (const J in B) {
      const W = B[J];
      for (const X in W)
        m(W[X].object), delete W[X];
      delete B[J];
    }
    delete a[N.id];
  }
  function P(N) {
    for (const B in a) {
      const J = a[B];
      if (J[N.id] === void 0) continue;
      const W = J[N.id];
      for (const X in W)
        m(W[X].object), delete W[X];
      delete J[N.id];
    }
  }
  function F() {
    D(), h = !0, l !== c && (l = c, f(l.object));
  }
  function D() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: u,
    reset: F,
    resetDefaultState: D,
    dispose: M,
    releaseStatesOfGeometry: b,
    releaseStatesOfProgram: P,
    initAttributes: _,
    enableAttribute: v,
    disableUnusedAttributes: E
  };
}
function y_(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(l) {
    s = l;
  }
  function a(l, h) {
    r.drawArrays(s, l, h), t.update(h, s, 1);
  }
  function c(l, h, u) {
    if (u === 0) return;
    let d, f;
    if (i)
      d = r, f = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), f = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[f](s, l, h, u), t.update(h, s, u);
  }
  this.setMode = o, this.render = a, this.renderInstances = c;
}
function x_(r, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const T = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(T) {
    if (T === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0)
        return "highp";
      T = "mediump";
    }
    return T === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && r.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const c = s(a);
  c !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", c, "instead."), a = c);
  const l = o || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, u = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), d = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), f = r.getParameter(r.MAX_TEXTURE_SIZE), m = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), y = r.getParameter(r.MAX_VERTEX_ATTRIBS), g = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), p = r.getParameter(r.MAX_VARYING_VECTORS), x = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), _ = d > 0, v = o || e.has("OES_texture_float"), S = _ && v, E = o ? r.getParameter(r.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: h,
    maxTextures: u,
    maxVertexTextures: d,
    maxTextureSize: f,
    maxCubemapSize: m,
    maxAttributes: y,
    maxVertexUniforms: g,
    maxVaryings: p,
    maxFragmentUniforms: x,
    vertexTextures: _,
    floatFragmentTextures: v,
    floatVertexTextures: S,
    maxSamples: E
  };
}
function v_(r) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const o = new Vn(), a = new He(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const f = u.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = d, n = u.length, f;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(u, d) {
    t = h(u, d, 0);
  }, this.setState = function(u, d, f) {
    const m = u.clippingPlanes, y = u.clipIntersection, g = u.clipShadows, p = r.get(u);
    if (!i || m === null || m.length === 0 || s && !g)
      s ? h(null) : l();
    else {
      const x = s ? 0 : n, _ = x * 4;
      let v = p.clippingState || null;
      c.value = v, v = h(m, d, _, f);
      for (let S = 0; S !== _; ++S)
        v[S] = t[S];
      p.clippingState = v, this.numIntersection = y ? this.numPlanes : 0, this.numPlanes += x;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, d, f, m) {
    const y = u !== null ? u.length : 0;
    let g = null;
    if (y !== 0) {
      if (g = c.value, m !== !0 || g === null) {
        const p = f + y * 4, x = d.matrixWorldInverse;
        a.getNormalMatrix(x), (g === null || g.length < p) && (g = new Float32Array(p));
        for (let _ = 0, v = f; _ !== y; ++_, v += 4)
          o.copy(u[_]).applyMatrix4(x, a), o.normal.toArray(g, v), g[v + 3] = o.constant;
      }
      c.value = g, c.needsUpdate = !0;
    }
    return e.numPlanes = y, e.numIntersection = 0, g;
  }
}
function M_(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === Js ? o.mapping = Zn : a === js && (o.mapping = Jn), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === Js || a === js)
        if (e.has(o)) {
          const c = e.get(o).texture;
          return t(c, o.mapping);
        } else {
          const c = o.image;
          if (c && c.height > 0) {
            const l = new af(c.height / 2);
            return l.fromEquirectangularTexture(r, o), e.set(o, l), o.addEventListener("dispose", i), t(l.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const c = e.get(a);
    c !== void 0 && (e.delete(a), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class ur extends Oo {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, o = n + e, a = i + t, c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, o = s + l * this.view.width, a -= h * this.view.offsetY, c = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const as = 4, ah = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], vi = 20, ma = /* @__PURE__ */ new ur(), ch = /* @__PURE__ */ new de();
let ga = null;
const yi = (1 + Math.sqrt(5)) / 2, Qi = 1 / yi, lh = [
  /* @__PURE__ */ new R(1, 1, 1),
  /* @__PURE__ */ new R(-1, 1, 1),
  /* @__PURE__ */ new R(1, 1, -1),
  /* @__PURE__ */ new R(-1, 1, -1),
  /* @__PURE__ */ new R(0, yi, Qi),
  /* @__PURE__ */ new R(0, yi, -Qi),
  /* @__PURE__ */ new R(Qi, 0, yi),
  /* @__PURE__ */ new R(-Qi, 0, yi),
  /* @__PURE__ */ new R(yi, Qi, 0),
  /* @__PURE__ */ new R(-yi, Qi, 0)
];
class Oc {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, i = 100) {
    ga = this._renderer.getRenderTarget(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = dh(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = uh(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(ga), e.scissorTest = !1, Kr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Zn || e.mapping === Jn ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), ga = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: nt,
      minFilter: nt,
      generateMipmaps: !1,
      type: dn,
      format: zt,
      colorSpace: Kt,
      depthBuffer: !1
    }, i = hh(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = hh(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = S_(s)), this._blurMaterial = E_(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new St(this._lodPlanes[0], e);
    this._renderer.compile(t, ma);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new Mt(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(ch), h.toneMapping = pn, h.autoClear = !1;
    const f = new Gt({
      name: "PMREM.Background",
      side: It,
      depthWrite: !1,
      depthTest: !1
    }), m = new St(new ti(), f);
    let y = !1;
    const g = e.background;
    g ? g.isColor && (f.color.copy(g), e.background = null, y = !0) : (f.color.copy(ch), y = !0);
    for (let p = 0; p < 6; p++) {
      const x = p % 3;
      x === 0 ? (a.up.set(0, c[p], 0), a.lookAt(l[p], 0, 0)) : x === 1 ? (a.up.set(0, 0, c[p]), a.lookAt(0, l[p], 0)) : (a.up.set(0, c[p], 0), a.lookAt(0, 0, l[p]));
      const _ = this._cubeSize;
      Kr(i, x * _, p > 2 ? _ : 0, _, _), h.setRenderTarget(i), y && h.render(m, a), h.render(e, a);
    }
    m.geometry.dispose(), m.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = g;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === Zn || e.mapping === Jn;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = dh()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = uh());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, o = new St(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const c = this._cubeSize;
    Kr(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, ma);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), o = lh[(i - 1) % lh.length];
      this._blur(e, i - 1, i, s, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, i, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      o,
      t,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      o,
      e,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, i, s, o, a) {
    const c = this._renderer, l = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new St(this._lodPlanes[i], l), d = l.uniforms, f = this._sizeLods[n] - 1, m = isFinite(s) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * vi - 1), y = s / m, g = isFinite(s) ? 1 + Math.floor(h * y) : vi;
    g > vi && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${vi}`);
    const p = [];
    let x = 0;
    for (let T = 0; T < vi; ++T) {
      const A = T / y, M = Math.exp(-A * A / 2);
      p.push(M), T === 0 ? x += M : T < g && (x += 2 * M);
    }
    for (let T = 0; T < p.length; T++)
      p[T] = p[T] / x;
    d.envMap.value = e.texture, d.samples.value = g, d.weights.value = p, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: _ } = this;
    d.dTheta.value = m, d.mipInt.value = _ - n;
    const v = this._sizeLods[i], S = 3 * v * (i > _ - as ? i - _ + as : 0), E = 4 * (this._cubeSize - v);
    Kr(t, S, E, 3 * v, 2 * v), c.setRenderTarget(t), c.render(u, ma);
  }
}
function S_(r) {
  const e = [], t = [], n = [];
  let i = r;
  const s = r - as + 1 + ah.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let c = 1 / a;
    o > r - as ? c = ah[o - r + as - 1] : o === 0 && (c = 0), n.push(c);
    const l = 1 / (a - 2), h = -l, u = 1 + l, d = [h, h, u, h, u, u, h, h, u, u, h, u], f = 6, m = 6, y = 3, g = 2, p = 1, x = new Float32Array(y * m * f), _ = new Float32Array(g * m * f), v = new Float32Array(p * m * f);
    for (let E = 0; E < f; E++) {
      const T = E % 3 * 2 / 3 - 1, A = E > 2 ? 0 : -1, M = [
        T,
        A,
        0,
        T + 2 / 3,
        A,
        0,
        T + 2 / 3,
        A + 1,
        0,
        T,
        A,
        0,
        T + 2 / 3,
        A + 1,
        0,
        T,
        A + 1,
        0
      ];
      x.set(M, y * m * E), _.set(d, g * m * E);
      const b = [E, E, E, E, E, E];
      v.set(b, p * m * E);
    }
    const S = new Ve();
    S.setAttribute("position", new $e(x, y)), S.setAttribute("uv", new $e(_, g)), S.setAttribute("faceIndex", new $e(v, p)), e.push(S), i > as && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function hh(r, e, t) {
  const n = new nn(r, e, t);
  return n.texture.mapping = Ss, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Kr(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function E_(r, e, t) {
  const n = new Float32Array(vi), i = new R(0, 1, 0);
  return new yn({
    name: "SphericalGaussianBlur",
    defines: {
      n: vi,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: hl(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: In,
    depthTest: !1,
    depthWrite: !1
  });
}
function uh() {
  return new yn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: hl(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: In,
    depthTest: !1,
    depthWrite: !1
  });
}
function dh() {
  return new yn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: hl(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: In,
    depthTest: !1,
    depthWrite: !1
  });
}
function hl() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function b_(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const c = a.mapping, l = c === Js || c === js, h = c === Zn || c === Jn;
      if (l || h)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let u = e.get(a);
          return t === null && (t = new Oc(r)), u = l ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u), e.set(a, u), u.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const u = a.image;
            if (l && u && u.height > 0 || h && u && i(u)) {
              t === null && (t = new Oc(r));
              const d = l ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, d), a.addEventListener("dispose", s), d.texture;
            } else
              return null;
          }
        }
    }
    return a;
  }
  function i(a) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++)
      a[h] !== void 0 && c++;
    return c === l;
  }
  function s(a) {
    const c = a.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function T_(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function A_(r, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const m in d.attributes)
      e.remove(d.attributes[m]);
    for (const m in d.morphAttributes) {
      const y = d.morphAttributes[m];
      for (let g = 0, p = y.length; g < p; g++)
        e.remove(y[g]);
    }
    d.removeEventListener("dispose", o), delete i[d.id];
    const f = s.get(d);
    f && (e.remove(f), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function a(u, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", o), i[d.id] = !0, t.memory.geometries++), d;
  }
  function c(u) {
    const d = u.attributes;
    for (const m in d)
      e.update(d[m], r.ARRAY_BUFFER);
    const f = u.morphAttributes;
    for (const m in f) {
      const y = f[m];
      for (let g = 0, p = y.length; g < p; g++)
        e.update(y[g], r.ARRAY_BUFFER);
    }
  }
  function l(u) {
    const d = [], f = u.index, m = u.attributes.position;
    let y = 0;
    if (f !== null) {
      const x = f.array;
      y = f.version;
      for (let _ = 0, v = x.length; _ < v; _ += 3) {
        const S = x[_ + 0], E = x[_ + 1], T = x[_ + 2];
        d.push(S, E, E, T, T, S);
      }
    } else {
      const x = m.array;
      y = m.version;
      for (let _ = 0, v = x.length / 3 - 1; _ < v; _ += 3) {
        const S = _ + 0, E = _ + 1, T = _ + 2;
        d.push(S, E, E, T, T, S);
      }
    }
    const g = new (tf(d) ? ll : cl)(d, 1);
    g.version = y;
    const p = s.get(u);
    p && e.remove(p), s.set(u, g);
  }
  function h(u) {
    const d = s.get(u);
    if (d) {
      const f = u.index;
      f !== null && d.version < f.version && l(u);
    } else
      l(u);
    return s.get(u);
  }
  return {
    get: a,
    update: c,
    getWireframeAttribute: h
  };
}
function w_(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(d) {
    s = d;
  }
  let a, c;
  function l(d) {
    a = d.type, c = d.bytesPerElement;
  }
  function h(d, f) {
    r.drawElements(s, f, a, d * c), t.update(f, s, 1);
  }
  function u(d, f, m) {
    if (m === 0) return;
    let y, g;
    if (i)
      y = r, g = "drawElementsInstanced";
    else if (y = e.get("ANGLE_instanced_arrays"), g = "drawElementsInstancedANGLE", y === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    y[g](s, f, a, d * c, m), t.update(f, s, m);
  }
  this.setMode = o, this.setIndex = l, this.render = h, this.renderInstances = u;
}
function R_(r) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, o, a) {
    switch (t.calls++, o) {
      case r.TRIANGLES:
        t.triangles += a * (s / 3);
        break;
      case r.LINES:
        t.lines += a * (s / 2);
        break;
      case r.LINE_STRIP:
        t.lines += a * (s - 1);
        break;
      case r.LINE_LOOP:
        t.lines += a * s;
        break;
      case r.POINTS:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function C_(r, e) {
  return r[0] - e[0];
}
function L_(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function P_(r, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), o = new et(), a = [];
  for (let l = 0; l < 8; l++)
    a[l] = [l, 0];
  function c(l, h, u) {
    const d = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const f = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, m = f !== void 0 ? f.length : 0;
      let y = s.get(h);
      if (y === void 0 || y.count !== m) {
        let N = function() {
          F.dispose(), s.delete(h), h.removeEventListener("dispose", N);
        };
        y !== void 0 && y.texture.dispose();
        const x = h.morphAttributes.position !== void 0, _ = h.morphAttributes.normal !== void 0, v = h.morphAttributes.color !== void 0, S = h.morphAttributes.position || [], E = h.morphAttributes.normal || [], T = h.morphAttributes.color || [];
        let A = 0;
        x === !0 && (A = 1), _ === !0 && (A = 2), v === !0 && (A = 3);
        let M = h.attributes.position.count * A, b = 1;
        M > e.maxTextureSize && (b = Math.ceil(M / e.maxTextureSize), M = e.maxTextureSize);
        const P = new Float32Array(M * b * 4 * m), F = new Do(P, M, b, m);
        F.type = kt, F.needsUpdate = !0;
        const D = A * 4;
        for (let B = 0; B < m; B++) {
          const J = S[B], W = E[B], X = T[B], Q = M * b * 4 * B;
          for (let te = 0; te < J.count; te++) {
            const ue = te * D;
            x === !0 && (o.fromBufferAttribute(J, te), P[Q + ue + 0] = o.x, P[Q + ue + 1] = o.y, P[Q + ue + 2] = o.z, P[Q + ue + 3] = 0), _ === !0 && (o.fromBufferAttribute(W, te), P[Q + ue + 4] = o.x, P[Q + ue + 5] = o.y, P[Q + ue + 6] = o.z, P[Q + ue + 7] = 0), v === !0 && (o.fromBufferAttribute(X, te), P[Q + ue + 8] = o.x, P[Q + ue + 9] = o.y, P[Q + ue + 10] = o.z, P[Q + ue + 11] = X.itemSize === 4 ? o.w : 1);
          }
        }
        y = {
          count: m,
          texture: F,
          size: new Z(M, b)
        }, s.set(h, y), h.addEventListener("dispose", N);
      }
      let g = 0;
      for (let x = 0; x < d.length; x++)
        g += d[x];
      const p = h.morphTargetsRelative ? 1 : 1 - g;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", p), u.getUniforms().setValue(r, "morphTargetInfluences", d), u.getUniforms().setValue(r, "morphTargetsTexture", y.texture, t), u.getUniforms().setValue(r, "morphTargetsTextureSize", y.size);
    } else {
      const f = d === void 0 ? 0 : d.length;
      let m = n[h.id];
      if (m === void 0 || m.length !== f) {
        m = [];
        for (let _ = 0; _ < f; _++)
          m[_] = [_, 0];
        n[h.id] = m;
      }
      for (let _ = 0; _ < f; _++) {
        const v = m[_];
        v[0] = _, v[1] = d[_];
      }
      m.sort(L_);
      for (let _ = 0; _ < 8; _++)
        _ < f && m[_][1] ? (a[_][0] = m[_][0], a[_][1] = m[_][1]) : (a[_][0] = Number.MAX_SAFE_INTEGER, a[_][1] = 0);
      a.sort(C_);
      const y = h.morphAttributes.position, g = h.morphAttributes.normal;
      let p = 0;
      for (let _ = 0; _ < 8; _++) {
        const v = a[_], S = v[0], E = v[1];
        S !== Number.MAX_SAFE_INTEGER && E ? (y && h.getAttribute("morphTarget" + _) !== y[S] && h.setAttribute("morphTarget" + _, y[S]), g && h.getAttribute("morphNormal" + _) !== g[S] && h.setAttribute("morphNormal" + _, g[S]), i[_] = E, p += E) : (y && h.hasAttribute("morphTarget" + _) === !0 && h.deleteAttribute("morphTarget" + _), g && h.hasAttribute("morphNormal" + _) === !0 && h.deleteAttribute("morphNormal" + _), i[_] = 0);
      }
      const x = h.morphTargetsRelative ? 1 : 1 - p;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", x), u.getUniforms().setValue(r, "morphTargetInfluences", i);
    }
  }
  return {
    update: c
  };
}
function I_(r, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, h = c.geometry, u = e.get(c, h);
    return i.get(u) !== l && (e.update(u), i.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a), t.update(c.instanceMatrix, r.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, r.ARRAY_BUFFER)), u;
  }
  function o() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function a(c) {
    const l = c.target;
    l.removeEventListener("dispose", a), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: o
  };
}
const lf = /* @__PURE__ */ new rt(), hf = /* @__PURE__ */ new Do(), uf = /* @__PURE__ */ new al(), df = /* @__PURE__ */ new hr(), fh = [], ph = [], mh = new Float32Array(16), gh = new Float32Array(9), _h = new Float32Array(4);
function Ts(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = fh[i];
  if (s === void 0 && (s = new Float32Array(i), fh[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, r[o].toArray(s, a);
  }
  return s;
}
function _t(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0, n = r.length; t < n; t++)
    if (r[t] !== e[t]) return !1;
  return !0;
}
function yt(r, e) {
  for (let t = 0, n = e.length; t < n; t++)
    r[t] = e[t];
}
function Bo(r, e) {
  let t = ph[e];
  t === void 0 && (t = new Int32Array(e), ph[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = r.allocateTextureUnit();
  return t;
}
function U_(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function D_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (_t(t, e)) return;
    r.uniform2fv(this.addr, e), yt(t, e);
  }
}
function N_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (_t(t, e)) return;
    r.uniform3fv(this.addr, e), yt(t, e);
  }
}
function O_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (_t(t, e)) return;
    r.uniform4fv(this.addr, e), yt(t, e);
  }
}
function F_(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    r.uniformMatrix2fv(this.addr, !1, e), yt(t, e);
  } else {
    if (_t(t, n)) return;
    _h.set(n), r.uniformMatrix2fv(this.addr, !1, _h), yt(t, n);
  }
}
function B_(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), yt(t, e);
  } else {
    if (_t(t, n)) return;
    gh.set(n), r.uniformMatrix3fv(this.addr, !1, gh), yt(t, n);
  }
}
function z_(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), yt(t, e);
  } else {
    if (_t(t, n)) return;
    mh.set(n), r.uniformMatrix4fv(this.addr, !1, mh), yt(t, n);
  }
}
function k_(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function H_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (_t(t, e)) return;
    r.uniform2iv(this.addr, e), yt(t, e);
  }
}
function G_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (_t(t, e)) return;
    r.uniform3iv(this.addr, e), yt(t, e);
  }
}
function V_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (_t(t, e)) return;
    r.uniform4iv(this.addr, e), yt(t, e);
  }
}
function W_(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function X_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (_t(t, e)) return;
    r.uniform2uiv(this.addr, e), yt(t, e);
  }
}
function q_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (_t(t, e)) return;
    r.uniform3uiv(this.addr, e), yt(t, e);
  }
}
function Y_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (_t(t, e)) return;
    r.uniform4uiv(this.addr, e), yt(t, e);
  }
}
function K_(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || lf, i);
}
function Z_(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || uf, i);
}
function J_(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || df, i);
}
function j_(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || hf, i);
}
function Q_(r) {
  switch (r) {
    case 5126:
      return U_;
    // FLOAT
    case 35664:
      return D_;
    // _VEC2
    case 35665:
      return N_;
    // _VEC3
    case 35666:
      return O_;
    // _VEC4
    case 35674:
      return F_;
    // _MAT2
    case 35675:
      return B_;
    // _MAT3
    case 35676:
      return z_;
    // _MAT4
    case 5124:
    case 35670:
      return k_;
    // INT, BOOL
    case 35667:
    case 35671:
      return H_;
    // _VEC2
    case 35668:
    case 35672:
      return G_;
    // _VEC3
    case 35669:
    case 35673:
      return V_;
    // _VEC4
    case 5125:
      return W_;
    // UINT
    case 36294:
      return X_;
    // _VEC2
    case 36295:
      return q_;
    // _VEC3
    case 36296:
      return Y_;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return K_;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Z_;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return J_;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return j_;
  }
}
function $_(r, e) {
  r.uniform1fv(this.addr, e);
}
function ey(r, e) {
  const t = Ts(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function ty(r, e) {
  const t = Ts(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function ny(r, e) {
  const t = Ts(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function iy(r, e) {
  const t = Ts(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function sy(r, e) {
  const t = Ts(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function ry(r, e) {
  const t = Ts(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function oy(r, e) {
  r.uniform1iv(this.addr, e);
}
function ay(r, e) {
  r.uniform2iv(this.addr, e);
}
function cy(r, e) {
  r.uniform3iv(this.addr, e);
}
function ly(r, e) {
  r.uniform4iv(this.addr, e);
}
function hy(r, e) {
  r.uniform1uiv(this.addr, e);
}
function uy(r, e) {
  r.uniform2uiv(this.addr, e);
}
function dy(r, e) {
  r.uniform3uiv(this.addr, e);
}
function fy(r, e) {
  r.uniform4uiv(this.addr, e);
}
function py(r, e, t) {
  const n = this.cache, i = e.length, s = Bo(t, i);
  _t(n, s) || (r.uniform1iv(this.addr, s), yt(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture2D(e[o] || lf, s[o]);
}
function my(r, e, t) {
  const n = this.cache, i = e.length, s = Bo(t, i);
  _t(n, s) || (r.uniform1iv(this.addr, s), yt(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture3D(e[o] || uf, s[o]);
}
function gy(r, e, t) {
  const n = this.cache, i = e.length, s = Bo(t, i);
  _t(n, s) || (r.uniform1iv(this.addr, s), yt(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTextureCube(e[o] || df, s[o]);
}
function _y(r, e, t) {
  const n = this.cache, i = e.length, s = Bo(t, i);
  _t(n, s) || (r.uniform1iv(this.addr, s), yt(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture2DArray(e[o] || hf, s[o]);
}
function yy(r) {
  switch (r) {
    case 5126:
      return $_;
    // FLOAT
    case 35664:
      return ey;
    // _VEC2
    case 35665:
      return ty;
    // _VEC3
    case 35666:
      return ny;
    // _VEC4
    case 35674:
      return iy;
    // _MAT2
    case 35675:
      return sy;
    // _MAT3
    case 35676:
      return ry;
    // _MAT4
    case 5124:
    case 35670:
      return oy;
    // INT, BOOL
    case 35667:
    case 35671:
      return ay;
    // _VEC2
    case 35668:
    case 35672:
      return cy;
    // _VEC3
    case 35669:
    case 35673:
      return ly;
    // _VEC4
    case 5125:
      return hy;
    // UINT
    case 36294:
      return uy;
    // _VEC2
    case 36295:
      return dy;
    // _VEC3
    case 36296:
      return fy;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return py;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return my;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return gy;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return _y;
  }
}
class xy {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = Q_(t.type);
  }
}
class vy {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = yy(t.type);
  }
}
class My {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, o = i.length; s !== o; ++s) {
      const a = i[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const _a = /(\w+)(\])?(\[|\.)?/g;
function yh(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function Sy(r, e, t) {
  const n = r.name, i = n.length;
  for (_a.lastIndex = 0; ; ) {
    const s = _a.exec(n), o = _a.lastIndex;
    let a = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === i) {
      yh(t, l === void 0 ? new xy(a, r, e) : new vy(a, r, e));
      break;
    } else {
      let u = t.map[a];
      u === void 0 && (u = new My(a), yh(t, u)), t = u;
    }
  }
}
class To {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), o = e.getUniformLocation(t, s.name);
      Sy(s, o, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s], c = n[a.id];
      c.needsUpdate !== !1 && a.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const o = e[i];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function xh(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
let Ey = 0;
function by(r, e) {
  const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = i; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Ty(r) {
  switch (r) {
    case Kt:
      return ["Linear", "( value )"];
    case De:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", r), ["Linear", "( value )"];
  }
}
function vh(r, e, t) {
  const n = r.getShaderParameter(e, r.COMPILE_STATUS), i = r.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + by(r.getShaderSource(e), o);
  } else
    return i;
}
function Ay(r, e) {
  const t = Ty(e);
  return "vec4 " + r + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function wy(r, e) {
  let t;
  switch (e) {
    case Ed:
      t = "Linear";
      break;
    case bd:
      t = "Reinhard";
      break;
    case Td:
      t = "OptimizedCineon";
      break;
    case Ad:
      t = "ACESFilmic";
      break;
    case wd:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Ry(r) {
  return [
    r.extensionDerivatives || r.envMapCubeUVHeight || r.bumpMap || r.normalMapTangentSpace || r.clearcoatNormalMap || r.flatShading || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(Xs).join(`
`);
}
function Cy(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Ly(r, e) {
  const t = {}, n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i), o = s.name;
    let a = 1;
    s.type === r.FLOAT_MAT2 && (a = 2), s.type === r.FLOAT_MAT3 && (a = 3), s.type === r.FLOAT_MAT4 && (a = 4), t[o] = {
      type: s.type,
      location: r.getAttribLocation(e, o),
      locationSize: a
    };
  }
  return t;
}
function Xs(r) {
  return r !== "";
}
function Mh(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Sh(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Py = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Fc(r) {
  return r.replace(Py, Iy);
}
function Iy(r, e) {
  const t = ke[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return Fc(t);
}
const Uy = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Eh(r) {
  return r.replace(Uy, Dy);
}
function Dy(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function bh(r) {
  let e = "precision " + r.precision + ` float;
precision ` + r.precision + " int;";
  return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Ny(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === qc ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === td ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === un && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Oy(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case Zn:
      case Jn:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Ss:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Fy(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  return r.envMap && r.envMapMode === Jn && (e = "ENVMAP_MODE_REFRACTION"), e;
}
function By(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case cr:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Md:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Sd:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function zy(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function ky(r, e, t, n) {
  const i = r.getContext(), s = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const c = Ny(t), l = Oy(t), h = Fy(t), u = By(t), d = zy(t), f = t.isWebGL2 ? "" : Ry(t), m = Cy(s), y = i.createProgram();
  let g, p, x = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (g = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    m
  ].filter(Xs).join(`
`), g.length > 0 && (g += `
`), p = [
    f,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    m
  ].filter(Xs).join(`
`), p.length > 0 && (p += `
`)) : (g = [
    bh(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    m,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Xs).join(`
`), p = [
    f,
    bh(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    m,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + u : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== pn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== pn ? ke.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== pn ? wy("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    ke.encodings_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Ay("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Xs).join(`
`)), o = Fc(o), o = Mh(o, t), o = Sh(o, t), a = Fc(a), a = Mh(a, t), a = Sh(a, t), o = Eh(o), a = Eh(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (x = `#version 300 es
`, g = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + g, p = [
    "#define varying in",
    t.glslVersion === Dc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Dc ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + p);
  const _ = x + g + o, v = x + p + a, S = xh(i, i.VERTEX_SHADER, _), E = xh(i, i.FRAGMENT_SHADER, v);
  if (i.attachShader(y, S), i.attachShader(y, E), t.index0AttributeName !== void 0 ? i.bindAttribLocation(y, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(y, 0, "position"), i.linkProgram(y), r.debug.checkShaderErrors) {
    const M = i.getProgramInfoLog(y).trim(), b = i.getShaderInfoLog(S).trim(), P = i.getShaderInfoLog(E).trim();
    let F = !0, D = !0;
    if (i.getProgramParameter(y, i.LINK_STATUS) === !1)
      if (F = !1, typeof r.debug.onShaderError == "function")
        r.debug.onShaderError(i, y, S, E);
      else {
        const N = vh(i, S, "vertex"), B = vh(i, E, "fragment");
        console.error(
          "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(y, i.VALIDATE_STATUS) + `

Program Info Log: ` + M + `
` + N + `
` + B
        );
      }
    else M !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", M) : (b === "" || P === "") && (D = !1);
    D && (this.diagnostics = {
      runnable: F,
      programLog: M,
      vertexShader: {
        log: b,
        prefix: g
      },
      fragmentShader: {
        log: P,
        prefix: p
      }
    });
  }
  i.deleteShader(S), i.deleteShader(E);
  let T;
  this.getUniforms = function() {
    return T === void 0 && (T = new To(i, y)), T;
  };
  let A;
  return this.getAttributes = function() {
    return A === void 0 && (A = Ly(i, y)), A;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(y), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Ey++, this.cacheKey = e, this.usedTimes = 1, this.program = y, this.vertexShader = S, this.fragmentShader = E, this;
}
let Hy = 0;
class Gy {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Vy(e), t.set(e, n)), n;
  }
}
class Vy {
  constructor(e) {
    this.id = Hy++, this.code = e, this.usedTimes = 0;
  }
}
function Wy(r, e, t, n, i, s, o) {
  const a = new No(), c = new Gy(), l = [], h = i.isWebGL2, u = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let f = i.precision;
  const m = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function y(M) {
    return M === 0 ? "uv" : `uv${M}`;
  }
  function g(M, b, P, F, D) {
    const N = F.fog, B = D.geometry, J = M.isMeshStandardMaterial ? F.environment : null, W = (M.isMeshStandardMaterial ? t : e).get(M.envMap || J), X = W && W.mapping === Ss ? W.image.height : null, Q = m[M.type];
    M.precision !== null && (f = i.getMaxPrecision(M.precision), f !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", f, "instead."));
    const te = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, ue = te !== void 0 ? te.length : 0;
    let H = 0;
    B.morphAttributes.position !== void 0 && (H = 1), B.morphAttributes.normal !== void 0 && (H = 2), B.morphAttributes.color !== void 0 && (H = 3);
    let ne, ie, pe, _e;
    if (Q) {
      const ft = en[Q];
      ne = ft.vertexShader, ie = ft.fragmentShader;
    } else
      ne = M.vertexShader, ie = M.fragmentShader, c.update(M), pe = c.getVertexShaderID(M), _e = c.getFragmentShaderID(M);
    const me = r.getRenderTarget(), Ce = D.isInstancedMesh === !0, we = !!M.map, Ye = !!M.matcap, Pe = !!W, U = !!M.aoMap, ce = !!M.lightMap, j = !!M.bumpMap, ae = !!M.normalMap, $ = !!M.displacementMap, Te = !!M.emissiveMap, ye = !!M.metalnessMap, xe = !!M.roughnessMap, Ie = M.anisotropy > 0, We = M.clearcoat > 0, it = M.iridescence > 0, L = M.sheen > 0, w = M.transmission > 0, q = Ie && !!M.anisotropyMap, oe = We && !!M.clearcoatMap, re = We && !!M.clearcoatNormalMap, I = We && !!M.clearcoatRoughnessMap, ee = it && !!M.iridescenceMap, se = it && !!M.iridescenceThicknessMap, G = L && !!M.sheenColorMap, Se = L && !!M.sheenRoughnessMap, Re = !!M.specularMap, Ae = !!M.specularColorMap, Ee = !!M.specularIntensityMap, ve = w && !!M.transmissionMap, Ue = w && !!M.thicknessMap, qe = !!M.gradientMap, O = !!M.alphaMap, fe = M.alphaTest > 0, V = !!M.extensions, le = !!B.attributes.uv1, ge = !!B.attributes.uv2, Qe = !!B.attributes.uv3;
    return {
      isWebGL2: h,
      shaderID: Q,
      shaderType: M.type,
      shaderName: M.name,
      vertexShader: ne,
      fragmentShader: ie,
      defines: M.defines,
      customVertexShaderID: pe,
      customFragmentShaderID: _e,
      isRawShaderMaterial: M.isRawShaderMaterial === !0,
      glslVersion: M.glslVersion,
      precision: f,
      instancing: Ce,
      instancingColor: Ce && D.instanceColor !== null,
      supportsVertexTextures: d,
      outputColorSpace: me === null ? r.outputColorSpace : me.isXRRenderTarget === !0 ? me.texture.colorSpace : Kt,
      map: we,
      matcap: Ye,
      envMap: Pe,
      envMapMode: Pe && W.mapping,
      envMapCubeUVHeight: X,
      aoMap: U,
      lightMap: ce,
      bumpMap: j,
      normalMap: ae,
      displacementMap: d && $,
      emissiveMap: Te,
      normalMapObjectSpace: ae && M.normalMapType === Vd,
      normalMapTangentSpace: ae && M.normalMapType === ei,
      metalnessMap: ye,
      roughnessMap: xe,
      anisotropy: Ie,
      anisotropyMap: q,
      clearcoat: We,
      clearcoatMap: oe,
      clearcoatNormalMap: re,
      clearcoatRoughnessMap: I,
      iridescence: it,
      iridescenceMap: ee,
      iridescenceThicknessMap: se,
      sheen: L,
      sheenColorMap: G,
      sheenRoughnessMap: Se,
      specularMap: Re,
      specularColorMap: Ae,
      specularIntensityMap: Ee,
      transmission: w,
      transmissionMap: ve,
      thicknessMap: Ue,
      gradientMap: qe,
      opaque: M.transparent === !1 && M.blending === Ti,
      alphaMap: O,
      alphaTest: fe,
      combine: M.combine,
      //
      mapUv: we && y(M.map.channel),
      aoMapUv: U && y(M.aoMap.channel),
      lightMapUv: ce && y(M.lightMap.channel),
      bumpMapUv: j && y(M.bumpMap.channel),
      normalMapUv: ae && y(M.normalMap.channel),
      displacementMapUv: $ && y(M.displacementMap.channel),
      emissiveMapUv: Te && y(M.emissiveMap.channel),
      metalnessMapUv: ye && y(M.metalnessMap.channel),
      roughnessMapUv: xe && y(M.roughnessMap.channel),
      anisotropyMapUv: q && y(M.anisotropyMap.channel),
      clearcoatMapUv: oe && y(M.clearcoatMap.channel),
      clearcoatNormalMapUv: re && y(M.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: I && y(M.clearcoatRoughnessMap.channel),
      iridescenceMapUv: ee && y(M.iridescenceMap.channel),
      iridescenceThicknessMapUv: se && y(M.iridescenceThicknessMap.channel),
      sheenColorMapUv: G && y(M.sheenColorMap.channel),
      sheenRoughnessMapUv: Se && y(M.sheenRoughnessMap.channel),
      specularMapUv: Re && y(M.specularMap.channel),
      specularColorMapUv: Ae && y(M.specularColorMap.channel),
      specularIntensityMapUv: Ee && y(M.specularIntensityMap.channel),
      transmissionMapUv: ve && y(M.transmissionMap.channel),
      thicknessMapUv: Ue && y(M.thicknessMap.channel),
      alphaMapUv: O && y(M.alphaMap.channel),
      //
      vertexTangents: !!B.attributes.tangent && (ae || Ie),
      vertexColors: M.vertexColors,
      vertexAlphas: M.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4,
      vertexUv1s: le,
      vertexUv2s: ge,
      vertexUv3s: Qe,
      pointsUvs: D.isPoints === !0 && !!B.attributes.uv && (we || O),
      fog: !!N,
      useFog: M.fog === !0,
      fogExp2: N && N.isFogExp2,
      flatShading: M.flatShading === !0,
      sizeAttenuation: M.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      skinning: D.isSkinnedMesh === !0,
      morphTargets: B.morphAttributes.position !== void 0,
      morphNormals: B.morphAttributes.normal !== void 0,
      morphColors: B.morphAttributes.color !== void 0,
      morphTargetsCount: ue,
      morphTextureStride: H,
      numDirLights: b.directional.length,
      numPointLights: b.point.length,
      numSpotLights: b.spot.length,
      numSpotLightMaps: b.spotLightMap.length,
      numRectAreaLights: b.rectArea.length,
      numHemiLights: b.hemi.length,
      numDirLightShadows: b.directionalShadowMap.length,
      numPointLightShadows: b.pointShadowMap.length,
      numSpotLightShadows: b.spotShadowMap.length,
      numSpotLightShadowsWithMaps: b.numSpotLightShadowsWithMaps,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: M.dithering,
      shadowMapEnabled: r.shadowMap.enabled && P.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: M.toneMapped ? r.toneMapping : pn,
      useLegacyLights: r.useLegacyLights,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === tn,
      flipSided: M.side === It,
      useDepthPacking: M.depthPacking >= 0,
      depthPacking: M.depthPacking || 0,
      index0AttributeName: M.index0AttributeName,
      extensionDerivatives: V && M.extensions.derivatives === !0,
      extensionFragDepth: V && M.extensions.fragDepth === !0,
      extensionDrawBuffers: V && M.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: V && M.extensions.shaderTextureLOD === !0,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: M.customProgramCacheKey()
    };
  }
  function p(M) {
    const b = [];
    if (M.shaderID ? b.push(M.shaderID) : (b.push(M.customVertexShaderID), b.push(M.customFragmentShaderID)), M.defines !== void 0)
      for (const P in M.defines)
        b.push(P), b.push(M.defines[P]);
    return M.isRawShaderMaterial === !1 && (x(b, M), _(b, M), b.push(r.outputColorSpace)), b.push(M.customProgramCacheKey), b.join();
  }
  function x(M, b) {
    M.push(b.precision), M.push(b.outputColorSpace), M.push(b.envMapMode), M.push(b.envMapCubeUVHeight), M.push(b.mapUv), M.push(b.alphaMapUv), M.push(b.lightMapUv), M.push(b.aoMapUv), M.push(b.bumpMapUv), M.push(b.normalMapUv), M.push(b.displacementMapUv), M.push(b.emissiveMapUv), M.push(b.metalnessMapUv), M.push(b.roughnessMapUv), M.push(b.anisotropyMapUv), M.push(b.clearcoatMapUv), M.push(b.clearcoatNormalMapUv), M.push(b.clearcoatRoughnessMapUv), M.push(b.iridescenceMapUv), M.push(b.iridescenceThicknessMapUv), M.push(b.sheenColorMapUv), M.push(b.sheenRoughnessMapUv), M.push(b.specularMapUv), M.push(b.specularColorMapUv), M.push(b.specularIntensityMapUv), M.push(b.transmissionMapUv), M.push(b.thicknessMapUv), M.push(b.combine), M.push(b.fogExp2), M.push(b.sizeAttenuation), M.push(b.morphTargetsCount), M.push(b.morphAttributeCount), M.push(b.numDirLights), M.push(b.numPointLights), M.push(b.numSpotLights), M.push(b.numSpotLightMaps), M.push(b.numHemiLights), M.push(b.numRectAreaLights), M.push(b.numDirLightShadows), M.push(b.numPointLightShadows), M.push(b.numSpotLightShadows), M.push(b.numSpotLightShadowsWithMaps), M.push(b.shadowMapType), M.push(b.toneMapping), M.push(b.numClippingPlanes), M.push(b.numClipIntersection), M.push(b.depthPacking);
  }
  function _(M, b) {
    a.disableAll(), b.isWebGL2 && a.enable(0), b.supportsVertexTextures && a.enable(1), b.instancing && a.enable(2), b.instancingColor && a.enable(3), b.matcap && a.enable(4), b.envMap && a.enable(5), b.normalMapObjectSpace && a.enable(6), b.normalMapTangentSpace && a.enable(7), b.clearcoat && a.enable(8), b.iridescence && a.enable(9), b.alphaTest && a.enable(10), b.vertexColors && a.enable(11), b.vertexAlphas && a.enable(12), b.vertexUv1s && a.enable(13), b.vertexUv2s && a.enable(14), b.vertexUv3s && a.enable(15), b.vertexTangents && a.enable(16), b.anisotropy && a.enable(17), M.push(a.mask), a.disableAll(), b.fog && a.enable(0), b.useFog && a.enable(1), b.flatShading && a.enable(2), b.logarithmicDepthBuffer && a.enable(3), b.skinning && a.enable(4), b.morphTargets && a.enable(5), b.morphNormals && a.enable(6), b.morphColors && a.enable(7), b.premultipliedAlpha && a.enable(8), b.shadowMapEnabled && a.enable(9), b.useLegacyLights && a.enable(10), b.doubleSided && a.enable(11), b.flipSided && a.enable(12), b.useDepthPacking && a.enable(13), b.dithering && a.enable(14), b.transmission && a.enable(15), b.sheen && a.enable(16), b.opaque && a.enable(17), b.pointsUvs && a.enable(18), M.push(a.mask);
  }
  function v(M) {
    const b = m[M.type];
    let P;
    if (b) {
      const F = en[b];
      P = rf.clone(F.uniforms);
    } else
      P = M.uniforms;
    return P;
  }
  function S(M, b) {
    let P;
    for (let F = 0, D = l.length; F < D; F++) {
      const N = l[F];
      if (N.cacheKey === b) {
        P = N, ++P.usedTimes;
        break;
      }
    }
    return P === void 0 && (P = new ky(r, b, M, s), l.push(P)), P;
  }
  function E(M) {
    if (--M.usedTimes === 0) {
      const b = l.indexOf(M);
      l[b] = l[l.length - 1], l.pop(), M.destroy();
    }
  }
  function T(M) {
    c.remove(M);
  }
  function A() {
    c.dispose();
  }
  return {
    getParameters: g,
    getProgramCacheKey: p,
    getUniforms: v,
    acquireProgram: S,
    releaseProgram: E,
    releaseShaderCache: T,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: l,
    dispose: A
  };
}
function Xy() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let o = r.get(s);
    return o === void 0 && (o = {}, r.set(s, o)), o;
  }
  function t(s) {
    r.delete(s);
  }
  function n(s, o, a) {
    r.get(s)[o] = a;
  }
  function i() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function qy(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function Th(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function Ah() {
  const r = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function o(u, d, f, m, y, g) {
    let p = r[e];
    return p === void 0 ? (p = {
      id: u.id,
      object: u,
      geometry: d,
      material: f,
      groupOrder: m,
      renderOrder: u.renderOrder,
      z: y,
      group: g
    }, r[e] = p) : (p.id = u.id, p.object = u, p.geometry = d, p.material = f, p.groupOrder = m, p.renderOrder = u.renderOrder, p.z = y, p.group = g), e++, p;
  }
  function a(u, d, f, m, y, g) {
    const p = o(u, d, f, m, y, g);
    f.transmission > 0 ? n.push(p) : f.transparent === !0 ? i.push(p) : t.push(p);
  }
  function c(u, d, f, m, y, g) {
    const p = o(u, d, f, m, y, g);
    f.transmission > 0 ? n.unshift(p) : f.transparent === !0 ? i.unshift(p) : t.unshift(p);
  }
  function l(u, d) {
    t.length > 1 && t.sort(u || qy), n.length > 1 && n.sort(d || Th), i.length > 1 && i.sort(d || Th);
  }
  function h() {
    for (let u = e, d = r.length; u < d; u++) {
      const f = r[u];
      if (f.id === null) break;
      f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: a,
    unshift: c,
    finish: h,
    sort: l
  };
}
function Yy() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let o;
    return s === void 0 ? (o = new Ah(), r.set(n, [o])) : i >= s.length ? (o = new Ah(), s.push(o)) : o = s[i], o;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Ky() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new R(),
            color: new de()
          };
          break;
        case "SpotLight":
          t = {
            position: new R(),
            direction: new R(),
            color: new de(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new R(),
            color: new de(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new R(),
            skyColor: new de(),
            groundColor: new de()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new de(),
            position: new R(),
            halfWidth: new R(),
            halfHeight: new R()
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
function Zy() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Z()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Z()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Z(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
let Jy = 0;
function jy(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function Qy(r, e) {
  const t = new Ky(), n = Zy(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0
  };
  for (let h = 0; h < 9; h++) i.probe.push(new R());
  const s = new R(), o = new Ne(), a = new Ne();
  function c(h, u) {
    let d = 0, f = 0, m = 0;
    for (let P = 0; P < 9; P++) i.probe[P].set(0, 0, 0);
    let y = 0, g = 0, p = 0, x = 0, _ = 0, v = 0, S = 0, E = 0, T = 0, A = 0;
    h.sort(jy);
    const M = u === !0 ? Math.PI : 1;
    for (let P = 0, F = h.length; P < F; P++) {
      const D = h[P], N = D.color, B = D.intensity, J = D.distance, W = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
      if (D.isAmbientLight)
        d += N.r * B * M, f += N.g * B * M, m += N.b * B * M;
      else if (D.isLightProbe)
        for (let X = 0; X < 9; X++)
          i.probe[X].addScaledVector(D.sh.coefficients[X], B);
      else if (D.isDirectionalLight) {
        const X = t.get(D);
        if (X.color.copy(D.color).multiplyScalar(D.intensity * M), D.castShadow) {
          const Q = D.shadow, te = n.get(D);
          te.shadowBias = Q.bias, te.shadowNormalBias = Q.normalBias, te.shadowRadius = Q.radius, te.shadowMapSize = Q.mapSize, i.directionalShadow[y] = te, i.directionalShadowMap[y] = W, i.directionalShadowMatrix[y] = D.shadow.matrix, v++;
        }
        i.directional[y] = X, y++;
      } else if (D.isSpotLight) {
        const X = t.get(D);
        X.position.setFromMatrixPosition(D.matrixWorld), X.color.copy(N).multiplyScalar(B * M), X.distance = J, X.coneCos = Math.cos(D.angle), X.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), X.decay = D.decay, i.spot[p] = X;
        const Q = D.shadow;
        if (D.map && (i.spotLightMap[T] = D.map, T++, Q.updateMatrices(D), D.castShadow && A++), i.spotLightMatrix[p] = Q.matrix, D.castShadow) {
          const te = n.get(D);
          te.shadowBias = Q.bias, te.shadowNormalBias = Q.normalBias, te.shadowRadius = Q.radius, te.shadowMapSize = Q.mapSize, i.spotShadow[p] = te, i.spotShadowMap[p] = W, E++;
        }
        p++;
      } else if (D.isRectAreaLight) {
        const X = t.get(D);
        X.color.copy(N).multiplyScalar(B), X.halfWidth.set(D.width * 0.5, 0, 0), X.halfHeight.set(0, D.height * 0.5, 0), i.rectArea[x] = X, x++;
      } else if (D.isPointLight) {
        const X = t.get(D);
        if (X.color.copy(D.color).multiplyScalar(D.intensity * M), X.distance = D.distance, X.decay = D.decay, D.castShadow) {
          const Q = D.shadow, te = n.get(D);
          te.shadowBias = Q.bias, te.shadowNormalBias = Q.normalBias, te.shadowRadius = Q.radius, te.shadowMapSize = Q.mapSize, te.shadowCameraNear = Q.camera.near, te.shadowCameraFar = Q.camera.far, i.pointShadow[g] = te, i.pointShadowMap[g] = W, i.pointShadowMatrix[g] = D.shadow.matrix, S++;
        }
        i.point[g] = X, g++;
      } else if (D.isHemisphereLight) {
        const X = t.get(D);
        X.skyColor.copy(D.color).multiplyScalar(B * M), X.groundColor.copy(D.groundColor).multiplyScalar(B * M), i.hemi[_] = X, _++;
      }
    }
    x > 0 && (e.isWebGL2 || r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = he.LTC_FLOAT_1, i.rectAreaLTC2 = he.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = he.LTC_HALF_1, i.rectAreaLTC2 = he.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = f, i.ambient[2] = m;
    const b = i.hash;
    (b.directionalLength !== y || b.pointLength !== g || b.spotLength !== p || b.rectAreaLength !== x || b.hemiLength !== _ || b.numDirectionalShadows !== v || b.numPointShadows !== S || b.numSpotShadows !== E || b.numSpotMaps !== T) && (i.directional.length = y, i.spot.length = p, i.rectArea.length = x, i.point.length = g, i.hemi.length = _, i.directionalShadow.length = v, i.directionalShadowMap.length = v, i.pointShadow.length = S, i.pointShadowMap.length = S, i.spotShadow.length = E, i.spotShadowMap.length = E, i.directionalShadowMatrix.length = v, i.pointShadowMatrix.length = S, i.spotLightMatrix.length = E + T - A, i.spotLightMap.length = T, i.numSpotLightShadowsWithMaps = A, b.directionalLength = y, b.pointLength = g, b.spotLength = p, b.rectAreaLength = x, b.hemiLength = _, b.numDirectionalShadows = v, b.numPointShadows = S, b.numSpotShadows = E, b.numSpotMaps = T, i.version = Jy++);
  }
  function l(h, u) {
    let d = 0, f = 0, m = 0, y = 0, g = 0;
    const p = u.matrixWorldInverse;
    for (let x = 0, _ = h.length; x < _; x++) {
      const v = h[x];
      if (v.isDirectionalLight) {
        const S = i.directional[d];
        S.direction.setFromMatrixPosition(v.matrixWorld), s.setFromMatrixPosition(v.target.matrixWorld), S.direction.sub(s), S.direction.transformDirection(p), d++;
      } else if (v.isSpotLight) {
        const S = i.spot[m];
        S.position.setFromMatrixPosition(v.matrixWorld), S.position.applyMatrix4(p), S.direction.setFromMatrixPosition(v.matrixWorld), s.setFromMatrixPosition(v.target.matrixWorld), S.direction.sub(s), S.direction.transformDirection(p), m++;
      } else if (v.isRectAreaLight) {
        const S = i.rectArea[y];
        S.position.setFromMatrixPosition(v.matrixWorld), S.position.applyMatrix4(p), a.identity(), o.copy(v.matrixWorld), o.premultiply(p), a.extractRotation(o), S.halfWidth.set(v.width * 0.5, 0, 0), S.halfHeight.set(0, v.height * 0.5, 0), S.halfWidth.applyMatrix4(a), S.halfHeight.applyMatrix4(a), y++;
      } else if (v.isPointLight) {
        const S = i.point[f];
        S.position.setFromMatrixPosition(v.matrixWorld), S.position.applyMatrix4(p), f++;
      } else if (v.isHemisphereLight) {
        const S = i.hemi[g];
        S.direction.setFromMatrixPosition(v.matrixWorld), S.direction.transformDirection(p), g++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: i
  };
}
function wh(r, e) {
  const t = new Qy(r, e), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function o(u) {
    n.push(u);
  }
  function a(u) {
    i.push(u);
  }
  function c(u) {
    t.setup(n, u);
  }
  function l(u) {
    t.setupView(n, u);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: c,
    setupLightsView: l,
    pushLight: o,
    pushShadow: a
  };
}
function $y(r, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let c;
    return a === void 0 ? (c = new wh(r, e), t.set(s, [c])) : o >= a.length ? (c = new wh(r, e), a.push(c)) : c = a[o], c;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class ul extends gt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Hd, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class dl extends gt {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const ex = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, tx = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function nx(r, e, t) {
  let n = new Fo();
  const i = new Z(), s = new Z(), o = new et(), a = new ul({ depthPacking: Gd }), c = new dl(), l = {}, h = t.maxTextureSize, u = { [gn]: It, [It]: gn, [tn]: tn }, d = new yn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Z() },
      radius: { value: 4 }
    },
    vertexShader: ex,
    fragmentShader: tx
  }), f = d.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const m = new Ve();
  m.setAttribute(
    "position",
    new $e(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const y = new St(m, d), g = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = qc;
  let p = this.type;
  this.render = function(S, E, T) {
    if (g.enabled === !1 || g.autoUpdate === !1 && g.needsUpdate === !1 || S.length === 0) return;
    const A = r.getRenderTarget(), M = r.getActiveCubeFace(), b = r.getActiveMipmapLevel(), P = r.state;
    P.setBlending(In), P.buffers.color.setClear(1, 1, 1, 1), P.buffers.depth.setTest(!0), P.setScissorTest(!1);
    const F = p !== un && this.type === un, D = p === un && this.type !== un;
    for (let N = 0, B = S.length; N < B; N++) {
      const J = S[N], W = J.shadow;
      if (W === void 0) {
        console.warn("THREE.WebGLShadowMap:", J, "has no shadow.");
        continue;
      }
      if (W.autoUpdate === !1 && W.needsUpdate === !1) continue;
      i.copy(W.mapSize);
      const X = W.getFrameExtents();
      if (i.multiply(X), s.copy(W.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / X.x), i.x = s.x * X.x, W.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / X.y), i.y = s.y * X.y, W.mapSize.y = s.y)), W.map === null || F === !0 || D === !0) {
        const te = this.type !== un ? { minFilter: lt, magFilter: lt } : {};
        W.map !== null && W.map.dispose(), W.map = new nn(i.x, i.y, te), W.map.texture.name = J.name + ".shadowMap", W.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(W.map), r.clear();
      const Q = W.getViewportCount();
      for (let te = 0; te < Q; te++) {
        const ue = W.getViewport(te);
        o.set(
          s.x * ue.x,
          s.y * ue.y,
          s.x * ue.z,
          s.y * ue.w
        ), P.viewport(o), W.updateMatrices(J, te), n = W.getFrustum(), v(E, T, W.camera, J, this.type);
      }
      W.isPointLightShadow !== !0 && this.type === un && x(W, T), W.needsUpdate = !1;
    }
    p = this.type, g.needsUpdate = !1, r.setRenderTarget(A, M, b);
  };
  function x(S, E) {
    const T = e.update(y);
    d.defines.VSM_SAMPLES !== S.blurSamples && (d.defines.VSM_SAMPLES = S.blurSamples, f.defines.VSM_SAMPLES = S.blurSamples, d.needsUpdate = !0, f.needsUpdate = !0), S.mapPass === null && (S.mapPass = new nn(i.x, i.y)), d.uniforms.shadow_pass.value = S.map.texture, d.uniforms.resolution.value = S.mapSize, d.uniforms.radius.value = S.radius, r.setRenderTarget(S.mapPass), r.clear(), r.renderBufferDirect(E, null, T, d, y, null), f.uniforms.shadow_pass.value = S.mapPass.texture, f.uniforms.resolution.value = S.mapSize, f.uniforms.radius.value = S.radius, r.setRenderTarget(S.map), r.clear(), r.renderBufferDirect(E, null, T, f, y, null);
  }
  function _(S, E, T, A) {
    let M = null;
    const b = T.isPointLight === !0 ? S.customDistanceMaterial : S.customDepthMaterial;
    if (b !== void 0)
      M = b;
    else if (M = T.isPointLight === !0 ? c : a, r.localClippingEnabled && E.clipShadows === !0 && Array.isArray(E.clippingPlanes) && E.clippingPlanes.length !== 0 || E.displacementMap && E.displacementScale !== 0 || E.alphaMap && E.alphaTest > 0 || E.map && E.alphaTest > 0) {
      const P = M.uuid, F = E.uuid;
      let D = l[P];
      D === void 0 && (D = {}, l[P] = D);
      let N = D[F];
      N === void 0 && (N = M.clone(), D[F] = N), M = N;
    }
    if (M.visible = E.visible, M.wireframe = E.wireframe, A === un ? M.side = E.shadowSide !== null ? E.shadowSide : E.side : M.side = E.shadowSide !== null ? E.shadowSide : u[E.side], M.alphaMap = E.alphaMap, M.alphaTest = E.alphaTest, M.map = E.map, M.clipShadows = E.clipShadows, M.clippingPlanes = E.clippingPlanes, M.clipIntersection = E.clipIntersection, M.displacementMap = E.displacementMap, M.displacementScale = E.displacementScale, M.displacementBias = E.displacementBias, M.wireframeLinewidth = E.wireframeLinewidth, M.linewidth = E.linewidth, T.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
      const P = r.properties.get(M);
      P.light = T;
    }
    return M;
  }
  function v(S, E, T, A, M) {
    if (S.visible === !1) return;
    if (S.layers.test(E.layers) && (S.isMesh || S.isLine || S.isPoints) && (S.castShadow || S.receiveShadow && M === un) && (!S.frustumCulled || n.intersectsObject(S))) {
      S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse, S.matrixWorld);
      const F = e.update(S), D = S.material;
      if (Array.isArray(D)) {
        const N = F.groups;
        for (let B = 0, J = N.length; B < J; B++) {
          const W = N[B], X = D[W.materialIndex];
          if (X && X.visible) {
            const Q = _(S, X, A, M);
            r.renderBufferDirect(T, null, F, Q, S, W);
          }
        }
      } else if (D.visible) {
        const N = _(S, D, A, M);
        r.renderBufferDirect(T, null, F, N, S, null);
      }
    }
    const P = S.children;
    for (let F = 0, D = P.length; F < D; F++)
      v(P[F], E, T, A, M);
  }
}
function ix(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let O = !1;
    const fe = new et();
    let V = null;
    const le = new et(0, 0, 0, 0);
    return {
      setMask: function(ge) {
        V !== ge && !O && (r.colorMask(ge, ge, ge, ge), V = ge);
      },
      setLocked: function(ge) {
        O = ge;
      },
      setClear: function(ge, Qe, ot, ft, ii) {
        ii === !0 && (ge *= ft, Qe *= ft, ot *= ft), fe.set(ge, Qe, ot, ft), le.equals(fe) === !1 && (r.clearColor(ge, Qe, ot, ft), le.copy(fe));
      },
      reset: function() {
        O = !1, V = null, le.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let O = !1, fe = null, V = null, le = null;
    return {
      setTest: function(ge) {
        ge ? me(r.DEPTH_TEST) : Ce(r.DEPTH_TEST);
      },
      setMask: function(ge) {
        fe !== ge && !O && (r.depthMask(ge), fe = ge);
      },
      setFunc: function(ge) {
        if (V !== ge) {
          switch (ge) {
            case pd:
              r.depthFunc(r.NEVER);
              break;
            case md:
              r.depthFunc(r.ALWAYS);
              break;
            case gd:
              r.depthFunc(r.LESS);
              break;
            case Ao:
              r.depthFunc(r.LEQUAL);
              break;
            case _d:
              r.depthFunc(r.EQUAL);
              break;
            case yd:
              r.depthFunc(r.GEQUAL);
              break;
            case xd:
              r.depthFunc(r.GREATER);
              break;
            case vd:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          V = ge;
        }
      },
      setLocked: function(ge) {
        O = ge;
      },
      setClear: function(ge) {
        le !== ge && (r.clearDepth(ge), le = ge);
      },
      reset: function() {
        O = !1, fe = null, V = null, le = null;
      }
    };
  }
  function o() {
    let O = !1, fe = null, V = null, le = null, ge = null, Qe = null, ot = null, ft = null, ii = null;
    return {
      setTest: function(at) {
        O || (at ? me(r.STENCIL_TEST) : Ce(r.STENCIL_TEST));
      },
      setMask: function(at) {
        fe !== at && !O && (r.stencilMask(at), fe = at);
      },
      setFunc: function(at, ln, Rt) {
        (V !== at || le !== ln || ge !== Rt) && (r.stencilFunc(at, ln, Rt), V = at, le = ln, ge = Rt);
      },
      setOp: function(at, ln, Rt) {
        (Qe !== at || ot !== ln || ft !== Rt) && (r.stencilOp(at, ln, Rt), Qe = at, ot = ln, ft = Rt);
      },
      setLocked: function(at) {
        O = at;
      },
      setClear: function(at) {
        ii !== at && (r.clearStencil(at), ii = at);
      },
      reset: function() {
        O = !1, fe = null, V = null, le = null, ge = null, Qe = null, ot = null, ft = null, ii = null;
      }
    };
  }
  const a = new i(), c = new s(), l = new o(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let d = {}, f = {}, m = /* @__PURE__ */ new WeakMap(), y = [], g = null, p = !1, x = null, _ = null, v = null, S = null, E = null, T = null, A = null, M = !1, b = null, P = null, F = null, D = null, N = null;
  const B = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let J = !1, W = 0;
  const X = r.getParameter(r.VERSION);
  X.indexOf("WebGL") !== -1 ? (W = parseFloat(/^WebGL (\d)/.exec(X)[1]), J = W >= 1) : X.indexOf("OpenGL ES") !== -1 && (W = parseFloat(/^OpenGL ES (\d)/.exec(X)[1]), J = W >= 2);
  let Q = null, te = {};
  const ue = r.getParameter(r.SCISSOR_BOX), H = r.getParameter(r.VIEWPORT), ne = new et().fromArray(ue), ie = new et().fromArray(H);
  function pe(O, fe, V, le) {
    const ge = new Uint8Array(4), Qe = r.createTexture();
    r.bindTexture(O, Qe), r.texParameteri(O, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(O, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let ot = 0; ot < V; ot++)
      n && (O === r.TEXTURE_3D || O === r.TEXTURE_2D_ARRAY) ? r.texImage3D(fe, 0, r.RGBA, 1, 1, le, 0, r.RGBA, r.UNSIGNED_BYTE, ge) : r.texImage2D(fe + ot, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, ge);
    return Qe;
  }
  const _e = {};
  _e[r.TEXTURE_2D] = pe(r.TEXTURE_2D, r.TEXTURE_2D, 1), _e[r.TEXTURE_CUBE_MAP] = pe(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (_e[r.TEXTURE_2D_ARRAY] = pe(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), _e[r.TEXTURE_3D] = pe(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), me(r.DEPTH_TEST), c.setFunc(Ao), $(!1), Te(rc), me(r.CULL_FACE), j(In);
  function me(O) {
    d[O] !== !0 && (r.enable(O), d[O] = !0);
  }
  function Ce(O) {
    d[O] !== !1 && (r.disable(O), d[O] = !1);
  }
  function we(O, fe) {
    return f[O] !== fe ? (r.bindFramebuffer(O, fe), f[O] = fe, n && (O === r.DRAW_FRAMEBUFFER && (f[r.FRAMEBUFFER] = fe), O === r.FRAMEBUFFER && (f[r.DRAW_FRAMEBUFFER] = fe)), !0) : !1;
  }
  function Ye(O, fe) {
    let V = y, le = !1;
    if (O)
      if (V = m.get(fe), V === void 0 && (V = [], m.set(fe, V)), O.isWebGLMultipleRenderTargets) {
        const ge = O.texture;
        if (V.length !== ge.length || V[0] !== r.COLOR_ATTACHMENT0) {
          for (let Qe = 0, ot = ge.length; Qe < ot; Qe++)
            V[Qe] = r.COLOR_ATTACHMENT0 + Qe;
          V.length = ge.length, le = !0;
        }
      } else
        V[0] !== r.COLOR_ATTACHMENT0 && (V[0] = r.COLOR_ATTACHMENT0, le = !0);
    else
      V[0] !== r.BACK && (V[0] = r.BACK, le = !0);
    le && (t.isWebGL2 ? r.drawBuffers(V) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V));
  }
  function Pe(O) {
    return g !== O ? (r.useProgram(O), g = O, !0) : !1;
  }
  const U = {
    [xi]: r.FUNC_ADD,
    [id]: r.FUNC_SUBTRACT,
    [sd]: r.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    U[lc] = r.MIN, U[hc] = r.MAX;
  else {
    const O = e.get("EXT_blend_minmax");
    O !== null && (U[lc] = O.MIN_EXT, U[hc] = O.MAX_EXT);
  }
  const ce = {
    [rd]: r.ZERO,
    [od]: r.ONE,
    [ad]: r.SRC_COLOR,
    [Yc]: r.SRC_ALPHA,
    [fd]: r.SRC_ALPHA_SATURATE,
    [ud]: r.DST_COLOR,
    [ld]: r.DST_ALPHA,
    [cd]: r.ONE_MINUS_SRC_COLOR,
    [Kc]: r.ONE_MINUS_SRC_ALPHA,
    [dd]: r.ONE_MINUS_DST_COLOR,
    [hd]: r.ONE_MINUS_DST_ALPHA
  };
  function j(O, fe, V, le, ge, Qe, ot, ft) {
    if (O === In) {
      p === !0 && (Ce(r.BLEND), p = !1);
      return;
    }
    if (p === !1 && (me(r.BLEND), p = !0), O !== nd) {
      if (O !== x || ft !== M) {
        if ((_ !== xi || E !== xi) && (r.blendEquation(r.FUNC_ADD), _ = xi, E = xi), ft)
          switch (O) {
            case Ti:
              r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case oc:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case ac:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case cc:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", O);
              break;
          }
        else
          switch (O) {
            case Ti:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case oc:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case ac:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case cc:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", O);
              break;
          }
        v = null, S = null, T = null, A = null, x = O, M = ft;
      }
      return;
    }
    ge = ge || fe, Qe = Qe || V, ot = ot || le, (fe !== _ || ge !== E) && (r.blendEquationSeparate(U[fe], U[ge]), _ = fe, E = ge), (V !== v || le !== S || Qe !== T || ot !== A) && (r.blendFuncSeparate(ce[V], ce[le], ce[Qe], ce[ot]), v = V, S = le, T = Qe, A = ot), x = O, M = !1;
  }
  function ae(O, fe) {
    O.side === tn ? Ce(r.CULL_FACE) : me(r.CULL_FACE);
    let V = O.side === It;
    fe && (V = !V), $(V), O.blending === Ti && O.transparent === !1 ? j(In) : j(O.blending, O.blendEquation, O.blendSrc, O.blendDst, O.blendEquationAlpha, O.blendSrcAlpha, O.blendDstAlpha, O.premultipliedAlpha), c.setFunc(O.depthFunc), c.setTest(O.depthTest), c.setMask(O.depthWrite), a.setMask(O.colorWrite);
    const le = O.stencilWrite;
    l.setTest(le), le && (l.setMask(O.stencilWriteMask), l.setFunc(O.stencilFunc, O.stencilRef, O.stencilFuncMask), l.setOp(O.stencilFail, O.stencilZFail, O.stencilZPass)), xe(O.polygonOffset, O.polygonOffsetFactor, O.polygonOffsetUnits), O.alphaToCoverage === !0 ? me(r.SAMPLE_ALPHA_TO_COVERAGE) : Ce(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function $(O) {
    b !== O && (O ? r.frontFace(r.CW) : r.frontFace(r.CCW), b = O);
  }
  function Te(O) {
    O !== $u ? (me(r.CULL_FACE), O !== P && (O === rc ? r.cullFace(r.BACK) : O === ed ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : Ce(r.CULL_FACE), P = O;
  }
  function ye(O) {
    O !== F && (J && r.lineWidth(O), F = O);
  }
  function xe(O, fe, V) {
    O ? (me(r.POLYGON_OFFSET_FILL), (D !== fe || N !== V) && (r.polygonOffset(fe, V), D = fe, N = V)) : Ce(r.POLYGON_OFFSET_FILL);
  }
  function Ie(O) {
    O ? me(r.SCISSOR_TEST) : Ce(r.SCISSOR_TEST);
  }
  function We(O) {
    O === void 0 && (O = r.TEXTURE0 + B - 1), Q !== O && (r.activeTexture(O), Q = O);
  }
  function it(O, fe, V) {
    V === void 0 && (Q === null ? V = r.TEXTURE0 + B - 1 : V = Q);
    let le = te[V];
    le === void 0 && (le = { type: void 0, texture: void 0 }, te[V] = le), (le.type !== O || le.texture !== fe) && (Q !== V && (r.activeTexture(V), Q = V), r.bindTexture(O, fe || _e[O]), le.type = O, le.texture = fe);
  }
  function L() {
    const O = te[Q];
    O !== void 0 && O.type !== void 0 && (r.bindTexture(O.type, null), O.type = void 0, O.texture = void 0);
  }
  function w() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (O) {
      console.error("THREE.WebGLState:", O);
    }
  }
  function q() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (O) {
      console.error("THREE.WebGLState:", O);
    }
  }
  function oe() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (O) {
      console.error("THREE.WebGLState:", O);
    }
  }
  function re() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (O) {
      console.error("THREE.WebGLState:", O);
    }
  }
  function I() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (O) {
      console.error("THREE.WebGLState:", O);
    }
  }
  function ee() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (O) {
      console.error("THREE.WebGLState:", O);
    }
  }
  function se() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (O) {
      console.error("THREE.WebGLState:", O);
    }
  }
  function G() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (O) {
      console.error("THREE.WebGLState:", O);
    }
  }
  function Se() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (O) {
      console.error("THREE.WebGLState:", O);
    }
  }
  function Re() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (O) {
      console.error("THREE.WebGLState:", O);
    }
  }
  function Ae(O) {
    ne.equals(O) === !1 && (r.scissor(O.x, O.y, O.z, O.w), ne.copy(O));
  }
  function Ee(O) {
    ie.equals(O) === !1 && (r.viewport(O.x, O.y, O.z, O.w), ie.copy(O));
  }
  function ve(O, fe) {
    let V = u.get(fe);
    V === void 0 && (V = /* @__PURE__ */ new WeakMap(), u.set(fe, V));
    let le = V.get(O);
    le === void 0 && (le = r.getUniformBlockIndex(fe, O.name), V.set(O, le));
  }
  function Ue(O, fe) {
    const le = u.get(fe).get(O);
    h.get(fe) !== le && (r.uniformBlockBinding(fe, le, O.__bindingPointIndex), h.set(fe, le));
  }
  function qe() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(r.LESS), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), n === !0 && (r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), d = {}, Q = null, te = {}, f = {}, m = /* @__PURE__ */ new WeakMap(), y = [], g = null, p = !1, x = null, _ = null, v = null, S = null, E = null, T = null, A = null, M = !1, b = null, P = null, F = null, D = null, N = null, ne.set(0, 0, r.canvas.width, r.canvas.height), ie.set(0, 0, r.canvas.width, r.canvas.height), a.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: a,
      depth: c,
      stencil: l
    },
    enable: me,
    disable: Ce,
    bindFramebuffer: we,
    drawBuffers: Ye,
    useProgram: Pe,
    setBlending: j,
    setMaterial: ae,
    setFlipSided: $,
    setCullFace: Te,
    setLineWidth: ye,
    setPolygonOffset: xe,
    setScissorTest: Ie,
    activeTexture: We,
    bindTexture: it,
    unbindTexture: L,
    compressedTexImage2D: w,
    compressedTexImage3D: q,
    texImage2D: Se,
    texImage3D: Re,
    updateUBOMapping: ve,
    uniformBlockBinding: Ue,
    texStorage2D: se,
    texStorage3D: G,
    texSubImage2D: oe,
    texSubImage3D: re,
    compressedTexSubImage2D: I,
    compressedTexSubImage3D: ee,
    scissor: Ae,
    viewport: Ee,
    reset: qe
  };
}
function sx(r, e, t, n, i, s, o) {
  const a = i.isWebGL2, c = i.maxTextures, l = i.maxCubemapSize, h = i.maxTextureSize, u = i.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, f = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), m = /* @__PURE__ */ new WeakMap();
  let y;
  const g = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function x(L, w) {
    return p ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(L, w)
    ) : nr("canvas");
  }
  function _(L, w, q, oe) {
    let re = 1;
    if ((L.width > oe || L.height > oe) && (re = oe / Math.max(L.width, L.height)), re < 1 || w === !0)
      if (typeof HTMLImageElement < "u" && L instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && L instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && L instanceof ImageBitmap) {
        const I = w ? Co : Math.floor, ee = I(re * L.width), se = I(re * L.height);
        y === void 0 && (y = x(ee, se));
        const G = q ? x(ee, se) : y;
        return G.width = ee, G.height = se, G.getContext("2d").drawImage(L, 0, 0, ee, se), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + L.width + "x" + L.height + ") to (" + ee + "x" + se + ")."), G;
      } else
        return "data" in L && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + L.width + "x" + L.height + ")."), L;
    return L;
  }
  function v(L) {
    return Nc(L.width) && Nc(L.height);
  }
  function S(L) {
    return a ? !1 : L.wrapS !== bt || L.wrapT !== bt || L.minFilter !== lt && L.minFilter !== nt;
  }
  function E(L, w) {
    return L.generateMipmaps && w && L.minFilter !== lt && L.minFilter !== nt;
  }
  function T(L) {
    r.generateMipmap(L);
  }
  function A(L, w, q, oe, re = !1) {
    if (a === !1) return w;
    if (L !== null) {
      if (r[L] !== void 0) return r[L];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + L + "'");
    }
    let I = w;
    return w === r.RED && (q === r.FLOAT && (I = r.R32F), q === r.HALF_FLOAT && (I = r.R16F), q === r.UNSIGNED_BYTE && (I = r.R8)), w === r.RG && (q === r.FLOAT && (I = r.RG32F), q === r.HALF_FLOAT && (I = r.RG16F), q === r.UNSIGNED_BYTE && (I = r.RG8)), w === r.RGBA && (q === r.FLOAT && (I = r.RGBA32F), q === r.HALF_FLOAT && (I = r.RGBA16F), q === r.UNSIGNED_BYTE && (I = oe === De && re === !1 ? r.SRGB8_ALPHA8 : r.RGBA8), q === r.UNSIGNED_SHORT_4_4_4_4 && (I = r.RGBA4), q === r.UNSIGNED_SHORT_5_5_5_1 && (I = r.RGB5_A1)), (I === r.R16F || I === r.R32F || I === r.RG16F || I === r.RG32F || I === r.RGBA16F || I === r.RGBA32F) && e.get("EXT_color_buffer_float"), I;
  }
  function M(L, w, q) {
    return E(L, q) === !0 || L.isFramebufferTexture && L.minFilter !== lt && L.minFilter !== nt ? Math.log2(Math.max(w.width, w.height)) + 1 : L.mipmaps !== void 0 && L.mipmaps.length > 0 ? L.mipmaps.length : L.isCompressedTexture && Array.isArray(L.image) ? w.mipmaps.length : 1;
  }
  function b(L) {
    return L === lt || L === Qs || L === ls ? r.NEAREST : r.LINEAR;
  }
  function P(L) {
    const w = L.target;
    w.removeEventListener("dispose", P), D(w), w.isVideoTexture && m.delete(w);
  }
  function F(L) {
    const w = L.target;
    w.removeEventListener("dispose", F), B(w);
  }
  function D(L) {
    const w = n.get(L);
    if (w.__webglInit === void 0) return;
    const q = L.source, oe = g.get(q);
    if (oe) {
      const re = oe[w.__cacheKey];
      re.usedTimes--, re.usedTimes === 0 && N(L), Object.keys(oe).length === 0 && g.delete(q);
    }
    n.remove(L);
  }
  function N(L) {
    const w = n.get(L);
    r.deleteTexture(w.__webglTexture);
    const q = L.source, oe = g.get(q);
    delete oe[w.__cacheKey], o.memory.textures--;
  }
  function B(L) {
    const w = L.texture, q = n.get(L), oe = n.get(w);
    if (oe.__webglTexture !== void 0 && (r.deleteTexture(oe.__webglTexture), o.memory.textures--), L.depthTexture && L.depthTexture.dispose(), L.isWebGLCubeRenderTarget)
      for (let re = 0; re < 6; re++)
        r.deleteFramebuffer(q.__webglFramebuffer[re]), q.__webglDepthbuffer && r.deleteRenderbuffer(q.__webglDepthbuffer[re]);
    else {
      if (r.deleteFramebuffer(q.__webglFramebuffer), q.__webglDepthbuffer && r.deleteRenderbuffer(q.__webglDepthbuffer), q.__webglMultisampledFramebuffer && r.deleteFramebuffer(q.__webglMultisampledFramebuffer), q.__webglColorRenderbuffer)
        for (let re = 0; re < q.__webglColorRenderbuffer.length; re++)
          q.__webglColorRenderbuffer[re] && r.deleteRenderbuffer(q.__webglColorRenderbuffer[re]);
      q.__webglDepthRenderbuffer && r.deleteRenderbuffer(q.__webglDepthRenderbuffer);
    }
    if (L.isWebGLMultipleRenderTargets)
      for (let re = 0, I = w.length; re < I; re++) {
        const ee = n.get(w[re]);
        ee.__webglTexture && (r.deleteTexture(ee.__webglTexture), o.memory.textures--), n.remove(w[re]);
      }
    n.remove(w), n.remove(L);
  }
  let J = 0;
  function W() {
    J = 0;
  }
  function X() {
    const L = J;
    return L >= c && console.warn("THREE.WebGLTextures: Trying to use " + L + " texture units while this GPU supports only " + c), J += 1, L;
  }
  function Q(L) {
    const w = [];
    return w.push(L.wrapS), w.push(L.wrapT), w.push(L.wrapR || 0), w.push(L.magFilter), w.push(L.minFilter), w.push(L.anisotropy), w.push(L.internalFormat), w.push(L.format), w.push(L.type), w.push(L.generateMipmaps), w.push(L.premultiplyAlpha), w.push(L.flipY), w.push(L.unpackAlignment), w.push(L.colorSpace), w.join();
  }
  function te(L, w) {
    const q = n.get(L);
    if (L.isVideoTexture && We(L), L.isRenderTargetTexture === !1 && L.version > 0 && q.__version !== L.version) {
      const oe = L.image;
      if (oe === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (oe.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        we(q, L, w);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, q.__webglTexture, r.TEXTURE0 + w);
  }
  function ue(L, w) {
    const q = n.get(L);
    if (L.version > 0 && q.__version !== L.version) {
      we(q, L, w);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, q.__webglTexture, r.TEXTURE0 + w);
  }
  function H(L, w) {
    const q = n.get(L);
    if (L.version > 0 && q.__version !== L.version) {
      we(q, L, w);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, q.__webglTexture, r.TEXTURE0 + w);
  }
  function ne(L, w) {
    const q = n.get(L);
    if (L.version > 0 && q.__version !== L.version) {
      Ye(q, L, w);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, q.__webglTexture, r.TEXTURE0 + w);
  }
  const ie = {
    [jn]: r.REPEAT,
    [bt]: r.CLAMP_TO_EDGE,
    [fs]: r.MIRRORED_REPEAT
  }, pe = {
    [lt]: r.NEAREST,
    [Qs]: r.NEAREST_MIPMAP_NEAREST,
    [ls]: r.NEAREST_MIPMAP_LINEAR,
    [nt]: r.LINEAR,
    [Po]: r.LINEAR_MIPMAP_NEAREST,
    [_n]: r.LINEAR_MIPMAP_LINEAR
  }, _e = {
    [Xd]: r.NEVER,
    [Qd]: r.ALWAYS,
    [qd]: r.LESS,
    [Kd]: r.LEQUAL,
    [Yd]: r.EQUAL,
    [jd]: r.GEQUAL,
    [Zd]: r.GREATER,
    [Jd]: r.NOTEQUAL
  };
  function me(L, w, q) {
    if (q ? (r.texParameteri(L, r.TEXTURE_WRAP_S, ie[w.wrapS]), r.texParameteri(L, r.TEXTURE_WRAP_T, ie[w.wrapT]), (L === r.TEXTURE_3D || L === r.TEXTURE_2D_ARRAY) && r.texParameteri(L, r.TEXTURE_WRAP_R, ie[w.wrapR]), r.texParameteri(L, r.TEXTURE_MAG_FILTER, pe[w.magFilter]), r.texParameteri(L, r.TEXTURE_MIN_FILTER, pe[w.minFilter])) : (r.texParameteri(L, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(L, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), (L === r.TEXTURE_3D || L === r.TEXTURE_2D_ARRAY) && r.texParameteri(L, r.TEXTURE_WRAP_R, r.CLAMP_TO_EDGE), (w.wrapS !== bt || w.wrapT !== bt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(L, r.TEXTURE_MAG_FILTER, b(w.magFilter)), r.texParameteri(L, r.TEXTURE_MIN_FILTER, b(w.minFilter)), w.minFilter !== lt && w.minFilter !== nt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), w.compareFunction && (r.texParameteri(L, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(L, r.TEXTURE_COMPARE_FUNC, _e[w.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const oe = e.get("EXT_texture_filter_anisotropic");
      if (w.magFilter === lt || w.minFilter !== ls && w.minFilter !== _n || w.type === kt && e.has("OES_texture_float_linear") === !1 || a === !1 && w.type === dn && e.has("OES_texture_half_float_linear") === !1) return;
      (w.anisotropy > 1 || n.get(w).__currentAnisotropy) && (r.texParameterf(L, oe.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(w.anisotropy, i.getMaxAnisotropy())), n.get(w).__currentAnisotropy = w.anisotropy);
    }
  }
  function Ce(L, w) {
    let q = !1;
    L.__webglInit === void 0 && (L.__webglInit = !0, w.addEventListener("dispose", P));
    const oe = w.source;
    let re = g.get(oe);
    re === void 0 && (re = {}, g.set(oe, re));
    const I = Q(w);
    if (I !== L.__cacheKey) {
      re[I] === void 0 && (re[I] = {
        texture: r.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, q = !0), re[I].usedTimes++;
      const ee = re[L.__cacheKey];
      ee !== void 0 && (re[L.__cacheKey].usedTimes--, ee.usedTimes === 0 && N(w)), L.__cacheKey = I, L.__webglTexture = re[I].texture;
    }
    return q;
  }
  function we(L, w, q) {
    let oe = r.TEXTURE_2D;
    (w.isDataArrayTexture || w.isCompressedArrayTexture) && (oe = r.TEXTURE_2D_ARRAY), w.isData3DTexture && (oe = r.TEXTURE_3D);
    const re = Ce(L, w), I = w.source;
    t.bindTexture(oe, L.__webglTexture, r.TEXTURE0 + q);
    const ee = n.get(I);
    if (I.version !== ee.__version || re === !0) {
      t.activeTexture(r.TEXTURE0 + q), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, w.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, w.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, w.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, r.NONE);
      const se = S(w) && v(w.image) === !1;
      let G = _(w.image, se, !1, h);
      G = it(w, G);
      const Se = v(G) || a, Re = s.convert(w.format, w.colorSpace);
      let Ae = s.convert(w.type), Ee = A(w.internalFormat, Re, Ae, w.colorSpace);
      me(oe, w, Se);
      let ve;
      const Ue = w.mipmaps, qe = a && w.isVideoTexture !== !0, O = ee.__version === void 0 || re === !0, fe = M(w, G, Se);
      if (w.isDepthTexture)
        Ee = r.DEPTH_COMPONENT, a ? w.type === kt ? Ee = r.DEPTH_COMPONENT32F : w.type === Ln ? Ee = r.DEPTH_COMPONENT24 : w.type === Xn ? Ee = r.DEPTH24_STENCIL8 : Ee = r.DEPTH_COMPONENT16 : w.type === kt && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), w.format === qn && Ee === r.DEPTH_COMPONENT && w.type !== Io && w.type !== Ln && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), w.type = Ln, Ae = s.convert(w.type)), w.format === Ri && Ee === r.DEPTH_COMPONENT && (Ee = r.DEPTH_STENCIL, w.type !== Xn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), w.type = Xn, Ae = s.convert(w.type))), O && (qe ? t.texStorage2D(r.TEXTURE_2D, 1, Ee, G.width, G.height) : t.texImage2D(r.TEXTURE_2D, 0, Ee, G.width, G.height, 0, Re, Ae, null));
      else if (w.isDataTexture)
        if (Ue.length > 0 && Se) {
          qe && O && t.texStorage2D(r.TEXTURE_2D, fe, Ee, Ue[0].width, Ue[0].height);
          for (let V = 0, le = Ue.length; V < le; V++)
            ve = Ue[V], qe ? t.texSubImage2D(r.TEXTURE_2D, V, 0, 0, ve.width, ve.height, Re, Ae, ve.data) : t.texImage2D(r.TEXTURE_2D, V, Ee, ve.width, ve.height, 0, Re, Ae, ve.data);
          w.generateMipmaps = !1;
        } else
          qe ? (O && t.texStorage2D(r.TEXTURE_2D, fe, Ee, G.width, G.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, G.width, G.height, Re, Ae, G.data)) : t.texImage2D(r.TEXTURE_2D, 0, Ee, G.width, G.height, 0, Re, Ae, G.data);
      else if (w.isCompressedTexture)
        if (w.isCompressedArrayTexture) {
          qe && O && t.texStorage3D(r.TEXTURE_2D_ARRAY, fe, Ee, Ue[0].width, Ue[0].height, G.depth);
          for (let V = 0, le = Ue.length; V < le; V++)
            ve = Ue[V], w.format !== zt ? Re !== null ? qe ? t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, V, 0, 0, 0, ve.width, ve.height, G.depth, Re, ve.data, 0, 0) : t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, V, Ee, ve.width, ve.height, G.depth, 0, ve.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : qe ? t.texSubImage3D(r.TEXTURE_2D_ARRAY, V, 0, 0, 0, ve.width, ve.height, G.depth, Re, Ae, ve.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, V, Ee, ve.width, ve.height, G.depth, 0, Re, Ae, ve.data);
        } else {
          qe && O && t.texStorage2D(r.TEXTURE_2D, fe, Ee, Ue[0].width, Ue[0].height);
          for (let V = 0, le = Ue.length; V < le; V++)
            ve = Ue[V], w.format !== zt ? Re !== null ? qe ? t.compressedTexSubImage2D(r.TEXTURE_2D, V, 0, 0, ve.width, ve.height, Re, ve.data) : t.compressedTexImage2D(r.TEXTURE_2D, V, Ee, ve.width, ve.height, 0, ve.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : qe ? t.texSubImage2D(r.TEXTURE_2D, V, 0, 0, ve.width, ve.height, Re, Ae, ve.data) : t.texImage2D(r.TEXTURE_2D, V, Ee, ve.width, ve.height, 0, Re, Ae, ve.data);
        }
      else if (w.isDataArrayTexture)
        qe ? (O && t.texStorage3D(r.TEXTURE_2D_ARRAY, fe, Ee, G.width, G.height, G.depth), t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, G.width, G.height, G.depth, Re, Ae, G.data)) : t.texImage3D(r.TEXTURE_2D_ARRAY, 0, Ee, G.width, G.height, G.depth, 0, Re, Ae, G.data);
      else if (w.isData3DTexture)
        qe ? (O && t.texStorage3D(r.TEXTURE_3D, fe, Ee, G.width, G.height, G.depth), t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, G.width, G.height, G.depth, Re, Ae, G.data)) : t.texImage3D(r.TEXTURE_3D, 0, Ee, G.width, G.height, G.depth, 0, Re, Ae, G.data);
      else if (w.isFramebufferTexture) {
        if (O)
          if (qe)
            t.texStorage2D(r.TEXTURE_2D, fe, Ee, G.width, G.height);
          else {
            let V = G.width, le = G.height;
            for (let ge = 0; ge < fe; ge++)
              t.texImage2D(r.TEXTURE_2D, ge, Ee, V, le, 0, Re, Ae, null), V >>= 1, le >>= 1;
          }
      } else if (Ue.length > 0 && Se) {
        qe && O && t.texStorage2D(r.TEXTURE_2D, fe, Ee, Ue[0].width, Ue[0].height);
        for (let V = 0, le = Ue.length; V < le; V++)
          ve = Ue[V], qe ? t.texSubImage2D(r.TEXTURE_2D, V, 0, 0, Re, Ae, ve) : t.texImage2D(r.TEXTURE_2D, V, Ee, Re, Ae, ve);
        w.generateMipmaps = !1;
      } else
        qe ? (O && t.texStorage2D(r.TEXTURE_2D, fe, Ee, G.width, G.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, Re, Ae, G)) : t.texImage2D(r.TEXTURE_2D, 0, Ee, Re, Ae, G);
      E(w, Se) && T(oe), ee.__version = I.version, w.onUpdate && w.onUpdate(w);
    }
    L.__version = w.version;
  }
  function Ye(L, w, q) {
    if (w.image.length !== 6) return;
    const oe = Ce(L, w), re = w.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, L.__webglTexture, r.TEXTURE0 + q);
    const I = n.get(re);
    if (re.version !== I.__version || oe === !0) {
      t.activeTexture(r.TEXTURE0 + q), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, w.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, w.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, w.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, r.NONE);
      const ee = w.isCompressedTexture || w.image[0].isCompressedTexture, se = w.image[0] && w.image[0].isDataTexture, G = [];
      for (let V = 0; V < 6; V++)
        !ee && !se ? G[V] = _(w.image[V], !1, !0, l) : G[V] = se ? w.image[V].image : w.image[V], G[V] = it(w, G[V]);
      const Se = G[0], Re = v(Se) || a, Ae = s.convert(w.format, w.colorSpace), Ee = s.convert(w.type), ve = A(w.internalFormat, Ae, Ee, w.colorSpace), Ue = a && w.isVideoTexture !== !0, qe = I.__version === void 0 || oe === !0;
      let O = M(w, Se, Re);
      me(r.TEXTURE_CUBE_MAP, w, Re);
      let fe;
      if (ee) {
        Ue && qe && t.texStorage2D(r.TEXTURE_CUBE_MAP, O, ve, Se.width, Se.height);
        for (let V = 0; V < 6; V++) {
          fe = G[V].mipmaps;
          for (let le = 0; le < fe.length; le++) {
            const ge = fe[le];
            w.format !== zt ? Ae !== null ? Ue ? t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, le, 0, 0, ge.width, ge.height, Ae, ge.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, le, ve, ge.width, ge.height, 0, ge.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ue ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, le, 0, 0, ge.width, ge.height, Ae, Ee, ge.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, le, ve, ge.width, ge.height, 0, Ae, Ee, ge.data);
          }
        }
      } else {
        fe = w.mipmaps, Ue && qe && (fe.length > 0 && O++, t.texStorage2D(r.TEXTURE_CUBE_MAP, O, ve, G[0].width, G[0].height));
        for (let V = 0; V < 6; V++)
          if (se) {
            Ue ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, 0, 0, G[V].width, G[V].height, Ae, Ee, G[V].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, ve, G[V].width, G[V].height, 0, Ae, Ee, G[V].data);
            for (let le = 0; le < fe.length; le++) {
              const Qe = fe[le].image[V].image;
              Ue ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, le + 1, 0, 0, Qe.width, Qe.height, Ae, Ee, Qe.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, le + 1, ve, Qe.width, Qe.height, 0, Ae, Ee, Qe.data);
            }
          } else {
            Ue ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, 0, 0, Ae, Ee, G[V]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, ve, Ae, Ee, G[V]);
            for (let le = 0; le < fe.length; le++) {
              const ge = fe[le];
              Ue ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, le + 1, 0, 0, Ae, Ee, ge.image[V]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, le + 1, ve, Ae, Ee, ge.image[V]);
            }
          }
      }
      E(w, Re) && T(r.TEXTURE_CUBE_MAP), I.__version = re.version, w.onUpdate && w.onUpdate(w);
    }
    L.__version = w.version;
  }
  function Pe(L, w, q, oe, re) {
    const I = s.convert(q.format, q.colorSpace), ee = s.convert(q.type), se = A(q.internalFormat, I, ee, q.colorSpace);
    n.get(w).__hasExternalTextures || (re === r.TEXTURE_3D || re === r.TEXTURE_2D_ARRAY ? t.texImage3D(re, 0, se, w.width, w.height, w.depth, 0, I, ee, null) : t.texImage2D(re, 0, se, w.width, w.height, 0, I, ee, null)), t.bindFramebuffer(r.FRAMEBUFFER, L), Ie(w) ? d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, oe, re, n.get(q).__webglTexture, 0, xe(w)) : (re === r.TEXTURE_2D || re >= r.TEXTURE_CUBE_MAP_POSITIVE_X && re <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, oe, re, n.get(q).__webglTexture, 0), t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function U(L, w, q) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, L), w.depthBuffer && !w.stencilBuffer) {
      let oe = r.DEPTH_COMPONENT16;
      if (q || Ie(w)) {
        const re = w.depthTexture;
        re && re.isDepthTexture && (re.type === kt ? oe = r.DEPTH_COMPONENT32F : re.type === Ln && (oe = r.DEPTH_COMPONENT24));
        const I = xe(w);
        Ie(w) ? d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, I, oe, w.width, w.height) : r.renderbufferStorageMultisample(r.RENDERBUFFER, I, oe, w.width, w.height);
      } else
        r.renderbufferStorage(r.RENDERBUFFER, oe, w.width, w.height);
      r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.RENDERBUFFER, L);
    } else if (w.depthBuffer && w.stencilBuffer) {
      const oe = xe(w);
      q && Ie(w) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, oe, r.DEPTH24_STENCIL8, w.width, w.height) : Ie(w) ? d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, oe, r.DEPTH24_STENCIL8, w.width, w.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, w.width, w.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, L);
    } else {
      const oe = w.isWebGLMultipleRenderTargets === !0 ? w.texture : [w.texture];
      for (let re = 0; re < oe.length; re++) {
        const I = oe[re], ee = s.convert(I.format, I.colorSpace), se = s.convert(I.type), G = A(I.internalFormat, ee, se, I.colorSpace), Se = xe(w);
        q && Ie(w) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Se, G, w.width, w.height) : Ie(w) ? d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Se, G, w.width, w.height) : r.renderbufferStorage(r.RENDERBUFFER, G, w.width, w.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function ce(L, w) {
    if (w && w.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(r.FRAMEBUFFER, L), !(w.depthTexture && w.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(w.depthTexture).__webglTexture || w.depthTexture.image.width !== w.width || w.depthTexture.image.height !== w.height) && (w.depthTexture.image.width = w.width, w.depthTexture.image.height = w.height, w.depthTexture.needsUpdate = !0), te(w.depthTexture, 0);
    const oe = n.get(w.depthTexture).__webglTexture, re = xe(w);
    if (w.depthTexture.format === qn)
      Ie(w) ? d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, oe, 0, re) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, oe, 0);
    else if (w.depthTexture.format === Ri)
      Ie(w) ? d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, oe, 0, re) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, oe, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function j(L) {
    const w = n.get(L), q = L.isWebGLCubeRenderTarget === !0;
    if (L.depthTexture && !w.__autoAllocateDepthBuffer) {
      if (q) throw new Error("target.depthTexture not supported in Cube render targets");
      ce(w.__webglFramebuffer, L);
    } else if (q) {
      w.__webglDepthbuffer = [];
      for (let oe = 0; oe < 6; oe++)
        t.bindFramebuffer(r.FRAMEBUFFER, w.__webglFramebuffer[oe]), w.__webglDepthbuffer[oe] = r.createRenderbuffer(), U(w.__webglDepthbuffer[oe], L, !1);
    } else
      t.bindFramebuffer(r.FRAMEBUFFER, w.__webglFramebuffer), w.__webglDepthbuffer = r.createRenderbuffer(), U(w.__webglDepthbuffer, L, !1);
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function ae(L, w, q) {
    const oe = n.get(L);
    w !== void 0 && Pe(oe.__webglFramebuffer, L, L.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D), q !== void 0 && j(L);
  }
  function $(L) {
    const w = L.texture, q = n.get(L), oe = n.get(w);
    L.addEventListener("dispose", F), L.isWebGLMultipleRenderTargets !== !0 && (oe.__webglTexture === void 0 && (oe.__webglTexture = r.createTexture()), oe.__version = w.version, o.memory.textures++);
    const re = L.isWebGLCubeRenderTarget === !0, I = L.isWebGLMultipleRenderTargets === !0, ee = v(L) || a;
    if (re) {
      q.__webglFramebuffer = [];
      for (let se = 0; se < 6; se++)
        q.__webglFramebuffer[se] = r.createFramebuffer();
    } else {
      if (q.__webglFramebuffer = r.createFramebuffer(), I)
        if (i.drawBuffers) {
          const se = L.texture;
          for (let G = 0, Se = se.length; G < Se; G++) {
            const Re = n.get(se[G]);
            Re.__webglTexture === void 0 && (Re.__webglTexture = r.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && L.samples > 0 && Ie(L) === !1) {
        const se = I ? w : [w];
        q.__webglMultisampledFramebuffer = r.createFramebuffer(), q.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, q.__webglMultisampledFramebuffer);
        for (let G = 0; G < se.length; G++) {
          const Se = se[G];
          q.__webglColorRenderbuffer[G] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, q.__webglColorRenderbuffer[G]);
          const Re = s.convert(Se.format, Se.colorSpace), Ae = s.convert(Se.type), Ee = A(Se.internalFormat, Re, Ae, Se.colorSpace, L.isXRRenderTarget === !0), ve = xe(L);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, ve, Ee, L.width, L.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + G, r.RENDERBUFFER, q.__webglColorRenderbuffer[G]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), L.depthBuffer && (q.__webglDepthRenderbuffer = r.createRenderbuffer(), U(q.__webglDepthRenderbuffer, L, !0)), t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (re) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, oe.__webglTexture), me(r.TEXTURE_CUBE_MAP, w, ee);
      for (let se = 0; se < 6; se++)
        Pe(q.__webglFramebuffer[se], L, w, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + se);
      E(w, ee) && T(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (I) {
      const se = L.texture;
      for (let G = 0, Se = se.length; G < Se; G++) {
        const Re = se[G], Ae = n.get(Re);
        t.bindTexture(r.TEXTURE_2D, Ae.__webglTexture), me(r.TEXTURE_2D, Re, ee), Pe(q.__webglFramebuffer, L, Re, r.COLOR_ATTACHMENT0 + G, r.TEXTURE_2D), E(Re, ee) && T(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let se = r.TEXTURE_2D;
      (L.isWebGL3DRenderTarget || L.isWebGLArrayRenderTarget) && (a ? se = L.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(se, oe.__webglTexture), me(se, w, ee), Pe(q.__webglFramebuffer, L, w, r.COLOR_ATTACHMENT0, se), E(w, ee) && T(se), t.unbindTexture();
    }
    L.depthBuffer && j(L);
  }
  function Te(L) {
    const w = v(L) || a, q = L.isWebGLMultipleRenderTargets === !0 ? L.texture : [L.texture];
    for (let oe = 0, re = q.length; oe < re; oe++) {
      const I = q[oe];
      if (E(I, w)) {
        const ee = L.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D, se = n.get(I).__webglTexture;
        t.bindTexture(ee, se), T(ee), t.unbindTexture();
      }
    }
  }
  function ye(L) {
    if (a && L.samples > 0 && Ie(L) === !1) {
      const w = L.isWebGLMultipleRenderTargets ? L.texture : [L.texture], q = L.width, oe = L.height;
      let re = r.COLOR_BUFFER_BIT;
      const I = [], ee = L.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, se = n.get(L), G = L.isWebGLMultipleRenderTargets === !0;
      if (G)
        for (let Se = 0; Se < w.length; Se++)
          t.bindFramebuffer(r.FRAMEBUFFER, se.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Se, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, se.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Se, r.TEXTURE_2D, null, 0);
      t.bindFramebuffer(r.READ_FRAMEBUFFER, se.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, se.__webglFramebuffer);
      for (let Se = 0; Se < w.length; Se++) {
        I.push(r.COLOR_ATTACHMENT0 + Se), L.depthBuffer && I.push(ee);
        const Re = se.__ignoreDepthValues !== void 0 ? se.__ignoreDepthValues : !1;
        if (Re === !1 && (L.depthBuffer && (re |= r.DEPTH_BUFFER_BIT), L.stencilBuffer && (re |= r.STENCIL_BUFFER_BIT)), G && r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, se.__webglColorRenderbuffer[Se]), Re === !0 && (r.invalidateFramebuffer(r.READ_FRAMEBUFFER, [ee]), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [ee])), G) {
          const Ae = n.get(w[Se]).__webglTexture;
          r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, Ae, 0);
        }
        r.blitFramebuffer(0, 0, q, oe, 0, 0, q, oe, re, r.NEAREST), f && r.invalidateFramebuffer(r.READ_FRAMEBUFFER, I);
      }
      if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), G)
        for (let Se = 0; Se < w.length; Se++) {
          t.bindFramebuffer(r.FRAMEBUFFER, se.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Se, r.RENDERBUFFER, se.__webglColorRenderbuffer[Se]);
          const Re = n.get(w[Se]).__webglTexture;
          t.bindFramebuffer(r.FRAMEBUFFER, se.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Se, r.TEXTURE_2D, Re, 0);
        }
      t.bindFramebuffer(r.DRAW_FRAMEBUFFER, se.__webglMultisampledFramebuffer);
    }
  }
  function xe(L) {
    return Math.min(u, L.samples);
  }
  function Ie(L) {
    const w = n.get(L);
    return a && L.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && w.__useRenderToTexture !== !1;
  }
  function We(L) {
    const w = o.render.frame;
    m.get(L) !== w && (m.set(L, w), L.update());
  }
  function it(L, w) {
    const q = L.colorSpace, oe = L.format, re = L.type;
    return L.isCompressedTexture === !0 || L.format === Ro || q !== Kt && q !== Kn && (q === De ? a === !1 ? e.has("EXT_sRGB") === !0 && oe === zt ? (L.format = Ro, L.minFilter = nt, L.generateMipmaps = !1) : w = ol.sRGBToLinear(w) : (oe !== zt || re !== Un) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", q)), w;
  }
  this.allocateTextureUnit = X, this.resetTextureUnits = W, this.setTexture2D = te, this.setTexture2DArray = ue, this.setTexture3D = H, this.setTextureCube = ne, this.rebindTextures = ae, this.setupRenderTarget = $, this.updateRenderTargetMipmap = Te, this.updateMultisampleRenderTarget = ye, this.setupDepthRenderbuffer = j, this.setupFrameBufferTexture = Pe, this.useMultisampledRTT = Ie;
}
function ff(r, e, t) {
  const n = t.isWebGL2;
  function i(s, o = Kn) {
    let a;
    if (s === Un) return r.UNSIGNED_BYTE;
    if (s === Jc) return r.UNSIGNED_SHORT_4_4_4_4;
    if (s === jc) return r.UNSIGNED_SHORT_5_5_5_1;
    if (s === Rd) return r.BYTE;
    if (s === Cd) return r.SHORT;
    if (s === Io) return r.UNSIGNED_SHORT;
    if (s === Zc) return r.INT;
    if (s === Ln) return r.UNSIGNED_INT;
    if (s === kt) return r.FLOAT;
    if (s === dn)
      return n ? r.HALF_FLOAT : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (s === Ld) return r.ALPHA;
    if (s === zt) return r.RGBA;
    if (s === Pd) return r.LUMINANCE;
    if (s === Id) return r.LUMINANCE_ALPHA;
    if (s === qn) return r.DEPTH_COMPONENT;
    if (s === Ri) return r.DEPTH_STENCIL;
    if (s === Ro)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === Ud) return r.RED;
    if (s === Qc) return r.RED_INTEGER;
    if (s === Dd) return r.RG;
    if (s === $c) return r.RG_INTEGER;
    if (s === el) return r.RGBA_INTEGER;
    if (s === yo || s === xo || s === vo || s === Mo)
      if (o === De)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (s === yo) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === xo) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === vo) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === Mo) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (s === yo) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === xo) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === vo) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === Mo) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === uc || s === dc || s === fc || s === pc)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (s === uc) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === dc) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === fc) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === pc) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === Nd)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === mc || s === gc)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (s === mc) return o === De ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === gc) return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === _c || s === yc || s === xc || s === vc || s === Mc || s === Sc || s === Ec || s === bc || s === Tc || s === Ac || s === wc || s === Rc || s === Cc || s === Lc)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (s === _c) return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === yc) return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === xc) return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === vc) return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Mc) return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === Sc) return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Ec) return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === bc) return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Tc) return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Ac) return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === wc) return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Rc) return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Cc) return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Lc) return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === So)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (s === So) return o === De ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    if (s === Od || s === Pc || s === Ic || s === Uc)
      if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
        if (s === So) return a.COMPRESSED_RED_RGTC1_EXT;
        if (s === Pc) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === Ic) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === Uc) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return s === Xn ? n ? r.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : r[s] !== void 0 ? r[s] : null;
  }
  return { convert: i };
}
class pf extends Mt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Pn extends je {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const rx = { type: "move" };
class ya {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Pn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Pn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new R(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new R()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Pn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new R(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new R()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, s = null, o = null;
    const a = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        o = !0;
        for (const y of e.hand.values()) {
          const g = t.getJointPose(y, n), p = this._getHandJoint(l, y);
          g !== null && (p.matrix.fromArray(g.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = g.radius), p.visible = g !== null;
        }
        const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], d = h.position.distanceTo(u.position), f = 0.02, m = 5e-3;
        l.inputState.pinching && d > f + m ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && d <= f - m && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(rx)));
    }
    return a !== null && (a.visible = i !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = o !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Pn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class mf extends rt {
  constructor(e, t, n, i, s, o, a, c, l, h) {
    if (h = h !== void 0 ? h : qn, h !== qn && h !== Ri)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === qn && (n = Ln), n === void 0 && h === Ri && (n = Xn), super(null, i, s, o, a, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : lt, this.minFilter = c !== void 0 ? c : lt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class ox extends xn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, o = null, a = "local-floor", c = 1, l = null, h = null, u = null, d = null, f = null, m = null;
    const y = t.getContextAttributes();
    let g = null, p = null;
    const x = [], _ = [];
    let v = null;
    const S = new Mt();
    S.layers.enable(1), S.viewport = new et();
    const E = new Mt();
    E.layers.enable(2), E.viewport = new et();
    const T = [S, E], A = new pf();
    A.layers.enable(1), A.layers.enable(2);
    let M = null, b = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getCamera = function() {
    }, this.setUserCamera = function(H) {
      v = H;
    }, this.getController = function(H) {
      let ne = x[H];
      return ne === void 0 && (ne = new ya(), x[H] = ne), ne.getTargetRaySpace();
    }, this.getControllerGrip = function(H) {
      let ne = x[H];
      return ne === void 0 && (ne = new ya(), x[H] = ne), ne.getGripSpace();
    }, this.getHand = function(H) {
      let ne = x[H];
      return ne === void 0 && (ne = new ya(), x[H] = ne), ne.getHandSpace();
    };
    function P(H) {
      const ne = _.indexOf(H.inputSource);
      if (ne === -1)
        return;
      const ie = x[ne];
      ie !== void 0 && (ie.update(H.inputSource, H.frame, l || o), ie.dispatchEvent({ type: H.type, data: H.inputSource }));
    }
    function F() {
      i.removeEventListener("select", P), i.removeEventListener("selectstart", P), i.removeEventListener("selectend", P), i.removeEventListener("squeeze", P), i.removeEventListener("squeezestart", P), i.removeEventListener("squeezeend", P), i.removeEventListener("end", F), i.removeEventListener("inputsourceschange", D);
      for (let H = 0; H < x.length; H++) {
        const ne = _[H];
        ne !== null && (_[H] = null, x[H].disconnect(ne));
      }
      M = null, b = null, e.setRenderTarget(g), f = null, d = null, u = null, i = null, p = null, ue.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(H) {
      s = H, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(H) {
      a = H, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || o;
    }, this.setReferenceSpace = function(H) {
      l = H;
    }, this.getBaseLayer = function() {
      return d !== null ? d : f;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(H) {
      if (i = H, i !== null) {
        if (g = e.getRenderTarget(), i.addEventListener("select", P), i.addEventListener("selectstart", P), i.addEventListener("selectend", P), i.addEventListener("squeeze", P), i.addEventListener("squeezestart", P), i.addEventListener("squeezeend", P), i.addEventListener("end", F), i.addEventListener("inputsourceschange", D), y.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const ne = {
            antialias: i.renderState.layers === void 0 ? y.antialias : !0,
            alpha: !0,
            depth: y.depth,
            stencil: y.stencil,
            framebufferScaleFactor: s
          };
          f = new XRWebGLLayer(i, t, ne), i.updateRenderState({ baseLayer: f }), p = new nn(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: zt,
              type: Un,
              colorSpace: e.outputColorSpace,
              stencilBuffer: y.stencil
            }
          );
        } else {
          let ne = null, ie = null, pe = null;
          y.depth && (pe = y.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ne = y.stencil ? Ri : qn, ie = y.stencil ? Xn : Ln);
          const _e = {
            colorFormat: t.RGBA8,
            depthFormat: pe,
            scaleFactor: s
          };
          u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(_e), i.updateRenderState({ layers: [d] }), p = new nn(
            d.textureWidth,
            d.textureHeight,
            {
              format: zt,
              type: Un,
              depthTexture: new mf(d.textureWidth, d.textureHeight, ie, void 0, void 0, void 0, void 0, void 0, void 0, ne),
              stencilBuffer: y.stencil,
              colorSpace: e.outputColorSpace,
              samples: y.antialias ? 4 : 0
            }
          );
          const me = e.properties.get(p);
          me.__ignoreDepthValues = d.ignoreDepthValues;
        }
        p.isXRRenderTarget = !0, this.setFoveation(c), l = null, o = await i.requestReferenceSpace(a), ue.setContext(i), ue.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    };
    function D(H) {
      for (let ne = 0; ne < H.removed.length; ne++) {
        const ie = H.removed[ne], pe = _.indexOf(ie);
        pe >= 0 && (_[pe] = null, x[pe].disconnect(ie));
      }
      for (let ne = 0; ne < H.added.length; ne++) {
        const ie = H.added[ne];
        let pe = _.indexOf(ie);
        if (pe === -1) {
          for (let me = 0; me < x.length; me++)
            if (me >= _.length) {
              _.push(ie), pe = me;
              break;
            } else if (_[me] === null) {
              _[me] = ie, pe = me;
              break;
            }
          if (pe === -1) break;
        }
        const _e = x[pe];
        _e && _e.connect(ie);
      }
    }
    const N = new R(), B = new R();
    function J(H, ne, ie) {
      N.setFromMatrixPosition(ne.matrixWorld), B.setFromMatrixPosition(ie.matrixWorld);
      const pe = N.distanceTo(B), _e = ne.projectionMatrix.elements, me = ie.projectionMatrix.elements, Ce = _e[14] / (_e[10] - 1), we = _e[14] / (_e[10] + 1), Ye = (_e[9] + 1) / _e[5], Pe = (_e[9] - 1) / _e[5], U = (_e[8] - 1) / _e[0], ce = (me[8] + 1) / me[0], j = Ce * U, ae = Ce * ce, $ = pe / (-U + ce), Te = $ * -U;
      ne.matrixWorld.decompose(H.position, H.quaternion, H.scale), H.translateX(Te), H.translateZ($), H.matrixWorld.compose(H.position, H.quaternion, H.scale), H.matrixWorldInverse.copy(H.matrixWorld).invert();
      const ye = Ce + $, xe = we + $, Ie = j - Te, We = ae + (pe - Te), it = Ye * we / xe * ye, L = Pe * we / xe * ye;
      H.projectionMatrix.makePerspective(Ie, We, it, L, ye, xe), H.projectionMatrixInverse.copy(H.projectionMatrix).invert();
    }
    function W(H, ne) {
      ne === null ? H.matrixWorld.copy(H.matrix) : H.matrixWorld.multiplyMatrices(ne.matrixWorld, H.matrix), H.matrixWorldInverse.copy(H.matrixWorld).invert();
    }
    this.updateCameraXR = function(H) {
      if (i === null) return H;
      v && (H = v), A.near = E.near = S.near = H.near, A.far = E.far = S.far = H.far, (M !== A.near || b !== A.far) && (i.updateRenderState({
        depthNear: A.near,
        depthFar: A.far
      }), M = A.near, b = A.far);
      const ne = H.parent, ie = A.cameras;
      W(A, ne);
      for (let pe = 0; pe < ie.length; pe++)
        W(ie[pe], ne);
      return ie.length === 2 ? J(A, S, E) : A.projectionMatrix.copy(S.projectionMatrix), v && X(A, ne), A;
    };
    function X(H, ne) {
      const ie = v;
      ne === null ? ie.matrix.copy(H.matrixWorld) : (ie.matrix.copy(ne.matrixWorld), ie.matrix.invert(), ie.matrix.multiply(H.matrixWorld)), ie.matrix.decompose(ie.position, ie.quaternion, ie.scale), ie.updateMatrixWorld(!0);
      const pe = ie.children;
      for (let _e = 0, me = pe.length; _e < me; _e++)
        pe[_e].updateMatrixWorld(!0);
      ie.projectionMatrix.copy(H.projectionMatrix), ie.projectionMatrixInverse.copy(H.projectionMatrixInverse), ie.isPerspectiveCamera && (ie.fov = ms * 2 * Math.atan(1 / ie.projectionMatrix.elements[5]), ie.zoom = 1);
    }
    this.getFoveation = function() {
      if (!(d === null && f === null))
        return c;
    }, this.setFoveation = function(H) {
      c = H, d !== null && (d.fixedFoveation = H), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = H);
    };
    let Q = null;
    function te(H, ne) {
      if (h = ne.getViewerPose(l || o), m = ne, h !== null) {
        const ie = h.views;
        f !== null && (e.setRenderTargetFramebuffer(p, f.framebuffer), e.setRenderTarget(p));
        let pe = !1;
        ie.length !== A.cameras.length && (A.cameras.length = 0, pe = !0);
        for (let _e = 0; _e < ie.length; _e++) {
          const me = ie[_e];
          let Ce = null;
          if (f !== null)
            Ce = f.getViewport(me);
          else {
            const Ye = u.getViewSubImage(d, me);
            Ce = Ye.viewport, _e === 0 && (e.setRenderTargetTextures(
              p,
              Ye.colorTexture,
              d.ignoreDepthValues ? void 0 : Ye.depthStencilTexture
            ), e.setRenderTarget(p));
          }
          let we = T[_e];
          we === void 0 && (we = new Mt(), we.layers.enable(_e), we.viewport = new et(), T[_e] = we), we.matrix.fromArray(me.transform.matrix), we.matrix.decompose(we.position, we.quaternion, we.scale), we.projectionMatrix.fromArray(me.projectionMatrix), we.projectionMatrixInverse.copy(we.projectionMatrix).invert(), we.viewport.set(Ce.x, Ce.y, Ce.width, Ce.height), _e === 0 && (A.matrix.copy(we.matrix), A.matrix.decompose(A.position, A.quaternion, A.scale)), pe === !0 && A.cameras.push(we);
        }
      }
      for (let ie = 0; ie < x.length; ie++) {
        const pe = _[ie], _e = x[ie];
        pe !== null && _e !== void 0 && _e.update(pe, ne, l || o);
      }
      Q && Q(H, ne), ne.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ne }), m = null;
    }
    const ue = new cf();
    ue.setAnimationLoop(te), this.setAnimationLoop = function(H) {
      Q = H;
    }, this.dispose = function() {
    };
  }
}
function ax(r, e) {
  function t(g, p) {
    g.matrixAutoUpdate === !0 && g.updateMatrix(), p.value.copy(g.matrix);
  }
  function n(g, p) {
    p.color.getRGB(g.fogColor.value, sf(r)), p.isFog ? (g.fogNear.value = p.near, g.fogFar.value = p.far) : p.isFogExp2 && (g.fogDensity.value = p.density);
  }
  function i(g, p, x, _, v) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? s(g, p) : p.isMeshToonMaterial ? (s(g, p), u(g, p)) : p.isMeshPhongMaterial ? (s(g, p), h(g, p)) : p.isMeshStandardMaterial ? (s(g, p), d(g, p), p.isMeshPhysicalMaterial && f(g, p, v)) : p.isMeshMatcapMaterial ? (s(g, p), m(g, p)) : p.isMeshDepthMaterial ? s(g, p) : p.isMeshDistanceMaterial ? (s(g, p), y(g, p)) : p.isMeshNormalMaterial ? s(g, p) : p.isLineBasicMaterial ? (o(g, p), p.isLineDashedMaterial && a(g, p)) : p.isPointsMaterial ? c(g, p, x, _) : p.isSpriteMaterial ? l(g, p) : p.isShadowMaterial ? (g.color.value.copy(p.color), g.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function s(g, p) {
    g.opacity.value = p.opacity, p.color && g.diffuse.value.copy(p.color), p.emissive && g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (g.map.value = p.map, t(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, t(p.alphaMap, g.alphaMapTransform)), p.bumpMap && (g.bumpMap.value = p.bumpMap, t(p.bumpMap, g.bumpMapTransform), g.bumpScale.value = p.bumpScale, p.side === It && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, t(p.normalMap, g.normalMapTransform), g.normalScale.value.copy(p.normalScale), p.side === It && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, t(p.displacementMap, g.displacementMapTransform), g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias), p.emissiveMap && (g.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, g.emissiveMapTransform)), p.specularMap && (g.specularMap.value = p.specularMap, t(p.specularMap, g.specularMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
    const x = e.get(p).envMap;
    if (x && (g.envMap.value = x, g.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, g.reflectivity.value = p.reflectivity, g.ior.value = p.ior, g.refractionRatio.value = p.refractionRatio), p.lightMap) {
      g.lightMap.value = p.lightMap;
      const _ = r.useLegacyLights === !0 ? Math.PI : 1;
      g.lightMapIntensity.value = p.lightMapIntensity * _, t(p.lightMap, g.lightMapTransform);
    }
    p.aoMap && (g.aoMap.value = p.aoMap, g.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, g.aoMapTransform));
  }
  function o(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, p.map && (g.map.value = p.map, t(p.map, g.mapTransform));
  }
  function a(g, p) {
    g.dashSize.value = p.dashSize, g.totalSize.value = p.dashSize + p.gapSize, g.scale.value = p.scale;
  }
  function c(g, p, x, _) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.size.value = p.size * x, g.scale.value = _ * 0.5, p.map && (g.map.value = p.map, t(p.map, g.uvTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, t(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
  }
  function l(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.rotation.value = p.rotation, p.map && (g.map.value = p.map, t(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, t(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
  }
  function h(g, p) {
    g.specular.value.copy(p.specular), g.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(g, p) {
    p.gradientMap && (g.gradientMap.value = p.gradientMap);
  }
  function d(g, p) {
    g.metalness.value = p.metalness, p.metalnessMap && (g.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, g.metalnessMapTransform)), g.roughness.value = p.roughness, p.roughnessMap && (g.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, g.roughnessMapTransform)), e.get(p).envMap && (g.envMapIntensity.value = p.envMapIntensity);
  }
  function f(g, p, x) {
    g.ior.value = p.ior, p.sheen > 0 && (g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), g.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (g.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, g.sheenColorMapTransform)), p.sheenRoughnessMap && (g.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, g.sheenRoughnessMapTransform))), p.clearcoat > 0 && (g.clearcoat.value = p.clearcoat, g.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (g.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, g.clearcoatMapTransform)), p.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, g.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (g.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, g.clearcoatNormalMapTransform), g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === It && g.clearcoatNormalScale.value.negate())), p.iridescence > 0 && (g.iridescence.value = p.iridescence, g.iridescenceIOR.value = p.iridescenceIOR, g.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], g.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (g.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, g.iridescenceMapTransform)), p.iridescenceThicknessMap && (g.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, g.iridescenceThicknessMapTransform))), p.transmission > 0 && (g.transmission.value = p.transmission, g.transmissionSamplerMap.value = x.texture, g.transmissionSamplerSize.value.set(x.width, x.height), p.transmissionMap && (g.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, g.transmissionMapTransform)), g.thickness.value = p.thickness, p.thicknessMap && (g.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, g.thicknessMapTransform)), g.attenuationDistance.value = p.attenuationDistance, g.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (g.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (g.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, g.anisotropyMapTransform))), g.specularIntensity.value = p.specularIntensity, g.specularColor.value.copy(p.specularColor), p.specularColorMap && (g.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, g.specularColorMapTransform)), p.specularIntensityMap && (g.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, g.specularIntensityMapTransform));
  }
  function m(g, p) {
    p.matcap && (g.matcap.value = p.matcap);
  }
  function y(g, p) {
    const x = e.get(p).light;
    g.referencePosition.value.setFromMatrixPosition(x.matrixWorld), g.nearDistance.value = x.shadow.camera.near, g.farDistance.value = x.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function cx(r, e, t, n) {
  let i = {}, s = {}, o = [];
  const a = t.isWebGL2 ? r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function c(x, _) {
    const v = _.program;
    n.uniformBlockBinding(x, v);
  }
  function l(x, _) {
    let v = i[x.id];
    v === void 0 && (m(x), v = h(x), i[x.id] = v, x.addEventListener("dispose", g));
    const S = _.program;
    n.updateUBOMapping(x, S);
    const E = e.render.frame;
    s[x.id] !== E && (d(x), s[x.id] = E);
  }
  function h(x) {
    const _ = u();
    x.__bindingPointIndex = _;
    const v = r.createBuffer(), S = x.__size, E = x.usage;
    return r.bindBuffer(r.UNIFORM_BUFFER, v), r.bufferData(r.UNIFORM_BUFFER, S, E), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, _, v), v;
  }
  function u() {
    for (let x = 0; x < a; x++)
      if (o.indexOf(x) === -1)
        return o.push(x), x;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(x) {
    const _ = i[x.id], v = x.uniforms, S = x.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, _);
    for (let E = 0, T = v.length; E < T; E++) {
      const A = v[E];
      if (f(A, E, S) === !0) {
        const M = A.__offset, b = Array.isArray(A.value) ? A.value : [A.value];
        let P = 0;
        for (let F = 0; F < b.length; F++) {
          const D = b[F], N = y(D);
          typeof D == "number" ? (A.__data[0] = D, r.bufferSubData(r.UNIFORM_BUFFER, M + P, A.__data)) : D.isMatrix3 ? (A.__data[0] = D.elements[0], A.__data[1] = D.elements[1], A.__data[2] = D.elements[2], A.__data[3] = D.elements[0], A.__data[4] = D.elements[3], A.__data[5] = D.elements[4], A.__data[6] = D.elements[5], A.__data[7] = D.elements[0], A.__data[8] = D.elements[6], A.__data[9] = D.elements[7], A.__data[10] = D.elements[8], A.__data[11] = D.elements[0]) : (D.toArray(A.__data, P), P += N.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        r.bufferSubData(r.UNIFORM_BUFFER, M, A.__data);
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function f(x, _, v) {
    const S = x.value;
    if (v[_] === void 0) {
      if (typeof S == "number")
        v[_] = S;
      else {
        const E = Array.isArray(S) ? S : [S], T = [];
        for (let A = 0; A < E.length; A++)
          T.push(E[A].clone());
        v[_] = T;
      }
      return !0;
    } else if (typeof S == "number") {
      if (v[_] !== S)
        return v[_] = S, !0;
    } else {
      const E = Array.isArray(v[_]) ? v[_] : [v[_]], T = Array.isArray(S) ? S : [S];
      for (let A = 0; A < E.length; A++) {
        const M = E[A];
        if (M.equals(T[A]) === !1)
          return M.copy(T[A]), !0;
      }
    }
    return !1;
  }
  function m(x) {
    const _ = x.uniforms;
    let v = 0;
    const S = 16;
    let E = 0;
    for (let T = 0, A = _.length; T < A; T++) {
      const M = _[T], b = {
        boundary: 0,
        // bytes
        storage: 0
        // bytes
      }, P = Array.isArray(M.value) ? M.value : [M.value];
      for (let F = 0, D = P.length; F < D; F++) {
        const N = P[F], B = y(N);
        b.boundary += B.boundary, b.storage += B.storage;
      }
      if (M.__data = new Float32Array(b.storage / Float32Array.BYTES_PER_ELEMENT), M.__offset = v, T > 0) {
        E = v % S;
        const F = S - E;
        E !== 0 && F - b.boundary < 0 && (v += S - E, M.__offset = v);
      }
      v += b.storage;
    }
    return E = v % S, E > 0 && (v += S - E), x.__size = v, x.__cache = {}, this;
  }
  function y(x) {
    const _ = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof x == "number" ? (_.boundary = 4, _.storage = 4) : x.isVector2 ? (_.boundary = 8, _.storage = 8) : x.isVector3 || x.isColor ? (_.boundary = 16, _.storage = 12) : x.isVector4 ? (_.boundary = 16, _.storage = 16) : x.isMatrix3 ? (_.boundary = 48, _.storage = 48) : x.isMatrix4 ? (_.boundary = 64, _.storage = 64) : x.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", x), _;
  }
  function g(x) {
    const _ = x.target;
    _.removeEventListener("dispose", g);
    const v = o.indexOf(_.__bindingPointIndex);
    o.splice(v, 1), r.deleteBuffer(i[_.id]), delete i[_.id], delete s[_.id];
  }
  function p() {
    for (const x in i)
      r.deleteBuffer(i[x]);
    o = [], i = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: p
  };
}
function lx() {
  const r = nr("canvas");
  return r.style.display = "block", r;
}
class gf {
  constructor(e = {}) {
    const {
      canvas: t = lx(),
      context: n = null,
      depth: i = !0,
      stencil: s = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    n !== null ? d = n.getContextAttributes().alpha : d = o;
    const f = new Uint32Array(4), m = new Int32Array(4);
    let y = null, g = null;
    const p = [], x = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputColorSpace = De, this.useLegacyLights = !0, this.toneMapping = pn, this.toneMappingExposure = 1;
    const _ = this;
    let v = !1, S = 0, E = 0, T = null, A = -1, M = null;
    const b = new et(), P = new et();
    let F = null;
    const D = new de(0);
    let N = 0, B = t.width, J = t.height, W = 1, X = null, Q = null;
    const te = new et(0, 0, B, J), ue = new et(0, 0, B, J);
    let H = !1;
    const ne = new Fo();
    let ie = !1, pe = !1, _e = null;
    const me = new Ne(), Ce = new Z(), we = new R(), Ye = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function Pe() {
      return T === null ? W : 1;
    }
    let U = n;
    function ce(C, k) {
      for (let Y = 0; Y < C.length; Y++) {
        const z = C[Y], K = t.getContext(z, k);
        if (K !== null) return K;
      }
      return null;
    }
    try {
      const C = {
        alpha: !0,
        depth: i,
        stencil: s,
        antialias: a,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r153"), t.addEventListener("webglcontextlost", fe, !1), t.addEventListener("webglcontextrestored", V, !1), t.addEventListener("webglcontextcreationerror", le, !1), U === null) {
        const k = ["webgl2", "webgl", "experimental-webgl"];
        if (_.isWebGL1Renderer === !0 && k.shift(), U = ce(k, C), U === null)
          throw ce(k) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      U instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), U.getShaderPrecisionFormat === void 0 && (U.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (C) {
      throw console.error("THREE.WebGLRenderer: " + C.message), C;
    }
    let j, ae, $, Te, ye, xe, Ie, We, it, L, w, q, oe, re, I, ee, se, G, Se, Re, Ae, Ee, ve, Ue;
    function qe() {
      j = new T_(U), ae = new x_(U, j, e), j.init(ae), Ee = new ff(U, j, ae), $ = new ix(U, j, ae), Te = new R_(U), ye = new Xy(), xe = new sx(U, j, $, ye, ae, Ee, Te), Ie = new M_(_), We = new b_(_), it = new km(U, ae), ve = new __(U, j, it, ae), L = new A_(U, it, Te, ve), w = new I_(U, L, it, Te), Se = new P_(U, ae, xe), ee = new v_(ye), q = new Wy(_, Ie, We, j, ae, ve, ee), oe = new ax(_, ye), re = new Yy(), I = new $y(j, ae), G = new g_(_, Ie, We, $, w, d, c), se = new nx(_, w, ae), Ue = new cx(U, Te, ae, $), Re = new y_(U, j, Te, ae), Ae = new w_(U, j, Te, ae), Te.programs = q.programs, _.capabilities = ae, _.extensions = j, _.properties = ye, _.renderLists = re, _.shadowMap = se, _.state = $, _.info = Te;
    }
    qe();
    const O = new ox(_, U);
    this.xr = O, this.getContext = function() {
      return U;
    }, this.getContextAttributes = function() {
      return U.getContextAttributes();
    }, this.forceContextLoss = function() {
      const C = j.get("WEBGL_lose_context");
      C && C.loseContext();
    }, this.forceContextRestore = function() {
      const C = j.get("WEBGL_lose_context");
      C && C.restoreContext();
    }, this.getPixelRatio = function() {
      return W;
    }, this.setPixelRatio = function(C) {
      C !== void 0 && (W = C, this.setSize(B, J, !1));
    }, this.getSize = function(C) {
      return C.set(B, J);
    }, this.setSize = function(C, k, Y = !0) {
      if (O.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      B = C, J = k, t.width = Math.floor(C * W), t.height = Math.floor(k * W), Y === !0 && (t.style.width = C + "px", t.style.height = k + "px"), this.setViewport(0, 0, C, k);
    }, this.getDrawingBufferSize = function(C) {
      return C.set(B * W, J * W).floor();
    }, this.setDrawingBufferSize = function(C, k, Y) {
      B = C, J = k, W = Y, t.width = Math.floor(C * Y), t.height = Math.floor(k * Y), this.setViewport(0, 0, C, k);
    }, this.getCurrentViewport = function(C) {
      return C.copy(b);
    }, this.getViewport = function(C) {
      return C.copy(te);
    }, this.setViewport = function(C, k, Y, z) {
      C.isVector4 ? te.set(C.x, C.y, C.z, C.w) : te.set(C, k, Y, z), $.viewport(b.copy(te).multiplyScalar(W).floor());
    }, this.getScissor = function(C) {
      return C.copy(ue);
    }, this.setScissor = function(C, k, Y, z) {
      C.isVector4 ? ue.set(C.x, C.y, C.z, C.w) : ue.set(C, k, Y, z), $.scissor(P.copy(ue).multiplyScalar(W).floor());
    }, this.getScissorTest = function() {
      return H;
    }, this.setScissorTest = function(C) {
      $.setScissorTest(H = C);
    }, this.setOpaqueSort = function(C) {
      X = C;
    }, this.setTransparentSort = function(C) {
      Q = C;
    }, this.getClearColor = function(C) {
      return C.copy(G.getClearColor());
    }, this.setClearColor = function() {
      G.setClearColor.apply(G, arguments);
    }, this.getClearAlpha = function() {
      return G.getClearAlpha();
    }, this.setClearAlpha = function() {
      G.setClearAlpha.apply(G, arguments);
    }, this.clear = function(C = !0, k = !0, Y = !0) {
      let z = 0;
      if (C) {
        let K = !1;
        if (T !== null) {
          const Me = T.texture.format;
          K = Me === el || Me === $c || Me === Qc;
        }
        if (K) {
          const Me = T.texture.type, Le = Me === Un || Me === Ln || Me === Io || Me === Xn || Me === Jc || Me === jc, Oe = G.getClearColor(), Fe = G.getClearAlpha(), Xe = Oe.r, Be = Oe.g, ze = Oe.b, tt = ye.get(T).__webglFramebuffer;
          Le ? (f[0] = Xe, f[1] = Be, f[2] = ze, f[3] = Fe, U.clearBufferuiv(U.COLOR, tt, f)) : (m[0] = Xe, m[1] = Be, m[2] = ze, m[3] = Fe, U.clearBufferiv(U.COLOR, tt, m));
        } else
          z |= U.COLOR_BUFFER_BIT;
      }
      k && (z |= U.DEPTH_BUFFER_BIT), Y && (z |= U.STENCIL_BUFFER_BIT), U.clear(z);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", fe, !1), t.removeEventListener("webglcontextrestored", V, !1), t.removeEventListener("webglcontextcreationerror", le, !1), re.dispose(), I.dispose(), ye.dispose(), Ie.dispose(), We.dispose(), w.dispose(), ve.dispose(), Ue.dispose(), q.dispose(), O.dispose(), O.removeEventListener("sessionstart", at), O.removeEventListener("sessionend", ln), _e && (_e.dispose(), _e = null), Rt.stop();
    };
    function fe(C) {
      C.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), v = !0;
    }
    function V() {
      console.log("THREE.WebGLRenderer: Context Restored."), v = !1;
      const C = Te.autoReset, k = se.enabled, Y = se.autoUpdate, z = se.needsUpdate, K = se.type;
      qe(), Te.autoReset = C, se.enabled = k, se.autoUpdate = Y, se.needsUpdate = z, se.type = K;
    }
    function le(C) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", C.statusMessage);
    }
    function ge(C) {
      const k = C.target;
      k.removeEventListener("dispose", ge), Qe(k);
    }
    function Qe(C) {
      ot(C), ye.remove(C);
    }
    function ot(C) {
      const k = ye.get(C).programs;
      k !== void 0 && (k.forEach(function(Y) {
        q.releaseProgram(Y);
      }), C.isShaderMaterial && q.releaseShaderCache(C));
    }
    this.renderBufferDirect = function(C, k, Y, z, K, Me) {
      k === null && (k = Ye);
      const Le = K.isMesh && K.matrixWorld.determinant() < 0, Oe = dp(C, k, Y, z, K);
      $.setMaterial(z, Le);
      let Fe = Y.index, Xe = 1;
      z.wireframe === !0 && (Fe = L.getWireframeAttribute(Y), Xe = 2);
      const Be = Y.drawRange, ze = Y.attributes.position;
      let tt = Be.start * Xe, ut = (Be.start + Be.count) * Xe;
      Me !== null && (tt = Math.max(tt, Me.start * Xe), ut = Math.min(ut, (Me.start + Me.count) * Xe)), Fe !== null ? (tt = Math.max(tt, 0), ut = Math.min(ut, Fe.count)) : ze != null && (tt = Math.max(tt, 0), ut = Math.min(ut, ze.count));
      const Jt = ut - tt;
      if (Jt < 0 || Jt === 1 / 0) return;
      ve.setup(K, z, Oe, Y, Fe);
      let Mn, pt = Re;
      if (Fe !== null && (Mn = it.get(Fe), pt = Ae, pt.setIndex(Mn)), K.isMesh)
        z.wireframe === !0 ? ($.setLineWidth(z.wireframeLinewidth * Pe()), pt.setMode(U.LINES)) : pt.setMode(U.TRIANGLES);
      else if (K.isLine) {
        let Ze = z.linewidth;
        Ze === void 0 && (Ze = 1), $.setLineWidth(Ze * Pe()), K.isLineSegments ? pt.setMode(U.LINES) : K.isLineLoop ? pt.setMode(U.LINE_LOOP) : pt.setMode(U.LINE_STRIP);
      } else K.isPoints ? pt.setMode(U.POINTS) : K.isSprite && pt.setMode(U.TRIANGLES);
      if (K.isInstancedMesh)
        pt.renderInstances(tt, Jt, K.count);
      else if (Y.isInstancedBufferGeometry) {
        const Ze = Y._maxInstanceCount !== void 0 ? Y._maxInstanceCount : 1 / 0, Ko = Math.min(Y.instanceCount, Ze);
        pt.renderInstances(tt, Jt, Ko);
      } else
        pt.render(tt, Jt);
    }, this.compile = function(C, k) {
      function Y(z, K, Me) {
        z.transparent === !0 && z.side === tn && z.forceSinglePass === !1 ? (z.side = It, z.needsUpdate = !0, Rr(z, K, Me), z.side = gn, z.needsUpdate = !0, Rr(z, K, Me), z.side = tn) : Rr(z, K, Me);
      }
      g = I.get(C), g.init(), x.push(g), C.traverseVisible(function(z) {
        z.isLight && z.layers.test(k.layers) && (g.pushLight(z), z.castShadow && g.pushShadow(z));
      }), g.setupLights(_.useLegacyLights), C.traverse(function(z) {
        const K = z.material;
        if (K)
          if (Array.isArray(K))
            for (let Me = 0; Me < K.length; Me++) {
              const Le = K[Me];
              Y(Le, C, z);
            }
          else
            Y(K, C, z);
      }), x.pop(), g = null;
    };
    let ft = null;
    function ii(C) {
      ft && ft(C);
    }
    function at() {
      Rt.stop();
    }
    function ln() {
      Rt.start();
    }
    const Rt = new cf();
    Rt.setAnimationLoop(ii), typeof self < "u" && Rt.setContext(self), this.setAnimationLoop = function(C) {
      ft = C, O.setAnimationLoop(C), C === null ? Rt.stop() : Rt.start();
    }, O.addEventListener("sessionstart", at), O.addEventListener("sessionend", ln), this.render = function(C, k) {
      if (k !== void 0 && k.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (v === !0) return;
      C.matrixWorldAutoUpdate === !0 && C.updateMatrixWorld(), k.parent === null && k.matrixWorldAutoUpdate === !0 && k.updateMatrixWorld(), O.enabled === !0 && O.isPresenting === !0 && (k = O.updateCameraXR(k)), C.isScene === !0 && C.onBeforeRender(_, C, k, T), g = I.get(C, x.length), g.init(), x.push(g), me.multiplyMatrices(k.projectionMatrix, k.matrixWorldInverse), ne.setFromProjectionMatrix(me), pe = this.localClippingEnabled, ie = ee.init(this.clippingPlanes, pe), y = re.get(C, p.length), y.init(), p.push(y), zl(C, k, 0, _.sortObjects), y.finish(), _.sortObjects === !0 && y.sort(X, Q), ie === !0 && ee.beginShadows();
      const Y = g.state.shadowsArray;
      if (se.render(Y, C, k), ie === !0 && ee.endShadows(), this.info.autoReset === !0 && this.info.reset(), this.info.render.frame++, G.render(y, C), g.setupLights(_.useLegacyLights), k.isArrayCamera) {
        const z = k.cameras;
        for (let K = 0, Me = z.length; K < Me; K++) {
          const Le = z[K];
          kl(y, C, Le, Le.viewport);
        }
      } else
        kl(y, C, k);
      T !== null && (xe.updateMultisampleRenderTarget(T), xe.updateRenderTargetMipmap(T)), C.isScene === !0 && C.onAfterRender(_, C, k), ve.resetDefaultState(), A = -1, M = null, x.pop(), x.length > 0 ? g = x[x.length - 1] : g = null, p.pop(), p.length > 0 ? y = p[p.length - 1] : y = null;
    };
    function zl(C, k, Y, z) {
      if (C.visible === !1) return;
      if (C.layers.test(k.layers)) {
        if (C.isGroup)
          Y = C.renderOrder;
        else if (C.isLOD)
          C.autoUpdate === !0 && C.update(k);
        else if (C.isLight)
          g.pushLight(C), C.castShadow && g.pushShadow(C);
        else if (C.isSprite) {
          if (!C.frustumCulled || ne.intersectsSprite(C)) {
            z && we.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);
            const Le = w.update(C), Oe = C.material;
            Oe.visible && y.push(C, Le, Oe, Y, we.z, null);
          }
        } else if ((C.isMesh || C.isLine || C.isPoints) && (!C.frustumCulled || ne.intersectsObject(C))) {
          C.isSkinnedMesh && C.skeleton.frame !== Te.render.frame && (C.skeleton.update(), C.skeleton.frame = Te.render.frame);
          const Le = w.update(C), Oe = C.material;
          if (z && (C.boundingSphere !== void 0 ? (C.boundingSphere === null && C.computeBoundingSphere(), we.copy(C.boundingSphere.center)) : (Le.boundingSphere === null && Le.computeBoundingSphere(), we.copy(Le.boundingSphere.center)), we.applyMatrix4(C.matrixWorld).applyMatrix4(me)), Array.isArray(Oe)) {
            const Fe = Le.groups;
            for (let Xe = 0, Be = Fe.length; Xe < Be; Xe++) {
              const ze = Fe[Xe], tt = Oe[ze.materialIndex];
              tt && tt.visible && y.push(C, Le, tt, Y, we.z, ze);
            }
          } else Oe.visible && y.push(C, Le, Oe, Y, we.z, null);
        }
      }
      const Me = C.children;
      for (let Le = 0, Oe = Me.length; Le < Oe; Le++)
        zl(Me[Le], k, Y, z);
    }
    function kl(C, k, Y, z) {
      const K = C.opaque, Me = C.transmissive, Le = C.transparent;
      g.setupLightsView(Y), ie === !0 && ee.setGlobalState(_.clippingPlanes, Y), Me.length > 0 && up(K, Me, k, Y), z && $.viewport(b.copy(z)), K.length > 0 && wr(K, k, Y), Me.length > 0 && wr(Me, k, Y), Le.length > 0 && wr(Le, k, Y), $.buffers.depth.setTest(!0), $.buffers.depth.setMask(!0), $.buffers.color.setMask(!0), $.setPolygonOffset(!1);
    }
    function up(C, k, Y, z) {
      const K = ae.isWebGL2;
      _e === null && (_e = new nn(1, 1, {
        generateMipmaps: !0,
        type: j.has("EXT_color_buffer_half_float") ? dn : Un,
        minFilter: _n,
        samples: K && a === !0 ? 4 : 0
      })), _.getDrawingBufferSize(Ce), K ? _e.setSize(Ce.x, Ce.y) : _e.setSize(Co(Ce.x), Co(Ce.y));
      const Me = _.getRenderTarget();
      _.setRenderTarget(_e), _.getClearColor(D), N = _.getClearAlpha(), N < 1 && _.setClearColor(16777215, 0.5), _.clear();
      const Le = _.toneMapping;
      _.toneMapping = pn, wr(C, Y, z), xe.updateMultisampleRenderTarget(_e), xe.updateRenderTargetMipmap(_e);
      let Oe = !1;
      for (let Fe = 0, Xe = k.length; Fe < Xe; Fe++) {
        const Be = k[Fe], ze = Be.object, tt = Be.geometry, ut = Be.material, Jt = Be.group;
        if (ut.side === tn && ze.layers.test(z.layers)) {
          const Mn = ut.side;
          ut.side = It, ut.needsUpdate = !0, Hl(ze, Y, z, tt, ut, Jt), ut.side = Mn, ut.needsUpdate = !0, Oe = !0;
        }
      }
      Oe === !0 && (xe.updateMultisampleRenderTarget(_e), xe.updateRenderTargetMipmap(_e)), _.setRenderTarget(Me), _.setClearColor(D, N), _.toneMapping = Le;
    }
    function wr(C, k, Y) {
      const z = k.isScene === !0 ? k.overrideMaterial : null;
      for (let K = 0, Me = C.length; K < Me; K++) {
        const Le = C[K], Oe = Le.object, Fe = Le.geometry, Xe = z === null ? Le.material : z, Be = Le.group;
        Oe.layers.test(Y.layers) && Hl(Oe, k, Y, Fe, Xe, Be);
      }
    }
    function Hl(C, k, Y, z, K, Me) {
      C.onBeforeRender(_, k, Y, z, K, Me), C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse, C.matrixWorld), C.normalMatrix.getNormalMatrix(C.modelViewMatrix), K.onBeforeRender(_, k, Y, z, C, Me), K.transparent === !0 && K.side === tn && K.forceSinglePass === !1 ? (K.side = It, K.needsUpdate = !0, _.renderBufferDirect(Y, k, z, K, C, Me), K.side = gn, K.needsUpdate = !0, _.renderBufferDirect(Y, k, z, K, C, Me), K.side = tn) : _.renderBufferDirect(Y, k, z, K, C, Me), C.onAfterRender(_, k, Y, z, K, Me);
    }
    function Rr(C, k, Y) {
      k.isScene !== !0 && (k = Ye);
      const z = ye.get(C), K = g.state.lights, Me = g.state.shadowsArray, Le = K.state.version, Oe = q.getParameters(C, K.state, Me, k, Y), Fe = q.getProgramCacheKey(Oe);
      let Xe = z.programs;
      z.environment = C.isMeshStandardMaterial ? k.environment : null, z.fog = k.fog, z.envMap = (C.isMeshStandardMaterial ? We : Ie).get(C.envMap || z.environment), Xe === void 0 && (C.addEventListener("dispose", ge), Xe = /* @__PURE__ */ new Map(), z.programs = Xe);
      let Be = Xe.get(Fe);
      if (Be !== void 0) {
        if (z.currentProgram === Be && z.lightsStateVersion === Le)
          return Gl(C, Oe), Be;
      } else
        Oe.uniforms = q.getUniforms(C), C.onBuild(Y, Oe, _), C.onBeforeCompile(Oe, _), Be = q.acquireProgram(Oe, Fe), Xe.set(Fe, Be), z.uniforms = Oe.uniforms;
      const ze = z.uniforms;
      (!C.isShaderMaterial && !C.isRawShaderMaterial || C.clipping === !0) && (ze.clippingPlanes = ee.uniform), Gl(C, Oe), z.needsLights = pp(C), z.lightsStateVersion = Le, z.needsLights && (ze.ambientLightColor.value = K.state.ambient, ze.lightProbe.value = K.state.probe, ze.directionalLights.value = K.state.directional, ze.directionalLightShadows.value = K.state.directionalShadow, ze.spotLights.value = K.state.spot, ze.spotLightShadows.value = K.state.spotShadow, ze.rectAreaLights.value = K.state.rectArea, ze.ltc_1.value = K.state.rectAreaLTC1, ze.ltc_2.value = K.state.rectAreaLTC2, ze.pointLights.value = K.state.point, ze.pointLightShadows.value = K.state.pointShadow, ze.hemisphereLights.value = K.state.hemi, ze.directionalShadowMap.value = K.state.directionalShadowMap, ze.directionalShadowMatrix.value = K.state.directionalShadowMatrix, ze.spotShadowMap.value = K.state.spotShadowMap, ze.spotLightMatrix.value = K.state.spotLightMatrix, ze.spotLightMap.value = K.state.spotLightMap, ze.pointShadowMap.value = K.state.pointShadowMap, ze.pointShadowMatrix.value = K.state.pointShadowMatrix);
      const tt = Be.getUniforms(), ut = To.seqWithValue(tt.seq, ze);
      return z.currentProgram = Be, z.uniformsList = ut, Be;
    }
    function Gl(C, k) {
      const Y = ye.get(C);
      Y.outputColorSpace = k.outputColorSpace, Y.instancing = k.instancing, Y.skinning = k.skinning, Y.morphTargets = k.morphTargets, Y.morphNormals = k.morphNormals, Y.morphColors = k.morphColors, Y.morphTargetsCount = k.morphTargetsCount, Y.numClippingPlanes = k.numClippingPlanes, Y.numIntersection = k.numClipIntersection, Y.vertexAlphas = k.vertexAlphas, Y.vertexTangents = k.vertexTangents, Y.toneMapping = k.toneMapping;
    }
    function dp(C, k, Y, z, K) {
      k.isScene !== !0 && (k = Ye), xe.resetTextureUnits();
      const Me = k.fog, Le = z.isMeshStandardMaterial ? k.environment : null, Oe = T === null ? _.outputColorSpace : T.isXRRenderTarget === !0 ? T.texture.colorSpace : Kt, Fe = (z.isMeshStandardMaterial ? We : Ie).get(z.envMap || Le), Xe = z.vertexColors === !0 && !!Y.attributes.color && Y.attributes.color.itemSize === 4, Be = !!Y.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), ze = !!Y.morphAttributes.position, tt = !!Y.morphAttributes.normal, ut = !!Y.morphAttributes.color, Jt = z.toneMapped ? _.toneMapping : pn, Mn = Y.morphAttributes.position || Y.morphAttributes.normal || Y.morphAttributes.color, pt = Mn !== void 0 ? Mn.length : 0, Ze = ye.get(z), Ko = g.state.lights;
      if (ie === !0 && (pe === !0 || C !== M)) {
        const Ot = C === M && z.id === A;
        ee.setState(z, C, Ot);
      }
      let xt = !1;
      z.version === Ze.__version ? (Ze.needsLights && Ze.lightsStateVersion !== Ko.state.version || Ze.outputColorSpace !== Oe || K.isInstancedMesh && Ze.instancing === !1 || !K.isInstancedMesh && Ze.instancing === !0 || K.isSkinnedMesh && Ze.skinning === !1 || !K.isSkinnedMesh && Ze.skinning === !0 || Ze.envMap !== Fe || z.fog === !0 && Ze.fog !== Me || Ze.numClippingPlanes !== void 0 && (Ze.numClippingPlanes !== ee.numPlanes || Ze.numIntersection !== ee.numIntersection) || Ze.vertexAlphas !== Xe || Ze.vertexTangents !== Be || Ze.morphTargets !== ze || Ze.morphNormals !== tt || Ze.morphColors !== ut || Ze.toneMapping !== Jt || ae.isWebGL2 === !0 && Ze.morphTargetsCount !== pt) && (xt = !0) : (xt = !0, Ze.__version = z.version);
      let si = Ze.currentProgram;
      xt === !0 && (si = Rr(z, k, K));
      let Vl = !1, Ls = !1, Zo = !1;
      const Ct = si.getUniforms(), ri = Ze.uniforms;
      if ($.useProgram(si.program) && (Vl = !0, Ls = !0, Zo = !0), z.id !== A && (A = z.id, Ls = !0), Vl || M !== C) {
        if (Ct.setValue(U, "projectionMatrix", C.projectionMatrix), ae.logarithmicDepthBuffer && Ct.setValue(
          U,
          "logDepthBufFC",
          2 / (Math.log(C.far + 1) / Math.LN2)
        ), M !== C && (M = C, Ls = !0, Zo = !0), z.isShaderMaterial || z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshStandardMaterial || z.envMap) {
          const Ot = Ct.map.cameraPosition;
          Ot !== void 0 && Ot.setValue(
            U,
            we.setFromMatrixPosition(C.matrixWorld)
          );
        }
        (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && Ct.setValue(U, "isOrthographic", C.isOrthographicCamera === !0), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial || z.isShadowMaterial || K.isSkinnedMesh) && Ct.setValue(U, "viewMatrix", C.matrixWorldInverse);
      }
      if (K.isSkinnedMesh) {
        Ct.setOptional(U, K, "bindMatrix"), Ct.setOptional(U, K, "bindMatrixInverse");
        const Ot = K.skeleton;
        Ot && (ae.floatVertexTextures ? (Ot.boneTexture === null && Ot.computeBoneTexture(), Ct.setValue(U, "boneTexture", Ot.boneTexture, xe), Ct.setValue(U, "boneTextureSize", Ot.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      const Jo = Y.morphAttributes;
      if ((Jo.position !== void 0 || Jo.normal !== void 0 || Jo.color !== void 0 && ae.isWebGL2 === !0) && Se.update(K, Y, si), (Ls || Ze.receiveShadow !== K.receiveShadow) && (Ze.receiveShadow = K.receiveShadow, Ct.setValue(U, "receiveShadow", K.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && (ri.envMap.value = Fe, ri.flipEnvMap.value = Fe.isCubeTexture && Fe.isRenderTargetTexture === !1 ? -1 : 1), Ls && (Ct.setValue(U, "toneMappingExposure", _.toneMappingExposure), Ze.needsLights && fp(ri, Zo), Me && z.fog === !0 && oe.refreshFogUniforms(ri, Me), oe.refreshMaterialUniforms(ri, z, W, J, _e), To.upload(U, Ze.uniformsList, ri, xe)), z.isShaderMaterial && z.uniformsNeedUpdate === !0 && (To.upload(U, Ze.uniformsList, ri, xe), z.uniformsNeedUpdate = !1), z.isSpriteMaterial && Ct.setValue(U, "center", K.center), Ct.setValue(U, "modelViewMatrix", K.modelViewMatrix), Ct.setValue(U, "normalMatrix", K.normalMatrix), Ct.setValue(U, "modelMatrix", K.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        const Ot = z.uniformsGroups;
        for (let jo = 0, mp = Ot.length; jo < mp; jo++)
          if (ae.isWebGL2) {
            const Wl = Ot[jo];
            Ue.update(Wl, si), Ue.bind(Wl, si);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return si;
    }
    function fp(C, k) {
      C.ambientLightColor.needsUpdate = k, C.lightProbe.needsUpdate = k, C.directionalLights.needsUpdate = k, C.directionalLightShadows.needsUpdate = k, C.pointLights.needsUpdate = k, C.pointLightShadows.needsUpdate = k, C.spotLights.needsUpdate = k, C.spotLightShadows.needsUpdate = k, C.rectAreaLights.needsUpdate = k, C.hemisphereLights.needsUpdate = k;
    }
    function pp(C) {
      return C.isMeshLambertMaterial || C.isMeshToonMaterial || C.isMeshPhongMaterial || C.isMeshStandardMaterial || C.isShadowMaterial || C.isShaderMaterial && C.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return S;
    }, this.getActiveMipmapLevel = function() {
      return E;
    }, this.getRenderTarget = function() {
      return T;
    }, this.setRenderTargetTextures = function(C, k, Y) {
      ye.get(C.texture).__webglTexture = k, ye.get(C.depthTexture).__webglTexture = Y;
      const z = ye.get(C);
      z.__hasExternalTextures = !0, z.__hasExternalTextures && (z.__autoAllocateDepthBuffer = Y === void 0, z.__autoAllocateDepthBuffer || j.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), z.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(C, k) {
      const Y = ye.get(C);
      Y.__webglFramebuffer = k, Y.__useDefaultFramebuffer = k === void 0;
    }, this.setRenderTarget = function(C, k = 0, Y = 0) {
      T = C, S = k, E = Y;
      let z = !0, K = null, Me = !1, Le = !1;
      if (C) {
        const Fe = ye.get(C);
        Fe.__useDefaultFramebuffer !== void 0 ? ($.bindFramebuffer(U.FRAMEBUFFER, null), z = !1) : Fe.__webglFramebuffer === void 0 ? xe.setupRenderTarget(C) : Fe.__hasExternalTextures && xe.rebindTextures(C, ye.get(C.texture).__webglTexture, ye.get(C.depthTexture).__webglTexture);
        const Xe = C.texture;
        (Xe.isData3DTexture || Xe.isDataArrayTexture || Xe.isCompressedArrayTexture) && (Le = !0);
        const Be = ye.get(C).__webglFramebuffer;
        C.isWebGLCubeRenderTarget ? (K = Be[k], Me = !0) : ae.isWebGL2 && C.samples > 0 && xe.useMultisampledRTT(C) === !1 ? K = ye.get(C).__webglMultisampledFramebuffer : K = Be, b.copy(C.viewport), P.copy(C.scissor), F = C.scissorTest;
      } else
        b.copy(te).multiplyScalar(W).floor(), P.copy(ue).multiplyScalar(W).floor(), F = H;
      if ($.bindFramebuffer(U.FRAMEBUFFER, K) && ae.drawBuffers && z && $.drawBuffers(C, K), $.viewport(b), $.scissor(P), $.setScissorTest(F), Me) {
        const Fe = ye.get(C.texture);
        U.framebufferTexture2D(U.FRAMEBUFFER, U.COLOR_ATTACHMENT0, U.TEXTURE_CUBE_MAP_POSITIVE_X + k, Fe.__webglTexture, Y);
      } else if (Le) {
        const Fe = ye.get(C.texture), Xe = k || 0;
        U.framebufferTextureLayer(U.FRAMEBUFFER, U.COLOR_ATTACHMENT0, Fe.__webglTexture, Y || 0, Xe);
      }
      A = -1;
    }, this.readRenderTargetPixels = function(C, k, Y, z, K, Me, Le) {
      if (!(C && C.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Oe = ye.get(C).__webglFramebuffer;
      if (C.isWebGLCubeRenderTarget && Le !== void 0 && (Oe = Oe[Le]), Oe) {
        $.bindFramebuffer(U.FRAMEBUFFER, Oe);
        try {
          const Fe = C.texture, Xe = Fe.format, Be = Fe.type;
          if (Xe !== zt && Ee.convert(Xe) !== U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const ze = Be === dn && (j.has("EXT_color_buffer_half_float") || ae.isWebGL2 && j.has("EXT_color_buffer_float"));
          if (Be !== Un && Ee.convert(Be) !== U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(Be === kt && (ae.isWebGL2 || j.has("OES_texture_float") || j.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !ze) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          k >= 0 && k <= C.width - z && Y >= 0 && Y <= C.height - K && U.readPixels(k, Y, z, K, Ee.convert(Xe), Ee.convert(Be), Me);
        } finally {
          const Fe = T !== null ? ye.get(T).__webglFramebuffer : null;
          $.bindFramebuffer(U.FRAMEBUFFER, Fe);
        }
      }
    }, this.copyFramebufferToTexture = function(C, k, Y = 0) {
      const z = Math.pow(2, -Y), K = Math.floor(k.image.width * z), Me = Math.floor(k.image.height * z);
      xe.setTexture2D(k, 0), U.copyTexSubImage2D(U.TEXTURE_2D, Y, 0, 0, C.x, C.y, K, Me), $.unbindTexture();
    }, this.copyTextureToTexture = function(C, k, Y, z = 0) {
      const K = k.image.width, Me = k.image.height, Le = Ee.convert(Y.format), Oe = Ee.convert(Y.type);
      xe.setTexture2D(Y, 0), U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL, Y.flipY), U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Y.premultiplyAlpha), U.pixelStorei(U.UNPACK_ALIGNMENT, Y.unpackAlignment), k.isDataTexture ? U.texSubImage2D(U.TEXTURE_2D, z, C.x, C.y, K, Me, Le, Oe, k.image.data) : k.isCompressedTexture ? U.compressedTexSubImage2D(U.TEXTURE_2D, z, C.x, C.y, k.mipmaps[0].width, k.mipmaps[0].height, Le, k.mipmaps[0].data) : U.texSubImage2D(U.TEXTURE_2D, z, C.x, C.y, Le, Oe, k.image), z === 0 && Y.generateMipmaps && U.generateMipmap(U.TEXTURE_2D), $.unbindTexture();
    }, this.copyTextureToTexture3D = function(C, k, Y, z, K = 0) {
      if (_.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const Me = C.max.x - C.min.x + 1, Le = C.max.y - C.min.y + 1, Oe = C.max.z - C.min.z + 1, Fe = Ee.convert(z.format), Xe = Ee.convert(z.type);
      let Be;
      if (z.isData3DTexture)
        xe.setTexture3D(z, 0), Be = U.TEXTURE_3D;
      else if (z.isDataArrayTexture)
        xe.setTexture2DArray(z, 0), Be = U.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL, z.flipY), U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL, z.premultiplyAlpha), U.pixelStorei(U.UNPACK_ALIGNMENT, z.unpackAlignment);
      const ze = U.getParameter(U.UNPACK_ROW_LENGTH), tt = U.getParameter(U.UNPACK_IMAGE_HEIGHT), ut = U.getParameter(U.UNPACK_SKIP_PIXELS), Jt = U.getParameter(U.UNPACK_SKIP_ROWS), Mn = U.getParameter(U.UNPACK_SKIP_IMAGES), pt = Y.isCompressedTexture ? Y.mipmaps[0] : Y.image;
      U.pixelStorei(U.UNPACK_ROW_LENGTH, pt.width), U.pixelStorei(U.UNPACK_IMAGE_HEIGHT, pt.height), U.pixelStorei(U.UNPACK_SKIP_PIXELS, C.min.x), U.pixelStorei(U.UNPACK_SKIP_ROWS, C.min.y), U.pixelStorei(U.UNPACK_SKIP_IMAGES, C.min.z), Y.isDataTexture || Y.isData3DTexture ? U.texSubImage3D(Be, K, k.x, k.y, k.z, Me, Le, Oe, Fe, Xe, pt.data) : Y.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), U.compressedTexSubImage3D(Be, K, k.x, k.y, k.z, Me, Le, Oe, Fe, pt.data)) : U.texSubImage3D(Be, K, k.x, k.y, k.z, Me, Le, Oe, Fe, Xe, pt), U.pixelStorei(U.UNPACK_ROW_LENGTH, ze), U.pixelStorei(U.UNPACK_IMAGE_HEIGHT, tt), U.pixelStorei(U.UNPACK_SKIP_PIXELS, ut), U.pixelStorei(U.UNPACK_SKIP_ROWS, Jt), U.pixelStorei(U.UNPACK_SKIP_IMAGES, Mn), K === 0 && z.generateMipmaps && U.generateMipmap(Be), $.unbindTexture();
    }, this.initTexture = function(C) {
      C.isCubeTexture ? xe.setTextureCube(C, 0) : C.isData3DTexture ? xe.setTexture3D(C, 0) : C.isDataArrayTexture || C.isCompressedArrayTexture ? xe.setTexture2DArray(C, 0) : xe.setTexture2D(C, 0), $.unbindTexture();
    }, this.resetState = function() {
      S = 0, E = 0, T = null, $.reset(), ve.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return fn;
  }
  get physicallyCorrectLights() {
    return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights;
  }
  set physicallyCorrectLights(e) {
    console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !e;
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === De ? Yn : il;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === Yn ? De : Kt;
  }
}
class _f extends gf {
}
_f.prototype.isWebGL1Renderer = !0;
class zo {
  constructor(e, t = 25e-5) {
    this.isFogExp2 = !0, this.name = "", this.color = new de(e), this.density = t;
  }
  clone() {
    return new zo(this.color, this.density);
  }
  toJSON() {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density
    };
  }
}
class ko {
  constructor(e, t = 1, n = 1e3) {
    this.isFog = !0, this.name = "", this.color = new de(e), this.near = t, this.far = n;
  }
  clone() {
    return new ko(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
}
class yf extends je {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
  }
  set autoUpdate(e) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = e;
  }
}
class dr {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = er, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = Vt();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Vt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Vt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Lt = /* @__PURE__ */ new R();
class Qn {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Lt.fromBufferAttribute(this, t), Lt.applyMatrix4(e), this.setXYZ(t, Lt.x, Lt.y, Lt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Lt.fromBufferAttribute(this, t), Lt.applyNormalMatrix(e), this.setXYZ(t, Lt.x, Lt.y, Lt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Lt.fromBufferAttribute(this, t), Lt.transformDirection(e), this.setXYZ(t, Lt.x, Lt.y, Lt.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ge(t, this.array), n = Ge(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ge(t, this.array), n = Ge(n, this.array), i = Ge(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ge(t, this.array), n = Ge(n, this.array), i = Ge(i, this.array), s = Ge(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return new $e(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Qn(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
class fl extends gt {
  constructor(e) {
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new de(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let $i;
const Ns = /* @__PURE__ */ new R(), es = /* @__PURE__ */ new R(), ts = /* @__PURE__ */ new R(), ns = /* @__PURE__ */ new Z(), Os = /* @__PURE__ */ new Z(), xf = /* @__PURE__ */ new Ne(), Zr = /* @__PURE__ */ new R(), Fs = /* @__PURE__ */ new R(), Jr = /* @__PURE__ */ new R(), Rh = /* @__PURE__ */ new Z(), xa = /* @__PURE__ */ new Z(), Ch = /* @__PURE__ */ new Z();
class vf extends je {
  constructor(e) {
    if (super(), this.isSprite = !0, this.type = "Sprite", $i === void 0) {
      $i = new Ve();
      const t = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]), n = new dr(t, 5);
      $i.setIndex([0, 1, 2, 0, 2, 3]), $i.setAttribute("position", new Qn(n, 3, 0, !1)), $i.setAttribute("uv", new Qn(n, 2, 3, !1));
    }
    this.geometry = $i, this.material = e !== void 0 ? e : new fl(), this.center = new Z(0.5, 0.5);
  }
  raycast(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), es.setFromMatrixScale(this.matrixWorld), xf.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), ts.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && es.multiplyScalar(-ts.z);
    const n = this.material.rotation;
    let i, s;
    n !== 0 && (s = Math.cos(n), i = Math.sin(n));
    const o = this.center;
    jr(Zr.set(-0.5, -0.5, 0), ts, o, es, i, s), jr(Fs.set(0.5, -0.5, 0), ts, o, es, i, s), jr(Jr.set(0.5, 0.5, 0), ts, o, es, i, s), Rh.set(0, 0), xa.set(1, 0), Ch.set(1, 1);
    let a = e.ray.intersectTriangle(Zr, Fs, Jr, !1, Ns);
    if (a === null && (jr(Fs.set(-0.5, 0.5, 0), ts, o, es, i, s), xa.set(0, 1), a = e.ray.intersectTriangle(Zr, Jr, Fs, !1, Ns), a === null))
      return;
    const c = e.ray.origin.distanceTo(Ns);
    c < e.near || c > e.far || t.push({
      distance: c,
      point: Ns.clone(),
      uv: Dt.getInterpolation(Ns, Zr, Fs, Jr, Rh, xa, Ch, new Z()),
      face: null,
      object: this
    });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function jr(r, e, t, n, i, s) {
  ns.subVectors(r, t).addScalar(0.5).multiply(n), i !== void 0 ? (Os.x = s * ns.x - i * ns.y, Os.y = i * ns.x + s * ns.y) : Os.copy(ns), r.copy(e), r.x += Os.x, r.y += Os.y, r.applyMatrix4(xf);
}
const Qr = /* @__PURE__ */ new R(), Lh = /* @__PURE__ */ new R();
class Mf extends je {
  constructor() {
    super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
      levels: {
        enumerable: !0,
        value: []
      },
      isLOD: {
        value: !0
      }
    }), this.autoUpdate = !0;
  }
  copy(e) {
    super.copy(e, !1);
    const t = e.levels;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      this.addLevel(s.object.clone(), s.distance, s.hysteresis);
    }
    return this.autoUpdate = e.autoUpdate, this;
  }
  addLevel(e, t = 0, n = 0) {
    t = Math.abs(t);
    const i = this.levels;
    let s;
    for (s = 0; s < i.length && !(t < i[s].distance); s++)
      ;
    return i.splice(s, 0, { distance: t, hysteresis: n, object: e }), this.add(e), this;
  }
  getCurrentLevel() {
    return this._currentLevel;
  }
  getObjectForDistance(e) {
    const t = this.levels;
    if (t.length > 0) {
      let n, i;
      for (n = 1, i = t.length; n < i; n++) {
        let s = t[n].distance;
        if (t[n].object.visible && (s -= s * t[n].hysteresis), e < s)
          break;
      }
      return t[n - 1].object;
    }
    return null;
  }
  raycast(e, t) {
    if (this.levels.length > 0) {
      Qr.setFromMatrixPosition(this.matrixWorld);
      const i = e.ray.origin.distanceTo(Qr);
      this.getObjectForDistance(i).raycast(e, t);
    }
  }
  update(e) {
    const t = this.levels;
    if (t.length > 1) {
      Qr.setFromMatrixPosition(e.matrixWorld), Lh.setFromMatrixPosition(this.matrixWorld);
      const n = Qr.distanceTo(Lh) / e.zoom;
      t[0].object.visible = !0;
      let i, s;
      for (i = 1, s = t.length; i < s; i++) {
        let o = t[i].distance;
        if (t[i].object.visible && (o -= o * t[i].hysteresis), n >= o)
          t[i - 1].object.visible = !1, t[i].object.visible = !0;
        else
          break;
      }
      for (this._currentLevel = i - 1; i < s; i++)
        t[i].object.visible = !1;
    }
  }
  toJSON(e) {
    const t = super.toJSON(e);
    this.autoUpdate === !1 && (t.object.autoUpdate = !1), t.object.levels = [];
    const n = this.levels;
    for (let i = 0, s = n.length; i < s; i++) {
      const o = n[i];
      t.object.levels.push({
        object: o.object.uuid,
        distance: o.distance,
        hysteresis: o.hysteresis
      });
    }
    return t;
  }
}
const Ph = /* @__PURE__ */ new R(), Ih = /* @__PURE__ */ new et(), Uh = /* @__PURE__ */ new et(), hx = /* @__PURE__ */ new R(), Dh = /* @__PURE__ */ new Ne(), is = /* @__PURE__ */ new R(), va = /* @__PURE__ */ new Zt(), Nh = /* @__PURE__ */ new Ne(), Ma = /* @__PURE__ */ new Es();
class pl extends St {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Ne(), this.bindMatrixInverse = new Ne(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new rn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      is.fromBufferAttribute(t, n), this.applyBoneTransform(n, is), this.boundingBox.expandByPoint(is);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Zt()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      is.fromBufferAttribute(t, n), this.applyBoneTransform(n, is), this.boundingSphere.expandByPoint(is);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), va.copy(this.boundingSphere), va.applyMatrix4(i), e.ray.intersectsSphere(va) !== !1 && (Nh.copy(i).invert(), Ma.copy(e.ray).applyMatrix4(Nh), !(this.boundingBox !== null && Ma.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, Ma)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new et(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Ih.fromBufferAttribute(i.attributes.skinIndex, e), Uh.fromBufferAttribute(i.attributes.skinWeight, e), Ph.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const o = Uh.getComponent(s);
      if (o !== 0) {
        const a = Ih.getComponent(s);
        Dh.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(hx.copy(Ph).applyMatrix4(Dh), o);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
  boneTransform(e, t) {
    return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."), this.applyBoneTransform(e, t);
  }
}
class Ho extends je {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class us extends rt {
  constructor(e = null, t = 1, n = 1, i, s, o, a, c, l = lt, h = lt, u, d) {
    super(null, o, a, c, l, h, i, s, u, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Oh = /* @__PURE__ */ new Ne(), ux = /* @__PURE__ */ new Ne();
class fr {
  constructor(e = [], t = []) {
    this.uuid = Vt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Ne());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Ne();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let s = 0, o = e.length; s < o; s++) {
      const a = e[s] ? e[s].matrixWorld : ux;
      Oh.multiplyMatrices(a, t[s]), Oh.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new fr(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = $d(e), e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new us(t, e, e, zt, kt);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this.boneTextureSize = e, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const s = e.bones[n];
      let o = t[s];
      o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), o = new Ho()), this.bones.push(o), this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, s = t.length; i < s; i++) {
      const o = t[i];
      e.bones.push(o.uuid);
      const a = n[i];
      e.boneInverses.push(a.toArray());
    }
    return e;
  }
}
class _s extends $e {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const ss = /* @__PURE__ */ new Ne(), Fh = /* @__PURE__ */ new Ne(), $r = [], Bh = /* @__PURE__ */ new rn(), dx = /* @__PURE__ */ new Ne(), Bs = /* @__PURE__ */ new St(), zs = /* @__PURE__ */ new Zt();
class ml extends St {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new _s(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, dx);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new rn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, ss), Bh.copy(e.boundingBox).applyMatrix4(ss), this.boundingBox.union(Bh);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Zt()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, ss), zs.copy(e.boundingSphere).applyMatrix4(ss), this.boundingSphere.union(zs);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (Bs.geometry = this.geometry, Bs.material = this.material, Bs.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), zs.copy(this.boundingSphere), zs.applyMatrix4(n), e.ray.intersectsSphere(zs) !== !1))
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, ss), Fh.multiplyMatrices(n, ss), Bs.matrixWorld = Fh, Bs.raycast(e, $r);
        for (let o = 0, a = $r.length; o < a; o++) {
          const c = $r[o];
          c.instanceId = s, c.object = this, t.push(c);
        }
        $r.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new _s(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class wt extends gt {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new de(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const zh = /* @__PURE__ */ new R(), kh = /* @__PURE__ */ new R(), Hh = /* @__PURE__ */ new Ne(), Sa = /* @__PURE__ */ new Es(), eo = /* @__PURE__ */ new Zt();
class Dn extends je {
  constructor(e = new Ve(), t = new wt()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        zh.fromBufferAttribute(t, i - 1), kh.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += zh.distanceTo(kh);
      e.setAttribute("lineDistance", new be(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), eo.copy(n.boundingSphere), eo.applyMatrix4(i), eo.radius += s, e.ray.intersectsSphere(eo) === !1) return;
    Hh.copy(i).invert(), Sa.copy(e.ray).applyMatrix4(Hh);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = new R(), h = new R(), u = new R(), d = new R(), f = this.isLineSegments ? 2 : 1, m = n.index, g = n.attributes.position;
    if (m !== null) {
      const p = Math.max(0, o.start), x = Math.min(m.count, o.start + o.count);
      for (let _ = p, v = x - 1; _ < v; _ += f) {
        const S = m.getX(_), E = m.getX(_ + 1);
        if (l.fromBufferAttribute(g, S), h.fromBufferAttribute(g, E), Sa.distanceSqToSegment(l, h, d, u) > c) continue;
        d.applyMatrix4(this.matrixWorld);
        const A = e.ray.origin.distanceTo(d);
        A < e.near || A > e.far || t.push({
          distance: A,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: _,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const p = Math.max(0, o.start), x = Math.min(g.count, o.start + o.count);
      for (let _ = p, v = x - 1; _ < v; _ += f) {
        if (l.fromBufferAttribute(g, _), h.fromBufferAttribute(g, _ + 1), Sa.distanceSqToSegment(l, h, d, u) > c) continue;
        d.applyMatrix4(this.matrixWorld);
        const E = e.ray.origin.distanceTo(d);
        E < e.near || E > e.far || t.push({
          distance: E,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: _,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
const Gh = /* @__PURE__ */ new R(), Vh = /* @__PURE__ */ new R();
class on extends Dn {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        Gh.fromBufferAttribute(t, i), Vh.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Gh.distanceTo(Vh);
      e.setAttribute("lineDistance", new be(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class gl extends Dn {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class Go extends gt {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new de(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Wh = /* @__PURE__ */ new Ne(), Bc = /* @__PURE__ */ new Es(), to = /* @__PURE__ */ new Zt(), no = /* @__PURE__ */ new R();
class _l extends je {
  constructor(e = new Ve(), t = new Go()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), to.copy(n.boundingSphere), to.applyMatrix4(i), to.radius += s, e.ray.intersectsSphere(to) === !1) return;
    Wh.copy(i).invert(), Bc.copy(e.ray).applyMatrix4(Wh);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = n.index, u = n.attributes.position;
    if (l !== null) {
      const d = Math.max(0, o.start), f = Math.min(l.count, o.start + o.count);
      for (let m = d, y = f; m < y; m++) {
        const g = l.getX(m);
        no.fromBufferAttribute(u, g), Xh(no, g, c, i, e, t, this);
      }
    } else {
      const d = Math.max(0, o.start), f = Math.min(u.count, o.start + o.count);
      for (let m = d, y = f; m < y; m++)
        no.fromBufferAttribute(u, m), Xh(no, m, c, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
function Xh(r, e, t, n, i, s, o) {
  const a = Bc.distanceSqToPoint(r);
  if (a < t) {
    const c = new R();
    Bc.closestPointToPoint(r, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far) return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(a),
      point: c,
      index: e,
      face: null,
      object: o
    });
  }
}
class fx extends rt {
  constructor(e, t, n, i, s, o, a, c, l) {
    super(e, t, n, i, s, o, a, c, l), this.isVideoTexture = !0, this.minFilter = o !== void 0 ? o : nt, this.magFilter = s !== void 0 ? s : nt, this.generateMipmaps = !1;
    const h = this;
    function u() {
      h.needsUpdate = !0, e.requestVideoFrameCallback(u);
    }
    "requestVideoFrameCallback" in e && e.requestVideoFrameCallback(u);
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    const e = this.image;
    "requestVideoFrameCallback" in e === !1 && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
  }
}
class px extends rt {
  constructor(e, t) {
    super({ width: e, height: t }), this.isFramebufferTexture = !0, this.magFilter = lt, this.minFilter = lt, this.generateMipmaps = !1, this.needsUpdate = !0;
  }
}
class yl extends rt {
  constructor(e, t, n, i, s, o, a, c, l, h, u, d) {
    super(null, o, a, c, l, h, i, s, u, d), this.isCompressedTexture = !0, this.image = { width: t, height: n }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class mx extends yl {
  constructor(e, t, n, i, s, o) {
    super(e, t, n, s, o), this.isCompressedArrayTexture = !0, this.image.depth = i, this.wrapR = bt;
  }
}
class gx extends rt {
  constructor(e, t, n, i, s, o, a, c, l) {
    super(e, t, n, i, s, o, a, c, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class an {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  // Get sequence of points using getPoint( t )
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return t;
  }
  // Get sequence of points using getPointAt( u )
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPointAt(n / e));
    return t;
  }
  // Get total curve arc length
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  // Get list of cumulative segment lengths
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n, i = this.getPoint(0), s = 0;
    t.push(0);
    for (let o = 1; o <= e; o++)
      n = this.getPoint(o / e), s += n.distanceTo(i), t.push(s), i = n;
    return this.cacheArcLengths = t, t;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping(e, t) {
    const n = this.getLengths();
    let i = 0;
    const s = n.length;
    let o;
    t ? o = t : o = e * n[s - 1];
    let a = 0, c = s - 1, l;
    for (; a <= c; )
      if (i = Math.floor(a + (c - a) / 2), l = n[i] - o, l < 0)
        a = i + 1;
      else if (l > 0)
        c = i - 1;
      else {
        c = i;
        break;
      }
    if (i = c, n[i] === o)
      return i / (s - 1);
    const h = n[i], d = n[i + 1] - h, f = (o - h) / d;
    return (i + f) / (s - 1);
  }
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(e, t) {
    let i = e - 1e-4, s = e + 1e-4;
    i < 0 && (i = 0), s > 1 && (s = 1);
    const o = this.getPoint(i), a = this.getPoint(s), c = t || (o.isVector2 ? new Z() : new R());
    return c.copy(a).sub(o).normalize(), c;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new R(), i = [], s = [], o = [], a = new R(), c = new Ne();
    for (let f = 0; f <= e; f++) {
      const m = f / e;
      i[f] = this.getTangentAt(m, new R());
    }
    s[0] = new R(), o[0] = new R();
    let l = Number.MAX_VALUE;
    const h = Math.abs(i[0].x), u = Math.abs(i[0].y), d = Math.abs(i[0].z);
    h <= l && (l = h, n.set(1, 0, 0)), u <= l && (l = u, n.set(0, 1, 0)), d <= l && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), s[0].crossVectors(i[0], a), o[0].crossVectors(i[0], s[0]);
    for (let f = 1; f <= e; f++) {
      if (s[f] = s[f - 1].clone(), o[f] = o[f - 1].clone(), a.crossVectors(i[f - 1], i[f]), a.length() > Number.EPSILON) {
        a.normalize();
        const m = Math.acos(ht(i[f - 1].dot(i[f]), -1, 1));
        s[f].applyMatrix4(c.makeRotationAxis(a, m));
      }
      o[f].crossVectors(i[f], s[f]);
    }
    if (t === !0) {
      let f = Math.acos(ht(s[0].dot(s[e]), -1, 1));
      f /= e, i[0].dot(a.crossVectors(s[0], s[e])) > 0 && (f = -f);
      for (let m = 1; m <= e; m++)
        s[m].applyMatrix4(c.makeRotationAxis(i[m], f * m)), o[m].crossVectors(i[m], s[m]);
    }
    return {
      tangents: i,
      normals: s,
      binormals: o
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
}
class Vo extends an {
  constructor(e = 0, t = 0, n = 1, i = 1, s = 0, o = Math.PI * 2, a = !1, c = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = s, this.aEndAngle = o, this.aClockwise = a, this.aRotation = c;
  }
  getPoint(e, t) {
    const n = t || new Z(), i = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const o = Math.abs(s) < Number.EPSILON;
    for (; s < 0; ) s += i;
    for (; s > i; ) s -= i;
    s < Number.EPSILON && (o ? s = 0 : s = i), this.aClockwise === !0 && !o && (s === i ? s = -i : s = s - i);
    const a = this.aStartAngle + e * s;
    let c = this.aX + this.xRadius * Math.cos(a), l = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = c - this.aX, f = l - this.aY;
      c = d * h - f * u + this.aX, l = d * u + f * h + this.aY;
    }
    return n.set(c, l);
  }
  copy(e) {
    return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
}
class Sf extends Vo {
  constructor(e, t, n, i, s, o) {
    super(e, t, n, n, i, s, o), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function xl() {
  let r = 0, e = 0, t = 0, n = 0;
  function i(s, o, a, c) {
    r = s, e = a, t = -3 * s + 3 * o - 2 * a - c, n = 2 * s - 2 * o + a + c;
  }
  return {
    initCatmullRom: function(s, o, a, c, l) {
      i(o, a, l * (a - s), l * (c - o));
    },
    initNonuniformCatmullRom: function(s, o, a, c, l, h, u) {
      let d = (o - s) / l - (a - s) / (l + h) + (a - o) / h, f = (a - o) / h - (c - o) / (h + u) + (c - a) / u;
      d *= h, f *= h, i(o, a, d, f);
    },
    calc: function(s) {
      const o = s * s, a = o * s;
      return r + e * s + t * o + n * a;
    }
  };
}
const io = /* @__PURE__ */ new R(), Ea = /* @__PURE__ */ new xl(), ba = /* @__PURE__ */ new xl(), Ta = /* @__PURE__ */ new xl();
class Ef extends an {
  constructor(e = [], t = !1, n = "centripetal", i = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i;
  }
  getPoint(e, t = new R()) {
    const n = t, i = this.points, s = i.length, o = (s - (this.closed ? 0 : 1)) * e;
    let a = Math.floor(o), c = o - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / s) + 1) * s : c === 0 && a === s - 1 && (a = s - 2, c = 1);
    let l, h;
    this.closed || a > 0 ? l = i[(a - 1) % s] : (io.subVectors(i[0], i[1]).add(i[0]), l = io);
    const u = i[a % s], d = i[(a + 1) % s];
    if (this.closed || a + 2 < s ? h = i[(a + 2) % s] : (io.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), h = io), this.curveType === "centripetal" || this.curveType === "chordal") {
      const f = this.curveType === "chordal" ? 0.5 : 0.25;
      let m = Math.pow(l.distanceToSquared(u), f), y = Math.pow(u.distanceToSquared(d), f), g = Math.pow(d.distanceToSquared(h), f);
      y < 1e-4 && (y = 1), m < 1e-4 && (m = y), g < 1e-4 && (g = y), Ea.initNonuniformCatmullRom(l.x, u.x, d.x, h.x, m, y, g), ba.initNonuniformCatmullRom(l.y, u.y, d.y, h.y, m, y, g), Ta.initNonuniformCatmullRom(l.z, u.z, d.z, h.z, m, y, g);
    } else this.curveType === "catmullrom" && (Ea.initCatmullRom(l.x, u.x, d.x, h.x, this.tension), ba.initCatmullRom(l.y, u.y, d.y, h.y, this.tension), Ta.initCatmullRom(l.z, u.z, d.z, h.z, this.tension));
    return n.set(
      Ea.calc(c),
      ba.calc(c),
      Ta.calc(c)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new R().fromArray(i));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
function qh(r, e, t, n, i) {
  const s = (n - e) * 0.5, o = (i - t) * 0.5, a = r * r, c = r * a;
  return (2 * t - 2 * n + s + o) * c + (-3 * t + 3 * n - 2 * s - o) * a + s * r + t;
}
function _x(r, e) {
  const t = 1 - r;
  return t * t * e;
}
function yx(r, e) {
  return 2 * (1 - r) * r * e;
}
function xx(r, e) {
  return r * r * e;
}
function Ks(r, e, t, n) {
  return _x(r, e) + yx(r, t) + xx(r, n);
}
function vx(r, e) {
  const t = 1 - r;
  return t * t * t * e;
}
function Mx(r, e) {
  const t = 1 - r;
  return 3 * t * t * r * e;
}
function Sx(r, e) {
  return 3 * (1 - r) * r * r * e;
}
function Ex(r, e) {
  return r * r * r * e;
}
function Zs(r, e, t, n, i) {
  return vx(r, e) + Mx(r, t) + Sx(r, n) + Ex(r, i);
}
class vl extends an {
  constructor(e = new Z(), t = new Z(), n = new Z(), i = new Z()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new Z()) {
    const n = t, i = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return n.set(
      Zs(e, i.x, s.x, o.x, a.x),
      Zs(e, i.y, s.y, o.y, a.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class bf extends an {
  constructor(e = new R(), t = new R(), n = new R(), i = new R()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new R()) {
    const n = t, i = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return n.set(
      Zs(e, i.x, s.x, o.x, a.x),
      Zs(e, i.y, s.y, o.y, a.y),
      Zs(e, i.z, s.z, o.z, a.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class Wo extends an {
  constructor(e = new Z(), t = new Z()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new Z()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new Z()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Tf extends an {
  constructor(e = new R(), t = new R()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new R()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new R()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Ml extends an {
  constructor(e = new Z(), t = new Z(), n = new Z()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new Z()) {
    const n = t, i = this.v0, s = this.v1, o = this.v2;
    return n.set(
      Ks(e, i.x, s.x, o.x),
      Ks(e, i.y, s.y, o.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Sl extends an {
  constructor(e = new R(), t = new R(), n = new R()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new R()) {
    const n = t, i = this.v0, s = this.v1, o = this.v2;
    return n.set(
      Ks(e, i.x, s.x, o.x),
      Ks(e, i.y, s.y, o.y),
      Ks(e, i.z, s.z, o.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class El extends an {
  constructor(e = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new Z()) {
    const n = t, i = this.points, s = (i.length - 1) * e, o = Math.floor(s), a = s - o, c = i[o === 0 ? o : o - 1], l = i[o], h = i[o > i.length - 2 ? i.length - 1 : o + 1], u = i[o > i.length - 3 ? i.length - 1 : o + 2];
    return n.set(
      qh(a, c.x, l.x, h.x, u.x),
      qh(a, c.y, l.y, h.y, u.y)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new Z().fromArray(i));
    }
    return this;
  }
}
var bl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: Sf,
  CatmullRomCurve3: Ef,
  CubicBezierCurve: vl,
  CubicBezierCurve3: bf,
  EllipseCurve: Vo,
  LineCurve: Wo,
  LineCurve3: Tf,
  QuadraticBezierCurve: Ml,
  QuadraticBezierCurve3: Sl,
  SplineCurve: El
});
class Af extends an {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new Wo(t, e));
  }
  // To get accurate point with reference to
  // entire path distance at time t,
  // following has to be done:
  // 1. Length of each sub path have to be known
  // 2. Locate and identify type of curve
  // 3. Get t for the curve
  // 4. Return curve.getPointAt(t')
  getPoint(e, t) {
    const n = e * this.getLength(), i = this.getCurveLengths();
    let s = 0;
    for (; s < i.length; ) {
      if (i[s] >= n) {
        const o = i[s] - n, a = this.curves[s], c = a.getLength(), l = c === 0 ? 0 : 1 - o / c;
        return a.getPointAt(l, t);
      }
      s++;
    }
    return null;
  }
  // We cannot use the default THREE.Curve getPoint() with getLength() because in
  // THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
  // getPoint() depends on getLength
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  // cacheLengths must be recalculated.
  updateArcLengths() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  }
  // Compute lengths and cache them
  // We cannot overwrite getLengths() because UtoT mapping uses it.
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      t += this.curves[n].getLength(), e.push(t);
    return this.cacheLengths = e, e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let n;
    for (let i = 0, s = this.curves; i < s.length; i++) {
      const o = s[i], a = o.isEllipseCurve ? e * 2 : o.isLineCurve || o.isLineCurve3 ? 1 : o.isSplineCurve ? e * o.points.length : e, c = o.getPoints(a);
      for (let l = 0; l < c.length; l++) {
        const h = c[l];
        n && n.equals(h) || (t.push(h), n = h);
      }
    }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
  }
  copy(e) {
    super.copy(e), this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(i.clone());
    }
    return this.autoClose = e.autoClose, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.autoClose = this.autoClose, e.curves = [];
    for (let t = 0, n = this.curves.length; t < n; t++) {
      const i = this.curves[t];
      e.curves.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(new bl[i.type]().fromJSON(i));
    }
    return this;
  }
}
class ir extends Af {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new Z(), e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, n = e.length; t < n; t++)
      this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const n = new Wo(this.currentPoint.clone(), new Z(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    const s = new Ml(
      this.currentPoint.clone(),
      new Z(e, t),
      new Z(n, i)
    );
    return this.curves.push(s), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(e, t, n, i, s, o) {
    const a = new vl(
      this.currentPoint.clone(),
      new Z(e, t),
      new Z(n, i),
      new Z(s, o)
    );
    return this.curves.push(a), this.currentPoint.set(s, o), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), n = new El(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, n, i, s, o) {
    const a = this.currentPoint.x, c = this.currentPoint.y;
    return this.absarc(
      e + a,
      t + c,
      n,
      i,
      s,
      o
    ), this;
  }
  absarc(e, t, n, i, s, o) {
    return this.absellipse(e, t, n, n, i, s, o), this;
  }
  ellipse(e, t, n, i, s, o, a, c) {
    const l = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(e + l, t + h, n, i, s, o, a, c), this;
  }
  absellipse(e, t, n, i, s, o, a, c) {
    const l = new Vo(e, t, n, i, s, o, a, c);
    if (this.curves.length > 0) {
      const u = l.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(l);
    const h = l.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.currentPoint = this.currentPoint.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class As extends Ve {
  constructor(e = [new Z(0, -0.5), new Z(0.5, 0), new Z(0, 0.5)], t = 12, n = 0, i = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = {
      points: e,
      segments: t,
      phiStart: n,
      phiLength: i
    }, t = Math.floor(t), i = ht(i, 0, Math.PI * 2);
    const s = [], o = [], a = [], c = [], l = [], h = 1 / t, u = new R(), d = new Z(), f = new R(), m = new R(), y = new R();
    let g = 0, p = 0;
    for (let x = 0; x <= e.length - 1; x++)
      switch (x) {
        case 0:
          g = e[x + 1].x - e[x].x, p = e[x + 1].y - e[x].y, f.x = p * 1, f.y = -g, f.z = p * 0, y.copy(f), f.normalize(), c.push(f.x, f.y, f.z);
          break;
        case e.length - 1:
          c.push(y.x, y.y, y.z);
          break;
        default:
          g = e[x + 1].x - e[x].x, p = e[x + 1].y - e[x].y, f.x = p * 1, f.y = -g, f.z = p * 0, m.copy(f), f.x += y.x, f.y += y.y, f.z += y.z, f.normalize(), c.push(f.x, f.y, f.z), y.copy(m);
      }
    for (let x = 0; x <= t; x++) {
      const _ = n + x * h * i, v = Math.sin(_), S = Math.cos(_);
      for (let E = 0; E <= e.length - 1; E++) {
        u.x = e[E].x * v, u.y = e[E].y, u.z = e[E].x * S, o.push(u.x, u.y, u.z), d.x = x / t, d.y = E / (e.length - 1), a.push(d.x, d.y);
        const T = c[3 * E + 0] * v, A = c[3 * E + 1], M = c[3 * E + 0] * S;
        l.push(T, A, M);
      }
    }
    for (let x = 0; x < t; x++)
      for (let _ = 0; _ < e.length - 1; _++) {
        const v = _ + x * e.length, S = v, E = v + e.length, T = v + e.length + 1, A = v + 1;
        s.push(S, E, A), s.push(T, A, E);
      }
    this.setIndex(s), this.setAttribute("position", new be(o, 3)), this.setAttribute("uv", new be(a, 2)), this.setAttribute("normal", new be(l, 3));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new As(e.points, e.segments, e.phiStart, e.phiLength);
  }
}
class pr extends As {
  constructor(e = 1, t = 1, n = 4, i = 8) {
    const s = new ir();
    s.absarc(0, -t / 2, e, Math.PI * 1.5, 0), s.absarc(0, t / 2, e, 0, Math.PI * 0.5), super(s.getPoints(n), i), this.type = "CapsuleGeometry", this.parameters = {
      radius: e,
      height: t,
      capSegments: n,
      radialSegments: i
    };
  }
  static fromJSON(e) {
    return new pr(e.radius, e.length, e.capSegments, e.radialSegments);
  }
}
class mr extends Ve {
  constructor(e = 1, t = 32, n = 0, i = Math.PI * 2) {
    super(), this.type = "CircleGeometry", this.parameters = {
      radius: e,
      segments: t,
      thetaStart: n,
      thetaLength: i
    }, t = Math.max(3, t);
    const s = [], o = [], a = [], c = [], l = new R(), h = new Z();
    o.push(0, 0, 0), a.push(0, 0, 1), c.push(0.5, 0.5);
    for (let u = 0, d = 3; u <= t; u++, d += 3) {
      const f = n + u / t * i;
      l.x = e * Math.cos(f), l.y = e * Math.sin(f), o.push(l.x, l.y, l.z), a.push(0, 0, 1), h.x = (o[d] / e + 1) / 2, h.y = (o[d + 1] / e + 1) / 2, c.push(h.x, h.y);
    }
    for (let u = 1; u <= t; u++)
      s.push(u, u + 1, 0);
    this.setIndex(s), this.setAttribute("position", new be(o, 3)), this.setAttribute("normal", new be(a, 3)), this.setAttribute("uv", new be(c, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new mr(e.radius, e.segments, e.thetaStart, e.thetaLength);
  }
}
class Ii extends Ve {
  constructor(e = 1, t = 1, n = 1, i = 32, s = 1, o = !1, a = 0, c = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: n,
      radialSegments: i,
      heightSegments: s,
      openEnded: o,
      thetaStart: a,
      thetaLength: c
    };
    const l = this;
    i = Math.floor(i), s = Math.floor(s);
    const h = [], u = [], d = [], f = [];
    let m = 0;
    const y = [], g = n / 2;
    let p = 0;
    x(), o === !1 && (e > 0 && _(!0), t > 0 && _(!1)), this.setIndex(h), this.setAttribute("position", new be(u, 3)), this.setAttribute("normal", new be(d, 3)), this.setAttribute("uv", new be(f, 2));
    function x() {
      const v = new R(), S = new R();
      let E = 0;
      const T = (t - e) / n;
      for (let A = 0; A <= s; A++) {
        const M = [], b = A / s, P = b * (t - e) + e;
        for (let F = 0; F <= i; F++) {
          const D = F / i, N = D * c + a, B = Math.sin(N), J = Math.cos(N);
          S.x = P * B, S.y = -b * n + g, S.z = P * J, u.push(S.x, S.y, S.z), v.set(B, T, J).normalize(), d.push(v.x, v.y, v.z), f.push(D, 1 - b), M.push(m++);
        }
        y.push(M);
      }
      for (let A = 0; A < i; A++)
        for (let M = 0; M < s; M++) {
          const b = y[M][A], P = y[M + 1][A], F = y[M + 1][A + 1], D = y[M][A + 1];
          h.push(b, P, D), h.push(P, F, D), E += 6;
        }
      l.addGroup(p, E, 0), p += E;
    }
    function _(v) {
      const S = m, E = new Z(), T = new R();
      let A = 0;
      const M = v === !0 ? e : t, b = v === !0 ? 1 : -1;
      for (let F = 1; F <= i; F++)
        u.push(0, g * b, 0), d.push(0, b, 0), f.push(0.5, 0.5), m++;
      const P = m;
      for (let F = 0; F <= i; F++) {
        const N = F / i * c + a, B = Math.cos(N), J = Math.sin(N);
        T.x = M * J, T.y = g * b, T.z = M * B, u.push(T.x, T.y, T.z), d.push(0, b, 0), E.x = B * 0.5 + 0.5, E.y = J * 0.5 * b + 0.5, f.push(E.x, E.y), m++;
      }
      for (let F = 0; F < i; F++) {
        const D = S + F, N = P + F;
        v === !0 ? h.push(N, N + 1, D) : h.push(N + 1, N, D), A += 3;
      }
      l.addGroup(p, A, v === !0 ? 1 : 2), p += A;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ii(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class gr extends Ii {
  constructor(e = 1, t = 1, n = 32, i = 1, s = !1, o = 0, a = Math.PI * 2) {
    super(0, e, t, n, i, s, o, a), this.type = "ConeGeometry", this.parameters = {
      radius: e,
      height: t,
      radialSegments: n,
      heightSegments: i,
      openEnded: s,
      thetaStart: o,
      thetaLength: a
    };
  }
  static fromJSON(e) {
    return new gr(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Nn extends Ve {
  constructor(e = [], t = [], n = 1, i = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = {
      vertices: e,
      indices: t,
      radius: n,
      detail: i
    };
    const s = [], o = [];
    a(i), l(n), h(), this.setAttribute("position", new be(s, 3)), this.setAttribute("normal", new be(s.slice(), 3)), this.setAttribute("uv", new be(o, 2)), i === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function a(x) {
      const _ = new R(), v = new R(), S = new R();
      for (let E = 0; E < t.length; E += 3)
        f(t[E + 0], _), f(t[E + 1], v), f(t[E + 2], S), c(_, v, S, x);
    }
    function c(x, _, v, S) {
      const E = S + 1, T = [];
      for (let A = 0; A <= E; A++) {
        T[A] = [];
        const M = x.clone().lerp(v, A / E), b = _.clone().lerp(v, A / E), P = E - A;
        for (let F = 0; F <= P; F++)
          F === 0 && A === E ? T[A][F] = M : T[A][F] = M.clone().lerp(b, F / P);
      }
      for (let A = 0; A < E; A++)
        for (let M = 0; M < 2 * (E - A) - 1; M++) {
          const b = Math.floor(M / 2);
          M % 2 === 0 ? (d(T[A][b + 1]), d(T[A + 1][b]), d(T[A][b])) : (d(T[A][b + 1]), d(T[A + 1][b + 1]), d(T[A + 1][b]));
        }
    }
    function l(x) {
      const _ = new R();
      for (let v = 0; v < s.length; v += 3)
        _.x = s[v + 0], _.y = s[v + 1], _.z = s[v + 2], _.normalize().multiplyScalar(x), s[v + 0] = _.x, s[v + 1] = _.y, s[v + 2] = _.z;
    }
    function h() {
      const x = new R();
      for (let _ = 0; _ < s.length; _ += 3) {
        x.x = s[_ + 0], x.y = s[_ + 1], x.z = s[_ + 2];
        const v = g(x) / 2 / Math.PI + 0.5, S = p(x) / Math.PI + 0.5;
        o.push(v, 1 - S);
      }
      m(), u();
    }
    function u() {
      for (let x = 0; x < o.length; x += 6) {
        const _ = o[x + 0], v = o[x + 2], S = o[x + 4], E = Math.max(_, v, S), T = Math.min(_, v, S);
        E > 0.9 && T < 0.1 && (_ < 0.2 && (o[x + 0] += 1), v < 0.2 && (o[x + 2] += 1), S < 0.2 && (o[x + 4] += 1));
      }
    }
    function d(x) {
      s.push(x.x, x.y, x.z);
    }
    function f(x, _) {
      const v = x * 3;
      _.x = e[v + 0], _.y = e[v + 1], _.z = e[v + 2];
    }
    function m() {
      const x = new R(), _ = new R(), v = new R(), S = new R(), E = new Z(), T = new Z(), A = new Z();
      for (let M = 0, b = 0; M < s.length; M += 9, b += 6) {
        x.set(s[M + 0], s[M + 1], s[M + 2]), _.set(s[M + 3], s[M + 4], s[M + 5]), v.set(s[M + 6], s[M + 7], s[M + 8]), E.set(o[b + 0], o[b + 1]), T.set(o[b + 2], o[b + 3]), A.set(o[b + 4], o[b + 5]), S.copy(x).add(_).add(v).divideScalar(3);
        const P = g(S);
        y(E, b + 0, x, P), y(T, b + 2, _, P), y(A, b + 4, v, P);
      }
    }
    function y(x, _, v, S) {
      S < 0 && x.x === 1 && (o[_] = x.x - 1), v.x === 0 && v.z === 0 && (o[_] = S / 2 / Math.PI + 0.5);
    }
    function g(x) {
      return Math.atan2(x.z, -x.x);
    }
    function p(x) {
      return Math.atan2(-x.y, Math.sqrt(x.x * x.x + x.z * x.z));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Nn(e.vertices, e.indices, e.radius, e.details);
  }
}
class _r extends Nn {
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2, i = 1 / n, s = [
      // (±1, ±1, ±1)
      -1,
      -1,
      -1,
      -1,
      -1,
      1,
      -1,
      1,
      -1,
      -1,
      1,
      1,
      1,
      -1,
      -1,
      1,
      -1,
      1,
      1,
      1,
      -1,
      1,
      1,
      1,
      // (0, ±1/φ, ±φ)
      0,
      -i,
      -n,
      0,
      -i,
      n,
      0,
      i,
      -n,
      0,
      i,
      n,
      // (±1/φ, ±φ, 0)
      -i,
      -n,
      0,
      -i,
      n,
      0,
      i,
      -n,
      0,
      i,
      n,
      0,
      // (±φ, 0, ±1/φ)
      -n,
      0,
      -i,
      n,
      0,
      -i,
      -n,
      0,
      i,
      n,
      0,
      i
    ], o = [
      3,
      11,
      7,
      3,
      7,
      15,
      3,
      15,
      13,
      7,
      19,
      17,
      7,
      17,
      6,
      7,
      6,
      15,
      17,
      4,
      8,
      17,
      8,
      10,
      17,
      10,
      6,
      8,
      0,
      16,
      8,
      16,
      2,
      8,
      2,
      10,
      0,
      12,
      1,
      0,
      1,
      18,
      0,
      18,
      16,
      6,
      10,
      2,
      6,
      2,
      13,
      6,
      13,
      15,
      2,
      16,
      18,
      2,
      18,
      3,
      2,
      3,
      13,
      18,
      1,
      9,
      18,
      9,
      11,
      18,
      11,
      3,
      4,
      14,
      12,
      4,
      12,
      0,
      4,
      0,
      8,
      11,
      9,
      5,
      11,
      5,
      19,
      11,
      19,
      7,
      19,
      5,
      14,
      19,
      14,
      4,
      19,
      4,
      17,
      1,
      12,
      14,
      1,
      14,
      5,
      1,
      5,
      9
    ];
    super(s, o, e, t), this.type = "DodecahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(e) {
    return new _r(e.radius, e.detail);
  }
}
const so = /* @__PURE__ */ new R(), ro = /* @__PURE__ */ new R(), Aa = /* @__PURE__ */ new R(), oo = /* @__PURE__ */ new Dt();
class wf extends Ve {
  constructor(e = null, t = 1) {
    if (super(), this.type = "EdgesGeometry", this.parameters = {
      geometry: e,
      thresholdAngle: t
    }, e !== null) {
      const i = Math.pow(10, 4), s = Math.cos(Ai * t), o = e.getIndex(), a = e.getAttribute("position"), c = o ? o.count : a.count, l = [0, 0, 0], h = ["a", "b", "c"], u = new Array(3), d = {}, f = [];
      for (let m = 0; m < c; m += 3) {
        o ? (l[0] = o.getX(m), l[1] = o.getX(m + 1), l[2] = o.getX(m + 2)) : (l[0] = m, l[1] = m + 1, l[2] = m + 2);
        const { a: y, b: g, c: p } = oo;
        if (y.fromBufferAttribute(a, l[0]), g.fromBufferAttribute(a, l[1]), p.fromBufferAttribute(a, l[2]), oo.getNormal(Aa), u[0] = `${Math.round(y.x * i)},${Math.round(y.y * i)},${Math.round(y.z * i)}`, u[1] = `${Math.round(g.x * i)},${Math.round(g.y * i)},${Math.round(g.z * i)}`, u[2] = `${Math.round(p.x * i)},${Math.round(p.y * i)},${Math.round(p.z * i)}`, !(u[0] === u[1] || u[1] === u[2] || u[2] === u[0]))
          for (let x = 0; x < 3; x++) {
            const _ = (x + 1) % 3, v = u[x], S = u[_], E = oo[h[x]], T = oo[h[_]], A = `${v}_${S}`, M = `${S}_${v}`;
            M in d && d[M] ? (Aa.dot(d[M].normal) <= s && (f.push(E.x, E.y, E.z), f.push(T.x, T.y, T.z)), d[M] = null) : A in d || (d[A] = {
              index0: l[x],
              index1: l[_],
              normal: Aa.clone()
            });
          }
      }
      for (const m in d)
        if (d[m]) {
          const { index0: y, index1: g } = d[m];
          so.fromBufferAttribute(a, y), ro.fromBufferAttribute(a, g), f.push(so.x, so.y, so.z), f.push(ro.x, ro.y, ro.z);
        }
      this.setAttribute("position", new be(f, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
class wi extends ir {
  constructor(e) {
    super(e), this.uuid = Vt(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(e) {
    const t = [];
    for (let n = 0, i = this.holes.length; n < i; n++)
      t[n] = this.holes[n].getPoints(e);
    return t;
  }
  // get points of shape and holes (keypoints based on segments parameter)
  extractPoints(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e)
    };
  }
  copy(e) {
    super.copy(e), this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.uuid = this.uuid, e.holes = [];
    for (let t = 0, n = this.holes.length; t < n; t++) {
      const i = this.holes[t];
      e.holes.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(new ir().fromJSON(i));
    }
    return this;
  }
}
const bx = {
  triangulate: function(r, e, t = 2) {
    const n = e && e.length, i = n ? e[0] * t : r.length;
    let s = Rf(r, 0, i, t, !0);
    const o = [];
    if (!s || s.next === s.prev) return o;
    let a, c, l, h, u, d, f;
    if (n && (s = Cx(r, e, s, t)), r.length > 80 * t) {
      a = l = r[0], c = h = r[1];
      for (let m = t; m < i; m += t)
        u = r[m], d = r[m + 1], u < a && (a = u), d < c && (c = d), u > l && (l = u), d > h && (h = d);
      f = Math.max(l - a, h - c), f = f !== 0 ? 32767 / f : 0;
    }
    return sr(s, o, t, a, c, f, 0), o;
  }
};
function Rf(r, e, t, n, i) {
  let s, o;
  if (i === kx(r, e, t, n) > 0)
    for (s = e; s < t; s += n) o = Yh(s, r[s], r[s + 1], o);
  else
    for (s = t - n; s >= e; s -= n) o = Yh(s, r[s], r[s + 1], o);
  return o && Xo(o, o.next) && (or(o), o = o.next), o;
}
function Li(r, e) {
  if (!r) return r;
  e || (e = r);
  let t = r, n;
  do
    if (n = !1, !t.steiner && (Xo(t, t.next) || st(t.prev, t, t.next) === 0)) {
      if (or(t), t = e = t.prev, t === t.next) break;
      n = !0;
    } else
      t = t.next;
  while (n || t !== e);
  return e;
}
function sr(r, e, t, n, i, s, o) {
  if (!r) return;
  !o && s && Dx(r, n, i, s);
  let a = r, c, l;
  for (; r.prev !== r.next; ) {
    if (c = r.prev, l = r.next, s ? Ax(r, n, i, s) : Tx(r)) {
      e.push(c.i / t | 0), e.push(r.i / t | 0), e.push(l.i / t | 0), or(r), r = l.next, a = l.next;
      continue;
    }
    if (r = l, r === a) {
      o ? o === 1 ? (r = wx(Li(r), e, t), sr(r, e, t, n, i, s, 2)) : o === 2 && Rx(r, e, t, n, i, s) : sr(Li(r), e, t, n, i, s, 1);
      break;
    }
  }
}
function Tx(r) {
  const e = r.prev, t = r, n = r.next;
  if (st(e, t, n) >= 0) return !1;
  const i = e.x, s = t.x, o = n.x, a = e.y, c = t.y, l = n.y, h = i < s ? i < o ? i : o : s < o ? s : o, u = a < c ? a < l ? a : l : c < l ? c : l, d = i > s ? i > o ? i : o : s > o ? s : o, f = a > c ? a > l ? a : l : c > l ? c : l;
  let m = n.next;
  for (; m !== e; ) {
    if (m.x >= h && m.x <= d && m.y >= u && m.y <= f && cs(i, a, s, c, o, l, m.x, m.y) && st(m.prev, m, m.next) >= 0) return !1;
    m = m.next;
  }
  return !0;
}
function Ax(r, e, t, n) {
  const i = r.prev, s = r, o = r.next;
  if (st(i, s, o) >= 0) return !1;
  const a = i.x, c = s.x, l = o.x, h = i.y, u = s.y, d = o.y, f = a < c ? a < l ? a : l : c < l ? c : l, m = h < u ? h < d ? h : d : u < d ? u : d, y = a > c ? a > l ? a : l : c > l ? c : l, g = h > u ? h > d ? h : d : u > d ? u : d, p = zc(f, m, e, t, n), x = zc(y, g, e, t, n);
  let _ = r.prevZ, v = r.nextZ;
  for (; _ && _.z >= p && v && v.z <= x; ) {
    if (_.x >= f && _.x <= y && _.y >= m && _.y <= g && _ !== i && _ !== o && cs(a, h, c, u, l, d, _.x, _.y) && st(_.prev, _, _.next) >= 0 || (_ = _.prevZ, v.x >= f && v.x <= y && v.y >= m && v.y <= g && v !== i && v !== o && cs(a, h, c, u, l, d, v.x, v.y) && st(v.prev, v, v.next) >= 0)) return !1;
    v = v.nextZ;
  }
  for (; _ && _.z >= p; ) {
    if (_.x >= f && _.x <= y && _.y >= m && _.y <= g && _ !== i && _ !== o && cs(a, h, c, u, l, d, _.x, _.y) && st(_.prev, _, _.next) >= 0) return !1;
    _ = _.prevZ;
  }
  for (; v && v.z <= x; ) {
    if (v.x >= f && v.x <= y && v.y >= m && v.y <= g && v !== i && v !== o && cs(a, h, c, u, l, d, v.x, v.y) && st(v.prev, v, v.next) >= 0) return !1;
    v = v.nextZ;
  }
  return !0;
}
function wx(r, e, t) {
  let n = r;
  do {
    const i = n.prev, s = n.next.next;
    !Xo(i, s) && Cf(i, n, n.next, s) && rr(i, s) && rr(s, i) && (e.push(i.i / t | 0), e.push(n.i / t | 0), e.push(s.i / t | 0), or(n), or(n.next), n = r = s), n = n.next;
  } while (n !== r);
  return Li(n);
}
function Rx(r, e, t, n, i, s) {
  let o = r;
  do {
    let a = o.next.next;
    for (; a !== o.prev; ) {
      if (o.i !== a.i && Fx(o, a)) {
        let c = Lf(o, a);
        o = Li(o, o.next), c = Li(c, c.next), sr(o, e, t, n, i, s, 0), sr(c, e, t, n, i, s, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== r);
}
function Cx(r, e, t, n) {
  const i = [];
  let s, o, a, c, l;
  for (s = 0, o = e.length; s < o; s++)
    a = e[s] * n, c = s < o - 1 ? e[s + 1] * n : r.length, l = Rf(r, a, c, n, !1), l === l.next && (l.steiner = !0), i.push(Ox(l));
  for (i.sort(Lx), s = 0; s < i.length; s++)
    t = Px(i[s], t);
  return t;
}
function Lx(r, e) {
  return r.x - e.x;
}
function Px(r, e) {
  const t = Ix(r, e);
  if (!t)
    return e;
  const n = Lf(t, r);
  return Li(n, n.next), Li(t, t.next);
}
function Ix(r, e) {
  let t = e, n = -1 / 0, i;
  const s = r.x, o = r.y;
  do {
    if (o <= t.y && o >= t.next.y && t.next.y !== t.y) {
      const d = t.x + (o - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (d <= s && d > n && (n = d, i = t.x < t.next.x ? t : t.next, d === s))
        return i;
    }
    t = t.next;
  } while (t !== e);
  if (!i) return null;
  const a = i, c = i.x, l = i.y;
  let h = 1 / 0, u;
  t = i;
  do
    s >= t.x && t.x >= c && s !== t.x && cs(o < l ? s : n, o, c, l, o < l ? n : s, o, t.x, t.y) && (u = Math.abs(o - t.y) / (s - t.x), rr(t, r) && (u < h || u === h && (t.x > i.x || t.x === i.x && Ux(i, t))) && (i = t, h = u)), t = t.next;
  while (t !== a);
  return i;
}
function Ux(r, e) {
  return st(r.prev, r, e.prev) < 0 && st(e.next, r, r.next) < 0;
}
function Dx(r, e, t, n) {
  let i = r;
  do
    i.z === 0 && (i.z = zc(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== r);
  i.prevZ.nextZ = null, i.prevZ = null, Nx(i);
}
function Nx(r) {
  let e, t, n, i, s, o, a, c, l = 1;
  do {
    for (t = r, r = null, s = null, o = 0; t; ) {
      for (o++, n = t, a = 0, e = 0; e < l && (a++, n = n.nextZ, !!n); e++)
        ;
      for (c = l; a > 0 || c > 0 && n; )
        a !== 0 && (c === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, a--) : (i = n, n = n.nextZ, c--), s ? s.nextZ = i : r = i, i.prevZ = s, s = i;
      t = n;
    }
    s.nextZ = null, l *= 2;
  } while (o > 1);
  return r;
}
function zc(r, e, t, n, i) {
  return r = (r - t) * i | 0, e = (e - n) * i | 0, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r | e << 1;
}
function Ox(r) {
  let e = r, t = r;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== r);
  return t;
}
function cs(r, e, t, n, i, s, o, a) {
  return (i - o) * (e - a) >= (r - o) * (s - a) && (r - o) * (n - a) >= (t - o) * (e - a) && (t - o) * (s - a) >= (i - o) * (n - a);
}
function Fx(r, e) {
  return r.next.i !== e.i && r.prev.i !== e.i && !Bx(r, e) && // dones't intersect other edges
  (rr(r, e) && rr(e, r) && zx(r, e) && // locally visible
  (st(r.prev, r, e.prev) || st(r, e.prev, e)) || // does not create opposite-facing sectors
  Xo(r, e) && st(r.prev, r, r.next) > 0 && st(e.prev, e, e.next) > 0);
}
function st(r, e, t) {
  return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y);
}
function Xo(r, e) {
  return r.x === e.x && r.y === e.y;
}
function Cf(r, e, t, n) {
  const i = co(st(r, e, t)), s = co(st(r, e, n)), o = co(st(t, n, r)), a = co(st(t, n, e));
  return !!(i !== s && o !== a || i === 0 && ao(r, t, e) || s === 0 && ao(r, n, e) || o === 0 && ao(t, r, n) || a === 0 && ao(t, e, n));
}
function ao(r, e, t) {
  return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y);
}
function co(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}
function Bx(r, e) {
  let t = r;
  do {
    if (t.i !== r.i && t.next.i !== r.i && t.i !== e.i && t.next.i !== e.i && Cf(t, t.next, r, e)) return !0;
    t = t.next;
  } while (t !== r);
  return !1;
}
function rr(r, e) {
  return st(r.prev, r, r.next) < 0 ? st(r, e, r.next) >= 0 && st(r, r.prev, e) >= 0 : st(r, e, r.prev) < 0 || st(r, r.next, e) < 0;
}
function zx(r, e) {
  let t = r, n = !1;
  const i = (r.x + e.x) / 2, s = (r.y + e.y) / 2;
  do
    t.y > s != t.next.y > s && t.next.y !== t.y && i < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
  while (t !== r);
  return n;
}
function Lf(r, e) {
  const t = new kc(r.i, r.x, r.y), n = new kc(e.i, e.x, e.y), i = r.next, s = e.prev;
  return r.next = e, e.prev = r, t.next = i, i.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n;
}
function Yh(r, e, t, n) {
  const i = new kc(r, e, t);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function or(r) {
  r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
}
function kc(r, e, t) {
  this.i = r, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function kx(r, e, t, n) {
  let i = 0;
  for (let s = e, o = t - n; s < t; s += n)
    i += (r[o] - r[s]) * (r[s + 1] + r[o + 1]), o = s;
  return i;
}
class mn {
  // calculate area of the contour polygon
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let i = t - 1, s = 0; s < t; i = s++)
      n += e[i].x * e[s].y - e[s].x * e[i].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return mn.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [], i = [], s = [];
    Kh(e), Zh(n, e);
    let o = e.length;
    t.forEach(Kh);
    for (let c = 0; c < t.length; c++)
      i.push(o), o += t[c].length, Zh(n, t[c]);
    const a = bx.triangulate(n, i);
    for (let c = 0; c < a.length; c += 3)
      s.push(a.slice(c, c + 3));
    return s;
  }
}
function Kh(r) {
  const e = r.length;
  e > 2 && r[e - 1].equals(r[0]) && r.pop();
}
function Zh(r, e) {
  for (let t = 0; t < e.length; t++)
    r.push(e[t].x), r.push(e[t].y);
}
class yr extends Ve {
  constructor(e = new wi([new Z(0.5, 0.5), new Z(-0.5, 0.5), new Z(-0.5, -0.5), new Z(0.5, -0.5)]), t = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: e,
      options: t
    }, e = Array.isArray(e) ? e : [e];
    const n = this, i = [], s = [];
    for (let a = 0, c = e.length; a < c; a++) {
      const l = e[a];
      o(l);
    }
    this.setAttribute("position", new be(i, 3)), this.setAttribute("uv", new be(s, 2)), this.computeVertexNormals();
    function o(a) {
      const c = [], l = t.curveSegments !== void 0 ? t.curveSegments : 12, h = t.steps !== void 0 ? t.steps : 1, u = t.depth !== void 0 ? t.depth : 1;
      let d = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0, f = t.bevelThickness !== void 0 ? t.bevelThickness : 0.2, m = t.bevelSize !== void 0 ? t.bevelSize : f - 0.1, y = t.bevelOffset !== void 0 ? t.bevelOffset : 0, g = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
      const p = t.extrudePath, x = t.UVGenerator !== void 0 ? t.UVGenerator : Hx;
      let _, v = !1, S, E, T, A;
      p && (_ = p.getSpacedPoints(h), v = !0, d = !1, S = p.computeFrenetFrames(h, !1), E = new R(), T = new R(), A = new R()), d || (g = 0, f = 0, m = 0, y = 0);
      const M = a.extractPoints(l);
      let b = M.shape;
      const P = M.holes;
      if (!mn.isClockWise(b)) {
        b = b.reverse();
        for (let U = 0, ce = P.length; U < ce; U++) {
          const j = P[U];
          mn.isClockWise(j) && (P[U] = j.reverse());
        }
      }
      const D = mn.triangulateShape(b, P), N = b;
      for (let U = 0, ce = P.length; U < ce; U++) {
        const j = P[U];
        b = b.concat(j);
      }
      function B(U, ce, j) {
        return ce || console.error("THREE.ExtrudeGeometry: vec does not exist"), U.clone().addScaledVector(ce, j);
      }
      const J = b.length, W = D.length;
      function X(U, ce, j) {
        let ae, $, Te;
        const ye = U.x - ce.x, xe = U.y - ce.y, Ie = j.x - U.x, We = j.y - U.y, it = ye * ye + xe * xe, L = ye * We - xe * Ie;
        if (Math.abs(L) > Number.EPSILON) {
          const w = Math.sqrt(it), q = Math.sqrt(Ie * Ie + We * We), oe = ce.x - xe / w, re = ce.y + ye / w, I = j.x - We / q, ee = j.y + Ie / q, se = ((I - oe) * We - (ee - re) * Ie) / (ye * We - xe * Ie);
          ae = oe + ye * se - U.x, $ = re + xe * se - U.y;
          const G = ae * ae + $ * $;
          if (G <= 2)
            return new Z(ae, $);
          Te = Math.sqrt(G / 2);
        } else {
          let w = !1;
          ye > Number.EPSILON ? Ie > Number.EPSILON && (w = !0) : ye < -Number.EPSILON ? Ie < -Number.EPSILON && (w = !0) : Math.sign(xe) === Math.sign(We) && (w = !0), w ? (ae = -xe, $ = ye, Te = Math.sqrt(it)) : (ae = ye, $ = xe, Te = Math.sqrt(it / 2));
        }
        return new Z(ae / Te, $ / Te);
      }
      const Q = [];
      for (let U = 0, ce = N.length, j = ce - 1, ae = U + 1; U < ce; U++, j++, ae++)
        j === ce && (j = 0), ae === ce && (ae = 0), Q[U] = X(N[U], N[j], N[ae]);
      const te = [];
      let ue, H = Q.concat();
      for (let U = 0, ce = P.length; U < ce; U++) {
        const j = P[U];
        ue = [];
        for (let ae = 0, $ = j.length, Te = $ - 1, ye = ae + 1; ae < $; ae++, Te++, ye++)
          Te === $ && (Te = 0), ye === $ && (ye = 0), ue[ae] = X(j[ae], j[Te], j[ye]);
        te.push(ue), H = H.concat(ue);
      }
      for (let U = 0; U < g; U++) {
        const ce = U / g, j = f * Math.cos(ce * Math.PI / 2), ae = m * Math.sin(ce * Math.PI / 2) + y;
        for (let $ = 0, Te = N.length; $ < Te; $++) {
          const ye = B(N[$], Q[$], ae);
          me(ye.x, ye.y, -j);
        }
        for (let $ = 0, Te = P.length; $ < Te; $++) {
          const ye = P[$];
          ue = te[$];
          for (let xe = 0, Ie = ye.length; xe < Ie; xe++) {
            const We = B(ye[xe], ue[xe], ae);
            me(We.x, We.y, -j);
          }
        }
      }
      const ne = m + y;
      for (let U = 0; U < J; U++) {
        const ce = d ? B(b[U], H[U], ne) : b[U];
        v ? (T.copy(S.normals[0]).multiplyScalar(ce.x), E.copy(S.binormals[0]).multiplyScalar(ce.y), A.copy(_[0]).add(T).add(E), me(A.x, A.y, A.z)) : me(ce.x, ce.y, 0);
      }
      for (let U = 1; U <= h; U++)
        for (let ce = 0; ce < J; ce++) {
          const j = d ? B(b[ce], H[ce], ne) : b[ce];
          v ? (T.copy(S.normals[U]).multiplyScalar(j.x), E.copy(S.binormals[U]).multiplyScalar(j.y), A.copy(_[U]).add(T).add(E), me(A.x, A.y, A.z)) : me(j.x, j.y, u / h * U);
        }
      for (let U = g - 1; U >= 0; U--) {
        const ce = U / g, j = f * Math.cos(ce * Math.PI / 2), ae = m * Math.sin(ce * Math.PI / 2) + y;
        for (let $ = 0, Te = N.length; $ < Te; $++) {
          const ye = B(N[$], Q[$], ae);
          me(ye.x, ye.y, u + j);
        }
        for (let $ = 0, Te = P.length; $ < Te; $++) {
          const ye = P[$];
          ue = te[$];
          for (let xe = 0, Ie = ye.length; xe < Ie; xe++) {
            const We = B(ye[xe], ue[xe], ae);
            v ? me(We.x, We.y + _[h - 1].y, _[h - 1].x + j) : me(We.x, We.y, u + j);
          }
        }
      }
      ie(), pe();
      function ie() {
        const U = i.length / 3;
        if (d) {
          let ce = 0, j = J * ce;
          for (let ae = 0; ae < W; ae++) {
            const $ = D[ae];
            Ce($[2] + j, $[1] + j, $[0] + j);
          }
          ce = h + g * 2, j = J * ce;
          for (let ae = 0; ae < W; ae++) {
            const $ = D[ae];
            Ce($[0] + j, $[1] + j, $[2] + j);
          }
        } else {
          for (let ce = 0; ce < W; ce++) {
            const j = D[ce];
            Ce(j[2], j[1], j[0]);
          }
          for (let ce = 0; ce < W; ce++) {
            const j = D[ce];
            Ce(j[0] + J * h, j[1] + J * h, j[2] + J * h);
          }
        }
        n.addGroup(U, i.length / 3 - U, 0);
      }
      function pe() {
        const U = i.length / 3;
        let ce = 0;
        _e(N, ce), ce += N.length;
        for (let j = 0, ae = P.length; j < ae; j++) {
          const $ = P[j];
          _e($, ce), ce += $.length;
        }
        n.addGroup(U, i.length / 3 - U, 1);
      }
      function _e(U, ce) {
        let j = U.length;
        for (; --j >= 0; ) {
          const ae = j;
          let $ = j - 1;
          $ < 0 && ($ = U.length - 1);
          for (let Te = 0, ye = h + g * 2; Te < ye; Te++) {
            const xe = J * Te, Ie = J * (Te + 1), We = ce + ae + xe, it = ce + $ + xe, L = ce + $ + Ie, w = ce + ae + Ie;
            we(We, it, L, w);
          }
        }
      }
      function me(U, ce, j) {
        c.push(U), c.push(ce), c.push(j);
      }
      function Ce(U, ce, j) {
        Ye(U), Ye(ce), Ye(j);
        const ae = i.length / 3, $ = x.generateTopUV(n, i, ae - 3, ae - 2, ae - 1);
        Pe($[0]), Pe($[1]), Pe($[2]);
      }
      function we(U, ce, j, ae) {
        Ye(U), Ye(ce), Ye(ae), Ye(ce), Ye(j), Ye(ae);
        const $ = i.length / 3, Te = x.generateSideWallUV(n, i, $ - 6, $ - 3, $ - 2, $ - 1);
        Pe(Te[0]), Pe(Te[1]), Pe(Te[3]), Pe(Te[1]), Pe(Te[2]), Pe(Te[3]);
      }
      function Ye(U) {
        i.push(c[U * 3 + 0]), i.push(c[U * 3 + 1]), i.push(c[U * 3 + 2]);
      }
      function Pe(U) {
        s.push(U.x), s.push(U.y);
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options;
    return Gx(t, n, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let s = 0, o = e.shapes.length; s < o; s++) {
      const a = t[e.shapes[s]];
      n.push(a);
    }
    const i = e.options.extrudePath;
    return i !== void 0 && (e.options.extrudePath = new bl[i.type]().fromJSON(i)), new yr(n, e.options);
  }
}
const Hx = {
  generateTopUV: function(r, e, t, n, i) {
    const s = e[t * 3], o = e[t * 3 + 1], a = e[n * 3], c = e[n * 3 + 1], l = e[i * 3], h = e[i * 3 + 1];
    return [
      new Z(s, o),
      new Z(a, c),
      new Z(l, h)
    ];
  },
  generateSideWallUV: function(r, e, t, n, i, s) {
    const o = e[t * 3], a = e[t * 3 + 1], c = e[t * 3 + 2], l = e[n * 3], h = e[n * 3 + 1], u = e[n * 3 + 2], d = e[i * 3], f = e[i * 3 + 1], m = e[i * 3 + 2], y = e[s * 3], g = e[s * 3 + 1], p = e[s * 3 + 2];
    return Math.abs(a - h) < Math.abs(o - l) ? [
      new Z(o, 1 - c),
      new Z(l, 1 - u),
      new Z(d, 1 - m),
      new Z(y, 1 - p)
    ] : [
      new Z(a, 1 - c),
      new Z(h, 1 - u),
      new Z(f, 1 - m),
      new Z(g, 1 - p)
    ];
  }
};
function Gx(r, e, t) {
  if (t.shapes = [], Array.isArray(r))
    for (let n = 0, i = r.length; n < i; n++) {
      const s = r[n];
      t.shapes.push(s.uuid);
    }
  else
    t.shapes.push(r.uuid);
  return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
}
class xr extends Nn {
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2, i = [
      -1,
      n,
      0,
      1,
      n,
      0,
      -1,
      -n,
      0,
      1,
      -n,
      0,
      0,
      -1,
      n,
      0,
      1,
      n,
      0,
      -1,
      -n,
      0,
      1,
      -n,
      n,
      0,
      -1,
      n,
      0,
      1,
      -n,
      0,
      -1,
      -n,
      0,
      1
    ], s = [
      0,
      11,
      5,
      0,
      5,
      1,
      0,
      1,
      7,
      0,
      7,
      10,
      0,
      10,
      11,
      1,
      5,
      9,
      5,
      11,
      4,
      11,
      10,
      2,
      10,
      7,
      6,
      7,
      1,
      8,
      3,
      9,
      4,
      3,
      4,
      2,
      3,
      2,
      6,
      3,
      6,
      8,
      3,
      8,
      9,
      4,
      9,
      5,
      2,
      4,
      11,
      6,
      2,
      10,
      8,
      6,
      7,
      9,
      8,
      1
    ];
    super(i, s, e, t), this.type = "IcosahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(e) {
    return new xr(e.radius, e.detail);
  }
}
class ws extends Nn {
  constructor(e = 1, t = 0) {
    const n = [
      1,
      0,
      0,
      -1,
      0,
      0,
      0,
      1,
      0,
      0,
      -1,
      0,
      0,
      0,
      1,
      0,
      0,
      -1
    ], i = [
      0,
      2,
      4,
      0,
      4,
      3,
      0,
      3,
      5,
      0,
      5,
      2,
      1,
      2,
      5,
      1,
      5,
      3,
      1,
      3,
      4,
      1,
      4,
      2
    ];
    super(n, i, e, t), this.type = "OctahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(e) {
    return new ws(e.radius, e.detail);
  }
}
class vr extends Ve {
  constructor(e = 0.5, t = 1, n = 32, i = 1, s = 0, o = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = {
      innerRadius: e,
      outerRadius: t,
      thetaSegments: n,
      phiSegments: i,
      thetaStart: s,
      thetaLength: o
    }, n = Math.max(3, n), i = Math.max(1, i);
    const a = [], c = [], l = [], h = [];
    let u = e;
    const d = (t - e) / i, f = new R(), m = new Z();
    for (let y = 0; y <= i; y++) {
      for (let g = 0; g <= n; g++) {
        const p = s + g / n * o;
        f.x = u * Math.cos(p), f.y = u * Math.sin(p), c.push(f.x, f.y, f.z), l.push(0, 0, 1), m.x = (f.x / t + 1) / 2, m.y = (f.y / t + 1) / 2, h.push(m.x, m.y);
      }
      u += d;
    }
    for (let y = 0; y < i; y++) {
      const g = y * (n + 1);
      for (let p = 0; p < n; p++) {
        const x = p + g, _ = x, v = x + n + 1, S = x + n + 2, E = x + 1;
        a.push(_, v, E), a.push(v, S, E);
      }
    }
    this.setIndex(a), this.setAttribute("position", new be(c, 3)), this.setAttribute("normal", new be(l, 3)), this.setAttribute("uv", new be(h, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new vr(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength);
  }
}
class Mr extends Ve {
  constructor(e = new wi([new Z(0, 0.5), new Z(-0.5, -0.5), new Z(0.5, -0.5)]), t = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = {
      shapes: e,
      curveSegments: t
    };
    const n = [], i = [], s = [], o = [];
    let a = 0, c = 0;
    if (Array.isArray(e) === !1)
      l(e);
    else
      for (let h = 0; h < e.length; h++)
        l(e[h]), this.addGroup(a, c, h), a += c, c = 0;
    this.setIndex(n), this.setAttribute("position", new be(i, 3)), this.setAttribute("normal", new be(s, 3)), this.setAttribute("uv", new be(o, 2));
    function l(h) {
      const u = i.length / 3, d = h.extractPoints(t);
      let f = d.shape;
      const m = d.holes;
      mn.isClockWise(f) === !1 && (f = f.reverse());
      for (let g = 0, p = m.length; g < p; g++) {
        const x = m[g];
        mn.isClockWise(x) === !0 && (m[g] = x.reverse());
      }
      const y = mn.triangulateShape(f, m);
      for (let g = 0, p = m.length; g < p; g++) {
        const x = m[g];
        f = f.concat(x);
      }
      for (let g = 0, p = f.length; g < p; g++) {
        const x = f[g];
        i.push(x.x, x.y, 0), s.push(0, 0, 1), o.push(x.x, x.y);
      }
      for (let g = 0, p = y.length; g < p; g++) {
        const x = y[g], _ = x[0] + u, v = x[1] + u, S = x[2] + u;
        n.push(_, v, S), c += 3;
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes;
    return Vx(t, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let i = 0, s = e.shapes.length; i < s; i++) {
      const o = t[e.shapes[i]];
      n.push(o);
    }
    return new Mr(n, e.curveSegments);
  }
}
function Vx(r, e) {
  if (e.shapes = [], Array.isArray(r))
    for (let t = 0, n = r.length; t < n; t++) {
      const i = r[t];
      e.shapes.push(i.uuid);
    }
  else
    e.shapes.push(r.uuid);
  return e;
}
class Rs extends Ve {
  constructor(e = 1, t = 32, n = 16, i = 0, s = Math.PI * 2, o = 0, a = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: n,
      phiStart: i,
      phiLength: s,
      thetaStart: o,
      thetaLength: a
    }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const c = Math.min(o + a, Math.PI);
    let l = 0;
    const h = [], u = new R(), d = new R(), f = [], m = [], y = [], g = [];
    for (let p = 0; p <= n; p++) {
      const x = [], _ = p / n;
      let v = 0;
      p === 0 && o === 0 ? v = 0.5 / t : p === n && c === Math.PI && (v = -0.5 / t);
      for (let S = 0; S <= t; S++) {
        const E = S / t;
        u.x = -e * Math.cos(i + E * s) * Math.sin(o + _ * a), u.y = e * Math.cos(o + _ * a), u.z = e * Math.sin(i + E * s) * Math.sin(o + _ * a), m.push(u.x, u.y, u.z), d.copy(u).normalize(), y.push(d.x, d.y, d.z), g.push(E + v, 1 - _), x.push(l++);
      }
      h.push(x);
    }
    for (let p = 0; p < n; p++)
      for (let x = 0; x < t; x++) {
        const _ = h[p][x + 1], v = h[p][x], S = h[p + 1][x], E = h[p + 1][x + 1];
        (p !== 0 || o > 0) && f.push(_, v, E), (p !== n - 1 || c < Math.PI) && f.push(v, S, E);
      }
    this.setIndex(f), this.setAttribute("position", new be(m, 3)), this.setAttribute("normal", new be(y, 3)), this.setAttribute("uv", new be(g, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Rs(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class Sr extends Nn {
  constructor(e = 1, t = 0) {
    const n = [
      1,
      1,
      1,
      -1,
      -1,
      1,
      -1,
      1,
      -1,
      1,
      -1,
      -1
    ], i = [
      2,
      1,
      0,
      0,
      3,
      2,
      1,
      3,
      0,
      2,
      3,
      1
    ];
    super(n, i, e, t), this.type = "TetrahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(e) {
    return new Sr(e.radius, e.detail);
  }
}
class Er extends Ve {
  constructor(e = 1, t = 0.4, n = 12, i = 48, s = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = {
      radius: e,
      tube: t,
      radialSegments: n,
      tubularSegments: i,
      arc: s
    }, n = Math.floor(n), i = Math.floor(i);
    const o = [], a = [], c = [], l = [], h = new R(), u = new R(), d = new R();
    for (let f = 0; f <= n; f++)
      for (let m = 0; m <= i; m++) {
        const y = m / i * s, g = f / n * Math.PI * 2;
        u.x = (e + t * Math.cos(g)) * Math.cos(y), u.y = (e + t * Math.cos(g)) * Math.sin(y), u.z = t * Math.sin(g), a.push(u.x, u.y, u.z), h.x = e * Math.cos(y), h.y = e * Math.sin(y), d.subVectors(u, h).normalize(), c.push(d.x, d.y, d.z), l.push(m / i), l.push(f / n);
      }
    for (let f = 1; f <= n; f++)
      for (let m = 1; m <= i; m++) {
        const y = (i + 1) * f + m - 1, g = (i + 1) * (f - 1) + m - 1, p = (i + 1) * (f - 1) + m, x = (i + 1) * f + m;
        o.push(y, g, x), o.push(g, p, x);
      }
    this.setIndex(o), this.setAttribute("position", new be(a, 3)), this.setAttribute("normal", new be(c, 3)), this.setAttribute("uv", new be(l, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Er(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class br extends Ve {
  constructor(e = 1, t = 0.4, n = 64, i = 8, s = 2, o = 3) {
    super(), this.type = "TorusKnotGeometry", this.parameters = {
      radius: e,
      tube: t,
      tubularSegments: n,
      radialSegments: i,
      p: s,
      q: o
    }, n = Math.floor(n), i = Math.floor(i);
    const a = [], c = [], l = [], h = [], u = new R(), d = new R(), f = new R(), m = new R(), y = new R(), g = new R(), p = new R();
    for (let _ = 0; _ <= n; ++_) {
      const v = _ / n * s * Math.PI * 2;
      x(v, s, o, e, f), x(v + 0.01, s, o, e, m), g.subVectors(m, f), p.addVectors(m, f), y.crossVectors(g, p), p.crossVectors(y, g), y.normalize(), p.normalize();
      for (let S = 0; S <= i; ++S) {
        const E = S / i * Math.PI * 2, T = -t * Math.cos(E), A = t * Math.sin(E);
        u.x = f.x + (T * p.x + A * y.x), u.y = f.y + (T * p.y + A * y.y), u.z = f.z + (T * p.z + A * y.z), c.push(u.x, u.y, u.z), d.subVectors(u, f).normalize(), l.push(d.x, d.y, d.z), h.push(_ / n), h.push(S / i);
      }
    }
    for (let _ = 1; _ <= n; _++)
      for (let v = 1; v <= i; v++) {
        const S = (i + 1) * (_ - 1) + (v - 1), E = (i + 1) * _ + (v - 1), T = (i + 1) * _ + v, A = (i + 1) * (_ - 1) + v;
        a.push(S, E, A), a.push(E, T, A);
      }
    this.setIndex(a), this.setAttribute("position", new be(c, 3)), this.setAttribute("normal", new be(l, 3)), this.setAttribute("uv", new be(h, 2));
    function x(_, v, S, E, T) {
      const A = Math.cos(_), M = Math.sin(_), b = S / v * _, P = Math.cos(b);
      T.x = E * (2 + P) * 0.5 * A, T.y = E * (2 + P) * M * 0.5, T.z = E * Math.sin(b) * 0.5;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new br(e.radius, e.tube, e.tubularSegments, e.radialSegments, e.p, e.q);
  }
}
class Tr extends Ve {
  constructor(e = new Sl(new R(-1, -1, 0), new R(-1, 1, 0), new R(1, 1, 0)), t = 64, n = 1, i = 8, s = !1) {
    super(), this.type = "TubeGeometry", this.parameters = {
      path: e,
      tubularSegments: t,
      radius: n,
      radialSegments: i,
      closed: s
    };
    const o = e.computeFrenetFrames(t, s);
    this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals;
    const a = new R(), c = new R(), l = new Z();
    let h = new R();
    const u = [], d = [], f = [], m = [];
    y(), this.setIndex(m), this.setAttribute("position", new be(u, 3)), this.setAttribute("normal", new be(d, 3)), this.setAttribute("uv", new be(f, 2));
    function y() {
      for (let _ = 0; _ < t; _++)
        g(_);
      g(s === !1 ? t : 0), x(), p();
    }
    function g(_) {
      h = e.getPointAt(_ / t, h);
      const v = o.normals[_], S = o.binormals[_];
      for (let E = 0; E <= i; E++) {
        const T = E / i * Math.PI * 2, A = Math.sin(T), M = -Math.cos(T);
        c.x = M * v.x + A * S.x, c.y = M * v.y + A * S.y, c.z = M * v.z + A * S.z, c.normalize(), d.push(c.x, c.y, c.z), a.x = h.x + n * c.x, a.y = h.y + n * c.y, a.z = h.z + n * c.z, u.push(a.x, a.y, a.z);
      }
    }
    function p() {
      for (let _ = 1; _ <= t; _++)
        for (let v = 1; v <= i; v++) {
          const S = (i + 1) * (_ - 1) + (v - 1), E = (i + 1) * _ + (v - 1), T = (i + 1) * _ + v, A = (i + 1) * (_ - 1) + v;
          m.push(S, E, A), m.push(E, T, A);
        }
    }
    function x() {
      for (let _ = 0; _ <= t; _++)
        for (let v = 0; v <= i; v++)
          l.x = _ / t, l.y = v / i, f.push(l.x, l.y);
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.path = this.parameters.path.toJSON(), e;
  }
  static fromJSON(e) {
    return new Tr(
      new bl[e.path.type]().fromJSON(e.path),
      e.tubularSegments,
      e.radius,
      e.radialSegments,
      e.closed
    );
  }
}
class Pf extends Ve {
  constructor(e = null) {
    if (super(), this.type = "WireframeGeometry", this.parameters = {
      geometry: e
    }, e !== null) {
      const t = [], n = /* @__PURE__ */ new Set(), i = new R(), s = new R();
      if (e.index !== null) {
        const o = e.attributes.position, a = e.index;
        let c = e.groups;
        c.length === 0 && (c = [{ start: 0, count: a.count, materialIndex: 0 }]);
        for (let l = 0, h = c.length; l < h; ++l) {
          const u = c[l], d = u.start, f = u.count;
          for (let m = d, y = d + f; m < y; m += 3)
            for (let g = 0; g < 3; g++) {
              const p = a.getX(m + g), x = a.getX(m + (g + 1) % 3);
              i.fromBufferAttribute(o, p), s.fromBufferAttribute(o, x), Jh(i, s, n) === !0 && (t.push(i.x, i.y, i.z), t.push(s.x, s.y, s.z));
            }
        }
      } else {
        const o = e.attributes.position;
        for (let a = 0, c = o.count / 3; a < c; a++)
          for (let l = 0; l < 3; l++) {
            const h = 3 * a + l, u = 3 * a + (l + 1) % 3;
            i.fromBufferAttribute(o, h), s.fromBufferAttribute(o, u), Jh(i, s, n) === !0 && (t.push(i.x, i.y, i.z), t.push(s.x, s.y, s.z));
          }
      }
      this.setAttribute("position", new be(t, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
function Jh(r, e, t) {
  const n = `${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`, i = `${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;
  return t.has(n) === !0 || t.has(i) === !0 ? !1 : (t.add(n), t.add(i), !0);
}
var jh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BoxGeometry: ti,
  CapsuleGeometry: pr,
  CircleGeometry: mr,
  ConeGeometry: gr,
  CylinderGeometry: Ii,
  DodecahedronGeometry: _r,
  EdgesGeometry: wf,
  ExtrudeGeometry: yr,
  IcosahedronGeometry: xr,
  LatheGeometry: As,
  OctahedronGeometry: ws,
  PlaneGeometry: bs,
  PolyhedronGeometry: Nn,
  RingGeometry: vr,
  ShapeGeometry: Mr,
  SphereGeometry: Rs,
  TetrahedronGeometry: Sr,
  TorusGeometry: Er,
  TorusKnotGeometry: br,
  TubeGeometry: Tr,
  WireframeGeometry: Pf
});
class If extends gt {
  constructor(e) {
    super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new de(0), this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this;
  }
}
class Uf extends yn {
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
class Ar extends gt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new de(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new de(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ei, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class vn extends Ar {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Z(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return ht(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new de(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new de(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new de(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
class Df extends gt {
  constructor(e) {
    super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new de(16777215), this.specular = new de(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new de(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ei, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = cr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Nf extends gt {
  constructor(e) {
    super(), this.isMeshToonMaterial = !0, this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new de(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new de(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ei, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
class Of extends gt {
  constructor(e) {
    super(), this.isMeshNormalMaterial = !0, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ei, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
  }
}
class Ff extends gt {
  constructor(e) {
    super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new de(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new de(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ei, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = cr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Bf extends gt {
  constructor(e) {
    super(), this.isMeshMatcapMaterial = !0, this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new de(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ei, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { MATCAP: "" }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class zf extends wt {
  constructor(e) {
    super(), this.isLineDashedMaterial = !0, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this;
  }
}
function Yt(r, e, t) {
  return Tl(r) ? new r.constructor(r.subarray(e, t !== void 0 ? t : r.length)) : r.slice(e, t);
}
function bi(r, e, t) {
  return !r || // let 'undefined' and 'null' pass
  !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r);
}
function Tl(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function kf(r) {
  function e(i, s) {
    return r[i] - r[s];
  }
  const t = r.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function Hc(r, e, t) {
  const n = r.length, i = new r.constructor(n);
  for (let s = 0, o = 0; o !== n; ++s) {
    const a = t[s] * e;
    for (let c = 0; c !== e; ++c)
      i[o++] = r[a + c];
  }
  return i;
}
function Al(r, e, t, n) {
  let i = 1, s = r[0];
  for (; s !== void 0 && s[n] === void 0; )
    s = r[i++];
  if (s === void 0) return;
  let o = s[n];
  if (o !== void 0)
    if (Array.isArray(o))
      do
        o = s[n], o !== void 0 && (e.push(s.time), t.push.apply(t, o)), s = r[i++];
      while (s !== void 0);
    else if (o.toArray !== void 0)
      do
        o = s[n], o !== void 0 && (e.push(s.time), o.toArray(t, t.length)), s = r[i++];
      while (s !== void 0);
    else
      do
        o = s[n], o !== void 0 && (e.push(s.time), t.push(o)), s = r[i++];
      while (s !== void 0);
}
function Wx(r, e, t, n, i = 30) {
  const s = r.clone();
  s.name = e;
  const o = [];
  for (let c = 0; c < s.tracks.length; ++c) {
    const l = s.tracks[c], h = l.getValueSize(), u = [], d = [];
    for (let f = 0; f < l.times.length; ++f) {
      const m = l.times[f] * i;
      if (!(m < t || m >= n)) {
        u.push(l.times[f]);
        for (let y = 0; y < h; ++y)
          d.push(l.values[f * h + y]);
      }
    }
    u.length !== 0 && (l.times = bi(u, l.times.constructor), l.values = bi(d, l.values.constructor), o.push(l));
  }
  s.tracks = o;
  let a = 1 / 0;
  for (let c = 0; c < s.tracks.length; ++c)
    a > s.tracks[c].times[0] && (a = s.tracks[c].times[0]);
  for (let c = 0; c < s.tracks.length; ++c)
    s.tracks[c].shift(-1 * a);
  return s.resetDuration(), s;
}
function Xx(r, e = 0, t = r, n = 30) {
  n <= 0 && (n = 30);
  const i = t.tracks.length, s = e / n;
  for (let o = 0; o < i; ++o) {
    const a = t.tracks[o], c = a.ValueTypeName;
    if (c === "bool" || c === "string") continue;
    const l = r.tracks.find(function(p) {
      return p.name === a.name && p.ValueTypeName === c;
    });
    if (l === void 0) continue;
    let h = 0;
    const u = a.getValueSize();
    a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (h = u / 3);
    let d = 0;
    const f = l.getValueSize();
    l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (d = f / 3);
    const m = a.times.length - 1;
    let y;
    if (s <= a.times[0]) {
      const p = h, x = u - h;
      y = Yt(a.values, p, x);
    } else if (s >= a.times[m]) {
      const p = m * u + h, x = p + u - h;
      y = Yt(a.values, p, x);
    } else {
      const p = a.createInterpolant(), x = h, _ = u - h;
      p.evaluate(s), y = Yt(p.resultBuffer, x, _);
    }
    c === "quaternion" && new Et().fromArray(y).normalize().conjugate().toArray(y);
    const g = l.times.length;
    for (let p = 0; p < g; ++p) {
      const x = p * f + d;
      if (c === "quaternion")
        Et.multiplyQuaternionsFlat(
          l.values,
          x,
          y,
          0,
          l.values,
          x
        );
      else {
        const _ = f - d * 2;
        for (let v = 0; v < _; ++v)
          l.values[x + v] -= y[v];
      }
    }
  }
  return r.blendMode = tl, r;
}
const qx = {
  arraySlice: Yt,
  convertArray: bi,
  isTypedArray: Tl,
  getKeyframeOrder: kf,
  sortedArray: Hc,
  flattenJSON: Al,
  subclip: Wx,
  makeClipAdditive: Xx
};
class Cs {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], s = t[n - 1];
    e: {
      t: {
        let o;
        n: {
          i: if (!(e < i)) {
            for (let a = n + 2; ; ) {
              if (i === void 0) {
                if (e < s) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === a) break;
              if (s = i, i = t[++n], e < i)
                break t;
            }
            o = t.length;
            break n;
          }
          if (!(e >= s)) {
            const a = t[1];
            e < a && (n = 2, s = a);
            for (let c = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === c) break;
              if (i = s, s = t[--n - 1], e >= s)
                break t;
            }
            o = n, n = 0;
            break n;
          }
          break e;
        }
        for (; n < o; ) {
          const a = n + o >>> 1;
          e < t[a] ? o = a : n = a + 1;
        }
        if (i = t[n], s = t[n - 1], s === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i;
    for (let o = 0; o !== i; ++o)
      t[o] = n[s + o];
    return t;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class Hf extends Cs {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: Mi,
      endingEnd: Mi
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, o = e + 1, a = i[s], c = i[o];
    if (a === void 0)
      switch (this.getSettings_().endingStart) {
        case Si:
          s = e, a = 2 * t - n;
          break;
        case $s:
          s = i.length - 2, a = t + i[s] - i[s + 1];
          break;
        default:
          s = e, a = n;
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case Si:
          o = e, c = 2 * n - t;
          break;
        case $s:
          o = 1, c = n + i[1] - i[0];
          break;
        default:
          o = e - 1, c = t;
      }
    const l = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = l / (t - a), this._weightNext = l / (c - n), this._offsetPrev = s * h, this._offsetNext = o * h;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = e * a, l = c - a, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, m = (n - t) / (i - t), y = m * m, g = y * m, p = -d * g + 2 * d * y - d * m, x = (1 + d) * g + (-1.5 - 2 * d) * y + (-0.5 + d) * m + 1, _ = (-1 - f) * g + (1.5 + f) * y + 0.5 * m, v = f * g - f * y;
    for (let S = 0; S !== a; ++S)
      s[S] = p * o[h + S] + x * o[l + S] + _ * o[c + S] + v * o[u + S];
    return s;
  }
}
class wl extends Cs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = e * a, l = c - a, h = (n - t) / (i - t), u = 1 - h;
    for (let d = 0; d !== a; ++d)
      s[d] = o[l + d] * u + o[c + d] * h;
    return s;
  }
}
class Gf extends Cs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class cn {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = bi(t, this.TimeBufferType), this.values = bi(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: bi(e.times, Array),
        values: bi(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Gf(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new wl(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Hf(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case ps:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Ci:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Eo:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return ps;
      case this.InterpolantFactoryMethodLinear:
        return Ci;
      case this.InterpolantFactoryMethodSmooth:
        return Eo;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(e, t) {
    const n = this.times, i = n.length;
    let s = 0, o = i - 1;
    for (; s !== i && n[s] < e; )
      ++s;
    for (; o !== -1 && n[o] > t; )
      --o;
    if (++o, s !== 0 || o !== i) {
      s >= o && (o = Math.max(o, 1), s = o - 1);
      const a = this.getValueSize();
      this.times = Yt(n, s, o), this.values = Yt(this.values, s * a, o * a);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let o = null;
    for (let a = 0; a !== s; a++) {
      const c = n[a];
      if (typeof c == "number" && isNaN(c)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, c), e = !1;
        break;
      }
      if (o !== null && o > c) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, c, o), e = !1;
        break;
      }
      o = c;
    }
    if (i !== void 0 && Tl(i))
      for (let a = 0, c = i.length; a !== c; ++a) {
        const l = i[a];
        if (isNaN(l)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, l), e = !1;
          break;
        }
      }
    return e;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const e = Yt(this.times), t = Yt(this.values), n = this.getValueSize(), i = this.getInterpolation() === Eo, s = e.length - 1;
    let o = 1;
    for (let a = 1; a < s; ++a) {
      let c = !1;
      const l = e[a], h = e[a + 1];
      if (l !== h && (a !== 1 || l !== e[0]))
        if (i)
          c = !0;
        else {
          const u = a * n, d = u - n, f = u + n;
          for (let m = 0; m !== n; ++m) {
            const y = t[u + m];
            if (y !== t[d + m] || y !== t[f + m]) {
              c = !0;
              break;
            }
          }
        }
      if (c) {
        if (a !== o) {
          e[o] = e[a];
          const u = a * n, d = o * n;
          for (let f = 0; f !== n; ++f)
            t[d + f] = t[u + f];
        }
        ++o;
      }
    }
    if (s > 0) {
      e[o] = e[s];
      for (let a = s * n, c = o * n, l = 0; l !== n; ++l)
        t[c + l] = t[a + l];
      ++o;
    }
    return o !== e.length ? (this.times = Yt(e, 0, o), this.values = Yt(t, 0, o * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = Yt(this.times, 0), t = Yt(this.values, 0), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
cn.prototype.TimeBufferType = Float32Array;
cn.prototype.ValueBufferType = Float32Array;
cn.prototype.DefaultInterpolation = Ci;
class Ui extends cn {
}
Ui.prototype.ValueTypeName = "bool";
Ui.prototype.ValueBufferType = Array;
Ui.prototype.DefaultInterpolation = ps;
Ui.prototype.InterpolantFactoryMethodLinear = void 0;
Ui.prototype.InterpolantFactoryMethodSmooth = void 0;
class Rl extends cn {
}
Rl.prototype.ValueTypeName = "color";
class ys extends cn {
}
ys.prototype.ValueTypeName = "number";
class Vf extends Cs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = (n - t) / (i - t);
    let l = e * a;
    for (let h = l + a; l !== h; l += 4)
      Et.slerpFlat(s, 0, o, l - a, o, l, c);
    return s;
  }
}
class $n extends cn {
  InterpolantFactoryMethodLinear(e) {
    return new Vf(this.times, this.values, this.getValueSize(), e);
  }
}
$n.prototype.ValueTypeName = "quaternion";
$n.prototype.DefaultInterpolation = Ci;
$n.prototype.InterpolantFactoryMethodSmooth = void 0;
class Di extends cn {
}
Di.prototype.ValueTypeName = "string";
Di.prototype.ValueBufferType = Array;
Di.prototype.DefaultInterpolation = ps;
Di.prototype.InterpolantFactoryMethodLinear = void 0;
Di.prototype.InterpolantFactoryMethodSmooth = void 0;
class xs extends cn {
}
xs.prototype.ValueTypeName = "vector";
class vs {
  constructor(e, t = -1, n, i = Uo) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Vt(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let o = 0, a = n.length; o !== a; ++o)
      t.push(Kx(n[o]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return s.uuid = e.uuid, s;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let s = 0, o = n.length; s !== o; ++s)
      t.push(cn.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length, o = [];
    for (let a = 0; a < s; a++) {
      let c = [], l = [];
      c.push(
        (a + s - 1) % s,
        a,
        (a + 1) % s
      ), l.push(0, 1, 0);
      const h = kf(c);
      c = Hc(c, 1, h), l = Hc(l, 1, h), !i && c[0] === 0 && (c.push(s), l.push(l[0])), o.push(
        new ys(
          ".morphTargetInfluences[" + t[a].name + "]",
          c,
          l
        ).scale(1 / n)
      );
    }
    return new this(e, -1, o);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, c = e.length; a < c; a++) {
      const l = e[a], h = l.name.match(s);
      if (h && h.length > 1) {
        const u = h[1];
        let d = i[u];
        d || (i[u] = d = []), d.push(l);
      }
    }
    const o = [];
    for (const a in i)
      o.push(this.CreateFromMorphTargetSequence(a, i[a], t, n));
    return o;
  }
  // parse the animation.hierarchy format
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, d, f, m, y) {
      if (f.length !== 0) {
        const g = [], p = [];
        Al(f, g, p, m), g.length !== 0 && y.push(new u(d, g, p));
      }
    }, i = [], s = e.name || "default", o = e.fps || 30, a = e.blendMode;
    let c = e.length || -1;
    const l = e.hierarchy || [];
    for (let u = 0; u < l.length; u++) {
      const d = l[u].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const f = {};
          let m;
          for (m = 0; m < d.length; m++)
            if (d[m].morphTargets)
              for (let y = 0; y < d[m].morphTargets.length; y++)
                f[d[m].morphTargets[y]] = -1;
          for (const y in f) {
            const g = [], p = [];
            for (let x = 0; x !== d[m].morphTargets.length; ++x) {
              const _ = d[m];
              g.push(_.time), p.push(_.morphTarget === y ? 1 : 0);
            }
            i.push(new ys(".morphTargetInfluence[" + y + "]", g, p));
          }
          c = f.length * o;
        } else {
          const f = ".bones[" + t[u].name + "]";
          n(
            xs,
            f + ".position",
            d,
            "pos",
            i
          ), n(
            $n,
            f + ".quaternion",
            d,
            "rot",
            i
          ), n(
            xs,
            f + ".scale",
            d,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(s, c, i, a);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function Yx(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return ys;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return xs;
    case "color":
      return Rl;
    case "quaternion":
      return $n;
    case "bool":
    case "boolean":
      return Ui;
    case "string":
      return Di;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function Kx(r) {
  if (r.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Yx(r.type);
  if (r.times === void 0) {
    const t = [], n = [];
    Al(r.keys, t, n, "value"), r.times = t, r.values = n;
  }
  return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
}
const Pi = {
  enabled: !1,
  files: {},
  add: function(r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function(r) {
    if (this.enabled !== !1)
      return this.files[r];
  },
  remove: function(r) {
    delete this.files[r];
  },
  clear: function() {
    this.files = {};
  }
};
class Cl {
  constructor(e, t, n) {
    const i = this;
    let s = !1, o = 0, a = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      a++, s === !1 && i.onStart !== void 0 && i.onStart(h, o, a), s = !0;
    }, this.itemEnd = function(h) {
      o++, i.onProgress !== void 0 && i.onProgress(h, o, a), o === a && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return c ? c(h) : h;
    }, this.setURLModifier = function(h) {
      return c = h, this;
    }, this.addHandler = function(h, u) {
      return l.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = l.indexOf(h);
      return u !== -1 && l.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = l.length; u < d; u += 2) {
        const f = l[u], m = l[u + 1];
        if (f.global && (f.lastIndex = 0), f.test(h))
          return m;
      }
      return null;
    };
  }
}
const Wf = /* @__PURE__ */ new Cl();
class Nt {
  constructor(e) {
    this.manager = e !== void 0 ? e : Wf, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
const Rn = {};
class Zx extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class sn extends Nt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = Pi.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (Rn[e] !== void 0) {
      Rn[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    Rn[e] = [], Rn[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const o = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), a = this.mimeType, c = this.responseType;
    fetch(o).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0)
          return l;
        const h = Rn[e], u = l.body.getReader(), d = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), f = d ? parseInt(d) : 0, m = f !== 0;
        let y = 0;
        const g = new ReadableStream({
          start(p) {
            x();
            function x() {
              u.read().then(({ done: _, value: v }) => {
                if (_)
                  p.close();
                else {
                  y += v.byteLength;
                  const S = new ProgressEvent("progress", { lengthComputable: m, loaded: y, total: f });
                  for (let E = 0, T = h.length; E < T; E++) {
                    const A = h[E];
                    A.onProgress && A.onProgress(S);
                  }
                  p.enqueue(v), x();
                }
              });
            }
          }
        });
        return new Response(g);
      } else
        throw new Zx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((h) => new DOMParser().parseFromString(h, a));
        case "json":
          return l.json();
        default:
          if (a === void 0)
            return l.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(a), d = u && u[1] ? u[1].toLowerCase() : void 0, f = new TextDecoder(d);
            return l.arrayBuffer().then((m) => f.decode(m));
          }
      }
    }).then((l) => {
      Pi.add(e, l);
      const h = Rn[e];
      delete Rn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onLoad && f.onLoad(l);
      }
    }).catch((l) => {
      const h = Rn[e];
      if (h === void 0)
        throw this.manager.itemError(e), l;
      delete Rn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onError && f.onError(l);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class Jx extends Nt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = new sn(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(a) {
      try {
        t(s.parse(JSON.parse(a)));
      } catch (c) {
        i ? i(c) : console.error(c), s.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const i = vs.parse(e[n]);
      t.push(i);
    }
    return t;
  }
}
class jx extends Nt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = [], a = new yl(), c = new sn(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(s.withCredentials);
    let l = 0;
    function h(u) {
      c.load(e[u], function(d) {
        const f = s.parse(d, !0);
        o[u] = {
          width: f.width,
          height: f.height,
          format: f.format,
          mipmaps: f.mipmaps
        }, l += 1, l === 6 && (f.mipmapCount === 1 && (a.minFilter = nt), a.image = o, a.format = f.format, a.needsUpdate = !0, t && t(a));
      }, n, i);
    }
    if (Array.isArray(e))
      for (let u = 0, d = e.length; u < d; ++u)
        h(u);
    else
      c.load(e, function(u) {
        const d = s.parse(u, !0);
        if (d.isCubemap) {
          const f = d.mipmaps.length / d.mipmapCount;
          for (let m = 0; m < f; m++) {
            o[m] = { mipmaps: [] };
            for (let y = 0; y < d.mipmapCount; y++)
              o[m].mipmaps.push(d.mipmaps[m * d.mipmapCount + y]), o[m].format = d.format, o[m].width = d.width, o[m].height = d.height;
          }
          a.image = o;
        } else
          a.image.width = d.width, a.image.height = d.height, a.mipmaps = d.mipmaps;
        d.mipmapCount === 1 && (a.minFilter = nt), a.format = d.format, a.needsUpdate = !0, t && t(a);
      }, n, i);
    return a;
  }
}
class ar extends Nt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, o = Pi.get(e);
    if (o !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(o), s.manager.itemEnd(e);
      }, 0), o;
    const a = nr("img");
    function c() {
      h(), Pi.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function l(u) {
      h(), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      a.removeEventListener("load", c, !1), a.removeEventListener("error", l, !1);
    }
    return a.addEventListener("load", c, !1), a.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(e), a.src = e, a;
  }
}
class Qx extends Nt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new hr();
    s.colorSpace = De;
    const o = new ar(this.manager);
    o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
    let a = 0;
    function c(l) {
      o.load(e[l], function(h) {
        s.images[l] = h, a++, a === 6 && (s.needsUpdate = !0, t && t(s));
      }, void 0, i);
    }
    for (let l = 0; l < e.length; ++l)
      c(l);
    return s;
  }
}
class Xf extends Nt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = new us(), a = new sn(this.manager);
    return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(s.withCredentials), a.load(e, function(c) {
      const l = s.parse(c);
      l && (l.image !== void 0 ? o.image = l.image : l.data !== void 0 && (o.image.width = l.width, o.image.height = l.height, o.image.data = l.data), o.wrapS = l.wrapS !== void 0 ? l.wrapS : bt, o.wrapT = l.wrapT !== void 0 ? l.wrapT : bt, o.magFilter = l.magFilter !== void 0 ? l.magFilter : nt, o.minFilter = l.minFilter !== void 0 ? l.minFilter : nt, o.anisotropy = l.anisotropy !== void 0 ? l.anisotropy : 1, l.colorSpace !== void 0 ? o.colorSpace = l.colorSpace : l.encoding !== void 0 && (o.encoding = l.encoding), l.flipY !== void 0 && (o.flipY = l.flipY), l.format !== void 0 && (o.format = l.format), l.type !== void 0 && (o.type = l.type), l.mipmaps !== void 0 && (o.mipmaps = l.mipmaps, o.minFilter = _n), l.mipmapCount === 1 && (o.minFilter = nt), l.generateMipmaps !== void 0 && (o.generateMipmaps = l.generateMipmaps), o.needsUpdate = !0, t && t(o, l));
    }, n, i), o;
  }
}
class qf extends Nt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new rt(), o = new ar(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      s.image = a, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class ni extends je {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new de(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
class Yf extends ni {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(je.DEFAULT_UP), this.updateMatrix(), this.groundColor = new de(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const wa = /* @__PURE__ */ new Ne(), Qh = /* @__PURE__ */ new R(), $h = /* @__PURE__ */ new R();
class Ll {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Z(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ne(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Fo(), this._frameExtents = new Z(1, 1), this._viewportCount = 1, this._viewports = [
      new et(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Qh.setFromMatrixPosition(e.matrixWorld), t.position.copy(Qh), $h.setFromMatrixPosition(e.target.matrixWorld), t.lookAt($h), t.updateMatrixWorld(), wa.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(wa), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(wa);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class $x extends Ll {
  constructor() {
    super(new Mt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = ms * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class Pl extends ni {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, o = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(je.DEFAULT_UP), this.updateMatrix(), this.target = new je(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = o, this.map = null, this.shadow = new $x();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const eu = /* @__PURE__ */ new Ne(), ks = /* @__PURE__ */ new R(), Ra = /* @__PURE__ */ new R();
class ev extends Ll {
  constructor() {
    super(new Mt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Z(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new et(2, 1, 1, 1),
      // negative X
      new et(0, 1, 1, 1),
      // positive Z
      new et(3, 1, 1, 1),
      // negative Z
      new et(1, 1, 1, 1),
      // positive Y
      new et(3, 0, 1, 1),
      // negative Y
      new et(1, 0, 1, 1)
    ], this._cubeDirections = [
      new R(1, 0, 0),
      new R(-1, 0, 0),
      new R(0, 0, 1),
      new R(0, 0, -1),
      new R(0, 1, 0),
      new R(0, -1, 0)
    ], this._cubeUps = [
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 0, 1),
      new R(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), ks.setFromMatrixPosition(e.matrixWorld), n.position.copy(ks), Ra.copy(n.position), Ra.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Ra), n.updateMatrixWorld(), i.makeTranslation(-ks.x, -ks.y, -ks.z), eu.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(eu);
  }
}
class Il extends ni {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new ev();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class tv extends Ll {
  constructor() {
    super(new ur(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Ul extends ni {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(je.DEFAULT_UP), this.updateMatrix(), this.target = new je(), this.shadow = new tv();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Kf extends ni {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Zf extends ni {
  constructor(e, t, n = 10, i = 10) {
    super(e, t), this.isRectAreaLight = !0, this.type = "RectAreaLight", this.width = n, this.height = i;
  }
  get power() {
    return this.intensity * this.width * this.height * Math.PI;
  }
  set power(e) {
    this.intensity = e / (this.width * this.height * Math.PI);
  }
  copy(e) {
    return super.copy(e), this.width = e.width, this.height = e.height, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.width = this.width, t.object.height = this.height, t;
  }
}
class Jf {
  constructor() {
    this.isSphericalHarmonics3 = !0, this.coefficients = [];
    for (let e = 0; e < 9; e++)
      this.coefficients.push(new R());
  }
  set(e) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].copy(e[t]);
    return this;
  }
  zero() {
    for (let e = 0; e < 9; e++)
      this.coefficients[e].set(0, 0, 0);
    return this;
  }
  // get the radiance in the direction of the normal
  // target is a Vector3
  getAt(e, t) {
    const n = e.x, i = e.y, s = e.z, o = this.coefficients;
    return t.copy(o[0]).multiplyScalar(0.282095), t.addScaledVector(o[1], 0.488603 * i), t.addScaledVector(o[2], 0.488603 * s), t.addScaledVector(o[3], 0.488603 * n), t.addScaledVector(o[4], 1.092548 * (n * i)), t.addScaledVector(o[5], 1.092548 * (i * s)), t.addScaledVector(o[6], 0.315392 * (3 * s * s - 1)), t.addScaledVector(o[7], 1.092548 * (n * s)), t.addScaledVector(o[8], 0.546274 * (n * n - i * i)), t;
  }
  // get the irradiance (radiance convolved with cosine lobe) in the direction of the normal
  // target is a Vector3
  // https://graphics.stanford.edu/papers/envmap/envmap.pdf
  getIrradianceAt(e, t) {
    const n = e.x, i = e.y, s = e.z, o = this.coefficients;
    return t.copy(o[0]).multiplyScalar(0.886227), t.addScaledVector(o[1], 2 * 0.511664 * i), t.addScaledVector(o[2], 2 * 0.511664 * s), t.addScaledVector(o[3], 2 * 0.511664 * n), t.addScaledVector(o[4], 2 * 0.429043 * n * i), t.addScaledVector(o[5], 2 * 0.429043 * i * s), t.addScaledVector(o[6], 0.743125 * s * s - 0.247708), t.addScaledVector(o[7], 2 * 0.429043 * n * s), t.addScaledVector(o[8], 0.429043 * (n * n - i * i)), t;
  }
  add(e) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].add(e.coefficients[t]);
    return this;
  }
  addScaledSH(e, t) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].addScaledVector(e.coefficients[n], t);
    return this;
  }
  scale(e) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].multiplyScalar(e);
    return this;
  }
  lerp(e, t) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].lerp(e.coefficients[n], t);
    return this;
  }
  equals(e) {
    for (let t = 0; t < 9; t++)
      if (!this.coefficients[t].equals(e.coefficients[t]))
        return !1;
    return !0;
  }
  copy(e) {
    return this.set(e.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(e, t = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++)
      n[i].fromArray(e, t + i * 3);
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++)
      n[i].toArray(e, t + i * 3);
    return e;
  }
  // evaluate the basis functions
  // shBasis is an Array[ 9 ]
  static getBasisAt(e, t) {
    const n = e.x, i = e.y, s = e.z;
    t[0] = 0.282095, t[1] = 0.488603 * i, t[2] = 0.488603 * s, t[3] = 0.488603 * n, t[4] = 1.092548 * n * i, t[5] = 1.092548 * i * s, t[6] = 0.315392 * (3 * s * s - 1), t[7] = 1.092548 * n * s, t[8] = 0.546274 * (n * n - i * i);
  }
}
class qo extends ni {
  constructor(e = new Jf(), t = 1) {
    super(void 0, t), this.isLightProbe = !0, this.sh = e;
  }
  copy(e) {
    return super.copy(e), this.sh.copy(e.sh), this;
  }
  fromJSON(e) {
    return this.intensity = e.intensity, this.sh.fromArray(e.sh), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.sh = this.sh.toArray(), t;
  }
}
class Yo extends Nt {
  constructor(e) {
    super(e), this.textures = {};
  }
  load(e, t, n, i) {
    const s = this, o = new sn(s.manager);
    o.setPath(s.path), o.setRequestHeader(s.requestHeader), o.setWithCredentials(s.withCredentials), o.load(e, function(a) {
      try {
        t(s.parse(JSON.parse(a)));
      } catch (c) {
        i ? i(c) : console.error(c), s.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e) {
    const t = this.textures;
    function n(s) {
      return t[s] === void 0 && console.warn("THREE.MaterialLoader: Undefined texture", s), t[s];
    }
    const i = Yo.createMaterialFromType(e.type);
    if (e.uuid !== void 0 && (i.uuid = e.uuid), e.name !== void 0 && (i.name = e.name), e.color !== void 0 && i.color !== void 0 && i.color.setHex(e.color), e.roughness !== void 0 && (i.roughness = e.roughness), e.metalness !== void 0 && (i.metalness = e.metalness), e.sheen !== void 0 && (i.sheen = e.sheen), e.sheenColor !== void 0 && (i.sheenColor = new de().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (i.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && i.emissive !== void 0 && i.emissive.setHex(e.emissive), e.specular !== void 0 && i.specular !== void 0 && i.specular.setHex(e.specular), e.specularIntensity !== void 0 && (i.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && i.specularColor !== void 0 && i.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (i.shininess = e.shininess), e.clearcoat !== void 0 && (i.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = e.clearcoatRoughness), e.iridescence !== void 0 && (i.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (i.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (i.transmission = e.transmission), e.thickness !== void 0 && (i.thickness = e.thickness), e.attenuationDistance !== void 0 && (i.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && i.attenuationColor !== void 0 && i.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (i.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (i.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (i.fog = e.fog), e.flatShading !== void 0 && (i.flatShading = e.flatShading), e.blending !== void 0 && (i.blending = e.blending), e.combine !== void 0 && (i.combine = e.combine), e.side !== void 0 && (i.side = e.side), e.shadowSide !== void 0 && (i.shadowSide = e.shadowSide), e.opacity !== void 0 && (i.opacity = e.opacity), e.transparent !== void 0 && (i.transparent = e.transparent), e.alphaTest !== void 0 && (i.alphaTest = e.alphaTest), e.depthTest !== void 0 && (i.depthTest = e.depthTest), e.depthWrite !== void 0 && (i.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (i.colorWrite = e.colorWrite), e.stencilWrite !== void 0 && (i.stencilWrite = e.stencilWrite), e.stencilWriteMask !== void 0 && (i.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (i.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (i.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (i.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (i.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (i.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (i.stencilZPass = e.stencilZPass), e.wireframe !== void 0 && (i.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (i.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (i.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (i.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (i.rotation = e.rotation), e.linewidth !== 1 && (i.linewidth = e.linewidth), e.dashSize !== void 0 && (i.dashSize = e.dashSize), e.gapSize !== void 0 && (i.gapSize = e.gapSize), e.scale !== void 0 && (i.scale = e.scale), e.polygonOffset !== void 0 && (i.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (i.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (i.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (i.dithering = e.dithering), e.alphaToCoverage !== void 0 && (i.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (i.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (i.forceSinglePass = e.forceSinglePass), e.visible !== void 0 && (i.visible = e.visible), e.toneMapped !== void 0 && (i.toneMapped = e.toneMapped), e.userData !== void 0 && (i.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? i.vertexColors = e.vertexColors > 0 : i.vertexColors = e.vertexColors), e.uniforms !== void 0)
      for (const s in e.uniforms) {
        const o = e.uniforms[s];
        switch (i.uniforms[s] = {}, o.type) {
          case "t":
            i.uniforms[s].value = n(o.value);
            break;
          case "c":
            i.uniforms[s].value = new de().setHex(o.value);
            break;
          case "v2":
            i.uniforms[s].value = new Z().fromArray(o.value);
            break;
          case "v3":
            i.uniforms[s].value = new R().fromArray(o.value);
            break;
          case "v4":
            i.uniforms[s].value = new et().fromArray(o.value);
            break;
          case "m3":
            i.uniforms[s].value = new He().fromArray(o.value);
            break;
          case "m4":
            i.uniforms[s].value = new Ne().fromArray(o.value);
            break;
          default:
            i.uniforms[s].value = o.value;
        }
      }
    if (e.defines !== void 0 && (i.defines = e.defines), e.vertexShader !== void 0 && (i.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (i.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (i.glslVersion = e.glslVersion), e.extensions !== void 0)
      for (const s in e.extensions)
        i.extensions[s] = e.extensions[s];
    if (e.lights !== void 0 && (i.lights = e.lights), e.clipping !== void 0 && (i.clipping = e.clipping), e.size !== void 0 && (i.size = e.size), e.sizeAttenuation !== void 0 && (i.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (i.map = n(e.map)), e.matcap !== void 0 && (i.matcap = n(e.matcap)), e.alphaMap !== void 0 && (i.alphaMap = n(e.alphaMap)), e.bumpMap !== void 0 && (i.bumpMap = n(e.bumpMap)), e.bumpScale !== void 0 && (i.bumpScale = e.bumpScale), e.normalMap !== void 0 && (i.normalMap = n(e.normalMap)), e.normalMapType !== void 0 && (i.normalMapType = e.normalMapType), e.normalScale !== void 0) {
      let s = e.normalScale;
      Array.isArray(s) === !1 && (s = [s, s]), i.normalScale = new Z().fromArray(s);
    }
    return e.displacementMap !== void 0 && (i.displacementMap = n(e.displacementMap)), e.displacementScale !== void 0 && (i.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (i.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (i.roughnessMap = n(e.roughnessMap)), e.metalnessMap !== void 0 && (i.metalnessMap = n(e.metalnessMap)), e.emissiveMap !== void 0 && (i.emissiveMap = n(e.emissiveMap)), e.emissiveIntensity !== void 0 && (i.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (i.specularMap = n(e.specularMap)), e.specularIntensityMap !== void 0 && (i.specularIntensityMap = n(e.specularIntensityMap)), e.specularColorMap !== void 0 && (i.specularColorMap = n(e.specularColorMap)), e.envMap !== void 0 && (i.envMap = n(e.envMap)), e.envMapIntensity !== void 0 && (i.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (i.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (i.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (i.lightMap = n(e.lightMap)), e.lightMapIntensity !== void 0 && (i.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (i.aoMap = n(e.aoMap)), e.aoMapIntensity !== void 0 && (i.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (i.gradientMap = n(e.gradientMap)), e.clearcoatMap !== void 0 && (i.clearcoatMap = n(e.clearcoatMap)), e.clearcoatRoughnessMap !== void 0 && (i.clearcoatRoughnessMap = n(e.clearcoatRoughnessMap)), e.clearcoatNormalMap !== void 0 && (i.clearcoatNormalMap = n(e.clearcoatNormalMap)), e.clearcoatNormalScale !== void 0 && (i.clearcoatNormalScale = new Z().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (i.iridescenceMap = n(e.iridescenceMap)), e.iridescenceThicknessMap !== void 0 && (i.iridescenceThicknessMap = n(e.iridescenceThicknessMap)), e.transmissionMap !== void 0 && (i.transmissionMap = n(e.transmissionMap)), e.thicknessMap !== void 0 && (i.thicknessMap = n(e.thicknessMap)), e.anisotropyMap !== void 0 && (i.anisotropyMap = n(e.anisotropyMap)), e.sheenColorMap !== void 0 && (i.sheenColorMap = n(e.sheenColorMap)), e.sheenRoughnessMap !== void 0 && (i.sheenRoughnessMap = n(e.sheenRoughnessMap)), i;
  }
  setTextures(e) {
    return this.textures = e, this;
  }
  static createMaterialFromType(e) {
    const t = {
      ShadowMaterial: If,
      SpriteMaterial: fl,
      RawShaderMaterial: Uf,
      ShaderMaterial: yn,
      PointsMaterial: Go,
      MeshPhysicalMaterial: vn,
      MeshStandardMaterial: Ar,
      MeshPhongMaterial: Df,
      MeshToonMaterial: Nf,
      MeshNormalMaterial: Of,
      MeshLambertMaterial: Ff,
      MeshDepthMaterial: ul,
      MeshDistanceMaterial: dl,
      MeshBasicMaterial: Gt,
      MeshMatcapMaterial: Bf,
      LineDashedMaterial: zf,
      LineBasicMaterial: wt,
      Material: gt
    };
    return new t[e]();
  }
}
class Ms {
  static decodeText(e) {
    if (typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class jf extends Ve {
  constructor() {
    super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(e) {
    return super.copy(e), this.instanceCount = e.instanceCount, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e;
  }
}
class Qf extends Nt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = new sn(s.manager);
    o.setPath(s.path), o.setRequestHeader(s.requestHeader), o.setWithCredentials(s.withCredentials), o.load(e, function(a) {
      try {
        t(s.parse(JSON.parse(a)));
      } catch (c) {
        i ? i(c) : console.error(c), s.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e) {
    const t = {}, n = {};
    function i(f, m) {
      if (t[m] !== void 0) return t[m];
      const g = f.interleavedBuffers[m], p = s(f, g.buffer), x = os(g.type, p), _ = new dr(x, g.stride);
      return _.uuid = g.uuid, t[m] = _, _;
    }
    function s(f, m) {
      if (n[m] !== void 0) return n[m];
      const g = f.arrayBuffers[m], p = new Uint32Array(g).buffer;
      return n[m] = p, p;
    }
    const o = e.isInstancedBufferGeometry ? new jf() : new Ve(), a = e.data.index;
    if (a !== void 0) {
      const f = os(a.type, a.array);
      o.setIndex(new $e(f, 1));
    }
    const c = e.data.attributes;
    for (const f in c) {
      const m = c[f];
      let y;
      if (m.isInterleavedBufferAttribute) {
        const g = i(e.data, m.data);
        y = new Qn(g, m.itemSize, m.offset, m.normalized);
      } else {
        const g = os(m.type, m.array), p = m.isInstancedBufferAttribute ? _s : $e;
        y = new p(g, m.itemSize, m.normalized);
      }
      m.name !== void 0 && (y.name = m.name), m.usage !== void 0 && y.setUsage(m.usage), m.updateRange !== void 0 && (y.updateRange.offset = m.updateRange.offset, y.updateRange.count = m.updateRange.count), o.setAttribute(f, y);
    }
    const l = e.data.morphAttributes;
    if (l)
      for (const f in l) {
        const m = l[f], y = [];
        for (let g = 0, p = m.length; g < p; g++) {
          const x = m[g];
          let _;
          if (x.isInterleavedBufferAttribute) {
            const v = i(e.data, x.data);
            _ = new Qn(v, x.itemSize, x.offset, x.normalized);
          } else {
            const v = os(x.type, x.array);
            _ = new $e(v, x.itemSize, x.normalized);
          }
          x.name !== void 0 && (_.name = x.name), y.push(_);
        }
        o.morphAttributes[f] = y;
      }
    e.data.morphTargetsRelative && (o.morphTargetsRelative = !0);
    const u = e.data.groups || e.data.drawcalls || e.data.offsets;
    if (u !== void 0)
      for (let f = 0, m = u.length; f !== m; ++f) {
        const y = u[f];
        o.addGroup(y.start, y.count, y.materialIndex);
      }
    const d = e.data.boundingSphere;
    if (d !== void 0) {
      const f = new R();
      d.center !== void 0 && f.fromArray(d.center), o.boundingSphere = new Zt(f, d.radius);
    }
    return e.name && (o.name = e.name), e.userData && (o.userData = e.userData), o;
  }
}
class nv extends Nt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = this.path === "" ? Ms.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || o;
    const a = new sn(this.manager);
    a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(c) {
      let l = null;
      try {
        l = JSON.parse(c);
      } catch (u) {
        i !== void 0 && i(u), console.error("THREE:ObjectLoader: Can't parse " + e + ".", u.message);
        return;
      }
      const h = l.metadata;
      if (h === void 0 || h.type === void 0 || h.type.toLowerCase() === "geometry") {
        i !== void 0 && i(new Error("THREE.ObjectLoader: Can't load " + e)), console.error("THREE.ObjectLoader: Can't load " + e);
        return;
      }
      s.parse(l, t);
    }, n, i);
  }
  async loadAsync(e, t) {
    const n = this, i = this.path === "" ? Ms.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || i;
    const s = new sn(this.manager);
    s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials);
    const o = await s.loadAsync(e, t), a = JSON.parse(o), c = a.metadata;
    if (c === void 0 || c.type === void 0 || c.type.toLowerCase() === "geometry")
      throw new Error("THREE.ObjectLoader: Can't load " + e);
    return await n.parseAsync(a);
  }
  parse(e, t) {
    const n = this.parseAnimations(e.animations), i = this.parseShapes(e.shapes), s = this.parseGeometries(e.geometries, i), o = this.parseImages(e.images, function() {
      t !== void 0 && t(l);
    }), a = this.parseTextures(e.textures, o), c = this.parseMaterials(e.materials, a), l = this.parseObject(e.object, s, c, a, n), h = this.parseSkeletons(e.skeletons, l);
    if (this.bindSkeletons(l, h), t !== void 0) {
      let u = !1;
      for (const d in o)
        if (o[d].data instanceof HTMLImageElement) {
          u = !0;
          break;
        }
      u === !1 && t(l);
    }
    return l;
  }
  async parseAsync(e) {
    const t = this.parseAnimations(e.animations), n = this.parseShapes(e.shapes), i = this.parseGeometries(e.geometries, n), s = await this.parseImagesAsync(e.images), o = this.parseTextures(e.textures, s), a = this.parseMaterials(e.materials, o), c = this.parseObject(e.object, i, a, o, t), l = this.parseSkeletons(e.skeletons, c);
    return this.bindSkeletons(c, l), c;
  }
  parseShapes(e) {
    const t = {};
    if (e !== void 0)
      for (let n = 0, i = e.length; n < i; n++) {
        const s = new wi().fromJSON(e[n]);
        t[s.uuid] = s;
      }
    return t;
  }
  parseSkeletons(e, t) {
    const n = {}, i = {};
    if (t.traverse(function(s) {
      s.isBone && (i[s.uuid] = s);
    }), e !== void 0)
      for (let s = 0, o = e.length; s < o; s++) {
        const a = new fr().fromJSON(e[s], i);
        n[a.uuid] = a;
      }
    return n;
  }
  parseGeometries(e, t) {
    const n = {};
    if (e !== void 0) {
      const i = new Qf();
      for (let s = 0, o = e.length; s < o; s++) {
        let a;
        const c = e[s];
        switch (c.type) {
          case "BufferGeometry":
          case "InstancedBufferGeometry":
            a = i.parse(c);
            break;
          default:
            c.type in jh ? a = jh[c.type].fromJSON(c, t) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`);
        }
        a.uuid = c.uuid, c.name !== void 0 && (a.name = c.name), c.userData !== void 0 && (a.userData = c.userData), n[c.uuid] = a;
      }
    }
    return n;
  }
  parseMaterials(e, t) {
    const n = {}, i = {};
    if (e !== void 0) {
      const s = new Yo();
      s.setTextures(t);
      for (let o = 0, a = e.length; o < a; o++) {
        const c = e[o];
        n[c.uuid] === void 0 && (n[c.uuid] = s.parse(c)), i[c.uuid] = n[c.uuid];
      }
    }
    return i;
  }
  parseAnimations(e) {
    const t = {};
    if (e !== void 0)
      for (let n = 0; n < e.length; n++) {
        const i = e[n], s = vs.parse(i);
        t[s.uuid] = s;
      }
    return t;
  }
  parseImages(e, t) {
    const n = this, i = {};
    let s;
    function o(c) {
      return n.manager.itemStart(c), s.load(c, function() {
        n.manager.itemEnd(c);
      }, void 0, function() {
        n.manager.itemError(c), n.manager.itemEnd(c);
      });
    }
    function a(c) {
      if (typeof c == "string") {
        const l = c, h = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(l) ? l : n.resourcePath + l;
        return o(h);
      } else
        return c.data ? {
          data: os(c.type, c.data),
          width: c.width,
          height: c.height
        } : null;
    }
    if (e !== void 0 && e.length > 0) {
      const c = new Cl(t);
      s = new ar(c), s.setCrossOrigin(this.crossOrigin);
      for (let l = 0, h = e.length; l < h; l++) {
        const u = e[l], d = u.url;
        if (Array.isArray(d)) {
          const f = [];
          for (let m = 0, y = d.length; m < y; m++) {
            const g = d[m], p = a(g);
            p !== null && (p instanceof HTMLImageElement ? f.push(p) : f.push(new us(p.data, p.width, p.height)));
          }
          i[u.uuid] = new Ei(f);
        } else {
          const f = a(u.url);
          i[u.uuid] = new Ei(f);
        }
      }
    }
    return i;
  }
  async parseImagesAsync(e) {
    const t = this, n = {};
    let i;
    async function s(o) {
      if (typeof o == "string") {
        const a = o, c = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(a) ? a : t.resourcePath + a;
        return await i.loadAsync(c);
      } else
        return o.data ? {
          data: os(o.type, o.data),
          width: o.width,
          height: o.height
        } : null;
    }
    if (e !== void 0 && e.length > 0) {
      i = new ar(this.manager), i.setCrossOrigin(this.crossOrigin);
      for (let o = 0, a = e.length; o < a; o++) {
        const c = e[o], l = c.url;
        if (Array.isArray(l)) {
          const h = [];
          for (let u = 0, d = l.length; u < d; u++) {
            const f = l[u], m = await s(f);
            m !== null && (m instanceof HTMLImageElement ? h.push(m) : h.push(new us(m.data, m.width, m.height)));
          }
          n[c.uuid] = new Ei(h);
        } else {
          const h = await s(c.url);
          n[c.uuid] = new Ei(h);
        }
      }
    }
    return n;
  }
  parseTextures(e, t) {
    function n(s, o) {
      return typeof s == "number" ? s : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", s), o[s]);
    }
    const i = {};
    if (e !== void 0)
      for (let s = 0, o = e.length; s < o; s++) {
        const a = e[s];
        a.image === void 0 && console.warn('THREE.ObjectLoader: No "image" specified for', a.uuid), t[a.image] === void 0 && console.warn("THREE.ObjectLoader: Undefined image", a.image);
        const c = t[a.image], l = c.data;
        let h;
        Array.isArray(l) ? (h = new hr(), l.length === 6 && (h.needsUpdate = !0)) : (l && l.data ? h = new us() : h = new rt(), l && (h.needsUpdate = !0)), h.source = c, h.uuid = a.uuid, a.name !== void 0 && (h.name = a.name), a.mapping !== void 0 && (h.mapping = n(a.mapping, iv)), a.channel !== void 0 && (h.channel = a.channel), a.offset !== void 0 && h.offset.fromArray(a.offset), a.repeat !== void 0 && h.repeat.fromArray(a.repeat), a.center !== void 0 && h.center.fromArray(a.center), a.rotation !== void 0 && (h.rotation = a.rotation), a.wrap !== void 0 && (h.wrapS = n(a.wrap[0], tu), h.wrapT = n(a.wrap[1], tu)), a.format !== void 0 && (h.format = a.format), a.internalFormat !== void 0 && (h.internalFormat = a.internalFormat), a.type !== void 0 && (h.type = a.type), a.colorSpace !== void 0 && (h.colorSpace = a.colorSpace), a.encoding !== void 0 && (h.encoding = a.encoding), a.minFilter !== void 0 && (h.minFilter = n(a.minFilter, nu)), a.magFilter !== void 0 && (h.magFilter = n(a.magFilter, nu)), a.anisotropy !== void 0 && (h.anisotropy = a.anisotropy), a.flipY !== void 0 && (h.flipY = a.flipY), a.generateMipmaps !== void 0 && (h.generateMipmaps = a.generateMipmaps), a.premultiplyAlpha !== void 0 && (h.premultiplyAlpha = a.premultiplyAlpha), a.unpackAlignment !== void 0 && (h.unpackAlignment = a.unpackAlignment), a.compareFunction !== void 0 && (h.compareFunction = a.compareFunction), a.userData !== void 0 && (h.userData = a.userData), i[a.uuid] = h;
      }
    return i;
  }
  parseObject(e, t, n, i, s) {
    let o;
    function a(d) {
      return t[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined geometry", d), t[d];
    }
    function c(d) {
      if (d !== void 0) {
        if (Array.isArray(d)) {
          const f = [];
          for (let m = 0, y = d.length; m < y; m++) {
            const g = d[m];
            n[g] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", g), f.push(n[g]);
          }
          return f;
        }
        return n[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", d), n[d];
      }
    }
    function l(d) {
      return i[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined texture", d), i[d];
    }
    let h, u;
    switch (e.type) {
      case "Scene":
        o = new yf(), e.background !== void 0 && (Number.isInteger(e.background) ? o.background = new de(e.background) : o.background = l(e.background)), e.environment !== void 0 && (o.environment = l(e.environment)), e.fog !== void 0 && (e.fog.type === "Fog" ? o.fog = new ko(e.fog.color, e.fog.near, e.fog.far) : e.fog.type === "FogExp2" && (o.fog = new zo(e.fog.color, e.fog.density))), e.backgroundBlurriness !== void 0 && (o.backgroundBlurriness = e.backgroundBlurriness), e.backgroundIntensity !== void 0 && (o.backgroundIntensity = e.backgroundIntensity);
        break;
      case "PerspectiveCamera":
        o = new Mt(e.fov, e.aspect, e.near, e.far), e.focus !== void 0 && (o.focus = e.focus), e.zoom !== void 0 && (o.zoom = e.zoom), e.filmGauge !== void 0 && (o.filmGauge = e.filmGauge), e.filmOffset !== void 0 && (o.filmOffset = e.filmOffset), e.view !== void 0 && (o.view = Object.assign({}, e.view));
        break;
      case "OrthographicCamera":
        o = new ur(e.left, e.right, e.top, e.bottom, e.near, e.far), e.zoom !== void 0 && (o.zoom = e.zoom), e.view !== void 0 && (o.view = Object.assign({}, e.view));
        break;
      case "AmbientLight":
        o = new Kf(e.color, e.intensity);
        break;
      case "DirectionalLight":
        o = new Ul(e.color, e.intensity);
        break;
      case "PointLight":
        o = new Il(e.color, e.intensity, e.distance, e.decay);
        break;
      case "RectAreaLight":
        o = new Zf(e.color, e.intensity, e.width, e.height);
        break;
      case "SpotLight":
        o = new Pl(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
        break;
      case "HemisphereLight":
        o = new Yf(e.color, e.groundColor, e.intensity);
        break;
      case "LightProbe":
        o = new qo().fromJSON(e);
        break;
      case "SkinnedMesh":
        h = a(e.geometry), u = c(e.material), o = new pl(h, u), e.bindMode !== void 0 && (o.bindMode = e.bindMode), e.bindMatrix !== void 0 && o.bindMatrix.fromArray(e.bindMatrix), e.skeleton !== void 0 && (o.skeleton = e.skeleton);
        break;
      case "Mesh":
        h = a(e.geometry), u = c(e.material), o = new St(h, u);
        break;
      case "InstancedMesh":
        h = a(e.geometry), u = c(e.material);
        const d = e.count, f = e.instanceMatrix, m = e.instanceColor;
        o = new ml(h, u, d), o.instanceMatrix = new _s(new Float32Array(f.array), 16), m !== void 0 && (o.instanceColor = new _s(new Float32Array(m.array), m.itemSize));
        break;
      case "LOD":
        o = new Mf();
        break;
      case "Line":
        o = new Dn(a(e.geometry), c(e.material));
        break;
      case "LineLoop":
        o = new gl(a(e.geometry), c(e.material));
        break;
      case "LineSegments":
        o = new on(a(e.geometry), c(e.material));
        break;
      case "PointCloud":
      case "Points":
        o = new _l(a(e.geometry), c(e.material));
        break;
      case "Sprite":
        o = new vf(c(e.material));
        break;
      case "Group":
        o = new Pn();
        break;
      case "Bone":
        o = new Ho();
        break;
      default:
        o = new je();
    }
    if (o.uuid = e.uuid, e.name !== void 0 && (o.name = e.name), e.matrix !== void 0 ? (o.matrix.fromArray(e.matrix), e.matrixAutoUpdate !== void 0 && (o.matrixAutoUpdate = e.matrixAutoUpdate), o.matrixAutoUpdate && o.matrix.decompose(o.position, o.quaternion, o.scale)) : (e.position !== void 0 && o.position.fromArray(e.position), e.rotation !== void 0 && o.rotation.fromArray(e.rotation), e.quaternion !== void 0 && o.quaternion.fromArray(e.quaternion), e.scale !== void 0 && o.scale.fromArray(e.scale)), e.up !== void 0 && o.up.fromArray(e.up), e.castShadow !== void 0 && (o.castShadow = e.castShadow), e.receiveShadow !== void 0 && (o.receiveShadow = e.receiveShadow), e.shadow && (e.shadow.bias !== void 0 && (o.shadow.bias = e.shadow.bias), e.shadow.normalBias !== void 0 && (o.shadow.normalBias = e.shadow.normalBias), e.shadow.radius !== void 0 && (o.shadow.radius = e.shadow.radius), e.shadow.mapSize !== void 0 && o.shadow.mapSize.fromArray(e.shadow.mapSize), e.shadow.camera !== void 0 && (o.shadow.camera = this.parseObject(e.shadow.camera))), e.visible !== void 0 && (o.visible = e.visible), e.frustumCulled !== void 0 && (o.frustumCulled = e.frustumCulled), e.renderOrder !== void 0 && (o.renderOrder = e.renderOrder), e.userData !== void 0 && (o.userData = e.userData), e.layers !== void 0 && (o.layers.mask = e.layers), e.children !== void 0) {
      const d = e.children;
      for (let f = 0; f < d.length; f++)
        o.add(this.parseObject(d[f], t, n, i, s));
    }
    if (e.animations !== void 0) {
      const d = e.animations;
      for (let f = 0; f < d.length; f++) {
        const m = d[f];
        o.animations.push(s[m]);
      }
    }
    if (e.type === "LOD") {
      e.autoUpdate !== void 0 && (o.autoUpdate = e.autoUpdate);
      const d = e.levels;
      for (let f = 0; f < d.length; f++) {
        const m = d[f], y = o.getObjectByProperty("uuid", m.object);
        y !== void 0 && o.addLevel(y, m.distance, m.hysteresis);
      }
    }
    return o;
  }
  bindSkeletons(e, t) {
    Object.keys(t).length !== 0 && e.traverse(function(n) {
      if (n.isSkinnedMesh === !0 && n.skeleton !== void 0) {
        const i = t[n.skeleton];
        i === void 0 ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", n.skeleton) : n.bind(i, n.bindMatrix);
      }
    });
  }
}
const iv = {
  UVMapping: Lo,
  CubeReflectionMapping: Zn,
  CubeRefractionMapping: Jn,
  EquirectangularReflectionMapping: Js,
  EquirectangularRefractionMapping: js,
  CubeUVReflectionMapping: Ss
}, tu = {
  RepeatWrapping: jn,
  ClampToEdgeWrapping: bt,
  MirroredRepeatWrapping: fs
}, nu = {
  NearestFilter: lt,
  NearestMipmapNearestFilter: Qs,
  NearestMipmapLinearFilter: ls,
  LinearFilter: nt,
  LinearMipmapNearestFilter: Po,
  LinearMipmapLinearFilter: _n
};
class $f extends Nt {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, o = Pi.get(e);
    if (o !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(o), s.manager.itemEnd(e);
      }, 0), o;
    const a = {};
    a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader, fetch(e, a).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      Pi.add(e, c), t && t(c), s.manager.itemEnd(e);
    }).catch(function(c) {
      i && i(c), s.manager.itemError(e), s.manager.itemEnd(e);
    }), s.manager.itemStart(e);
  }
}
let lo;
class Dl {
  static getContext() {
    return lo === void 0 && (lo = new (window.AudioContext || window.webkitAudioContext)()), lo;
  }
  static setContext(e) {
    lo = e;
  }
}
class sv extends Nt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = new sn(this.manager);
    o.setResponseType("arraybuffer"), o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(c) {
      try {
        const l = c.slice(0);
        Dl.getContext().decodeAudioData(l, function(u) {
          t(u);
        }, a);
      } catch (l) {
        a(l);
      }
    }, n, i);
    function a(c) {
      i ? i(c) : console.error(c), s.manager.itemError(e);
    }
  }
}
class rv extends qo {
  constructor(e, t, n = 1) {
    super(void 0, n), this.isHemisphereLightProbe = !0;
    const i = new de().set(e), s = new de().set(t), o = new R(i.r, i.g, i.b), a = new R(s.r, s.g, s.b), c = Math.sqrt(Math.PI), l = c * Math.sqrt(0.75);
    this.sh.coefficients[0].copy(o).add(a).multiplyScalar(c), this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(l);
  }
}
class ov extends qo {
  constructor(e, t = 1) {
    super(void 0, t), this.isAmbientLightProbe = !0;
    const n = new de().set(e);
    this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
  }
}
const iu = /* @__PURE__ */ new Ne(), su = /* @__PURE__ */ new Ne(), hi = /* @__PURE__ */ new Ne();
class av {
  constructor() {
    this.type = "StereoCamera", this.aspect = 1, this.eyeSep = 0.064, this.cameraL = new Mt(), this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new Mt(), this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
      focus: null,
      fov: null,
      aspect: null,
      near: null,
      far: null,
      zoom: null,
      eyeSep: null
    };
  }
  update(e) {
    const t = this._cache;
    if (t.focus !== e.focus || t.fov !== e.fov || t.aspect !== e.aspect * this.aspect || t.near !== e.near || t.far !== e.far || t.zoom !== e.zoom || t.eyeSep !== this.eyeSep) {
      t.focus = e.focus, t.fov = e.fov, t.aspect = e.aspect * this.aspect, t.near = e.near, t.far = e.far, t.zoom = e.zoom, t.eyeSep = this.eyeSep, hi.copy(e.projectionMatrix);
      const i = t.eyeSep / 2, s = i * t.near / t.focus, o = t.near * Math.tan(Ai * t.fov * 0.5) / t.zoom;
      let a, c;
      su.elements[12] = -i, iu.elements[12] = i, a = -o * t.aspect + s, c = o * t.aspect + s, hi.elements[0] = 2 * t.near / (c - a), hi.elements[8] = (c + a) / (c - a), this.cameraL.projectionMatrix.copy(hi), a = -o * t.aspect - s, c = o * t.aspect - s, hi.elements[0] = 2 * t.near / (c - a), hi.elements[8] = (c + a) / (c - a), this.cameraR.projectionMatrix.copy(hi);
    }
    this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(su), this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(iu);
  }
}
class ep {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = ru(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = ru();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function ru() {
  return (typeof performance > "u" ? Date : performance).now();
}
const ui = /* @__PURE__ */ new R(), ou = /* @__PURE__ */ new Et(), cv = /* @__PURE__ */ new R(), di = /* @__PURE__ */ new R();
class lv extends je {
  constructor() {
    super(), this.type = "AudioListener", this.context = Dl.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new ep();
  }
  getInput() {
    return this.gain;
  }
  removeFilter() {
    return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
  }
  getFilter() {
    return this.filter;
  }
  setFilter(e) {
    return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
  }
  getMasterVolume() {
    return this.gain.gain.value;
  }
  setMasterVolume(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e);
    const t = this.context.listener, n = this.up;
    if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(ui, ou, cv), di.set(0, 0, -1).applyQuaternion(ou), t.positionX) {
      const i = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime(ui.x, i), t.positionY.linearRampToValueAtTime(ui.y, i), t.positionZ.linearRampToValueAtTime(ui.z, i), t.forwardX.linearRampToValueAtTime(di.x, i), t.forwardY.linearRampToValueAtTime(di.y, i), t.forwardZ.linearRampToValueAtTime(di.z, i), t.upX.linearRampToValueAtTime(n.x, i), t.upY.linearRampToValueAtTime(n.y, i), t.upZ.linearRampToValueAtTime(n.z, i);
    } else
      t.setPosition(ui.x, ui.y, ui.z), t.setOrientation(di.x, di.y, di.z, n.x, n.y, n.z);
  }
}
class tp extends je {
  constructor(e) {
    super(), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [];
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this;
  }
  setMediaElementSource(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this;
  }
  setMediaStreamSource(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this;
  }
  setBuffer(e) {
    return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this;
  }
  play(e = 0) {
    if (this.isPlaying === !0) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + e;
    const t = this.context.createBufferSource();
    return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
  }
  pause() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.isPlaying === !0 && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === !0 && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
  }
  stop() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this._progress = 0, this.source !== null && (this.source.stop(), this.source.onended = null), this.isPlaying = !1, this;
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else
      this.source.connect(this.getOutput());
    return this._connected = !0, this;
  }
  disconnect() {
    if (this.filters.length > 0) {
      this.source.disconnect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].disconnect(this.filters[e]);
      this.filters[this.filters.length - 1].disconnect(this.getOutput());
    } else
      this.source.disconnect(this.getOutput());
    return this._connected = !1, this;
  }
  getFilters() {
    return this.filters;
  }
  setFilters(e) {
    return e || (e = []), this._connected === !0 ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this;
  }
  setDetune(e) {
    if (this.detune = e, this.source.detune !== void 0)
      return this.isPlaying === !0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(e) {
    return this.setFilters(e ? [e] : []);
  }
  setPlaybackRate(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.playbackRate = e, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = !1;
  }
  getLoop() {
    return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
  }
  setLoop(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.loop = e, this.isPlaying === !0 && (this.source.loop = this.loop), this;
  }
  setLoopStart(e) {
    return this.loopStart = e, this;
  }
  setLoopEnd(e) {
    return this.loopEnd = e, this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
}
const fi = /* @__PURE__ */ new R(), au = /* @__PURE__ */ new Et(), hv = /* @__PURE__ */ new R(), pi = /* @__PURE__ */ new R();
class uv extends tp {
  constructor(e) {
    super(e), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
  }
  connect() {
    super.connect(), this.panner.connect(this.gain);
  }
  disconnect() {
    super.disconnect(), this.panner.disconnect(this.gain);
  }
  getOutput() {
    return this.panner;
  }
  getRefDistance() {
    return this.panner.refDistance;
  }
  setRefDistance(e) {
    return this.panner.refDistance = e, this;
  }
  getRolloffFactor() {
    return this.panner.rolloffFactor;
  }
  setRolloffFactor(e) {
    return this.panner.rolloffFactor = e, this;
  }
  getDistanceModel() {
    return this.panner.distanceModel;
  }
  setDistanceModel(e) {
    return this.panner.distanceModel = e, this;
  }
  getMaxDistance() {
    return this.panner.maxDistance;
  }
  setMaxDistance(e) {
    return this.panner.maxDistance = e, this;
  }
  setDirectionalCone(e, t, n) {
    return this.panner.coneInnerAngle = e, this.panner.coneOuterAngle = t, this.panner.coneOuterGain = n, this;
  }
  updateMatrixWorld(e) {
    if (super.updateMatrixWorld(e), this.hasPlaybackControl === !0 && this.isPlaying === !1) return;
    this.matrixWorld.decompose(fi, au, hv), pi.set(0, 0, 1).applyQuaternion(au);
    const t = this.panner;
    if (t.positionX) {
      const n = this.context.currentTime + this.listener.timeDelta;
      t.positionX.linearRampToValueAtTime(fi.x, n), t.positionY.linearRampToValueAtTime(fi.y, n), t.positionZ.linearRampToValueAtTime(fi.z, n), t.orientationX.linearRampToValueAtTime(pi.x, n), t.orientationY.linearRampToValueAtTime(pi.y, n), t.orientationZ.linearRampToValueAtTime(pi.z, n);
    } else
      t.setPosition(fi.x, fi.y, fi.z), t.setOrientation(pi.x, pi.y, pi.z);
  }
}
class dv {
  constructor(e, t = 2048) {
    this.analyser = e.context.createAnalyser(), this.analyser.fftSize = t, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser);
  }
  getFrequencyData() {
    return this.analyser.getByteFrequencyData(this.data), this.data;
  }
  getAverageFrequency() {
    let e = 0;
    const t = this.getFrequencyData();
    for (let n = 0; n < t.length; n++)
      e += t[n];
    return e / t.length;
  }
}
class np {
  constructor(e, t, n) {
    this.binding = e, this.valueSize = n;
    let i, s, o;
    switch (t) {
      case "quaternion":
        i = this._slerp, s = this._slerpAdditive, o = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        i = this._select, s = this._select, o = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
        break;
      default:
        i = this._lerp, s = this._lerpAdditive, o = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
    }
    this._mixBufferRegion = i, this._mixBufferRegionAdditive = s, this._setIdentity = o, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  // accumulate data in the 'incoming' region into 'accu<i>'
  accumulate(e, t) {
    const n = this.buffer, i = this.valueSize, s = e * i + i;
    let o = this.cumulativeWeight;
    if (o === 0) {
      for (let a = 0; a !== i; ++a)
        n[s + a] = n[a];
      o = t;
    } else {
      o += t;
      const a = t / o;
      this._mixBufferRegion(n, s, 0, a, i);
    }
    this.cumulativeWeight = o;
  }
  // accumulate data in the 'incoming' region into 'add'
  accumulateAdditive(e) {
    const t = this.buffer, n = this.valueSize, i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e;
  }
  // apply the state of 'accu<i>' to the binding when accus differ
  apply(e) {
    const t = this.valueSize, n = this.buffer, i = e * t + t, s = this.cumulativeWeight, o = this.cumulativeWeightAdditive, a = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, s < 1) {
      const c = t * this._origIndex;
      this._mixBufferRegion(
        n,
        i,
        c,
        1 - s,
        t
      );
    }
    o > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
    for (let c = t, l = t + t; c !== l; ++c)
      if (n[c] !== n[c + t]) {
        a.setValue(n, i);
        break;
      }
  }
  // remember the state of the bound property and copy it to both accus
  saveOriginalState() {
    const e = this.binding, t = this.buffer, n = this.valueSize, i = n * this._origIndex;
    e.getValue(t, i);
    for (let s = n, o = i; s !== o; ++s)
      t[s] = t[i + s % n];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  // apply the state previously taken via 'saveOriginalState' to the binding
  restoreOriginalState() {
    const e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize, t = e + this.valueSize;
    for (let n = e; n < t; n++)
      this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[t + n] = this.buffer[e + n];
  }
  // mix functions
  _select(e, t, n, i, s) {
    if (i >= 0.5)
      for (let o = 0; o !== s; ++o)
        e[t + o] = e[n + o];
  }
  _slerp(e, t, n, i) {
    Et.slerpFlat(e, t, e, t, e, n, i);
  }
  _slerpAdditive(e, t, n, i, s) {
    const o = this._workIndex * s;
    Et.multiplyQuaternionsFlat(e, o, e, t, e, n), Et.slerpFlat(e, t, e, t, e, o, i);
  }
  _lerp(e, t, n, i, s) {
    const o = 1 - i;
    for (let a = 0; a !== s; ++a) {
      const c = t + a;
      e[c] = e[c] * o + e[n + a] * i;
    }
  }
  _lerpAdditive(e, t, n, i, s) {
    for (let o = 0; o !== s; ++o) {
      const a = t + o;
      e[a] = e[a] + e[n + o] * i;
    }
  }
}
const Nl = "\\[\\]\\.:\\/", fv = new RegExp("[" + Nl + "]", "g"), Ol = "[^" + Nl + "]", pv = "[^" + Nl.replace("\\.", "") + "]", mv = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Ol), gv = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", pv), _v = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Ol), yv = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Ol), xv = new RegExp(
  "^" + mv + gv + _v + yv + "$"
), vv = ["material", "materials", "bones", "map"];
class Mv {
  constructor(e, t, n) {
    const i = n || Je.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class Je {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || Je.parseTrackName(t), this.node = Je.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new Je.Composite(e, t, n) : new Je(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(fv, "");
  }
  static parseTrackName(e) {
    const t = xv.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      vv.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(s) {
        for (let o = 0; o < s.length; o++) {
          const a = s[o];
          if (a.name === t || a.uuid === t)
            return a;
          const c = n(a.children);
          if (c) return c;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  // Direct
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let s = t.propertyIndex;
    if (e || (e = Je.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
      return;
    }
    if (n) {
      let l = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === l) {
              l = h;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (l !== void 0) {
        if (e[l] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[l];
      }
    }
    const o = e[i];
    if (o === void 0) {
      const l = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + i + " but it wasn't found.", e);
      return;
    }
    let a = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
      }
      c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = s;
    } else o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][a];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
Je.Composite = Mv;
Je.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
Je.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
Je.prototype.GetterByBindingType = [
  Je.prototype._getValue_direct,
  Je.prototype._getValue_array,
  Je.prototype._getValue_arrayElement,
  Je.prototype._getValue_toArray
];
Je.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    Je.prototype._setValue_direct,
    Je.prototype._setValue_direct_setNeedsUpdate,
    Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    Je.prototype._setValue_array,
    Je.prototype._setValue_array_setNeedsUpdate,
    Je.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    Je.prototype._setValue_arrayElement,
    Je.prototype._setValue_arrayElement_setNeedsUpdate,
    Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    Je.prototype._setValue_fromArray,
    Je.prototype._setValue_fromArray_setNeedsUpdate,
    Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class Sv {
  constructor() {
    this.isAnimationObjectGroup = !0, this.uuid = Vt(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
    const e = {};
    this._indicesByUUID = e;
    for (let n = 0, i = arguments.length; n !== i; ++n)
      e[arguments[n].uuid] = n;
    this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
    const t = this;
    this.stats = {
      objects: {
        get total() {
          return t._objects.length;
        },
        get inUse() {
          return this.total - t.nCachedObjects_;
        }
      },
      get bindingsPerObject() {
        return t._bindings.length;
      }
    };
  }
  add() {
    const e = this._objects, t = this._indicesByUUID, n = this._paths, i = this._parsedPaths, s = this._bindings, o = s.length;
    let a, c = e.length, l = this.nCachedObjects_;
    for (let h = 0, u = arguments.length; h !== u; ++h) {
      const d = arguments[h], f = d.uuid;
      let m = t[f];
      if (m === void 0) {
        m = c++, t[f] = m, e.push(d);
        for (let y = 0, g = o; y !== g; ++y)
          s[y].push(new Je(d, n[y], i[y]));
      } else if (m < l) {
        a = e[m];
        const y = --l, g = e[y];
        t[g.uuid] = m, e[m] = g, t[f] = y, e[y] = d;
        for (let p = 0, x = o; p !== x; ++p) {
          const _ = s[p], v = _[y];
          let S = _[m];
          _[m] = v, S === void 0 && (S = new Je(d, n[p], i[p])), _[y] = S;
        }
      } else e[m] !== a && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
    }
    this.nCachedObjects_ = l;
  }
  remove() {
    const e = this._objects, t = this._indicesByUUID, n = this._bindings, i = n.length;
    let s = this.nCachedObjects_;
    for (let o = 0, a = arguments.length; o !== a; ++o) {
      const c = arguments[o], l = c.uuid, h = t[l];
      if (h !== void 0 && h >= s) {
        const u = s++, d = e[u];
        t[d.uuid] = h, e[h] = d, t[l] = u, e[u] = c;
        for (let f = 0, m = i; f !== m; ++f) {
          const y = n[f], g = y[u], p = y[h];
          y[h] = g, y[u] = p;
        }
      }
    }
    this.nCachedObjects_ = s;
  }
  // remove & forget
  uncache() {
    const e = this._objects, t = this._indicesByUUID, n = this._bindings, i = n.length;
    let s = this.nCachedObjects_, o = e.length;
    for (let a = 0, c = arguments.length; a !== c; ++a) {
      const l = arguments[a], h = l.uuid, u = t[h];
      if (u !== void 0)
        if (delete t[h], u < s) {
          const d = --s, f = e[d], m = --o, y = e[m];
          t[f.uuid] = u, e[u] = f, t[y.uuid] = d, e[d] = y, e.pop();
          for (let g = 0, p = i; g !== p; ++g) {
            const x = n[g], _ = x[d], v = x[m];
            x[u] = _, x[d] = v, x.pop();
          }
        } else {
          const d = --o, f = e[d];
          d > 0 && (t[f.uuid] = u), e[u] = f, e.pop();
          for (let m = 0, y = i; m !== y; ++m) {
            const g = n[m];
            g[u] = g[d], g.pop();
          }
        }
    }
    this.nCachedObjects_ = s;
  }
  // Internal interface used by befriended PropertyBinding.Composite:
  subscribe_(e, t) {
    const n = this._bindingsIndicesByPath;
    let i = n[e];
    const s = this._bindings;
    if (i !== void 0) return s[i];
    const o = this._paths, a = this._parsedPaths, c = this._objects, l = c.length, h = this.nCachedObjects_, u = new Array(l);
    i = s.length, n[e] = i, o.push(e), a.push(t), s.push(u);
    for (let d = h, f = c.length; d !== f; ++d) {
      const m = c[d];
      u[d] = new Je(m, e, t);
    }
    return u;
  }
  unsubscribe_(e) {
    const t = this._bindingsIndicesByPath, n = t[e];
    if (n !== void 0) {
      const i = this._paths, s = this._parsedPaths, o = this._bindings, a = o.length - 1, c = o[a], l = e[a];
      t[l] = n, o[n] = c, o.pop(), s[n] = s[a], s.pop(), i[n] = i[a], i.pop();
    }
  }
}
class ip {
  constructor(e, t, n = null, i = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
    const s = t.tracks, o = s.length, a = new Array(o), c = {
      endingStart: Mi,
      endingEnd: Mi
    };
    for (let l = 0; l !== o; ++l) {
      const h = s[l].createInterpolant(null);
      a[l] = h, h.settings = c;
    }
    this._interpolantSettings = c, this._interpolants = a, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Bd, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
  }
  // State & Scheduling
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  // return true when play has been called
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return this._startTime = e, this;
  }
  setLoop(e, t) {
    return this.loop = e, this.repetitions = t, this;
  }
  // Weight
  // set the weight stopping any scheduled fading
  // although .enabled = false yields an effective weight of zero, this
  // method does *not* change .enabled, because it would be confusing
  setEffectiveWeight(e) {
    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
  }
  // return the weight considering fading and .enabled
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, n) {
    if (e.fadeOut(t), this.fadeIn(t), n) {
      const i = this._clip.duration, s = e._clip.duration, o = s / i, a = i / s;
      e.warp(1, o, t), this.warp(a, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, n) {
    return e.crossFadeFrom(this, t, n);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  // Time Scale Control
  // set the time scale stopping any scheduled warping
  // although .paused = true yields an effective time scale of zero, this
  // method does *not* change .paused, because it would be confusing
  setEffectiveTimeScale(e) {
    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
  }
  // return the time scale considering warping and .paused
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return this.timeScale = this._clip.duration / e, this.stopWarping();
  }
  syncWith(e) {
    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, n) {
    const i = this._mixer, s = i.time, o = this.timeScale;
    let a = this._timeScaleInterpolant;
    a === null && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
    const c = a.parameterPositions, l = a.sampleValues;
    return c[0] = s, c[1] = s + n, l[0] = e / o, l[1] = t / o, this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  // Object Accessors
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  // Interna
  _update(e, t, n, i) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    const s = this._startTime;
    if (s !== null) {
      const c = (e - s) * n;
      c < 0 || n === 0 ? t = 0 : (this._startTime = null, t = n * c);
    }
    t *= this._updateTimeScale(e);
    const o = this._updateTime(t), a = this._updateWeight(e);
    if (a > 0) {
      const c = this._interpolants, l = this._propertyBindings;
      switch (this.blendMode) {
        case tl:
          for (let h = 0, u = c.length; h !== u; ++h)
            c[h].evaluate(o), l[h].accumulateAdditive(a);
          break;
        case Uo:
        default:
          for (let h = 0, u = c.length; h !== u; ++h)
            c[h].evaluate(o), l[h].accumulate(i, a);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = !1));
      }
    }
    return this._effectiveWeight = t, t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t);
      }
    }
    return this._effectiveTimeScale = t, t;
  }
  _updateTime(e) {
    const t = this._clip.duration, n = this.loop;
    let i = this.time + e, s = this._loopCount;
    const o = n === zd;
    if (e === 0)
      return s === -1 ? i : o && (s & 1) === 1 ? t - i : i;
    if (n === Fd) {
      s === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      e: {
        if (i >= t)
          i = t;
        else if (i < 0)
          i = 0;
        else {
          this.time = i;
          break e;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: e < 0 ? -1 : 1
        });
      }
    } else {
      if (s === -1 && (e >= 0 ? (s = 0, this._setEndings(!0, this.repetitions === 0, o)) : this._setEndings(this.repetitions === 0, !0, o)), i >= t || i < 0) {
        const a = Math.floor(i / t);
        i -= t * a, s += Math.abs(a);
        const c = this.repetitions - s;
        if (c <= 0)
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e > 0 ? 1 : -1
          });
        else {
          if (c === 1) {
            const l = e < 0;
            this._setEndings(l, !l, o);
          } else
            this._setEndings(!1, !1, o);
          this._loopCount = s, this.time = i, this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: a
          });
        }
      } else
        this.time = i;
      if (o && (s & 1) === 1)
        return t - i;
    }
    return i;
  }
  _setEndings(e, t, n) {
    const i = this._interpolantSettings;
    n ? (i.endingStart = Si, i.endingEnd = Si) : (e ? i.endingStart = this.zeroSlopeAtStart ? Si : Mi : i.endingStart = $s, t ? i.endingEnd = this.zeroSlopeAtEnd ? Si : Mi : i.endingEnd = $s);
  }
  _scheduleFading(e, t, n) {
    const i = this._mixer, s = i.time;
    let o = this._weightInterpolant;
    o === null && (o = i._lendControlInterpolant(), this._weightInterpolant = o);
    const a = o.parameterPositions, c = o.sampleValues;
    return a[0] = s, c[0] = t, a[1] = s + e, c[1] = n, this;
  }
}
const Ev = new Float32Array(1);
class bv extends xn {
  constructor(e) {
    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root, i = e._clip.tracks, s = i.length, o = e._propertyBindings, a = e._interpolants, c = n.uuid, l = this._bindingsByRootAndName;
    let h = l[c];
    h === void 0 && (h = {}, l[c] = h);
    for (let u = 0; u !== s; ++u) {
      const d = i[u], f = d.name;
      let m = h[f];
      if (m !== void 0)
        ++m.referenceCount, o[u] = m;
      else {
        if (m = o[u], m !== void 0) {
          m._cacheIndex === null && (++m.referenceCount, this._addInactiveBinding(m, c, f));
          continue;
        }
        const y = t && t._propertyBindings[u].binding.parsedPath;
        m = new np(
          Je.create(n, f, y),
          d.ValueTypeName,
          d.getValueSize()
        ), ++m.referenceCount, this._addInactiveBinding(m, c, f), o[u] = m;
      }
      a[u].resultBuffer = m.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const n = (e._localRoot || this._root).uuid, i = e._clip.uuid, s = this._actionsByClip[i];
        this._bindAction(
          e,
          s && s.knownActions[0]
        ), this._addInactiveAction(e, i, n);
      }
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        --s.useCount === 0 && (s.restoreOriginalState(), this._takeBackBinding(s));
      }
      this._takeBackAction(e);
    }
  }
  // Memory manager
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const e = this;
    this.stats = {
      actions: {
        get total() {
          return e._actions.length;
        },
        get inUse() {
          return e._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return e._bindings.length;
        },
        get inUse() {
          return e._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return e._controlInterpolants.length;
        },
        get inUse() {
          return e._nActiveControlInterpolants;
        }
      }
    };
  }
  // Memory management for AnimationAction objects
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, n) {
    const i = this._actions, s = this._actionsByClip;
    let o = s[t];
    if (o === void 0)
      o = {
        knownActions: [e],
        actionByRoot: {}
      }, e._byClipCacheIndex = 0, s[t] = o;
    else {
      const a = o.knownActions;
      e._byClipCacheIndex = a.length, a.push(e);
    }
    e._cacheIndex = i.length, i.push(e), o.actionByRoot[n] = e;
  }
  _removeInactiveAction(e) {
    const t = this._actions, n = t[t.length - 1], i = e._cacheIndex;
    n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
    const s = e._clip.uuid, o = this._actionsByClip, a = o[s], c = a.knownActions, l = c[c.length - 1], h = e._byClipCacheIndex;
    l._byClipCacheIndex = h, c[h] = l, c.pop(), e._byClipCacheIndex = null;
    const u = a.actionByRoot, d = (e._localRoot || this._root).uuid;
    delete u[d], c.length === 0 && delete o[s], this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const s = t[n];
      --s.referenceCount === 0 && this._removeInactiveBinding(s);
    }
  }
  _lendAction(e) {
    const t = this._actions, n = e._cacheIndex, i = this._nActiveActions++, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _takeBackAction(e) {
    const t = this._actions, n = e._cacheIndex, i = --this._nActiveActions, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  // Memory management for PropertyMixer objects
  _addInactiveBinding(e, t, n) {
    const i = this._bindingsByRootAndName, s = this._bindings;
    let o = i[t];
    o === void 0 && (o = {}, i[t] = o), o[n] = e, e._cacheIndex = s.length, s.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings, n = e.binding, i = n.rootNode.uuid, s = n.path, o = this._bindingsByRootAndName, a = o[i], c = t[t.length - 1], l = e._cacheIndex;
    c._cacheIndex = l, t[l] = c, t.pop(), delete a[s], Object.keys(a).length === 0 && delete o[i];
  }
  _lendBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = this._nActiveBindings++, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _takeBackBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = --this._nActiveBindings, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  // Memory management of Interpolants for weight and time scale
  _lendControlInterpolant() {
    const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
    let n = e[t];
    return n === void 0 && (n = new wl(
      new Float32Array(2),
      new Float32Array(2),
      1,
      Ev
    ), n.__cacheIndex = t, e[t] = n), n;
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants, n = e.__cacheIndex, i = --this._nActiveControlInterpolants, s = t[i];
    e.__cacheIndex = i, t[i] = e, s.__cacheIndex = n, t[n] = s;
  }
  // return an action for a clip optionally using a custom root target
  // object (this method allocates a lot of dynamic memory in case a
  // previously unknown clip/root combination is specified)
  clipAction(e, t, n) {
    const i = t || this._root, s = i.uuid;
    let o = typeof e == "string" ? vs.findByName(i, e) : e;
    const a = o !== null ? o.uuid : e, c = this._actionsByClip[a];
    let l = null;
    if (n === void 0 && (o !== null ? n = o.blendMode : n = Uo), c !== void 0) {
      const u = c.actionByRoot[s];
      if (u !== void 0 && u.blendMode === n)
        return u;
      l = c.knownActions[0], o === null && (o = l._clip);
    }
    if (o === null) return null;
    const h = new ip(this, o, t, n);
    return this._bindAction(h, l), this._addInactiveAction(h, a, s), h;
  }
  // get an existing action
  existingAction(e, t) {
    const n = t || this._root, i = n.uuid, s = typeof e == "string" ? vs.findByName(n, e) : e, o = s ? s.uuid : e, a = this._actionsByClip[o];
    return a !== void 0 && a.actionByRoot[i] || null;
  }
  // deactivates all previously scheduled actions
  stopAllAction() {
    const e = this._actions, t = this._nActiveActions;
    for (let n = t - 1; n >= 0; --n)
      e[n].stop();
    return this;
  }
  // advance the time and update apply the animation
  update(e) {
    e *= this.timeScale;
    const t = this._actions, n = this._nActiveActions, i = this.time += e, s = Math.sign(e), o = this._accuIndex ^= 1;
    for (let l = 0; l !== n; ++l)
      t[l]._update(i, e, s, o);
    const a = this._bindings, c = this._nActiveBindings;
    for (let l = 0; l !== c; ++l)
      a[l].apply(o);
    return this;
  }
  // Allows you to seek to a specific time in an animation.
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++)
      this._actions[t].time = 0;
    return this.update(e);
  }
  // return this mixer's root target object
  getRoot() {
    return this._root;
  }
  // free all resources specific to a particular clip
  uncacheClip(e) {
    const t = this._actions, n = e.uuid, i = this._actionsByClip, s = i[n];
    if (s !== void 0) {
      const o = s.knownActions;
      for (let a = 0, c = o.length; a !== c; ++a) {
        const l = o[a];
        this._deactivateAction(l);
        const h = l._cacheIndex, u = t[t.length - 1];
        l._cacheIndex = null, l._byClipCacheIndex = null, u._cacheIndex = h, t[h] = u, t.pop(), this._removeInactiveBindingsForAction(l);
      }
      delete i[n];
    }
  }
  // free all resources specific to a particular root target object
  uncacheRoot(e) {
    const t = e.uuid, n = this._actionsByClip;
    for (const o in n) {
      const a = n[o].actionByRoot, c = a[t];
      c !== void 0 && (this._deactivateAction(c), this._removeInactiveAction(c));
    }
    const i = this._bindingsByRootAndName, s = i[t];
    if (s !== void 0)
      for (const o in s) {
        const a = s[o];
        a.restoreOriginalState(), this._removeInactiveBinding(a);
      }
  }
  // remove a targeted clip from the cache
  uncacheAction(e, t) {
    const n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
class Fl {
  constructor(e) {
    this.value = e;
  }
  clone() {
    return new Fl(this.value.clone === void 0 ? this.value : this.value.clone());
  }
}
let Tv = 0;
class Av extends xn {
  constructor() {
    super(), this.isUniformsGroup = !0, Object.defineProperty(this, "id", { value: Tv++ }), this.name = "", this.usage = er, this.uniforms = [];
  }
  add(e) {
    return this.uniforms.push(e), this;
  }
  remove(e) {
    const t = this.uniforms.indexOf(e);
    return t !== -1 && this.uniforms.splice(t, 1), this;
  }
  setName(e) {
    return this.name = e, this;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this;
  }
  copy(e) {
    this.name = e.name, this.usage = e.usage;
    const t = e.uniforms;
    this.uniforms.length = 0;
    for (let n = 0, i = t.length; n < i; n++)
      this.uniforms.push(t[n].clone());
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class wv extends dr {
  constructor(e, t, n = 1) {
    super(e, t), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = n;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  clone(e) {
    const t = super.clone(e);
    return t.meshPerAttribute = this.meshPerAttribute, t;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t;
  }
}
class Rv {
  constructor(e, t, n, i, s) {
    this.isGLBufferAttribute = !0, this.name = "", this.buffer = e, this.type = t, this.itemSize = n, this.elementSize = i, this.count = s, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setBuffer(e) {
    return this.buffer = e, this;
  }
  setType(e, t) {
    return this.type = e, this.elementSize = t, this;
  }
  setItemSize(e) {
    return this.itemSize = e, this;
  }
  setCount(e) {
    return this.count = e, this;
  }
}
class Cv {
  constructor(e, t, n = 0, i = 1 / 0) {
    this.ray = new Es(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new No(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  intersectObject(e, t = !0, n = []) {
    return Gc(e, this, n, t), n.sort(cu), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, s = e.length; i < s; i++)
      Gc(e[i], this, n, t);
    return n.sort(cu), n;
  }
}
function cu(r, e) {
  return r.distance - e.distance;
}
function Gc(r, e, t, n) {
  if (r.layers.test(e.layers) && r.raycast(e, t), n === !0) {
    const i = r.children;
    for (let s = 0, o = i.length; s < o; s++)
      Gc(i[s], e, t, !0);
  }
}
class Vc {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(ht(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Lv {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.theta = t, this.y = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.theta = t, this.y = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.theta = e.theta, this.y = e.y, this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + n * n), this.theta = Math.atan2(e, n), this.y = t, this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const lu = /* @__PURE__ */ new Z();
class Pv {
  constructor(e = new Z(1 / 0, 1 / 0), t = new Z(-1 / 0, -1 / 0)) {
    this.isBox2 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = lu.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y);
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, lu).distanceTo(e);
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const hu = /* @__PURE__ */ new R(), ho = /* @__PURE__ */ new R();
class Iv {
  constructor(e = new R(), t = new R()) {
    this.start = e, this.end = t;
  }
  set(e, t) {
    return this.start.copy(e), this.end.copy(t), this;
  }
  copy(e) {
    return this.start.copy(e.start), this.end.copy(e.end), this;
  }
  getCenter(e) {
    return e.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  delta(e) {
    return e.subVectors(this.end, this.start);
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(e, t) {
    return this.delta(t).multiplyScalar(e).add(this.start);
  }
  closestPointToPointParameter(e, t) {
    hu.subVectors(e, this.start), ho.subVectors(this.end, this.start);
    const n = ho.dot(ho);
    let s = ho.dot(hu) / n;
    return t && (s = ht(s, 0, 1)), s;
  }
  closestPointToPoint(e, t, n) {
    const i = this.closestPointToPointParameter(e, t);
    return this.delta(n).multiplyScalar(i).add(this.start);
  }
  applyMatrix4(e) {
    return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
  }
  equals(e) {
    return e.start.equals(this.start) && e.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const uu = /* @__PURE__ */ new R();
class Uv extends je {
  constructor(e, t) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = t, this.type = "SpotLightHelper";
    const n = new Ve(), i = [
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      -1,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      -1,
      1
    ];
    for (let o = 0, a = 1, c = 32; o < c; o++, a++) {
      const l = o / c * Math.PI * 2, h = a / c * Math.PI * 2;
      i.push(
        Math.cos(l),
        Math.sin(l),
        1,
        Math.cos(h),
        Math.sin(h),
        1
      );
    }
    n.setAttribute("position", new be(i, 3));
    const s = new wt({ fog: !1, toneMapped: !1 });
    this.cone = new on(n, s), this.add(this.cone), this.update();
  }
  dispose() {
    this.cone.geometry.dispose(), this.cone.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1);
    const e = this.light.distance ? this.light.distance : 1e3, t = e * Math.tan(this.light.angle);
    this.cone.scale.set(t, t, e), uu.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(uu), this.color !== void 0 ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
  }
}
const kn = /* @__PURE__ */ new R(), uo = /* @__PURE__ */ new Ne(), Ca = /* @__PURE__ */ new Ne();
class Dv extends on {
  constructor(e) {
    const t = sp(e), n = new Ve(), i = [], s = [], o = new de(0, 0, 1), a = new de(0, 1, 0);
    for (let l = 0; l < t.length; l++) {
      const h = t[l];
      h.parent && h.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), s.push(o.r, o.g, o.b), s.push(a.r, a.g, a.b));
    }
    n.setAttribute("position", new be(i, 3)), n.setAttribute("color", new be(s, 3));
    const c = new wt({ vertexColors: !0, depthTest: !1, depthWrite: !1, toneMapped: !1, transparent: !0 });
    super(n, c), this.isSkeletonHelper = !0, this.type = "SkeletonHelper", this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1;
  }
  updateMatrixWorld(e) {
    const t = this.bones, n = this.geometry, i = n.getAttribute("position");
    Ca.copy(this.root.matrixWorld).invert();
    for (let s = 0, o = 0; s < t.length; s++) {
      const a = t[s];
      a.parent && a.parent.isBone && (uo.multiplyMatrices(Ca, a.matrixWorld), kn.setFromMatrixPosition(uo), i.setXYZ(o, kn.x, kn.y, kn.z), uo.multiplyMatrices(Ca, a.parent.matrixWorld), kn.setFromMatrixPosition(uo), i.setXYZ(o + 1, kn.x, kn.y, kn.z), o += 2);
    }
    n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(e);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function sp(r) {
  const e = [];
  r.isBone === !0 && e.push(r);
  for (let t = 0; t < r.children.length; t++)
    e.push.apply(e, sp(r.children[t]));
  return e;
}
class Nv extends St {
  constructor(e, t, n) {
    const i = new Rs(t, 4, 2), s = new Gt({ wireframe: !0, fog: !1, toneMapped: !1 });
    super(i, s), this.light = e, this.color = n, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.color !== void 0 ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
  }
}
const Ov = /* @__PURE__ */ new R(), du = /* @__PURE__ */ new de(), fu = /* @__PURE__ */ new de();
class Fv extends je {
  constructor(e, t, n) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "HemisphereLightHelper";
    const i = new ws(t);
    i.rotateY(Math.PI * 0.5), this.material = new Gt({ wireframe: !0, fog: !1, toneMapped: !1 }), this.color === void 0 && (this.material.vertexColors = !0);
    const s = i.getAttribute("position"), o = new Float32Array(s.count * 3);
    i.setAttribute("color", new $e(o, 3)), this.add(new St(i, this.material)), this.update();
  }
  dispose() {
    this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
  update() {
    const e = this.children[0];
    if (this.color !== void 0)
      this.material.color.set(this.color);
    else {
      const t = e.geometry.getAttribute("color");
      du.copy(this.light.color), fu.copy(this.light.groundColor);
      for (let n = 0, i = t.count; n < i; n++) {
        const s = n < i / 2 ? du : fu;
        t.setXYZ(n, s.r, s.g, s.b);
      }
      t.needsUpdate = !0;
    }
    this.light.updateWorldMatrix(!0, !1), e.lookAt(Ov.setFromMatrixPosition(this.light.matrixWorld).negate());
  }
}
class Bv extends on {
  constructor(e = 10, t = 10, n = 4473924, i = 8947848) {
    n = new de(n), i = new de(i);
    const s = t / 2, o = e / t, a = e / 2, c = [], l = [];
    for (let d = 0, f = 0, m = -a; d <= t; d++, m += o) {
      c.push(-a, 0, m, a, 0, m), c.push(m, 0, -a, m, 0, a);
      const y = d === s ? n : i;
      y.toArray(l, f), f += 3, y.toArray(l, f), f += 3, y.toArray(l, f), f += 3, y.toArray(l, f), f += 3;
    }
    const h = new Ve();
    h.setAttribute("position", new be(c, 3)), h.setAttribute("color", new be(l, 3));
    const u = new wt({ vertexColors: !0, toneMapped: !1 });
    super(h, u), this.type = "GridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class zv extends on {
  constructor(e = 10, t = 16, n = 8, i = 64, s = 4473924, o = 8947848) {
    s = new de(s), o = new de(o);
    const a = [], c = [];
    if (t > 1)
      for (let u = 0; u < t; u++) {
        const d = u / t * (Math.PI * 2), f = Math.sin(d) * e, m = Math.cos(d) * e;
        a.push(0, 0, 0), a.push(f, 0, m);
        const y = u & 1 ? s : o;
        c.push(y.r, y.g, y.b), c.push(y.r, y.g, y.b);
      }
    for (let u = 0; u < n; u++) {
      const d = u & 1 ? s : o, f = e - e / n * u;
      for (let m = 0; m < i; m++) {
        let y = m / i * (Math.PI * 2), g = Math.sin(y) * f, p = Math.cos(y) * f;
        a.push(g, 0, p), c.push(d.r, d.g, d.b), y = (m + 1) / i * (Math.PI * 2), g = Math.sin(y) * f, p = Math.cos(y) * f, a.push(g, 0, p), c.push(d.r, d.g, d.b);
      }
    }
    const l = new Ve();
    l.setAttribute("position", new be(a, 3)), l.setAttribute("color", new be(c, 3));
    const h = new wt({ vertexColors: !0, toneMapped: !1 });
    super(l, h), this.type = "PolarGridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
const pu = /* @__PURE__ */ new R(), fo = /* @__PURE__ */ new R(), mu = /* @__PURE__ */ new R();
class kv extends je {
  constructor(e, t, n) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "DirectionalLightHelper", t === void 0 && (t = 1);
    let i = new Ve();
    i.setAttribute("position", new be([
      -t,
      t,
      0,
      t,
      t,
      0,
      t,
      -t,
      0,
      -t,
      -t,
      0,
      -t,
      t,
      0
    ], 3));
    const s = new wt({ fog: !1, toneMapped: !1 });
    this.lightPlane = new Dn(i, s), this.add(this.lightPlane), i = new Ve(), i.setAttribute("position", new be([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Dn(i, s), this.add(this.targetLine), this.update();
  }
  dispose() {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1), pu.setFromMatrixPosition(this.light.matrixWorld), fo.setFromMatrixPosition(this.light.target.matrixWorld), mu.subVectors(fo, pu), this.lightPlane.lookAt(fo), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(fo), this.targetLine.scale.z = mu.length();
  }
}
const po = /* @__PURE__ */ new R(), ct = /* @__PURE__ */ new Oo();
class Hv extends on {
  constructor(e) {
    const t = new Ve(), n = new wt({ color: 16777215, vertexColors: !0, toneMapped: !1 }), i = [], s = [], o = {};
    a("n1", "n2"), a("n2", "n4"), a("n4", "n3"), a("n3", "n1"), a("f1", "f2"), a("f2", "f4"), a("f4", "f3"), a("f3", "f1"), a("n1", "f1"), a("n2", "f2"), a("n3", "f3"), a("n4", "f4"), a("p", "n1"), a("p", "n2"), a("p", "n3"), a("p", "n4"), a("u1", "u2"), a("u2", "u3"), a("u3", "u1"), a("c", "t"), a("p", "c"), a("cn1", "cn2"), a("cn3", "cn4"), a("cf1", "cf2"), a("cf3", "cf4");
    function a(m, y) {
      c(m), c(y);
    }
    function c(m) {
      i.push(0, 0, 0), s.push(0, 0, 0), o[m] === void 0 && (o[m] = []), o[m].push(i.length / 3 - 1);
    }
    t.setAttribute("position", new be(i, 3)), t.setAttribute("color", new be(s, 3)), super(t, n), this.type = "CameraHelper", this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = o, this.update();
    const l = new de(16755200), h = new de(16711680), u = new de(43775), d = new de(16777215), f = new de(3355443);
    this.setColors(l, h, u, d, f);
  }
  setColors(e, t, n, i, s) {
    const a = this.geometry.getAttribute("color");
    a.setXYZ(0, e.r, e.g, e.b), a.setXYZ(1, e.r, e.g, e.b), a.setXYZ(2, e.r, e.g, e.b), a.setXYZ(3, e.r, e.g, e.b), a.setXYZ(4, e.r, e.g, e.b), a.setXYZ(5, e.r, e.g, e.b), a.setXYZ(6, e.r, e.g, e.b), a.setXYZ(7, e.r, e.g, e.b), a.setXYZ(8, e.r, e.g, e.b), a.setXYZ(9, e.r, e.g, e.b), a.setXYZ(10, e.r, e.g, e.b), a.setXYZ(11, e.r, e.g, e.b), a.setXYZ(12, e.r, e.g, e.b), a.setXYZ(13, e.r, e.g, e.b), a.setXYZ(14, e.r, e.g, e.b), a.setXYZ(15, e.r, e.g, e.b), a.setXYZ(16, e.r, e.g, e.b), a.setXYZ(17, e.r, e.g, e.b), a.setXYZ(18, e.r, e.g, e.b), a.setXYZ(19, e.r, e.g, e.b), a.setXYZ(20, e.r, e.g, e.b), a.setXYZ(21, e.r, e.g, e.b), a.setXYZ(22, e.r, e.g, e.b), a.setXYZ(23, e.r, e.g, e.b), a.setXYZ(24, t.r, t.g, t.b), a.setXYZ(25, t.r, t.g, t.b), a.setXYZ(26, t.r, t.g, t.b), a.setXYZ(27, t.r, t.g, t.b), a.setXYZ(28, t.r, t.g, t.b), a.setXYZ(29, t.r, t.g, t.b), a.setXYZ(30, t.r, t.g, t.b), a.setXYZ(31, t.r, t.g, t.b), a.setXYZ(32, n.r, n.g, n.b), a.setXYZ(33, n.r, n.g, n.b), a.setXYZ(34, n.r, n.g, n.b), a.setXYZ(35, n.r, n.g, n.b), a.setXYZ(36, n.r, n.g, n.b), a.setXYZ(37, n.r, n.g, n.b), a.setXYZ(38, i.r, i.g, i.b), a.setXYZ(39, i.r, i.g, i.b), a.setXYZ(40, s.r, s.g, s.b), a.setXYZ(41, s.r, s.g, s.b), a.setXYZ(42, s.r, s.g, s.b), a.setXYZ(43, s.r, s.g, s.b), a.setXYZ(44, s.r, s.g, s.b), a.setXYZ(45, s.r, s.g, s.b), a.setXYZ(46, s.r, s.g, s.b), a.setXYZ(47, s.r, s.g, s.b), a.setXYZ(48, s.r, s.g, s.b), a.setXYZ(49, s.r, s.g, s.b), a.needsUpdate = !0;
  }
  update() {
    const e = this.geometry, t = this.pointMap, n = 1, i = 1;
    ct.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), dt("c", t, e, ct, 0, 0, -1), dt("t", t, e, ct, 0, 0, 1), dt("n1", t, e, ct, -n, -i, -1), dt("n2", t, e, ct, n, -i, -1), dt("n3", t, e, ct, -n, i, -1), dt("n4", t, e, ct, n, i, -1), dt("f1", t, e, ct, -n, -i, 1), dt("f2", t, e, ct, n, -i, 1), dt("f3", t, e, ct, -n, i, 1), dt("f4", t, e, ct, n, i, 1), dt("u1", t, e, ct, n * 0.7, i * 1.1, -1), dt("u2", t, e, ct, -n * 0.7, i * 1.1, -1), dt("u3", t, e, ct, 0, i * 2, -1), dt("cf1", t, e, ct, -n, 0, 1), dt("cf2", t, e, ct, n, 0, 1), dt("cf3", t, e, ct, 0, -i, 1), dt("cf4", t, e, ct, 0, i, 1), dt("cn1", t, e, ct, -n, 0, -1), dt("cn2", t, e, ct, n, 0, -1), dt("cn3", t, e, ct, 0, -i, -1), dt("cn4", t, e, ct, 0, i, -1), e.getAttribute("position").needsUpdate = !0;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function dt(r, e, t, n, i, s, o) {
  po.set(i, s, o).unproject(n);
  const a = e[r];
  if (a !== void 0) {
    const c = t.getAttribute("position");
    for (let l = 0, h = a.length; l < h; l++)
      c.setXYZ(a[l], po.x, po.y, po.z);
  }
}
const mo = /* @__PURE__ */ new rn();
class Gv extends on {
  constructor(e, t = 16776960) {
    const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), i = new Float32Array(24), s = new Ve();
    s.setIndex(new $e(n, 1)), s.setAttribute("position", new $e(i, 3)), super(s, new wt({ color: t, toneMapped: !1 })), this.object = e, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update();
  }
  update(e) {
    if (e !== void 0 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), this.object !== void 0 && mo.setFromObject(this.object), mo.isEmpty()) return;
    const t = mo.min, n = mo.max, i = this.geometry.attributes.position, s = i.array;
    s[0] = n.x, s[1] = n.y, s[2] = n.z, s[3] = t.x, s[4] = n.y, s[5] = n.z, s[6] = t.x, s[7] = t.y, s[8] = n.z, s[9] = n.x, s[10] = t.y, s[11] = n.z, s[12] = n.x, s[13] = n.y, s[14] = t.z, s[15] = t.x, s[16] = n.y, s[17] = t.z, s[18] = t.x, s[19] = t.y, s[20] = t.z, s[21] = n.x, s[22] = t.y, s[23] = t.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere();
  }
  setFromObject(e) {
    return this.object = e, this.update(), this;
  }
  copy(e, t) {
    return super.copy(e, t), this.object = e.object, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Vv extends on {
  constructor(e, t = 16776960) {
    const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), i = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], s = new Ve();
    s.setIndex(new $e(n, 1)), s.setAttribute("position", new be(i, 3)), super(s, new wt({ color: t, toneMapped: !1 })), this.box = e, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
  }
  updateMatrixWorld(e) {
    const t = this.box;
    t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(0.5), super.updateMatrixWorld(e));
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Wv extends Dn {
  constructor(e, t = 1, n = 16776960) {
    const i = n, s = [1, -1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], o = new Ve();
    o.setAttribute("position", new be(s, 3)), o.computeBoundingSphere(), super(o, new wt({ color: i, toneMapped: !1 })), this.type = "PlaneHelper", this.plane = e, this.size = t;
    const a = [1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], c = new Ve();
    c.setAttribute("position", new be(a, 3)), c.computeBoundingSphere(), this.add(new St(c, new Gt({ color: i, opacity: 0.2, transparent: !0, depthWrite: !1, toneMapped: !1 })));
  }
  updateMatrixWorld(e) {
    this.position.set(0, 0, 0), this.scale.set(0.5 * this.size, 0.5 * this.size, 1), this.lookAt(this.plane.normal), this.translateZ(-this.plane.constant), super.updateMatrixWorld(e);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
}
const gu = /* @__PURE__ */ new R();
let go, La;
class Xv extends je {
  // dir is assumed to be normalized
  constructor(e = new R(0, 0, 1), t = new R(0, 0, 0), n = 1, i = 16776960, s = n * 0.2, o = s * 0.2) {
    super(), this.type = "ArrowHelper", go === void 0 && (go = new Ve(), go.setAttribute("position", new be([0, 0, 0, 0, 1, 0], 3)), La = new Ii(0, 0.5, 1, 5, 1), La.translate(0, -0.5, 0)), this.position.copy(t), this.line = new Dn(go, new wt({ color: i, toneMapped: !1 })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new St(La, new Gt({ color: i, toneMapped: !1 })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(n, s, o);
  }
  setDirection(e) {
    if (e.y > 0.99999)
      this.quaternion.set(0, 0, 0, 1);
    else if (e.y < -0.99999)
      this.quaternion.set(1, 0, 0, 0);
    else {
      gu.set(e.z, 0, -e.x).normalize();
      const t = Math.acos(e.y);
      this.quaternion.setFromAxisAngle(gu, t);
    }
  }
  setLength(e, t = e * 0.2, n = t * 0.2) {
    this.line.scale.set(1, Math.max(1e-4, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(n, t, n), this.cone.position.y = e, this.cone.updateMatrix();
  }
  setColor(e) {
    this.line.material.color.set(e), this.cone.material.color.set(e);
  }
  copy(e) {
    return super.copy(e, !1), this.line.copy(e.line), this.cone.copy(e.cone), this;
  }
  dispose() {
    this.line.geometry.dispose(), this.line.material.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose();
  }
}
class qv extends on {
  constructor(e = 1) {
    const t = [
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      0,
      0,
      e
    ], n = [
      1,
      0,
      0,
      1,
      0.6,
      0,
      0,
      1,
      0,
      0.6,
      1,
      0,
      0,
      0,
      1,
      0,
      0.6,
      1
    ], i = new Ve();
    i.setAttribute("position", new be(t, 3)), i.setAttribute("color", new be(n, 3));
    const s = new wt({ vertexColors: !0, toneMapped: !1 });
    super(i, s), this.type = "AxesHelper";
  }
  setColors(e, t, n) {
    const i = new de(), s = this.geometry.attributes.color.array;
    return i.set(e), i.toArray(s, 0), i.toArray(s, 3), i.set(t), i.toArray(s, 6), i.toArray(s, 9), i.set(n), i.toArray(s, 12), i.toArray(s, 15), this.geometry.attributes.color.needsUpdate = !0, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Yv {
  constructor() {
    this.type = "ShapePath", this.color = new de(), this.subPaths = [], this.currentPath = null;
  }
  moveTo(e, t) {
    return this.currentPath = new ir(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
  }
  lineTo(e, t) {
    return this.currentPath.lineTo(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    return this.currentPath.quadraticCurveTo(e, t, n, i), this;
  }
  bezierCurveTo(e, t, n, i, s, o) {
    return this.currentPath.bezierCurveTo(e, t, n, i, s, o), this;
  }
  splineThru(e) {
    return this.currentPath.splineThru(e), this;
  }
  toShapes(e) {
    function t(p) {
      const x = [];
      for (let _ = 0, v = p.length; _ < v; _++) {
        const S = p[_], E = new wi();
        E.curves = S.curves, x.push(E);
      }
      return x;
    }
    function n(p, x) {
      const _ = x.length;
      let v = !1;
      for (let S = _ - 1, E = 0; E < _; S = E++) {
        let T = x[S], A = x[E], M = A.x - T.x, b = A.y - T.y;
        if (Math.abs(b) > Number.EPSILON) {
          if (b < 0 && (T = x[E], M = -M, A = x[S], b = -b), p.y < T.y || p.y > A.y) continue;
          if (p.y === T.y) {
            if (p.x === T.x) return !0;
          } else {
            const P = b * (p.x - T.x) - M * (p.y - T.y);
            if (P === 0) return !0;
            if (P < 0) continue;
            v = !v;
          }
        } else {
          if (p.y !== T.y) continue;
          if (A.x <= p.x && p.x <= T.x || T.x <= p.x && p.x <= A.x) return !0;
        }
      }
      return v;
    }
    const i = mn.isClockWise, s = this.subPaths;
    if (s.length === 0) return [];
    let o, a, c;
    const l = [];
    if (s.length === 1)
      return a = s[0], c = new wi(), c.curves = a.curves, l.push(c), l;
    let h = !i(s[0].getPoints());
    h = e ? !h : h;
    const u = [], d = [];
    let f = [], m = 0, y;
    d[m] = void 0, f[m] = [];
    for (let p = 0, x = s.length; p < x; p++)
      a = s[p], y = a.getPoints(), o = i(y), o = e ? !o : o, o ? (!h && d[m] && m++, d[m] = { s: new wi(), p: y }, d[m].s.curves = a.curves, h && m++, f[m] = []) : f[m].push({ h: a, p: y[0] });
    if (!d[0]) return t(s);
    if (d.length > 1) {
      let p = !1, x = 0;
      for (let _ = 0, v = d.length; _ < v; _++)
        u[_] = [];
      for (let _ = 0, v = d.length; _ < v; _++) {
        const S = f[_];
        for (let E = 0; E < S.length; E++) {
          const T = S[E];
          let A = !0;
          for (let M = 0; M < d.length; M++)
            n(T.p, d[M].p) && (_ !== M && x++, A ? (A = !1, u[M].push(T)) : p = !0);
          A && u[_].push(T);
        }
      }
      x > 0 && p === !1 && (f = u);
    }
    let g;
    for (let p = 0, x = d.length; p < x; p++) {
      c = d[p].s, l.push(c), g = f[p];
      for (let _ = 0, v = g.length; _ < v; _++)
        c.holes.push(g[_].h);
    }
    return l;
  }
}
class Kv extends ti {
  // @deprecated, r144
  constructor(e, t, n, i, s, o) {
    console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."), super(e, t, n, i, s, o);
  }
}
class Zv extends pr {
  // @deprecated, r144
  constructor(e, t, n, i) {
    console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."), super(e, t, n, i);
  }
}
class Jv extends mr {
  // @deprecated, r144
  constructor(e, t, n, i) {
    console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."), super(e, t, n, i);
  }
}
class jv extends gr {
  // @deprecated, r144
  constructor(e, t, n, i, s, o, a) {
    console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."), super(e, t, n, i, s, o, a);
  }
}
class Qv extends Ii {
  // @deprecated, r144
  constructor(e, t, n, i, s, o, a, c) {
    console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."), super(e, t, n, i, s, o, a, c);
  }
}
class $v extends _r {
  // @deprecated, r144
  constructor(e, t) {
    console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."), super(e, t);
  }
}
class eM extends yr {
  // @deprecated, r144
  constructor(e, t) {
    console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."), super(e, t);
  }
}
class tM extends xr {
  // @deprecated, r144
  constructor(e, t) {
    console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."), super(e, t);
  }
}
class nM extends As {
  // @deprecated, r144
  constructor(e, t, n, i) {
    console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."), super(e, t, n, i);
  }
}
class iM extends ws {
  // @deprecated, r144
  constructor(e, t) {
    console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."), super(e, t);
  }
}
class sM extends bs {
  // @deprecated, r144
  constructor(e, t, n, i) {
    console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."), super(e, t, n, i);
  }
}
class rM extends Nn {
  // @deprecated, r144
  constructor(e, t, n, i) {
    console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."), super(e, t, n, i);
  }
}
class oM extends vr {
  // @deprecated, r144
  constructor(e, t, n, i, s, o) {
    console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."), super(e, t, n, i, s, o);
  }
}
class aM extends Mr {
  // @deprecated, r144
  constructor(e, t) {
    console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."), super(e, t);
  }
}
class cM extends Rs {
  // @deprecated, r144
  constructor(e, t, n, i, s, o, a) {
    console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."), super(e, t, n, i, s, o, a);
  }
}
class lM extends Sr {
  // @deprecated, r144
  constructor(e, t) {
    console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."), super(e, t);
  }
}
class hM extends Er {
  // @deprecated, r144
  constructor(e, t, n, i, s) {
    console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."), super(e, t, n, i, s);
  }
}
class uM extends br {
  // @deprecated, r144
  constructor(e, t, n, i, s, o) {
    console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."), super(e, t, n, i, s, o);
  }
}
class dM extends Tr {
  // @deprecated, r144
  constructor(e, t, n, i, s) {
    console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."), super(e, t, n, i, s);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: "153"
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "153");
const gS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ACESFilmicToneMapping: Ad,
  AddEquation: xi,
  AddOperation: Sd,
  AdditiveAnimationBlendMode: tl,
  AdditiveBlending: oc,
  AlphaFormat: Ld,
  AlwaysCompare: Qd,
  AlwaysDepth: md,
  AlwaysStencilFunc: Wd,
  AmbientLight: Kf,
  AmbientLightProbe: ov,
  AnimationAction: ip,
  AnimationClip: vs,
  AnimationLoader: Jx,
  AnimationMixer: bv,
  AnimationObjectGroup: Sv,
  AnimationUtils: qx,
  ArcCurve: Sf,
  ArrayCamera: pf,
  ArrowHelper: Xv,
  Audio: tp,
  AudioAnalyser: dv,
  AudioContext: Dl,
  AudioListener: lv,
  AudioLoader: sv,
  AxesHelper: qv,
  BackSide: It,
  BasicDepthPacking: Hd,
  BasicShadowMap: _p,
  Bone: Ho,
  BooleanKeyframeTrack: Ui,
  Box2: Pv,
  Box3: rn,
  Box3Helper: Vv,
  BoxBufferGeometry: Kv,
  BoxGeometry: ti,
  BoxHelper: Gv,
  BufferAttribute: $e,
  BufferGeometry: Ve,
  BufferGeometryLoader: Qf,
  ByteType: Rd,
  Cache: Pi,
  Camera: Oo,
  CameraHelper: Hv,
  CanvasTexture: gx,
  CapsuleBufferGeometry: Zv,
  CapsuleGeometry: pr,
  CatmullRomCurve3: Ef,
  CineonToneMapping: Td,
  CircleBufferGeometry: Jv,
  CircleGeometry: mr,
  ClampToEdgeWrapping: bt,
  Clock: ep,
  Color: de,
  ColorKeyframeTrack: Rl,
  ColorManagement: Xt,
  CompressedArrayTexture: mx,
  CompressedTexture: yl,
  CompressedTextureLoader: jx,
  ConeBufferGeometry: jv,
  ConeGeometry: gr,
  CubeCamera: of,
  CubeReflectionMapping: Zn,
  CubeRefractionMapping: Jn,
  CubeTexture: hr,
  CubeTextureLoader: Qx,
  CubeUVReflectionMapping: Ss,
  CubicBezierCurve: vl,
  CubicBezierCurve3: bf,
  CubicInterpolant: Hf,
  CullFaceBack: rc,
  CullFaceFront: ed,
  CullFaceFrontBack: gp,
  CullFaceNone: $u,
  Curve: an,
  CurvePath: Af,
  CustomBlending: nd,
  CustomToneMapping: wd,
  CylinderBufferGeometry: Qv,
  CylinderGeometry: Ii,
  Cylindrical: Lv,
  Data3DTexture: al,
  DataArrayTexture: Do,
  DataTexture: us,
  DataTextureLoader: Xf,
  DataUtils: Ws,
  DecrementStencilOp: Ap,
  DecrementWrapStencilOp: Rp,
  DefaultLoadingManager: Wf,
  DepthFormat: qn,
  DepthStencilFormat: Ri,
  DepthTexture: mf,
  DirectionalLight: Ul,
  DirectionalLightHelper: kv,
  DiscreteInterpolant: Gf,
  DisplayP3ColorSpace: sl,
  DodecahedronBufferGeometry: $v,
  DodecahedronGeometry: _r,
  DoubleSide: tn,
  DstAlphaFactor: ld,
  DstColorFactor: ud,
  DynamicCopyUsage: Vp,
  DynamicDrawUsage: Fp,
  DynamicReadUsage: kp,
  EdgesGeometry: wf,
  EllipseCurve: Vo,
  EqualCompare: Yd,
  EqualDepth: _d,
  EqualStencilFunc: Ip,
  EquirectangularReflectionMapping: Js,
  EquirectangularRefractionMapping: js,
  Euler: lr,
  EventDispatcher: xn,
  ExtrudeBufferGeometry: eM,
  ExtrudeGeometry: yr,
  FileLoader: sn,
  Float16BufferAttribute: Pm,
  Float32BufferAttribute: be,
  Float64BufferAttribute: Im,
  FloatType: kt,
  Fog: ko,
  FogExp2: zo,
  FramebufferTexture: px,
  FrontSide: gn,
  Frustum: Fo,
  GLBufferAttribute: Rv,
  GLSL1: Xp,
  GLSL3: Dc,
  GreaterCompare: Zd,
  GreaterDepth: xd,
  GreaterEqualCompare: jd,
  GreaterEqualDepth: yd,
  GreaterEqualStencilFunc: Op,
  GreaterStencilFunc: Dp,
  GridHelper: Bv,
  Group: Pn,
  HalfFloatType: dn,
  HemisphereLight: Yf,
  HemisphereLightHelper: Fv,
  HemisphereLightProbe: rv,
  IcosahedronBufferGeometry: tM,
  IcosahedronGeometry: xr,
  ImageBitmapLoader: $f,
  ImageLoader: ar,
  ImageUtils: ol,
  IncrementStencilOp: Tp,
  IncrementWrapStencilOp: wp,
  InstancedBufferAttribute: _s,
  InstancedBufferGeometry: jf,
  InstancedInterleavedBuffer: wv,
  InstancedMesh: ml,
  Int16BufferAttribute: Cm,
  Int32BufferAttribute: Lm,
  Int8BufferAttribute: Am,
  IntType: Zc,
  InterleavedBuffer: dr,
  InterleavedBufferAttribute: Qn,
  Interpolant: Cs,
  InterpolateDiscrete: ps,
  InterpolateLinear: Ci,
  InterpolateSmooth: Eo,
  InvertStencilOp: Cp,
  KeepStencilOp: bo,
  KeyframeTrack: cn,
  LOD: Mf,
  LatheBufferGeometry: nM,
  LatheGeometry: As,
  Layers: No,
  LessCompare: qd,
  LessDepth: gd,
  LessEqualCompare: Kd,
  LessEqualDepth: Ao,
  LessEqualStencilFunc: Up,
  LessStencilFunc: Pp,
  Light: ni,
  LightProbe: qo,
  Line: Dn,
  Line3: Iv,
  LineBasicMaterial: wt,
  LineCurve: Wo,
  LineCurve3: Tf,
  LineDashedMaterial: zf,
  LineLoop: gl,
  LineSegments: on,
  LinearEncoding: il,
  LinearFilter: nt,
  LinearInterpolant: wl,
  LinearMipMapLinearFilter: Sp,
  LinearMipMapNearestFilter: Mp,
  LinearMipmapLinearFilter: _n,
  LinearMipmapNearestFilter: Po,
  LinearSRGBColorSpace: Kt,
  LinearToneMapping: Ed,
  Loader: Nt,
  LoaderUtils: Ms,
  LoadingManager: Cl,
  LoopOnce: Fd,
  LoopPingPong: zd,
  LoopRepeat: Bd,
  LuminanceAlphaFormat: Id,
  LuminanceFormat: Pd,
  MOUSE: gi,
  Material: gt,
  MaterialLoader: Yo,
  MathUtils: ef,
  Matrix3: He,
  Matrix4: Ne,
  MaxEquation: hc,
  Mesh: St,
  MeshBasicMaterial: Gt,
  MeshDepthMaterial: ul,
  MeshDistanceMaterial: dl,
  MeshLambertMaterial: Ff,
  MeshMatcapMaterial: Bf,
  MeshNormalMaterial: Of,
  MeshPhongMaterial: Df,
  MeshPhysicalMaterial: vn,
  MeshStandardMaterial: Ar,
  MeshToonMaterial: Nf,
  MinEquation: lc,
  MirroredRepeatWrapping: fs,
  MixOperation: Md,
  MultiplyBlending: cc,
  MultiplyOperation: cr,
  NearestFilter: lt,
  NearestMipMapLinearFilter: vp,
  NearestMipMapNearestFilter: xp,
  NearestMipmapLinearFilter: ls,
  NearestMipmapNearestFilter: Qs,
  NeverCompare: Xd,
  NeverDepth: pd,
  NeverStencilFunc: Lp,
  NoBlending: In,
  NoColorSpace: Kn,
  NoToneMapping: pn,
  NormalAnimationBlendMode: Uo,
  NormalBlending: Ti,
  NotEqualCompare: Jd,
  NotEqualDepth: vd,
  NotEqualStencilFunc: Np,
  NumberKeyframeTrack: ys,
  Object3D: je,
  ObjectLoader: nv,
  ObjectSpaceNormalMap: Vd,
  OctahedronBufferGeometry: iM,
  OctahedronGeometry: ws,
  OneFactor: od,
  OneMinusDstAlphaFactor: hd,
  OneMinusDstColorFactor: dd,
  OneMinusSrcAlphaFactor: Kc,
  OneMinusSrcColorFactor: cd,
  OrthographicCamera: ur,
  PCFShadowMap: qc,
  PCFSoftShadowMap: td,
  PMREMGenerator: Oc,
  Path: ir,
  PerspectiveCamera: Mt,
  Plane: Vn,
  PlaneBufferGeometry: sM,
  PlaneGeometry: bs,
  PlaneHelper: Wv,
  PointLight: Il,
  PointLightHelper: Nv,
  Points: _l,
  PointsMaterial: Go,
  PolarGridHelper: zv,
  PolyhedronBufferGeometry: rM,
  PolyhedronGeometry: Nn,
  PositionalAudio: uv,
  PropertyBinding: Je,
  PropertyMixer: np,
  QuadraticBezierCurve: Ml,
  QuadraticBezierCurve3: Sl,
  Quaternion: Et,
  QuaternionKeyframeTrack: $n,
  QuaternionLinearInterpolant: Vf,
  RED_GREEN_RGTC2_Format: Ic,
  RED_RGTC1_Format: Od,
  REVISION: "153",
  RGBADepthPacking: Gd,
  RGBAFormat: zt,
  RGBAIntegerFormat: el,
  RGBA_ASTC_10x10_Format: Rc,
  RGBA_ASTC_10x5_Format: Tc,
  RGBA_ASTC_10x6_Format: Ac,
  RGBA_ASTC_10x8_Format: wc,
  RGBA_ASTC_12x10_Format: Cc,
  RGBA_ASTC_12x12_Format: Lc,
  RGBA_ASTC_4x4_Format: _c,
  RGBA_ASTC_5x4_Format: yc,
  RGBA_ASTC_5x5_Format: xc,
  RGBA_ASTC_6x5_Format: vc,
  RGBA_ASTC_6x6_Format: Mc,
  RGBA_ASTC_8x5_Format: Sc,
  RGBA_ASTC_8x6_Format: Ec,
  RGBA_ASTC_8x8_Format: bc,
  RGBA_BPTC_Format: So,
  RGBA_ETC2_EAC_Format: gc,
  RGBA_PVRTC_2BPPV1_Format: pc,
  RGBA_PVRTC_4BPPV1_Format: fc,
  RGBA_S3TC_DXT1_Format: xo,
  RGBA_S3TC_DXT3_Format: vo,
  RGBA_S3TC_DXT5_Format: Mo,
  RGB_ETC1_Format: Nd,
  RGB_ETC2_Format: mc,
  RGB_PVRTC_2BPPV1_Format: dc,
  RGB_PVRTC_4BPPV1_Format: uc,
  RGB_S3TC_DXT1_Format: yo,
  RGFormat: Dd,
  RGIntegerFormat: $c,
  RawShaderMaterial: Uf,
  Ray: Es,
  Raycaster: Cv,
  RectAreaLight: Zf,
  RedFormat: Ud,
  RedIntegerFormat: Qc,
  ReinhardToneMapping: bd,
  RepeatWrapping: jn,
  ReplaceStencilOp: bp,
  ReverseSubtractEquation: sd,
  RingBufferGeometry: oM,
  RingGeometry: vr,
  SIGNED_RED_GREEN_RGTC2_Format: Uc,
  SIGNED_RED_RGTC1_Format: Pc,
  SRGBColorSpace: De,
  Scene: yf,
  ShaderChunk: ke,
  ShaderLib: en,
  ShaderMaterial: yn,
  ShadowMaterial: If,
  Shape: wi,
  ShapeBufferGeometry: aM,
  ShapeGeometry: Mr,
  ShapePath: Yv,
  ShapeUtils: mn,
  ShortType: Cd,
  Skeleton: fr,
  SkeletonHelper: Dv,
  SkinnedMesh: pl,
  Source: Ei,
  Sphere: Zt,
  SphereBufferGeometry: cM,
  SphereGeometry: Rs,
  Spherical: Vc,
  SphericalHarmonics3: Jf,
  SplineCurve: El,
  SpotLight: Pl,
  SpotLightHelper: Uv,
  Sprite: vf,
  SpriteMaterial: fl,
  SrcAlphaFactor: Yc,
  SrcAlphaSaturateFactor: fd,
  SrcColorFactor: ad,
  StaticCopyUsage: Gp,
  StaticDrawUsage: er,
  StaticReadUsage: zp,
  StereoCamera: av,
  StreamCopyUsage: Wp,
  StreamDrawUsage: Bp,
  StreamReadUsage: Hp,
  StringKeyframeTrack: Di,
  SubtractEquation: id,
  SubtractiveBlending: ac,
  TOUCH: _i,
  TangentSpaceNormalMap: ei,
  TetrahedronBufferGeometry: lM,
  TetrahedronGeometry: Sr,
  Texture: rt,
  TextureLoader: qf,
  TorusBufferGeometry: hM,
  TorusGeometry: Er,
  TorusKnotBufferGeometry: uM,
  TorusKnotGeometry: br,
  Triangle: Dt,
  TriangleFanDrawMode: wo,
  TriangleStripDrawMode: nl,
  TrianglesDrawMode: kd,
  TubeBufferGeometry: dM,
  TubeGeometry: Tr,
  TwoPassDoubleSide: yp,
  UVMapping: Lo,
  Uint16BufferAttribute: cl,
  Uint32BufferAttribute: ll,
  Uint8BufferAttribute: wm,
  Uint8ClampedBufferAttribute: Rm,
  Uniform: Fl,
  UniformsGroup: Av,
  UniformsLib: he,
  UniformsUtils: rf,
  UnsignedByteType: Un,
  UnsignedInt248Type: Xn,
  UnsignedIntType: Ln,
  UnsignedShort4444Type: Jc,
  UnsignedShort5551Type: jc,
  UnsignedShortType: Io,
  VSMShadowMap: un,
  Vector2: Z,
  Vector3: R,
  Vector4: et,
  VectorKeyframeTrack: xs,
  VideoTexture: fx,
  WebGL1Renderer: _f,
  WebGL3DRenderTarget: mm,
  WebGLArrayRenderTarget: pm,
  WebGLCoordinateSystem: fn,
  WebGLCubeRenderTarget: af,
  WebGLMultipleRenderTargets: gm,
  WebGLRenderTarget: nn,
  WebGLRenderer: gf,
  WebGLUtils: ff,
  WebGPUCoordinateSystem: tr,
  WireframeGeometry: Pf,
  WrapAroundEnding: $s,
  ZeroCurvatureEnding: Mi,
  ZeroFactor: rd,
  ZeroSlopeEnding: Si,
  ZeroStencilOp: Ep,
  _SRGBAFormat: Ro,
  sRGBEncoding: Yn
}, Symbol.toStringTag, { value: "Module" }));
function _u(r, e) {
  if (e === kd)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
  if (e === wo || e === nl) {
    let t = r.getIndex();
    if (t === null) {
      const o = [], a = r.getAttribute("position");
      if (a !== void 0) {
        for (let c = 0; c < a.count; c++)
          o.push(c);
        r.setIndex(o), t = r.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
    }
    const n = t.count - 2, i = [];
    if (e === wo)
      for (let o = 1; o <= n; o++)
        i.push(t.getX(0)), i.push(t.getX(o)), i.push(t.getX(o + 1));
    else
      for (let o = 0; o < n; o++)
        o % 2 === 0 ? (i.push(t.getX(o)), i.push(t.getX(o + 1)), i.push(t.getX(o + 2))) : (i.push(t.getX(o + 2)), i.push(t.getX(o + 1)), i.push(t.getX(o)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const s = r.clone();
    return s.setIndex(i), s.clearGroups(), s;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), r;
}
class _S extends Nt {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new _M(t);
    }), this.register(function(t) {
      return new TM(t);
    }), this.register(function(t) {
      return new AM(t);
    }), this.register(function(t) {
      return new wM(t);
    }), this.register(function(t) {
      return new xM(t);
    }), this.register(function(t) {
      return new vM(t);
    }), this.register(function(t) {
      return new MM(t);
    }), this.register(function(t) {
      return new SM(t);
    }), this.register(function(t) {
      return new gM(t);
    }), this.register(function(t) {
      return new EM(t);
    }), this.register(function(t) {
      return new yM(t);
    }), this.register(function(t) {
      return new bM(t);
    }), this.register(function(t) {
      return new pM(t);
    }), this.register(function(t) {
      return new RM(t);
    }), this.register(function(t) {
      return new CM(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let o;
    this.resourcePath !== "" ? o = this.resourcePath : this.path !== "" ? o = this.path : o = Ms.extractUrlBase(e), this.manager.itemStart(e);
    const a = function(l) {
      i ? i(l) : console.error(l), s.manager.itemError(e), s.manager.itemEnd(e);
    }, c = new sn(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, function(l) {
      try {
        s.parse(l, o, function(h) {
          t(h), s.manager.itemEnd(e);
        }, a);
      } catch (h) {
        a(h);
      }
    }, n, a);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let s;
    const o = {}, a = {}, c = new TextDecoder();
    if (typeof e == "string")
      s = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (c.decode(new Uint8Array(e, 0, 4)) === rp) {
        try {
          o[Ke.KHR_BINARY_GLTF] = new LM(e);
        } catch (u) {
          i && i(u);
          return;
        }
        s = JSON.parse(o[Ke.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(c.decode(e));
    else
      s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new VM(s, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](l);
      a[u.name] = u, o[u.name] = !0;
    }
    if (s.extensionsUsed)
      for (let h = 0; h < s.extensionsUsed.length; ++h) {
        const u = s.extensionsUsed[h], d = s.extensionsRequired || [];
        switch (u) {
          case Ke.KHR_MATERIALS_UNLIT:
            o[u] = new mM();
            break;
          case Ke.KHR_DRACO_MESH_COMPRESSION:
            o[u] = new PM(s, this.dracoLoader);
            break;
          case Ke.KHR_TEXTURE_TRANSFORM:
            o[u] = new IM();
            break;
          case Ke.KHR_MESH_QUANTIZATION:
            o[u] = new UM();
            break;
          default:
            d.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    l.setExtensions(o), l.setPlugins(a), l.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.parse(e, t, i, s);
    });
  }
}
function fM() {
  let r = {};
  return {
    get: function(e) {
      return r[e];
    },
    add: function(e, t) {
      r[e] = t;
    },
    remove: function(e) {
      delete r[e];
    },
    removeAll: function() {
      r = {};
    }
  };
}
const Ke = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class pM {
  constructor(e) {
    this.parser = e, this.name = Ke.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const s = t.json, c = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
    let l;
    const h = new de(16777215);
    c.color !== void 0 && h.fromArray(c.color);
    const u = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        l = new Ul(h), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new Il(h), l.distance = u;
        break;
      case "spot":
        l = new Pl(h), l.distance = u, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return l.position.set(0, 0, 0), l.decay = 2, Wn(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = t.createUniqueName(c.name || "light_" + e), i = Promise.resolve(l), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, s = n.json.nodes[e], a = (s.extensions && s.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(c) {
      return n._getNodeRef(t.cache, a, c);
    });
  }
}
class mM {
  constructor() {
    this.name = Ke.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Gt;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new de(1, 1, 1), e.opacity = 1;
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const o = s.baseColorFactor;
        e.color.fromArray(o), e.opacity = o[3];
      }
      s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, De));
    }
    return Promise.all(i);
  }
}
class gM {
  constructor(e) {
    this.parser = e, this.name = Ke.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class _M {
  constructor(e) {
    this.parser = e, this.name = Ke.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : vn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const a = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Z(a, a);
    }
    return Promise.all(s);
  }
}
class yM {
  constructor(e) {
    this.parser = e, this.name = Ke.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : vn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class xM {
  constructor(e) {
    this.parser = e, this.name = Ke.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : vn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [];
    t.sheenColor = new de(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = i.extensions[this.name];
    return o.sheenColorFactor !== void 0 && t.sheenColor.fromArray(o.sheenColorFactor), o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, De)), o.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(s);
  }
}
class vM {
  constructor(e) {
    this.parser = e, this.name = Ke.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : vn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(s);
  }
}
class MM {
  constructor(e) {
    this.parser = e, this.name = Ke.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : vn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
    const a = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new de(a[0], a[1], a[2]), Promise.all(s);
  }
}
class SM {
  constructor(e) {
    this.parser = e, this.name = Ke.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : vn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class EM {
  constructor(e) {
    this.parser = e, this.name = Ke.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : vn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new de(a[0], a[1], a[2]), o.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, De)), Promise.all(s);
  }
}
class bM {
  constructor(e) {
    this.parser = e, this.name = Ke.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : vn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && s.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(s);
  }
}
class TM {
  constructor(e) {
    this.parser = e, this.name = Ke.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const s = i.extensions[this.name], o = t.options.ktx2Loader;
    if (!o) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, s.source, o);
  }
}
class AM {
  constructor(e) {
    this.parser = e, this.name = Ke.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const o = s.extensions[t], a = i.images[o.source];
    let c = n.textureLoader;
    if (a.uri) {
      const l = n.options.manager.getHandler(a.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l) return n.loadTextureImage(e, o.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class wM {
  constructor(e) {
    this.parser = e, this.name = Ke.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const o = s.extensions[t], a = i.images[o.source];
    let c = n.textureLoader;
    if (a.uri) {
      const l = n.options.manager.getHandler(a.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l) return n.loadTextureImage(e, o.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class RM {
  constructor(e) {
    this.name = Ke.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(a) {
        const c = i.byteOffset || 0, l = i.byteLength || 0, h = i.count, u = i.byteStride, d = new Uint8Array(a, c, l);
        return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(h, u, d, i.mode, i.filter).then(function(f) {
          return f.buffer;
        }) : o.ready.then(function() {
          const f = new ArrayBuffer(h * u);
          return o.decodeGltfBuffer(new Uint8Array(f), h, u, d, i.mode, i.filter), f;
        });
      });
    } else
      return null;
  }
}
class CM {
  constructor(e) {
    this.name = Ke.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const l of i.primitives)
      if (l.mode !== qt.TRIANGLES && l.mode !== qt.TRIANGLE_STRIP && l.mode !== qt.TRIANGLE_FAN && l.mode !== void 0)
        return null;
    const o = n.extensions[this.name].attributes, a = [], c = {};
    for (const l in o)
      a.push(this.parser.getDependency("accessor", o[l]).then((h) => (c[l] = h, c[l])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((l) => {
      const h = l.pop(), u = h.isGroup ? h.children : [h], d = l[0].count, f = [];
      for (const m of u) {
        const y = new Ne(), g = new R(), p = new Et(), x = new R(1, 1, 1), _ = new ml(m.geometry, m.material, d);
        for (let v = 0; v < d; v++)
          c.TRANSLATION && g.fromBufferAttribute(c.TRANSLATION, v), c.ROTATION && p.fromBufferAttribute(c.ROTATION, v), c.SCALE && x.fromBufferAttribute(c.SCALE, v), _.setMatrixAt(v, y.compose(g, p, x));
        for (const v in c)
          v !== "TRANSLATION" && v !== "ROTATION" && v !== "SCALE" && m.geometry.setAttribute(v, c[v]);
        je.prototype.copy.call(_, m), this.parser.assignFinalMaterial(_), f.push(_);
      }
      return h.isGroup ? (h.clear(), h.add(...f), h) : f[0];
    }));
  }
}
const rp = "glTF", Hs = 12, yu = { JSON: 1313821514, BIN: 5130562 };
class LM {
  constructor(e) {
    this.name = Ke.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Hs), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== rp)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - Hs, s = new DataView(e, Hs);
    let o = 0;
    for (; o < i; ) {
      const a = s.getUint32(o, !0);
      o += 4;
      const c = s.getUint32(o, !0);
      if (o += 4, c === yu.JSON) {
        const l = new Uint8Array(e, Hs + o, a);
        this.content = n.decode(l);
      } else if (c === yu.BIN) {
        const l = Hs + o;
        this.body = e.slice(l, l + a);
      }
      o += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class PM {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Ke.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, c = {}, l = {};
    for (const h in o) {
      const u = Wc[h] || h.toLowerCase();
      a[u] = o[h];
    }
    for (const h in e.attributes) {
      const u = Wc[h] || h.toLowerCase();
      if (o[h] !== void 0) {
        const d = n.accessors[e.attributes[h]], f = ds[d.componentType];
        l[u] = f.name, c[u] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", s).then(function(h) {
      return new Promise(function(u) {
        i.decodeDracoFile(h, function(d) {
          for (const f in d.attributes) {
            const m = d.attributes[f], y = c[f];
            y !== void 0 && (m.normalized = y);
          }
          u(d);
        }, a, l);
      });
    });
  }
}
class IM {
  constructor() {
    this.name = Ke.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class UM {
  constructor() {
    this.name = Ke.KHR_MESH_QUANTIZATION;
  }
}
class op extends Cs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i;
    for (let o = 0; o !== i; o++)
      t[o] = n[s + o];
    return t;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = a * 2, l = a * 3, h = i - t, u = (n - t) / h, d = u * u, f = d * u, m = e * l, y = m - l, g = -2 * f + 3 * d, p = f - d, x = 1 - g, _ = p - d + u;
    for (let v = 0; v !== a; v++) {
      const S = o[y + v + a], E = o[y + v + c] * h, T = o[m + v + a], A = o[m + v] * h;
      s[v] = x * S + _ * E + g * T + p * A;
    }
    return s;
  }
}
const DM = new Et();
class NM extends op {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return DM.fromArray(s).normalize().toArray(s), s;
  }
}
const qt = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, ds = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, xu = {
  9728: lt,
  9729: nt,
  9984: Qs,
  9985: Po,
  9986: ls,
  9987: _n
}, vu = {
  33071: bt,
  33648: fs,
  10497: jn
}, Pa = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Wc = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, Hn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, OM = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Ci,
  STEP: ps
}, Ia = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function FM(r) {
  return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new Ar({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: gn
  })), r.DefaultMaterial;
}
function mi(r, e, t) {
  for (const n in t.extensions)
    r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function Wn(r, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function BM(r, e, t) {
  let n = !1, i = !1, s = !1;
  for (let l = 0, h = e.length; l < h; l++) {
    const u = e[l];
    if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (i = !0), u.COLOR_0 !== void 0 && (s = !0), n && i && s) break;
  }
  if (!n && !i && !s) return Promise.resolve(r);
  const o = [], a = [], c = [];
  for (let l = 0, h = e.length; l < h; l++) {
    const u = e[l];
    if (n) {
      const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : r.attributes.position;
      o.push(d);
    }
    if (i) {
      const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : r.attributes.normal;
      a.push(d);
    }
    if (s) {
      const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : r.attributes.color;
      c.push(d);
    }
  }
  return Promise.all([
    Promise.all(o),
    Promise.all(a),
    Promise.all(c)
  ]).then(function(l) {
    const h = l[0], u = l[1], d = l[2];
    return n && (r.morphAttributes.position = h), i && (r.morphAttributes.normal = u), s && (r.morphAttributes.color = d), r.morphTargetsRelative = !0, r;
  });
}
function zM(r, e) {
  if (r.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      r.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (r.morphTargetInfluences.length === t.length) {
      r.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        r.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function kM(r) {
  let e;
  const t = r.extensions && r.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Ua(t.attributes) : e = r.indices + ":" + Ua(r.attributes) + ":" + r.mode, r.targets !== void 0)
    for (let n = 0, i = r.targets.length; n < i; n++)
      e += ":" + Ua(r.targets[n]);
  return e;
}
function Ua(r) {
  let e = "";
  const t = Object.keys(r).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + r[t[n]] + ";";
  return e;
}
function Xc(r) {
  switch (r) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function HM(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const GM = new Ne();
class VM {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new fM(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = !1, s = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, s = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && s < 98 ? this.textureLoader = new qf(this.options.manager) : this.textureLoader = new $f(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new sn(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, s = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(o) {
      return o._markDefs && o._markDefs();
    }), Promise.all(this._invokeAll(function(o) {
      return o.beforeRoot && o.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(o) {
      const a = {
        scene: o[0][i.scene || 0],
        scenes: o[0],
        animations: o[1],
        cameras: o[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      mi(s, a, i), Wn(a, i), Promise.all(n._invokeAll(function(c) {
        return c.afterRoot && c.afterRoot(a);
      })).then(function() {
        e(a);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const o = t[i].joints;
      for (let a = 0, c = o.length; a < c; a++)
        e[o[a]].isBone = !0;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const o = e[i];
      o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = !0)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), s = (o, a) => {
      const c = this.associations.get(o);
      c != null && this.associations.set(a, c);
      for (const [l, h] of o.children.entries())
        s(h, a.children[l]);
    };
    return s(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      s && n.push(s);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(s) {
            return s.loadNode && s.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(s) {
            return s.loadMesh && s.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(s) {
            return s.loadBufferView && s.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(s) {
            return s.loadMaterial && s.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(s) {
            return s.loadTexture && s.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(s) {
            return s.loadAnimation && s.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(s) {
            return s != this && s.getDependency && s.getDependency(e, t);
          }), !i)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(s, o) {
        return n.getDependency(e, o);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(s, o) {
      n.load(Ms.resolveURL(t.uri, i.path), s, void 0, function() {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, s = t.byteOffset || 0;
      return n.slice(s, s + i);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const o = Pa[i.type], a = ds[i.componentType], c = i.normalized === !0, l = new a(i.count * o);
      return Promise.resolve(new $e(l, o, c));
    }
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(o) {
      const a = o[0], c = Pa[i.type], l = ds[i.componentType], h = l.BYTES_PER_ELEMENT, u = h * c, d = i.byteOffset || 0, f = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, m = i.normalized === !0;
      let y, g;
      if (f && f !== u) {
        const p = Math.floor(d / f), x = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count;
        let _ = t.cache.get(x);
        _ || (y = new l(a, p * f, i.count * f / h), _ = new dr(y, f / h), t.cache.add(x, _)), g = new Qn(_, c, d % f / h, m);
      } else
        a === null ? y = new l(i.count * c) : y = new l(a, d, i.count * c), g = new $e(y, c, m);
      if (i.sparse !== void 0) {
        const p = Pa.SCALAR, x = ds[i.sparse.indices.componentType], _ = i.sparse.indices.byteOffset || 0, v = i.sparse.values.byteOffset || 0, S = new x(o[1], _, i.sparse.count * p), E = new l(o[2], v, i.sparse.count * c);
        a !== null && (g = new $e(g.array.slice(), g.itemSize, g.normalized));
        for (let T = 0, A = S.length; T < A; T++) {
          const M = S[T];
          if (g.setX(M, E[T * c]), c >= 2 && g.setY(M, E[T * c + 1]), c >= 3 && g.setZ(M, E[T * c + 2]), c >= 4 && g.setW(M, E[T * c + 3]), c >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return g;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, s = t.textures[e].source, o = t.images[s];
    let a = this.textureLoader;
    if (o.uri) {
      const c = n.manager.getHandler(o.uri);
      c !== null && (a = c);
    }
    return this.loadTextureImage(e, s, a);
  }
  loadTextureImage(e, t, n) {
    const i = this, s = this.json, o = s.textures[e], a = s.images[t], c = (a.uri || a.bufferView) + ":" + o.sampler;
    if (this.textureCache[c])
      return this.textureCache[c];
    const l = this.loadImageSource(t, n).then(function(h) {
      h.flipY = !1, h.name = o.name || a.name || "", h.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (h.name = a.uri);
      const d = (s.samplers || {})[o.sampler] || {};
      return h.magFilter = xu[d.magFilter] || nt, h.minFilter = xu[d.minFilter] || _n, h.wrapS = vu[d.wrapS] || jn, h.wrapT = vu[d.wrapT] || jn, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[c] = l, l;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, s = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const o = i.images[e], a = self.URL || self.webkitURL;
    let c = o.uri || "", l = !1;
    if (o.bufferView !== void 0)
      c = n.getDependency("bufferView", o.bufferView).then(function(u) {
        l = !0;
        const d = new Blob([u], { type: o.mimeType });
        return c = a.createObjectURL(d), c;
      });
    else if (o.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(c).then(function(u) {
      return new Promise(function(d, f) {
        let m = d;
        t.isImageBitmapLoader === !0 && (m = function(y) {
          const g = new rt(y);
          g.needsUpdate = !0, d(g);
        }), t.load(Ms.resolveURL(u, s.path), m, void 0, f);
      });
    }).then(function(u) {
      return l === !0 && a.revokeObjectURL(c), u.userData.mimeType = o.mimeType || HM(o.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", c), u;
    });
    return this.sourceCache[e] = h, h;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, i) {
    const s = this;
    return this.getDependency("texture", n.index).then(function(o) {
      if (!o) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), s.extensions[Ke.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[Ke.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const c = s.associations.get(o);
          o = s.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), s.associations.set(o, c);
        }
      }
      return i !== void 0 && (o.colorSpace = i), e[t] = o, o;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, s = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let c = this.cache.get(a);
      c || (c = new Go(), gt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = !1, this.cache.add(a, c)), n = c;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(a);
      c || (c = new wt(), gt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, this.cache.add(a, c)), n = c;
    }
    if (i || s || o) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      i && (a += "derivative-tangents:"), s && (a += "vertex-colors:"), o && (a += "flat-shading:");
      let c = this.cache.get(a);
      c || (c = n.clone(), s && (c.vertexColors = !0), o && (c.flatShading = !0), i && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(a, c), this.associations.set(c, this.associations.get(n))), n = c;
    }
    e.material = n;
  }
  getMaterialType() {
    return Ar;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, s = n.materials[e];
    let o;
    const a = {}, c = s.extensions || {}, l = [];
    if (c[Ke.KHR_MATERIALS_UNLIT]) {
      const u = i[Ke.KHR_MATERIALS_UNLIT];
      o = u.getMaterialType(), l.push(u.extendParams(a, s, t));
    } else {
      const u = s.pbrMetallicRoughness || {};
      if (a.color = new de(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const d = u.baseColorFactor;
        a.color.fromArray(d), a.opacity = d[3];
      }
      u.baseColorTexture !== void 0 && l.push(t.assignTexture(a, "map", u.baseColorTexture, De)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), l.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), o = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), l.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, a);
      })));
    }
    s.doubleSided === !0 && (a.side = tn);
    const h = s.alphaMode || Ia.OPAQUE;
    if (h === Ia.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, h === Ia.MASK && (a.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && o !== Gt && (l.push(t.assignTexture(a, "normalMap", s.normalTexture)), a.normalScale = new Z(1, 1), s.normalTexture.scale !== void 0)) {
      const u = s.normalTexture.scale;
      a.normalScale.set(u, u);
    }
    return s.occlusionTexture !== void 0 && o !== Gt && (l.push(t.assignTexture(a, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && o !== Gt && (a.emissive = new de().fromArray(s.emissiveFactor)), s.emissiveTexture !== void 0 && o !== Gt && l.push(t.assignTexture(a, "emissiveMap", s.emissiveTexture, De)), Promise.all(l).then(function() {
      const u = new o(a);
      return s.name && (u.name = s.name), Wn(u, s), t.associations.set(u, { materials: e }), s.extensions && mi(i, u, s), u;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = Je.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function s(a) {
      return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(c) {
        return Mu(c, a, t);
      });
    }
    const o = [];
    for (let a = 0, c = e.length; a < c; a++) {
      const l = e[a], h = kM(l), u = i[h];
      if (u)
        o.push(u.promise);
      else {
        let d;
        l.extensions && l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION] ? d = s(l) : d = Mu(new Ve(), l, t), i[h] = { primitive: l, promise: d }, o.push(d);
      }
    }
    return Promise.all(o);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, s = n.meshes[e], o = s.primitives, a = [];
    for (let c = 0, l = o.length; c < l; c++) {
      const h = o[c].material === void 0 ? FM(this.cache) : this.getDependency("material", o[c].material);
      a.push(h);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(c) {
      const l = c.slice(0, c.length - 1), h = c[c.length - 1], u = [];
      for (let f = 0, m = h.length; f < m; f++) {
        const y = h[f], g = o[f];
        let p;
        const x = l[f];
        if (g.mode === qt.TRIANGLES || g.mode === qt.TRIANGLE_STRIP || g.mode === qt.TRIANGLE_FAN || g.mode === void 0)
          p = s.isSkinnedMesh === !0 ? new pl(y, x) : new St(y, x), p.isSkinnedMesh === !0 && p.normalizeSkinWeights(), g.mode === qt.TRIANGLE_STRIP ? p.geometry = _u(p.geometry, nl) : g.mode === qt.TRIANGLE_FAN && (p.geometry = _u(p.geometry, wo));
        else if (g.mode === qt.LINES)
          p = new on(y, x);
        else if (g.mode === qt.LINE_STRIP)
          p = new Dn(y, x);
        else if (g.mode === qt.LINE_LOOP)
          p = new gl(y, x);
        else if (g.mode === qt.POINTS)
          p = new _l(y, x);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + g.mode);
        Object.keys(p.geometry.morphAttributes).length > 0 && zM(p, s), p.name = t.createUniqueName(s.name || "mesh_" + e), Wn(p, s), g.extensions && mi(i, p, g), t.assignFinalMaterial(p), u.push(p);
      }
      for (let f = 0, m = u.length; f < m; f++)
        t.associations.set(u[f], {
          meshes: e,
          primitives: f
        });
      if (u.length === 1)
        return s.extensions && mi(i, u[0], s), u[0];
      const d = new Pn();
      s.extensions && mi(i, d, s), t.associations.set(d, { meshes: e });
      for (let f = 0, m = u.length; f < m; f++)
        d.add(u[f]);
      return d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new Mt(ef.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new ur(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Wn(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, s = t.joints.length; i < s; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const s = i.pop(), o = i, a = [], c = [];
      for (let l = 0, h = o.length; l < h; l++) {
        const u = o[l];
        if (u) {
          a.push(u);
          const d = new Ne();
          s !== null && d.fromArray(s.array, l * 16), c.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new fr(a, c);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const n = this.json.animations[e], i = n.name ? n.name : "animation_" + e, s = [], o = [], a = [], c = [], l = [];
    for (let h = 0, u = n.channels.length; h < u; h++) {
      const d = n.channels[h], f = n.samplers[d.sampler], m = d.target, y = m.node, g = n.parameters !== void 0 ? n.parameters[f.input] : f.input, p = n.parameters !== void 0 ? n.parameters[f.output] : f.output;
      m.node !== void 0 && (s.push(this.getDependency("node", y)), o.push(this.getDependency("accessor", g)), a.push(this.getDependency("accessor", p)), c.push(f), l.push(m));
    }
    return Promise.all([
      Promise.all(s),
      Promise.all(o),
      Promise.all(a),
      Promise.all(c),
      Promise.all(l)
    ]).then(function(h) {
      const u = h[0], d = h[1], f = h[2], m = h[3], y = h[4], g = [];
      for (let p = 0, x = u.length; p < x; p++) {
        const _ = u[p], v = d[p], S = f[p], E = m[p], T = y[p];
        if (_ === void 0) continue;
        _.updateMatrix();
        let A;
        switch (Hn[T.path]) {
          case Hn.weights:
            A = ys;
            break;
          case Hn.rotation:
            A = $n;
            break;
          case Hn.position:
          case Hn.scale:
          default:
            A = xs;
            break;
        }
        const M = _.name ? _.name : _.uuid, b = E.interpolation !== void 0 ? OM[E.interpolation] : Ci, P = [];
        Hn[T.path] === Hn.weights ? _.traverse(function(D) {
          D.morphTargetInfluences && P.push(D.name ? D.name : D.uuid);
        }) : P.push(M);
        let F = S.array;
        if (S.normalized) {
          const D = Xc(F.constructor), N = new Float32Array(F.length);
          for (let B = 0, J = F.length; B < J; B++)
            N[B] = F[B] * D;
          F = N;
        }
        for (let D = 0, N = P.length; D < N; D++) {
          const B = new A(
            P[D] + "." + Hn[T.path],
            v.array,
            F,
            b
          );
          E.interpolation === "CUBICSPLINE" && (B.createInterpolant = function(W) {
            const X = this instanceof $n ? NM : op;
            return new X(this.times, this.values, this.getValueSize() / 3, W);
          }, B.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), g.push(B);
        }
      }
      return new vs(i, void 0, g);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
      const o = n._getNodeRef(n.meshCache, i.mesh, s);
      return i.weights !== void 0 && o.traverse(function(a) {
        if (a.isMesh)
          for (let c = 0, l = i.weights.length; c < l; c++)
            a.morphTargetInfluences[c] = i.weights[c];
      }), o;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], s = n._loadNodeShallow(e), o = [], a = i.children || [];
    for (let l = 0, h = a.length; l < h; l++)
      o.push(n.getDependency("node", a[l]));
    const c = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      s,
      Promise.all(o),
      c
    ]).then(function(l) {
      const h = l[0], u = l[1], d = l[2];
      d !== null && h.traverse(function(f) {
        f.isSkinnedMesh && f.bind(d, GM);
      });
      for (let f = 0, m = u.length; f < m; f++)
        h.add(u[f]);
      return h;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const s = t.nodes[e], o = s.name ? i.createUniqueName(s.name) : "", a = [], c = i._invokeOne(function(l) {
      return l.createNodeMesh && l.createNodeMesh(e);
    });
    return c && a.push(c), s.camera !== void 0 && a.push(i.getDependency("camera", s.camera).then(function(l) {
      return i._getNodeRef(i.cameraCache, s.camera, l);
    })), i._invokeAll(function(l) {
      return l.createNodeAttachment && l.createNodeAttachment(e);
    }).forEach(function(l) {
      a.push(l);
    }), this.nodeCache[e] = Promise.all(a).then(function(l) {
      let h;
      if (s.isBone === !0 ? h = new Ho() : l.length > 1 ? h = new Pn() : l.length === 1 ? h = l[0] : h = new je(), h !== l[0])
        for (let u = 0, d = l.length; u < d; u++)
          h.add(l[u]);
      if (s.name && (h.userData.name = s.name, h.name = o), Wn(h, s), s.extensions && mi(n, h, s), s.matrix !== void 0) {
        const u = new Ne();
        u.fromArray(s.matrix), h.applyMatrix4(u);
      } else
        s.translation !== void 0 && h.position.fromArray(s.translation), s.rotation !== void 0 && h.quaternion.fromArray(s.rotation), s.scale !== void 0 && h.scale.fromArray(s.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, s = new Pn();
    n.name && (s.name = i.createUniqueName(n.name)), Wn(s, n), n.extensions && mi(t, s, n);
    const o = n.nodes || [], a = [];
    for (let c = 0, l = o.length; c < l; c++)
      a.push(i.getDependency("node", o[c]));
    return Promise.all(a).then(function(c) {
      for (let h = 0, u = c.length; h < u; h++)
        s.add(c[h]);
      const l = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [d, f] of i.associations)
          (d instanceof gt || d instanceof rt) && u.set(d, f);
        return h.traverse((d) => {
          const f = i.associations.get(d);
          f != null && u.set(d, f);
        }), u;
      };
      return i.associations = l(s), s;
    });
  }
}
function WM(r, e, t) {
  const n = e.attributes, i = new rn();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], c = a.min, l = a.max;
    if (c !== void 0 && l !== void 0) {
      if (i.set(
        new R(c[0], c[1], c[2]),
        new R(l[0], l[1], l[2])
      ), a.normalized) {
        const h = Xc(ds[a.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const s = e.targets;
  if (s !== void 0) {
    const a = new R(), c = new R();
    for (let l = 0, h = s.length; l < h; l++) {
      const u = s[l];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION], f = d.min, m = d.max;
        if (f !== void 0 && m !== void 0) {
          if (c.setX(Math.max(Math.abs(f[0]), Math.abs(m[0]))), c.setY(Math.max(Math.abs(f[1]), Math.abs(m[1]))), c.setZ(Math.max(Math.abs(f[2]), Math.abs(m[2]))), d.normalized) {
            const y = Xc(ds[d.componentType]);
            c.multiplyScalar(y);
          }
          a.max(c);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(a);
  }
  r.boundingBox = i;
  const o = new Zt();
  i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, r.boundingSphere = o;
}
function Mu(r, e, t) {
  const n = e.attributes, i = [];
  function s(o, a) {
    return t.getDependency("accessor", o).then(function(c) {
      r.setAttribute(a, c);
    });
  }
  for (const o in n) {
    const a = Wc[o] || o.toLowerCase();
    a in r.attributes || i.push(s(n[o], a));
  }
  if (e.indices !== void 0 && !r.index) {
    const o = t.getDependency("accessor", e.indices).then(function(a) {
      r.setIndex(a);
    });
    i.push(o);
  }
  return Wn(r, e), WM(r, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? BM(r, e.targets, t) : r;
  });
}
class yS {
  static createButton(e, t = {}) {
    const n = document.createElement("button");
    function i() {
      if (t.domOverlay === void 0) {
        const d = document.createElement("div");
        d.style.display = "none", document.body.appendChild(d);
        const f = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        f.setAttribute("width", 38), f.setAttribute("height", 38), f.style.position = "absolute", f.style.right = "20px", f.style.top = "20px", f.addEventListener("click", function() {
          l.end();
        }), d.appendChild(f);
        const m = document.createElementNS("http://www.w3.org/2000/svg", "path");
        m.setAttribute("d", "M 12,12 L 28,28 M 28,12 12,28"), m.setAttribute("stroke", "#fff"), m.setAttribute("stroke-width", 2), f.appendChild(m), t.optionalFeatures === void 0 && (t.optionalFeatures = []), t.optionalFeatures.push("dom-overlay"), t.domOverlay = { root: d };
      }
      let l = null;
      async function h(d) {
        d.addEventListener("end", u), e.xr.setReferenceSpaceType("local"), await e.xr.setSession(d), n.textContent = "STOP AR", t.domOverlay.root.style.display = "", l = d;
      }
      function u() {
        l.removeEventListener("end", u), n.textContent = "START AR", t.domOverlay.root.style.display = "none", l = null;
      }
      n.style.display = "", n.style.cursor = "pointer", n.style.left = "calc(50% - 50px)", n.style.width = "100px", n.textContent = "START AR", n.onmouseenter = function() {
        n.style.opacity = "1.0";
      }, n.onmouseleave = function() {
        n.style.opacity = "0.5";
      }, n.onclick = function() {
        l === null ? navigator.xr.requestSession("immersive-ar", t).then(h) : l.end();
      };
    }
    function s() {
      n.style.display = "", n.style.cursor = "auto", n.style.left = "calc(50% - 75px)", n.style.width = "150px", n.onmouseenter = null, n.onmouseleave = null, n.onclick = null;
    }
    function o() {
      s(), n.textContent = "AR NOT SUPPORTED";
    }
    function a(l) {
      s(), console.warn("Exception when trying to call xr.isSessionSupported", l), n.textContent = "AR NOT ALLOWED";
    }
    function c(l) {
      l.style.position = "absolute", l.style.bottom = "20px", l.style.padding = "12px 6px", l.style.border = "1px solid #fff", l.style.borderRadius = "4px", l.style.background = "rgba(0,0,0,0.1)", l.style.color = "#fff", l.style.font = "normal 13px sans-serif", l.style.textAlign = "center", l.style.opacity = "0.5", l.style.outline = "none", l.style.zIndex = "999";
    }
    if ("xr" in navigator)
      return n.id = "ARButton", n.style.display = "none", c(n), navigator.xr.isSessionSupported("immersive-ar").then(function(l) {
        l ? i() : o();
      }).catch(a), n;
    {
      const l = document.createElement("a");
      return window.isSecureContext === !1 ? (l.href = document.location.href.replace(/^http:/, "https:"), l.innerHTML = "WEBXR NEEDS HTTPS") : (l.href = "https://immersiveweb.dev/", l.innerHTML = "WEBXR NOT AVAILABLE"), l.style.left = "calc(50% - 90px)", l.style.width = "180px", l.style.textDecoration = "none", c(l), l;
    }
  }
}
const Su = { type: "change" }, Da = { type: "start" }, Eu = { type: "end" };
class xS extends xn {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new R(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: gi.ROTATE, MIDDLE: gi.DOLLY, RIGHT: gi.PAN }, this.touches = { ONE: _i.ROTATE, TWO: _i.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return a.phi;
    }, this.getAzimuthalAngle = function() {
      return a.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(I) {
      I.addEventListener("keydown", Ie), this._domElementKeyEvents = I;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", Ie), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(Su), n.update(), s = i.NONE;
    }, this.update = (function() {
      const I = new R(), ee = new Et().setFromUnitVectors(e.up, new R(0, 1, 0)), se = ee.clone().invert(), G = new R(), Se = new Et(), Re = new R(), Ae = 2 * Math.PI;
      return function() {
        const ve = n.object.position;
        I.copy(ve).sub(n.target), I.applyQuaternion(ee), a.setFromVector3(I), n.autoRotate && s === i.NONE && M(T()), n.enableDamping ? (a.theta += c.theta * n.dampingFactor, a.phi += c.phi * n.dampingFactor) : (a.theta += c.theta, a.phi += c.phi);
        let Ue = n.minAzimuthAngle, qe = n.maxAzimuthAngle;
        return isFinite(Ue) && isFinite(qe) && (Ue < -Math.PI ? Ue += Ae : Ue > Math.PI && (Ue -= Ae), qe < -Math.PI ? qe += Ae : qe > Math.PI && (qe -= Ae), Ue <= qe ? a.theta = Math.max(Ue, Math.min(qe, a.theta)) : a.theta = a.theta > (Ue + qe) / 2 ? Math.max(Ue, a.theta) : Math.min(qe, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe(), a.radius *= l, a.radius = Math.max(n.minDistance, Math.min(n.maxDistance, a.radius)), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), I.setFromSpherical(a), I.applyQuaternion(se), ve.copy(n.target).add(I), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), h.set(0, 0, 0)), l = 1, u || G.distanceToSquared(n.object.position) > o || 8 * (1 - Se.dot(n.object.quaternion)) > o || Re.distanceToSquared(n.target) > 0 ? (n.dispatchEvent(Su), G.copy(n.object.position), Se.copy(n.object.quaternion), Re.copy(n.target), u = !1, !0) : !1;
      };
    })(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", L), n.domElement.removeEventListener("pointerdown", j), n.domElement.removeEventListener("pointercancel", $), n.domElement.removeEventListener("wheel", xe), n.domElement.removeEventListener("pointermove", ae), n.domElement.removeEventListener("pointerup", $), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", Ie), n._domElementKeyEvents = null);
    };
    const n = this, i = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let s = i.NONE;
    const o = 1e-6, a = new Vc(), c = new Vc();
    let l = 1;
    const h = new R();
    let u = !1;
    const d = new Z(), f = new Z(), m = new Z(), y = new Z(), g = new Z(), p = new Z(), x = new Z(), _ = new Z(), v = new Z(), S = [], E = {};
    function T() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function A() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function M(I) {
      c.theta -= I;
    }
    function b(I) {
      c.phi -= I;
    }
    const P = (function() {
      const I = new R();
      return function(se, G) {
        I.setFromMatrixColumn(G, 0), I.multiplyScalar(-se), h.add(I);
      };
    })(), F = (function() {
      const I = new R();
      return function(se, G) {
        n.screenSpacePanning === !0 ? I.setFromMatrixColumn(G, 1) : (I.setFromMatrixColumn(G, 0), I.crossVectors(n.object.up, I)), I.multiplyScalar(se), h.add(I);
      };
    })(), D = (function() {
      const I = new R();
      return function(se, G) {
        const Se = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const Re = n.object.position;
          I.copy(Re).sub(n.target);
          let Ae = I.length();
          Ae *= Math.tan(n.object.fov / 2 * Math.PI / 180), P(2 * se * Ae / Se.clientHeight, n.object.matrix), F(2 * G * Ae / Se.clientHeight, n.object.matrix);
        } else n.object.isOrthographicCamera ? (P(se * (n.object.right - n.object.left) / n.object.zoom / Se.clientWidth, n.object.matrix), F(G * (n.object.top - n.object.bottom) / n.object.zoom / Se.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    })();
    function N(I) {
      n.object.isPerspectiveCamera ? l /= I : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * I)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function B(I) {
      n.object.isPerspectiveCamera ? l *= I : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / I)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function J(I) {
      d.set(I.clientX, I.clientY);
    }
    function W(I) {
      x.set(I.clientX, I.clientY);
    }
    function X(I) {
      y.set(I.clientX, I.clientY);
    }
    function Q(I) {
      f.set(I.clientX, I.clientY), m.subVectors(f, d).multiplyScalar(n.rotateSpeed);
      const ee = n.domElement;
      M(2 * Math.PI * m.x / ee.clientHeight), b(2 * Math.PI * m.y / ee.clientHeight), d.copy(f), n.update();
    }
    function te(I) {
      _.set(I.clientX, I.clientY), v.subVectors(_, x), v.y > 0 ? N(A()) : v.y < 0 && B(A()), x.copy(_), n.update();
    }
    function ue(I) {
      g.set(I.clientX, I.clientY), p.subVectors(g, y).multiplyScalar(n.panSpeed), D(p.x, p.y), y.copy(g), n.update();
    }
    function H(I) {
      I.deltaY < 0 ? B(A()) : I.deltaY > 0 && N(A()), n.update();
    }
    function ne(I) {
      let ee = !1;
      switch (I.code) {
        case n.keys.UP:
          I.ctrlKey || I.metaKey || I.shiftKey ? b(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : D(0, n.keyPanSpeed), ee = !0;
          break;
        case n.keys.BOTTOM:
          I.ctrlKey || I.metaKey || I.shiftKey ? b(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : D(0, -n.keyPanSpeed), ee = !0;
          break;
        case n.keys.LEFT:
          I.ctrlKey || I.metaKey || I.shiftKey ? M(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : D(n.keyPanSpeed, 0), ee = !0;
          break;
        case n.keys.RIGHT:
          I.ctrlKey || I.metaKey || I.shiftKey ? M(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : D(-n.keyPanSpeed, 0), ee = !0;
          break;
      }
      ee && (I.preventDefault(), n.update());
    }
    function ie() {
      if (S.length === 1)
        d.set(S[0].pageX, S[0].pageY);
      else {
        const I = 0.5 * (S[0].pageX + S[1].pageX), ee = 0.5 * (S[0].pageY + S[1].pageY);
        d.set(I, ee);
      }
    }
    function pe() {
      if (S.length === 1)
        y.set(S[0].pageX, S[0].pageY);
      else {
        const I = 0.5 * (S[0].pageX + S[1].pageX), ee = 0.5 * (S[0].pageY + S[1].pageY);
        y.set(I, ee);
      }
    }
    function _e() {
      const I = S[0].pageX - S[1].pageX, ee = S[0].pageY - S[1].pageY, se = Math.sqrt(I * I + ee * ee);
      x.set(0, se);
    }
    function me() {
      n.enableZoom && _e(), n.enablePan && pe();
    }
    function Ce() {
      n.enableZoom && _e(), n.enableRotate && ie();
    }
    function we(I) {
      if (S.length == 1)
        f.set(I.pageX, I.pageY);
      else {
        const se = re(I), G = 0.5 * (I.pageX + se.x), Se = 0.5 * (I.pageY + se.y);
        f.set(G, Se);
      }
      m.subVectors(f, d).multiplyScalar(n.rotateSpeed);
      const ee = n.domElement;
      M(2 * Math.PI * m.x / ee.clientHeight), b(2 * Math.PI * m.y / ee.clientHeight), d.copy(f);
    }
    function Ye(I) {
      if (S.length === 1)
        g.set(I.pageX, I.pageY);
      else {
        const ee = re(I), se = 0.5 * (I.pageX + ee.x), G = 0.5 * (I.pageY + ee.y);
        g.set(se, G);
      }
      p.subVectors(g, y).multiplyScalar(n.panSpeed), D(p.x, p.y), y.copy(g);
    }
    function Pe(I) {
      const ee = re(I), se = I.pageX - ee.x, G = I.pageY - ee.y, Se = Math.sqrt(se * se + G * G);
      _.set(0, Se), v.set(0, Math.pow(_.y / x.y, n.zoomSpeed)), N(v.y), x.copy(_);
    }
    function U(I) {
      n.enableZoom && Pe(I), n.enablePan && Ye(I);
    }
    function ce(I) {
      n.enableZoom && Pe(I), n.enableRotate && we(I);
    }
    function j(I) {
      n.enabled !== !1 && (S.length === 0 && (n.domElement.setPointerCapture(I.pointerId), n.domElement.addEventListener("pointermove", ae), n.domElement.addEventListener("pointerup", $)), w(I), I.pointerType === "touch" ? We(I) : Te(I));
    }
    function ae(I) {
      n.enabled !== !1 && (I.pointerType === "touch" ? it(I) : ye(I));
    }
    function $(I) {
      q(I), S.length === 0 && (n.domElement.releasePointerCapture(I.pointerId), n.domElement.removeEventListener("pointermove", ae), n.domElement.removeEventListener("pointerup", $)), n.dispatchEvent(Eu), s = i.NONE;
    }
    function Te(I) {
      let ee;
      switch (I.button) {
        case 0:
          ee = n.mouseButtons.LEFT;
          break;
        case 1:
          ee = n.mouseButtons.MIDDLE;
          break;
        case 2:
          ee = n.mouseButtons.RIGHT;
          break;
        default:
          ee = -1;
      }
      switch (ee) {
        case gi.DOLLY:
          if (n.enableZoom === !1) return;
          W(I), s = i.DOLLY;
          break;
        case gi.ROTATE:
          if (I.ctrlKey || I.metaKey || I.shiftKey) {
            if (n.enablePan === !1) return;
            X(I), s = i.PAN;
          } else {
            if (n.enableRotate === !1) return;
            J(I), s = i.ROTATE;
          }
          break;
        case gi.PAN:
          if (I.ctrlKey || I.metaKey || I.shiftKey) {
            if (n.enableRotate === !1) return;
            J(I), s = i.ROTATE;
          } else {
            if (n.enablePan === !1) return;
            X(I), s = i.PAN;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(Da);
    }
    function ye(I) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === !1) return;
          Q(I);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1) return;
          te(I);
          break;
        case i.PAN:
          if (n.enablePan === !1) return;
          ue(I);
          break;
      }
    }
    function xe(I) {
      n.enabled === !1 || n.enableZoom === !1 || s !== i.NONE || (I.preventDefault(), n.dispatchEvent(Da), H(I), n.dispatchEvent(Eu));
    }
    function Ie(I) {
      n.enabled === !1 || n.enablePan === !1 || ne(I);
    }
    function We(I) {
      switch (oe(I), S.length) {
        case 1:
          switch (n.touches.ONE) {
            case _i.ROTATE:
              if (n.enableRotate === !1) return;
              ie(), s = i.TOUCH_ROTATE;
              break;
            case _i.PAN:
              if (n.enablePan === !1) return;
              pe(), s = i.TOUCH_PAN;
              break;
            default:
              s = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case _i.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              me(), s = i.TOUCH_DOLLY_PAN;
              break;
            case _i.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              Ce(), s = i.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = i.NONE;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(Da);
    }
    function it(I) {
      switch (oe(I), s) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          we(I), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          Ye(I), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          U(I), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          ce(I), n.update();
          break;
        default:
          s = i.NONE;
      }
    }
    function L(I) {
      n.enabled !== !1 && I.preventDefault();
    }
    function w(I) {
      S.push(I);
    }
    function q(I) {
      delete E[I.pointerId];
      for (let ee = 0; ee < S.length; ee++)
        if (S[ee].pointerId == I.pointerId) {
          S.splice(ee, 1);
          return;
        }
    }
    function oe(I) {
      let ee = E[I.pointerId];
      ee === void 0 && (ee = new Z(), E[I.pointerId] = ee), ee.set(I.pageX, I.pageY);
    }
    function re(I) {
      const ee = I.pointerId === S[0].pointerId ? S[1] : S[0];
      return E[ee.pointerId];
    }
    n.domElement.addEventListener("contextmenu", L), n.domElement.addEventListener("pointerdown", j), n.domElement.addEventListener("pointercancel", $), n.domElement.addEventListener("wheel", xe, { passive: !1 }), this.update();
  }
}
class vS extends Xf {
  constructor(e) {
    super(e), this.type = dn;
  }
  // adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html
  parse(e) {
    const a = function(_, v) {
      switch (_) {
        case 1:
          console.error("THREE.RGBELoader Read Error: " + (v || ""));
          break;
        case 2:
          console.error("THREE.RGBELoader Write Error: " + (v || ""));
          break;
        case 3:
          console.error("THREE.RGBELoader Bad File Format: " + (v || ""));
          break;
        default:
        case 4:
          console.error("THREE.RGBELoader: Error: " + (v || ""));
      }
      return -1;
    }, d = function(_, v, S) {
      v = v || 1024;
      let T = _.pos, A = -1, M = 0, b = "", P = String.fromCharCode.apply(null, new Uint16Array(_.subarray(T, T + 128)));
      for (; 0 > (A = P.indexOf(`
`)) && M < v && T < _.byteLength; )
        b += P, M += P.length, T += 128, P += String.fromCharCode.apply(null, new Uint16Array(_.subarray(T, T + 128)));
      return -1 < A ? (_.pos += M + A + 1, b + P.slice(0, A)) : !1;
    }, f = function(_) {
      const v = /^#\?(\S+)/, S = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, E = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, T = /^\s*FORMAT=(\S+)\s*$/, A = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, M = {
        valid: 0,
        /* indicate which fields are valid */
        string: "",
        /* the actual header string */
        comments: "",
        /* comments found in header */
        programtype: "RGBE",
        /* listed at beginning of file to identify it after "#?". defaults to "RGBE" */
        format: "",
        /* RGBE format, default 32-bit_rle_rgbe */
        gamma: 1,
        /* image has already been gamma corrected with given gamma. defaults to 1.0 (no correction) */
        exposure: 1,
        /* a value of 1.0 in an image corresponds to <exposure> watts/steradian/m^2. defaults to 1.0 */
        width: 0,
        height: 0
        /* image dimensions, width/height */
      };
      let b, P;
      if (_.pos >= _.byteLength || !(b = d(_)))
        return a(1, "no header found");
      if (!(P = b.match(v)))
        return a(3, "bad initial token");
      for (M.valid |= 1, M.programtype = P[1], M.string += b + `
`; b = d(_), b !== !1; ) {
        if (M.string += b + `
`, b.charAt(0) === "#") {
          M.comments += b + `
`;
          continue;
        }
        if ((P = b.match(S)) && (M.gamma = parseFloat(P[1])), (P = b.match(E)) && (M.exposure = parseFloat(P[1])), (P = b.match(T)) && (M.valid |= 2, M.format = P[1]), (P = b.match(A)) && (M.valid |= 4, M.height = parseInt(P[1], 10), M.width = parseInt(P[2], 10)), M.valid & 2 && M.valid & 4) break;
      }
      return M.valid & 2 ? M.valid & 4 ? M : a(3, "missing image size specifier") : a(3, "missing format specifier");
    }, m = function(_, v, S) {
      const E = v;
      if (
        // run length encoding is not allowed so read flat
        E < 8 || E > 32767 || // this file is not run length encoded
        _[0] !== 2 || _[1] !== 2 || _[2] & 128
      )
        return new Uint8Array(_);
      if (E !== (_[2] << 8 | _[3]))
        return a(3, "wrong scanline width");
      const T = new Uint8Array(4 * v * S);
      if (!T.length)
        return a(4, "unable to allocate buffer space");
      let A = 0, M = 0;
      const b = 4 * E, P = new Uint8Array(4), F = new Uint8Array(b);
      let D = S;
      for (; D > 0 && M < _.byteLength; ) {
        if (M + 4 > _.byteLength)
          return a(1);
        if (P[0] = _[M++], P[1] = _[M++], P[2] = _[M++], P[3] = _[M++], P[0] != 2 || P[1] != 2 || (P[2] << 8 | P[3]) != E)
          return a(3, "bad rgbe scanline format");
        let N = 0, B;
        for (; N < b && M < _.byteLength; ) {
          B = _[M++];
          const W = B > 128;
          if (W && (B -= 128), B === 0 || N + B > b)
            return a(3, "bad scanline data");
          if (W) {
            const X = _[M++];
            for (let Q = 0; Q < B; Q++)
              F[N++] = X;
          } else
            F.set(_.subarray(M, M + B), N), N += B, M += B;
        }
        const J = E;
        for (let W = 0; W < J; W++) {
          let X = 0;
          T[A] = F[W + X], X += E, T[A + 1] = F[W + X], X += E, T[A + 2] = F[W + X], X += E, T[A + 3] = F[W + X], A += 4;
        }
        D--;
      }
      return T;
    }, y = function(_, v, S, E) {
      const T = _[v + 3], A = Math.pow(2, T - 128) / 255;
      S[E + 0] = _[v + 0] * A, S[E + 1] = _[v + 1] * A, S[E + 2] = _[v + 2] * A, S[E + 3] = 1;
    }, g = function(_, v, S, E) {
      const T = _[v + 3], A = Math.pow(2, T - 128) / 255;
      S[E + 0] = Ws.toHalfFloat(Math.min(_[v + 0] * A, 65504)), S[E + 1] = Ws.toHalfFloat(Math.min(_[v + 1] * A, 65504)), S[E + 2] = Ws.toHalfFloat(Math.min(_[v + 2] * A, 65504)), S[E + 3] = Ws.toHalfFloat(1);
    }, p = new Uint8Array(e);
    p.pos = 0;
    const x = f(p);
    if (x !== -1) {
      const _ = x.width, v = x.height, S = m(p.subarray(p.pos), _, v);
      if (S !== -1) {
        let E, T, A;
        switch (this.type) {
          case kt:
            A = S.length / 4;
            const M = new Float32Array(A * 4);
            for (let P = 0; P < A; P++)
              y(S, P * 4, M, P * 4);
            E = M, T = kt;
            break;
          case dn:
            A = S.length / 4;
            const b = new Uint16Array(A * 4);
            for (let P = 0; P < A; P++)
              g(S, P * 4, b, P * 4);
            E = b, T = dn;
            break;
          default:
            console.error("THREE.RGBELoader: unsupported type: ", this.type);
            break;
        }
        return {
          width: _,
          height: v,
          data: E,
          header: x.string,
          gamma: x.gamma,
          exposure: x.exposure,
          type: T
        };
      }
    }
    return null;
  }
  setDataType(e) {
    return this.type = e, this;
  }
  load(e, t, n, i) {
    function s(o, a) {
      switch (o.type) {
        case kt:
        case dn:
          o.colorSpace = Kt, o.minFilter = nt, o.magFilter = nt, o.generateMipmaps = !1, o.flipY = !0;
          break;
      }
      t && t(o, a);
    }
    return super.load(e, s, n, i);
  }
}
function XM(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var rs = {}, Na, bu;
function qM() {
  return bu || (bu = 1, Na = function() {
    return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
  }), Na;
}
var Oa = {}, Gn = {}, Tu;
function Ni() {
  if (Tu) return Gn;
  Tu = 1;
  let r;
  const e = [
    0,
    // Not used
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
  ];
  return Gn.getSymbolSize = function(n) {
    if (!n) throw new Error('"version" cannot be null or undefined');
    if (n < 1 || n > 40) throw new Error('"version" should be in range from 1 to 40');
    return n * 4 + 17;
  }, Gn.getSymbolTotalCodewords = function(n) {
    return e[n];
  }, Gn.getBCHDigit = function(t) {
    let n = 0;
    for (; t !== 0; )
      n++, t >>>= 1;
    return n;
  }, Gn.setToSJISFunction = function(n) {
    if (typeof n != "function")
      throw new Error('"toSJISFunc" is not a valid function.');
    r = n;
  }, Gn.isKanjiModeEnabled = function() {
    return typeof r < "u";
  }, Gn.toSJIS = function(n) {
    return r(n);
  }, Gn;
}
var Fa = {}, Au;
function Bl() {
  return Au || (Au = 1, (function(r) {
    r.L = { bit: 1 }, r.M = { bit: 0 }, r.Q = { bit: 3 }, r.H = { bit: 2 };
    function e(t) {
      if (typeof t != "string")
        throw new Error("Param is not a string");
      switch (t.toLowerCase()) {
        case "l":
        case "low":
          return r.L;
        case "m":
        case "medium":
          return r.M;
        case "q":
        case "quartile":
          return r.Q;
        case "h":
        case "high":
          return r.H;
        default:
          throw new Error("Unknown EC Level: " + t);
      }
    }
    r.isValid = function(n) {
      return n && typeof n.bit < "u" && n.bit >= 0 && n.bit < 4;
    }, r.from = function(n, i) {
      if (r.isValid(n))
        return n;
      try {
        return e(n);
      } catch {
        return i;
      }
    };
  })(Fa)), Fa;
}
var Ba, wu;
function YM() {
  if (wu) return Ba;
  wu = 1;
  function r() {
    this.buffer = [], this.length = 0;
  }
  return r.prototype = {
    get: function(e) {
      const t = Math.floor(e / 8);
      return (this.buffer[t] >>> 7 - e % 8 & 1) === 1;
    },
    put: function(e, t) {
      for (let n = 0; n < t; n++)
        this.putBit((e >>> t - n - 1 & 1) === 1);
    },
    getLengthInBits: function() {
      return this.length;
    },
    putBit: function(e) {
      const t = Math.floor(this.length / 8);
      this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
    }
  }, Ba = r, Ba;
}
var za, Ru;
function KM() {
  if (Ru) return za;
  Ru = 1;
  function r(e) {
    if (!e || e < 1)
      throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e);
  }
  return r.prototype.set = function(e, t, n, i) {
    const s = e * this.size + t;
    this.data[s] = n, i && (this.reservedBit[s] = !0);
  }, r.prototype.get = function(e, t) {
    return this.data[e * this.size + t];
  }, r.prototype.xor = function(e, t, n) {
    this.data[e * this.size + t] ^= n;
  }, r.prototype.isReserved = function(e, t) {
    return this.reservedBit[e * this.size + t];
  }, za = r, za;
}
var ka = {}, Cu;
function ZM() {
  return Cu || (Cu = 1, (function(r) {
    const e = Ni().getSymbolSize;
    r.getRowColCoords = function(n) {
      if (n === 1) return [];
      const i = Math.floor(n / 7) + 2, s = e(n), o = s === 145 ? 26 : Math.ceil((s - 13) / (2 * i - 2)) * 2, a = [s - 7];
      for (let c = 1; c < i - 1; c++)
        a[c] = a[c - 1] - o;
      return a.push(6), a.reverse();
    }, r.getPositions = function(n) {
      const i = [], s = r.getRowColCoords(n), o = s.length;
      for (let a = 0; a < o; a++)
        for (let c = 0; c < o; c++)
          a === 0 && c === 0 || // top-left
          a === 0 && c === o - 1 || // bottom-left
          a === o - 1 && c === 0 || i.push([s[a], s[c]]);
      return i;
    };
  })(ka)), ka;
}
var Ha = {}, Lu;
function JM() {
  if (Lu) return Ha;
  Lu = 1;
  const r = Ni().getSymbolSize, e = 7;
  return Ha.getPositions = function(n) {
    const i = r(n);
    return [
      // top-left
      [0, 0],
      // top-right
      [i - e, 0],
      // bottom-left
      [0, i - e]
    ];
  }, Ha;
}
var Ga = {}, Pu;
function jM() {
  return Pu || (Pu = 1, (function(r) {
    r.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    const e = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    r.isValid = function(i) {
      return i != null && i !== "" && !isNaN(i) && i >= 0 && i <= 7;
    }, r.from = function(i) {
      return r.isValid(i) ? parseInt(i, 10) : void 0;
    }, r.getPenaltyN1 = function(i) {
      const s = i.size;
      let o = 0, a = 0, c = 0, l = null, h = null;
      for (let u = 0; u < s; u++) {
        a = c = 0, l = h = null;
        for (let d = 0; d < s; d++) {
          let f = i.get(u, d);
          f === l ? a++ : (a >= 5 && (o += e.N1 + (a - 5)), l = f, a = 1), f = i.get(d, u), f === h ? c++ : (c >= 5 && (o += e.N1 + (c - 5)), h = f, c = 1);
        }
        a >= 5 && (o += e.N1 + (a - 5)), c >= 5 && (o += e.N1 + (c - 5));
      }
      return o;
    }, r.getPenaltyN2 = function(i) {
      const s = i.size;
      let o = 0;
      for (let a = 0; a < s - 1; a++)
        for (let c = 0; c < s - 1; c++) {
          const l = i.get(a, c) + i.get(a, c + 1) + i.get(a + 1, c) + i.get(a + 1, c + 1);
          (l === 4 || l === 0) && o++;
        }
      return o * e.N2;
    }, r.getPenaltyN3 = function(i) {
      const s = i.size;
      let o = 0, a = 0, c = 0;
      for (let l = 0; l < s; l++) {
        a = c = 0;
        for (let h = 0; h < s; h++)
          a = a << 1 & 2047 | i.get(l, h), h >= 10 && (a === 1488 || a === 93) && o++, c = c << 1 & 2047 | i.get(h, l), h >= 10 && (c === 1488 || c === 93) && o++;
      }
      return o * e.N3;
    }, r.getPenaltyN4 = function(i) {
      let s = 0;
      const o = i.data.length;
      for (let c = 0; c < o; c++) s += i.data[c];
      return Math.abs(Math.ceil(s * 100 / o / 5) - 10) * e.N4;
    };
    function t(n, i, s) {
      switch (n) {
        case r.Patterns.PATTERN000:
          return (i + s) % 2 === 0;
        case r.Patterns.PATTERN001:
          return i % 2 === 0;
        case r.Patterns.PATTERN010:
          return s % 3 === 0;
        case r.Patterns.PATTERN011:
          return (i + s) % 3 === 0;
        case r.Patterns.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(s / 3)) % 2 === 0;
        case r.Patterns.PATTERN101:
          return i * s % 2 + i * s % 3 === 0;
        case r.Patterns.PATTERN110:
          return (i * s % 2 + i * s % 3) % 2 === 0;
        case r.Patterns.PATTERN111:
          return (i * s % 3 + (i + s) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + n);
      }
    }
    r.applyMask = function(i, s) {
      const o = s.size;
      for (let a = 0; a < o; a++)
        for (let c = 0; c < o; c++)
          s.isReserved(c, a) || s.xor(c, a, t(i, c, a));
    }, r.getBestMask = function(i, s) {
      const o = Object.keys(r.Patterns).length;
      let a = 0, c = 1 / 0;
      for (let l = 0; l < o; l++) {
        s(l), r.applyMask(l, i);
        const h = r.getPenaltyN1(i) + r.getPenaltyN2(i) + r.getPenaltyN3(i) + r.getPenaltyN4(i);
        r.applyMask(l, i), h < c && (c = h, a = l);
      }
      return a;
    };
  })(Ga)), Ga;
}
var _o = {}, Iu;
function ap() {
  if (Iu) return _o;
  Iu = 1;
  const r = Bl(), e = [
    // L  M  Q  H
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    4,
    1,
    2,
    4,
    4,
    2,
    4,
    4,
    4,
    2,
    4,
    6,
    5,
    2,
    4,
    6,
    6,
    2,
    5,
    8,
    8,
    4,
    5,
    8,
    8,
    4,
    5,
    8,
    11,
    4,
    8,
    10,
    11,
    4,
    9,
    12,
    16,
    4,
    9,
    16,
    16,
    6,
    10,
    12,
    18,
    6,
    10,
    17,
    16,
    6,
    11,
    16,
    19,
    6,
    13,
    18,
    21,
    7,
    14,
    21,
    25,
    8,
    16,
    20,
    25,
    8,
    17,
    23,
    25,
    9,
    17,
    23,
    34,
    9,
    18,
    25,
    30,
    10,
    20,
    27,
    32,
    12,
    21,
    29,
    35,
    12,
    23,
    34,
    37,
    12,
    25,
    34,
    40,
    13,
    26,
    35,
    42,
    14,
    28,
    38,
    45,
    15,
    29,
    40,
    48,
    16,
    31,
    43,
    51,
    17,
    33,
    45,
    54,
    18,
    35,
    48,
    57,
    19,
    37,
    51,
    60,
    19,
    38,
    53,
    63,
    20,
    40,
    56,
    66,
    21,
    43,
    59,
    70,
    22,
    45,
    62,
    74,
    24,
    47,
    65,
    77,
    25,
    49,
    68,
    81
  ], t = [
    // L  M  Q  H
    7,
    10,
    13,
    17,
    10,
    16,
    22,
    28,
    15,
    26,
    36,
    44,
    20,
    36,
    52,
    64,
    26,
    48,
    72,
    88,
    36,
    64,
    96,
    112,
    40,
    72,
    108,
    130,
    48,
    88,
    132,
    156,
    60,
    110,
    160,
    192,
    72,
    130,
    192,
    224,
    80,
    150,
    224,
    264,
    96,
    176,
    260,
    308,
    104,
    198,
    288,
    352,
    120,
    216,
    320,
    384,
    132,
    240,
    360,
    432,
    144,
    280,
    408,
    480,
    168,
    308,
    448,
    532,
    180,
    338,
    504,
    588,
    196,
    364,
    546,
    650,
    224,
    416,
    600,
    700,
    224,
    442,
    644,
    750,
    252,
    476,
    690,
    816,
    270,
    504,
    750,
    900,
    300,
    560,
    810,
    960,
    312,
    588,
    870,
    1050,
    336,
    644,
    952,
    1110,
    360,
    700,
    1020,
    1200,
    390,
    728,
    1050,
    1260,
    420,
    784,
    1140,
    1350,
    450,
    812,
    1200,
    1440,
    480,
    868,
    1290,
    1530,
    510,
    924,
    1350,
    1620,
    540,
    980,
    1440,
    1710,
    570,
    1036,
    1530,
    1800,
    570,
    1064,
    1590,
    1890,
    600,
    1120,
    1680,
    1980,
    630,
    1204,
    1770,
    2100,
    660,
    1260,
    1860,
    2220,
    720,
    1316,
    1950,
    2310,
    750,
    1372,
    2040,
    2430
  ];
  return _o.getBlocksCount = function(i, s) {
    switch (s) {
      case r.L:
        return e[(i - 1) * 4 + 0];
      case r.M:
        return e[(i - 1) * 4 + 1];
      case r.Q:
        return e[(i - 1) * 4 + 2];
      case r.H:
        return e[(i - 1) * 4 + 3];
      default:
        return;
    }
  }, _o.getTotalCodewordsCount = function(i, s) {
    switch (s) {
      case r.L:
        return t[(i - 1) * 4 + 0];
      case r.M:
        return t[(i - 1) * 4 + 1];
      case r.Q:
        return t[(i - 1) * 4 + 2];
      case r.H:
        return t[(i - 1) * 4 + 3];
      default:
        return;
    }
  }, _o;
}
var Va = {}, Gs = {}, Uu;
function QM() {
  if (Uu) return Gs;
  Uu = 1;
  const r = new Uint8Array(512), e = new Uint8Array(256);
  return (function() {
    let n = 1;
    for (let i = 0; i < 255; i++)
      r[i] = n, e[n] = i, n <<= 1, n & 256 && (n ^= 285);
    for (let i = 255; i < 512; i++)
      r[i] = r[i - 255];
  })(), Gs.log = function(n) {
    if (n < 1) throw new Error("log(" + n + ")");
    return e[n];
  }, Gs.exp = function(n) {
    return r[n];
  }, Gs.mul = function(n, i) {
    return n === 0 || i === 0 ? 0 : r[e[n] + e[i]];
  }, Gs;
}
var Du;
function $M() {
  return Du || (Du = 1, (function(r) {
    const e = QM();
    r.mul = function(n, i) {
      const s = new Uint8Array(n.length + i.length - 1);
      for (let o = 0; o < n.length; o++)
        for (let a = 0; a < i.length; a++)
          s[o + a] ^= e.mul(n[o], i[a]);
      return s;
    }, r.mod = function(n, i) {
      let s = new Uint8Array(n);
      for (; s.length - i.length >= 0; ) {
        const o = s[0];
        for (let c = 0; c < i.length; c++)
          s[c] ^= e.mul(i[c], o);
        let a = 0;
        for (; a < s.length && s[a] === 0; ) a++;
        s = s.slice(a);
      }
      return s;
    }, r.generateECPolynomial = function(n) {
      let i = new Uint8Array([1]);
      for (let s = 0; s < n; s++)
        i = r.mul(i, new Uint8Array([1, e.exp(s)]));
      return i;
    };
  })(Va)), Va;
}
var Wa, Nu;
function eS() {
  if (Nu) return Wa;
  Nu = 1;
  const r = $M();
  function e(t) {
    this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
  }
  return e.prototype.initialize = function(n) {
    this.degree = n, this.genPoly = r.generateECPolynomial(this.degree);
  }, e.prototype.encode = function(n) {
    if (!this.genPoly)
      throw new Error("Encoder not initialized");
    const i = new Uint8Array(n.length + this.degree);
    i.set(n);
    const s = r.mod(i, this.genPoly), o = this.degree - s.length;
    if (o > 0) {
      const a = new Uint8Array(this.degree);
      return a.set(s, o), a;
    }
    return s;
  }, Wa = e, Wa;
}
var Xa = {}, qa = {}, Ya = {}, Ou;
function cp() {
  return Ou || (Ou = 1, Ya.isValid = function(e) {
    return !isNaN(e) && e >= 1 && e <= 40;
  }), Ya;
}
var hn = {}, Fu;
function lp() {
  if (Fu) return hn;
  Fu = 1;
  const r = "[0-9]+", e = "[A-Z $%*+\\-./:]+";
  let t = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  t = t.replace(/u/g, "\\u");
  const n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + t + `)(?:.|[\r
]))+`;
  hn.KANJI = new RegExp(t, "g"), hn.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), hn.BYTE = new RegExp(n, "g"), hn.NUMERIC = new RegExp(r, "g"), hn.ALPHANUMERIC = new RegExp(e, "g");
  const i = new RegExp("^" + t + "$"), s = new RegExp("^" + r + "$"), o = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  return hn.testKanji = function(c) {
    return i.test(c);
  }, hn.testNumeric = function(c) {
    return s.test(c);
  }, hn.testAlphanumeric = function(c) {
    return o.test(c);
  }, hn;
}
var Bu;
function Oi() {
  return Bu || (Bu = 1, (function(r) {
    const e = cp(), t = lp();
    r.NUMERIC = {
      id: "Numeric",
      bit: 1,
      ccBits: [10, 12, 14]
    }, r.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 2,
      ccBits: [9, 11, 13]
    }, r.BYTE = {
      id: "Byte",
      bit: 4,
      ccBits: [8, 16, 16]
    }, r.KANJI = {
      id: "Kanji",
      bit: 8,
      ccBits: [8, 10, 12]
    }, r.MIXED = {
      bit: -1
    }, r.getCharCountIndicator = function(s, o) {
      if (!s.ccBits) throw new Error("Invalid mode: " + s);
      if (!e.isValid(o))
        throw new Error("Invalid version: " + o);
      return o >= 1 && o < 10 ? s.ccBits[0] : o < 27 ? s.ccBits[1] : s.ccBits[2];
    }, r.getBestModeForData = function(s) {
      return t.testNumeric(s) ? r.NUMERIC : t.testAlphanumeric(s) ? r.ALPHANUMERIC : t.testKanji(s) ? r.KANJI : r.BYTE;
    }, r.toString = function(s) {
      if (s && s.id) return s.id;
      throw new Error("Invalid mode");
    }, r.isValid = function(s) {
      return s && s.bit && s.ccBits;
    };
    function n(i) {
      if (typeof i != "string")
        throw new Error("Param is not a string");
      switch (i.toLowerCase()) {
        case "numeric":
          return r.NUMERIC;
        case "alphanumeric":
          return r.ALPHANUMERIC;
        case "kanji":
          return r.KANJI;
        case "byte":
          return r.BYTE;
        default:
          throw new Error("Unknown mode: " + i);
      }
    }
    r.from = function(s, o) {
      if (r.isValid(s))
        return s;
      try {
        return n(s);
      } catch {
        return o;
      }
    };
  })(qa)), qa;
}
var zu;
function tS() {
  return zu || (zu = 1, (function(r) {
    const e = Ni(), t = ap(), n = Bl(), i = Oi(), s = cp(), o = 7973, a = e.getBCHDigit(o);
    function c(d, f, m) {
      for (let y = 1; y <= 40; y++)
        if (f <= r.getCapacity(y, m, d))
          return y;
    }
    function l(d, f) {
      return i.getCharCountIndicator(d, f) + 4;
    }
    function h(d, f) {
      let m = 0;
      return d.forEach(function(y) {
        const g = l(y.mode, f);
        m += g + y.getBitsLength();
      }), m;
    }
    function u(d, f) {
      for (let m = 1; m <= 40; m++)
        if (h(d, m) <= r.getCapacity(m, f, i.MIXED))
          return m;
    }
    r.from = function(f, m) {
      return s.isValid(f) ? parseInt(f, 10) : m;
    }, r.getCapacity = function(f, m, y) {
      if (!s.isValid(f))
        throw new Error("Invalid QR Code version");
      typeof y > "u" && (y = i.BYTE);
      const g = e.getSymbolTotalCodewords(f), p = t.getTotalCodewordsCount(f, m), x = (g - p) * 8;
      if (y === i.MIXED) return x;
      const _ = x - l(y, f);
      switch (y) {
        case i.NUMERIC:
          return Math.floor(_ / 10 * 3);
        case i.ALPHANUMERIC:
          return Math.floor(_ / 11 * 2);
        case i.KANJI:
          return Math.floor(_ / 13);
        case i.BYTE:
        default:
          return Math.floor(_ / 8);
      }
    }, r.getBestVersionForData = function(f, m) {
      let y;
      const g = n.from(m, n.M);
      if (Array.isArray(f)) {
        if (f.length > 1)
          return u(f, g);
        if (f.length === 0)
          return 1;
        y = f[0];
      } else
        y = f;
      return c(y.mode, y.getLength(), g);
    }, r.getEncodedBits = function(f) {
      if (!s.isValid(f) || f < 7)
        throw new Error("Invalid QR Code version");
      let m = f << 12;
      for (; e.getBCHDigit(m) - a >= 0; )
        m ^= o << e.getBCHDigit(m) - a;
      return f << 12 | m;
    };
  })(Xa)), Xa;
}
var Ka = {}, ku;
function nS() {
  if (ku) return Ka;
  ku = 1;
  const r = Ni(), e = 1335, t = 21522, n = r.getBCHDigit(e);
  return Ka.getEncodedBits = function(s, o) {
    const a = s.bit << 3 | o;
    let c = a << 10;
    for (; r.getBCHDigit(c) - n >= 0; )
      c ^= e << r.getBCHDigit(c) - n;
    return (a << 10 | c) ^ t;
  }, Ka;
}
var Za = {}, Ja, Hu;
function iS() {
  if (Hu) return Ja;
  Hu = 1;
  const r = Oi();
  function e(t) {
    this.mode = r.NUMERIC, this.data = t.toString();
  }
  return e.getBitsLength = function(n) {
    return 10 * Math.floor(n / 3) + (n % 3 ? n % 3 * 3 + 1 : 0);
  }, e.prototype.getLength = function() {
    return this.data.length;
  }, e.prototype.getBitsLength = function() {
    return e.getBitsLength(this.data.length);
  }, e.prototype.write = function(n) {
    let i, s, o;
    for (i = 0; i + 3 <= this.data.length; i += 3)
      s = this.data.substr(i, 3), o = parseInt(s, 10), n.put(o, 10);
    const a = this.data.length - i;
    a > 0 && (s = this.data.substr(i), o = parseInt(s, 10), n.put(o, a * 3 + 1));
  }, Ja = e, Ja;
}
var ja, Gu;
function sS() {
  if (Gu) return ja;
  Gu = 1;
  const r = Oi(), e = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "$",
    "%",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":"
  ];
  function t(n) {
    this.mode = r.ALPHANUMERIC, this.data = n;
  }
  return t.getBitsLength = function(i) {
    return 11 * Math.floor(i / 2) + 6 * (i % 2);
  }, t.prototype.getLength = function() {
    return this.data.length;
  }, t.prototype.getBitsLength = function() {
    return t.getBitsLength(this.data.length);
  }, t.prototype.write = function(i) {
    let s;
    for (s = 0; s + 2 <= this.data.length; s += 2) {
      let o = e.indexOf(this.data[s]) * 45;
      o += e.indexOf(this.data[s + 1]), i.put(o, 11);
    }
    this.data.length % 2 && i.put(e.indexOf(this.data[s]), 6);
  }, ja = t, ja;
}
var Qa, Vu;
function rS() {
  return Vu || (Vu = 1, Qa = function(e) {
    for (var t = [], n = e.length, i = 0; i < n; i++) {
      var s = e.charCodeAt(i);
      if (s >= 55296 && s <= 56319 && n > i + 1) {
        var o = e.charCodeAt(i + 1);
        o >= 56320 && o <= 57343 && (s = (s - 55296) * 1024 + o - 56320 + 65536, i += 1);
      }
      if (s < 128) {
        t.push(s);
        continue;
      }
      if (s < 2048) {
        t.push(s >> 6 | 192), t.push(s & 63 | 128);
        continue;
      }
      if (s < 55296 || s >= 57344 && s < 65536) {
        t.push(s >> 12 | 224), t.push(s >> 6 & 63 | 128), t.push(s & 63 | 128);
        continue;
      }
      if (s >= 65536 && s <= 1114111) {
        t.push(s >> 18 | 240), t.push(s >> 12 & 63 | 128), t.push(s >> 6 & 63 | 128), t.push(s & 63 | 128);
        continue;
      }
      t.push(239, 191, 189);
    }
    return new Uint8Array(t).buffer;
  }), Qa;
}
var $a, Wu;
function oS() {
  if (Wu) return $a;
  Wu = 1;
  const r = rS(), e = Oi();
  function t(n) {
    this.mode = e.BYTE, typeof n == "string" && (n = r(n)), this.data = new Uint8Array(n);
  }
  return t.getBitsLength = function(i) {
    return i * 8;
  }, t.prototype.getLength = function() {
    return this.data.length;
  }, t.prototype.getBitsLength = function() {
    return t.getBitsLength(this.data.length);
  }, t.prototype.write = function(n) {
    for (let i = 0, s = this.data.length; i < s; i++)
      n.put(this.data[i], 8);
  }, $a = t, $a;
}
var ec, Xu;
function aS() {
  if (Xu) return ec;
  Xu = 1;
  const r = Oi(), e = Ni();
  function t(n) {
    this.mode = r.KANJI, this.data = n;
  }
  return t.getBitsLength = function(i) {
    return i * 13;
  }, t.prototype.getLength = function() {
    return this.data.length;
  }, t.prototype.getBitsLength = function() {
    return t.getBitsLength(this.data.length);
  }, t.prototype.write = function(n) {
    let i;
    for (i = 0; i < this.data.length; i++) {
      let s = e.toSJIS(this.data[i]);
      if (s >= 33088 && s <= 40956)
        s -= 33088;
      else if (s >= 57408 && s <= 60351)
        s -= 49472;
      else
        throw new Error(
          "Invalid SJIS character: " + this.data[i] + `
Make sure your charset is UTF-8`
        );
      s = (s >>> 8 & 255) * 192 + (s & 255), n.put(s, 13);
    }
  }, ec = t, ec;
}
var tc = { exports: {} }, qu;
function cS() {
  return qu || (qu = 1, (function(r) {
    var e = {
      single_source_shortest_paths: function(t, n, i) {
        var s = {}, o = {};
        o[n] = 0;
        var a = e.PriorityQueue.make();
        a.push(n, 0);
        for (var c, l, h, u, d, f, m, y, g; !a.empty(); ) {
          c = a.pop(), l = c.value, u = c.cost, d = t[l] || {};
          for (h in d)
            d.hasOwnProperty(h) && (f = d[h], m = u + f, y = o[h], g = typeof o[h] > "u", (g || y > m) && (o[h] = m, a.push(h, m), s[h] = l));
        }
        if (typeof i < "u" && typeof o[i] > "u") {
          var p = ["Could not find a path from ", n, " to ", i, "."].join("");
          throw new Error(p);
        }
        return s;
      },
      extract_shortest_path_from_predecessor_list: function(t, n) {
        for (var i = [], s = n; s; )
          i.push(s), t[s], s = t[s];
        return i.reverse(), i;
      },
      find_path: function(t, n, i) {
        var s = e.single_source_shortest_paths(t, n, i);
        return e.extract_shortest_path_from_predecessor_list(
          s,
          i
        );
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(t) {
          var n = e.PriorityQueue, i = {}, s;
          t = t || {};
          for (s in n)
            n.hasOwnProperty(s) && (i[s] = n[s]);
          return i.queue = [], i.sorter = t.sorter || n.default_sorter, i;
        },
        default_sorter: function(t, n) {
          return t.cost - n.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(t, n) {
          var i = { value: t, cost: n };
          this.queue.push(i), this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    r.exports = e;
  })(tc)), tc.exports;
}
var Yu;
function lS() {
  return Yu || (Yu = 1, (function(r) {
    const e = Oi(), t = iS(), n = sS(), i = oS(), s = aS(), o = lp(), a = Ni(), c = cS();
    function l(p) {
      return unescape(encodeURIComponent(p)).length;
    }
    function h(p, x, _) {
      const v = [];
      let S;
      for (; (S = p.exec(_)) !== null; )
        v.push({
          data: S[0],
          index: S.index,
          mode: x,
          length: S[0].length
        });
      return v;
    }
    function u(p) {
      const x = h(o.NUMERIC, e.NUMERIC, p), _ = h(o.ALPHANUMERIC, e.ALPHANUMERIC, p);
      let v, S;
      return a.isKanjiModeEnabled() ? (v = h(o.BYTE, e.BYTE, p), S = h(o.KANJI, e.KANJI, p)) : (v = h(o.BYTE_KANJI, e.BYTE, p), S = []), x.concat(_, v, S).sort(function(T, A) {
        return T.index - A.index;
      }).map(function(T) {
        return {
          data: T.data,
          mode: T.mode,
          length: T.length
        };
      });
    }
    function d(p, x) {
      switch (x) {
        case e.NUMERIC:
          return t.getBitsLength(p);
        case e.ALPHANUMERIC:
          return n.getBitsLength(p);
        case e.KANJI:
          return s.getBitsLength(p);
        case e.BYTE:
          return i.getBitsLength(p);
      }
    }
    function f(p) {
      return p.reduce(function(x, _) {
        const v = x.length - 1 >= 0 ? x[x.length - 1] : null;
        return v && v.mode === _.mode ? (x[x.length - 1].data += _.data, x) : (x.push(_), x);
      }, []);
    }
    function m(p) {
      const x = [];
      for (let _ = 0; _ < p.length; _++) {
        const v = p[_];
        switch (v.mode) {
          case e.NUMERIC:
            x.push([
              v,
              { data: v.data, mode: e.ALPHANUMERIC, length: v.length },
              { data: v.data, mode: e.BYTE, length: v.length }
            ]);
            break;
          case e.ALPHANUMERIC:
            x.push([
              v,
              { data: v.data, mode: e.BYTE, length: v.length }
            ]);
            break;
          case e.KANJI:
            x.push([
              v,
              { data: v.data, mode: e.BYTE, length: l(v.data) }
            ]);
            break;
          case e.BYTE:
            x.push([
              { data: v.data, mode: e.BYTE, length: l(v.data) }
            ]);
        }
      }
      return x;
    }
    function y(p, x) {
      const _ = {}, v = { start: {} };
      let S = ["start"];
      for (let E = 0; E < p.length; E++) {
        const T = p[E], A = [];
        for (let M = 0; M < T.length; M++) {
          const b = T[M], P = "" + E + M;
          A.push(P), _[P] = { node: b, lastCount: 0 }, v[P] = {};
          for (let F = 0; F < S.length; F++) {
            const D = S[F];
            _[D] && _[D].node.mode === b.mode ? (v[D][P] = d(_[D].lastCount + b.length, b.mode) - d(_[D].lastCount, b.mode), _[D].lastCount += b.length) : (_[D] && (_[D].lastCount = b.length), v[D][P] = d(b.length, b.mode) + 4 + e.getCharCountIndicator(b.mode, x));
          }
        }
        S = A;
      }
      for (let E = 0; E < S.length; E++)
        v[S[E]].end = 0;
      return { map: v, table: _ };
    }
    function g(p, x) {
      let _;
      const v = e.getBestModeForData(p);
      if (_ = e.from(x, v), _ !== e.BYTE && _.bit < v.bit)
        throw new Error('"' + p + '" cannot be encoded with mode ' + e.toString(_) + `.
 Suggested mode is: ` + e.toString(v));
      switch (_ === e.KANJI && !a.isKanjiModeEnabled() && (_ = e.BYTE), _) {
        case e.NUMERIC:
          return new t(p);
        case e.ALPHANUMERIC:
          return new n(p);
        case e.KANJI:
          return new s(p);
        case e.BYTE:
          return new i(p);
      }
    }
    r.fromArray = function(x) {
      return x.reduce(function(_, v) {
        return typeof v == "string" ? _.push(g(v, null)) : v.data && _.push(g(v.data, v.mode)), _;
      }, []);
    }, r.fromString = function(x, _) {
      const v = u(x, a.isKanjiModeEnabled()), S = m(v), E = y(S, _), T = c.find_path(E.map, "start", "end"), A = [];
      for (let M = 1; M < T.length - 1; M++)
        A.push(E.table[T[M]].node);
      return r.fromArray(f(A));
    }, r.rawSplit = function(x) {
      return r.fromArray(
        u(x, a.isKanjiModeEnabled())
      );
    };
  })(Za)), Za;
}
var Ku;
function hS() {
  if (Ku) return Oa;
  Ku = 1;
  const r = Ni(), e = Bl(), t = YM(), n = KM(), i = ZM(), s = JM(), o = jM(), a = ap(), c = eS(), l = tS(), h = nS(), u = Oi(), d = lS();
  function f(E, T) {
    const A = E.size, M = s.getPositions(T);
    for (let b = 0; b < M.length; b++) {
      const P = M[b][0], F = M[b][1];
      for (let D = -1; D <= 7; D++)
        if (!(P + D <= -1 || A <= P + D))
          for (let N = -1; N <= 7; N++)
            F + N <= -1 || A <= F + N || (D >= 0 && D <= 6 && (N === 0 || N === 6) || N >= 0 && N <= 6 && (D === 0 || D === 6) || D >= 2 && D <= 4 && N >= 2 && N <= 4 ? E.set(P + D, F + N, !0, !0) : E.set(P + D, F + N, !1, !0));
    }
  }
  function m(E) {
    const T = E.size;
    for (let A = 8; A < T - 8; A++) {
      const M = A % 2 === 0;
      E.set(A, 6, M, !0), E.set(6, A, M, !0);
    }
  }
  function y(E, T) {
    const A = i.getPositions(T);
    for (let M = 0; M < A.length; M++) {
      const b = A[M][0], P = A[M][1];
      for (let F = -2; F <= 2; F++)
        for (let D = -2; D <= 2; D++)
          F === -2 || F === 2 || D === -2 || D === 2 || F === 0 && D === 0 ? E.set(b + F, P + D, !0, !0) : E.set(b + F, P + D, !1, !0);
    }
  }
  function g(E, T) {
    const A = E.size, M = l.getEncodedBits(T);
    let b, P, F;
    for (let D = 0; D < 18; D++)
      b = Math.floor(D / 3), P = D % 3 + A - 8 - 3, F = (M >> D & 1) === 1, E.set(b, P, F, !0), E.set(P, b, F, !0);
  }
  function p(E, T, A) {
    const M = E.size, b = h.getEncodedBits(T, A);
    let P, F;
    for (P = 0; P < 15; P++)
      F = (b >> P & 1) === 1, P < 6 ? E.set(P, 8, F, !0) : P < 8 ? E.set(P + 1, 8, F, !0) : E.set(M - 15 + P, 8, F, !0), P < 8 ? E.set(8, M - P - 1, F, !0) : P < 9 ? E.set(8, 15 - P - 1 + 1, F, !0) : E.set(8, 15 - P - 1, F, !0);
    E.set(M - 8, 8, 1, !0);
  }
  function x(E, T) {
    const A = E.size;
    let M = -1, b = A - 1, P = 7, F = 0;
    for (let D = A - 1; D > 0; D -= 2)
      for (D === 6 && D--; ; ) {
        for (let N = 0; N < 2; N++)
          if (!E.isReserved(b, D - N)) {
            let B = !1;
            F < T.length && (B = (T[F] >>> P & 1) === 1), E.set(b, D - N, B), P--, P === -1 && (F++, P = 7);
          }
        if (b += M, b < 0 || A <= b) {
          b -= M, M = -M;
          break;
        }
      }
  }
  function _(E, T, A) {
    const M = new t();
    A.forEach(function(N) {
      M.put(N.mode.bit, 4), M.put(N.getLength(), u.getCharCountIndicator(N.mode, E)), N.write(M);
    });
    const b = r.getSymbolTotalCodewords(E), P = a.getTotalCodewordsCount(E, T), F = (b - P) * 8;
    for (M.getLengthInBits() + 4 <= F && M.put(0, 4); M.getLengthInBits() % 8 !== 0; )
      M.putBit(0);
    const D = (F - M.getLengthInBits()) / 8;
    for (let N = 0; N < D; N++)
      M.put(N % 2 ? 17 : 236, 8);
    return v(M, E, T);
  }
  function v(E, T, A) {
    const M = r.getSymbolTotalCodewords(T), b = a.getTotalCodewordsCount(T, A), P = M - b, F = a.getBlocksCount(T, A), D = M % F, N = F - D, B = Math.floor(M / F), J = Math.floor(P / F), W = J + 1, X = B - J, Q = new c(X);
    let te = 0;
    const ue = new Array(F), H = new Array(F);
    let ne = 0;
    const ie = new Uint8Array(E.buffer);
    for (let we = 0; we < F; we++) {
      const Ye = we < N ? J : W;
      ue[we] = ie.slice(te, te + Ye), H[we] = Q.encode(ue[we]), te += Ye, ne = Math.max(ne, Ye);
    }
    const pe = new Uint8Array(M);
    let _e = 0, me, Ce;
    for (me = 0; me < ne; me++)
      for (Ce = 0; Ce < F; Ce++)
        me < ue[Ce].length && (pe[_e++] = ue[Ce][me]);
    for (me = 0; me < X; me++)
      for (Ce = 0; Ce < F; Ce++)
        pe[_e++] = H[Ce][me];
    return pe;
  }
  function S(E, T, A, M) {
    let b;
    if (Array.isArray(E))
      b = d.fromArray(E);
    else if (typeof E == "string") {
      let B = T;
      if (!B) {
        const J = d.rawSplit(E);
        B = l.getBestVersionForData(J, A);
      }
      b = d.fromString(E, B || 40);
    } else
      throw new Error("Invalid data");
    const P = l.getBestVersionForData(b, A);
    if (!P)
      throw new Error("The amount of data is too big to be stored in a QR Code");
    if (!T)
      T = P;
    else if (T < P)
      throw new Error(
        `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + P + `.
`
      );
    const F = _(T, A, b), D = r.getSymbolSize(T), N = new n(D);
    return f(N, T), m(N), y(N, T), p(N, A, 0), T >= 7 && g(N, T), x(N, F), isNaN(M) && (M = o.getBestMask(
      N,
      p.bind(null, N, A)
    )), o.applyMask(M, N), p(N, A, M), {
      modules: N,
      version: T,
      errorCorrectionLevel: A,
      maskPattern: M,
      segments: b
    };
  }
  return Oa.create = function(T, A) {
    if (typeof T > "u" || T === "")
      throw new Error("No input text");
    let M = e.M, b, P;
    return typeof A < "u" && (M = e.from(A.errorCorrectionLevel, e.M), b = l.from(A.version), P = o.from(A.maskPattern), A.toSJISFunc && r.setToSJISFunction(A.toSJISFunc)), S(T, b, M, P);
  }, Oa;
}
var nc = {}, ic = {}, Zu;
function hp() {
  return Zu || (Zu = 1, (function(r) {
    function e(t) {
      if (typeof t == "number" && (t = t.toString()), typeof t != "string")
        throw new Error("Color should be defined as hex string");
      let n = t.slice().replace("#", "").split("");
      if (n.length < 3 || n.length === 5 || n.length > 8)
        throw new Error("Invalid hex color: " + t);
      (n.length === 3 || n.length === 4) && (n = Array.prototype.concat.apply([], n.map(function(s) {
        return [s, s];
      }))), n.length === 6 && n.push("F", "F");
      const i = parseInt(n.join(""), 16);
      return {
        r: i >> 24 & 255,
        g: i >> 16 & 255,
        b: i >> 8 & 255,
        a: i & 255,
        hex: "#" + n.slice(0, 6).join("")
      };
    }
    r.getOptions = function(n) {
      n || (n = {}), n.color || (n.color = {});
      const i = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin, s = n.width && n.width >= 21 ? n.width : void 0, o = n.scale || 4;
      return {
        width: s,
        scale: s ? 4 : o,
        margin: i,
        color: {
          dark: e(n.color.dark || "#000000ff"),
          light: e(n.color.light || "#ffffffff")
        },
        type: n.type,
        rendererOpts: n.rendererOpts || {}
      };
    }, r.getScale = function(n, i) {
      return i.width && i.width >= n + i.margin * 2 ? i.width / (n + i.margin * 2) : i.scale;
    }, r.getImageWidth = function(n, i) {
      const s = r.getScale(n, i);
      return Math.floor((n + i.margin * 2) * s);
    }, r.qrToImageData = function(n, i, s) {
      const o = i.modules.size, a = i.modules.data, c = r.getScale(o, s), l = Math.floor((o + s.margin * 2) * c), h = s.margin * c, u = [s.color.light, s.color.dark];
      for (let d = 0; d < l; d++)
        for (let f = 0; f < l; f++) {
          let m = (d * l + f) * 4, y = s.color.light;
          if (d >= h && f >= h && d < l - h && f < l - h) {
            const g = Math.floor((d - h) / c), p = Math.floor((f - h) / c);
            y = u[a[g * o + p] ? 1 : 0];
          }
          n[m++] = y.r, n[m++] = y.g, n[m++] = y.b, n[m] = y.a;
        }
    };
  })(ic)), ic;
}
var Ju;
function uS() {
  return Ju || (Ju = 1, (function(r) {
    const e = hp();
    function t(i, s, o) {
      i.clearRect(0, 0, s.width, s.height), s.style || (s.style = {}), s.height = o, s.width = o, s.style.height = o + "px", s.style.width = o + "px";
    }
    function n() {
      try {
        return document.createElement("canvas");
      } catch {
        throw new Error("You need to specify a canvas element");
      }
    }
    r.render = function(s, o, a) {
      let c = a, l = o;
      typeof c > "u" && (!o || !o.getContext) && (c = o, o = void 0), o || (l = n()), c = e.getOptions(c);
      const h = e.getImageWidth(s.modules.size, c), u = l.getContext("2d"), d = u.createImageData(h, h);
      return e.qrToImageData(d.data, s, c), t(u, l, h), u.putImageData(d, 0, 0), l;
    }, r.renderToDataURL = function(s, o, a) {
      let c = a;
      typeof c > "u" && (!o || !o.getContext) && (c = o, o = void 0), c || (c = {});
      const l = r.render(s, o, c), h = c.type || "image/png", u = c.rendererOpts || {};
      return l.toDataURL(h, u.quality);
    };
  })(nc)), nc;
}
var sc = {}, ju;
function dS() {
  if (ju) return sc;
  ju = 1;
  const r = hp();
  function e(i, s) {
    const o = i.a / 255, a = s + '="' + i.hex + '"';
    return o < 1 ? a + " " + s + '-opacity="' + o.toFixed(2).slice(1) + '"' : a;
  }
  function t(i, s, o) {
    let a = i + s;
    return typeof o < "u" && (a += " " + o), a;
  }
  function n(i, s, o) {
    let a = "", c = 0, l = !1, h = 0;
    for (let u = 0; u < i.length; u++) {
      const d = Math.floor(u % s), f = Math.floor(u / s);
      !d && !l && (l = !0), i[u] ? (h++, u > 0 && d > 0 && i[u - 1] || (a += l ? t("M", d + o, 0.5 + f + o) : t("m", c, 0), c = 0, l = !1), d + 1 < s && i[u + 1] || (a += t("h", h), h = 0)) : c++;
    }
    return a;
  }
  return sc.render = function(s, o, a) {
    const c = r.getOptions(o), l = s.modules.size, h = s.modules.data, u = l + c.margin * 2, d = c.color.light.a ? "<path " + e(c.color.light, "fill") + ' d="M0 0h' + u + "v" + u + 'H0z"/>' : "", f = "<path " + e(c.color.dark, "stroke") + ' d="' + n(h, l, c.margin) + '"/>', m = 'viewBox="0 0 ' + u + " " + u + '"', g = '<svg xmlns="http://www.w3.org/2000/svg" ' + (c.width ? 'width="' + c.width + '" height="' + c.width + '" ' : "") + m + ' shape-rendering="crispEdges">' + d + f + `</svg>
`;
    return typeof a == "function" && a(null, g), g;
  }, sc;
}
var Qu;
function fS() {
  if (Qu) return rs;
  Qu = 1;
  const r = qM(), e = hS(), t = uS(), n = dS();
  function i(s, o, a, c, l) {
    const h = [].slice.call(arguments, 1), u = h.length, d = typeof h[u - 1] == "function";
    if (!d && !r())
      throw new Error("Callback required as last argument");
    if (d) {
      if (u < 2)
        throw new Error("Too few arguments provided");
      u === 2 ? (l = a, a = o, o = c = void 0) : u === 3 && (o.getContext && typeof l > "u" ? (l = c, c = void 0) : (l = c, c = a, a = o, o = void 0));
    } else {
      if (u < 1)
        throw new Error("Too few arguments provided");
      return u === 1 ? (a = o, o = c = void 0) : u === 2 && !o.getContext && (c = a, a = o, o = void 0), new Promise(function(f, m) {
        try {
          const y = e.create(a, c);
          f(s(y, o, c));
        } catch (y) {
          m(y);
        }
      });
    }
    try {
      const f = e.create(a, c);
      l(null, s(f, o, c));
    } catch (f) {
      l(f);
    }
  }
  return rs.create = e.create, rs.toCanvas = i.bind(null, t.render), rs.toDataURL = i.bind(null, t.renderToDataURL), rs.toString = i.bind(null, function(s, o, a) {
    return n.render(s, a);
  }), rs;
}
var pS = fS();
const mS = /* @__PURE__ */ XM(pS), MS = mS;
export {
  yS as ARButton,
  _S as GLTFLoader,
  xS as OrbitControls,
  MS as QRCode,
  vS as RGBELoader,
  gS as THREE
};
