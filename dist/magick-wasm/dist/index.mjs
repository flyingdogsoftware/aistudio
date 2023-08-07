var kr = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.Activate = 1] = "Activate", n[n.Associate = 2] = "Associate", n[n.Background = 3] = "Background", n[n.Copy = 4] = "Copy", n[n.Deactivate = 5] = "Deactivate", n[n.Discrete = 6] = "Discrete", n[n.Disassociate = 7] = "Disassociate", n[n.Extract = 8] = "Extract", n[n.Off = 9] = "Off", n[n.On = 10] = "On", n[n.Opaque = 11] = "Opaque", n[n.Remove = 12] = "Remove", n[n.Set = 13] = "Set", n[n.Shape = 14] = "Shape", n[n.Transparent = 15] = "Transparent", n))(kr || {}), gu = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.Kapur = 1] = "Kapur", n[n.OTSU = 2] = "OTSU", n[n.Triangle = 3] = "Triangle", n))(gu || {});
function fu(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Sr = { exports: {} };
(function(n, i) {
  var u = (() => {
    var g = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
    return typeof __filename < "u" && (g = g || __filename), function(p = {}) {
      var e = p, v, I;
      e.ready = new Promise((t, r) => {
        v = t, I = r;
      });
      var G = Object.assign({}, e), B = "./this.program", K = (t, r) => {
        throw r;
      }, _e = typeof window == "object", pe = typeof importScripts == "function", de = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", ae = "";
      function br(t) {
        return e.locateFile ? e.locateFile(t, ae) : ae + t;
      }
      var et, tt, dt;
      if (de) {
        var Ut = require("fs"), jt = require("path");
        pe ? ae = jt.dirname(ae) + "/" : ae = __dirname + "/", et = (t, r) => (t = St(t) ? new URL(t) : jt.normalize(t), Ut.readFileSync(t, r ? void 0 : "utf8")), dt = (t) => {
          var r = et(t, !0);
          return r.buffer || (r = new Uint8Array(r)), r;
        }, tt = (t, r, a, s = !0) => {
          t = St(t) ? new URL(t) : jt.normalize(t), Ut.readFile(t, s ? void 0 : "utf8", (o, l) => {
            o ? a(o) : r(s ? l.buffer : l);
          });
        }, !e.thisProgram && process.argv.length > 1 && (B = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), K = (t, r) => {
          throw process.exitCode = t, r;
        }, e.inspect = () => "[Emscripten Module object]";
      } else
        (_e || pe) && (pe ? ae = self.location.href : typeof document < "u" && document.currentScript && (ae = document.currentScript.src), g && (ae = g), ae.indexOf("blob:") !== 0 ? ae = ae.substr(0, ae.replace(/[?#].*/, "").lastIndexOf("/") + 1) : ae = "", et = (t) => {
          var r = new XMLHttpRequest();
          return r.open("GET", t, !1), r.send(null), r.responseText;
        }, pe && (dt = (t) => {
          var r = new XMLHttpRequest();
          return r.open("GET", t, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
        }), tt = (t, r, a) => {
          var s = new XMLHttpRequest();
          s.open("GET", t, !0), s.responseType = "arraybuffer", s.onload = () => {
            if (s.status == 200 || s.status == 0 && s.response) {
              r(s.response);
              return;
            }
            a();
          }, s.onerror = a, s.send(null);
        });
      var $t = e.print || console.log.bind(console), Ge = e.printErr || console.error.bind(console);
      Object.assign(e, G), G = null, e.arguments && e.arguments, e.thisProgram && (B = e.thisProgram), e.quit && (K = e.quit);
      var nt;
      e.wasmBinary && (nt = e.wasmBinary);
      var Gr = e.noExitRuntime || !0;
      typeof WebAssembly != "object" && fe("no native wasm support detected");
      var ht, Yt = !1;
      function yt(t, r) {
        t || fe(r);
      }
      var $, ne, ee, $e, w, T, vt, wt;
      function hn() {
        var t = ht.buffer;
        e.HEAP8 = $ = new Int8Array(t), e.HEAP16 = ee = new Int16Array(t), e.HEAP32 = w = new Int32Array(t), e.HEAPU8 = ne = new Uint8Array(t), e.HEAPU16 = $e = new Uint16Array(t), e.HEAPU32 = T = new Uint32Array(t), e.HEAPF32 = vt = new Float32Array(t), e.HEAPF64 = wt = new Float64Array(t);
      }
      var We, yn = [], vn = [], wn = [], Er = 0;
      function Rr() {
        return Gr || Er > 0;
      }
      function Ar() {
        if (e.preRun)
          for (typeof e.preRun == "function" && (e.preRun = [e.preRun]); e.preRun.length; )
            Wr(e.preRun.shift());
        Xt(yn);
      }
      function Tr() {
        !e.noFSInit && !_.init.initialized && _.init(), _.ignorePermissions = !1, J.root = _.mount(J, {}, null), Xt(vn);
      }
      function Lr() {
        if (e.postRun)
          for (typeof e.postRun == "function" && (e.postRun = [e.postRun]); e.postRun.length; )
            xr(e.postRun.shift());
        Xt(wn);
      }
      function Wr(t) {
        yn.unshift(t);
      }
      function Br(t) {
        vn.unshift(t);
      }
      function xr(t) {
        wn.unshift(t);
      }
      var Be = 0, rt = null;
      function Vu(t) {
        return t;
      }
      function kt(t) {
        Be++, e.monitorRunDependencies && e.monitorRunDependencies(Be);
      }
      function at(t) {
        if (Be--, e.monitorRunDependencies && e.monitorRunDependencies(Be), Be == 0 && rt) {
          var r = rt;
          rt = null, r();
        }
      }
      function fe(t) {
        e.onAbort && e.onAbort(t), t = "Aborted(" + t + ")", Ge(t), Yt = !0, t += ". Build with -sASSERTIONS for more info.";
        var r = new WebAssembly.RuntimeError(t);
        throw I(r), r;
      }
      var Nr = "data:application/octet-stream;base64,";
      function kn(t) {
        return t.startsWith(Nr);
      }
      function St(t) {
        return t.startsWith("file://");
      }
      var Ye;
      Ye = "magick.wasm", kn(Ye) || (Ye = br(Ye));
      function Sn(t) {
        try {
          if (t == Ye && nt)
            return new Uint8Array(nt);
          if (dt)
            return dt(t);
          throw "both async and sync fetching of the wasm failed";
        } catch (r) {
          fe(r);
        }
      }
      function zr(t) {
        if (!nt && (_e || pe)) {
          if (typeof fetch == "function" && !St(t))
            return fetch(t, { credentials: "same-origin" }).then((r) => {
              if (!r.ok)
                throw "failed to load wasm binary file at '" + t + "'";
              return r.arrayBuffer();
            }).catch(() => Sn(t));
          if (tt)
            return new Promise((r, a) => {
              tt(t, (s) => r(new Uint8Array(s)), a);
            });
        }
        return Promise.resolve().then(() => Sn(t));
      }
      function In(t, r, a) {
        return zr(t).then((s) => WebAssembly.instantiate(s, r)).then((s) => s).then(a, (s) => {
          Ge("failed to asynchronously prepare wasm: " + s), fe(s);
        });
      }
      function Hr(t, r, a, s) {
        return !t && typeof WebAssembly.instantiateStreaming == "function" && !kn(r) && !St(r) && !de && typeof fetch == "function" ? fetch(r, { credentials: "same-origin" }).then((o) => {
          var l = WebAssembly.instantiateStreaming(o, a);
          return l.then(s, function(c) {
            return Ge("wasm streaming compile failed: " + c), Ge("falling back to ArrayBuffer instantiation"), In(r, a, s);
          });
        }) : In(r, a, s);
      }
      function Fr() {
        var t = { a: Ws };
        function r(s, o) {
          var l = s.exports;
          return e.asm = l, ht = e.asm.fb, hn(), We = e.asm.zb, Br(e.asm.gb), at(), l;
        }
        kt();
        function a(s) {
          r(s.instance);
        }
        if (e.instantiateWasm)
          try {
            return e.instantiateWasm(t, r);
          } catch (s) {
            Ge("Module.instantiateWasm callback failed with error: " + s), I(s);
          }
        return Hr(nt, Ye, t, a).catch(I), {};
      }
      var E, Y;
      function Ur(t) {
        this.name = "ExitStatus", this.message = `Program terminated with exit(${t})`, this.status = t;
      }
      var Xt = (t) => {
        for (; t.length > 0; )
          t.shift()(e);
      };
      function jr(t, r = "i8") {
        switch (r.endsWith("*") && (r = "*"), r) {
          case "i1":
            return $[t >> 0];
          case "i8":
            return $[t >> 0];
          case "i16":
            return ee[t >> 1];
          case "i32":
            return w[t >> 2];
          case "i64":
            fe("to do getValue(i64) use WASM_BIGINT");
          case "float":
            return vt[t >> 2];
          case "double":
            return wt[t >> 3];
          case "*":
            return T[t >> 2];
          default:
            fe(`invalid type for getValue: ${r}`);
        }
      }
      function $r(t, r, a = "i8") {
        switch (a.endsWith("*") && (a = "*"), a) {
          case "i1":
            $[t >> 0] = r;
            break;
          case "i8":
            $[t >> 0] = r;
            break;
          case "i16":
            ee[t >> 1] = r;
            break;
          case "i32":
            w[t >> 2] = r;
            break;
          case "i64":
            fe("to do setValue(i64) use WASM_BIGINT");
          case "float":
            vt[t >> 2] = r;
            break;
          case "double":
            wt[t >> 3] = r;
            break;
          case "*":
            T[t >> 2] = r;
            break;
          default:
            fe(`invalid type for setValue: ${a}`);
        }
      }
      var it = [], Q = (t) => {
        var r = it[t];
        return r || (t >= it.length && (it.length = t + 1), it[t] = r = We.get(t)), r;
      }, Yr = (t, r) => Q(t)(r), Xe = 0;
      function Mn(t) {
        this.excPtr = t, this.ptr = t - 24, this.set_type = function(r) {
          T[this.ptr + 4 >> 2] = r;
        }, this.get_type = function() {
          return T[this.ptr + 4 >> 2];
        }, this.set_destructor = function(r) {
          T[this.ptr + 8 >> 2] = r;
        }, this.get_destructor = function() {
          return T[this.ptr + 8 >> 2];
        }, this.set_caught = function(r) {
          r = r ? 1 : 0, $[this.ptr + 12 >> 0] = r;
        }, this.get_caught = function() {
          return $[this.ptr + 12 >> 0] != 0;
        }, this.set_rethrown = function(r) {
          r = r ? 1 : 0, $[this.ptr + 13 >> 0] = r;
        }, this.get_rethrown = function() {
          return $[this.ptr + 13 >> 0] != 0;
        }, this.init = function(r, a) {
          this.set_adjusted_ptr(0), this.set_type(r), this.set_destructor(a);
        }, this.set_adjusted_ptr = function(r) {
          T[this.ptr + 16 >> 2] = r;
        }, this.get_adjusted_ptr = function() {
          return T[this.ptr + 16 >> 2];
        }, this.get_exception_ptr = function() {
          var r = lr(this.get_type());
          if (r)
            return T[this.excPtr >> 2];
          var a = this.get_adjusted_ptr();
          return a !== 0 ? a : this.excPtr;
        };
      }
      function Xr(t) {
        throw Xe || (Xe = t), Xe;
      }
      function qr() {
        var t = Xe;
        if (!t)
          return mt(0), 0;
        var r = new Mn(t);
        r.set_adjusted_ptr(t);
        var a = r.get_type();
        if (!a)
          return mt(0), t;
        for (var s = 0; s < arguments.length; s++) {
          var o = arguments[s];
          if (o === 0 || o === a)
            break;
          var l = r.ptr + 16;
          if (_r(o, a, l))
            return mt(o), t;
        }
        return mt(a), t;
      }
      var Vr = qr;
      function Qr(t, r, a) {
        var s = new Mn(t);
        throw s.init(r, a), Xe = t, Xe;
      }
      var X = { isAbs: (t) => t.charAt(0) === "/", splitPath: (t) => {
        var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return r.exec(t).slice(1);
      }, normalizeArray: (t, r) => {
        for (var a = 0, s = t.length - 1; s >= 0; s--) {
          var o = t[s];
          o === "." ? t.splice(s, 1) : o === ".." ? (t.splice(s, 1), a++) : a && (t.splice(s, 1), a--);
        }
        if (r)
          for (; a; a--)
            t.unshift("..");
        return t;
      }, normalize: (t) => {
        var r = X.isAbs(t), a = t.substr(-1) === "/";
        return t = X.normalizeArray(t.split("/").filter((s) => !!s), !r).join("/"), !t && !r && (t = "."), t && a && (t += "/"), (r ? "/" : "") + t;
      }, dirname: (t) => {
        var r = X.splitPath(t), a = r[0], s = r[1];
        return !a && !s ? "." : (s && (s = s.substr(0, s.length - 1)), a + s);
      }, basename: (t) => {
        if (t === "/")
          return "/";
        t = X.normalize(t), t = t.replace(/\/$/, "");
        var r = t.lastIndexOf("/");
        return r === -1 ? t : t.substr(r + 1);
      }, join: function() {
        var t = Array.prototype.slice.call(arguments);
        return X.normalize(t.join("/"));
      }, join2: (t, r) => X.normalize(t + "/" + r) }, Jr = () => {
        if (typeof crypto == "object" && typeof crypto.getRandomValues == "function")
          return (s) => crypto.getRandomValues(s);
        if (de)
          try {
            var t = require("crypto"), r = t.randomFillSync;
            if (r)
              return (s) => t.randomFillSync(s);
            var a = t.randomBytes;
            return (s) => (s.set(a(s.byteLength)), s);
          } catch {
          }
        fe("initRandomDevice");
      }, qt = (t) => (qt = Jr())(t), ke = { resolve: function() {
        for (var t = "", r = !1, a = arguments.length - 1; a >= -1 && !r; a--) {
          var s = a >= 0 ? arguments[a] : _.cwd();
          if (typeof s != "string")
            throw new TypeError("Arguments to path.resolve must be strings");
          if (!s)
            return "";
          t = s + "/" + t, r = X.isAbs(s);
        }
        return t = X.normalizeArray(t.split("/").filter((o) => !!o), !r).join("/"), (r ? "/" : "") + t || ".";
      }, relative: (t, r) => {
        t = ke.resolve(t).substr(1), r = ke.resolve(r).substr(1);
        function a(h) {
          for (var k = 0; k < h.length && h[k] === ""; k++)
            ;
          for (var C = h.length - 1; C >= 0 && h[C] === ""; C--)
            ;
          return k > C ? [] : h.slice(k, C - k + 1);
        }
        for (var s = a(t.split("/")), o = a(r.split("/")), l = Math.min(s.length, o.length), c = l, m = 0; m < l; m++)
          if (s[m] !== o[m]) {
            c = m;
            break;
          }
        for (var d = [], m = c; m < s.length; m++)
          d.push("..");
        return d = d.concat(o.slice(c)), d.join("/");
      } }, xe = (t) => {
        for (var r = 0, a = 0; a < t.length; ++a) {
          var s = t.charCodeAt(a);
          s <= 127 ? r++ : s <= 2047 ? r += 2 : s >= 55296 && s <= 57343 ? (r += 4, ++a) : r += 3;
        }
        return r;
      }, Vt = (t, r, a, s) => {
        if (!(s > 0))
          return 0;
        for (var o = a, l = a + s - 1, c = 0; c < t.length; ++c) {
          var m = t.charCodeAt(c);
          if (m >= 55296 && m <= 57343) {
            var d = t.charCodeAt(++c);
            m = 65536 + ((m & 1023) << 10) | d & 1023;
          }
          if (m <= 127) {
            if (a >= l)
              break;
            r[a++] = m;
          } else if (m <= 2047) {
            if (a + 1 >= l)
              break;
            r[a++] = 192 | m >> 6, r[a++] = 128 | m & 63;
          } else if (m <= 65535) {
            if (a + 2 >= l)
              break;
            r[a++] = 224 | m >> 12, r[a++] = 128 | m >> 6 & 63, r[a++] = 128 | m & 63;
          } else {
            if (a + 3 >= l)
              break;
            r[a++] = 240 | m >> 18, r[a++] = 128 | m >> 12 & 63, r[a++] = 128 | m >> 6 & 63, r[a++] = 128 | m & 63;
          }
        }
        return r[a] = 0, a - o;
      };
      function It(t, r, a) {
        var s = a > 0 ? a : xe(t) + 1, o = new Array(s), l = Vt(t, o, 0, o.length);
        return r && (o.length = l), o;
      }
      var Dn = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0, qe = (t, r, a) => {
        for (var s = r + a, o = r; t[o] && !(o >= s); )
          ++o;
        if (o - r > 16 && t.buffer && Dn)
          return Dn.decode(t.subarray(r, o));
        for (var l = ""; r < o; ) {
          var c = t[r++];
          if (!(c & 128)) {
            l += String.fromCharCode(c);
            continue;
          }
          var m = t[r++] & 63;
          if ((c & 224) == 192) {
            l += String.fromCharCode((c & 31) << 6 | m);
            continue;
          }
          var d = t[r++] & 63;
          if ((c & 240) == 224 ? c = (c & 15) << 12 | m << 6 | d : c = (c & 7) << 18 | m << 12 | d << 6 | t[r++] & 63, c < 65536)
            l += String.fromCharCode(c);
          else {
            var h = c - 65536;
            l += String.fromCharCode(55296 | h >> 10, 56320 | h & 1023);
          }
        }
        return l;
      }, Ne = { ttys: [], init: function() {
      }, shutdown: function() {
      }, register: function(t, r) {
        Ne.ttys[t] = { input: [], output: [], ops: r }, _.registerDevice(t, Ne.stream_ops);
      }, stream_ops: { open: function(t) {
        var r = Ne.ttys[t.node.rdev];
        if (!r)
          throw new _.ErrnoError(43);
        t.tty = r, t.seekable = !1;
      }, close: function(t) {
        t.tty.ops.fsync(t.tty);
      }, fsync: function(t) {
        t.tty.ops.fsync(t.tty);
      }, read: function(t, r, a, s, o) {
        if (!t.tty || !t.tty.ops.get_char)
          throw new _.ErrnoError(60);
        for (var l = 0, c = 0; c < s; c++) {
          var m;
          try {
            m = t.tty.ops.get_char(t.tty);
          } catch {
            throw new _.ErrnoError(29);
          }
          if (m === void 0 && l === 0)
            throw new _.ErrnoError(6);
          if (m == null)
            break;
          l++, r[a + c] = m;
        }
        return l && (t.node.timestamp = Date.now()), l;
      }, write: function(t, r, a, s, o) {
        if (!t.tty || !t.tty.ops.put_char)
          throw new _.ErrnoError(60);
        try {
          for (var l = 0; l < s; l++)
            t.tty.ops.put_char(t.tty, r[a + l]);
        } catch {
          throw new _.ErrnoError(29);
        }
        return s && (t.node.timestamp = Date.now()), l;
      } }, default_tty_ops: { get_char: function(t) {
        if (!t.input.length) {
          var r = null;
          if (de) {
            var a = 256, s = Buffer.alloc(a), o = 0;
            try {
              o = Ut.readSync(process.stdin.fd, s, 0, a, -1);
            } catch (l) {
              if (l.toString().includes("EOF"))
                o = 0;
              else
                throw l;
            }
            o > 0 ? r = s.slice(0, o).toString("utf-8") : r = null;
          } else
            typeof window < "u" && typeof window.prompt == "function" ? (r = window.prompt("Input: "), r !== null && (r += `
`)) : typeof readline == "function" && (r = readline(), r !== null && (r += `
`));
          if (!r)
            return null;
          t.input = It(r, !0);
        }
        return t.input.shift();
      }, put_char: function(t, r) {
        r === null || r === 10 ? ($t(qe(t.output, 0)), t.output = []) : r != 0 && t.output.push(r);
      }, fsync: function(t) {
        t.output && t.output.length > 0 && ($t(qe(t.output, 0)), t.output = []);
      }, ioctl_tcgets: function(t) {
        return { c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
      }, ioctl_tcsets: function(t, r, a) {
        return 0;
      }, ioctl_tiocgwinsz: function(t) {
        return [24, 80];
      } }, default_tty1_ops: { put_char: function(t, r) {
        r === null || r === 10 ? (Ge(qe(t.output, 0)), t.output = []) : r != 0 && t.output.push(r);
      }, fsync: function(t) {
        t.output && t.output.length > 0 && (Ge(qe(t.output, 0)), t.output = []);
      } } }, Qt = (t, r) => (ne.fill(0, t, t + r), t), Kr = (t, r) => Math.ceil(t / r) * r, Cn = (t) => {
        t = Kr(t, 65536);
        var r = or(65536, t);
        return r ? Qt(r, t) : 0;
      }, L = { ops_table: null, mount: function(t) {
        return L.createNode(null, "/", 16895, 0);
      }, createNode: function(t, r, a, s) {
        if (_.isBlkdev(a) || _.isFIFO(a))
          throw new _.ErrnoError(63);
        L.ops_table || (L.ops_table = { dir: { node: { getattr: L.node_ops.getattr, setattr: L.node_ops.setattr, lookup: L.node_ops.lookup, mknod: L.node_ops.mknod, rename: L.node_ops.rename, unlink: L.node_ops.unlink, rmdir: L.node_ops.rmdir, readdir: L.node_ops.readdir, symlink: L.node_ops.symlink }, stream: { llseek: L.stream_ops.llseek } }, file: { node: { getattr: L.node_ops.getattr, setattr: L.node_ops.setattr }, stream: { llseek: L.stream_ops.llseek, read: L.stream_ops.read, write: L.stream_ops.write, allocate: L.stream_ops.allocate, mmap: L.stream_ops.mmap, msync: L.stream_ops.msync } }, link: { node: { getattr: L.node_ops.getattr, setattr: L.node_ops.setattr, readlink: L.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: L.node_ops.getattr, setattr: L.node_ops.setattr }, stream: _.chrdev_stream_ops } });
        var o = _.createNode(t, r, a, s);
        return _.isDir(o.mode) ? (o.node_ops = L.ops_table.dir.node, o.stream_ops = L.ops_table.dir.stream, o.contents = {}) : _.isFile(o.mode) ? (o.node_ops = L.ops_table.file.node, o.stream_ops = L.ops_table.file.stream, o.usedBytes = 0, o.contents = null) : _.isLink(o.mode) ? (o.node_ops = L.ops_table.link.node, o.stream_ops = L.ops_table.link.stream) : _.isChrdev(o.mode) && (o.node_ops = L.ops_table.chrdev.node, o.stream_ops = L.ops_table.chrdev.stream), o.timestamp = Date.now(), t && (t.contents[r] = o, t.timestamp = o.timestamp), o;
      }, getFileDataAsTypedArray: function(t) {
        return t.contents ? t.contents.subarray ? t.contents.subarray(0, t.usedBytes) : new Uint8Array(t.contents) : new Uint8Array(0);
      }, expandFileStorage: function(t, r) {
        var a = t.contents ? t.contents.length : 0;
        if (!(a >= r)) {
          var s = 1024 * 1024;
          r = Math.max(r, a * (a < s ? 2 : 1.125) >>> 0), a != 0 && (r = Math.max(r, 256));
          var o = t.contents;
          t.contents = new Uint8Array(r), t.usedBytes > 0 && t.contents.set(o.subarray(0, t.usedBytes), 0);
        }
      }, resizeFileStorage: function(t, r) {
        if (t.usedBytes != r)
          if (r == 0)
            t.contents = null, t.usedBytes = 0;
          else {
            var a = t.contents;
            t.contents = new Uint8Array(r), a && t.contents.set(a.subarray(0, Math.min(r, t.usedBytes))), t.usedBytes = r;
          }
      }, node_ops: { getattr: function(t) {
        var r = {};
        return r.dev = _.isChrdev(t.mode) ? t.id : 1, r.ino = t.id, r.mode = t.mode, r.nlink = 1, r.uid = 0, r.gid = 0, r.rdev = t.rdev, _.isDir(t.mode) ? r.size = 4096 : _.isFile(t.mode) ? r.size = t.usedBytes : _.isLink(t.mode) ? r.size = t.link.length : r.size = 0, r.atime = new Date(t.timestamp), r.mtime = new Date(t.timestamp), r.ctime = new Date(t.timestamp), r.blksize = 4096, r.blocks = Math.ceil(r.size / r.blksize), r;
      }, setattr: function(t, r) {
        r.mode !== void 0 && (t.mode = r.mode), r.timestamp !== void 0 && (t.timestamp = r.timestamp), r.size !== void 0 && L.resizeFileStorage(t, r.size);
      }, lookup: function(t, r) {
        throw _.genericErrors[44];
      }, mknod: function(t, r, a, s) {
        return L.createNode(t, r, a, s);
      }, rename: function(t, r, a) {
        if (_.isDir(t.mode)) {
          var s;
          try {
            s = _.lookupNode(r, a);
          } catch {
          }
          if (s)
            for (var o in s.contents)
              throw new _.ErrnoError(55);
        }
        delete t.parent.contents[t.name], t.parent.timestamp = Date.now(), t.name = a, r.contents[a] = t, r.timestamp = t.parent.timestamp, t.parent = r;
      }, unlink: function(t, r) {
        delete t.contents[r], t.timestamp = Date.now();
      }, rmdir: function(t, r) {
        var a = _.lookupNode(t, r);
        for (var s in a.contents)
          throw new _.ErrnoError(55);
        delete t.contents[r], t.timestamp = Date.now();
      }, readdir: function(t) {
        var r = [".", ".."];
        for (var a in t.contents)
          t.contents.hasOwnProperty(a) && r.push(a);
        return r;
      }, symlink: function(t, r, a) {
        var s = L.createNode(t, r, 41471, 0);
        return s.link = a, s;
      }, readlink: function(t) {
        if (!_.isLink(t.mode))
          throw new _.ErrnoError(28);
        return t.link;
      } }, stream_ops: { read: function(t, r, a, s, o) {
        var l = t.node.contents;
        if (o >= t.node.usedBytes)
          return 0;
        var c = Math.min(t.node.usedBytes - o, s);
        if (c > 8 && l.subarray)
          r.set(l.subarray(o, o + c), a);
        else
          for (var m = 0; m < c; m++)
            r[a + m] = l[o + m];
        return c;
      }, write: function(t, r, a, s, o, l) {
        if (r.buffer === $.buffer && (l = !1), !s)
          return 0;
        var c = t.node;
        if (c.timestamp = Date.now(), r.subarray && (!c.contents || c.contents.subarray)) {
          if (l)
            return c.contents = r.subarray(a, a + s), c.usedBytes = s, s;
          if (c.usedBytes === 0 && o === 0)
            return c.contents = r.slice(a, a + s), c.usedBytes = s, s;
          if (o + s <= c.usedBytes)
            return c.contents.set(r.subarray(a, a + s), o), s;
        }
        if (L.expandFileStorage(c, o + s), c.contents.subarray && r.subarray)
          c.contents.set(r.subarray(a, a + s), o);
        else
          for (var m = 0; m < s; m++)
            c.contents[o + m] = r[a + m];
        return c.usedBytes = Math.max(c.usedBytes, o + s), s;
      }, llseek: function(t, r, a) {
        var s = r;
        if (a === 1 ? s += t.position : a === 2 && _.isFile(t.node.mode) && (s += t.node.usedBytes), s < 0)
          throw new _.ErrnoError(28);
        return s;
      }, allocate: function(t, r, a) {
        L.expandFileStorage(t.node, r + a), t.node.usedBytes = Math.max(t.node.usedBytes, r + a);
      }, mmap: function(t, r, a, s, o) {
        if (!_.isFile(t.node.mode))
          throw new _.ErrnoError(43);
        var l, c, m = t.node.contents;
        if (!(o & 2) && m.buffer === $.buffer)
          c = !1, l = m.byteOffset;
        else {
          if ((a > 0 || a + r < m.length) && (m.subarray ? m = m.subarray(a, a + r) : m = Array.prototype.slice.call(m, a, a + r)), c = !0, l = Cn(r), !l)
            throw new _.ErrnoError(48);
          $.set(m, l);
        }
        return { ptr: l, allocated: c };
      }, msync: function(t, r, a, s, o) {
        return L.stream_ops.write(t, r, 0, s, a, !1), 0;
      } } }, Zr = (t, r, a, s) => {
        var o = s ? "" : `al ${t}`;
        tt(t, (l) => {
          yt(l, `Loading data file "${t}" failed (no arrayBuffer).`), r(new Uint8Array(l)), o && at();
        }, (l) => {
          if (a)
            a();
          else
            throw `Loading data file "${t}" failed.`;
        }), o && kt();
      }, Or = e.preloadPlugins || [];
      function ea(t, r, a, s) {
        typeof Browser < "u" && Browser.init();
        var o = !1;
        return Or.forEach(function(l) {
          o || l.canHandle(r) && (l.handle(t, r, a, s), o = !0);
        }), o;
      }
      function ta(t, r, a, s, o, l, c, m, d, h) {
        var k = r ? ke.resolve(X.join2(t, r)) : t;
        function C(D) {
          function P(A) {
            h && h(), m || _.createDataFile(t, r, A, s, o, d), l && l(), at();
          }
          ea(D, k, P, () => {
            c && c(), at();
          }) || P(D);
        }
        kt(), typeof a == "string" ? Zr(a, (D) => C(D), c) : C(a);
      }
      function na(t) {
        var r = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }, a = r[t];
        if (typeof a > "u")
          throw new Error(`Unknown file open mode: ${t}`);
        return a;
      }
      function Jt(t, r) {
        var a = 0;
        return t && (a |= 365), r && (a |= 146), a;
      }
      var _ = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: !1, ignorePermissions: !0, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, lookupPath: (t, r = {}) => {
        if (t = ke.resolve(t), !t)
          return { path: "", node: null };
        var a = { follow_mount: !0, recurse_count: 0 };
        if (r = Object.assign(a, r), r.recurse_count > 8)
          throw new _.ErrnoError(32);
        for (var s = t.split("/").filter((C) => !!C), o = _.root, l = "/", c = 0; c < s.length; c++) {
          var m = c === s.length - 1;
          if (m && r.parent)
            break;
          if (o = _.lookupNode(o, s[c]), l = X.join2(l, s[c]), _.isMountpoint(o) && (!m || m && r.follow_mount) && (o = o.mounted.root), !m || r.follow)
            for (var d = 0; _.isLink(o.mode); ) {
              var h = _.readlink(l);
              l = ke.resolve(X.dirname(l), h);
              var k = _.lookupPath(l, { recurse_count: r.recurse_count + 1 });
              if (o = k.node, d++ > 40)
                throw new _.ErrnoError(32);
            }
        }
        return { path: l, node: o };
      }, getPath: (t) => {
        for (var r; ; ) {
          if (_.isRoot(t)) {
            var a = t.mount.mountpoint;
            return r ? a[a.length - 1] !== "/" ? `${a}/${r}` : a + r : a;
          }
          r = r ? `${t.name}/${r}` : t.name, t = t.parent;
        }
      }, hashName: (t, r) => {
        for (var a = 0, s = 0; s < r.length; s++)
          a = (a << 5) - a + r.charCodeAt(s) | 0;
        return (t + a >>> 0) % _.nameTable.length;
      }, hashAddNode: (t) => {
        var r = _.hashName(t.parent.id, t.name);
        t.name_next = _.nameTable[r], _.nameTable[r] = t;
      }, hashRemoveNode: (t) => {
        var r = _.hashName(t.parent.id, t.name);
        if (_.nameTable[r] === t)
          _.nameTable[r] = t.name_next;
        else
          for (var a = _.nameTable[r]; a; ) {
            if (a.name_next === t) {
              a.name_next = t.name_next;
              break;
            }
            a = a.name_next;
          }
      }, lookupNode: (t, r) => {
        var a = _.mayLookup(t);
        if (a)
          throw new _.ErrnoError(a, t);
        for (var s = _.hashName(t.id, r), o = _.nameTable[s]; o; o = o.name_next) {
          var l = o.name;
          if (o.parent.id === t.id && l === r)
            return o;
        }
        return _.lookup(t, r);
      }, createNode: (t, r, a, s) => {
        var o = new _.FSNode(t, r, a, s);
        return _.hashAddNode(o), o;
      }, destroyNode: (t) => {
        _.hashRemoveNode(t);
      }, isRoot: (t) => t === t.parent, isMountpoint: (t) => !!t.mounted, isFile: (t) => (t & 61440) === 32768, isDir: (t) => (t & 61440) === 16384, isLink: (t) => (t & 61440) === 40960, isChrdev: (t) => (t & 61440) === 8192, isBlkdev: (t) => (t & 61440) === 24576, isFIFO: (t) => (t & 61440) === 4096, isSocket: (t) => (t & 49152) === 49152, flagsToPermissionString: (t) => {
        var r = ["r", "w", "rw"][t & 3];
        return t & 512 && (r += "w"), r;
      }, nodePermissions: (t, r) => _.ignorePermissions ? 0 : r.includes("r") && !(t.mode & 292) || r.includes("w") && !(t.mode & 146) || r.includes("x") && !(t.mode & 73) ? 2 : 0, mayLookup: (t) => {
        var r = _.nodePermissions(t, "x");
        return r || (t.node_ops.lookup ? 0 : 2);
      }, mayCreate: (t, r) => {
        try {
          var a = _.lookupNode(t, r);
          return 20;
        } catch {
        }
        return _.nodePermissions(t, "wx");
      }, mayDelete: (t, r, a) => {
        var s;
        try {
          s = _.lookupNode(t, r);
        } catch (l) {
          return l.errno;
        }
        var o = _.nodePermissions(t, "wx");
        if (o)
          return o;
        if (a) {
          if (!_.isDir(s.mode))
            return 54;
          if (_.isRoot(s) || _.getPath(s) === _.cwd())
            return 10;
        } else if (_.isDir(s.mode))
          return 31;
        return 0;
      }, mayOpen: (t, r) => t ? _.isLink(t.mode) ? 32 : _.isDir(t.mode) && (_.flagsToPermissionString(r) !== "r" || r & 512) ? 31 : _.nodePermissions(t, _.flagsToPermissionString(r)) : 44, MAX_OPEN_FDS: 4096, nextfd: () => {
        for (var t = 0; t <= _.MAX_OPEN_FDS; t++)
          if (!_.streams[t])
            return t;
        throw new _.ErrnoError(33);
      }, getStreamChecked: (t) => {
        var r = _.getStream(t);
        if (!r)
          throw new _.ErrnoError(8);
        return r;
      }, getStream: (t) => _.streams[t], createStream: (t, r = -1) => (_.FSStream || (_.FSStream = function() {
        this.shared = {};
      }, _.FSStream.prototype = {}, Object.defineProperties(_.FSStream.prototype, { object: { get: function() {
        return this.node;
      }, set: function(a) {
        this.node = a;
      } }, isRead: { get: function() {
        return (this.flags & 2097155) !== 1;
      } }, isWrite: { get: function() {
        return (this.flags & 2097155) !== 0;
      } }, isAppend: { get: function() {
        return this.flags & 1024;
      } }, flags: { get: function() {
        return this.shared.flags;
      }, set: function(a) {
        this.shared.flags = a;
      } }, position: { get: function() {
        return this.shared.position;
      }, set: function(a) {
        this.shared.position = a;
      } } })), t = Object.assign(new _.FSStream(), t), r == -1 && (r = _.nextfd()), t.fd = r, _.streams[r] = t, t), closeStream: (t) => {
        _.streams[t] = null;
      }, chrdev_stream_ops: { open: (t) => {
        var r = _.getDevice(t.node.rdev);
        t.stream_ops = r.stream_ops, t.stream_ops.open && t.stream_ops.open(t);
      }, llseek: () => {
        throw new _.ErrnoError(70);
      } }, major: (t) => t >> 8, minor: (t) => t & 255, makedev: (t, r) => t << 8 | r, registerDevice: (t, r) => {
        _.devices[t] = { stream_ops: r };
      }, getDevice: (t) => _.devices[t], getMounts: (t) => {
        for (var r = [], a = [t]; a.length; ) {
          var s = a.pop();
          r.push(s), a.push.apply(a, s.mounts);
        }
        return r;
      }, syncfs: (t, r) => {
        typeof t == "function" && (r = t, t = !1), _.syncFSRequests++, _.syncFSRequests > 1 && Ge(`warning: ${_.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
        var a = _.getMounts(_.root.mount), s = 0;
        function o(c) {
          return _.syncFSRequests--, r(c);
        }
        function l(c) {
          if (c)
            return l.errored ? void 0 : (l.errored = !0, o(c));
          ++s >= a.length && o(null);
        }
        a.forEach((c) => {
          if (!c.type.syncfs)
            return l(null);
          c.type.syncfs(c, t, l);
        });
      }, mount: (t, r, a) => {
        var s = a === "/", o = !a, l;
        if (s && _.root)
          throw new _.ErrnoError(10);
        if (!s && !o) {
          var c = _.lookupPath(a, { follow_mount: !1 });
          if (a = c.path, l = c.node, _.isMountpoint(l))
            throw new _.ErrnoError(10);
          if (!_.isDir(l.mode))
            throw new _.ErrnoError(54);
        }
        var m = { type: t, opts: r, mountpoint: a, mounts: [] }, d = t.mount(m);
        return d.mount = m, m.root = d, s ? _.root = d : l && (l.mounted = m, l.mount && l.mount.mounts.push(m)), d;
      }, unmount: (t) => {
        var r = _.lookupPath(t, { follow_mount: !1 });
        if (!_.isMountpoint(r.node))
          throw new _.ErrnoError(28);
        var a = r.node, s = a.mounted, o = _.getMounts(s);
        Object.keys(_.nameTable).forEach((c) => {
          for (var m = _.nameTable[c]; m; ) {
            var d = m.name_next;
            o.includes(m.mount) && _.destroyNode(m), m = d;
          }
        }), a.mounted = null;
        var l = a.mount.mounts.indexOf(s);
        a.mount.mounts.splice(l, 1);
      }, lookup: (t, r) => t.node_ops.lookup(t, r), mknod: (t, r, a) => {
        var s = _.lookupPath(t, { parent: !0 }), o = s.node, l = X.basename(t);
        if (!l || l === "." || l === "..")
          throw new _.ErrnoError(28);
        var c = _.mayCreate(o, l);
        if (c)
          throw new _.ErrnoError(c);
        if (!o.node_ops.mknod)
          throw new _.ErrnoError(63);
        return o.node_ops.mknod(o, l, r, a);
      }, create: (t, r) => (r = r !== void 0 ? r : 438, r &= 4095, r |= 32768, _.mknod(t, r, 0)), mkdir: (t, r) => (r = r !== void 0 ? r : 511, r &= 1023, r |= 16384, _.mknod(t, r, 0)), mkdirTree: (t, r) => {
        for (var a = t.split("/"), s = "", o = 0; o < a.length; ++o)
          if (a[o]) {
            s += "/" + a[o];
            try {
              _.mkdir(s, r);
            } catch (l) {
              if (l.errno != 20)
                throw l;
            }
          }
      }, mkdev: (t, r, a) => (typeof a > "u" && (a = r, r = 438), r |= 8192, _.mknod(t, r, a)), symlink: (t, r) => {
        if (!ke.resolve(t))
          throw new _.ErrnoError(44);
        var a = _.lookupPath(r, { parent: !0 }), s = a.node;
        if (!s)
          throw new _.ErrnoError(44);
        var o = X.basename(r), l = _.mayCreate(s, o);
        if (l)
          throw new _.ErrnoError(l);
        if (!s.node_ops.symlink)
          throw new _.ErrnoError(63);
        return s.node_ops.symlink(s, o, t);
      }, rename: (t, r) => {
        var a = X.dirname(t), s = X.dirname(r), o = X.basename(t), l = X.basename(r), c, m, d;
        if (c = _.lookupPath(t, { parent: !0 }), m = c.node, c = _.lookupPath(r, { parent: !0 }), d = c.node, !m || !d)
          throw new _.ErrnoError(44);
        if (m.mount !== d.mount)
          throw new _.ErrnoError(75);
        var h = _.lookupNode(m, o), k = ke.relative(t, s);
        if (k.charAt(0) !== ".")
          throw new _.ErrnoError(28);
        if (k = ke.relative(r, a), k.charAt(0) !== ".")
          throw new _.ErrnoError(55);
        var C;
        try {
          C = _.lookupNode(d, l);
        } catch {
        }
        if (h !== C) {
          var D = _.isDir(h.mode), P = _.mayDelete(m, o, D);
          if (P)
            throw new _.ErrnoError(P);
          if (P = C ? _.mayDelete(d, l, D) : _.mayCreate(d, l), P)
            throw new _.ErrnoError(P);
          if (!m.node_ops.rename)
            throw new _.ErrnoError(63);
          if (_.isMountpoint(h) || C && _.isMountpoint(C))
            throw new _.ErrnoError(10);
          if (d !== m && (P = _.nodePermissions(m, "w"), P))
            throw new _.ErrnoError(P);
          _.hashRemoveNode(h);
          try {
            m.node_ops.rename(h, d, l);
          } catch (A) {
            throw A;
          } finally {
            _.hashAddNode(h);
          }
        }
      }, rmdir: (t) => {
        var r = _.lookupPath(t, { parent: !0 }), a = r.node, s = X.basename(t), o = _.lookupNode(a, s), l = _.mayDelete(a, s, !0);
        if (l)
          throw new _.ErrnoError(l);
        if (!a.node_ops.rmdir)
          throw new _.ErrnoError(63);
        if (_.isMountpoint(o))
          throw new _.ErrnoError(10);
        a.node_ops.rmdir(a, s), _.destroyNode(o);
      }, readdir: (t) => {
        var r = _.lookupPath(t, { follow: !0 }), a = r.node;
        if (!a.node_ops.readdir)
          throw new _.ErrnoError(54);
        return a.node_ops.readdir(a);
      }, unlink: (t) => {
        var r = _.lookupPath(t, { parent: !0 }), a = r.node;
        if (!a)
          throw new _.ErrnoError(44);
        var s = X.basename(t), o = _.lookupNode(a, s), l = _.mayDelete(a, s, !1);
        if (l)
          throw new _.ErrnoError(l);
        if (!a.node_ops.unlink)
          throw new _.ErrnoError(63);
        if (_.isMountpoint(o))
          throw new _.ErrnoError(10);
        a.node_ops.unlink(a, s), _.destroyNode(o);
      }, readlink: (t) => {
        var r = _.lookupPath(t), a = r.node;
        if (!a)
          throw new _.ErrnoError(44);
        if (!a.node_ops.readlink)
          throw new _.ErrnoError(28);
        return ke.resolve(_.getPath(a.parent), a.node_ops.readlink(a));
      }, stat: (t, r) => {
        var a = _.lookupPath(t, { follow: !r }), s = a.node;
        if (!s)
          throw new _.ErrnoError(44);
        if (!s.node_ops.getattr)
          throw new _.ErrnoError(63);
        return s.node_ops.getattr(s);
      }, lstat: (t) => _.stat(t, !0), chmod: (t, r, a) => {
        var s;
        if (typeof t == "string") {
          var o = _.lookupPath(t, { follow: !a });
          s = o.node;
        } else
          s = t;
        if (!s.node_ops.setattr)
          throw new _.ErrnoError(63);
        s.node_ops.setattr(s, { mode: r & 4095 | s.mode & -4096, timestamp: Date.now() });
      }, lchmod: (t, r) => {
        _.chmod(t, r, !0);
      }, fchmod: (t, r) => {
        var a = _.getStreamChecked(t);
        _.chmod(a.node, r);
      }, chown: (t, r, a, s) => {
        var o;
        if (typeof t == "string") {
          var l = _.lookupPath(t, { follow: !s });
          o = l.node;
        } else
          o = t;
        if (!o.node_ops.setattr)
          throw new _.ErrnoError(63);
        o.node_ops.setattr(o, { timestamp: Date.now() });
      }, lchown: (t, r, a) => {
        _.chown(t, r, a, !0);
      }, fchown: (t, r, a) => {
        var s = _.getStreamChecked(t);
        _.chown(s.node, r, a);
      }, truncate: (t, r) => {
        if (r < 0)
          throw new _.ErrnoError(28);
        var a;
        if (typeof t == "string") {
          var s = _.lookupPath(t, { follow: !0 });
          a = s.node;
        } else
          a = t;
        if (!a.node_ops.setattr)
          throw new _.ErrnoError(63);
        if (_.isDir(a.mode))
          throw new _.ErrnoError(31);
        if (!_.isFile(a.mode))
          throw new _.ErrnoError(28);
        var o = _.nodePermissions(a, "w");
        if (o)
          throw new _.ErrnoError(o);
        a.node_ops.setattr(a, { size: r, timestamp: Date.now() });
      }, ftruncate: (t, r) => {
        var a = _.getStreamChecked(t);
        if (!(a.flags & 2097155))
          throw new _.ErrnoError(28);
        _.truncate(a.node, r);
      }, utime: (t, r, a) => {
        var s = _.lookupPath(t, { follow: !0 }), o = s.node;
        o.node_ops.setattr(o, { timestamp: Math.max(r, a) });
      }, open: (t, r, a) => {
        if (t === "")
          throw new _.ErrnoError(44);
        r = typeof r == "string" ? na(r) : r, a = typeof a > "u" ? 438 : a, r & 64 ? a = a & 4095 | 32768 : a = 0;
        var s;
        if (typeof t == "object")
          s = t;
        else {
          t = X.normalize(t);
          try {
            var o = _.lookupPath(t, { follow: !(r & 131072) });
            s = o.node;
          } catch {
          }
        }
        var l = !1;
        if (r & 64)
          if (s) {
            if (r & 128)
              throw new _.ErrnoError(20);
          } else
            s = _.mknod(t, a, 0), l = !0;
        if (!s)
          throw new _.ErrnoError(44);
        if (_.isChrdev(s.mode) && (r &= -513), r & 65536 && !_.isDir(s.mode))
          throw new _.ErrnoError(54);
        if (!l) {
          var c = _.mayOpen(s, r);
          if (c)
            throw new _.ErrnoError(c);
        }
        r & 512 && !l && _.truncate(s, 0), r &= -131713;
        var m = _.createStream({ node: s, path: _.getPath(s), flags: r, seekable: !0, position: 0, stream_ops: s.stream_ops, ungotten: [], error: !1 });
        return m.stream_ops.open && m.stream_ops.open(m), e.logReadFiles && !(r & 1) && (_.readFiles || (_.readFiles = {}), t in _.readFiles || (_.readFiles[t] = 1)), m;
      }, close: (t) => {
        if (_.isClosed(t))
          throw new _.ErrnoError(8);
        t.getdents && (t.getdents = null);
        try {
          t.stream_ops.close && t.stream_ops.close(t);
        } catch (r) {
          throw r;
        } finally {
          _.closeStream(t.fd);
        }
        t.fd = null;
      }, isClosed: (t) => t.fd === null, llseek: (t, r, a) => {
        if (_.isClosed(t))
          throw new _.ErrnoError(8);
        if (!t.seekable || !t.stream_ops.llseek)
          throw new _.ErrnoError(70);
        if (a != 0 && a != 1 && a != 2)
          throw new _.ErrnoError(28);
        return t.position = t.stream_ops.llseek(t, r, a), t.ungotten = [], t.position;
      }, read: (t, r, a, s, o) => {
        if (s < 0 || o < 0)
          throw new _.ErrnoError(28);
        if (_.isClosed(t))
          throw new _.ErrnoError(8);
        if ((t.flags & 2097155) === 1)
          throw new _.ErrnoError(8);
        if (_.isDir(t.node.mode))
          throw new _.ErrnoError(31);
        if (!t.stream_ops.read)
          throw new _.ErrnoError(28);
        var l = typeof o < "u";
        if (!l)
          o = t.position;
        else if (!t.seekable)
          throw new _.ErrnoError(70);
        var c = t.stream_ops.read(t, r, a, s, o);
        return l || (t.position += c), c;
      }, write: (t, r, a, s, o, l) => {
        if (s < 0 || o < 0)
          throw new _.ErrnoError(28);
        if (_.isClosed(t))
          throw new _.ErrnoError(8);
        if (!(t.flags & 2097155))
          throw new _.ErrnoError(8);
        if (_.isDir(t.node.mode))
          throw new _.ErrnoError(31);
        if (!t.stream_ops.write)
          throw new _.ErrnoError(28);
        t.seekable && t.flags & 1024 && _.llseek(t, 0, 2);
        var c = typeof o < "u";
        if (!c)
          o = t.position;
        else if (!t.seekable)
          throw new _.ErrnoError(70);
        var m = t.stream_ops.write(t, r, a, s, o, l);
        return c || (t.position += m), m;
      }, allocate: (t, r, a) => {
        if (_.isClosed(t))
          throw new _.ErrnoError(8);
        if (r < 0 || a <= 0)
          throw new _.ErrnoError(28);
        if (!(t.flags & 2097155))
          throw new _.ErrnoError(8);
        if (!_.isFile(t.node.mode) && !_.isDir(t.node.mode))
          throw new _.ErrnoError(43);
        if (!t.stream_ops.allocate)
          throw new _.ErrnoError(138);
        t.stream_ops.allocate(t, r, a);
      }, mmap: (t, r, a, s, o) => {
        if (s & 2 && !(o & 2) && (t.flags & 2097155) !== 2)
          throw new _.ErrnoError(2);
        if ((t.flags & 2097155) === 1)
          throw new _.ErrnoError(2);
        if (!t.stream_ops.mmap)
          throw new _.ErrnoError(43);
        return t.stream_ops.mmap(t, r, a, s, o);
      }, msync: (t, r, a, s, o) => t.stream_ops.msync ? t.stream_ops.msync(t, r, a, s, o) : 0, munmap: (t) => 0, ioctl: (t, r, a) => {
        if (!t.stream_ops.ioctl)
          throw new _.ErrnoError(59);
        return t.stream_ops.ioctl(t, r, a);
      }, readFile: (t, r = {}) => {
        if (r.flags = r.flags || 0, r.encoding = r.encoding || "binary", r.encoding !== "utf8" && r.encoding !== "binary")
          throw new Error(`Invalid encoding type "${r.encoding}"`);
        var a, s = _.open(t, r.flags), o = _.stat(t), l = o.size, c = new Uint8Array(l);
        return _.read(s, c, 0, l, 0), r.encoding === "utf8" ? a = qe(c, 0) : r.encoding === "binary" && (a = c), _.close(s), a;
      }, writeFile: (t, r, a = {}) => {
        a.flags = a.flags || 577;
        var s = _.open(t, a.flags, a.mode);
        if (typeof r == "string") {
          var o = new Uint8Array(xe(r) + 1), l = Vt(r, o, 0, o.length);
          _.write(s, o, 0, l, void 0, a.canOwn);
        } else if (ArrayBuffer.isView(r))
          _.write(s, r, 0, r.byteLength, void 0, a.canOwn);
        else
          throw new Error("Unsupported data type");
        _.close(s);
      }, cwd: () => _.currentPath, chdir: (t) => {
        var r = _.lookupPath(t, { follow: !0 });
        if (r.node === null)
          throw new _.ErrnoError(44);
        if (!_.isDir(r.node.mode))
          throw new _.ErrnoError(54);
        var a = _.nodePermissions(r.node, "x");
        if (a)
          throw new _.ErrnoError(a);
        _.currentPath = r.path;
      }, createDefaultDirectories: () => {
        _.mkdir("/tmp"), _.mkdir("/home"), _.mkdir("/home/web_user");
      }, createDefaultDevices: () => {
        _.mkdir("/dev"), _.registerDevice(_.makedev(1, 3), { read: () => 0, write: (s, o, l, c, m) => c }), _.mkdev("/dev/null", _.makedev(1, 3)), Ne.register(_.makedev(5, 0), Ne.default_tty_ops), Ne.register(_.makedev(6, 0), Ne.default_tty1_ops), _.mkdev("/dev/tty", _.makedev(5, 0)), _.mkdev("/dev/tty1", _.makedev(6, 0));
        var t = new Uint8Array(1024), r = 0, a = () => (r === 0 && (r = qt(t).byteLength), t[--r]);
        _.createDevice("/dev", "random", a), _.createDevice("/dev", "urandom", a), _.mkdir("/dev/shm"), _.mkdir("/dev/shm/tmp");
      }, createSpecialDirectories: () => {
        _.mkdir("/proc");
        var t = _.mkdir("/proc/self");
        _.mkdir("/proc/self/fd"), _.mount({ mount: () => {
          var r = _.createNode(t, "fd", 16895, 73);
          return r.node_ops = { lookup: (a, s) => {
            var o = +s, l = _.getStreamChecked(o), c = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => l.path } };
            return c.parent = c, c;
          } }, r;
        } }, {}, "/proc/self/fd");
      }, createStandardStreams: () => {
        e.stdin ? _.createDevice("/dev", "stdin", e.stdin) : _.symlink("/dev/tty", "/dev/stdin"), e.stdout ? _.createDevice("/dev", "stdout", null, e.stdout) : _.symlink("/dev/tty", "/dev/stdout"), e.stderr ? _.createDevice("/dev", "stderr", null, e.stderr) : _.symlink("/dev/tty1", "/dev/stderr"), _.open("/dev/stdin", 0), _.open("/dev/stdout", 1), _.open("/dev/stderr", 1);
      }, ensureErrnoError: () => {
        _.ErrnoError || (_.ErrnoError = function(r, a) {
          this.name = "ErrnoError", this.node = a, this.setErrno = function(s) {
            this.errno = s;
          }, this.setErrno(r), this.message = "FS error";
        }, _.ErrnoError.prototype = new Error(), _.ErrnoError.prototype.constructor = _.ErrnoError, [44].forEach((t) => {
          _.genericErrors[t] = new _.ErrnoError(t), _.genericErrors[t].stack = "<generic error, no stack>";
        }));
      }, staticInit: () => {
        _.ensureErrnoError(), _.nameTable = new Array(4096), _.mount(L, {}, "/"), _.createDefaultDirectories(), _.createDefaultDevices(), _.createSpecialDirectories(), _.filesystems = { MEMFS: L };
      }, init: (t, r, a) => {
        _.init.initialized = !0, _.ensureErrnoError(), e.stdin = t || e.stdin, e.stdout = r || e.stdout, e.stderr = a || e.stderr, _.createStandardStreams();
      }, quit: () => {
        _.init.initialized = !1;
        for (var t = 0; t < _.streams.length; t++) {
          var r = _.streams[t];
          r && _.close(r);
        }
      }, findObject: (t, r) => {
        var a = _.analyzePath(t, r);
        return a.exists ? a.object : null;
      }, analyzePath: (t, r) => {
        try {
          var a = _.lookupPath(t, { follow: !r });
          t = a.path;
        } catch {
        }
        var s = { isRoot: !1, exists: !1, error: 0, name: null, path: null, object: null, parentExists: !1, parentPath: null, parentObject: null };
        try {
          var a = _.lookupPath(t, { parent: !0 });
          s.parentExists = !0, s.parentPath = a.path, s.parentObject = a.node, s.name = X.basename(t), a = _.lookupPath(t, { follow: !r }), s.exists = !0, s.path = a.path, s.object = a.node, s.name = a.node.name, s.isRoot = a.path === "/";
        } catch (o) {
          s.error = o.errno;
        }
        return s;
      }, createPath: (t, r, a, s) => {
        t = typeof t == "string" ? t : _.getPath(t);
        for (var o = r.split("/").reverse(); o.length; ) {
          var l = o.pop();
          if (l) {
            var c = X.join2(t, l);
            try {
              _.mkdir(c);
            } catch {
            }
            t = c;
          }
        }
        return c;
      }, createFile: (t, r, a, s, o) => {
        var l = X.join2(typeof t == "string" ? t : _.getPath(t), r), c = Jt(s, o);
        return _.create(l, c);
      }, createDataFile: (t, r, a, s, o, l) => {
        var c = r;
        t && (t = typeof t == "string" ? t : _.getPath(t), c = r ? X.join2(t, r) : t);
        var m = Jt(s, o), d = _.create(c, m);
        if (a) {
          if (typeof a == "string") {
            for (var h = new Array(a.length), k = 0, C = a.length; k < C; ++k)
              h[k] = a.charCodeAt(k);
            a = h;
          }
          _.chmod(d, m | 146);
          var D = _.open(d, 577);
          _.write(D, a, 0, a.length, 0, l), _.close(D), _.chmod(d, m);
        }
        return d;
      }, createDevice: (t, r, a, s) => {
        var o = X.join2(typeof t == "string" ? t : _.getPath(t), r), l = Jt(!!a, !!s);
        _.createDevice.major || (_.createDevice.major = 64);
        var c = _.makedev(_.createDevice.major++, 0);
        return _.registerDevice(c, { open: (m) => {
          m.seekable = !1;
        }, close: (m) => {
          s && s.buffer && s.buffer.length && s(10);
        }, read: (m, d, h, k, C) => {
          for (var D = 0, P = 0; P < k; P++) {
            var A;
            try {
              A = a();
            } catch {
              throw new _.ErrnoError(29);
            }
            if (A === void 0 && D === 0)
              throw new _.ErrnoError(6);
            if (A == null)
              break;
            D++, d[h + P] = A;
          }
          return D && (m.node.timestamp = Date.now()), D;
        }, write: (m, d, h, k, C) => {
          for (var D = 0; D < k; D++)
            try {
              s(d[h + D]);
            } catch {
              throw new _.ErrnoError(29);
            }
          return k && (m.node.timestamp = Date.now()), D;
        } }), _.mkdev(o, l, c);
      }, forceLoadFile: (t) => {
        if (t.isDevice || t.isFolder || t.link || t.contents)
          return !0;
        if (typeof XMLHttpRequest < "u")
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        if (et)
          try {
            t.contents = It(et(t.url), !0), t.usedBytes = t.contents.length;
          } catch {
            throw new _.ErrnoError(29);
          }
        else
          throw new Error("Cannot load without read() or XMLHttpRequest.");
      }, createLazyFile: (t, r, a, s, o) => {
        function l() {
          this.lengthKnown = !1, this.chunks = [];
        }
        if (l.prototype.get = function(P) {
          if (!(P > this.length - 1 || P < 0)) {
            var A = P % this.chunkSize, x = P / this.chunkSize | 0;
            return this.getter(x)[A];
          }
        }, l.prototype.setDataGetter = function(P) {
          this.getter = P;
        }, l.prototype.cacheLength = function() {
          var P = new XMLHttpRequest();
          if (P.open("HEAD", a, !1), P.send(null), !(P.status >= 200 && P.status < 300 || P.status === 304))
            throw new Error("Couldn't load " + a + ". Status: " + P.status);
          var A = Number(P.getResponseHeader("Content-length")), x, q = (x = P.getResponseHeader("Accept-Ranges")) && x === "bytes", V = (x = P.getResponseHeader("Content-Encoding")) && x === "gzip", M = 1024 * 1024;
          q || (M = A);
          var b = (j, ue) => {
            if (j > ue)
              throw new Error("invalid range (" + j + ", " + ue + ") or no bytes requested!");
            if (ue > A - 1)
              throw new Error("only " + A + " bytes available! programmer error!");
            var O = new XMLHttpRequest();
            if (O.open("GET", a, !1), A !== M && O.setRequestHeader("Range", "bytes=" + j + "-" + ue), O.responseType = "arraybuffer", O.overrideMimeType && O.overrideMimeType("text/plain; charset=x-user-defined"), O.send(null), !(O.status >= 200 && O.status < 300 || O.status === 304))
              throw new Error("Couldn't load " + a + ". Status: " + O.status);
            return O.response !== void 0 ? new Uint8Array(O.response || []) : It(O.responseText || "", !0);
          }, U = this;
          U.setDataGetter((j) => {
            var ue = j * M, O = (j + 1) * M - 1;
            if (O = Math.min(O, A - 1), typeof U.chunks[j] > "u" && (U.chunks[j] = b(ue, O)), typeof U.chunks[j] > "u")
              throw new Error("doXHR failed!");
            return U.chunks[j];
          }), (V || !A) && (M = A = 1, A = this.getter(0).length, M = A, $t("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = A, this._chunkSize = M, this.lengthKnown = !0;
        }, typeof XMLHttpRequest < "u") {
          if (!pe)
            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          var c = new l();
          Object.defineProperties(c, { length: { get: function() {
            return this.lengthKnown || this.cacheLength(), this._length;
          } }, chunkSize: { get: function() {
            return this.lengthKnown || this.cacheLength(), this._chunkSize;
          } } });
          var m = { isDevice: !1, contents: c };
        } else
          var m = { isDevice: !1, url: a };
        var d = _.createFile(t, r, m, s, o);
        m.contents ? d.contents = m.contents : m.url && (d.contents = null, d.url = m.url), Object.defineProperties(d, { usedBytes: { get: function() {
          return this.contents.length;
        } } });
        var h = {}, k = Object.keys(d.stream_ops);
        k.forEach((D) => {
          var P = d.stream_ops[D];
          h[D] = function() {
            return _.forceLoadFile(d), P.apply(null, arguments);
          };
        });
        function C(D, P, A, x, q) {
          var V = D.node.contents;
          if (q >= V.length)
            return 0;
          var M = Math.min(V.length - q, x);
          if (V.slice)
            for (var b = 0; b < M; b++)
              P[A + b] = V[q + b];
          else
            for (var b = 0; b < M; b++)
              P[A + b] = V.get(q + b);
          return M;
        }
        return h.read = (D, P, A, x, q) => (_.forceLoadFile(d), C(D, P, A, x, q)), h.mmap = (D, P, A, x, q) => {
          _.forceLoadFile(d);
          var V = Cn(P);
          if (!V)
            throw new _.ErrnoError(48);
          return C(D, $, V, P, A), { ptr: V, allocated: !0 };
        }, d.stream_ops = h, d;
      } }, Se = (t, r) => t ? qe(ne, t, r) : "", R = { DEFAULT_POLLMASK: 5, calculateAt: function(t, r, a) {
        if (X.isAbs(r))
          return r;
        var s;
        if (t === -100)
          s = _.cwd();
        else {
          var o = R.getStreamFromFD(t);
          s = o.path;
        }
        if (r.length == 0) {
          if (!a)
            throw new _.ErrnoError(44);
          return s;
        }
        return X.join2(s, r);
      }, doStat: function(t, r, a) {
        try {
          var s = t(r);
        } catch (m) {
          if (m && m.node && X.normalize(r) !== X.normalize(_.getPath(m.node)))
            return -54;
          throw m;
        }
        w[a >> 2] = s.dev, w[a + 4 >> 2] = s.mode, T[a + 8 >> 2] = s.nlink, w[a + 12 >> 2] = s.uid, w[a + 16 >> 2] = s.gid, w[a + 20 >> 2] = s.rdev, Y = [s.size >>> 0, (E = s.size, +Math.abs(E) >= 1 ? E > 0 ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)], w[a + 24 >> 2] = Y[0], w[a + 28 >> 2] = Y[1], w[a + 32 >> 2] = 4096, w[a + 36 >> 2] = s.blocks;
        var o = s.atime.getTime(), l = s.mtime.getTime(), c = s.ctime.getTime();
        return Y = [Math.floor(o / 1e3) >>> 0, (E = Math.floor(o / 1e3), +Math.abs(E) >= 1 ? E > 0 ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)], w[a + 40 >> 2] = Y[0], w[a + 44 >> 2] = Y[1], T[a + 48 >> 2] = o % 1e3 * 1e3, Y = [Math.floor(l / 1e3) >>> 0, (E = Math.floor(l / 1e3), +Math.abs(E) >= 1 ? E > 0 ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)], w[a + 56 >> 2] = Y[0], w[a + 60 >> 2] = Y[1], T[a + 64 >> 2] = l % 1e3 * 1e3, Y = [Math.floor(c / 1e3) >>> 0, (E = Math.floor(c / 1e3), +Math.abs(E) >= 1 ? E > 0 ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)], w[a + 72 >> 2] = Y[0], w[a + 76 >> 2] = Y[1], T[a + 80 >> 2] = c % 1e3 * 1e3, Y = [s.ino >>> 0, (E = s.ino, +Math.abs(E) >= 1 ? E > 0 ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)], w[a + 88 >> 2] = Y[0], w[a + 92 >> 2] = Y[1], 0;
      }, doMsync: function(t, r, a, s, o) {
        if (!_.isFile(r.node.mode))
          throw new _.ErrnoError(43);
        if (s & 2)
          return 0;
        var l = ne.slice(t, t + a);
        _.msync(r, l, o, a, s);
      }, varargs: void 0, get: function() {
        R.varargs += 4;
        var t = w[R.varargs - 4 >> 2];
        return t;
      }, getStr: function(t) {
        var r = Se(t);
        return r;
      }, getStreamFromFD: function(t) {
        var r = _.getStreamChecked(t);
        return r;
      } };
      function ra(t, r) {
        try {
          return t = R.getStr(t), _.chmod(t, r), 0;
        } catch (a) {
          if (typeof _ > "u" || a.name !== "ErrnoError")
            throw a;
          return -a.errno;
        }
      }
      var J = { mount: function(t) {
        return e.websocket = e.websocket && typeof e.websocket == "object" ? e.websocket : {}, e.websocket._callbacks = {}, e.websocket.on = function(r, a) {
          return typeof a == "function" && (this._callbacks[r] = a), this;
        }, e.websocket.emit = function(r, a) {
          typeof this._callbacks[r] == "function" && this._callbacks[r].call(this, a);
        }, _.createNode(null, "/", 16895, 0);
      }, createSocket: function(t, r, a) {
        r &= -526337;
        var s = r == 1;
        if (s && a && a != 6)
          throw new _.ErrnoError(66);
        var o = { family: t, type: r, protocol: a, server: null, error: null, peers: {}, pending: [], recv_queue: [], sock_ops: J.websocket_sock_ops }, l = J.nextname(), c = _.createNode(J.root, l, 49152, 0);
        c.sock = o;
        var m = _.createStream({ path: l, node: c, flags: 2, seekable: !1, stream_ops: J.stream_ops });
        return o.stream = m, o;
      }, getSocket: function(t) {
        var r = _.getStream(t);
        return !r || !_.isSocket(r.node.mode) ? null : r.node.sock;
      }, stream_ops: { poll: function(t) {
        var r = t.node.sock;
        return r.sock_ops.poll(r);
      }, ioctl: function(t, r, a) {
        var s = t.node.sock;
        return s.sock_ops.ioctl(s, r, a);
      }, read: function(t, r, a, s, o) {
        var l = t.node.sock, c = l.sock_ops.recvmsg(l, s);
        return c ? (r.set(c.buffer, a), c.buffer.length) : 0;
      }, write: function(t, r, a, s, o) {
        var l = t.node.sock;
        return l.sock_ops.sendmsg(l, r, a, s);
      }, close: function(t) {
        var r = t.node.sock;
        r.sock_ops.close(r);
      } }, nextname: function() {
        return J.nextname.current || (J.nextname.current = 0), "socket[" + J.nextname.current++ + "]";
      }, websocket_sock_ops: { createPeer: function(t, r, a) {
        var s;
        if (typeof r == "object" && (s = r, r = null, a = null), s)
          if (s._socket)
            r = s._socket.remoteAddress, a = s._socket.remotePort;
          else {
            var o = /ws[s]?:\/\/([^:]+):(\d+)/.exec(s.url);
            if (!o)
              throw new Error("WebSocket URL must be in the format ws(s)://address:port");
            r = o[1], a = parseInt(o[2], 10);
          }
        else
          try {
            var l = e.websocket && typeof e.websocket == "object", c = "ws:#".replace("#", "//");
            if (l && typeof e.websocket.url == "string" && (c = e.websocket.url), c === "ws://" || c === "wss://") {
              var m = r.split("/");
              c = c + m[0] + ":" + a + "/" + m.slice(1).join("/");
            }
            var d = "binary";
            l && typeof e.websocket.subprotocol == "string" && (d = e.websocket.subprotocol);
            var h = void 0;
            d !== "null" && (d = d.replace(/^ +| +$/g, "").split(/ *, */), h = d), l && e.websocket.subprotocol === null && (d = "null", h = void 0);
            var k;
            de ? k = require("ws") : k = WebSocket, s = new k(c, h), s.binaryType = "arraybuffer";
          } catch {
            throw new _.ErrnoError(23);
          }
        var C = { addr: r, port: a, socket: s, dgram_send_queue: [] };
        return J.websocket_sock_ops.addPeer(t, C), J.websocket_sock_ops.handlePeerEvents(t, C), t.type === 2 && typeof t.sport < "u" && C.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (t.sport & 65280) >> 8, t.sport & 255])), C;
      }, getPeer: function(t, r, a) {
        return t.peers[r + ":" + a];
      }, addPeer: function(t, r) {
        t.peers[r.addr + ":" + r.port] = r;
      }, removePeer: function(t, r) {
        delete t.peers[r.addr + ":" + r.port];
      }, handlePeerEvents: function(t, r) {
        var a = !0, s = function() {
          e.websocket.emit("open", t.stream.fd);
          try {
            for (var l = r.dgram_send_queue.shift(); l; )
              r.socket.send(l), l = r.dgram_send_queue.shift();
          } catch {
            r.socket.close();
          }
        };
        function o(l) {
          if (typeof l == "string") {
            var c = new TextEncoder();
            l = c.encode(l);
          } else {
            if (yt(l.byteLength !== void 0), l.byteLength == 0)
              return;
            l = new Uint8Array(l);
          }
          var m = a;
          if (a = !1, m && l.length === 10 && l[0] === 255 && l[1] === 255 && l[2] === 255 && l[3] === 255 && l[4] === "p".charCodeAt(0) && l[5] === "o".charCodeAt(0) && l[6] === "r".charCodeAt(0) && l[7] === "t".charCodeAt(0)) {
            var d = l[8] << 8 | l[9];
            J.websocket_sock_ops.removePeer(t, r), r.port = d, J.websocket_sock_ops.addPeer(t, r);
            return;
          }
          t.recv_queue.push({ addr: r.addr, port: r.port, data: l }), e.websocket.emit("message", t.stream.fd);
        }
        de ? (r.socket.on("open", s), r.socket.on("message", function(l, c) {
          c && o(new Uint8Array(l).buffer);
        }), r.socket.on("close", function() {
          e.websocket.emit("close", t.stream.fd);
        }), r.socket.on("error", function(l) {
          t.error = 14, e.websocket.emit("error", [t.stream.fd, t.error, "ECONNREFUSED: Connection refused"]);
        })) : (r.socket.onopen = s, r.socket.onclose = function() {
          e.websocket.emit("close", t.stream.fd);
        }, r.socket.onmessage = function(c) {
          o(c.data);
        }, r.socket.onerror = function(l) {
          t.error = 14, e.websocket.emit("error", [t.stream.fd, t.error, "ECONNREFUSED: Connection refused"]);
        });
      }, poll: function(t) {
        if (t.type === 1 && t.server)
          return t.pending.length ? 65 : 0;
        var r = 0, a = t.type === 1 ? J.websocket_sock_ops.getPeer(t, t.daddr, t.dport) : null;
        return (t.recv_queue.length || !a || a && a.socket.readyState === a.socket.CLOSING || a && a.socket.readyState === a.socket.CLOSED) && (r |= 65), (!a || a && a.socket.readyState === a.socket.OPEN) && (r |= 4), (a && a.socket.readyState === a.socket.CLOSING || a && a.socket.readyState === a.socket.CLOSED) && (r |= 16), r;
      }, ioctl: function(t, r, a) {
        switch (r) {
          case 21531:
            var s = 0;
            return t.recv_queue.length && (s = t.recv_queue[0].data.length), w[a >> 2] = s, 0;
          default:
            return 28;
        }
      }, close: function(t) {
        if (t.server) {
          try {
            t.server.close();
          } catch {
          }
          t.server = null;
        }
        for (var r = Object.keys(t.peers), a = 0; a < r.length; a++) {
          var s = t.peers[r[a]];
          try {
            s.socket.close();
          } catch {
          }
          J.websocket_sock_ops.removePeer(t, s);
        }
        return 0;
      }, bind: function(t, r, a) {
        if (typeof t.saddr < "u" || typeof t.sport < "u")
          throw new _.ErrnoError(28);
        if (t.saddr = r, t.sport = a, t.type === 2) {
          t.server && (t.server.close(), t.server = null);
          try {
            t.sock_ops.listen(t, 0);
          } catch (s) {
            if (s.name !== "ErrnoError" || s.errno !== 138)
              throw s;
          }
        }
      }, connect: function(t, r, a) {
        if (t.server)
          throw new _.ErrnoError(138);
        if (typeof t.daddr < "u" && typeof t.dport < "u") {
          var s = J.websocket_sock_ops.getPeer(t, t.daddr, t.dport);
          if (s)
            throw s.socket.readyState === s.socket.CONNECTING ? new _.ErrnoError(7) : new _.ErrnoError(30);
        }
        var o = J.websocket_sock_ops.createPeer(t, r, a);
        throw t.daddr = o.addr, t.dport = o.port, new _.ErrnoError(26);
      }, listen: function(t, r) {
        if (!de)
          throw new _.ErrnoError(138);
        if (t.server)
          throw new _.ErrnoError(28);
        var a = require("ws").Server, s = t.saddr;
        t.server = new a({ host: s, port: t.sport }), e.websocket.emit("listen", t.stream.fd), t.server.on("connection", function(o) {
          if (t.type === 1) {
            var l = J.createSocket(t.family, t.type, t.protocol), c = J.websocket_sock_ops.createPeer(l, o);
            l.daddr = c.addr, l.dport = c.port, t.pending.push(l), e.websocket.emit("connection", l.stream.fd);
          } else
            J.websocket_sock_ops.createPeer(t, o), e.websocket.emit("connection", t.stream.fd);
        }), t.server.on("close", function() {
          e.websocket.emit("close", t.stream.fd), t.server = null;
        }), t.server.on("error", function(o) {
          t.error = 23, e.websocket.emit("error", [t.stream.fd, t.error, "EHOSTUNREACH: Host is unreachable"]);
        });
      }, accept: function(t) {
        if (!t.server || !t.pending.length)
          throw new _.ErrnoError(28);
        var r = t.pending.shift();
        return r.stream.flags = t.stream.flags, r;
      }, getname: function(t, r) {
        var a, s;
        if (r) {
          if (t.daddr === void 0 || t.dport === void 0)
            throw new _.ErrnoError(53);
          a = t.daddr, s = t.dport;
        } else
          a = t.saddr || 0, s = t.sport || 0;
        return { addr: a, port: s };
      }, sendmsg: function(t, r, a, s, o, l) {
        if (t.type === 2) {
          if ((o === void 0 || l === void 0) && (o = t.daddr, l = t.dport), o === void 0 || l === void 0)
            throw new _.ErrnoError(17);
        } else
          o = t.daddr, l = t.dport;
        var c = J.websocket_sock_ops.getPeer(t, o, l);
        if (t.type === 1) {
          if (!c || c.socket.readyState === c.socket.CLOSING || c.socket.readyState === c.socket.CLOSED)
            throw new _.ErrnoError(53);
          if (c.socket.readyState === c.socket.CONNECTING)
            throw new _.ErrnoError(6);
        }
        ArrayBuffer.isView(r) && (a += r.byteOffset, r = r.buffer);
        var m;
        if (m = r.slice(a, a + s), t.type === 2 && (!c || c.socket.readyState !== c.socket.OPEN))
          return (!c || c.socket.readyState === c.socket.CLOSING || c.socket.readyState === c.socket.CLOSED) && (c = J.websocket_sock_ops.createPeer(t, o, l)), c.dgram_send_queue.push(m), s;
        try {
          return c.socket.send(m), s;
        } catch {
          throw new _.ErrnoError(28);
        }
      }, recvmsg: function(t, r) {
        if (t.type === 1 && t.server)
          throw new _.ErrnoError(53);
        var a = t.recv_queue.shift();
        if (!a) {
          if (t.type === 1) {
            var s = J.websocket_sock_ops.getPeer(t, t.daddr, t.dport);
            if (!s)
              throw new _.ErrnoError(53);
            if (s.socket.readyState === s.socket.CLOSING || s.socket.readyState === s.socket.CLOSED)
              return null;
            throw new _.ErrnoError(6);
          }
          throw new _.ErrnoError(6);
        }
        var o = a.data.byteLength || a.data.length, l = a.data.byteOffset || 0, c = a.data.buffer || a.data, m = Math.min(r, o), d = { buffer: new Uint8Array(c, l, m), addr: a.addr, port: a.port };
        if (t.type === 1 && m < o) {
          var h = o - m;
          a.data = new Uint8Array(c, l + m, h), t.recv_queue.unshift(a);
        }
        return d;
      } } };
      function Mt(t) {
        var r = J.getSocket(t);
        if (!r)
          throw new _.ErrnoError(8);
        return r;
      }
      var Pn = (t) => (w[sr() >> 2] = t, t), Kt = (t) => (t & 255) + "." + (t >> 8 & 255) + "." + (t >> 16 & 255) + "." + (t >> 24 & 255), bn = (t) => {
        var r = "", a = 0, s = 0, o = 0, l = 0, c = 0, m = 0, d = [t[0] & 65535, t[0] >> 16, t[1] & 65535, t[1] >> 16, t[2] & 65535, t[2] >> 16, t[3] & 65535, t[3] >> 16], h = !0, k = "";
        for (m = 0; m < 5; m++)
          if (d[m] !== 0) {
            h = !1;
            break;
          }
        if (h) {
          if (k = Kt(d[6] | d[7] << 16), d[5] === -1)
            return r = "::ffff:", r += k, r;
          if (d[5] === 0)
            return r = "::", k === "0.0.0.0" && (k = ""), k === "0.0.0.1" && (k = "1"), r += k, r;
        }
        for (a = 0; a < 8; a++)
          d[a] === 0 && (a - o > 1 && (c = 0), o = a, c++), c > s && (s = c, l = a - s + 1);
        for (a = 0; a < 8; a++) {
          if (s > 1 && d[a] === 0 && a >= l && a < l + s) {
            a === l && (r += ":", l === 0 && (r += ":"));
            continue;
          }
          r += Number(ln(d[a] & 65535)).toString(16), r += a < 7 ? ":" : "";
        }
        return r;
      }, aa = (t, r) => {
        var a = ee[t >> 1], s = ln($e[t + 2 >> 1]), o;
        switch (a) {
          case 2:
            if (r !== 16)
              return { errno: 28 };
            o = w[t + 4 >> 2], o = Kt(o);
            break;
          case 10:
            if (r !== 28)
              return { errno: 28 };
            o = [w[t + 8 >> 2], w[t + 12 >> 2], w[t + 16 >> 2], w[t + 20 >> 2]], o = bn(o);
            break;
          default:
            return { errno: 5 };
        }
        return { family: a, addr: o, port: s };
      }, Dt = (t) => {
        for (var r = t.split("."), a = 0; a < 4; a++) {
          var s = Number(r[a]);
          if (isNaN(s))
            return null;
          r[a] = s;
        }
        return (r[0] | r[1] << 8 | r[2] << 16 | r[3] << 24) >>> 0;
      }, Ct = (t) => parseInt(t), Zt = (t) => {
        var r, a, s, o, l = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i, c = [];
        if (!l.test(t))
          return null;
        if (t === "::")
          return [0, 0, 0, 0, 0, 0, 0, 0];
        for (t.startsWith("::") ? t = t.replace("::", "Z:") : t = t.replace("::", ":Z:"), t.indexOf(".") > 0 ? (t = t.replace(new RegExp("[.]", "g"), ":"), r = t.split(":"), r[r.length - 4] = Ct(r[r.length - 4]) + Ct(r[r.length - 3]) * 256, r[r.length - 3] = Ct(r[r.length - 2]) + Ct(r[r.length - 1]) * 256, r = r.slice(0, r.length - 2)) : r = t.split(":"), s = 0, o = 0, a = 0; a < r.length; a++)
          if (typeof r[a] == "string")
            if (r[a] === "Z") {
              for (o = 0; o < 8 - r.length + 1; o++)
                c[a + o] = 0;
              s = o - 1;
            } else
              c[a + s] = Wt(parseInt(r[a], 16));
          else
            c[a + s] = r[a];
        return [c[1] << 16 | c[0], c[3] << 16 | c[2], c[5] << 16 | c[4], c[7] << 16 | c[6]];
      }, he = { address_map: { id: 1, addrs: {}, names: {} }, lookup_name: (t) => {
        var r = Dt(t);
        if (r !== null || (r = Zt(t), r !== null))
          return t;
        var a;
        if (he.address_map.addrs[t])
          a = he.address_map.addrs[t];
        else {
          var s = he.address_map.id++;
          yt(s < 65535, "exceeded max address mappings of 65535"), a = "172.29." + (s & 255) + "." + (s & 65280), he.address_map.names[a] = t, he.address_map.addrs[t] = a;
        }
        return a;
      }, lookup_addr: (t) => he.address_map.names[t] ? he.address_map.names[t] : null };
      function Gn(t, r, a) {
        if (a && t === 0)
          return null;
        var s = aa(t, r);
        if (s.errno)
          throw new _.ErrnoError(s.errno);
        return s.addr = he.lookup_addr(s.addr) || s.addr, s;
      }
      function ia(t, r, a, s, o, l) {
        try {
          var c = Mt(t), m = Gn(r, a);
          return c.sock_ops.connect(c, m.addr, m.port), 0;
        } catch (d) {
          if (typeof _ > "u" || d.name !== "ErrnoError")
            throw d;
          return -d.errno;
        }
      }
      function sa(t) {
        try {
          var r = R.getStreamFromFD(t);
          return _.createStream(r).fd;
        } catch (a) {
          if (typeof _ > "u" || a.name !== "ErrnoError")
            throw a;
          return -a.errno;
        }
      }
      function ua(t, r, a, s) {
        try {
          if (r = R.getStr(r), r = R.calculateAt(t, r), a & -8)
            return -28;
          var o = _.lookupPath(r, { follow: !0 }), l = o.node;
          if (!l)
            return -44;
          var c = "";
          return a & 4 && (c += "r"), a & 2 && (c += "w"), a & 1 && (c += "x"), c && _.nodePermissions(l, c) ? -2 : 0;
        } catch (m) {
          if (typeof _ > "u" || m.name !== "ErrnoError")
            throw m;
          return -m.errno;
        }
      }
      function ze(t, r) {
        return r + 2097152 >>> 0 < 4194305 - !!t ? (t >>> 0) + r * 4294967296 : NaN;
      }
      function oa(t, r, a, s, o, l) {
        try {
          var c = ze(a, s);
          if (isNaN(c))
            return -61;
          var m = ze(o, l);
          if (isNaN(m))
            return -61;
          var d = R.getStreamFromFD(t);
          return _.allocate(d, c, m), 0;
        } catch (h) {
          if (typeof _ > "u" || h.name !== "ErrnoError")
            throw h;
          return -h.errno;
        }
      }
      function _a(t, r) {
        try {
          return _.fchmod(t, r), 0;
        } catch (a) {
          if (typeof _ > "u" || a.name !== "ErrnoError")
            throw a;
          return -a.errno;
        }
      }
      function la(t, r, a) {
        R.varargs = a;
        try {
          var s = R.getStreamFromFD(t);
          switch (r) {
            case 0: {
              var o = R.get();
              if (o < 0)
                return -28;
              var l;
              return l = _.createStream(s, o), l.fd;
            }
            case 1:
            case 2:
              return 0;
            case 3:
              return s.flags;
            case 4: {
              var o = R.get();
              return s.flags |= o, 0;
            }
            case 5: {
              var o = R.get(), c = 0;
              return ee[o + c >> 1] = 2, 0;
            }
            case 6:
            case 7:
              return 0;
            case 16:
            case 8:
              return -28;
            case 9:
              return Pn(28), -1;
            default:
              return -28;
          }
        } catch (m) {
          if (typeof _ > "u" || m.name !== "ErrnoError")
            throw m;
          return -m.errno;
        }
      }
      function ca(t, r) {
        try {
          var a = R.getStreamFromFD(t);
          return R.doStat(_.stat, a.path, r);
        } catch (s) {
          if (typeof _ > "u" || s.name !== "ErrnoError")
            throw s;
          return -s.errno;
        }
      }
      var Ve = (t, r, a) => Vt(t, ne, r, a);
      function ga(t, r) {
        try {
          if (r === 0)
            return -28;
          var a = _.cwd(), s = xe(a) + 1;
          return r < s ? -68 : (Ve(a, t, r), s);
        } catch (o) {
          if (typeof _ > "u" || o.name !== "ErrnoError")
            throw o;
          return -o.errno;
        }
      }
      function fa(t, r, a) {
        try {
          var s = R.getStreamFromFD(t);
          s.getdents || (s.getdents = _.readdir(s.path));
          for (var o = 280, l = 0, c = _.llseek(s, 0, 1), m = Math.floor(c / o); m < s.getdents.length && l + o <= a; ) {
            var d, h, k = s.getdents[m];
            if (k === ".")
              d = s.node.id, h = 4;
            else if (k === "..") {
              var C = _.lookupPath(s.path, { parent: !0 });
              d = C.node.id, h = 4;
            } else {
              var D = _.lookupNode(s.node, k);
              d = D.id, h = _.isChrdev(D.mode) ? 2 : _.isDir(D.mode) ? 4 : _.isLink(D.mode) ? 10 : 8;
            }
            Y = [d >>> 0, (E = d, +Math.abs(E) >= 1 ? E > 0 ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)], w[r + l >> 2] = Y[0], w[r + l + 4 >> 2] = Y[1], Y = [(m + 1) * o >>> 0, (E = (m + 1) * o, +Math.abs(E) >= 1 ? E > 0 ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)], w[r + l + 8 >> 2] = Y[0], w[r + l + 12 >> 2] = Y[1], ee[r + l + 16 >> 1] = 280, $[r + l + 18 >> 0] = h, Ve(k, r + l + 19, 256), l += o, m += 1;
          }
          return _.llseek(s, m * o, 0), l;
        } catch (P) {
          if (typeof _ > "u" || P.name !== "ErrnoError")
            throw P;
          return -P.errno;
        }
      }
      function ma(t, r, a, s, o, l) {
        try {
          var c = Mt(t);
          return r === 1 && a === 4 ? (w[s >> 2] = c.error, w[o >> 2] = 4, c.error = null, 0) : -50;
        } catch (m) {
          if (typeof _ > "u" || m.name !== "ErrnoError")
            throw m;
          return -m.errno;
        }
      }
      function pa(t, r, a) {
        R.varargs = a;
        try {
          var s = R.getStreamFromFD(t);
          switch (r) {
            case 21509:
              return s.tty ? 0 : -59;
            case 21505: {
              if (!s.tty)
                return -59;
              if (s.tty.ops.ioctl_tcgets) {
                var o = s.tty.ops.ioctl_tcgets(s), l = R.get();
                w[l >> 2] = o.c_iflag || 0, w[l + 4 >> 2] = o.c_oflag || 0, w[l + 8 >> 2] = o.c_cflag || 0, w[l + 12 >> 2] = o.c_lflag || 0;
                for (var c = 0; c < 32; c++)
                  $[l + c + 17 >> 0] = o.c_cc[c] || 0;
                return 0;
              }
              return 0;
            }
            case 21510:
            case 21511:
            case 21512:
              return s.tty ? 0 : -59;
            case 21506:
            case 21507:
            case 21508: {
              if (!s.tty)
                return -59;
              if (s.tty.ops.ioctl_tcsets) {
                for (var l = R.get(), m = w[l >> 2], d = w[l + 4 >> 2], h = w[l + 8 >> 2], k = w[l + 12 >> 2], C = [], c = 0; c < 32; c++)
                  C.push($[l + c + 17 >> 0]);
                return s.tty.ops.ioctl_tcsets(s.tty, r, { c_iflag: m, c_oflag: d, c_cflag: h, c_lflag: k, c_cc: C });
              }
              return 0;
            }
            case 21519: {
              if (!s.tty)
                return -59;
              var l = R.get();
              return w[l >> 2] = 0, 0;
            }
            case 21520:
              return s.tty ? -28 : -59;
            case 21531: {
              var l = R.get();
              return _.ioctl(s, r, l);
            }
            case 21523: {
              if (!s.tty)
                return -59;
              if (s.tty.ops.ioctl_tiocgwinsz) {
                var D = s.tty.ops.ioctl_tiocgwinsz(s.tty), l = R.get();
                ee[l >> 1] = D[0], ee[l + 2 >> 1] = D[1];
              }
              return 0;
            }
            case 21524:
              return s.tty ? 0 : -59;
            case 21515:
              return s.tty ? 0 : -59;
            default:
              return -28;
          }
        } catch (P) {
          if (typeof _ > "u" || P.name !== "ErrnoError")
            throw P;
          return -P.errno;
        }
      }
      function da(t, r) {
        try {
          return t = R.getStr(t), R.doStat(_.lstat, t, r);
        } catch (a) {
          if (typeof _ > "u" || a.name !== "ErrnoError")
            throw a;
          return -a.errno;
        }
      }
      function ha(t, r, a, s) {
        try {
          r = R.getStr(r);
          var o = s & 256, l = s & 4096;
          return s = s & -6401, r = R.calculateAt(t, r, l), R.doStat(o ? _.lstat : _.stat, r, a);
        } catch (c) {
          if (typeof _ > "u" || c.name !== "ErrnoError")
            throw c;
          return -c.errno;
        }
      }
      function ya(t, r, a, s) {
        R.varargs = s;
        try {
          r = R.getStr(r), r = R.calculateAt(t, r);
          var o = s ? R.get() : 0;
          return _.open(r, a, o).fd;
        } catch (l) {
          if (typeof _ > "u" || l.name !== "ErrnoError")
            throw l;
          return -l.errno;
        }
      }
      function va(t, r, a) {
        try {
          for (var s = 0, o = 0; o < r; o++) {
            var l = t + 8 * o, c = w[l >> 2], m = ee[l + 4 >> 1], d = 32, h = _.getStream(c);
            h && (d = R.DEFAULT_POLLMASK, h.stream_ops.poll && (d = h.stream_ops.poll(h, -1))), d &= m | 8 | 16, d && s++, ee[l + 6 >> 1] = d;
          }
          return s;
        } catch (k) {
          if (typeof _ > "u" || k.name !== "ErrnoError")
            throw k;
          return -k.errno;
        }
      }
      function wa(t, r, a, s) {
        try {
          if (r = R.getStr(r), r = R.calculateAt(t, r), s <= 0)
            return -28;
          var o = _.readlink(r), l = Math.min(s, xe(o)), c = $[a + l];
          return Ve(o, a, s + 1), $[a + l] = c, l;
        } catch (m) {
          if (typeof _ > "u" || m.name !== "ErrnoError")
            throw m;
          return -m.errno;
        }
      }
      var En = (t, r, a, s, o) => {
        switch (r) {
          case 2:
            a = Dt(a), Qt(t, 16), o && (w[o >> 2] = 16), ee[t >> 1] = r, w[t + 4 >> 2] = a, ee[t + 2 >> 1] = Wt(s);
            break;
          case 10:
            a = Zt(a), Qt(t, 28), o && (w[o >> 2] = 28), w[t >> 2] = r, w[t + 8 >> 2] = a[0], w[t + 12 >> 2] = a[1], w[t + 16 >> 2] = a[2], w[t + 20 >> 2] = a[3], ee[t + 2 >> 1] = Wt(s);
            break;
          default:
            return 5;
        }
        return 0;
      };
      function ka(t, r, a, s, o, l) {
        try {
          var c = Mt(t), m = c.sock_ops.recvmsg(c, a);
          if (!m)
            return 0;
          if (o)
            var d = En(o, c.family, he.lookup_name(m.addr), m.port, l);
          return ne.set(m.buffer, r), m.buffer.byteLength;
        } catch (h) {
          if (typeof _ > "u" || h.name !== "ErrnoError")
            throw h;
          return -h.errno;
        }
      }
      function Sa(t) {
        try {
          return t = R.getStr(t), _.rmdir(t), 0;
        } catch (r) {
          if (typeof _ > "u" || r.name !== "ErrnoError")
            throw r;
          return -r.errno;
        }
      }
      function Ia(t, r, a, s, o, l) {
        try {
          var c = Mt(t), m = Gn(o, l, !0);
          return m ? c.sock_ops.sendmsg(c, $, r, a, m.addr, m.port) : _.write(c.stream, $, r, a);
        } catch (d) {
          if (typeof _ > "u" || d.name !== "ErrnoError")
            throw d;
          return -d.errno;
        }
      }
      function Ma(t, r, a) {
        try {
          var s = J.createSocket(t, r, a);
          return s.stream.fd;
        } catch (o) {
          if (typeof _ > "u" || o.name !== "ErrnoError")
            throw o;
          return -o.errno;
        }
      }
      function Da(t, r) {
        try {
          return t = R.getStr(t), R.doStat(_.stat, t, r);
        } catch (a) {
          if (typeof _ > "u" || a.name !== "ErrnoError")
            throw a;
          return -a.errno;
        }
      }
      function Ca(t, r) {
        try {
          return t = R.getStr(t), r = R.getStr(r), _.symlink(t, r), 0;
        } catch (a) {
          if (typeof _ > "u" || a.name !== "ErrnoError")
            throw a;
          return -a.errno;
        }
      }
      function Pa(t, r, a) {
        try {
          return r = R.getStr(r), r = R.calculateAt(t, r), a === 0 ? _.unlink(r) : a === 512 ? _.rmdir(r) : fe("Invalid flags passed to unlinkat"), 0;
        } catch (s) {
          if (typeof _ > "u" || s.name !== "ErrnoError")
            throw s;
          return -s.errno;
        }
      }
      var Pt = {};
      function Rn(t) {
        for (; t.length; ) {
          var r = t.pop(), a = t.pop();
          a(r);
        }
      }
      function st(t) {
        return this.fromWireType(w[t >> 2]);
      }
      var Qe = {}, He = {}, bt = {}, ba = 48, Ga = 57;
      function Ot(t) {
        if (t === void 0)
          return "_unknown";
        t = t.replace(/[^a-zA-Z0-9_]/g, "$");
        var r = t.charCodeAt(0);
        return r >= ba && r <= Ga ? `_${t}` : t;
      }
      function Gt(t, r) {
        return t = Ot(t), { [t]: function() {
          return r.apply(this, arguments);
        } }[t];
      }
      function en(t, r) {
        var a = Gt(r, function(s) {
          this.name = r, this.message = s;
          var o = new Error(s).stack;
          o !== void 0 && (this.stack = this.toString() + `
` + o.replace(/^Error(:[^\n]*)?\n/, ""));
        });
        return a.prototype = Object.create(t.prototype), a.prototype.constructor = a, a.prototype.toString = function() {
          return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
        }, a;
      }
      var An = void 0;
      function Et(t) {
        throw new An(t);
      }
      function tn(t, r, a) {
        t.forEach(function(m) {
          bt[m] = r;
        });
        function s(m) {
          var d = a(m);
          d.length !== t.length && Et("Mismatched type converter count");
          for (var h = 0; h < t.length; ++h)
            ye(t[h], d[h]);
        }
        var o = new Array(r.length), l = [], c = 0;
        r.forEach((m, d) => {
          He.hasOwnProperty(m) ? o[d] = He[m] : (l.push(m), Qe.hasOwnProperty(m) || (Qe[m] = []), Qe[m].push(() => {
            o[d] = He[m], ++c, c === l.length && s(o);
          }));
        }), l.length === 0 && s(o);
      }
      var Ea = function(t) {
        var r = Pt[t];
        delete Pt[t];
        var a = r.rawConstructor, s = r.rawDestructor, o = r.fields, l = o.map((c) => c.getterReturnType).concat(o.map((c) => c.setterArgumentType));
        tn([t], l, (c) => {
          var m = {};
          return o.forEach((d, h) => {
            var k = d.fieldName, C = c[h], D = d.getter, P = d.getterContext, A = c[h + o.length], x = d.setter, q = d.setterContext;
            m[k] = { read: (V) => C.fromWireType(D(P, V)), write: (V, M) => {
              var b = [];
              x(q, V, A.toWireType(b, M)), Rn(b);
            } };
          }), [{ name: r.name, fromWireType: function(d) {
            var h = {};
            for (var k in m)
              h[k] = m[k].read(d);
            return s(d), h;
          }, toWireType: function(d, h) {
            for (var k in m)
              if (!(k in h))
                throw new TypeError(`Missing field: "${k}"`);
            var C = a();
            for (k in m)
              m[k].write(C, h[k]);
            return d !== null && d.push(s, C), C;
          }, argPackAdvance: 8, readValueFromPointer: st, destructorFunction: s }];
        });
      };
      function Ra(t, r, a, s, o) {
      }
      function Rt(t) {
        switch (t) {
          case 1:
            return 0;
          case 2:
            return 1;
          case 4:
            return 2;
          case 8:
            return 3;
          default:
            throw new TypeError(`Unknown type size: ${t}`);
        }
      }
      function Aa() {
        for (var t = new Array(256), r = 0; r < 256; ++r)
          t[r] = String.fromCharCode(r);
        Tn = t;
      }
      var Tn = void 0;
      function re(t) {
        for (var r = "", a = t; ne[a]; )
          r += Tn[ne[a++]];
        return r;
      }
      var ut = void 0;
      function N(t) {
        throw new ut(t);
      }
      function ye(t, r, a = {}) {
        if (!("argPackAdvance" in r))
          throw new TypeError("registerType registeredInstance requires argPackAdvance");
        var s = r.name;
        if (t || N(`type "${s}" must have a positive integer typeid pointer`), He.hasOwnProperty(t)) {
          if (a.ignoreDuplicateRegistrations)
            return;
          N(`Cannot register type '${s}' twice`);
        }
        if (He[t] = r, delete bt[t], Qe.hasOwnProperty(t)) {
          var o = Qe[t];
          delete Qe[t], o.forEach((l) => l());
        }
      }
      function Ta(t, r, a, s, o) {
        var l = Rt(a);
        r = re(r), ye(t, { name: r, fromWireType: function(c) {
          return !!c;
        }, toWireType: function(c, m) {
          return m ? s : o;
        }, argPackAdvance: 8, readValueFromPointer: function(c) {
          var m;
          if (a === 1)
            m = $;
          else if (a === 2)
            m = ee;
          else if (a === 4)
            m = w;
          else
            throw new TypeError("Unknown boolean type size: " + r);
          return this.fromWireType(m[c >> l]);
        }, destructorFunction: null });
      }
      function La(t) {
        if (!(this instanceof Ee) || !(t instanceof Ee))
          return !1;
        for (var r = this.$$.ptrType.registeredClass, a = this.$$.ptr, s = t.$$.ptrType.registeredClass, o = t.$$.ptr; r.baseClass; )
          a = r.upcast(a), r = r.baseClass;
        for (; s.baseClass; )
          o = s.upcast(o), s = s.baseClass;
        return r === s && a === o;
      }
      function Wa(t) {
        return { count: t.count, deleteScheduled: t.deleteScheduled, preservePointerOnDelete: t.preservePointerOnDelete, ptr: t.ptr, ptrType: t.ptrType, smartPtr: t.smartPtr, smartPtrType: t.smartPtrType };
      }
      function nn(t) {
        function r(a) {
          return a.$$.ptrType.registeredClass.name;
        }
        N(r(t) + " instance already deleted");
      }
      var rn = !1;
      function Ln(t) {
      }
      function Ba(t) {
        t.smartPtr ? t.smartPtrType.rawDestructor(t.smartPtr) : t.ptrType.registeredClass.rawDestructor(t.ptr);
      }
      function Wn(t) {
        t.count.value -= 1;
        var r = t.count.value === 0;
        r && Ba(t);
      }
      function Bn(t, r, a) {
        if (r === a)
          return t;
        if (a.baseClass === void 0)
          return null;
        var s = Bn(t, r, a.baseClass);
        return s === null ? null : a.downcast(s);
      }
      var xn = {};
      function xa() {
        return Object.keys(lt).length;
      }
      function Na() {
        var t = [];
        for (var r in lt)
          lt.hasOwnProperty(r) && t.push(lt[r]);
        return t;
      }
      var ot = [];
      function an() {
        for (; ot.length; ) {
          var t = ot.pop();
          t.$$.deleteScheduled = !1, t.delete();
        }
      }
      var _t = void 0;
      function za(t) {
        _t = t, ot.length && _t && _t(an);
      }
      function Ha() {
        e.getInheritedInstanceCount = xa, e.getLiveInheritedInstances = Na, e.flushPendingDeletes = an, e.setDelayFunction = za;
      }
      var lt = {};
      function Fa(t, r) {
        for (r === void 0 && N("ptr should not be undefined"); t.baseClass; )
          r = t.upcast(r), t = t.baseClass;
        return r;
      }
      function Ua(t, r) {
        return r = Fa(t, r), lt[r];
      }
      function At(t, r) {
        (!r.ptrType || !r.ptr) && Et("makeClassHandle requires ptr and ptrType");
        var a = !!r.smartPtrType, s = !!r.smartPtr;
        return a !== s && Et("Both smartPtrType and smartPtr must be specified"), r.count = { value: 1 }, ct(Object.create(t, { $$: { value: r } }));
      }
      function ja(t) {
        var r = this.getPointee(t);
        if (!r)
          return this.destructor(t), null;
        var a = Ua(this.registeredClass, r);
        if (a !== void 0) {
          if (a.$$.count.value === 0)
            return a.$$.ptr = r, a.$$.smartPtr = t, a.clone();
          var s = a.clone();
          return this.destructor(t), s;
        }
        function o() {
          return this.isSmartPointer ? At(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: r, smartPtrType: this, smartPtr: t }) : At(this.registeredClass.instancePrototype, { ptrType: this, ptr: t });
        }
        var l = this.registeredClass.getActualType(r), c = xn[l];
        if (!c)
          return o.call(this);
        var m;
        this.isConst ? m = c.constPointerType : m = c.pointerType;
        var d = Bn(r, this.registeredClass, m.registeredClass);
        return d === null ? o.call(this) : this.isSmartPointer ? At(m.registeredClass.instancePrototype, { ptrType: m, ptr: d, smartPtrType: this, smartPtr: t }) : At(m.registeredClass.instancePrototype, { ptrType: m, ptr: d });
      }
      var ct = function(t) {
        return typeof FinalizationRegistry > "u" ? (ct = (r) => r, t) : (rn = new FinalizationRegistry((r) => {
          Wn(r.$$);
        }), ct = (r) => {
          var a = r.$$, s = !!a.smartPtr;
          if (s) {
            var o = { $$: a };
            rn.register(r, o, r);
          }
          return r;
        }, Ln = (r) => rn.unregister(r), ct(t));
      };
      function $a() {
        if (this.$$.ptr || nn(this), this.$$.preservePointerOnDelete)
          return this.$$.count.value += 1, this;
        var t = ct(Object.create(Object.getPrototypeOf(this), { $$: { value: Wa(this.$$) } }));
        return t.$$.count.value += 1, t.$$.deleteScheduled = !1, t;
      }
      function Ya() {
        this.$$.ptr || nn(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && N("Object already scheduled for deletion"), Ln(this), Wn(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
      }
      function Xa() {
        return !this.$$.ptr;
      }
      function qa() {
        return this.$$.ptr || nn(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && N("Object already scheduled for deletion"), ot.push(this), ot.length === 1 && _t && _t(an), this.$$.deleteScheduled = !0, this;
      }
      function Va() {
        Ee.prototype.isAliasOf = La, Ee.prototype.clone = $a, Ee.prototype.delete = Ya, Ee.prototype.isDeleted = Xa, Ee.prototype.deleteLater = qa;
      }
      function Ee() {
      }
      function Qa(t, r, a) {
        if (t[r].overloadTable === void 0) {
          var s = t[r];
          t[r] = function() {
            return t[r].overloadTable.hasOwnProperty(arguments.length) || N(`Function '${a}' called with an invalid number of arguments (${arguments.length}) - expects one of (${t[r].overloadTable})!`), t[r].overloadTable[arguments.length].apply(this, arguments);
          }, t[r].overloadTable = [], t[r].overloadTable[s.argCount] = s;
        }
      }
      function sn(t, r, a) {
        e.hasOwnProperty(t) ? ((a === void 0 || e[t].overloadTable !== void 0 && e[t].overloadTable[a] !== void 0) && N(`Cannot register public name '${t}' twice`), Qa(e, t, t), e.hasOwnProperty(a) && N(`Cannot register multiple overloads of a function with the same number of arguments (${a})!`), e[t].overloadTable[a] = r) : (e[t] = r, a !== void 0 && (e[t].numArguments = a));
      }
      function Ja(t, r, a, s, o, l, c, m) {
        this.name = t, this.constructor = r, this.instancePrototype = a, this.rawDestructor = s, this.baseClass = o, this.getActualType = l, this.upcast = c, this.downcast = m, this.pureVirtualFunctions = [];
      }
      function un(t, r, a) {
        for (; r !== a; )
          r.upcast || N(`Expected null or instance of ${a.name}, got an instance of ${r.name}`), t = r.upcast(t), r = r.baseClass;
        return t;
      }
      function Ka(t, r) {
        if (r === null)
          return this.isReference && N(`null is not a valid ${this.name}`), 0;
        r.$$ || N(`Cannot pass "${on(r)}" as a ${this.name}`), r.$$.ptr || N(`Cannot pass deleted object as a pointer of type ${this.name}`);
        var a = r.$$.ptrType.registeredClass, s = un(r.$$.ptr, a, this.registeredClass);
        return s;
      }
      function Za(t, r) {
        var a;
        if (r === null)
          return this.isReference && N(`null is not a valid ${this.name}`), this.isSmartPointer ? (a = this.rawConstructor(), t !== null && t.push(this.rawDestructor, a), a) : 0;
        r.$$ || N(`Cannot pass "${on(r)}" as a ${this.name}`), r.$$.ptr || N(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && r.$$.ptrType.isConst && N(`Cannot convert argument of type ${r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name} to parameter type ${this.name}`);
        var s = r.$$.ptrType.registeredClass;
        if (a = un(r.$$.ptr, s, this.registeredClass), this.isSmartPointer)
          switch (r.$$.smartPtr === void 0 && N("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
            case 0:
              r.$$.smartPtrType === this ? a = r.$$.smartPtr : N(`Cannot convert argument of type ${r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name} to parameter type ${this.name}`);
              break;
            case 1:
              a = r.$$.smartPtr;
              break;
            case 2:
              if (r.$$.smartPtrType === this)
                a = r.$$.smartPtr;
              else {
                var o = r.clone();
                a = this.rawShare(a, ve.toHandle(function() {
                  o.delete();
                })), t !== null && t.push(this.rawDestructor, a);
              }
              break;
            default:
              N("Unsupporting sharing policy");
          }
        return a;
      }
      function Oa(t, r) {
        if (r === null)
          return this.isReference && N(`null is not a valid ${this.name}`), 0;
        r.$$ || N(`Cannot pass "${on(r)}" as a ${this.name}`), r.$$.ptr || N(`Cannot pass deleted object as a pointer of type ${this.name}`), r.$$.ptrType.isConst && N(`Cannot convert argument of type ${r.$$.ptrType.name} to parameter type ${this.name}`);
        var a = r.$$.ptrType.registeredClass, s = un(r.$$.ptr, a, this.registeredClass);
        return s;
      }
      function ei(t) {
        return this.rawGetPointee && (t = this.rawGetPointee(t)), t;
      }
      function ti(t) {
        this.rawDestructor && this.rawDestructor(t);
      }
      function ni(t) {
        t !== null && t.delete();
      }
      function ri() {
        Ie.prototype.getPointee = ei, Ie.prototype.destructor = ti, Ie.prototype.argPackAdvance = 8, Ie.prototype.readValueFromPointer = st, Ie.prototype.deleteObject = ni, Ie.prototype.fromWireType = ja;
      }
      function Ie(t, r, a, s, o, l, c, m, d, h, k) {
        this.name = t, this.registeredClass = r, this.isReference = a, this.isConst = s, this.isSmartPointer = o, this.pointeeType = l, this.sharingPolicy = c, this.rawGetPointee = m, this.rawConstructor = d, this.rawShare = h, this.rawDestructor = k, !o && r.baseClass === void 0 ? s ? (this.toWireType = Ka, this.destructorFunction = null) : (this.toWireType = Oa, this.destructorFunction = null) : this.toWireType = Za;
      }
      function Nn(t, r, a) {
        e.hasOwnProperty(t) || Et("Replacing nonexistant public symbol"), e[t].overloadTable !== void 0 && a !== void 0 ? e[t].overloadTable[a] = r : (e[t] = r, e[t].argCount = a);
      }
      var ai = (t, r, a) => {
        var s = e["dynCall_" + t];
        return a && a.length ? s.apply(null, [r].concat(a)) : s.call(null, r);
      }, ii = (t, r, a) => {
        if (t.includes("j"))
          return ai(t, r, a);
        var s = Q(r).apply(null, a);
        return s;
      }, si = (t, r) => {
        var a = [];
        return function() {
          return a.length = 0, Object.assign(a, arguments), ii(t, r, a);
        };
      };
      function Me(t, r) {
        t = re(t);
        function a() {
          return t.includes("j") ? si(t, r) : Q(r);
        }
        var s = a();
        return typeof s != "function" && N(`unknown function pointer with signature ${t}: ${r}`), s;
      }
      var zn = void 0;
      function Hn(t) {
        var r = ur(t), a = re(r);
        return De(r), a;
      }
      function Fn(t, r) {
        var a = [], s = {};
        function o(l) {
          if (!s[l] && !He[l]) {
            if (bt[l]) {
              bt[l].forEach(o);
              return;
            }
            a.push(l), s[l] = !0;
          }
        }
        throw r.forEach(o), new zn(`${t}: ` + a.map(Hn).join([", "]));
      }
      function ui(t, r, a, s, o, l, c, m, d, h, k, C, D) {
        k = re(k), l = Me(o, l), m && (m = Me(c, m)), h && (h = Me(d, h)), D = Me(C, D);
        var P = Ot(k);
        sn(P, function() {
          Fn(`Cannot construct ${k} due to unbound types`, [s]);
        }), tn([t, r, a], s ? [s] : [], function(A) {
          A = A[0];
          var x, q;
          s ? (x = A.registeredClass, q = x.instancePrototype) : q = Ee.prototype;
          var V = Gt(P, function() {
            if (Object.getPrototypeOf(this) !== M)
              throw new ut("Use 'new' to construct " + k);
            if (b.constructor_body === void 0)
              throw new ut(k + " has no accessible constructor");
            var O = b.constructor_body[arguments.length];
            if (O === void 0)
              throw new ut(`Tried to invoke ctor of ${k} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(b.constructor_body).toString()}) parameters instead!`);
            return O.apply(this, arguments);
          }), M = Object.create(q, { constructor: { value: V } });
          V.prototype = M;
          var b = new Ja(k, V, M, D, x, l, m, h);
          b.baseClass && (b.baseClass.__derivedClasses === void 0 && (b.baseClass.__derivedClasses = []), b.baseClass.__derivedClasses.push(b));
          var U = new Ie(k, b, !0, !1, !1), j = new Ie(k + "*", b, !1, !1, !1), ue = new Ie(k + " const*", b, !1, !0, !1);
          return xn[t] = { pointerType: j, constPointerType: ue }, Nn(P, V), [U, j, ue];
        });
      }
      function oi() {
        this.allocated = [void 0], this.freelist = [], this.get = function(t) {
          return this.allocated[t];
        }, this.has = function(t) {
          return this.allocated[t] !== void 0;
        }, this.allocate = function(t) {
          var r = this.freelist.pop() || this.allocated.length;
          return this.allocated[r] = t, r;
        }, this.free = function(t) {
          this.allocated[t] = void 0, this.freelist.push(t);
        };
      }
      var le = new oi();
      function Un(t) {
        t >= le.reserved && --le.get(t).refcount === 0 && le.free(t);
      }
      function _i() {
        for (var t = 0, r = le.reserved; r < le.allocated.length; ++r)
          le.allocated[r] !== void 0 && ++t;
        return t;
      }
      function li() {
        le.allocated.push({ value: void 0 }, { value: null }, { value: !0 }, { value: !1 }), le.reserved = le.allocated.length, e.count_emval_handles = _i;
      }
      var ve = { toValue: (t) => (t || N("Cannot use deleted val. handle = " + t), le.get(t).value), toHandle: (t) => {
        switch (t) {
          case void 0:
            return 1;
          case null:
            return 2;
          case !0:
            return 3;
          case !1:
            return 4;
          default:
            return le.allocate({ refcount: 1, value: t });
        }
      } };
      function ci(t, r) {
        r = re(r), ye(t, { name: r, fromWireType: function(a) {
          var s = ve.toValue(a);
          return Un(a), s;
        }, toWireType: function(a, s) {
          return ve.toHandle(s);
        }, argPackAdvance: 8, readValueFromPointer: st, destructorFunction: null });
      }
      function gi(t, r, a) {
        switch (r) {
          case 0:
            return function(s) {
              var o = a ? $ : ne;
              return this.fromWireType(o[s]);
            };
          case 1:
            return function(s) {
              var o = a ? ee : $e;
              return this.fromWireType(o[s >> 1]);
            };
          case 2:
            return function(s) {
              var o = a ? w : T;
              return this.fromWireType(o[s >> 2]);
            };
          default:
            throw new TypeError("Unknown integer type: " + t);
        }
      }
      function fi(t, r, a, s) {
        var o = Rt(a);
        r = re(r);
        function l() {
        }
        l.values = {}, ye(t, { name: r, constructor: l, fromWireType: function(c) {
          return this.constructor.values[c];
        }, toWireType: function(c, m) {
          return m.value;
        }, argPackAdvance: 8, readValueFromPointer: gi(r, o, s), destructorFunction: null }), sn(r, l);
      }
      function jn(t, r) {
        var a = He[t];
        return a === void 0 && N(r + " has unknown type " + Hn(t)), a;
      }
      function mi(t, r, a) {
        var s = jn(t, "enum");
        r = re(r);
        var o = s.constructor, l = Object.create(s.constructor.prototype, { value: { value: a }, constructor: { value: Gt(`${s.name}_${r}`, function() {
        }) } });
        o.values[a] = l, o[r] = l;
      }
      function on(t) {
        if (t === null)
          return "null";
        var r = typeof t;
        return r === "object" || r === "array" || r === "function" ? t.toString() : "" + t;
      }
      function pi(t, r) {
        switch (r) {
          case 2:
            return function(a) {
              return this.fromWireType(vt[a >> 2]);
            };
          case 3:
            return function(a) {
              return this.fromWireType(wt[a >> 3]);
            };
          default:
            throw new TypeError("Unknown float type: " + t);
        }
      }
      function di(t, r, a) {
        var s = Rt(a);
        r = re(r), ye(t, { name: r, fromWireType: function(o) {
          return o;
        }, toWireType: function(o, l) {
          return l;
        }, argPackAdvance: 8, readValueFromPointer: pi(r, s), destructorFunction: null });
      }
      function hi(t, r) {
        if (!(t instanceof Function))
          throw new TypeError(`new_ called with constructor type ${typeof t} which is not a function`);
        var a = Gt(t.name || "unknownFunctionName", function() {
        });
        a.prototype = t.prototype;
        var s = new a(), o = t.apply(s, r);
        return o instanceof Object ? o : s;
      }
      function yi(t, r, a, s, o, l) {
        var c = r.length;
        c < 2 && N("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var m = r[1] !== null && a !== null, d = !1, h = 1; h < r.length; ++h)
          if (r[h] !== null && r[h].destructorFunction === void 0) {
            d = !0;
            break;
          }
        for (var k = r[0].name !== "void", C = "", D = "", h = 0; h < c - 2; ++h)
          C += (h !== 0 ? ", " : "") + "arg" + h, D += (h !== 0 ? ", " : "") + "arg" + h + "Wired";
        var P = `
        return function ${Ot(t)}(${C}) {
        if (arguments.length !== ${c - 2}) {
          throwBindingError('function ${t} called with ${arguments.length} arguments, expected ${c - 2} args!');
        }`;
        d && (P += `var destructors = [];
`);
        var A = d ? "destructors" : "null", x = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"], q = [N, s, o, Rn, r[0], r[1]];
        m && (P += "var thisWired = classParam.toWireType(" + A + `, this);
`);
        for (var h = 0; h < c - 2; ++h)
          P += "var arg" + h + "Wired = argType" + h + ".toWireType(" + A + ", arg" + h + "); // " + r[h + 2].name + `
`, x.push("argType" + h), q.push(r[h + 2]);
        if (m && (D = "thisWired" + (D.length > 0 ? ", " : "") + D), P += (k || l ? "var rv = " : "") + "invoker(fn" + (D.length > 0 ? ", " : "") + D + `);
`, d)
          P += `runDestructors(destructors);
`;
        else
          for (var h = m ? 1 : 2; h < r.length; ++h) {
            var V = h === 1 ? "thisWired" : "arg" + (h - 2) + "Wired";
            r[h].destructorFunction !== null && (P += V + "_dtor(" + V + "); // " + r[h].name + `
`, x.push(V + "_dtor"), q.push(r[h].destructorFunction));
          }
        return k && (P += `var ret = retType.fromWireType(rv);
return ret;
`), P += `}
`, x.push(P), hi(Function, x).apply(null, q);
      }
      function vi(t, r) {
        for (var a = [], s = 0; s < t; s++)
          a.push(T[r + s * 4 >> 2]);
        return a;
      }
      function wi(t, r, a, s, o, l, c) {
        var m = vi(r, a);
        t = re(t), o = Me(s, o), sn(t, function() {
          Fn(`Cannot call ${t} due to unbound types`, m);
        }, r - 1), tn([], m, function(d) {
          var h = [d[0], null].concat(d.slice(1));
          return Nn(t, yi(t, h, null, o, l, c), r - 1), [];
        });
      }
      function ki(t, r, a) {
        switch (r) {
          case 0:
            return a ? function(o) {
              return $[o];
            } : function(o) {
              return ne[o];
            };
          case 1:
            return a ? function(o) {
              return ee[o >> 1];
            } : function(o) {
              return $e[o >> 1];
            };
          case 2:
            return a ? function(o) {
              return w[o >> 2];
            } : function(o) {
              return T[o >> 2];
            };
          default:
            throw new TypeError("Unknown integer type: " + t);
        }
      }
      function Si(t, r, a, s, o) {
        r = re(r);
        var l = Rt(a), c = (C) => C;
        if (s === 0) {
          var m = 32 - 8 * a;
          c = (C) => C << m >>> m;
        }
        var d = r.includes("unsigned"), h = (C, D) => {
        }, k;
        d ? k = function(C, D) {
          return h(D, this.name), D >>> 0;
        } : k = function(C, D) {
          return h(D, this.name), D;
        }, ye(t, { name: r, fromWireType: c, toWireType: k, argPackAdvance: 8, readValueFromPointer: ki(r, l, s !== 0), destructorFunction: null });
      }
      function Ii(t, r, a) {
        var s = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], o = s[r];
        function l(c) {
          c = c >> 2;
          var m = T, d = m[c], h = m[c + 1];
          return new o(m.buffer, h, d);
        }
        a = re(a), ye(t, { name: a, fromWireType: l, argPackAdvance: 8, readValueFromPointer: l }, { ignoreDuplicateRegistrations: !0 });
      }
      function Mi(t, r) {
        r = re(r);
        var a = r === "std::string";
        ye(t, { name: r, fromWireType: function(s) {
          var o = T[s >> 2], l = s + 4, c;
          if (a)
            for (var m = l, d = 0; d <= o; ++d) {
              var h = l + d;
              if (d == o || ne[h] == 0) {
                var k = h - m, C = Se(m, k);
                c === void 0 ? c = C : (c += String.fromCharCode(0), c += C), m = h + 1;
              }
            }
          else {
            for (var D = new Array(o), d = 0; d < o; ++d)
              D[d] = String.fromCharCode(ne[l + d]);
            c = D.join("");
          }
          return De(s), c;
        }, toWireType: function(s, o) {
          o instanceof ArrayBuffer && (o = new Uint8Array(o));
          var l, c = typeof o == "string";
          c || o instanceof Uint8Array || o instanceof Uint8ClampedArray || o instanceof Int8Array || N("Cannot pass non-string to std::string"), a && c ? l = xe(o) : l = o.length;
          var m = Ke(4 + l + 1), d = m + 4;
          if (T[m >> 2] = l, a && c)
            Ve(o, d, l + 1);
          else if (c)
            for (var h = 0; h < l; ++h) {
              var k = o.charCodeAt(h);
              k > 255 && (De(d), N("String has UTF-16 code units that do not fit in 8 bits")), ne[d + h] = k;
            }
          else
            for (var h = 0; h < l; ++h)
              ne[d + h] = o[h];
          return s !== null && s.push(De, m), m;
        }, argPackAdvance: 8, readValueFromPointer: st, destructorFunction: function(s) {
          De(s);
        } });
      }
      var $n = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, Di = (t, r) => {
        for (var a = t, s = a >> 1, o = s + r / 2; !(s >= o) && $e[s]; )
          ++s;
        if (a = s << 1, a - t > 32 && $n)
          return $n.decode(ne.subarray(t, a));
        for (var l = "", c = 0; !(c >= r / 2); ++c) {
          var m = ee[t + c * 2 >> 1];
          if (m == 0)
            break;
          l += String.fromCharCode(m);
        }
        return l;
      }, Ci = (t, r, a) => {
        if (a === void 0 && (a = 2147483647), a < 2)
          return 0;
        a -= 2;
        for (var s = r, o = a < t.length * 2 ? a / 2 : t.length, l = 0; l < o; ++l) {
          var c = t.charCodeAt(l);
          ee[r >> 1] = c, r += 2;
        }
        return ee[r >> 1] = 0, r - s;
      }, Pi = (t) => t.length * 2, bi = (t, r) => {
        for (var a = 0, s = ""; !(a >= r / 4); ) {
          var o = w[t + a * 4 >> 2];
          if (o == 0)
            break;
          if (++a, o >= 65536) {
            var l = o - 65536;
            s += String.fromCharCode(55296 | l >> 10, 56320 | l & 1023);
          } else
            s += String.fromCharCode(o);
        }
        return s;
      }, Gi = (t, r, a) => {
        if (a === void 0 && (a = 2147483647), a < 4)
          return 0;
        for (var s = r, o = s + a - 4, l = 0; l < t.length; ++l) {
          var c = t.charCodeAt(l);
          if (c >= 55296 && c <= 57343) {
            var m = t.charCodeAt(++l);
            c = 65536 + ((c & 1023) << 10) | m & 1023;
          }
          if (w[r >> 2] = c, r += 4, r + 4 > o)
            break;
        }
        return w[r >> 2] = 0, r - s;
      }, Ei = (t) => {
        for (var r = 0, a = 0; a < t.length; ++a) {
          var s = t.charCodeAt(a);
          s >= 55296 && s <= 57343 && ++a, r += 4;
        }
        return r;
      }, Ri = function(t, r, a) {
        a = re(a);
        var s, o, l, c, m;
        r === 2 ? (s = Di, o = Ci, c = Pi, l = () => $e, m = 1) : r === 4 && (s = bi, o = Gi, c = Ei, l = () => T, m = 2), ye(t, { name: a, fromWireType: function(d) {
          for (var h = T[d >> 2], k = l(), C, D = d + 4, P = 0; P <= h; ++P) {
            var A = d + 4 + P * r;
            if (P == h || k[A >> m] == 0) {
              var x = A - D, q = s(D, x);
              C === void 0 ? C = q : (C += String.fromCharCode(0), C += q), D = A + r;
            }
          }
          return De(d), C;
        }, toWireType: function(d, h) {
          typeof h != "string" && N(`Cannot pass non-string to C++ string type ${a}`);
          var k = c(h), C = Ke(4 + k + r);
          return T[C >> 2] = k >> m, o(h, C + 4, k + r), d !== null && d.push(De, C), C;
        }, argPackAdvance: 8, readValueFromPointer: st, destructorFunction: function(d) {
          De(d);
        } });
      };
      function Ai(t, r, a, s, o, l) {
        Pt[t] = { name: re(r), rawConstructor: Me(a, s), rawDestructor: Me(o, l), fields: [] };
      }
      function Ti(t, r, a, s, o, l, c, m, d, h) {
        Pt[t].fields.push({ fieldName: re(r), getterReturnType: a, getter: Me(s, o), getterContext: l, setterArgumentType: c, setter: Me(m, d), setterContext: h });
      }
      function Li(t, r) {
        r = re(r), ye(t, { isVoid: !0, name: r, argPackAdvance: 0, fromWireType: function() {
        }, toWireType: function(a, s) {
        } });
      }
      var Wi = (t) => {
        do {
          var r = T[t >> 2];
          t += 4;
          var a = T[t >> 2];
          t += 4;
          var s = T[t >> 2];
          t += 4;
          var o = Se(r);
          _.createPath("/", X.dirname(o), !0, !0), _.createDataFile(o, null, $.subarray(s, s + a), !0, !0, !0);
        } while (T[t >> 2]);
      }, Bi = !0, xi = () => Bi, Ni = () => {
        throw 1 / 0;
      };
      function zi(t) {
        t > 4 && (le.get(t).refcount += 1);
      }
      function Hi() {
        return ve.toHandle([]);
      }
      var Fi = {};
      function Ui(t) {
        var r = Fi[t];
        return r === void 0 ? re(t) : r;
      }
      function ji(t) {
        return ve.toHandle(Ui(t));
      }
      function $i() {
        return ve.toHandle({});
      }
      function Yi(t, r, a) {
        t = ve.toValue(t), r = ve.toValue(r), a = ve.toValue(a), t[r] = a;
      }
      function Xi(t, r) {
        t = jn(t, "_emval_take_value");
        var a = t.readValueFromPointer(r);
        return ve.toHandle(a);
      }
      function Yn(t) {
        return T[t >> 2] + w[t + 4 >> 2] * 4294967296;
      }
      var qi = (t, r) => {
        var a = new Date(Yn(t) * 1e3);
        w[r >> 2] = a.getUTCSeconds(), w[r + 4 >> 2] = a.getUTCMinutes(), w[r + 8 >> 2] = a.getUTCHours(), w[r + 12 >> 2] = a.getUTCDate(), w[r + 16 >> 2] = a.getUTCMonth(), w[r + 20 >> 2] = a.getUTCFullYear() - 1900, w[r + 24 >> 2] = a.getUTCDay();
        var s = Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0), o = (a.getTime() - s) / (1e3 * 60 * 60 * 24) | 0;
        w[r + 28 >> 2] = o;
      }, gt = (t) => t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0), Vi = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], Qi = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Xn = (t) => {
        var r = gt(t.getFullYear()), a = r ? Vi : Qi, s = a[t.getMonth()] + t.getDate() - 1;
        return s;
      }, Ji = (t, r) => {
        var a = new Date(Yn(t) * 1e3);
        w[r >> 2] = a.getSeconds(), w[r + 4 >> 2] = a.getMinutes(), w[r + 8 >> 2] = a.getHours(), w[r + 12 >> 2] = a.getDate(), w[r + 16 >> 2] = a.getMonth(), w[r + 20 >> 2] = a.getFullYear() - 1900, w[r + 24 >> 2] = a.getDay();
        var s = Xn(a) | 0;
        w[r + 28 >> 2] = s, w[r + 36 >> 2] = -(a.getTimezoneOffset() * 60);
        var o = new Date(a.getFullYear(), 0, 1), l = new Date(a.getFullYear(), 6, 1).getTimezoneOffset(), c = o.getTimezoneOffset(), m = (l != c && a.getTimezoneOffset() == Math.min(c, l)) | 0;
        w[r + 32 >> 2] = m;
      }, Ki = (t) => {
        var r = new Date(w[t + 20 >> 2] + 1900, w[t + 16 >> 2], w[t + 12 >> 2], w[t + 8 >> 2], w[t + 4 >> 2], w[t >> 2], 0), a = w[t + 32 >> 2], s = r.getTimezoneOffset(), o = new Date(r.getFullYear(), 0, 1), l = new Date(r.getFullYear(), 6, 1).getTimezoneOffset(), c = o.getTimezoneOffset(), m = Math.min(c, l);
        if (a < 0)
          w[t + 32 >> 2] = +(l != c && m == s);
        else if (a > 0 != (m == s)) {
          var d = Math.max(c, l), h = a > 0 ? m : d;
          r.setTime(r.getTime() + (h - s) * 6e4);
        }
        w[t + 24 >> 2] = r.getDay();
        var k = Xn(r) | 0;
        return w[t + 28 >> 2] = k, w[t >> 2] = r.getSeconds(), w[t + 4 >> 2] = r.getMinutes(), w[t + 8 >> 2] = r.getHours(), w[t + 12 >> 2] = r.getDate(), w[t + 16 >> 2] = r.getMonth(), w[t + 20 >> 2] = r.getYear(), r.getTime() / 1e3 | 0;
      };
      function Zi(t, r, a, s, o, l, c, m) {
        try {
          var d = ze(o, l);
          if (isNaN(d))
            return -61;
          var h = R.getStreamFromFD(s), k = _.mmap(h, t, d, r, a), C = k.ptr;
          return w[c >> 2] = k.allocated, T[m >> 2] = C, 0;
        } catch (D) {
          if (typeof _ > "u" || D.name !== "ErrnoError")
            throw D;
          return -D.errno;
        }
      }
      function Oi(t, r, a, s, o, l, c) {
        try {
          var m = ze(l, c);
          if (isNaN(m))
            return -61;
          var d = R.getStreamFromFD(o);
          a & 2 && R.doMsync(t, d, r, s, m), _.munmap(d);
        } catch (h) {
          if (typeof _ > "u" || h.name !== "ErrnoError")
            throw h;
          return -h.errno;
        }
      }
      var qn = (t) => {
        var r = xe(t) + 1, a = Ke(r);
        return a && Ve(t, a, r), a;
      }, es = (t, r, a) => {
        var s = (/* @__PURE__ */ new Date()).getFullYear(), o = new Date(s, 0, 1), l = new Date(s, 6, 1), c = o.getTimezoneOffset(), m = l.getTimezoneOffset(), d = Math.max(c, m);
        T[t >> 2] = d * 60, w[r >> 2] = +(c != m);
        function h(A) {
          var x = A.toTimeString().match(/\(([A-Za-z ]+)\)$/);
          return x ? x[1] : "GMT";
        }
        var k = h(o), C = h(l), D = qn(k), P = qn(C);
        m < c ? (T[a >> 2] = D, T[a + 4 >> 2] = P) : (T[a >> 2] = P, T[a + 4 >> 2] = D);
      }, ts = () => {
        fe("");
      };
      function ns() {
        return Date.now();
      }
      var Vn = () => 2147483648, rs = () => Vn(), Qn;
      Qn = () => performance.now();
      var as = (t, r, a) => ne.copyWithin(t, r, r + a), is = (t) => {
        var r = ht.buffer, a = t - r.byteLength + 65535 >>> 16;
        try {
          return ht.grow(a), hn(), 1;
        } catch {
        }
      }, ss = (t) => {
        var r = ne.length;
        t = t >>> 0;
        var a = Vn();
        if (t > a)
          return !1;
        for (var s = (d, h) => d + (h - d % h) % h, o = 1; o <= 4; o *= 2) {
          var l = r * (1 + 0.2 / o);
          l = Math.min(l, t + 100663296);
          var c = Math.min(a, s(Math.max(t, l), 65536)), m = is(c);
          if (m)
            return !0;
        }
        return !1;
      }, _n = {}, us = () => B || "./this.program", ft = () => {
        if (!ft.strings) {
          var t = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", r = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: t, _: us() };
          for (var a in _n)
            _n[a] === void 0 ? delete r[a] : r[a] = _n[a];
          var s = [];
          for (var a in r)
            s.push(`${a}=${r[a]}`);
          ft.strings = s;
        }
        return ft.strings;
      }, os = (t, r) => {
        for (var a = 0; a < t.length; ++a)
          $[r++ >> 0] = t.charCodeAt(a);
        $[r >> 0] = 0;
      }, _s = (t, r) => {
        var a = 0;
        return ft().forEach(function(s, o) {
          var l = r + a;
          T[t + o * 4 >> 2] = l, os(s, l), a += s.length + 1;
        }), 0;
      }, ls = (t, r) => {
        var a = ft();
        T[t >> 2] = a.length;
        var s = 0;
        return a.forEach(function(o) {
          s += o.length + 1;
        }), T[r >> 2] = s, 0;
      }, Jn = (t) => {
        Rr() || (e.onExit && e.onExit(t), Yt = !0), K(t, new Ur(t));
      }, cs = (t, r) => {
        Jn(t);
      }, gs = cs;
      function fs(t) {
        try {
          var r = R.getStreamFromFD(t);
          return _.close(r), 0;
        } catch (a) {
          if (typeof _ > "u" || a.name !== "ErrnoError")
            throw a;
          return a.errno;
        }
      }
      function ms(t, r) {
        try {
          var a = 0, s = 0, o = 0, l = R.getStreamFromFD(t), c = l.tty ? 2 : _.isDir(l.mode) ? 3 : _.isLink(l.mode) ? 7 : 4;
          return $[r >> 0] = c, ee[r + 2 >> 1] = o, Y = [a >>> 0, (E = a, +Math.abs(E) >= 1 ? E > 0 ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)], w[r + 8 >> 2] = Y[0], w[r + 12 >> 2] = Y[1], Y = [s >>> 0, (E = s, +Math.abs(E) >= 1 ? E > 0 ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)], w[r + 16 >> 2] = Y[0], w[r + 20 >> 2] = Y[1], 0;
        } catch (m) {
          if (typeof _ > "u" || m.name !== "ErrnoError")
            throw m;
          return m.errno;
        }
      }
      var Kn = (t, r, a, s) => {
        for (var o = 0, l = 0; l < a; l++) {
          var c = T[r >> 2], m = T[r + 4 >> 2];
          r += 8;
          var d = _.read(t, $, c, m, s);
          if (d < 0)
            return -1;
          if (o += d, d < m)
            break;
          typeof s < "u" && (s += d);
        }
        return o;
      };
      function ps(t, r, a, s, o, l) {
        try {
          var c = ze(s, o);
          if (isNaN(c))
            return 61;
          var m = R.getStreamFromFD(t), d = Kn(m, r, a, c);
          return T[l >> 2] = d, 0;
        } catch (h) {
          if (typeof _ > "u" || h.name !== "ErrnoError")
            throw h;
          return h.errno;
        }
      }
      var Zn = (t, r, a, s) => {
        for (var o = 0, l = 0; l < a; l++) {
          var c = T[r >> 2], m = T[r + 4 >> 2];
          r += 8;
          var d = _.write(t, $, c, m, s);
          if (d < 0)
            return -1;
          o += d, typeof s < "u" && (s += d);
        }
        return o;
      };
      function ds(t, r, a, s, o, l) {
        try {
          var c = ze(s, o);
          if (isNaN(c))
            return 61;
          var m = R.getStreamFromFD(t), d = Zn(m, r, a, c);
          return T[l >> 2] = d, 0;
        } catch (h) {
          if (typeof _ > "u" || h.name !== "ErrnoError")
            throw h;
          return h.errno;
        }
      }
      function hs(t, r, a, s) {
        try {
          var o = R.getStreamFromFD(t), l = Kn(o, r, a);
          return T[s >> 2] = l, 0;
        } catch (c) {
          if (typeof _ > "u" || c.name !== "ErrnoError")
            throw c;
          return c.errno;
        }
      }
      function ys(t, r, a, s, o) {
        try {
          var l = ze(r, a);
          if (isNaN(l))
            return 61;
          var c = R.getStreamFromFD(t);
          return _.llseek(c, l, s), Y = [c.position >>> 0, (E = c.position, +Math.abs(E) >= 1 ? E > 0 ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)], w[o >> 2] = Y[0], w[o + 4 >> 2] = Y[1], c.getdents && l === 0 && s === 0 && (c.getdents = null), 0;
        } catch (m) {
          if (typeof _ > "u" || m.name !== "ErrnoError")
            throw m;
          return m.errno;
        }
      }
      function vs(t) {
        try {
          var r = R.getStreamFromFD(t);
          return r.stream_ops && r.stream_ops.fsync ? r.stream_ops.fsync(r) : 0;
        } catch (a) {
          if (typeof _ > "u" || a.name !== "ErrnoError")
            throw a;
          return a.errno;
        }
      }
      function ws(t, r, a, s) {
        try {
          var o = R.getStreamFromFD(t), l = Zn(o, r, a);
          return T[s >> 2] = l, 0;
        } catch (c) {
          if (typeof _ > "u" || c.name !== "ErrnoError")
            throw c;
          return c.errno;
        }
      }
      var ks = (t, r, a, s) => {
        var o = 0, l = 0, c = 0, m = 0, d = 0, h = 0, k;
        function C(D, P, A, x, q, V) {
          var M, b, U, j;
          return b = D === 10 ? 28 : 16, q = D === 10 ? bn(q) : Kt(q), M = Ke(b), j = En(M, D, q, V), yt(!j), U = Ke(32), w[U + 4 >> 2] = D, w[U + 8 >> 2] = P, w[U + 12 >> 2] = A, T[U + 24 >> 2] = x, T[U + 20 >> 2] = M, D === 10 ? w[U + 16 >> 2] = 28 : w[U + 16 >> 2] = 16, w[U + 28 >> 2] = 0, U;
        }
        if (a && (c = w[a >> 2], m = w[a + 4 >> 2], d = w[a + 8 >> 2], h = w[a + 12 >> 2]), d && !h && (h = d === 2 ? 17 : 6), !d && h && (d = h === 17 ? 2 : 1), h === 0 && (h = 6), d === 0 && (d = 1), !t && !r)
          return -2;
        if (c & -1088 || a !== 0 && w[a >> 2] & 2 && !t)
          return -1;
        if (c & 32)
          return -2;
        if (d !== 0 && d !== 1 && d !== 2)
          return -7;
        if (m !== 0 && m !== 2 && m !== 10)
          return -6;
        if (r && (r = Se(r), l = parseInt(r, 10), isNaN(l)))
          return c & 1024 ? -2 : -8;
        if (!t)
          return m === 0 && (m = 2), c & 1 || (m === 2 ? o = Bt(2130706433) : o = [0, 0, 0, 1]), k = C(m, d, h, null, o, l), T[s >> 2] = k, 0;
        if (t = Se(t), o = Dt(t), o !== null)
          if (m === 0 || m === 2)
            m = 2;
          else if (m === 10 && c & 8)
            o = [0, 0, Bt(65535), o], m = 10;
          else
            return -2;
        else if (o = Zt(t), o !== null)
          if (m === 0 || m === 10)
            m = 10;
          else
            return -2;
        return o != null ? (k = C(m, d, h, t, o, l), T[s >> 2] = k, 0) : c & 4 ? -2 : (t = he.lookup_name(t), o = Dt(t), m === 0 ? m = 2 : m === 10 && (o = [0, 0, Bt(65535), o]), k = C(m, d, h, null, o, l), T[s >> 2] = k, 0);
      }, Ss = (t, r) => (qt(ne.subarray(t, t + r)), 0), Is = (t, r) => {
        for (var a = 0, s = 0; s <= r; a += t[s++])
          ;
        return a;
      }, On = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], er = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ms = (t, r) => {
        for (var a = new Date(t.getTime()); r > 0; ) {
          var s = gt(a.getFullYear()), o = a.getMonth(), l = (s ? On : er)[o];
          if (r > l - a.getDate())
            r -= l - a.getDate() + 1, a.setDate(1), o < 11 ? a.setMonth(o + 1) : (a.setMonth(0), a.setFullYear(a.getFullYear() + 1));
          else
            return a.setDate(a.getDate() + r), a;
        }
        return a;
      }, Ds = (t, r) => {
        $.set(t, r);
      }, tr = (t, r, a, s) => {
        var o = w[s + 40 >> 2], l = { tm_sec: w[s >> 2], tm_min: w[s + 4 >> 2], tm_hour: w[s + 8 >> 2], tm_mday: w[s + 12 >> 2], tm_mon: w[s + 16 >> 2], tm_year: w[s + 20 >> 2], tm_wday: w[s + 24 >> 2], tm_yday: w[s + 28 >> 2], tm_isdst: w[s + 32 >> 2], tm_gmtoff: w[s + 36 >> 2], tm_zone: o ? Se(o) : "" }, c = Se(a), m = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
        for (var d in m)
          c = c.replace(new RegExp(d, "g"), m[d]);
        var h = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], k = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        function C(M, b, U) {
          for (var j = typeof M == "number" ? M.toString() : M || ""; j.length < b; )
            j = U[0] + j;
          return j;
        }
        function D(M, b) {
          return C(M, b, "0");
        }
        function P(M, b) {
          function U(ue) {
            return ue < 0 ? -1 : ue > 0 ? 1 : 0;
          }
          var j;
          return (j = U(M.getFullYear() - b.getFullYear())) === 0 && (j = U(M.getMonth() - b.getMonth())) === 0 && (j = U(M.getDate() - b.getDate())), j;
        }
        function A(M) {
          switch (M.getDay()) {
            case 0:
              return new Date(M.getFullYear() - 1, 11, 29);
            case 1:
              return M;
            case 2:
              return new Date(M.getFullYear(), 0, 3);
            case 3:
              return new Date(M.getFullYear(), 0, 2);
            case 4:
              return new Date(M.getFullYear(), 0, 1);
            case 5:
              return new Date(M.getFullYear() - 1, 11, 31);
            case 6:
              return new Date(M.getFullYear() - 1, 11, 30);
          }
        }
        function x(M) {
          var b = Ms(new Date(M.tm_year + 1900, 0, 1), M.tm_yday), U = new Date(b.getFullYear(), 0, 4), j = new Date(b.getFullYear() + 1, 0, 4), ue = A(U), O = A(j);
          return P(ue, b) <= 0 ? P(O, b) <= 0 ? b.getFullYear() + 1 : b.getFullYear() : b.getFullYear() - 1;
        }
        var q = { "%a": (M) => h[M.tm_wday].substring(0, 3), "%A": (M) => h[M.tm_wday], "%b": (M) => k[M.tm_mon].substring(0, 3), "%B": (M) => k[M.tm_mon], "%C": (M) => {
          var b = M.tm_year + 1900;
          return D(b / 100 | 0, 2);
        }, "%d": (M) => D(M.tm_mday, 2), "%e": (M) => C(M.tm_mday, 2, " "), "%g": (M) => x(M).toString().substring(2), "%G": (M) => x(M), "%H": (M) => D(M.tm_hour, 2), "%I": (M) => {
          var b = M.tm_hour;
          return b == 0 ? b = 12 : b > 12 && (b -= 12), D(b, 2);
        }, "%j": (M) => D(M.tm_mday + Is(gt(M.tm_year + 1900) ? On : er, M.tm_mon - 1), 3), "%m": (M) => D(M.tm_mon + 1, 2), "%M": (M) => D(M.tm_min, 2), "%n": () => `
`, "%p": (M) => M.tm_hour >= 0 && M.tm_hour < 12 ? "AM" : "PM", "%S": (M) => D(M.tm_sec, 2), "%t": () => "	", "%u": (M) => M.tm_wday || 7, "%U": (M) => {
          var b = M.tm_yday + 7 - M.tm_wday;
          return D(Math.floor(b / 7), 2);
        }, "%V": (M) => {
          var b = Math.floor((M.tm_yday + 7 - (M.tm_wday + 6) % 7) / 7);
          if ((M.tm_wday + 371 - M.tm_yday - 2) % 7 <= 2 && b++, b) {
            if (b == 53) {
              var j = (M.tm_wday + 371 - M.tm_yday) % 7;
              j != 4 && (j != 3 || !gt(M.tm_year)) && (b = 1);
            }
          } else {
            b = 52;
            var U = (M.tm_wday + 7 - M.tm_yday - 1) % 7;
            (U == 4 || U == 5 && gt(M.tm_year % 400 - 1)) && b++;
          }
          return D(b, 2);
        }, "%w": (M) => M.tm_wday, "%W": (M) => {
          var b = M.tm_yday + 7 - (M.tm_wday + 6) % 7;
          return D(Math.floor(b / 7), 2);
        }, "%y": (M) => (M.tm_year + 1900).toString().substring(2), "%Y": (M) => M.tm_year + 1900, "%z": (M) => {
          var b = M.tm_gmtoff, U = b >= 0;
          return b = Math.abs(b) / 60, b = b / 60 * 100 + b % 60, (U ? "+" : "-") + ("0000" + b).slice(-4);
        }, "%Z": (M) => M.tm_zone, "%%": () => "%" };
        c = c.replace(/%%/g, "\0\0");
        for (var d in q)
          c.includes(d) && (c = c.replace(new RegExp(d, "g"), q[d](l)));
        c = c.replace(/\0\0/g, "%");
        var V = It(c, !1);
        return V.length > r ? 0 : (Ds(V, t), V.length - 1);
      }, Cs = (t, r, a, s, o) => tr(t, r, a, s), Ps = (t) => {
        if (de) {
          if (!t)
            return 1;
          var r = Se(t);
          if (!r.length)
            return 0;
          var a = require("child_process"), s = a.spawnSync(r, [], { shell: !0, stdio: "inherit" }), o = (c, m) => c << 8 | m;
          if (s.status === null) {
            var l = (c) => {
              switch (c) {
                case "SIGHUP":
                  return 1;
                case "SIGINT":
                  return 2;
                case "SIGQUIT":
                  return 3;
                case "SIGFPE":
                  return 8;
                case "SIGKILL":
                  return 9;
                case "SIGALRM":
                  return 14;
                case "SIGTERM":
                  return 15;
              }
              return 2;
            };
            return o(0, l(s.signal));
          }
          return o(s.status, 0);
        }
        return t ? (Pn(52), -1) : 0;
      };
      function nr(t, r) {
        t < 128 ? r.push(t) : r.push(t % 128 | 128, t >> 7);
      }
      function bs(t) {
        for (var r = { i: "i32", j: "i64", f: "f32", d: "f64", p: "i32" }, a = { parameters: [], results: t[0] == "v" ? [] : [r[t[0]]] }, s = 1; s < t.length; ++s)
          a.parameters.push(r[t[s]]);
        return a;
      }
      function Gs(t, r) {
        var a = t.slice(0, 1), s = t.slice(1), o = { i: 127, p: 127, j: 126, f: 125, d: 124 };
        r.push(96), nr(s.length, r);
        for (var l = 0; l < s.length; ++l)
          r.push(o[s[l]]);
        a == "v" ? r.push(0) : r.push(1, o[a]);
      }
      function Es(t, r) {
        if (typeof WebAssembly.Function == "function")
          return new WebAssembly.Function(bs(r), t);
        var a = [1];
        Gs(r, a);
        var s = [0, 97, 115, 109, 1, 0, 0, 0, 1];
        nr(a.length, s), s.push.apply(s, a), s.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
        var o = new WebAssembly.Module(new Uint8Array(s)), l = new WebAssembly.Instance(o, { e: { f: t } }), c = l.exports.f;
        return c;
      }
      function Rs(t, r) {
        if (Je)
          for (var a = t; a < t + r; a++) {
            var s = Q(a);
            s && Je.set(s, a);
          }
      }
      var Je = void 0;
      function As(t) {
        return Je || (Je = /* @__PURE__ */ new WeakMap(), Rs(0, We.length)), Je.get(t) || 0;
      }
      var rr = [];
      function Ts() {
        if (rr.length)
          return rr.pop();
        try {
          We.grow(1);
        } catch (t) {
          throw t instanceof RangeError ? "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH." : t;
        }
        return We.length - 1;
      }
      var ar = (t, r) => {
        We.set(t, r), it[t] = We.get(t);
      };
      function Ls(t, r) {
        var a = As(t);
        if (a)
          return a;
        var s = Ts();
        try {
          ar(s, t);
        } catch (l) {
          if (!(l instanceof TypeError))
            throw l;
          var o = Es(t, r);
          ar(s, o);
        }
        return Je.set(t, s), s;
      }
      var ir = function(t, r, a, s) {
        t || (t = this), this.parent = t, this.mount = t.mount, this.mounted = null, this.id = _.nextInode++, this.name = r, this.mode = a, this.node_ops = {}, this.stream_ops = {}, this.rdev = s;
      }, Tt = 365, Lt = 146;
      Object.defineProperties(ir.prototype, { read: { get: function() {
        return (this.mode & Tt) === Tt;
      }, set: function(t) {
        t ? this.mode |= Tt : this.mode &= ~Tt;
      } }, write: { get: function() {
        return (this.mode & Lt) === Lt;
      }, set: function(t) {
        t ? this.mode |= Lt : this.mode &= ~Lt;
      } }, isFolder: { get: function() {
        return _.isDir(this.mode);
      } }, isDevice: { get: function() {
        return _.isChrdev(this.mode);
      } } }), _.FSNode = ir, _.createPreloadedFile = ta, _.staticInit(), e.FS_createPath = _.createPath, e.FS_createDataFile = _.createDataFile, e.FS_createPreloadedFile = _.createPreloadedFile, e.FS_unlink = _.unlink, e.FS_createLazyFile = _.createLazyFile, e.FS_createDevice = _.createDevice, An = e.InternalError = en(Error, "InternalError"), Aa(), ut = e.BindingError = en(Error, "BindingError"), Va(), Ha(), ri(), zn = e.UnboundTypeError = en(Error, "UnboundTypeError"), li();
      var Ws = { ma: Yr, D: Vr, a: Qr, C: Xr, Aa: ra, ca: ia, za: sa, Ba: ua, Va: oa, wa: _a, q: la, O: ca, ra: ga, la: fa, ba: ma, Da: pa, ta: da, ua: ha, F: ya, na: va, ka: wa, aa: ka, ja: Sa, $: Ia, _: Ma, va: Da, ia: Ca, M: Pa, Na: Ea, Za: Ra, Ha: Ta, J: ui, Ga: ci, v: fi, f: mi, R: di, r: wi, s: Si, o: Ii, Q: Mi, H: Ri, Oa: Ai, T: Ti, Ia: Li, Ja: Wi, xa: xi, ea: Ni, n: Un, I: zi, Ma: Hi, w: ji, S: $i, u: Yi, p: Xi, oa: qi, pa: Ji, qa: Ki, Wa: Zi, Xa: Oi, ga: es, c: ts, z: ns, ha: rs, A: Qn, ya: as, fa: ss, Ea: _s, Fa: ls, y: gs, x: fs, N: ms, Ua: ps, Ta: ds, P: hs, Ya: ys, sa: vs, G: ws, Pa: ks, eb: Ss, Sa: Vs, E: Ys, e: zs, d: Ns, h: xs, g: js, Y: qs, b: Xs, X: Ks, m: $s, W: Zs, Ka: au, $a: lu, cb: uu, bb: ou, _a: cu, db: su, Z: iu, K: Qs, l: Hs, j: Fs, V: Os, U: eu, i: Bs, k: Us, t: Js, Qa: nu, La: ru, Ra: tu, ab: _u, Ca: Jn, L: tr, da: Cs, B: Ps };
      Fr(), e._MagickColor_Create = function() {
        return (e._MagickColor_Create = e.asm.hb).apply(null, arguments);
      }, e._MagickColor_Dispose = function() {
        return (e._MagickColor_Dispose = e.asm.ib).apply(null, arguments);
      }, e._MagickColor_Count_Get = function() {
        return (e._MagickColor_Count_Get = e.asm.jb).apply(null, arguments);
      }, e._MagickColor_Red_Get = function() {
        return (e._MagickColor_Red_Get = e.asm.kb).apply(null, arguments);
      }, e._MagickColor_Red_Set = function() {
        return (e._MagickColor_Red_Set = e.asm.lb).apply(null, arguments);
      }, e._MagickColor_Green_Get = function() {
        return (e._MagickColor_Green_Get = e.asm.mb).apply(null, arguments);
      }, e._MagickColor_Green_Set = function() {
        return (e._MagickColor_Green_Set = e.asm.nb).apply(null, arguments);
      }, e._MagickColor_Blue_Get = function() {
        return (e._MagickColor_Blue_Get = e.asm.ob).apply(null, arguments);
      }, e._MagickColor_Blue_Set = function() {
        return (e._MagickColor_Blue_Set = e.asm.pb).apply(null, arguments);
      }, e._MagickColor_Alpha_Get = function() {
        return (e._MagickColor_Alpha_Get = e.asm.qb).apply(null, arguments);
      }, e._MagickColor_Alpha_Set = function() {
        return (e._MagickColor_Alpha_Set = e.asm.rb).apply(null, arguments);
      }, e._MagickColor_Black_Get = function() {
        return (e._MagickColor_Black_Get = e.asm.sb).apply(null, arguments);
      }, e._MagickColor_Black_Set = function() {
        return (e._MagickColor_Black_Set = e.asm.tb).apply(null, arguments);
      }, e._MagickColor_IsCMYK_Get = function() {
        return (e._MagickColor_IsCMYK_Get = e.asm.ub).apply(null, arguments);
      }, e._MagickColor_IsCMYK_Set = function() {
        return (e._MagickColor_IsCMYK_Set = e.asm.vb).apply(null, arguments);
      }, e._MagickColor_Clone = function() {
        return (e._MagickColor_Clone = e.asm.wb).apply(null, arguments);
      }, e._MagickColor_FuzzyEquals = function() {
        return (e._MagickColor_FuzzyEquals = e.asm.xb).apply(null, arguments);
      }, e._MagickColor_Initialize = function() {
        return (e._MagickColor_Initialize = e.asm.yb).apply(null, arguments);
      }, e._MagickColorCollection_DisposeList = function() {
        return (e._MagickColorCollection_DisposeList = e.asm.Ab).apply(null, arguments);
      }, e._MagickColorCollection_GetInstance = function() {
        return (e._MagickColorCollection_GetInstance = e.asm.Bb).apply(null, arguments);
      }, e._DrawingWand_Create = function() {
        return (e._DrawingWand_Create = e.asm.Cb).apply(null, arguments);
      }, e._DrawingWand_Dispose = function() {
        return (e._DrawingWand_Dispose = e.asm.Db).apply(null, arguments);
      }, e._DrawingWand_Affine = function() {
        return (e._DrawingWand_Affine = e.asm.Eb).apply(null, arguments);
      }, e._DrawingWand_Alpha = function() {
        return (e._DrawingWand_Alpha = e.asm.Fb).apply(null, arguments);
      }, e._DrawingWand_Arc = function() {
        return (e._DrawingWand_Arc = e.asm.Gb).apply(null, arguments);
      }, e._DrawingWand_Bezier = function() {
        return (e._DrawingWand_Bezier = e.asm.Hb).apply(null, arguments);
      }, e._DrawingWand_BorderColor = function() {
        return (e._DrawingWand_BorderColor = e.asm.Ib).apply(null, arguments);
      }, e._DrawingWand_Circle = function() {
        return (e._DrawingWand_Circle = e.asm.Jb).apply(null, arguments);
      }, e._DrawingWand_ClipPath = function() {
        return (e._DrawingWand_ClipPath = e.asm.Kb).apply(null, arguments);
      }, e._DrawingWand_ClipRule = function() {
        return (e._DrawingWand_ClipRule = e.asm.Lb).apply(null, arguments);
      }, e._DrawingWand_ClipUnits = function() {
        return (e._DrawingWand_ClipUnits = e.asm.Mb).apply(null, arguments);
      }, e._DrawingWand_Color = function() {
        return (e._DrawingWand_Color = e.asm.Nb).apply(null, arguments);
      }, e._DrawingWand_Composite = function() {
        return (e._DrawingWand_Composite = e.asm.Ob).apply(null, arguments);
      }, e._DrawingWand_Density = function() {
        return (e._DrawingWand_Density = e.asm.Pb).apply(null, arguments);
      }, e._DrawingWand_Ellipse = function() {
        return (e._DrawingWand_Ellipse = e.asm.Qb).apply(null, arguments);
      }, e._DrawingWand_FillColor = function() {
        return (e._DrawingWand_FillColor = e.asm.Rb).apply(null, arguments);
      }, e._DrawingWand_FillOpacity = function() {
        return (e._DrawingWand_FillOpacity = e.asm.Sb).apply(null, arguments);
      }, e._DrawingWand_FillPatternUrl = function() {
        return (e._DrawingWand_FillPatternUrl = e.asm.Tb).apply(null, arguments);
      }, e._DrawingWand_FillRule = function() {
        return (e._DrawingWand_FillRule = e.asm.Ub).apply(null, arguments);
      }, e._DrawingWand_Font = function() {
        return (e._DrawingWand_Font = e.asm.Vb).apply(null, arguments);
      }, e._DrawingWand_FontFamily = function() {
        return (e._DrawingWand_FontFamily = e.asm.Wb).apply(null, arguments);
      }, e._DrawingWand_FontPointSize = function() {
        return (e._DrawingWand_FontPointSize = e.asm.Xb).apply(null, arguments);
      }, e._DrawingWand_FontTypeMetrics = function() {
        return (e._DrawingWand_FontTypeMetrics = e.asm.Yb).apply(null, arguments);
      }, e._TypeMetric_Create = function() {
        return (e._TypeMetric_Create = e.asm.Zb).apply(null, arguments);
      }, e._DrawingWand_Gravity = function() {
        return (e._DrawingWand_Gravity = e.asm._b).apply(null, arguments);
      }, e._DrawingWand_Line = function() {
        return (e._DrawingWand_Line = e.asm.$b).apply(null, arguments);
      }, e._DrawingWand_PathArcAbs = function() {
        return (e._DrawingWand_PathArcAbs = e.asm.ac).apply(null, arguments);
      }, e._DrawingWand_PathArcRel = function() {
        return (e._DrawingWand_PathArcRel = e.asm.bc).apply(null, arguments);
      }, e._DrawingWand_PathClose = function() {
        return (e._DrawingWand_PathClose = e.asm.cc).apply(null, arguments);
      }, e._DrawingWand_PathCurveToAbs = function() {
        return (e._DrawingWand_PathCurveToAbs = e.asm.dc).apply(null, arguments);
      }, e._DrawingWand_PathCurveToRel = function() {
        return (e._DrawingWand_PathCurveToRel = e.asm.ec).apply(null, arguments);
      }, e._DrawingWand_PathFinish = function() {
        return (e._DrawingWand_PathFinish = e.asm.fc).apply(null, arguments);
      }, e._DrawingWand_PathLineToAbs = function() {
        return (e._DrawingWand_PathLineToAbs = e.asm.gc).apply(null, arguments);
      }, e._DrawingWand_PathLineToHorizontalAbs = function() {
        return (e._DrawingWand_PathLineToHorizontalAbs = e.asm.hc).apply(null, arguments);
      }, e._DrawingWand_PathLineToHorizontalRel = function() {
        return (e._DrawingWand_PathLineToHorizontalRel = e.asm.ic).apply(null, arguments);
      }, e._DrawingWand_PathLineToRel = function() {
        return (e._DrawingWand_PathLineToRel = e.asm.jc).apply(null, arguments);
      }, e._DrawingWand_PathLineToVerticalAbs = function() {
        return (e._DrawingWand_PathLineToVerticalAbs = e.asm.kc).apply(null, arguments);
      }, e._DrawingWand_PathLineToVerticalRel = function() {
        return (e._DrawingWand_PathLineToVerticalRel = e.asm.lc).apply(null, arguments);
      }, e._DrawingWand_PathMoveToAbs = function() {
        return (e._DrawingWand_PathMoveToAbs = e.asm.mc).apply(null, arguments);
      }, e._DrawingWand_PathMoveToRel = function() {
        return (e._DrawingWand_PathMoveToRel = e.asm.nc).apply(null, arguments);
      }, e._DrawingWand_PathQuadraticCurveToAbs = function() {
        return (e._DrawingWand_PathQuadraticCurveToAbs = e.asm.oc).apply(null, arguments);
      }, e._DrawingWand_PathQuadraticCurveToRel = function() {
        return (e._DrawingWand_PathQuadraticCurveToRel = e.asm.pc).apply(null, arguments);
      }, e._DrawingWand_PathSmoothCurveToAbs = function() {
        return (e._DrawingWand_PathSmoothCurveToAbs = e.asm.qc).apply(null, arguments);
      }, e._DrawingWand_PathSmoothCurveToRel = function() {
        return (e._DrawingWand_PathSmoothCurveToRel = e.asm.rc).apply(null, arguments);
      }, e._DrawingWand_PathSmoothQuadraticCurveToAbs = function() {
        return (e._DrawingWand_PathSmoothQuadraticCurveToAbs = e.asm.sc).apply(null, arguments);
      }, e._DrawingWand_PathSmoothQuadraticCurveToRel = function() {
        return (e._DrawingWand_PathSmoothQuadraticCurveToRel = e.asm.tc).apply(null, arguments);
      }, e._DrawingWand_PathStart = function() {
        return (e._DrawingWand_PathStart = e.asm.uc).apply(null, arguments);
      }, e._DrawingWand_Point = function() {
        return (e._DrawingWand_Point = e.asm.vc).apply(null, arguments);
      }, e._DrawingWand_Polygon = function() {
        return (e._DrawingWand_Polygon = e.asm.wc).apply(null, arguments);
      }, e._DrawingWand_Polyline = function() {
        return (e._DrawingWand_Polyline = e.asm.xc).apply(null, arguments);
      }, e._DrawingWand_PopClipPath = function() {
        return (e._DrawingWand_PopClipPath = e.asm.yc).apply(null, arguments);
      }, e._DrawingWand_PopGraphicContext = function() {
        return (e._DrawingWand_PopGraphicContext = e.asm.zc).apply(null, arguments);
      }, e._DrawingWand_PopPattern = function() {
        return (e._DrawingWand_PopPattern = e.asm.Ac).apply(null, arguments);
      }, e._DrawingWand_PushClipPath = function() {
        return (e._DrawingWand_PushClipPath = e.asm.Bc).apply(null, arguments);
      }, e._DrawingWand_PushGraphicContext = function() {
        return (e._DrawingWand_PushGraphicContext = e.asm.Cc).apply(null, arguments);
      }, e._DrawingWand_PushPattern = function() {
        return (e._DrawingWand_PushPattern = e.asm.Dc).apply(null, arguments);
      }, e._DrawingWand_Rectangle = function() {
        return (e._DrawingWand_Rectangle = e.asm.Ec).apply(null, arguments);
      }, e._DrawingWand_Render = function() {
        return (e._DrawingWand_Render = e.asm.Fc).apply(null, arguments);
      }, e._DrawingWand_Rotation = function() {
        return (e._DrawingWand_Rotation = e.asm.Gc).apply(null, arguments);
      }, e._DrawingWand_RoundRectangle = function() {
        return (e._DrawingWand_RoundRectangle = e.asm.Hc).apply(null, arguments);
      }, e._DrawingWand_Scaling = function() {
        return (e._DrawingWand_Scaling = e.asm.Ic).apply(null, arguments);
      }, e._DrawingWand_SkewX = function() {
        return (e._DrawingWand_SkewX = e.asm.Jc).apply(null, arguments);
      }, e._DrawingWand_SkewY = function() {
        return (e._DrawingWand_SkewY = e.asm.Kc).apply(null, arguments);
      }, e._DrawingWand_StrokeAntialias = function() {
        return (e._DrawingWand_StrokeAntialias = e.asm.Lc).apply(null, arguments);
      }, e._DrawingWand_StrokeColor = function() {
        return (e._DrawingWand_StrokeColor = e.asm.Mc).apply(null, arguments);
      }, e._DrawingWand_StrokeDashArray = function() {
        return (e._DrawingWand_StrokeDashArray = e.asm.Nc).apply(null, arguments);
      }, e._DrawingWand_StrokeDashOffset = function() {
        return (e._DrawingWand_StrokeDashOffset = e.asm.Oc).apply(null, arguments);
      }, e._DrawingWand_StrokeLineCap = function() {
        return (e._DrawingWand_StrokeLineCap = e.asm.Pc).apply(null, arguments);
      }, e._DrawingWand_StrokeLineJoin = function() {
        return (e._DrawingWand_StrokeLineJoin = e.asm.Qc).apply(null, arguments);
      }, e._DrawingWand_StrokeMiterLimit = function() {
        return (e._DrawingWand_StrokeMiterLimit = e.asm.Rc).apply(null, arguments);
      }, e._DrawingWand_StrokeOpacity = function() {
        return (e._DrawingWand_StrokeOpacity = e.asm.Sc).apply(null, arguments);
      }, e._DrawingWand_StrokePatternUrl = function() {
        return (e._DrawingWand_StrokePatternUrl = e.asm.Tc).apply(null, arguments);
      }, e._DrawingWand_StrokeWidth = function() {
        return (e._DrawingWand_StrokeWidth = e.asm.Uc).apply(null, arguments);
      }, e._DrawingWand_Text = function() {
        return (e._DrawingWand_Text = e.asm.Vc).apply(null, arguments);
      }, e._DrawingWand_TextAlignment = function() {
        return (e._DrawingWand_TextAlignment = e.asm.Wc).apply(null, arguments);
      }, e._DrawingWand_TextAntialias = function() {
        return (e._DrawingWand_TextAntialias = e.asm.Xc).apply(null, arguments);
      }, e._DrawingWand_TextDecoration = function() {
        return (e._DrawingWand_TextDecoration = e.asm.Yc).apply(null, arguments);
      }, e._DrawingWand_TextDirection = function() {
        return (e._DrawingWand_TextDirection = e.asm.Zc).apply(null, arguments);
      }, e._DrawingWand_TextEncoding = function() {
        return (e._DrawingWand_TextEncoding = e.asm._c).apply(null, arguments);
      }, e._DrawingWand_TextInterlineSpacing = function() {
        return (e._DrawingWand_TextInterlineSpacing = e.asm.$c).apply(null, arguments);
      }, e._DrawingWand_TextInterwordSpacing = function() {
        return (e._DrawingWand_TextInterwordSpacing = e.asm.ad).apply(null, arguments);
      }, e._DrawingWand_TextKerning = function() {
        return (e._DrawingWand_TextKerning = e.asm.bd).apply(null, arguments);
      }, e._DrawingWand_TextUnderColor = function() {
        return (e._DrawingWand_TextUnderColor = e.asm.cd).apply(null, arguments);
      }, e._DrawingWand_Translation = function() {
        return (e._DrawingWand_Translation = e.asm.dd).apply(null, arguments);
      }, e._DrawingWand_Viewbox = function() {
        return (e._DrawingWand_Viewbox = e.asm.ed).apply(null, arguments);
      }, e._PointInfoCollection_Create = function() {
        return (e._PointInfoCollection_Create = e.asm.fd).apply(null, arguments);
      }, e._PointInfoCollection_Dispose = function() {
        return (e._PointInfoCollection_Dispose = e.asm.gd).apply(null, arguments);
      }, e._PointInfoCollection_GetX = function() {
        return (e._PointInfoCollection_GetX = e.asm.hd).apply(null, arguments);
      }, e._PointInfoCollection_GetY = function() {
        return (e._PointInfoCollection_GetY = e.asm.id).apply(null, arguments);
      }, e._PointInfoCollection_Set = function() {
        return (e._PointInfoCollection_Set = e.asm.jd).apply(null, arguments);
      }, e._MagickExceptionHelper_Description = function() {
        return (e._MagickExceptionHelper_Description = e.asm.kd).apply(null, arguments);
      }, e._MagickExceptionHelper_Dispose = function() {
        return (e._MagickExceptionHelper_Dispose = e.asm.ld).apply(null, arguments);
      }, e._MagickExceptionHelper_Related = function() {
        return (e._MagickExceptionHelper_Related = e.asm.md).apply(null, arguments);
      }, e._MagickExceptionHelper_RelatedCount = function() {
        return (e._MagickExceptionHelper_RelatedCount = e.asm.nd).apply(null, arguments);
      }, e._MagickExceptionHelper_Message = function() {
        return (e._MagickExceptionHelper_Message = e.asm.od).apply(null, arguments);
      }, e._MagickExceptionHelper_Severity = function() {
        return (e._MagickExceptionHelper_Severity = e.asm.pd).apply(null, arguments);
      }, e._PdfInfo_PageCount = function() {
        return (e._PdfInfo_PageCount = e.asm.qd).apply(null, arguments);
      }, e._Environment_Initialize = function() {
        return (e._Environment_Initialize = e.asm.rd).apply(null, arguments);
      }, e._Environment_GetEnv = function() {
        return (e._Environment_GetEnv = e.asm.sd).apply(null, arguments);
      }, e._Environment_SetEnv = function() {
        return (e._Environment_SetEnv = e.asm.td).apply(null, arguments);
      }, e._MagickMemory_Relinquish = function() {
        return (e._MagickMemory_Relinquish = e.asm.ud).apply(null, arguments);
      }, e._Magick_Delegates_Get = function() {
        return (e._Magick_Delegates_Get = e.asm.vd).apply(null, arguments);
      }, e._Magick_Features_Get = function() {
        return (e._Magick_Features_Get = e.asm.wd).apply(null, arguments);
      }, e._Magick_ImageMagickVersion_Get = function() {
        return (e._Magick_ImageMagickVersion_Get = e.asm.xd).apply(null, arguments);
      }, e._Magick_GetFonts = function() {
        return (e._Magick_GetFonts = e.asm.yd).apply(null, arguments);
      }, e._Magick_GetFontFamily = function() {
        return (e._Magick_GetFontFamily = e.asm.zd).apply(null, arguments);
      }, e._Magick_GetFontName = function() {
        return (e._Magick_GetFontName = e.asm.Ad).apply(null, arguments);
      }, e._Magick_DisposeFonts = function() {
        return (e._Magick_DisposeFonts = e.asm.Bd).apply(null, arguments);
      }, e._Magick_SetDefaultFontFile = function() {
        return (e._Magick_SetDefaultFontFile = e.asm.Cd).apply(null, arguments);
      }, e._Magick_SetRandomSeed = function() {
        return (e._Magick_SetRandomSeed = e.asm.Dd).apply(null, arguments);
      }, e._Magick_SetLogDelegate = function() {
        return (e._Magick_SetLogDelegate = e.asm.Ed).apply(null, arguments);
      }, e._Magick_SetLogEvents = function() {
        return (e._Magick_SetLogEvents = e.asm.Fd).apply(null, arguments);
      }, e._Magick_SetOpenCLEnabled = function() {
        return (e._Magick_SetOpenCLEnabled = e.asm.Gd).apply(null, arguments);
      }, e._MagickFormatInfo_CreateList = function() {
        return (e._MagickFormatInfo_CreateList = e.asm.Hd).apply(null, arguments);
      }, e._MagickFormatInfo_DisposeList = function() {
        return (e._MagickFormatInfo_DisposeList = e.asm.Id).apply(null, arguments);
      }, e._MagickFormatInfo_CanReadMultithreaded_Get = function() {
        return (e._MagickFormatInfo_CanReadMultithreaded_Get = e.asm.Jd).apply(null, arguments);
      }, e._MagickFormatInfo_CanWriteMultithreaded_Get = function() {
        return (e._MagickFormatInfo_CanWriteMultithreaded_Get = e.asm.Kd).apply(null, arguments);
      }, e._MagickFormatInfo_Description_Get = function() {
        return (e._MagickFormatInfo_Description_Get = e.asm.Ld).apply(null, arguments);
      }, e._MagickFormatInfo_Format_Get = function() {
        return (e._MagickFormatInfo_Format_Get = e.asm.Md).apply(null, arguments);
      }, e._MagickFormatInfo_MimeType_Get = function() {
        return (e._MagickFormatInfo_MimeType_Get = e.asm.Nd).apply(null, arguments);
      }, e._MagickFormatInfo_Module_Get = function() {
        return (e._MagickFormatInfo_Module_Get = e.asm.Od).apply(null, arguments);
      }, e._MagickFormatInfo_SupportsMultipleFrames_Get = function() {
        return (e._MagickFormatInfo_SupportsMultipleFrames_Get = e.asm.Pd).apply(null, arguments);
      }, e._MagickFormatInfo_SupportsReading_Get = function() {
        return (e._MagickFormatInfo_SupportsReading_Get = e.asm.Qd).apply(null, arguments);
      }, e._MagickFormatInfo_SupportsWriting_Get = function() {
        return (e._MagickFormatInfo_SupportsWriting_Get = e.asm.Rd).apply(null, arguments);
      }, e._MagickFormatInfo_GetInfo = function() {
        return (e._MagickFormatInfo_GetInfo = e.asm.Sd).apply(null, arguments);
      }, e._MagickFormatInfo_GetInfoByName = function() {
        return (e._MagickFormatInfo_GetInfoByName = e.asm.Td).apply(null, arguments);
      }, e._MagickFormatInfo_GetInfoWithBlob = function() {
        return (e._MagickFormatInfo_GetInfoWithBlob = e.asm.Ud).apply(null, arguments);
      }, e._MagickFormatInfo_Unregister = function() {
        return (e._MagickFormatInfo_Unregister = e.asm.Vd).apply(null, arguments);
      }, e._MagickImage_Create = function() {
        return (e._MagickImage_Create = e.asm.Wd).apply(null, arguments);
      }, e._MagickImage_Dispose = function() {
        return (e._MagickImage_Dispose = e.asm.Xd).apply(null, arguments);
      }, e._MagickImage_AnimationDelay_Get = function() {
        return (e._MagickImage_AnimationDelay_Get = e.asm.Yd).apply(null, arguments);
      }, e._MagickImage_AnimationDelay_Set = function() {
        return (e._MagickImage_AnimationDelay_Set = e.asm.Zd).apply(null, arguments);
      }, e._MagickImage_AnimationIterations_Get = function() {
        return (e._MagickImage_AnimationIterations_Get = e.asm._d).apply(null, arguments);
      }, e._MagickImage_AnimationIterations_Set = function() {
        return (e._MagickImage_AnimationIterations_Set = e.asm.$d).apply(null, arguments);
      }, e._MagickImage_AnimationTicksPerSecond_Get = function() {
        return (e._MagickImage_AnimationTicksPerSecond_Get = e.asm.ae).apply(null, arguments);
      }, e._MagickImage_AnimationTicksPerSecond_Set = function() {
        return (e._MagickImage_AnimationTicksPerSecond_Set = e.asm.be).apply(null, arguments);
      }, e._MagickImage_BackgroundColor_Get = function() {
        return (e._MagickImage_BackgroundColor_Get = e.asm.ce).apply(null, arguments);
      }, e._MagickImage_BackgroundColor_Set = function() {
        return (e._MagickImage_BackgroundColor_Set = e.asm.de).apply(null, arguments);
      }, e._MagickImage_BaseHeight_Get = function() {
        return (e._MagickImage_BaseHeight_Get = e.asm.ee).apply(null, arguments);
      }, e._MagickImage_BaseWidth_Get = function() {
        return (e._MagickImage_BaseWidth_Get = e.asm.fe).apply(null, arguments);
      }, e._MagickImage_BlackPointCompensation_Get = function() {
        return (e._MagickImage_BlackPointCompensation_Get = e.asm.ge).apply(null, arguments);
      }, e._MagickImage_BlackPointCompensation_Set = function() {
        return (e._MagickImage_BlackPointCompensation_Set = e.asm.he).apply(null, arguments);
      }, e._MagickImage_BorderColor_Get = function() {
        return (e._MagickImage_BorderColor_Get = e.asm.ie).apply(null, arguments);
      }, e._MagickImage_BorderColor_Set = function() {
        return (e._MagickImage_BorderColor_Set = e.asm.je).apply(null, arguments);
      }, e._MagickImage_BoundingBox_Get = function() {
        return (e._MagickImage_BoundingBox_Get = e.asm.ke).apply(null, arguments);
      }, e._MagickRectangle_Create = function() {
        return (e._MagickRectangle_Create = e.asm.le).apply(null, arguments);
      }, e._MagickImage_ChannelCount_Get = function() {
        return (e._MagickImage_ChannelCount_Get = e.asm.me).apply(null, arguments);
      }, e._MagickImage_ChromaBluePrimary_Get = function() {
        return (e._MagickImage_ChromaBluePrimary_Get = e.asm.ne).apply(null, arguments);
      }, e._PrimaryInfo_Create = function() {
        return (e._PrimaryInfo_Create = e.asm.oe).apply(null, arguments);
      }, e._MagickImage_ChromaBluePrimary_Set = function() {
        return (e._MagickImage_ChromaBluePrimary_Set = e.asm.pe).apply(null, arguments);
      }, e._MagickImage_ChromaGreenPrimary_Get = function() {
        return (e._MagickImage_ChromaGreenPrimary_Get = e.asm.qe).apply(null, arguments);
      }, e._MagickImage_ChromaGreenPrimary_Set = function() {
        return (e._MagickImage_ChromaGreenPrimary_Set = e.asm.re).apply(null, arguments);
      }, e._MagickImage_ChromaRedPrimary_Get = function() {
        return (e._MagickImage_ChromaRedPrimary_Get = e.asm.se).apply(null, arguments);
      }, e._MagickImage_ChromaRedPrimary_Set = function() {
        return (e._MagickImage_ChromaRedPrimary_Set = e.asm.te).apply(null, arguments);
      }, e._MagickImage_ChromaWhitePoint_Get = function() {
        return (e._MagickImage_ChromaWhitePoint_Get = e.asm.ue).apply(null, arguments);
      }, e._MagickImage_ChromaWhitePoint_Set = function() {
        return (e._MagickImage_ChromaWhitePoint_Set = e.asm.ve).apply(null, arguments);
      }, e._MagickImage_ClassType_Get = function() {
        return (e._MagickImage_ClassType_Get = e.asm.we).apply(null, arguments);
      }, e._MagickImage_ClassType_Set = function() {
        return (e._MagickImage_ClassType_Set = e.asm.xe).apply(null, arguments);
      }, e._QuantizeSettings_Create = function() {
        return (e._QuantizeSettings_Create = e.asm.ye).apply(null, arguments);
      }, e._QuantizeSettings_Dispose = function() {
        return (e._QuantizeSettings_Dispose = e.asm.ze).apply(null, arguments);
      }, e._MagickImage_ColorFuzz_Get = function() {
        return (e._MagickImage_ColorFuzz_Get = e.asm.Ae).apply(null, arguments);
      }, e._MagickImage_ColorFuzz_Set = function() {
        return (e._MagickImage_ColorFuzz_Set = e.asm.Be).apply(null, arguments);
      }, e._MagickImage_ColormapSize_Get = function() {
        return (e._MagickImage_ColormapSize_Get = e.asm.Ce).apply(null, arguments);
      }, e._MagickImage_ColormapSize_Set = function() {
        return (e._MagickImage_ColormapSize_Set = e.asm.De).apply(null, arguments);
      }, e._MagickImage_ColorSpace_Get = function() {
        return (e._MagickImage_ColorSpace_Get = e.asm.Ee).apply(null, arguments);
      }, e._MagickImage_ColorSpace_Set = function() {
        return (e._MagickImage_ColorSpace_Set = e.asm.Fe).apply(null, arguments);
      }, e._MagickImage_ColorType_Get = function() {
        return (e._MagickImage_ColorType_Get = e.asm.Ge).apply(null, arguments);
      }, e._MagickImage_ColorType_Set = function() {
        return (e._MagickImage_ColorType_Set = e.asm.He).apply(null, arguments);
      }, e._MagickImage_Compose_Get = function() {
        return (e._MagickImage_Compose_Get = e.asm.Ie).apply(null, arguments);
      }, e._MagickImage_Compose_Set = function() {
        return (e._MagickImage_Compose_Set = e.asm.Je).apply(null, arguments);
      }, e._MagickImage_Compression_Get = function() {
        return (e._MagickImage_Compression_Get = e.asm.Ke).apply(null, arguments);
      }, e._MagickImage_Compression_Set = function() {
        return (e._MagickImage_Compression_Set = e.asm.Le).apply(null, arguments);
      }, e._MagickImage_Depth_Get = function() {
        return (e._MagickImage_Depth_Get = e.asm.Me).apply(null, arguments);
      }, e._MagickImage_Depth_Set = function() {
        return (e._MagickImage_Depth_Set = e.asm.Ne).apply(null, arguments);
      }, e._MagickImage_EncodingGeometry_Get = function() {
        return (e._MagickImage_EncodingGeometry_Get = e.asm.Oe).apply(null, arguments);
      }, e._MagickImage_Endian_Get = function() {
        return (e._MagickImage_Endian_Get = e.asm.Pe).apply(null, arguments);
      }, e._MagickImage_Endian_Set = function() {
        return (e._MagickImage_Endian_Set = e.asm.Qe).apply(null, arguments);
      }, e._MagickImage_FileName_Get = function() {
        return (e._MagickImage_FileName_Get = e.asm.Re).apply(null, arguments);
      }, e._MagickImage_FileName_Set = function() {
        return (e._MagickImage_FileName_Set = e.asm.Se).apply(null, arguments);
      }, e._MagickImage_FilterType_Get = function() {
        return (e._MagickImage_FilterType_Get = e.asm.Te).apply(null, arguments);
      }, e._MagickImage_FilterType_Set = function() {
        return (e._MagickImage_FilterType_Set = e.asm.Ue).apply(null, arguments);
      }, e._MagickImage_Format_Get = function() {
        return (e._MagickImage_Format_Get = e.asm.Ve).apply(null, arguments);
      }, e._MagickImage_Format_Set = function() {
        return (e._MagickImage_Format_Set = e.asm.We).apply(null, arguments);
      }, e._MagickImage_Gamma_Get = function() {
        return (e._MagickImage_Gamma_Get = e.asm.Xe).apply(null, arguments);
      }, e._MagickImage_GifDisposeMethod_Get = function() {
        return (e._MagickImage_GifDisposeMethod_Get = e.asm.Ye).apply(null, arguments);
      }, e._MagickImage_GifDisposeMethod_Set = function() {
        return (e._MagickImage_GifDisposeMethod_Set = e.asm.Ze).apply(null, arguments);
      }, e._MagickImage_Interpolate_Get = function() {
        return (e._MagickImage_Interpolate_Get = e.asm._e).apply(null, arguments);
      }, e._MagickImage_Interpolate_Set = function() {
        return (e._MagickImage_Interpolate_Set = e.asm.$e).apply(null, arguments);
      }, e._MagickImage_HasAlpha_Get = function() {
        return (e._MagickImage_HasAlpha_Get = e.asm.af).apply(null, arguments);
      }, e._MagickImage_HasAlpha_Set = function() {
        return (e._MagickImage_HasAlpha_Set = e.asm.bf).apply(null, arguments);
      }, e._MagickImage_Height_Get = function() {
        return (e._MagickImage_Height_Get = e.asm.cf).apply(null, arguments);
      }, e._MagickImage_Interlace_Get = function() {
        return (e._MagickImage_Interlace_Get = e.asm.df).apply(null, arguments);
      }, e._MagickImage_Interlace_Set = function() {
        return (e._MagickImage_Interlace_Set = e.asm.ef).apply(null, arguments);
      }, e._MagickImage_IsOpaque_Get = function() {
        return (e._MagickImage_IsOpaque_Get = e.asm.ff).apply(null, arguments);
      }, e._MagickImage_MatteColor_Get = function() {
        return (e._MagickImage_MatteColor_Get = e.asm.gf).apply(null, arguments);
      }, e._MagickImage_MatteColor_Set = function() {
        return (e._MagickImage_MatteColor_Set = e.asm.hf).apply(null, arguments);
      }, e._MagickImage_MeanErrorPerPixel_Get = function() {
        return (e._MagickImage_MeanErrorPerPixel_Get = e.asm.jf).apply(null, arguments);
      }, e._MagickImage_NormalizedMaximumError_Get = function() {
        return (e._MagickImage_NormalizedMaximumError_Get = e.asm.kf).apply(null, arguments);
      }, e._MagickImage_NormalizedMeanError_Get = function() {
        return (e._MagickImage_NormalizedMeanError_Get = e.asm.lf).apply(null, arguments);
      }, e._MagickImage_Orientation_Get = function() {
        return (e._MagickImage_Orientation_Get = e.asm.mf).apply(null, arguments);
      }, e._MagickImage_Orientation_Set = function() {
        return (e._MagickImage_Orientation_Set = e.asm.nf).apply(null, arguments);
      }, e._MagickImage_RenderingIntent_Get = function() {
        return (e._MagickImage_RenderingIntent_Get = e.asm.of).apply(null, arguments);
      }, e._MagickImage_RenderingIntent_Set = function() {
        return (e._MagickImage_RenderingIntent_Set = e.asm.pf).apply(null, arguments);
      }, e._MagickImage_Page_Get = function() {
        return (e._MagickImage_Page_Get = e.asm.qf).apply(null, arguments);
      }, e._MagickImage_Page_Set = function() {
        return (e._MagickImage_Page_Set = e.asm.rf).apply(null, arguments);
      }, e._MagickImage_Quality_Get = function() {
        return (e._MagickImage_Quality_Get = e.asm.sf).apply(null, arguments);
      }, e._MagickImage_Quality_Set = function() {
        return (e._MagickImage_Quality_Set = e.asm.tf).apply(null, arguments);
      }, e._MagickImage_ResolutionUnits_Get = function() {
        return (e._MagickImage_ResolutionUnits_Get = e.asm.uf).apply(null, arguments);
      }, e._MagickImage_ResolutionUnits_Set = function() {
        return (e._MagickImage_ResolutionUnits_Set = e.asm.vf).apply(null, arguments);
      }, e._MagickImage_ResolutionX_Get = function() {
        return (e._MagickImage_ResolutionX_Get = e.asm.wf).apply(null, arguments);
      }, e._MagickImage_ResolutionX_Set = function() {
        return (e._MagickImage_ResolutionX_Set = e.asm.xf).apply(null, arguments);
      }, e._MagickImage_ResolutionY_Get = function() {
        return (e._MagickImage_ResolutionY_Get = e.asm.yf).apply(null, arguments);
      }, e._MagickImage_ResolutionY_Set = function() {
        return (e._MagickImage_ResolutionY_Set = e.asm.zf).apply(null, arguments);
      }, e._MagickImage_Signature_Get = function() {
        return (e._MagickImage_Signature_Get = e.asm.Af).apply(null, arguments);
      }, e._MagickImage_TotalColors_Get = function() {
        return (e._MagickImage_TotalColors_Get = e.asm.Bf).apply(null, arguments);
      }, e._MagickImage_VirtualPixelMethod_Get = function() {
        return (e._MagickImage_VirtualPixelMethod_Get = e.asm.Cf).apply(null, arguments);
      }, e._MagickImage_VirtualPixelMethod_Set = function() {
        return (e._MagickImage_VirtualPixelMethod_Set = e.asm.Df).apply(null, arguments);
      }, e._MagickImage_Width_Get = function() {
        return (e._MagickImage_Width_Get = e.asm.Ef).apply(null, arguments);
      }, e._MagickImage_AdaptiveBlur = function() {
        return (e._MagickImage_AdaptiveBlur = e.asm.Ff).apply(null, arguments);
      }, e._MagickImage_AdaptiveResize = function() {
        return (e._MagickImage_AdaptiveResize = e.asm.Gf).apply(null, arguments);
      }, e._MagickImage_AdaptiveSharpen = function() {
        return (e._MagickImage_AdaptiveSharpen = e.asm.Hf).apply(null, arguments);
      }, e._MagickImage_AdaptiveThreshold = function() {
        return (e._MagickImage_AdaptiveThreshold = e.asm.If).apply(null, arguments);
      }, e._MagickImage_AddNoise = function() {
        return (e._MagickImage_AddNoise = e.asm.Jf).apply(null, arguments);
      }, e._MagickImage_AffineTransform = function() {
        return (e._MagickImage_AffineTransform = e.asm.Kf).apply(null, arguments);
      }, e._MagickImage_Annotate = function() {
        return (e._MagickImage_Annotate = e.asm.Lf).apply(null, arguments);
      }, e._MagickImage_AnnotateGravity = function() {
        return (e._MagickImage_AnnotateGravity = e.asm.Mf).apply(null, arguments);
      }, e._MagickImage_AutoGamma = function() {
        return (e._MagickImage_AutoGamma = e.asm.Nf).apply(null, arguments);
      }, e._MagickImage_AutoLevel = function() {
        return (e._MagickImage_AutoLevel = e.asm.Of).apply(null, arguments);
      }, e._MagickImage_AutoOrient = function() {
        return (e._MagickImage_AutoOrient = e.asm.Pf).apply(null, arguments);
      }, e._MagickImage_AutoThreshold = function() {
        return (e._MagickImage_AutoThreshold = e.asm.Qf).apply(null, arguments);
      }, e._MagickImage_BilateralBlur = function() {
        return (e._MagickImage_BilateralBlur = e.asm.Rf).apply(null, arguments);
      }, e._MagickImage_BlackThreshold = function() {
        return (e._MagickImage_BlackThreshold = e.asm.Sf).apply(null, arguments);
      }, e._MagickImage_BlueShift = function() {
        return (e._MagickImage_BlueShift = e.asm.Tf).apply(null, arguments);
      }, e._MagickImage_Blur = function() {
        return (e._MagickImage_Blur = e.asm.Uf).apply(null, arguments);
      }, e._MagickImage_Border = function() {
        return (e._MagickImage_Border = e.asm.Vf).apply(null, arguments);
      }, e._MagickImage_BrightnessContrast = function() {
        return (e._MagickImage_BrightnessContrast = e.asm.Wf).apply(null, arguments);
      }, e._MagickImage_CannyEdge = function() {
        return (e._MagickImage_CannyEdge = e.asm.Xf).apply(null, arguments);
      }, e._MagickImage_ChannelOffset = function() {
        return (e._MagickImage_ChannelOffset = e.asm.Yf).apply(null, arguments);
      }, e._MagickImage_Charcoal = function() {
        return (e._MagickImage_Charcoal = e.asm.Zf).apply(null, arguments);
      }, e._MagickImage_Chop = function() {
        return (e._MagickImage_Chop = e.asm._f).apply(null, arguments);
      }, e._MagickImage_Clahe = function() {
        return (e._MagickImage_Clahe = e.asm.$f).apply(null, arguments);
      }, e._MagickImage_Clamp = function() {
        return (e._MagickImage_Clamp = e.asm.ag).apply(null, arguments);
      }, e._MagickImage_ClipPath = function() {
        return (e._MagickImage_ClipPath = e.asm.bg).apply(null, arguments);
      }, e._MagickImage_Clone = function() {
        return (e._MagickImage_Clone = e.asm.cg).apply(null, arguments);
      }, e._MagickImage_CloneArea = function() {
        return (e._MagickImage_CloneArea = e.asm.dg).apply(null, arguments);
      }, e._MagickImage_Clut = function() {
        return (e._MagickImage_Clut = e.asm.eg).apply(null, arguments);
      }, e._MagickImage_ColorDecisionList = function() {
        return (e._MagickImage_ColorDecisionList = e.asm.fg).apply(null, arguments);
      }, e._MagickImage_Colorize = function() {
        return (e._MagickImage_Colorize = e.asm.gg).apply(null, arguments);
      }, e._MagickImage_ColorMatrix = function() {
        return (e._MagickImage_ColorMatrix = e.asm.hg).apply(null, arguments);
      }, e._MagickImage_ColorThreshold = function() {
        return (e._MagickImage_ColorThreshold = e.asm.ig).apply(null, arguments);
      }, e._MagickImage_Compare = function() {
        return (e._MagickImage_Compare = e.asm.jg).apply(null, arguments);
      }, e._MagickImage_CompareDistortion = function() {
        return (e._MagickImage_CompareDistortion = e.asm.kg).apply(null, arguments);
      }, e._MagickImage_Composite = function() {
        return (e._MagickImage_Composite = e.asm.lg).apply(null, arguments);
      }, e._MagickImage_CompositeGravity = function() {
        return (e._MagickImage_CompositeGravity = e.asm.mg).apply(null, arguments);
      }, e._MagickImage_ConnectedComponents = function() {
        return (e._MagickImage_ConnectedComponents = e.asm.ng).apply(null, arguments);
      }, e._MagickImage_Contrast = function() {
        return (e._MagickImage_Contrast = e.asm.og).apply(null, arguments);
      }, e._MagickImage_ContrastStretch = function() {
        return (e._MagickImage_ContrastStretch = e.asm.pg).apply(null, arguments);
      }, e._MagickImage_ConvexHull = function() {
        return (e._MagickImage_ConvexHull = e.asm.qg).apply(null, arguments);
      }, e._MagickImage_Convolve = function() {
        return (e._MagickImage_Convolve = e.asm.rg).apply(null, arguments);
      }, e._MagickImage_CopyPixels = function() {
        return (e._MagickImage_CopyPixels = e.asm.sg).apply(null, arguments);
      }, e._MagickImage_Crop = function() {
        return (e._MagickImage_Crop = e.asm.tg).apply(null, arguments);
      }, e._MagickImage_CropToTiles = function() {
        return (e._MagickImage_CropToTiles = e.asm.ug).apply(null, arguments);
      }, e._MagickImage_CycleColormap = function() {
        return (e._MagickImage_CycleColormap = e.asm.vg).apply(null, arguments);
      }, e._MagickImage_Decipher = function() {
        return (e._MagickImage_Decipher = e.asm.wg).apply(null, arguments);
      }, e._MagickImage_Deskew = function() {
        return (e._MagickImage_Deskew = e.asm.xg).apply(null, arguments);
      }, e._MagickImage_Despeckle = function() {
        return (e._MagickImage_Despeckle = e.asm.yg).apply(null, arguments);
      }, e._MagickImage_DetermineBitDepth = function() {
        return (e._MagickImage_DetermineBitDepth = e.asm.zg).apply(null, arguments);
      }, e._MagickImage_DetermineColorType = function() {
        return (e._MagickImage_DetermineColorType = e.asm.Ag).apply(null, arguments);
      }, e._MagickImage_Distort = function() {
        return (e._MagickImage_Distort = e.asm.Bg).apply(null, arguments);
      }, e._MagickImage_Edge = function() {
        return (e._MagickImage_Edge = e.asm.Cg).apply(null, arguments);
      }, e._MagickImage_Emboss = function() {
        return (e._MagickImage_Emboss = e.asm.Dg).apply(null, arguments);
      }, e._MagickImage_Encipher = function() {
        return (e._MagickImage_Encipher = e.asm.Eg).apply(null, arguments);
      }, e._MagickImage_Enhance = function() {
        return (e._MagickImage_Enhance = e.asm.Fg).apply(null, arguments);
      }, e._MagickImage_Equalize = function() {
        return (e._MagickImage_Equalize = e.asm.Gg).apply(null, arguments);
      }, e._MagickImage_Equals = function() {
        return (e._MagickImage_Equals = e.asm.Hg).apply(null, arguments);
      }, e._MagickImage_EvaluateFunction = function() {
        return (e._MagickImage_EvaluateFunction = e.asm.Ig).apply(null, arguments);
      }, e._MagickImage_EvaluateGeometry = function() {
        return (e._MagickImage_EvaluateGeometry = e.asm.Jg).apply(null, arguments);
      }, e._MagickImage_EvaluateOperator = function() {
        return (e._MagickImage_EvaluateOperator = e.asm.Kg).apply(null, arguments);
      }, e._MagickImage_Extent = function() {
        return (e._MagickImage_Extent = e.asm.Lg).apply(null, arguments);
      }, e._MagickImage_Flip = function() {
        return (e._MagickImage_Flip = e.asm.Mg).apply(null, arguments);
      }, e._MagickImage_FloodFill = function() {
        return (e._MagickImage_FloodFill = e.asm.Ng).apply(null, arguments);
      }, e._MagickImage_Flop = function() {
        return (e._MagickImage_Flop = e.asm.Og).apply(null, arguments);
      }, e._MagickImage_FontTypeMetrics = function() {
        return (e._MagickImage_FontTypeMetrics = e.asm.Pg).apply(null, arguments);
      }, e._MagickImage_FormatExpression = function() {
        return (e._MagickImage_FormatExpression = e.asm.Qg).apply(null, arguments);
      }, e._MagickImage_Frame = function() {
        return (e._MagickImage_Frame = e.asm.Rg).apply(null, arguments);
      }, e._MagickImage_Fx = function() {
        return (e._MagickImage_Fx = e.asm.Sg).apply(null, arguments);
      }, e._MagickImage_GammaCorrect = function() {
        return (e._MagickImage_GammaCorrect = e.asm.Tg).apply(null, arguments);
      }, e._MagickImage_GaussianBlur = function() {
        return (e._MagickImage_GaussianBlur = e.asm.Ug).apply(null, arguments);
      }, e._MagickImage_GetArtifact = function() {
        return (e._MagickImage_GetArtifact = e.asm.Vg).apply(null, arguments);
      }, e._MagickImage_GetAttribute = function() {
        return (e._MagickImage_GetAttribute = e.asm.Wg).apply(null, arguments);
      }, e._MagickImage_GetColormapColor = function() {
        return (e._MagickImage_GetColormapColor = e.asm.Xg).apply(null, arguments);
      }, e._MagickImage_GetNext = function() {
        return (e._MagickImage_GetNext = e.asm.Yg).apply(null, arguments);
      }, e._MagickImage_GetNextArtifactName = function() {
        return (e._MagickImage_GetNextArtifactName = e.asm.Zg).apply(null, arguments);
      }, e._MagickImage_GetNextAttributeName = function() {
        return (e._MagickImage_GetNextAttributeName = e.asm._g).apply(null, arguments);
      }, e._MagickImage_GetNextProfileName = function() {
        return (e._MagickImage_GetNextProfileName = e.asm.$g).apply(null, arguments);
      }, e._MagickImage_GetProfile = function() {
        return (e._MagickImage_GetProfile = e.asm.ah).apply(null, arguments);
      }, e._MagickImage_GetReadMask = function() {
        return (e._MagickImage_GetReadMask = e.asm.bh).apply(null, arguments);
      }, e._MagickImage_GetWriteMask = function() {
        return (e._MagickImage_GetWriteMask = e.asm.ch).apply(null, arguments);
      }, e._MagickImage_Grayscale = function() {
        return (e._MagickImage_Grayscale = e.asm.dh).apply(null, arguments);
      }, e._MagickImage_HaldClut = function() {
        return (e._MagickImage_HaldClut = e.asm.eh).apply(null, arguments);
      }, e._MagickImage_HasChannel = function() {
        return (e._MagickImage_HasChannel = e.asm.fh).apply(null, arguments);
      }, e._MagickImage_HasProfile = function() {
        return (e._MagickImage_HasProfile = e.asm.gh).apply(null, arguments);
      }, e._MagickImage_Histogram = function() {
        return (e._MagickImage_Histogram = e.asm.hh).apply(null, arguments);
      }, e._MagickImage_HoughLine = function() {
        return (e._MagickImage_HoughLine = e.asm.ih).apply(null, arguments);
      }, e._MagickImage_Implode = function() {
        return (e._MagickImage_Implode = e.asm.jh).apply(null, arguments);
      }, e._MagickImage_ImportPixels = function() {
        return (e._MagickImage_ImportPixels = e.asm.kh).apply(null, arguments);
      }, e._MagickImage_Integral = function() {
        return (e._MagickImage_Integral = e.asm.lh).apply(null, arguments);
      }, e._MagickImage_InterpolativeResize = function() {
        return (e._MagickImage_InterpolativeResize = e.asm.mh).apply(null, arguments);
      }, e._MagickImage_Kmeans = function() {
        return (e._MagickImage_Kmeans = e.asm.nh).apply(null, arguments);
      }, e._MagickImage_Kuwahara = function() {
        return (e._MagickImage_Kuwahara = e.asm.oh).apply(null, arguments);
      }, e._MagickImage_Level = function() {
        return (e._MagickImage_Level = e.asm.ph).apply(null, arguments);
      }, e._MagickImage_LevelColors = function() {
        return (e._MagickImage_LevelColors = e.asm.qh).apply(null, arguments);
      }, e._MagickImage_Levelize = function() {
        return (e._MagickImage_Levelize = e.asm.rh).apply(null, arguments);
      }, e._MagickImage_LinearStretch = function() {
        return (e._MagickImage_LinearStretch = e.asm.sh).apply(null, arguments);
      }, e._MagickImage_LiquidRescale = function() {
        return (e._MagickImage_LiquidRescale = e.asm.th).apply(null, arguments);
      }, e._MagickImage_LocalContrast = function() {
        return (e._MagickImage_LocalContrast = e.asm.uh).apply(null, arguments);
      }, e._MagickImage_Magnify = function() {
        return (e._MagickImage_Magnify = e.asm.vh).apply(null, arguments);
      }, e._MagickImage_Map = function() {
        return (e._MagickImage_Map = e.asm.wh).apply(null, arguments);
      }, e._MagickImage_MeanShift = function() {
        return (e._MagickImage_MeanShift = e.asm.xh).apply(null, arguments);
      }, e._MagickImage_Minify = function() {
        return (e._MagickImage_Minify = e.asm.yh).apply(null, arguments);
      }, e._MagickImage_MinimumBoundingBox = function() {
        return (e._MagickImage_MinimumBoundingBox = e.asm.zh).apply(null, arguments);
      }, e._MagickImage_Modulate = function() {
        return (e._MagickImage_Modulate = e.asm.Ah).apply(null, arguments);
      }, e._MagickImage_Moments = function() {
        return (e._MagickImage_Moments = e.asm.Bh).apply(null, arguments);
      }, e._MagickImage_Morphology = function() {
        return (e._MagickImage_Morphology = e.asm.Ch).apply(null, arguments);
      }, e._MagickImage_MotionBlur = function() {
        return (e._MagickImage_MotionBlur = e.asm.Dh).apply(null, arguments);
      }, e._MagickImage_Negate = function() {
        return (e._MagickImage_Negate = e.asm.Eh).apply(null, arguments);
      }, e._MagickImage_Normalize = function() {
        return (e._MagickImage_Normalize = e.asm.Fh).apply(null, arguments);
      }, e._MagickImage_OilPaint = function() {
        return (e._MagickImage_OilPaint = e.asm.Gh).apply(null, arguments);
      }, e._MagickImage_Opaque = function() {
        return (e._MagickImage_Opaque = e.asm.Hh).apply(null, arguments);
      }, e._MagickImage_OrderedDither = function() {
        return (e._MagickImage_OrderedDither = e.asm.Ih).apply(null, arguments);
      }, e._MagickImage_Perceptible = function() {
        return (e._MagickImage_Perceptible = e.asm.Jh).apply(null, arguments);
      }, e._MagickImage_PerceptualHash = function() {
        return (e._MagickImage_PerceptualHash = e.asm.Kh).apply(null, arguments);
      }, e._MagickImage_Quantize = function() {
        return (e._MagickImage_Quantize = e.asm.Lh).apply(null, arguments);
      }, e._MagickImage_Polaroid = function() {
        return (e._MagickImage_Polaroid = e.asm.Mh).apply(null, arguments);
      }, e._MagickImage_Posterize = function() {
        return (e._MagickImage_Posterize = e.asm.Nh).apply(null, arguments);
      }, e._MagickImage_RaiseOrLower = function() {
        return (e._MagickImage_RaiseOrLower = e.asm.Oh).apply(null, arguments);
      }, e._MagickImage_RandomThreshold = function() {
        return (e._MagickImage_RandomThreshold = e.asm.Ph).apply(null, arguments);
      }, e._MagickImage_RangeThreshold = function() {
        return (e._MagickImage_RangeThreshold = e.asm.Qh).apply(null, arguments);
      }, e._MagickImage_ReadBlob = function() {
        return (e._MagickImage_ReadBlob = e.asm.Rh).apply(null, arguments);
      }, e._MagickImage_ReadFile = function() {
        return (e._MagickImage_ReadFile = e.asm.Sh).apply(null, arguments);
      }, e._MagickImage_ReadPixels = function() {
        return (e._MagickImage_ReadPixels = e.asm.Th).apply(null, arguments);
      }, e._MagickImage_ReadStream = function() {
        return (e._MagickImage_ReadStream = e.asm.Uh).apply(null, arguments);
      }, e._MagickImage_RegionMask = function() {
        return (e._MagickImage_RegionMask = e.asm.Vh).apply(null, arguments);
      }, e._MagickImage_RemoveArtifact = function() {
        return (e._MagickImage_RemoveArtifact = e.asm.Wh).apply(null, arguments);
      }, e._MagickImage_RemoveAttribute = function() {
        return (e._MagickImage_RemoveAttribute = e.asm.Xh).apply(null, arguments);
      }, e._MagickImage_RemoveProfile = function() {
        return (e._MagickImage_RemoveProfile = e.asm.Yh).apply(null, arguments);
      }, e._MagickImage_ResetArtifactIterator = function() {
        return (e._MagickImage_ResetArtifactIterator = e.asm.Zh).apply(null, arguments);
      }, e._MagickImage_ResetAttributeIterator = function() {
        return (e._MagickImage_ResetAttributeIterator = e.asm._h).apply(null, arguments);
      }, e._MagickImage_ResetProfileIterator = function() {
        return (e._MagickImage_ResetProfileIterator = e.asm.$h).apply(null, arguments);
      }, e._MagickImage_Resample = function() {
        return (e._MagickImage_Resample = e.asm.ai).apply(null, arguments);
      }, e._MagickImage_Resize = function() {
        return (e._MagickImage_Resize = e.asm.bi).apply(null, arguments);
      }, e._MagickImage_Roll = function() {
        return (e._MagickImage_Roll = e.asm.ci).apply(null, arguments);
      }, e._MagickImage_Rotate = function() {
        return (e._MagickImage_Rotate = e.asm.di).apply(null, arguments);
      }, e._MagickImage_RotationalBlur = function() {
        return (e._MagickImage_RotationalBlur = e.asm.ei).apply(null, arguments);
      }, e._MagickImage_Sample = function() {
        return (e._MagickImage_Sample = e.asm.fi).apply(null, arguments);
      }, e._MagickImage_Scale = function() {
        return (e._MagickImage_Scale = e.asm.gi).apply(null, arguments);
      }, e._MagickImage_Segment = function() {
        return (e._MagickImage_Segment = e.asm.hi).apply(null, arguments);
      }, e._MagickImage_SelectiveBlur = function() {
        return (e._MagickImage_SelectiveBlur = e.asm.ii).apply(null, arguments);
      }, e._MagickImage_Separate = function() {
        return (e._MagickImage_Separate = e.asm.ji).apply(null, arguments);
      }, e._MagickImage_SepiaTone = function() {
        return (e._MagickImage_SepiaTone = e.asm.ki).apply(null, arguments);
      }, e._MagickImage_SetAlpha = function() {
        return (e._MagickImage_SetAlpha = e.asm.li).apply(null, arguments);
      }, e._MagickImage_SetArtifact = function() {
        return (e._MagickImage_SetArtifact = e.asm.mi).apply(null, arguments);
      }, e._MagickImage_SetAttribute = function() {
        return (e._MagickImage_SetAttribute = e.asm.ni).apply(null, arguments);
      }, e._MagickImage_SetBitDepth = function() {
        return (e._MagickImage_SetBitDepth = e.asm.oi).apply(null, arguments);
      }, e._MagickImage_SetColormapColor = function() {
        return (e._MagickImage_SetColormapColor = e.asm.pi).apply(null, arguments);
      }, e._MagickImage_SetColorMetric = function() {
        return (e._MagickImage_SetColorMetric = e.asm.qi).apply(null, arguments);
      }, e._MagickImage_SetNext = function() {
        return (e._MagickImage_SetNext = e.asm.ri).apply(null, arguments);
      }, e._MagickImage_SetProfile = function() {
        return (e._MagickImage_SetProfile = e.asm.si).apply(null, arguments);
      }, e._MagickImage_SetProgressDelegate = function() {
        return (e._MagickImage_SetProgressDelegate = e.asm.ti).apply(null, arguments);
      }, e._MagickImage_SetReadMask = function() {
        return (e._MagickImage_SetReadMask = e.asm.ui).apply(null, arguments);
      }, e._MagickImage_SetWriteMask = function() {
        return (e._MagickImage_SetWriteMask = e.asm.vi).apply(null, arguments);
      }, e._MagickImage_Shade = function() {
        return (e._MagickImage_Shade = e.asm.wi).apply(null, arguments);
      }, e._MagickImage_Shadow = function() {
        return (e._MagickImage_Shadow = e.asm.xi).apply(null, arguments);
      }, e._MagickImage_Sharpen = function() {
        return (e._MagickImage_Sharpen = e.asm.yi).apply(null, arguments);
      }, e._MagickImage_Shave = function() {
        return (e._MagickImage_Shave = e.asm.zi).apply(null, arguments);
      }, e._MagickImage_Shear = function() {
        return (e._MagickImage_Shear = e.asm.Ai).apply(null, arguments);
      }, e._MagickImage_SigmoidalContrast = function() {
        return (e._MagickImage_SigmoidalContrast = e.asm.Bi).apply(null, arguments);
      }, e._MagickImage_SparseColor = function() {
        return (e._MagickImage_SparseColor = e.asm.Ci).apply(null, arguments);
      }, e._MagickImage_Spread = function() {
        return (e._MagickImage_Spread = e.asm.Di).apply(null, arguments);
      }, e._MagickImage_Sketch = function() {
        return (e._MagickImage_Sketch = e.asm.Ei).apply(null, arguments);
      }, e._MagickImage_Solarize = function() {
        return (e._MagickImage_Solarize = e.asm.Fi).apply(null, arguments);
      }, e._MagickImage_SortPixels = function() {
        return (e._MagickImage_SortPixels = e.asm.Gi).apply(null, arguments);
      }, e._MagickImage_Splice = function() {
        return (e._MagickImage_Splice = e.asm.Hi).apply(null, arguments);
      }, e._MagickImage_Statistic = function() {
        return (e._MagickImage_Statistic = e.asm.Ii).apply(null, arguments);
      }, e._MagickImage_Statistics = function() {
        return (e._MagickImage_Statistics = e.asm.Ji).apply(null, arguments);
      }, e._MagickImage_Stegano = function() {
        return (e._MagickImage_Stegano = e.asm.Ki).apply(null, arguments);
      }, e._MagickImage_Stereo = function() {
        return (e._MagickImage_Stereo = e.asm.Li).apply(null, arguments);
      }, e._MagickImage_Strip = function() {
        return (e._MagickImage_Strip = e.asm.Mi).apply(null, arguments);
      }, e._MagickImage_SubImageSearch = function() {
        return (e._MagickImage_SubImageSearch = e.asm.Ni).apply(null, arguments);
      }, e._MagickImage_Swirl = function() {
        return (e._MagickImage_Swirl = e.asm.Oi).apply(null, arguments);
      }, e._MagickImage_Texture = function() {
        return (e._MagickImage_Texture = e.asm.Pi).apply(null, arguments);
      }, e._MagickImage_Threshold = function() {
        return (e._MagickImage_Threshold = e.asm.Qi).apply(null, arguments);
      }, e._MagickImage_Thumbnail = function() {
        return (e._MagickImage_Thumbnail = e.asm.Ri).apply(null, arguments);
      }, e._MagickImage_Tint = function() {
        return (e._MagickImage_Tint = e.asm.Si).apply(null, arguments);
      }, e._MagickImage_Transparent = function() {
        return (e._MagickImage_Transparent = e.asm.Ti).apply(null, arguments);
      }, e._MagickImage_TransparentChroma = function() {
        return (e._MagickImage_TransparentChroma = e.asm.Ui).apply(null, arguments);
      }, e._MagickImage_Transpose = function() {
        return (e._MagickImage_Transpose = e.asm.Vi).apply(null, arguments);
      }, e._MagickImage_Transverse = function() {
        return (e._MagickImage_Transverse = e.asm.Wi).apply(null, arguments);
      }, e._MagickImage_Trim = function() {
        return (e._MagickImage_Trim = e.asm.Xi).apply(null, arguments);
      }, e._MagickImage_UniqueColors = function() {
        return (e._MagickImage_UniqueColors = e.asm.Yi).apply(null, arguments);
      }, e._MagickImage_UnsharpMask = function() {
        return (e._MagickImage_UnsharpMask = e.asm.Zi).apply(null, arguments);
      }, e._MagickImage_Vignette = function() {
        return (e._MagickImage_Vignette = e.asm._i).apply(null, arguments);
      }, e._MagickImage_Wave = function() {
        return (e._MagickImage_Wave = e.asm.$i).apply(null, arguments);
      }, e._MagickImage_WaveletDenoise = function() {
        return (e._MagickImage_WaveletDenoise = e.asm.aj).apply(null, arguments);
      }, e._MagickImage_WhiteBalance = function() {
        return (e._MagickImage_WhiteBalance = e.asm.bj).apply(null, arguments);
      }, e._MagickImage_WhiteThreshold = function() {
        return (e._MagickImage_WhiteThreshold = e.asm.cj).apply(null, arguments);
      }, e._MagickImage_WriteBlob = function() {
        return (e._MagickImage_WriteBlob = e.asm.dj).apply(null, arguments);
      }, e._MagickImage_WriteFile = function() {
        return (e._MagickImage_WriteFile = e.asm.ej).apply(null, arguments);
      }, e._MagickImage_WriteStream = function() {
        return (e._MagickImage_WriteStream = e.asm.fj).apply(null, arguments);
      }, e._MagickImageCollection_Append = function() {
        return (e._MagickImageCollection_Append = e.asm.gj).apply(null, arguments);
      }, e._MagickImageCollection_Coalesce = function() {
        return (e._MagickImageCollection_Coalesce = e.asm.hj).apply(null, arguments);
      }, e._MagickImageCollection_Combine = function() {
        return (e._MagickImageCollection_Combine = e.asm.ij).apply(null, arguments);
      }, e._MagickImageCollection_Complex = function() {
        return (e._MagickImageCollection_Complex = e.asm.jj).apply(null, arguments);
      }, e._MagickImageCollection_Deconstruct = function() {
        return (e._MagickImageCollection_Deconstruct = e.asm.kj).apply(null, arguments);
      }, e._MagickImageCollection_Dispose = function() {
        return (e._MagickImageCollection_Dispose = e.asm.lj).apply(null, arguments);
      }, e._MagickImageCollection_Evaluate = function() {
        return (e._MagickImageCollection_Evaluate = e.asm.mj).apply(null, arguments);
      }, e._MagickImageCollection_Fx = function() {
        return (e._MagickImageCollection_Fx = e.asm.nj).apply(null, arguments);
      }, e._MagickImageCollection_Map = function() {
        return (e._MagickImageCollection_Map = e.asm.oj).apply(null, arguments);
      }, e._MagickImageCollection_Merge = function() {
        return (e._MagickImageCollection_Merge = e.asm.pj).apply(null, arguments);
      }, e._MagickImageCollection_Montage = function() {
        return (e._MagickImageCollection_Montage = e.asm.qj).apply(null, arguments);
      }, e._MagickImageCollection_Morph = function() {
        return (e._MagickImageCollection_Morph = e.asm.rj).apply(null, arguments);
      }, e._MagickImageCollection_Optimize = function() {
        return (e._MagickImageCollection_Optimize = e.asm.sj).apply(null, arguments);
      }, e._MagickImageCollection_OptimizePlus = function() {
        return (e._MagickImageCollection_OptimizePlus = e.asm.tj).apply(null, arguments);
      }, e._MagickImageCollection_OptimizeTransparency = function() {
        return (e._MagickImageCollection_OptimizeTransparency = e.asm.uj).apply(null, arguments);
      }, e._MagickImageCollection_Polynomial = function() {
        return (e._MagickImageCollection_Polynomial = e.asm.vj).apply(null, arguments);
      }, e._MagickImageCollection_Quantize = function() {
        return (e._MagickImageCollection_Quantize = e.asm.wj).apply(null, arguments);
      }, e._MagickImageCollection_ReadBlob = function() {
        return (e._MagickImageCollection_ReadBlob = e.asm.xj).apply(null, arguments);
      }, e._MagickImageCollection_ReadFile = function() {
        return (e._MagickImageCollection_ReadFile = e.asm.yj).apply(null, arguments);
      }, e._MagickImageCollection_ReadStream = function() {
        return (e._MagickImageCollection_ReadStream = e.asm.zj).apply(null, arguments);
      }, e._MagickImageCollection_Smush = function() {
        return (e._MagickImageCollection_Smush = e.asm.Aj).apply(null, arguments);
      }, e._MagickImageCollection_WriteFile = function() {
        return (e._MagickImageCollection_WriteFile = e.asm.Bj).apply(null, arguments);
      }, e._MagickImageCollection_WriteStream = function() {
        return (e._MagickImageCollection_WriteStream = e.asm.Cj).apply(null, arguments);
      }, e._DoubleMatrix_Create = function() {
        return (e._DoubleMatrix_Create = e.asm.Dj).apply(null, arguments);
      }, e._DoubleMatrix_Dispose = function() {
        return (e._DoubleMatrix_Dispose = e.asm.Ej).apply(null, arguments);
      }, e._OpenCL_GetDevices = function() {
        return (e._OpenCL_GetDevices = e.asm.Fj).apply(null, arguments);
      }, e._OpenCL_GetDevice = function() {
        return (e._OpenCL_GetDevice = e.asm.Gj).apply(null, arguments);
      }, e._OpenCL_GetEnabled = function() {
        return (e._OpenCL_GetEnabled = e.asm.Hj).apply(null, arguments);
      }, e._OpenCL_SetEnabled = function() {
        return (e._OpenCL_SetEnabled = e.asm.Ij).apply(null, arguments);
      }, e._OpenCLDevice_DeviceType_Get = function() {
        return (e._OpenCLDevice_DeviceType_Get = e.asm.Jj).apply(null, arguments);
      }, e._OpenCLDevice_BenchmarkScore_Get = function() {
        return (e._OpenCLDevice_BenchmarkScore_Get = e.asm.Kj).apply(null, arguments);
      }, e._OpenCLDevice_IsEnabled_Get = function() {
        return (e._OpenCLDevice_IsEnabled_Get = e.asm.Lj).apply(null, arguments);
      }, e._OpenCLDevice_IsEnabled_Set = function() {
        return (e._OpenCLDevice_IsEnabled_Set = e.asm.Mj).apply(null, arguments);
      }, e._OpenCLDevice_Name_Get = function() {
        return (e._OpenCLDevice_Name_Get = e.asm.Nj).apply(null, arguments);
      }, e._OpenCLDevice_Version_Get = function() {
        return (e._OpenCLDevice_Version_Get = e.asm.Oj).apply(null, arguments);
      }, e._OpenCLDevice_GetKernelProfileRecords = function() {
        return (e._OpenCLDevice_GetKernelProfileRecords = e.asm.Pj).apply(null, arguments);
      }, e._OpenCLDevice_GetKernelProfileRecord = function() {
        return (e._OpenCLDevice_GetKernelProfileRecord = e.asm.Qj).apply(null, arguments);
      }, e._OpenCLDevice_SetProfileKernels = function() {
        return (e._OpenCLDevice_SetProfileKernels = e.asm.Rj).apply(null, arguments);
      }, e._OpenCLKernelProfileRecord_Count_Get = function() {
        return (e._OpenCLKernelProfileRecord_Count_Get = e.asm.Sj).apply(null, arguments);
      }, e._OpenCLKernelProfileRecord_Name_Get = function() {
        return (e._OpenCLKernelProfileRecord_Name_Get = e.asm.Tj).apply(null, arguments);
      }, e._OpenCLKernelProfileRecord_MaximumDuration_Get = function() {
        return (e._OpenCLKernelProfileRecord_MaximumDuration_Get = e.asm.Uj).apply(null, arguments);
      }, e._OpenCLKernelProfileRecord_MinimumDuration_Get = function() {
        return (e._OpenCLKernelProfileRecord_MinimumDuration_Get = e.asm.Vj).apply(null, arguments);
      }, e._OpenCLKernelProfileRecord_TotalDuration_Get = function() {
        return (e._OpenCLKernelProfileRecord_TotalDuration_Get = e.asm.Wj).apply(null, arguments);
      }, e._JpegOptimizer_CompressFile = function() {
        return (e._JpegOptimizer_CompressFile = e.asm.Xj).apply(null, arguments);
      }, e._JpegOptimizer_CompressStream = function() {
        return (e._JpegOptimizer_CompressStream = e.asm.Yj).apply(null, arguments);
      };
      var Ke = e._malloc = function() {
        return (Ke = e._malloc = e.asm.Zj).apply(null, arguments);
      }, De = e._free = function() {
        return (De = e._free = e.asm._j).apply(null, arguments);
      }, mt = function() {
        return (mt = e.asm.$j).apply(null, arguments);
      };
      e._PixelCollection_Create = function() {
        return (e._PixelCollection_Create = e.asm.ak).apply(null, arguments);
      }, e._PixelCollection_Dispose = function() {
        return (e._PixelCollection_Dispose = e.asm.bk).apply(null, arguments);
      }, e._PixelCollection_GetArea = function() {
        return (e._PixelCollection_GetArea = e.asm.ck).apply(null, arguments);
      }, e._PixelCollection_SetArea = function() {
        return (e._PixelCollection_SetArea = e.asm.dk).apply(null, arguments);
      }, e._PixelCollection_ToByteArray = function() {
        return (e._PixelCollection_ToByteArray = e.asm.ek).apply(null, arguments);
      }, e._PixelCollection_ToShortArray = function() {
        return (e._PixelCollection_ToShortArray = e.asm.fk).apply(null, arguments);
      }, e._Quantum_Depth_Get = function() {
        return (e._Quantum_Depth_Get = e.asm.gk).apply(null, arguments);
      }, e._Quantum_Max_Get = function() {
        return (e._Quantum_Max_Get = e.asm.hk).apply(null, arguments);
      }, e._Quantum_ScaleToByte = function() {
        return (e._Quantum_ScaleToByte = e.asm.ik).apply(null, arguments);
      }, e._ResourceLimits_Area_Get = function() {
        return (e._ResourceLimits_Area_Get = e.asm.jk).apply(null, arguments);
      }, e._ResourceLimits_Area_Set = function() {
        return (e._ResourceLimits_Area_Set = e.asm.kk).apply(null, arguments);
      }, e._ResourceLimits_Disk_Get = function() {
        return (e._ResourceLimits_Disk_Get = e.asm.lk).apply(null, arguments);
      }, e._ResourceLimits_Disk_Set = function() {
        return (e._ResourceLimits_Disk_Set = e.asm.mk).apply(null, arguments);
      }, e._ResourceLimits_Height_Get = function() {
        return (e._ResourceLimits_Height_Get = e.asm.nk).apply(null, arguments);
      }, e._ResourceLimits_Height_Set = function() {
        return (e._ResourceLimits_Height_Set = e.asm.ok).apply(null, arguments);
      }, e._ResourceLimits_ListLength_Get = function() {
        return (e._ResourceLimits_ListLength_Get = e.asm.pk).apply(null, arguments);
      }, e._ResourceLimits_ListLength_Set = function() {
        return (e._ResourceLimits_ListLength_Set = e.asm.qk).apply(null, arguments);
      }, e._ResourceLimits_MaxMemoryRequest_Get = function() {
        return (e._ResourceLimits_MaxMemoryRequest_Get = e.asm.rk).apply(null, arguments);
      }, e._ResourceLimits_MaxMemoryRequest_Set = function() {
        return (e._ResourceLimits_MaxMemoryRequest_Set = e.asm.sk).apply(null, arguments);
      }, e._ResourceLimits_Memory_Get = function() {
        return (e._ResourceLimits_Memory_Get = e.asm.tk).apply(null, arguments);
      }, e._ResourceLimits_Memory_Set = function() {
        return (e._ResourceLimits_Memory_Set = e.asm.uk).apply(null, arguments);
      }, e._ResourceLimits_Thread_Get = function() {
        return (e._ResourceLimits_Thread_Get = e.asm.vk).apply(null, arguments);
      }, e._ResourceLimits_Thread_Set = function() {
        return (e._ResourceLimits_Thread_Set = e.asm.wk).apply(null, arguments);
      }, e._ResourceLimits_Throttle_Get = function() {
        return (e._ResourceLimits_Throttle_Get = e.asm.xk).apply(null, arguments);
      }, e._ResourceLimits_Throttle_Set = function() {
        return (e._ResourceLimits_Throttle_Set = e.asm.yk).apply(null, arguments);
      }, e._ResourceLimits_Width_Get = function() {
        return (e._ResourceLimits_Width_Get = e.asm.zk).apply(null, arguments);
      }, e._ResourceLimits_Width_Set = function() {
        return (e._ResourceLimits_Width_Set = e.asm.Ak).apply(null, arguments);
      }, e._ResourceLimits_LimitMemory = function() {
        return (e._ResourceLimits_LimitMemory = e.asm.Bk).apply(null, arguments);
      }, e._DrawingSettings_Create = function() {
        return (e._DrawingSettings_Create = e.asm.Ck).apply(null, arguments);
      }, e._DrawingSettings_Dispose = function() {
        return (e._DrawingSettings_Dispose = e.asm.Dk).apply(null, arguments);
      }, e._DrawingSettings_BorderColor_Get = function() {
        return (e._DrawingSettings_BorderColor_Get = e.asm.Ek).apply(null, arguments);
      }, e._DrawingSettings_BorderColor_Set = function() {
        return (e._DrawingSettings_BorderColor_Set = e.asm.Fk).apply(null, arguments);
      }, e._DrawingSettings_FillColor_Get = function() {
        return (e._DrawingSettings_FillColor_Get = e.asm.Gk).apply(null, arguments);
      }, e._DrawingSettings_FillColor_Set = function() {
        return (e._DrawingSettings_FillColor_Set = e.asm.Hk).apply(null, arguments);
      }, e._DrawingSettings_FillRule_Get = function() {
        return (e._DrawingSettings_FillRule_Get = e.asm.Ik).apply(null, arguments);
      }, e._DrawingSettings_FillRule_Set = function() {
        return (e._DrawingSettings_FillRule_Set = e.asm.Jk).apply(null, arguments);
      }, e._DrawingSettings_Font_Get = function() {
        return (e._DrawingSettings_Font_Get = e.asm.Kk).apply(null, arguments);
      }, e._DrawingSettings_Font_Set = function() {
        return (e._DrawingSettings_Font_Set = e.asm.Lk).apply(null, arguments);
      }, e._DrawingSettings_FontFamily_Get = function() {
        return (e._DrawingSettings_FontFamily_Get = e.asm.Mk).apply(null, arguments);
      }, e._DrawingSettings_FontFamily_Set = function() {
        return (e._DrawingSettings_FontFamily_Set = e.asm.Nk).apply(null, arguments);
      }, e._DrawingSettings_FontPointsize_Get = function() {
        return (e._DrawingSettings_FontPointsize_Get = e.asm.Ok).apply(null, arguments);
      }, e._DrawingSettings_FontPointsize_Set = function() {
        return (e._DrawingSettings_FontPointsize_Set = e.asm.Pk).apply(null, arguments);
      }, e._DrawingSettings_FontStyle_Get = function() {
        return (e._DrawingSettings_FontStyle_Get = e.asm.Qk).apply(null, arguments);
      }, e._DrawingSettings_FontStyle_Set = function() {
        return (e._DrawingSettings_FontStyle_Set = e.asm.Rk).apply(null, arguments);
      }, e._DrawingSettings_FontWeight_Get = function() {
        return (e._DrawingSettings_FontWeight_Get = e.asm.Sk).apply(null, arguments);
      }, e._DrawingSettings_FontWeight_Set = function() {
        return (e._DrawingSettings_FontWeight_Set = e.asm.Tk).apply(null, arguments);
      }, e._DrawingSettings_StrokeAntiAlias_Get = function() {
        return (e._DrawingSettings_StrokeAntiAlias_Get = e.asm.Uk).apply(null, arguments);
      }, e._DrawingSettings_StrokeAntiAlias_Set = function() {
        return (e._DrawingSettings_StrokeAntiAlias_Set = e.asm.Vk).apply(null, arguments);
      }, e._DrawingSettings_StrokeColor_Get = function() {
        return (e._DrawingSettings_StrokeColor_Get = e.asm.Wk).apply(null, arguments);
      }, e._DrawingSettings_StrokeColor_Set = function() {
        return (e._DrawingSettings_StrokeColor_Set = e.asm.Xk).apply(null, arguments);
      }, e._DrawingSettings_StrokeDashOffset_Get = function() {
        return (e._DrawingSettings_StrokeDashOffset_Get = e.asm.Yk).apply(null, arguments);
      }, e._DrawingSettings_StrokeDashOffset_Set = function() {
        return (e._DrawingSettings_StrokeDashOffset_Set = e.asm.Zk).apply(null, arguments);
      }, e._DrawingSettings_StrokeLineCap_Get = function() {
        return (e._DrawingSettings_StrokeLineCap_Get = e.asm._k).apply(null, arguments);
      }, e._DrawingSettings_StrokeLineCap_Set = function() {
        return (e._DrawingSettings_StrokeLineCap_Set = e.asm.$k).apply(null, arguments);
      }, e._DrawingSettings_StrokeLineJoin_Get = function() {
        return (e._DrawingSettings_StrokeLineJoin_Get = e.asm.al).apply(null, arguments);
      }, e._DrawingSettings_StrokeLineJoin_Set = function() {
        return (e._DrawingSettings_StrokeLineJoin_Set = e.asm.bl).apply(null, arguments);
      }, e._DrawingSettings_StrokeMiterLimit_Get = function() {
        return (e._DrawingSettings_StrokeMiterLimit_Get = e.asm.cl).apply(null, arguments);
      }, e._DrawingSettings_StrokeMiterLimit_Set = function() {
        return (e._DrawingSettings_StrokeMiterLimit_Set = e.asm.dl).apply(null, arguments);
      }, e._DrawingSettings_StrokeWidth_Get = function() {
        return (e._DrawingSettings_StrokeWidth_Get = e.asm.el).apply(null, arguments);
      }, e._DrawingSettings_StrokeWidth_Set = function() {
        return (e._DrawingSettings_StrokeWidth_Set = e.asm.fl).apply(null, arguments);
      }, e._DrawingSettings_TextAntiAlias_Get = function() {
        return (e._DrawingSettings_TextAntiAlias_Get = e.asm.gl).apply(null, arguments);
      }, e._DrawingSettings_TextAntiAlias_Set = function() {
        return (e._DrawingSettings_TextAntiAlias_Set = e.asm.hl).apply(null, arguments);
      }, e._DrawingSettings_TextDirection_Get = function() {
        return (e._DrawingSettings_TextDirection_Get = e.asm.il).apply(null, arguments);
      }, e._DrawingSettings_TextDirection_Set = function() {
        return (e._DrawingSettings_TextDirection_Set = e.asm.jl).apply(null, arguments);
      }, e._DrawingSettings_TextEncoding_Get = function() {
        return (e._DrawingSettings_TextEncoding_Get = e.asm.kl).apply(null, arguments);
      }, e._DrawingSettings_TextEncoding_Set = function() {
        return (e._DrawingSettings_TextEncoding_Set = e.asm.ll).apply(null, arguments);
      }, e._DrawingSettings_TextGravity_Get = function() {
        return (e._DrawingSettings_TextGravity_Get = e.asm.ml).apply(null, arguments);
      }, e._DrawingSettings_TextGravity_Set = function() {
        return (e._DrawingSettings_TextGravity_Set = e.asm.nl).apply(null, arguments);
      }, e._DrawingSettings_TextInterlineSpacing_Get = function() {
        return (e._DrawingSettings_TextInterlineSpacing_Get = e.asm.ol).apply(null, arguments);
      }, e._DrawingSettings_TextInterlineSpacing_Set = function() {
        return (e._DrawingSettings_TextInterlineSpacing_Set = e.asm.pl).apply(null, arguments);
      }, e._DrawingSettings_TextInterwordSpacing_Get = function() {
        return (e._DrawingSettings_TextInterwordSpacing_Get = e.asm.ql).apply(null, arguments);
      }, e._DrawingSettings_TextInterwordSpacing_Set = function() {
        return (e._DrawingSettings_TextInterwordSpacing_Set = e.asm.rl).apply(null, arguments);
      }, e._DrawingSettings_TextKerning_Get = function() {
        return (e._DrawingSettings_TextKerning_Get = e.asm.sl).apply(null, arguments);
      }, e._DrawingSettings_TextKerning_Set = function() {
        return (e._DrawingSettings_TextKerning_Set = e.asm.tl).apply(null, arguments);
      }, e._DrawingSettings_TextUnderColor_Get = function() {
        return (e._DrawingSettings_TextUnderColor_Get = e.asm.ul).apply(null, arguments);
      }, e._DrawingSettings_TextUnderColor_Set = function() {
        return (e._DrawingSettings_TextUnderColor_Set = e.asm.vl).apply(null, arguments);
      }, e._DrawingSettings_SetAffine = function() {
        return (e._DrawingSettings_SetAffine = e.asm.wl).apply(null, arguments);
      }, e._DrawingSettings_SetFillPattern = function() {
        return (e._DrawingSettings_SetFillPattern = e.asm.xl).apply(null, arguments);
      }, e._DrawingSettings_SetStrokeDashArray = function() {
        return (e._DrawingSettings_SetStrokeDashArray = e.asm.yl).apply(null, arguments);
      }, e._DrawingSettings_SetStrokePattern = function() {
        return (e._DrawingSettings_SetStrokePattern = e.asm.zl).apply(null, arguments);
      }, e._DrawingSettings_SetText = function() {
        return (e._DrawingSettings_SetText = e.asm.Al).apply(null, arguments);
      }, e._MagickSettings_Create = function() {
        return (e._MagickSettings_Create = e.asm.Bl).apply(null, arguments);
      }, e._MagickSettings_Dispose = function() {
        return (e._MagickSettings_Dispose = e.asm.Cl).apply(null, arguments);
      }, e._MagickSettings_AntiAlias_Get = function() {
        return (e._MagickSettings_AntiAlias_Get = e.asm.Dl).apply(null, arguments);
      }, e._MagickSettings_AntiAlias_Set = function() {
        return (e._MagickSettings_AntiAlias_Set = e.asm.El).apply(null, arguments);
      }, e._MagickSettings_BackgroundColor_Get = function() {
        return (e._MagickSettings_BackgroundColor_Get = e.asm.Fl).apply(null, arguments);
      }, e._MagickSettings_BackgroundColor_Set = function() {
        return (e._MagickSettings_BackgroundColor_Set = e.asm.Gl).apply(null, arguments);
      }, e._MagickSettings_ColorSpace_Get = function() {
        return (e._MagickSettings_ColorSpace_Get = e.asm.Hl).apply(null, arguments);
      }, e._MagickSettings_ColorSpace_Set = function() {
        return (e._MagickSettings_ColorSpace_Set = e.asm.Il).apply(null, arguments);
      }, e._MagickSettings_ColorType_Get = function() {
        return (e._MagickSettings_ColorType_Get = e.asm.Jl).apply(null, arguments);
      }, e._MagickSettings_ColorType_Set = function() {
        return (e._MagickSettings_ColorType_Set = e.asm.Kl).apply(null, arguments);
      }, e._MagickSettings_Compression_Get = function() {
        return (e._MagickSettings_Compression_Get = e.asm.Ll).apply(null, arguments);
      }, e._MagickSettings_Compression_Set = function() {
        return (e._MagickSettings_Compression_Set = e.asm.Ml).apply(null, arguments);
      }, e._MagickSettings_Debug_Get = function() {
        return (e._MagickSettings_Debug_Get = e.asm.Nl).apply(null, arguments);
      }, e._MagickSettings_Debug_Set = function() {
        return (e._MagickSettings_Debug_Set = e.asm.Ol).apply(null, arguments);
      }, e._MagickSettings_Density_Get = function() {
        return (e._MagickSettings_Density_Get = e.asm.Pl).apply(null, arguments);
      }, e._MagickSettings_Density_Set = function() {
        return (e._MagickSettings_Density_Set = e.asm.Ql).apply(null, arguments);
      }, e._MagickSettings_Depth_Get = function() {
        return (e._MagickSettings_Depth_Get = e.asm.Rl).apply(null, arguments);
      }, e._MagickSettings_Depth_Set = function() {
        return (e._MagickSettings_Depth_Set = e.asm.Sl).apply(null, arguments);
      }, e._MagickSettings_Endian_Get = function() {
        return (e._MagickSettings_Endian_Get = e.asm.Tl).apply(null, arguments);
      }, e._MagickSettings_Endian_Set = function() {
        return (e._MagickSettings_Endian_Set = e.asm.Ul).apply(null, arguments);
      }, e._MagickSettings_Extract_Get = function() {
        return (e._MagickSettings_Extract_Get = e.asm.Vl).apply(null, arguments);
      }, e._MagickSettings_Extract_Set = function() {
        return (e._MagickSettings_Extract_Set = e.asm.Wl).apply(null, arguments);
      }, e._MagickSettings_Format_Get = function() {
        return (e._MagickSettings_Format_Get = e.asm.Xl).apply(null, arguments);
      }, e._MagickSettings_Format_Set = function() {
        return (e._MagickSettings_Format_Set = e.asm.Yl).apply(null, arguments);
      }, e._MagickSettings_Font_Get = function() {
        return (e._MagickSettings_Font_Get = e.asm.Zl).apply(null, arguments);
      }, e._MagickSettings_Font_Set = function() {
        return (e._MagickSettings_Font_Set = e.asm._l).apply(null, arguments);
      }, e._MagickSettings_FontPointsize_Get = function() {
        return (e._MagickSettings_FontPointsize_Get = e.asm.$l).apply(null, arguments);
      }, e._MagickSettings_FontPointsize_Set = function() {
        return (e._MagickSettings_FontPointsize_Set = e.asm.am).apply(null, arguments);
      }, e._MagickSettings_Interlace_Get = function() {
        return (e._MagickSettings_Interlace_Get = e.asm.bm).apply(null, arguments);
      }, e._MagickSettings_Interlace_Set = function() {
        return (e._MagickSettings_Interlace_Set = e.asm.cm).apply(null, arguments);
      }, e._MagickSettings_Monochrome_Get = function() {
        return (e._MagickSettings_Monochrome_Get = e.asm.dm).apply(null, arguments);
      }, e._MagickSettings_Monochrome_Set = function() {
        return (e._MagickSettings_Monochrome_Set = e.asm.em).apply(null, arguments);
      }, e._MagickSettings_Verbose_Get = function() {
        return (e._MagickSettings_Verbose_Get = e.asm.fm).apply(null, arguments);
      }, e._MagickSettings_Verbose_Set = function() {
        return (e._MagickSettings_Verbose_Set = e.asm.gm).apply(null, arguments);
      }, e._MagickSettings_SetColorFuzz = function() {
        return (e._MagickSettings_SetColorFuzz = e.asm.hm).apply(null, arguments);
      }, e._MagickSettings_SetFileName = function() {
        return (e._MagickSettings_SetFileName = e.asm.im).apply(null, arguments);
      }, e._MagickSettings_SetNumberScenes = function() {
        return (e._MagickSettings_SetNumberScenes = e.asm.jm).apply(null, arguments);
      }, e._MagickSettings_SetOption = function() {
        return (e._MagickSettings_SetOption = e.asm.km).apply(null, arguments);
      }, e._MagickSettings_SetPage = function() {
        return (e._MagickSettings_SetPage = e.asm.lm).apply(null, arguments);
      }, e._MagickSettings_SetPing = function() {
        return (e._MagickSettings_SetPing = e.asm.mm).apply(null, arguments);
      }, e._MagickSettings_SetQuality = function() {
        return (e._MagickSettings_SetQuality = e.asm.nm).apply(null, arguments);
      }, e._MagickSettings_SetScenes = function() {
        return (e._MagickSettings_SetScenes = e.asm.om).apply(null, arguments);
      }, e._MagickSettings_SetScene = function() {
        return (e._MagickSettings_SetScene = e.asm.pm).apply(null, arguments);
      }, e._MagickSettings_SetSize = function() {
        return (e._MagickSettings_SetSize = e.asm.qm).apply(null, arguments);
      }, e._MontageSettings_Create = function() {
        return (e._MontageSettings_Create = e.asm.rm).apply(null, arguments);
      }, e._MontageSettings_Dispose = function() {
        return (e._MontageSettings_Dispose = e.asm.sm).apply(null, arguments);
      }, e._MontageSettings_SetBackgroundColor = function() {
        return (e._MontageSettings_SetBackgroundColor = e.asm.tm).apply(null, arguments);
      }, e._MontageSettings_SetBorderColor = function() {
        return (e._MontageSettings_SetBorderColor = e.asm.um).apply(null, arguments);
      }, e._MontageSettings_SetBorderWidth = function() {
        return (e._MontageSettings_SetBorderWidth = e.asm.vm).apply(null, arguments);
      }, e._MontageSettings_SetFillColor = function() {
        return (e._MontageSettings_SetFillColor = e.asm.wm).apply(null, arguments);
      }, e._MontageSettings_SetFont = function() {
        return (e._MontageSettings_SetFont = e.asm.xm).apply(null, arguments);
      }, e._MontageSettings_SetFontPointsize = function() {
        return (e._MontageSettings_SetFontPointsize = e.asm.ym).apply(null, arguments);
      }, e._MontageSettings_SetFrameGeometry = function() {
        return (e._MontageSettings_SetFrameGeometry = e.asm.zm).apply(null, arguments);
      }, e._MontageSettings_SetGeometry = function() {
        return (e._MontageSettings_SetGeometry = e.asm.Am).apply(null, arguments);
      }, e._MontageSettings_SetGravity = function() {
        return (e._MontageSettings_SetGravity = e.asm.Bm).apply(null, arguments);
      }, e._MontageSettings_SetShadow = function() {
        return (e._MontageSettings_SetShadow = e.asm.Cm).apply(null, arguments);
      }, e._MontageSettings_SetStrokeColor = function() {
        return (e._MontageSettings_SetStrokeColor = e.asm.Dm).apply(null, arguments);
      }, e._MontageSettings_SetTextureFileName = function() {
        return (e._MontageSettings_SetTextureFileName = e.asm.Em).apply(null, arguments);
      }, e._MontageSettings_SetTileGeometry = function() {
        return (e._MontageSettings_SetTileGeometry = e.asm.Fm).apply(null, arguments);
      }, e._MontageSettings_SetTitle = function() {
        return (e._MontageSettings_SetTitle = e.asm.Gm).apply(null, arguments);
      }, e._QuantizeSettings_SetColors = function() {
        return (e._QuantizeSettings_SetColors = e.asm.Hm).apply(null, arguments);
      }, e._QuantizeSettings_SetColorSpace = function() {
        return (e._QuantizeSettings_SetColorSpace = e.asm.Im).apply(null, arguments);
      }, e._QuantizeSettings_SetDitherMethod = function() {
        return (e._QuantizeSettings_SetDitherMethod = e.asm.Jm).apply(null, arguments);
      }, e._QuantizeSettings_SetMeasureErrors = function() {
        return (e._QuantizeSettings_SetMeasureErrors = e.asm.Km).apply(null, arguments);
      }, e._QuantizeSettings_SetTreeDepth = function() {
        return (e._QuantizeSettings_SetTreeDepth = e.asm.Lm).apply(null, arguments);
      }, e._ChannelMoments_Centroid_Get = function() {
        return (e._ChannelMoments_Centroid_Get = e.asm.Mm).apply(null, arguments);
      }, e._ChannelMoments_EllipseAngle_Get = function() {
        return (e._ChannelMoments_EllipseAngle_Get = e.asm.Nm).apply(null, arguments);
      }, e._ChannelMoments_EllipseAxis_Get = function() {
        return (e._ChannelMoments_EllipseAxis_Get = e.asm.Om).apply(null, arguments);
      }, e._ChannelMoments_EllipseEccentricity_Get = function() {
        return (e._ChannelMoments_EllipseEccentricity_Get = e.asm.Pm).apply(null, arguments);
      }, e._ChannelMoments_EllipseIntensity_Get = function() {
        return (e._ChannelMoments_EllipseIntensity_Get = e.asm.Qm).apply(null, arguments);
      }, e._ChannelMoments_GetHuInvariants = function() {
        return (e._ChannelMoments_GetHuInvariants = e.asm.Rm).apply(null, arguments);
      }, e._ChannelPerceptualHash_GetHclpHuPhash = function() {
        return (e._ChannelPerceptualHash_GetHclpHuPhash = e.asm.Sm).apply(null, arguments);
      }, e._ChannelPerceptualHash_GetSrgbHuPhash = function() {
        return (e._ChannelPerceptualHash_GetSrgbHuPhash = e.asm.Tm).apply(null, arguments);
      }, e._ChannelStatistics_Depth_Get = function() {
        return (e._ChannelStatistics_Depth_Get = e.asm.Um).apply(null, arguments);
      }, e._ChannelStatistics_Entropy_Get = function() {
        return (e._ChannelStatistics_Entropy_Get = e.asm.Vm).apply(null, arguments);
      }, e._ChannelStatistics_Kurtosis_Get = function() {
        return (e._ChannelStatistics_Kurtosis_Get = e.asm.Wm).apply(null, arguments);
      }, e._ChannelStatistics_Maximum_Get = function() {
        return (e._ChannelStatistics_Maximum_Get = e.asm.Xm).apply(null, arguments);
      }, e._ChannelStatistics_Mean_Get = function() {
        return (e._ChannelStatistics_Mean_Get = e.asm.Ym).apply(null, arguments);
      }, e._ChannelStatistics_Minimum_Get = function() {
        return (e._ChannelStatistics_Minimum_Get = e.asm.Zm).apply(null, arguments);
      }, e._ChannelStatistics_Skewness_Get = function() {
        return (e._ChannelStatistics_Skewness_Get = e.asm._m).apply(null, arguments);
      }, e._ChannelStatistics_StandardDeviation_Get = function() {
        return (e._ChannelStatistics_StandardDeviation_Get = e.asm.$m).apply(null, arguments);
      }, e._Moments_DisposeList = function() {
        return (e._Moments_DisposeList = e.asm.an).apply(null, arguments);
      }, e._Moments_GetInstance = function() {
        return (e._Moments_GetInstance = e.asm.bn).apply(null, arguments);
      }, e._PerceptualHash_DisposeList = function() {
        return (e._PerceptualHash_DisposeList = e.asm.cn).apply(null, arguments);
      }, e._PerceptualHash_GetInstance = function() {
        return (e._PerceptualHash_GetInstance = e.asm.dn).apply(null, arguments);
      }, e._Statistics_DisposeList = function() {
        return (e._Statistics_DisposeList = e.asm.en).apply(null, arguments);
      }, e._Statistics_GetInstance = function() {
        return (e._Statistics_GetInstance = e.asm.fn).apply(null, arguments);
      }, e._ConnectedComponent_DisposeList = function() {
        return (e._ConnectedComponent_DisposeList = e.asm.gn).apply(null, arguments);
      }, e._ConnectedComponent_GetArea = function() {
        return (e._ConnectedComponent_GetArea = e.asm.hn).apply(null, arguments);
      }, e._ConnectedComponent_GetCentroid = function() {
        return (e._ConnectedComponent_GetCentroid = e.asm.jn).apply(null, arguments);
      }, e._ConnectedComponent_GetColor = function() {
        return (e._ConnectedComponent_GetColor = e.asm.kn).apply(null, arguments);
      }, e._ConnectedComponent_GetHeight = function() {
        return (e._ConnectedComponent_GetHeight = e.asm.ln).apply(null, arguments);
      }, e._ConnectedComponent_GetId = function() {
        return (e._ConnectedComponent_GetId = e.asm.mn).apply(null, arguments);
      }, e._ConnectedComponent_GetWidth = function() {
        return (e._ConnectedComponent_GetWidth = e.asm.nn).apply(null, arguments);
      }, e._ConnectedComponent_GetX = function() {
        return (e._ConnectedComponent_GetX = e.asm.on).apply(null, arguments);
      }, e._ConnectedComponent_GetY = function() {
        return (e._ConnectedComponent_GetY = e.asm.pn).apply(null, arguments);
      }, e._ConnectedComponent_GetInstance = function() {
        return (e._ConnectedComponent_GetInstance = e.asm.qn).apply(null, arguments);
      }, e._MagickGeometry_Create = function() {
        return (e._MagickGeometry_Create = e.asm.rn).apply(null, arguments);
      }, e._MagickGeometry_Dispose = function() {
        return (e._MagickGeometry_Dispose = e.asm.sn).apply(null, arguments);
      }, e._MagickGeometry_X_Get = function() {
        return (e._MagickGeometry_X_Get = e.asm.tn).apply(null, arguments);
      }, e._MagickGeometry_Y_Get = function() {
        return (e._MagickGeometry_Y_Get = e.asm.un).apply(null, arguments);
      }, e._MagickGeometry_Width_Get = function() {
        return (e._MagickGeometry_Width_Get = e.asm.vn).apply(null, arguments);
      }, e._MagickGeometry_Height_Get = function() {
        return (e._MagickGeometry_Height_Get = e.asm.wn).apply(null, arguments);
      }, e._MagickGeometry_Initialize = function() {
        return (e._MagickGeometry_Initialize = e.asm.xn).apply(null, arguments);
      }, e._MagickRectangle_Dispose = function() {
        return (e._MagickRectangle_Dispose = e.asm.yn).apply(null, arguments);
      }, e._MagickRectangle_X_Get = function() {
        return (e._MagickRectangle_X_Get = e.asm.zn).apply(null, arguments);
      }, e._MagickRectangle_X_Set = function() {
        return (e._MagickRectangle_X_Set = e.asm.An).apply(null, arguments);
      }, e._MagickRectangle_Y_Get = function() {
        return (e._MagickRectangle_Y_Get = e.asm.Bn).apply(null, arguments);
      }, e._MagickRectangle_Y_Set = function() {
        return (e._MagickRectangle_Y_Set = e.asm.Cn).apply(null, arguments);
      }, e._MagickRectangle_Width_Get = function() {
        return (e._MagickRectangle_Width_Get = e.asm.Dn).apply(null, arguments);
      }, e._MagickRectangle_Width_Set = function() {
        return (e._MagickRectangle_Width_Set = e.asm.En).apply(null, arguments);
      }, e._MagickRectangle_Height_Get = function() {
        return (e._MagickRectangle_Height_Get = e.asm.Fn).apply(null, arguments);
      }, e._MagickRectangle_Height_Set = function() {
        return (e._MagickRectangle_Height_Set = e.asm.Gn).apply(null, arguments);
      }, e._MagickRectangle_FromPageSize = function() {
        return (e._MagickRectangle_FromPageSize = e.asm.Hn).apply(null, arguments);
      }, e._OffsetInfo_Create = function() {
        return (e._OffsetInfo_Create = e.asm.In).apply(null, arguments);
      }, e._OffsetInfo_Dispose = function() {
        return (e._OffsetInfo_Dispose = e.asm.Jn).apply(null, arguments);
      }, e._OffsetInfo_SetX = function() {
        return (e._OffsetInfo_SetX = e.asm.Kn).apply(null, arguments);
      }, e._OffsetInfo_SetY = function() {
        return (e._OffsetInfo_SetY = e.asm.Ln).apply(null, arguments);
      }, e._PointInfo_X_Get = function() {
        return (e._PointInfo_X_Get = e.asm.Mn).apply(null, arguments);
      }, e._PointInfo_Y_Get = function() {
        return (e._PointInfo_Y_Get = e.asm.Nn).apply(null, arguments);
      }, e._PrimaryInfo_Dispose = function() {
        return (e._PrimaryInfo_Dispose = e.asm.On).apply(null, arguments);
      }, e._PrimaryInfo_X_Get = function() {
        return (e._PrimaryInfo_X_Get = e.asm.Pn).apply(null, arguments);
      }, e._PrimaryInfo_X_Set = function() {
        return (e._PrimaryInfo_X_Set = e.asm.Qn).apply(null, arguments);
      }, e._PrimaryInfo_Y_Get = function() {
        return (e._PrimaryInfo_Y_Get = e.asm.Rn).apply(null, arguments);
      }, e._PrimaryInfo_Y_Set = function() {
        return (e._PrimaryInfo_Y_Set = e.asm.Sn).apply(null, arguments);
      }, e._PrimaryInfo_Z_Get = function() {
        return (e._PrimaryInfo_Z_Get = e.asm.Tn).apply(null, arguments);
      }, e._PrimaryInfo_Z_Set = function() {
        return (e._PrimaryInfo_Z_Set = e.asm.Un).apply(null, arguments);
      }, e._StringInfo_Length_Get = function() {
        return (e._StringInfo_Length_Get = e.asm.Vn).apply(null, arguments);
      }, e._StringInfo_Datum_Get = function() {
        return (e._StringInfo_Datum_Get = e.asm.Wn).apply(null, arguments);
      }, e._TypeMetric_Dispose = function() {
        return (e._TypeMetric_Dispose = e.asm.Xn).apply(null, arguments);
      }, e._TypeMetric_Ascent_Get = function() {
        return (e._TypeMetric_Ascent_Get = e.asm.Yn).apply(null, arguments);
      }, e._TypeMetric_Descent_Get = function() {
        return (e._TypeMetric_Descent_Get = e.asm.Zn).apply(null, arguments);
      }, e._TypeMetric_MaxHorizontalAdvance_Get = function() {
        return (e._TypeMetric_MaxHorizontalAdvance_Get = e.asm._n).apply(null, arguments);
      }, e._TypeMetric_TextHeight_Get = function() {
        return (e._TypeMetric_TextHeight_Get = e.asm.$n).apply(null, arguments);
      }, e._TypeMetric_TextWidth_Get = function() {
        return (e._TypeMetric_TextWidth_Get = e.asm.ao).apply(null, arguments);
      }, e._TypeMetric_UnderlinePosition_Get = function() {
        return (e._TypeMetric_UnderlinePosition_Get = e.asm.bo).apply(null, arguments);
      }, e._TypeMetric_UnderlineThickness_Get = function() {
        return (e._TypeMetric_UnderlineThickness_Get = e.asm.co).apply(null, arguments);
      };
      var sr = function() {
        return (sr = e.asm.eo).apply(null, arguments);
      }, Wt = function() {
        return (Wt = e.asm.fo).apply(null, arguments);
      }, ln = function() {
        return (ln = e.asm.go).apply(null, arguments);
      }, Bt = function() {
        return (Bt = e.asm.ho).apply(null, arguments);
      }, ur = function() {
        return (ur = e.asm.io).apply(null, arguments);
      };
      e.__embind_initialize_bindings = function() {
        return (e.__embind_initialize_bindings = e.asm.jo).apply(null, arguments);
      };
      var or = function() {
        return (or = e.asm.ko).apply(null, arguments);
      }, z = function() {
        return (z = e.asm.lo).apply(null, arguments);
      }, H = function() {
        return (H = e.asm.mo).apply(null, arguments);
      }, F = function() {
        return (F = e.asm.no).apply(null, arguments);
      }, _r = function() {
        return (_r = e.asm.oo).apply(null, arguments);
      }, lr = function() {
        return (lr = e.asm.po).apply(null, arguments);
      }, cr = e.dynCall_jiji = function() {
        return (cr = e.dynCall_jiji = e.asm.qo).apply(null, arguments);
      }, gr = e.dynCall_ji = function() {
        return (gr = e.dynCall_ji = e.asm.ro).apply(null, arguments);
      }, fr = e.dynCall_iiijj = function() {
        return (fr = e.dynCall_iiijj = e.asm.so).apply(null, arguments);
      }, mr = e.dynCall_iij = function() {
        return (mr = e.dynCall_iij = e.asm.to).apply(null, arguments);
      }, pr = e.dynCall_vij = function() {
        return (pr = e.dynCall_vij = e.asm.uo).apply(null, arguments);
      };
      e.dynCall_iji = function() {
        return (e.dynCall_iji = e.asm.vo).apply(null, arguments);
      }, e.dynCall_jji = function() {
        return (e.dynCall_jji = e.asm.wo).apply(null, arguments);
      }, e.dynCall_viij = function() {
        return (e.dynCall_viij = e.asm.xo).apply(null, arguments);
      }, e.dynCall_jjii = function() {
        return (e.dynCall_jjii = e.asm.yo).apply(null, arguments);
      }, e.dynCall_iiji = function() {
        return (e.dynCall_iiji = e.asm.zo).apply(null, arguments);
      }, e.dynCall_jiiiii = function() {
        return (e.dynCall_jiiiii = e.asm.Ao).apply(null, arguments);
      };
      var dr = e.dynCall_iiiijj = function() {
        return (dr = e.dynCall_iiiijj = e.asm.Bo).apply(null, arguments);
      }, hr = e.dynCall_ij = function() {
        return (hr = e.dynCall_ij = e.asm.Co).apply(null, arguments);
      };
      e.dynCall_iiijii = function() {
        return (e.dynCall_iiijii = e.asm.Do).apply(null, arguments);
      }, e.dynCall_jiiiiiiiii = function() {
        return (e.dynCall_jiiiiiiiii = e.asm.Eo).apply(null, arguments);
      }, e.dynCall_jiiiiii = function() {
        return (e.dynCall_jiiiiii = e.asm.Fo).apply(null, arguments);
      }, e.dynCall_jiiiiiiii = function() {
        return (e.dynCall_jiiiiiiii = e.asm.Go).apply(null, arguments);
      }, e.dynCall_viijii = function() {
        return (e.dynCall_viijii = e.asm.Ho).apply(null, arguments);
      }, e.dynCall_iiiiij = function() {
        return (e.dynCall_iiiiij = e.asm.Io).apply(null, arguments);
      }, e.dynCall_iiiiijj = function() {
        return (e.dynCall_iiiiijj = e.asm.Jo).apply(null, arguments);
      }, e.dynCall_iiiiiijj = function() {
        return (e.dynCall_iiiiiijj = e.asm.Ko).apply(null, arguments);
      }, e.___emscripten_embedded_file_data = 4504960;
      function Bs(t, r, a, s) {
        var o = H();
        try {
          Q(t)(r, a, s);
        } catch (l) {
          if (F(o), l !== l + 0)
            throw l;
          z(1, 0);
        }
      }
      function xs(t, r, a, s) {
        var o = H();
        try {
          return Q(t)(r, a, s);
        } catch (l) {
          if (F(o), l !== l + 0)
            throw l;
          z(1, 0);
        }
      }
      function Ns(t, r, a) {
        var s = H();
        try {
          return Q(t)(r, a);
        } catch (o) {
          if (F(s), o !== o + 0)
            throw o;
          z(1, 0);
        }
      }
      function zs(t, r) {
        var a = H();
        try {
          return Q(t)(r);
        } catch (s) {
          if (F(a), s !== s + 0)
            throw s;
          z(1, 0);
        }
      }
      function Hs(t, r) {
        var a = H();
        try {
          Q(t)(r);
        } catch (s) {
          if (F(a), s !== s + 0)
            throw s;
          z(1, 0);
        }
      }
      function Fs(t, r, a) {
        var s = H();
        try {
          Q(t)(r, a);
        } catch (o) {
          if (F(s), o !== o + 0)
            throw o;
          z(1, 0);
        }
      }
      function Us(t, r, a, s, o) {
        var l = H();
        try {
          Q(t)(r, a, s, o);
        } catch (c) {
          if (F(l), c !== c + 0)
            throw c;
          z(1, 0);
        }
      }
      function js(t, r, a, s, o) {
        var l = H();
        try {
          return Q(t)(r, a, s, o);
        } catch (c) {
          if (F(l), c !== c + 0)
            throw c;
          z(1, 0);
        }
      }
      function $s(t, r, a, s, o, l, c, m, d) {
        var h = H();
        try {
          return Q(t)(r, a, s, o, l, c, m, d);
        } catch (k) {
          if (F(h), k !== k + 0)
            throw k;
          z(1, 0);
        }
      }
      function Ys(t) {
        var r = H();
        try {
          return Q(t)();
        } catch (a) {
          if (F(r), a !== a + 0)
            throw a;
          z(1, 0);
        }
      }
      function Xs(t, r, a, s, o, l, c) {
        var m = H();
        try {
          return Q(t)(r, a, s, o, l, c);
        } catch (d) {
          if (F(m), d !== d + 0)
            throw d;
          z(1, 0);
        }
      }
      function qs(t, r, a, s, o, l) {
        var c = H();
        try {
          return Q(t)(r, a, s, o, l);
        } catch (m) {
          if (F(c), m !== m + 0)
            throw m;
          z(1, 0);
        }
      }
      function Vs(t, r, a) {
        var s = H();
        try {
          return Q(t)(r, a);
        } catch (o) {
          if (F(s), o !== o + 0)
            throw o;
          z(1, 0);
        }
      }
      function Qs(t) {
        var r = H();
        try {
          Q(t)();
        } catch (a) {
          if (F(r), a !== a + 0)
            throw a;
          z(1, 0);
        }
      }
      function Js(t, r, a, s, o, l) {
        var c = H();
        try {
          Q(t)(r, a, s, o, l);
        } catch (m) {
          if (F(c), m !== m + 0)
            throw m;
          z(1, 0);
        }
      }
      function Ks(t, r, a, s, o, l, c, m) {
        var d = H();
        try {
          return Q(t)(r, a, s, o, l, c, m);
        } catch (h) {
          if (F(d), h !== h + 0)
            throw h;
          z(1, 0);
        }
      }
      function Zs(t, r, a, s, o, l, c, m, d, h) {
        var k = H();
        try {
          return Q(t)(r, a, s, o, l, c, m, d, h);
        } catch (C) {
          if (F(k), C !== C + 0)
            throw C;
          z(1, 0);
        }
      }
      function Os(t, r, a, s) {
        var o = H();
        try {
          Q(t)(r, a, s);
        } catch (l) {
          if (F(o), l !== l + 0)
            throw l;
          z(1, 0);
        }
      }
      function eu(t, r, a, s, o, l, c, m, d, h, k) {
        var C = H();
        try {
          Q(t)(r, a, s, o, l, c, m, d, h, k);
        } catch (D) {
          if (F(C), D !== D + 0)
            throw D;
          z(1, 0);
        }
      }
      function tu(t, r, a, s, o, l, c, m, d, h) {
        var k = H();
        try {
          Q(t)(r, a, s, o, l, c, m, d, h);
        } catch (C) {
          if (F(k), C !== C + 0)
            throw C;
          z(1, 0);
        }
      }
      function nu(t, r, a, s, o, l, c) {
        var m = H();
        try {
          Q(t)(r, a, s, o, l, c);
        } catch (d) {
          if (F(m), d !== d + 0)
            throw d;
          z(1, 0);
        }
      }
      function ru(t, r, a, s, o, l, c, m) {
        var d = H();
        try {
          Q(t)(r, a, s, o, l, c, m);
        } catch (h) {
          if (F(d), h !== h + 0)
            throw h;
          z(1, 0);
        }
      }
      function au(t, r, a, s, o, l, c, m, d, h, k, C) {
        var D = H();
        try {
          return Q(t)(r, a, s, o, l, c, m, d, h, k, C);
        } catch (P) {
          if (F(D), P !== P + 0)
            throw P;
          z(1, 0);
        }
      }
      function iu(t, r, a, s, o) {
        var l = H();
        try {
          return cr(t, r, a, s, o);
        } catch (c) {
          if (F(l), c !== c + 0)
            throw c;
          z(1, 0);
        }
      }
      function su(t, r) {
        var a = H();
        try {
          return gr(t, r);
        } catch (s) {
          if (F(a), s !== s + 0)
            throw s;
          z(1, 0);
        }
      }
      function uu(t, r, a, s, o, l, c) {
        var m = H();
        try {
          return fr(t, r, a, s, o, l, c);
        } catch (d) {
          if (F(m), d !== d + 0)
            throw d;
          z(1, 0);
        }
      }
      function ou(t, r, a, s) {
        var o = H();
        try {
          return mr(t, r, a, s);
        } catch (l) {
          if (F(o), l !== l + 0)
            throw l;
          z(1, 0);
        }
      }
      function _u(t, r, a, s) {
        var o = H();
        try {
          pr(t, r, a, s);
        } catch (l) {
          if (F(o), l !== l + 0)
            throw l;
          z(1, 0);
        }
      }
      function lu(t, r, a, s, o, l, c, m) {
        var d = H();
        try {
          return dr(t, r, a, s, o, l, c, m);
        } catch (h) {
          if (F(d), h !== h + 0)
            throw h;
          z(1, 0);
        }
      }
      function cu(t, r, a) {
        var s = H();
        try {
          return hr(t, r, a);
        } catch (o) {
          if (F(s), o !== o + 0)
            throw o;
          z(1, 0);
        }
      }
      e.addRunDependency = kt, e.removeRunDependency = at, e.FS_createPath = _.createPath, e.FS_createDataFile = _.createDataFile, e.FS_createLazyFile = _.createLazyFile, e.FS_createDevice = _.createDevice, e.FS_unlink = _.unlink, e.addFunction = Ls, e.setValue = $r, e.getValue = jr, e.UTF8ToString = Se, e.stringToUTF8 = Ve, e.lengthBytesUTF8 = xe, e.FS_createPreloadedFile = _.createPreloadedFile, e.FS = _;
      var xt;
      rt = function t() {
        xt || yr(), xt || (rt = t);
      };
      function yr() {
        if (Be > 0 || (Ar(), Be > 0))
          return;
        function t() {
          xt || (xt = !0, e.calledRun = !0, !Yt && (Tr(), v(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), Lr()));
        }
        e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            e.setStatus("");
          }, 1), t();
        }, 1)) : t();
      }
      if (e.preInit)
        for (typeof e.preInit == "function" && (e.preInit = [e.preInit]); e.preInit.length > 0; )
          e.preInit.pop()();
      return yr(), p.ready;
    };
  })();
  n.exports = u;
})(Sr);
var mu = Sr.exports;
const pu = /* @__PURE__ */ fu(mu);
var ie = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.Red = 1] = "Red", n[n.Gray = 1] = "Gray", n[n.Cyan = 1] = "Cyan", n[n.Green = 2] = "Green", n[n.Magenta = 2] = "Magenta", n[n.Blue = 4] = "Blue", n[n.Yellow = 4] = "Yellow", n[n.Black = 8] = "Black", n[n.Alpha = 16] = "Alpha", n[n.Opacity = 16] = "Opacity", n[n.Index = 32] = "Index", n[n.Composite = 31] = "Composite", n[n.All = 134217727] = "All", n[n.TrueAlpha = 256] = "TrueAlpha", n[n.RGB = 7] = "RGB", n[n.CMYK = 15] = "CMYK", n[n.Grays = 1024] = "Grays", n[n.Sync = 131072] = "Sync", n[
  n.Default = 134217727
  /* All */
] = "Default", n))(ie || {});
class du {
  red;
  green;
  blue;
  white;
  constructor(i, u, g, p) {
    this.red = i, this.green = u, this.blue = g, this.white = p;
  }
}
var Ir = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.CMY = 1] = "CMY", n[n.CMYK = 2] = "CMYK", n[n.Gray = 3] = "Gray", n[n.HCL = 4] = "HCL", n[n.HCLp = 5] = "HCLp", n[n.HSB = 6] = "HSB", n[n.HSI = 7] = "HSI", n[n.HSL = 8] = "HSL", n[n.HSV = 9] = "HSV", n[n.HWB = 10] = "HWB", n[n.Lab = 11] = "Lab", n[n.LCH = 12] = "LCH", n[n.LCHab = 13] = "LCHab", n[n.LCHuv = 14] = "LCHuv", n[n.Log = 15] = "Log", n[n.LMS = 16] = "LMS", n[n.Luv = 17] = "Luv", n[n.OHTA = 18] = "OHTA", n[n.Rec601YCbCr = 19] = "Rec601YCbCr", n[n.Rec709YCbCr = 20] = "Rec709YCbCr", n[n.RGB = 21] = "RGB", n[n.scRGB = 22] = "scRGB", n[n.sRGB = 23] = "sRGB", n[n.Transparent = 24] = "Transparent", n[n.XyY = 25] = "XyY", n[n.XYZ = 26] = "XYZ", n[n.YCbCr = 27] = "YCbCr", n[n.YCC = 28] = "YCC", n[n.YDbDr = 29] = "YDbDr", n[n.YIQ = 30] = "YIQ", n[n.YPbPr = 31] = "YPbPr", n[n.YUV = 32] = "YUV", n[n.LinearGray = 33] = "LinearGray", n))(Ir || {}), Nt = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.Alpha = 1] = "Alpha", n[n.Atop = 2] = "Atop", n[n.Blend = 3] = "Blend", n[n.Blur = 4] = "Blur", n[n.Bumpmap = 5] = "Bumpmap", n[n.ChangeMask = 6] = "ChangeMask", n[n.Clear = 7] = "Clear", n[n.ColorBurn = 8] = "ColorBurn", n[n.ColorDodge = 9] = "ColorDodge", n[n.Colorize = 10] = "Colorize", n[n.CopyBlack = 11] = "CopyBlack", n[n.CopyBlue = 12] = "CopyBlue", n[n.Copy = 13] = "Copy", n[n.CopyCyan = 14] = "CopyCyan", n[n.CopyGreen = 15] = "CopyGreen", n[n.CopyMagenta = 16] = "CopyMagenta", n[n.CopyAlpha = 17] = "CopyAlpha", n[n.CopyRed = 18] = "CopyRed", n[n.CopyYellow = 19] = "CopyYellow", n[n.Darken = 20] = "Darken", n[n.DarkenIntensity = 21] = "DarkenIntensity", n[n.Difference = 22] = "Difference", n[n.Displace = 23] = "Displace", n[n.Dissolve = 24] = "Dissolve", n[n.Distort = 25] = "Distort", n[n.DivideDst = 26] = "DivideDst", n[n.DivideSrc = 27] = "DivideSrc", n[n.DstAtop = 28] = "DstAtop", n[n.Dst = 29] = "Dst", n[n.DstIn = 30] = "DstIn", n[n.DstOut = 31] = "DstOut", n[n.DstOver = 32] = "DstOver", n[n.Exclusion = 33] = "Exclusion", n[n.HardLight = 34] = "HardLight", n[n.HardMix = 35] = "HardMix", n[n.Hue = 36] = "Hue", n[n.In = 37] = "In", n[n.Intensity = 38] = "Intensity", n[n.Lighten = 39] = "Lighten", n[n.LightenIntensity = 40] = "LightenIntensity", n[n.LinearBurn = 41] = "LinearBurn", n[n.LinearDodge = 42] = "LinearDodge", n[n.LinearLight = 43] = "LinearLight", n[n.Luminize = 44] = "Luminize", n[n.Mathematics = 45] = "Mathematics", n[n.MinusDst = 46] = "MinusDst", n[n.MinusSrc = 47] = "MinusSrc", n[n.Modulate = 48] = "Modulate", n[n.ModulusAdd = 49] = "ModulusAdd", n[n.ModulusSubtract = 50] = "ModulusSubtract", n[n.Multiply = 51] = "Multiply", n[n.No = 52] = "No", n[n.Out = 53] = "Out", n[n.Over = 54] = "Over", n[n.Overlay = 55] = "Overlay", n[n.PegtopLight = 56] = "PegtopLight", n[n.PinLight = 57] = "PinLight", n[n.Plus = 58] = "Plus", n[n.Replace = 59] = "Replace", n[n.Saturate = 60] = "Saturate", n[n.Screen = 61] = "Screen", n[n.SoftLight = 62] = "SoftLight", n[n.SrcAtop = 63] = "SrcAtop", n[n.Src = 64] = "Src", n[n.SrcIn = 65] = "SrcIn", n[n.SrcOut = 66] = "SrcOut", n[n.SrcOver = 67] = "SrcOver", n[n.Threshold = 68] = "Threshold", n[n.VividLight = 69] = "VividLight", n[n.Xor = 70] = "Xor", n[n.Stereo = 71] = "Stereo", n))(Nt || {}), Mr = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.PixelsPerInch = 1] = "PixelsPerInch", n[n.PixelsPerCentimeter = 2] = "PixelsPerCentimeter", n))(Mr || {});
class hu {
  constructor(i, u, g) {
    u === void 0 ? (this.x = i, this.y = i, this.units = Mr.PixelsPerInch) : g !== void 0 ? (this.x = i, this.y = u, this.units = g) : (this.x = i, this.y = i, this.units = u);
  }
  x;
  y;
  units;
}
class be {
  static _disposeAfterExecution(i, u) {
    try {
      const g = u(i);
      return g instanceof Promise ? Promise.resolve(g).then((p) => (i.dispose(), p)) : (i.dispose(), g);
    } catch (g) {
      throw i.dispose(), g;
    }
  }
}
class Dr {
  _pointer;
  _bytes;
  _func;
  constructor(i, u, g) {
    this._pointer = i, this._func = g, this._bytes = f._api.HEAPU8.subarray(i, i + u);
  }
  func(i) {
    return i._bytes === void 0 ? i._func(new Uint8Array()) : i._func(i._bytes);
  }
  dispose() {
    this._pointer = f._api._MagickMemory_Relinquish(this._pointer);
  }
}
class yu {
  eventType;
  message;
  constructor(i, u) {
    this.eventType = i, this.message = u ?? "";
  }
}
var Ft = /* @__PURE__ */ ((n) => (n[n.Error = 400] = "Error", n[n.ResourceLimitError = 400] = "ResourceLimitError", n[n.TypeError = 405] = "TypeError", n[n.OptionError = 410] = "OptionError", n[n.DelegateError = 415] = "DelegateError", n[n.MissingDelegateError = 420] = "MissingDelegateError", n[n.CorruptImageError = 425] = "CorruptImageError", n[n.FileOpenError = 430] = "FileOpenError", n[n.BlobError = 435] = "BlobError", n[n.StreamError = 440] = "StreamError", n[n.CacheError = 445] = "CacheError", n[n.CoderError = 450] = "CoderError", n[n.FilterError = 452] = "FilterError", n[n.ModuleError = 455] = "ModuleError", n[n.DrawError = 460] = "DrawError", n[n.ImageError = 465] = "ImageError", n[n.WandError = 470] = "WandError", n[n.RandomError = 475] = "RandomError", n[n.XServerError = 480] = "XServerError", n[n.MonitorError = 485] = "MonitorError", n[n.RegistryError = 490] = "RegistryError", n[n.ConfigureError = 495] = "ConfigureError", n[n.PolicyError = 499] = "PolicyError", n))(Ft || {});
class te extends Error {
  _severity;
  _relatedErrors = [];
  constructor(i, u = Ft.Error) {
    super(i), this._severity = u;
  }
  get relatedErrors() {
    return this._relatedErrors;
  }
  get severity() {
    return this._severity;
  }
  /** @internal */
  _setRelatedErrors(i) {
    this._relatedErrors = i;
  }
}
class Le {
  instance;
  constructor() {
    this.instance = f._api._malloc(4), f._api.setValue(this.instance, 0, "i32");
  }
  get ptr() {
    return this.instance;
  }
  get value() {
    return f._api.getValue(this.instance, "i32");
  }
  static use(i) {
    const u = new Le();
    try {
      return i(u);
    } finally {
      f._api._free(u.instance);
    }
  }
}
function me(n) {
  return n === 0 ? null : f._api.UTF8ToString(n);
}
function gn(n, i, u) {
  const g = n.lengthBytesUTF8(i) + 1, p = n._malloc(g);
  try {
    return n.stringToUTF8(i, p, g), u(p);
  } finally {
    n._free(p);
  }
}
function W(n, i) {
  return gn(f._api, n, i);
}
class S {
  pointer;
  constructor(i) {
    this.pointer = i;
  }
  get ptr() {
    return this.pointer.ptr;
  }
  check(i, u) {
    return this.isError() ? u() : i();
  }
  static usePointer(i) {
    return Le.use((u) => {
      const g = i(u.ptr);
      return S.checkException(u, g);
    });
  }
  static use(i) {
    return Le.use((u) => {
      const g = i(new S(u));
      return S.checkException(u, g);
    });
  }
  static checkException(i, u) {
    if (!S.isRaised(i))
      return u;
    const g = S.getErrorSeverity(i.value);
    return g >= Ft.Error ? S.throw(i, g) : S.dispose(i), u;
  }
  isError() {
    return S.isRaised(this.pointer) ? S.getErrorSeverity(this.pointer.value) >= Ft.Error : !1;
  }
  static getErrorSeverity(i) {
    return f._api._MagickExceptionHelper_Severity(i);
  }
  static isRaised(i) {
    return i.value !== 0;
  }
  static throw(i, u) {
    const g = S.createError(i.value, u);
    throw S.dispose(i), g;
  }
  static createError(i, u) {
    const g = S.getMessage(i), p = new te(g, u), e = f._api._MagickExceptionHelper_RelatedCount(i);
    if (e === 0)
      return p;
    const v = [];
    for (let I = 0; I < e; I++) {
      const G = f._api._MagickExceptionHelper_Related(i, I), B = S.getErrorSeverity(G), K = S.createError(G, B);
      v.push(K);
    }
    return p._setRelatedErrors(v), p;
  }
  static getMessage(i) {
    const u = f._api._MagickExceptionHelper_Message(i), g = f._api._MagickExceptionHelper_Description(i);
    let p = me(u);
    return g !== 0 && (p += `(${f._api.UTF8ToString(g)})`), p;
  }
  static dispose(i) {
    f._api._MagickExceptionHelper_Dispose(i.value);
  }
}
var Te = /* @__PURE__ */ ((n) => (n.Unknown = "UNKNOWN", n.ThreeFr = "3FR", n.ThreeG2 = "3G2", n.ThreeGp = "3GP", n.A = "A", n.Aai = "AAI", n.Ai = "AI", n.Apng = "APNG", n.Art = "ART", n.Arw = "ARW", n.Ashlar = "ASHLAR", n.Avi = "AVI", n.Avif = "AVIF", n.Avs = "AVS", n.B = "B", n.Bayer = "BAYER", n.Bayera = "BAYERA", n.Bgr = "BGR", n.Bgra = "BGRA", n.Bgro = "BGRO", n.Bmp = "BMP", n.Bmp2 = "BMP2", n.Bmp3 = "BMP3", n.Brf = "BRF", n.C = "C", n.Cal = "CAL", n.Cals = "CALS", n.Canvas = "CANVAS", n.Caption = "CAPTION", n.Cin = "CIN", n.Cip = "CIP", n.Clip = "CLIP", n.Cmyk = "CMYK", n.Cmyka = "CMYKA", n.Cr2 = "CR2", n.Cr3 = "CR3", n.Crw = "CRW", n.Cube = "CUBE", n.Cur = "CUR", n.Cut = "CUT", n.Data = "DATA", n.Dcm = "DCM", n.Dcr = "DCR", n.Dcraw = "DCRAW", n.Dcx = "DCX", n.Dds = "DDS", n.Dfont = "DFONT", n.Dng = "DNG", n.Dpx = "DPX", n.Dxt1 = "DXT1", n.Dxt5 = "DXT5", n.Epdf = "EPDF", n.Epi = "EPI", n.Eps = "EPS", n.Eps2 = "EPS2", n.Eps3 = "EPS3", n.Epsf = "EPSF", n.Epsi = "EPSI", n.Ept = "EPT", n.Ept2 = "EPT2", n.Ept3 = "EPT3", n.Erf = "ERF", n.Exr = "EXR", n.Farbfeld = "FARBFELD", n.Fax = "FAX", n.FF = "FF", n.File = "FILE", n.Fits = "FITS", n.Fl32 = "FL32", n.Flv = "FLV", n.Fractal = "FRACTAL", n.Ftp = "FTP", n.Ftxt = "FTXT", n.Fts = "FTS", n.G = "G", n.G3 = "G3", n.G4 = "G4", n.Gif = "GIF", n.Gif87 = "GIF87", n.Gradient = "GRADIENT", n.Gray = "GRAY", n.Graya = "GRAYA", n.Group4 = "GROUP4", n.Hald = "HALD", n.Hdr = "HDR", n.Heic = "HEIC", n.Heif = "HEIF", n.Histogram = "HISTOGRAM", n.Hrz = "HRZ", n.Htm = "HTM", n.Html = "HTML", n.Http = "HTTP", n.Https = "HTTPS", n.Icb = "ICB", n.Ico = "ICO", n.Icon = "ICON", n.Iiq = "IIQ", n.Info = "INFO", n.Inline = "INLINE", n.Ipl = "IPL", n.Isobrl = "ISOBRL", n.Isobrl6 = "ISOBRL6", n.J2c = "J2C", n.J2k = "J2K", n.Jng = "JNG", n.Jnx = "JNX", n.Jp2 = "JP2", n.Jpc = "JPC", n.Jpe = "JPE", n.Jpeg = "JPEG", n.Jpg = "JPG", n.Jpm = "JPM", n.Jps = "JPS", n.Jpt = "JPT", n.Json = "JSON", n.Jxl = "JXL", n.K = "K", n.K25 = "K25", n.Kdc = "KDC", n.Label = "LABEL", n.M = "M", n.M2v = "M2V", n.M4v = "M4V", n.Mac = "MAC", n.Map = "MAP", n.Mask = "MASK", n.Mat = "MAT", n.Matte = "MATTE", n.Mef = "MEF", n.Miff = "MIFF", n.Mkv = "MKV", n.Mng = "MNG", n.Mono = "MONO", n.Mov = "MOV", n.Mp4 = "MP4", n.Mpc = "MPC", n.Mpeg = "MPEG", n.Mpg = "MPG", n.Mpo = "MPO", n.Mrw = "MRW", n.Msl = "MSL", n.Msvg = "MSVG", n.Mtv = "MTV", n.Mvg = "MVG", n.Nef = "NEF", n.Nrw = "NRW", n.Null = "NULL", n.O = "O", n.Ora = "ORA", n.Orf = "ORF", n.Otb = "OTB", n.Otf = "OTF", n.Pal = "PAL", n.Palm = "PALM", n.Pam = "PAM", n.Pango = "PANGO", n.Pattern = "PATTERN", n.Pbm = "PBM", n.Pcd = "PCD", n.Pcds = "PCDS", n.Pcl = "PCL", n.Pct = "PCT", n.Pcx = "PCX", n.Pdb = "PDB", n.Pdf = "PDF", n.Pdfa = "PDFA", n.Pef = "PEF", n.Pes = "PES", n.Pfa = "PFA", n.Pfb = "PFB", n.Pfm = "PFM", n.Pgm = "PGM", n.Pgx = "PGX", n.Phm = "PHM", n.Picon = "PICON", n.Pict = "PICT", n.Pix = "PIX", n.Pjpeg = "PJPEG", n.Plasma = "PLASMA", n.Png = "PNG", n.Png00 = "PNG00", n.Png24 = "PNG24", n.Png32 = "PNG32", n.Png48 = "PNG48", n.Png64 = "PNG64", n.Png8 = "PNG8", n.Pnm = "PNM", n.Pocketmod = "POCKETMOD", n.Ppm = "PPM", n.Ps = "PS", n.Ps2 = "PS2", n.Ps3 = "PS3", n.Psb = "PSB", n.Psd = "PSD", n.Ptif = "PTIF", n.Pwp = "PWP", n.Qoi = "QOI", n.R = "R", n.RadialGradient = "RADIAL-GRADIENT", n.Raf = "RAF", n.Ras = "RAS", n.Raw = "RAW", n.Rgb = "RGB", n.Rgb565 = "RGB565", n.Rgba = "RGBA", n.Rgbo = "RGBO", n.Rgf = "RGF", n.Rla = "RLA", n.Rle = "RLE", n.Rmf = "RMF", n.Rw2 = "RW2", n.Scr = "SCR", n.Screenshot = "SCREENSHOT", n.Sct = "SCT", n.Sfw = "SFW", n.Sgi = "SGI", n.Shtml = "SHTML", n.Six = "SIX", n.Sixel = "SIXEL", n.SparseColor = "SPARSE-COLOR", n.Sr2 = "SR2", n.Srf = "SRF", n.Stegano = "STEGANO", n.StrImg = "STRIMG", n.Sun = "SUN", n.Svg = "SVG", n.Svgz = "SVGZ", n.Text = "TEXT", n.Tga = "TGA", n.Thumbnail = "THUMBNAIL", n.Tiff = "TIFF", n.Tiff64 = "TIFF64", n.Tile = "TILE", n.Tim = "TIM", n.Tm2 = "TM2", n.Ttc = "TTC", n.Ttf = "TTF", n.Txt = "TXT", n.Ubrl = "UBRL", n.Ubrl6 = "UBRL6", n.Uil = "UIL", n.Uyvy = "UYVY", n.Vda = "VDA", n.Vicar = "VICAR", n.Vid = "VID", n.Viff = "VIFF", n.Vips = "VIPS", n.Vst = "VST", n.Wbmp = "WBMP", n.Webp = "WEBP", n.Webm = "WEBM", n.Wmv = "WMV", n.Wpg = "WPG", n.X3f = "X3F", n.Xbm = "XBM", n.Xc = "XC", n.Xcf = "XCF", n.Xpm = "XPM", n.Xps = "XPS", n.Xv = "XV", n.Y = "Y", n.Yaml = "YAML", n.Ycbcr = "YCbCr", n.Ycbcra = "YCbCrA", n.Yuv = "YUV", n))(Te || {});
class Pe {
  _format;
  _description;
  _supportsMultipleFrames;
  _supportsReading;
  _supportsWriting;
  static _all;
  constructor(i, u, g, p, e) {
    this._format = i, this._description = u, this._supportsMultipleFrames = g, this._supportsReading = p, this._supportsWriting = e;
  }
  get description() {
    return this._description;
  }
  get format() {
    return this._format;
  }
  get supportsMultipleFrames() {
    return this._supportsMultipleFrames;
  }
  get supportsReading() {
    return this._supportsReading;
  }
  get supportsWriting() {
    return this._supportsWriting;
  }
  static get all() {
    return Pe._all === void 0 && (Pe._all = Pe.loadFormats()), Pe._all;
  }
  static create(i) {
    for (const u of Pe.all)
      if (u.format === i)
        return u;
    throw new te(`unable to get format info for ${i}`);
  }
  static loadFormats() {
    return S.usePointer((i) => Le.use((u) => {
      const g = f._api._MagickFormatInfo_CreateList(u.ptr, i), p = u.value;
      try {
        const e = new Array(p), v = Object.values(Te);
        for (let I = 0; I < p; I++) {
          const G = f._api._MagickFormatInfo_GetInfo(g, I, i), B = me(f._api._MagickFormatInfo_Format_Get(G)), K = Pe.convertFormat(B, v), _e = me(f._api._MagickFormatInfo_Description_Get(G), ""), pe = f._api._MagickFormatInfo_SupportsMultipleFrames_Get(G) == 1, de = f._api._MagickFormatInfo_SupportsReading_Get(G) == 1, ae = f._api._MagickFormatInfo_SupportsWriting_Get(G) == 1;
          e[I] = new Pe(K, _e, pe, de, ae);
        }
        return e;
      } finally {
        f._api._MagickFormatInfo_DisposeList(g, p);
      }
    }));
  }
  static convertFormat(i, u) {
    return i === null ? Te.Unknown : u.includes(i) ? i : Te.Unknown;
  }
}
var Z = /* @__PURE__ */ ((n) => (n[n.None = 0] = "None", n[n.Accelerate = 1] = "Accelerate", n[n.Annotate = 2] = "Annotate", n[n.Blob = 4] = "Blob", n[n.Cache = 8] = "Cache", n[n.Coder = 16] = "Coder", n[n.Configure = 32] = "Configure", n[n.Deprecate = 64] = "Deprecate", n[n.Draw = 128] = "Draw", n[n.Exception = 256] = "Exception", n[n.Image = 512] = "Image", n[n.Locale = 1024] = "Locale", n[n.Module = 2048] = "Module", n[n.Pixel = 4096] = "Pixel", n[n.Policy = 8192] = "Policy", n[n.Resource = 16384] = "Resource", n[n.Trace = 32768] = "Trace", n[n.Transform = 65536] = "Transform", n[n.User = 131072] = "User", n[n.Wand = 262144] = "Wand", n[n.Detailed = 2147450879] = "Detailed", n[n.All = 2147483647] = "All", n))(Z || {});
class ge {
  static _logDelegate;
  static get delegates() {
    return me(f._api._Magick_Delegates_Get());
  }
  static get features() {
    return me(f._api._Magick_Features_Get()).slice(0, -1);
  }
  static get imageMagickVersion() {
    return me(f._api._Magick_ImageMagickVersion_Get());
  }
  static get supportedFormats() {
    return Pe.all;
  }
  static onLog;
  static addFont(i, u) {
    const g = f._api.FS;
    g.analyzePath("/fonts").exists || g.mkdir("/fonts");
    const e = g.open(`/fonts/${i}`, "w");
    g.write(e, u, 0, u.length), g.close(e);
  }
  static setRandomSeed = (i) => f._api._Magick_SetRandomSeed(i);
  static setLogEvents(i) {
    ge._logDelegate === void 0 && (ge._logDelegate = f._api.addFunction(ge.logDelegate, "vii"), f._api._Magick_SetLogDelegate(ge._logDelegate));
    const u = ge.getEventTypeString(i);
    W(u, (g) => f._api._Magick_SetLogEvents(g));
  }
  /** @internal */
  static _getFontFileName(i) {
    const u = `/fonts/${i}`;
    if (!f._api.FS.analyzePath(u).exists)
      throw `Unable to find a font with the name '${i}', add it with Magick.addFont.`;
    return u;
  }
  static logDelegate(i, u) {
    ge.onLog !== void 0 && ge.onLog(new yu(i, me(u)));
  }
  static getEventTypeString(i) {
    if (i == Z.All)
      return "All,Trace";
    if (i == Z.Detailed)
      return "All";
    switch (i) {
      case Z.Accelerate:
        return "Accelerate";
      case Z.Annotate:
        return "Annotate";
      case Z.Blob:
        return "Blob";
      case Z.Cache:
        return "Cache";
      case Z.Coder:
        return "Coder";
      case Z.Configure:
        return "Configure";
      case Z.Deprecate:
        return "Deprecate";
      case Z.Draw:
        return "Draw";
      case Z.Exception:
        return "Exception";
      case Z.Image:
        return "Image";
      case Z.Locale:
        return "Locale";
      case Z.Module:
        return "Module";
      case Z.Pixel:
        return "Pixel";
      case Z.Policy:
        return "Policy";
      case Z.Resource:
        return "Resource";
      case Z.Trace:
        return "Trace";
      case Z.Transform:
        return "Transform";
      case Z.User:
        return "User";
      case Z.Wand:
        return "Wand";
      case Z.None:
      default:
        return "None";
    }
  }
}
class Oe {
  disposeMethod;
  instance;
  /** @internal */
  constructor(i, u) {
    this.instance = i, this.disposeMethod = u;
  }
  /** @internal */
  get _instance() {
    if (this.instance > 0)
      return this.instance;
    throw this.instance === -1 && this._instanceNotInitialized(), new te("instance is disposed");
  }
  /** @internal */
  set _instance(i) {
    this.disposeInstance(this.instance), this.instance = i;
  }
  dispose() {
    this.instance = this.disposeInstance(this.instance);
  }
  /** @internal */
  _setInstance(i, u) {
    u.check(() => {
      this.dispose(), this.instance = i;
    }, () => {
      this.disposeInstance(i);
    });
  }
  /** @internal */
  _instanceNotInitialized() {
    throw new te("instance is not initialized");
  }
  disposeInstance(i) {
    return i > 0 && this.disposeMethod(i), 0;
  }
}
class vu extends Oe {
  constructor(i) {
    const u = f._api._DrawingSettings_Create(), g = f._api._DrawingSettings_Dispose;
    if (super(u, g), i.fillColor !== void 0 && i.fillColor._use((p) => {
      f._api._DrawingSettings_FillColor_Set(this._instance, p);
    }), i.font !== void 0) {
      const p = ge._getFontFileName(i.font);
      W(p, (e) => {
        f._api._DrawingSettings_Font_Set(this._instance, e);
      });
    }
    i.fontPointsize !== void 0 && f._api._DrawingSettings_FontPointsize_Set(this._instance, i.fontPointsize), i.strokeColor !== void 0 && i.strokeColor._use((p) => {
      f._api._DrawingSettings_StrokeColor_Set(this._instance, p);
    }), i.strokeWidth !== void 0 && f._api._DrawingSettings_StrokeWidth_Set(this._instance, i.strokeWidth);
  }
}
class mn {
  backgroundColor;
  fillColor;
  font;
  fontPointsize;
  strokeColor;
  strokeWidth;
  /** @internal */
  static _create(i) {
    const u = new mn();
    return u.fillColor = i.fillColor, u.font = i.font, u.fontPointsize = i.fontPointsize, u.strokeColor = i.strokeColor, u.strokeWidth = i.strokeWidth, u;
  }
  /** @internal */
  _use(i) {
    const u = new vu(this);
    return be._disposeAfterExecution(u, i);
  }
}
class pn extends Oe {
  constructor(i, u) {
    const p = mn._create(u)._use((v) => f._api._DrawingWand_Create(i._instance, v._instance)), e = f._api._DrawingWand_Dispose;
    super(p, e);
  }
  color(i, u, g) {
    S.usePointer((p) => {
      f._api._DrawingWand_Color(this._instance, i, u, g, p);
    });
  }
  draw(i) {
    i.forEach((u) => {
      u.draw(this);
    }), S.usePointer((u) => {
      f._api._DrawingWand_Render(this._instance, u);
    });
  }
  fillColor(i) {
    S.usePointer((u) => {
      i._use((g) => {
        f._api._DrawingWand_FillColor(this._instance, g, u);
      });
    });
  }
  fillOpacity(i) {
    S.usePointer((u) => {
      f._api._DrawingWand_FillOpacity(this._instance, i, u);
    });
  }
  font(i) {
    S.usePointer((u) => {
      W(i, (g) => {
        f._api._DrawingWand_Font(this._instance, g, u);
      });
    });
  }
  fontPointSize(i) {
    S.usePointer((u) => {
      f._api._DrawingWand_FontPointSize(this._instance, i, u);
    });
  }
  gravity(i) {
    S.usePointer((u) => {
      f._api._DrawingWand_Gravity(this._instance, i, u);
    });
  }
  rectangle(i, u, g, p) {
    S.usePointer((e) => {
      f._api._DrawingWand_Rectangle(this._instance, i, u, g, p, e);
    });
  }
  roundRectangle(i, u, g, p, e, v) {
    S.usePointer((I) => {
      f._api._DrawingWand_RoundRectangle(this._instance, i, u, g, p, e, v, I);
    });
  }
  text(i, u, g) {
    S.usePointer((p) => {
      W(g, (e) => {
        f._api._DrawingWand_Text(this._instance, i, u, e, p);
      });
    });
  }
  textAlignment(i) {
    S.usePointer((u) => {
      f._api._DrawingWand_TextAlignment(this._instance, i, u);
    });
  }
  textAntialias(i) {
    S.usePointer((u) => {
      f._api._DrawingWand_TextAntialias(this._instance, i ? 1 : 0, u);
    });
  }
  textDecoration(i) {
    S.usePointer((u) => {
      f._api._DrawingWand_TextDecoration(this._instance, i, u);
    });
  }
  textInterlineSpacing(i) {
    S.usePointer((u) => {
      f._api._DrawingWand_TextInterlineSpacing(this._instance, i, u);
    });
  }
  textInterwordspacing(i) {
    S.usePointer((u) => {
      f._api._DrawingWand_TextInterwordSpacing(this._instance, i, u);
    });
  }
  textKerning(i) {
    S.usePointer((u) => {
      f._api._DrawingWand_TextKerning(this._instance, i, u);
    });
  }
  textUnderColor(i) {
    S.usePointer((u) => {
      i._use((g) => {
        f._api._DrawingWand_TextUnderColor(this._instance, g, u);
      });
    });
  }
  /** @internal */
  static _create(i, u) {
    return new pn(i, u);
  }
}
var zt = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.Forget = 0] = "Forget", n[n.Northwest = 1] = "Northwest", n[n.North = 2] = "North", n[n.Northeast = 3] = "Northeast", n[n.West = 4] = "West", n[n.Center = 5] = "Center", n[n.East = 6] = "East", n[n.Southwest = 7] = "Southwest", n[n.South = 8] = "South", n[n.Southeast = 9] = "Southeast", n))(zt || {});
function* wu(n) {
  for (const i of n)
    switch (i) {
      case 2:
        yield "north";
        break;
      case 3:
        yield "north", yield "east";
        break;
      case 1:
        yield "north", yield "west";
        break;
      case 6:
        yield "east";
        break;
      case 4:
        yield "west";
        break;
      case 8:
        yield "south";
        break;
      case 9:
        yield "south", yield "east";
        break;
      case 7:
        yield "south", yield "west";
    }
}
class ku {
  _data;
  constructor(i, u) {
    this.name = i, this._data = u;
  }
  name;
  getData() {
    return this._data;
  }
}
class je {
  static get depth() {
    return f._api._Quantum_Depth_Get();
  }
  static get max() {
    return f._api._Quantum_Max_Get();
  }
}
class y {
  _r = 0;
  _g = 0;
  _b = 0;
  _a = 0;
  _k = 0;
  _isCmyk = !1;
  constructor(i, u, g, p, e) {
    if (i !== void 0)
      if (typeof i == "string") {
        let v = 0;
        try {
          v = f._api._MagickColor_Create(), W(i, (I) => {
            if (f._api._MagickColor_Initialize(v, I) === 0)
              throw new te("invalid color specified");
            this.initialize(v);
          });
        } finally {
          f._api._free(v);
        }
      } else
        this._r = i, this._g = u ?? 0, this._b = g ?? 0, e === void 0 ? this._a = p ?? je.max : (this._k = p ?? 0, this._a = e, this._isCmyk = !0);
  }
  /** @internal */
  static _create(i) {
    const u = new y();
    return u.initialize(i), u;
  }
  get r() {
    return this._r;
  }
  set r(i) {
    this._r = i;
  }
  get g() {
    return this._g;
  }
  set g(i) {
    this._g = i;
  }
  get b() {
    return this._b;
  }
  set b(i) {
    this._b = i;
  }
  get a() {
    return this._a;
  }
  set a(i) {
    this._a = i;
  }
  get k() {
    return this._k;
  }
  set k(i) {
    this._k = i;
  }
  get isCmyk() {
    return this._isCmyk;
  }
  toShortString() {
    return this._a !== je.max ? this.toString() : this.isCmyk ? `cmyka(${this._r},${this._g},${this._b},${this._k})` : `#${this.toHex(this._r)}${this.toHex(this._g)}${this.toHex(this._b)}`;
  }
  toString() {
    return this.isCmyk ? `cmyka(${this._r},${this._g},${this._b},${this._k},${(this._a / je.max).toFixed(4)})` : `#${this.toHex(this._r)}${this.toHex(this._g)}${this.toHex(this._b)}${this.toHex(this._a)}`;
  }
  /** @internal */
  _use(i) {
    let u = 0;
    try {
      u = f._api._MagickColor_Create(), f._api._MagickColor_Red_Set(u, this._r), f._api._MagickColor_Green_Set(u, this._g), f._api._MagickColor_Blue_Set(u, this._b), f._api._MagickColor_Alpha_Set(u, this._a), f._api._MagickColor_IsCMYK_Set(u, this._isCmyk ? 1 : 0), i(u);
    } finally {
      f._api._free(u);
    }
  }
  initialize(i) {
    this._r = f._api._MagickColor_Red_Get(i), this._g = f._api._MagickColor_Green_Get(i), this._b = f._api._MagickColor_Blue_Get(i), this._a = f._api._MagickColor_Alpha_Get(i), this._isCmyk = f._api._MagickColor_IsCMYK_Get(i) === 1;
  }
  toHex(i) {
    return i.toString(16).padStart(2, "0");
  }
}
var Ce = /* @__PURE__ */ ((n) => (n[n.NoValue = 0] = "NoValue", n[n.PercentValue = 4096] = "PercentValue", n[n.IgnoreAspectRatio = 8192] = "IgnoreAspectRatio", n[n.Less = 16384] = "Less", n[n.Greater = 32768] = "Greater", n[n.FillArea = 65536] = "FillArea", n[n.LimitPixels = 131072] = "LimitPixels", n[n.AspectRatio = 1048576] = "AspectRatio", n))(Ce || {});
class ce {
  _width = 0;
  _height = 0;
  _x = 0;
  _y = 0;
  _aspectRatio = !1;
  _fillArea = !1;
  _greater = !1;
  _isPercentage = !1;
  _ignoreAspectRatio = !1;
  _less = !1;
  _limitPixels = !1;
  constructor(i, u, g, p) {
    if (typeof i == "number") {
      if (g !== void 0 && p !== void 0 ? (this._width = g, this._height = p, this._x = i, this._y = u ?? 0) : (this._width = i, this._height = u ?? this._width, this._x = 0, this._y = 0), this._width < 0)
        throw new te("negative width is not allowed");
      if (this._height < 0)
        throw new te("negative height is not allowed");
    } else {
      const e = f._api._MagickGeometry_Create();
      try {
        W(i, (v) => {
          const I = f._api._MagickGeometry_Initialize(e, v);
          if (I === Ce.NoValue)
            throw new te("invalid geometry specified");
          this.hasFlag(I, Ce.AspectRatio) ? this.initializeFromAspectRation(e, i) : this.initialize(e, I);
        });
      } finally {
        f._api._MagickGeometry_Dispose(e);
      }
    }
  }
  get aspectRatio() {
    return this._aspectRatio;
  }
  get fillArea() {
    return this._fillArea;
  }
  set fillArea(i) {
    this._fillArea = i;
  }
  get greater() {
    return this._greater;
  }
  set greater(i) {
    this._greater = i;
  }
  get ignoreAspectRatio() {
    return this._ignoreAspectRatio;
  }
  set ignoreAspectRatio(i) {
    this._ignoreAspectRatio = i;
  }
  get isPercentage() {
    return this._isPercentage;
  }
  set isPercentage(i) {
    this._isPercentage = i;
  }
  get less() {
    return this._less;
  }
  set less(i) {
    this._less = i;
  }
  get limitPixels() {
    return this._limitPixels;
  }
  set limitPixels(i) {
    this._limitPixels = i;
  }
  get height() {
    return this._height;
  }
  set height(i) {
    this._height = i;
  }
  get width() {
    return this._width;
  }
  set width(i) {
    this._width = i;
  }
  get x() {
    return this._x;
  }
  set x(i) {
    this._x = i;
  }
  get y() {
    return this._y;
  }
  set y(i) {
    this._y = i;
  }
  toString() {
    if (this._aspectRatio)
      return this._width + ":" + this._height;
    let i = "";
    return this._width > 0 && (i += this._width.toString()), this._height > 0 ? i += "x" + this._height.toString() : i += "x", (this._x != 0 || this._y != 0) && (this._x >= 0 && (i += "+"), i += this._x, this.y >= 0 && (i += "+"), i += this.y), this._fillArea && (i += "^"), this._greater && (i += ">"), this._isPercentage && (i += "%"), this._ignoreAspectRatio && (i += "!"), this._less && (i += "<"), this._limitPixels && (i += "@"), i;
  }
  /** @internal */
  static _fromRectangle(i) {
    if (i === 0)
      throw new te("unable to allocate memory");
    try {
      const u = f._api._MagickRectangle_Width_Get(i), g = f._api._MagickRectangle_Height_Get(i), p = f._api._MagickRectangle_X_Get(i), e = f._api._MagickRectangle_Y_Get(i);
      return new ce(p, e, u, g);
    } finally {
      f._api._MagickRectangle_Dispose(i);
    }
  }
  /** @internal */
  _toRectangle(i) {
    const u = f._api._MagickRectangle_Create();
    if (u === 0)
      throw new te("unable to allocate memory");
    try {
      f._api._MagickRectangle_Width_Set(u, this._width), f._api._MagickRectangle_Height_Set(u, this._height), f._api._MagickRectangle_X_Set(u, this._x), f._api._MagickRectangle_Y_Set(u, this._y), i(u);
    } finally {
      f._api._MagickRectangle_Dispose(u);
    }
  }
  initialize(i, u) {
    this._width = f._api._MagickGeometry_Width_Get(i), this._height = f._api._MagickGeometry_Height_Get(i), this._x = f._api._MagickGeometry_X_Get(i), this._y = f._api._MagickGeometry_Y_Get(i), this._ignoreAspectRatio = this.hasFlag(u, Ce.IgnoreAspectRatio), this._isPercentage = this.hasFlag(u, Ce.PercentValue), this._fillArea = this.hasFlag(u, Ce.FillArea), this._greater = this.hasFlag(u, Ce.Greater), this._less = this.hasFlag(u, Ce.Less), this._limitPixels = this.hasFlag(u, Ce.LimitPixels);
  }
  initializeFromAspectRation(i, u) {
    this._aspectRatio = !0;
    const g = u.split(":");
    this._width = this.parseNumber(g[0]), this._height = this.parseNumber(g[1]), this._x = f._api._MagickGeometry_X_Get(i), this._y = f._api._MagickGeometry_Y_Get(i);
  }
  parseNumber(i) {
    let u = 0;
    for (; u < i.length && !this.isNumber(i[u]); )
      u++;
    const g = u;
    for (; u < i.length && this.isNumber(i[u]); )
      u++;
    return parseInt(i.substr(g, u - g));
  }
  isNumber(i) {
    return i >= "0" && i <= "9";
  }
  hasFlag(i, u) {
    return (i & u) === u;
  }
}
class Cr extends Oe {
  constructor(i) {
    const u = f._api._MagickSettings_Create(), g = f._api._MagickSettings_Dispose;
    if (super(u, g), i._fileName !== void 0 && W(i._fileName, (p) => {
      f._api._MagickSettings_SetFileName(this._instance, p);
    }), i._ping && f._api._MagickSettings_SetPing(this._instance, 1), i._quality !== void 0 && f._api._MagickSettings_SetQuality(this._instance, i._quality), i.antiAlias !== void 0 && f._api._MagickSettings_AntiAlias_Set(this._instance, i.antiAlias ? 1 : 0), i.backgroundColor !== void 0 && i.backgroundColor._use((p) => {
      f._api._MagickSettings_BackgroundColor_Set(this._instance, p);
    }), i.colorSpace !== void 0 && f._api._MagickSettings_ColorSpace_Set(this._instance, i.colorSpace), i.colorType !== void 0 && f._api._MagickSettings_ColorType_Set(this._instance, i.colorType), i.compression !== void 0 && f._api._MagickSettings_Compression_Set(this._instance, i.compression), i.debug !== void 0 && f._api._MagickSettings_Debug_Set(this._instance, i.debug ? 1 : 0), i.depth !== void 0 && f._api._MagickSettings_Depth_Set(this._instance, i.depth), i.endian !== void 0 && f._api._MagickSettings_Endian_Set(this._instance, i.endian), i.fillColor !== void 0 && this.setOption("fill", i.fillColor.toString()), i.font !== void 0) {
      const p = ge._getFontFileName(i.font);
      W(p, (e) => {
        f._api._MagickSettings_Font_Set(this._instance, e);
      });
    }
    i.fontPointsize !== void 0 && f._api._MagickSettings_FontPointsize_Set(this._instance, i.fontPointsize), i.format !== void 0 && W(i.format, (p) => {
      f._api._MagickSettings_Format_Set(this._instance, p);
    }), i.interlace !== void 0 && f._api._MagickSettings_Interlace_Set(this._instance, i.interlace), i.strokeColor !== void 0 && this.setOption("stroke", i.strokeColor.toString()), i.strokeWidth !== void 0 && this.setOption("strokeWidth", i.strokeWidth.toString()), i.textInterlineSpacing !== void 0 && this.setOption("interline-spacing", i.textInterlineSpacing.toString()), i.textKerning !== void 0 && this.setOption("kerning", i.textKerning.toString());
    for (const p in i._options)
      this.setOption(p, i._options[p]);
  }
  setOption(i, u) {
    W(i, (g) => {
      W(u, (p) => {
        f._api._MagickSettings_SetOption(this._instance, g, p);
      });
    });
  }
}
class Ze {
  /** @internal */
  _options = {};
  /** @internal */
  _fileName;
  /** @internal */
  _ping = !1;
  /** @internal */
  _quality;
  antiAlias;
  backgroundColor;
  colorSpace;
  colorType;
  compression;
  debug;
  depth;
  endian;
  fillColor;
  font;
  fontPointsize;
  format;
  interlace;
  strokeColor;
  strokeWidth;
  textInterlineSpacing;
  textKerning;
  getDefine(i, u) {
    return u !== void 0 ? this._options[`${i}:${u}`] ?? null : this._options[i] ?? null;
  }
  setDefine(i, u, g) {
    if (g === void 0)
      this._options[i] = u;
    else {
      const p = this.parseDefine(i, u);
      typeof g == "string" ? this._options[p] = g : typeof g == "number" ? this._options[p] = g.toString() : this._options[p] = g ? "true" : "false";
    }
  }
  setDefines(i) {
    i.getDefines().forEach((u) => {
      u !== void 0 && this.setDefine(u.format, u.name, u.value);
    });
  }
  /** @internal */
  _clone() {
    const i = new Ze();
    return Object.assign(i, this), i;
  }
  /** @internal */
  _use(i) {
    const u = new Cr(this);
    return be._disposeAfterExecution(u, i);
  }
  parseDefine(i, u) {
    return i === Te.Unknown ? u : `${i}:${u}`;
  }
}
class Ae extends Ze {
  constructor(i) {
    super(), Object.assign(this, i);
  }
  height;
  width;
  /** @internal */
  _use(i) {
    const u = new Cr(this), g = this.getSize();
    return g !== "" && W(g, (p) => {
      f._api._MagickSettings_SetSize(u._instance, p);
    }), be._disposeAfterExecution(u, i);
  }
  getSize() {
    return this.width !== void 0 && this.height !== void 0 ? `${this.width}x${this.height}` : this.width !== void 0 ? `${this.width}x` : this.height !== void 0 ? `x${this.height}` : "";
  }
}
class we extends Array {
  constructor() {
    super();
  }
  dispose() {
    let i = this.pop();
    for (; i !== void 0; )
      i.dispose(), i = this.pop();
  }
  appendHorizontally(i) {
    return this.createImage((u, g) => f._api._MagickImageCollection_Append(u, 0, g.ptr), i);
  }
  appendVertically(i) {
    return this.createImage((u, g) => f._api._MagickImageCollection_Append(u, 1, g.ptr), i);
  }
  clone(i) {
    const u = we.create();
    for (let g = 0; g < this.length; g++)
      u.push(oe._clone(this[g]));
    return u._use(i);
  }
  evaluate(i, u) {
    return this.createImage((g, p) => f._api._MagickImageCollection_Evaluate(g, i, p.ptr), u);
  }
  flatten(i) {
    return this.mergeImages(14, i);
  }
  merge(i) {
    return this.mergeImages(13, i);
  }
  montage(i, u) {
    this.throwIfEmpty();
    try {
      this.attachImages();
      const g = i._use((v) => S.use((I) => {
        const G = f._api._MagickImageCollection_Montage(this[0]._instance, v._instance, I.ptr);
        return this.checkResult(G, I);
      })), p = we._createFromImages(g, this.getSettings()), e = i.transparentColor;
      return e !== void 0 && p.forEach((v) => {
        v.transparent(e);
      }), p.merge(u);
    } finally {
      this.detachImages();
    }
  }
  mosaic(i) {
    return this.mergeImages(15, i);
  }
  read(i, u) {
    this.dispose(), S.use((g) => {
      const p = we.createSettings(u);
      typeof i == "string" ? (p._fileName = i, p._use((e) => {
        const v = f._api._MagickImageCollection_ReadFile(e._instance, g.ptr);
        this.addImages(v, p);
      })) : p._use((e) => {
        const v = i.byteLength;
        let I = 0;
        try {
          I = f._api._malloc(v), f._api.HEAPU8.set(i, I);
          const G = f._api._MagickImageCollection_ReadBlob(e._instance, I, 0, v, g.ptr);
          this.addImages(G, p);
        } finally {
          I !== 0 && f._api._free(I);
        }
      });
    });
  }
  write(i, u) {
    this.throwIfEmpty();
    let g = 0, p = 0;
    const e = this[0], v = this.getSettings();
    u !== void 0 ? v.format = i : (u = i, v.format = e.format), S.use((G) => {
      Le.use((B) => {
        v._use((K) => {
          try {
            this.attachImages(), g = f._api._MagickImage_WriteBlob(e._instance, K._instance, B.ptr, G.ptr), p = B.value;
          } finally {
            this.detachImages();
          }
        });
      });
    });
    const I = new Dr(g, p, u);
    return be._disposeAfterExecution(I, I.func);
  }
  static create(i) {
    const u = we.createObject();
    return i !== void 0 && u.read(i), u;
  }
  /** @internal */
  static _createFromImages(i, u) {
    const g = we.createObject();
    return g.addImages(i, u._clone()), g;
  }
  _use(i) {
    return be._disposeAfterExecution(this, i);
  }
  addImages(i, u) {
    u.format = Te.Unknown;
    let g = i;
    for (; g !== 0; ) {
      const p = f._api._MagickImage_GetNext(g);
      f._api._MagickImage_SetNext(g, 0), this.push(oe._createFromImage(g, u)), g = p;
    }
  }
  attachImages() {
    for (let i = 0; i < this.length - 1; i++)
      f._api._MagickImage_SetNext(this[i]._instance, this[i + 1]._instance);
  }
  static createObject() {
    return Object.create(we.prototype);
  }
  createImage(i, u) {
    this.throwIfEmpty();
    try {
      this.attachImages();
      const g = S.use((e) => {
        const v = i(this[0]._instance, e);
        return this.checkResult(v, e);
      });
      return oe._createFromImage(g, this.getSettings())._use(u);
    } finally {
      this.detachImages();
    }
  }
  static createSettings(i) {
    return i == null ? new Ze() : new Ae(i);
  }
  detachImages() {
    for (let i = 0; i < this.length - 1; i++)
      f._api._MagickImage_SetNext(this[i]._instance, 0);
  }
  getSettings() {
    return this[0]._getSettings()._clone();
  }
  mergeImages(i, u) {
    return this.createImage((g, p) => f._api._MagickImageCollection_Merge(g, i, p.ptr), u);
  }
  throwIfEmpty() {
    if (this.length === 0)
      throw new te("operation requires at least one image");
  }
  checkResult(i, u) {
    return u.check(() => i, () => (f._api._MagickImageCollection_Dispose(i), 0));
  }
}
class se {
  _value;
  constructor(i) {
    this._value = i;
  }
  /** @internal */
  static fromQuantum(i) {
    return new se(i / je.max * 100);
  }
  multiply(i) {
    return i * this._value / 100;
  }
  toDouble() {
    return this._value;
  }
  toQuantum() {
    return je.max * (this._value / 100);
  }
}
class vr {
  static use(i, u, g) {
    const p = f._api._MagickRectangle_Create();
    try {
      f._api._MagickRectangle_X_Set(p, u.x), f._api._MagickRectangle_Y_Set(p, u.y);
      let e = u.width, v = u.height;
      return u.isPercentage && (e = new se(u.width).multiply(i.width), v = new se(u.height).multiply(i.height)), f._api._MagickRectangle_Width_Set(p, e), f._api._MagickRectangle_Height_Set(p, v), g(p);
    } finally {
      f._api._MagickRectangle_Dispose(p);
    }
  }
}
var Re = /* @__PURE__ */ ((n) => (n[n.Red = 0] = "Red", n[n.Cyan = 0] = "Cyan", n[n.Gray = 0] = "Gray", n[n.Green = 1] = "Green", n[n.Magenta = 1] = "Magenta", n[n.Blue = 2] = "Blue", n[n.Yellow = 2] = "Yellow", n[n.Black = 3] = "Black", n[n.Alpha = 4] = "Alpha", n[n.Index = 5] = "Index", n[n.Composite = 64] = "Composite", n))(Re || {});
function wr(n, i) {
  if (n.byteLength === 0)
    throw new te("The specified array cannot be empty");
  let u = 0;
  try {
    return u = f._api._malloc(n.byteLength), f._api.HEAPU8.set(n, u), i(u);
  } finally {
    u !== 0 && f._api._free(u);
  }
}
function Su(n, i) {
  const u = n.length * 8;
  if (u === 0)
    throw new te("The specified array cannot be empty");
  let g = 0;
  try {
    g = f._api._malloc(u);
    const p = new ArrayBuffer(u), e = new Float64Array(p);
    for (let v = 0; v < n.length; v++)
      e[v] = n[v];
    return f._api.HEAPU8.set(new Int8Array(p), g), i(g);
  } finally {
    g !== 0 && f._api._free(g);
  }
}
function Iu(n, i) {
  if (n.byteLength === 0)
    throw new te("The specified array cannot be empty");
  let u = 0;
  try {
    return u = f._api._malloc(n.byteLength), f._api.HEAPU8.set(n, u), i(u);
  } finally {
    u !== 0 && f._api._free(u);
  }
}
class Fe extends Oe {
  image;
  constructor(i) {
    const u = S.usePointer((p) => f._api._PixelCollection_Create(i._instance, p)), g = f._api._PixelCollection_Dispose;
    super(u, g), this.image = i;
  }
  /** @internal */
  static _create(i) {
    return new Fe(i);
  }
  static _use(i, u) {
    const g = new Fe(i);
    return be._disposeAfterExecution(g, u);
  }
  /** @internal */
  static _map(i, u, g) {
    const p = new Fe(i);
    try {
      p.use(0, 0, i.width, i.height, u, (e) => {
        g(e);
      });
    } finally {
      p.dispose();
    }
  }
  getArea(i, u, g, p) {
    return S.usePointer((e) => {
      const v = f._api._PixelCollection_GetArea(this._instance, i, u, g, p, e), I = g * p * this.image.channelCount;
      return f._api.HEAPU8.subarray(v, v + I);
    });
  }
  getPixel(i, u) {
    return this.getArea(i, u, 1, 1);
  }
  setArea(i, u, g, p, e) {
    S.usePointer((v) => {
      const I = e instanceof Uint8Array ? e : new Uint8Array(e);
      Iu(I, (G) => {
        f._api._PixelCollection_SetArea(this._instance, i, u, g, p, G, I.length, v);
      });
    });
  }
  setPixel(i, u, g) {
    g instanceof Uint8Array ? this.setArea(i, u, 1, 1, g) : this.setArea(i, u, 1, 1, g);
  }
  toByteArray(i, u, g, p, e) {
    return this.use(i, u, g, p, e, (v) => Fe.createArray(v, g, p, e.length));
  }
  static createArray(i, u, g, p) {
    if (i === 0)
      return null;
    try {
      const e = u * g * p;
      return f._api.HEAPU8.slice(i, i + e);
    } finally {
      i = f._api._MagickMemory_Relinquish(i);
    }
  }
  use(i, u, g, p, e, v) {
    return W(e, (I) => S.use((G) => {
      let B = f._api._PixelCollection_ToByteArray(this._instance, i, u, g, p, I, G.ptr);
      return G.check(() => {
        const K = v(B);
        return B = f._api._MagickMemory_Relinquish(B), K;
      }, () => (B = f._api._MagickMemory_Relinquish(B), null));
    }));
  }
}
var Pr = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.Average = 1] = "Average", n[n.Brightness = 2] = "Brightness", n[n.Lightness = 3] = "Lightness", n[n.MS = 4] = "MS", n[n.Rec601Luma = 5] = "Rec601Luma", n[n.Rec601Luminance = 6] = "Rec601Luminance", n[n.Rec709Luma = 7] = "Rec709Luma", n[n.Rec709Luminance = 8] = "Rec709Luminance", n[n.RMS = 9] = "RMS", n))(Pr || {});
class pt {
  _x;
  _y;
  constructor(i, u) {
    this._x = i, this._y = u ?? i;
  }
  get x() {
    return this._x;
  }
  set x(i) {
    this._x = i;
  }
  get y() {
    return this._y;
  }
  set y(i) {
    this._y = i;
  }
}
class Ue {
  _x;
  _y;
  _z;
  constructor(i, u, g) {
    this._x = i, this._y = u, this._z = g;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  get z() {
    return this._z;
  }
  /** @internal */
  static _create(i) {
    return i === 0 ? new Ue(0, 0, 0) : new Ue(
      f._api._PrimaryInfo_X_Get(i),
      f._api._PrimaryInfo_Y_Get(i),
      f._api._PrimaryInfo_Z_Get(i)
    );
  }
  /** @internal */
  _use(i) {
    let u = 0;
    try {
      u = f._api._PrimaryInfo_Create(), f._api._PrimaryInfo_X_Set(u, this._x), f._api._PrimaryInfo_Y_Set(u, this._y), f._api._PrimaryInfo_Z_Set(u, this._z), i(u);
    } finally {
      f._api._free(u);
    }
  }
}
class dn {
  _channels = {};
  get channels() {
    const i = [];
    for (const u in this._channels)
      i.push(parseInt(u));
    return i;
  }
  composite() {
    return this._channels[Re.Composite];
  }
  getChannel(i) {
    const u = this._channels[i];
    return u !== void 0 ? u : null;
  }
  static _create(i, u, g) {
    const p = new dn();
    return i.channels.forEach((e) => {
      g >> e & 1 && p.addChannel(u, e);
    }), p.addChannel(u, Re.Composite), p;
  }
  addChannel(i, u) {
    const g = f._api._Statistics_GetInstance(i, u);
    g !== 0 && (this._channels[u] = new Cu(u, g));
  }
}
class Mu {
  static toArray(i) {
    if (i === 0)
      return null;
    const u = f._api._StringInfo_Datum_Get(i), g = f._api._StringInfo_Length_Get(i);
    return f._api.HEAPU8.subarray(u, u + g);
  }
}
class oe extends Oe {
  _settings;
  constructor(i, u) {
    super(i, f._api._MagickImage_Dispose), this._settings = u;
  }
  get animationDelay() {
    return f._api._MagickImage_AnimationDelay_Get(this._instance);
  }
  set animationDelay(i) {
    f._api._MagickImage_AnimationDelay_Set(this._instance, i);
  }
  get animationIterations() {
    return f._api._MagickImage_AnimationIterations_Get(this._instance);
  }
  set animationIterations(i) {
    f._api._MagickImage_AnimationIterations_Set(this._instance, i);
  }
  get animationTicksPerSecond() {
    return f._api._MagickImage_AnimationTicksPerSecond_Get(this._instance);
  }
  set animationTicksPerSecond(i) {
    f._api._MagickImage_AnimationTicksPerSecond_Set(this._instance, i);
  }
  get artifactNames() {
    const i = [];
    f._api._MagickImage_ResetArtifactIterator(this._instance);
    let u = f._api._MagickImage_GetNextArtifactName(this._instance);
    for (; u !== 0; )
      i.push(f._api.UTF8ToString(u)), u = f._api._MagickImage_GetNextArtifactName(this._instance);
    return i;
  }
  get attributeNames() {
    const i = [];
    f._api._MagickImage_ResetAttributeIterator(this._instance);
    let u = f._api._MagickImage_GetNextAttributeName(this._instance);
    for (; u !== 0; )
      i.push(f._api.UTF8ToString(u)), u = f._api._MagickImage_GetNextAttributeName(this._instance);
    return i;
  }
  get backgroundColor() {
    const i = f._api._MagickImage_BackgroundColor_Get(this._instance);
    return y._create(i);
  }
  set backgroundColor(i) {
    i._use((u) => {
      f._api._MagickImage_BackgroundColor_Set(this._instance, u);
    });
  }
  get baseHeight() {
    return f._api._MagickImage_BaseHeight_Get(this._instance);
  }
  get baseWidth() {
    return f._api._MagickImage_BaseWidth_Get(this._instance);
  }
  get blackPointCompensation() {
    return f._api._MagickImage_BlackPointCompensation_Get(this._instance) === 1;
  }
  set blackPointCompensation(i) {
    f._api._MagickImage_BlackPointCompensation_Set(this._instance, i ? 1 : 0);
  }
  get borderColor() {
    const i = f._api._MagickImage_BorderColor_Get(this._instance);
    return y._create(i);
  }
  set borderColor(i) {
    i._use((u) => {
      f._api._MagickImage_BorderColor_Set(this._instance, u);
    });
  }
  get boundingBox() {
    return S.usePointer((i) => {
      const u = f._api._MagickImage_BoundingBox_Get(this._instance, i), g = ce._fromRectangle(u);
      return g.width === 0 || g.height === 0 ? null : g;
    });
  }
  get channelCount() {
    return f._api._MagickImage_ChannelCount_Get(this._instance);
  }
  get channels() {
    const i = [];
    return [Re.Red, Re.Green, Re.Blue, Re.Black, Re.Alpha].forEach((u) => {
      f._api._MagickImage_HasChannel(this._instance, u) && i.push(u);
    }), i;
  }
  get chromaticity() {
    return new du(
      Ue._create(f._api._MagickImage_ChromaRedPrimary_Get(this._instance)),
      Ue._create(f._api._MagickImage_ChromaGreenPrimary_Get(this._instance)),
      Ue._create(f._api._MagickImage_ChromaBluePrimary_Get(this._instance)),
      Ue._create(f._api._MagickImage_ChromaWhitePoint_Get(this._instance))
    );
  }
  set chromaticity(i) {
    i.blue._use((u) => f._api._MagickImage_ChromaBluePrimary_Set(this._instance, u)), i.green._use((u) => f._api._MagickImage_ChromaGreenPrimary_Set(this._instance, u)), i.red._use((u) => f._api._MagickImage_ChromaRedPrimary_Set(this._instance, u)), i.white._use((u) => f._api._MagickImage_ChromaWhitePoint_Set(this._instance, u));
  }
  get classType() {
    return S.usePointer((i) => f._api._MagickImage_ClassType_Get(this._instance, i));
  }
  set classType(i) {
    S.usePointer((u) => {
      f._api._MagickImage_ClassType_Set(this._instance, i, u);
    });
  }
  get colorFuzz() {
    return se.fromQuantum(f._api._MagickImage_ColorFuzz_Get(this._instance));
  }
  set colorFuzz(i) {
    f._api._MagickImage_ColorFuzz_Set(this._instance, i.toQuantum());
  }
  get colormapSize() {
    return S.usePointer((i) => f._api._MagickImage_ColormapSize_Get(this._instance, i));
  }
  set colormapSize(i) {
    S.usePointer((u) => {
      f._api._MagickImage_ColormapSize_Set(this._instance, i, u);
    });
  }
  get colorSpace() {
    return S.usePointer((i) => f._api._MagickImage_ColorSpace_Get(this._instance, i));
  }
  set colorSpace(i) {
    S.usePointer((u) => {
      f._api._MagickImage_ColorSpace_Set(this._instance, i, u);
    });
  }
  get colorType() {
    return this.settings.colorType !== void 0 ? this.settings.colorType : S.usePointer((i) => f._api._MagickImage_ColorType_Get(this._instance, i));
  }
  set colorType(i) {
    S.usePointer((u) => {
      f._api._MagickImage_ColorType_Set(this._instance, i, u);
    });
  }
  get comment() {
    return this.getAttribute("comment");
  }
  set comment(i) {
    i === null ? this.removeAttribute("comment") : this.setAttribute("comment", i);
  }
  get compose() {
    return f._api._MagickImage_Compose_Get(this._instance);
  }
  set compose(i) {
    f._api._MagickImage_Compose_Set(this._instance, i);
  }
  get compression() {
    return f._api._MagickImage_Compression_Get(this._instance);
  }
  get density() {
    return new hu(
      f._api._MagickImage_ResolutionX_Get(this._instance),
      f._api._MagickImage_ResolutionY_Get(this._instance),
      f._api._MagickImage_ResolutionUnits_Get(this._instance)
    );
  }
  set density(i) {
    f._api._MagickImage_ResolutionX_Set(this._instance, i.x), f._api._MagickImage_ResolutionY_Set(this._instance, i.y), f._api._MagickImage_ResolutionUnits_Set(this._instance, i.units);
  }
  get depth() {
    return f._api._MagickImage_Depth_Get(this._instance);
  }
  set depth(i) {
    f._api._MagickImage_Depth_Set(this._instance, i);
  }
  get endian() {
    return f._api._MagickImage_Endian_Get(this._instance);
  }
  set endian(i) {
    f._api._MagickImage_Endian_Set(this._instance, i);
  }
  get fileName() {
    const i = f._api._MagickImage_FileName_Get(this._instance);
    return i === 0 ? null : f._api.UTF8ToString(i);
  }
  get filterType() {
    return f._api._MagickImage_FilterType_Get(this._instance);
  }
  set filterType(i) {
    f._api._MagickImage_FilterType_Set(this._instance, i);
  }
  get format() {
    return me(f._api._MagickImage_Format_Get(this._instance));
  }
  set format(i) {
    W(i.toString(), (u) => f._api._MagickImage_Format_Set(this._instance, u));
  }
  get gamma() {
    return f._api._MagickImage_Gamma_Get(this._instance);
  }
  get gifDisposeMethod() {
    return f._api._MagickImage_GifDisposeMethod_Get(this._instance);
  }
  set gifDisposeMethod(i) {
    f._api._MagickImage_GifDisposeMethod_Set(this._instance, i);
  }
  get hasAlpha() {
    return S.usePointer((i) => this.toBool(f._api._MagickImage_HasAlpha_Get(this._instance, i)));
  }
  set hasAlpha(i) {
    S.usePointer((u) => {
      i && this.alpha(kr.Opaque), f._api._MagickImage_HasAlpha_Set(this._instance, this.fromBool(i), u);
    });
  }
  get height() {
    return f._api._MagickImage_Height_Get(this._instance);
  }
  get interlace() {
    return f._api._MagickImage_Interlace_Get(this._instance);
  }
  get interpolate() {
    return f._api._MagickImage_Interpolate_Get(this._instance);
  }
  set interpolate(i) {
    f._api._MagickImage_Interpolate_Set(this._instance, i);
  }
  get label() {
    return this.getAttribute("label");
  }
  set label(i) {
    i === null ? this.removeAttribute("label") : this.setAttribute("label", i);
  }
  get orientation() {
    return f._api._MagickImage_Orientation_Get(this._instance);
  }
  set orientation(i) {
    f._api._MagickImage_Orientation_Set(this._instance, i);
  }
  get page() {
    const i = f._api._MagickImage_Page_Get(this._instance);
    return ce._fromRectangle(i);
  }
  set page(i) {
    i._toRectangle((u) => {
      f._api._MagickImage_Page_Set(this._instance, u);
    });
  }
  get quality() {
    return f._api._MagickImage_Quality_Get(this._instance);
  }
  set quality(i) {
    let u = i < 1 ? 1 : i;
    u = u > 100 ? 100 : u, f._api._MagickImage_Quality_Set(this._instance, u), this._settings._quality = u;
  }
  get settings() {
    return this._settings;
  }
  get signature() {
    return S.usePointer((i) => me(f._api._MagickImage_Signature_Get(this._instance, i)));
  }
  get virtualPixelMethod() {
    return S.usePointer((i) => f._api._MagickImage_VirtualPixelMethod_Get(this._instance, i));
  }
  set virtualPixelMethod(i) {
    S.usePointer((u) => {
      f._api._MagickImage_VirtualPixelMethod_Set(this._instance, i, u);
    });
  }
  get width() {
    return f._api._MagickImage_Width_Get(this._instance);
  }
  alpha(i) {
    S.usePointer((u) => {
      f._api._MagickImage_SetAlpha(this._instance, i, u);
    });
  }
  autoOrient() {
    S.use((i) => {
      const u = f._api._MagickImage_AutoOrient(this._instance, i.ptr);
      this._setInstance(u, i);
    });
  }
  autoThreshold(i) {
    S.use((u) => {
      f._api._MagickImage_AutoThreshold(this._instance, i, u.ptr);
    });
  }
  blur(i, u, g) {
    let p = 0;
    const e = this.valueOrDefault(u, 1);
    let v = this.valueOrDefault(g, ie.Undefined);
    typeof i == "number" ? p = i : i !== void 0 && (v = i), S.use((I) => {
      const G = f._api._MagickImage_Blur(this._instance, p, e, v, I.ptr);
      this._setInstance(G, I);
    });
  }
  border(i, u) {
    const g = i, p = this.valueOrDefault(u, i), e = new ce(0, 0, g, p);
    S.use((v) => {
      e._toRectangle((I) => {
        const G = f._api._MagickImage_Border(this._instance, I, v.ptr);
        this._setInstance(G, v);
      });
    });
  }
  brightnessContrast(i, u, g) {
    const p = this.valueOrDefault(g, ie.Undefined);
    S.use((e) => {
      f._api._MagickImage_BrightnessContrast(this._instance, i.toDouble(), u.toDouble(), p, e.ptr);
    });
  }
  channelOffset(i) {
    return f._api._MagickImage_HasChannel(this._instance, i) ? f._api._MagickImage_ChannelOffset(this._instance, i) : -1;
  }
  charcoal(i, u) {
    const g = i === void 0 ? 0 : i, p = u === void 0 ? 1 : u;
    S.use((e) => {
      const v = f._api._MagickImage_Charcoal(this._instance, g, p, e.ptr);
      this._setInstance(v, e);
    });
  }
  clahe(i, u, g, p) {
    S.usePointer((e) => {
      const v = i instanceof se ? i.multiply(this.width) : i, I = u instanceof se ? u.multiply(this.height) : u;
      f._api._MagickImage_Clahe(this._instance, v, I, g, p, e);
    });
  }
  clone(i) {
    return oe._clone(this)._use(i);
  }
  colorAlpha(i) {
    if (!this.hasAlpha)
      return;
    const u = oe.create();
    u.read(i, this.width, this.height), u.composite(this, Nt.SrcOver, new pt(0, 0)), this._instance = u._instance;
  }
  compare(i, u, g) {
    return S.usePointer((p) => {
      const e = this.valueOrDefault(g, ie.Undefined);
      return f._api._MagickImage_CompareDistortion(this._instance, i._instance, u, e, p);
    });
  }
  composite(i, u, g, p, e) {
    let v = 0, I = 0, G = Nt.In, B = ie.Default, K = null;
    u instanceof pt ? (v = u.x, I = u.y) : u !== void 0 && (G = u), g instanceof pt ? (v = g.x, I = g.y) : typeof g == "string" ? K = g : g !== void 0 && (B = g), typeof p == "string" ? K = p : p !== void 0 && (B = p), e !== void 0 && (B = e), K !== null && this.setArtifact("compose:args", K), S.usePointer((_e) => {
      f._api._MagickImage_Composite(this._instance, i._instance, v, I, G, B, _e);
    }), K !== null && this.removeArtifact("compose:args");
  }
  compositeGravity(i, u, g, p, e, v) {
    let I = 0, G = 0, B = Nt.In, K = ie.Default, _e = null;
    g instanceof pt ? (I = g.x, G = g.y) : g !== void 0 && (B = g), p instanceof pt ? (I = p.x, G = p.y) : typeof p == "string" ? _e = p : p !== void 0 && (K = p), typeof e == "string" ? _e = e : e !== void 0 && (K = e), v !== void 0 && (K = v), _e !== null && this.setArtifact("compose:args", _e), S.usePointer((pe) => {
      f._api._MagickImage_CompositeGravity(this._instance, i._instance, u, I, G, B, K, pe);
    }), _e !== null && this.removeArtifact("compose:args");
  }
  contrast = () => this._contrast(!0);
  contrastStretch(i, u, g) {
    const p = this.width * this.height, e = i.multiply(p), v = p - (u ?? i).multiply(p), I = this.valueOrDefault(g, ie.Undefined);
    S.usePointer((G) => {
      f._api._MagickImage_ContrastStretch(this._instance, e, v, I, G);
    });
  }
  static create(i, u, g) {
    const p = new oe(oe.createInstance(), new Ze());
    return i !== void 0 && p.readOrPing(!1, i, u, g), p;
  }
  crop(i, u, g) {
    let p, e;
    i instanceof ce ? (p = i, e = this.valueOrDefault(u, zt.Undefined)) : u !== void 0 && (p = new ce(i, u), e = this.valueOrDefault(g, zt.Undefined)), S.use((v) => {
      W(p.toString(), (I) => {
        const G = f._api._MagickImage_Crop(this._instance, I, e, v.ptr);
        this._setInstance(G, v);
      });
    });
  }
  cropToTiles(i) {
    return S.use((u) => W(i.toString(), (g) => {
      const p = f._api._MagickImage_CropToTiles(this._instance, g, u.ptr);
      return we._createFromImages(p, this._settings);
    }));
  }
  deskew(i) {
    S.use((g) => {
      const p = f._api._MagickImage_Deskew(this._instance, i.toQuantum(), g.ptr);
      this._setInstance(p, g);
    });
    const u = Number(this.getArtifact("deskew:angle"));
    return isNaN(u) ? 0 : u;
  }
  distort(i, u, g) {
    let p, e = 0, v = null;
    u instanceof Array ? p = u : g instanceof Array ? (p = g, v = u, e = v.bestFit ? 1 : 0, v._setArtifacts(this)) : p = [], S.use((I) => {
      Su(p, (G) => {
        const B = f._api._MagickImage_Distort(this._instance, i, e, G, p.length, I.ptr);
        this._setInstance(B, I);
      });
    }), v !== null && v._removeArtifacts(this);
  }
  draw(...i) {
    const u = pn._create(this, this._settings);
    try {
      u.draw(i.flat());
    } finally {
      u.dispose();
    }
  }
  evaluate(i, u, g, p) {
    if (typeof u == "number") {
      const e = u, v = typeof g == "number" ? g : g.toQuantum();
      S.usePointer((I) => {
        f._api._MagickImage_EvaluateOperator(this._instance, i, e, v, I);
      });
    } else if (p !== void 0) {
      if (typeof g != "number")
        throw new te("this should not happen");
      const e = u, v = g, I = typeof p == "number" ? p : p.toQuantum();
      if (e.isPercentage)
        throw new te("percentage is not supported");
      S.usePointer((G) => {
        vr.use(this, e, (B) => {
          f._api._MagickImage_EvaluateGeometry(this._instance, i, B, v, I, G);
        });
      });
    }
  }
  extent(i, u, g) {
    let p = zt.Undefined, e;
    i instanceof ce ? e = i : typeof u == "number" && (e = new ce(i, u)), u instanceof y ? this.backgroundColor = u : u !== void 0 && (p = u), g instanceof y ? this.backgroundColor = g : g !== void 0 && (p = g), S.use((v) => {
      W(e.toString(), (I) => {
        const G = f._api._MagickImage_Extent(this._instance, I, p, v.ptr);
        this._setInstance(G, v);
      });
    });
  }
  flip() {
    S.use((i) => {
      const u = f._api._MagickImage_Flip(this._instance, i.ptr);
      this._setInstance(u, i);
    });
  }
  flop() {
    S.use((i) => {
      const u = f._api._MagickImage_Flop(this._instance, i.ptr);
      this._setInstance(u, i);
    });
  }
  getArtifact(i) {
    return W(i, (u) => {
      const g = f._api._MagickImage_GetArtifact(this._instance, u);
      return me(g);
    });
  }
  getAttribute(i) {
    return S.use((u) => W(i, (g) => {
      const p = f._api._MagickImage_GetAttribute(this._instance, g, u.ptr);
      return me(p);
    }));
  }
  getProfile(i) {
    return W(i, (u) => {
      const g = f._api._MagickImage_GetProfile(this._instance, u), p = Mu.toArray(g);
      return p === null ? null : new ku(i, p);
    });
  }
  getWriteMask(i) {
    const u = S.usePointer((p) => f._api._MagickImage_GetWriteMask(this._instance, p)), g = u === 0 ? null : new oe(u, new Ze());
    return g == null ? i(g) : g._use(i);
  }
  getPixels(i) {
    if (this._settings._ping)
      throw new te("image contains no pixel data");
    return Fe._use(this, i);
  }
  grayscale(i = Pr.Undefined) {
    S.usePointer((u) => {
      f._api._MagickImage_Grayscale(this._instance, i, u);
    });
  }
  histogram() {
    const i = /* @__PURE__ */ new Map();
    return S.usePointer((u) => {
      Le.use((g) => {
        const p = f._api._MagickImage_Histogram(this._instance, g.ptr, u);
        if (p !== 0) {
          const e = g.value;
          for (let v = 0; v < e; v++) {
            const I = f._api._MagickColorCollection_GetInstance(p, v), G = y._create(I), B = f._api._MagickColor_Count_Get(I);
            i.set(G.toString(), B);
          }
          f._api._MagickColorCollection_DisposeList(p);
        }
      });
    }), i;
  }
  inverseContrast = () => this._contrast(!1);
  inverseOpaque = (i, u) => this._opaque(i, u, !0);
  inverseSigmoidalContrast(i, u, g) {
    this._sigmoidalContrast(!1, i, u, g);
  }
  inverseTransparent = (i) => this._transparent(i, !0);
  level(i, u, g, p) {
    let e = ie.Composite, v, I, G = this.valueOrDefault(p, 1);
    typeof i == "number" ? (e = i, v = u, g instanceof se && (I = g)) : (v = i, I = u, typeof g == "number" && (G = g)), S.usePointer((B) => {
      f._api._MagickImage_Level(this._instance, v.toDouble(), I.toQuantum(), G, e, B);
    });
  }
  linearStretch(i, u) {
    S.usePointer((g) => {
      f._api._MagickImage_LinearStretch(this._instance, i.toDouble(), u.toQuantum(), g);
    });
  }
  liquidRescale(i, u) {
    const g = typeof i == "number" ? new ce(i, u) : i;
    S.use((p) => {
      W(g.toString(), (e) => {
        const v = f._api._MagickImage_LiquidRescale(this._instance, e, g.x, g.y, p.ptr);
        this._setInstance(v, p);
      });
    });
  }
  negate(i) {
    S.usePointer((u) => {
      const g = this.valueOrDefault(i, ie.Undefined);
      f._api._MagickImage_Negate(this._instance, 0, g, u);
    });
  }
  negateGrayScale(i) {
    S.usePointer((u) => {
      const g = this.valueOrDefault(i, ie.Undefined);
      f._api._MagickImage_Negate(this._instance, 1, g, u);
    });
  }
  normalize() {
    S.usePointer((i) => {
      f._api._MagickImage_Normalize(this._instance, i);
    });
  }
  modulate(i, u, g) {
    const p = this.valueOrDefault(u, new se(100)), e = this.valueOrDefault(g, new se(100));
    S.usePointer((v) => {
      const I = `${i.toDouble()}/${p.toDouble()}/${e.toDouble()}`;
      W(I, (G) => {
        f._api._MagickImage_Modulate(this._instance, G, v);
      });
    });
  }
  motionBlur(i, u, g) {
    S.use((p) => {
      const e = f._api._MagickImage_MotionBlur(this._instance, i, u, g, p.ptr);
      this._setInstance(e, p);
    });
  }
  morphology(i) {
    S.use((u) => {
      W(i.kernel, (g) => {
        const p = f._api._MagickImage_Morphology(this._instance, i.method, g, i.channels, i.iterations, u.ptr);
        this._setInstance(p, u);
      });
    });
  }
  oilPaint(i) {
    const u = this.valueOrDefault(i, 3), g = 0;
    S.use((p) => {
      const e = f._api._MagickImage_OilPaint(this._instance, u, g, p.ptr);
      this._setInstance(e, p);
    });
  }
  opaque = (i, u) => this._opaque(i, u, !1);
  ping(i, u) {
    this.readOrPing(!0, i, u);
  }
  read(i, u, g) {
    this.readOrPing(!1, i, u, g);
  }
  readFromCanvas(i) {
    const u = i.getContext("2d");
    if (u === null)
      return;
    const g = u.getImageData(0, 0, i.width, i.height), p = new Ae();
    p.format = Te.Rgba, p.width = i.width, p.height = i.height, S.use((e) => {
      this.readFromArray(g.data, p, e);
    });
  }
  removeArtifact(i) {
    W(i, (u) => {
      f._api._MagickImage_RemoveArtifact(this._instance, u);
    });
  }
  removeAttribute(i) {
    W(i, (u) => {
      f._api._MagickImage_RemoveAttribute(this._instance, u);
    });
  }
  removeProfile(i) {
    W(i, (u) => {
      f._api._MagickImage_RemoveProfile(this._instance, u);
    });
  }
  removeWriteMask() {
    S.usePointer((i) => {
      f._api._MagickImage_SetWriteMask(this._instance, 0, i);
    });
  }
  repage() {
    this.page = new ce(0, 0, 0, 0);
  }
  resize(i, u) {
    const g = typeof i == "number" ? new ce(i, u) : i;
    S.use((p) => {
      W(g.toString(), (e) => {
        const v = f._api._MagickImage_Resize(this._instance, e, p.ptr);
        this._setInstance(v, p);
      });
    });
  }
  rotate(i) {
    S.use((u) => {
      const g = f._api._MagickImage_Rotate(this._instance, i, u.ptr);
      this._setInstance(g, u);
    });
  }
  separate(i, u) {
    return S.use((g) => {
      const p = this.valueOrDefault(u, ie.Undefined), e = f._api._MagickImage_Separate(this._instance, p, g.ptr);
      return we._createFromImages(e, this._settings)._use(i);
    });
  }
  sepiaTone(i = new se(80)) {
    S.use((u) => {
      const g = typeof i == "number" ? new se(i) : i, p = f._api._MagickImage_SepiaTone(this._instance, g.toQuantum(), u.ptr);
      this._setInstance(p, u);
    });
  }
  setArtifact(i, u) {
    let g;
    typeof u == "string" ? g = u : g = this.fromBool(u).toString(), W(i, (p) => {
      W(g, (e) => {
        f._api._MagickImage_SetArtifact(this._instance, p, e);
      });
    });
  }
  setAttribute(i, u) {
    S.use((g) => {
      W(i, (p) => {
        W(u, (e) => {
          f._api._MagickImage_SetAttribute(this._instance, p, e, g.ptr);
        });
      });
    });
  }
  setProfile(i, u) {
    S.use((g) => {
      W(i, (p) => {
        wr(u, (e) => {
          f._api._MagickImage_SetProfile(this._instance, p, e, u.byteLength, g.ptr);
        });
      });
    });
  }
  setWriteMask(i) {
    S.usePointer((u) => {
      f._api._MagickImage_SetWriteMask(this._instance, i._instance, u);
    });
  }
  sharpen(i, u, g) {
    const p = this.valueOrDefault(i, 0), e = this.valueOrDefault(u, 1), v = this.valueOrDefault(g, ie.Undefined);
    S.use((I) => {
      const G = f._api._MagickImage_Sharpen(this._instance, p, e, v, I.ptr);
      this._setInstance(G, I);
    });
  }
  shave(i, u) {
    S.use((g) => {
      const p = f._api._MagickImage_Shave(this._instance, i, u, g.ptr);
      this._setInstance(p, g);
    });
  }
  sigmoidalContrast(i, u, g) {
    this._sigmoidalContrast(!0, i, u, g);
  }
  solarize(i = new se(50)) {
    S.use((u) => {
      const g = typeof i == "number" ? new se(i) : i;
      f._api._MagickImage_Solarize(this._instance, g.toQuantum(), u.ptr);
    });
  }
  splice(i) {
    vr.use(this, i, (u) => {
      S.use((g) => {
        const p = f._api._MagickImage_Splice(this._instance, u, g.ptr);
        this._setInstance(p, g);
      });
    });
  }
  statistics(i) {
    const u = this.valueOrDefault(i, ie.Default);
    return S.usePointer((g) => {
      const p = f._api._MagickImage_Statistics(this._instance, u, g), e = dn._create(this, p, u);
      return f._api._Statistics_DisposeList(p), e;
    });
  }
  strip() {
    S.usePointer((i) => {
      f._api._MagickImage_Strip(this._instance, i);
    });
  }
  toString = () => `${this.format} ${this.width}x${this.height} ${this.depth}-bit ${Ir[this.colorSpace]}`;
  transparent(i) {
    i._use((u) => {
      S.usePointer((g) => {
        f._api._MagickImage_Transparent(this._instance, u, 0, g);
      });
    });
  }
  trim(...i) {
    if (i.length > 0)
      if (i.length == 1 && i[0] instanceof se) {
        const u = i[0];
        this.setArtifact("trim:percent-background", u.toDouble().toString());
      } else {
        const u = i, g = [...new Set(wu(u))].join(",");
        this.setArtifact("trim:edges", g);
      }
    S.use((u) => {
      const g = f._api._MagickImage_Trim(this._instance, u.ptr);
      this._setInstance(g, u), this.removeArtifact("trim:edges"), this.removeArtifact("trim:percent-background");
    });
  }
  wave(i, u, g) {
    const p = this.valueOrDefault(i, this.interpolate), e = this.valueOrDefault(u, 25), v = this.valueOrDefault(g, 150);
    S.use((I) => {
      const G = f._api._MagickImage_Wave(this._instance, p, e, v, I.ptr);
      this._setInstance(G, I);
    });
  }
  vignette(i, u, g, p) {
    const e = this.valueOrDefault(i, 0), v = this.valueOrDefault(u, 1), I = this.valueOrDefault(g, 0), G = this.valueOrDefault(p, 0);
    S.use((B) => {
      const K = f._api._MagickImage_Vignette(this._instance, e, v, I, G, B.ptr);
      this._setInstance(K, B);
    });
  }
  write(i, u) {
    let g = 0, p = 0;
    u !== void 0 ? this._settings.format = i : u = i, S.use((v) => {
      Le.use((I) => {
        this._settings._use((G) => {
          try {
            g = f._api._MagickImage_WriteBlob(this._instance, G._instance, I.ptr, v.ptr), p = I.value;
          } catch {
            g !== 0 && (g = f._api._MagickMemory_Relinquish(g));
          }
        });
      });
    });
    const e = new Dr(g, p, u);
    return be._disposeAfterExecution(e, e.func);
  }
  writeToCanvas(i) {
    i.width = this.width, i.height = this.height;
    const u = i.getContext("2d");
    u !== null && Fe._map(this, "RGBA", (g) => {
      const p = u.createImageData(this.width, this.height);
      let e = 0;
      for (let v = 0; v < this.height; v++)
        for (let I = 0; I < this.width; I++)
          p.data[e++] = f._api.HEAPU8[g++], p.data[e++] = f._api.HEAPU8[g++], p.data[e++] = f._api.HEAPU8[g++], p.data[e++] = f._api.HEAPU8[g++];
      u.putImageData(p, 0, 0);
    });
  }
  /** @internal */
  static _createFromImage(i, u) {
    return new oe(i, u);
  }
  /** @internal */
  static _clone(i) {
    return S.usePointer((u) => new oe(f._api._MagickImage_Clone(i._instance, u), i._settings._clone()));
  }
  /** @internal */
  _getSettings() {
    return this._settings;
  }
  /** @internal */
  _instanceNotInitialized() {
    throw new te("no image has been read");
  }
  _use(i) {
    return be._disposeAfterExecution(this, i);
  }
  static _use(i) {
    return oe.create()._use(i);
  }
  _contrast(i) {
    S.usePointer((u) => {
      f._api._MagickImage_Contrast(this._instance, this.fromBool(i), u);
    });
  }
  _opaque(i, u, g) {
    S.usePointer((p) => {
      i._use((e) => {
        u._use((v) => {
          f._api._MagickImage_Opaque(this._instance, e, v, this.fromBool(g), p);
        });
      });
    });
  }
  _sigmoidalContrast(i, u, g, p) {
    let e;
    g !== void 0 ? typeof g == "number" ? e = g : e = g.multiply(je.max) : e = je.max * 0.5;
    const v = this.valueOrDefault(p, ie.Undefined);
    S.usePointer((I) => {
      f._api._MagickImage_SigmoidalContrast(this._instance, this.fromBool(i), u, e, v, I);
    });
  }
  _transparent(i, u) {
    i._use((g) => {
      S.usePointer((p) => {
        f._api._MagickImage_Transparent(this._instance, g, this.fromBool(u), p);
      });
    });
  }
  static createInstance() {
    return S.usePointer((i) => f._api._MagickImage_Create(0, i));
  }
  fromBool(i) {
    return i ? 1 : 0;
  }
  readOrPing(i, u, g, p) {
    S.use((e) => {
      const v = g instanceof Ae ? g : new Ae(this._settings);
      if (v._ping = i, this._settings._ping = i, typeof u == "string")
        v._fileName = u;
      else if (u instanceof y)
        v._fileName = "xc:" + u.toShortString(), v.width = typeof g == "number" ? g : 0, v.height = typeof p == "number" ? p : 0;
      else {
        this.readFromArray(u, v, e);
        return;
      }
      v._use((I) => {
        const G = f._api._MagickImage_ReadFile(I._instance, e.ptr);
        this._setInstance(G, e);
      });
    });
  }
  readFromArray(i, u, g) {
    u._use((p) => {
      wr(i, (e) => {
        const v = f._api._MagickImage_ReadBlob(p._instance, e, 0, i.byteLength, g.ptr);
        this._setInstance(v, g);
      });
    });
  }
  toBool(i) {
    return i === 1;
  }
  valueOrDefault(i, u) {
    return i === void 0 ? u : i;
  }
}
class Du {
  _wasmLocation;
  constructor(i) {
    i !== void 0 && (typeof i == "string" ? this._wasmLocation = i : this.wasmBinary = i);
  }
  wasmBinary;
  locateFile = (i, u) => {
    let g = this._wasmLocation;
    return (g === void 0 || g.length === 0) && (g = u + i), g;
  };
}
class f {
  loader;
  api;
  constructor() {
    this.loader = (i) => new Promise((u, g) => {
      if (this.api !== void 0) {
        u();
        return;
      }
      const p = new Du(i);
      pu(p).then((e) => {
        try {
          gn(e, "MAGICK_CONFIGURE_PATH", (v) => {
            gn(e, "/xml", (I) => {
              e._Environment_SetEnv(v, I), this.api = e, u();
            });
          });
        } catch (v) {
          g(v);
        }
      });
    });
  }
  static _create = () => new f();
  /** @internal */
  async _initialize(i) {
    await this.loader(i);
  }
  /** @internal */
  static get _api() {
    if (!Ht.api)
      throw new te("`await initializeImageMagick` should be called to initialize the library");
    return Ht.api;
  }
  /** @internal */
  static set _api(i) {
    Ht.api = i;
  }
  static read(i, u, g, p) {
    return oe._use((e) => {
      let v = p;
      if (i instanceof y)
        typeof u == "number" && typeof g == "number" && e.read(i, u, g);
      else if (typeof u != "number" && typeof g != "number") {
        v = g;
        let I;
        u instanceof Ae ? I = u : typeof u == "string" ? (I = new Ae(), I.format = u) : v = u, e.read(i, I);
      }
      return v(e);
    });
  }
  static readCollection(i, u, g) {
    return we.create()._use((e) => {
      let v = g, I;
      return u instanceof Ae ? I = u : typeof u == "string" ? (I = new Ae(), I.format = u) : v = u, e.read(i, I), v(e);
    });
  }
  static readFromCanvas(i, u) {
    return oe._use((g) => (g.readFromCanvas(i), u(g)));
  }
}
const Ht = f._create();
async function Qu(n) {
  await Ht._initialize(n);
}
class Cu {
  channel;
  depth;
  entropy;
  kurtosis;
  maximum;
  mean;
  minimum;
  skewness;
  standardDeviation;
  constructor(i, u) {
    this.channel = i, this.depth = f._api._ChannelStatistics_Depth_Get(u), this.entropy = f._api._ChannelStatistics_Entropy_Get(u), this.kurtosis = f._api._ChannelStatistics_Kurtosis_Get(u), this.maximum = f._api._ChannelStatistics_Maximum_Get(u), this.mean = f._api._ChannelStatistics_Mean_Get(u), this.minimum = f._api._ChannelStatistics_Minimum_Get(u), this.skewness = f._api._ChannelStatistics_Skewness_Get(u), this.standardDeviation = f._api._ChannelStatistics_StandardDeviation_Get(u);
  }
}
var Pu = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.Direct = 1] = "Direct", n[n.Pseudo = 2] = "Pseudo", n))(Pu || {}), bu = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.Bilevel = 1] = "Bilevel", n[n.Grayscale = 2] = "Grayscale", n[n.GrayscaleAlpha = 3] = "GrayscaleAlpha", n[n.Palette = 4] = "Palette", n[n.PaletteAlpha = 5] = "PaletteAlpha", n[n.TrueColor = 6] = "TrueColor", n[n.TrueColorAlpha = 7] = "TrueColorAlpha", n[n.ColorSeparation = 8] = "ColorSeparation", n[n.ColorSeparationAlpha = 9] = "ColorSeparationAlpha", n[n.Optimize = 10] = "Optimize", n[n.PaletteBilevelAlpha = 11] = "PaletteBilevelAlpha", n))(bu || {}), Gu = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.B44A = 1] = "B44A", n[n.B44 = 2] = "B44", n[n.BZip = 3] = "BZip", n[n.DXT1 = 4] = "DXT1", n[n.DXT3 = 5] = "DXT3", n[n.DXT5 = 6] = "DXT5", n[n.Fax = 7] = "Fax", n[n.Group4 = 8] = "Group4", n[n.JBIG1 = 9] = "JBIG1", n[n.JBIG2 = 10] = "JBIG2", n[n.JPEG2000 = 11] = "JPEG2000", n[n.JPEG = 12] = "JPEG", n[n.LosslessJPEG = 13] = "LosslessJPEG", n[n.LZMA = 14] = "LZMA", n[n.LZW = 15] = "LZW", n[n.NoCompression = 16] = "NoCompression", n[n.Piz = 17] = "Piz", n[n.Pxr24 = 18] = "Pxr24", n[n.RLE = 19] = "RLE", n[n.Zip = 20] = "Zip", n[n.ZipS = 21] = "ZipS", n[n.Zstd = 22] = "Zstd", n[n.WebP = 23] = "WebP", n[n.DWAA = 24] = "DWAA", n[n.DWAB = 25] = "DWAB", n[n.BC7 = 26] = "BC7", n[n.BC5 = 27] = "BC5", n))(Gu || {});
class cn {
  constructor(i, u, g) {
    this.format = i, this.name = u, this.value = g;
  }
  format;
  name;
  value;
}
class Eu {
  format;
  constructor(i) {
    this.format = i;
  }
  createDefine(i, u) {
    return typeof u == "boolean" ? new cn(this.format, i, u ? "true" : "false") : typeof u == "string" ? new cn(this.format, i, u) : new cn(this.format, i, u.toString());
  }
}
var Ru = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.Affine = 1] = "Affine", n[n.AffineProjection = 2] = "AffineProjection", n[n.ScaleRotateTranslate = 3] = "ScaleRotateTranslate", n[n.Perspective = 4] = "Perspective", n[n.PerspectiveProjection = 5] = "PerspectiveProjection", n[n.BilinearForward = 6] = "BilinearForward", n[n.BilinearReverse = 7] = "BilinearReverse", n[n.Polynomial = 8] = "Polynomial", n[n.Arc = 9] = "Arc", n[n.Polar = 10] = "Polar", n[n.DePolar = 11] = "DePolar", n[n.Cylinder2Plane = 12] = "Cylinder2Plane", n[n.Plane2Cylinder = 13] = "Plane2Cylinder", n[n.Barrel = 14] = "Barrel", n[n.BarrelInverse = 15] = "BarrelInverse", n[n.Shepards = 16] = "Shepards", n[n.Resize = 17] = "Resize", n[n.Sentinel = 18] = "Sentinel", n[n.RigidAffine = 19] = "RigidAffine", n))(Ru || {});
class Ju {
  _x;
  _y;
  _paintMethod;
  constructor(i, u, g) {
    this._x = i, this._y = u, this._paintMethod = g;
  }
  draw(i) {
    i.color(this._x, this._y, this._paintMethod);
  }
}
class Ku {
  _color;
  constructor(i) {
    this._color = i;
  }
  draw(i) {
    i.fillColor(this._color);
  }
}
class Zu {
  _opacity;
  constructor(i) {
    this._opacity = i;
  }
  draw(i) {
    i.fillOpacity(this._opacity.toDouble() / 100);
  }
}
class Ou {
  _pointSize;
  constructor(i) {
    this._pointSize = i;
  }
  draw(i) {
    i.fontPointSize(this._pointSize);
  }
}
class eo {
  _font;
  constructor(i) {
    this._font = i;
  }
  draw(i) {
    const u = ge._getFontFileName(this._font);
    i.font(u);
  }
}
class to {
  _gravity;
  constructor(i) {
    this._gravity = i;
  }
  draw(i) {
    i.gravity(this._gravity);
  }
}
class no {
  _upperLeftX;
  _upperLeftY;
  _lowerRightX;
  _lowerRightY;
  constructor(i, u, g, p) {
    this._upperLeftX = i, this._upperLeftY = u, this._lowerRightX = g, this._lowerRightY = p;
  }
  draw(i) {
    i.rectangle(this._upperLeftX, this._upperLeftY, this._lowerRightX, this._lowerRightY);
  }
}
class ro {
  _upperLeftX;
  _upperLeftY;
  _lowerRightX;
  _lowerRightY;
  _cornerWidth;
  _cornerHeight;
  constructor(i, u, g, p, e, v) {
    this._upperLeftX = i, this._upperLeftY = u, this._lowerRightX = g, this._lowerRightY = p, this._cornerWidth = e, this._cornerHeight = v;
  }
  draw(i) {
    i.roundRectangle(this._upperLeftX, this._upperLeftY, this._lowerRightX, this._lowerRightY, this._cornerWidth, this._cornerHeight);
  }
}
class ao {
  _alignment;
  constructor(i) {
    this._alignment = i;
  }
  draw(i) {
    i.textAlignment(this._alignment);
  }
}
class fn {
  _isEnabled;
  constructor(i) {
    this._isEnabled = i;
  }
  static get Disabled() {
    return new fn(!1);
  }
  static get Enabled() {
    return new fn(!0);
  }
  draw(i) {
    i.textAntialias(this._isEnabled);
  }
}
class io {
  _decoration;
  constructor(i) {
    this._decoration = i;
  }
  draw(i) {
    i.textDecoration(this._decoration);
  }
}
class so {
  _spacing;
  constructor(i) {
    this._spacing = i;
  }
  draw(i) {
    i.textInterlineSpacing(this._spacing);
  }
}
class uo {
  _spacing;
  constructor(i) {
    this._spacing = i;
  }
  draw(i) {
    i.textInterwordspacing(this._spacing);
  }
}
class oo {
  _kerning;
  constructor(i) {
    this._kerning = i;
  }
  draw(i) {
    i.textKerning(this._kerning);
  }
}
class _o {
  _color;
  constructor(i) {
    this._color = i;
  }
  draw(i) {
    i.textUnderColor(this._color);
  }
}
class lo {
  _x;
  _y;
  _value;
  constructor(i, u, g) {
    this._x = i, this._y = u, this._value = g;
  }
  draw(i) {
    i.text(this._x, this._y, this._value);
  }
}
var Au = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.LSB = 1] = "LSB", n[n.MSB = 2] = "MSB", n))(Au || {}), Tu = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.Absolute = 1] = "Absolute", n[n.Fuzz = 2] = "Fuzz", n[n.MeanAbsolute = 3] = "MeanAbsolute", n[n.MeanErrorPerPixel = 4] = "MeanErrorPerPixel", n[n.MeanSquared = 5] = "MeanSquared", n[n.NormalizedCrossCorrelation = 6] = "NormalizedCrossCorrelation", n[n.PeakAbsolute = 7] = "PeakAbsolute", n[n.PeakSignalToNoiseRatio = 8] = "PeakSignalToNoiseRatio", n[n.PerceptualHash = 9] = "PerceptualHash", n[n.RootMeanSquared = 10] = "RootMeanSquared", n[n.StructuralSimilarity = 11] = "StructuralSimilarity", n[n.StructuralDissimilarity = 12] = "StructuralDissimilarity", n))(Tu || {}), Lu = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.Abs = 1] = "Abs", n[n.Add = 2] = "Add", n[n.AddModulus = 3] = "AddModulus", n[n.And = 4] = "And", n[n.Cosine = 5] = "Cosine", n[n.Divide = 6] = "Divide", n[n.Exponential = 7] = "Exponential", n[n.GaussianNoise = 8] = "GaussianNoise", n[n.ImpulseNoise = 9] = "ImpulseNoise", n[n.LaplacianNoise = 10] = "LaplacianNoise", n[n.LeftShift = 11] = "LeftShift", n[n.Log = 12] = "Log", n[n.Max = 13] = "Max", n[n.Mean = 14] = "Mean", n[n.Median = 15] = "Median", n[n.Min = 16] = "Min", n[n.MultiplicativeNoise = 17] = "MultiplicativeNoise", n[n.Multiply = 18] = "Multiply", n[n.Or = 19] = "Or", n[n.PoissonNoise = 20] = "PoissonNoise", n[n.Pow = 21] = "Pow", n[n.RightShift = 22] = "RightShift", n[n.RootMeanSquare = 23] = "RootMeanSquare", n[n.Set = 24] = "Set", n[n.Sine = 25] = "Sine", n[n.Subtract = 26] = "Subtract", n[n.Sum = 27] = "Sum", n[n.ThresholdBlack = 28] = "ThresholdBlack", n[n.Threshold = 29] = "Threshold", n[n.ThresholdWhite = 30] = "ThresholdWhite", n[n.UniformNoise = 31] = "UniformNoise", n[n.Xor = 32] = "Xor", n[n.InverseLog = 33] = "InverseLog", n))(Lu || {}), Wu = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.Point = 1] = "Point", n[n.Box = 2] = "Box", n[n.Triangle = 3] = "Triangle", n[n.Hermite = 4] = "Hermite", n[n.Hann = 5] = "Hann", n[n.Hamming = 6] = "Hamming", n[n.Blackman = 7] = "Blackman", n[n.Gaussian = 8] = "Gaussian", n[n.Quadratic = 9] = "Quadratic", n[n.Cubic = 10] = "Cubic", n[n.Catrom = 11] = "Catrom", n[n.Mitchell = 12] = "Mitchell", n[n.Jinc = 13] = "Jinc", n[n.Sinc = 14] = "Sinc", n[n.SincFast = 15] = "SincFast", n[n.Kaiser = 16] = "Kaiser", n[n.Welch = 17] = "Welch", n[n.Parzen = 18] = "Parzen", n[n.Bohman = 19] = "Bohman", n[n.Bartlett = 20] = "Bartlett", n[n.Lagrange = 21] = "Lagrange", n[n.Lanczos = 22] = "Lanczos", n[n.LanczosSharp = 23] = "LanczosSharp", n[n.Lanczos2 = 24] = "Lanczos2", n[n.Lanczos2Sharp = 25] = "Lanczos2Sharp", n[n.Robidoux = 26] = "Robidoux", n[n.RobidouxSharp = 27] = "RobidouxSharp", n[n.Cosine = 28] = "Cosine", n[n.Spline = 29] = "Spline", n[n.LanczosRadius = 30] = "LanczosRadius", n[n.CubicSpline = 31] = "CubicSpline", n))(Wu || {}), Bu = /* @__PURE__ */ ((n) => (n[n.Raw = 0] = "Raw", n[n.SRGB = 1] = "SRGB", n[n.AdobeRGB = 2] = "AdobeRGB", n[n.WideGamutRGB = 3] = "WideGamutRGB", n[n.KodakProPhotoRGB = 4] = "KodakProPhotoRGB", n[n.XYZ = 5] = "XYZ", n[n.ACES = 6] = "ACES", n))(Bu || {});
class co extends Eu {
  constructor() {
    super(Te.Dng);
  }
  disableAutoBrightness;
  outputColor;
  useAutoWhitebalance;
  useCameraWhitebalance;
  getDefines() {
    const i = [];
    return this.hasValue(this.disableAutoBrightness) && i.push(this.createDefine("no-auto-bright", this.disableAutoBrightness)), this.hasValue(this.outputColor) && i.push(this.createDefine("output-color", this.outputColor)), this.hasValue(this.useCameraWhitebalance) && i.push(this.createDefine("use-camera-wb", this.useCameraWhitebalance)), this.hasValue(this.useAutoWhitebalance) && i.push(this.createDefine("use-auto-wb", this.useAutoWhitebalance)), i;
  }
  hasValue(i) {
    return i != null;
  }
}
var xu = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.None = 1] = "None", n[n.Background = 2] = "Background", n[n.Previous = 3] = "Previous", n))(xu || {}), Nu = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.NoInterlace = 1] = "NoInterlace", n[n.Line = 2] = "Line", n[n.Plane = 3] = "Plane", n[n.Partition = 4] = "Partition", n[n.Gif = 5] = "Gif", n[n.Jpeg = 6] = "Jpeg", n[n.Png = 7] = "Png", n))(Nu || {}), zu = /* @__PURE__ */ ((n) => (n.Undefined = "Undefined", n.Unity = "Unity", n.Gaussian = "Gaussian", n.DoG = "DoG", n.LoG = "LoG", n.Blur = "Blur", n.Comet = "Comet", n.Binomial = "Binomial", n.Laplacian = "Laplacian", n.Sobel = "Sobel", n.FreiChen = "FreiChen", n.Roberts = "Roberts", n.Prewitt = "Prewitt", n.Compass = "Compass", n.Kirsch = "Kirsch", n.Diamond = "Diamond", n.Square = "Square", n.Rectangle = "Rectangle", n.Octagon = "Octagon", n.Disk = "Disk", n.Plus = "Plus", n.Cross = "Cross", n.Ring = "Ring", n.Peaks = "Peaks", n.Edges = "Edges", n.Corners = "Corners", n.Diagonals = "Diagonals", n.LineEnds = "LineEnds", n.LineJunctions = "LineJunctions", n.Ridges = "Ridges", n.ConvexHull = "ConvexHull", n.ThinSE = "ThinSE", n.Skeleton = "Skeleton", n.Chebyshev = "Chebyshev", n.Manhattan = "Manhattan", n.Octagonal = "Octagonal", n.Euclidean = "Euclidean", n.UserDefined = "UserDefined", n))(zu || {});
class go {
  static get None() {
    return new y(255, 255, 255, 0);
  }
  static get Transparent() {
    return new y(255, 255, 255, 0);
  }
  static get AliceBlue() {
    return new y(240, 248, 255, 255);
  }
  static get AntiqueWhite() {
    return new y(250, 235, 215, 255);
  }
  static get Aqua() {
    return new y(0, 255, 255, 255);
  }
  static get Aquamarine() {
    return new y(127, 255, 212, 255);
  }
  static get Azure() {
    return new y(240, 255, 255, 255);
  }
  static get Beige() {
    return new y(245, 245, 220, 255);
  }
  static get Bisque() {
    return new y(255, 228, 196, 255);
  }
  static get Black() {
    return new y(0, 0, 0, 255);
  }
  static get BlanchedAlmond() {
    return new y(255, 235, 205, 255);
  }
  static get Blue() {
    return new y(0, 0, 255, 255);
  }
  static get BlueViolet() {
    return new y(138, 43, 226, 255);
  }
  static get Brown() {
    return new y(165, 42, 42, 255);
  }
  static get BurlyWood() {
    return new y(222, 184, 135, 255);
  }
  static get CadetBlue() {
    return new y(95, 158, 160, 255);
  }
  static get Chartreuse() {
    return new y(127, 255, 0, 255);
  }
  static get Chocolate() {
    return new y(210, 105, 30, 255);
  }
  static get Coral() {
    return new y(255, 127, 80, 255);
  }
  static get CornflowerBlue() {
    return new y(100, 149, 237, 255);
  }
  static get Cornsilk() {
    return new y(255, 248, 220, 255);
  }
  static get Crimson() {
    return new y(220, 20, 60, 255);
  }
  static get Cyan() {
    return new y(0, 255, 255, 255);
  }
  static get DarkBlue() {
    return new y(0, 0, 139, 255);
  }
  static get DarkCyan() {
    return new y(0, 139, 139, 255);
  }
  static get DarkGoldenrod() {
    return new y(184, 134, 11, 255);
  }
  static get DarkGray() {
    return new y(169, 169, 169, 255);
  }
  static get DarkGreen() {
    return new y(0, 100, 0, 255);
  }
  static get DarkKhaki() {
    return new y(189, 183, 107, 255);
  }
  static get DarkMagenta() {
    return new y(139, 0, 139, 255);
  }
  static get DarkOliveGreen() {
    return new y(85, 107, 47, 255);
  }
  static get DarkOrange() {
    return new y(255, 140, 0, 255);
  }
  static get DarkOrchid() {
    return new y(153, 50, 204, 255);
  }
  static get DarkRed() {
    return new y(139, 0, 0, 255);
  }
  static get DarkSalmon() {
    return new y(233, 150, 122, 255);
  }
  static get DarkSeaGreen() {
    return new y(143, 188, 139, 255);
  }
  static get DarkSlateBlue() {
    return new y(72, 61, 139, 255);
  }
  static get DarkSlateGray() {
    return new y(47, 79, 79, 255);
  }
  static get DarkTurquoise() {
    return new y(0, 206, 209, 255);
  }
  static get DarkViolet() {
    return new y(148, 0, 211, 255);
  }
  static get DeepPink() {
    return new y(255, 20, 147, 255);
  }
  static get DeepSkyBlue() {
    return new y(0, 191, 255, 255);
  }
  static get DimGray() {
    return new y(105, 105, 105, 255);
  }
  static get DodgerBlue() {
    return new y(30, 144, 255, 255);
  }
  static get Firebrick() {
    return new y(178, 34, 34, 255);
  }
  static get FloralWhite() {
    return new y(255, 250, 240, 255);
  }
  static get ForestGreen() {
    return new y(34, 139, 34, 255);
  }
  static get Fuchsia() {
    return new y(255, 0, 255, 255);
  }
  static get Gainsboro() {
    return new y(220, 220, 220, 255);
  }
  static get GhostWhite() {
    return new y(248, 248, 255, 255);
  }
  static get Gold() {
    return new y(255, 215, 0, 255);
  }
  static get Goldenrod() {
    return new y(218, 165, 32, 255);
  }
  static get Gray() {
    return new y(128, 128, 128, 255);
  }
  static get Green() {
    return new y(0, 128, 0, 255);
  }
  static get GreenYellow() {
    return new y(173, 255, 47, 255);
  }
  static get Honeydew() {
    return new y(240, 255, 240, 255);
  }
  static get HotPink() {
    return new y(255, 105, 180, 255);
  }
  static get IndianRed() {
    return new y(205, 92, 92, 255);
  }
  static get Indigo() {
    return new y(75, 0, 130, 255);
  }
  static get Ivory() {
    return new y(255, 255, 240, 255);
  }
  static get Khaki() {
    return new y(240, 230, 140, 255);
  }
  static get Lavender() {
    return new y(230, 230, 250, 255);
  }
  static get LavenderBlush() {
    return new y(255, 240, 245, 255);
  }
  static get LawnGreen() {
    return new y(124, 252, 0, 255);
  }
  static get LemonChiffon() {
    return new y(255, 250, 205, 255);
  }
  static get LightBlue() {
    return new y(173, 216, 230, 255);
  }
  static get LightCoral() {
    return new y(240, 128, 128, 255);
  }
  static get LightCyan() {
    return new y(224, 255, 255, 255);
  }
  static get LightGoldenrodYellow() {
    return new y(250, 250, 210, 255);
  }
  static get LightGreen() {
    return new y(144, 238, 144, 255);
  }
  static get LightGray() {
    return new y(211, 211, 211, 255);
  }
  static get LightPink() {
    return new y(255, 182, 193, 255);
  }
  static get LightSalmon() {
    return new y(255, 160, 122, 255);
  }
  static get LightSeaGreen() {
    return new y(32, 178, 170, 255);
  }
  static get LightSkyBlue() {
    return new y(135, 206, 250, 255);
  }
  static get LightSlateGray() {
    return new y(119, 136, 153, 255);
  }
  static get LightSteelBlue() {
    return new y(176, 196, 222, 255);
  }
  static get LightYellow() {
    return new y(255, 255, 224, 255);
  }
  static get Lime() {
    return new y(0, 255, 0, 255);
  }
  static get LimeGreen() {
    return new y(50, 205, 50, 255);
  }
  static get Linen() {
    return new y(250, 240, 230, 255);
  }
  static get Magenta() {
    return new y(255, 0, 255, 255);
  }
  static get Maroon() {
    return new y(128, 0, 0, 255);
  }
  static get MediumAquamarine() {
    return new y(102, 205, 170, 255);
  }
  static get MediumBlue() {
    return new y(0, 0, 205, 255);
  }
  static get MediumOrchid() {
    return new y(186, 85, 211, 255);
  }
  static get MediumPurple() {
    return new y(147, 112, 219, 255);
  }
  static get MediumSeaGreen() {
    return new y(60, 179, 113, 255);
  }
  static get MediumSlateBlue() {
    return new y(123, 104, 238, 255);
  }
  static get MediumSpringGreen() {
    return new y(0, 250, 154, 255);
  }
  static get MediumTurquoise() {
    return new y(72, 209, 204, 255);
  }
  static get MediumVioletRed() {
    return new y(199, 21, 133, 255);
  }
  static get MidnightBlue() {
    return new y(25, 25, 112, 255);
  }
  static get MintCream() {
    return new y(245, 255, 250, 255);
  }
  static get MistyRose() {
    return new y(255, 228, 225, 255);
  }
  static get Moccasin() {
    return new y(255, 228, 181, 255);
  }
  static get NavajoWhite() {
    return new y(255, 222, 173, 255);
  }
  static get Navy() {
    return new y(0, 0, 128, 255);
  }
  static get OldLace() {
    return new y(253, 245, 230, 255);
  }
  static get Olive() {
    return new y(128, 128, 0, 255);
  }
  static get OliveDrab() {
    return new y(107, 142, 35, 255);
  }
  static get Orange() {
    return new y(255, 165, 0, 255);
  }
  static get OrangeRed() {
    return new y(255, 69, 0, 255);
  }
  static get Orchid() {
    return new y(218, 112, 214, 255);
  }
  static get PaleGoldenrod() {
    return new y(238, 232, 170, 255);
  }
  static get PaleGreen() {
    return new y(152, 251, 152, 255);
  }
  static get PaleTurquoise() {
    return new y(175, 238, 238, 255);
  }
  static get PaleVioletRed() {
    return new y(219, 112, 147, 255);
  }
  static get PapayaWhip() {
    return new y(255, 239, 213, 255);
  }
  static get PeachPuff() {
    return new y(255, 218, 185, 255);
  }
  static get Peru() {
    return new y(205, 133, 63, 255);
  }
  static get Pink() {
    return new y(255, 192, 203, 255);
  }
  static get Plum() {
    return new y(221, 160, 221, 255);
  }
  static get PowderBlue() {
    return new y(176, 224, 230, 255);
  }
  static get Purple() {
    return new y(128, 0, 128, 255);
  }
  static get Red() {
    return new y(255, 0, 0, 255);
  }
  static get RosyBrown() {
    return new y(188, 143, 143, 255);
  }
  static get RoyalBlue() {
    return new y(65, 105, 225, 255);
  }
  static get SaddleBrown() {
    return new y(139, 69, 19, 255);
  }
  static get Salmon() {
    return new y(250, 128, 114, 255);
  }
  static get SandyBrown() {
    return new y(244, 164, 96, 255);
  }
  static get SeaGreen() {
    return new y(46, 139, 87, 255);
  }
  static get SeaShell() {
    return new y(255, 245, 238, 255);
  }
  static get Sienna() {
    return new y(160, 82, 45, 255);
  }
  static get Silver() {
    return new y(192, 192, 192, 255);
  }
  static get SkyBlue() {
    return new y(135, 206, 235, 255);
  }
  static get SlateBlue() {
    return new y(106, 90, 205, 255);
  }
  static get SlateGray() {
    return new y(112, 128, 144, 255);
  }
  static get Snow() {
    return new y(255, 250, 250, 255);
  }
  static get SpringGreen() {
    return new y(0, 255, 127, 255);
  }
  static get SteelBlue() {
    return new y(70, 130, 180, 255);
  }
  static get Tan() {
    return new y(210, 180, 140, 255);
  }
  static get Teal() {
    return new y(0, 128, 128, 255);
  }
  static get Thistle() {
    return new y(216, 191, 216, 255);
  }
  static get Tomato() {
    return new y(255, 99, 71, 255);
  }
  static get Turquoise() {
    return new y(64, 224, 208, 255);
  }
  static get Violet() {
    return new y(238, 130, 238, 255);
  }
  static get Wheat() {
    return new y(245, 222, 179, 255);
  }
  static get White() {
    return new y(255, 255, 255, 255);
  }
  static get WhiteSmoke() {
    return new y(245, 245, 245, 255);
  }
  static get Yellow() {
    return new y(255, 255, 0, 255);
  }
  static get YellowGreen() {
    return new y(154, 205, 50, 255);
  }
}
var Hu = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.Convolve = 1] = "Convolve", n[n.Correlate = 2] = "Correlate", n[n.Erode = 3] = "Erode", n[n.Dilate = 4] = "Dilate", n[n.ErodeIntensity = 5] = "ErodeIntensity", n[n.DilateIntensity = 6] = "DilateIntensity", n[n.IterativeDistance = 7] = "IterativeDistance", n[n.Open = 8] = "Open", n[n.Close = 9] = "Close", n[n.OpenIntensity = 10] = "OpenIntensity", n[n.CloseIntensity = 11] = "CloseIntensity", n[n.Smooth = 12] = "Smooth", n[n.EdgeIn = 13] = "EdgeIn", n[n.EdgeOut = 14] = "EdgeOut", n[n.Edge = 15] = "Edge", n[n.TopHat = 16] = "TopHat", n[n.BottomHat = 17] = "BottomHat", n[n.HitAndMiss = 18] = "HitAndMiss", n[n.Thinning = 19] = "Thinning", n[n.Thicken = 20] = "Thicken", n[n.Distance = 21] = "Distance", n[n.Voronoi = 22] = "Voronoi", n))(Hu || {}), Fu = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.TopLeft = 1] = "TopLeft", n[n.TopRight = 2] = "TopRight", n[n.BottomRight = 3] = "BottomRight", n[n.BottomLeft = 4] = "BottomLeft", n[n.LeftTop = 5] = "LeftTop", n[n.RightTop = 6] = "RightTop", n[n.RightBottom = 7] = "RightBottom", n[n.LeftBotom = 8] = "LeftBotom", n))(Fu || {}), Uu = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.Point = 1] = "Point", n[n.Replace = 2] = "Replace", n[n.Floodfill = 3] = "Floodfill", n[n.FillToBorder = 4] = "FillToBorder", n[n.Reset = 5] = "Reset", n))(Uu || {}), ju = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.Average = 1] = "Average", n[n.Average9 = 2] = "Average9", n[n.Average16 = 3] = "Average16", n[n.Background = 4] = "Background", n[n.Bilinear = 5] = "Bilinear", n[n.Blend = 6] = "Blend", n[n.Catrom = 7] = "Catrom", n[n.Integer = 8] = "Integer", n[n.Mesh = 9] = "Mesh", n[n.Nearest = 10] = "Nearest", n[n.Spline = 11] = "Spline", n))(ju || {});
class fo {
  bestFit = !1;
  scale;
  viewport;
  /** @internal */
  _removeArtifacts(i) {
    this.scale !== void 0 && i.removeArtifact("distort:scale"), this.viewport !== void 0 && i.removeArtifact("distort:viewport");
  }
  /** @internal */
  _setArtifacts(i) {
    this.scale !== void 0 && i.setArtifact("distort:scale", this.scale.toString()), this.viewport !== void 0 && i.setArtifact("distort:viewport", this.viewport.toString());
  }
}
class $u extends Oe {
  constructor(i) {
    const u = f._api._MontageSettings_Create(), g = f._api._MontageSettings_Dispose;
    if (super(u, g), i.backgroundColor !== void 0 && i.backgroundColor._use((p) => {
      f._api._MontageSettings_SetBackgroundColor(this._instance, p);
    }), i.borderColor !== void 0 && i.borderColor._use((p) => {
      f._api._MontageSettings_SetBorderColor(this._instance, p);
    }), i.borderWidth !== void 0 && f._api._MontageSettings_SetBorderWidth(this._instance, i.borderWidth), i.fillColor !== void 0 && i.fillColor._use((p) => {
      f._api._MontageSettings_SetFillColor(this._instance, p);
    }), i.font !== void 0) {
      const p = ge._getFontFileName(i.font);
      W(p, (e) => {
        f._api._MontageSettings_SetFont(this._instance, e);
      });
    }
    i.fontPointsize !== void 0 && f._api._MontageSettings_SetFontPointsize(this._instance, i.fontPointsize), i.frameGeometry !== void 0 && W(i.frameGeometry.toString(), (p) => {
      f._api._MontageSettings_SetFrameGeometry(this._instance, p);
    }), i.geometry !== void 0 && W(i.geometry.toString(), (p) => {
      f._api._MontageSettings_SetGeometry(this._instance, p);
    }), i.gravity !== void 0 && f._api._MontageSettings_SetGravity(this._instance, i.gravity), i.shadow !== void 0 && f._api._MontageSettings_SetShadow(this._instance, i.shadow ? 1 : 0), i.strokeColor !== void 0 && i.strokeColor._use((p) => {
      f._api._MontageSettings_SetStrokeColor(this._instance, p);
    }), i.textureFileName !== void 0 && W(i.textureFileName, (p) => {
      f._api._MontageSettings_SetTextureFileName(this._instance, p);
    }), i.tileGeometry !== void 0 && W(i.tileGeometry.toString(), (p) => {
      f._api._MontageSettings_SetTileGeometry(this._instance, p);
    }), i.title !== void 0 && W(i.title, (p) => {
      f._api._MontageSettings_SetTitle(this._instance, p);
    });
  }
}
class mo {
  backgroundColor;
  borderColor;
  borderWidth;
  fillColor;
  font;
  fontPointsize;
  frameGeometry;
  geometry;
  gravity;
  label;
  shadow;
  strokeColor;
  textureFileName;
  tileGeometry;
  title;
  transparentColor;
  _use(i) {
    const u = new $u(this);
    return be._disposeAfterExecution(u, i);
  }
}
class po {
  channels = ie.Composite;
  convolveBias;
  convolveScale;
  iterations = 1;
  method;
  kernel;
  constructor(i, u, g) {
    this.method = i, this.kernel = u, g !== void 0 && (this.kernel += `:${g}`);
  }
}
var Yu = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.Left = 1] = "Left", n[n.Center = 2] = "Center", n[n.Right = 3] = "Right", n))(Yu || {}), Xu = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.None = 1] = "None", n[n.Underline = 2] = "Underline", n[n.Overline = 3] = "Overline", n[n.LineThrough = 4] = "LineThrough", n))(Xu || {}), qu = /* @__PURE__ */ ((n) => (n[n.Undefined = 0] = "Undefined", n[n.Background = 1] = "Background", n[n.Dither = 2] = "Dither", n[n.Edge = 3] = "Edge", n[n.Mirror = 4] = "Mirror", n[n.Random = 5] = "Random", n[n.Tile = 6] = "Tile", n[n.Transparent = 7] = "Transparent", n[n.Mask = 8] = "Mask", n[n.Black = 9] = "Black", n[n.Gray = 10] = "Gray", n[n.White = 11] = "White", n[n.HorizontalTile = 12] = "HorizontalTile", n[n.VerticalTile = 13] = "VerticalTile", n[n.HorizontalTileEdge = 14] = "HorizontalTileEdge", n[n.VerticalTileEdge = 15] = "VerticalTileEdge", n[n.CheckerTile = 16] = "CheckerTile", n))(qu || {});
export {
  kr as AlphaOption,
  gu as AutoThresholdMethod,
  Cu as ChannelStatistics,
  ie as Channels,
  du as ChromaticityInfo,
  Pu as ClassType,
  Ir as ColorSpace,
  bu as ColorType,
  Nt as CompositeOperator,
  Gu as CompressionMethod,
  Eu as DefinesCreator,
  hu as Density,
  Mr as DensityUnit,
  Ru as DistortMethod,
  fo as DistortSettings,
  Bu as DngOutputColor,
  co as DngReadDefines,
  Ju as DrawableColor,
  Ku as DrawableFillColor,
  Zu as DrawableFillOpacity,
  eo as DrawableFont,
  Ou as DrawableFontPointSize,
  to as DrawableGravity,
  no as DrawableRectangle,
  ro as DrawableRoundRectangle,
  lo as DrawableText,
  ao as DrawableTextAlignment,
  fn as DrawableTextAntialias,
  io as DrawableTextDecoration,
  so as DrawableTextInterlineSpacing,
  uo as DrawableTextInterwordSpacing,
  oo as DrawableTextKerning,
  _o as DrawableTextUnderColor,
  mn as DrawingSettings,
  pn as DrawingWand,
  Au as Endian,
  Tu as ErrorMetric,
  Lu as EvaluateOperator,
  Wu as FilterType,
  xu as GifDisposeMethod,
  zt as Gravity,
  f as ImageMagick,
  ku as ImageProfile,
  Nu as Interlace,
  zu as Kernel,
  yu as LogEvent,
  Z as LogEventTypes,
  ge as Magick,
  y as MagickColor,
  go as MagickColors,
  cn as MagickDefine,
  te as MagickError,
  Ft as MagickErrorSeverity,
  Te as MagickFormat,
  Pe as MagickFormatInfo,
  ce as MagickGeometry,
  oe as MagickImage,
  we as MagickImageCollection,
  Ae as MagickReadSettings,
  Ze as MagickSettings,
  mo as MontageSettings,
  Hu as MorphologyMethod,
  po as MorphologySettings,
  Oe as NativeInstance,
  Fu as OrientationType,
  Uu as PaintMethod,
  se as Percentage,
  Re as PixelChannel,
  Fe as PixelCollection,
  Pr as PixelIntensityMethod,
  ju as PixelInterpolateMethod,
  pt as Point,
  Ue as PrimaryInfo,
  je as Quantum,
  dn as Statistics,
  Yu as TextAlignment,
  Xu as TextDecoration,
  qu as VirtualPixelMethod,
  wu as _getEdges,
  Qu as initializeImageMagick
};
