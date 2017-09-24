define('domReady', [], function () {
    'use strict';
    var isTop, testDiv, scrollIntervalId, isBrowser = typeof window !== 'undefined' && window.document, isPageLoaded = !isBrowser, doc = isBrowser ? document : null, readyCalls = [];
    function runCallbacks(callbacks) {
        var i;
        for (i = 0; i < callbacks.length; i += 1) {
            callbacks[i](doc);
        }
    }
    function callReady() {
        var callbacks = readyCalls;
        if (isPageLoaded) {
            if (callbacks.length) {
                readyCalls = [];
                runCallbacks(callbacks);
            }
        }
    }
    function pageLoaded() {
        if (!isPageLoaded) {
            isPageLoaded = true;
            if (scrollIntervalId) {
                clearInterval(scrollIntervalId);
            }
            callReady();
        }
    }
    if (isBrowser) {
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', pageLoaded, false);
            window.addEventListener('load', pageLoaded, false);
        } else if (window.attachEvent) {
            window.attachEvent('onload', pageLoaded);
            testDiv = document.createElement('div');
            try {
                isTop = window.frameElement === null;
            } catch (e) {
            }
            if (testDiv.doScroll && isTop && window.external) {
                scrollIntervalId = setInterval(function () {
                    try {
                        testDiv.doScroll();
                        pageLoaded();
                    } catch (e) {
                    }
                }, 30);
            }
        }
        if (document.readyState === 'complete') {
            pageLoaded();
        }
    }
    function domReady(callback) {
        if (isPageLoaded) {
            callback(doc);
        } else {
            readyCalls.push(callback);
        }
        return domReady;
    }
    domReady.version = '2.0.1';
    domReady.load = function (name, req, onLoad, config) {
        if (config.isBuild) {
            onLoad(null);
        } else {
            domReady(onLoad);
        }
    };
    return domReady;
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
define('baseSet', [], function () {
    return {
        postServer: 'http://117.50.8.212:9100/',
        pageHost: './../'
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
    var userInfo = Cookies.getJSON('danaUser') ? Cookies.getJSON('danaUser') : {};
    console.log(userInfo);
    return {
        check: function () {
            var token = null;
            if (userInfo != null && userInfo != undefined && userInfo != '') {
                token = userInfo;
            } else {
                var postData = {
                    username: '',
                    password: '',
                    token: ''
                };
                if (userInfo.oosUserName != undefined && userInfo.oosUserName != '' && userInfo.oosUserName != null) {
                    postData.token = userInfo.oosUserName;
                }
                ;
                api.login(postData, function (data) {
                    Cookies.set('danaUser', data.data, { expires: 30 });
                    console.log(Cookies.getJSON('danaUser'));
                    window.location.href = 'index.html#/event';
                }, function (data) {
                });
            }
            ;
            return token;
        },
        logout: function (e) {
            Cookies.remove('danaUser');
            window.location.href = 'login.html';
        },
        checkLogin: function () {
            console.log(userInfo);
            var postData = {
                username: '',
                password: '',
                token: ''
            };
            if (userInfo.oosUserName != undefined && userInfo.oosUserName != '' && userInfo.oosUserName != null) {
                postData.token = userInfo.oosUserName;
            }
            ;
            api.login(postData, function (data) {
                Cookies.set('appLoginfo', data.data);
                console.log(Cookies.getJSON('appLoginfo'));
                window.location.href = 'index.html#/event';
            }, function (data) {
            });
        }
    };
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
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define('sweetalert', [], factory) : global.Sweetalert2 = factory();
}(this, function () {
    'use strict';
    var defaultParams = {
        title: '',
        titleText: '',
        text: '',
        html: '',
        type: null,
        customClass: '',
        target: 'body',
        animation: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        showConfirmButton: true,
        showCancelButton: false,
        preConfirm: null,
        confirmButtonText: 'OK',
        confirmButtonColor: '#26B99A',
        confirmButtonClass: null,
        cancelButtonText: 'Cancel',
        cancelButtonColor: '#aaa',
        cancelButtonClass: null,
        buttonsStyling: true,
        reverseButtons: false,
        focusCancel: false,
        showCloseButton: false,
        showLoaderOnConfirm: false,
        imageUrl: null,
        imageWidth: null,
        imageHeight: null,
        imageClass: null,
        timer: null,
        width: 500,
        padding: 20,
        background: '#fff',
        input: null,
        inputPlaceholder: '',
        inputValue: '',
        inputOptions: {},
        inputAutoTrim: true,
        inputClass: null,
        inputAttributes: {},
        inputValidator: null,
        progressSteps: [],
        currentProgressStep: null,
        progressStepsDistance: '40px',
        onOpen: null,
        onClose: null,
        useRejections: true
    };
    var swalPrefix = 'swal2-';
    var prefix = function prefix(items) {
        var result = {};
        for (var i in items) {
            result[items[i]] = swalPrefix + items[i];
        }
        return result;
    };
    var swalClasses = prefix([
        'container',
        'shown',
        'iosfix',
        'modal',
        'overlay',
        'fade',
        'show',
        'hide',
        'noanimation',
        'close',
        'title',
        'content',
        'buttonswrapper',
        'confirm',
        'cancel',
        'icon',
        'image',
        'input',
        'file',
        'range',
        'select',
        'radio',
        'checkbox',
        'textarea',
        'inputerror',
        'validationerror',
        'progresssteps',
        'activeprogressstep',
        'progresscircle',
        'progressline',
        'loading',
        'styled'
    ]);
    var iconTypes = prefix([
        'success',
        'warning',
        'info',
        'question',
        'error'
    ]);
    var colorLuminance = function colorLuminance(hex, lum) {
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
    var uniqueArray = function uniqueArray(arr) {
        var result = [];
        for (var i in arr) {
            if (result.indexOf(arr[i]) === -1) {
                result.push(arr[i]);
            }
        }
        return result;
    };
    var states = {
        previousWindowKeyDown: null,
        previousActiveElement: null,
        previousBodyPadding: null
    };
    var init = function init(params) {
        if (typeof document === 'undefined') {
            console.error('SweetAlert2 requires document to initialize');
            return;
        }
        var container = document.createElement('div');
        container.className = swalClasses.container;
        container.innerHTML = sweetHTML;
        var targetElement = document.querySelector(params.target);
        if (!targetElement) {
            console.warn('SweetAlert2: Can\'t find the target "' + params.target + '"');
            targetElement = document.body;
        }
        targetElement.appendChild(container);
        var modal = getModal();
        var input = getChildByClass(modal, swalClasses.input);
        var file = getChildByClass(modal, swalClasses.file);
        var range = modal.querySelector('.' + swalClasses.range + ' input');
        var rangeOutput = modal.querySelector('.' + swalClasses.range + ' output');
        var select = getChildByClass(modal, swalClasses.select);
        var checkbox = modal.querySelector('.' + swalClasses.checkbox + ' input');
        var textarea = getChildByClass(modal, swalClasses.textarea);
        input.oninput = function () {
            sweetAlert.resetValidationError();
        };
        input.onkeydown = function (event) {
            setTimeout(function () {
                if (event.keyCode === 13 && params.allowEnterKey) {
                    event.stopPropagation();
                    sweetAlert.clickConfirm();
                }
            }, 0);
        };
        file.onchange = function () {
            sweetAlert.resetValidationError();
        };
        range.oninput = function () {
            sweetAlert.resetValidationError();
            rangeOutput.value = range.value;
        };
        range.onchange = function () {
            sweetAlert.resetValidationError();
            range.previousSibling.value = range.value;
        };
        select.onchange = function () {
            sweetAlert.resetValidationError();
        };
        checkbox.onchange = function () {
            sweetAlert.resetValidationError();
        };
        textarea.oninput = function () {
            sweetAlert.resetValidationError();
        };
        return modal;
    };
    var sweetHTML = ('\n <div role="dialog" aria-labelledby="' + swalClasses.title + '" aria-describedby="' + swalClasses.content + '" class="' + swalClasses.modal + '" tabindex="-1">\n   <ul class="' + swalClasses.progresssteps + '"></ul>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.error + '">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.question + '">?</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">!</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.info + '">i</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.success + '">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="' + swalClasses.image + '" />\n   <h2 class="' + swalClasses.title + '" id="' + swalClasses.title + '"></h2>\n   <div id="' + swalClasses.content + '" class="' + swalClasses.content + '"></div>\n   <input class="' + swalClasses.input + '" />\n   <input type="file" class="' + swalClasses.file + '" />\n   <div class="' + swalClasses.range + '">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="' + swalClasses.select + '"></select>\n   <div class="' + swalClasses.radio + '"></div>\n   <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n     <input type="checkbox" />\n   </label>\n   <textarea class="' + swalClasses.textarea + '"></textarea>\n   <div class="' + swalClasses.validationerror + '"></div>\n   <div class="' + swalClasses.buttonswrapper + '">\n     <button type="button" class="' + swalClasses.confirm + '">OK</button>\n     <button type="button" class="' + swalClasses.cancel + '">Cancel</button>\n   </div>\n   <button type="button" class="' + swalClasses.close + '" aria-label="Close this dialog">\xD7</button>\n </div>\n').replace(/(^|\n)\s*/g, '');
    var getContainer = function getContainer() {
        return document.body.querySelector('.' + swalClasses.container);
    };
    var getModal = function getModal() {
        return getContainer() ? getContainer().querySelector('.' + swalClasses.modal) : null;
    };
    var getIcons = function getIcons() {
        var modal = getModal();
        return modal.querySelectorAll('.' + swalClasses.icon);
    };
    var elementByClass = function elementByClass(className) {
        return getContainer() ? getContainer().querySelector('.' + className) : null;
    };
    var getTitle = function getTitle() {
        return elementByClass(swalClasses.title);
    };
    var getContent = function getContent() {
        return elementByClass(swalClasses.content);
    };
    var getImage = function getImage() {
        return elementByClass(swalClasses.image);
    };
    var getButtonsWrapper = function getButtonsWrapper() {
        return elementByClass(swalClasses.buttonswrapper);
    };
    var getProgressSteps = function getProgressSteps() {
        return elementByClass(swalClasses.progresssteps);
    };
    var getValidationError = function getValidationError() {
        return elementByClass(swalClasses.validationerror);
    };
    var getConfirmButton = function getConfirmButton() {
        return elementByClass(swalClasses.confirm);
    };
    var getCancelButton = function getCancelButton() {
        return elementByClass(swalClasses.cancel);
    };
    var getCloseButton = function getCloseButton() {
        return elementByClass(swalClasses.close);
    };
    var getFocusableElements = function getFocusableElements(focusCancel) {
        var buttons = [
            getConfirmButton(),
            getCancelButton()
        ];
        if (focusCancel) {
            buttons.reverse();
        }
        var focusableElements = buttons.concat(Array.prototype.slice.call(getModal().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, *[tabindex]:not([tabindex="-1"])')));
        return uniqueArray(focusableElements);
    };
    var hasClass = function hasClass(elem, className) {
        if (elem.classList) {
            return elem.classList.contains(className);
        }
        return false;
    };
    var focusInput = function focusInput(input) {
        input.focus();
        if (input.type !== 'file') {
            var val = input.value;
            input.value = '';
            input.value = val;
        }
    };
    var addClass = function addClass(elem, className) {
        if (!elem || !className) {
            return;
        }
        var classes = className.split(/\s+/).filter(Boolean);
        classes.forEach(function (className) {
            elem.classList.add(className);
        });
    };
    var removeClass = function removeClass(elem, className) {
        if (!elem || !className) {
            return;
        }
        var classes = className.split(/\s+/).filter(Boolean);
        classes.forEach(function (className) {
            elem.classList.remove(className);
        });
    };
    var getChildByClass = function getChildByClass(elem, className) {
        for (var i = 0; i < elem.childNodes.length; i++) {
            if (hasClass(elem.childNodes[i], className)) {
                return elem.childNodes[i];
            }
        }
    };
    var show = function show(elem, display) {
        if (!display) {
            display = 'block';
        }
        elem.style.opacity = '';
        elem.style.display = display;
    };
    var hide = function hide(elem) {
        elem.style.opacity = '';
        elem.style.display = 'none';
    };
    var empty = function empty(elem) {
        while (elem.firstChild) {
            elem.removeChild(elem.firstChild);
        }
    };
    var isVisible = function isVisible(elem) {
        return elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length;
    };
    var removeStyleProperty = function removeStyleProperty(elem, property) {
        if (elem.style.removeProperty) {
            elem.style.removeProperty(property);
        } else {
            elem.style.removeAttribute(property);
        }
    };
    var fireClick = function fireClick(node) {
        if (!isVisible(node)) {
            return false;
        }
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
    var animationEndEvent = function () {
        var testEl = document.createElement('div');
        var transEndEventNames = {
            'WebkitAnimation': 'webkitAnimationEnd',
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
    var resetPrevState = function resetPrevState() {
        window.onkeydown = states.previousWindowKeyDown;
        if (states.previousActiveElement && states.previousActiveElement.focus) {
            var x = window.scrollX;
            var y = window.scrollY;
            states.previousActiveElement.focus();
            if (x && y) {
                window.scrollTo(x, y);
            }
        }
    };
    var measureScrollbar = function measureScrollbar() {
        var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
        if (supportsTouch) {
            return 0;
        }
        var scrollDiv = document.createElement('div');
        scrollDiv.style.width = '50px';
        scrollDiv.style.height = '50px';
        scrollDiv.style.overflow = 'scroll';
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    var debounce = function debounce(func, wait) {
        var timeout = void 0;
        return function () {
            var later = function later() {
                timeout = null;
                func();
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    var modalParams = _extends({}, defaultParams);
    var queue = [];
    var swal2Observer = void 0;
    var setParameters = function setParameters(params) {
        var modal = getModal() || init(params);
        for (var param in params) {
            if (!defaultParams.hasOwnProperty(param) && param !== 'extraParams') {
                console.warn('SweetAlert2: Unknown parameter "' + param + '"');
            }
        }
        modal.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;
        modal.style.padding = params.padding + 'px';
        modal.style.background = params.background;
        var successIconParts = modal.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
        for (var i = 0; i < successIconParts.length; i++) {
            successIconParts[i].style.background = params.background;
        }
        var title = getTitle();
        var content = getContent();
        var buttonsWrapper = getButtonsWrapper();
        var confirmButton = getConfirmButton();
        var cancelButton = getCancelButton();
        var closeButton = getCloseButton();
        if (params.titleText) {
            title.innerText = params.titleText;
        } else {
            title.innerHTML = params.title.split('\n').join('<br />');
        }
        if (params.text || params.html) {
            if (_typeof(params.html) === 'object') {
                content.innerHTML = '';
                if (0 in params.html) {
                    for (var _i = 0; _i in params.html; _i++) {
                        content.appendChild(params.html[_i].cloneNode(true));
                    }
                } else {
                    content.appendChild(params.html.cloneNode(true));
                }
            } else if (params.html) {
                content.innerHTML = params.html;
            } else if (params.text) {
                content.textContent = params.text;
            }
            show(content);
        } else {
            hide(content);
        }
        if (params.showCloseButton) {
            show(closeButton);
        } else {
            hide(closeButton);
        }
        modal.className = swalClasses.modal;
        if (params.customClass) {
            addClass(modal, params.customClass);
        }
        var progressStepsContainer = getProgressSteps();
        var currentProgressStep = parseInt(params.currentProgressStep === null ? sweetAlert.getQueueStep() : params.currentProgressStep, 10);
        if (params.progressSteps.length) {
            show(progressStepsContainer);
            empty(progressStepsContainer);
            if (currentProgressStep >= params.progressSteps.length) {
                console.warn('SweetAlert2: Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
            }
            params.progressSteps.forEach(function (step, index) {
                var circle = document.createElement('li');
                addClass(circle, swalClasses.progresscircle);
                circle.innerHTML = step;
                if (index === currentProgressStep) {
                    addClass(circle, swalClasses.activeprogressstep);
                }
                progressStepsContainer.appendChild(circle);
                if (index !== params.progressSteps.length - 1) {
                    var line = document.createElement('li');
                    addClass(line, swalClasses.progressline);
                    line.style.width = params.progressStepsDistance;
                    progressStepsContainer.appendChild(line);
                }
            });
        } else {
            hide(progressStepsContainer);
        }
        var icons = getIcons();
        for (var _i2 = 0; _i2 < icons.length; _i2++) {
            hide(icons[_i2]);
        }
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
            var icon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
            show(icon);
            if (params.animation) {
                switch (params.type) {
                case 'success':
                    addClass(icon, 'swal2-animate-success-icon');
                    addClass(icon.querySelector('.swal2-success-line-tip'), 'swal2-animate-success-line-tip');
                    addClass(icon.querySelector('.swal2-success-line-long'), 'swal2-animate-success-line-long');
                    break;
                case 'error':
                    addClass(icon, 'swal2-animate-error-icon');
                    addClass(icon.querySelector('.swal2-x-mark'), 'swal2-animate-x-mark');
                    break;
                default:
                    break;
                }
            }
        }
        var image = getImage();
        if (params.imageUrl) {
            image.setAttribute('src', params.imageUrl);
            show(image);
            if (params.imageWidth) {
                image.setAttribute('width', params.imageWidth);
            } else {
                image.removeAttribute('width');
            }
            if (params.imageHeight) {
                image.setAttribute('height', params.imageHeight);
            } else {
                image.removeAttribute('height');
            }
            image.className = swalClasses.image;
            if (params.imageClass) {
                addClass(image, params.imageClass);
            }
        } else {
            hide(image);
        }
        if (params.showCancelButton) {
            cancelButton.style.display = 'inline-block';
        } else {
            hide(cancelButton);
        }
        if (params.showConfirmButton) {
            removeStyleProperty(confirmButton, 'display');
        } else {
            hide(confirmButton);
        }
        if (!params.showConfirmButton && !params.showCancelButton) {
            hide(buttonsWrapper);
        } else {
            show(buttonsWrapper);
        }
        confirmButton.innerHTML = params.confirmButtonText;
        cancelButton.innerHTML = params.cancelButtonText;
        if (params.buttonsStyling) {
            confirmButton.style.backgroundColor = params.confirmButtonColor;
            cancelButton.style.backgroundColor = params.cancelButtonColor;
        }
        confirmButton.className = swalClasses.confirm;
        addClass(confirmButton, params.confirmButtonClass);
        cancelButton.className = swalClasses.cancel;
        addClass(cancelButton, params.cancelButtonClass);
        if (params.buttonsStyling) {
            addClass(confirmButton, swalClasses.styled);
            addClass(cancelButton, swalClasses.styled);
        } else {
            removeClass(confirmButton, swalClasses.styled);
            removeClass(cancelButton, swalClasses.styled);
            confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
            cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
        }
        if (params.animation === true) {
            removeClass(modal, swalClasses.noanimation);
        } else {
            addClass(modal, swalClasses.noanimation);
        }
    };
    var openModal = function openModal(animation, onComplete) {
        var container = getContainer();
        var modal = getModal();
        if (animation) {
            addClass(modal, swalClasses.show);
            addClass(container, swalClasses.fade);
            removeClass(modal, swalClasses.hide);
        } else {
            removeClass(modal, swalClasses.fade);
        }
        show(modal);
        container.style.overflowY = 'hidden';
        if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
            modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
                modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
                container.style.overflowY = 'auto';
            });
        } else {
            container.style.overflowY = 'auto';
        }
        addClass(document.documentElement, swalClasses.shown);
        addClass(document.body, swalClasses.shown);
        addClass(container, swalClasses.shown);
        fixScrollbar();
        iOSfix();
        states.previousActiveElement = document.activeElement;
        if (onComplete !== null && typeof onComplete === 'function') {
            setTimeout(function () {
                onComplete(modal);
            });
        }
    };
    var fixScrollbar = function fixScrollbar() {
        if (states.previousBodyPadding !== null) {
            return;
        }
        if (document.body.scrollHeight > window.innerHeight) {
            states.previousBodyPadding = document.body.style.paddingRight;
            document.body.style.paddingRight = measureScrollbar() + 'px';
        }
    };
    var undoScrollbar = function undoScrollbar() {
        if (states.previousBodyPadding !== null) {
            document.body.style.paddingRight = states.previousBodyPadding;
            states.previousBodyPadding = null;
        }
    };
    var iOSfix = function iOSfix() {
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
            var offset = document.body.scrollTop;
            document.body.style.top = offset * -1 + 'px';
            addClass(document.body, swalClasses.iosfix);
        }
    };
    var undoIOSfix = function undoIOSfix() {
        if (hasClass(document.body, swalClasses.iosfix)) {
            var offset = parseInt(document.body.style.top, 10);
            removeClass(document.body, swalClasses.iosfix);
            document.body.style.top = '';
            document.body.scrollTop = offset * -1;
        }
    };
    var sweetAlert = function sweetAlert() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        if (args[0] === undefined) {
            console.error('SweetAlert2 expects at least 1 attribute!');
            return false;
        }
        var params = _extends({}, modalParams);
        switch (_typeof(args[0])) {
        case 'string':
            params.title = args[0];
            params.html = args[1];
            params.type = args[2];
            break;
        case 'object':
            _extends(params, args[0]);
            params.extraParams = args[0].extraParams;
            if (params.input === 'email' && params.inputValidator === null) {
                params.inputValidator = function (email) {
                    return new Promise(function (resolve, reject) {
                        var emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                        if (emailRegex.test(email)) {
                            resolve();
                        } else {
                            reject('Invalid email address');
                        }
                    });
                };
            }
            if (params.input === 'url' && params.inputValidator === null) {
                params.inputValidator = function (url) {
                    return new Promise(function (resolve, reject) {
                        var urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&\/\/=]*)$/;
                        if (urlRegex.test(url)) {
                            resolve();
                        } else {
                            reject('Invalid URL');
                        }
                    });
                };
            }
            break;
        default:
            console.error('SweetAlert2: Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0]));
            return false;
        }
        setParameters(params);
        var container = getContainer();
        var modal = getModal();
        return new Promise(function (resolve, reject) {
            if (params.timer) {
                modal.timeout = setTimeout(function () {
                    sweetAlert.closeModal(params.onClose);
                    if (params.useRejections) {
                        reject('timer');
                    } else {
                        resolve({ dismiss: 'timer' });
                    }
                }, params.timer);
            }
            var getInput = function getInput(inputType) {
                inputType = inputType || params.input;
                if (!inputType) {
                    return null;
                }
                switch (inputType) {
                case 'select':
                case 'textarea':
                case 'file':
                    return getChildByClass(modal, swalClasses[inputType]);
                case 'checkbox':
                    return modal.querySelector('.' + swalClasses.checkbox + ' input');
                case 'radio':
                    return modal.querySelector('.' + swalClasses.radio + ' input:checked') || modal.querySelector('.' + swalClasses.radio + ' input:first-child');
                case 'range':
                    return modal.querySelector('.' + swalClasses.range + ' input');
                default:
                    return getChildByClass(modal, swalClasses.input);
                }
            };
            var getInputValue = function getInputValue() {
                var input = getInput();
                if (!input) {
                    return null;
                }
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
            var confirm = function confirm(value) {
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
                    if (params.useRejections) {
                        resolve(value);
                    } else {
                        resolve({ value: value });
                    }
                }
            };
            var onButtonEvent = function onButtonEvent(event) {
                var e = event || window.event;
                var target = e.target || e.srcElement;
                var confirmButton = getConfirmButton();
                var cancelButton = getCancelButton();
                var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
                var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));
                switch (e.type) {
                case 'mouseover':
                case 'mouseup':
                    if (params.buttonsStyling) {
                        if (targetedConfirm) {
                            confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.1);
                        } else if (targetedCancel) {
                            cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.1);
                        }
                    }
                    break;
                case 'mouseout':
                    if (params.buttonsStyling) {
                        if (targetedConfirm) {
                            confirmButton.style.backgroundColor = params.confirmButtonColor;
                        } else if (targetedCancel) {
                            cancelButton.style.backgroundColor = params.cancelButtonColor;
                        }
                    }
                    break;
                case 'mousedown':
                    if (params.buttonsStyling) {
                        if (targetedConfirm) {
                            confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.2);
                        } else if (targetedCancel) {
                            cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.2);
                        }
                    }
                    break;
                case 'click':
                    if (targetedConfirm && sweetAlert.isVisible()) {
                        sweetAlert.disableButtons();
                        if (params.input) {
                            var inputValue = getInputValue();
                            if (params.inputValidator) {
                                sweetAlert.disableInput();
                                params.inputValidator(inputValue, params.extraParams).then(function () {
                                    sweetAlert.enableButtons();
                                    sweetAlert.enableInput();
                                    confirm(inputValue);
                                }, function (error) {
                                    sweetAlert.enableButtons();
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
                    } else if (targetedCancel && sweetAlert.isVisible()) {
                        sweetAlert.disableButtons();
                        sweetAlert.closeModal(params.onClose);
                        if (params.useRejections) {
                            reject('cancel');
                        } else {
                            resolve({ dismiss: 'cancel' });
                        }
                    }
                    break;
                default:
                }
            };
            var buttons = modal.querySelectorAll('button');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = onButtonEvent;
                buttons[i].onmouseover = onButtonEvent;
                buttons[i].onmouseout = onButtonEvent;
                buttons[i].onmousedown = onButtonEvent;
            }
            getCloseButton().onclick = function () {
                sweetAlert.closeModal(params.onClose);
                if (params.useRejections) {
                    reject('close');
                } else {
                    resolve({ dismiss: 'close' });
                }
            };
            container.onclick = function (e) {
                if (e.target !== container) {
                    return;
                }
                if (params.allowOutsideClick) {
                    sweetAlert.closeModal(params.onClose);
                    if (params.useRejections) {
                        reject('overlay');
                    } else {
                        resolve({ dismiss: 'overlay' });
                    }
                }
            };
            var buttonsWrapper = getButtonsWrapper();
            var confirmButton = getConfirmButton();
            var cancelButton = getCancelButton();
            if (params.reverseButtons) {
                confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
            } else {
                confirmButton.parentNode.insertBefore(confirmButton, cancelButton);
            }
            var setFocus = function setFocus(index, increment) {
                var focusableElements = getFocusableElements(params.focusCancel);
                for (var _i3 = 0; _i3 < focusableElements.length; _i3++) {
                    index = index + increment;
                    if (index === focusableElements.length) {
                        index = 0;
                    } else if (index === -1) {
                        index = focusableElements.length - 1;
                    }
                    var el = focusableElements[index];
                    if (isVisible(el)) {
                        return el.focus();
                    }
                }
            };
            var handleKeyDown = function handleKeyDown(event) {
                var e = event || window.event;
                var keyCode = e.keyCode || e.which;
                if ([
                        9,
                        13,
                        32,
                        27,
                        37,
                        38,
                        39,
                        40
                    ].indexOf(keyCode) === -1) {
                    return;
                }
                var targetElement = e.target || e.srcElement;
                var focusableElements = getFocusableElements(params.focusCancel);
                var btnIndex = -1;
                for (var _i4 = 0; _i4 < focusableElements.length; _i4++) {
                    if (targetElement === focusableElements[_i4]) {
                        btnIndex = _i4;
                        break;
                    }
                }
                if (keyCode === 9) {
                    if (!e.shiftKey) {
                        setFocus(btnIndex, 1);
                    } else {
                        setFocus(btnIndex, -1);
                    }
                    e.stopPropagation();
                    e.preventDefault();
                } else if (keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40) {
                    if (document.activeElement === confirmButton && isVisible(cancelButton)) {
                        cancelButton.focus();
                    } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
                        confirmButton.focus();
                    }
                } else if (keyCode === 13 || keyCode === 32) {
                    if (btnIndex === -1 && params.allowEnterKey) {
                        if (params.focusCancel) {
                            fireClick(cancelButton, e);
                        } else {
                            fireClick(confirmButton, e);
                        }
                        e.stopPropagation();
                        e.preventDefault();
                    }
                } else if (keyCode === 27 && params.allowEscapeKey === true) {
                    sweetAlert.closeModal(params.onClose);
                    if (params.useRejections) {
                        reject('esc');
                    } else {
                        resolve({ dismiss: 'esc' });
                    }
                }
            };
            if (!window.onkeydown || window.onkeydown.toString() !== handleKeyDown.toString()) {
                states.previousWindowKeyDown = window.onkeydown;
                window.onkeydown = handleKeyDown;
            }
            if (params.buttonsStyling) {
                confirmButton.style.borderLeftColor = params.confirmButtonColor;
                confirmButton.style.borderRightColor = params.confirmButtonColor;
            }
            sweetAlert.hideLoading = sweetAlert.disableLoading = function () {
                if (!params.showConfirmButton) {
                    hide(confirmButton);
                    if (!params.showCancelButton) {
                        hide(getButtonsWrapper());
                    }
                }
                removeClass(buttonsWrapper, swalClasses.loading);
                removeClass(modal, swalClasses.loading);
                confirmButton.disabled = false;
                cancelButton.disabled = false;
            };
            sweetAlert.getTitle = function () {
                return getTitle();
            };
            sweetAlert.getContent = function () {
                return getContent();
            };
            sweetAlert.getInput = function () {
                return getInput();
            };
            sweetAlert.getImage = function () {
                return getImage();
            };
            sweetAlert.getButtonsWrapper = function () {
                return getButtonsWrapper();
            };
            sweetAlert.getConfirmButton = function () {
                return getConfirmButton();
            };
            sweetAlert.getCancelButton = function () {
                return getCancelButton();
            };
            sweetAlert.enableButtons = function () {
                confirmButton.disabled = false;
                cancelButton.disabled = false;
            };
            sweetAlert.disableButtons = function () {
                confirmButton.disabled = true;
                cancelButton.disabled = true;
            };
            sweetAlert.enableConfirmButton = function () {
                confirmButton.disabled = false;
            };
            sweetAlert.disableConfirmButton = function () {
                confirmButton.disabled = true;
            };
            sweetAlert.enableInput = function () {
                var input = getInput();
                if (!input) {
                    return false;
                }
                if (input.type === 'radio') {
                    var radiosContainer = input.parentNode.parentNode;
                    var radios = radiosContainer.querySelectorAll('input');
                    for (var _i5 = 0; _i5 < radios.length; _i5++) {
                        radios[_i5].disabled = false;
                    }
                } else {
                    input.disabled = false;
                }
            };
            sweetAlert.disableInput = function () {
                var input = getInput();
                if (!input) {
                    return false;
                }
                if (input && input.type === 'radio') {
                    var radiosContainer = input.parentNode.parentNode;
                    var radios = radiosContainer.querySelectorAll('input');
                    for (var _i6 = 0; _i6 < radios.length; _i6++) {
                        radios[_i6].disabled = true;
                    }
                } else {
                    input.disabled = true;
                }
            };
            sweetAlert.recalculateHeight = debounce(function () {
                var modal = getModal();
                if (!modal) {
                    return;
                }
                var prevState = modal.style.display;
                modal.style.minHeight = '';
                show(modal);
                modal.style.minHeight = modal.scrollHeight + 1 + 'px';
                modal.style.display = prevState;
            }, 50);
            sweetAlert.showValidationError = function (error) {
                var validationError = getValidationError();
                validationError.innerHTML = error;
                show(validationError);
                var input = getInput();
                if (input) {
                    focusInput(input);
                    addClass(input, swalClasses.inputerror);
                }
            };
            sweetAlert.resetValidationError = function () {
                var validationError = getValidationError();
                hide(validationError);
                sweetAlert.recalculateHeight();
                var input = getInput();
                if (input) {
                    removeClass(input, swalClasses.inputerror);
                }
            };
            sweetAlert.getProgressSteps = function () {
                return params.progressSteps;
            };
            sweetAlert.setProgressSteps = function (progressSteps) {
                params.progressSteps = progressSteps;
                setParameters(params);
            };
            sweetAlert.showProgressSteps = function () {
                show(getProgressSteps());
            };
            sweetAlert.hideProgressSteps = function () {
                hide(getProgressSteps());
            };
            sweetAlert.enableButtons();
            sweetAlert.hideLoading();
            sweetAlert.resetValidationError();
            var inputTypes = [
                'input',
                'file',
                'range',
                'select',
                'radio',
                'checkbox',
                'textarea'
            ];
            var input = void 0;
            for (var _i7 = 0; _i7 < inputTypes.length; _i7++) {
                var inputClass = swalClasses[inputTypes[_i7]];
                var inputContainer = getChildByClass(modal, inputClass);
                input = getInput(inputTypes[_i7]);
                if (input) {
                    for (var j in input.attributes) {
                        if (input.attributes.hasOwnProperty(j)) {
                            var attrName = input.attributes[j].name;
                            if (attrName !== 'type' && attrName !== 'value') {
                                input.removeAttribute(attrName);
                            }
                        }
                    }
                    for (var attr in params.inputAttributes) {
                        input.setAttribute(attr, params.inputAttributes[attr]);
                    }
                }
                inputContainer.className = inputClass;
                if (params.inputClass) {
                    addClass(inputContainer, params.inputClass);
                }
                hide(inputContainer);
            }
            var populateInputOptions = void 0;
            switch (params.input) {
            case 'text':
            case 'email':
            case 'password':
            case 'number':
            case 'tel':
            case 'url':
                input = getChildByClass(modal, swalClasses.input);
                input.value = params.inputValue;
                input.placeholder = params.inputPlaceholder;
                input.type = params.input;
                show(input);
                break;
            case 'file':
                input = getChildByClass(modal, swalClasses.file);
                input.placeholder = params.inputPlaceholder;
                input.type = params.input;
                show(input);
                break;
            case 'range':
                var range = getChildByClass(modal, swalClasses.range);
                var rangeInput = range.querySelector('input');
                var rangeOutput = range.querySelector('output');
                rangeInput.value = params.inputValue;
                rangeInput.type = params.input;
                rangeOutput.value = params.inputValue;
                show(range);
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
                populateInputOptions = function populateInputOptions(inputOptions) {
                    for (var optionValue in inputOptions) {
                        var option = document.createElement('option');
                        option.value = optionValue;
                        option.innerHTML = inputOptions[optionValue];
                        if (params.inputValue === optionValue) {
                            option.selected = true;
                        }
                        select.appendChild(option);
                    }
                    show(select);
                    select.focus();
                };
                break;
            case 'radio':
                var radio = getChildByClass(modal, swalClasses.radio);
                radio.innerHTML = '';
                populateInputOptions = function populateInputOptions(inputOptions) {
                    for (var radioValue in inputOptions) {
                        var radioInput = document.createElement('input');
                        var radioLabel = document.createElement('label');
                        var radioLabelSpan = document.createElement('span');
                        radioInput.type = 'radio';
                        radioInput.name = swalClasses.radio;
                        radioInput.value = radioValue;
                        if (params.inputValue === radioValue) {
                            radioInput.checked = true;
                        }
                        radioLabelSpan.innerHTML = inputOptions[radioValue];
                        radioLabel.appendChild(radioInput);
                        radioLabel.appendChild(radioLabelSpan);
                        radioLabel.for = radioInput.id;
                        radio.appendChild(radioLabel);
                    }
                    show(radio);
                    var radios = radio.querySelectorAll('input');
                    if (radios.length) {
                        radios[0].focus();
                    }
                };
                break;
            case 'checkbox':
                var checkbox = getChildByClass(modal, swalClasses.checkbox);
                var checkboxInput = getInput('checkbox');
                checkboxInput.type = 'checkbox';
                checkboxInput.value = 1;
                checkboxInput.id = swalClasses.checkbox;
                checkboxInput.checked = Boolean(params.inputValue);
                var label = checkbox.getElementsByTagName('span');
                if (label.length) {
                    checkbox.removeChild(label[0]);
                }
                label = document.createElement('span');
                label.innerHTML = params.inputPlaceholder;
                checkbox.appendChild(label);
                show(checkbox);
                break;
            case 'textarea':
                var textarea = getChildByClass(modal, swalClasses.textarea);
                textarea.value = params.inputValue;
                textarea.placeholder = params.inputPlaceholder;
                show(textarea);
                break;
            case null:
                break;
            default:
                console.error('SweetAlert2: Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + params.input + '"');
                break;
            }
            if (params.input === 'select' || params.input === 'radio') {
                if (params.inputOptions instanceof Promise) {
                    sweetAlert.showLoading();
                    params.inputOptions.then(function (inputOptions) {
                        sweetAlert.hideLoading();
                        populateInputOptions(inputOptions);
                    });
                } else if (_typeof(params.inputOptions) === 'object') {
                    populateInputOptions(params.inputOptions);
                } else {
                    console.error('SweetAlert2: Unexpected type of inputOptions! Expected object or Promise, got ' + _typeof(params.inputOptions));
                }
            }
            openModal(params.animation, params.onOpen);
            if (params.allowEnterKey) {
                setFocus(-1, 1);
            } else {
                if (document.activeElement) {
                    document.activeElement.blur();
                }
            }
            getContainer().scrollTop = 0;
            if (typeof MutationObserver !== 'undefined' && !swal2Observer) {
                swal2Observer = new MutationObserver(sweetAlert.recalculateHeight);
                swal2Observer.observe(modal, {
                    childList: true,
                    characterData: true,
                    subtree: true
                });
            }
        });
    };
    sweetAlert.isVisible = function () {
        return !!getModal();
    };
    sweetAlert.queue = function (steps) {
        queue = steps;
        var resetQueue = function resetQueue() {
            queue = [];
            document.body.removeAttribute('data-swal2-queue-step');
        };
        var queueResult = [];
        return new Promise(function (resolve, reject) {
            (function step(i, callback) {
                if (i < queue.length) {
                    document.body.setAttribute('data-swal2-queue-step', i);
                    sweetAlert(queue[i]).then(function (result) {
                        queueResult.push(result);
                        step(i + 1, callback);
                    }, function (dismiss) {
                        resetQueue();
                        reject(dismiss);
                    });
                } else {
                    resetQueue();
                    resolve(queueResult);
                }
            }(0));
        });
    };
    sweetAlert.getQueueStep = function () {
        return document.body.getAttribute('data-swal2-queue-step');
    };
    sweetAlert.insertQueueStep = function (step, index) {
        if (index && index < queue.length) {
            return queue.splice(index, 0, step);
        }
        return queue.push(step);
    };
    sweetAlert.deleteQueueStep = function (index) {
        if (typeof queue[index] !== 'undefined') {
            queue.splice(index, 1);
        }
    };
    sweetAlert.close = sweetAlert.closeModal = function (onComplete) {
        var container = getContainer();
        var modal = getModal();
        if (!modal) {
            return;
        }
        removeClass(modal, swalClasses.show);
        addClass(modal, swalClasses.hide);
        clearTimeout(modal.timeout);
        resetPrevState();
        var removeModalAndResetState = function removeModalAndResetState() {
            if (container.parentNode) {
                container.parentNode.removeChild(container);
            }
            removeClass(document.documentElement, swalClasses.shown);
            removeClass(document.body, swalClasses.shown);
            undoScrollbar();
            undoIOSfix();
        };
        if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
            modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
                modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
                if (hasClass(modal, swalClasses.hide)) {
                    removeModalAndResetState();
                }
            });
        } else {
            removeModalAndResetState();
        }
        if (onComplete !== null && typeof onComplete === 'function') {
            setTimeout(function () {
                onComplete(modal);
            });
        }
    };
    sweetAlert.clickConfirm = function () {
        return getConfirmButton().click();
    };
    sweetAlert.clickCancel = function () {
        return getCancelButton().click();
    };
    sweetAlert.showLoading = sweetAlert.enableLoading = function () {
        var modal = getModal();
        if (!modal) {
            sweetAlert('');
        }
        var buttonsWrapper = getButtonsWrapper();
        var confirmButton = getConfirmButton();
        var cancelButton = getCancelButton();
        show(buttonsWrapper);
        show(confirmButton, 'inline-block');
        addClass(buttonsWrapper, swalClasses.loading);
        addClass(modal, swalClasses.loading);
        confirmButton.disabled = true;
        cancelButton.disabled = true;
    };
    sweetAlert.setDefaults = function (userParams) {
        if (!userParams || (typeof userParams === 'undefined' ? 'undefined' : _typeof(userParams)) !== 'object') {
            return console.error('SweetAlert2: the argument for setDefaults() is required and has to be a object');
        }
        for (var param in userParams) {
            if (!defaultParams.hasOwnProperty(param) && param !== 'extraParams') {
                console.warn('SweetAlert2: Unknown parameter "' + param + '"');
                delete userParams[param];
            }
        }
        _extends(modalParams, userParams);
    };
    sweetAlert.resetDefaults = function () {
        modalParams = _extends({}, defaultParams);
    };
    sweetAlert.noop = function () {
    };
    sweetAlert.version = '6.6.6';
    sweetAlert.default = sweetAlert;
    return sweetAlert;
}));
if (window.Sweetalert2)
    window.sweetAlert = window.swal = window.Sweetalert2;
