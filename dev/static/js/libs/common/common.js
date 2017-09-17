/*-----------------------
 * Site:  Kingnet - cube_mobile - common
 * Author: Clearlove 7*
 * Updated: 2016-08-17 16:08
 * Version: 1.0.0
 * -----------------------*/
define('angular', [], function () {
    (function (O, W, v) {
        'use strict';
        function H(a) {
            return function () {
                var b = arguments[0], d;
                d = '[' + (a ? a + ':' : '') + b + '] http://errors.angularjs.org/1.5.0/' + (a ? a + '/' : '') + b;
                for (b = 1; b < arguments.length; b++) {
                    d = d + (1 == b ? '?' : '&') + 'p' + (b - 1) + '=';
                    var c = encodeURIComponent, e;
                    e = arguments[b];
                    e = 'function' == typeof e ? e.toString().replace(/ \{[\s\S]*$/, '') : 'undefined' == typeof e ? 'undefined' : 'string' != typeof e ? JSON.stringify(e) : e;
                    d += c(e);
                }
                return Error(d);
            };
        }
        function Ca(a) {
            if (null == a || Za(a))
                return !1;
            if (L(a) || F(a) || C && a instanceof C)
                return !0;
            var b = 'length' in Object(a) && a.length;
            return N(b) && (0 <= b && (b - 1 in a || a instanceof Array) || 'function' == typeof a.item);
        }
        function n(a, b, d) {
            var c, e;
            if (a)
                if (D(a))
                    for (c in a)
                        'prototype' == c || 'length' == c || 'name' == c || a.hasOwnProperty && !a.hasOwnProperty(c) || b.call(d, a[c], c, a);
                else if (L(a) || Ca(a)) {
                    var f = 'object' !== typeof a;
                    c = 0;
                    for (e = a.length; c < e; c++)
                        (f || c in a) && b.call(d, a[c], c, a);
                } else if (a.forEach && a.forEach !== n)
                    a.forEach(b, d, a);
                else if (qc(a))
                    for (c in a)
                        b.call(d, a[c], c, a);
                else if ('function' === typeof a.hasOwnProperty)
                    for (c in a)
                        a.hasOwnProperty(c) && b.call(d, a[c], c, a);
                else
                    for (c in a)
                        sa.call(a, c) && b.call(d, a[c], c, a);
            return a;
        }
        function rc(a, b, d) {
            for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++)
                b.call(d, a[c[e]], c[e]);
            return c;
        }
        function sc(a) {
            return function (b, d) {
                a(d, b);
            };
        }
        function Yd() {
            return ++pb;
        }
        function Qb(a, b, d) {
            for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
                var g = b[e];
                if (E(g) || D(g))
                    for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
                        var m = h[k], r = g[m];
                        d && E(r) ? V(r) ? a[m] = new Date(r.valueOf()) : $a(r) ? a[m] = new RegExp(r) : r.nodeName ? a[m] = r.cloneNode(!0) : Rb(r) ? a[m] = r.clone() : (E(a[m]) || (a[m] = L(r) ? [] : {}), Qb(a[m], [r], !0)) : a[m] = r;
                    }
            }
            c ? a.$$hashKey = c : delete a.$$hashKey;
            return a;
        }
        function T(a) {
            return Qb(a, wa.call(arguments, 1), !1);
        }
        function Zd(a) {
            return Qb(a, wa.call(arguments, 1), !0);
        }
        function ca(a) {
            return parseInt(a, 10);
        }
        function Sb(a, b) {
            return T(Object.create(a), b);
        }
        function B() {
        }
        function ab(a) {
            return a;
        }
        function ba(a) {
            return function () {
                return a;
            };
        }
        function tc(a) {
            return D(a.toString) && a.toString !== ga;
        }
        function x(a) {
            return 'undefined' === typeof a;
        }
        function y(a) {
            return 'undefined' !== typeof a;
        }
        function E(a) {
            return null !== a && 'object' === typeof a;
        }
        function qc(a) {
            return null !== a && 'object' === typeof a && !uc(a);
        }
        function F(a) {
            return 'string' === typeof a;
        }
        function N(a) {
            return 'number' === typeof a;
        }
        function V(a) {
            return '[object Date]' === ga.call(a);
        }
        function D(a) {
            return 'function' === typeof a;
        }
        function $a(a) {
            return '[object RegExp]' === ga.call(a);
        }
        function Za(a) {
            return a && a.window === a;
        }
        function bb(a) {
            return a && a.$evalAsync && a.$watch;
        }
        function Na(a) {
            return 'boolean' === typeof a;
        }
        function $d(a) {
            return a && N(a.length) && ae.test(ga.call(a));
        }
        function Rb(a) {
            return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
        }
        function be(a) {
            var b = {};
            a = a.split(',');
            var d;
            for (d = 0; d < a.length; d++)
                b[a[d]] = !0;
            return b;
        }
        function ra(a) {
            return G(a.nodeName || a[0] && a[0].nodeName);
        }
        function cb(a, b) {
            var d = a.indexOf(b);
            0 <= d && a.splice(d, 1);
            return d;
        }
        function Oa(a, b) {
            function d(a, b) {
                var d = b.$$hashKey, e;
                if (L(a)) {
                    e = 0;
                    for (var f = a.length; e < f; e++)
                        b.push(c(a[e]));
                } else if (qc(a))
                    for (e in a)
                        b[e] = c(a[e]);
                else if (a && 'function' === typeof a.hasOwnProperty)
                    for (e in a)
                        a.hasOwnProperty(e) && (b[e] = c(a[e]));
                else
                    for (e in a)
                        sa.call(a, e) && (b[e] = c(a[e]));
                d ? b.$$hashKey = d : delete b.$$hashKey;
                return b;
            }
            function c(a) {
                if (!E(a))
                    return a;
                var b = f.indexOf(a);
                if (-1 !== b)
                    return g[b];
                if (Za(a) || bb(a))
                    throw Da('cpws');
                var b = !1, c = e(a);
                c === v && (c = L(a) ? [] : Object.create(uc(a)), b = !0);
                f.push(a);
                g.push(c);
                return b ? d(a, c) : c;
            }
            function e(a) {
                switch (ga.call(a)) {
                case '[object Int8Array]':
                case '[object Int16Array]':
                case '[object Int32Array]':
                case '[object Float32Array]':
                case '[object Float64Array]':
                case '[object Uint8Array]':
                case '[object Uint8ClampedArray]':
                case '[object Uint16Array]':
                case '[object Uint32Array]':
                    return new a.constructor(c(a.buffer));
                case '[object ArrayBuffer]':
                    if (!a.slice) {
                        var b = new ArrayBuffer(a.byteLength);
                        new Uint8Array(b).set(new Uint8Array(a));
                        return b;
                    }
                    return a.slice(0);
                case '[object Boolean]':
                case '[object Number]':
                case '[object String]':
                case '[object Date]':
                    return new a.constructor(a.valueOf());
                case '[object RegExp]':
                    return b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex, b;
                }
                if (D(a.cloneNode))
                    return a.cloneNode(!0);
            }
            var f = [], g = [];
            if (b) {
                if ($d(b) || '[object ArrayBuffer]' === ga.call(b))
                    throw Da('cpta');
                if (a === b)
                    throw Da('cpi');
                L(b) ? b.length = 0 : n(b, function (a, c) {
                    '$$hashKey' !== c && delete b[c];
                });
                f.push(a);
                g.push(b);
                return d(a, b);
            }
            return c(a);
        }
        function na(a, b) {
            if (L(a)) {
                b = b || [];
                for (var d = 0, c = a.length; d < c; d++)
                    b[d] = a[d];
            } else if (E(a))
                for (d in b = b || {}, a)
                    if ('$' !== d.charAt(0) || '$' !== d.charAt(1))
                        b[d] = a[d];
            return b || a;
        }
        function oa(a, b) {
            if (a === b)
                return !0;
            if (null === a || null === b)
                return !1;
            if (a !== a && b !== b)
                return !0;
            var d = typeof a, c;
            if (d == typeof b && 'object' == d)
                if (L(a)) {
                    if (!L(b))
                        return !1;
                    if ((d = a.length) == b.length) {
                        for (c = 0; c < d; c++)
                            if (!oa(a[c], b[c]))
                                return !1;
                        return !0;
                    }
                } else {
                    if (V(a))
                        return V(b) ? oa(a.getTime(), b.getTime()) : !1;
                    if ($a(a))
                        return $a(b) ? a.toString() == b.toString() : !1;
                    if (bb(a) || bb(b) || Za(a) || Za(b) || L(b) || V(b) || $a(b))
                        return !1;
                    d = Z();
                    for (c in a)
                        if ('$' !== c.charAt(0) && !D(a[c])) {
                            if (!oa(a[c], b[c]))
                                return !1;
                            d[c] = !0;
                        }
                    for (c in b)
                        if (!(c in d) && '$' !== c.charAt(0) && y(b[c]) && !D(b[c]))
                            return !1;
                    return !0;
                }
            return !1;
        }
        function db(a, b, d) {
            return a.concat(wa.call(b, d));
        }
        function vc(a, b) {
            var d = 2 < arguments.length ? wa.call(arguments, 2) : [];
            return !D(b) || b instanceof RegExp ? b : d.length ? function () {
                return arguments.length ? b.apply(a, db(d, arguments, 0)) : b.apply(a, d);
            } : function () {
                return arguments.length ? b.apply(a, arguments) : b.call(a);
            };
        }
        function ce(a, b) {
            var d = b;
            'string' === typeof a && '$' === a.charAt(0) && '$' === a.charAt(1) ? d = v : Za(b) ? d = '$WINDOW' : b && W === b ? d = '$DOCUMENT' : bb(b) && (d = '$SCOPE');
            return d;
        }
        function eb(a, b) {
            if (x(a))
                return v;
            N(b) || (b = b ? 2 : null);
            return JSON.stringify(a, ce, b);
        }
        function wc(a) {
            return F(a) ? JSON.parse(a) : a;
        }
        function xc(a, b) {
            a = a.replace(de, '');
            var d = Date.parse('Jan 01, 1970 00:00:00 ' + a) / 60000;
            return isNaN(d) ? b : d;
        }
        function Tb(a, b, d) {
            d = d ? -1 : 1;
            var c = a.getTimezoneOffset();
            b = xc(b, c);
            d *= b - c;
            a = new Date(a.getTime());
            a.setMinutes(a.getMinutes() + d);
            return a;
        }
        function ta(a) {
            a = C(a).clone();
            try {
                a.empty();
            } catch (b) {
            }
            var d = C('<div>').append(a).html();
            try {
                return a[0].nodeType === Pa ? G(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                    return '<' + G(b);
                });
            } catch (c) {
                return G(d);
            }
        }
        function yc(a) {
            try {
                return decodeURIComponent(a);
            } catch (b) {
            }
        }
        function zc(a) {
            var b = {};
            n((a || '').split('&'), function (a) {
                var c, e, f;
                a && (e = a = a.replace(/\+/g, '%20'), c = a.indexOf('='), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = yc(e), y(e) && (f = y(f) ? yc(f) : !0, sa.call(b, e) ? L(b[e]) ? b[e].push(f) : b[e] = [
                    b[e],
                    f
                ] : b[e] = f));
            });
            return b;
        }
        function Ub(a) {
            var b = [];
            n(a, function (a, c) {
                L(a) ? n(a, function (a) {
                    b.push(ha(c, !0) + (!0 === a ? '' : '=' + ha(a, !0)));
                }) : b.push(ha(c, !0) + (!0 === a ? '' : '=' + ha(a, !0)));
            });
            return b.length ? b.join('&') : '';
        }
        function qb(a) {
            return ha(a, !0).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
        }
        function ha(a, b) {
            return encodeURIComponent(a).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%20/g, b ? '%20' : '+');
        }
        function ee(a, b) {
            var d, c, e = Qa.length;
            for (c = 0; c < e; ++c)
                if (d = Qa[c] + b, F(d = a.getAttribute(d)))
                    return d;
            return null;
        }
        function fe(a, b) {
            var d, c, e = {};
            n(Qa, function (b) {
                b += 'app';
                !d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b));
            });
            n(Qa, function (b) {
                b += 'app';
                var e;
                !d && (e = a.querySelector('[' + b.replace(':', '\\:') + ']')) && (d = e, c = e.getAttribute(b));
            });
            d && (e.strictDi = null !== ee(d, 'strict-di'), b(d, c ? [c] : [], e));
        }
        function Ac(a, b, d) {
            E(d) || (d = {});
            d = T({ strictDi: !1 }, d);
            var c = function () {
                    a = C(a);
                    if (a.injector()) {
                        var c = a[0] === W ? 'document' : ta(a);
                        throw Da('btstrpd', c.replace(/</, '&lt;').replace(/>/, '&gt;'));
                    }
                    b = b || [];
                    b.unshift([
                        '$provide',
                        function (b) {
                            b.value('$rootElement', a);
                        }
                    ]);
                    d.debugInfoEnabled && b.push([
                        '$compileProvider',
                        function (a) {
                            a.debugInfoEnabled(!0);
                        }
                    ]);
                    b.unshift('ng');
                    c = fb(b, d.strictDi);
                    c.invoke([
                        '$rootScope',
                        '$rootElement',
                        '$compile',
                        '$injector',
                        function (a, b, c, d) {
                            a.$apply(function () {
                                b.data('$injector', d);
                                c(b)(a);
                            });
                        }
                    ]);
                    return c;
                }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
            O && e.test(O.name) && (d.debugInfoEnabled = !0, O.name = O.name.replace(e, ''));
            if (O && !f.test(O.name))
                return c();
            O.name = O.name.replace(f, '');
            ia.resumeBootstrap = function (a) {
                n(a, function (a) {
                    b.push(a);
                });
                return c();
            };
            D(ia.resumeDeferredBootstrap) && ia.resumeDeferredBootstrap();
        }
        function ge() {
            O.name = 'NG_ENABLE_DEBUG_INFO!' + O.name;
            O.location.reload();
        }
        function he(a) {
            a = ia.element(a).injector();
            if (!a)
                throw Da('test');
            return a.get('$$testability');
        }
        function Bc(a, b) {
            b = b || '_';
            return a.replace(ie, function (a, c) {
                return (c ? b : '') + a.toLowerCase();
            });
        }
        function je() {
            var a;
            if (!Cc) {
                var b = rb();
                (ua = x(b) ? O.jQuery : b ? O[b] : v) && ua.fn.on ? (C = ua, T(ua.fn, {
                    scope: Ra.scope,
                    isolateScope: Ra.isolateScope,
                    controller: Ra.controller,
                    injector: Ra.injector,
                    inheritedData: Ra.inheritedData
                }), a = ua.cleanData, ua.cleanData = function (b) {
                    for (var c, e = 0, f; null != (f = b[e]); e++)
                        (c = ua._data(f, 'events')) && c.$destroy && ua(f).triggerHandler('$destroy');
                    a(b);
                }) : C = U;
                ia.element = C;
                Cc = !0;
            }
        }
        function sb(a, b, d) {
            if (!a)
                throw Da('areq', b || '?', d || 'required');
            return a;
        }
        function Sa(a, b, d) {
            d && L(a) && (a = a[a.length - 1]);
            sb(D(a), b, 'not a function, got ' + (a && 'object' === typeof a ? a.constructor.name || 'Object' : typeof a));
            return a;
        }
        function Ta(a, b) {
            if ('hasOwnProperty' === a)
                throw Da('badname', b);
        }
        function Dc(a, b, d) {
            if (!b)
                return a;
            b = b.split('.');
            for (var c, e = a, f = b.length, g = 0; g < f; g++)
                c = b[g], a && (a = (e = a)[c]);
            return !d && D(a) ? vc(e, a) : a;
        }
        function tb(a) {
            for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++)
                if (c || a[e] !== b)
                    c || (c = C(wa.call(a, 0, e))), c.push(b);
            return c || a;
        }
        function Z() {
            return Object.create(null);
        }
        function ke(a) {
            function b(a, b, c) {
                return a[b] || (a[b] = c());
            }
            var d = H('$injector'), c = H('ng');
            a = b(a, 'angular', Object);
            a.$$minErr = a.$$minErr || H;
            return b(a, 'module', function () {
                var a = {};
                return function (f, g, h) {
                    if ('hasOwnProperty' === f)
                        throw c('badname', 'module');
                    g && a.hasOwnProperty(f) && (a[f] = null);
                    return b(a, f, function () {
                        function a(b, d, e, f) {
                            f || (f = c);
                            return function () {
                                f[e || 'push']([
                                    b,
                                    d,
                                    arguments
                                ]);
                                return K;
                            };
                        }
                        function b(a, d) {
                            return function (b, e) {
                                e && D(e) && (e.$$moduleName = f);
                                c.push([
                                    a,
                                    d,
                                    arguments
                                ]);
                                return K;
                            };
                        }
                        if (!g)
                            throw d('nomod', f);
                        var c = [], e = [], s = [], I = a('$injector', 'invoke', 'push', e), K = {
                                _invokeQueue: c,
                                _configBlocks: e,
                                _runBlocks: s,
                                requires: g,
                                name: f,
                                provider: b('$provide', 'provider'),
                                factory: b('$provide', 'factory'),
                                service: b('$provide', 'service'),
                                value: a('$provide', 'value'),
                                constant: a('$provide', 'constant', 'unshift'),
                                decorator: b('$provide', 'decorator'),
                                animation: b('$animateProvider', 'register'),
                                filter: b('$filterProvider', 'register'),
                                controller: b('$controllerProvider', 'register'),
                                directive: b('$compileProvider', 'directive'),
                                component: b('$compileProvider', 'component'),
                                config: I,
                                run: function (a) {
                                    s.push(a);
                                    return this;
                                }
                            };
                        h && I(h);
                        return K;
                    });
                };
            });
        }
        function le(a) {
            T(a, {
                bootstrap: Ac,
                copy: Oa,
                extend: T,
                merge: Zd,
                equals: oa,
                element: C,
                forEach: n,
                injector: fb,
                noop: B,
                bind: vc,
                toJson: eb,
                fromJson: wc,
                identity: ab,
                isUndefined: x,
                isDefined: y,
                isString: F,
                isFunction: D,
                isObject: E,
                isNumber: N,
                isElement: Rb,
                isArray: L,
                version: me,
                isDate: V,
                lowercase: G,
                uppercase: ub,
                callbacks: { counter: 0 },
                getTestability: he,
                $$minErr: H,
                $$csp: Ea,
                reloadWithDebugInfo: ge
            });
            Vb = ke(O);
            Vb('ng', ['ngLocale'], [
                '$provide',
                function (a) {
                    a.provider({ $$sanitizeUri: ne });
                    a.provider('$compile', Ec).directive({
                        a: oe,
                        input: Fc,
                        textarea: Fc,
                        form: pe,
                        script: qe,
                        select: re,
                        style: se,
                        option: te,
                        ngBind: ue,
                        ngBindHtml: ve,
                        ngBindTemplate: we,
                        ngClass: xe,
                        ngClassEven: ye,
                        ngClassOdd: ze,
                        ngCloak: Ae,
                        ngController: Be,
                        ngForm: Ce,
                        ngHide: De,
                        ngIf: Ee,
                        ngInclude: Fe,
                        ngInit: Ge,
                        ngNonBindable: He,
                        ngPluralize: Ie,
                        ngRepeat: Je,
                        ngShow: Ke,
                        ngStyle: Le,
                        ngSwitch: Me,
                        ngSwitchWhen: Ne,
                        ngSwitchDefault: Oe,
                        ngOptions: Pe,
                        ngTransclude: Qe,
                        ngModel: Re,
                        ngList: Se,
                        ngChange: Te,
                        pattern: Gc,
                        ngPattern: Gc,
                        required: Hc,
                        ngRequired: Hc,
                        minlength: Ic,
                        ngMinlength: Ic,
                        maxlength: Jc,
                        ngMaxlength: Jc,
                        ngValue: Ue,
                        ngModelOptions: Ve
                    }).directive({ ngInclude: We }).directive(vb).directive(Kc);
                    a.provider({
                        $anchorScroll: Xe,
                        $animate: Ye,
                        $animateCss: Ze,
                        $$animateJs: $e,
                        $$animateQueue: af,
                        $$AnimateRunner: bf,
                        $$animateAsyncRun: cf,
                        $browser: df,
                        $cacheFactory: ef,
                        $controller: ff,
                        $document: gf,
                        $exceptionHandler: hf,
                        $filter: Lc,
                        $$forceReflow: jf,
                        $interpolate: kf,
                        $interval: lf,
                        $http: mf,
                        $httpParamSerializer: nf,
                        $httpParamSerializerJQLike: of,
                        $httpBackend: pf,
                        $xhrFactory: qf,
                        $location: rf,
                        $log: sf,
                        $parse: tf,
                        $rootScope: uf,
                        $q: vf,
                        $$q: wf,
                        $sce: xf,
                        $sceDelegate: yf,
                        $sniffer: zf,
                        $templateCache: Af,
                        $templateRequest: Bf,
                        $$testability: Cf,
                        $timeout: Df,
                        $window: Ef,
                        $$rAF: Ff,
                        $$jqLite: Gf,
                        $$HashMap: Hf,
                        $$cookieReader: If
                    });
                }
            ]);
        }
        function gb(a) {
            return a.replace(Jf, function (a, d, c, e) {
                return e ? c.toUpperCase() : c;
            }).replace(Kf, 'Moz$1');
        }
        function Mc(a) {
            a = a.nodeType;
            return 1 === a || !a || 9 === a;
        }
        function Nc(a, b) {
            var d, c, e = b.createDocumentFragment(), f = [];
            if (Wb.test(a)) {
                d = d || e.appendChild(b.createElement('div'));
                c = (Lf.exec(a) || [
                    '',
                    ''
                ])[1].toLowerCase();
                c = da[c] || da._default;
                d.innerHTML = c[1] + a.replace(Mf, '<$1></$2>') + c[2];
                for (c = c[0]; c--;)
                    d = d.lastChild;
                f = db(f, d.childNodes);
                d = e.firstChild;
                d.textContent = '';
            } else
                f.push(b.createTextNode(a));
            e.textContent = '';
            e.innerHTML = '';
            n(f, function (a) {
                e.appendChild(a);
            });
            return e;
        }
        function Oc(a, b) {
            var d = a.parentNode;
            d && d.replaceChild(b, a);
            b.appendChild(a);
        }
        function U(a) {
            if (a instanceof U)
                return a;
            var b;
            F(a) && (a = X(a), b = !0);
            if (!(this instanceof U)) {
                if (b && '<' != a.charAt(0))
                    throw Xb('nosel');
                return new U(a);
            }
            if (b) {
                b = W;
                var d;
                a = (d = Nf.exec(a)) ? [b.createElement(d[1])] : (d = Nc(a, b)) ? d.childNodes : [];
            }
            Pc(this, a);
        }
        function Yb(a) {
            return a.cloneNode(!0);
        }
        function wb(a, b) {
            b || hb(a);
            if (a.querySelectorAll)
                for (var d = a.querySelectorAll('*'), c = 0, e = d.length; c < e; c++)
                    hb(d[c]);
        }
        function Qc(a, b, d, c) {
            if (y(c))
                throw Xb('offargs');
            var e = (c = xb(a)) && c.events, f = c && c.handle;
            if (f)
                if (b) {
                    var g = function (b) {
                        var c = e[b];
                        y(d) && cb(c || [], d);
                        y(d) && c && 0 < c.length || (a.removeEventListener(b, f, !1), delete e[b]);
                    };
                    n(b.split(' '), function (a) {
                        g(a);
                        yb[a] && g(yb[a]);
                    });
                } else
                    for (b in e)
                        '$destroy' !== b && a.removeEventListener(b, f, !1), delete e[b];
        }
        function hb(a, b) {
            var d = a.ng339, c = d && ib[d];
            c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, '$destroy'), Qc(a)), delete ib[d], a.ng339 = v));
        }
        function xb(a, b) {
            var d = a.ng339, d = d && ib[d];
            b && !d && (a.ng339 = d = ++Of, d = ib[d] = {
                events: {},
                data: {},
                handle: v
            });
            return d;
        }
        function Zb(a, b, d) {
            if (Mc(a)) {
                var c = y(d), e = !c && b && !E(b), f = !b;
                a = (a = xb(a, !e)) && a.data;
                if (c)
                    a[b] = d;
                else {
                    if (f)
                        return a;
                    if (e)
                        return a && a[b];
                    T(a, b);
                }
            }
        }
        function zb(a, b) {
            return a.getAttribute ? -1 < (' ' + (a.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + b + ' ') : !1;
        }
        function Ab(a, b) {
            b && a.setAttribute && n(b.split(' '), function (b) {
                a.setAttribute('class', X((' ' + (a.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').replace(' ' + X(b) + ' ', ' ')));
            });
        }
        function Bb(a, b) {
            if (b && a.setAttribute) {
                var d = (' ' + (a.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ');
                n(b.split(' '), function (a) {
                    a = X(a);
                    -1 === d.indexOf(' ' + a + ' ') && (d += a + ' ');
                });
                a.setAttribute('class', X(d));
            }
        }
        function Pc(a, b) {
            if (b)
                if (b.nodeType)
                    a[a.length++] = b;
                else {
                    var d = b.length;
                    if ('number' === typeof d && b.window !== b) {
                        if (d)
                            for (var c = 0; c < d; c++)
                                a[a.length++] = b[c];
                    } else
                        a[a.length++] = b;
                }
        }
        function Rc(a, b) {
            return Cb(a, '$' + (b || 'ngController') + 'Controller');
        }
        function Cb(a, b, d) {
            9 == a.nodeType && (a = a.documentElement);
            for (b = L(b) ? b : [b]; a;) {
                for (var c = 0, e = b.length; c < e; c++)
                    if (y(d = C.data(a, b[c])))
                        return d;
                a = a.parentNode || 11 === a.nodeType && a.host;
            }
        }
        function Sc(a) {
            for (wb(a, !0); a.firstChild;)
                a.removeChild(a.firstChild);
        }
        function $b(a, b) {
            b || wb(a);
            var d = a.parentNode;
            d && d.removeChild(a);
        }
        function Pf(a, b) {
            b = b || O;
            if ('complete' === b.document.readyState)
                b.setTimeout(a);
            else
                C(b).on('load', a);
        }
        function Tc(a, b) {
            var d = Db[b.toLowerCase()];
            return d && Uc[ra(a)] && d;
        }
        function Qf(a, b) {
            var d = function (c, d) {
                c.isDefaultPrevented = function () {
                    return c.defaultPrevented;
                };
                var f = b[d || c.type], g = f ? f.length : 0;
                if (g) {
                    if (x(c.immediatePropagationStopped)) {
                        var h = c.stopImmediatePropagation;
                        c.stopImmediatePropagation = function () {
                            c.immediatePropagationStopped = !0;
                            c.stopPropagation && c.stopPropagation();
                            h && h.call(c);
                        };
                    }
                    c.isImmediatePropagationStopped = function () {
                        return !0 === c.immediatePropagationStopped;
                    };
                    var k = f.specialHandlerWrapper || Rf;
                    1 < g && (f = na(f));
                    for (var l = 0; l < g; l++)
                        c.isImmediatePropagationStopped() || k(a, c, f[l]);
                }
            };
            d.elem = a;
            return d;
        }
        function Rf(a, b, d) {
            d.call(a, b);
        }
        function Sf(a, b, d) {
            var c = b.relatedTarget;
            c && (c === a || Tf.call(a, c)) || d.call(a, b);
        }
        function Gf() {
            this.$get = function () {
                return T(U, {
                    hasClass: function (a, b) {
                        a.attr && (a = a[0]);
                        return zb(a, b);
                    },
                    addClass: function (a, b) {
                        a.attr && (a = a[0]);
                        return Bb(a, b);
                    },
                    removeClass: function (a, b) {
                        a.attr && (a = a[0]);
                        return Ab(a, b);
                    }
                });
            };
        }
        function Fa(a, b) {
            var d = a && a.$$hashKey;
            if (d)
                return 'function' === typeof d && (d = a.$$hashKey()), d;
            d = typeof a;
            return d = 'function' == d || 'object' == d && null !== a ? a.$$hashKey = d + ':' + (b || Yd)() : d + ':' + a;
        }
        function Ua(a, b) {
            if (b) {
                var d = 0;
                this.nextUid = function () {
                    return ++d;
                };
            }
            n(a, this.put, this);
        }
        function Vc(a) {
            a = a.toString().replace(Uf, '');
            return a.match(Vf) || a.match(Wf);
        }
        function Xf(a) {
            return (a = Vc(a)) ? 'function(' + (a[1] || '').replace(/[\s\r\n]+/, ' ') + ')' : 'fn';
        }
        function fb(a, b) {
            function d(a) {
                return function (b, c) {
                    if (E(b))
                        n(b, sc(a));
                    else
                        return a(b, c);
                };
            }
            function c(a, b) {
                Ta(a, 'service');
                if (D(b) || L(b))
                    b = s.instantiate(b);
                if (!b.$get)
                    throw Ga('pget', a);
                return r[a + 'Provider'] = b;
            }
            function e(a, b) {
                return function () {
                    var c = t.invoke(b, this);
                    if (x(c))
                        throw Ga('undef', a);
                    return c;
                };
            }
            function f(a, b, d) {
                return c(a, { $get: !1 !== d ? e(a, b) : b });
            }
            function g(a) {
                sb(x(a) || L(a), 'modulesToLoad', 'not an array');
                var b = [], c;
                n(a, function (a) {
                    function d(a) {
                        var b, c;
                        b = 0;
                        for (c = a.length; b < c; b++) {
                            var e = a[b], f = s.get(e[0]);
                            f[e[1]].apply(f, e[2]);
                        }
                    }
                    if (!m.get(a)) {
                        m.put(a, !0);
                        try {
                            F(a) ? (c = Vb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : D(a) ? b.push(s.invoke(a)) : L(a) ? b.push(s.invoke(a)) : Sa(a, 'module');
                        } catch (e) {
                            throw L(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + '\n' + e.stack), Ga('modulerr', a, e.stack || e.message || e);
                        }
                    }
                });
                return b;
            }
            function h(a, c) {
                function d(b, e) {
                    if (a.hasOwnProperty(b)) {
                        if (a[b] === k)
                            throw Ga('cdep', b + ' <- ' + l.join(' <- '));
                        return a[b];
                    }
                    try {
                        return l.unshift(b), a[b] = k, a[b] = c(b, e);
                    } catch (f) {
                        throw a[b] === k && delete a[b], f;
                    } finally {
                        l.shift();
                    }
                }
                function e(a, c, f) {
                    var g = [];
                    a = fb.$$annotate(a, b, f);
                    for (var h = 0, k = a.length; h < k; h++) {
                        var l = a[h];
                        if ('string' !== typeof l)
                            throw Ga('itkn', l);
                        g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f));
                    }
                    return g;
                }
                return {
                    invoke: function (a, b, c, d) {
                        'string' === typeof c && (d = c, c = null);
                        c = e(a, c, d);
                        L(a) && (a = a[a.length - 1]);
                        d = 11 >= xa ? !1 : 'function' === typeof a && /^(?:class\s|constructor\()/.test(Function.prototype.toString.call(a));
                        return d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))()) : a.apply(b, c);
                    },
                    instantiate: function (a, b, c) {
                        var d = L(a) ? a[a.length - 1] : a;
                        a = e(a, b, c);
                        a.unshift(null);
                        return new (Function.prototype.bind.apply(d, a))();
                    },
                    get: d,
                    annotate: fb.$$annotate,
                    has: function (b) {
                        return r.hasOwnProperty(b + 'Provider') || a.hasOwnProperty(b);
                    }
                };
            }
            b = !0 === b;
            var k = {}, l = [], m = new Ua([], !0), r = {
                    $provide: {
                        provider: d(c),
                        factory: d(f),
                        service: d(function (a, b) {
                            return f(a, [
                                '$injector',
                                function (a) {
                                    return a.instantiate(b);
                                }
                            ]);
                        }),
                        value: d(function (a, b) {
                            return f(a, ba(b), !1);
                        }),
                        constant: d(function (a, b) {
                            Ta(a, 'constant');
                            r[a] = b;
                            I[a] = b;
                        }),
                        decorator: function (a, b) {
                            var c = s.get(a + 'Provider'), d = c.$get;
                            c.$get = function () {
                                var a = t.invoke(d, c);
                                return t.invoke(b, null, { $delegate: a });
                            };
                        }
                    }
                }, s = r.$injector = h(r, function (a, b) {
                    ia.isString(b) && l.push(b);
                    throw Ga('unpr', l.join(' <- '));
                }), I = {}, K = h(I, function (a, b) {
                    var c = s.get(a + 'Provider', b);
                    return t.invoke(c.$get, c, v, a);
                }), t = K;
            r.$injectorProvider = { $get: ba(K) };
            var p = g(a), t = K.get('$injector');
            t.strictDi = b;
            n(p, function (a) {
                a && t.invoke(a);
            });
            return t;
        }
        function Xe() {
            var a = !0;
            this.disableAutoScrolling = function () {
                a = !1;
            };
            this.$get = [
                '$window',
                '$location',
                '$rootScope',
                function (b, d, c) {
                    function e(a) {
                        var b = null;
                        Array.prototype.some.call(a, function (a) {
                            if ('a' === ra(a))
                                return b = a, !0;
                        });
                        return b;
                    }
                    function f(a) {
                        if (a) {
                            a.scrollIntoView();
                            var c;
                            c = g.yOffset;
                            D(c) ? c = c() : Rb(c) ? (c = c[0], c = 'fixed' !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : N(c) || (c = 0);
                            c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c));
                        } else
                            b.scrollTo(0, 0);
                    }
                    function g(a) {
                        a = F(a) ? a : d.hash();
                        var b;
                        a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : 'top' === a && f(null) : f(null);
                    }
                    var h = b.document;
                    a && c.$watch(function () {
                        return d.hash();
                    }, function (a, b) {
                        a === b && '' === a || Pf(function () {
                            c.$evalAsync(g);
                        });
                    });
                    return g;
                }
            ];
        }
        function jb(a, b) {
            if (!a && !b)
                return '';
            if (!a)
                return b;
            if (!b)
                return a;
            L(a) && (a = a.join(' '));
            L(b) && (b = b.join(' '));
            return a + ' ' + b;
        }
        function Yf(a) {
            F(a) && (a = a.split(' '));
            var b = Z();
            n(a, function (a) {
                a.length && (b[a] = !0);
            });
            return b;
        }
        function Ha(a) {
            return E(a) ? a : {};
        }
        function Zf(a, b, d, c) {
            function e(a) {
                try {
                    a.apply(null, wa.call(arguments, 1));
                } finally {
                    if (K--, 0 === K)
                        for (; t.length;)
                            try {
                                t.pop()();
                            } catch (b) {
                                d.error(b);
                            }
                }
            }
            function f() {
                z = null;
                g();
                h();
            }
            function g() {
                a: {
                    try {
                        p = m.state;
                        break a;
                    } catch (a) {
                    }
                    p = void 0;
                }
                p = x(p) ? null : p;
                oa(p, $) && (p = $);
                $ = p;
            }
            function h() {
                if (u !== k.url() || w !== p)
                    u = k.url(), w = p, n(A, function (a) {
                        a(k.url(), p);
                    });
            }
            var k = this, l = a.location, m = a.history, r = a.setTimeout, s = a.clearTimeout, I = {};
            k.isMock = !1;
            var K = 0, t = [];
            k.$$completeOutstandingRequest = e;
            k.$$incOutstandingRequestCount = function () {
                K++;
            };
            k.notifyWhenNoOutstandingRequests = function (a) {
                0 === K ? a() : t.push(a);
            };
            var p, w, u = l.href, la = b.find('base'), z = null;
            g();
            w = p;
            k.url = function (b, d, e) {
                x(e) && (e = null);
                l !== a.location && (l = a.location);
                m !== a.history && (m = a.history);
                if (b) {
                    var f = w === e;
                    if (u === b && (!c.history || f))
                        return k;
                    var h = u && Ia(u) === Ia(b);
                    u = b;
                    w = e;
                    if (!c.history || h && f) {
                        if (!h || z)
                            z = b;
                        d ? l.replace(b) : h ? (d = l, e = b.indexOf('#'), e = -1 === e ? '' : b.substr(e), d.hash = e) : l.href = b;
                        l.href !== b && (z = b);
                    } else
                        m[d ? 'replaceState' : 'pushState'](e, '', b), g(), w = p;
                    return k;
                }
                return z || l.href.replace(/%27/g, '\'');
            };
            k.state = function () {
                return p;
            };
            var A = [], Q = !1, $ = null;
            k.onUrlChange = function (b) {
                if (!Q) {
                    if (c.history)
                        C(a).on('popstate', f);
                    C(a).on('hashchange', f);
                    Q = !0;
                }
                A.push(b);
                return b;
            };
            k.$$applicationDestroyed = function () {
                C(a).off('hashchange popstate', f);
            };
            k.$$checkUrlChange = h;
            k.baseHref = function () {
                var a = la.attr('href');
                return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, '') : '';
            };
            k.defer = function (a, b) {
                var c;
                K++;
                c = r(function () {
                    delete I[c];
                    e(a);
                }, b || 0);
                I[c] = !0;
                return c;
            };
            k.defer.cancel = function (a) {
                return I[a] ? (delete I[a], s(a), e(B), !0) : !1;
            };
        }
        function df() {
            this.$get = [
                '$window',
                '$log',
                '$sniffer',
                '$document',
                function (a, b, d, c) {
                    return new Zf(a, c, b, d);
                }
            ];
        }
        function ef() {
            this.$get = function () {
                function a(a, c) {
                    function e(a) {
                        a != r && (s ? s == a && (s = a.n) : s = a, f(a.n, a.p), f(a, r), r = a, r.n = null);
                    }
                    function f(a, b) {
                        a != b && (a && (a.p = b), b && (b.n = a));
                    }
                    if (a in b)
                        throw H('$cacheFactory')('iid', a);
                    var g = 0, h = T({}, c, { id: a }), k = Z(), l = c && c.capacity || Number.MAX_VALUE, m = Z(), r = null, s = null;
                    return b[a] = {
                        put: function (a, b) {
                            if (!x(b)) {
                                if (l < Number.MAX_VALUE) {
                                    var c = m[a] || (m[a] = { key: a });
                                    e(c);
                                }
                                a in k || g++;
                                k[a] = b;
                                g > l && this.remove(s.key);
                                return b;
                            }
                        },
                        get: function (a) {
                            if (l < Number.MAX_VALUE) {
                                var b = m[a];
                                if (!b)
                                    return;
                                e(b);
                            }
                            return k[a];
                        },
                        remove: function (a) {
                            if (l < Number.MAX_VALUE) {
                                var b = m[a];
                                if (!b)
                                    return;
                                b == r && (r = b.p);
                                b == s && (s = b.n);
                                f(b.n, b.p);
                                delete m[a];
                            }
                            a in k && (delete k[a], g--);
                        },
                        removeAll: function () {
                            k = Z();
                            g = 0;
                            m = Z();
                            r = s = null;
                        },
                        destroy: function () {
                            m = h = k = null;
                            delete b[a];
                        },
                        info: function () {
                            return T({}, h, { size: g });
                        }
                    };
                }
                var b = {};
                a.info = function () {
                    var a = {};
                    n(b, function (b, e) {
                        a[e] = b.info();
                    });
                    return a;
                };
                a.get = function (a) {
                    return b[a];
                };
                return a;
            };
        }
        function Af() {
            this.$get = [
                '$cacheFactory',
                function (a) {
                    return a('templates');
                }
            ];
        }
        function Ec(a, b) {
            function d(a, b, c) {
                var d = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/, e = {};
                n(a, function (a, f) {
                    var g = a.match(d);
                    if (!g)
                        throw ja('iscp', b, f, a, c ? 'controller bindings definition' : 'isolate scope definition');
                    e[f] = {
                        mode: g[1][0],
                        collection: '*' === g[2],
                        optional: '?' === g[3],
                        attrName: g[4] || f
                    };
                });
                return e;
            }
            function c(a) {
                var b = a.charAt(0);
                if (!b || b !== G(b))
                    throw ja('baddir', a);
                if (a !== a.trim())
                    throw ja('baddir', a);
            }
            var e = {}, f = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, g = /(([\w\-]+)(?:\:([^;]+))?;?)/, h = be('ngSrc,ngSrcset,src,srcset'), k = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, l = /^(on[a-z]+|formaction)$/;
            this.directive = function s(b, f) {
                Ta(b, 'directive');
                F(b) ? (c(b), sb(f, 'directiveFactory'), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + 'Directive', [
                    '$injector',
                    '$exceptionHandler',
                    function (a, c) {
                        var f = [];
                        n(e[b], function (e, g) {
                            try {
                                var h = a.invoke(e);
                                D(h) ? h = { compile: ba(h) } : !h.compile && h.link && (h.compile = ba(h.link));
                                h.priority = h.priority || 0;
                                h.index = g;
                                h.name = h.name || b;
                                h.require = h.require || h.controller && h.name;
                                h.restrict = h.restrict || 'EA';
                                var k = h, l = h, m = h.name, s = {
                                        isolateScope: null,
                                        bindToController: null
                                    };
                                E(l.scope) && (!0 === l.bindToController ? (s.bindToController = d(l.scope, m, !0), s.isolateScope = {}) : s.isolateScope = d(l.scope, m, !1));
                                E(l.bindToController) && (s.bindToController = d(l.bindToController, m, !0));
                                if (E(s.bindToController)) {
                                    var P = l.controller, S = l.controllerAs;
                                    if (!P)
                                        throw ja('noctrl', m);
                                    if (!Wc(P, S))
                                        throw ja('noident', m);
                                }
                                var ma = k.$$bindings = s;
                                E(ma.isolateScope) && (h.$$isolateBindings = ma.isolateScope);
                                h.$$moduleName = e.$$moduleName;
                                f.push(h);
                            } catch (K) {
                                c(K);
                            }
                        });
                        return f;
                    }
                ])), e[b].push(f)) : n(b, sc(s));
                return this;
            };
            this.component = function (a, b) {
                function c(a) {
                    function e(b) {
                        return D(b) || L(b) ? function (c, d) {
                            return a.invoke(b, this, {
                                $element: c,
                                $attrs: d
                            });
                        } : b;
                    }
                    var f = b.template || b.templateUrl ? b.template : '';
                    return {
                        controller: d,
                        controllerAs: Wc(b.controller) || b.controllerAs || '$ctrl',
                        template: e(f),
                        templateUrl: e(b.templateUrl),
                        transclude: b.transclude,
                        scope: {},
                        bindToController: b.bindings || {},
                        restrict: 'E',
                        require: b.require
                    };
                }
                var d = b.controller || function () {
                };
                n(b, function (a, b) {
                    '$' === b.charAt(0) && (c[b] = a);
                });
                c.$inject = ['$injector'];
                return this.directive(a, c);
            };
            this.aHrefSanitizationWhitelist = function (a) {
                return y(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist();
            };
            this.imgSrcSanitizationWhitelist = function (a) {
                return y(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist();
            };
            var m = !0;
            this.debugInfoEnabled = function (a) {
                return y(a) ? (m = a, this) : m;
            };
            this.$get = [
                '$injector',
                '$interpolate',
                '$exceptionHandler',
                '$templateRequest',
                '$parse',
                '$controller',
                '$rootScope',
                '$sce',
                '$animate',
                '$$sanitizeUri',
                function (a, b, c, d, p, w, u, la, z, A) {
                    function Q(a, b, c) {
                        ba.innerHTML = '<span ' + b + '>';
                        b = ba.firstChild.attributes;
                        var d = b[0];
                        b.removeNamedItem(d.name);
                        d.value = c;
                        a.attributes.setNamedItem(d);
                    }
                    function $(a, b) {
                        try {
                            a.addClass(b);
                        } catch (c) {
                        }
                    }
                    function M(a, b, c, d, e) {
                        a instanceof C || (a = C(a));
                        for (var f = /\S+/, g = 0, h = a.length; g < h; g++) {
                            var k = a[g];
                            k.nodeType === Pa && k.nodeValue.match(f) && Oc(k, a[g] = W.createElement('span'));
                        }
                        var l = P(a, b, a, c, d, e);
                        M.$$addScopeClass(a);
                        var m = null;
                        return function (b, c, d) {
                            sb(b, 'scope');
                            e && e.needsNewScope && (b = b.$parent.$new());
                            d = d || {};
                            var f = d.parentBoundTranscludeFn, g = d.transcludeControllers;
                            d = d.futureParentElement;
                            f && f.$$boundTransclude && (f = f.$$boundTransclude);
                            m || (m = (d = d && d[0]) ? 'foreignobject' !== ra(d) && ga.call(d).match(/SVG/) ? 'svg' : 'html' : 'html');
                            d = 'html' !== m ? C(U(m, C('<div>').append(a).html())) : c ? Ra.clone.call(a) : a;
                            if (g)
                                for (var h in g)
                                    d.data('$' + h + 'Controller', g[h].instance);
                            M.$$addScopeInfo(d, b);
                            c && c(d, b);
                            l && l(b, d, d, f);
                            return d;
                        };
                    }
                    function P(a, b, c, d, e, f) {
                        function g(a, c, d, e) {
                            var f, k, l, m, p, s, u;
                            if (A)
                                for (u = Array(c.length), m = 0; m < h.length; m += 3)
                                    f = h[m], u[f] = c[f];
                            else
                                u = c;
                            m = 0;
                            for (p = h.length; m < p;)
                                k = u[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), M.$$addScopeInfo(C(k), l)) : l = a, s = c.transcludeOnThisElement ? S(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? S(a, b) : null, c(f, l, k, d, s)) : f && f(a, k.childNodes, v, e);
                        }
                        for (var h = [], k, l, m, p, A, s = 0; s < a.length; s++) {
                            k = new na();
                            l = ma(a[s], [], k, 0 === s ? d : v, e);
                            (f = l.length ? y(l, a[s], k, b, c, null, [], [], f) : null) && f.scope && M.$$addScopeClass(k.$$element);
                            k = f && f.terminal || !(m = a[s].childNodes) || !m.length ? null : P(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
                            if (f || k)
                                h.push(s, f, k), p = !0, A = A || f;
                            f = null;
                        }
                        return p ? g : null;
                    }
                    function S(a, b, c) {
                        var d = function (d, e, f, g, h) {
                                d || (d = a.$new(!1, h), d.$$transcluded = !0);
                                return b(d, e, {
                                    parentBoundTranscludeFn: c,
                                    transcludeControllers: f,
                                    futureParentElement: g
                                });
                            }, e = d.$$slots = Z(), f;
                        for (f in b.$$slots)
                            e[f] = b.$$slots[f] ? S(a, b.$$slots[f], c) : null;
                        return d;
                    }
                    function ma(a, b, c, d, e) {
                        var h = c.$attr, k;
                        switch (a.nodeType) {
                        case 1:
                            H(b, va(ra(a)), 'E', d, e);
                            for (var l, m, p, s = a.attributes, A = 0, u = s && s.length; A < u; A++) {
                                var t = !1, w = !1;
                                l = s[A];
                                k = l.name;
                                m = X(l.value);
                                l = va(k);
                                if (p = pa.test(l))
                                    k = k.replace(Xc, '').substr(8).replace(/_(.)/g, function (a, b) {
                                        return b.toUpperCase();
                                    });
                                (l = l.match(ua)) && O(l[1]) && (t = k, w = k.substr(0, k.length - 5) + 'end', k = k.substr(0, k.length - 6));
                                l = va(k.toLowerCase());
                                h[l] = k;
                                if (p || !c.hasOwnProperty(l))
                                    c[l] = m, Tc(a, l) && (c[l] = !0);
                                Y(a, b, m, l, p);
                                H(b, l, 'A', d, e, t, w);
                            }
                            a = a.className;
                            E(a) && (a = a.animVal);
                            if (F(a) && '' !== a)
                                for (; k = g.exec(a);)
                                    l = va(k[2]), H(b, l, 'C', d, e) && (c[l] = X(k[3])), a = a.substr(k.index + k[0].length);
                            break;
                        case Pa:
                            if (11 === xa)
                                for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Pa;)
                                    a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
                            N(b, a.nodeValue);
                            break;
                        case 8:
                            try {
                                if (k = f.exec(a.nodeValue))
                                    l = va(k[1]), H(b, l, 'M', d, e) && (c[l] = X(k[2]));
                            } catch (M) {
                            }
                        }
                        b.sort(ya);
                        return b;
                    }
                    function q(a, b, c) {
                        var d = [], e = 0;
                        if (b && a.hasAttribute && a.hasAttribute(b)) {
                            do {
                                if (!a)
                                    throw ja('uterdir', b, c);
                                1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                                d.push(a);
                                a = a.nextSibling;
                            } while (0 < e);
                        } else
                            d.push(a);
                        return C(d);
                    }
                    function Yc(a, b, c) {
                        return function (d, e, f, g, h) {
                            e = q(e[0], b, c);
                            return a(d, e, f, g, h);
                        };
                    }
                    function ac(a, b, c, d, e, f) {
                        if (a)
                            return M(b, c, d, e, f);
                        var g;
                        return function () {
                            g || (g = M(b, c, d, e, f), b = c = f = null);
                            return g.apply(this, arguments);
                        };
                    }
                    function y(a, b, d, e, f, g, h, l, m) {
                        function p(a, b, c, d) {
                            if (a) {
                                c && (a = Yc(a, c, d));
                                a.require = J.require;
                                a.directiveName = H;
                                if (P === J || J.$$isolateScope)
                                    a = ca(a, { isolateScope: !0 });
                                h.push(a);
                            }
                            if (b) {
                                c && (b = Yc(b, c, d));
                                b.require = J.require;
                                b.directiveName = H;
                                if (P === J || J.$$isolateScope)
                                    b = ca(b, { isolateScope: !0 });
                                l.push(b);
                            }
                        }
                        function s(a, b, c, d) {
                            var e;
                            if (F(b)) {
                                var f = b.match(k);
                                b = b.substring(f[0].length);
                                var g = f[1] || f[3], f = '?' === f[2];
                                '^^' === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;
                                if (!e) {
                                    var h = '$' + b + 'Controller';
                                    e = g ? c.inheritedData(h) : c.data(h);
                                }
                                if (!e && !f)
                                    throw ja('ctreq', b, a);
                            } else if (L(b))
                                for (e = [], g = 0, f = b.length; g < f; g++)
                                    e[g] = s(a, b[g], c, d);
                            else
                                E(b) && (e = {}, n(b, function (b, f) {
                                    e[f] = s(a, b, c, d);
                                }));
                            return e || null;
                        }
                        function A(a, b, c, d, e, f) {
                            var g = Z(), h;
                            for (h in d) {
                                var k = d[h], l = {
                                        $scope: k === P || k.$$isolateScope ? e : f,
                                        $element: a,
                                        $attrs: b,
                                        $transclude: c
                                    }, m = k.controller;
                                '@' == m && (m = b[k.name]);
                                l = w(m, l, !0, k.controllerAs);
                                g[k.name] = l;
                                B || a.data('$' + k.name + 'Controller', l.instance);
                            }
                            return g;
                        }
                        function u(a, c, e, f, g) {
                            function k(a, b, c, d) {
                                var e;
                                bb(a) || (d = c, c = b, b = a, a = v);
                                B && (e = ma);
                                c || (c = B ? z.parent() : z);
                                if (d) {
                                    var f = g.$$slots[d];
                                    if (f)
                                        return f(a, b, e, c, Eb);
                                    if (x(f))
                                        throw ja('noslot', d, ta(z));
                                } else
                                    return g(a, b, e, c, Eb);
                            }
                            var m, p, t, w, ma, S, z, Ja;
                            b === e ? (f = d, z = d.$$element) : (z = C(e), f = new na(z, d));
                            t = c;
                            P ? w = c.$new(!0) : Q && (t = c.$parent);
                            g && (S = k, S.$$boundTransclude = g, S.isSlotFilled = function (a) {
                                return !!g.$$slots[a];
                            });
                            I && (ma = A(z, f, S, I, w, c));
                            P && (M.$$addScopeInfo(z, w, !0, !($ && ($ === P || $ === P.$$originalDirective))), M.$$addScopeClass(z, !0), w.$$isolateBindings = P.$$isolateBindings, (Ja = ia(c, f, w, w.$$isolateBindings, P)) && w.$on('$destroy', Ja));
                            for (p in ma) {
                                Ja = I[p];
                                var K = ma[p], la = Ja.$$bindings.bindToController;
                                K.identifier && la && (m = ia(t, f, K.instance, la, Ja));
                                var q = K();
                                q !== K.instance && (K.instance = q, z.data('$' + Ja.name + 'Controller', q), m && m(), m = ia(t, f, K.instance, la, Ja));
                            }
                            n(I, function (a, b) {
                                var c = a.require;
                                a.bindToController && !L(c) && E(c) && T(ma[b].instance, s(b, c, z, ma));
                            });
                            n(ma, function (a) {
                                D(a.instance.$onInit) && a.instance.$onInit();
                            });
                            m = 0;
                            for (p = h.length; m < p; m++)
                                t = h[m], ka(t, t.isolateScope ? w : c, z, f, t.require && s(t.directiveName, t.require, z, ma), S);
                            var Eb = c;
                            P && (P.template || null === P.templateUrl) && (Eb = w);
                            a && a(Eb, e.childNodes, v, g);
                            for (m = l.length - 1; 0 <= m; m--)
                                t = l[m], ka(t, t.isolateScope ? w : c, z, f, t.require && s(t.directiveName, t.require, z, ma), S);
                        }
                        m = m || {};
                        for (var t = -Number.MAX_VALUE, Q = m.newScopeDirective, I = m.controllerDirectives, P = m.newIsolateScopeDirective, $ = m.templateDirective, S = m.nonTlbTranscludeDirective, z = !1, la = !1, B = m.hasElementTranscludeDirective, ea = d.$$element = C(b), J, H, G, ya = e, O, N = !1, Fb = !1, fa, R = 0, Va = a.length; R < Va; R++) {
                            J = a[R];
                            var Y = J.$$start, ba = J.$$end;
                            Y && (ea = q(b, Y, ba));
                            G = v;
                            if (t > J.priority)
                                break;
                            if (fa = J.scope)
                                J.templateUrl || (E(fa) ? (Wa('new/isolated scope', P || Q, J, ea), P = J) : Wa('new/isolated scope', P, J, ea)), Q = Q || J;
                            H = J.name;
                            if (!N && (J.replace && (J.templateUrl || J.template) || J.transclude && !J.$$tlb)) {
                                for (fa = R + 1; N = a[fa++];)
                                    if (N.transclude && !N.$$tlb || N.replace && (N.templateUrl || N.template)) {
                                        Fb = !0;
                                        break;
                                    }
                                N = !0;
                            }
                            !J.templateUrl && J.controller && (fa = J.controller, I = I || Z(), Wa('\'' + H + '\' controller', I[H], J, ea), I[H] = J);
                            if (fa = J.transclude)
                                if (z = !0, J.$$tlb || (Wa('transclusion', S, J, ea), S = J), 'element' == fa)
                                    B = !0, t = J.priority, G = ea, ea = d.$$element = C(W.createComment(' ' + H + ': ' + d[H] + ' ')), b = ea[0], aa(f, wa.call(G, 0), b), ya = ac(Fb, G, e, t, g && g.name, { nonTlbTranscludeDirective: S });
                                else {
                                    var V = Z();
                                    G = C(Yb(b)).contents();
                                    if (E(fa)) {
                                        G = [];
                                        var ha = Z(), da = Z();
                                        n(fa, function (a, b) {
                                            var c = '?' === a.charAt(0);
                                            a = c ? a.substring(1) : a;
                                            ha[a] = b;
                                            V[b] = null;
                                            da[b] = c;
                                        });
                                        n(ea.contents(), function (a) {
                                            var b = ha[va(ra(a))];
                                            b ? (da[b] = !0, V[b] = V[b] || [], V[b].push(a)) : G.push(a);
                                        });
                                        n(da, function (a, b) {
                                            if (!a)
                                                throw ja('reqslot', b);
                                        });
                                        for (var ga in V)
                                            V[ga] && (V[ga] = ac(Fb, V[ga], e));
                                    }
                                    ea.empty();
                                    ya = ac(Fb, G, e, v, v, { needsNewScope: J.$$isolateScope || J.$$newScope });
                                    ya.$$slots = V;
                                }
                            if (J.template)
                                if (la = !0, Wa('template', $, J, ea), $ = J, fa = D(J.template) ? J.template(ea, d) : J.template, fa = qa(fa), J.replace) {
                                    g = J;
                                    G = Wb.test(fa) ? Zc(U(J.templateNamespace, X(fa))) : [];
                                    b = G[0];
                                    if (1 != G.length || 1 !== b.nodeType)
                                        throw ja('tplrt', H, '');
                                    aa(f, ea, b);
                                    Va = { $attr: {} };
                                    fa = ma(b, [], Va);
                                    var oa = a.splice(R + 1, a.length - (R + 1));
                                    (P || Q) && $c(fa, P, Q);
                                    a = a.concat(fa).concat(oa);
                                    ad(d, Va);
                                    Va = a.length;
                                } else
                                    ea.html(fa);
                            if (J.templateUrl)
                                la = !0, Wa('template', $, J, ea), $ = J, J.replace && (g = J), u = $f(a.splice(R, a.length - R), ea, d, f, z && ya, h, l, {
                                    controllerDirectives: I,
                                    newScopeDirective: Q !== J && Q,
                                    newIsolateScopeDirective: P,
                                    templateDirective: $,
                                    nonTlbTranscludeDirective: S
                                }), Va = a.length;
                            else if (J.compile)
                                try {
                                    O = J.compile(ea, d, ya), D(O) ? p(null, O, Y, ba) : O && p(O.pre, O.post, Y, ba);
                                } catch (pa) {
                                    c(pa, ta(ea));
                                }
                            J.terminal && (u.terminal = !0, t = Math.max(t, J.priority));
                        }
                        u.scope = Q && !0 === Q.scope;
                        u.transcludeOnThisElement = z;
                        u.templateOnThisElement = la;
                        u.transclude = ya;
                        m.hasElementTranscludeDirective = B;
                        return u;
                    }
                    function $c(a, b, c) {
                        for (var d = 0, e = a.length; d < e; d++)
                            a[d] = Sb(a[d], {
                                $$isolateScope: b,
                                $$newScope: c
                            });
                    }
                    function H(b, d, f, g, h, k, l) {
                        if (d === h)
                            return null;
                        h = null;
                        if (e.hasOwnProperty(d)) {
                            var m;
                            d = a.get(d + 'Directive');
                            for (var p = 0, A = d.length; p < A; p++)
                                try {
                                    m = d[p], (x(g) || g > m.priority) && -1 != m.restrict.indexOf(f) && (k && (m = Sb(m, {
                                        $$start: k,
                                        $$end: l
                                    })), b.push(m), h = m);
                                } catch (t) {
                                    c(t);
                                }
                        }
                        return h;
                    }
                    function O(b) {
                        if (e.hasOwnProperty(b))
                            for (var c = a.get(b + 'Directive'), d = 0, f = c.length; d < f; d++)
                                if (b = c[d], b.multiElement)
                                    return !0;
                        return !1;
                    }
                    function ad(a, b) {
                        var c = b.$attr, d = a.$attr, e = a.$$element;
                        n(a, function (d, e) {
                            '$' != e.charAt(0) && (b[e] && b[e] !== d && (d += ('style' === e ? ';' : ' ') + b[e]), a.$set(e, d, !0, c[e]));
                        });
                        n(b, function (b, f) {
                            'class' == f ? ($(e, b), a['class'] = (a['class'] ? a['class'] + ' ' : '') + b) : 'style' == f ? (e.attr('style', e.attr('style') + ';' + b), a.style = (a.style ? a.style + ';' : '') + b) : '$' == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f]);
                        });
                    }
                    function $f(a, b, c, e, f, g, h, k) {
                        var l = [], m, p, s = b[0], A = a.shift(), u = Sb(A, {
                                templateUrl: null,
                                transclude: null,
                                replace: null,
                                $$originalDirective: A
                            }), w = D(A.templateUrl) ? A.templateUrl(b, c) : A.templateUrl, Q = A.templateNamespace;
                        b.empty();
                        d(w).then(function (d) {
                            var t, I;
                            d = qa(d);
                            if (A.replace) {
                                d = Wb.test(d) ? Zc(U(Q, X(d))) : [];
                                t = d[0];
                                if (1 != d.length || 1 !== t.nodeType)
                                    throw ja('tplrt', A.name, w);
                                d = { $attr: {} };
                                aa(e, b, t);
                                var M = ma(t, [], d);
                                E(A.scope) && $c(M, !0);
                                a = M.concat(a);
                                ad(c, d);
                            } else
                                t = s, b.html(d);
                            a.unshift(u);
                            m = y(a, t, c, f, b, A, g, h, k);
                            n(e, function (a, c) {
                                a == t && (e[c] = b[0]);
                            });
                            for (p = P(b[0].childNodes, f); l.length;) {
                                d = l.shift();
                                I = l.shift();
                                var z = l.shift(), K = l.shift(), M = b[0];
                                if (!d.$$destroyed) {
                                    if (I !== s) {
                                        var la = I.className;
                                        k.hasElementTranscludeDirective && A.replace || (M = Yb(t));
                                        aa(z, C(I), M);
                                        $(C(M), la);
                                    }
                                    I = m.transcludeOnThisElement ? S(d, m.transclude, K) : K;
                                    m(p, d, M, e, I);
                                }
                            }
                            l = null;
                        });
                        return function (a, b, c, d, e) {
                            a = e;
                            b.$$destroyed || (l ? l.push(b, c, d, a) : (m.transcludeOnThisElement && (a = S(b, m.transclude, e)), m(p, b, c, d, a)));
                        };
                    }
                    function ya(a, b) {
                        var c = b.priority - a.priority;
                        return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
                    }
                    function Wa(a, b, c, d) {
                        function e(a) {
                            return a ? ' (module: ' + a + ')' : '';
                        }
                        if (b)
                            throw ja('multidir', b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ta(d));
                    }
                    function N(a, c) {
                        var d = b(c, !0);
                        d && a.push({
                            priority: 0,
                            compile: function (a) {
                                a = a.parent();
                                var b = !!a.length;
                                b && M.$$addBindingClass(a);
                                return function (a, c) {
                                    var e = c.parent();
                                    b || M.$$addBindingClass(e);
                                    M.$$addBindingInfo(e, d.expressions);
                                    a.$watch(d, function (a) {
                                        c[0].nodeValue = a;
                                    });
                                };
                            }
                        });
                    }
                    function U(a, b) {
                        a = G(a || 'html');
                        switch (a) {
                        case 'svg':
                        case 'math':
                            var c = W.createElement('div');
                            c.innerHTML = '<' + a + '>' + b + '</' + a + '>';
                            return c.childNodes[0].childNodes;
                        default:
                            return b;
                        }
                    }
                    function R(a, b) {
                        if ('srcdoc' == b)
                            return la.HTML;
                        var c = ra(a);
                        if ('xlinkHref' == b || 'form' == c && 'action' == b || 'img' != c && ('src' == b || 'ngSrc' == b))
                            return la.RESOURCE_URL;
                    }
                    function Y(a, c, d, e, f) {
                        var g = R(a, e);
                        f = h[e] || f;
                        var k = b(d, !0, g, f);
                        if (k) {
                            if ('multiple' === e && 'select' === ra(a))
                                throw ja('selmulti', ta(a));
                            c.push({
                                priority: 100,
                                compile: function () {
                                    return {
                                        pre: function (a, c, h) {
                                            c = h.$$observers || (h.$$observers = Z());
                                            if (l.test(e))
                                                throw ja('nodomevents');
                                            var m = h[e];
                                            m !== d && (k = m && b(m, !0, g, f), d = m);
                                            k && (h[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (h.$$observers && h.$$observers[e].$$scope || a).$watch(k, function (a, b) {
                                                'class' === e && a != b ? h.$updateClass(a, b) : h.$set(e, a);
                                            }));
                                        }
                                    };
                                }
                            });
                        }
                    }
                    function aa(a, b, c) {
                        var d = b[0], e = b.length, f = d.parentNode, g, h;
                        if (a)
                            for (g = 0, h = a.length; g < h; g++)
                                if (a[g] == d) {
                                    a[g++] = c;
                                    h = g + e - 1;
                                    for (var k = a.length; g < k; g++, h++)
                                        h < k ? a[g] = a[h] : delete a[g];
                                    a.length -= e - 1;
                                    a.context === d && (a.context = c);
                                    break;
                                }
                        f && f.replaceChild(c, d);
                        a = W.createDocumentFragment();
                        for (g = 0; g < e; g++)
                            a.appendChild(b[g]);
                        C.hasData(d) && (C.data(c, C.data(d)), C(d).off('$destroy'));
                        C.cleanData(a.querySelectorAll('*'));
                        for (g = 1; g < e; g++)
                            delete b[g];
                        b[0] = c;
                        b.length = 1;
                    }
                    function ca(a, b) {
                        return T(function () {
                            return a.apply(null, arguments);
                        }, a, b);
                    }
                    function ka(a, b, d, e, f, g) {
                        try {
                            a(b, d, e, f, g);
                        } catch (h) {
                            c(h, ta(d));
                        }
                    }
                    function ia(a, c, d, e, f) {
                        var g = [];
                        n(e, function (e, h) {
                            var k = e.attrName, l = e.optional, m, A, s, t;
                            switch (e.mode) {
                            case '@':
                                l || sa.call(c, k) || (d[h] = c[k] = void 0);
                                c.$observe(k, function (a) {
                                    F(a) && (d[h] = a);
                                });
                                c.$$observers[k].$$scope = a;
                                m = c[k];
                                F(m) ? d[h] = b(m)(a) : Na(m) && (d[h] = m);
                                break;
                            case '=':
                                if (!sa.call(c, k)) {
                                    if (l)
                                        break;
                                    c[k] = void 0;
                                }
                                if (l && !c[k])
                                    break;
                                A = p(c[k]);
                                t = A.literal ? oa : function (a, b) {
                                    return a === b || a !== a && b !== b;
                                };
                                s = A.assign || function () {
                                    m = d[h] = A(a);
                                    throw ja('nonassign', c[k], k, f.name);
                                };
                                m = d[h] = A(a);
                                l = function (b) {
                                    t(b, d[h]) || (t(b, m) ? s(a, b = d[h]) : d[h] = b);
                                    return m = b;
                                };
                                l.$stateful = !0;
                                l = e.collection ? a.$watchCollection(c[k], l) : a.$watch(p(c[k], l), null, A.literal);
                                g.push(l);
                                break;
                            case '<':
                                if (!sa.call(c, k)) {
                                    if (l)
                                        break;
                                    c[k] = void 0;
                                }
                                if (l && !c[k])
                                    break;
                                A = p(c[k]);
                                d[h] = A(a);
                                l = a.$watch(A, function (a) {
                                    d[h] = a;
                                }, A.literal);
                                g.push(l);
                                break;
                            case '&':
                                A = c.hasOwnProperty(k) ? p(c[k]) : B;
                                if (A === B && l)
                                    break;
                                d[h] = function (b) {
                                    return A(a, b);
                                };
                            }
                        });
                        return g.length && function () {
                            for (var a = 0, b = g.length; a < b; ++a)
                                g[a]();
                        };
                    }
                    var V = /^\w/, ba = W.createElement('div'), na = function (a, b) {
                            if (b) {
                                var c = Object.keys(b), d, e, f;
                                d = 0;
                                for (e = c.length; d < e; d++)
                                    f = c[d], this[f] = b[f];
                            } else
                                this.$attr = {};
                            this.$$element = a;
                        };
                    na.prototype = {
                        $normalize: va,
                        $addClass: function (a) {
                            a && 0 < a.length && z.addClass(this.$$element, a);
                        },
                        $removeClass: function (a) {
                            a && 0 < a.length && z.removeClass(this.$$element, a);
                        },
                        $updateClass: function (a, b) {
                            var c = bd(a, b);
                            c && c.length && z.addClass(this.$$element, c);
                            (c = bd(b, a)) && c.length && z.removeClass(this.$$element, c);
                        },
                        $set: function (a, b, d, e) {
                            var f = Tc(this.$$element[0], a), g = cd[a], h = a;
                            f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);
                            this[a] = b;
                            e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Bc(a, '-'));
                            f = ra(this.$$element);
                            if ('a' === f && ('href' === a || 'xlinkHref' === a) || 'img' === f && 'src' === a)
                                this[a] = b = A(b, 'src' === a);
                            else if ('img' === f && 'srcset' === a) {
                                for (var f = '', g = X(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++)
                                    var m = 2 * l, f = f + A(X(g[m]), !0), f = f + (' ' + X(g[m + 1]));
                                g = X(g[2 * l]).split(/\s/);
                                f += A(X(g[0]), !0);
                                2 === g.length && (f += ' ' + X(g[1]));
                                this[a] = b = f;
                            }
                            !1 !== d && (null === b || x(b) ? this.$$element.removeAttr(e) : V.test(e) ? this.$$element.attr(e, b) : Q(this.$$element[0], e, b));
                            (a = this.$$observers) && n(a[h], function (a) {
                                try {
                                    a(b);
                                } catch (d) {
                                    c(d);
                                }
                            });
                        },
                        $observe: function (a, b) {
                            var c = this, d = c.$$observers || (c.$$observers = Z()), e = d[a] || (d[a] = []);
                            e.push(b);
                            u.$evalAsync(function () {
                                e.$$inter || !c.hasOwnProperty(a) || x(c[a]) || b(c[a]);
                            });
                            return function () {
                                cb(e, b);
                            };
                        }
                    };
                    var ha = b.startSymbol(), da = b.endSymbol(), qa = '{{' == ha && '}}' == da ? ab : function (a) {
                            return a.replace(/\{\{/g, ha).replace(/}}/g, da);
                        }, pa = /^ngAttr[A-Z]/, ua = /^(.+)Start$/;
                    M.$$addBindingInfo = m ? function (a, b) {
                        var c = a.data('$binding') || [];
                        L(b) ? c = c.concat(b) : c.push(b);
                        a.data('$binding', c);
                    } : B;
                    M.$$addBindingClass = m ? function (a) {
                        $(a, 'ng-binding');
                    } : B;
                    M.$$addScopeInfo = m ? function (a, b, c, d) {
                        a.data(c ? d ? '$isolateScopeNoTemplate' : '$isolateScope' : '$scope', b);
                    } : B;
                    M.$$addScopeClass = m ? function (a, b) {
                        $(a, b ? 'ng-isolate-scope' : 'ng-scope');
                    } : B;
                    return M;
                }
            ];
        }
        function va(a) {
            return gb(a.replace(Xc, ''));
        }
        function bd(a, b) {
            var d = '', c = a.split(/\s+/), e = b.split(/\s+/), f = 0;
            a:
                for (; f < c.length; f++) {
                    for (var g = c[f], h = 0; h < e.length; h++)
                        if (g == e[h])
                            continue a;
                    d += (0 < d.length ? ' ' : '') + g;
                }
            return d;
        }
        function Zc(a) {
            a = C(a);
            var b = a.length;
            if (1 >= b)
                return a;
            for (; b--;)
                8 === a[b].nodeType && ag.call(a, b, 1);
            return a;
        }
        function Wc(a, b) {
            if (b && F(b))
                return b;
            if (F(a)) {
                var d = dd.exec(a);
                if (d)
                    return d[3];
            }
        }
        function ff() {
            var a = {}, b = !1;
            this.register = function (b, c) {
                Ta(b, 'controller');
                E(b) ? T(a, b) : a[b] = c;
            };
            this.allowGlobals = function () {
                b = !0;
            };
            this.$get = [
                '$injector',
                '$window',
                function (d, c) {
                    function e(a, b, c, d) {
                        if (!a || !E(a.$scope))
                            throw H('$controller')('noscp', d, b);
                        a.$scope[b] = c;
                    }
                    return function (f, g, h, k) {
                        var l, m, r;
                        h = !0 === h;
                        k && F(k) && (r = k);
                        if (F(f)) {
                            k = f.match(dd);
                            if (!k)
                                throw bg('ctrlfmt', f);
                            m = k[1];
                            r = r || k[3];
                            f = a.hasOwnProperty(m) ? a[m] : Dc(g.$scope, m, !0) || (b ? Dc(c, m, !0) : v);
                            Sa(f, m, !0);
                        }
                        if (h)
                            return h = (L(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), r && e(g, r, l, m || f.name), T(function () {
                                var a = d.invoke(f, l, g, m);
                                a !== l && (E(a) || D(a)) && (l = a, r && e(g, r, l, m || f.name));
                                return l;
                            }, {
                                instance: l,
                                identifier: r
                            });
                        l = d.instantiate(f, g, m);
                        r && e(g, r, l, m || f.name);
                        return l;
                    };
                }
            ];
        }
        function gf() {
            this.$get = [
                '$window',
                function (a) {
                    return C(a.document);
                }
            ];
        }
        function hf() {
            this.$get = [
                '$log',
                function (a) {
                    return function (b, d) {
                        a.error.apply(a, arguments);
                    };
                }
            ];
        }
        function bc(a) {
            return E(a) ? V(a) ? a.toISOString() : eb(a) : a;
        }
        function nf() {
            this.$get = function () {
                return function (a) {
                    if (!a)
                        return '';
                    var b = [];
                    rc(a, function (a, c) {
                        null === a || x(a) || (L(a) ? n(a, function (a, d) {
                            b.push(ha(c) + '=' + ha(bc(a)));
                        }) : b.push(ha(c) + '=' + ha(bc(a))));
                    });
                    return b.join('&');
                };
            };
        }
        function of() {
            this.$get = function () {
                return function (a) {
                    function b(a, e, f) {
                        null === a || x(a) || (L(a) ? n(a, function (a, c) {
                            b(a, e + '[' + (E(a) ? c : '') + ']');
                        }) : E(a) && !V(a) ? rc(a, function (a, c) {
                            b(a, e + (f ? '' : '[') + c + (f ? '' : ']'));
                        }) : d.push(ha(e) + '=' + ha(bc(a))));
                    }
                    if (!a)
                        return '';
                    var d = [];
                    b(a, '', !0);
                    return d.join('&');
                };
            };
        }
        function cc(a, b) {
            if (F(a)) {
                var d = a.replace(cg, '').trim();
                if (d) {
                    var c = b('Content-Type');
                    (c = c && 0 === c.indexOf(ed)) || (c = (c = d.match(dg)) && eg[c[0]].test(d));
                    c && (a = wc(d));
                }
            }
            return a;
        }
        function fd(a) {
            var b = Z(), d;
            F(a) ? n(a.split('\n'), function (a) {
                d = a.indexOf(':');
                var e = G(X(a.substr(0, d)));
                a = X(a.substr(d + 1));
                e && (b[e] = b[e] ? b[e] + ', ' + a : a);
            }) : E(a) && n(a, function (a, d) {
                var f = G(d), g = X(a);
                f && (b[f] = b[f] ? b[f] + ', ' + g : g);
            });
            return b;
        }
        function gd(a) {
            var b;
            return function (d) {
                b || (b = fd(a));
                return d ? (d = b[G(d)], void 0 === d && (d = null), d) : b;
            };
        }
        function hd(a, b, d, c) {
            if (D(c))
                return c(a, b, d);
            n(c, function (c) {
                a = c(a, b, d);
            });
            return a;
        }
        function mf() {
            var a = this.defaults = {
                    transformResponse: [cc],
                    transformRequest: [function (a) {
                            return E(a) && '[object File]' !== ga.call(a) && '[object Blob]' !== ga.call(a) && '[object FormData]' !== ga.call(a) ? eb(a) : a;
                        }],
                    headers: {
                        common: { Accept: 'application/json, text/plain, */*' },
                        post: na(dc),
                        put: na(dc),
                        patch: na(dc)
                    },
                    xsrfCookieName: 'XSRF-TOKEN',
                    xsrfHeaderName: 'X-XSRF-TOKEN',
                    paramSerializer: '$httpParamSerializer'
                }, b = !1;
            this.useApplyAsync = function (a) {
                return y(a) ? (b = !!a, this) : b;
            };
            var d = !0;
            this.useLegacyPromiseExtensions = function (a) {
                return y(a) ? (d = !!a, this) : d;
            };
            var c = this.interceptors = [];
            this.$get = [
                '$httpBackend',
                '$$cookieReader',
                '$cacheFactory',
                '$rootScope',
                '$q',
                '$injector',
                function (e, f, g, h, k, l) {
                    function m(b) {
                        function c(a) {
                            var b = T({}, a);
                            b.data = hd(a.data, a.headers, a.status, f.transformResponse);
                            a = a.status;
                            return 200 <= a && 300 > a ? b : k.reject(b);
                        }
                        function e(a, b) {
                            var c, d = {};
                            n(a, function (a, e) {
                                D(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a;
                            });
                            return d;
                        }
                        if (!E(b))
                            throw H('$http')('badreq', b);
                        if (!F(b.url))
                            throw H('$http')('badreq', b.url);
                        var f = T({
                            method: 'get',
                            transformRequest: a.transformRequest,
                            transformResponse: a.transformResponse,
                            paramSerializer: a.paramSerializer
                        }, b);
                        f.headers = function (b) {
                            var c = a.headers, d = T({}, b.headers), f, g, h, c = T({}, c.common, c[G(b.method)]);
                            a:
                                for (f in c) {
                                    g = G(f);
                                    for (h in d)
                                        if (G(h) === g)
                                            continue a;
                                    d[f] = c[f];
                                }
                            return e(d, na(b));
                        }(b);
                        f.method = ub(f.method);
                        f.paramSerializer = F(f.paramSerializer) ? l.get(f.paramSerializer) : f.paramSerializer;
                        var g = [
                                function (b) {
                                    var d = b.headers, e = hd(b.data, gd(d), v, b.transformRequest);
                                    x(e) && n(d, function (a, b) {
                                        'content-type' === G(b) && delete d[b];
                                    });
                                    x(b.withCredentials) && !x(a.withCredentials) && (b.withCredentials = a.withCredentials);
                                    return r(b, e).then(c, c);
                                },
                                v
                            ], h = k.when(f);
                        for (n(K, function (a) {
                                (a.request || a.requestError) && g.unshift(a.request, a.requestError);
                                (a.response || a.responseError) && g.push(a.response, a.responseError);
                            }); g.length;) {
                            b = g.shift();
                            var m = g.shift(), h = h.then(b, m);
                        }
                        d ? (h.success = function (a) {
                            Sa(a, 'fn');
                            h.then(function (b) {
                                a(b.data, b.status, b.headers, f);
                            });
                            return h;
                        }, h.error = function (a) {
                            Sa(a, 'fn');
                            h.then(null, function (b) {
                                a(b.data, b.status, b.headers, f);
                            });
                            return h;
                        }) : (h.success = id('success'), h.error = id('error'));
                        return h;
                    }
                    function r(c, d) {
                        function g(a, c, d, e) {
                            function f() {
                                l(c, a, d, e);
                            }
                            K && (200 <= a && 300 > a ? K.put(S, [
                                a,
                                c,
                                fd(d),
                                e
                            ]) : K.remove(S));
                            b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply());
                        }
                        function l(a, b, d, e) {
                            b = -1 <= b ? b : 0;
                            (200 <= b && 300 > b ? A.resolve : A.reject)({
                                data: a,
                                status: b,
                                headers: gd(d),
                                config: c,
                                statusText: e
                            });
                        }
                        function r(a) {
                            l(a.data, a.status, na(a.headers()), a.statusText);
                        }
                        function z() {
                            var a = m.pendingRequests.indexOf(c);
                            -1 !== a && m.pendingRequests.splice(a, 1);
                        }
                        var A = k.defer(), Q = A.promise, K, M, P = c.headers, S = s(c.url, c.paramSerializer(c.params));
                        m.pendingRequests.push(c);
                        Q.then(z, z);
                        !c.cache && !a.cache || !1 === c.cache || 'GET' !== c.method && 'JSONP' !== c.method || (K = E(c.cache) ? c.cache : E(a.cache) ? a.cache : I);
                        K && (M = K.get(S), y(M) ? M && D(M.then) ? M.then(r, r) : L(M) ? l(M[1], M[0], na(M[2]), M[3]) : l(M, 200, {}, 'OK') : K.put(S, Q));
                        x(M) && ((M = jd(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : v) && (P[c.xsrfHeaderName || a.xsrfHeaderName] = M), e(c.method, S, d, g, P, c.timeout, c.withCredentials, c.responseType));
                        return Q;
                    }
                    function s(a, b) {
                        0 < b.length && (a += (-1 == a.indexOf('?') ? '?' : '&') + b);
                        return a;
                    }
                    var I = g('$http');
                    a.paramSerializer = F(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;
                    var K = [];
                    n(c, function (a) {
                        K.unshift(F(a) ? l.get(a) : l.invoke(a));
                    });
                    m.pendingRequests = [];
                    (function (a) {
                        n(arguments, function (a) {
                            m[a] = function (b, c) {
                                return m(T({}, c || {}, {
                                    method: a,
                                    url: b
                                }));
                            };
                        });
                    }('get', 'delete', 'head', 'jsonp'));
                    (function (a) {
                        n(arguments, function (a) {
                            m[a] = function (b, c, d) {
                                return m(T({}, d || {}, {
                                    method: a,
                                    url: b,
                                    data: c
                                }));
                            };
                        });
                    }('post', 'put', 'patch'));
                    m.defaults = a;
                    return m;
                }
            ];
        }
        function qf() {
            this.$get = function () {
                return function () {
                    return new O.XMLHttpRequest();
                };
            };
        }
        function pf() {
            this.$get = [
                '$browser',
                '$window',
                '$document',
                '$xhrFactory',
                function (a, b, d, c) {
                    return fg(a, c, a.defer, b.angular.callbacks, d[0]);
                }
            ];
        }
        function fg(a, b, d, c, e) {
            function f(a, b, d) {
                var f = e.createElement('script'), m = null;
                f.type = 'text/javascript';
                f.src = a;
                f.async = !0;
                m = function (a) {
                    f.removeEventListener('load', m, !1);
                    f.removeEventListener('error', m, !1);
                    e.body.removeChild(f);
                    f = null;
                    var g = -1, I = 'unknown';
                    a && ('load' !== a.type || c[b].called || (a = { type: 'error' }), I = a.type, g = 'error' === a.type ? 404 : 200);
                    d && d(g, I);
                };
                f.addEventListener('load', m, !1);
                f.addEventListener('error', m, !1);
                e.body.appendChild(f);
                return m;
            }
            return function (e, h, k, l, m, r, s, I) {
                function K() {
                    w && w();
                    u && u.abort();
                }
                function t(b, c, e, f, g) {
                    y(z) && d.cancel(z);
                    w = u = null;
                    b(c, e, f, g);
                    a.$$completeOutstandingRequest(B);
                }
                a.$$incOutstandingRequestCount();
                h = h || a.url();
                if ('jsonp' == G(e)) {
                    var p = '_' + (c.counter++).toString(36);
                    c[p] = function (a) {
                        c[p].data = a;
                        c[p].called = !0;
                    };
                    var w = f(h.replace('JSON_CALLBACK', 'angular.callbacks.' + p), p, function (a, b) {
                        t(l, a, c[p].data, '', b);
                        c[p] = B;
                    });
                } else {
                    var u = b(e, h);
                    u.open(e, h, !0);
                    n(m, function (a, b) {
                        y(a) && u.setRequestHeader(b, a);
                    });
                    u.onload = function () {
                        var a = u.statusText || '', b = 'response' in u ? u.response : u.responseText, c = 1223 === u.status ? 204 : u.status;
                        0 === c && (c = b ? 200 : 'file' == za(h).protocol ? 404 : 0);
                        t(l, c, b, u.getAllResponseHeaders(), a);
                    };
                    e = function () {
                        t(l, -1, null, null, '');
                    };
                    u.onerror = e;
                    u.onabort = e;
                    s && (u.withCredentials = !0);
                    if (I)
                        try {
                            u.responseType = I;
                        } catch (la) {
                            if ('json' !== I)
                                throw la;
                        }
                    u.send(x(k) ? null : k);
                }
                if (0 < r)
                    var z = d(K, r);
                else
                    r && D(r.then) && r.then(K);
            };
        }
        function kf() {
            var a = '{{', b = '}}';
            this.startSymbol = function (b) {
                return b ? (a = b, this) : a;
            };
            this.endSymbol = function (a) {
                return a ? (b = a, this) : b;
            };
            this.$get = [
                '$parse',
                '$exceptionHandler',
                '$sce',
                function (d, c, e) {
                    function f(a) {
                        return '\\\\\\' + a;
                    }
                    function g(c) {
                        return c.replace(r, a).replace(s, b);
                    }
                    function h(a, b, c, d) {
                        var e;
                        return e = a.$watch(function (a) {
                            e();
                            return d(a);
                        }, b, c);
                    }
                    function k(f, k, r, p) {
                        function s(a) {
                            try {
                                var b = a;
                                a = r ? e.getTrusted(r, b) : e.valueOf(b);
                                var d;
                                if (p && !y(a))
                                    d = a;
                                else if (null == a)
                                    d = '';
                                else {
                                    switch (typeof a) {
                                    case 'string':
                                        break;
                                    case 'number':
                                        a = '' + a;
                                        break;
                                    default:
                                        a = eb(a);
                                    }
                                    d = a;
                                }
                                return d;
                            } catch (g) {
                                c(Ka.interr(f, g));
                            }
                        }
                        if (!f.length || -1 === f.indexOf(a)) {
                            var u;
                            k || (k = g(f), u = ba(k), u.exp = f, u.expressions = [], u.$$watchDelegate = h);
                            return u;
                        }
                        p = !!p;
                        var n, z, A = 0, Q = [], $ = [];
                        u = f.length;
                        for (var M = [], P = []; A < u;)
                            if (-1 != (n = f.indexOf(a, A)) && -1 != (z = f.indexOf(b, n + l)))
                                A !== n && M.push(g(f.substring(A, n))), A = f.substring(n + l, z), Q.push(A), $.push(d(A, s)), A = z + m, P.push(M.length), M.push('');
                            else {
                                A !== u && M.push(g(f.substring(A)));
                                break;
                            }
                        r && 1 < M.length && Ka.throwNoconcat(f);
                        if (!k || Q.length) {
                            var S = function (a) {
                                for (var b = 0, c = Q.length; b < c; b++) {
                                    if (p && x(a[b]))
                                        return;
                                    M[P[b]] = a[b];
                                }
                                return M.join('');
                            };
                            return T(function (a) {
                                var b = 0, d = Q.length, e = Array(d);
                                try {
                                    for (; b < d; b++)
                                        e[b] = $[b](a);
                                    return S(e);
                                } catch (g) {
                                    c(Ka.interr(f, g));
                                }
                            }, {
                                exp: f,
                                expressions: Q,
                                $$watchDelegate: function (a, b) {
                                    var c;
                                    return a.$watchGroup($, function (d, e) {
                                        var f = S(d);
                                        D(b) && b.call(this, f, d !== e ? c : f, a);
                                        c = f;
                                    });
                                }
                            });
                        }
                    }
                    var l = a.length, m = b.length, r = new RegExp(a.replace(/./g, f), 'g'), s = new RegExp(b.replace(/./g, f), 'g');
                    k.startSymbol = function () {
                        return a;
                    };
                    k.endSymbol = function () {
                        return b;
                    };
                    return k;
                }
            ];
        }
        function lf() {
            this.$get = [
                '$rootScope',
                '$window',
                '$q',
                '$$q',
                '$browser',
                function (a, b, d, c, e) {
                    function f(f, k, l, m) {
                        function r() {
                            s ? f.apply(null, I) : f(p);
                        }
                        var s = 4 < arguments.length, I = s ? wa.call(arguments, 4) : [], K = b.setInterval, t = b.clearInterval, p = 0, w = y(m) && !m, u = (w ? c : d).defer(), n = u.promise;
                        l = y(l) ? l : 0;
                        n.$$intervalId = K(function () {
                            w ? e.defer(r) : a.$evalAsync(r);
                            u.notify(p++);
                            0 < l && p >= l && (u.resolve(p), t(n.$$intervalId), delete g[n.$$intervalId]);
                            w || a.$apply();
                        }, k);
                        g[n.$$intervalId] = u;
                        return n;
                    }
                    var g = {};
                    f.cancel = function (a) {
                        return a && a.$$intervalId in g ? (g[a.$$intervalId].reject('canceled'), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1;
                    };
                    return f;
                }
            ];
        }
        function ec(a) {
            a = a.split('/');
            for (var b = a.length; b--;)
                a[b] = qb(a[b]);
            return a.join('/');
        }
        function kd(a, b) {
            var d = za(a);
            b.$$protocol = d.protocol;
            b.$$host = d.hostname;
            b.$$port = ca(d.port) || gg[d.protocol] || null;
        }
        function ld(a, b) {
            var d = '/' !== a.charAt(0);
            d && (a = '/' + a);
            var c = za(a);
            b.$$path = decodeURIComponent(d && '/' === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);
            b.$$search = zc(c.search);
            b.$$hash = decodeURIComponent(c.hash);
            b.$$path && '/' != b.$$path.charAt(0) && (b.$$path = '/' + b.$$path);
        }
        function pa(a, b) {
            if (0 === b.indexOf(a))
                return b.substr(a.length);
        }
        function Ia(a) {
            var b = a.indexOf('#');
            return -1 == b ? a : a.substr(0, b);
        }
        function kb(a) {
            return a.replace(/(#.+)|#$/, '$1');
        }
        function fc(a, b, d) {
            this.$$html5 = !0;
            d = d || '';
            kd(a, this);
            this.$$parse = function (a) {
                var d = pa(b, a);
                if (!F(d))
                    throw Gb('ipthprfx', a, b);
                ld(d, this);
                this.$$path || (this.$$path = '/');
                this.$$compose();
            };
            this.$$compose = function () {
                var a = Ub(this.$$search), d = this.$$hash ? '#' + qb(this.$$hash) : '';
                this.$$url = ec(this.$$path) + (a ? '?' + a : '') + d;
                this.$$absUrl = b + this.$$url.substr(1);
            };
            this.$$parseLinkUrl = function (c, e) {
                if (e && '#' === e[0])
                    return this.hash(e.slice(1)), !0;
                var f, g;
                y(f = pa(a, c)) ? (g = f, g = y(f = pa(d, f)) ? b + (pa('/', f) || f) : a + g) : y(f = pa(b, c)) ? g = b + f : b == c + '/' && (g = b);
                g && this.$$parse(g);
                return !!g;
            };
        }
        function gc(a, b, d) {
            kd(a, this);
            this.$$parse = function (c) {
                var e = pa(a, c) || pa(b, c), f;
                x(e) || '#' !== e.charAt(0) ? this.$$html5 ? f = e : (f = '', x(e) && (a = c, this.replace())) : (f = pa(d, e), x(f) && (f = e));
                ld(f, this);
                c = this.$$path;
                var e = a, g = /^\/[A-Z]:(\/.*)/;
                0 === f.indexOf(e) && (f = f.replace(e, ''));
                g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);
                this.$$path = c;
                this.$$compose();
            };
            this.$$compose = function () {
                var b = Ub(this.$$search), e = this.$$hash ? '#' + qb(this.$$hash) : '';
                this.$$url = ec(this.$$path) + (b ? '?' + b : '') + e;
                this.$$absUrl = a + (this.$$url ? d + this.$$url : '');
            };
            this.$$parseLinkUrl = function (b, d) {
                return Ia(a) == Ia(b) ? (this.$$parse(b), !0) : !1;
            };
        }
        function md(a, b, d) {
            this.$$html5 = !0;
            gc.apply(this, arguments);
            this.$$parseLinkUrl = function (c, e) {
                if (e && '#' === e[0])
                    return this.hash(e.slice(1)), !0;
                var f, g;
                a == Ia(c) ? f = c : (g = pa(b, c)) ? f = a + d + g : b === c + '/' && (f = b);
                f && this.$$parse(f);
                return !!f;
            };
            this.$$compose = function () {
                var b = Ub(this.$$search), e = this.$$hash ? '#' + qb(this.$$hash) : '';
                this.$$url = ec(this.$$path) + (b ? '?' + b : '') + e;
                this.$$absUrl = a + d + this.$$url;
            };
        }
        function Hb(a) {
            return function () {
                return this[a];
            };
        }
        function nd(a, b) {
            return function (d) {
                if (x(d))
                    return this[a];
                this[a] = b(d);
                this.$$compose();
                return this;
            };
        }
        function rf() {
            var a = '', b = {
                    enabled: !1,
                    requireBase: !0,
                    rewriteLinks: !0
                };
            this.hashPrefix = function (b) {
                return y(b) ? (a = b, this) : a;
            };
            this.html5Mode = function (a) {
                return Na(a) ? (b.enabled = a, this) : E(a) ? (Na(a.enabled) && (b.enabled = a.enabled), Na(a.requireBase) && (b.requireBase = a.requireBase), Na(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b;
            };
            this.$get = [
                '$rootScope',
                '$browser',
                '$sniffer',
                '$rootElement',
                '$window',
                function (d, c, e, f, g) {
                    function h(a, b, d) {
                        var e = l.url(), f = l.$$state;
                        try {
                            c.url(a, b, d), l.$$state = c.state();
                        } catch (g) {
                            throw l.url(e), l.$$state = f, g;
                        }
                    }
                    function k(a, b) {
                        d.$broadcast('$locationChangeSuccess', l.absUrl(), a, l.$$state, b);
                    }
                    var l, m;
                    m = c.baseHref();
                    var r = c.url(), s;
                    if (b.enabled) {
                        if (!m && b.requireBase)
                            throw Gb('nobase');
                        s = r.substring(0, r.indexOf('/', r.indexOf('//') + 2)) + (m || '/');
                        m = e.history ? fc : md;
                    } else
                        s = Ia(r), m = gc;
                    var I = s.substr(0, Ia(s).lastIndexOf('/') + 1);
                    l = new m(s, I, '#' + a);
                    l.$$parseLinkUrl(r, r);
                    l.$$state = c.state();
                    var n = /^\s*(javascript|mailto):/i;
                    f.on('click', function (a) {
                        if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                            for (var e = C(a.target); 'a' !== ra(e[0]);)
                                if (e[0] === f[0] || !(e = e.parent())[0])
                                    return;
                            var h = e.prop('href'), k = e.attr('href') || e.attr('xlink:href');
                            E(h) && '[object SVGAnimatedString]' === h.toString() && (h = za(h.animVal).href);
                            n.test(h) || !h || e.attr('target') || a.isDefaultPrevented() || !l.$$parseLinkUrl(h, k) || (a.preventDefault(), l.absUrl() != c.url() && (d.$apply(), g.angular['ff-684208-preventDefault'] = !0));
                        }
                    });
                    kb(l.absUrl()) != kb(r) && c.url(l.absUrl(), !0);
                    var t = !0;
                    c.onUrlChange(function (a, b) {
                        x(pa(I, a)) ? g.location.href = a : (d.$evalAsync(function () {
                            var c = l.absUrl(), e = l.$$state, f;
                            a = kb(a);
                            l.$$parse(a);
                            l.$$state = b;
                            f = d.$broadcast('$locationChangeStart', a, c, b, e).defaultPrevented;
                            l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (t = !1, k(c, e)));
                        }), d.$$phase || d.$digest());
                    });
                    d.$watch(function () {
                        var a = kb(c.url()), b = kb(l.absUrl()), f = c.state(), g = l.$$replace, m = a !== b || l.$$html5 && e.history && f !== l.$$state;
                        if (t || m)
                            t = !1, d.$evalAsync(function () {
                                var b = l.absUrl(), c = d.$broadcast('$locationChangeStart', b, a, l.$$state, f).defaultPrevented;
                                l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = f) : (m && h(b, g, f === l.$$state ? null : l.$$state), k(a, f)));
                            });
                        l.$$replace = !1;
                    });
                    return l;
                }
            ];
        }
        function sf() {
            var a = !0, b = this;
            this.debugEnabled = function (b) {
                return y(b) ? (a = b, this) : a;
            };
            this.$get = [
                '$window',
                function (d) {
                    function c(a) {
                        a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? 'Error: ' + a.message + '\n' + a.stack : a.stack : a.sourceURL && (a = a.message + '\n' + a.sourceURL + ':' + a.line));
                        return a;
                    }
                    function e(a) {
                        var b = d.console || {}, e = b[a] || b.log || B;
                        a = !1;
                        try {
                            a = !!e.apply;
                        } catch (k) {
                        }
                        return a ? function () {
                            var a = [];
                            n(arguments, function (b) {
                                a.push(c(b));
                            });
                            return e.apply(b, a);
                        } : function (a, b) {
                            e(a, null == b ? '' : b);
                        };
                    }
                    return {
                        log: e('log'),
                        info: e('info'),
                        warn: e('warn'),
                        error: e('error'),
                        debug: function () {
                            var c = e('debug');
                            return function () {
                                a && c.apply(b, arguments);
                            };
                        }()
                    };
                }
            ];
        }
        function Xa(a, b) {
            if ('__defineGetter__' === a || '__defineSetter__' === a || '__lookupGetter__' === a || '__lookupSetter__' === a || '__proto__' === a)
                throw ka('isecfld', b);
            return a;
        }
        function hg(a) {
            return a + '';
        }
        function Aa(a, b) {
            if (a) {
                if (a.constructor === a)
                    throw ka('isecfn', b);
                if (a.window === a)
                    throw ka('isecwindow', b);
                if (a.children && (a.nodeName || a.prop && a.attr && a.find))
                    throw ka('isecdom', b);
                if (a === Object)
                    throw ka('isecobj', b);
            }
            return a;
        }
        function od(a, b) {
            if (a) {
                if (a.constructor === a)
                    throw ka('isecfn', b);
                if (a === ig || a === jg || a === kg)
                    throw ka('isecff', b);
            }
        }
        function Ib(a, b) {
            if (a && (a === 0..constructor || a === (!1).constructor || a === ''.constructor || a === {}.constructor || a === [].constructor || a === Function.constructor))
                throw ka('isecaf', b);
        }
        function lg(a, b) {
            return 'undefined' !== typeof a ? a : b;
        }
        function pd(a, b) {
            return 'undefined' === typeof a ? b : 'undefined' === typeof b ? a : a + b;
        }
        function R(a, b) {
            var d, c;
            switch (a.type) {
            case q.Program:
                d = !0;
                n(a.body, function (a) {
                    R(a.expression, b);
                    d = d && a.expression.constant;
                });
                a.constant = d;
                break;
            case q.Literal:
                a.constant = !0;
                a.toWatch = [];
                break;
            case q.UnaryExpression:
                R(a.argument, b);
                a.constant = a.argument.constant;
                a.toWatch = a.argument.toWatch;
                break;
            case q.BinaryExpression:
                R(a.left, b);
                R(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = a.left.toWatch.concat(a.right.toWatch);
                break;
            case q.LogicalExpression:
                R(a.left, b);
                R(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = a.constant ? [] : [a];
                break;
            case q.ConditionalExpression:
                R(a.test, b);
                R(a.alternate, b);
                R(a.consequent, b);
                a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;
                a.toWatch = a.constant ? [] : [a];
                break;
            case q.Identifier:
                a.constant = !1;
                a.toWatch = [a];
                break;
            case q.MemberExpression:
                R(a.object, b);
                a.computed && R(a.property, b);
                a.constant = a.object.constant && (!a.computed || a.property.constant);
                a.toWatch = [a];
                break;
            case q.CallExpression:
                d = a.filter ? !b(a.callee.name).$stateful : !1;
                c = [];
                n(a.arguments, function (a) {
                    R(a, b);
                    d = d && a.constant;
                    a.constant || c.push.apply(c, a.toWatch);
                });
                a.constant = d;
                a.toWatch = a.filter && !b(a.callee.name).$stateful ? c : [a];
                break;
            case q.AssignmentExpression:
                R(a.left, b);
                R(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = [a];
                break;
            case q.ArrayExpression:
                d = !0;
                c = [];
                n(a.elements, function (a) {
                    R(a, b);
                    d = d && a.constant;
                    a.constant || c.push.apply(c, a.toWatch);
                });
                a.constant = d;
                a.toWatch = c;
                break;
            case q.ObjectExpression:
                d = !0;
                c = [];
                n(a.properties, function (a) {
                    R(a.value, b);
                    d = d && a.value.constant;
                    a.value.constant || c.push.apply(c, a.value.toWatch);
                });
                a.constant = d;
                a.toWatch = c;
                break;
            case q.ThisExpression:
                a.constant = !1;
                a.toWatch = [];
                break;
            case q.LocalsExpression:
                a.constant = !1, a.toWatch = [];
            }
        }
        function qd(a) {
            if (1 == a.length) {
                a = a[0].expression;
                var b = a.toWatch;
                return 1 !== b.length ? b : b[0] !== a ? b : v;
            }
        }
        function rd(a) {
            return a.type === q.Identifier || a.type === q.MemberExpression;
        }
        function sd(a) {
            if (1 === a.body.length && rd(a.body[0].expression))
                return {
                    type: q.AssignmentExpression,
                    left: a.body[0].expression,
                    right: { type: q.NGValueParameter },
                    operator: '='
                };
        }
        function td(a) {
            return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === q.Literal || a.body[0].expression.type === q.ArrayExpression || a.body[0].expression.type === q.ObjectExpression);
        }
        function ud(a, b) {
            this.astBuilder = a;
            this.$filter = b;
        }
        function vd(a, b) {
            this.astBuilder = a;
            this.$filter = b;
        }
        function Jb(a) {
            return 'constructor' == a;
        }
        function hc(a) {
            return D(a.valueOf) ? a.valueOf() : mg.call(a);
        }
        function tf() {
            var a = Z(), b = Z();
            this.$get = [
                '$filter',
                function (d) {
                    function c(c, f, r) {
                        var u, n, z;
                        r = r || K;
                        switch (typeof c) {
                        case 'string':
                            z = c = c.trim();
                            var A = r ? b : a;
                            u = A[z];
                            if (!u) {
                                ':' === c.charAt(0) && ':' === c.charAt(1) && (n = !0, c = c.substring(2));
                                u = r ? I : s;
                                var Q = new ic(u);
                                u = new jc(Q, d, u).parse(c);
                                u.constant ? u.$$watchDelegate = l : n ? u.$$watchDelegate = u.literal ? k : h : u.inputs && (u.$$watchDelegate = g);
                                r && (u = e(u));
                                A[z] = u;
                            }
                            return m(u, f);
                        case 'function':
                            return m(c, f);
                        default:
                            return m(B, f);
                        }
                    }
                    function e(a) {
                        function b(c, d, e, f) {
                            var g = K;
                            K = !0;
                            try {
                                return a(c, d, e, f);
                            } finally {
                                K = g;
                            }
                        }
                        if (!a)
                            return a;
                        b.$$watchDelegate = a.$$watchDelegate;
                        b.assign = e(a.assign);
                        b.constant = a.constant;
                        b.literal = a.literal;
                        for (var c = 0; a.inputs && c < a.inputs.length; ++c)
                            a.inputs[c] = e(a.inputs[c]);
                        b.inputs = a.inputs;
                        return b;
                    }
                    function f(a, b) {
                        return null == a || null == b ? a === b : 'object' === typeof a && (a = hc(a), 'object' === typeof a) ? !1 : a === b || a !== a && b !== b;
                    }
                    function g(a, b, c, d, e) {
                        var g = d.inputs, h;
                        if (1 === g.length) {
                            var k = f, g = g[0];
                            return a.$watch(function (a) {
                                var b = g(a);
                                f(b, k) || (h = d(a, v, v, [b]), k = b && hc(b));
                                return h;
                            }, b, c, e);
                        }
                        for (var l = [], m = [], r = 0, s = g.length; r < s; r++)
                            l[r] = f, m[r] = null;
                        return a.$watch(function (a) {
                            for (var b = !1, c = 0, e = g.length; c < e; c++) {
                                var k = g[c](a);
                                if (b || (b = !f(k, l[c])))
                                    m[c] = k, l[c] = k && hc(k);
                            }
                            b && (h = d(a, v, v, m));
                            return h;
                        }, b, c, e);
                    }
                    function h(a, b, c, d) {
                        var e, f;
                        return e = a.$watch(function (a) {
                            return d(a);
                        }, function (a, c, d) {
                            f = a;
                            D(b) && b.apply(this, arguments);
                            y(a) && d.$$postDigest(function () {
                                y(f) && e();
                            });
                        }, c);
                    }
                    function k(a, b, c, d) {
                        function e(a) {
                            var b = !0;
                            n(a, function (a) {
                                y(a) || (b = !1);
                            });
                            return b;
                        }
                        var f, g;
                        return f = a.$watch(function (a) {
                            return d(a);
                        }, function (a, c, d) {
                            g = a;
                            D(b) && b.call(this, a, c, d);
                            e(a) && d.$$postDigest(function () {
                                e(g) && f();
                            });
                        }, c);
                    }
                    function l(a, b, c, d) {
                        var e;
                        return e = a.$watch(function (a) {
                            e();
                            return d(a);
                        }, b, c);
                    }
                    function m(a, b) {
                        if (!b)
                            return a;
                        var c = a.$$watchDelegate, d = !1, c = c !== k && c !== h ? function (c, e, f, g) {
                                f = d && g ? g[0] : a(c, e, f, g);
                                return b(f, c, e);
                            } : function (c, d, e, f) {
                                e = a(c, d, e, f);
                                c = b(e, c, d);
                                return y(e) ? c : e;
                            };
                        a.$$watchDelegate && a.$$watchDelegate !== g ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = g, d = !a.inputs, c.inputs = a.inputs ? a.inputs : [a]);
                        return c;
                    }
                    var r = Ea().noUnsafeEval, s = {
                            csp: r,
                            expensiveChecks: !1
                        }, I = {
                            csp: r,
                            expensiveChecks: !0
                        }, K = !1;
                    c.$$runningExpensiveChecks = function () {
                        return K;
                    };
                    return c;
                }
            ];
        }
        function vf() {
            this.$get = [
                '$rootScope',
                '$exceptionHandler',
                function (a, b) {
                    return wd(function (b) {
                        a.$evalAsync(b);
                    }, b);
                }
            ];
        }
        function wf() {
            this.$get = [
                '$browser',
                '$exceptionHandler',
                function (a, b) {
                    return wd(function (b) {
                        a.defer(b);
                    }, b);
                }
            ];
        }
        function wd(a, b) {
            function d() {
                this.$$state = { status: 0 };
            }
            function c(a, b) {
                return function (c) {
                    b.call(a, c);
                };
            }
            function e(c) {
                !c.processScheduled && c.pending && (c.processScheduled = !0, a(function () {
                    var a, d, e;
                    e = c.pending;
                    c.processScheduled = !1;
                    c.pending = v;
                    for (var f = 0, g = e.length; f < g; ++f) {
                        d = e[f][0];
                        a = e[f][c.status];
                        try {
                            D(a) ? d.resolve(a(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
                        } catch (h) {
                            d.reject(h), b(h);
                        }
                    }
                }));
            }
            function f() {
                this.promise = new d();
            }
            var g = H('$q', TypeError);
            T(d.prototype, {
                then: function (a, b, c) {
                    if (x(a) && x(b) && x(c))
                        return this;
                    var d = new f();
                    this.$$state.pending = this.$$state.pending || [];
                    this.$$state.pending.push([
                        d,
                        a,
                        b,
                        c
                    ]);
                    0 < this.$$state.status && e(this.$$state);
                    return d.promise;
                },
                'catch': function (a) {
                    return this.then(null, a);
                },
                'finally': function (a, b) {
                    return this.then(function (b) {
                        return k(b, !0, a);
                    }, function (b) {
                        return k(b, !1, a);
                    }, b);
                }
            });
            T(f.prototype, {
                resolve: function (a) {
                    this.promise.$$state.status || (a === this.promise ? this.$$reject(g('qcycle', a)) : this.$$resolve(a));
                },
                $$resolve: function (a) {
                    function d(a) {
                        k || (k = !0, h.$$resolve(a));
                    }
                    function f(a) {
                        k || (k = !0, h.$$reject(a));
                    }
                    var g, h = this, k = !1;
                    try {
                        if (E(a) || D(a))
                            g = a && a.then;
                        D(g) ? (this.promise.$$state.status = -1, g.call(a, d, f, c(this, this.notify))) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, e(this.promise.$$state));
                    } catch (l) {
                        f(l), b(l);
                    }
                },
                reject: function (a) {
                    this.promise.$$state.status || this.$$reject(a);
                },
                $$reject: function (a) {
                    this.promise.$$state.value = a;
                    this.promise.$$state.status = 2;
                    e(this.promise.$$state);
                },
                notify: function (c) {
                    var d = this.promise.$$state.pending;
                    0 >= this.promise.$$state.status && d && d.length && a(function () {
                        for (var a, e, f = 0, g = d.length; f < g; f++) {
                            e = d[f][0];
                            a = d[f][3];
                            try {
                                e.notify(D(a) ? a(c) : c);
                            } catch (h) {
                                b(h);
                            }
                        }
                    });
                }
            });
            var h = function (a, b) {
                    var c = new f();
                    b ? c.resolve(a) : c.reject(a);
                    return c.promise;
                }, k = function (a, b, c) {
                    var d = null;
                    try {
                        D(c) && (d = c());
                    } catch (e) {
                        return h(e, !1);
                    }
                    return d && D(d.then) ? d.then(function () {
                        return h(a, b);
                    }, function (a) {
                        return h(a, !1);
                    }) : h(a, b);
                }, l = function (a, b, c, d) {
                    var e = new f();
                    e.resolve(a);
                    return e.promise.then(b, c, d);
                }, m = function (a) {
                    if (!D(a))
                        throw g('norslvr', a);
                    var b = new f();
                    a(function (a) {
                        b.resolve(a);
                    }, function (a) {
                        b.reject(a);
                    });
                    return b.promise;
                };
            m.prototype = d.prototype;
            m.defer = function () {
                var a = new f();
                a.resolve = c(a, a.resolve);
                a.reject = c(a, a.reject);
                a.notify = c(a, a.notify);
                return a;
            };
            m.reject = function (a) {
                var b = new f();
                b.reject(a);
                return b.promise;
            };
            m.when = l;
            m.resolve = l;
            m.all = function (a) {
                var b = new f(), c = 0, d = L(a) ? [] : {};
                n(a, function (a, e) {
                    c++;
                    l(a).then(function (a) {
                        d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
                    }, function (a) {
                        d.hasOwnProperty(e) || b.reject(a);
                    });
                });
                0 === c && b.resolve(d);
                return b.promise;
            };
            return m;
        }
        function Ff() {
            this.$get = [
                '$window',
                '$timeout',
                function (a, b) {
                    var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame, c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame, e = !!d, f = e ? function (a) {
                            var b = d(a);
                            return function () {
                                c(b);
                            };
                        } : function (a) {
                            var c = b(a, 16.66, !1);
                            return function () {
                                b.cancel(c);
                            };
                        };
                    f.supported = e;
                    return f;
                }
            ];
        }
        function uf() {
            function a(a) {
                function b() {
                    this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                    this.$$listeners = {};
                    this.$$listenerCount = {};
                    this.$$watchersCount = 0;
                    this.$id = ++pb;
                    this.$$ChildScope = null;
                }
                b.prototype = a;
                return b;
            }
            var b = 10, d = H('$rootScope'), c = null, e = null;
            this.digestTtl = function (a) {
                arguments.length && (b = a);
                return b;
            };
            this.$get = [
                '$exceptionHandler',
                '$parse',
                '$browser',
                function (f, g, h) {
                    function k(a) {
                        a.currentScope.$$destroyed = !0;
                    }
                    function l(a) {
                        9 === xa && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));
                        a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null;
                    }
                    function m() {
                        this.$id = ++pb;
                        this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                        this.$root = this;
                        this.$$destroyed = !1;
                        this.$$listeners = {};
                        this.$$listenerCount = {};
                        this.$$watchersCount = 0;
                        this.$$isolateBindings = null;
                    }
                    function r(a) {
                        if (w.$$phase)
                            throw d('inprog', w.$$phase);
                        w.$$phase = a;
                    }
                    function s(a, b) {
                        do
                            a.$$watchersCount += b;
                        while (a = a.$parent);
                    }
                    function I(a, b, c) {
                        do
                            a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
                        while (a = a.$parent);
                    }
                    function q() {
                    }
                    function t() {
                        for (; z.length;)
                            try {
                                z.shift()();
                            } catch (a) {
                                f(a);
                            }
                        e = null;
                    }
                    function p() {
                        null === e && (e = h.defer(function () {
                            w.$apply(t);
                        }));
                    }
                    m.prototype = {
                        constructor: m,
                        $new: function (b, c) {
                            var d;
                            c = c || this;
                            b ? (d = new m(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope());
                            d.$parent = c;
                            d.$$prevSibling = c.$$childTail;
                            c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
                            (b || c != this) && d.$on('$destroy', k);
                            return d;
                        },
                        $watch: function (a, b, d, e) {
                            var f = g(a);
                            if (f.$$watchDelegate)
                                return f.$$watchDelegate(this, b, d, f, a);
                            var h = this, k = h.$$watchers, l = {
                                    fn: b,
                                    last: q,
                                    get: f,
                                    exp: e || a,
                                    eq: !!d
                                };
                            c = null;
                            D(b) || (l.fn = B);
                            k || (k = h.$$watchers = []);
                            k.unshift(l);
                            s(this, 1);
                            return function () {
                                0 <= cb(k, l) && s(h, -1);
                                c = null;
                            };
                        },
                        $watchGroup: function (a, b) {
                            function c() {
                                h = !1;
                                k ? (k = !1, b(e, e, g)) : b(e, d, g);
                            }
                            var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, k = !0;
                            if (!a.length) {
                                var l = !0;
                                g.$evalAsync(function () {
                                    l && b(e, e, g);
                                });
                                return function () {
                                    l = !1;
                                };
                            }
                            if (1 === a.length)
                                return this.$watch(a[0], function (a, c, f) {
                                    e[0] = a;
                                    d[0] = c;
                                    b(e, a === c ? e : d, f);
                                });
                            n(a, function (a, b) {
                                var k = g.$watch(a, function (a, f) {
                                    e[b] = a;
                                    d[b] = f;
                                    h || (h = !0, g.$evalAsync(c));
                                });
                                f.push(k);
                            });
                            return function () {
                                for (; f.length;)
                                    f.shift()();
                            };
                        },
                        $watchCollection: function (a, b) {
                            function c(a) {
                                e = a;
                                var b, d, g, h;
                                if (!x(e)) {
                                    if (E(e))
                                        if (Ca(e))
                                            for (f !== r && (f = r, u = f.length = 0, l++), a = e.length, u !== a && (l++, f.length = u = a), b = 0; b < a; b++)
                                                h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);
                                        else {
                                            f !== s && (f = s = {}, u = 0, l++);
                                            a = 0;
                                            for (b in e)
                                                sa.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (u++, f[b] = g, l++));
                                            if (u > a)
                                                for (b in l++, f)
                                                    sa.call(e, b) || (u--, delete f[b]);
                                        }
                                    else
                                        f !== e && (f = e, l++);
                                    return l;
                                }
                            }
                            c.$stateful = !0;
                            var d = this, e, f, h, k = 1 < b.length, l = 0, m = g(a, c), r = [], s = {}, p = !0, u = 0;
                            return this.$watch(m, function () {
                                p ? (p = !1, b(e, e, d)) : b(e, h, d);
                                if (k)
                                    if (E(e))
                                        if (Ca(e)) {
                                            h = Array(e.length);
                                            for (var a = 0; a < e.length; a++)
                                                h[a] = e[a];
                                        } else
                                            for (a in h = {}, e)
                                                sa.call(e, a) && (h[a] = e[a]);
                                    else
                                        h = e;
                            });
                        },
                        $digest: function () {
                            var a, g, k, l, m, s, p, n, I = b, z, y = [], x, C;
                            r('$digest');
                            h.$$checkUrlChange();
                            this === w && null !== e && (h.defer.cancel(e), t());
                            c = null;
                            do {
                                n = !1;
                                for (z = this; u.length;) {
                                    try {
                                        C = u.shift(), C.scope.$eval(C.expression, C.locals);
                                    } catch (B) {
                                        f(B);
                                    }
                                    c = null;
                                }
                                a:
                                    do {
                                        if (s = z.$$watchers)
                                            for (p = s.length; p--;)
                                                try {
                                                    if (a = s[p])
                                                        if (m = a.get, (g = m(z)) !== (k = a.last) && !(a.eq ? oa(g, k) : 'number' === typeof g && 'number' === typeof k && isNaN(g) && isNaN(k)))
                                                            n = !0, c = a, a.last = a.eq ? Oa(g, null) : g, l = a.fn, l(g, k === q ? g : k, z), 5 > I && (x = 4 - I, y[x] || (y[x] = []), y[x].push({
                                                                msg: D(a.exp) ? 'fn: ' + (a.exp.name || a.exp.toString()) : a.exp,
                                                                newVal: g,
                                                                oldVal: k
                                                            }));
                                                        else if (a === c) {
                                                            n = !1;
                                                            break a;
                                                        }
                                                } catch (E) {
                                                    f(E);
                                                }
                                        if (!(s = z.$$watchersCount && z.$$childHead || z !== this && z.$$nextSibling))
                                            for (; z !== this && !(s = z.$$nextSibling);)
                                                z = z.$parent;
                                    } while (z = s);
                                if ((n || u.length) && !I--)
                                    throw w.$$phase = null, d('infdig', b, y);
                            } while (n || u.length);
                            for (w.$$phase = null; v.length;)
                                try {
                                    v.shift()();
                                } catch (H) {
                                    f(H);
                                }
                        },
                        $destroy: function () {
                            if (!this.$$destroyed) {
                                var a = this.$parent;
                                this.$broadcast('$destroy');
                                this.$$destroyed = !0;
                                this === w && h.$$applicationDestroyed();
                                s(this, -this.$$watchersCount);
                                for (var b in this.$$listenerCount)
                                    I(this, this.$$listenerCount[b], b);
                                a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
                                a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                                this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                                this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                                this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = B;
                                this.$on = this.$watch = this.$watchGroup = function () {
                                    return B;
                                };
                                this.$$listeners = {};
                                this.$$nextSibling = null;
                                l(this);
                            }
                        },
                        $eval: function (a, b) {
                            return g(a)(this, b);
                        },
                        $evalAsync: function (a, b) {
                            w.$$phase || u.length || h.defer(function () {
                                u.length && w.$digest();
                            });
                            u.push({
                                scope: this,
                                expression: g(a),
                                locals: b
                            });
                        },
                        $$postDigest: function (a) {
                            v.push(a);
                        },
                        $apply: function (a) {
                            try {
                                r('$apply');
                                try {
                                    return this.$eval(a);
                                } finally {
                                    w.$$phase = null;
                                }
                            } catch (b) {
                                f(b);
                            } finally {
                                try {
                                    w.$digest();
                                } catch (c) {
                                    throw f(c), c;
                                }
                            }
                        },
                        $applyAsync: function (a) {
                            function b() {
                                c.$eval(a);
                            }
                            var c = this;
                            a && z.push(b);
                            a = g(a);
                            p();
                        },
                        $on: function (a, b) {
                            var c = this.$$listeners[a];
                            c || (this.$$listeners[a] = c = []);
                            c.push(b);
                            var d = this;
                            do
                                d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
                            while (d = d.$parent);
                            var e = this;
                            return function () {
                                var d = c.indexOf(b);
                                -1 !== d && (c[d] = null, I(e, 1, a));
                            };
                        },
                        $emit: function (a, b) {
                            var c = [], d, e = this, g = !1, h = {
                                    name: a,
                                    targetScope: e,
                                    stopPropagation: function () {
                                        g = !0;
                                    },
                                    preventDefault: function () {
                                        h.defaultPrevented = !0;
                                    },
                                    defaultPrevented: !1
                                }, k = db([h], arguments, 1), l, m;
                            do {
                                d = e.$$listeners[a] || c;
                                h.currentScope = e;
                                l = 0;
                                for (m = d.length; l < m; l++)
                                    if (d[l])
                                        try {
                                            d[l].apply(null, k);
                                        } catch (r) {
                                            f(r);
                                        }
                                    else
                                        d.splice(l, 1), l--, m--;
                                if (g)
                                    return h.currentScope = null, h;
                                e = e.$parent;
                            } while (e);
                            h.currentScope = null;
                            return h;
                        },
                        $broadcast: function (a, b) {
                            var c = this, d = this, e = {
                                    name: a,
                                    targetScope: this,
                                    preventDefault: function () {
                                        e.defaultPrevented = !0;
                                    },
                                    defaultPrevented: !1
                                };
                            if (!this.$$listenerCount[a])
                                return e;
                            for (var g = db([e], arguments, 1), h, k; c = d;) {
                                e.currentScope = c;
                                d = c.$$listeners[a] || [];
                                h = 0;
                                for (k = d.length; h < k; h++)
                                    if (d[h])
                                        try {
                                            d[h].apply(null, g);
                                        } catch (l) {
                                            f(l);
                                        }
                                    else
                                        d.splice(h, 1), h--, k--;
                                if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
                                    for (; c !== this && !(d = c.$$nextSibling);)
                                        c = c.$parent;
                            }
                            e.currentScope = null;
                            return e;
                        }
                    };
                    var w = new m(), u = w.$$asyncQueue = [], v = w.$$postDigestQueue = [], z = w.$$applyAsyncQueue = [];
                    return w;
                }
            ];
        }
        function ne() {
            var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
            this.aHrefSanitizationWhitelist = function (b) {
                return y(b) ? (a = b, this) : a;
            };
            this.imgSrcSanitizationWhitelist = function (a) {
                return y(a) ? (b = a, this) : b;
            };
            this.$get = function () {
                return function (d, c) {
                    var e = c ? b : a, f;
                    f = za(d).href;
                    return '' === f || f.match(e) ? d : 'unsafe:' + f;
                };
            };
        }
        function ng(a) {
            if ('self' === a)
                return a;
            if (F(a)) {
                if (-1 < a.indexOf('***'))
                    throw Ba('iwcard', a);
                a = xd(a).replace('\\*\\*', '.*').replace('\\*', '[^:/.?&;]*');
                return new RegExp('^' + a + '$');
            }
            if ($a(a))
                return new RegExp('^' + a.source + '$');
            throw Ba('imatcher');
        }
        function yd(a) {
            var b = [];
            y(a) && n(a, function (a) {
                b.push(ng(a));
            });
            return b;
        }
        function yf() {
            this.SCE_CONTEXTS = qa;
            var a = ['self'], b = [];
            this.resourceUrlWhitelist = function (b) {
                arguments.length && (a = yd(b));
                return a;
            };
            this.resourceUrlBlacklist = function (a) {
                arguments.length && (b = yd(a));
                return b;
            };
            this.$get = [
                '$injector',
                function (d) {
                    function c(a, b) {
                        return 'self' === a ? jd(b) : !!a.exec(b.href);
                    }
                    function e(a) {
                        var b = function (a) {
                            this.$$unwrapTrustedValue = function () {
                                return a;
                            };
                        };
                        a && (b.prototype = new a());
                        b.prototype.valueOf = function () {
                            return this.$$unwrapTrustedValue();
                        };
                        b.prototype.toString = function () {
                            return this.$$unwrapTrustedValue().toString();
                        };
                        return b;
                    }
                    var f = function (a) {
                        throw Ba('unsafe');
                    };
                    d.has('$sanitize') && (f = d.get('$sanitize'));
                    var g = e(), h = {};
                    h[qa.HTML] = e(g);
                    h[qa.CSS] = e(g);
                    h[qa.URL] = e(g);
                    h[qa.JS] = e(g);
                    h[qa.RESOURCE_URL] = e(h[qa.URL]);
                    return {
                        trustAs: function (a, b) {
                            var c = h.hasOwnProperty(a) ? h[a] : null;
                            if (!c)
                                throw Ba('icontext', a, b);
                            if (null === b || x(b) || '' === b)
                                return b;
                            if ('string' !== typeof b)
                                throw Ba('itype', a);
                            return new c(b);
                        },
                        getTrusted: function (d, e) {
                            if (null === e || x(e) || '' === e)
                                return e;
                            var g = h.hasOwnProperty(d) ? h[d] : null;
                            if (g && e instanceof g)
                                return e.$$unwrapTrustedValue();
                            if (d === qa.RESOURCE_URL) {
                                var g = za(e.toString()), r, s, n = !1;
                                r = 0;
                                for (s = a.length; r < s; r++)
                                    if (c(a[r], g)) {
                                        n = !0;
                                        break;
                                    }
                                if (n)
                                    for (r = 0, s = b.length; r < s; r++)
                                        if (c(b[r], g)) {
                                            n = !1;
                                            break;
                                        }
                                if (n)
                                    return e;
                                throw Ba('insecurl', e.toString());
                            }
                            if (d === qa.HTML)
                                return f(e);
                            throw Ba('unsafe');
                        },
                        valueOf: function (a) {
                            return a instanceof g ? a.$$unwrapTrustedValue() : a;
                        }
                    };
                }
            ];
        }
        function xf() {
            var a = !0;
            this.enabled = function (b) {
                arguments.length && (a = !!b);
                return a;
            };
            this.$get = [
                '$parse',
                '$sceDelegate',
                function (b, d) {
                    if (a && 8 > xa)
                        throw Ba('iequirks');
                    var c = na(qa);
                    c.isEnabled = function () {
                        return a;
                    };
                    c.trustAs = d.trustAs;
                    c.getTrusted = d.getTrusted;
                    c.valueOf = d.valueOf;
                    a || (c.trustAs = c.getTrusted = function (a, b) {
                        return b;
                    }, c.valueOf = ab);
                    c.parseAs = function (a, d) {
                        var e = b(d);
                        return e.literal && e.constant ? e : b(d, function (b) {
                            return c.getTrusted(a, b);
                        });
                    };
                    var e = c.parseAs, f = c.getTrusted, g = c.trustAs;
                    n(qa, function (a, b) {
                        var d = G(b);
                        c[gb('parse_as_' + d)] = function (b) {
                            return e(a, b);
                        };
                        c[gb('get_trusted_' + d)] = function (b) {
                            return f(a, b);
                        };
                        c[gb('trust_as_' + d)] = function (b) {
                            return g(a, b);
                        };
                    });
                    return c;
                }
            ];
        }
        function zf() {
            this.$get = [
                '$window',
                '$document',
                function (a, b) {
                    var d = {}, c = ca((/android (\d+)/.exec(G((a.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((a.navigator || {}).userAgent), f = b[0] || {}, g, h = /^(Moz|webkit|ms)(?=[A-Z])/, k = f.body && f.body.style, l = !1, m = !1;
                    if (k) {
                        for (var r in k)
                            if (l = h.exec(r)) {
                                g = l[0];
                                g = g.substr(0, 1).toUpperCase() + g.substr(1);
                                break;
                            }
                        g || (g = 'WebkitOpacity' in k && 'webkit');
                        l = !!('transition' in k || g + 'Transition' in k);
                        m = !!('animation' in k || g + 'Animation' in k);
                        !c || l && m || (l = F(k.webkitTransition), m = F(k.webkitAnimation));
                    }
                    return {
                        history: !(!a.history || !a.history.pushState || 4 > c || e),
                        hasEvent: function (a) {
                            if ('input' === a && 11 >= xa)
                                return !1;
                            if (x(d[a])) {
                                var b = f.createElement('div');
                                d[a] = 'on' + a in b;
                            }
                            return d[a];
                        },
                        csp: Ea(),
                        vendorPrefix: g,
                        transitions: l,
                        animations: m,
                        android: c
                    };
                }
            ];
        }
        function Bf() {
            var a;
            this.httpOptions = function (b) {
                return b ? (a = b, this) : a;
            };
            this.$get = [
                '$templateCache',
                '$http',
                '$q',
                '$sce',
                function (b, d, c, e) {
                    function f(g, h) {
                        f.totalPendingRequests++;
                        F(g) && b.get(g) || (g = e.getTrustedResourceUrl(g));
                        var k = d.defaults && d.defaults.transformResponse;
                        L(k) ? k = k.filter(function (a) {
                            return a !== cc;
                        }) : k === cc && (k = null);
                        return d.get(g, T({
                            cache: b,
                            transformResponse: k
                        }, a))['finally'](function () {
                            f.totalPendingRequests--;
                        }).then(function (a) {
                            b.put(g, a.data);
                            return a.data;
                        }, function (a) {
                            if (!h)
                                throw ja('tpload', g, a.status, a.statusText);
                            return c.reject(a);
                        });
                    }
                    f.totalPendingRequests = 0;
                    return f;
                }
            ];
        }
        function Cf() {
            this.$get = [
                '$rootScope',
                '$browser',
                '$location',
                function (a, b, d) {
                    return {
                        findBindings: function (a, b, d) {
                            a = a.getElementsByClassName('ng-binding');
                            var g = [];
                            n(a, function (a) {
                                var c = ia.element(a).data('$binding');
                                c && n(c, function (c) {
                                    d ? new RegExp('(^|\\s)' + xd(b) + '(\\s|\\||$)').test(c) && g.push(a) : -1 != c.indexOf(b) && g.push(a);
                                });
                            });
                            return g;
                        },
                        findModels: function (a, b, d) {
                            for (var g = [
                                        'ng-',
                                        'data-ng-',
                                        'ng\\:'
                                    ], h = 0; h < g.length; ++h) {
                                var k = a.querySelectorAll('[' + g[h] + 'model' + (d ? '=' : '*=') + '"' + b + '"]');
                                if (k.length)
                                    return k;
                            }
                        },
                        getLocation: function () {
                            return d.url();
                        },
                        setLocation: function (b) {
                            b !== d.url() && (d.url(b), a.$digest());
                        },
                        whenStable: function (a) {
                            b.notifyWhenNoOutstandingRequests(a);
                        }
                    };
                }
            ];
        }
        function Df() {
            this.$get = [
                '$rootScope',
                '$browser',
                '$q',
                '$$q',
                '$exceptionHandler',
                function (a, b, d, c, e) {
                    function f(f, k, l) {
                        D(f) || (l = k, k = f, f = B);
                        var m = wa.call(arguments, 3), r = y(l) && !l, s = (r ? c : d).defer(), n = s.promise, q;
                        q = b.defer(function () {
                            try {
                                s.resolve(f.apply(null, m));
                            } catch (b) {
                                s.reject(b), e(b);
                            } finally {
                                delete g[n.$$timeoutId];
                            }
                            r || a.$apply();
                        }, k);
                        n.$$timeoutId = q;
                        g[q] = s;
                        return n;
                    }
                    var g = {};
                    f.cancel = function (a) {
                        return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject('canceled'), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1;
                    };
                    return f;
                }
            ];
        }
        function za(a) {
            xa && (Y.setAttribute('href', a), a = Y.href);
            Y.setAttribute('href', a);
            return {
                href: Y.href,
                protocol: Y.protocol ? Y.protocol.replace(/:$/, '') : '',
                host: Y.host,
                search: Y.search ? Y.search.replace(/^\?/, '') : '',
                hash: Y.hash ? Y.hash.replace(/^#/, '') : '',
                hostname: Y.hostname,
                port: Y.port,
                pathname: '/' === Y.pathname.charAt(0) ? Y.pathname : '/' + Y.pathname
            };
        }
        function jd(a) {
            a = F(a) ? za(a) : a;
            return a.protocol === zd.protocol && a.host === zd.host;
        }
        function Ef() {
            this.$get = ba(O);
        }
        function Ad(a) {
            function b(a) {
                try {
                    return decodeURIComponent(a);
                } catch (b) {
                    return a;
                }
            }
            var d = a[0] || {}, c = {}, e = '';
            return function () {
                var a, g, h, k, l;
                a = d.cookie || '';
                if (a !== e)
                    for (e = a, a = e.split('; '), c = {}, h = 0; h < a.length; h++)
                        g = a[h], k = g.indexOf('='), 0 < k && (l = b(g.substring(0, k)), x(c[l]) && (c[l] = b(g.substring(k + 1))));
                return c;
            };
        }
        function If() {
            this.$get = Ad;
        }
        function Lc(a) {
            function b(d, c) {
                if (E(d)) {
                    var e = {};
                    n(d, function (a, c) {
                        e[c] = b(c, a);
                    });
                    return e;
                }
                return a.factory(d + 'Filter', c);
            }
            this.register = b;
            this.$get = [
                '$injector',
                function (a) {
                    return function (b) {
                        return a.get(b + 'Filter');
                    };
                }
            ];
            b('currency', Bd);
            b('date', Cd);
            b('filter', og);
            b('json', pg);
            b('limitTo', qg);
            b('lowercase', rg);
            b('number', Dd);
            b('orderBy', Ed);
            b('uppercase', sg);
        }
        function og() {
            return function (a, b, d) {
                if (!Ca(a)) {
                    if (null == a)
                        return a;
                    throw H('filter')('notarray', a);
                }
                var c;
                switch (kc(b)) {
                case 'function':
                    break;
                case 'boolean':
                case 'null':
                case 'number':
                case 'string':
                    c = !0;
                case 'object':
                    b = tg(b, d, c);
                    break;
                default:
                    return a;
                }
                return Array.prototype.filter.call(a, b);
            };
        }
        function tg(a, b, d) {
            var c = E(a) && '$' in a;
            !0 === b ? b = oa : D(b) || (b = function (a, b) {
                if (x(a))
                    return !1;
                if (null === a || null === b)
                    return a === b;
                if (E(b) || E(a) && !tc(a))
                    return !1;
                a = G('' + a);
                b = G('' + b);
                return -1 !== a.indexOf(b);
            });
            return function (e) {
                return c && !E(e) ? La(e, a.$, b, !1) : La(e, a, b, d);
            };
        }
        function La(a, b, d, c, e) {
            var f = kc(a), g = kc(b);
            if ('string' === g && '!' === b.charAt(0))
                return !La(a, b.substring(1), d, c);
            if (L(a))
                return a.some(function (a) {
                    return La(a, b, d, c);
                });
            switch (f) {
            case 'object':
                var h;
                if (c) {
                    for (h in a)
                        if ('$' !== h.charAt(0) && La(a[h], b, d, !0))
                            return !0;
                    return e ? !1 : La(a, b, d, !1);
                }
                if ('object' === g) {
                    for (h in b)
                        if (e = b[h], !D(e) && !x(e) && (f = '$' === h, !La(f ? a : a[h], e, d, f, f)))
                            return !1;
                    return !0;
                }
                return d(a, b);
            case 'function':
                return !1;
            default:
                return d(a, b);
            }
        }
        function kc(a) {
            return null === a ? 'null' : typeof a;
        }
        function Bd(a) {
            var b = a.NUMBER_FORMATS;
            return function (a, c, e) {
                x(c) && (c = b.CURRENCY_SYM);
                x(e) && (e = b.PATTERNS[1].maxFrac);
                return null == a ? a : Fd(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c);
            };
        }
        function Dd(a) {
            var b = a.NUMBER_FORMATS;
            return function (a, c) {
                return null == a ? a : Fd(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
            };
        }
        function ug(a) {
            var b = 0, d, c, e, f, g;
            -1 < (c = a.indexOf(Gd)) && (a = a.replace(Gd, ''));
            0 < (e = a.search(/e/i)) ? (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) : 0 > c && (c = a.length);
            for (e = 0; a.charAt(e) == lc; e++);
            if (e == (g = a.length))
                d = [0], c = 1;
            else {
                for (g--; a.charAt(g) == lc;)
                    g--;
                c -= e;
                d = [];
                for (f = 0; e <= g; e++, f++)
                    d[f] = +a.charAt(e);
            }
            c > Hd && (d = d.splice(0, Hd - 1), b = c - 1, c = 1);
            return {
                d: d,
                e: b,
                i: c
            };
        }
        function vg(a, b, d, c) {
            var e = a.d, f = e.length - a.i;
            b = x(b) ? Math.min(Math.max(d, f), c) : +b;
            d = b + a.i;
            c = e[d];
            if (0 < d)
                e.splice(d);
            else {
                a.i = 1;
                e.length = d = b + 1;
                for (var g = 0; g < d; g++)
                    e[g] = 0;
            }
            for (5 <= c && e[d - 1]++; f < b; f++)
                e.push(0);
            if (b = e.reduceRight(function (a, b, c, d) {
                    b += a;
                    d[c] = b % 10;
                    return Math.floor(b / 10);
                }, 0))
                e.unshift(b), a.i++;
        }
        function Fd(a, b, d, c, e) {
            if (!F(a) && !N(a) || isNaN(a))
                return '';
            var f = !isFinite(a), g = !1, h = Math.abs(a) + '', k = '';
            if (f)
                k = '\u221E';
            else {
                g = ug(h);
                vg(g, e, b.minFrac, b.maxFrac);
                k = g.d;
                h = g.i;
                e = g.e;
                f = [];
                for (g = k.reduce(function (a, b) {
                        return a && !b;
                    }, !0); 0 > h;)
                    k.unshift(0), h++;
                0 < h ? f = k.splice(h) : (f = k, k = [0]);
                h = [];
                for (k.length > b.lgSize && h.unshift(k.splice(-b.lgSize).join('')); k.length > b.gSize;)
                    h.unshift(k.splice(-b.gSize).join(''));
                k.length && h.unshift(k.join(''));
                k = h.join(d);
                f.length && (k += c + f.join(''));
                e && (k += 'e+' + e);
            }
            return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf;
        }
        function Kb(a, b, d) {
            var c = '';
            0 > a && (c = '-', a = -a);
            for (a = '' + a; a.length < b;)
                a = lc + a;
            d && (a = a.substr(a.length - b));
            return c + a;
        }
        function aa(a, b, d, c) {
            d = d || 0;
            return function (e) {
                e = e['get' + a]();
                if (0 < d || e > -d)
                    e += d;
                0 === e && -12 == d && (e = 12);
                return Kb(e, b, c);
            };
        }
        function Lb(a, b) {
            return function (d, c) {
                var e = d['get' + a](), f = ub(b ? 'SHORT' + a : a);
                return c[f][e];
            };
        }
        function Id(a) {
            var b = new Date(a, 0, 1).getDay();
            return new Date(a, 0, (4 >= b ? 5 : 12) - b);
        }
        function Jd(a) {
            return function (b) {
                var d = Id(b.getFullYear());
                b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;
                b = 1 + Math.round(b / 604800000);
                return Kb(b, a);
            };
        }
        function mc(a, b) {
            return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1];
        }
        function Cd(a) {
            function b(a) {
                var b;
                if (b = a.match(d)) {
                    a = new Date(0);
                    var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, k = b[8] ? a.setUTCHours : a.setHours;
                    b[9] && (f = ca(b[9] + b[10]), g = ca(b[9] + b[11]));
                    h.call(a, ca(b[1]), ca(b[2]) - 1, ca(b[3]));
                    f = ca(b[4] || 0) - f;
                    g = ca(b[5] || 0) - g;
                    h = ca(b[6] || 0);
                    b = Math.round(1000 * parseFloat('0.' + (b[7] || 0)));
                    k.call(a, f, g, h, b);
                }
                return a;
            }
            var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function (c, d, f) {
                var g = '', h = [], k, l;
                d = d || 'mediumDate';
                d = a.DATETIME_FORMATS[d] || d;
                F(c) && (c = wg.test(c) ? ca(c) : b(c));
                N(c) && (c = new Date(c));
                if (!V(c) || !isFinite(c.getTime()))
                    return c;
                for (; d;)
                    (l = xg.exec(d)) ? (h = db(h, l, 1), d = h.pop()) : (h.push(d), d = null);
                var m = c.getTimezoneOffset();
                f && (m = xc(f, m), c = Tb(c, f, !0));
                n(h, function (b) {
                    k = yg[b];
                    g += k ? k(c, a.DATETIME_FORMATS, m) : '\'\'' === b ? '\'' : b.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
                });
                return g;
            };
        }
        function pg() {
            return function (a, b) {
                x(b) && (b = 2);
                return eb(a, b);
            };
        }
        function qg() {
            return function (a, b, d) {
                b = Infinity === Math.abs(Number(b)) ? Number(b) : ca(b);
                if (isNaN(b))
                    return a;
                N(a) && (a = a.toString());
                if (!L(a) && !F(a))
                    return a;
                d = !d || isNaN(d) ? 0 : ca(d);
                d = 0 > d ? Math.max(0, a.length + d) : d;
                return 0 <= b ? a.slice(d, d + b) : 0 === d ? a.slice(b, a.length) : a.slice(Math.max(0, d + b), d);
            };
        }
        function Ed(a) {
            function b(b, d) {
                d = d ? -1 : 1;
                return b.map(function (b) {
                    var c = 1, h = ab;
                    if (D(b))
                        h = b;
                    else if (F(b)) {
                        if ('+' == b.charAt(0) || '-' == b.charAt(0))
                            c = '-' == b.charAt(0) ? -1 : 1, b = b.substring(1);
                        if ('' !== b && (h = a(b), h.constant))
                            var k = h(), h = function (a) {
                                    return a[k];
                                };
                    }
                    return {
                        get: h,
                        descending: c * d
                    };
                });
            }
            function d(a) {
                switch (typeof a) {
                case 'number':
                case 'boolean':
                case 'string':
                    return !0;
                default:
                    return !1;
                }
            }
            return function (a, e, f) {
                if (null == a)
                    return a;
                if (!Ca(a))
                    throw H('orderBy')('notarray', a);
                L(e) || (e = [e]);
                0 === e.length && (e = ['+']);
                var g = b(e, f);
                g.push({
                    get: function () {
                        return {};
                    },
                    descending: f ? -1 : 1
                });
                a = Array.prototype.map.call(a, function (a, b) {
                    return {
                        value: a,
                        predicateValues: g.map(function (c) {
                            var e = c.get(a);
                            c = typeof e;
                            if (null === e)
                                c = 'string', e = 'null';
                            else if ('string' === c)
                                e = e.toLowerCase();
                            else if ('object' === c)
                                a: {
                                    if ('function' === typeof e.valueOf && (e = e.valueOf(), d(e)))
                                        break a;
                                    if (tc(e) && (e = e.toString(), d(e)))
                                        break a;
                                    e = b;
                                }
                            return {
                                value: e,
                                type: c
                            };
                        })
                    };
                });
                a.sort(function (a, b) {
                    for (var c = 0, d = 0, e = g.length; d < e; ++d) {
                        var c = a.predicateValues[d], f = b.predicateValues[d], n = 0;
                        c.type === f.type ? c.value !== f.value && (n = c.value < f.value ? -1 : 1) : n = c.type < f.type ? -1 : 1;
                        if (c = n * g[d].descending)
                            break;
                    }
                    return c;
                });
                return a = a.map(function (a) {
                    return a.value;
                });
            };
        }
        function Ma(a) {
            D(a) && (a = { link: a });
            a.restrict = a.restrict || 'AC';
            return ba(a);
        }
        function Kd(a, b, d, c, e) {
            var f = this, g = [];
            f.$error = {};
            f.$$success = {};
            f.$pending = v;
            f.$name = e(b.name || b.ngForm || '')(d);
            f.$dirty = !1;
            f.$pristine = !0;
            f.$valid = !0;
            f.$invalid = !1;
            f.$submitted = !1;
            f.$$parentForm = Mb;
            f.$rollbackViewValue = function () {
                n(g, function (a) {
                    a.$rollbackViewValue();
                });
            };
            f.$commitViewValue = function () {
                n(g, function (a) {
                    a.$commitViewValue();
                });
            };
            f.$addControl = function (a) {
                Ta(a.$name, 'input');
                g.push(a);
                a.$name && (f[a.$name] = a);
                a.$$parentForm = f;
            };
            f.$$renameControl = function (a, b) {
                var c = a.$name;
                f[c] === a && delete f[c];
                f[b] = a;
                a.$name = b;
            };
            f.$removeControl = function (a) {
                a.$name && f[a.$name] === a && delete f[a.$name];
                n(f.$pending, function (b, c) {
                    f.$setValidity(c, null, a);
                });
                n(f.$error, function (b, c) {
                    f.$setValidity(c, null, a);
                });
                n(f.$$success, function (b, c) {
                    f.$setValidity(c, null, a);
                });
                cb(g, a);
                a.$$parentForm = Mb;
            };
            Ld({
                ctrl: this,
                $element: a,
                set: function (a, b, c) {
                    var d = a[b];
                    d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c];
                },
                unset: function (a, b, c) {
                    var d = a[b];
                    d && (cb(d, c), 0 === d.length && delete a[b]);
                },
                $animate: c
            });
            f.$setDirty = function () {
                c.removeClass(a, Ya);
                c.addClass(a, Nb);
                f.$dirty = !0;
                f.$pristine = !1;
                f.$$parentForm.$setDirty();
            };
            f.$setPristine = function () {
                c.setClass(a, Ya, Nb + ' ng-submitted');
                f.$dirty = !1;
                f.$pristine = !0;
                f.$submitted = !1;
                n(g, function (a) {
                    a.$setPristine();
                });
            };
            f.$setUntouched = function () {
                n(g, function (a) {
                    a.$setUntouched();
                });
            };
            f.$setSubmitted = function () {
                c.addClass(a, 'ng-submitted');
                f.$submitted = !0;
                f.$$parentForm.$setSubmitted();
            };
        }
        function nc(a) {
            a.$formatters.push(function (b) {
                return a.$isEmpty(b) ? b : b.toString();
            });
        }
        function lb(a, b, d, c, e, f) {
            var g = G(b[0].type);
            if (!e.android) {
                var h = !1;
                b.on('compositionstart', function (a) {
                    h = !0;
                });
                b.on('compositionend', function () {
                    h = !1;
                    k();
                });
            }
            var k = function (a) {
                l && (f.defer.cancel(l), l = null);
                if (!h) {
                    var e = b.val();
                    a = a && a.type;
                    'password' === g || d.ngTrim && 'false' === d.ngTrim || (e = X(e));
                    (c.$viewValue !== e || '' === e && c.$$hasNativeValidators) && c.$setViewValue(e, a);
                }
            };
            if (e.hasEvent('input'))
                b.on('input', k);
            else {
                var l, m = function (a, b, c) {
                        l || (l = f.defer(function () {
                            l = null;
                            b && b.value === c || k(a);
                        }));
                    };
                b.on('keydown', function (a) {
                    var b = a.keyCode;
                    91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
                });
                if (e.hasEvent('paste'))
                    b.on('paste cut', m);
            }
            b.on('change', k);
            c.$render = function () {
                var a = c.$isEmpty(c.$viewValue) ? '' : c.$viewValue;
                b.val() !== a && b.val(a);
            };
        }
        function Ob(a, b) {
            return function (d, c) {
                var e, f;
                if (V(d))
                    return d;
                if (F(d)) {
                    '"' == d.charAt(0) && '"' == d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));
                    if (zg.test(d))
                        return new Date(d);
                    a.lastIndex = 0;
                    if (e = a.exec(d))
                        return e.shift(), f = c ? {
                            yyyy: c.getFullYear(),
                            MM: c.getMonth() + 1,
                            dd: c.getDate(),
                            HH: c.getHours(),
                            mm: c.getMinutes(),
                            ss: c.getSeconds(),
                            sss: c.getMilliseconds() / 1000
                        } : {
                            yyyy: 1970,
                            MM: 1,
                            dd: 1,
                            HH: 0,
                            mm: 0,
                            ss: 0,
                            sss: 0
                        }, n(e, function (a, c) {
                            c < b.length && (f[b[c]] = +a);
                        }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1000 * f.sss || 0);
                }
                return NaN;
            };
        }
        function mb(a, b, d, c) {
            return function (e, f, g, h, k, l, m) {
                function r(a) {
                    return a && !(a.getTime && a.getTime() !== a.getTime());
                }
                function s(a) {
                    return y(a) && !V(a) ? d(a) || v : a;
                }
                Md(e, f, g, h);
                lb(e, f, g, h, k, l);
                var n = h && h.$options && h.$options.timezone, q;
                h.$$parserName = a;
                h.$parsers.push(function (a) {
                    return h.$isEmpty(a) ? null : b.test(a) ? (a = d(a, q), n && (a = Tb(a, n)), a) : v;
                });
                h.$formatters.push(function (a) {
                    if (a && !V(a))
                        throw nb('datefmt', a);
                    if (r(a))
                        return (q = a) && n && (q = Tb(q, n, !0)), m('date')(a, c, n);
                    q = null;
                    return '';
                });
                if (y(g.min) || g.ngMin) {
                    var t;
                    h.$validators.min = function (a) {
                        return !r(a) || x(t) || d(a) >= t;
                    };
                    g.$observe('min', function (a) {
                        t = s(a);
                        h.$validate();
                    });
                }
                if (y(g.max) || g.ngMax) {
                    var p;
                    h.$validators.max = function (a) {
                        return !r(a) || x(p) || d(a) <= p;
                    };
                    g.$observe('max', function (a) {
                        p = s(a);
                        h.$validate();
                    });
                }
            };
        }
        function Md(a, b, d, c) {
            (c.$$hasNativeValidators = E(b[0].validity)) && c.$parsers.push(function (a) {
                var c = b.prop('validity') || {};
                return c.badInput || c.typeMismatch ? v : a;
            });
        }
        function Nd(a, b, d, c, e) {
            if (y(c)) {
                a = a(c);
                if (!a.constant)
                    throw nb('constexpr', d, c);
                return a(b);
            }
            return e;
        }
        function oc(a, b) {
            a = 'ngClass' + a;
            return [
                '$animate',
                function (d) {
                    function c(a, b) {
                        var c = [], d = 0;
                        a:
                            for (; d < a.length; d++) {
                                for (var e = a[d], m = 0; m < b.length; m++)
                                    if (e == b[m])
                                        continue a;
                                c.push(e);
                            }
                        return c;
                    }
                    function e(a) {
                        var b = [];
                        return L(a) ? (n(a, function (a) {
                            b = b.concat(e(a));
                        }), b) : F(a) ? a.split(' ') : E(a) ? (n(a, function (a, c) {
                            a && (b = b.concat(c.split(' ')));
                        }), b) : a;
                    }
                    return {
                        restrict: 'AC',
                        link: function (f, g, h) {
                            function k(a, b) {
                                var c = g.data('$classCounts') || Z(), d = [];
                                n(a, function (a) {
                                    if (0 < b || c[a])
                                        c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
                                });
                                g.data('$classCounts', c);
                                return d.join(' ');
                            }
                            function l(a) {
                                if (!0 === b || f.$index % 2 === b) {
                                    var l = e(a || []);
                                    if (!m) {
                                        var n = k(l, 1);
                                        h.$addClass(n);
                                    } else if (!oa(a, m)) {
                                        var q = e(m), n = c(l, q), l = c(q, l), n = k(n, 1), l = k(l, -1);
                                        n && n.length && d.addClass(g, n);
                                        l && l.length && d.removeClass(g, l);
                                    }
                                }
                                m = na(a);
                            }
                            var m;
                            f.$watch(h[a], l, !0);
                            h.$observe('class', function (b) {
                                l(f.$eval(h[a]));
                            });
                            'ngClass' !== a && f.$watch('$index', function (c, d) {
                                var g = c & 1;
                                if (g !== (d & 1)) {
                                    var l = e(f.$eval(h[a]));
                                    g === b ? (g = k(l, 1), h.$addClass(g)) : (g = k(l, -1), h.$removeClass(g));
                                }
                            });
                        }
                    };
                }
            ];
        }
        function Ld(a) {
            function b(a, b) {
                b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1);
            }
            function d(a, c) {
                a = a ? '-' + Bc(a, '-') : '';
                b(ob + a, !0 === c);
                b(Od + a, !1 === c);
            }
            var c = a.ctrl, e = a.$element, f = {}, g = a.set, h = a.unset, k = a.$animate;
            f[Od] = !(f[ob] = e.hasClass(ob));
            c.$setValidity = function (a, e, f) {
                x(e) ? (c.$pending || (c.$pending = {}), g(c.$pending, a, f)) : (c.$pending && h(c.$pending, a, f), Pd(c.$pending) && (c.$pending = v));
                Na(e) ? e ? (h(c.$error, a, f), g(c.$$success, a, f)) : (g(c.$error, a, f), h(c.$$success, a, f)) : (h(c.$error, a, f), h(c.$$success, a, f));
                c.$pending ? (b(Qd, !0), c.$valid = c.$invalid = v, d('', null)) : (b(Qd, !1), c.$valid = Pd(c.$error), c.$invalid = !c.$valid, d('', c.$valid));
                e = c.$pending && c.$pending[a] ? v : c.$error[a] ? !1 : c.$$success[a] ? !0 : null;
                d(a, e);
                c.$$parentForm.$setValidity(a, e, c);
            };
        }
        function Pd(a) {
            if (a)
                for (var b in a)
                    if (a.hasOwnProperty(b))
                        return !1;
            return !0;
        }
        var Ag = /^\/(.+)\/([a-z]*)$/, sa = Object.prototype.hasOwnProperty, G = function (a) {
                return F(a) ? a.toLowerCase() : a;
            }, ub = function (a) {
                return F(a) ? a.toUpperCase() : a;
            }, xa, C, ua, wa = [].slice, ag = [].splice, Bg = [].push, ga = Object.prototype.toString, uc = Object.getPrototypeOf, Da = H('ng'), ia = O.angular || (O.angular = {}), Vb, pb = 0;
        xa = W.documentMode;
        B.$inject = [];
        ab.$inject = [];
        var L = Array.isArray, ae = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/, X = function (a) {
                return F(a) ? a.trim() : a;
            }, xd = function (a) {
                return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08');
            }, Ea = function () {
                if (!y(Ea.rules)) {
                    var a = W.querySelector('[ng-csp]') || W.querySelector('[data-ng-csp]');
                    if (a) {
                        var b = a.getAttribute('ng-csp') || a.getAttribute('data-ng-csp');
                        Ea.rules = {
                            noUnsafeEval: !b || -1 !== b.indexOf('no-unsafe-eval'),
                            noInlineStyle: !b || -1 !== b.indexOf('no-inline-style')
                        };
                    } else {
                        a = Ea;
                        try {
                            new Function(''), b = !1;
                        } catch (d) {
                            b = !0;
                        }
                        a.rules = {
                            noUnsafeEval: b,
                            noInlineStyle: !1
                        };
                    }
                }
                return Ea.rules;
            }, rb = function () {
                if (y(rb.name_))
                    return rb.name_;
                var a, b, d = Qa.length, c, e;
                for (b = 0; b < d; ++b)
                    if (c = Qa[b], a = W.querySelector('[' + c.replace(':', '\\:') + 'jq]')) {
                        e = a.getAttribute(c + 'jq');
                        break;
                    }
                return rb.name_ = e;
            }, de = /:/g, Qa = [
                'ng-',
                'data-ng-',
                'ng:',
                'x-ng-'
            ], ie = /[A-Z]/g, Cc = !1, Pa = 3, me = {
                full: '1.5.0',
                major: 1,
                minor: 5,
                dot: 0,
                codeName: 'ennoblement-facilitation'
            };
        U.expando = 'ng339';
        var ib = U.cache = {}, Of = 1;
        U._data = function (a) {
            return this.cache[a[this.expando]] || {};
        };
        var Jf = /([\:\-\_]+(.))/g, Kf = /^moz([A-Z])/, yb = {
                mouseleave: 'mouseout',
                mouseenter: 'mouseover'
            }, Xb = H('jqLite'), Nf = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Wb = /<|&#?\w+;/, Lf = /<([\w:-]+)/, Mf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, da = {
                option: [
                    1,
                    '<select multiple="multiple">',
                    '</select>'
                ],
                thead: [
                    1,
                    '<table>',
                    '</table>'
                ],
                col: [
                    2,
                    '<table><colgroup>',
                    '</colgroup></table>'
                ],
                tr: [
                    2,
                    '<table><tbody>',
                    '</tbody></table>'
                ],
                td: [
                    3,
                    '<table><tbody><tr>',
                    '</tr></tbody></table>'
                ],
                _default: [
                    0,
                    '',
                    ''
                ]
            };
        da.optgroup = da.option;
        da.tbody = da.tfoot = da.colgroup = da.caption = da.thead;
        da.th = da.td;
        var Tf = Node.prototype.contains || function (a) {
                return !!(this.compareDocumentPosition(a) & 16);
            }, Ra = U.prototype = {
                ready: function (a) {
                    function b() {
                        d || (d = !0, a());
                    }
                    var d = !1;
                    'complete' === W.readyState ? setTimeout(b) : (this.on('DOMContentLoaded', b), U(O).on('load', b));
                },
                toString: function () {
                    var a = [];
                    n(this, function (b) {
                        a.push('' + b);
                    });
                    return '[' + a.join(', ') + ']';
                },
                eq: function (a) {
                    return 0 <= a ? C(this[a]) : C(this[this.length + a]);
                },
                length: 0,
                push: Bg,
                sort: [].sort,
                splice: [].splice
            }, Db = {};
        n('multiple selected checked disabled readOnly required open'.split(' '), function (a) {
            Db[G(a)] = a;
        });
        var Uc = {};
        n('input select option textarea button form details'.split(' '), function (a) {
            Uc[a] = !0;
        });
        var cd = {
            ngMinlength: 'minlength',
            ngMaxlength: 'maxlength',
            ngMin: 'min',
            ngMax: 'max',
            ngPattern: 'pattern'
        };
        n({
            data: Zb,
            removeData: hb,
            hasData: function (a) {
                for (var b in ib[a.ng339])
                    return !0;
                return !1;
            },
            cleanData: function (a) {
                for (var b = 0, d = a.length; b < d; b++)
                    hb(a[b]);
            }
        }, function (a, b) {
            U[b] = a;
        });
        n({
            data: Zb,
            inheritedData: Cb,
            scope: function (a) {
                return C.data(a, '$scope') || Cb(a.parentNode || a, [
                    '$isolateScope',
                    '$scope'
                ]);
            },
            isolateScope: function (a) {
                return C.data(a, '$isolateScope') || C.data(a, '$isolateScopeNoTemplate');
            },
            controller: Rc,
            injector: function (a) {
                return Cb(a, '$injector');
            },
            removeAttr: function (a, b) {
                a.removeAttribute(b);
            },
            hasClass: zb,
            css: function (a, b, d) {
                b = gb(b);
                if (y(d))
                    a.style[b] = d;
                else
                    return a.style[b];
            },
            attr: function (a, b, d) {
                var c = a.nodeType;
                if (c !== Pa && 2 !== c && 8 !== c)
                    if (c = G(b), Db[c])
                        if (y(d))
                            d ? (a[b] = !0, a.setAttribute(b, c)) : (a[b] = !1, a.removeAttribute(c));
                        else
                            return a[b] || (a.attributes.getNamedItem(b) || B).specified ? c : v;
                    else if (y(d))
                        a.setAttribute(b, d);
                    else if (a.getAttribute)
                        return a = a.getAttribute(b, 2), null === a ? v : a;
            },
            prop: function (a, b, d) {
                if (y(d))
                    a[b] = d;
                else
                    return a[b];
            },
            text: function () {
                function a(a, d) {
                    if (x(d)) {
                        var c = a.nodeType;
                        return 1 === c || c === Pa ? a.textContent : '';
                    }
                    a.textContent = d;
                }
                a.$dv = '';
                return a;
            }(),
            val: function (a, b) {
                if (x(b)) {
                    if (a.multiple && 'select' === ra(a)) {
                        var d = [];
                        n(a.options, function (a) {
                            a.selected && d.push(a.value || a.text);
                        });
                        return 0 === d.length ? null : d;
                    }
                    return a.value;
                }
                a.value = b;
            },
            html: function (a, b) {
                if (x(b))
                    return a.innerHTML;
                wb(a, !0);
                a.innerHTML = b;
            },
            empty: Sc
        }, function (a, b) {
            U.prototype[b] = function (b, c) {
                var e, f, g = this.length;
                if (a !== Sc && x(2 == a.length && a !== zb && a !== Rc ? b : c)) {
                    if (E(b)) {
                        for (e = 0; e < g; e++)
                            if (a === Zb)
                                a(this[e], b);
                            else
                                for (f in b)
                                    a(this[e], f, b[f]);
                        return this;
                    }
                    e = a.$dv;
                    g = x(e) ? Math.min(g, 1) : g;
                    for (f = 0; f < g; f++) {
                        var h = a(this[f], b, c);
                        e = e ? e + h : h;
                    }
                    return e;
                }
                for (e = 0; e < g; e++)
                    a(this[e], b, c);
                return this;
            };
        });
        n({
            removeData: hb,
            on: function (a, b, d, c) {
                if (y(c))
                    throw Xb('onargs');
                if (Mc(a)) {
                    c = xb(a, !0);
                    var e = c.events, f = c.handle;
                    f || (f = c.handle = Qf(a, e));
                    c = 0 <= b.indexOf(' ') ? b.split(' ') : [b];
                    for (var g = c.length, h = function (b, c, g) {
                                var h = e[b];
                                h || (h = e[b] = [], h.specialHandlerWrapper = c, '$destroy' === b || g || a.addEventListener(b, f, !1));
                                h.push(d);
                            }; g--;)
                        b = c[g], yb[b] ? (h(yb[b], Sf), h(b, v, !0)) : h(b);
                }
            },
            off: Qc,
            one: function (a, b, d) {
                a = C(a);
                a.on(b, function e() {
                    a.off(b, d);
                    a.off(b, e);
                });
                a.on(b, d);
            },
            replaceWith: function (a, b) {
                var d, c = a.parentNode;
                wb(a);
                n(new U(b), function (b) {
                    d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);
                    d = b;
                });
            },
            children: function (a) {
                var b = [];
                n(a.childNodes, function (a) {
                    1 === a.nodeType && b.push(a);
                });
                return b;
            },
            contents: function (a) {
                return a.contentDocument || a.childNodes || [];
            },
            append: function (a, b) {
                var d = a.nodeType;
                if (1 === d || 11 === d) {
                    b = new U(b);
                    for (var d = 0, c = b.length; d < c; d++)
                        a.appendChild(b[d]);
                }
            },
            prepend: function (a, b) {
                if (1 === a.nodeType) {
                    var d = a.firstChild;
                    n(new U(b), function (b) {
                        a.insertBefore(b, d);
                    });
                }
            },
            wrap: function (a, b) {
                Oc(a, C(b).eq(0).clone()[0]);
            },
            remove: $b,
            detach: function (a) {
                $b(a, !0);
            },
            after: function (a, b) {
                var d = a, c = a.parentNode;
                b = new U(b);
                for (var e = 0, f = b.length; e < f; e++) {
                    var g = b[e];
                    c.insertBefore(g, d.nextSibling);
                    d = g;
                }
            },
            addClass: Bb,
            removeClass: Ab,
            toggleClass: function (a, b, d) {
                b && n(b.split(' '), function (b) {
                    var e = d;
                    x(e) && (e = !zb(a, b));
                    (e ? Bb : Ab)(a, b);
                });
            },
            parent: function (a) {
                return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
            },
            next: function (a) {
                return a.nextElementSibling;
            },
            find: function (a, b) {
                return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
            },
            clone: Yb,
            triggerHandler: function (a, b, d) {
                var c, e, f = b.type || b, g = xb(a);
                if (g = (g = g && g.events) && g[f])
                    c = {
                        preventDefault: function () {
                            this.defaultPrevented = !0;
                        },
                        isDefaultPrevented: function () {
                            return !0 === this.defaultPrevented;
                        },
                        stopImmediatePropagation: function () {
                            this.immediatePropagationStopped = !0;
                        },
                        isImmediatePropagationStopped: function () {
                            return !0 === this.immediatePropagationStopped;
                        },
                        stopPropagation: B,
                        type: f,
                        target: a
                    }, b.type && (c = T(c, b)), b = na(g), e = d ? [c].concat(d) : [c], n(b, function (b) {
                        c.isImmediatePropagationStopped() || b.apply(a, e);
                    });
            }
        }, function (a, b) {
            U.prototype[b] = function (b, c, e) {
                for (var f, g = 0, h = this.length; g < h; g++)
                    x(f) ? (f = a(this[g], b, c, e), y(f) && (f = C(f))) : Pc(f, a(this[g], b, c, e));
                return y(f) ? f : this;
            };
            U.prototype.bind = U.prototype.on;
            U.prototype.unbind = U.prototype.off;
        });
        Ua.prototype = {
            put: function (a, b) {
                this[Fa(a, this.nextUid)] = b;
            },
            get: function (a) {
                return this[Fa(a, this.nextUid)];
            },
            remove: function (a) {
                var b = this[a = Fa(a, this.nextUid)];
                delete this[a];
                return b;
            }
        };
        var Hf = [function () {
                    this.$get = [function () {
                            return Ua;
                        }];
                }], Vf = /^([^\(]+?)=>/, Wf = /^[^\(]*\(\s*([^\)]*)\)/m, Cg = /,/, Dg = /^\s*(_?)(\S+?)\1\s*$/, Uf = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Ga = H('$injector');
        fb.$$annotate = function (a, b, d) {
            var c;
            if ('function' === typeof a) {
                if (!(c = a.$inject)) {
                    c = [];
                    if (a.length) {
                        if (b)
                            throw F(d) && d || (d = a.name || Xf(a)), Ga('strictdi', d);
                        b = Vc(a);
                        n(b[1].split(Cg), function (a) {
                            a.replace(Dg, function (a, b, d) {
                                c.push(d);
                            });
                        });
                    }
                    a.$inject = c;
                }
            } else
                L(a) ? (b = a.length - 1, Sa(a[b], 'fn'), c = a.slice(0, b)) : Sa(a, 'fn', !0);
            return c;
        };
        var Rd = H('$animate'), $e = function () {
                this.$get = function () {
                };
            }, af = function () {
                var a = new Ua(), b = [];
                this.$get = [
                    '$$AnimateRunner',
                    '$rootScope',
                    function (d, c) {
                        function e(a, b, c) {
                            var d = !1;
                            b && (b = F(b) ? b.split(' ') : L(b) ? b : [], n(b, function (b) {
                                b && (d = !0, a[b] = c);
                            }));
                            return d;
                        }
                        function f() {
                            n(b, function (b) {
                                var c = a.get(b);
                                if (c) {
                                    var d = Yf(b.attr('class')), e = '', f = '';
                                    n(c, function (a, b) {
                                        a !== !!d[b] && (a ? e += (e.length ? ' ' : '') + b : f += (f.length ? ' ' : '') + b);
                                    });
                                    n(b, function (a) {
                                        e && Bb(a, e);
                                        f && Ab(a, f);
                                    });
                                    a.remove(b);
                                }
                            });
                            b.length = 0;
                        }
                        return {
                            enabled: B,
                            on: B,
                            off: B,
                            pin: B,
                            push: function (g, h, k, l) {
                                l && l();
                                k = k || {};
                                k.from && g.css(k.from);
                                k.to && g.css(k.to);
                                if (k.addClass || k.removeClass)
                                    if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = e(k, h, !0), l = e(k, l, !1), h || l)
                                        a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(f);
                                g = new d();
                                g.complete();
                                return g;
                            }
                        };
                    }
                ];
            }, Ye = [
                '$provide',
                function (a) {
                    var b = this;
                    this.$$registeredAnimations = Object.create(null);
                    this.register = function (d, c) {
                        if (d && '.' !== d.charAt(0))
                            throw Rd('notcsel', d);
                        var e = d + '-animation';
                        b.$$registeredAnimations[d.substr(1)] = e;
                        a.factory(e, c);
                    };
                    this.classNameFilter = function (a) {
                        if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))
                            throw Rd('nongcls', 'ng-animate');
                        return this.$$classNameFilter;
                    };
                    this.$get = [
                        '$$animateQueue',
                        function (a) {
                            function b(a, c, d) {
                                if (d) {
                                    var h;
                                    a: {
                                        for (h = 0; h < d.length; h++) {
                                            var k = d[h];
                                            if (1 === k.nodeType) {
                                                h = k;
                                                break a;
                                            }
                                        }
                                        h = void 0;
                                    }
                                    !h || h.parentNode || h.previousElementSibling || (d = null);
                                }
                                d ? d.after(a) : c.prepend(a);
                            }
                            return {
                                on: a.on,
                                off: a.off,
                                pin: a.pin,
                                enabled: a.enabled,
                                cancel: function (a) {
                                    a.end && a.end();
                                },
                                enter: function (e, f, g, h) {
                                    f = f && C(f);
                                    g = g && C(g);
                                    f = f || g.parent();
                                    b(e, f, g);
                                    return a.push(e, 'enter', Ha(h));
                                },
                                move: function (e, f, g, h) {
                                    f = f && C(f);
                                    g = g && C(g);
                                    f = f || g.parent();
                                    b(e, f, g);
                                    return a.push(e, 'move', Ha(h));
                                },
                                leave: function (b, c) {
                                    return a.push(b, 'leave', Ha(c), function () {
                                        b.remove();
                                    });
                                },
                                addClass: function (b, c, g) {
                                    g = Ha(g);
                                    g.addClass = jb(g.addclass, c);
                                    return a.push(b, 'addClass', g);
                                },
                                removeClass: function (b, c, g) {
                                    g = Ha(g);
                                    g.removeClass = jb(g.removeClass, c);
                                    return a.push(b, 'removeClass', g);
                                },
                                setClass: function (b, c, g, h) {
                                    h = Ha(h);
                                    h.addClass = jb(h.addClass, c);
                                    h.removeClass = jb(h.removeClass, g);
                                    return a.push(b, 'setClass', h);
                                },
                                animate: function (b, c, g, h, k) {
                                    k = Ha(k);
                                    k.from = k.from ? T(k.from, c) : c;
                                    k.to = k.to ? T(k.to, g) : g;
                                    k.tempClasses = jb(k.tempClasses, h || 'ng-inline-animate');
                                    return a.push(b, 'animate', k);
                                }
                            };
                        }
                    ];
                }
            ], cf = function () {
                this.$get = [
                    '$$rAF',
                    function (a) {
                        function b(b) {
                            d.push(b);
                            1 < d.length || a(function () {
                                for (var a = 0; a < d.length; a++)
                                    d[a]();
                                d = [];
                            });
                        }
                        var d = [];
                        return function () {
                            var a = !1;
                            b(function () {
                                a = !0;
                            });
                            return function (d) {
                                a ? d() : b(d);
                            };
                        };
                    }
                ];
            }, bf = function () {
                this.$get = [
                    '$q',
                    '$sniffer',
                    '$$animateAsyncRun',
                    '$document',
                    '$timeout',
                    function (a, b, d, c, e) {
                        function f(a) {
                            this.setHost(a);
                            var b = d();
                            this._doneCallbacks = [];
                            this._tick = function (a) {
                                var d = c[0];
                                d && d.hidden ? e(a, 0, !1) : b(a);
                            };
                            this._state = 0;
                        }
                        f.chain = function (a, b) {
                            function c() {
                                if (d === a.length)
                                    b(!0);
                                else
                                    a[d](function (a) {
                                        !1 === a ? b(!1) : (d++, c());
                                    });
                            }
                            var d = 0;
                            c();
                        };
                        f.all = function (a, b) {
                            function c(f) {
                                e = e && f;
                                ++d === a.length && b(e);
                            }
                            var d = 0, e = !0;
                            n(a, function (a) {
                                a.done(c);
                            });
                        };
                        f.prototype = {
                            setHost: function (a) {
                                this.host = a || {};
                            },
                            done: function (a) {
                                2 === this._state ? a() : this._doneCallbacks.push(a);
                            },
                            progress: B,
                            getPromise: function () {
                                if (!this.promise) {
                                    var b = this;
                                    this.promise = a(function (a, c) {
                                        b.done(function (b) {
                                            !1 === b ? c() : a();
                                        });
                                    });
                                }
                                return this.promise;
                            },
                            then: function (a, b) {
                                return this.getPromise().then(a, b);
                            },
                            'catch': function (a) {
                                return this.getPromise()['catch'](a);
                            },
                            'finally': function (a) {
                                return this.getPromise()['finally'](a);
                            },
                            pause: function () {
                                this.host.pause && this.host.pause();
                            },
                            resume: function () {
                                this.host.resume && this.host.resume();
                            },
                            end: function () {
                                this.host.end && this.host.end();
                                this._resolve(!0);
                            },
                            cancel: function () {
                                this.host.cancel && this.host.cancel();
                                this._resolve(!1);
                            },
                            complete: function (a) {
                                var b = this;
                                0 === b._state && (b._state = 1, b._tick(function () {
                                    b._resolve(a);
                                }));
                            },
                            _resolve: function (a) {
                                2 !== this._state && (n(this._doneCallbacks, function (b) {
                                    b(a);
                                }), this._doneCallbacks.length = 0, this._state = 2);
                            }
                        };
                        return f;
                    }
                ];
            }, Ze = function () {
                this.$get = [
                    '$$rAF',
                    '$q',
                    '$$AnimateRunner',
                    function (a, b, d) {
                        return function (b, e) {
                            function f() {
                                a(function () {
                                    g.addClass && (b.addClass(g.addClass), g.addClass = null);
                                    g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);
                                    g.to && (b.css(g.to), g.to = null);
                                    h || k.complete();
                                    h = !0;
                                });
                                return k;
                            }
                            var g = e || {};
                            g.$$prepared || (g = Oa(g));
                            g.cleanupStyles && (g.from = g.to = null);
                            g.from && (b.css(g.from), g.from = null);
                            var h, k = new d();
                            return {
                                start: f,
                                end: f
                            };
                        };
                    }
                ];
            }, ja = H('$compile');
        Ec.$inject = [
            '$provide',
            '$$sanitizeUriProvider'
        ];
        var Xc = /^((?:x|data)[\:\-_])/i, bg = H('$controller'), dd = /^(\S+)(\s+as\s+([\w$]+))?$/, jf = function () {
                this.$get = [
                    '$document',
                    function (a) {
                        return function (b) {
                            b ? !b.nodeType && b instanceof C && (b = b[0]) : b = a[0].body;
                            return b.offsetWidth + 1;
                        };
                    }
                ];
            }, ed = 'application/json', dc = { 'Content-Type': ed + ';charset=utf-8' }, dg = /^\[|^\{(?!\{)/, eg = {
                '[': /]$/,
                '{': /}$/
            }, cg = /^\)\]\}',?\n/, Eg = H('$http'), id = function (a) {
                return function () {
                    throw Eg('legacy', a);
                };
            }, Ka = ia.$interpolateMinErr = H('$interpolate');
        Ka.throwNoconcat = function (a) {
            throw Ka('noconcat', a);
        };
        Ka.interr = function (a, b) {
            return Ka('interr', a, b.toString());
        };
        var Fg = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, gg = {
                http: 80,
                https: 443,
                ftp: 21
            }, Gb = H('$location'), Gg = {
                $$html5: !1,
                $$replace: !1,
                absUrl: Hb('$$absUrl'),
                url: function (a) {
                    if (x(a))
                        return this.$$url;
                    var b = Fg.exec(a);
                    (b[1] || '' === a) && this.path(decodeURIComponent(b[1]));
                    (b[2] || b[1] || '' === a) && this.search(b[3] || '');
                    this.hash(b[5] || '');
                    return this;
                },
                protocol: Hb('$$protocol'),
                host: Hb('$$host'),
                port: Hb('$$port'),
                path: nd('$$path', function (a) {
                    a = null !== a ? a.toString() : '';
                    return '/' == a.charAt(0) ? a : '/' + a;
                }),
                search: function (a, b) {
                    switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (F(a) || N(a))
                            a = a.toString(), this.$$search = zc(a);
                        else if (E(a))
                            a = Oa(a, {}), n(a, function (b, c) {
                                null == b && delete a[c];
                            }), this.$$search = a;
                        else
                            throw Gb('isrcharg');
                        break;
                    default:
                        x(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;
                    }
                    this.$$compose();
                    return this;
                },
                hash: nd('$$hash', function (a) {
                    return null !== a ? a.toString() : '';
                }),
                replace: function () {
                    this.$$replace = !0;
                    return this;
                }
            };
        n([
            md,
            gc,
            fc
        ], function (a) {
            a.prototype = Object.create(Gg);
            a.prototype.state = function (b) {
                if (!arguments.length)
                    return this.$$state;
                if (a !== fc || !this.$$html5)
                    throw Gb('nostate');
                this.$$state = x(b) ? null : b;
                return this;
            };
        });
        var ka = H('$parse'), ig = Function.prototype.call, jg = Function.prototype.apply, kg = Function.prototype.bind, Pb = Z();
        n('+ - * / % === !== == != < > <= >= && || ! = |'.split(' '), function (a) {
            Pb[a] = !0;
        });
        var Hg = {
                n: '\n',
                f: '\f',
                r: '\r',
                t: '\t',
                v: '\x0B',
                '\'': '\'',
                '"': '"'
            }, ic = function (a) {
                this.options = a;
            };
        ic.prototype = {
            constructor: ic,
            lex: function (a) {
                this.text = a;
                this.index = 0;
                for (this.tokens = []; this.index < this.text.length;)
                    if (a = this.text.charAt(this.index), '"' === a || '\'' === a)
                        this.readString(a);
                    else if (this.isNumber(a) || '.' === a && this.isNumber(this.peek()))
                        this.readNumber();
                    else if (this.isIdent(a))
                        this.readIdent();
                    else if (this.is(a, '(){}[].,;:?'))
                        this.tokens.push({
                            index: this.index,
                            text: a
                        }), this.index++;
                    else if (this.isWhitespace(a))
                        this.index++;
                    else {
                        var b = a + this.peek(), d = b + this.peek(2), c = Pb[b], e = Pb[d];
                        Pb[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({
                            index: this.index,
                            text: a,
                            operator: !0
                        }), this.index += a.length) : this.throwError('Unexpected next character ', this.index, this.index + 1);
                    }
                return this.tokens;
            },
            is: function (a, b) {
                return -1 !== b.indexOf(a);
            },
            peek: function (a) {
                a = a || 1;
                return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
            },
            isNumber: function (a) {
                return '0' <= a && '9' >= a && 'string' === typeof a;
            },
            isWhitespace: function (a) {
                return ' ' === a || '\r' === a || '\t' === a || '\n' === a || '\x0B' === a || '\xA0' === a;
            },
            isIdent: function (a) {
                return 'a' <= a && 'z' >= a || 'A' <= a && 'Z' >= a || '_' === a || '$' === a;
            },
            isExpOperator: function (a) {
                return '-' === a || '+' === a || this.isNumber(a);
            },
            throwError: function (a, b, d) {
                d = d || this.index;
                b = y(b) ? 's ' + b + '-' + this.index + ' [' + this.text.substring(b, d) + ']' : ' ' + d;
                throw ka('lexerr', a, b, this.text);
            },
            readNumber: function () {
                for (var a = '', b = this.index; this.index < this.text.length;) {
                    var d = G(this.text.charAt(this.index));
                    if ('.' == d || this.isNumber(d))
                        a += d;
                    else {
                        var c = this.peek();
                        if ('e' == d && this.isExpOperator(c))
                            a += d;
                        else if (this.isExpOperator(d) && c && this.isNumber(c) && 'e' == a.charAt(a.length - 1))
                            a += d;
                        else if (!this.isExpOperator(d) || c && this.isNumber(c) || 'e' != a.charAt(a.length - 1))
                            break;
                        else
                            this.throwError('Invalid exponent');
                    }
                    this.index++;
                }
                this.tokens.push({
                    index: b,
                    text: a,
                    constant: !0,
                    value: Number(a)
                });
            },
            readIdent: function () {
                for (var a = this.index; this.index < this.text.length;) {
                    var b = this.text.charAt(this.index);
                    if (!this.isIdent(b) && !this.isNumber(b))
                        break;
                    this.index++;
                }
                this.tokens.push({
                    index: a,
                    text: this.text.slice(a, this.index),
                    identifier: !0
                });
            },
            readString: function (a) {
                var b = this.index;
                this.index++;
                for (var d = '', c = a, e = !1; this.index < this.text.length;) {
                    var f = this.text.charAt(this.index), c = c + f;
                    if (e)
                        'u' === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError('Invalid unicode escape [\\u' + e + ']'), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += Hg[f] || f, e = !1;
                    else if ('\\' === f)
                        e = !0;
                    else {
                        if (f === a) {
                            this.index++;
                            this.tokens.push({
                                index: b,
                                text: c,
                                constant: !0,
                                value: d
                            });
                            return;
                        }
                        d += f;
                    }
                    this.index++;
                }
                this.throwError('Unterminated quote', b);
            }
        };
        var q = function (a, b) {
            this.lexer = a;
            this.options = b;
        };
        q.Program = 'Program';
        q.ExpressionStatement = 'ExpressionStatement';
        q.AssignmentExpression = 'AssignmentExpression';
        q.ConditionalExpression = 'ConditionalExpression';
        q.LogicalExpression = 'LogicalExpression';
        q.BinaryExpression = 'BinaryExpression';
        q.UnaryExpression = 'UnaryExpression';
        q.CallExpression = 'CallExpression';
        q.MemberExpression = 'MemberExpression';
        q.Identifier = 'Identifier';
        q.Literal = 'Literal';
        q.ArrayExpression = 'ArrayExpression';
        q.Property = 'Property';
        q.ObjectExpression = 'ObjectExpression';
        q.ThisExpression = 'ThisExpression';
        q.LocalsExpression = 'LocalsExpression';
        q.NGValueParameter = 'NGValueParameter';
        q.prototype = {
            ast: function (a) {
                this.text = a;
                this.tokens = this.lexer.lex(a);
                a = this.program();
                0 !== this.tokens.length && this.throwError('is an unexpected token', this.tokens[0]);
                return a;
            },
            program: function () {
                for (var a = [];;)
                    if (0 < this.tokens.length && !this.peek('}', ')', ';', ']') && a.push(this.expressionStatement()), !this.expect(';'))
                        return {
                            type: q.Program,
                            body: a
                        };
            },
            expressionStatement: function () {
                return {
                    type: q.ExpressionStatement,
                    expression: this.filterChain()
                };
            },
            filterChain: function () {
                for (var a = this.expression(); this.expect('|');)
                    a = this.filter(a);
                return a;
            },
            expression: function () {
                return this.assignment();
            },
            assignment: function () {
                var a = this.ternary();
                this.expect('=') && (a = {
                    type: q.AssignmentExpression,
                    left: a,
                    right: this.assignment(),
                    operator: '='
                });
                return a;
            },
            ternary: function () {
                var a = this.logicalOR(), b, d;
                return this.expect('?') && (b = this.expression(), this.consume(':')) ? (d = this.expression(), {
                    type: q.ConditionalExpression,
                    test: a,
                    alternate: b,
                    consequent: d
                }) : a;
            },
            logicalOR: function () {
                for (var a = this.logicalAND(); this.expect('||');)
                    a = {
                        type: q.LogicalExpression,
                        operator: '||',
                        left: a,
                        right: this.logicalAND()
                    };
                return a;
            },
            logicalAND: function () {
                for (var a = this.equality(); this.expect('&&');)
                    a = {
                        type: q.LogicalExpression,
                        operator: '&&',
                        left: a,
                        right: this.equality()
                    };
                return a;
            },
            equality: function () {
                for (var a = this.relational(), b; b = this.expect('==', '!=', '===', '!==');)
                    a = {
                        type: q.BinaryExpression,
                        operator: b.text,
                        left: a,
                        right: this.relational()
                    };
                return a;
            },
            relational: function () {
                for (var a = this.additive(), b; b = this.expect('<', '>', '<=', '>=');)
                    a = {
                        type: q.BinaryExpression,
                        operator: b.text,
                        left: a,
                        right: this.additive()
                    };
                return a;
            },
            additive: function () {
                for (var a = this.multiplicative(), b; b = this.expect('+', '-');)
                    a = {
                        type: q.BinaryExpression,
                        operator: b.text,
                        left: a,
                        right: this.multiplicative()
                    };
                return a;
            },
            multiplicative: function () {
                for (var a = this.unary(), b; b = this.expect('*', '/', '%');)
                    a = {
                        type: q.BinaryExpression,
                        operator: b.text,
                        left: a,
                        right: this.unary()
                    };
                return a;
            },
            unary: function () {
                var a;
                return (a = this.expect('+', '-', '!')) ? {
                    type: q.UnaryExpression,
                    operator: a.text,
                    prefix: !0,
                    argument: this.unary()
                } : this.primary();
            },
            primary: function () {
                var a;
                this.expect('(') ? (a = this.filterChain(), this.consume(')')) : this.expect('[') ? a = this.arrayDeclaration() : this.expect('{') ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = Oa(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError('not a primary expression', this.peek());
                for (var b; b = this.expect('(', '[', '.');)
                    '(' === b.text ? (a = {
                        type: q.CallExpression,
                        callee: a,
                        arguments: this.parseArguments()
                    }, this.consume(')')) : '[' === b.text ? (a = {
                        type: q.MemberExpression,
                        object: a,
                        property: this.expression(),
                        computed: !0
                    }, this.consume(']')) : '.' === b.text ? a = {
                        type: q.MemberExpression,
                        object: a,
                        property: this.identifier(),
                        computed: !1
                    } : this.throwError('IMPOSSIBLE');
                return a;
            },
            filter: function (a) {
                a = [a];
                for (var b = {
                        type: q.CallExpression,
                        callee: this.identifier(),
                        arguments: a,
                        filter: !0
                    }; this.expect(':');)
                    a.push(this.expression());
                return b;
            },
            parseArguments: function () {
                var a = [];
                if (')' !== this.peekToken().text) {
                    do
                        a.push(this.expression());
                    while (this.expect(','));
                }
                return a;
            },
            identifier: function () {
                var a = this.consume();
                a.identifier || this.throwError('is not a valid identifier', a);
                return {
                    type: q.Identifier,
                    name: a.text
                };
            },
            constant: function () {
                return {
                    type: q.Literal,
                    value: this.consume().value
                };
            },
            arrayDeclaration: function () {
                var a = [];
                if (']' !== this.peekToken().text) {
                    do {
                        if (this.peek(']'))
                            break;
                        a.push(this.expression());
                    } while (this.expect(','));
                }
                this.consume(']');
                return {
                    type: q.ArrayExpression,
                    elements: a
                };
            },
            object: function () {
                var a = [], b;
                if ('}' !== this.peekToken().text) {
                    do {
                        if (this.peek('}'))
                            break;
                        b = {
                            type: q.Property,
                            kind: 'init'
                        };
                        this.peek().constant ? b.key = this.constant() : this.peek().identifier ? b.key = this.identifier() : this.throwError('invalid key', this.peek());
                        this.consume(':');
                        b.value = this.expression();
                        a.push(b);
                    } while (this.expect(','));
                }
                this.consume('}');
                return {
                    type: q.ObjectExpression,
                    properties: a
                };
            },
            throwError: function (a, b) {
                throw ka('syntax', b.text, a, b.index + 1, this.text, this.text.substring(b.index));
            },
            consume: function (a) {
                if (0 === this.tokens.length)
                    throw ka('ueoe', this.text);
                var b = this.expect(a);
                b || this.throwError('is unexpected, expecting [' + a + ']', this.peek());
                return b;
            },
            peekToken: function () {
                if (0 === this.tokens.length)
                    throw ka('ueoe', this.text);
                return this.tokens[0];
            },
            peek: function (a, b, d, c) {
                return this.peekAhead(0, a, b, d, c);
            },
            peekAhead: function (a, b, d, c, e) {
                if (this.tokens.length > a) {
                    a = this.tokens[a];
                    var f = a.text;
                    if (f === b || f === d || f === c || f === e || !(b || d || c || e))
                        return a;
                }
                return !1;
            },
            expect: function (a, b, d, c) {
                return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1;
            },
            constants: {
                'true': {
                    type: q.Literal,
                    value: !0
                },
                'false': {
                    type: q.Literal,
                    value: !1
                },
                'null': {
                    type: q.Literal,
                    value: null
                },
                undefined: {
                    type: q.Literal,
                    value: v
                },
                'this': { type: q.ThisExpression },
                $locals: { type: q.LocalsExpression }
            }
        };
        ud.prototype = {
            compile: function (a, b) {
                var d = this, c = this.astBuilder.ast(a);
                this.state = {
                    nextId: 0,
                    filters: {},
                    expensiveChecks: b,
                    fn: {
                        vars: [],
                        body: [],
                        own: {}
                    },
                    assign: {
                        vars: [],
                        body: [],
                        own: {}
                    },
                    inputs: []
                };
                R(c, d.$filter);
                var e = '', f;
                this.stage = 'assign';
                if (f = sd(c))
                    this.state.computing = 'assign', e = this.nextId(), this.recurse(f, e), this.return_(e), e = 'fn.assign=' + this.generateFunction('assign', 's,v,l');
                f = qd(c.body);
                d.stage = 'inputs';
                n(f, function (a, b) {
                    var c = 'fn' + b;
                    d.state[c] = {
                        vars: [],
                        body: [],
                        own: {}
                    };
                    d.state.computing = c;
                    var e = d.nextId();
                    d.recurse(a, e);
                    d.return_(e);
                    d.state.inputs.push(c);
                    a.watchId = b;
                });
                this.state.computing = 'fn';
                this.stage = 'main';
                this.recurse(c);
                e = '"' + this.USE + ' ' + this.STRICT + '";\n' + this.filterPrefix() + 'var fn=' + this.generateFunction('fn', 's,l,a,i') + e + this.watchFns() + 'return fn;';
                e = new Function('$filter', 'ensureSafeMemberName', 'ensureSafeObject', 'ensureSafeFunction', 'getStringValue', 'ensureSafeAssignContext', 'ifDefined', 'plus', 'text', e)(this.$filter, Xa, Aa, od, hg, Ib, lg, pd, a);
                this.state = this.stage = v;
                e.literal = td(c);
                e.constant = c.constant;
                return e;
            },
            USE: 'use',
            STRICT: 'strict',
            watchFns: function () {
                var a = [], b = this.state.inputs, d = this;
                n(b, function (b) {
                    a.push('var ' + b + '=' + d.generateFunction(b, 's'));
                });
                b.length && a.push('fn.inputs=[' + b.join(',') + '];');
                return a.join('');
            },
            generateFunction: function (a, b) {
                return 'function(' + b + '){' + this.varsPrefix(a) + this.body(a) + '};';
            },
            filterPrefix: function () {
                var a = [], b = this;
                n(this.state.filters, function (d, c) {
                    a.push(d + '=$filter(' + b.escape(c) + ')');
                });
                return a.length ? 'var ' + a.join(',') + ';' : '';
            },
            varsPrefix: function (a) {
                return this.state[a].vars.length ? 'var ' + this.state[a].vars.join(',') + ';' : '';
            },
            body: function (a) {
                return this.state[a].body.join('');
            },
            recurse: function (a, b, d, c, e, f) {
                var g, h, k = this, l, m;
                c = c || B;
                if (!f && y(a.watchId))
                    b = b || this.nextId(), this.if_('i', this.lazyAssign(b, this.computedMember('i', a.watchId)), this.lazyRecurse(a, b, d, c, e, !0));
                else
                    switch (a.type) {
                    case q.Program:
                        n(a.body, function (b, c) {
                            k.recurse(b.expression, v, v, function (a) {
                                h = a;
                            });
                            c !== a.body.length - 1 ? k.current().body.push(h, ';') : k.return_(h);
                        });
                        break;
                    case q.Literal:
                        m = this.escape(a.value);
                        this.assign(b, m);
                        c(m);
                        break;
                    case q.UnaryExpression:
                        this.recurse(a.argument, v, v, function (a) {
                            h = a;
                        });
                        m = a.operator + '(' + this.ifDefined(h, 0) + ')';
                        this.assign(b, m);
                        c(m);
                        break;
                    case q.BinaryExpression:
                        this.recurse(a.left, v, v, function (a) {
                            g = a;
                        });
                        this.recurse(a.right, v, v, function (a) {
                            h = a;
                        });
                        m = '+' === a.operator ? this.plus(g, h) : '-' === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : '(' + g + ')' + a.operator + '(' + h + ')';
                        this.assign(b, m);
                        c(m);
                        break;
                    case q.LogicalExpression:
                        b = b || this.nextId();
                        k.recurse(a.left, b);
                        k.if_('&&' === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));
                        c(b);
                        break;
                    case q.ConditionalExpression:
                        b = b || this.nextId();
                        k.recurse(a.test, b);
                        k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));
                        c(b);
                        break;
                    case q.Identifier:
                        b = b || this.nextId();
                        d && (d.context = 'inputs' === k.stage ? 's' : this.assign(this.nextId(), this.getHasOwnProperty('l', a.name) + '?l:s'), d.computed = !1, d.name = a.name);
                        Xa(a.name);
                        k.if_('inputs' === k.stage || k.not(k.getHasOwnProperty('l', a.name)), function () {
                            k.if_('inputs' === k.stage || 's', function () {
                                e && 1 !== e && k.if_(k.not(k.nonComputedMember('s', a.name)), k.lazyAssign(k.nonComputedMember('s', a.name), '{}'));
                                k.assign(b, k.nonComputedMember('s', a.name));
                            });
                        }, b && k.lazyAssign(b, k.nonComputedMember('l', a.name)));
                        (k.state.expensiveChecks || Jb(a.name)) && k.addEnsureSafeObject(b);
                        c(b);
                        break;
                    case q.MemberExpression:
                        g = d && (d.context = this.nextId()) || this.nextId();
                        b = b || this.nextId();
                        k.recurse(a.object, g, v, function () {
                            k.if_(k.notNull(g), function () {
                                e && 1 !== e && k.addEnsureSafeAssignContext(g);
                                if (a.computed)
                                    h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), k.addEnsureSafeMemberName(h), e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), '{}')), m = k.ensureSafeObject(k.computedMember(g, h)), k.assign(b, m), d && (d.computed = !0, d.name = h);
                                else {
                                    Xa(a.property.name);
                                    e && 1 !== e && k.if_(k.not(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), '{}'));
                                    m = k.nonComputedMember(g, a.property.name);
                                    if (k.state.expensiveChecks || Jb(a.property.name))
                                        m = k.ensureSafeObject(m);
                                    k.assign(b, m);
                                    d && (d.computed = !1, d.name = a.property.name);
                                }
                            }, function () {
                                k.assign(b, 'undefined');
                            });
                            c(b);
                        }, !!e);
                        break;
                    case q.CallExpression:
                        b = b || this.nextId();
                        a.filter ? (h = k.filter(a.callee.name), l = [], n(a.arguments, function (a) {
                            var b = k.nextId();
                            k.recurse(a, b);
                            l.push(b);
                        }), m = h + '(' + l.join(',') + ')', k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function () {
                            k.if_(k.notNull(h), function () {
                                k.addEnsureSafeFunction(h);
                                n(a.arguments, function (a) {
                                    k.recurse(a, k.nextId(), v, function (a) {
                                        l.push(k.ensureSafeObject(a));
                                    });
                                });
                                g.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(g.context), m = k.member(g.context, g.name, g.computed) + '(' + l.join(',') + ')') : m = h + '(' + l.join(',') + ')';
                                m = k.ensureSafeObject(m);
                                k.assign(b, m);
                            }, function () {
                                k.assign(b, 'undefined');
                            });
                            c(b);
                        }));
                        break;
                    case q.AssignmentExpression:
                        h = this.nextId();
                        g = {};
                        if (!rd(a.left))
                            throw ka('lval');
                        this.recurse(a.left, v, g, function () {
                            k.if_(k.notNull(g.context), function () {
                                k.recurse(a.right, h);
                                k.addEnsureSafeObject(k.member(g.context, g.name, g.computed));
                                k.addEnsureSafeAssignContext(g.context);
                                m = k.member(g.context, g.name, g.computed) + a.operator + h;
                                k.assign(b, m);
                                c(b || m);
                            });
                        }, 1);
                        break;
                    case q.ArrayExpression:
                        l = [];
                        n(a.elements, function (a) {
                            k.recurse(a, k.nextId(), v, function (a) {
                                l.push(a);
                            });
                        });
                        m = '[' + l.join(',') + ']';
                        this.assign(b, m);
                        c(m);
                        break;
                    case q.ObjectExpression:
                        l = [];
                        n(a.properties, function (a) {
                            k.recurse(a.value, k.nextId(), v, function (b) {
                                l.push(k.escape(a.key.type === q.Identifier ? a.key.name : '' + a.key.value) + ':' + b);
                            });
                        });
                        m = '{' + l.join(',') + '}';
                        this.assign(b, m);
                        c(m);
                        break;
                    case q.ThisExpression:
                        this.assign(b, 's');
                        c('s');
                        break;
                    case q.LocalsExpression:
                        this.assign(b, 'l');
                        c('l');
                        break;
                    case q.NGValueParameter:
                        this.assign(b, 'v'), c('v');
                    }
            },
            getHasOwnProperty: function (a, b) {
                var d = a + '.' + b, c = this.current().own;
                c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + '&&(' + this.escape(b) + ' in ' + a + ')'));
                return c[d];
            },
            assign: function (a, b) {
                if (a)
                    return this.current().body.push(a, '=', b, ';'), a;
            },
            filter: function (a) {
                this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));
                return this.state.filters[a];
            },
            ifDefined: function (a, b) {
                return 'ifDefined(' + a + ',' + this.escape(b) + ')';
            },
            plus: function (a, b) {
                return 'plus(' + a + ',' + b + ')';
            },
            return_: function (a) {
                this.current().body.push('return ', a, ';');
            },
            if_: function (a, b, d) {
                if (!0 === a)
                    b();
                else {
                    var c = this.current().body;
                    c.push('if(', a, '){');
                    b();
                    c.push('}');
                    d && (c.push('else{'), d(), c.push('}'));
                }
            },
            not: function (a) {
                return '!(' + a + ')';
            },
            notNull: function (a) {
                return a + '!=null';
            },
            nonComputedMember: function (a, b) {
                return a + '.' + b;
            },
            computedMember: function (a, b) {
                return a + '[' + b + ']';
            },
            member: function (a, b, d) {
                return d ? this.computedMember(a, b) : this.nonComputedMember(a, b);
            },
            addEnsureSafeObject: function (a) {
                this.current().body.push(this.ensureSafeObject(a), ';');
            },
            addEnsureSafeMemberName: function (a) {
                this.current().body.push(this.ensureSafeMemberName(a), ';');
            },
            addEnsureSafeFunction: function (a) {
                this.current().body.push(this.ensureSafeFunction(a), ';');
            },
            addEnsureSafeAssignContext: function (a) {
                this.current().body.push(this.ensureSafeAssignContext(a), ';');
            },
            ensureSafeObject: function (a) {
                return 'ensureSafeObject(' + a + ',text)';
            },
            ensureSafeMemberName: function (a) {
                return 'ensureSafeMemberName(' + a + ',text)';
            },
            ensureSafeFunction: function (a) {
                return 'ensureSafeFunction(' + a + ',text)';
            },
            getStringValue: function (a) {
                this.assign(a, 'getStringValue(' + a + ')');
            },
            ensureSafeAssignContext: function (a) {
                return 'ensureSafeAssignContext(' + a + ',text)';
            },
            lazyRecurse: function (a, b, d, c, e, f) {
                var g = this;
                return function () {
                    g.recurse(a, b, d, c, e, f);
                };
            },
            lazyAssign: function (a, b) {
                var d = this;
                return function () {
                    d.assign(a, b);
                };
            },
            stringEscapeRegex: /[^ a-zA-Z0-9]/g,
            stringEscapeFn: function (a) {
                return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            },
            escape: function (a) {
                if (F(a))
                    return '\'' + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + '\'';
                if (N(a))
                    return a.toString();
                if (!0 === a)
                    return 'true';
                if (!1 === a)
                    return 'false';
                if (null === a)
                    return 'null';
                if ('undefined' === typeof a)
                    return 'undefined';
                throw ka('esc');
            },
            nextId: function (a, b) {
                var d = 'v' + this.state.nextId++;
                a || this.current().vars.push(d + (b ? '=' + b : ''));
                return d;
            },
            current: function () {
                return this.state[this.state.computing];
            }
        };
        vd.prototype = {
            compile: function (a, b) {
                var d = this, c = this.astBuilder.ast(a);
                this.expression = a;
                this.expensiveChecks = b;
                R(c, d.$filter);
                var e, f;
                if (e = sd(c))
                    f = this.recurse(e);
                e = qd(c.body);
                var g;
                e && (g = [], n(e, function (a, b) {
                    var c = d.recurse(a);
                    a.input = c;
                    g.push(c);
                    a.watchId = b;
                }));
                var h = [];
                n(c.body, function (a) {
                    h.push(d.recurse(a.expression));
                });
                e = 0 === c.body.length ? function () {
                } : 1 === c.body.length ? h[0] : function (a, b) {
                    var c;
                    n(h, function (d) {
                        c = d(a, b);
                    });
                    return c;
                };
                f && (e.assign = function (a, b, c) {
                    return f(a, c, b);
                });
                g && (e.inputs = g);
                e.literal = td(c);
                e.constant = c.constant;
                return e;
            },
            recurse: function (a, b, d) {
                var c, e, f = this, g;
                if (a.input)
                    return this.inputs(a.input, a.watchId);
                switch (a.type) {
                case q.Literal:
                    return this.value(a.value, b);
                case q.UnaryExpression:
                    return e = this.recurse(a.argument), this['unary' + a.operator](e, b);
                case q.BinaryExpression:
                    return c = this.recurse(a.left), e = this.recurse(a.right), this['binary' + a.operator](c, e, b);
                case q.LogicalExpression:
                    return c = this.recurse(a.left), e = this.recurse(a.right), this['binary' + a.operator](c, e, b);
                case q.ConditionalExpression:
                    return this['ternary?:'](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
                case q.Identifier:
                    return Xa(a.name, f.expression), f.identifier(a.name, f.expensiveChecks || Jb(a.name), b, d, f.expression);
                case q.MemberExpression:
                    return c = this.recurse(a.object, !1, !!d), a.computed || (Xa(a.property.name, f.expression), e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d, f.expression) : this.nonComputedMember(c, e, f.expensiveChecks, b, d, f.expression);
                case q.CallExpression:
                    return g = [], n(a.arguments, function (a) {
                        g.push(f.recurse(a));
                    }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, f) {
                        for (var r = [], n = 0; n < g.length; ++n)
                            r.push(g[n](a, c, d, f));
                        a = e.apply(v, r, f);
                        return b ? {
                            context: v,
                            name: v,
                            value: a
                        } : a;
                    } : function (a, c, d, m) {
                        var r = e(a, c, d, m), n;
                        if (null != r.value) {
                            Aa(r.context, f.expression);
                            od(r.value, f.expression);
                            n = [];
                            for (var q = 0; q < g.length; ++q)
                                n.push(Aa(g[q](a, c, d, m), f.expression));
                            n = Aa(r.value.apply(r.context, n), f.expression);
                        }
                        return b ? { value: n } : n;
                    };
                case q.AssignmentExpression:
                    return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right), function (a, d, g, m) {
                        var r = c(a, d, g, m);
                        a = e(a, d, g, m);
                        Aa(r.value, f.expression);
                        Ib(r.context);
                        r.context[r.name] = a;
                        return b ? { value: a } : a;
                    };
                case q.ArrayExpression:
                    return g = [], n(a.elements, function (a) {
                        g.push(f.recurse(a));
                    }), function (a, c, d, e) {
                        for (var f = [], n = 0; n < g.length; ++n)
                            f.push(g[n](a, c, d, e));
                        return b ? { value: f } : f;
                    };
                case q.ObjectExpression:
                    return g = [], n(a.properties, function (a) {
                        g.push({
                            key: a.key.type === q.Identifier ? a.key.name : '' + a.key.value,
                            value: f.recurse(a.value)
                        });
                    }), function (a, c, d, e) {
                        for (var f = {}, n = 0; n < g.length; ++n)
                            f[g[n].key] = g[n].value(a, c, d, e);
                        return b ? { value: f } : f;
                    };
                case q.ThisExpression:
                    return function (a) {
                        return b ? { value: a } : a;
                    };
                case q.LocalsExpression:
                    return function (a, c) {
                        return b ? { value: c } : c;
                    };
                case q.NGValueParameter:
                    return function (a, c, d, e) {
                        return b ? { value: d } : d;
                    };
                }
            },
            'unary+': function (a, b) {
                return function (d, c, e, f) {
                    d = a(d, c, e, f);
                    d = y(d) ? +d : 0;
                    return b ? { value: d } : d;
                };
            },
            'unary-': function (a, b) {
                return function (d, c, e, f) {
                    d = a(d, c, e, f);
                    d = y(d) ? -d : 0;
                    return b ? { value: d } : d;
                };
            },
            'unary!': function (a, b) {
                return function (d, c, e, f) {
                    d = !a(d, c, e, f);
                    return b ? { value: d } : d;
                };
            },
            'binary+': function (a, b, d) {
                return function (c, e, f, g) {
                    var h = a(c, e, f, g);
                    c = b(c, e, f, g);
                    h = pd(h, c);
                    return d ? { value: h } : h;
                };
            },
            'binary-': function (a, b, d) {
                return function (c, e, f, g) {
                    var h = a(c, e, f, g);
                    c = b(c, e, f, g);
                    h = (y(h) ? h : 0) - (y(c) ? c : 0);
                    return d ? { value: h } : h;
                };
            },
            'binary*': function (a, b, d) {
                return function (c, e, f, g) {
                    c = a(c, e, f, g) * b(c, e, f, g);
                    return d ? { value: c } : c;
                };
            },
            'binary/': function (a, b, d) {
                return function (c, e, f, g) {
                    c = a(c, e, f, g) / b(c, e, f, g);
                    return d ? { value: c } : c;
                };
            },
            'binary%': function (a, b, d) {
                return function (c, e, f, g) {
                    c = a(c, e, f, g) % b(c, e, f, g);
                    return d ? { value: c } : c;
                };
            },
            'binary===': function (a, b, d) {
                return function (c, e, f, g) {
                    c = a(c, e, f, g) === b(c, e, f, g);
                    return d ? { value: c } : c;
                };
            },
            'binary!==': function (a, b, d) {
                return function (c, e, f, g) {
                    c = a(c, e, f, g) !== b(c, e, f, g);
                    return d ? { value: c } : c;
                };
            },
            'binary==': function (a, b, d) {
                return function (c, e, f, g) {
                    c = a(c, e, f, g) == b(c, e, f, g);
                    return d ? { value: c } : c;
                };
            },
            'binary!=': function (a, b, d) {
                return function (c, e, f, g) {
                    c = a(c, e, f, g) != b(c, e, f, g);
                    return d ? { value: c } : c;
                };
            },
            'binary<': function (a, b, d) {
                return function (c, e, f, g) {
                    c = a(c, e, f, g) < b(c, e, f, g);
                    return d ? { value: c } : c;
                };
            },
            'binary>': function (a, b, d) {
                return function (c, e, f, g) {
                    c = a(c, e, f, g) > b(c, e, f, g);
                    return d ? { value: c } : c;
                };
            },
            'binary<=': function (a, b, d) {
                return function (c, e, f, g) {
                    c = a(c, e, f, g) <= b(c, e, f, g);
                    return d ? { value: c } : c;
                };
            },
            'binary>=': function (a, b, d) {
                return function (c, e, f, g) {
                    c = a(c, e, f, g) >= b(c, e, f, g);
                    return d ? { value: c } : c;
                };
            },
            'binary&&': function (a, b, d) {
                return function (c, e, f, g) {
                    c = a(c, e, f, g) && b(c, e, f, g);
                    return d ? { value: c } : c;
                };
            },
            'binary||': function (a, b, d) {
                return function (c, e, f, g) {
                    c = a(c, e, f, g) || b(c, e, f, g);
                    return d ? { value: c } : c;
                };
            },
            'ternary?:': function (a, b, d, c) {
                return function (e, f, g, h) {
                    e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h);
                    return c ? { value: e } : e;
                };
            },
            value: function (a, b) {
                return function () {
                    return b ? {
                        context: v,
                        name: v,
                        value: a
                    } : a;
                };
            },
            identifier: function (a, b, d, c, e) {
                return function (f, g, h, k) {
                    f = g && a in g ? g : f;
                    c && 1 !== c && f && !f[a] && (f[a] = {});
                    g = f ? f[a] : v;
                    b && Aa(g, e);
                    return d ? {
                        context: f,
                        name: a,
                        value: g
                    } : g;
                };
            },
            computedMember: function (a, b, d, c, e) {
                return function (f, g, h, k) {
                    var l = a(f, g, h, k), m, n;
                    null != l && (m = b(f, g, h, k), m += '', Xa(m, e), c && 1 !== c && (Ib(l), l && !l[m] && (l[m] = {})), n = l[m], Aa(n, e));
                    return d ? {
                        context: l,
                        name: m,
                        value: n
                    } : n;
                };
            },
            nonComputedMember: function (a, b, d, c, e, f) {
                return function (g, h, k, l) {
                    g = a(g, h, k, l);
                    e && 1 !== e && (Ib(g), g && !g[b] && (g[b] = {}));
                    h = null != g ? g[b] : v;
                    (d || Jb(b)) && Aa(h, f);
                    return c ? {
                        context: g,
                        name: b,
                        value: h
                    } : h;
                };
            },
            inputs: function (a, b) {
                return function (d, c, e, f) {
                    return f ? f[b] : a(d, c, e);
                };
            }
        };
        var jc = function (a, b, d) {
            this.lexer = a;
            this.$filter = b;
            this.options = d;
            this.ast = new q(this.lexer);
            this.astCompiler = d.csp ? new vd(this.ast, b) : new ud(this.ast, b);
        };
        jc.prototype = {
            constructor: jc,
            parse: function (a) {
                return this.astCompiler.compile(a, this.options.expensiveChecks);
            }
        };
        var mg = Object.prototype.valueOf, Ba = H('$sce'), qa = {
                HTML: 'html',
                CSS: 'css',
                URL: 'url',
                RESOURCE_URL: 'resourceUrl',
                JS: 'js'
            }, ja = H('$compile'), Y = W.createElement('a'), zd = za(O.location.href);
        Ad.$inject = ['$document'];
        Lc.$inject = ['$provide'];
        var Hd = 22, Gd = '.', lc = '0';
        Bd.$inject = ['$locale'];
        Dd.$inject = ['$locale'];
        var yg = {
                yyyy: aa('FullYear', 4),
                yy: aa('FullYear', 2, 0, !0),
                y: aa('FullYear', 1),
                MMMM: Lb('Month'),
                MMM: Lb('Month', !0),
                MM: aa('Month', 2, 1),
                M: aa('Month', 1, 1),
                dd: aa('Date', 2),
                d: aa('Date', 1),
                HH: aa('Hours', 2),
                H: aa('Hours', 1),
                hh: aa('Hours', 2, -12),
                h: aa('Hours', 1, -12),
                mm: aa('Minutes', 2),
                m: aa('Minutes', 1),
                ss: aa('Seconds', 2),
                s: aa('Seconds', 1),
                sss: aa('Milliseconds', 3),
                EEEE: Lb('Day'),
                EEE: Lb('Day', !0),
                a: function (a, b) {
                    return 12 > a.getHours() ? b.AMPMS[0] : b.AMPMS[1];
                },
                Z: function (a, b, d) {
                    a = -1 * d;
                    return a = (0 <= a ? '+' : '') + (Kb(Math[0 < a ? 'floor' : 'ceil'](a / 60), 2) + Kb(Math.abs(a % 60), 2));
                },
                ww: Jd(2),
                w: Jd(1),
                G: mc,
                GG: mc,
                GGG: mc,
                GGGG: function (a, b) {
                    return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1];
                }
            }, xg = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, wg = /^\-?\d+$/;
        Cd.$inject = ['$locale'];
        var rg = ba(G), sg = ba(ub);
        Ed.$inject = ['$parse'];
        var oe = ba({
                restrict: 'E',
                compile: function (a, b) {
                    if (!b.href && !b.xlinkHref)
                        return function (a, b) {
                            if ('a' === b[0].nodeName.toLowerCase()) {
                                var e = '[object SVGAnimatedString]' === ga.call(b.prop('href')) ? 'xlink:href' : 'href';
                                b.on('click', function (a) {
                                    b.attr(e) || a.preventDefault();
                                });
                            }
                        };
                }
            }), vb = {};
        n(Db, function (a, b) {
            function d(a, d, e) {
                a.$watch(e[c], function (a) {
                    e.$set(b, !!a);
                });
            }
            if ('multiple' != a) {
                var c = va('ng-' + b), e = d;
                'checked' === a && (e = function (a, b, e) {
                    e.ngModel !== e[c] && d(a, b, e);
                });
                vb[c] = function () {
                    return {
                        restrict: 'A',
                        priority: 100,
                        link: e
                    };
                };
            }
        });
        n(cd, function (a, b) {
            vb[b] = function () {
                return {
                    priority: 100,
                    link: function (a, c, e) {
                        if ('ngPattern' === b && '/' == e.ngPattern.charAt(0) && (c = e.ngPattern.match(Ag))) {
                            e.$set('ngPattern', new RegExp(c[1], c[2]));
                            return;
                        }
                        a.$watch(e[b], function (a) {
                            e.$set(b, a);
                        });
                    }
                };
            };
        });
        n([
            'src',
            'srcset',
            'href'
        ], function (a) {
            var b = va('ng-' + a);
            vb[b] = function () {
                return {
                    priority: 99,
                    link: function (d, c, e) {
                        var f = a, g = a;
                        'href' === a && '[object SVGAnimatedString]' === ga.call(c.prop('href')) && (g = 'xlinkHref', e.$attr[g] = 'xlink:href', f = null);
                        e.$observe(b, function (b) {
                            b ? (e.$set(g, b), xa && f && c.prop(f, e[g])) : 'href' === a && e.$set(g, null);
                        });
                    }
                };
            };
        });
        var Mb = {
            $addControl: B,
            $$renameControl: function (a, b) {
                a.$name = b;
            },
            $removeControl: B,
            $setValidity: B,
            $setDirty: B,
            $setPristine: B,
            $setSubmitted: B
        };
        Kd.$inject = [
            '$element',
            '$attrs',
            '$scope',
            '$animate',
            '$interpolate'
        ];
        var Sd = function (a) {
                return [
                    '$timeout',
                    '$parse',
                    function (b, d) {
                        function c(a) {
                            return '' === a ? d('this[""]').assign : d(a).assign || B;
                        }
                        return {
                            name: 'form',
                            restrict: a ? 'EAC' : 'E',
                            require: [
                                'form',
                                '^^?form'
                            ],
                            controller: Kd,
                            compile: function (d, f) {
                                d.addClass(Ya).addClass(ob);
                                var g = f.name ? 'name' : a && f.ngForm ? 'ngForm' : !1;
                                return {
                                    pre: function (a, d, e, f) {
                                        var n = f[0];
                                        if (!('action' in e)) {
                                            var s = function (b) {
                                                a.$apply(function () {
                                                    n.$commitViewValue();
                                                    n.$setSubmitted();
                                                });
                                                b.preventDefault();
                                            };
                                            d[0].addEventListener('submit', s, !1);
                                            d.on('$destroy', function () {
                                                b(function () {
                                                    d[0].removeEventListener('submit', s, !1);
                                                }, 0, !1);
                                            });
                                        }
                                        (f[1] || n.$$parentForm).$addControl(n);
                                        var q = g ? c(n.$name) : B;
                                        g && (q(a, n), e.$observe(g, function (b) {
                                            n.$name !== b && (q(a, v), n.$$parentForm.$$renameControl(n, b), q = c(n.$name), q(a, n));
                                        }));
                                        d.on('$destroy', function () {
                                            n.$$parentForm.$removeControl(n);
                                            q(a, v);
                                            T(n, Mb);
                                        });
                                    }
                                };
                            }
                        };
                    }
                ];
            }, pe = Sd(), Ce = Sd(!0), zg = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Ig = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i, Jg = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Kg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, Td = /^(\d{4})-(\d{2})-(\d{2})$/, Ud = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, pc = /^(\d{4})-W(\d\d)$/, Vd = /^(\d{4})-(\d\d)$/, Wd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Xd = {
                text: function (a, b, d, c, e, f) {
                    lb(a, b, d, c, e, f);
                    nc(c);
                },
                date: mb('date', Td, Ob(Td, [
                    'yyyy',
                    'MM',
                    'dd'
                ]), 'yyyy-MM-dd'),
                'datetime-local': mb('datetimelocal', Ud, Ob(Ud, 'yyyy MM dd HH mm ss sss'.split(' ')), 'yyyy-MM-ddTHH:mm:ss.sss'),
                time: mb('time', Wd, Ob(Wd, [
                    'HH',
                    'mm',
                    'ss',
                    'sss'
                ]), 'HH:mm:ss.sss'),
                week: mb('week', pc, function (a, b) {
                    if (V(a))
                        return a;
                    if (F(a)) {
                        pc.lastIndex = 0;
                        var d = pc.exec(a);
                        if (d) {
                            var c = +d[1], e = +d[2], f = d = 0, g = 0, h = 0, k = Id(c), e = 7 * (e - 1);
                            b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());
                            return new Date(c, 0, k.getDate() + e, d, f, g, h);
                        }
                    }
                    return NaN;
                }, 'yyyy-Www'),
                month: mb('month', Vd, Ob(Vd, [
                    'yyyy',
                    'MM'
                ]), 'yyyy-MM'),
                number: function (a, b, d, c, e, f) {
                    Md(a, b, d, c);
                    lb(a, b, d, c, e, f);
                    c.$$parserName = 'number';
                    c.$parsers.push(function (a) {
                        return c.$isEmpty(a) ? null : Kg.test(a) ? parseFloat(a) : v;
                    });
                    c.$formatters.push(function (a) {
                        if (!c.$isEmpty(a)) {
                            if (!N(a))
                                throw nb('numfmt', a);
                            a = a.toString();
                        }
                        return a;
                    });
                    if (y(d.min) || d.ngMin) {
                        var g;
                        c.$validators.min = function (a) {
                            return c.$isEmpty(a) || x(g) || a >= g;
                        };
                        d.$observe('min', function (a) {
                            y(a) && !N(a) && (a = parseFloat(a, 10));
                            g = N(a) && !isNaN(a) ? a : v;
                            c.$validate();
                        });
                    }
                    if (y(d.max) || d.ngMax) {
                        var h;
                        c.$validators.max = function (a) {
                            return c.$isEmpty(a) || x(h) || a <= h;
                        };
                        d.$observe('max', function (a) {
                            y(a) && !N(a) && (a = parseFloat(a, 10));
                            h = N(a) && !isNaN(a) ? a : v;
                            c.$validate();
                        });
                    }
                },
                url: function (a, b, d, c, e, f) {
                    lb(a, b, d, c, e, f);
                    nc(c);
                    c.$$parserName = 'url';
                    c.$validators.url = function (a, b) {
                        var d = a || b;
                        return c.$isEmpty(d) || Ig.test(d);
                    };
                },
                email: function (a, b, d, c, e, f) {
                    lb(a, b, d, c, e, f);
                    nc(c);
                    c.$$parserName = 'email';
                    c.$validators.email = function (a, b) {
                        var d = a || b;
                        return c.$isEmpty(d) || Jg.test(d);
                    };
                },
                radio: function (a, b, d, c) {
                    x(d.name) && b.attr('name', ++pb);
                    b.on('click', function (a) {
                        b[0].checked && c.$setViewValue(d.value, a && a.type);
                    });
                    c.$render = function () {
                        b[0].checked = d.value == c.$viewValue;
                    };
                    d.$observe('value', c.$render);
                },
                checkbox: function (a, b, d, c, e, f, g, h) {
                    var k = Nd(h, a, 'ngTrueValue', d.ngTrueValue, !0), l = Nd(h, a, 'ngFalseValue', d.ngFalseValue, !1);
                    b.on('click', function (a) {
                        c.$setViewValue(b[0].checked, a && a.type);
                    });
                    c.$render = function () {
                        b[0].checked = c.$viewValue;
                    };
                    c.$isEmpty = function (a) {
                        return !1 === a;
                    };
                    c.$formatters.push(function (a) {
                        return oa(a, k);
                    });
                    c.$parsers.push(function (a) {
                        return a ? k : l;
                    });
                },
                hidden: B,
                button: B,
                submit: B,
                reset: B,
                file: B
            }, Fc = [
                '$browser',
                '$sniffer',
                '$filter',
                '$parse',
                function (a, b, d, c) {
                    return {
                        restrict: 'E',
                        require: ['?ngModel'],
                        link: {
                            pre: function (e, f, g, h) {
                                h[0] && (Xd[G(g.type)] || Xd.text)(e, f, g, h[0], b, a, d, c);
                            }
                        }
                    };
                }
            ], Lg = /^(true|false|\d+)$/, Ue = function () {
                return {
                    restrict: 'A',
                    priority: 100,
                    compile: function (a, b) {
                        return Lg.test(b.ngValue) ? function (a, b, e) {
                            e.$set('value', a.$eval(e.ngValue));
                        } : function (a, b, e) {
                            a.$watch(e.ngValue, function (a) {
                                e.$set('value', a);
                            });
                        };
                    }
                };
            }, ue = [
                '$compile',
                function (a) {
                    return {
                        restrict: 'AC',
                        compile: function (b) {
                            a.$$addBindingClass(b);
                            return function (b, c, e) {
                                a.$$addBindingInfo(c, e.ngBind);
                                c = c[0];
                                b.$watch(e.ngBind, function (a) {
                                    c.textContent = x(a) ? '' : a;
                                });
                            };
                        }
                    };
                }
            ], we = [
                '$interpolate',
                '$compile',
                function (a, b) {
                    return {
                        compile: function (d) {
                            b.$$addBindingClass(d);
                            return function (c, d, f) {
                                c = a(d.attr(f.$attr.ngBindTemplate));
                                b.$$addBindingInfo(d, c.expressions);
                                d = d[0];
                                f.$observe('ngBindTemplate', function (a) {
                                    d.textContent = x(a) ? '' : a;
                                });
                            };
                        }
                    };
                }
            ], ve = [
                '$sce',
                '$parse',
                '$compile',
                function (a, b, d) {
                    return {
                        restrict: 'A',
                        compile: function (c, e) {
                            var f = b(e.ngBindHtml), g = b(e.ngBindHtml, function (a) {
                                    return (a || '').toString();
                                });
                            d.$$addBindingClass(c);
                            return function (b, c, e) {
                                d.$$addBindingInfo(c, e.ngBindHtml);
                                b.$watch(g, function () {
                                    c.html(a.getTrustedHtml(f(b)) || '');
                                });
                            };
                        }
                    };
                }
            ], Te = ba({
                restrict: 'A',
                require: 'ngModel',
                link: function (a, b, d, c) {
                    c.$viewChangeListeners.push(function () {
                        a.$eval(d.ngChange);
                    });
                }
            }), xe = oc('', !0), ze = oc('Odd', 0), ye = oc('Even', 1), Ae = Ma({
                compile: function (a, b) {
                    b.$set('ngCloak', v);
                    a.removeClass('ng-cloak');
                }
            }), Be = [function () {
                    return {
                        restrict: 'A',
                        scope: !0,
                        controller: '@',
                        priority: 500
                    };
                }], Kc = {}, Mg = {
                blur: !0,
                focus: !0
            };
        n('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '), function (a) {
            var b = va('ng-' + a);
            Kc[b] = [
                '$parse',
                '$rootScope',
                function (d, c) {
                    return {
                        restrict: 'A',
                        compile: function (e, f) {
                            var g = d(f[b], null, !0);
                            return function (b, d) {
                                d.on(a, function (d) {
                                    var e = function () {
                                        g(b, { $event: d });
                                    };
                                    Mg[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e);
                                });
                            };
                        }
                    };
                }
            ];
        });
        var Ee = [
                '$animate',
                function (a) {
                    return {
                        multiElement: !0,
                        transclude: 'element',
                        priority: 600,
                        terminal: !0,
                        restrict: 'A',
                        $$tlb: !0,
                        link: function (b, d, c, e, f) {
                            var g, h, k;
                            b.$watch(c.ngIf, function (b) {
                                b ? h || f(function (b, e) {
                                    h = e;
                                    b[b.length++] = W.createComment(' end ngIf: ' + c.ngIf + ' ');
                                    g = { clone: b };
                                    a.enter(b, d.parent(), d);
                                }) : (k && (k.remove(), k = null), h && (h.$destroy(), h = null), g && (k = tb(g.clone), a.leave(k).then(function () {
                                    k = null;
                                }), g = null));
                            });
                        }
                    };
                }
            ], Fe = [
                '$templateRequest',
                '$anchorScroll',
                '$animate',
                function (a, b, d) {
                    return {
                        restrict: 'ECA',
                        priority: 400,
                        terminal: !0,
                        transclude: 'element',
                        controller: ia.noop,
                        compile: function (c, e) {
                            var f = e.ngInclude || e.src, g = e.onload || '', h = e.autoscroll;
                            return function (c, e, m, n, s) {
                                var q = 0, v, t, p, w = function () {
                                        t && (t.remove(), t = null);
                                        v && (v.$destroy(), v = null);
                                        p && (d.leave(p).then(function () {
                                            t = null;
                                        }), t = p, p = null);
                                    };
                                c.$watch(f, function (f) {
                                    var m = function () {
                                            !y(h) || h && !c.$eval(h) || b();
                                        }, z = ++q;
                                    f ? (a(f, !0).then(function (a) {
                                        if (!c.$$destroyed && z === q) {
                                            var b = c.$new();
                                            n.template = a;
                                            a = s(b, function (a) {
                                                w();
                                                d.enter(a, null, e).then(m);
                                            });
                                            v = b;
                                            p = a;
                                            v.$emit('$includeContentLoaded', f);
                                            c.$eval(g);
                                        }
                                    }, function () {
                                        c.$$destroyed || z !== q || (w(), c.$emit('$includeContentError', f));
                                    }), c.$emit('$includeContentRequested', f)) : (w(), n.template = null);
                                });
                            };
                        }
                    };
                }
            ], We = [
                '$compile',
                function (a) {
                    return {
                        restrict: 'ECA',
                        priority: -400,
                        require: 'ngInclude',
                        link: function (b, d, c, e) {
                            ga.call(d[0]).match(/SVG/) ? (d.empty(), a(Nc(e.template, W).childNodes)(b, function (a) {
                                d.append(a);
                            }, { futureParentElement: d })) : (d.html(e.template), a(d.contents())(b));
                        }
                    };
                }
            ], Ge = Ma({
                priority: 450,
                compile: function () {
                    return {
                        pre: function (a, b, d) {
                            a.$eval(d.ngInit);
                        }
                    };
                }
            }), Se = function () {
                return {
                    restrict: 'A',
                    priority: 100,
                    require: 'ngModel',
                    link: function (a, b, d, c) {
                        var e = b.attr(d.$attr.ngList) || ', ', f = 'false' !== d.ngTrim, g = f ? X(e) : e;
                        c.$parsers.push(function (a) {
                            if (!x(a)) {
                                var b = [];
                                a && n(a.split(g), function (a) {
                                    a && b.push(f ? X(a) : a);
                                });
                                return b;
                            }
                        });
                        c.$formatters.push(function (a) {
                            return L(a) ? a.join(e) : v;
                        });
                        c.$isEmpty = function (a) {
                            return !a || !a.length;
                        };
                    }
                };
            }, ob = 'ng-valid', Od = 'ng-invalid', Ya = 'ng-pristine', Nb = 'ng-dirty', Qd = 'ng-pending', nb = H('ngModel'), Ng = [
                '$scope',
                '$exceptionHandler',
                '$attrs',
                '$element',
                '$parse',
                '$animate',
                '$timeout',
                '$rootScope',
                '$q',
                '$interpolate',
                function (a, b, d, c, e, f, g, h, k, l) {
                    this.$modelValue = this.$viewValue = Number.NaN;
                    this.$$rawModelValue = v;
                    this.$validators = {};
                    this.$asyncValidators = {};
                    this.$parsers = [];
                    this.$formatters = [];
                    this.$viewChangeListeners = [];
                    this.$untouched = !0;
                    this.$touched = !1;
                    this.$pristine = !0;
                    this.$dirty = !1;
                    this.$valid = !0;
                    this.$invalid = !1;
                    this.$error = {};
                    this.$$success = {};
                    this.$pending = v;
                    this.$name = l(d.name || '', !1)(a);
                    this.$$parentForm = Mb;
                    var m = e(d.ngModel), r = m.assign, q = m, I = r, K = null, t, p = this;
                    this.$$setOptions = function (a) {
                        if ((p.$options = a) && a.getterSetter) {
                            var b = e(d.ngModel + '()'), f = e(d.ngModel + '($$$p)');
                            q = function (a) {
                                var c = m(a);
                                D(c) && (c = b(a));
                                return c;
                            };
                            I = function (a, b) {
                                D(m(a)) ? f(a, { $$$p: p.$modelValue }) : r(a, p.$modelValue);
                            };
                        } else if (!m.assign)
                            throw nb('nonassign', d.ngModel, ta(c));
                    };
                    this.$render = B;
                    this.$isEmpty = function (a) {
                        return x(a) || '' === a || null === a || a !== a;
                    };
                    this.$$updateEmptyClasses = function (a) {
                        p.$isEmpty(a) ? (f.removeClass(c, 'ng-not-empty'), f.addClass(c, 'ng-empty')) : (f.removeClass(c, 'ng-empty'), f.addClass(c, 'ng-not-empty'));
                    };
                    var w = 0;
                    Ld({
                        ctrl: this,
                        $element: c,
                        set: function (a, b) {
                            a[b] = !0;
                        },
                        unset: function (a, b) {
                            delete a[b];
                        },
                        $animate: f
                    });
                    this.$setPristine = function () {
                        p.$dirty = !1;
                        p.$pristine = !0;
                        f.removeClass(c, Nb);
                        f.addClass(c, Ya);
                    };
                    this.$setDirty = function () {
                        p.$dirty = !0;
                        p.$pristine = !1;
                        f.removeClass(c, Ya);
                        f.addClass(c, Nb);
                        p.$$parentForm.$setDirty();
                    };
                    this.$setUntouched = function () {
                        p.$touched = !1;
                        p.$untouched = !0;
                        f.setClass(c, 'ng-untouched', 'ng-touched');
                    };
                    this.$setTouched = function () {
                        p.$touched = !0;
                        p.$untouched = !1;
                        f.setClass(c, 'ng-touched', 'ng-untouched');
                    };
                    this.$rollbackViewValue = function () {
                        g.cancel(K);
                        p.$viewValue = p.$$lastCommittedViewValue;
                        p.$render();
                    };
                    this.$validate = function () {
                        if (!N(p.$modelValue) || !isNaN(p.$modelValue)) {
                            var a = p.$$rawModelValue, b = p.$valid, c = p.$modelValue, d = p.$options && p.$options.allowInvalid;
                            p.$$runValidators(a, p.$$lastCommittedViewValue, function (e) {
                                d || b === e || (p.$modelValue = e ? a : v, p.$modelValue !== c && p.$$writeModelToScope());
                            });
                        }
                    };
                    this.$$runValidators = function (a, b, c) {
                        function d() {
                            var c = !0;
                            n(p.$validators, function (d, e) {
                                var g = d(a, b);
                                c = c && g;
                                f(e, g);
                            });
                            return c ? !0 : (n(p.$asyncValidators, function (a, b) {
                                f(b, null);
                            }), !1);
                        }
                        function e() {
                            var c = [], d = !0;
                            n(p.$asyncValidators, function (e, g) {
                                var h = e(a, b);
                                if (!h || !D(h.then))
                                    throw nb('nopromise', h);
                                f(g, v);
                                c.push(h.then(function () {
                                    f(g, !0);
                                }, function (a) {
                                    d = !1;
                                    f(g, !1);
                                }));
                            });
                            c.length ? k.all(c).then(function () {
                                g(d);
                            }, B) : g(!0);
                        }
                        function f(a, b) {
                            h === w && p.$setValidity(a, b);
                        }
                        function g(a) {
                            h === w && c(a);
                        }
                        w++;
                        var h = w;
                        (function () {
                            var a = p.$$parserName || 'parse';
                            if (x(t))
                                f(a, null);
                            else
                                return t || (n(p.$validators, function (a, b) {
                                    f(b, null);
                                }), n(p.$asyncValidators, function (a, b) {
                                    f(b, null);
                                })), f(a, t), t;
                            return !0;
                        }() ? d() ? e() : g(!1) : g(!1));
                    };
                    this.$commitViewValue = function () {
                        var a = p.$viewValue;
                        g.cancel(K);
                        if (p.$$lastCommittedViewValue !== a || '' === a && p.$$hasNativeValidators)
                            p.$$updateEmptyClasses(a), p.$$lastCommittedViewValue = a, p.$pristine && this.$setDirty(), this.$$parseAndValidate();
                    };
                    this.$$parseAndValidate = function () {
                        var b = p.$$lastCommittedViewValue;
                        if (t = x(b) ? v : !0)
                            for (var c = 0; c < p.$parsers.length; c++)
                                if (b = p.$parsers[c](b), x(b)) {
                                    t = !1;
                                    break;
                                }
                        N(p.$modelValue) && isNaN(p.$modelValue) && (p.$modelValue = q(a));
                        var d = p.$modelValue, e = p.$options && p.$options.allowInvalid;
                        p.$$rawModelValue = b;
                        e && (p.$modelValue = b, p.$modelValue !== d && p.$$writeModelToScope());
                        p.$$runValidators(b, p.$$lastCommittedViewValue, function (a) {
                            e || (p.$modelValue = a ? b : v, p.$modelValue !== d && p.$$writeModelToScope());
                        });
                    };
                    this.$$writeModelToScope = function () {
                        I(a, p.$modelValue);
                        n(p.$viewChangeListeners, function (a) {
                            try {
                                a();
                            } catch (c) {
                                b(c);
                            }
                        });
                    };
                    this.$setViewValue = function (a, b) {
                        p.$viewValue = a;
                        p.$options && !p.$options.updateOnDefault || p.$$debounceViewValueCommit(b);
                    };
                    this.$$debounceViewValueCommit = function (b) {
                        var c = 0, d = p.$options;
                        d && y(d.debounce) && (d = d.debounce, N(d) ? c = d : N(d[b]) ? c = d[b] : N(d['default']) && (c = d['default']));
                        g.cancel(K);
                        c ? K = g(function () {
                            p.$commitViewValue();
                        }, c) : h.$$phase ? p.$commitViewValue() : a.$apply(function () {
                            p.$commitViewValue();
                        });
                    };
                    a.$watch(function () {
                        var b = q(a);
                        if (b !== p.$modelValue && (p.$modelValue === p.$modelValue || b === b)) {
                            p.$modelValue = p.$$rawModelValue = b;
                            t = v;
                            for (var c = p.$formatters, d = c.length, e = b; d--;)
                                e = c[d](e);
                            p.$viewValue !== e && (p.$$updateEmptyClasses(e), p.$viewValue = p.$$lastCommittedViewValue = e, p.$render(), p.$$runValidators(b, e, B));
                        }
                        return b;
                    });
                }
            ], Re = [
                '$rootScope',
                function (a) {
                    return {
                        restrict: 'A',
                        require: [
                            'ngModel',
                            '^?form',
                            '^?ngModelOptions'
                        ],
                        controller: Ng,
                        priority: 1,
                        compile: function (b) {
                            b.addClass(Ya).addClass('ng-untouched').addClass(ob);
                            return {
                                pre: function (a, b, e, f) {
                                    var g = f[0];
                                    b = f[1] || g.$$parentForm;
                                    g.$$setOptions(f[2] && f[2].$options);
                                    b.$addControl(g);
                                    e.$observe('name', function (a) {
                                        g.$name !== a && g.$$parentForm.$$renameControl(g, a);
                                    });
                                    a.$on('$destroy', function () {
                                        g.$$parentForm.$removeControl(g);
                                    });
                                },
                                post: function (b, c, e, f) {
                                    var g = f[0];
                                    if (g.$options && g.$options.updateOn)
                                        c.on(g.$options.updateOn, function (a) {
                                            g.$$debounceViewValueCommit(a && a.type);
                                        });
                                    c.on('blur', function (c) {
                                        g.$touched || (a.$$phase ? b.$evalAsync(g.$setTouched) : b.$apply(g.$setTouched));
                                    });
                                }
                            };
                        }
                    };
                }
            ], Og = /(\s+|^)default(\s+|$)/, Ve = function () {
                return {
                    restrict: 'A',
                    controller: [
                        '$scope',
                        '$attrs',
                        function (a, b) {
                            var d = this;
                            this.$options = Oa(a.$eval(b.ngModelOptions));
                            y(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = X(this.$options.updateOn.replace(Og, function () {
                                d.$options.updateOnDefault = !0;
                                return ' ';
                            }))) : this.$options.updateOnDefault = !0;
                        }
                    ]
                };
            }, He = Ma({
                terminal: !0,
                priority: 1000
            }), Pg = H('ngOptions'), Qg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, Pe = [
                '$compile',
                '$parse',
                function (a, b) {
                    function d(a, c, d) {
                        function e(a, b, c, d, f) {
                            this.selectValue = a;
                            this.viewValue = b;
                            this.label = c;
                            this.group = d;
                            this.disabled = f;
                        }
                        function l(a) {
                            var b;
                            if (!q && Ca(a))
                                b = a;
                            else {
                                b = [];
                                for (var c in a)
                                    a.hasOwnProperty(c) && '$' !== c.charAt(0) && b.push(c);
                            }
                            return b;
                        }
                        var m = a.match(Qg);
                        if (!m)
                            throw Pg('iexp', a, ta(c));
                        var n = m[5] || m[7], q = m[6];
                        a = / as /.test(m[0]) && m[1];
                        var v = m[9];
                        c = b(m[2] ? m[1] : n);
                        var y = a && b(a) || c, t = v && b(v), p = v ? function (a, b) {
                                return t(d, b);
                            } : function (a) {
                                return Fa(a);
                            }, w = function (a, b) {
                                return p(a, B(a, b));
                            }, u = b(m[2] || m[1]), x = b(m[3] || ''), z = b(m[4] || ''), A = b(m[8]), C = {}, B = q ? function (a, b) {
                                C[q] = b;
                                C[n] = a;
                                return C;
                            } : function (a) {
                                C[n] = a;
                                return C;
                            };
                        return {
                            trackBy: v,
                            getTrackByValue: w,
                            getWatchables: b(A, function (a) {
                                var b = [];
                                a = a || [];
                                for (var c = l(a), e = c.length, f = 0; f < e; f++) {
                                    var g = a === c ? f : c[f], k = B(a[g], g), g = p(a[g], k);
                                    b.push(g);
                                    if (m[2] || m[1])
                                        g = u(d, k), b.push(g);
                                    m[4] && (k = z(d, k), b.push(k));
                                }
                                return b;
                            }),
                            getOptions: function () {
                                for (var a = [], b = {}, c = A(d) || [], f = l(c), g = f.length, m = 0; m < g; m++) {
                                    var n = c === f ? m : f[m], r = B(c[n], n), q = y(d, r), n = p(q, r), s = u(d, r), t = x(d, r), r = z(d, r), q = new e(n, q, s, t, r);
                                    a.push(q);
                                    b[n] = q;
                                }
                                return {
                                    items: a,
                                    selectValueMap: b,
                                    getOptionFromViewValue: function (a) {
                                        return b[w(a)];
                                    },
                                    getViewValueFromOption: function (a) {
                                        return v ? ia.copy(a.viewValue) : a.viewValue;
                                    }
                                };
                            }
                        };
                    }
                    var c = W.createElement('option'), e = W.createElement('optgroup');
                    return {
                        restrict: 'A',
                        terminal: !0,
                        require: [
                            'select',
                            'ngModel'
                        ],
                        link: {
                            pre: function (a, b, c, d) {
                                d[0].registerOption = B;
                            },
                            post: function (b, g, h, k) {
                                function l(a, b) {
                                    a.element = b;
                                    b.disabled = a.disabled;
                                    a.label !== b.label && (b.label = a.label, b.textContent = a.label);
                                    a.value !== b.value && (b.value = a.selectValue);
                                }
                                function m(a, b, c, d) {
                                    b && G(b.nodeName) === c ? c = b : (c = d.cloneNode(!1), b ? a.insertBefore(c, b) : a.appendChild(c));
                                    return c;
                                }
                                function r(a) {
                                    for (var b; a;)
                                        b = a.nextSibling, $b(a), a = b;
                                }
                                function q(a) {
                                    var b = w && w[0], c = A && A[0];
                                    if (b || c)
                                        for (; a && (a === b || a === c || 8 === a.nodeType || 'option' === ra(a) && '' === a.value);)
                                            a = a.nextSibling;
                                    return a;
                                }
                                function v() {
                                    var a = D && x.readValue();
                                    D = E.getOptions();
                                    var b = {}, d = g[0].firstChild;
                                    z && g.prepend(w);
                                    d = q(d);
                                    D.items.forEach(function (a) {
                                        var f, h;
                                        y(a.group) ? (f = b[a.group], f || (f = m(g[0], d, 'optgroup', e), d = f.nextSibling, f.label = a.group, f = b[a.group] = {
                                            groupElement: f,
                                            currentOptionElement: f.firstChild
                                        }), h = m(f.groupElement, f.currentOptionElement, 'option', c), l(a, h), f.currentOptionElement = h.nextSibling) : (h = m(g[0], d, 'option', c), l(a, h), d = h.nextSibling);
                                    });
                                    Object.keys(b).forEach(function (a) {
                                        r(b[a].currentOptionElement);
                                    });
                                    r(d);
                                    t.$render();
                                    if (!t.$isEmpty(a)) {
                                        var f = x.readValue();
                                        (E.trackBy || p ? oa(a, f) : a === f) || (t.$setViewValue(f), t.$render());
                                    }
                                }
                                var x = k[0], t = k[1], p = h.multiple, w;
                                k = 0;
                                for (var u = g.children(), B = u.length; k < B; k++)
                                    if ('' === u[k].value) {
                                        w = u.eq(k);
                                        break;
                                    }
                                var z = !!w, A = C(c.cloneNode(!1));
                                A.val('?');
                                var D, E = d(h.ngOptions, g, b);
                                p ? (t.$isEmpty = function (a) {
                                    return !a || 0 === a.length;
                                }, x.writeValue = function (a) {
                                    D.items.forEach(function (a) {
                                        a.element.selected = !1;
                                    });
                                    a && a.forEach(function (a) {
                                        (a = D.getOptionFromViewValue(a)) && !a.disabled && (a.element.selected = !0);
                                    });
                                }, x.readValue = function () {
                                    var a = g.val() || [], b = [];
                                    n(a, function (a) {
                                        (a = D.selectValueMap[a]) && !a.disabled && b.push(D.getViewValueFromOption(a));
                                    });
                                    return b;
                                }, E.trackBy && b.$watchCollection(function () {
                                    if (L(t.$viewValue))
                                        return t.$viewValue.map(function (a) {
                                            return E.getTrackByValue(a);
                                        });
                                }, function () {
                                    t.$render();
                                })) : (x.writeValue = function (a) {
                                    var b = D.getOptionFromViewValue(a);
                                    b && !b.disabled ? g[0].value !== b.selectValue && (A.remove(), z || w.remove(), g[0].value = b.selectValue, b.element.selected = !0, b.element.setAttribute('selected', 'selected')) : null === a || z ? (A.remove(), z || g.prepend(w), g.val(''), w.prop('selected', !0), w.attr('selected', !0)) : (z || w.remove(), g.prepend(A), g.val('?'), A.prop('selected', !0), A.attr('selected', !0));
                                }, x.readValue = function () {
                                    var a = D.selectValueMap[g.val()];
                                    return a && !a.disabled ? (z || w.remove(), A.remove(), D.getViewValueFromOption(a)) : null;
                                }, E.trackBy && b.$watch(function () {
                                    return E.getTrackByValue(t.$viewValue);
                                }, function () {
                                    t.$render();
                                }));
                                z ? (w.remove(), a(w)(b), w.removeClass('ng-scope')) : w = C(c.cloneNode(!1));
                                v();
                                b.$watchCollection(E.getWatchables, v);
                            }
                        }
                    };
                }
            ], Ie = [
                '$locale',
                '$interpolate',
                '$log',
                function (a, b, d) {
                    var c = /{}/g, e = /^when(Minus)?(.+)$/;
                    return {
                        link: function (f, g, h) {
                            function k(a) {
                                g.text(a || '');
                            }
                            var l = h.count, m = h.$attr.when && g.attr(h.$attr.when), r = h.offset || 0, q = f.$eval(m) || {}, v = {}, y = b.startSymbol(), t = b.endSymbol(), p = y + l + '-' + r + t, w = ia.noop, u;
                            n(h, function (a, b) {
                                var c = e.exec(b);
                                c && (c = (c[1] ? '-' : '') + G(c[2]), q[c] = g.attr(h.$attr[b]));
                            });
                            n(q, function (a, d) {
                                v[d] = b(a.replace(c, p));
                            });
                            f.$watch(l, function (b) {
                                var c = parseFloat(b), e = isNaN(c);
                                e || c in q || (c = a.pluralCat(c - r));
                                c === u || e && N(u) && isNaN(u) || (w(), e = v[c], x(e) ? (null != b && d.debug('ngPluralize: no rule defined for \'' + c + '\' in ' + m), w = B, k()) : w = f.$watch(e, k), u = c);
                            });
                        }
                    };
                }
            ], Je = [
                '$parse',
                '$animate',
                function (a, b) {
                    var d = H('ngRepeat'), c = function (a, b, c, d, k, l, m) {
                            a[c] = d;
                            k && (a[k] = l);
                            a.$index = b;
                            a.$first = 0 === b;
                            a.$last = b === m - 1;
                            a.$middle = !(a.$first || a.$last);
                            a.$odd = !(a.$even = 0 === (b & 1));
                        };
                    return {
                        restrict: 'A',
                        multiElement: !0,
                        transclude: 'element',
                        priority: 1000,
                        terminal: !0,
                        $$tlb: !0,
                        compile: function (e, f) {
                            var g = f.ngRepeat, h = W.createComment(' end ngRepeat: ' + g + ' '), k = g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                            if (!k)
                                throw d('iexp', g);
                            var l = k[1], m = k[2], r = k[3], q = k[4], k = l.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                            if (!k)
                                throw d('iidexp', l);
                            var x = k[3] || k[1], y = k[2];
                            if (r && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))
                                throw d('badident', r);
                            var t, p, w, u, B = { $id: Fa };
                            q ? t = a(q) : (w = function (a, b) {
                                return Fa(b);
                            }, u = function (a) {
                                return a;
                            });
                            return function (a, e, f, k, l) {
                                t && (p = function (b, c, d) {
                                    y && (B[y] = b);
                                    B[x] = c;
                                    B.$index = d;
                                    return t(a, B);
                                });
                                var q = Z();
                                a.$watchCollection(m, function (f) {
                                    var k, m, s = e[0], t, B = Z(), D, E, H, F, L, G, N;
                                    r && (a[r] = f);
                                    if (Ca(f))
                                        L = f, m = p || w;
                                    else
                                        for (N in m = p || u, L = [], f)
                                            sa.call(f, N) && '$' !== N.charAt(0) && L.push(N);
                                    D = L.length;
                                    N = Array(D);
                                    for (k = 0; k < D; k++)
                                        if (E = f === L ? k : L[k], H = f[E], F = m(E, H, k), q[F])
                                            G = q[F], delete q[F], B[F] = G, N[k] = G;
                                        else {
                                            if (B[F])
                                                throw n(N, function (a) {
                                                    a && a.scope && (q[a.id] = a);
                                                }), d('dupes', g, F, H);
                                            N[k] = {
                                                id: F,
                                                scope: v,
                                                clone: v
                                            };
                                            B[F] = !0;
                                        }
                                    for (t in q) {
                                        G = q[t];
                                        F = tb(G.clone);
                                        b.leave(F);
                                        if (F[0].parentNode)
                                            for (k = 0, m = F.length; k < m; k++)
                                                F[k].$$NG_REMOVED = !0;
                                        G.scope.$destroy();
                                    }
                                    for (k = 0; k < D; k++)
                                        if (E = f === L ? k : L[k], H = f[E], G = N[k], G.scope) {
                                            t = s;
                                            do
                                                t = t.nextSibling;
                                            while (t && t.$$NG_REMOVED);
                                            G.clone[0] != t && b.move(tb(G.clone), null, C(s));
                                            s = G.clone[G.clone.length - 1];
                                            c(G.scope, k, x, H, y, E, D);
                                        } else
                                            l(function (a, d) {
                                                G.scope = d;
                                                var e = h.cloneNode(!1);
                                                a[a.length++] = e;
                                                b.enter(a, null, C(s));
                                                s = e;
                                                G.clone = a;
                                                B[G.id] = G;
                                                c(G.scope, k, x, H, y, E, D);
                                            });
                                    q = B;
                                });
                            };
                        }
                    };
                }
            ], Ke = [
                '$animate',
                function (a) {
                    return {
                        restrict: 'A',
                        multiElement: !0,
                        link: function (b, d, c) {
                            b.$watch(c.ngShow, function (b) {
                                a[b ? 'removeClass' : 'addClass'](d, 'ng-hide', { tempClasses: 'ng-hide-animate' });
                            });
                        }
                    };
                }
            ], De = [
                '$animate',
                function (a) {
                    return {
                        restrict: 'A',
                        multiElement: !0,
                        link: function (b, d, c) {
                            b.$watch(c.ngHide, function (b) {
                                a[b ? 'addClass' : 'removeClass'](d, 'ng-hide', { tempClasses: 'ng-hide-animate' });
                            });
                        }
                    };
                }
            ], Le = Ma(function (a, b, d) {
                a.$watch(d.ngStyle, function (a, d) {
                    d && a !== d && n(d, function (a, c) {
                        b.css(c, '');
                    });
                    a && b.css(a);
                }, !0);
            }), Me = [
                '$animate',
                function (a) {
                    return {
                        require: 'ngSwitch',
                        controller: [
                            '$scope',
                            function () {
                                this.cases = {};
                            }
                        ],
                        link: function (b, d, c, e) {
                            var f = [], g = [], h = [], k = [], l = function (a, b) {
                                    return function () {
                                        a.splice(b, 1);
                                    };
                                };
                            b.$watch(c.ngSwitch || c.on, function (b) {
                                var c, d;
                                c = 0;
                                for (d = h.length; c < d; ++c)
                                    a.cancel(h[c]);
                                c = h.length = 0;
                                for (d = k.length; c < d; ++c) {
                                    var q = tb(g[c].clone);
                                    k[c].$destroy();
                                    (h[c] = a.leave(q)).then(l(h, c));
                                }
                                g.length = 0;
                                k.length = 0;
                                (f = e.cases['!' + b] || e.cases['?']) && n(f, function (b) {
                                    b.transclude(function (c, d) {
                                        k.push(d);
                                        var e = b.element;
                                        c[c.length++] = W.createComment(' end ngSwitchWhen: ');
                                        g.push({ clone: c });
                                        a.enter(c, e.parent(), e);
                                    });
                                });
                            });
                        }
                    };
                }
            ], Ne = Ma({
                transclude: 'element',
                priority: 1200,
                require: '^ngSwitch',
                multiElement: !0,
                link: function (a, b, d, c, e) {
                    c.cases['!' + d.ngSwitchWhen] = c.cases['!' + d.ngSwitchWhen] || [];
                    c.cases['!' + d.ngSwitchWhen].push({
                        transclude: e,
                        element: b
                    });
                }
            }), Oe = Ma({
                transclude: 'element',
                priority: 1200,
                require: '^ngSwitch',
                multiElement: !0,
                link: function (a, b, d, c, e) {
                    c.cases['?'] = c.cases['?'] || [];
                    c.cases['?'].push({
                        transclude: e,
                        element: b
                    });
                }
            }), Rg = H('ngTransclude'), Qe = Ma({
                restrict: 'EAC',
                link: function (a, b, d, c, e) {
                    d.ngTransclude === d.$attr.ngTransclude && (d.ngTransclude = '');
                    if (!e)
                        throw Rg('orphan', ta(b));
                    e(function (a) {
                        a.length && (b.empty(), b.append(a));
                    }, null, d.ngTransclude || d.ngTranscludeSlot);
                }
            }), qe = [
                '$templateCache',
                function (a) {
                    return {
                        restrict: 'E',
                        terminal: !0,
                        compile: function (b, d) {
                            'text/ng-template' == d.type && a.put(d.id, b[0].text);
                        }
                    };
                }
            ], Sg = {
                $setViewValue: B,
                $render: B
            }, Tg = [
                '$element',
                '$scope',
                '$attrs',
                function (a, b, d) {
                    var c = this, e = new Ua();
                    c.ngModelCtrl = Sg;
                    c.unknownOption = C(W.createElement('option'));
                    c.renderUnknownOption = function (b) {
                        b = '? ' + Fa(b) + ' ?';
                        c.unknownOption.val(b);
                        a.prepend(c.unknownOption);
                        a.val(b);
                    };
                    b.$on('$destroy', function () {
                        c.renderUnknownOption = B;
                    });
                    c.removeUnknownOption = function () {
                        c.unknownOption.parent() && c.unknownOption.remove();
                    };
                    c.readValue = function () {
                        c.removeUnknownOption();
                        return a.val();
                    };
                    c.writeValue = function (b) {
                        c.hasOption(b) ? (c.removeUnknownOption(), a.val(b), '' === b && c.emptyOption.prop('selected', !0)) : null == b && c.emptyOption ? (c.removeUnknownOption(), a.val('')) : c.renderUnknownOption(b);
                    };
                    c.addOption = function (a, b) {
                        if (8 !== b[0].nodeType) {
                            Ta(a, '"option value"');
                            '' === a && (c.emptyOption = b);
                            var d = e.get(a) || 0;
                            e.put(a, d + 1);
                            c.ngModelCtrl.$render();
                            b[0].hasAttribute('selected') && (b[0].selected = !0);
                        }
                    };
                    c.removeOption = function (a) {
                        var b = e.get(a);
                        b && (1 === b ? (e.remove(a), '' === a && (c.emptyOption = v)) : e.put(a, b - 1));
                    };
                    c.hasOption = function (a) {
                        return !!e.get(a);
                    };
                    c.registerOption = function (a, b, d, e, l) {
                        if (e) {
                            var m;
                            d.$observe('value', function (a) {
                                y(m) && c.removeOption(m);
                                m = a;
                                c.addOption(a, b);
                            });
                        } else
                            l ? a.$watch(l, function (a, e) {
                                d.$set('value', a);
                                e !== a && c.removeOption(e);
                                c.addOption(a, b);
                            }) : c.addOption(d.value, b);
                        b.on('$destroy', function () {
                            c.removeOption(d.value);
                            c.ngModelCtrl.$render();
                        });
                    };
                }
            ], re = function () {
                return {
                    restrict: 'E',
                    require: [
                        'select',
                        '?ngModel'
                    ],
                    controller: Tg,
                    priority: 1,
                    link: {
                        pre: function (a, b, d, c) {
                            var e = c[1];
                            if (e) {
                                var f = c[0];
                                f.ngModelCtrl = e;
                                b.on('change', function () {
                                    a.$apply(function () {
                                        e.$setViewValue(f.readValue());
                                    });
                                });
                                if (d.multiple) {
                                    f.readValue = function () {
                                        var a = [];
                                        n(b.find('option'), function (b) {
                                            b.selected && a.push(b.value);
                                        });
                                        return a;
                                    };
                                    f.writeValue = function (a) {
                                        var c = new Ua(a);
                                        n(b.find('option'), function (a) {
                                            a.selected = y(c.get(a.value));
                                        });
                                    };
                                    var g, h = NaN;
                                    a.$watch(function () {
                                        h !== e.$viewValue || oa(g, e.$viewValue) || (g = na(e.$viewValue), e.$render());
                                        h = e.$viewValue;
                                    });
                                    e.$isEmpty = function (a) {
                                        return !a || 0 === a.length;
                                    };
                                }
                            }
                        },
                        post: function (a, b, d, c) {
                            var e = c[1];
                            if (e) {
                                var f = c[0];
                                e.$render = function () {
                                    f.writeValue(e.$viewValue);
                                };
                            }
                        }
                    }
                };
            }, te = [
                '$interpolate',
                function (a) {
                    return {
                        restrict: 'E',
                        priority: 100,
                        compile: function (b, d) {
                            if (y(d.value))
                                var c = a(d.value, !0);
                            else {
                                var e = a(b.text(), !0);
                                e || d.$set('value', b.text());
                            }
                            return function (a, b, d) {
                                var k = b.parent();
                                (k = k.data('$selectController') || k.parent().data('$selectController')) && k.registerOption(a, b, d, c, e);
                            };
                        }
                    };
                }
            ], se = ba({
                restrict: 'E',
                terminal: !1
            }), Hc = function () {
                return {
                    restrict: 'A',
                    require: '?ngModel',
                    link: function (a, b, d, c) {
                        c && (d.required = !0, c.$validators.required = function (a, b) {
                            return !d.required || !c.$isEmpty(b);
                        }, d.$observe('required', function () {
                            c.$validate();
                        }));
                    }
                };
            }, Gc = function () {
                return {
                    restrict: 'A',
                    require: '?ngModel',
                    link: function (a, b, d, c) {
                        if (c) {
                            var e, f = d.ngPattern || d.pattern;
                            d.$observe('pattern', function (a) {
                                F(a) && 0 < a.length && (a = new RegExp('^' + a + '$'));
                                if (a && !a.test)
                                    throw H('ngPattern')('noregexp', f, a, ta(b));
                                e = a || v;
                                c.$validate();
                            });
                            c.$validators.pattern = function (a, b) {
                                return c.$isEmpty(b) || x(e) || e.test(b);
                            };
                        }
                    }
                };
            }, Jc = function () {
                return {
                    restrict: 'A',
                    require: '?ngModel',
                    link: function (a, b, d, c) {
                        if (c) {
                            var e = -1;
                            d.$observe('maxlength', function (a) {
                                a = ca(a);
                                e = isNaN(a) ? -1 : a;
                                c.$validate();
                            });
                            c.$validators.maxlength = function (a, b) {
                                return 0 > e || c.$isEmpty(b) || b.length <= e;
                            };
                        }
                    }
                };
            }, Ic = function () {
                return {
                    restrict: 'A',
                    require: '?ngModel',
                    link: function (a, b, d, c) {
                        if (c) {
                            var e = 0;
                            d.$observe('minlength', function (a) {
                                e = ca(a) || 0;
                                c.$validate();
                            });
                            c.$validators.minlength = function (a, b) {
                                return c.$isEmpty(b) || b.length >= e;
                            };
                        }
                    }
                };
            };
        O.angular.bootstrap ? console.log('WARNING: Tried to load angular more than once.') : (je(), le(ia), ia.module('ngLocale', [], [
            '$provide',
            function (a) {
                function b(a) {
                    a += '';
                    var b = a.indexOf('.');
                    return -1 == b ? 0 : a.length - b - 1;
                }
                a.value('$locale', {
                    DATETIME_FORMATS: {
                        AMPMS: [
                            'AM',
                            'PM'
                        ],
                        DAY: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
                        ERANAMES: [
                            'Before Christ',
                            'Anno Domini'
                        ],
                        ERAS: [
                            'BC',
                            'AD'
                        ],
                        FIRSTDAYOFWEEK: 6,
                        MONTH: 'January February March April May June July August September October November December'.split(' '),
                        SHORTDAY: 'Sun Mon Tue Wed Thu Fri Sat'.split(' '),
                        SHORTMONTH: 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '),
                        STANDALONEMONTH: 'January February March April May June July August September October November December'.split(' '),
                        WEEKENDRANGE: [
                            5,
                            6
                        ],
                        fullDate: 'EEEE, MMMM d, y',
                        longDate: 'MMMM d, y',
                        medium: 'MMM d, y h:mm:ss a',
                        mediumDate: 'MMM d, y',
                        mediumTime: 'h:mm:ss a',
                        'short': 'M/d/yy h:mm a',
                        shortDate: 'M/d/yy',
                        shortTime: 'h:mm a'
                    },
                    NUMBER_FORMATS: {
                        CURRENCY_SYM: '$',
                        DECIMAL_SEP: '.',
                        GROUP_SEP: ',',
                        PATTERNS: [
                            {
                                gSize: 3,
                                lgSize: 3,
                                maxFrac: 3,
                                minFrac: 0,
                                minInt: 1,
                                negPre: '-',
                                negSuf: '',
                                posPre: '',
                                posSuf: ''
                            },
                            {
                                gSize: 3,
                                lgSize: 3,
                                maxFrac: 2,
                                minFrac: 2,
                                minInt: 1,
                                negPre: '-\xA4',
                                negSuf: '',
                                posPre: '\xA4',
                                posSuf: ''
                            }
                        ]
                    },
                    id: 'en-us',
                    localeID: 'en_US',
                    pluralCat: function (a, c) {
                        var e = a | 0, f = c;
                        v === f && (f = Math.min(b(a), 3));
                        Math.pow(10, f);
                        return 1 == e && 0 == f ? 'one' : 'other';
                    }
                });
            }
        ]), C(W).ready(function () {
            fe(W, Ac);
        }));
    }(window, document));
    !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
    return angular;
});
(function () {
    define('angular-route', [
        'angular',
        'angular'
    ], function (angular) {
        'use strict';
        var ngRouteModule = angular.module('ngRoute', ['ng']).provider('$route', $RouteProvider), $routeMinErr = angular.$$minErr('ngRoute');
        function $RouteProvider() {
            function inherit(parent, extra) {
                return angular.extend(Object.create(parent), extra);
            }
            var routes = {};
            this.when = function (path, route) {
                var routeCopy = angular.copy(route);
                if (angular.isUndefined(routeCopy.reloadOnSearch)) {
                    routeCopy.reloadOnSearch = true;
                }
                if (angular.isUndefined(routeCopy.caseInsensitiveMatch)) {
                    routeCopy.caseInsensitiveMatch = this.caseInsensitiveMatch;
                }
                routes[path] = angular.extend(routeCopy, path && pathRegExp(path, routeCopy));
                if (path) {
                    var redirectPath = path[path.length - 1] == '/' ? path.substr(0, path.length - 1) : path + '/';
                    routes[redirectPath] = angular.extend({ redirectTo: path }, pathRegExp(redirectPath, routeCopy));
                }
                return this;
            };
            this.caseInsensitiveMatch = false;
            function pathRegExp(path, opts) {
                var insensitive = opts.caseInsensitiveMatch, ret = {
                        originalPath: path,
                        regexp: path
                    }, keys = ret.keys = [];
                path = path.replace(/([().])/g, '\\$1').replace(/(\/)?:(\w+)([\?\*])?/g, function (_, slash, key, option) {
                    var optional = option === '?' ? option : null;
                    var star = option === '*' ? option : null;
                    keys.push({
                        name: key,
                        optional: !!optional
                    });
                    slash = slash || '';
                    return '' + (optional ? '' : slash) + '(?:' + (optional ? slash : '') + (star && '(.+?)' || '([^/]+)') + (optional || '') + ')' + (optional || '');
                }).replace(/([\/$\*])/g, '\\$1');
                ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
                return ret;
            }
            this.otherwise = function (params) {
                if (typeof params === 'string') {
                    params = { redirectTo: params };
                }
                this.when(null, params);
                return this;
            };
            this.$get = [
                '$rootScope',
                '$location',
                '$routeParams',
                '$q',
                '$injector',
                '$templateRequest',
                '$sce',
                function ($rootScope, $location, $routeParams, $q, $injector, $templateRequest, $sce) {
                    var forceReload = false, preparedRoute, preparedRouteIsUpdateOnly, $route = {
                            routes: routes,
                            reload: function () {
                                forceReload = true;
                                var fakeLocationEvent = {
                                    defaultPrevented: false,
                                    preventDefault: function fakePreventDefault() {
                                        this.defaultPrevented = true;
                                        forceReload = false;
                                    }
                                };
                                $rootScope.$evalAsync(function () {
                                    prepareRoute(fakeLocationEvent);
                                    if (!fakeLocationEvent.defaultPrevented)
                                        commitRoute();
                                });
                            },
                            updateParams: function (newParams) {
                                if (this.current && this.current.$$route) {
                                    newParams = angular.extend({}, this.current.params, newParams);
                                    $location.path(interpolate(this.current.$$route.originalPath, newParams));
                                    $location.search(newParams);
                                } else {
                                    throw $routeMinErr('norout', 'Tried updating route when with no current route');
                                }
                            }
                        };
                    $rootScope.$on('$locationChangeStart', prepareRoute);
                    $rootScope.$on('$locationChangeSuccess', commitRoute);
                    return $route;
                    function switchRouteMatcher(on, route) {
                        var keys = route.keys, params = {};
                        if (!route.regexp)
                            return null;
                        var m = route.regexp.exec(on);
                        if (!m)
                            return null;
                        for (var i = 1, len = m.length; i < len; ++i) {
                            var key = keys[i - 1];
                            var val = m[i];
                            if (key && val) {
                                params[key.name] = val;
                            }
                        }
                        return params;
                    }
                    function prepareRoute($locationEvent) {
                        var lastRoute = $route.current;
                        preparedRoute = parseRoute();
                        preparedRouteIsUpdateOnly = preparedRoute && lastRoute && preparedRoute.$$route === lastRoute.$$route && angular.equals(preparedRoute.pathParams, lastRoute.pathParams) && !preparedRoute.reloadOnSearch && !forceReload;
                        if (!preparedRouteIsUpdateOnly && (lastRoute || preparedRoute)) {
                            if ($rootScope.$broadcast('$routeChangeStart', preparedRoute, lastRoute).defaultPrevented) {
                                if ($locationEvent) {
                                    $locationEvent.preventDefault();
                                }
                            }
                        }
                    }
                    function commitRoute() {
                        var lastRoute = $route.current;
                        var nextRoute = preparedRoute;
                        if (preparedRouteIsUpdateOnly) {
                            lastRoute.params = nextRoute.params;
                            angular.copy(lastRoute.params, $routeParams);
                            $rootScope.$broadcast('$routeUpdate', lastRoute);
                        } else if (nextRoute || lastRoute) {
                            forceReload = false;
                            $route.current = nextRoute;
                            if (nextRoute) {
                                if (nextRoute.redirectTo) {
                                    if (angular.isString(nextRoute.redirectTo)) {
                                        $location.path(interpolate(nextRoute.redirectTo, nextRoute.params)).search(nextRoute.params).replace();
                                    } else {
                                        $location.url(nextRoute.redirectTo(nextRoute.pathParams, $location.path(), $location.search())).replace();
                                    }
                                }
                            }
                            $q.when(nextRoute).then(function () {
                                if (nextRoute) {
                                    var locals = angular.extend({}, nextRoute.resolve), template, templateUrl;
                                    angular.forEach(locals, function (value, key) {
                                        locals[key] = angular.isString(value) ? $injector.get(value) : $injector.invoke(value, null, null, key);
                                    });
                                    if (angular.isDefined(template = nextRoute.template)) {
                                        if (angular.isFunction(template)) {
                                            template = template(nextRoute.params);
                                        }
                                    } else if (angular.isDefined(templateUrl = nextRoute.templateUrl)) {
                                        if (angular.isFunction(templateUrl)) {
                                            templateUrl = templateUrl(nextRoute.params);
                                        }
                                        if (angular.isDefined(templateUrl)) {
                                            nextRoute.loadedTemplateUrl = $sce.valueOf(templateUrl);
                                            template = $templateRequest(templateUrl);
                                        }
                                    }
                                    if (angular.isDefined(template)) {
                                        locals['$template'] = template;
                                    }
                                    return $q.all(locals);
                                }
                            }).then(function (locals) {
                                if (nextRoute == $route.current) {
                                    if (nextRoute) {
                                        nextRoute.locals = locals;
                                        angular.copy(nextRoute.params, $routeParams);
                                    }
                                    $rootScope.$broadcast('$routeChangeSuccess', nextRoute, lastRoute);
                                }
                            }, function (error) {
                                if (nextRoute == $route.current) {
                                    $rootScope.$broadcast('$routeChangeError', nextRoute, lastRoute, error);
                                }
                            });
                        }
                    }
                    function parseRoute() {
                        var params, match;
                        angular.forEach(routes, function (route, path) {
                            if (!match && (params = switchRouteMatcher($location.path(), route))) {
                                match = inherit(route, {
                                    params: angular.extend({}, $location.search(), params),
                                    pathParams: params
                                });
                                match.$$route = route;
                            }
                        });
                        return match || routes[null] && inherit(routes[null], {
                            params: {},
                            pathParams: {}
                        });
                    }
                    function interpolate(string, params) {
                        var result = [];
                        angular.forEach((string || '').split(':'), function (segment, i) {
                            if (i === 0) {
                                result.push(segment);
                            } else {
                                var segmentMatch = segment.match(/(\w+)(?:[?*])?(.*)/);
                                var key = segmentMatch[1];
                                result.push(params[key]);
                                result.push(segmentMatch[2] || '');
                                delete params[key];
                            }
                        });
                        return result.join('');
                    }
                }
            ];
        }
        ngRouteModule.provider('$routeParams', $RouteParamsProvider);
        function $RouteParamsProvider() {
            this.$get = function () {
                return {};
            };
        }
        ngRouteModule.directive('ngView', ngViewFactory);
        ngRouteModule.directive('ngView', ngViewFillContentFactory);
        ngViewFactory.$inject = [
            '$route',
            '$anchorScroll',
            '$animate'
        ];
        function ngViewFactory($route, $anchorScroll, $animate) {
            return {
                restrict: 'ECA',
                terminal: true,
                priority: 400,
                transclude: 'element',
                link: function (scope, $element, attr, ctrl, $transclude) {
                    var currentScope, currentElement, previousLeaveAnimation, autoScrollExp = attr.autoscroll, onloadExp = attr.onload || '';
                    scope.$on('$routeChangeSuccess', update);
                    update();
                    function cleanupLastView() {
                        if (previousLeaveAnimation) {
                            $animate.cancel(previousLeaveAnimation);
                            previousLeaveAnimation = null;
                        }
                        if (currentScope) {
                            currentScope.$destroy();
                            currentScope = null;
                        }
                        if (currentElement) {
                            previousLeaveAnimation = $animate.leave(currentElement);
                            previousLeaveAnimation.then(function () {
                                previousLeaveAnimation = null;
                            });
                            currentElement = null;
                        }
                    }
                    function update() {
                        var locals = $route.current && $route.current.locals, template = locals && locals.$template;
                        if (angular.isDefined(template)) {
                            var newScope = scope.$new();
                            var current = $route.current;
                            var clone = $transclude(newScope, function (clone) {
                                $animate.enter(clone, null, currentElement || $element).then(function onNgViewEnter() {
                                    if (angular.isDefined(autoScrollExp) && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                                        $anchorScroll();
                                    }
                                });
                                cleanupLastView();
                            });
                            currentElement = clone;
                            currentScope = current.scope = newScope;
                            currentScope.$emit('$viewContentLoaded');
                            currentScope.$eval(onloadExp);
                        } else {
                            cleanupLastView();
                        }
                    }
                }
            };
        }
        ngViewFillContentFactory.$inject = [
            '$compile',
            '$controller',
            '$route'
        ];
        function ngViewFillContentFactory($compile, $controller, $route) {
            return {
                restrict: 'ECA',
                priority: -400,
                link: function (scope, $element) {
                    var current = $route.current, locals = current.locals;
                    $element.html(locals.$template);
                    var link = $compile($element.contents());
                    if (current.controller) {
                        locals.$scope = scope;
                        var controller = $controller(current.controller, locals);
                        if (current.controllerAs) {
                            scope[current.controllerAs] = controller;
                        }
                        $element.data('$ngControllerController', controller);
                        $element.children().data('$ngControllerController', controller);
                    }
                    scope[current.resolveAs || '$resolve'] = locals;
                    link(scope);
                }
            };
        }
    });
}.call(this));
define('appController', ['angular'], function (angular) {
    'use strict';
    var appControllers = angular.module('app.controllers', []);
    appControllers.controller('mainController', function ($scope, $location, $rootScope, $compile) {
        var goTop = $('.go-top');
        var sTop = 0;
        $(document).on('scroll', function () {
            if ($(this).scrollTop() < sTop && $(this).scrollTop() > 168) {
                goTop.addClass('show');
            } else {
                goTop.removeClass('show');
            }
            ;
            sTop = $(this).scrollTop();
        });
        $scope.goTop = function () {
            $('body,html').animate({ scrollTop: 0 }, 300);
        };
    });
    return appControllers;
});
!function (a, b) {
    'object' == typeof module && 'object' == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)
            throw new Error('jQuery requires a window with a document');
        return b(a);
    } : b(a);
}('undefined' != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = '1.11.2', m = function (a, b) {
            return new m.fn.init(a, b);
        }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function (a, b) {
            return b.toUpperCase();
        };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: '',
        length: 0,
        toArray: function () {
            return d.call(this);
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
        },
        pushStack: function (a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function (a, b) {
            return m.each(this, a, b);
        },
        map: function (a) {
            return this.pushStack(m.map(this, function (b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function () {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor(null);
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ('boolean' == typeof g && (j = g, g = arguments[h] || {}, h++), 'object' == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e)
                    a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g;
    }, m.extend({
        expando: 'jQuery' + (l + Math.random()).replace(/\D/g, ''),
        isReady: !0,
        error: function (a) {
            throw new Error(a);
        },
        noop: function () {
        },
        isFunction: function (a) {
            return 'function' === m.type(a);
        },
        isArray: Array.isArray || function (a) {
            return 'array' === m.type(a);
        },
        isWindow: function (a) {
            return null != a && a == a.window;
        },
        isNumeric: function (a) {
            return !m.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a)
                return !1;
            return !0;
        },
        isPlainObject: function (a) {
            var b;
            if (!a || 'object' !== m.type(a) || a.nodeType || m.isWindow(a))
                return !1;
            try {
                if (a.constructor && !j.call(a, 'constructor') && !j.call(a.constructor.prototype, 'isPrototypeOf'))
                    return !1;
            } catch (c) {
                return !1;
            }
            if (k.ownLast)
                for (b in a)
                    return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b);
        },
        type: function (a) {
            return null == a ? a + '' : 'object' == typeof a || 'function' == typeof a ? h[i.call(a)] || 'object' : typeof a;
        },
        globalEval: function (b) {
            b && m.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b);
            })(b);
        },
        camelCase: function (a) {
            return a.replace(o, 'ms-').replace(p, q);
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function (a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1)
                            break;
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1)
                            break;
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1)
                        break;
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1)
                        break;
            return a;
        },
        trim: function (a) {
            return null == a ? '' : (a + '').replace(n, '');
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, 'string' == typeof a ? [a] : a) : f.call(c, a)), c;
        },
        inArray: function (a, b, c) {
            var d;
            if (b) {
                if (g)
                    return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c;
            }
            return -1;
        },
        merge: function (a, b) {
            var c = +b.length, d = 0, e = a.length;
            while (c > d)
                a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d])
                    a[e++] = b[d++];
            return a.length = e, a;
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function (a, b, c) {
            var d, f = 0, g = a.length, h = r(a), i = [];
            if (h)
                for (; g > f; f++)
                    d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a)
                    d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i);
        },
        guid: 1,
        proxy: function (a, b) {
            var c, e, f;
            return 'string' == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)));
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0;
        },
        now: function () {
            return +new Date();
        },
        support: k
    }), m.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (a, b) {
        h['[object ' + b + ']'] = b.toLowerCase();
    });
    function r(a) {
        var b = a.length, c = m.type(a);
        return 'function' === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : 'array' === c || 0 === b || 'number' == typeof b && b > 0 && b - 1 in a;
    }
    var s = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = 'sizzle' + 1 * new Date(), v = a.document, w = 0, x = 0, y = hb(), z = hb(), A = hb(), B = function (a, b) {
                return a === b && (l = !0), 0;
            }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b)
                        return c;
                return -1;
            }, K = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', L = '[\\x20\\t\\r\\n\\f]', M = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', N = M.replace('w', 'w#'), O = '\\[' + L + '*(' + M + ')(?:' + L + '*([*^$|!~]?=)' + L + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + N + '))|)' + L + '*\\]', P = ':(' + M + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + O + ')*)|.*)\\)|)', Q = new RegExp(L + '+', 'g'), R = new RegExp('^' + L + '+|((?:^|[^\\\\])(?:\\\\.)*)' + L + '+$', 'g'), S = new RegExp('^' + L + '*,' + L + '*'), T = new RegExp('^' + L + '*([>+~]|' + L + ')' + L + '*'), U = new RegExp('=' + L + '*([^\\]\'"]*?)' + L + '*\\]', 'g'), V = new RegExp(P), W = new RegExp('^' + N + '$'), X = {
                ID: new RegExp('^#(' + M + ')'),
                CLASS: new RegExp('^\\.(' + M + ')'),
                TAG: new RegExp('^(' + M.replace('w', 'w*') + ')'),
                ATTR: new RegExp('^' + O),
                PSEUDO: new RegExp('^' + P),
                CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + L + '*(even|odd|(([+-]|)(\\d*)n|)' + L + '*(?:([+-]|)' + L + '*(\\d+)|))' + L + '*\\)|)', 'i'),
                bool: new RegExp('^(?:' + K + ')$', 'i'),
                needsContext: new RegExp('^' + L + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + L + '*((?:-\\d)?\\d*)' + L + '*\\)|)(?=[^-]|$)', 'i')
            }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp('\\\\([\\da-f]{1,6}' + L + '?|(' + L + ')|.)', 'ig'), db = function (a, b, c) {
                var d = '0x' + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
            }, eb = function () {
                m();
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (fb) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b));
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1;
                }
            };
        }
        function gb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, 'string' != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)
                return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode)
                                return d;
                            if (h.id === j)
                                return d.push(h), d;
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                            return d.push(h), d;
                    } else {
                        if (f[2])
                            return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName)
                            return H.apply(d, b.getElementsByClassName(j)), d;
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && 'object' !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute('id')) ? s = r.replace(bb, '\\$&') : b.setAttribute('id', s), s = '[id=\'' + s + '\'] ', l = o.length;
                        while (l--)
                            o[l] = s + rb(o[l]);
                        w = ab.test(a) && pb(b.parentNode) || b, x = o.join(',');
                    }
                    if (x)
                        try {
                            return H.apply(d, w.querySelectorAll(x)), d;
                        } catch (y) {
                        } finally {
                            r || b.removeAttribute('id');
                        }
                }
            }
            return i(a.replace(R, '$1'), b, d, e);
        }
        function hb() {
            var a = [];
            function b(c, e) {
                return a.push(c + ' ') > d.cacheLength && delete b[a.shift()], b[c + ' '] = e;
            }
            return b;
        }
        function ib(a) {
            return a[u] = !0, a;
        }
        function jb(a) {
            var b = n.createElement('div');
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function kb(a, b) {
            var c = a.split('|'), e = a.length;
            while (e--)
                d.attrHandle[c[e]] = b;
        }
        function lb(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1;
        }
        function mb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return 'input' === c && b.type === a;
            };
        }
        function nb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ('input' === c || 'button' === c) && b.type === a;
            };
        }
        function ob(a) {
            return ib(function (b) {
                return b = +b, ib(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function pb(a) {
            return a && 'undefined' != typeof a.getElementsByTagName && a;
        }
        c = gb.support = {}, f = gb.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? 'HTML' !== b.nodeName : !1;
        }, m = gb.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener('unload', eb, !1) : e.attachEvent && e.attachEvent('onunload', eb)), p = !f(g), c.attributes = jb(function (a) {
                return a.className = 'i', !a.getAttribute('className');
            }), c.getElementsByTagName = jb(function (a) {
                return a.appendChild(g.createComment('')), !a.getElementsByTagName('*').length;
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function (a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function (a, b) {
                if ('undefined' != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : [];
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    return a.getAttribute('id') === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    var c = 'undefined' != typeof a.getAttributeNode && a.getAttributeNode('id');
                    return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return 'undefined' != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ('*' === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function (a) {
                o.appendChild(a).innerHTML = '<a id=\'' + u + '\'></a><select id=\'' + u + '-\f]\' msallowcapture=\'\'><option selected=\'\'></option></select>', a.querySelectorAll('[msallowcapture^=\'\']').length && q.push('[*^$]=' + L + '*(?:\'\'|"")'), a.querySelectorAll('[selected]').length || q.push('\\[' + L + '*(?:value|' + K + ')'), a.querySelectorAll('[id~=' + u + '-]').length || q.push('~='), a.querySelectorAll(':checked').length || q.push(':checked'), a.querySelectorAll('a#' + u + '+*').length || q.push('.#.+[+~]');
            }), jb(function (a) {
                var b = g.createElement('input');
                b.setAttribute('type', 'hidden'), a.appendChild(b).setAttribute('name', 'D'), a.querySelectorAll('[name=d]').length && q.push('name' + L + '*[*^$|!~]?='), a.querySelectorAll(':enabled').length || q.push(':enabled', ':disabled'), a.querySelectorAll('*,:x'), q.push(',.*:');
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function (a) {
                c.disconnectedMatch = s.call(a, 'div'), s.call(a, '[s!=\'\']:x'), r.push('!=', P);
            }), q = q.length && new RegExp(q.join('|')), r = r.length && new RegExp(r.join('|')), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function (a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1;
            }, B = b ? function (a, b) {
                if (a === b)
                    return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
            } : function (a, b) {
                if (a === b)
                    return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                if (!e || !f)
                    return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)
                    return lb(a, b);
                c = a;
                while (c = c.parentNode)
                    h.unshift(c);
                c = b;
                while (c = c.parentNode)
                    i.unshift(c);
                while (h[d] === i[d])
                    d++;
                return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
            }, g) : n;
        }, gb.matches = function (a, b) {
            return gb(a, null, null, b);
        }, gb.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, '=\'$1\']'), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d;
                } catch (e) {
                }
            return gb(b, n, null, [a]).length > 0;
        }, gb.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, gb.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, gb.error = function (a) {
            throw new Error('Syntax error, unrecognized expression: ' + a);
        }, gb.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = gb.getText = function (a) {
            var b, c = '', d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ('string' == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a);
                } else if (3 === f || 4 === f)
                    return a.nodeValue;
            } else
                while (b = a[d++])
                    c += e(b);
            return c;
        }, d = gb.selectors = {
            cacheLength: 50,
            createPseudo: ib,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                '>': {
                    dir: 'parentNode',
                    first: !0
                },
                ' ': { dir: 'parentNode' },
                '+': {
                    dir: 'previousSibling',
                    first: !0
                },
                '~': { dir: 'previousSibling' }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || '').replace(cb, db), '~=' === a[2] && (a[3] = ' ' + a[3] + ' '), a.slice(0, 4);
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), 'nth' === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ('even' === a[3] || 'odd' === a[3])), a[5] = +(a[7] + a[8] || 'odd' === a[3])) : a[3] && gb.error(a[0]), a;
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || '' : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(')', c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return '*' === a ? function () {
                        return !0;
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function (a) {
                    var b = y[a + ' '];
                    return b || (b = new RegExp('(^|' + L + ')' + a + '(' + L + '|$)')) && y(a, function (a) {
                        return b.test('string' == typeof a.className && a.className || 'undefined' != typeof a.getAttribute && a.getAttribute('class') || '');
                    });
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = gb.attr(d, a);
                        return null == e ? '!=' === b : b ? (e += '', '=' === b ? e === c : '!=' === b ? e !== c : '^=' === b ? c && 0 === e.indexOf(c) : '*=' === b ? c && e.indexOf(c) > -1 : '$=' === b ? c && e.slice(-c.length) === c : '~=' === b ? (' ' + e.replace(Q, ' ') + ' ').indexOf(c) > -1 : '|=' === b ? e === c || e.slice(0, c.length + 1) === c + '-' : !1) : !0;
                    };
                },
                CHILD: function (a, b, c, d, e) {
                    var f = 'nth' !== a.slice(0, 3), g = 'last' !== a.slice(-4), h = 'of-type' === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode;
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? 'nextSibling' : 'previousSibling', q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = 'only' === a && !o && 'nextSibling';
                                }
                                return !0;
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [
                                            w,
                                            n,
                                            m
                                        ];
                                        break;
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [
                                            w,
                                            m
                                        ]), l === b))
                                        break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error('unsupported pseudo: ' + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [
                        a,
                        a,
                        '',
                        b
                    ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = J(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function (a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: ib(function (a) {
                    var b = [], c = [], d = h(a.replace(R, '$1'));
                    return d[u] ? ib(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: ib(function (a) {
                    return function (b) {
                        return gb(a, b).length > 0;
                    };
                }),
                contains: ib(function (a) {
                    return a = a.replace(cb, db), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: ib(function (a) {
                    return W.test(a || '') || gb.error('unsupported lang: ' + a), a = a.replace(cb, db).toLowerCase(), function (b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute('xml:lang') || b.getAttribute('lang'))
                                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + '-');
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function (a) {
                    return a === o;
                },
                focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function (a) {
                    return a.disabled === !1;
                },
                disabled: function (a) {
                    return a.disabled === !0;
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return 'input' === b && !!a.checked || 'option' === b && !!a.selected;
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0;
                },
                parent: function (a) {
                    return !d.pseudos.empty(a);
                },
                header: function (a) {
                    return Z.test(a.nodeName);
                },
                input: function (a) {
                    return Y.test(a.nodeName);
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return 'input' === b && 'button' === a.type || 'button' === b;
                },
                text: function (a) {
                    var b;
                    return 'input' === a.nodeName.toLowerCase() && 'text' === a.type && (null == (b = a.getAttribute('type')) || 'text' === b.toLowerCase());
                },
                first: ob(function () {
                    return [0];
                }),
                last: ob(function (a, b) {
                    return [b - 1];
                }),
                eq: ob(function (a, b, c) {
                    return [0 > c ? c + b : c];
                }),
                even: ob(function (a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a;
                }),
                odd: ob(function (a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a;
                }),
                lt: ob(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)
                        a.push(d);
                    return a;
                }),
                gt: ob(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)
                        a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
            d.pseudos[b] = mb(b);
        for (b in {
                submit: !0,
                reset: !0
            })
            d.pseudos[b] = nb(b);
        function qb() {
        }
        qb.prototype = d.filters = d.pseudos, d.setFilters = new qb(), g = gb.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + ' '];
            if (k)
                return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, ' ')
                }), h = h.slice(c.length));
                for (g in d.filter)
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length));
                if (!c)
                    break;
            }
            return b ? h.length : h ? gb.error(a) : z(a, i).slice(0);
        };
        function rb(a) {
            for (var b = 0, c = a.length, d = ''; c > b; b++)
                d += a[b].value;
            return d;
        }
        function sb(a, b, c) {
            var d = b.dir, e = c && 'parentNode' === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f);
            } : function (b, c, g) {
                var h, i, j = [
                        w,
                        f
                    ];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0;
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g))
                                return !0;
                        }
            };
        }
        function tb(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0;
            } : a[0];
        }
        function ub(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                gb(a, b[d], c);
            return c;
        }
        function vb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g;
        }
        function wb(a, b, c, d, e, f) {
            return d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ub(b || '*', h.nodeType ? [h] : h, []), q = !a || !f && b ? p : vb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = vb(r, n), d(j, [], h, i), k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else
                    r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
            });
        }
        function xb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[' '], i = g ? 1 : 0, k = sb(function (a) {
                        return a === b;
                    }, h, !0), l = sb(function (a) {
                        return J(b, a) > -1;
                    }, h, !0), m = [function (a, c, d) {
                            var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                            return b = null, e;
                        }]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [sb(tb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({ value: ' ' === a[i - 2].type ? '*' : '' })).replace(R, '$1'), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a));
                    }
                    m.push(c);
                }
            return tb(m);
        }
        function yb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                    var l, m, o, p = 0, q = '0', r = f && [], s = [], t = j, u = f || e && d.find.TAG('*', k), v = w += null == t ? 1 : Math.random() || 0.1, x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break;
                                }
                            k && (w = v);
                        }
                        c && ((l = !o && l) && p--, f && r.push(l));
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++])
                            o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--)
                                    r[q] || s[q] || (s[q] = F.call(i));
                            s = vb(s);
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i);
                    }
                    return k && (w = v, j = t), r;
                };
            return c ? ib(f) : f;
        }
        return h = gb.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + ' '];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)
                    f = xb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, yb(e, d)), f.selector = a;
            }
            return f;
        }, i = gb.select = function (a, b, e, f) {
            var i, j, k, l, m, n = 'function' == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && 'ID' === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)
                        return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && rb(j), !a)
                            return H.apply(e, f), e;
                        break;
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e;
        }, c.sortStable = u.split('').sort(B).join('') === u, c.detectDuplicates = !!l, m(), c.sortDetached = jb(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement('div'));
        }), jb(function (a) {
            return a.innerHTML = '<a href=\'#\'></a>', '#' === a.firstChild.getAttribute('href');
        }) || kb('type|href|height|width', function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, 'type' === b.toLowerCase() ? 1 : 2);
        }), c.attributes && jb(function (a) {
            return a.innerHTML = '<input/>', a.firstChild.setAttribute('value', ''), '' === a.firstChild.getAttribute('value');
        }) || kb('value', function (a, b, c) {
            return c || 'input' !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), jb(function (a) {
            return null == a.getAttribute('disabled');
        }) || kb(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), gb;
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[':'] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;
    function w(a, b, c) {
        if (m.isFunction(b))
            return m.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c;
            });
        if (b.nodeType)
            return m.grep(a, function (a) {
                return a === b !== c;
            });
        if ('string' == typeof b) {
            if (v.test(b))
                return m.filter(b, a, c);
            b = m.filter(b, a);
        }
        return m.grep(a, function (a) {
            return m.inArray(a, b) >= 0 !== c;
        });
    }
    m.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ':not(' + a + ')'), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
            return 1 === a.nodeType;
        }));
    }, m.fn.extend({
        find: function (a) {
            var b, c = [], d = this, e = d.length;
            if ('string' != typeof a)
                return this.pushStack(m(a).filter(function () {
                    for (b = 0; e > b; b++)
                        if (m.contains(d[b], this))
                            return !0;
                }));
            for (b = 0; e > b; b++)
                m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + ' ' + a : a, c;
        },
        filter: function (a) {
            return this.pushStack(w(this, a || [], !1));
        },
        not: function (a) {
            return this.pushStack(w(this, a || [], !0));
        },
        is: function (a) {
            return !!w(this, 'string' == typeof a && t.test(a) ? m(a) : a || [], !1).length;
        }
    });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function (a, b) {
            var c, d;
            if (!a)
                return this;
            if ('string' == typeof a) {
                if (c = '<' === a.charAt(0) && '>' === a.charAt(a.length - 1) && a.length >= 3 ? [
                        null,
                        a,
                        null
                    ] : z.exec(a), !c || !c[1] && b)
                    return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                        for (c in b)
                            m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this;
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2])
                        return x.find(a);
                    this.length = 1, this[0] = d;
                }
                return this.context = y, this.selector = a, this;
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? 'undefined' != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this));
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    m.extend({
        dir: function (a, b, c) {
            var d = [], e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)))
                1 === e.nodeType && d.push(e), e = e[b];
            return d;
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), m.fn.extend({
        has: function (a) {
            var b, c = m(a, this), d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b]))
                        return !0;
            });
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || 'string' != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break;
                    }
            return this.pushStack(f.length > 1 ? m.unique(f) : f);
        },
        index: function (a) {
            return a ? 'string' == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    });
    function D(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);
        return a;
    }
    m.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function (a) {
            return m.dir(a, 'parentNode');
        },
        parentsUntil: function (a, b, c) {
            return m.dir(a, 'parentNode', c);
        },
        next: function (a) {
            return D(a, 'nextSibling');
        },
        prev: function (a) {
            return D(a, 'previousSibling');
        },
        nextAll: function (a) {
            return m.dir(a, 'nextSibling');
        },
        prevAll: function (a) {
            return m.dir(a, 'previousSibling');
        },
        nextUntil: function (a, b, c) {
            return m.dir(a, 'nextSibling', c);
        },
        prevUntil: function (a, b, c) {
            return m.dir(a, 'previousSibling', c);
        },
        siblings: function (a) {
            return m.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
            return m.sibling(a.firstChild);
        },
        contents: function (a) {
            return m.nodeName(a, 'iframe') ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes);
        }
    }, function (a, b) {
        m.fn[a] = function (c, d) {
            var e = m.map(this, b, c);
            return 'Until' !== a.slice(-5) && (d = c), d && 'string' == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e);
        };
    });
    var E = /\S+/g, F = {};
    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function (a, c) {
            b[c] = !0;
        }), b;
    }
    m.Callbacks = function (a) {
        a = 'string' == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break;
                    }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable());
            }, k = {
                add: function () {
                    if (h) {
                        var d = h.length;
                        !function f(b) {
                            m.each(b, function (b, c) {
                                var d = m.type(c);
                                'function' === d ? a.unique && k.has(c) || h.push(c) : c && c.length && 'string' !== d && f(c);
                            });
                        }(arguments), b ? e = h.length : c && (g = d, j(c));
                    }
                    return this;
                },
                remove: function () {
                    return h && m.each(arguments, function (a, c) {
                        var d;
                        while ((d = m.inArray(c, h, d)) > -1)
                            h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
                    }), this;
                },
                has: function (a) {
                    return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
                },
                empty: function () {
                    return h = [], e = 0, this;
                },
                disable: function () {
                    return h = i = c = void 0, this;
                },
                disabled: function () {
                    return !h;
                },
                lock: function () {
                    return i = void 0, c || k.disable(), this;
                },
                locked: function () {
                    return !i;
                },
                fireWith: function (a, c) {
                    return !h || d && !i || (c = c || [], c = [
                        a,
                        c.slice ? c.slice() : c
                    ], b ? i.push(c) : j(c)), this;
                },
                fire: function () {
                    return k.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!d;
                }
            };
        return k;
    }, m.extend({
        Deferred: function (a) {
            var b = [
                    [
                        'resolve',
                        'done',
                        m.Callbacks('once memory'),
                        'resolved'
                    ],
                    [
                        'reject',
                        'fail',
                        m.Callbacks('once memory'),
                        'rejected'
                    ],
                    [
                        'notify',
                        'progress',
                        m.Callbacks('memory')
                    ]
                ], c = 'pending', d = {
                    state: function () {
                        return c;
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this;
                    },
                    then: function () {
                        var a = arguments;
                        return m.Deferred(function (c) {
                            m.each(b, function (b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + 'With'](this === d ? c.promise() : this, g ? [a] : arguments);
                                });
                            }), a = null;
                        }).promise();
                    },
                    promise: function (a) {
                        return null != a ? m.extend(a, d) : d;
                    }
                }, e = {};
            return d.pipe = d.then, m.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + 'With'](this === e ? d : this, arguments), this;
                }, e[f[0] + 'With'] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                    };
                }, i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
                    c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise();
        }
    });
    var H;
    m.fn.ready = function (a) {
        return m.ready.promise().done(a), this;
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? m.readyWait++ : m.ready(!0);
        },
        ready: function (a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body)
                    return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler('ready'), m(y).off('ready')));
            }
        }
    });
    function I() {
        y.addEventListener ? (y.removeEventListener('DOMContentLoaded', J, !1), a.removeEventListener('load', J, !1)) : (y.detachEvent('onreadystatechange', J), a.detachEvent('onload', J));
    }
    function J() {
        (y.addEventListener || 'load' === event.type || 'complete' === y.readyState) && (I(), m.ready());
    }
    m.ready.promise = function (b) {
        if (!H)
            if (H = m.Deferred(), 'complete' === y.readyState)
                setTimeout(m.ready);
            else if (y.addEventListener)
                y.addEventListener('DOMContentLoaded', J, !1), a.addEventListener('load', J, !1);
            else {
                y.attachEvent('onreadystatechange', J), a.attachEvent('onload', J);
                var c = !1;
                try {
                    c = null == a.frameElement && y.documentElement;
                } catch (d) {
                }
                c && c.doScroll && !function e() {
                    if (!m.isReady) {
                        try {
                            c.doScroll('left');
                        } catch (a) {
                            return setTimeout(e, 50);
                        }
                        I(), m.ready();
                    }
                }();
            }
        return H.promise(b);
    };
    var K = 'undefined', L;
    for (L in m(k))
        break;
    k.ownLast = '0' !== L, k.inlineBlockNeedsLayout = !1, m(function () {
        var a, b, c, d;
        c = y.getElementsByTagName('body')[0], c && c.style && (b = y.createElement('div'), d = y.createElement('div'), d.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = 'display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1', k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d));
    }), function () {
        var a = y.createElement('div');
        if (null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete a.test;
            } catch (b) {
                k.deleteExpando = !1;
            }
        }
        a = null;
    }(), m.acceptData = function (a) {
        var b = m.noData[(a.nodeName + ' ').toLowerCase()], c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute('classid') === b;
    };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;
    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = 'data-' + b.replace(N, '-$1').toLowerCase();
            if (c = a.getAttribute(d), 'string' == typeof c) {
                try {
                    c = 'true' === c ? !0 : 'false' === c ? !1 : 'null' === c ? null : +c + '' === c ? +c : M.test(c) ? m.parseJSON(c) : c;
                } catch (e) {
                }
                m.data(a, b, c);
            } else
                c = void 0;
        }
        return c;
    }
    function P(a) {
        var b;
        for (b in a)
            if (('data' !== b || !m.isEmptyObject(a[b])) && 'toJSON' !== b)
                return !1;
        return !0;
    }
    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || 'string' != typeof b)
                return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: m.noop }), ('object' == typeof b || 'function' == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), 'string' == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f;
        }
    }
    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(' ')), e = b.length;
                    while (e--)
                        delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d))
                        return;
                }
                (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null);
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            'applet ': !0,
            'embed ': !0,
            'object ': 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'
        },
        hasData: function (a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a);
        },
        data: function (a, b, c) {
            return Q(a, b, c);
        },
        removeData: function (a, b) {
            return R(a, b);
        },
        _data: function (a, b, c) {
            return Q(a, b, c, !0);
        },
        _removeData: function (a, b) {
            return R(a, b, !0);
        }
    }), m.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, 'parsedAttrs'))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name, 0 === d.indexOf('data-') && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, 'parsedAttrs', !0);
                }
                return e;
            }
            return 'object' == typeof a ? this.each(function () {
                m.data(this, a);
            }) : arguments.length > 1 ? this.each(function () {
                m.data(this, a, b);
            }) : f ? O(f, a, m.data(f, a)) : void 0;
        },
        removeData: function (a) {
            return this.each(function () {
                m.removeData(this, a);
            });
        }
    }), m.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || 'fx') + 'queue', d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0;
        },
        dequeue: function (a, b) {
            b = b || 'fx';
            var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function () {
                    m.dequeue(a, b);
                };
            'inprogress' === e && (e = c.shift(), d--), e && ('fx' === b && c.unshift('inprogress'), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function (a, b) {
            var c = b + 'queueHooks';
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks('once memory').add(function () {
                    m._removeData(a, b + 'queue'), m._removeData(a, c);
                })
            });
        }
    }), m.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return 'string' != typeof a && (b = a, a = 'fx', c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), 'fx' === a && 'inprogress' !== c[0] && m.dequeue(this, a);
            });
        },
        dequeue: function (a) {
            return this.each(function () {
                m.dequeue(this, a);
            });
        },
        clearQueue: function (a) {
            return this.queue(a || 'fx', []);
        },
        promise: function (a, b) {
            var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function () {
                    --d || e.resolveWith(f, [f]);
                };
            'string' != typeof a && (b = a, a = void 0), a = a || 'fx';
            while (g--)
                c = m._data(f[g], a + 'queueHooks'), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = [
            'Top',
            'Right',
            'Bottom',
            'Left'
        ], U = function (a, b) {
            return a = b || a, 'none' === m.css(a, 'display') || !m.contains(a.ownerDocument, a);
        }, V = m.access = function (a, b, c, d, e, f, g) {
            var h = 0, i = a.length, j = null == c;
            if ('object' === m.type(c)) {
                e = !0;
                for (h in c)
                    m.access(a, b, h, c[h], !0, f, g);
            } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(m(a), c);
                })), b))
                for (; i > h; h++)
                    b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
        }, W = /^(?:checkbox|radio)$/i;
    !function () {
        var a = y.createElement('input'), b = y.createElement('div'), c = y.createDocumentFragment();
        if (b.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName('tbody').length, k.htmlSerialize = !!b.getElementsByTagName('link').length, k.html5Clone = '<:nav></:nav>' !== y.createElement('nav').cloneNode(!0).outerHTML, a.type = 'checkbox', a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = '<textarea>x</textarea>', k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = '<input type=\'radio\' checked=\'checked\' name=\'t\'/>', k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent('onclick', function () {
                k.noCloneEvent = !1;
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test;
            } catch (d) {
                k.deleteExpando = !1;
            }
        }
    }(), function () {
        var b, c, d = y.createElement('div');
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            })
            c = 'on' + b, (k[b + 'Bubbles'] = c in a) || (d.setAttribute(c, 't'), k[b + 'Bubbles'] = d.attributes[c].expando === !1);
        d = null;
    }();
    var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;
    function ab() {
        return !0;
    }
    function bb() {
        return !1;
    }
    function cb() {
        try {
            return y.activeElement;
        } catch (a) {
        }
    }
    m.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments);
                }, k.elem = a), b = (b || '').match(E) || [''], h = b.length;
                while (h--)
                    f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || '').split('.').sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && m.expr.match.needsContext.test(e),
                        namespace: p.join('.')
                    }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent('on' + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null;
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || '').match(E) || [''], j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || '').split('.').sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'), i = f = n.length;
                        while (f--)
                            g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ('**' !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o]);
                    } else
                        for (o in k)
                            m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, 'events'));
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, 'type') ? b.type : b, q = j.call(b, 'namespace') ? b.namespace.split('.') : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf('.') >= 0 && (q = p.split('.'), p = q.shift(), q.sort()), g = p.indexOf(':') < 0 && 'on' + p, b = b[m.expando] ? b : new m.Event(p, 'object' == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join('.'), b.namespace_re = b.namespace ? new RegExp('(^|\\.)' + q.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)
                        o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a);
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped())
                    b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, 'events') || {})[b.type] && m._data(h, 'handle'), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]();
                    } catch (r) {
                    }
                    m.event.triggered = void 0, l && (d[g] = l);
                }
                return b.result;
            }
        },
        dispatch: function (a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, 'events') || {})[a.type] || [], k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())
                        (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || 'click' !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || 'click' !== a.type)) {
                        for (e = [], f = 0; h > f; f++)
                            d = b[f], c = d.selector + ' ', void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        });
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        fix: function (a) {
            if (a[m.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--)
                c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
        },
        props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
        fixHooks: {},
        keyHooks: {
            props: 'char charCode key keyCode'.split(' '),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
            }
        },
        mouseHooks: {
            props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
            filter: function (a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            }
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== cb() && this.focus)
                        try {
                            return this.focus(), !1;
                        } catch (a) {
                        }
                },
                delegateType: 'focusin'
            },
            blur: {
                trigger: function () {
                    return this === cb() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: 'focusout'
            },
            click: {
                trigger: function () {
                    return m.nodeName(this, 'input') && 'checkbox' === this.type && this.click ? (this.click(), !1) : void 0;
                },
                _default: function (a) {
                    return m.nodeName(a.target, 'a');
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = m.extend(new m.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    } : function (a, b, c) {
        var d = 'on' + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c));
    }, m.Event = function (a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b);
    }, m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
        }
    }, m.each({
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout'
    }, function (a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
            }
        };
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function () {
            return m.nodeName(this, 'form') ? !1 : void m.event.add(this, 'click._submit keypress._submit', function (a) {
                var b = a.target, c = m.nodeName(b, 'input') || m.nodeName(b, 'button') ? b.form : void 0;
                c && !m._data(c, 'submitBubbles') && (m.event.add(c, 'submit._submit', function (a) {
                    a._submit_bubble = !0;
                }), m._data(c, 'submitBubbles', !0));
            });
        },
        postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate('submit', this.parentNode, a, !0));
        },
        teardown: function () {
            return m.nodeName(this, 'form') ? !1 : void m.event.remove(this, '._submit');
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function () {
            return X.test(this.nodeName) ? (('checkbox' === this.type || 'radio' === this.type) && (m.event.add(this, 'propertychange._change', function (a) {
                'checked' === a.originalEvent.propertyName && (this._just_changed = !0);
            }), m.event.add(this, 'click._change', function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate('change', this, a, !0);
            })), !1) : void m.event.add(this, 'beforeactivate._change', function (a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, 'changeBubbles') && (m.event.add(b, 'change._change', function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate('change', this.parentNode, a, !0);
                }), m._data(b, 'changeBubbles', !0));
            });
        },
        handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || 'radio' !== b.type && 'checkbox' !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
        },
        teardown: function () {
            return m.event.remove(this, '._change'), !X.test(this.nodeName);
        }
    }), k.focusinBubbles || m.each({
        focus: 'focusin',
        blur: 'focusout'
    }, function (a, b) {
        var c = function (a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0);
        };
        m.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
            },
            teardown: function () {
                var d = this.ownerDocument || this, e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b));
            }
        };
    }), m.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ('object' == typeof a) {
                'string' != typeof b && (c = c || b, b = void 0);
                for (f in a)
                    this.on(f, b, c, a[f], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ('string' == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)
                d = bb;
            else if (!d)
                return this;
            return 1 === e && (g = d, d = function (a) {
                return m().off(a), g.apply(this, arguments);
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
                m.event.add(this, a, d, c, b);
            });
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + '.' + d.namespace : d.origType, d.selector, d.handler), this;
            if ('object' == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || 'function' == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function () {
                m.event.remove(this, a, c, b);
            });
        },
        trigger: function (a, b) {
            return this.each(function () {
                m.event.trigger(a, b, this);
            });
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0;
        }
    });
    function db(a) {
        var b = eb.split('|'), c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c;
    }
    var eb = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video', fb = / jQuery\d+="(?:null|\d+)"/g, gb = new RegExp('<(?:' + eb + ')[\\s/>]', 'i'), hb = /^\s+/, ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, jb = /<([\w:]+)/, kb = /<tbody/i, lb = /<|&#?\w+;/, mb = /<(?:script|style|link)/i, nb = /checked\s*(?:[^=]|=\s*.checked.)/i, ob = /^$|\/(?:java|ecma)script/i, pb = /^true\/(.*)/, qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, rb = {
            option: [
                1,
                '<select multiple=\'multiple\'>',
                '</select>'
            ],
            legend: [
                1,
                '<fieldset>',
                '</fieldset>'
            ],
            area: [
                1,
                '<map>',
                '</map>'
            ],
            param: [
                1,
                '<object>',
                '</object>'
            ],
            thead: [
                1,
                '<table>',
                '</table>'
            ],
            tr: [
                2,
                '<table><tbody>',
                '</tbody></table>'
            ],
            col: [
                2,
                '<table><tbody></tbody><colgroup>',
                '</colgroup></table>'
            ],
            td: [
                3,
                '<table><tbody><tr>',
                '</tr></tbody></table>'
            ],
            _default: k.htmlSerialize ? [
                0,
                '',
                ''
            ] : [
                1,
                'X<div>',
                '</div>'
            ]
        }, sb = db(y), tb = sb.appendChild(y.createElement('div'));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;
    function ub(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || '*') : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || '*') : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
                !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f;
    }
    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked);
    }
    function wb(a, b) {
        return m.nodeName(a, 'table') && m.nodeName(11 !== b.nodeType ? b : b.firstChild, 'tr') ? a.getElementsByTagName('tbody')[0] || a.appendChild(a.ownerDocument.createElement('tbody')) : a;
    }
    function xb(a) {
        return a.type = (null !== m.find.attr(a, 'type')) + '/' + a.type, a;
    }
    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute('type'), a;
    }
    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            m._data(c, 'globalEval', !b || m._data(b[d], 'globalEval'));
    }
    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++)
                        m.event.add(b, c, h[c][d]);
            }
            g.data && (g.data = m.extend({}, g.data));
        }
    }
    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events)
                    m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando);
            }
            'script' === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : 'object' === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : 'input' === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : 'option' === c ? b.defaultSelected = b.selected = a.defaultSelected : ('input' === c || 'textarea' === c) && (b.defaultValue = a.defaultValue);
        }
    }
    m.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test('<' + a.nodeName + '>') ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g)
                    d[g] && Bb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++)
                        Ab(e, d[g]);
                else
                    Ab(a, f);
            return d = ub(f, 'script'), d.length > 0 && zb(d, !i && ub(a, 'script')), d = h = e = null, f;
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ('object' === m.type(f))
                        m.merge(p, f.nodeType ? [f] : f);
                    else if (lb.test(f)) {
                        h = h || o.appendChild(b.createElement('div')), i = (jb.exec(f) || [
                            '',
                            ''
                        ])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, '<$1></$2>') + l[2], e = l[0];
                        while (e--)
                            h = h.lastChild;
                        if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                            f = 'table' !== i || kb.test(f) ? '<table>' !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                            while (e--)
                                m.nodeName(j = f.childNodes[e], 'tbody') && !j.childNodes.length && f.removeChild(j);
                        }
                        m.merge(p, h.childNodes), h.textContent = '';
                        while (h.firstChild)
                            h.removeChild(h.firstChild);
                        h = o.lastChild;
                    } else
                        p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, 'input'), vb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), 'script'), g && zb(h), c)) {
                    e = 0;
                    while (f = h[e++])
                        ob.test(f.type || '') && c.push(f);
                }
            return h = null, o;
        },
        cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events)
                            n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f));
                }
        }
    }), m.fn.extend({
        text: function (a) {
            return V(this, function (a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a));
            }, null, a, arguments.length);
        },
        append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function (a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, 'script')), c.parentNode.removeChild(c));
            return this;
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild)
                    a.removeChild(a.firstChild);
                a.options && m.nodeName(a, 'select') && (a.options.length = 0);
            }
            return this;
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return m.clone(this, a, b);
            });
        },
        html: function (a) {
            return V(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(fb, '') : void 0;
                if (!('string' != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || [
                        '',
                        ''
                    ])[1].toLowerCase()])) {
                    a = a.replace(ib, '<$1></$2>');
                    try {
                        for (; d > c; c++)
                            b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
                        b = 0;
                    } catch (e) {
                    }
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function (a) {
            return this.remove(a, !0);
        },
        domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
            if (q || l > 1 && 'string' == typeof p && !k.checkClone && nb.test(p))
                return this.each(function (c) {
                    var d = n.eq(c);
                    q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
                });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, 'script'), xb), f = g.length; l > j; j++)
                    d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, 'script'))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++)
                        d = g[j], ob.test(d.type || '') && !m._data(d, 'globalEval') && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || '').replace(qb, '')));
                i = c = null;
            }
            return this;
        }
    }), m.each({
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
    }, function (a, b) {
        m.fn[a] = function (a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)
                c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e);
        };
    });
    var Cb, Db = {};
    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], 'display');
        return e.detach(), f;
    }
    function Fb(a) {
        var b = y, c = Db[a];
        return c || (c = Eb(a, b), 'none' !== c && c || (Cb = (Cb || m('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c;
    }
    !function () {
        var a;
        k.shrinkWrapBlocks = function () {
            if (null != a)
                return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName('body')[0], c && c.style ? (b = y.createElement('div'), d = y.createElement('div'), d.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1', b.appendChild(y.createElement('div')).style.width = '5px', a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0;
        };
    }();
    var Gb = /^margin/, Hb = new RegExp('^(' + S + ')(?!px)[a-z%]+$', 'i'), Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    }, Jb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ('' !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + '';
    }) : y.documentElement.currentStyle && (Ib = function (a) {
        return a.currentStyle;
    }, Jb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = 'fontSize' === b ? '1em' : g, g = h.pixelLeft + 'px', h.left = d, f && (e.left = f)), void 0 === g ? g : g + '' || 'auto';
    });
    function Lb(a, b) {
        return {
            get: function () {
                var c = a();
                if (null != c)
                    return c ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    !function () {
        var b, c, d, e, f, g, h;
        if (b = y.createElement('div'), b.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', d = b.getElementsByTagName('a')[0], c = d && d.style) {
            c.cssText = 'float:left;opacity:.5', k.opacity = '0.5' === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = 'content-box', b.cloneNode(!0).style.backgroundClip = '', k.clearCloneStyle = 'content-box' === b.style.backgroundClip, k.boxSizing = '' === c.boxSizing || '' === c.MozBoxSizing || '' === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function () {
                    return null == g && i(), g;
                },
                boxSizingReliable: function () {
                    return null == f && i(), f;
                },
                pixelPosition: function () {
                    return null == e && i(), e;
                },
                reliableMarginRight: function () {
                    return null == h && i(), h;
                }
            });
            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName('body')[0], c && c.style && (b = y.createElement('div'), d = y.createElement('div'), d.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', c.appendChild(d).appendChild(b), b.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute', e = f = !1, h = !0, a.getComputedStyle && (e = '1%' !== (a.getComputedStyle(b, null) || {}).top, f = '4px' === (a.getComputedStyle(b, null) || { width: '4px' }).width, i = b.appendChild(y.createElement('div')), i.style.cssText = b.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', i.style.marginRight = i.style.width = '0', b.style.width = '1px', h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = '<table><tr><td></td><td>t</td></tr></table>', i = b.getElementsByTagName('td'), i[0].style.cssText = 'margin:0;border:0;padding:0;display:none', g = 0 === i[0].offsetHeight, g && (i[0].style.display = '', i[1].style.display = 'none', g = 0 === i[0].offsetHeight), c.removeChild(d));
            }
        }
    }(), m.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e;
    };
    var Mb = /alpha\([^)]*\)/i, Nb = /opacity\s*=\s*([^)]*)/, Ob = /^(none|table(?!-c[ea]).+)/, Pb = new RegExp('^(' + S + ')(.*)$', 'i'), Qb = new RegExp('^([+-])=(' + S + ')', 'i'), Rb = {
            position: 'absolute',
            visibility: 'hidden',
            display: 'block'
        }, Sb = {
            letterSpacing: '0',
            fontWeight: '400'
        }, Tb = [
            'Webkit',
            'O',
            'Moz',
            'ms'
        ];
    function Ub(a, b) {
        if (b in a)
            return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Tb.length;
        while (e--)
            if (b = Tb[e] + c, b in a)
                return b;
        return d;
    }
    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g], d.style && (f[g] = m._data(d, 'olddisplay'), c = d.style.display, b ? (f[g] || 'none' !== c || (d.style.display = ''), '' === d.style.display && U(d) && (f[g] = m._data(d, 'olddisplay', Fb(d.nodeName)))) : (e = U(d), (c && 'none' !== c || !e) && m._data(d, 'olddisplay', e ? c : m.css(d, 'display'))));
        for (g = 0; h > g; g++)
            d = a[g], d.style && (b && 'none' !== d.style.display && '' !== d.style.display || (d.style.display = b ? f[g] || '' : 'none'));
        return a;
    }
    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || 'px') : b;
    }
    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? 'border' : 'content') ? 4 : 'width' === b ? 1 : 0, g = 0; 4 > f; f += 2)
            'margin' === c && (g += m.css(a, c + T[f], !0, e)), d ? ('content' === c && (g -= m.css(a, 'padding' + T[f], !0, e)), 'margin' !== c && (g -= m.css(a, 'border' + T[f] + 'Width', !0, e))) : (g += m.css(a, 'padding' + T[f], !0, e), 'padding' !== c && (g += m.css(a, 'border' + T[f] + 'Width', !0, e)));
        return g;
    }
    function Yb(a, b, c) {
        var d = !0, e = 'width' === b ? a.offsetWidth : a.offsetHeight, f = Ib(a), g = k.boxSizing && 'border-box' === m.css(a, 'boxSizing', !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e))
                return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + Xb(a, b, c || (g ? 'border' : 'content'), d, f) + 'px';
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Jb(a, 'opacity');
                        return '' === c ? '1' : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: { 'float': k.cssFloat ? 'cssFloat' : 'styleFloat' },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c)
                    return g && 'get' in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, 'string' === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = 'number'), null != c && c === c && ('number' !== f || m.cssNumber[h] || (c += 'px'), k.clearCloneStyle || '' !== c || 0 !== b.indexOf('background') || (i[b] = 'inherit'), !(g && 'set' in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = c;
                    } catch (j) {
                    }
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && 'get' in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), 'normal' === f && b in Sb && (f = Sb[b]), '' === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f;
        }
    }), m.each([
        'height',
        'width'
    ], function (a, b) {
        m.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? Ob.test(m.css(a, 'display')) && 0 === a.offsetWidth ? m.swap(a, Rb, function () {
                    return Yb(a, b, d);
                }) : Yb(a, b, d) : void 0;
            },
            set: function (a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && 'border-box' === m.css(a, 'boxSizing', !1, e), e) : 0);
            }
        };
    }), k.opacity || (m.cssHooks.opacity = {
        get: function (a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || '') ? 0.01 * parseFloat(RegExp.$1) + '' : b ? '1' : '';
        },
        set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? 'alpha(opacity=' + 100 * b + ')' : '', f = d && d.filter || c.filter || '';
            c.zoom = 1, (b >= 1 || '' === b) && '' === m.trim(f.replace(Mb, '')) && c.removeAttribute && (c.removeAttribute('filter'), '' === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + ' ' + e);
        }
    }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) {
        return b ? m.swap(a, { display: 'inline-block' }, Jb, [
            a,
            'marginRight'
        ]) : void 0;
    }), m.each({
        margin: '',
        padding: '',
        border: 'Width'
    }, function (a, b) {
        m.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = 'string' == typeof c ? c.split(' ') : [c]; 4 > d; d++)
                    e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Gb.test(a) || (m.cssHooks[a + b].set = Wb);
    }), m.fn.extend({
        css: function (a, b) {
            return V(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a), e = b.length; e > g; g++)
                        f[b[g]] = m.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function () {
            return Vb(this, !0);
        },
        hide: function () {
            return Vb(this);
        },
        toggle: function (a) {
            return 'boolean' == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                U(this) ? m(this).show() : m(this).hide();
            });
        }
    });
    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e);
    }
    m.Tween = Zb, Zb.prototype = {
        constructor: Zb,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || 'swing', this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? '' : 'px');
        },
        cur: function () {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this);
        },
        run: function (a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this;
        }
    }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ''), b && 'auto' !== b ? b : 0) : a.elem[a.prop];
            },
            set: function (a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, m.easing = {
        linear: function (a) {
            return a;
        },
        swing: function (a) {
            return 0.5 - Math.cos(a * Math.PI) / 2;
        }
    }, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp('^(?:([+-])=|)(' + S + ')([a-z%]*)$', 'i'), cc = /queueHooks$/, dc = [ic], ec = {
            '*': [function (a, b) {
                    var c = this.createTween(a, b), d = c.cur(), e = bc.exec(b), f = e && e[3] || (m.cssNumber[a] ? '' : 'px'), g = (m.cssNumber[a] || 'px' !== f && +d) && bc.exec(m.css(c.elem, a)), h = 1, i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do
                            h = h || '.5', g /= h, m.style(c.elem, a, g + f);
                        while (h !== (h = c.cur() / d) && 1 !== h && --i);
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
                }]
        };
    function fc() {
        return setTimeout(function () {
            $b = void 0;
        }), $b = m.now();
    }
    function gc(a, b) {
        var c, d = { height: a }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = T[e], d['margin' + c] = d['padding' + c] = a;
        return b && (d.opacity = d.width = a), d;
    }
    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec['*']), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d;
    }
    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, 'fxshow');
        c.queue || (h = m._queueHooks(a, 'fx'), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i();
        }), h.unqueued++, n.always(function () {
            n.always(function () {
                h.unqueued--, m.queue(a, 'fx').length || h.empty.fire();
            });
        })), 1 === a.nodeType && ('height' in b || 'width' in b) && (c.overflow = [
            p.overflow,
            p.overflowX,
            p.overflowY
        ], j = m.css(a, 'display'), l = 'none' === j ? m._data(a, 'olddisplay') || Fb(a.nodeName) : j, 'inline' === l && 'none' === m.css(a, 'float') && (k.inlineBlockNeedsLayout && 'inline' !== Fb(a.nodeName) ? p.zoom = 1 : p.display = 'inline-block')), c.overflow && (p.overflow = 'hidden', k.shrinkWrapBlocks() || n.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
        }));
        for (d in b)
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || 'toggle' === e, e === (q ? 'hide' : 'show')) {
                    if ('show' !== e || !r || void 0 === r[d])
                        continue;
                    q = !0;
                }
                o[d] = r && r[d] || m.style(a, d);
            } else
                j = void 0;
        if (m.isEmptyObject(o))
            'inline' === ('none' === j ? Fb(a.nodeName) : j) && (p.display = j);
        else {
            r ? 'hidden' in r && (q = r.hidden) : r = m._data(a, 'fxshow', {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
                m(a).hide();
            }), n.done(function () {
                var b;
                m._removeData(a, 'fxshow');
                for (b in o)
                    m.style(a, b, o[b]);
            });
            for (d in o)
                g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = 'width' === d || 'height' === d ? 1 : 0));
        }
    }
    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && 'expand' in g) {
                f = g.expand(f), delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c], b[c] = e);
            } else
                b[d] = e;
    }
    function kc(a, b, c) {
        var d, e, f = 0, g = dc.length, h = m.Deferred().always(function () {
                delete i.elem;
            }), i = function () {
                if (e)
                    return !1;
                for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                    j.tweens[g].run(f);
                return h.notifyWith(a, [
                    j,
                    f,
                    c
                ]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
            }, j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, { specialEasing: {} }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $b || fc(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d;
                },
                stop: function (b) {
                    var c = 0, d = b ? j.tweens.length : 0;
                    if (e)
                        return this;
                    for (e = !0; d > c; c++)
                        j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [
                        j,
                        b
                    ]) : h.rejectWith(a, [
                        j,
                        b
                    ]), this;
                }
            }), k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts))
                return d;
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    m.Animation = m.extend(kc, {
        tweener: function (a, b) {
            m.isFunction(a) ? (b = a, a = ['*']) : a = a.split(' ');
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b);
        },
        prefilter: function (a, b) {
            b ? dc.unshift(a) : dc.push(a);
        }
    }), m.speed = function (a, b, c) {
        var d = a && 'object' == typeof a ? m.extend({}, a) : {
            complete: c || !c && b || m.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !m.isFunction(b) && b
        };
        return d.duration = m.fx.off ? 0 : 'number' == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = 'fx'), d.old = d.complete, d.complete = function () {
            m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue);
        }, d;
    }, m.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(U).css('opacity', 0).show().end().animate({ opacity: b }, a, c, d);
        },
        animate: function (a, b, c, d) {
            var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function () {
                    var b = kc(this, m.extend({}, a), f);
                    (e || m._data(this, 'finish')) && b.stop(!0);
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return 'string' != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || 'fx', []), this.each(function () {
                var b = !0, e = null != a && a + 'queueHooks', f = m.timers, g = m._data(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && cc.test(e) && d(g[e]);
                for (e = f.length; e--;)
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && m.dequeue(this, a);
            });
        },
        finish: function (a) {
            return a !== !1 && (a = a || 'fx'), this.each(function () {
                var b, c = m._data(this), d = c[a + 'queue'], e = c[a + 'queueHooks'], f = m.timers, g = d ? d.length : 0;
                for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), m.each([
        'toggle',
        'show',
        'hide'
    ], function (a, b) {
        var c = m.fn[b];
        m.fn[b] = function (a, d, e) {
            return null == a || 'boolean' == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e);
        };
    }), m.each({
        slideDown: gc('show'),
        slideUp: gc('hide'),
        slideToggle: gc('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
    }, function (a, b) {
        m.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), m.timers = [], m.fx.tick = function () {
        var a, b = m.timers, c = 0;
        for ($b = m.now(); c < b.length; c++)
            a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop(), $b = void 0;
    }, m.fx.timer = function (a) {
        m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
    }, m.fx.interval = 13, m.fx.start = function () {
        _b || (_b = setInterval(m.fx.tick, m.fx.interval));
    }, m.fx.stop = function () {
        clearInterval(_b), _b = null;
    }, m.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, m.fn.delay = function (a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a, b = b || 'fx', this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d);
            };
        });
    }, function () {
        var a, b, c, d, e;
        b = y.createElement('div'), b.setAttribute('className', 't'), b.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', d = b.getElementsByTagName('a')[0], c = y.createElement('select'), e = c.appendChild(y.createElement('option')), a = b.getElementsByTagName('input')[0], d.style.cssText = 'top:1px', k.getSetAttribute = 't' !== b.className, k.style = /top/.test(d.getAttribute('style')), k.hrefNormalized = '/a' === d.getAttribute('href'), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement('form').enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement('input'), a.setAttribute('value', ''), k.input = '' === a.getAttribute('value'), a.value = 't', a.setAttribute('type', 'radio'), k.radioValue = 't' === a.value;
    }();
    var lc = /\r/g;
    m.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = m.isFunction(a), this.each(function (c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = '' : 'number' == typeof e ? e += '' : m.isArray(e) && (e = m.map(e, function (a) {
                            return null == a ? '' : a + '';
                        })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && 'set' in b && void 0 !== b.set(this, e, 'value') || (this.value = e));
                    });
                if (e)
                    return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && 'get' in b && void 0 !== (c = b.get(e, 'value')) ? c : (c = e.value, 'string' == typeof c ? c.replace(lc, '') : null == c ? '' : c);
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = m.find.attr(a, 'value');
                    return null != b ? b : m.trim(m.text(a));
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = 'select-one' === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute('disabled')) || c.parentNode.disabled && m.nodeName(c.parentNode, 'optgroup'))) {
                            if (b = m(c).val(), f)
                                return b;
                            g.push(b);
                        }
                    return g;
                },
                set: function (a, b) {
                    var c, d, e = a.options, f = m.makeArray(b), g = e.length;
                    while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0)
                            try {
                                d.selected = c = !0;
                            } catch (h) {
                                d.scrollHeight;
                            }
                        else
                            d.selected = !1;
                    return c || (a.selectedIndex = -1), e;
                }
            }
        }
    }), m.each([
        'radio',
        'checkbox'
    ], function () {
        m.valHooks[this] = {
            set: function (a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0;
            }
        }, k.checkOn || (m.valHooks[this].get = function (a) {
            return null === a.getAttribute('value') ? 'on' : a.value;
        });
    });
    var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input;
    m.fn.extend({
        attr: function (a, b) {
            return V(this, m.attr, a, b, arguments.length > 1);
        },
        removeAttr: function (a) {
            return this.each(function () {
                m.removeAttr(this, a);
            });
        }
    }), m.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && 'get' in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && 'set' in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ''), c) : void m.removeAttr(a, b));
        },
        removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase('default-' + c)] = a[d] = !1 : m.attr(a, c, ''), a.removeAttribute(qc ? c : d);
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && 'radio' === b && m.nodeName(a, 'input')) {
                        var c = a.value;
                        return a.setAttribute('type', b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), nc = {
        set: function (a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase('default-' + c)] = a[c] = !0, c;
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function (a, b, d) {
            var e, f;
            return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e;
        } : function (a, b, c) {
            return c ? void 0 : a[m.camelCase('default-' + b)] ? b.toLowerCase() : null;
        };
    }), rc && qc || (m.attrHooks.value = {
        set: function (a, b, c) {
            return m.nodeName(a, 'input') ? void (a.defaultValue = b) : mc && mc.set(a, b, c);
        }
    }), qc || (mc = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += '', 'value' === c || b === a.getAttribute(c) ? b : void 0;
        }
    }, oc.id = oc.name = oc.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && '' !== d.value ? d.value : null;
    }, m.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0;
        },
        set: mc.set
    }, m.attrHooks.contenteditable = {
        set: function (a, b, c) {
            mc.set(a, '' === b ? !1 : b, c);
        }
    }, m.each([
        'width',
        'height'
    ], function (a, b) {
        m.attrHooks[b] = {
            set: function (a, c) {
                return '' === c ? (a.setAttribute(b, 'auto'), c) : void 0;
            }
        };
    })), k.style || (m.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0;
        },
        set: function (a, b) {
            return a.style.cssText = b + '';
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i, tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function (a, b) {
            return V(this, m.prop, a, b, arguments.length > 1);
        },
        removeProp: function (a) {
            return a = m.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a];
                } catch (b) {
                }
            });
        }
    }), m.extend({
        propFix: {
            'for': 'htmlFor',
            'class': 'className'
        },
        prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && 'set' in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && 'get' in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = m.find.attr(a, 'tabindex');
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        }
    }), k.hrefNormalized || m.each([
        'href',
        'src'
    ], function (a, b) {
        m.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4);
            }
        };
    }), k.optSelected || (m.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
        }
    }), m.each([
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable'
    ], function () {
        m.propFix[this.toLowerCase()] = this;
    }), k.enctype || (m.propFix.enctype = 'encoding');
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 'string' == typeof a && a;
            if (m.isFunction(a))
                return this.each(function (b) {
                    m(this).addClass(a.call(this, b, this.className));
                });
            if (j)
                for (b = (a || '').match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(uc, ' ') : ' ')) {
                        f = 0;
                        while (e = b[f++])
                            d.indexOf(' ' + e + ' ') < 0 && (d += e + ' ');
                        g = m.trim(d), c.className !== g && (c.className = g);
                    }
            return this;
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || 'string' == typeof a && a;
            if (m.isFunction(a))
                return this.each(function (b) {
                    m(this).removeClass(a.call(this, b, this.className));
                });
            if (j)
                for (b = (a || '').match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(uc, ' ') : '')) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(' ' + e + ' ') >= 0)
                                d = d.replace(' ' + e + ' ', ' ');
                        g = a ? m.trim(d) : '', c.className !== g && (c.className = g);
                    }
            return this;
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return 'boolean' == typeof b && 'string' === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function () {
                if ('string' === c) {
                    var b, d = 0, e = m(this), f = a.match(E) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                } else
                    (c === K || 'boolean' === c) && (this.className && m._data(this, '__className__', this.className), this.className = this.className || a === !1 ? '' : m._data(this, '__className__') || '');
            });
        },
        hasClass: function (a) {
            for (var b = ' ' + a + ' ', c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (' ' + this[c].className + ' ').replace(uc, ' ').indexOf(b) >= 0)
                    return !0;
            return !1;
        }
    }), m.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (a, b) {
        m.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), m.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function (a, b) {
            return this.off(a, null, b);
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, '**') : this.off(b, a || '**', c);
        }
    });
    var vc = m.now(), wc = /\?/, xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + '');
        var c, d = null, e = m.trim(b + '');
        return e && !m.trim(e.replace(xc, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, '');
        })) ? Function('return ' + e)() : m.error('Invalid JSON: ' + b);
    }, m.parseXML = function (b) {
        var c, d;
        if (!b || 'string' != typeof b)
            return null;
        try {
            a.DOMParser ? (d = new DOMParser(), c = d.parseFromString(b, 'text/xml')) : (c = new ActiveXObject('Microsoft.XMLDOM'), c.async = 'false', c.loadXML(b));
        } catch (e) {
            c = void 0;
        }
        return c && c.documentElement && !c.getElementsByTagName('parsererror').length || m.error('Invalid XML: ' + b), c;
    };
    var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//, Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {}, Ic = {}, Jc = '*/'.concat('*');
    try {
        zc = location.href;
    } catch (Kc) {
        zc = y.createElement('a'), zc.href = '', zc = zc.href;
    }
    yc = Gc.exec(zc.toLowerCase()) || [];
    function Lc(a) {
        return function (b, c) {
            'string' != typeof b && (c = b, b = '*');
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++])
                    '+' === d.charAt(0) ? (d = d.slice(1) || '*', (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function Mc(a, b, c, d) {
        var e = {}, f = a === Ic;
        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return 'string' != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
            }), i;
        }
        return g(b.dataTypes[0]) || !e['*'] && g('*');
    }
    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a;
    }
    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ('*' === i[0])
            i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader('Content-Type'));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break;
                }
        if (i[0] in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + ' ' + i[0]]) {
                    f = g;
                    break;
                }
                d || (d = g);
            }
            f = f || d;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ('*' === f)
                    f = i;
                else if ('*' !== i && i !== f) {
                    if (g = j[i + ' ' + f] || j['* ' + f], !g)
                        for (e in j)
                            if (h = e.split(' '), h[1] === f && (g = j[i + ' ' + h[0]] || j['* ' + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break;
                            }
                    if (g !== !0)
                        if (g && a['throws'])
                            b = g(b);
                        else
                            try {
                                b = g(b);
                            } catch (l) {
                                return {
                                    state: 'parsererror',
                                    error: g ? l : 'No conversion from ' + i + ' to ' + f
                                };
                            }
                }
        return {
            state: 'success',
            data: b
        };
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: 'GET',
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
                '*': Jc,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript'
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: 'responseXML',
                text: 'responseText',
                json: 'responseJSON'
            },
            converters: {
                '* text': String,
                'text html': !0,
                'text json': m.parseJSON,
                'text xml': m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a);
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function (a, b) {
            'object' == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks('once memory'), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = 'canceled', v = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Cc.exec(f))
                                    j[b[1].toLowerCase()] = b[2];
                            }
                            b = j[a.toLowerCase()];
                        }
                        return null == b ? null : b;
                    },
                    getAllResponseHeaders: function () {
                        return 2 === t ? f : null;
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this;
                    },
                    overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this;
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a)
                                    q[b] = [
                                        q[b],
                                        a[b]
                                    ];
                            else
                                v.always(a[v.status]);
                        return this;
                    },
                    abort: function (a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this;
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + '').replace(Ac, '').replace(Fc, yc[1] + '//'), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || '*').toLowerCase().match(E) || [''], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ('http:' === c[1] ? '80' : '443')) === (yc[3] || ('http:' === yc[1] ? '80' : '443')))), k.data && k.processData && 'string' != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t)
                return v;
            h = m.event && k.global, h && 0 === m.active++ && m.event.trigger('ajaxStart'), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? '&' : '?') + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, '$1_=' + vc++) : e + (wc.test(e) ? '&' : '?') + '_=' + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader('If-Modified-Since', m.lastModified[e]), m.etag[e] && v.setRequestHeader('If-None-Match', m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader('Content-Type', k.contentType), v.setRequestHeader('Accept', k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ('*' !== k.dataTypes[0] ? ', ' + Jc + '; q=0.01' : '') : k.accepts['*']);
            for (d in k.headers)
                v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                return v.abort();
            u = 'abort';
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger('ajaxSend', [
                    v,
                    k
                ]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort('timeout');
                }, k.timeout));
                try {
                    t = 1, i.send(r, x);
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    x(-1, w);
                }
            } else
                x(-1, 'No Transport');
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || '', v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader('Last-Modified'), w && (m.lastModified[e] = w), w = v.getResponseHeader('etag'), w && (m.etag[e] = w)), 204 === a || 'HEAD' === k.type ? x = 'nocontent' : 304 === a ? x = 'notmodified' : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = 'error', 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + '', j ? o.resolveWith(l, [
                    r,
                    x,
                    v
                ]) : o.rejectWith(l, [
                    v,
                    x,
                    s
                ]), v.statusCode(q), q = void 0, h && n.trigger(j ? 'ajaxSuccess' : 'ajaxError', [
                    v,
                    k,
                    j ? r : s
                ]), p.fireWith(l, [
                    v,
                    x
                ]), h && (n.trigger('ajaxComplete', [
                    v,
                    k
                ]), --m.active || m.event.trigger('ajaxStop')));
            }
            return v;
        },
        getJSON: function (a, b, c) {
            return m.get(a, b, c, 'json');
        },
        getScript: function (a, b) {
            return m.get(a, void 0, b, 'script');
        }
    }), m.each([
        'get',
        'post'
    ], function (a, b) {
        m[b] = function (a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), m._evalUrl = function (a) {
        return m.ajax({
            url: a,
            type: 'GET',
            dataType: 'script',
            async: !1,
            global: !1,
            'throws': !0
        });
    }, m.fn.extend({
        wrapAll: function (a) {
            if (m.isFunction(a))
                return this.each(function (b) {
                    m(this).wrapAll(a.call(this, b));
                });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType)
                        a = a.firstChild;
                    return a;
                }).append(this);
            }
            return this;
        },
        wrapInner: function (a) {
            return this.each(m.isFunction(a) ? function (b) {
                m(this).wrapInner(a.call(this, b));
            } : function () {
                var b = m(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function (a) {
            var b = m.isFunction(a);
            return this.each(function (c) {
                m(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function () {
            return this.parent().each(function () {
                m.nodeName(this, 'body') || m(this).replaceWith(this.childNodes);
            }).end();
        }
    }), m.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && 'none' === (a.style && a.style.display || m.css(a, 'display'));
    }, m.expr.filters.visible = function (a) {
        return !m.expr.filters.hidden(a);
    };
    var Qc = /%20/g, Rc = /\[\]$/, Sc = /\r?\n/g, Tc = /^(?:submit|button|image|reset|file)$/i, Uc = /^(?:input|select|textarea|keygen)/i;
    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b))
            m.each(b, function (b, e) {
                c || Rc.test(a) ? d(a, e) : Vc(a + '[' + ('object' == typeof e ? b : '') + ']', e, c, d);
            });
        else if (c || 'object' !== m.type(b))
            d(a, b);
        else
            for (e in b)
                Vc(a + '[' + e + ']', b[e], c, d);
    }
    m.param = function (a, b) {
        var c, d = [], e = function (a, b) {
                b = m.isFunction(b) ? b() : null == b ? '' : b, d[d.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b);
            };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a))
            m.each(a, function () {
                e(this.name, this.value);
            });
        else
            for (c in a)
                Vc(c, a[c], b, e);
        return d.join('&').replace(Qc, '+');
    }, m.fn.extend({
        serialize: function () {
            return m.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {
                var a = m.prop(this, 'elements');
                return a ? m.makeArray(a) : this;
            }).filter(function () {
                var a = this.type;
                return this.name && !m(this).is(':disabled') && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a));
            }).map(function (a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Sc, '\r\n')
                    };
                }) : {
                    name: b.name,
                    value: c.replace(Sc, '\r\n')
                };
            }).get();
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c();
    } : Zc;
    var Wc = 0, Xc = {}, Yc = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent('onunload', function () {
        for (var a in Xc)
            Xc[a](void 0, !0);
    }), k.cors = !!Yc && 'withCredentials' in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function (a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function (c, d) {
                    var e, f = a.xhr(), g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields)
                            f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c['X-Requested-With'] || (c['X-Requested-With'] = 'XMLHttpRequest');
                    for (e in c)
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + '');
                    f.send(a.hasContent && a.data || null), b = function (c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e)
                                4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, 'string' == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText;
                                } catch (k) {
                                    i = '';
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404;
                            }
                        j && d(h, i, j, f.getAllResponseHeaders());
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b();
                },
                abort: function () {
                    b && b(void 0, !0);
                }
            };
        }
    });
    function Zc() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {
        }
    }
    function $c() {
        try {
            return new a.ActiveXObject('Microsoft.XMLHTTP');
        } catch (b) {
        }
    }
    m.ajaxSetup({
        accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
            'text script': function (a) {
                return m.globalEval(a), a;
            }
        }
    }), m.ajaxPrefilter('script', function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = 'GET', a.global = !1);
    }), m.ajaxTransport('script', function (a) {
        if (a.crossDomain) {
            var b, c = y.head || m('head')[0] || y.documentElement;
            return {
                send: function (d, e) {
                    b = y.createElement('script'), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, 'success'));
                    }, c.insertBefore(b, c.firstChild);
                },
                abort: function () {
                    b && b.onload(void 0, !0);
                }
            };
        }
    });
    var _c = [], ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
            var a = _c.pop() || m.expando + '_' + vc++;
            return this[a] = !0, a;
        }
    }), m.ajaxPrefilter('json jsonp', function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? 'url' : 'string' == typeof b.data && !(b.contentType || '').indexOf('application/x-www-form-urlencoded') && ad.test(b.data) && 'data');
        return h || 'jsonp' === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, '$1' + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? '&' : '?') + b.jsonp + '=' + e), b.converters['script json'] = function () {
            return g || m.error(e + ' was not called'), g[0];
        }, b.dataTypes[0] = 'json', f = a[e], a[e] = function () {
            g = arguments;
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0;
        }), 'script') : void 0;
    }), m.parseHTML = function (a, b, c) {
        if (!a || 'string' != typeof a)
            return null;
        'boolean' == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes));
    };
    var bd = m.fn.load;
    m.fn.load = function (a, b, c) {
        if ('string' != typeof a && bd)
            return bd.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(' ');
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && 'object' == typeof b && (f = 'POST'), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: 'html',
            data: b
        }).done(function (a) {
            e = arguments, g.html(d ? m('<div>').append(m.parseHTML(a)).find(d) : a);
        }).complete(c && function (a, b) {
            g.each(c, e || [
                a.responseText,
                b,
                a
            ]);
        }), this;
    }, m.each([
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend'
    ], function (a, b) {
        m.fn[b] = function (a) {
            return this.on(b, a);
        };
    }), m.expr.filters.animated = function (a) {
        return m.grep(m.timers, function (b) {
            return a === b.elem;
        }).length;
    };
    var cd = a.document.documentElement;
    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
    }
    m.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, 'position'), l = m(a), n = {};
            'static' === k && (a.style.position = 'relative'), h = l.offset(), f = m.css(a, 'top'), i = m.css(a, 'left'), j = ('absolute' === k || 'fixed' === k) && m.inArray('auto', [
                f,
                i
            ]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), 'using' in b ? b.using.call(a, n) : l.css(n);
        }
    }, m.fn.extend({
        offset: function (a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function (b) {
                    m.offset.setOffset(this, a, b);
                });
            var b, c, d = {
                    top: 0,
                    left: 0
                }, e = this[0], f = e && e.ownerDocument;
            if (f)
                return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d;
        },
        position: function () {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    }, d = this[0];
                return 'fixed' === m.css(d, 'position') ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], 'html') || (c = a.offset()), c.top += m.css(a[0], 'borderTopWidth', !0), c.left += m.css(a[0], 'borderLeftWidth', !0)), {
                    top: b.top - c.top - m.css(d, 'marginTop', !0),
                    left: b.left - c.left - m.css(d, 'marginLeft', !0)
                };
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || cd;
                while (a && !m.nodeName(a, 'html') && 'static' === m.css(a, 'position'))
                    a = a.offsetParent;
                return a || cd;
            });
        }
    }), m.each({
        scrollLeft: 'pageXOffset',
        scrollTop: 'pageYOffset'
    }, function (a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function (d) {
            return V(this, function (a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e);
            }, a, d, arguments.length, null);
        };
    }), m.each([
        'top',
        'left'
    ], function (a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) {
            return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + 'px' : c) : void 0;
        });
    }), m.each({
        Height: 'height',
        Width: 'width'
    }, function (a, b) {
        m.each({
            padding: 'inner' + a,
            content: b,
            '': 'outer' + a
        }, function (c, d) {
            m.fn[d] = function (d, e) {
                var f = arguments.length && (c || 'boolean' != typeof d), g = c || (d === !0 || e === !0 ? 'margin' : 'border');
                return V(this, function (b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement['client' + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body['scroll' + a], e['scroll' + a], b.body['offset' + a], e['offset' + a], e['client' + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), m.fn.size = function () {
        return this.length;
    }, m.fn.andSelf = m.fn.addBack, 'function' == typeof define && define.amd && define('jquery', [], function () {
        return m;
    });
    var ed = a.jQuery, fd = a.$;
    return m.noConflict = function (b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m;
    }, typeof b === K && (a.jQuery = a.$ = m), m;
});
define('appDirectives', [
    'angular',
    'jquery'
], function (angular, $) {
    'use strict';
    var appDirectives = angular.module('app.directives', []);
    appDirectives.directive('ngImgload', [
        '$timeout',
        function (timer) {
            return {
                link: function ($scope, $element) {
                    timer(function () {
                        if ($($element).data('src') != undefined) {
                            var img = new Image();
                            img.src = $($element).data('src');
                            img.onload = function () {
                                $($element).after(img);
                                $($element).remove();
                            };
                            img.onerror = function () {
                                if (img.src.indexOf('.jpg') > -1) {
                                    $($element).remove();
                                } else {
                                    img.src = $($element).data('src').replace('.png', '.jpg');
                                }
                                ;
                            };
                        }
                    }, 0);
                }
            };
        }
    ]);
    appDirectives.directive('ngTouchstart', function () {
        return {
            controller: [
                '$scope',
                '$element',
                function ($scope, $element) {
                    $element.bind('touchstart', onTouchStart);
                    function onTouchStart(event) {
                        var method = $element.attr('ng-touchstart');
                        $scope.$event = event;
                        $scope.$apply(method);
                    }
                }
            ]
        };
    });
    appDirectives.directive('listRepeatFinish', function ($rootScope) {
        return {
            link: function (scope, element, attr, rootScope) {
                var parent = $(element).closest('.list-item');
                if (parent.is(':last-child')) {
                    if (scope.$last == true) {
                        var finish = attr.listRepeatFinish;
                        scope.$eval(finish);
                    }
                    ;
                }
                ;
            }
        };
    });
});
define('baseSet', [], function () {
    return {
        postServer: '../',
        pageHost: './'
    };
});
define('local', [], function () {
    return {
        add: function (keyName, jsonData) {
            localStorage.setItem(keyName, JSON.stringify(jsonData));
        },
        get: function (keyName) {
            return JSON.parse(localStorage.getItem(keyName));
        },
        remove: function (keyName) {
            var remove = JSON.parse(localStorage.getItem(keyName));
            localStorage.removeItem(keyName);
            return remove;
        }
    };
});
define('tools', ['local'], function (local) {
    return {
        isVar: function (a) {
            if (typeof a != 'undefined' && a != '' && a != null) {
                return a;
            } else {
                return false;
            }
        },
        extend: function (destination, source) {
            for (var property in source) {
                destination[property] = source[property];
            }
            return destination;
        },
        contains: function (a, b) {
            var i = a.length;
            while (i--) {
                if (a[i] === b) {
                    return true;
                }
            }
            return false;
        },
        mobileCheck: function (val, fn) {
            if (val != '' && val != undefined) {
                if (val.match(/^1[3|4|5|7|8][0-9]{9}$/)) {
                    fn();
                } else {
                    alert('请输入正确的手机号码');
                }
                ;
            } else {
                alert('电话号码不能为空');
            }
            ;
        },
        enterDown: function () {
            document.onkeydown = function (event) {
                var e = event || window.event || arguments.callee.caller.arguments[0];
                if (e && e.keyCode == 13) {
                    alert('OK');
                }
            };
        },
        removeVal: function (ele, fn) {
            var parent = ele.parent();
            var removeBtn = $('<a class="remove-btn icon">&#xe620;</a>');
            parent.css('position', 'relative').append(removeBtn);
            if (ele.val() != '') {
                removeBtn.show();
            }
            ;
            ele.on('input propertychange', function () {
                if ($(this).val() != '') {
                    removeBtn.show();
                } else {
                    removeBtn.hide();
                }
                ;
            });
            removeBtn.on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                ele.val('');
                $(this).hide();
                fn();
            });
        },
        shadow: function () {
            var shadow = $('<div class="shadow"></div>');
            $('body').append(shadow);
            setTimeout(function () {
                shadow.remove();
            }, 500);
        }
    };
});
(function () {
    ;
    (function (factory) {
        if (typeof define === 'function' && define.amd) {
            define('js.cookie', [], factory);
        } else if (typeof exports === 'object') {
            module.exports = factory();
        } else {
            var OldCookies = window.Cookies;
            var api = window.Cookies = factory();
            api.noConflict = function () {
                window.Cookies = OldCookies;
                return api;
            };
        }
    }(function () {
        function extend() {
            var i = 0;
            var result = {};
            for (; i < arguments.length; i++) {
                var attributes = arguments[i];
                for (var key in attributes) {
                    result[key] = attributes[key];
                }
            }
            return result;
        }
        function init(converter) {
            function api(key, value, attributes) {
                var result;
                if (typeof document === 'undefined') {
                    return;
                }
                if (arguments.length > 1) {
                    attributes = extend({ path: '/' }, api.defaults, attributes);
                    if (typeof attributes.expires === 'number') {
                        var expires = new Date();
                        expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 86400000);
                        attributes.expires = expires;
                    }
                    try {
                        result = JSON.stringify(value);
                        if (/^[\{\[]/.test(result)) {
                            value = result;
                        }
                    } catch (e) {
                    }
                    if (!converter.write) {
                        value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                    } else {
                        value = converter.write(value, key);
                    }
                    key = encodeURIComponent(String(key));
                    key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                    key = key.replace(/[\(\)]/g, escape);
                    return document.cookie = [
                        key,
                        '=',
                        value,
                        attributes.expires && '; expires=' + attributes.expires.toUTCString(),
                        attributes.path && '; path=' + attributes.path,
                        attributes.domain && '; domain=' + attributes.domain,
                        attributes.secure ? '; secure' : ''
                    ].join('');
                }
                if (!key) {
                    result = {};
                }
                var cookies = document.cookie ? document.cookie.split('; ') : [];
                var rdecode = /(%[0-9A-Z]{2})+/g;
                var i = 0;
                for (; i < cookies.length; i++) {
                    var parts = cookies[i].split('=');
                    var name = parts[0].replace(rdecode, decodeURIComponent);
                    var cookie = parts.slice(1).join('=');
                    if (cookie.charAt(0) === '"') {
                        cookie = cookie.slice(1, -1);
                    }
                    try {
                        cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);
                        if (this.json) {
                            try {
                                cookie = JSON.parse(cookie);
                            } catch (e) {
                            }
                        }
                        if (key === name) {
                            result = cookie;
                            break;
                        }
                        if (!key) {
                            result[name] = cookie;
                        }
                    } catch (e) {
                    }
                }
                return result;
            }
            api.set = api;
            api.get = function (key) {
                return api(key);
            };
            api.getJSON = function () {
                return api.apply({ json: true }, [].slice.call(arguments));
            };
            api.defaults = {};
            api.remove = function (key, attributes) {
                api(key, '', extend(attributes, { expires: -1 }));
            };
            api.withConverter = init;
            return api;
        }
        return init(function () {
        });
    }));
}.call(this));
define('checkLogin', [
    'baseSet',
    'tools',
    'js.cookie'
], function (baseSet, tools, Cookies) {
    var token = Cookies.get('token');
    console.log(token);
    return {
        check: function () {
            if (token != null && token != undefined && token != '') {
                return token;
            } else {
            }
            ;
        },
        logout: function (e) {
            Cookies.remove('token');
        }
    };
});
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define('sweetalert', [], factory) : global.Sweetalert2 = factory();
}(this, function () {
    'use strict';
    var swalPrefix = 'swal2-';
    var prefix = function (items) {
        var result = {};
        for (var i in items) {
            result[items[i]] = swalPrefix + items[i];
        }
        return result;
    };
    var swalClasses = prefix([
        'container',
        'modal',
        'overlay',
        'close',
        'content',
        'spacer',
        'confirm',
        'cancel',
        'icon',
        'image',
        'input',
        'select',
        'radio',
        'checkbox',
        'textarea',
        'validationerror'
    ]);
    var iconTypes = prefix([
        'success',
        'warning',
        'info',
        'question',
        'error'
    ]);
    var defaultParams = {
        title: '',
        text: '',
        html: '',
        type: null,
        animation: true,
        allowOutsideClick: false,
        allowEscapeKey: true,
        showConfirmButton: true,
        showCancelButton: false,
        preConfirm: null,
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6',
        confirmButtonClass: null,
        cancelButtonText: 'Cancel',
        cancelButtonColor: '#aaa',
        cancelButtonClass: null,
        buttonsStyling: true,
        reverseButtons: false,
        showCloseButton: false,
        showLoaderOnConfirm: false,
        imageUrl: null,
        imageWidth: null,
        imageHeight: null,
        imageClass: null,
        timer: null,
        width: 680,
        padding: 40,
        background: '#fff',
        input: null,
        inputPlaceholder: '',
        inputValue: '',
        inputOptions: {},
        inputAutoTrim: true,
        inputClass: null,
        inputAttributes: {},
        inputValidator: null,
        onOpen: null,
        onClose: null
    };
    var sweetHTML = '<div class="' + swalClasses.overlay + '" tabIndex="-1"></div>' + '<div class="' + swalClasses.modal + '" style="display: none" tabIndex="-1">' + '<div class="' + swalClasses.icon + ' ' + iconTypes.error + '">' + '<span class="x-mark"><span class="line left"></span><span class="line right"></span></span>' + '</div>' + '<div class="' + swalClasses.icon + ' ' + iconTypes.question + '">?</div>' + '<div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">!</div>' + '<div class="' + swalClasses.icon + ' ' + iconTypes.info + '">i</div>' + '<div class="' + swalClasses.icon + ' ' + iconTypes.success + '">' + '<span class="line tip"></span> <span class="line long"></span>' + '<div class="placeholder"></div> <div class="fix"></div>' + '</div>' + '<img class="' + swalClasses.image + '">' + '<h2></h2>' + '<div class="' + swalClasses.content + '"></div>' + '<input class="' + swalClasses.input + '">' + '<select class="' + swalClasses.select + '"></select>' + '<div class="' + swalClasses.radio + '"></div>' + '<label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">' + '<input type="checkbox" id="' + swalClasses.checkbox + '">' + '</label>' + '<textarea class="' + swalClasses.textarea + '"></textarea>' + '<div class="' + swalClasses.validationerror + '"></div>' + '<hr class="' + swalClasses.spacer + '">' + '<button class="' + swalClasses.confirm + '">OK</button>' + '<button class="' + swalClasses.cancel + '">Cancel</button>' + '<span class="' + swalClasses.close + '">&times;</span>' + '</div>';
    var extend = function (a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    };
    var colorLuminance = function (hex, lum) {
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        lum = lum || 0;
        var rgb = '#';
        for (var i = 0; i < 3; i++) {
            var c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
            rgb += ('00' + c).substr(c.length);
        }
        return rgb;
    };
    var mediaqueryId = swalPrefix + 'mediaquery';
    var states = {
        previousWindowKeyDown: null,
        previousActiveElement: null
    };
    var elementByClass = function (className) {
        return document.querySelector('.' + className);
    };
    var getModal = function () {
        return elementByClass(swalClasses.modal);
    };
    var getOverlay = function () {
        return elementByClass(swalClasses.overlay);
    };
    var getConfirmButton = function () {
        return elementByClass(swalClasses.confirm);
    };
    var getCancelButton = function () {
        return elementByClass(swalClasses.cancel);
    };
    var getCloseButton = function () {
        return elementByClass(swalClasses.close);
    };
    var hasClass = function (elem, className) {
        return elem.classList.contains(className);
    };
    var focusInput = function (input) {
        input.focus();
        var val = input.value;
        input.value = '';
        input.value = val;
    };
    var addClass = function (elem, className) {
        if (!elem || !className) {
            return;
        }
        var classes = className.split(/\s+/);
        classes.forEach(function (className) {
            elem.classList.add(className);
        });
    };
    var removeClass = function (elem, className) {
        if (!elem || !className) {
            return;
        }
        var classes = className.split(/\s+/);
        classes.forEach(function (className) {
            elem.classList.remove(className);
        });
    };
    var getChildByClass = function (elem, className) {
        for (var i = 0; i < elem.childNodes.length; i++) {
            if (hasClass(elem.childNodes[i], className)) {
                return elem.childNodes[i];
            }
        }
    };
    var _show = function (elem) {
        elem.style.opacity = '';
        elem.style.display = 'block';
    };
    var show = function (elems) {
        if (elems && !elems.length) {
            return _show(elems);
        }
        for (var i = 0; i < elems.length; ++i) {
            _show(elems[i]);
        }
    };
    var _hide = function (elem) {
        elem.style.opacity = '';
        elem.style.display = 'none';
    };
    var hide = function (elems) {
        if (elems && !elems.length) {
            return _hide(elems);
        }
        for (var i = 0; i < elems.length; ++i) {
            _hide(elems[i]);
        }
    };
    var removeStyleProperty = function (elem, property) {
        if (elem.style.removeProperty) {
            elem.style.removeProperty(property);
        } else {
            elem.style.removeAttribute(property);
        }
    };
    var getTopMargin = function (elem) {
        var elemDisplay = elem.style.display;
        elem.style.left = '-9999px';
        elem.style.display = 'block';
        var height = elem.clientHeight;
        elem.style.left = '';
        elem.style.display = elemDisplay;
        return '-' + parseInt(height / 2, 10) + 'px';
    };
    var fadeIn = function (elem, interval) {
        if (+elem.style.opacity < 1) {
            interval = interval || 16;
            elem.style.opacity = 0;
            elem.style.display = 'block';
            var last = +new Date();
            var tick = function () {
                var newOpacity = +elem.style.opacity + (new Date() - last) / 100;
                elem.style.opacity = newOpacity > 1 ? 1 : newOpacity;
                last = +new Date();
                if (+elem.style.opacity < 1) {
                    setTimeout(tick, interval);
                }
            };
            tick();
        }
    };
    var fadeOut = function (elem, interval) {
        if (+elem.style.opacity > 0) {
            interval = interval || 16;
            var opacity = elem.style.opacity;
            var last = +new Date();
            var tick = function () {
                var change = new Date() - last;
                var newOpacity = +elem.style.opacity - change / (opacity * 100);
                elem.style.opacity = newOpacity;
                last = +new Date();
                if (+elem.style.opacity > 0) {
                    setTimeout(tick, interval);
                } else {
                    _hide(elem);
                }
            };
            tick();
        }
    };
    var fireClick = function (node) {
        if (typeof MouseEvent === 'function') {
            var mevt = new MouseEvent('click', {
                view: window,
                bubbles: false,
                cancelable: true
            });
            node.dispatchEvent(mevt);
        } else if (document.createEvent) {
            var evt = document.createEvent('MouseEvents');
            evt.initEvent('click', false, false);
            node.dispatchEvent(evt);
        } else if (document.createEventObject) {
            node.fireEvent('onclick');
        } else if (typeof node.onclick === 'function') {
            node.onclick();
        }
    };
    var stopEventPropagation = function (e) {
        if (typeof e.stopPropagation === 'function') {
            e.stopPropagation();
            e.preventDefault();
        } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
            window.event.cancelBubble = true;
        }
    };
    var animationEndEvent = function () {
        var testEl = document.createElement('div'), transEndEventNames = {
                'WebkitAnimation': 'webkitAnimationEnd',
                'MozAnimation': 'animationend',
                'OAnimation': 'oAnimationEnd oanimationend',
                'msAnimation': 'MSAnimationEnd',
                'animation': 'animationend'
            };
        for (var i in transEndEventNames) {
            if (transEndEventNames.hasOwnProperty(i) && testEl.style[i] !== undefined) {
                return transEndEventNames[i];
            }
        }
        return false;
    }();
    var resetPrevState = function () {
        var modal = getModal();
        window.onkeydown = states.previousWindowKeyDown;
        if (states.previousActiveElement) {
            states.previousActiveElement.focus();
        }
        clearTimeout(modal.timeout);
        var head = document.getElementsByTagName('head')[0];
        var mediaquery = document.getElementById(mediaqueryId);
        if (mediaquery) {
            head.removeChild(mediaquery);
        }
    };
    var modalParams = extend({}, defaultParams);
    var setParameters = function (params) {
        var modal = getModal();
        for (var param in params) {
            if (!defaultParams.hasOwnProperty(param) && param !== 'extraParams') {
                console.warn('SweetAlert2: Unknown parameter "' + param + '"');
            }
        }
        modal.style.width = params.width + 'px';
        modal.style.padding = params.padding + 'px';
        modal.style.marginLeft = -params.width / 2 + 'px';
        modal.style.background = params.background;
        var head = document.getElementsByTagName('head')[0];
        var cssNode = document.createElement('style');
        cssNode.type = 'text/css';
        cssNode.id = mediaqueryId;
        var margin = 5;
        var mediaQueryMaxWidth = params.width + parseInt(params.width * (margin / 100) * 2, 10);
        cssNode.innerHTML = '@media screen and (max-width: ' + mediaQueryMaxWidth + 'px) {' + '.' + swalClasses.modal + ' {' + 'width: auto !important;' + 'left: ' + margin + '% !important;' + 'right: ' + margin + '% !important;' + 'margin-left: 0 !important;' + '}' + '}';
        head.appendChild(cssNode);
        var $title = modal.querySelector('h2');
        var $content = modal.querySelector('.' + swalClasses.content);
        var $confirmBtn = getConfirmButton();
        var $cancelBtn = getCancelButton();
        var $spacer = modal.querySelector('.' + swalClasses.spacer);
        var $closeButton = modal.querySelector('.' + swalClasses.close);
        $title.innerHTML = params.title.split('\n').join('<br>');
        if (params.text || params.html) {
            if (typeof params.html === 'object') {
                $content.innerHTML = '';
                if (0 in params.html) {
                    for (var i = 0; i in params.html; i++) {
                        $content.appendChild(params.html[i]);
                    }
                } else {
                    $content.appendChild(params.html);
                }
            } else {
                $content.innerHTML = params.html || params.text.split('\n').join('<br>');
            }
            show($content);
        } else {
            hide($content);
        }
        if (params.showCloseButton) {
            show($closeButton);
        } else {
            hide($closeButton);
        }
        modal.className = swalClasses.modal;
        if (params.customClass) {
            addClass(modal, params.customClass);
        }
        hide(modal.querySelectorAll('.' + swalClasses.icon));
        if (params.type) {
            var validType = false;
            for (var iconType in iconTypes) {
                if (params.type === iconType) {
                    validType = true;
                    break;
                }
            }
            if (!validType) {
                console.error('SweetAlert2: Unknown alert type: ' + params.type);
                return false;
            }
            var $icon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
            show($icon);
            switch (params.type) {
            case 'success':
                addClass($icon, 'animate');
                addClass($icon.querySelector('.tip'), 'animate-success-tip');
                addClass($icon.querySelector('.long'), 'animate-success-long');
                break;
            case 'error':
                addClass($icon, 'animate-error-icon');
                addClass($icon.querySelector('.x-mark'), 'animate-x-mark');
                break;
            case 'warning':
                addClass($icon, 'pulse-warning');
                break;
            default:
                break;
            }
        }
        var $customImage = modal.querySelector('.' + swalClasses.image);
        if (params.imageUrl) {
            $customImage.setAttribute('src', params.imageUrl);
            show($customImage);
            if (params.imageWidth) {
                $customImage.setAttribute('width', params.imageWidth);
            } else {
                $customImage.removeAttribute('width');
            }
            if (params.imageHeight) {
                $customImage.setAttribute('height', params.imageHeight);
            } else {
                $customImage.removeAttribute('height');
            }
            if (params.imageClass) {
                addClass($customImage, params.imageClass);
            }
        } else {
            hide($customImage);
        }
        if (params.showCancelButton) {
            $cancelBtn.style.display = 'inline-block';
        } else {
            hide($cancelBtn);
        }
        if (params.showConfirmButton) {
            removeStyleProperty($confirmBtn, 'display');
        } else {
            hide($confirmBtn);
        }
        if (!params.showConfirmButton && !params.showCancelButton) {
            hide($spacer);
        } else {
            show($spacer);
        }
        $confirmBtn.innerHTML = params.confirmButtonText;
        $cancelBtn.innerHTML = params.cancelButtonText;
        if (params.buttonsStyling) {
            $confirmBtn.style.backgroundColor = params.confirmButtonColor;
            $cancelBtn.style.backgroundColor = params.cancelButtonColor;
        }
        $confirmBtn.className = swalClasses.confirm;
        addClass($confirmBtn, params.confirmButtonClass);
        $cancelBtn.className = swalClasses.cancel;
        addClass($cancelBtn, params.cancelButtonClass);
        if (params.buttonsStyling) {
            addClass($confirmBtn, 'styled');
            addClass($cancelBtn, 'styled');
        } else {
            removeClass($confirmBtn, 'styled');
            removeClass($cancelBtn, 'styled');
            $confirmBtn.style.backgroundColor = $confirmBtn.style.borderLeftColor = $confirmBtn.style.borderRightColor = '';
            $cancelBtn.style.backgroundColor = $cancelBtn.style.borderLeftColor = $cancelBtn.style.borderRightColor = '';
        }
        if (params.animation === true) {
            removeClass(modal, 'no-animation');
        } else {
            addClass(modal, 'no-animation');
        }
    };
    var openModal = function (animation, onComplete) {
        var modal = getModal();
        if (animation) {
            fadeIn(getOverlay(), 10);
            addClass(modal, 'show-swal2');
            removeClass(modal, 'hide-swal2');
        } else {
            show(getOverlay());
        }
        show(modal);
        states.previousActiveElement = document.activeElement;
        addClass(modal, 'visible');
        if (onComplete !== null && typeof onComplete === 'function') {
            onComplete.call(this, modal);
        }
    };
    var fixVerticalPosition = function () {
        var modal = getModal();
        modal.style.marginTop = getTopMargin(modal);
    };
    function modalDependant() {
        if (arguments[0] === undefined) {
            console.error('SweetAlert2 expects at least 1 attribute!');
            return false;
        }
        var params = extend({}, modalParams);
        switch (typeof arguments[0]) {
        case 'string':
            params.title = arguments[0];
            params.text = arguments[1] || '';
            params.type = arguments[2] || '';
            break;
        case 'object':
            extend(params, arguments[0]);
            params.extraParams = arguments[0].extraParams;
            if (params.input === 'email' && params.inputValidator === null) {
                params.inputValidator = function (email) {
                    return new Promise(function (resolve, reject) {
                        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                        if (emailRegex.test(email)) {
                            resolve();
                        } else {
                            reject('Invalid email address');
                        }
                    });
                };
            }
            break;
        default:
            console.error('SweetAlert2: Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]);
            return false;
        }
        setParameters(params);
        var modal = getModal();
        return new Promise(function (resolve, reject) {
            if (params.timer) {
                modal.timeout = setTimeout(function () {
                    sweetAlert.closeModal(params.onClose);
                    reject('timer');
                }, params.timer);
            }
            var getInput = function () {
                switch (params.input) {
                case 'select':
                    return getChildByClass(modal, swalClasses.select);
                case 'radio':
                    return modal.querySelector('.' + swalClasses.radio + ' input:checked') || modal.querySelector('.' + swalClasses.radio + ' input:first-child');
                case 'checkbox':
                    return modal.querySelector('#' + swalClasses.checkbox);
                case 'textarea':
                    return getChildByClass(modal, swalClasses.textarea);
                default:
                    return getChildByClass(modal, swalClasses.input);
                }
            };
            var getInputValue = function () {
                var input = getInput();
                switch (params.input) {
                case 'checkbox':
                    return input.checked ? 1 : 0;
                case 'radio':
                    return input.checked ? input.value : null;
                case 'file':
                    return input.files.length ? input.files[0] : null;
                default:
                    return params.inputAutoTrim ? input.value.trim() : input.value;
                }
            };
            if (params.input) {
                setTimeout(function () {
                    var input = getInput();
                    if (input) {
                        focusInput(input);
                    }
                }, 0);
            }
            var confirm = function (value) {
                if (params.showLoaderOnConfirm) {
                    sweetAlert.showLoading();
                }
                if (params.preConfirm) {
                    params.preConfirm(value, params.extraParams).then(function (preConfirmValue) {
                        sweetAlert.closeModal(params.onClose);
                        resolve(preConfirmValue || value);
                    }, function (error) {
                        sweetAlert.hideLoading();
                        if (error) {
                            sweetAlert.showValidationError(error);
                        }
                    });
                } else {
                    sweetAlert.closeModal(params.onClose);
                    resolve(value);
                }
            };
            var onButtonEvent = function (event) {
                var e = event || window.event;
                var target = e.target || e.srcElement;
                var confirmBtn = getConfirmButton();
                var cancelBtn = getCancelButton();
                var targetedConfirm = confirmBtn === target || confirmBtn.contains(target);
                var targetedCancel = cancelBtn === target || cancelBtn.contains(target);
                var modalIsVisible = hasClass(modal, 'visible');
                switch (e.type) {
                case 'mouseover':
                case 'mouseup':
                    if (params.buttonsStyling) {
                        if (targetedConfirm) {
                            confirmBtn.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.1);
                        } else if (targetedCancel) {
                            cancelBtn.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.1);
                        }
                    }
                    break;
                case 'mouseout':
                    if (params.buttonsStyling) {
                        if (targetedConfirm) {
                            confirmBtn.style.backgroundColor = params.confirmButtonColor;
                        } else if (targetedCancel) {
                            cancelBtn.style.backgroundColor = params.cancelButtonColor;
                        }
                    }
                    break;
                case 'mousedown':
                    if (params.buttonsStyling) {
                        if (targetedConfirm) {
                            confirmBtn.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.2);
                        } else if (targetedCancel) {
                            cancelBtn.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.2);
                        }
                    }
                    break;
                case 'click':
                    if (targetedConfirm && modalIsVisible) {
                        if (params.input) {
                            var inputValue = getInputValue();
                            if (params.inputValidator) {
                                sweetAlert.disableInput();
                                params.inputValidator(inputValue, params.extraParams).then(function () {
                                    sweetAlert.enableInput();
                                    confirm(inputValue);
                                }, function (error) {
                                    sweetAlert.enableInput();
                                    if (error) {
                                        sweetAlert.showValidationError(error);
                                    }
                                });
                            } else {
                                confirm(inputValue);
                            }
                        } else {
                            confirm(true);
                        }
                    } else if (targetedCancel && modalIsVisible) {
                        sweetAlert.closeModal(params.onClose);
                        reject('cancel');
                    }
                    break;
                default:
                }
            };
            var $buttons = modal.querySelectorAll('button');
            var i;
            for (i = 0; i < $buttons.length; i++) {
                $buttons[i].onclick = onButtonEvent;
                $buttons[i].onmouseover = onButtonEvent;
                $buttons[i].onmouseout = onButtonEvent;
                $buttons[i].onmousedown = onButtonEvent;
            }
            getCloseButton().onclick = function () {
                sweetAlert.closeModal(params.onClose);
                reject('close');
            };
            getOverlay().onclick = function () {
                if (params.allowOutsideClick) {
                    sweetAlert.closeModal(params.onClose);
                    reject('overlay');
                }
            };
            var $confirmButton = getConfirmButton();
            var $cancelButton = getCancelButton();
            var $modalElements = [
                $confirmButton,
                $cancelButton
            ].concat(Array.prototype.slice.call(modal.querySelectorAll('button:not([class^=' + swalPrefix + ']), input:not([type=hidden]), textarea, select')));
            if (params.reverseButtons) {
                $confirmButton.parentNode.insertBefore($cancelButton, $confirmButton);
            }
            function setFocus(index, increment) {
                for (var i = 0; i < $modalElements.length; i++) {
                    index = index + increment;
                    if (index === $modalElements.length) {
                        index = 0;
                    } else if (index === -1) {
                        index = $modalElements.length - 1;
                    }
                    if ($modalElements[index].offsetWidth || $modalElements[index].offsetHeight || $modalElements[index].getClientRects().length) {
                        $modalElements[index].focus();
                        return;
                    }
                }
            }
            function handleKeyDown(event) {
                var e = event || window.event;
                var keyCode = e.keyCode || e.which;
                if ([
                        9,
                        13,
                        32,
                        27
                    ].indexOf(keyCode) === -1) {
                    return;
                }
                var $targetElement = e.target || e.srcElement;
                var btnIndex = -1;
                for (var i = 0; i < $modalElements.length; i++) {
                    if ($targetElement === $modalElements[i]) {
                        btnIndex = i;
                        break;
                    }
                }
                if (keyCode === 9) {
                    if (!e.shiftKey) {
                        setFocus(btnIndex, 1);
                    } else {
                        setFocus(btnIndex, -1);
                    }
                    stopEventPropagation(e);
                } else {
                    if (keyCode === 13 || keyCode === 32) {
                        if (btnIndex === -1) {
                            fireClick($confirmButton, e);
                        }
                    } else if (keyCode === 27 && params.allowEscapeKey === true) {
                        sweetAlert.closeModal(params.onClose);
                        reject('esc');
                    }
                }
            }
            states.previousWindowKeyDown = window.onkeydown;
            window.onkeydown = handleKeyDown;
            if (params.buttonsStyling) {
                $confirmButton.style.borderLeftColor = params.confirmButtonColor;
                $confirmButton.style.borderRightColor = params.confirmButtonColor;
            }
            sweetAlert.showLoading = sweetAlert.enableLoading = function () {
                addClass($confirmButton, 'loading');
                addClass(modal, 'loading');
                $confirmButton.disabled = true;
                $cancelButton.disabled = true;
            };
            sweetAlert.hideLoading = sweetAlert.disableLoading = function () {
                removeClass($confirmButton, 'loading');
                removeClass(modal, 'loading');
                $confirmButton.disabled = false;
                $cancelButton.disabled = false;
            };
            sweetAlert.enableButtons = function () {
                $confirmButton.disabled = false;
                $cancelButton.disabled = false;
            };
            sweetAlert.disableButtons = function () {
                $confirmButton.disabled = true;
                $cancelButton.disabled = true;
            };
            sweetAlert.enableConfirmButton = function () {
                $confirmButton.disabled = false;
            };
            sweetAlert.disableConfirmButton = function () {
                $confirmButton.disabled = true;
            };
            sweetAlert.enableInput = function () {
                var input = getInput();
                if (input.type === 'radio') {
                    var radiosContainer = input.parentNode.parentNode;
                    var radios = radiosContainer.querySelectorAll('input');
                    for (var i = 0; i < radios.length; i++) {
                        radios[i].disabled = false;
                    }
                } else {
                    input.disabled = false;
                }
            };
            sweetAlert.disableInput = function () {
                var input = getInput();
                if (input.type === 'radio') {
                    var radiosContainer = input.parentNode.parentNode;
                    var radios = radiosContainer.querySelectorAll('input');
                    for (var i = 0; i < radios.length; i++) {
                        radios[i].disabled = true;
                    }
                } else {
                    input.disabled = true;
                }
            };
            sweetAlert.showValidationError = function (error) {
                var $validationError = modal.querySelector('.' + swalClasses.validationerror);
                $validationError.innerHTML = error;
                show($validationError);
                var input = getInput();
                focusInput(input);
                addClass(input, 'error');
            };
            sweetAlert.resetValidationError = function () {
                var $validationError = modal.querySelector('.' + swalClasses.validationerror);
                hide($validationError);
                var input = getInput();
                if (input) {
                    removeClass(input, 'error');
                }
            };
            sweetAlert.enableButtons();
            sweetAlert.hideLoading();
            sweetAlert.resetValidationError();
            var inputTypes = [
                'input',
                'select',
                'radio',
                'checkbox',
                'textarea'
            ];
            var input;
            for (i = 0; i < inputTypes.length; i++) {
                var inputClass = swalClasses[inputTypes[i]];
                input = getChildByClass(modal, inputClass);
                while (input.attributes.length > 0) {
                    input.removeAttribute(input.attributes[0].name);
                }
                for (var attr in params.inputAttributes) {
                    input.setAttribute(attr, params.inputAttributes[attr]);
                }
                input.className = inputClass;
                if (params.inputClass) {
                    addClass(input, params.inputClass);
                }
                _hide(input);
            }
            var populateInputOptions;
            switch (params.input) {
            case 'text':
            case 'email':
            case 'password':
            case 'file':
                input = getChildByClass(modal, swalClasses.input);
                input.value = params.inputValue;
                input.placeholder = params.inputPlaceholder;
                input.type = params.input;
                _show(input);
                break;
            case 'select':
                var select = getChildByClass(modal, swalClasses.select);
                select.innerHTML = '';
                if (params.inputPlaceholder) {
                    var placeholder = document.createElement('option');
                    placeholder.innerHTML = params.inputPlaceholder;
                    placeholder.value = '';
                    placeholder.disabled = true;
                    placeholder.selected = true;
                    select.appendChild(placeholder);
                }
                populateInputOptions = function (inputOptions) {
                    for (var optionValue in inputOptions) {
                        var option = document.createElement('option');
                        option.value = optionValue;
                        option.innerHTML = inputOptions[optionValue];
                        if (params.inputValue === optionValue) {
                            option.selected = true;
                        }
                        select.appendChild(option);
                    }
                    _show(select);
                    select.focus();
                };
                break;
            case 'radio':
                var radio = getChildByClass(modal, swalClasses.radio);
                radio.innerHTML = '';
                populateInputOptions = function (inputOptions) {
                    for (var radioValue in inputOptions) {
                        var id = 1;
                        var radioInput = document.createElement('input');
                        var radioLabel = document.createElement('label');
                        var radioLabelSpan = document.createElement('span');
                        radioInput.type = 'radio';
                        radioInput.name = swalClasses.radio;
                        radioInput.value = radioValue;
                        radioInput.id = swalClasses.radio + '-' + id++;
                        if (params.inputValue === radioValue) {
                            radioInput.checked = true;
                        }
                        radioLabelSpan.innerHTML = inputOptions[radioValue];
                        radioLabel.appendChild(radioInput);
                        radioLabel.appendChild(radioLabelSpan);
                        radioLabel.for = radioInput.id;
                        radio.appendChild(radioLabel);
                    }
                    _show(radio);
                    var radios = radio.querySelectorAll('input');
                    if (radios.length) {
                        radios[0].focus();
                    }
                };
                break;
            case 'checkbox':
                var checkbox = getChildByClass(modal, swalClasses.checkbox);
                var checkboxInput = modal.querySelector('#' + swalClasses.checkbox);
                checkboxInput.value = 1;
                checkboxInput.checked = Boolean(params.inputValue);
                var label = checkbox.getElementsByTagName('span');
                if (label.length) {
                    checkbox.removeChild(label[0]);
                }
                label = document.createElement('span');
                label.innerHTML = params.inputPlaceholder;
                checkbox.appendChild(label);
                _show(checkbox);
                break;
            case 'textarea':
                var textarea = getChildByClass(modal, swalClasses.textarea);
                textarea.value = params.inputValue;
                textarea.placeholder = params.inputPlaceholder;
                _show(textarea);
                break;
            case null:
                break;
            default:
                console.error('SweetAlert2: Unexpected type of input! Expected "text" or "email" or "password", "select", "checkbox", "textarea" or "file", got "' + params.input + '"');
                break;
            }
            if (params.input === 'select' || params.input === 'radio') {
                if (params.inputOptions instanceof Promise) {
                    sweetAlert.showLoading();
                    params.inputOptions.then(function (inputOptions) {
                        sweetAlert.hideLoading();
                        populateInputOptions(inputOptions);
                    });
                } else if (typeof params.inputOptions === 'object') {
                    populateInputOptions(params.inputOptions);
                } else {
                    console.error('SweetAlert2: Unexpected type of inputOptions! Expected object or Promise, got ' + typeof params.inputOptions);
                }
            }
            fixVerticalPosition();
            openModal(params.animation, params.onOpen);
            setFocus(-1, 1);
        });
    }
    function sweetAlert() {
        var args = arguments;
        var modal = getModal();
        if (modal === null) {
            sweetAlert.init();
            modal = getModal();
        }
        if (hasClass(modal, 'visible')) {
            resetPrevState();
        }
        return modalDependant.apply(this, args);
    }
    sweetAlert.queue = function (steps) {
        return new Promise(function (resolve, reject) {
            (function step(i, callback) {
                if (i < steps.length) {
                    sweetAlert(steps[i]).then(function () {
                        step(i + 1, callback);
                    }, function (dismiss) {
                        reject(dismiss);
                    });
                } else {
                    resolve();
                }
            }(0));
        });
    };
    sweetAlert.close = sweetAlert.closeModal = function (onComplete) {
        var modal = getModal();
        removeClass(modal, 'show-swal2');
        addClass(modal, 'hide-swal2');
        removeClass(modal, 'visible');
        var $successIcon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes.success);
        removeClass($successIcon, 'animate');
        removeClass($successIcon.querySelector('.tip'), 'animate-success-tip');
        removeClass($successIcon.querySelector('.long'), 'animate-success-long');
        var $errorIcon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes.error);
        removeClass($errorIcon, 'animate-error-icon');
        removeClass($errorIcon.querySelector('.x-mark'), 'animate-x-mark');
        var $warningIcon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes.warning);
        removeClass($warningIcon, 'pulse-warning');
        resetPrevState();
        if (animationEndEvent && !hasClass(modal, 'no-animation')) {
            modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
                modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
                if (hasClass(modal, 'hide-swal2')) {
                    _hide(modal);
                    fadeOut(getOverlay(), 0);
                }
            });
        } else {
            _hide(modal);
            _hide(getOverlay());
        }
        if (onComplete !== null && typeof onComplete === 'function') {
            onComplete.call(this, modal);
        }
    };
    sweetAlert.clickConfirm = function () {
        getConfirmButton().click();
    };
    sweetAlert.clickCancel = function () {
        getCancelButton().click();
    };
    sweetAlert.init = function () {
        if (typeof document === 'undefined') {
            console.log('SweetAlert2 requires document to initialize');
            return;
        } else if (document.getElementsByClassName(swalClasses.container).length) {
            return;
        }
        var sweetWrap = document.createElement('div');
        sweetWrap.className = swalClasses.container;
        sweetWrap.innerHTML = sweetHTML;
        document.body.appendChild(sweetWrap);
        var modal = getModal();
        var $input = getChildByClass(modal, swalClasses.input);
        var $select = getChildByClass(modal, swalClasses.select);
        var $checkbox = modal.querySelector('#' + swalClasses.checkbox);
        var $textarea = getChildByClass(modal, swalClasses.textarea);
        $input.oninput = function () {
            sweetAlert.resetValidationError();
        };
        $input.onkeyup = function (event) {
            event.stopPropagation();
            if (event.keyCode === 13) {
                sweetAlert.clickConfirm();
            }
        };
        $select.onchange = function () {
            sweetAlert.resetValidationError();
        };
        $checkbox.onchange = function () {
            sweetAlert.resetValidationError();
        };
        $textarea.oninput = function () {
            sweetAlert.resetValidationError();
        };
        window.addEventListener('resize', fixVerticalPosition, false);
    };
    sweetAlert.setDefaults = function (userParams) {
        if (!userParams) {
            throw new Error('userParams is required');
        }
        if (typeof userParams !== 'object') {
            throw new Error('userParams has to be a object');
        }
        extend(modalParams, userParams);
    };
    sweetAlert.resetDefaults = function () {
        modalParams = extend({}, defaultParams);
    };
    sweetAlert.version = '4.0.15';
    window.sweetAlert = window.swal = sweetAlert;
    (function () {
        if (document.readyState === 'complete' || document.readyState === 'interactive' && document.body) {
            sweetAlert.init();
        } else {
            document.addEventListener('DOMContentLoaded', function onDomContentLoaded() {
                document.removeEventListener('DOMContentLoaded', onDomContentLoaded, false);
                sweetAlert.init();
            }, false);
        }
    }());
    if (typeof Promise === 'function') {
        Promise.prototype.done = function () {
            return this.catch(function () {
            });
        };
    }
    return sweetAlert;
}));
define('appServices', [
    'angular',
    'checkLogin',
    'baseSet',
    'tools',
    'jquery',
    'sweetalert'
], function (angular, c, baseSet, tools, $) {
    'use strict';
    var appServices = angular.module('app.services', []);
    appServices.service('appHttp', function ($http, $q) {
        this.appGet = function (obj) {
            var suc = obj.success ? obj.success : function (e) {
                console.log(e);
            };
            var com = obj.complete ? obj.complete : function (e) {
            };
            var err = obj.error ? obj.error : function (e) {
                console.log(e);
            };
            delete obj.success;
            delete obj.complete;
            delete obj.error;
            var getModel = {
                url: '',
                method: 'GET',
                params: '',
                headers: { 'token': c.check() }
            };
            getModel = tools.extend(getModel, obj);
            $http(getModel).then(function (response) {
                if (response.data.code == 0) {
                    suc(response.data.data);
                } else {
                    if (response.data.code == -1 || response.data.code == -99) {
                        swal({
                            title: '登录信息异常,请重新登录',
                            confirmButtonText: '确定',
                            onClose: function () {
                                window.location.href = 'oa://openLoginWindow';
                            }
                        });
                    } else {
                        swal({
                            title: '错误信息',
                            text: response.data.message,
                            type: 'error',
                            confirmButtonText: '确定'
                        });
                    }
                    ;
                }
                ;
                com(response);
            }, function (response) {
                swal({
                    title: '错误信息',
                    text: JSON.stringify(response),
                    type: 'error',
                    confirmButtonText: '确定'
                });
                err(response);
            });
        };
    });
    appServices.service('appApi', [
        'appHttp',
        function (appHttp) {
            this.indexInfo = function (params, suc, com, err) {
                appHttp.appGet({
                    url: baseSet.postServer + 'cubeservice/rest/dashboard/index',
                    params: params,
                    success: suc,
                    complete: com,
                    error: err
                });
            };
            this.hotSearch = function (params, suc, com, err) {
                appHttp.appGet({
                    url: baseSet.postServer + 'cubeservice/rest/dashboard/hotsearch',
                    params: params,
                    success: suc,
                    complete: com,
                    error: err
                });
            };
            this.ranklist = function (params, suc, com, err) {
                appHttp.appGet({
                    url: baseSet.postServer + 'cubeservice/rest/dashboard/ranklist',
                    params: params,
                    success: suc,
                    complete: com,
                    error: err
                });
            };
            this.ranktop = function (params, suc, com, err) {
                appHttp.appGet({
                    url: baseSet.postServer + 'cubeservice/rest/dashboard/ranktop',
                    params: params,
                    success: suc,
                    complete: com,
                    error: err
                });
            };
            this.allClass = function (suc, com, err) {
                appHttp.appGet({
                    url: baseSet.postServer + 'cubeservice/rest/dashboard/catalog',
                    success: suc,
                    complete: com,
                    error: err
                });
            };
            this.search = function (word, suc, com, err) {
                appHttp.appGet({
                    url: baseSet.postServer + 'cubeservice/rest/dashboard/search',
                    params: { appname: word },
                    success: suc,
                    complete: com,
                    error: err
                });
            };
            this.appOverview = function (params, suc, com, err) {
                appHttp.appGet({
                    url: baseSet.postServer + 'cubeservice/rest/basicdetail/queryAppInfo',
                    params: params,
                    success: suc,
                    complete: com,
                    error: err
                });
            };
            this.appLevel = function (params, suc, com, err) {
                appHttp.appGet({
                    url: baseSet.postServer + 'cubeservice/rest/basicdetail/queryAppInfoRate',
                    params: params,
                    success: suc,
                    complete: com,
                    error: err
                });
            };
            this.appRecharge = function (params, suc, com, err) {
                appHttp.appGet({
                    url: baseSet.postServer + 'cubeservice/rest/basicdetail/queryByHour',
                    params: params,
                    success: suc,
                    complete: com,
                    error: err
                });
            };
            this.appTotal = function (params, suc, com, err) {
                appHttp.appGet({
                    url: baseSet.postServer + 'cubeservice/rest/basicdetail/queryAppInfoAccu',
                    params: params,
                    success: suc,
                    complete: com,
                    error: err
                });
            };
            this.getFavourite = function (suc, com, err) {
                appHttp.appGet({
                    url: baseSet.postServer + 'cubeservice/rest/favourite/getAll',
                    success: suc,
                    complete: com,
                    error: err
                });
            };
            this.switchFavourite = function (id, suc, com, err) {
                appHttp.appGet({
                    method: 'POST',
                    url: baseSet.postServer + 'cubeservice/rest/favourite/follow',
                    data: { appid: id },
                    success: suc,
                    complete: com,
                    error: err
                });
            };
        }
    ]);
});
!function (a, b, c, d) {
    'use strict';
    function e(a, b, c) {
        return setTimeout(j(a, c), b);
    }
    function f(a, b, c) {
        return Array.isArray(a) ? (g(a, c[b], c), !0) : !1;
    }
    function g(a, b, c) {
        var e;
        if (a)
            if (a.forEach)
                a.forEach(b, c);
            else if (a.length !== d)
                for (e = 0; e < a.length;)
                    b.call(c, a[e], e, a), e++;
            else
                for (e in a)
                    a.hasOwnProperty(e) && b.call(c, a[e], e, a);
    }
    function h(b, c, d) {
        var e = 'DEPRECATED METHOD: ' + c + '\n' + d + ' AT \n';
        return function () {
            var c = new Error('get-stack-trace'), d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace', f = a.console && (a.console.warn || a.console.log);
            return f && f.call(a.console, e, d), b.apply(this, arguments);
        };
    }
    function i(a, b, c) {
        var d, e = b.prototype;
        d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c);
    }
    function j(a, b) {
        return function () {
            return a.apply(b, arguments);
        };
    }
    function k(a, b) {
        return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a;
    }
    function l(a, b) {
        return a === d ? b : a;
    }
    function m(a, b, c) {
        g(q(b), function (b) {
            a.addEventListener(b, c, !1);
        });
    }
    function n(a, b, c) {
        g(q(b), function (b) {
            a.removeEventListener(b, c, !1);
        });
    }
    function o(a, b) {
        for (; a;) {
            if (a == b)
                return !0;
            a = a.parentNode;
        }
        return !1;
    }
    function p(a, b) {
        return a.indexOf(b) > -1;
    }
    function q(a) {
        return a.trim().split(/\s+/g);
    }
    function r(a, b, c) {
        if (a.indexOf && !c)
            return a.indexOf(b);
        for (var d = 0; d < a.length;) {
            if (c && a[d][c] == b || !c && a[d] === b)
                return d;
            d++;
        }
        return -1;
    }
    function s(a) {
        return Array.prototype.slice.call(a, 0);
    }
    function t(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length;) {
            var g = b ? a[f][b] : a[f];
            r(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
        }
        return c && (d = b ? d.sort(function (a, c) {
            return a[b] > c[b];
        }) : d.sort()), d;
    }
    function u(a, b) {
        for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
            if (c = ma[g], e = c ? c + f : b, e in a)
                return e;
            g++;
        }
        return d;
    }
    function v() {
        return ua++;
    }
    function w(b) {
        var c = b.ownerDocument || b;
        return c.defaultView || c.parentWindow || a;
    }
    function x(a, b) {
        var c = this;
        this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
            k(a.options.enable, [a]) && c.handler(b);
        }, this.init();
    }
    function y(a) {
        var b, c = a.options.inputClass;
        return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z);
    }
    function z(a, b, c) {
        var d = c.pointers.length, e = c.changedPointers.length, f = b & Ea && d - e === 0, g = b & (Ga | Ha) && d - e === 0;
        c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit('hammer.input', c), a.recognize(c), a.session.prevInput = c;
    }
    function A(a, b) {
        var c = a.session, d = b.pointers, e = d.length;
        c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput, g = c.firstMultiple, h = g ? g.center : f.center, i = b.center = E(d);
        b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);
        var j = F(b.deltaTime, b.deltaX, b.deltaY);
        b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);
        var k = a.element;
        o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k;
    }
    function B(a, b) {
        var c = b.center, d = a.offsetDelta || {}, e = a.prevDelta || {}, f = a.prevInput || {};
        b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        }, d = a.offsetDelta = {
            x: c.x,
            y: c.y
        }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
    }
    function C(a, b) {
        var c, e, f, g, h = a.lastInterval || b, i = b.timeStamp - h.timeStamp;
        if (b.eventType != Ha && (i > Da || h.velocity === d)) {
            var j = b.deltaX - h.deltaX, k = b.deltaY - h.deltaY, l = F(i, j, k);
            e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b;
        } else
            c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
        b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g;
    }
    function D(a) {
        for (var b = [], c = 0; c < a.pointers.length;)
            b[c] = {
                clientX: pa(a.pointers[c].clientX),
                clientY: pa(a.pointers[c].clientY)
            }, c++;
        return {
            timeStamp: ra(),
            pointers: b,
            center: E(b),
            deltaX: a.deltaX,
            deltaY: a.deltaY
        };
    }
    function E(a) {
        var b = a.length;
        if (1 === b)
            return {
                x: pa(a[0].clientX),
                y: pa(a[0].clientY)
            };
        for (var c = 0, d = 0, e = 0; b > e;)
            c += a[e].clientX, d += a[e].clientY, e++;
        return {
            x: pa(c / b),
            y: pa(d / b)
        };
    }
    function F(a, b, c) {
        return {
            x: b / a || 0,
            y: c / a || 0
        };
    }
    function G(a, b) {
        return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma;
    }
    function H(a, b, c) {
        c || (c = Qa);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e);
    }
    function I(a, b, c) {
        c || (c = Qa);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI;
    }
    function J(a, b) {
        return I(b[1], b[0], Ra) + I(a[1], a[0], Ra);
    }
    function K(a, b) {
        return H(b[0], b[1], Ra) / H(a[0], a[1], Ra);
    }
    function L() {
        this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments);
    }
    function M() {
        this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
    }
    function N() {
        this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments);
    }
    function O(a, b) {
        var c = s(a.touches), d = s(a.changedTouches);
        return b & (Ga | Ha) && (c = t(c.concat(d), 'identifier', !0)), [
            c,
            d
        ];
    }
    function P() {
        this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments);
    }
    function Q(a, b) {
        var c = s(a.touches), d = this.targetIds;
        if (b & (Ea | Fa) && 1 === c.length)
            return d[c[0].identifier] = !0, [
                c,
                c
            ];
        var e, f, g = s(a.changedTouches), h = [], i = this.target;
        if (f = c.filter(function (a) {
                return o(a.target, i);
            }), b === Ea)
            for (e = 0; e < f.length;)
                d[f[e].identifier] = !0, e++;
        for (e = 0; e < g.length;)
            d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;
        return h.length ? [
            t(f.concat(h), 'identifier', !0),
            h
        ] : void 0;
    }
    function R() {
        x.apply(this, arguments);
        var a = j(this.handler, this);
        this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = [];
    }
    function S(a, b) {
        a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b);
    }
    function T(a) {
        var b = a.changedPointers[0];
        if (b.identifier === this.primaryTouch) {
            var c = {
                x: b.clientX,
                y: b.clientY
            };
            this.lastTouches.push(c);
            var d = this.lastTouches, e = function () {
                    var a = d.indexOf(c);
                    a > -1 && d.splice(a, 1);
                };
            setTimeout(e, cb);
        }
    }
    function U(a) {
        for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
            var e = this.lastTouches[d], f = Math.abs(b - e.x), g = Math.abs(c - e.y);
            if (db >= f && db >= g)
                return !0;
        }
        return !1;
    }
    function V(a, b) {
        this.manager = a, this.set(b);
    }
    function W(a) {
        if (p(a, jb))
            return jb;
        var b = p(a, kb), c = p(a, lb);
        return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb;
    }
    function X() {
        if (!fb)
            return !1;
        var b = {}, c = a.CSS && a.CSS.supports;
        return [
            'auto',
            'manipulation',
            'pan-y',
            'pan-x',
            'pan-x pan-y',
            'none'
        ].forEach(function (d) {
            b[d] = c ? a.CSS.supports('touch-action', d) : !0;
        }), b;
    }
    function Y(a) {
        this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = [];
    }
    function Z(a) {
        return a & sb ? 'cancel' : a & qb ? 'end' : a & pb ? 'move' : a & ob ? 'start' : '';
    }
    function $(a) {
        return a == Ma ? 'down' : a == La ? 'up' : a == Ja ? 'left' : a == Ka ? 'right' : '';
    }
    function _(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a;
    }
    function aa() {
        Y.apply(this, arguments);
    }
    function ba() {
        aa.apply(this, arguments), this.pX = null, this.pY = null;
    }
    function ca() {
        aa.apply(this, arguments);
    }
    function da() {
        Y.apply(this, arguments), this._timer = null, this._input = null;
    }
    function ea() {
        aa.apply(this, arguments);
    }
    function fa() {
        aa.apply(this, arguments);
    }
    function ga() {
        Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
    }
    function ha(a, b) {
        return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b);
    }
    function ia(a, b) {
        this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function (a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
        }, this);
    }
    function ja(a, b) {
        var c = a.element;
        if (c.style) {
            var d;
            g(a.options.cssProps, function (e, f) {
                d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || '';
            }), b || (a.oldCssProps = {});
        }
    }
    function ka(a, c) {
        var d = b.createEvent('Event');
        d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
    }
    var la, ma = [
            '',
            'webkit',
            'Moz',
            'MS',
            'ms',
            'o'
        ], na = b.createElement('div'), oa = 'function', pa = Math.round, qa = Math.abs, ra = Date.now;
    la = 'function' != typeof Object.assign ? function (a) {
        if (a === d || null === a)
            throw new TypeError('Cannot convert undefined or null to object');
        for (var b = Object(a), c = 1; c < arguments.length; c++) {
            var e = arguments[c];
            if (e !== d && null !== e)
                for (var f in e)
                    e.hasOwnProperty(f) && (b[f] = e[f]);
        }
        return b;
    } : Object.assign;
    var sa = h(function (a, b, c) {
            for (var e = Object.keys(b), f = 0; f < e.length;)
                (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
            return a;
        }, 'extend', 'Use `assign`.'), ta = h(function (a, b) {
            return sa(a, b, !0);
        }, 'merge', 'Use `assign`.'), ua = 1, va = /mobile|tablet|ip(ad|hone|od)|android/i, wa = 'ontouchstart' in a, xa = u(a, 'PointerEvent') !== d, ya = wa && va.test(navigator.userAgent), za = 'touch', Aa = 'pen', Ba = 'mouse', Ca = 'kinect', Da = 25, Ea = 1, Fa = 2, Ga = 4, Ha = 8, Ia = 1, Ja = 2, Ka = 4, La = 8, Ma = 16, Na = Ja | Ka, Oa = La | Ma, Pa = Na | Oa, Qa = [
            'x',
            'y'
        ], Ra = [
            'clientX',
            'clientY'
        ];
    x.prototype = {
        handler: function () {
        },
        init: function () {
            this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler);
        },
        destroy: function () {
            this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler);
        }
    };
    var Sa = {
            mousedown: Ea,
            mousemove: Fa,
            mouseup: Ga
        }, Ta = 'mousedown', Ua = 'mousemove mouseup';
    i(L, x, {
        handler: function (a) {
            var b = Sa[a.type];
            b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, {
                pointers: [a],
                changedPointers: [a],
                pointerType: Ba,
                srcEvent: a
            }));
        }
    });
    var Va = {
            pointerdown: Ea,
            pointermove: Fa,
            pointerup: Ga,
            pointercancel: Ha,
            pointerout: Ha
        }, Wa = {
            2: za,
            3: Aa,
            4: Ba,
            5: Ca
        }, Xa = 'pointerdown', Ya = 'pointermove pointerup pointercancel';
    a.MSPointerEvent && !a.PointerEvent && (Xa = 'MSPointerDown', Ya = 'MSPointerMove MSPointerUp MSPointerCancel'), i(M, x, {
        handler: function (a) {
            var b = this.store, c = !1, d = a.type.toLowerCase().replace('ms', ''), e = Va[d], f = Wa[a.pointerType] || a.pointerType, g = f == za, h = r(b, a.pointerId, 'pointerId');
            e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a
            }), c && b.splice(h, 1));
        }
    });
    var Za = {
            touchstart: Ea,
            touchmove: Fa,
            touchend: Ga,
            touchcancel: Ha
        }, $a = 'touchstart', _a = 'touchstart touchmove touchend touchcancel';
    i(N, x, {
        handler: function (a) {
            var b = Za[a.type];
            if (b === Ea && (this.started = !0), this.started) {
                var c = O.call(this, a, b);
                b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: za,
                    srcEvent: a
                });
            }
        }
    });
    var ab = {
            touchstart: Ea,
            touchmove: Fa,
            touchend: Ga,
            touchcancel: Ha
        }, bb = 'touchstart touchmove touchend touchcancel';
    i(P, x, {
        handler: function (a) {
            var b = ab[a.type], c = Q.call(this, a, b);
            c && this.callback(this.manager, b, {
                pointers: c[0],
                changedPointers: c[1],
                pointerType: za,
                srcEvent: a
            });
        }
    });
    var cb = 2500, db = 25;
    i(R, x, {
        handler: function (a, b, c) {
            var d = c.pointerType == za, e = c.pointerType == Ba;
            if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
                if (d)
                    S.call(this, b, c);
                else if (e && U.call(this, c))
                    return;
                this.callback(a, b, c);
            }
        },
        destroy: function () {
            this.touch.destroy(), this.mouse.destroy();
        }
    });
    var eb = u(na.style, 'touchAction'), fb = eb !== d, gb = 'compute', hb = 'auto', ib = 'manipulation', jb = 'none', kb = 'pan-x', lb = 'pan-y', mb = X();
    V.prototype = {
        set: function (a) {
            a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim();
        },
        update: function () {
            this.set(this.manager.options.touchAction);
        },
        compute: function () {
            var a = [];
            return g(this.manager.recognizers, function (b) {
                k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
            }), W(a.join(' '));
        },
        preventDefaults: function (a) {
            var b = a.srcEvent, c = a.offsetDirection;
            if (this.manager.session.prevented)
                return void b.preventDefault();
            var d = this.actions, e = p(d, jb) && !mb[jb], f = p(d, lb) && !mb[lb], g = p(d, kb) && !mb[kb];
            if (e) {
                var h = 1 === a.pointers.length, i = a.distance < 2, j = a.deltaTime < 250;
                if (h && i && j)
                    return;
            }
            return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0;
        },
        preventSrc: function (a) {
            this.manager.session.prevented = !0, a.preventDefault();
        }
    };
    var nb = 1, ob = 2, pb = 4, qb = 8, rb = qb, sb = 16, tb = 32;
    Y.prototype = {
        defaults: {},
        set: function (a) {
            return la(this.options, a), this.manager && this.manager.touchAction.update(), this;
        },
        recognizeWith: function (a) {
            if (f(a, 'recognizeWith', this))
                return this;
            var b = this.simultaneous;
            return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
        },
        dropRecognizeWith: function (a) {
            return f(a, 'dropRecognizeWith', this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this);
        },
        requireFailure: function (a) {
            if (f(a, 'requireFailure', this))
                return this;
            var b = this.requireFail;
            return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this;
        },
        dropRequireFailure: function (a) {
            if (f(a, 'dropRequireFailure', this))
                return this;
            a = _(a, this);
            var b = r(this.requireFail, a);
            return b > -1 && this.requireFail.splice(b, 1), this;
        },
        hasRequireFailures: function () {
            return this.requireFail.length > 0;
        },
        canRecognizeWith: function (a) {
            return !!this.simultaneous[a.id];
        },
        emit: function (a) {
            function b(b) {
                c.manager.emit(b, a);
            }
            var c = this, d = this.state;
            qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d));
        },
        tryEmit: function (a) {
            return this.canEmit() ? this.emit(a) : void (this.state = tb);
        },
        canEmit: function () {
            for (var a = 0; a < this.requireFail.length;) {
                if (!(this.requireFail[a].state & (tb | nb)))
                    return !1;
                a++;
            }
            return !0;
        },
        recognize: function (a) {
            var b = la({}, a);
            return k(this.options.enable, [
                this,
                b
            ]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void (this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void (this.state = tb));
        },
        process: function (a) {
        },
        getTouchAction: function () {
        },
        reset: function () {
        }
    }, i(aa, Y, {
        defaults: { pointers: 1 },
        attrTest: function (a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b;
        },
        process: function (a) {
            var b = this.state, c = a.eventType, d = b & (ob | pb), e = this.attrTest(a);
            return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb;
        }
    }), i(ba, aa, {
        defaults: {
            event: 'pan',
            threshold: 10,
            pointers: 1,
            direction: Pa
        },
        getTouchAction: function () {
            var a = this.options.direction, b = [];
            return a & Na && b.push(lb), a & Oa && b.push(kb), b;
        },
        directionTest: function (a) {
            var b = this.options, c = !0, d = a.distance, e = a.direction, f = a.deltaX, g = a.deltaY;
            return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction;
        },
        attrTest: function (a) {
            return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a));
        },
        emit: function (a) {
            this.pX = a.deltaX, this.pY = a.deltaY;
            var b = $(a.direction);
            b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a);
        }
    }), i(ca, aa, {
        defaults: {
            event: 'pinch',
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function () {
            return [jb];
        },
        attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob);
        },
        emit: function (a) {
            if (1 !== a.scale) {
                var b = a.scale < 1 ? 'in' : 'out';
                a.additionalEvent = this.options.event + b;
            }
            this._super.emit.call(this, a);
        }
    }), i(da, Y, {
        defaults: {
            event: 'press',
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function () {
            return [hb];
        },
        process: function (a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, f = a.deltaTime > b.time;
            if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f)
                this.reset();
            else if (a.eventType & Ea)
                this.reset(), this._timer = e(function () {
                    this.state = rb, this.tryEmit();
                }, b.time, this);
            else if (a.eventType & Ga)
                return rb;
            return tb;
        },
        reset: function () {
            clearTimeout(this._timer);
        },
        emit: function (a) {
            this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + 'up', a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)));
        }
    }), i(ea, aa, {
        defaults: {
            event: 'rotate',
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function () {
            return [jb];
        },
        attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob);
        }
    }), i(fa, aa, {
        defaults: {
            event: 'swipe',
            threshold: 10,
            velocity: 0.3,
            direction: Na | Oa,
            pointers: 1
        },
        getTouchAction: function () {
            return ba.prototype.getTouchAction.call(this);
        },
        attrTest: function (a) {
            var b, c = this.options.direction;
            return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga;
        },
        emit: function (a) {
            var b = $(a.offsetDirection);
            b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
        }
    }), i(ga, Y, {
        defaults: {
            event: 'tap',
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function () {
            return [ib];
        },
        process: function (a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, f = a.deltaTime < b.time;
            if (this.reset(), a.eventType & Ea && 0 === this.count)
                return this.failTimeout();
            if (d && f && c) {
                if (a.eventType != Ga)
                    return this.failTimeout();
                var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0, h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
                var i = this.count % b.taps;
                if (0 === i)
                    return this.hasRequireFailures() ? (this._timer = e(function () {
                        this.state = rb, this.tryEmit();
                    }, b.interval, this), ob) : rb;
            }
            return tb;
        },
        failTimeout: function () {
            return this._timer = e(function () {
                this.state = tb;
            }, this.options.interval, this), tb;
        },
        reset: function () {
            clearTimeout(this._timer);
        },
        emit: function () {
            this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
        }
    }), ha.VERSION = '2.0.8', ha.defaults = {
        domEvents: !1,
        touchAction: gb,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
            [
                ea,
                { enable: !1 }
            ],
            [
                ca,
                { enable: !1 },
                ['rotate']
            ],
            [
                fa,
                { direction: Na }
            ],
            [
                ba,
                { direction: Na },
                ['swipe']
            ],
            [ga],
            [
                ga,
                {
                    event: 'doubletap',
                    taps: 2
                },
                ['tap']
            ],
            [da]
        ],
        cssProps: {
            userSelect: 'none',
            touchSelect: 'none',
            touchCallout: 'none',
            contentZooming: 'none',
            userDrag: 'none',
            tapHighlightColor: 'rgba(0,0,0,0)'
        }
    };
    var ub = 1, vb = 2;
    ia.prototype = {
        set: function (a) {
            return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this;
        },
        stop: function (a) {
            this.session.stopped = a ? vb : ub;
        },
        recognize: function (a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers, e = b.curRecognizer;
                (!e || e && e.state & rb) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length;)
                    c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++;
            }
        },
        get: function (a) {
            if (a instanceof Y)
                return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++)
                if (b[c].options.event == a)
                    return b[c];
            return null;
        },
        add: function (a) {
            if (f(a, 'add', this))
                return this;
            var b = this.get(a.options.event);
            return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a;
        },
        remove: function (a) {
            if (f(a, 'remove', this))
                return this;
            if (a = this.get(a)) {
                var b = this.recognizers, c = r(b, a);
                -1 !== c && (b.splice(c, 1), this.touchAction.update());
            }
            return this;
        },
        on: function (a, b) {
            if (a !== d && b !== d) {
                var c = this.handlers;
                return g(q(a), function (a) {
                    c[a] = c[a] || [], c[a].push(b);
                }), this;
            }
        },
        off: function (a, b) {
            if (a !== d) {
                var c = this.handlers;
                return g(q(a), function (a) {
                    b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a];
                }), this;
            }
        },
        emit: function (a, b) {
            this.options.domEvents && ka(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a, b.preventDefault = function () {
                    b.srcEvent.preventDefault();
                };
                for (var d = 0; d < c.length;)
                    c[d](b), d++;
            }
        },
        destroy: function () {
            this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
        }
    }, la(ha, {
        INPUT_START: Ea,
        INPUT_MOVE: Fa,
        INPUT_END: Ga,
        INPUT_CANCEL: Ha,
        STATE_POSSIBLE: nb,
        STATE_BEGAN: ob,
        STATE_CHANGED: pb,
        STATE_ENDED: qb,
        STATE_RECOGNIZED: rb,
        STATE_CANCELLED: sb,
        STATE_FAILED: tb,
        DIRECTION_NONE: Ia,
        DIRECTION_LEFT: Ja,
        DIRECTION_RIGHT: Ka,
        DIRECTION_UP: La,
        DIRECTION_DOWN: Ma,
        DIRECTION_HORIZONTAL: Na,
        DIRECTION_VERTICAL: Oa,
        DIRECTION_ALL: Pa,
        Manager: ia,
        Input: x,
        TouchAction: V,
        TouchInput: P,
        MouseInput: L,
        PointerEventInput: M,
        TouchMouseInput: R,
        SingleTouchInput: N,
        Recognizer: Y,
        AttrRecognizer: aa,
        Tap: ga,
        Pan: ba,
        Swipe: fa,
        Pinch: ca,
        Rotate: ea,
        Press: da,
        on: m,
        off: n,
        each: g,
        merge: ta,
        extend: sa,
        assign: la,
        inherit: i,
        bindFn: j,
        prefixed: u
    });
    var wb = 'undefined' != typeof a ? a : 'undefined' != typeof self ? self : {};
    wb.Hammer = ha, 'function' == typeof define && define.amd ? define('Hammer', [], function () {
        return ha;
    }) : 'undefined' != typeof module && module.exports ? module.exports = ha : a[c] = ha;
}(window, document, 'Hammer');
define('appTouch', [
    'angular',
    'Hammer'
], function (angular) {
    'use strict';
    var appTouch = angular.module('app.touch', []);
    var HGESTURES = {
        hmDoubletap: 'doubletap',
        hmDragstart: 'panstart',
        hmDrag: 'pan',
        hmDragup: 'panup',
        hmDragdown: 'pandown',
        hmDragleft: 'panleft',
        hmDragright: 'panright',
        hmDragend: 'panend',
        hmPanstart: 'panstart',
        hmPan: 'pan',
        hmPanup: 'panup',
        hmPandown: 'pandown',
        hmPanleft: 'panleft',
        hmPanright: 'panright',
        hmPanend: 'panend',
        hmHold: 'press',
        hmPinch: 'pinch',
        hmPinchin: 'pinchin',
        hmPinchout: 'pinchout',
        hmPress: 'press',
        hmRelease: 'release',
        hmRotate: 'rotate',
        hmSwipe: 'swipe',
        hmSwipeup: 'swipeup',
        hmSwipedown: 'swipedown',
        hmSwipeleft: 'swipeleft',
        hmSwiperight: 'swiperight',
        hmTap: 'tap',
        hmTouch: 'touch',
        hmTransformstart: 'transformstart',
        hmTransform: 'transform',
        hmTransformend: 'transformend'
    };
    var HRECOGNIZERS = {
        hmDoubletap: [
            Hammer.Tap,
            'Hammer.Tap'
        ],
        hmDragstart: [
            Hammer.Pan,
            'Hammer.Pan'
        ],
        hmDrag: [
            Hammer.Pan,
            'Hammer.Pan'
        ],
        hmDragup: [
            Hammer.Pan,
            'Hammer.Pan'
        ],
        hmDragdown: [
            Hammer.Pan,
            'Hammer.Pan'
        ],
        hmDragleft: [
            Hammer.Pan,
            'Hammer.Pan'
        ],
        hmDragright: [
            Hammer.Pan,
            'Hammer.Pan'
        ],
        hmDragend: [
            Hammer.Pan,
            'Hammer.Pan'
        ],
        hmPanstart: [
            Hammer.Pan,
            'Hammer.Pan'
        ],
        hmPan: [
            Hammer.Pan,
            'Hammer.Pan'
        ],
        hmPanup: [
            Hammer.Pan,
            'Hammer.Pan'
        ],
        hmPandown: [
            Hammer.Pan,
            'Hammer.Pan'
        ],
        hmPanleft: [
            Hammer.Pan,
            'Hammer.Pan'
        ],
        hmPanright: [
            Hammer.Pan,
            'Hammer.Pan'
        ],
        hmPanend: [
            Hammer.Pan,
            'Hammer.Pan'
        ],
        hmHold: [
            Hammer.Press,
            'Hammer.Press'
        ],
        hmPinch: [
            Hammer.Pinch,
            'Hammer.Pinch'
        ],
        hmPinchin: [
            Hammer.Pinch,
            'Hammer.Pinch'
        ],
        hmPinchout: [
            Hammer.Pinch,
            'Hammer.Pinch'
        ],
        hmPress: [
            Hammer.Press,
            'Hammer.Press'
        ],
        hmRotate: [
            Hammer.Rotate,
            'Hammer.Rotate'
        ],
        hmSwipe: [
            Hammer.Swipe,
            'Hammer.Swipe'
        ],
        hmSwipeup: [
            Hammer.Swipe,
            'Hammer.Swipe'
        ],
        hmSwipedown: [
            Hammer.Swipe,
            'Hammer.Swipe'
        ],
        hmSwipeleft: [
            Hammer.Swipe,
            'Hammer.Swipe'
        ],
        hmSwiperight: [
            Hammer.Swipe,
            'Hammer.Swipe'
        ],
        hmTap: [
            Hammer.Tap,
            'Hammer.Tap'
        ]
    };
    var VERBOSE = false;
    angular.forEach(HGESTURES, function (eventName, directiveName) {
        appTouch.directive(directiveName, [
            '$parse',
            '$log',
            '$timeout',
            'hammerDefaultOpts',
            function ($parse, $log, $timeout, hammerDefaultOpts) {
                return function (scope, element, attr) {
                    var handler;
                    attr.$observe(directiveName, function (value) {
                        var callback = $parse(value);
                        var opts = $parse(attr[directiveName + 'Opts'])(scope, {});
                        var defaultOpts = angular.copy(hammerDefaultOpts);
                        angular.extend(defaultOpts, opts);
                        if (angular.isUndefined(element.hammertime)) {
                            var recognizers = angular.isDefined(defaultOpts.recognizers) ? defaultOpts.recognizers : [];
                            var recognizer = HRECOGNIZERS[directiveName];
                            if (angular.isDefined(recognizer)) {
                                var enabled = false;
                                angular.forEach(recognizers, function (r) {
                                    if (recognizer[0] === r[0]) {
                                        if (angular.isUndefined(r[1].enable) || r[1].enable === true) {
                                            enabled = true;
                                        }
                                    }
                                });
                                if (!enabled) {
                                    throw new Error('Directive ' + directiveName + ' requires gesture recognizer [' + recognizer[1] + '] to be enabled');
                                }
                            }
                            element.hammer = new Hammer.Manager(element[0], defaultOpts);
                            scope.$on('$destroy', function () {
                                element.hammer.off(eventName);
                                element.hammer.destroy();
                            });
                        }
                        handler = function (event) {
                            if (VERBOSE) {
                                $log.debug('app-touch: ', eventName, event);
                            }
                            var callbackHandler = function () {
                                var cb = callback(scope, { $event: event });
                                if (typeof cb === 'function') {
                                    cb.call(scope, event);
                                }
                            };
                            if (scope.$root.$$phase === '$apply' || scope.$root.$$phase === '$digest') {
                                callbackHandler();
                            } else {
                                scope.$apply(callbackHandler);
                            }
                        };
                        element.hammer.on(eventName, handler);
                    });
                };
            }
        ]);
    });
    appTouch.provider('hammerDefaultOpts', function HammerDefaultOptsProvider() {
        var opts = {};
        this.set = function (value) {
            angular.extend(opts, value);
        };
        this.$get = function () {
            return opts;
        };
    });
});
(function () {
    !function (a, b) {
        'function' == typeof define && define.amd ? define('countUp', ['jquery'], b) : 'object' == typeof exports ? module.exports = b(require, exports, module) : a.CountUp = b();
    }(this, function () {
        var d = function (a, b, c, d, e, f) {
            for (var g = 0, h = [
                        'webkit',
                        'moz',
                        'ms',
                        'o'
                    ], i = 0; i < h.length && !window.requestAnimationFrame; ++i)
                window.requestAnimationFrame = window[h[i] + 'RequestAnimationFrame'], window.cancelAnimationFrame = window[h[i] + 'CancelAnimationFrame'] || window[h[i] + 'CancelRequestAnimationFrame'];
            window.requestAnimationFrame || (window.requestAnimationFrame = function (a) {
                var c = new Date().getTime(), d = Math.max(0, 16 - (c - g)), e = window.setTimeout(function () {
                        a(c + d);
                    }, d);
                return g = c + d, e;
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (a) {
                clearTimeout(a);
            }), this.options = {
                useEasing: !0,
                useGrouping: !0,
                separator: ',',
                decimal: '.'
            };
            for (var j in f)
                f.hasOwnProperty(j) && (this.options[j] = f[j]);
            '' === this.options.separator && (this.options.useGrouping = !1), this.options.prefix || (this.options.prefix = ''), this.options.suffix || (this.options.suffix = ''), this.d = 'string' == typeof a ? document.getElementById(a) : a, this.startVal = Number(b), isNaN(b) && (this.startVal = Number(b.match(/[\d]+/g).join(''))), this.endVal = Number(c), isNaN(c) && (this.endVal = Number(c.match(/[\d]+/g).join(''))), this.countDown = this.startVal > this.endVal, this.frameVal = this.startVal, this.decimals = Math.max(0, d || 0), this.dec = Math.pow(10, this.decimals), this.duration = 1000 * Number(e) || 2000;
            var k = this;
            this.version = function () {
                return '1.5.3';
            }, this.printValue = function (a) {
                var b = isNaN(a) ? '--' : k.formatNumber(a);
                'INPUT' == k.d.tagName ? this.d.value = b : 'text' == k.d.tagName ? this.d.textContent = b : this.d.innerHTML = b;
            }, this.easeOutExpo = function (a, b, c, d) {
                return 1024 * c * (-Math.pow(2, -10 * a / d) + 1) / 1023 + b;
            }, this.count = function (a) {
                k.startTime || (k.startTime = a), k.timestamp = a;
                var b = a - k.startTime;
                k.remaining = k.duration - b, k.frameVal = k.options.useEasing ? k.countDown ? k.startVal - k.easeOutExpo(b, 0, k.startVal - k.endVal, k.duration) : k.easeOutExpo(b, k.startVal, k.endVal - k.startVal, k.duration) : k.countDown ? k.startVal - (k.startVal - k.endVal) * (b / k.duration) : k.startVal + (k.endVal - k.startVal) * (b / k.duration), k.frameVal = k.countDown ? k.frameVal < k.endVal ? k.endVal : k.frameVal : k.frameVal > k.endVal ? k.endVal : k.frameVal, k.frameVal = Math.round(k.frameVal * k.dec) / k.dec, k.printValue(k.frameVal), b < k.duration ? k.rAF = requestAnimationFrame(k.count) : k.callback && k.callback();
            }, this.start = function (a) {
                return k.callback = a, isNaN(k.endVal) || isNaN(k.startVal) || k.startVal === k.endVal ? (console.log('countUp error: startVal or endVal is not a number'), k.printValue(c)) : k.rAF = requestAnimationFrame(k.count), !1;
            }, this.pauseResume = function () {
                k.paused ? (k.paused = !1, delete k.startTime, k.duration = k.remaining, k.startVal = k.frameVal, requestAnimationFrame(k.count)) : (k.paused = !0, cancelAnimationFrame(k.rAF));
            }, this.reset = function () {
                k.paused = !1, delete k.startTime, k.startVal = b, cancelAnimationFrame(k.rAF), k.printValue(k.startVal);
            }, this.update = function (a) {
                cancelAnimationFrame(k.rAF), k.paused = !1, delete k.startTime, k.startVal = k.frameVal, k.endVal = Number(a), k.countDown = k.startVal > k.endVal, k.rAF = requestAnimationFrame(k.count);
            }, this.formatNumber = function (a) {
                a = a.toFixed(k.decimals), a += '';
                var b, c, d, e;
                if (b = a.split('.'), c = b[0], d = b.length > 1 ? k.options.decimal + b[1] : '', e = /(\d+)(\d{3})/, k.options.useGrouping)
                    for (; e.test(c);)
                        c = c.replace(e, '$1' + k.options.separator + '$2');
                return k.options.prefix + c + d + k.options.suffix;
            }, k.printValue(k.startVal);
        };
        return d;
    });
}.call(this));
(function () {
    define('loader', [
        'jquery',
        'jquery'
    ], function (a) {
        a.fn.loader = function (options) {
            $.fn.loader.defaults = {
                isBG: true,
                isTag: true,
                tagCon: '正在提交数据\uFF0C请勿关闭浏览器\uFF0C否则可能提交失败!',
                color: '#f16568',
                center: true,
                pos: 'fixed'
            };
            var opts = $.extend({}, $.fn.loader.defaults, options), $this = $(this);
            var posStyle = opts.pos == 'fixed' ? 'fixed' : 'absolute';
            var shadow_html = opts.isBG ? '<div class="bg-shadow" style="position:' + posStyle + '"></div>' : '';
            var tag_html = opts.isTag ? '<div class="page-tag" style="position:' + posStyle + '">' + opts.tagCon + '</div>' : '';
            var loading_html = shadow_html + '<div class="loading" style="position:' + posStyle + '"><div></div><div></div><div></div></div>' + tag_html;
            $this.find('.bg-shadow').remove();
            $this.find('.page-tag').remove();
            $this.find('.loading-gif').remove();
            $this.find('.loading').remove();
            $this.append(loading_html);
            if (opts.center) {
                $('.page-tag').css({
                    'margin-left': -($('.page-tag').width() / 2) + 'px',
                    'left': '50%'
                });
            }
            $('.bg-shadow').addClass('in');
            a.extend(a.fn.loader, {
                remove: function () {
                    $this.find('.loading').remove();
                    $this.find('.loading-gif').remove();
                    if (opts.isBG) {
                        $this.find('.bg-shadow').remove();
                    }
                    ;
                    if (opts.isTag) {
                        $this.find('.page-tag').remove();
                    }
                }
            });
        };
    });
}.call(this));
require([
    'angular-route',
    'appController',
    'appDirectives',
    'appServices',
    'appTouch',
    'jquery',
    'local',
    'countUp',
    'checkLogin',
    'tools',
    'baseSet',
    'sweetalert',
    'js.cookie',
    'loader'
], function (angular) {
});
define('common', [
    'angular-route',
    'appController',
    'appDirectives',
    'appServices',
    'appTouch',
    'jquery',
    'local',
    'countUp',
    'checkLogin',
    'tools',
    'baseSet',
    'sweetalert',
    'js.cookie',
    'loader'
], function () {
    return;
});