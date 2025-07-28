var __Html5QrcodeLibrary__;
(() => {
    var t = {
            449: function(t, e, r) {
                ! function(t) {
                    "use strict";
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                    };
                    var n, i = function(t) {
                        function r(e) {
                            var r, n, i, o = this.constructor,
                                s = t.call(this, e) || this;
                            return Object.defineProperty(s, "name", {
                                    value: o.name,
                                    enumerable: !1
                                }), r = s, n = o.prototype, (i = Object.setPrototypeOf) ? i(r, n) : r.__proto__ = n,
                                function(t, e) {
                                    void 0 === e && (e = t.constructor);
                                    var r = Error.captureStackTrace;
                                    r && r(t, e)
                                }(s), s
                        }
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }(r, t), r
                    }(Error);
                    class o extends i {
                        constructor(t) {
                            super(t), this.message = t
                        }
                        getKind() {
                            return this.constructor.kind
                        }
                    }
                    o.kind = "Exception";
                    class s extends o {}
                    s.kind = "ArgumentException";
                    class a extends o {}
                    a.kind = "IllegalArgumentException";
                    class l {
                        constructor(t) {
                            if (this.binarizer = t, null === t) throw new a("Binarizer must be non-null.")
                        }
                        getWidth() {
                            return this.binarizer.getWidth()
                        }
                        getHeight() {
                            return this.binarizer.getHeight()
                        }
                        getBlackRow(t, e) {
                            return this.binarizer.getBlackRow(t, e)
                        }
                        getBlackMatrix() {
                            return null !== this.matrix && void 0 !== this.matrix || (this.matrix = this.binarizer.getBlackMatrix()), this.matrix
                        }
                        isCropSupported() {
                            return this.binarizer.getLuminanceSource().isCropSupported()
                        }
                        crop(t, e, r, n) {
                            const i = this.binarizer.getLuminanceSource().crop(t, e, r, n);
                            return new l(this.binarizer.createBinarizer(i))
                        }
                        isRotateSupported() {
                            return this.binarizer.getLuminanceSource().isRotateSupported()
                        }
                        rotateCounterClockwise() {
                            const t = this.binarizer.getLuminanceSource().rotateCounterClockwise();
                            return new l(this.binarizer.createBinarizer(t))
                        }
                        rotateCounterClockwise45() {
                            const t = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
                            return new l(this.binarizer.createBinarizer(t))
                        }
                        toString() {
                            try {
                                return this.getBlackMatrix().toString()
                            } catch (t) {
                                return ""
                            }
                        }
                    }
                    class c extends o {
                        static getChecksumInstance() {
                            return new c
                        }
                    }
                    c.kind = "ChecksumException";
                    class h {
                        constructor(t) {
                            this.source = t
                        }
                        getLuminanceSource() {
                            return this.source
                        }
                        getWidth() {
                            return this.source.getWidth()
                        }
                        getHeight() {
                            return this.source.getHeight()
                        }
                    }
                    class u {
                        static arraycopy(t, e, r, n, i) {
                            for (; i--;) r[n++] = t[e++]
                        }
                        static currentTimeMillis() {
                            return Date.now()
                        }
                    }
                    class d extends o {}
                    d.kind = "IndexOutOfBoundsException";
                    class g extends d {
                        constructor(t, e) {
                            super(e), this.index = t, this.message = e
                        }
                    }
                    g.kind = "ArrayIndexOutOfBoundsException";
                    class f {
                        static fill(t, e) {
                            for (let r = 0, n = t.length; r < n; r++) t[r] = e
                        }
                        static fillWithin(t, e, r, n) {
                            f.rangeCheck(t.length, e, r);
                            for (let i = e; i < r; i++) t[i] = n
                        }
                        static rangeCheck(t, e, r) {
                            if (e > r) throw new a("fromIndex(" + e + ") > toIndex(" + r + ")");
                            if (e < 0) throw new g(e);
                            if (r > t) throw new g(r)
                        }
                        static asList(...t) {
                            return t
                        }
                        static create(t, e, r) {
                            return Array.from({
                                length: t
                            }).map((t => Array.from({
                                length: e
                            }).fill(r)))
                        }
                        static createInt32Array(t, e, r) {
                            return Array.from({
                                length: t
                            }).map((t => Int32Array.from({
                                length: e
                            }).fill(r)))
                        }
                        static equals(t, e) {
                            if (!t) return !1;
                            if (!e) return !1;
                            if (!t.length) return !1;
                            if (!e.length) return !1;
                            if (t.length !== e.length) return !1;
                            for (let r = 0, n = t.length; r < n; r++)
                                if (t[r] !== e[r]) return !1;
                            return !0
                        }
                        static hashCode(t) {
                            if (null === t) return 0;
                            let e = 1;
                            for (const r of t) e = 31 * e + r;
                            return e
                        }
                        static fillUint8Array(t, e) {
                            for (let r = 0; r !== t.length; r++) t[r] = e
                        }
                        static copyOf(t, e) {
                            return t.slice(0, e)
                        }
                        static copyOfUint8Array(t, e) {
                            if (t.length <= e) {
                                const r = new Uint8Array(e);
                                return r.set(t), r
                            }
                            return t.slice(0, e)
                        }
                        static copyOfRange(t, e, r) {
                            const n = r - e,
                                i = new Int32Array(n);
                            return u.arraycopy(t, e, i, 0, n), i
                        }
                        static binarySearch(t, e, r) {
                            void 0 === r && (r = f.numberComparator);
                            let n = 0,
                                i = t.length - 1;
                            for (; n <= i;) {
                                const o = i + n >> 1,
                                    s = r(e, t[o]);
                                if (s > 0) n = o + 1;
                                else {
                                    if (!(s < 0)) return o;
                                    i = o - 1
                                }
                            }
                            return -n - 1
                        }
                        static numberComparator(t, e) {
                            return t - e
                        }
                    }
                    class w {
                        static numberOfTrailingZeros(t) {
                            let e;
                            if (0 === t) return 32;
                            let r = 31;
                            return e = t << 16, 0 !== e && (r -= 16, t = e), e = t << 8, 0 !== e && (r -= 8, t = e), e = t << 4, 0 !== e && (r -= 4, t = e), e = t << 2, 0 !== e && (r -= 2, t = e), r - (t << 1 >>> 31)
                        }
                        static numberOfLeadingZeros(t) {
                            if (0 === t) return 32;
                            let e = 1;
                            return t >>> 16 == 0 && (e += 16, t <<= 16), t >>> 24 == 0 && (e += 8, t <<= 8), t >>> 28 == 0 && (e += 4, t <<= 4), t >>> 30 == 0 && (e += 2, t <<= 2), e -= t >>> 31, e
                        }
                        static toHexString(t) {
                            return t.toString(16)
                        }
                        static toBinaryString(t) {
                            return String(parseInt(String(t), 2))
                        }
                        static bitCount(t) {
                            return t = (t = (858993459 & (t -= t >>> 1 & 1431655765)) + (t >>> 2 & 858993459)) + (t >>> 4) & 252645135, 63 & (t += t >>> 8) + (t >>> 16)
                        }
                        static truncDivision(t, e) {
                            return Math.trunc(t / e)
                        }
                        static parseInt(t, e) {
                            return parseInt(t, e)
                        }
                    }
                    w.MIN_VALUE_32_BITS = -2147483648, w.MAX_VALUE = Number.MAX_SAFE_INTEGER;
                    class A {
                        constructor(t, e) {
                            void 0 === t ? (this.size = 0, this.bits = new Int32Array(1)) : (this.size = t, this.bits = null == e ? A.makeArray(t) : e)
                        }
                        getSize() {
                            return this.size
                        }
                        getSizeInBytes() {
                            return Math.floor((this.size + 7) / 8)
                        }
                        ensureCapacity(t) {
                            if (t > 32 * this.bits.length) {
                                const e = A.makeArray(t);
                                u.arraycopy(this.bits, 0, e, 0, this.bits.length), this.bits = e
                            }
                        }
                        get(t) {
                            return 0 != (this.bits[Math.floor(t / 32)] & 1 << (31 & t))
                        }
                        set(t) {
                            this.bits[Math.floor(t / 32)] |= 1 << (31 & t)
                        }
                        flip(t) {
                            this.bits[Math.floor(t / 32)] ^= 1 << (31 & t)
                        }
                        getNextSet(t) {
                            const e = this.size;
                            if (t >= e) return e;
                            const r = this.bits;
                            let n = Math.floor(t / 32),
                                i = r[n];
                            i &= ~((1 << (31 & t)) - 1);
                            const o = r.length;
                            for (; 0 === i;) {
                                if (++n === o) return e;
                                i = r[n]
                            }
                            const s = 32 * n + w.numberOfTrailingZeros(i);
                            return s > e ? e : s
                        }
                        getNextUnset(t) {
                            const e = this.size;
                            if (t >= e) return e;
                            const r = this.bits;
                            let n = Math.floor(t / 32),
                                i = ~r[n];
                            i &= ~((1 << (31 & t)) - 1);
                            const o = r.length;
                            for (; 0 === i;) {
                                if (++n === o) return e;
                                i = ~r[n]
                            }
                            const s = 32 * n + w.numberOfTrailingZeros(i);
                            return s > e ? e : s
                        }
                        setBulk(t, e) {
                            this.bits[Math.floor(t / 32)] = e
                        }
                        setRange(t, e) {
                            if (e < t || t < 0 || e > this.size) throw new a;
                            if (e === t) return;
                            e--;
                            const r = Math.floor(t / 32),
                                n = Math.floor(e / 32),
                                i = this.bits;
                            for (let o = r; o <= n; o++) {
                                const s = (2 << (o < n ? 31 : 31 & e)) - (1 << (o > r ? 0 : 31 & t));
                                i[o] |= s
                            }
                        }
                        clear() {
                            const t = this.bits.length,
                                e = this.bits;
                            for (let r = 0; r < t; r++) e[r] = 0
                        }
                        isRange(t, e, r) {
                            if (e < t || t < 0 || e > this.size) throw new a;
                            if (e === t) return !0;
                            e--;
                            const n = Math.floor(t / 32),
                                i = Math.floor(e / 32),
                                o = this.bits;
                            for (let s = n; s <= i; s++) {
                                const a = (2 << (s < i ? 31 : 31 & e)) - (1 << (s > n ? 0 : 31 & t)) & 4294967295;
                                if ((o[s] & a) !== (r ? a : 0)) return !1
                            }
                            return !0
                        }
                        appendBit(t) {
                            this.ensureCapacity(this.size + 1), t && (this.bits[Math.floor(this.size / 32)] |= 1 << (31 & this.size)), this.size++
                        }
                        appendBits(t, e) {
                            if (e < 0 || e > 32) throw new a("Num bits must be between 0 and 32");
                            this.ensureCapacity(this.size + e);
                            for (let r = e; r > 0; r--) this.appendBit(1 == (t >> r - 1 & 1))
                        }
                        appendBitArray(t) {
                            const e = t.size;
                            this.ensureCapacity(this.size + e);
                            for (let r = 0; r < e; r++) this.appendBit(t.get(r))
                        }
                        xor(t) {
                            if (this.size !== t.size) throw new a("Sizes don't match");
                            const e = this.bits;
                            for (let r = 0, n = e.length; r < n; r++) e[r] ^= t.bits[r]
                        }
                        toBytes(t, e, r, n) {
                            for (let i = 0; i < n; i++) {
                                let n = 0;
                                for (let e = 0; e < 8; e++) this.get(t) && (n |= 1 << 7 - e), t++;
                                e[r + i] = n
                            }
                        }
                        getBitArray() {
                            return this.bits
                        }
                        reverse() {
                            const t = new Int32Array(this.bits.length),
                                e = Math.floor((this.size - 1) / 32),
                                r = e + 1,
                                n = this.bits;
                            for (let i = 0; i < r; i++) {
                                let r = n[i];
                                r = r >> 1 & 1431655765 | (1431655765 & r) << 1, r = r >> 2 & 858993459 | (858993459 & r) << 2, r = r >> 4 & 252645135 | (252645135 & r) << 4, r = r >> 8 & 16711935 | (16711935 & r) << 8, r = r >> 16 & 65535 | (65535 & r) << 16, t[e - i] = r
                            }
                            if (this.size !== 32 * r) {
                                const e = 32 * r - this.size;
                                let n = t[0] >>> e;
                                for (let i = 1; i < r; i++) {
                                    const r = t[i];
                                    n |= r << 32 - e, t[i - 1] = n, n = r >>> e
                                }
                                t[r - 1] = n
                            }
                            this.bits = t
                        }
                        static makeArray(t) {
                            return new Int32Array(Math.floor((t + 31) / 32))
                        }
                        equals(t) {
                            if (!(t instanceof A)) return !1;
                            const e = t;
                            return this.size === e.size && f.equals(this.bits, e.bits)
                        }
                        hashCode() {
                            return 31 * this.size + f.hashCode(this.bits)
                        }
                        toString() {
                            let t = "";
                            for (let e = 0, r = this.size; e < r; e++) 0 == (7 & e) && (t += " "), t += this.get(e) ? "X" : ".";
                            return t
                        }
                        clone() {
                            return new A(this.size, this.bits.slice())
                        }
                    }! function(t) {
                        t[t.OTHER = 0] = "OTHER", t[t.PURE_BARCODE = 1] = "PURE_BARCODE", t[t.POSSIBLE_FORMATS = 2] = "POSSIBLE_FORMATS", t[t.TRY_HARDER = 3] = "TRY_HARDER", t[t.CHARACTER_SET = 4] = "CHARACTER_SET", t[t.ALLOWED_LENGTHS = 5] = "ALLOWED_LENGTHS", t[t.ASSUME_CODE_39_CHECK_DIGIT = 6] = "ASSUME_CODE_39_CHECK_DIGIT", t[t.ASSUME_GS1 = 7] = "ASSUME_GS1", t[t.RETURN_CODABAR_START_END = 8] = "RETURN_CODABAR_START_END", t[t.NEED_RESULT_POINT_CALLBACK = 9] = "NEED_RESULT_POINT_CALLBACK", t[t.ALLOWED_EAN_EXTENSIONS 