(function () {
    define('ajax', [
        'tools',
        'checkLogin',
        'baseSet',
        'local',
        'loader',
        'sweetalert',
        'jquery',
        'jquery'
    ], function (t, c, b, l, swal) {
        return {
            Post: function (obj) {
                var suc = obj.success;
                delete obj.success;
                var loading = obj.loading;
                delete obj.loading;
                var postModel = {
                    url: '',
                    type: 'POST',
                    data: {},
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function (e) {
                        var result = e.code == '0' ? true : false;
                        if (result) {
                            suc(e);
                        } else if (e.code == -1) {
                        } else {
                        }
                    },
                    complete: function (e) {
                        if (loading != null && loading != undefined && loading != '' & loading.remove) {
                            loading.body.loader.remove();
                        }
                        ;
                    },
                    error: function (e) {
                    },
                    beforeSend: function (e) {
                    }
                };
                postModel = t.extend(postModel, obj);
                postModel.data = JSON.stringify(postModel.data);
                $.ajax(postModel);
            },
            ajaxPost: function (obj) {
                var suc = obj.success;
                delete obj.success;
                var postModel = {
                    url: '',
                    type: 'POST',
                    data: {},
                    dataType: 'json',
                    contentType: 'application/json',
                    headers: { 'token': c.check() },
                    success: function (e) {
                        var result = e.code == '0' ? true : false;
                        if (result) {
                            suc(e);
                        } else {
                            if (e.code == -1 || e.code == -99) {
                                swal({
                                    title: '登录信息异常',
                                    confirmButtonText: '确定',
                                    onClose: function () {
                                        window.location.href = 'login.html';
                                    }
                                });
                            } else {
                                swal({
                                    title: '错误信息',
                                    text: e.message,
                                    type: 'error',
                                    confirmButtonText: '确定'
                                });
                            }
                        }
                    },
                    complete: function (e) {
                    },
                    error: function (e) {
                        swal({
                            title: '错误信息',
                            text: JSON.stringify(e),
                            type: 'error',
                            confirmButtonText: '确定'
                        });
                    },
                    beforeSend: function (e) {
                    }
                };
                postModel = t.extend(postModel, obj);
                postModel.data = JSON.stringify(postModel.data);
                $.ajax(postModel);
            },
            ajaxGet: function (obj) {
                var suc = obj.success;
                delete obj.success;
                var getModel = {
                    url: '',
                    type: 'GET',
                    contentType: 'application/json',
                    headers: { 'token': c.check() },
                    success: function (e) {
                        var result = e.code == '0' ? true : false;
                        if (result) {
                            suc(e);
                        } else {
                            if (e.code == -1 || e.code == -99) {
                                swal({
                                    title: '登录信息异常',
                                    confirmButtonText: '确定',
                                    onClose: function () {
                                        window.location.href = 'login.html';
                                    }
                                });
                            } else {
                                swal({
                                    title: '错误信息',
                                    text: e.message,
                                    type: 'error',
                                    confirmButtonText: '确定'
                                });
                            }
                        }
                    },
                    complete: function (e) {
                    },
                    error: function (e) {
                        swal({
                            title: '错误信息',
                            text: JSON.stringify(e),
                            type: 'error',
                            confirmButtonText: '确定'
                        });
                    },
                    beforeSend: function (e) {
                    }
                };
                getModel = t.extend(getModel, obj);
                $.ajax(getModel);
            }
        };
    });
}.call(this));
(function () {
    define('api', [
        'ajax',
        'tools',
        'baseSet',
        'jquery',
        'ajax'
    ], function (a, t, b) {
        return {
            login: function (postData, suc, con) {
                a.Post({
                    url: b.postServer + 'manager/login/access',
                    data: postData,
                    success: function (data) {
                        suc(data);
                    },
                    complete: function (data) {
                        con(data);
                    }
                });
            }
        };
    });
}.call(this));
(function () {
    !function (a) {
        'function' == typeof define && define.amd ? define('validate', [
            'jquery',
            'jquery'
        ], a) : a(jQuery);
    }(function (a) {
        a.extend(a.fn, {
            validate: function (b) {
                if (!this.length)
                    return void (b && b.debug && window.console && console.warn('Nothing selected, can\'t validate, returning nothing.'));
                var c = a.data(this[0], 'validator');
                return c ? c : (this.attr('novalidate', 'novalidate'), c = new a.validator(b, this[0]), a.data(this[0], 'validator', c), c.settings.onsubmit && (this.validateDelegate(':submit', 'click', function (b) {
                    c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass('cancel') && (c.cancelSubmit = !0), void 0 !== a(b.target).attr('formnovalidate') && (c.cancelSubmit = !0);
                }), this.submit(function (b) {
                    function d() {
                        var d, e;
                        return c.settings.submitHandler ? (c.submitButton && (d = a('<input type=\'hidden\'/>').attr('name', c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e ? e : !1) : !0;
                    }
                    return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1);
                })), c);
            },
            valid: function () {
                var b, c;
                return a(this[0]).is('form') ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), this.each(function () {
                    b = c.element(this) && b;
                })), b;
            },
            removeAttrs: function (b) {
                var c = {}, d = this;
                return a.each(b.split(/\s/), function (a, b) {
                    c[b] = d.attr(b), d.removeAttr(b);
                }), c;
            },
            rules: function (b, c) {
                var d, e, f, g, h, i, j = this[0];
                if (b)
                    switch (d = a.data(j.form, 'validator').settings, e = d.rules, f = a.validator.staticRules(j), b) {
                    case 'add':
                        a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case 'remove':
                        return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
                            i[c] = f[c], delete f[c], 'required' === c && a(j).removeAttr('aria-required');
                        }), i) : (delete e[j.name], f);
                    }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({ required: h }, g), a(j).attr('aria-required', 'true')), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, { remote: h })), g;
            }
        }), a.extend(a.expr[':'], {
            blank: function (b) {
                return !a.trim('' + a(b).val());
            },
            filled: function (b) {
                return !!a.trim('' + a(b).val());
            },
            unchecked: function (b) {
                return !a(b).prop('checked');
            }
        }), a.validator = function (b, c) {
            this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init();
        }, a.validator.format = function (b, c) {
            return 1 === arguments.length ? function () {
                var c = a.makeArray(arguments);
                return c.unshift(b), a.validator.format.apply(this, c);
            } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
                b = b.replace(new RegExp('\\{' + a + '\\}', 'g'), function () {
                    return c;
                });
            }), b);
        }, a.extend(a.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: 'error',
                validClass: 'valid',
                errorElement: 'label',
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: a([]),
                errorLabelContainer: a([]),
                onsubmit: !0,
                ignore: ':hidden',
                ignoreTitle: !1,
                onfocusin: function (a) {
                    this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)));
                },
                onfocusout: function (a) {
                    this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a);
                },
                onkeyup: function (a, b) {
                    (9 !== b.which || '' !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a);
                },
                onclick: function (a) {
                    a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
                },
                highlight: function (b, c, d) {
                    'radio' === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
                },
                unhighlight: function (b, c, d) {
                    'radio' === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
                }
            },
            setDefaults: function (b) {
                a.extend(a.validator.defaults, b);
            },
            messages: {
                required: 'This field is required.',
                remote: 'Please fix this field.',
                email: 'Please enter a valid email address.',
                url: 'Please enter a valid URL.',
                date: 'Please enter a valid date.',
                dateISO: 'Please enter a valid date ( ISO ).',
                number: 'Please enter a valid number.',
                digits: 'Please enter only digits.',
                creditcard: 'Please enter a valid credit card number.',
                equalTo: 'Please enter the same value again.',
                maxlength: a.validator.format('Please enter no more than {0} characters.'),
                minlength: a.validator.format('Please enter at least {0} characters.'),
                rangelength: a.validator.format('Please enter a value between {0} and {1} characters long.'),
                range: a.validator.format('Please enter a value between {0} and {1}.'),
                max: a.validator.format('Please enter a value less than or equal to {0}.'),
                min: a.validator.format('Please enter a value greater than or equal to {0}.')
            },
            autoCreateRanges: !1,
            prototype: {
                init: function () {
                    function b(b) {
                        var c = a.data(this[0].form, 'validator'), d = 'on' + b.type.replace(/^validate/, ''), e = c.settings;
                        e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b);
                    }
                    this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var c, d = this.groups = {};
                    a.each(this.settings.groups, function (b, c) {
                        'string' == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
                            d[c] = b;
                        });
                    }), c = this.settings.rules, a.each(c, function (b, d) {
                        c[b] = a.validator.normalizeRule(d);
                    }), a(this.currentForm).validateDelegate(':text, [type=\'password\'], [type=\'file\'], select, textarea, [type=\'number\'], [type=\'search\'] ,[type=\'tel\'], [type=\'url\'], [type=\'email\'], [type=\'datetime\'], [type=\'date\'], [type=\'month\'], [type=\'week\'], [type=\'time\'], [type=\'datetime-local\'], [type=\'range\'], [type=\'color\'], [type=\'radio\'], [type=\'checkbox\']', 'focusin focusout keyup', b).validateDelegate('select, option, [type=\'radio\'], [type=\'checkbox\']', 'click', b), this.settings.invalidHandler && a(this.currentForm).bind('invalid-form.validate', this.settings.invalidHandler), a(this.currentForm).find('[required], [data-rule-required], .required').attr('aria-required', 'true');
                },
                form: function () {
                    return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler('invalid-form', [this]), this.showErrors(), this.valid();
                },
                checkForm: function () {
                    this.prepareForm();
                    for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++)
                        this.check(b[a]);
                    return this.valid();
                },
                element: function (b) {
                    var c = this.clean(b), d = this.validationTargetFor(c), e = !0;
                    return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr('aria-invalid', !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e;
                },
                showErrors: function (b) {
                    if (b) {
                        a.extend(this.errorMap, b), this.errorList = [];
                        for (var c in b)
                            this.errorList.push({
                                message: b[c],
                                element: this.findByName(c)[0]
                            });
                        this.successList = a.grep(this.successList, function (a) {
                            return !(a.name in b);
                        });
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
                },
                resetForm: function () {
                    a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData('previousValue').removeAttr('aria-invalid');
                },
                numberOfInvalids: function () {
                    return this.objectLength(this.invalid);
                },
                objectLength: function (a) {
                    var b, c = 0;
                    for (b in a)
                        c++;
                    return c;
                },
                hideErrors: function () {
                    this.hideThese(this.toHide);
                },
                hideThese: function (a) {
                    a.not(this.containers).text(''), this.addWrapper(a).hide();
                },
                valid: function () {
                    return 0 === this.size();
                },
                size: function () {
                    return this.errorList.length;
                },
                focusInvalid: function () {
                    if (this.settings.focusInvalid)
                        try {
                            a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(':visible').focus().trigger('focusin');
                        } catch (b) {
                        }
                },
                findLastActive: function () {
                    var b = this.lastActive;
                    return b && 1 === a.grep(this.errorList, function (a) {
                        return a.element.name === b.name;
                    }).length && b;
                },
                elements: function () {
                    var b = this, c = {};
                    return a(this.currentForm).find('input, select, textarea').not(':submit, :reset, :image, [disabled], [readonly]').not(this.settings.ignore).filter(function () {
                        return !this.name && b.settings.debug && window.console && console.error('%o has no name assigned', this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0);
                    });
                },
                clean: function (b) {
                    return a(b)[0];
                },
                errors: function () {
                    var b = this.settings.errorClass.split(' ').join('.');
                    return a(this.settings.errorElement + '.' + b, this.errorContext);
                },
                reset: function () {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([]);
                },
                prepareForm: function () {
                    this.reset(), this.toHide = this.errors().add(this.containers);
                },
                prepareElement: function (a) {
                    this.reset(), this.toHide = this.errorsFor(a);
                },
                elementValue: function (b) {
                    var c, d = a(b), e = b.type;
                    return 'radio' === e || 'checkbox' === e ? a('input[name=\'' + b.name + '\']:checked').val() : 'number' === e && 'undefined' != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), 'string' == typeof c ? c.replace(/\r/g, '') : c);
                },
                check: function (b) {
                    b = this.validationTargetFor(this.clean(b));
                    var c, d, e, f = a(b).rules(), g = a.map(f, function (a, b) {
                            return b;
                        }).length, h = !1, i = this.elementValue(b);
                    for (d in f) {
                        e = {
                            method: d,
                            parameters: f[d]
                        };
                        try {
                            if (c = a.validator.methods[d].call(this, i, b, e.parameters), 'dependency-mismatch' === c && 1 === g) {
                                h = !0;
                                continue;
                            }
                            if (h = !1, 'pending' === c)
                                return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                            if (!c)
                                return this.formatAndAdd(b, e), !1;
                        } catch (j) {
                            throw this.settings.debug && window.console && console.log('Exception occurred when checking element ' + b.id + ', check the \'' + e.method + '\' method.', j), j;
                        }
                    }
                    if (!h)
                        return this.objectLength(f) && this.successList.push(b), !0;
                },
                customDataMessage: function (b, c) {
                    return a(b).data('msg' + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data('msg');
                },
                customMessage: function (a, b) {
                    var c = this.settings.messages[a];
                    return c && (c.constructor === String ? c : c[b]);
                },
                findDefined: function () {
                    for (var a = 0; a < arguments.length; a++)
                        if (void 0 !== arguments[a])
                            return arguments[a];
                    return void 0;
                },
                defaultMessage: function (b, c) {
                    return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], '<strong>Warning: No message defined for ' + b.name + '</strong>');
                },
                formatAndAdd: function (b, c) {
                    var d = this.defaultMessage(b, c.method), e = /\$?\{(\d+)\}/g;
                    'function' == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, '{$1}'), c.parameters)), this.errorList.push({
                        message: d,
                        element: b,
                        method: c.method
                    }), this.errorMap[b.name] = d, this.submitted[b.name] = d;
                },
                addWrapper: function (a) {
                    return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
                },
                defaultShowErrors: function () {
                    var a, b, c;
                    for (a = 0; this.errorList[a]; a++)
                        c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (a = 0; this.successList[a]; a++)
                            this.showLabel(this.successList[a]);
                    if (this.settings.unhighlight)
                        for (a = 0, b = this.validElements(); b[a]; a++)
                            this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
                },
                validElements: function () {
                    return this.currentElements.not(this.invalidElements());
                },
                invalidElements: function () {
                    return a(this.errorList).map(function () {
                        return this.element;
                    });
                },
                showLabel: function (b, c) {
                    var d, e, f, g = this.errorsFor(b), h = this.idOrName(b), i = a(b).attr('aria-describedby');
                    g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a('<' + this.settings.errorElement + '>').attr('id', h + '-error').addClass(this.settings.errorClass).html(c || ''), d = g, this.settings.wrapper && (d = g.hide().show().wrap('<' + this.settings.wrapper + '/>').parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is('label') ? g.attr('for', h) : 0 === g.parents('label[for=\'' + h + '\']').length && (f = g.attr('id').replace(/(:|\.|\[|\])/g, '\\$1'), i ? i.match(new RegExp('\\b' + f + '\\b')) || (i += ' ' + f) : i = f, a(b).attr('aria-describedby', i), e = this.groups[b.name], e && a.each(this.groups, function (b, c) {
                        c === e && a('[name=\'' + b + '\']', this.currentForm).attr('aria-describedby', g.attr('id'));
                    }))), !c && this.settings.success && (g.text(''), 'string' == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g);
                },
                errorsFor: function (b) {
                    var c = this.idOrName(b), d = a(b).attr('aria-describedby'), e = 'label[for=\'' + c + '\'], label[for=\'' + c + '\'] *';
                    return d && (e = e + ', #' + d.replace(/\s+/g, ', #')), this.errors().filter(e);
                },
                idOrName: function (a) {
                    return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
                },
                validationTargetFor: function (b) {
                    return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0];
                },
                checkable: function (a) {
                    return /radio|checkbox/i.test(a.type);
                },
                findByName: function (b) {
                    return a(this.currentForm).find('[name=\'' + b + '\']');
                },
                getLength: function (b, c) {
                    switch (c.nodeName.toLowerCase()) {
                    case 'select':
                        return a('option:selected', c).length;
                    case 'input':
                        if (this.checkable(c))
                            return this.findByName(c.name).filter(':checked').length;
                    }
                    return b.length;
                },
                depend: function (a, b) {
                    return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0;
                },
                dependTypes: {
                    'boolean': function (a) {
                        return a;
                    },
                    string: function (b, c) {
                        return !!a(b, c.form).length;
                    },
                    'function': function (a, b) {
                        return a(b);
                    }
                },
                optional: function (b) {
                    var c = this.elementValue(b);
                    return !a.validator.methods.required.call(this, c, b) && 'dependency-mismatch';
                },
                startRequest: function (a) {
                    this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0);
                },
                stopRequest: function (b, c) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler('invalid-form', [this]), this.formSubmitted = !1);
                },
                previousValue: function (b) {
                    return a.data(b, 'previousValue') || a.data(b, 'previousValue', {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(b, 'remote')
                    });
                }
            },
            classRuleSettings: {
                required: { required: !0 },
                email: { email: !0 },
                url: { url: !0 },
                date: { date: !0 },
                dateISO: { dateISO: !0 },
                number: { number: !0 },
                digits: { digits: !0 },
                creditcard: { creditcard: !0 }
            },
            addClassRules: function (b, c) {
                b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b);
            },
            classRules: function (b) {
                var c = {}, d = a(b).attr('class');
                return d && a.each(d.split(' '), function () {
                    this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
                }), c;
            },
            attributeRules: function (b) {
                var c, d, e = {}, f = a(b), g = b.getAttribute('type');
                for (c in a.validator.methods)
                    'required' === c ? (d = b.getAttribute(c), '' === d && (d = !0), d = !!d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), d || 0 === d ? e[c] = d : g === c && 'range' !== g && (e[c] = !0);
                return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e;
            },
            dataRules: function (b) {
                var c, d, e = {}, f = a(b);
                for (c in a.validator.methods)
                    d = f.data('rule' + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), void 0 !== d && (e[c] = d);
                return e;
            },
            staticRules: function (b) {
                var c = {}, d = a.data(b.form, 'validator');
                return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c;
            },
            normalizeRules: function (b, c) {
                return a.each(b, function (d, e) {
                    if (e === !1)
                        return void delete b[d];
                    if (e.param || e.depends) {
                        var f = !0;
                        switch (typeof e.depends) {
                        case 'string':
                            f = !!a(e.depends, c.form).length;
                            break;
                        case 'function':
                            f = e.depends.call(c, c);
                        }
                        f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d];
                    }
                }), a.each(b, function (d, e) {
                    b[d] = a.isFunction(e) ? e(c) : e;
                }), a.each([
                    'minlength',
                    'maxlength'
                ], function () {
                    b[this] && (b[this] = Number(b[this]));
                }), a.each([
                    'rangelength',
                    'range'
                ], function () {
                    var c;
                    b[this] && (a.isArray(b[this]) ? b[this] = [
                        Number(b[this][0]),
                        Number(b[this][1])
                    ] : 'string' == typeof b[this] && (c = b[this].replace(/[\[\]]/g, '').split(/[\s,]+/), b[this] = [
                        Number(c[0]),
                        Number(c[1])
                    ]));
                }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [
                    b.min,
                    b.max
                ], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [
                    b.minlength,
                    b.maxlength
                ], delete b.minlength, delete b.maxlength)), b;
            },
            normalizeRule: function (b) {
                if ('string' == typeof b) {
                    var c = {};
                    a.each(b.split(/\s/), function () {
                        c[this] = !0;
                    }), b = c;
                }
                return b;
            },
            addMethod: function (b, c, d) {
                a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
            },
            methods: {
                required: function (b, c, d) {
                    if (!this.depend(d, c))
                        return 'dependency-mismatch';
                    if ('select' === c.nodeName.toLowerCase()) {
                        var e = a(c).val();
                        return e && e.length > 0;
                    }
                    return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0;
                },
                email: function (a, b) {
                    return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
                },
                url: function (a, b) {
                    return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a);
                },
                date: function (a, b) {
                    return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString());
                },
                dateISO: function (a, b) {
                    return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a);
                },
                number: function (a, b) {
                    return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
                },
                digits: function (a, b) {
                    return this.optional(b) || /^\d+$/.test(a);
                },
                creditcard: function (a, b) {
                    if (this.optional(b))
                        return 'dependency-mismatch';
                    if (/[^0-9 \-]+/.test(a))
                        return !1;
                    var c, d, e = 0, f = 0, g = !1;
                    if (a = a.replace(/\D/g, ''), a.length < 13 || a.length > 19)
                        return !1;
                    for (c = a.length - 1; c >= 0; c--)
                        d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
                    return e % 10 === 0;
                },
                minlength: function (b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || e >= d;
                },
                maxlength: function (b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || d >= e;
                },
                rangelength: function (b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || e >= d[0] && e <= d[1];
                },
                min: function (a, b, c) {
                    return this.optional(b) || a >= c;
                },
                max: function (a, b, c) {
                    return this.optional(b) || c >= a;
                },
                range: function (a, b, c) {
                    return this.optional(b) || a >= c[0] && a <= c[1];
                },
                equalTo: function (b, c, d) {
                    var e = a(d);
                    return this.settings.onfocusout && e.unbind('.validate-equalTo').bind('blur.validate-equalTo', function () {
                        a(c).valid();
                    }), b === e.val();
                },
                remote: function (b, c, d) {
                    if (this.optional(c))
                        return 'dependency-mismatch';
                    var e, f, g = this.previousValue(c);
                    return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = 'string' == typeof d && { url: d } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
                        url: d,
                        mode: 'abort',
                        port: 'validate' + c.name,
                        dataType: 'json',
                        data: f,
                        context: e.currentForm,
                        success: function (d) {
                            var f, h, i, j = d === !0 || 'true' === d;
                            e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, 'remote'), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j);
                        }
                    }, d)), 'pending');
                }
            }
        }), a.format = function () {
            throw '$.format has been deprecated. Please use $.validator.format instead.';
        };
        var b, c = {};
        a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
            var e = a.port;
            'abort' === a.mode && (c[e] && c[e].abort(), c[e] = d);
        }) : (b = a.ajax, a.ajax = function (d) {
            var e = ('mode' in d ? d : a.ajaxSettings).mode, f = ('port' in d ? d : a.ajaxSettings).port;
            return 'abort' === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments);
        }), a.extend(a.fn, {
            validateDelegate: function (b, c, d) {
                return this.bind(c, function (c) {
                    var e = a(c.target);
                    return e.is(b) ? d.apply(e, arguments) : void 0;
                });
            }
        });
    });
}.call(this));
(function () {
    define('validateMethods', [
        'jquery',
        'validate'
    ], function () {
        jQuery.validator.addMethod('KingnetEmail', function (value, element) {
            return this.optional(element) || value.indexOf('@kingnet.com') != -1;
        }, '请使用恺英内部邮箱登陆');
        jQuery.validator.addMethod('TwoDecimal', function (value, element) {
            return this.optional(element) || /(^[-+]?[1-9]\d*(\.\d{1,2})?$)|(^[-+]?[0]{1}(\.\d{1,2})?$)/.test(value);
        }, '只能保留2位小数');
        jQuery.validator.addMethod('areaSel', function (value, element) {
            return this.optional(element) || value != '省份';
        }, '省份不能为空');
        jQuery.validator.addMethod('citySel', function (value, element) {
            return this.optional(element) || value != '城市';
        }, '城市不能为空');
        jQuery.validator.addMethod('isIntGtZero', function (value, element) {
            value = parseInt(value);
            return this.optional(element) || value > 0;
        }, '整数必须大于0');
        jQuery.validator.addMethod('isIntGteZero', function (value, element) {
            value = parseInt(value);
            return this.optional(element) || value >= 0;
        }, '整数必须大于或等于0');
        jQuery.validator.addMethod('isIntNEqZero', function (value, element) {
            value = parseInt(value);
            return this.optional(element) || value != 0;
        }, '整数必须不等于0');
        jQuery.validator.addMethod('isIntLtZero', function (value, element) {
            value = parseInt(value);
            return this.optional(element) || value < 0;
        }, '整数必须小于0');
        jQuery.validator.addMethod('isIntLteZero', function (value, element) {
            value = parseInt(value);
            return this.optional(element) || value <= 0;
        }, '整数必须小于或等于0');
        jQuery.validator.addMethod('isFloatEqZero', function (value, element) {
            value = parseFloat(value);
            return this.optional(element) || value == 0;
        }, '浮点数必须为0');
        jQuery.validator.addMethod('isFloatGtZero', function (value, element) {
            value = parseFloat(value);
            return this.optional(element) || value > 0;
        }, '浮点数必须大于0');
        jQuery.validator.addMethod('isFloatGtTen', function (value, element) {
            value = parseFloat(value);
            return this.optional(element) || value > 10;
        }, '浮点数必须大于0');
        jQuery.validator.addMethod('isFloatGteZero', function (value, element) {
            value = parseFloat(value);
            return this.optional(element) || value >= 0;
        }, '浮点数必须大于或等于0');
        jQuery.validator.addMethod('isFloatNEqZero', function (value, element) {
            value = parseFloat(value);
            return this.optional(element) || value != 0;
        }, '浮点数必须不等于0');
        jQuery.validator.addMethod('isFloatLtZero', function (value, element) {
            value = parseFloat(value);
            return this.optional(element) || value < 0;
        }, '浮点数必须小于0');
        jQuery.validator.addMethod('isFloatLteZero', function (value, element) {
            value = parseFloat(value);
            return this.optional(element) || value <= 0;
        }, '浮点数必须小于或等于0');
        jQuery.validator.addMethod('isFloat', function (value, element) {
            return this.optional(element) || /^[-\+]?\d+(\.\d+)?$/.test(value);
        }, '只能包含数字\u3001小数点等字符');
        jQuery.validator.addMethod('isInteger', function (value, element) {
            return this.optional(element) || /^[-\+]?\d+$/.test(value) && parseInt(value) >= 0;
        }, '匹配integer');
        jQuery.validator.addMethod('isNumber', function (value, element) {
            return this.optional(element) || /^[-\+]?\d+$/.test(value) || /^[-\+]?\d+(\.\d+)?$/.test(value);
        }, '匹配数值类型\uFF0C包括整数和浮点数');
        jQuery.validator.addMethod('isDigits', function (value, element) {
            return this.optional(element) || /^\d+$/.test(value);
        }, '只能输入0-9数字');
        jQuery.validator.addMethod('isChinese', function (value, element) {
            return this.optional(element) || /^[\u0391-\uFFE5]+$/.test(value);
        }, '只能包含中文字符');
        jQuery.validator.addMethod('isEnglish', function (value, element) {
            return this.optional(element) || /^[A-Za-z]+$/.test(value);
        }, '只能包含英文字符');
        jQuery.validator.addMethod('isMobile', function (value, element) {
            var length = value.length;
            return this.optional(element) || length == 11 && /^(((1[3-9][0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value);
        }, '请正确填写您的手机号码');
        jQuery.validator.addMethod('isPhone', function (value, element) {
            var tel = /^(\d{3,4}-?)?\d{7,9}$/g;
            return this.optional(element) || tel.test(value);
        }, '请正确填写您的电话号码');
        jQuery.validator.addMethod('isTel', function (value, element) {
            var length = value.length;
            var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            var tel = /^(\d{3,4}-?)?\d{7,9}$/g;
            return this.optional(element) || tel.test(value) || length == 11 && mobile.test(value);
        }, '请正确填写您的联系方式');
        jQuery.validator.addMethod('isQq', function (value, element) {
            return this.optional(element) || /^[1-9]\d{4,12}$/;
        }, '匹配QQ');
        jQuery.validator.addMethod('isZipCode', function (value, element) {
            var zip = /^[0-9]{6}$/;
            return this.optional(element) || zip.test(value);
        }, '请正确填写您的邮政编码');
        jQuery.validator.addMethod('isPwd', function (value, element) {
            return this.optional(element) || /^[a-zA-Z]\\w{6,12}$/.test(value);
        }, '以字母开头\uFF0C长度在6-12之间\uFF0C只能包含字符\u3001数字和下划线');
        jQuery.validator.addMethod('isIdCardNo', function (value, element) {
            return this.optional(element) || isIdCardNo(value);
        }, '请输入正确的身份证号码');
        jQuery.validator.addMethod('ip', function (value, element) {
            return this.optional(element) || /^(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.)(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.){2}([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))$/.test(value);
        }, '请填写正确的IP地址');
        jQuery.validator.addMethod('stringCheck', function (value, element) {
            return this.optional(element) || /^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/.test(value);
        }, '只能包含中文\u3001英文\u3001数字\u3001下划线等字符');
        jQuery.validator.addMethod('isEnglish', function (value, element) {
            return this.optional(element) || /^[A-Za-z]+$/.test(value);
        }, '匹配english');
        jQuery.validator.addMethod('isChinese', function (value, element) {
            return this.optional(element) || /^[\u4e00-\u9fa5]+$/.test(value);
        }, '匹配汉字');
        jQuery.validator.addMethod('isChineseChar', function (value, element) {
            return this.optional(element) || /^[\u0391-\uFFE5]+$/.test(value);
        }, '匹配中文(包括汉字和字符) ');
        jQuery.validator.addMethod('isRightfulString', function (value, element) {
            return this.optional(element) || /^[A-Za-z0-9_-]+$/.test(value);
        }, '判断是否为合法字符(a-zA-Z0-9-_)');
        jQuery.validator.addMethod('isContainsSpecialChar', function (value, element) {
            var reg = RegExp(/[(\ )(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\+)(\=)(\|)(\{)(\})(\')(\:)(\;)(\')(',)(\[)(\])(\.)(\<)(\>)(\/)(\?)(\~)(\！)(\@)(\#)(\￥)(\%)(\…)(\&)(\*)(\（)(\）)(\—)(\+)(\|)(\{)(\})(\【)(\】)(\‘)(\；)(\：)(\”)(\“)(\’)(\)(\，)(\、)(\？)]+/);
            return this.optional(element) || !reg.test(value);
        }, '含有中英文特殊字符');
        function isIdCardNo(num) {
            var len = num.length, re;
            if (len == 15)
                re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{2})(\w)$/);
            else if (len == 18)
                re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/);
            else {
                return false;
            }
            var a = num.match(re);
            if (a != null) {
                if (len == 15) {
                    var D = new Date('19' + a[3] + '/' + a[4] + '/' + a[5]);
                    var B = D.getYear() == a[3] && D.getMonth() + 1 == a[4] && D.getDate() == a[5];
                } else {
                    var D = new Date(a[3] + '/' + a[4] + '/' + a[5]);
                    var B = D.getFullYear() == a[3] && D.getMonth() + 1 == a[4] && D.getDate() == a[5];
                }
                if (!B) {
                    return false;
                }
            }
            if (!re.test(num)) {
                return false;
            }
            return true;
        }
    });
}.call(this));
var pJS = function (tag_id, params) {
    var canvas_el = document.querySelector('#' + tag_id + ' > .particles-js-canvas-el');
    this.pJS = {
        canvas: {
            el: canvas_el,
            w: canvas_el.offsetWidth,
            h: canvas_el.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: { value: '#fff' },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#ff0000'
                },
                polygon: { nb_sides: 5 },
                image: {
                    src: '',
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: false,
                anim: {
                    enable: false,
                    speed: 2,
                    opacity_min: 0,
                    sync: false
                }
            },
            size: {
                value: 20,
                random: false,
                anim: {
                    enable: false,
                    speed: 20,
                    size_min: 0,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 100,
                color: '#fff',
                opacity: 1,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 3000,
                    rotateY: 3000
                }
            },
            array: []
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: { opacity: 1 }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: 0.4
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            },
            mouse: {}
        },
        retina_detect: false,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var pJS = this.pJS;
    if (params) {
        Object.deepExtend(pJS, params);
    }
    pJS.tmp.obj = {
        size_value: pJS.particles.size.value,
        size_anim_speed: pJS.particles.size.anim.speed,
        move_speed: pJS.particles.move.speed,
        line_linked_distance: pJS.particles.line_linked.distance,
        line_linked_width: pJS.particles.line_linked.width,
        mode_grab_distance: pJS.interactivity.modes.grab.distance,
        mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
        mode_bubble_size: pJS.interactivity.modes.bubble.size,
        mode_repulse_distance: pJS.interactivity.modes.repulse.distance
    };
    pJS.fn.retinaInit = function () {
        if (pJS.retina_detect && window.devicePixelRatio > 1) {
            pJS.canvas.pxratio = window.devicePixelRatio;
            pJS.tmp.retina = true;
        } else {
            pJS.canvas.pxratio = 1;
            pJS.tmp.retina = false;
        }
        pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
        pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;
        pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
        pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
        pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
        pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
        pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
        pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
        pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
        pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
        pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;
    };
    pJS.fn.canvasInit = function () {
        pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
    };
    pJS.fn.canvasSize = function () {
        pJS.canvas.el.width = pJS.canvas.w;
        pJS.canvas.el.height = pJS.canvas.h;
        if (pJS && pJS.interactivity.events.resize) {
            window.addEventListener('resize', function () {
                pJS.canvas.w = pJS.canvas.el.offsetWidth;
                pJS.canvas.h = pJS.canvas.el.offsetHeight;
                if (pJS.tmp.retina) {
                    pJS.canvas.w *= pJS.canvas.pxratio;
                    pJS.canvas.h *= pJS.canvas.pxratio;
                }
                pJS.canvas.el.width = pJS.canvas.w;
                pJS.canvas.el.height = pJS.canvas.h;
                if (!pJS.particles.move.enable) {
                    pJS.fn.particlesEmpty();
                    pJS.fn.particlesCreate();
                    pJS.fn.particlesDraw();
                    pJS.fn.vendors.densityAutoParticles();
                }
                pJS.fn.vendors.densityAutoParticles();
            });
        }
    };
    pJS.fn.canvasPaint = function () {
        pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
    };
    pJS.fn.canvasClear = function () {
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
    };
    pJS.fn.particle = function (color, opacity, position) {
        this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
        if (pJS.particles.size.anim.enable) {
            this.size_status = false;
            this.vs = pJS.particles.size.anim.speed / 100;
            if (!pJS.particles.size.anim.sync) {
                this.vs = this.vs * Math.random();
            }
        }
        this.x = position ? position.x : Math.random() * pJS.canvas.w;
        this.y = position ? position.y : Math.random() * pJS.canvas.h;
        if (this.x > pJS.canvas.w - this.radius * 2)
            this.x = this.x - this.radius;
        else if (this.x < this.radius * 2)
            this.x = this.x + this.radius;
        if (this.y > pJS.canvas.h - this.radius * 2)
            this.y = this.y - this.radius;
        else if (this.y < this.radius * 2)
            this.y = this.y + this.radius;
        if (pJS.particles.move.bounce) {
            pJS.fn.vendors.checkOverlap(this, position);
        }
        this.color = {};
        if (typeof color.value == 'object') {
            if (color.value instanceof Array) {
                var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
                this.color.rgb = hexToRgb(color_selected);
            } else {
                if (color.value.r != undefined && color.value.g != undefined && color.value.b != undefined) {
                    this.color.rgb = {
                        r: color.value.r,
                        g: color.value.g,
                        b: color.value.b
                    };
                }
                if (color.value.h != undefined && color.value.s != undefined && color.value.l != undefined) {
                    this.color.hsl = {
                        h: color.value.h,
                        s: color.value.s,
                        l: color.value.l
                    };
                }
            }
        } else if (color.value == 'random') {
            this.color.rgb = {
                r: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
                g: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
                b: Math.floor(Math.random() * (255 - 0 + 1)) + 0
            };
        } else if (typeof color.value == 'string') {
            this.color = color;
            this.color.rgb = hexToRgb(this.color.value);
        }
        this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
        if (pJS.particles.opacity.anim.enable) {
            this.opacity_status = false;
            this.vo = pJS.particles.opacity.anim.speed / 100;
            if (!pJS.particles.opacity.anim.sync) {
                this.vo = this.vo * Math.random();
            }
        }
        var velbase = {};
        switch (pJS.particles.move.direction) {
        case 'top':
            velbase = {
                x: 0,
                y: -1
            };
            break;
        case 'top-right':
            velbase = {
                x: 0.5,
                y: -0.5
            };
            break;
        case 'right':
            velbase = {
                x: 1,
                y: -0
            };
            break;
        case 'bottom-right':
            velbase = {
                x: 0.5,
                y: 0.5
            };
            break;
        case 'bottom':
            velbase = {
                x: 0,
                y: 1
            };
            break;
        case 'bottom-left':
            velbase = {
                x: -0.5,
                y: 1
            };
            break;
        case 'left':
            velbase = {
                x: -1,
                y: 0
            };
            break;
        case 'top-left':
            velbase = {
                x: -0.5,
                y: -0.5
            };
            break;
        default:
            velbase = {
                x: 0,
                y: 0
            };
            break;
        }
        if (pJS.particles.move.straight) {
            this.vx = velbase.x;
            this.vy = velbase.y;
            if (pJS.particles.move.random) {
                this.vx = this.vx * Math.random();
                this.vy = this.vy * Math.random();
            }
        } else {
            this.vx = velbase.x + Math.random() - 0.5;
            this.vy = velbase.y + Math.random() - 0.5;
        }
        this.vx_i = this.vx;
        this.vy_i = this.vy;
        var shape_type = pJS.particles.shape.type;
        if (typeof shape_type == 'object') {
            if (shape_type instanceof Array) {
                var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
                this.shape = shape_selected;
            }
        } else {
            this.shape = shape_type;
        }
        if (this.shape == 'image') {
            var sh = pJS.particles.shape;
            this.img = {
                src: sh.image.src,
                ratio: sh.image.width / sh.image.height
            };
            if (!this.img.ratio)
                this.img.ratio = 1;
            if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined) {
                pJS.fn.vendors.createSvgImg(this);
                if (pJS.tmp.pushing) {
                    this.img.loaded = false;
                }
            }
        }
    };
    pJS.fn.particle.prototype.draw = function () {
        var p = this;
        if (p.radius_bubble != undefined) {
            var radius = p.radius_bubble;
        } else {
            var radius = p.radius;
        }
        if (p.opacity_bubble != undefined) {
            var opacity = p.opacity_bubble;
        } else {
            var opacity = p.opacity;
        }
        if (p.color.rgb) {
            var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + opacity + ')';
        } else {
            var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + opacity + ')';
        }
        pJS.canvas.ctx.fillStyle = color_value;
        pJS.canvas.ctx.beginPath();
        switch (p.shape) {
        case 'circle':
            pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
            break;
        case 'edge':
            pJS.canvas.ctx.rect(p.x - radius, p.y - radius, radius * 2, radius * 2);
            break;
        case 'triangle':
            pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius, p.y + radius / 1.66, radius * 2, 3, 2);
            break;
        case 'polygon':
            pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius / (pJS.particles.shape.polygon.nb_sides / 3.5), p.y - radius / (2.66 / 3.5), radius * 2.66 / (pJS.particles.shape.polygon.nb_sides / 3), pJS.particles.shape.polygon.nb_sides, 1);
            break;
        case 'star':
            pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius * 2 / (pJS.particles.shape.polygon.nb_sides / 4), p.y - radius / (2 * 2.66 / 3.5), radius * 2 * 2.66 / (pJS.particles.shape.polygon.nb_sides / 3), pJS.particles.shape.polygon.nb_sides, 2);
            break;
        case 'image':
            function draw() {
                pJS.canvas.ctx.drawImage(img_obj, p.x - radius, p.y - radius, radius * 2, radius * 2 / p.img.ratio);
            }
            if (pJS.tmp.img_type == 'svg') {
                var img_obj = p.img.obj;
            } else {
                var img_obj = pJS.tmp.img_obj;
            }
            if (img_obj) {
                draw();
            }
            break;
        }
        pJS.canvas.ctx.closePath();
        if (pJS.particles.shape.stroke.width > 0) {
            pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
            pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
            pJS.canvas.ctx.stroke();
        }
        pJS.canvas.ctx.fill();
    };
    pJS.fn.particlesCreate = function () {
        for (var i = 0; i < pJS.particles.number.value; i++) {
            pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
        }
    };
    pJS.fn.particlesUpdate = function () {
        for (var i = 0; i < pJS.particles.array.length; i++) {
            var p = pJS.particles.array[i];
            if (pJS.particles.move.enable) {
                var ms = pJS.particles.move.speed / 2;
                p.x += p.vx * ms;
                p.y += p.vy * ms;
            }
            if (pJS.particles.opacity.anim.enable) {
                if (p.opacity_status == true) {
                    if (p.opacity >= pJS.particles.opacity.value)
                        p.opacity_status = false;
                    p.opacity += p.vo;
                } else {
                    if (p.opacity <= pJS.particles.opacity.anim.opacity_min)
                        p.opacity_status = true;
                    p.opacity -= p.vo;
                }
                if (p.opacity < 0)
                    p.opacity = 0;
            }
            if (pJS.particles.size.anim.enable) {
                if (p.size_status == true) {
                    if (p.radius >= pJS.particles.size.value)
                        p.size_status = false;
                    p.radius += p.vs;
                } else {
                    if (p.radius <= pJS.particles.size.anim.size_min)
                        p.size_status = true;
                    p.radius -= p.vs;
                }
                if (p.radius < 0)
                    p.radius = 0;
            }
            if (pJS.particles.move.out_mode == 'bounce') {
                var new_pos = {
                    x_left: p.radius,
                    x_right: pJS.canvas.w,
                    y_top: p.radius,
                    y_bottom: pJS.canvas.h
                };
            } else {
                var new_pos = {
                    x_left: -p.radius,
                    x_right: pJS.canvas.w + p.radius,
                    y_top: -p.radius,
                    y_bottom: pJS.canvas.h + p.radius
                };
            }
            if (p.x - p.radius > pJS.canvas.w) {
                p.x = new_pos.x_left;
                p.y = Math.random() * pJS.canvas.h;
            } else if (p.x + p.radius < 0) {
                p.x = new_pos.x_right;
                p.y = Math.random() * pJS.canvas.h;
            }
            if (p.y - p.radius > pJS.canvas.h) {
                p.y = new_pos.y_top;
                p.x = Math.random() * pJS.canvas.w;
            } else if (p.y + p.radius < 0) {
                p.y = new_pos.y_bottom;
                p.x = Math.random() * pJS.canvas.w;
            }
            switch (pJS.particles.move.out_mode) {
            case 'bounce':
                if (p.x + p.radius > pJS.canvas.w)
                    p.vx = -p.vx;
                else if (p.x - p.radius < 0)
                    p.vx = -p.vx;
                if (p.y + p.radius > pJS.canvas.h)
                    p.vy = -p.vy;
                else if (p.y - p.radius < 0)
                    p.vy = -p.vy;
                break;
            }
            if (isInArray('grab', pJS.interactivity.events.onhover.mode)) {
                pJS.fn.modes.grabParticle(p);
            }
            if (isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)) {
                pJS.fn.modes.bubbleParticle(p);
            }
            if (isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)) {
                pJS.fn.modes.repulseParticle(p);
            }
            if (pJS.particles.line_linked.enable || pJS.particles.move.attract.enable) {
                for (var j = i + 1; j < pJS.particles.array.length; j++) {
                    var p2 = pJS.particles.array[j];
                    if (pJS.particles.line_linked.enable) {
                        pJS.fn.interact.linkParticles(p, p2);
                    }
                    if (pJS.particles.move.attract.enable) {
                        pJS.fn.interact.attractParticles(p, p2);
                    }
                    if (pJS.particles.move.bounce) {
                        pJS.fn.interact.bounceParticles(p, p2);
                    }
                }
            }
        }
    };
    pJS.fn.particlesDraw = function () {
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
        pJS.fn.particlesUpdate();
        for (var i = 0; i < pJS.particles.array.length; i++) {
            var p = pJS.particles.array[i];
            p.draw();
        }
    };
    pJS.fn.particlesEmpty = function () {
        pJS.particles.array = [];
    };
    pJS.fn.particlesRefresh = function () {
        cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
        cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
        pJS.tmp.source_svg = undefined;
        pJS.tmp.img_obj = undefined;
        pJS.tmp.count_svg = 0;
        pJS.fn.particlesEmpty();
        pJS.fn.canvasClear();
        pJS.fn.vendors.start();
    };
    pJS.fn.interact.linkParticles = function (p1, p2) {
        var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
        if (dist <= pJS.particles.line_linked.distance) {
            var opacity_line = pJS.particles.line_linked.opacity - dist / (1 / pJS.particles.line_linked.opacity) / pJS.particles.line_linked.distance;
            if (opacity_line > 0) {
                var color_line = pJS.particles.line_linked.color_rgb_line;
                pJS.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + opacity_line + ')';
                pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
                pJS.canvas.ctx.beginPath();
                pJS.canvas.ctx.moveTo(p1.x, p1.y);
                pJS.canvas.ctx.lineTo(p2.x, p2.y);
                pJS.canvas.ctx.stroke();
                pJS.canvas.ctx.closePath();
            }
        }
    };
    pJS.fn.interact.attractParticles = function (p1, p2) {
        var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
        if (dist <= pJS.particles.line_linked.distance) {
            var ax = dx / (pJS.particles.move.attract.rotateX * 1000), ay = dy / (pJS.particles.move.attract.rotateY * 1000);
            p1.vx -= ax;
            p1.vy -= ay;
            p2.vx += ax;
            p2.vy += ay;
        }
    };
    pJS.fn.interact.bounceParticles = function (p1, p2) {
        var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy), dist_p = p1.radius + p2.radius;
        if (dist <= dist_p) {
            p1.vx = -p1.vx;
            p1.vy = -p1.vy;
            p2.vx = -p2.vx;
            p2.vy = -p2.vy;
        }
    };
    pJS.fn.modes.pushParticles = function (nb, pos) {
        pJS.tmp.pushing = true;
        for (var i = 0; i < nb; i++) {
            pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value, {
                'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
                'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
            }));
            if (i == nb - 1) {
                if (!pJS.particles.move.enable) {
                    pJS.fn.particlesDraw();
                }
                pJS.tmp.pushing = false;
            }
        }
    };
    pJS.fn.modes.removeParticles = function (nb) {
        pJS.particles.array.splice(0, nb);
        if (!pJS.particles.move.enable) {
            pJS.fn.particlesDraw();
        }
    };
    pJS.fn.modes.bubbleParticle = function (p) {
        if (pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)) {
            var dx_mouse = p.x - pJS.interactivity.mouse.pos_x, dy_mouse = p.y - pJS.interactivity.mouse.pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse), ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;
            function init() {
                p.opacity_bubble = p.opacity;
                p.radius_bubble = p.radius;
            }
            if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {
                if (ratio >= 0 && pJS.interactivity.status == 'mousemove') {
                    if (pJS.interactivity.modes.bubble.size != pJS.particles.size.value) {
                        if (pJS.interactivity.modes.bubble.size > pJS.particles.size.value) {
                            var size = p.radius + pJS.interactivity.modes.bubble.size * ratio;
                            if (size >= 0) {
                                p.radius_bubble = size;
                            }
                        } else {
                            var dif = p.radius - pJS.interactivity.modes.bubble.size, size = p.radius - dif * ratio;
                            if (size > 0) {
                                p.radius_bubble = size;
                            } else {
                                p.radius_bubble = 0;
                            }
                        }
                    }
                    if (pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value) {
                        if (pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value) {
                            var opacity = pJS.interactivity.modes.bubble.opacity * ratio;
                            if (opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity) {
                                p.opacity_bubble = opacity;
                            }
                        } else {
                            var opacity = p.opacity - (pJS.particles.opacity.value - pJS.interactivity.modes.bubble.opacity) * ratio;
                            if (opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity) {
                                p.opacity_bubble = opacity;
                            }
                        }
                    }
                }
            } else {
                init();
            }
            if (pJS.interactivity.status == 'mouseleave') {
                init();
            }
        } else if (pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)) {
            if (pJS.tmp.bubble_clicking) {
                var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x, dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse), time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time) / 1000;
                if (time_spent > pJS.interactivity.modes.bubble.duration) {
                    pJS.tmp.bubble_duration_end = true;
                }
                if (time_spent > pJS.interactivity.modes.bubble.duration * 2) {
                    pJS.tmp.bubble_clicking = false;
                    pJS.tmp.bubble_duration_end = false;
                }
            }
            function process(bubble_param, particles_param, p_obj_bubble, p_obj, id) {
                if (bubble_param != particles_param) {
                    if (!pJS.tmp.bubble_duration_end) {
                        if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {
                            if (p_obj_bubble != undefined)
                                var obj = p_obj_bubble;
                            else
                                var obj = p_obj;
                            if (obj != bubble_param) {
                                var value = p_obj - time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration;
                                if (id == 'size')
                                    p.radius_bubble = value;
                                if (id == 'opacity')
                                    p.opacity_bubble = value;
                            }
                        } else {
                            if (id == 'size')
                                p.radius_bubble = undefined;
                            if (id == 'opacity')
                                p.opacity_bubble = undefined;
                        }
                    } else {
                        if (p_obj_bubble != undefined) {
                            var value_tmp = p_obj - time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration, dif = bubble_param - value_tmp;
                            value = bubble_param + dif;
                            if (id == 'size')
                                p.radius_bubble = value;
                            if (id == 'opacity')
                                p.opacity_bubble = value;
                        }
                    }
                }
            }
            if (pJS.tmp.bubble_clicking) {
                process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
                process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
            }
        }
    };
    pJS.fn.modes.repulseParticle = function (p) {
        if (pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {
            var dx_mouse = p.x - pJS.interactivity.mouse.pos_x, dy_mouse = p.y - pJS.interactivity.mouse.pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
            var normVec = {
                    x: dx_mouse / dist_mouse,
                    y: dy_mouse / dist_mouse
                }, repulseRadius = pJS.interactivity.modes.repulse.distance, velocity = 100, repulseFactor = clamp(1 / repulseRadius * (-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) * repulseRadius * velocity, 0, 50);
            var pos = {
                x: p.x + normVec.x * repulseFactor,
                y: p.y + normVec.y * repulseFactor
            };
            if (pJS.particles.move.out_mode == 'bounce') {
                if (pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w)
                    p.x = pos.x;
                if (pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h)
                    p.y = pos.y;
            } else {
                p.x = pos.x;
                p.y = pos.y;
            }
        } else if (pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {
            if (!pJS.tmp.repulse_finish) {
                pJS.tmp.repulse_count++;
                if (pJS.tmp.repulse_count == pJS.particles.array.length) {
                    pJS.tmp.repulse_finish = true;
                }
            }
            if (pJS.tmp.repulse_clicking) {
                var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance / 6, 3);
                var dx = pJS.interactivity.mouse.click_pos_x - p.x, dy = pJS.interactivity.mouse.click_pos_y - p.y, d = dx * dx + dy * dy;
                var force = -repulseRadius / d * 1;
                function process() {
                    var f = Math.atan2(dy, dx);
                    p.vx = force * Math.cos(f);
                    p.vy = force * Math.sin(f);
                    if (pJS.particles.move.out_mode == 'bounce') {
                        var pos = {
                            x: p.x + p.vx,
                            y: p.y + p.vy
                        };
                        if (pos.x + p.radius > pJS.canvas.w)
                            p.vx = -p.vx;
                        else if (pos.x - p.radius < 0)
                            p.vx = -p.vx;
                        if (pos.y + p.radius > pJS.canvas.h)
                            p.vy = -p.vy;
                        else if (pos.y - p.radius < 0)
                            p.vy = -p.vy;
                    }
                }
                if (d <= repulseRadius) {
                    process();
                }
            } else {
                if (pJS.tmp.repulse_clicking == false) {
                    p.vx = p.vx_i;
                    p.vy = p.vy_i;
                }
            }
        }
    };
    pJS.fn.modes.grabParticle = function (p) {
        if (pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove') {
            var dx_mouse = p.x - pJS.interactivity.mouse.pos_x, dy_mouse = p.y - pJS.interactivity.mouse.pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
            if (dist_mouse <= pJS.interactivity.modes.grab.distance) {
                var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - dist_mouse / (1 / pJS.interactivity.modes.grab.line_linked.opacity) / pJS.interactivity.modes.grab.distance;
                if (opacity_line > 0) {
                    var color_line = pJS.particles.line_linked.color_rgb_line;
                    pJS.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + opacity_line + ')';
                    pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
                    pJS.canvas.ctx.beginPath();
                    pJS.canvas.ctx.moveTo(p.x, p.y);
                    pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
                    pJS.canvas.ctx.stroke();
                    pJS.canvas.ctx.closePath();
                }
            }
        }
    };
    pJS.fn.vendors.eventsListeners = function () {
        if (pJS.interactivity.detect_on == 'window') {
            pJS.interactivity.el = window;
        } else {
            pJS.interactivity.el = pJS.canvas.el;
        }
        if (pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable) {
            pJS.interactivity.el.addEventListener('mousemove', function (e) {
                if (pJS.interactivity.el == window) {
                    var pos_x = e.clientX, pos_y = e.clientY;
                } else {
                    var pos_x = e.offsetX || e.clientX, pos_y = e.offsetY || e.clientY;
                }
                pJS.interactivity.mouse.pos_x = pos_x;
                pJS.interactivity.mouse.pos_y = pos_y;
                if (pJS.tmp.retina) {
                    pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
                    pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
                }
                pJS.interactivity.status = 'mousemove';
            });
            pJS.interactivity.el.addEventListener('mouseleave', function (e) {
                pJS.interactivity.mouse.pos_x = null;
                pJS.interactivity.mouse.pos_y = null;
                pJS.interactivity.status = 'mouseleave';
            });
        }
        if (pJS.interactivity.events.onclick.enable) {
            pJS.interactivity.el.addEventListener('click', function () {
                pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
                pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
                pJS.interactivity.mouse.click_time = new Date().getTime();
                if (pJS.interactivity.events.onclick.enable) {
                    switch (pJS.interactivity.events.onclick.mode) {
                    case 'push':
                        if (pJS.particles.move.enable) {
                            pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                        } else {
                            if (pJS.interactivity.modes.push.particles_nb == 1) {
                                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                            } else if (pJS.interactivity.modes.push.particles_nb > 1) {
                                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                            }
                        }
                        break;
                    case 'remove':
                        pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
                        break;
                    case 'bubble':
                        pJS.tmp.bubble_clicking = true;
                        break;
                    case 'repulse':
                        pJS.tmp.repulse_clicking = true;
                        pJS.tmp.repulse_count = 0;
                        pJS.tmp.repulse_finish = false;
                        setTimeout(function () {
                            pJS.tmp.repulse_clicking = false;
                        }, pJS.interactivity.modes.repulse.duration * 1000);
                        break;
                    }
                }
            });
        }
    };
    pJS.fn.vendors.densityAutoParticles = function () {
        if (pJS.particles.number.density.enable) {
            var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
            if (pJS.tmp.retina) {
                area = area / (pJS.canvas.pxratio * 2);
            }
            var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;
            var missing_particles = pJS.particles.array.length - nb_particles;
            if (missing_particles < 0)
                pJS.fn.modes.pushParticles(Math.abs(missing_particles));
            else
                pJS.fn.modes.removeParticles(missing_particles);
        }
    };
    pJS.fn.vendors.checkOverlap = function (p1, position) {
        for (var i = 0; i < pJS.particles.array.length; i++) {
            var p2 = pJS.particles.array[i];
            var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
            if (dist <= p1.radius + p2.radius) {
                p1.x = position ? position.x : Math.random() * pJS.canvas.w;
                p1.y = position ? position.y : Math.random() * pJS.canvas.h;
                pJS.fn.vendors.checkOverlap(p1);
            }
        }
    };
    pJS.fn.vendors.createSvgImg = function (p) {
        var svgXml = pJS.tmp.source_svg, rgbHex = /#([0-9A-F]{3,6})/gi, coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
                if (p.color.rgb) {
                    var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + p.opacity + ')';
                } else {
                    var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + p.opacity + ')';
                }
                return color_value;
            });
        var svg = new Blob([coloredSvgXml], { type: 'image/svg+xml;charset=utf-8' }), DOMURL = window.URL || window.webkitURL || window, url = DOMURL.createObjectURL(svg);
        var img = new Image();
        img.addEventListener('load', function () {
            p.img.obj = img;
            p.img.loaded = true;
            DOMURL.revokeObjectURL(url);
            pJS.tmp.count_svg++;
        });
        img.src = url;
    };
    pJS.fn.vendors.destroypJS = function () {
        cancelAnimationFrame(pJS.fn.drawAnimFrame);
        canvas_el.remove();
        pJSDom = null;
    };
    pJS.fn.vendors.drawShape = function (c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {
        var sideCount = sideCountNumerator * sideCountDenominator;
        var decimalSides = sideCountNumerator / sideCountDenominator;
        var interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
        var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
        c.save();
        c.beginPath();
        c.translate(startX, startY);
        c.moveTo(0, 0);
        for (var i = 0; i < sideCount; i++) {
            c.lineTo(sideLength, 0);
            c.translate(sideLength, 0);
            c.rotate(interiorAngle);
        }
        c.fill();
        c.restore();
    };
    pJS.fn.vendors.exportImg = function () {
        window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
    };
    pJS.fn.vendors.loadImg = function (type) {
        pJS.tmp.img_error = undefined;
        if (pJS.particles.shape.image.src != '') {
            if (type == 'svg') {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', pJS.particles.shape.image.src);
                xhr.onreadystatechange = function (data) {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            pJS.tmp.source_svg = data.currentTarget.response;
                            pJS.fn.vendors.checkBeforeDraw();
                        } else {
                            console.log('Error pJS - Image not found');
                            pJS.tmp.img_error = true;
                        }
                    }
                };
                xhr.send();
            } else {
                var img = new Image();
                img.addEventListener('load', function () {
                    pJS.tmp.img_obj = img;
                    pJS.fn.vendors.checkBeforeDraw();
                });
                img.src = pJS.particles.shape.image.src;
            }
        } else {
            console.log('Error pJS - No image.src');
            pJS.tmp.img_error = true;
        }
    };
    pJS.fn.vendors.draw = function () {
        if (pJS.particles.shape.type == 'image') {
            if (pJS.tmp.img_type == 'svg') {
                if (pJS.tmp.count_svg >= pJS.particles.number.value) {
                    pJS.fn.particlesDraw();
                    if (!pJS.particles.move.enable)
                        cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
                    else
                        pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
                } else {
                    if (!pJS.tmp.img_error)
                        pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
                }
            } else {
                if (pJS.tmp.img_obj != undefined) {
                    pJS.fn.particlesDraw();
                    if (!pJS.particles.move.enable)
                        cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
                    else
                        pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
                } else {
                    if (!pJS.tmp.img_error)
                        pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
                }
            }
        } else {
            pJS.fn.particlesDraw();
            if (!pJS.particles.move.enable)
                cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
            else
                pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }
    };
    pJS.fn.vendors.checkBeforeDraw = function () {
        if (pJS.particles.shape.type == 'image') {
            if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined) {
                pJS.tmp.checkAnimFrame = requestAnimFrame(check);
            } else {
                cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
                if (!pJS.tmp.img_error) {
                    pJS.fn.vendors.init();
                    pJS.fn.vendors.draw();
                }
            }
        } else {
            pJS.fn.vendors.init();
            pJS.fn.vendors.draw();
        }
    };
    pJS.fn.vendors.init = function () {
        pJS.fn.retinaInit();
        pJS.fn.canvasInit();
        pJS.fn.canvasSize();
        pJS.fn.canvasPaint();
        pJS.fn.particlesCreate();
        pJS.fn.vendors.densityAutoParticles();
        pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);
    };
    pJS.fn.vendors.start = function () {
        if (isInArray('image', pJS.particles.shape.type)) {
            pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
            pJS.fn.vendors.loadImg(pJS.tmp.img_type);
        } else {
            pJS.fn.vendors.checkBeforeDraw();
        }
    };
    pJS.fn.vendors.eventsListeners();
    pJS.fn.vendors.start();
};
Object.deepExtend = function (destination, source) {
    for (var property in source) {
        if (source[property] && source[property].constructor && source[property].constructor === Object) {
            destination[property] = destination[property] || {};
            arguments.callee(destination[property], source[property]);
        } else {
            destination[property] = source[property];
        }
    }
    return destination;
};
window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
}();
window.cancelRequestAnimFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}();
function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
;
function clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
}
;
function isInArray(value, array) {
    return array.indexOf(value) > -1;
}
window.pJSDom = [];
window.particlesJS = function (tag_id, params) {
    if (typeof tag_id != 'string') {
        params = tag_id;
        tag_id = 'particles-js';
    }
    if (!tag_id) {
        tag_id = 'particles-js';
    }
    var pJS_tag = document.getElementById(tag_id), pJS_canvas_class = 'particles-js-canvas-el', exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);
    if (exist_canvas.length) {
        while (exist_canvas.length > 0) {
            pJS_tag.removeChild(exist_canvas[0]);
        }
    }
    var canvas_el = document.createElement('canvas');
    canvas_el.className = pJS_canvas_class;
    canvas_el.style.width = '100%';
    canvas_el.style.height = '100%';
    var canvas = document.getElementById(tag_id).appendChild(canvas_el);
    if (canvas != null) {
        pJSDom.push(new pJS(tag_id, params));
    }
};
window.particlesJS.load = function (tag_id, path_config_json, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path_config_json);
    xhr.onreadystatechange = function (data) {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var params = JSON.parse(data.currentTarget.response);
                window.particlesJS(tag_id, params);
                if (callback)
                    callback();
            } else {
                console.log('Error pJS - XMLHttpRequest status: ' + xhr.status);
                console.log('Error pJS - File config not found');
            }
        }
    };
    xhr.send();
};
define('particles', [], function () {
    return;
});
require([
    'domReady',
    'api',
    'baseSet',
    'js.cookie',
    'validate',
    'validateMethods',
    'jquery',
    'particles'
], function (domReady, api, baseSet, Cookies) {
    var login = {
        ground: function () {
            particlesJS('login-wrapper', {
                particles: {
                    number: {
                        value: 20,
                        density: {
                            enable: !0,
                            value_area: 1000
                        }
                    },
                    color: { value: '#2a3f54' },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        },
                        polygon: { nb_sides: 5 },
                        image: {
                            src: 'img/github.svg',
                            width: 100,
                            height: 100
                        }
                    },
                    opacity: {
                        value: 0.3,
                        random: !1,
                        anim: {
                            enable: !1,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: !1
                        }
                    },
                    size: {
                        value: 15,
                        random: !0,
                        anim: {
                            enable: !1,
                            speed: 180,
                            size_min: 0.1,
                            sync: !1
                        }
                    },
                    line_linked: {
                        enable: !0,
                        distance: 650,
                        color: '#cfcfcf',
                        opacity: 0.26,
                        width: 1
                    },
                    move: {
                        enable: !0,
                        speed: 2,
                        direction: 'none',
                        random: !0,
                        straight: !1,
                        out_mode: 'out',
                        bounce: !1,
                        attract: {
                            enable: !1,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: 1,
                            mode: 'repulse'
                        },
                        onclick: {
                            enable: !1,
                            mode: 'push'
                        },
                        resize: !0
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: { opacity: 1 }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        push: { particles_nb: 4 },
                        remove: { particles_nb: 2 }
                    }
                },
                retina_detect: !0
            });
        },
        init: function () {
            var blockCenter = $('.block-center');
            var blockHeight = blockCenter.outerHeight();
            var marginTop = $(window).height() - blockHeight - $('.copyright').outerHeight() <= 0 ? ($(window).height() - blockHeight) / 2 : ($(window).height() - blockHeight - $('.copyright').outerHeight()) / 2;
        },
        inputValidation: function () {
            $('.login-form').validate({
                debug: true,
                rules: {
                    loginName: { required: true },
                    password: { required: true }
                },
                messages: {
                    loginName: { required: '用户名不能为空' },
                    password: { required: '密码不能为空' }
                },
                onfocusout: function (element) {
                    $(element).valid();
                }
            });
        },
        loginSub: function () {
            var logInfo = {};
            function login() {
                var $span = $('.btn-login').find('span');
                var $icon = $('.btn-login').find('.icon');
                if ($('.login-form').validate().form()) {
                    $span.addClass('ld-hide');
                    $icon.addClass('ld-show');
                    logInfo.user_id = $('#user-name').val();
                    logInfo.password = $('#password').val();
                    api.login(logInfo, function (data) {
                        console.log(data);
                        var user = {
                            userName: $('#user-name').val(),
                            token: data.data.token
                        };
                        Cookies.remove('user');
                        if (logInfo.remerber) {
                            Cookies.set('user', user, { expires: 30 });
                        } else {
                            Cookies.set('user', user, { expires: 1 });
                        }
                        ;
                        window.location.href = 'index.html';
                    }, function (data) {
                        if (data.responseJSON != undefined && data.responseJSON.code != 0) {
                            $span.removeClass('ld-hide');
                            $icon.removeClass('ld-show');
                            var errorLab = $('<label id="password-error" class="error" for="password">' + data.responseJSON.message + '</label>');
                            $('input#password').after(errorLab);
                        }
                        ;
                    });
                }
                ;
            }
            ;
            $('#user-name,#password').on('keydown', function (e) {
                if (e.keyCode == 13) {
                    login();
                }
            });
            $('.btn-login').on('click', function () {
                login();
            });
        }
    };
    domReady(function () {
        login.ground();
        login.init();
        login.loginSub();
        login.inputValidation();
    });
});
define('login', [
    'domReady',
    'api',
    'baseSet',
    'js.cookie',
    'validate',
    'validateMethods',
    'jquery',
    'particles'
], function () {
    return;
});