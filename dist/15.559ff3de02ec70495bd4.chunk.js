(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    '0b8eb3e35929778b339a': function(e, t, n) {
      n.r(t);
      const r = n('8af190b70a6bc55c6f1b');
      let a = n.n(r);
      var o = (n('8a2d1b95e05b6a321e74'), n('0d7f0986bcd2f33d8a2a'));
      var i = n('ab039aecd4a1d4fedc0e');
      let c = n('d7dd51e1bf6bfc2c9c3d');
      var s = n('ab4cb61bcb2dc161defb');
      var u = n('a28fc3c963a1d4d1a2e5');
      let l = (n('5ef9de3df8d92ea0e41c'), n('5fa3f8487e09c6182715'));
      let d = n.n(l);
      var f = n('f3b0ff1628e56352bcbf');
      var m = n.n(f);
      var p = n('a1cf5d6fa4ed65a6ddd5');
      var b = n.n(p);
      let g = n('6a4f9c383785f9168266');
      var v = n.n(g);
      let h = n('d3a850c4000d77bccc89');
      var y = n.n(h);
      let w = n('f2873ecf7390fe7d7c89');
      let j = n.n(w);
      function S(e) {
        const t = {
          dispatch: m.a,
          subscribe: m.a,
          getState: m.a,
          replaceReducer: m.a,
          runSaga: m.a,
          injectedReducers: y.a,
          injectedSagas: y.a,
        };
        v()(
          j()(e, t),
          '(app/utils...) injectors: Expected a valid redux store',
        );
      }
      const x = n('491cc2e27aa2b4221847');
      function O(e, t) {
        return function(n, r) {
          t || S(e),
            v()(
              d()(n) && !b()(n) && m()(r),
              '(app/utils...) injectReducer: Expected `reducer` to be a reducer function',
            ),
            (Reflect.has(e.injectedReducers, n) &&
              e.injectedReducers[n] === r) ||
              ((e.injectedReducers[n] = r),
              e.replaceReducer(Object(x.a)(e.injectedReducers)));
        };
      }
      function k(e) {
        return S(e), { injectReducer: O(e, !0) };
      }
      const C = function(e) {
        let t = e.key;
        let n = e.reducer;
        var r = a.a.useContext(c.ReactReduxContext);
        a.a.useEffect(function() {
          k(r.store).injectReducer(t, n);
        }, []);
      };
      let R = '@@saga-injector/daemon';
      let P = '@@saga-injector/once-till-unmount';
      function E(e) {
        for (let t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          let r = Object.keys(n);
          typeof Object.getOwnPropertySymbols === 'function' &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              }),
            )),
            r.forEach(function(t) {
              I(e, t, n[t]);
            });
        }
        return e;
      }
      function I(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      const N = ['@@saga-injector/restart-on-remount', R, P];
      var M = function(e) {
        return v()(
          d()(e) && !b()(e),
          '(app/utils...) injectSaga: Expected `key` to be a non empty string',
        );
      };
      let _ = function(e) {
        let t = {
          saga: m.a,
          mode(e) {
            return d()(e) && N.includes(e);
          },
        };
        v()(
          j()(e, t),
          '(app/utils...) injectSaga: Expected a valid saga descriptor',
        );
      };
      function A(e, t) {
        return function(n) {
          const r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          let a = arguments.length > 2 ? arguments[2] : void 0;
          t || S(e);
          const o = E({}, r, { mode: r.mode || R });
          var i = o.saga;
          let c = o.mode;
          M(n), _(o);
          const s = Reflect.has(e.injectedSagas, n);
          (!s || (s && c !== R && c !== P)) &&
            (e.injectedSagas[n] = E({}, o, { task: e.runSaga(i, a) }));
        };
      }
      function H(e, t) {
        return function(n) {
          if ((t || S(e), M(n), Reflect.has(e.injectedSagas, n))) {
            const r = e.injectedSagas[n];
            r.mode &&
              r.mode !== R &&
              (r.task.cancel(), (e.injectedSagas[n] = 'done'));
          }
        };
      }
      function $(e) {
        return S(e), { injectSaga: A(e, !0), ejectSaga: H(e, !0) };
      }
      let F;
      var z = function(e) {
        var t = e.key;
            var n = e.saga;
            var r = e.mode;
            var o = a.a.useContext(c.ReactReduxContext);
        a.a.useEffect(function() {
          var e = $(o.store);
          return (
            e.injectSaga(t, { saga: n, mode: r }),
            function() {
              e.ejectSaga(t);
            }
          );
        }, []);
      };
      let U = n('c4ec0be7fefbdf794ace');
      var D = function(e) {
        return e.global || U.b;
      };
      var L = n('0b3cb19af78752326f59');
      var T = L.b.h2.withConfig({ displayName: 'H2', componentId: 'egphza-0' })([
        'font-size:1.5em;',
      ]);
      var W = L.b.ul.withConfig({ displayName: 'Ul', componentId: 'mwnq6h-0' })([
        'list-style:none;margin:0;width:100%;max-height:30em;overflow-y:auto;padding:0 1em;',
      ],
      var q = L.b.div.withConfig({
        displayName: 'Wrapper',
        componentId: 'sc-1umgotm-0',
      })([
        'padding:0;margin:0;width:100%;background-color:white;border:1px solid #ccc;border-radius:3px;overflow:hidden;',
      ]);
      function G(e, t, n, r) {
        F ||
          (F =
            (typeof Symbol === 'function' &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        const a = e && e.defaultProps;
        var o = arguments.length - 3;
        if ((t || o === 0 || (t = { children: void 0 }), t && a))
          for (const i in a) void 0 === t[i] && (t[i] = a[i]);
        else t || (t = a || {});
        if (o === 1) t.children = r;
        else if (o > 1) {
          for (var c = new Array(o), s = 0; s < o; s++) c[s] = arguments[s + 3];
          t.children = c;
        }
        return {
          $$typeof: F,
          type: e,
          key: void 0 === n ? null : `${n}`,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      const J = G('div', {});
      let V;
      let B = function(e) {
        var t = e.component;
            var n = J;
        return (
          (n = e.items
            ? e.items.map(function(e) {
                return G(t, { item: e }, 'item-'.concat(e.id));
            })
            : G(t, {})),
          G(q, {}, void 0, G(W, {}, void 0, n))
        );
      };
      var X = L.b.div.withConfig({
        displayName: 'Item',
        componentId: 'sc-3y9mie-0',
      })([
        'display:flex;justify-content:space-between;width:100%;height:100%;align-items:center;',
      ]);
      var K = L.b.li.withConfig({
        displayName: 'Wrapper',
        componentId: 'euo0oy-0',
      })([
        'width:100%;height:3em;display:flex;align-items:center;position:relative;border-top:1px solid #eee;&:first-child{border-top:none;}',
      ]);
      function Q(e, t, n, r) {
        V ||
          (V =
            (typeof Symbol === 'function' &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        const a = e && e.defaultProps;
        let o = arguments.length - 3;
        if ((t || o === 0 || (t = { children: void 0 }), t && a))
          for (const i in a) void 0 === t[i] && (t[i] = a[i]);
        else t || (t = a || {});
        if (o === 1) t.children = r;
        else if (o > 1) {
          for (var c = new Array(o), s = 0; s < o; s++) c[s] = arguments[s + 3];
          t.children = c;
        }
        return {
          $$typeof: V,
          type: e,
          key: void 0 === n ? null : `${n}`,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      let Y;
      var Z = function(e) {
        return Q(K, {}, void 0, Q(X, {}, void 0, e.item));
      };
      var ee = n('8e4c85c29cdef1bf8a5f');
      function te(e, t, n, r) {
        Y ||
          (Y =
            (typeof Symbol === 'function' &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        const a = e && e.defaultProps;
        let o = arguments.length - 3;
        if ((t || o === 0 || (t = { children: void 0 }), t && a))
          for (const i in a) void 0 === t[i] && (t[i] = a[i]);
        else t || (t = a || {});
        if (o === 1) t.children = r;
        else if (o > 1) {
          for (var c = new Array(o), s = 0; s < o; s++) c[s] = arguments[s + 3];
          t.children = c;
        }
        return {
          $$typeof: Y,
          type: e,
          key: void 0 === n ? null : `${n}`,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      function ne() {
        return (ne =
          Object.assign ||
          function(e) {
            for (let t = 1; t < arguments.length; t++) {
              const n = arguments[t];
              for (const r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      const re = te('path', {
        d:
          'M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z',
      });
      let ae;
      var oe = function(e) {
        return a.a.createElement(
          'svg',
          ne({ height: '1em', width: '0.875em', className: e.className }, e),
          re,
        );
      };
      let ie = Object(L.b)(oe).withConfig({
        displayName: 'IssueIcon',
        componentId: 's8m34y-0',
      })(['fill:#ccc;margin-right:0.25em;']);
      var ce = n('6c074f91ad5b62e00274');
      let se = Object(L.b)(ce.a).withConfig({
        displayName: 'IssueLink',
        componentId: 'uyzonb-0',
      })([
        'height:100%;color:black;display:flex;align-items:center;justify-content:center;white-space:nowrap;',
      ]);
      let ue = Object(L.b)(ce.a).withConfig({
        displayName: 'RepoLink',
        componentId: 'pvpwpn-0',
      })([
        'height:100%;color:black;display:flex;align-items:center;width:100%;',
      ]);
      let le = L.b.div.withConfig({
        displayName: 'Wrapper',
        componentId: 'sc-17s0rao-0',
      })(['width:100%;height:100%;display:flex;align-items:space-between;']);
      function de(e, t, n, r) {
        ae ||
          (ae =
            (typeof Symbol === 'function' &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        const a = e && e.defaultProps;
        var o = arguments.length - 3;
        if ((t || o === 0 || (t = { children: void 0 }), t && a))
          for (const i in a) void 0 === t[i] && (t[i] = a[i]);
        else t || (t = a || {});
        if (o === 1) t.children = r;
        else if (o > 1) {
          for (var c = new Array(o), s = 0; s < o; s++) c[s] = arguments[s + 3];
          t.children = c;
        }
        return {
          $$typeof: ae,
          type: e,
          key: void 0 === n ? null : `${n}`,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      const fe = de(ie, {});
      let me;
      var pe = Object(c.connect)(
        Object(u.b)({
          currentUser: Object(u.a)(D, function(e) {
            return e.currentUser;
          }),
        }),
      )(function(e) {
        const t = e.item;
        var n = '';
        t.owner.login !== e.currentUser &&
            (n = ''.concat(t.owner.login, '/'));
        let r = de(
          le,
          {},
          void 0,
          de(ue, { href: t.html_url, target: '_blank' }, void 0, n + t.name),
          de(
            se,
            { href: ''.concat(t.html_url, '/issues'), target: '_blank' },
            void 0,
            fe,
            de(i.FormattedNumber, { value: t.open_issues_count }),
          ),
        );
        return de(Z, { item: r }, 'repo-list-item-'.concat(t.full_name));
      });
      function be(e, t, n, r) {
        me ||
          (me =
            (typeof Symbol === 'function' &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        const a = e && e.defaultProps;
        let o = arguments.length - 3;
        if ((t || o === 0 || (t = { children: void 0 }), t && a))
          for (const i in a) void 0 === t[i] && (t[i] = a[i]);
        else t || (t = a || {});
        if (o === 1) t.children = r;
        else if (o > 1) {
          for (var c = new Array(o), s = 0; s < o; s++) c[s] = arguments[s + 3];
          t.children = c;
        }
        return {
          $$typeof: me,
          type: e,
          key: void 0 === n ? null : `${n}`,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      const ge = be(B, { component: ee.a });
      var ve = be(Z, { item: 'Something went wrong, please try again!' });
      const he = function(e) {
        let t = e.loading;
        var n = e.error;
        var r = e.repos;
        if (t) return ge;
        if (!1 !== n)
          return be(B, {
            component() {
              return ve;
            },
          });
        return !1 !== r ? be(B, { items: r, component: pe }) : null;
      };
      let ye = L.b.span.withConfig({
        displayName: 'AtPrefix',
        componentId: 'sc-1suuq8o-0',
      })(['color:black;margin-left:0.4em;']);
      var we = L.b.section.withConfig({
        displayName: 'Section',
        componentId: 'sc-1eulrsm-0',
      })(['margin:3em auto;&:first-child{margin-top:0;}']);
      var je = Object(L.b)(we).withConfig({
        displayName: 'CenteredSection',
        componentId: 'sc-6zy0wx-0',
      })(['text-align:center;']);
      var Se = L.b.form.withConfig({
        displayName: 'Form',
        componentId: 'dmhz4x-0',
      })(['margin-bottom:1em;']);
      let xe = L.b.input.withConfig({
        displayName: 'Input',
        componentId: 'sc-19rkjmi-0',
      })([
        'outline:none;border:none;border-bottom:1px dotted #999;background-color:transparent;',
      ]);
      let Oe = 'boilerplate.containers.HomePage';
      var ke = Object(i.defineMessages)({
        startProjectHeader: {
          id: ''.concat(Oe, '.start_project.header'),
          defaultMessage: 'Start your next react project in seconds',
        },
        startProjectMessage: {
          id: ''.concat(Oe, '.start_project.message'),
          defaultMessage:
            'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
        },
        trymeHeader: {
          id: ''.concat(Oe, '.tryme.header'),
          defaultMessage: 'Try me!',
        },
        trymeMessage: {
          id: ''.concat(Oe, '.tryme.message'),
          defaultMessage: 'Show Github repositories by',
        },
        trymeAtPrefix: {
          id: ''.concat(Oe, '.tryme.atPrefix'),
          defaultMessage: '@',
        },
      });
      var Ce = n('fcb99a06256635f70435');
      function Re(e, t) {
        return { type: Ce.c, repos: e, username: t };
      }
      const Pe = 'boilerplate/Home/CHANGE_USERNAME';
      const Ee = n('7edf83707012a871cdfb');
      var Ie = { username: '' };
      var Ne = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ie;
            var t = arguments.length > 1 ? arguments[1] : void 0;
        return Object(Ee.a)(e, function(e) {
          switch (t.type) {
            case Pe:
              e.username = t.username.replace(/@/gi, '');
          }
        });
      };
      let Me = function(e) {
        return e.home || Ie;
      };
      let _e = function() {
        return Object(u.a)(Me, function(e) {
          return e.username;
        });
      };
      let Ae = n('d782b72bc5b680c7122c');
      function He(e) {
        return e.status === 204 || e.status === 205 ? null : e.json();
      }
      function $e(e) {
        if (e.status >= 200 && e.status < 300) return e;
        const t = new Error(e.statusText);
        throw ((t.response = e), t);
      }
      function Fe(e, t) {
        return fetch(e, t)
          .then($e)
          .then(He);
      }
      let ze;
      var Ue = regeneratorRuntime.mark(Le);
      let De = regeneratorRuntime.mark(Te);
      function Le() {
        let e;
        var t;
        let n;
        return regeneratorRuntime.wrap(
          function(r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (r.next = 2), Object(Ae.select)(_e());
                case 2:
                  return (
                    (e = r.sent),
                    (t = 'https://api.github.com/users/'.concat(
                      e,
                      '/repos?type=all&sort=updated',
                    )),
                    (r.prev = 4),
                    (r.next = 7),
                    Object(Ae.call)(Fe, t)
                  );
                case 7:
                  return (n = r.sent), (r.next = 10), Object(Ae.put)(Re(n, e));
                case 10:
                  r.next = 16;
                  break;
                case 12:
                  return (
                    (r.prev = 12),
                    (r.t0 = r.catch(4)),
                    (r.next = 16),
                    Object(Ae.put)(((a = r.t0), { type: Ce.b, error: a }))
                  );
                case 16:
                case 'end':
                  return r.stop();
              }
            let a;
          },
          Ue,
          null,
          [[4, 12]],
        );
      }
      function Te() {
        return regeneratorRuntime.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Ae.takeLatest)(Ce.a, Le);
              case 2:
              case 'end':
                return e.stop();
            }
        }, De);
      }
      function We(e, t, n, r) {
        ze ||
          (ze =
            (typeof Symbol === 'function' &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        const a = e && e.defaultProps;
        var o = arguments.length - 3;
        if ((t || o === 0 || (t = { children: void 0 }), t && a))
          for (const i in a) void 0 === t[i] && (t[i] = a[i]);
        else t || (t = a || {});
        if (o === 1) t.children = r;
        else if (o > 1) {
          for (var c = new Array(o), s = 0; s < o; s++) c[s] = arguments[s + 3];
          t.children = c;
        }
        return {
          $$typeof: ze,
          type: e,
          key: void 0 === n ? null : `${n}`,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      n.d(t, 'HomePage', function() {
        return Je;
      }),
        n.d(t, 'mapDispatchToProps', function() {
          return Be;
        });
      const qe = 'home';
      var Ge = We(
        o.Helmet,
        {},
        void 0,
        We('title', {}, void 0, 'Home Page'),
        We('meta', {
          name: 'description',
          content: 'A React.js Boilerplate application homepage',
        }),
      );
      function Je(e) {
        const t = e.username;
        let n = e.loading;
        var o = e.error;
        let c = e.repos;
        var s = e.onSubmitForm;
        let u = e.onChangeUsername;
        C({ key: qe, reducer: Ne }),
          z({ key: qe, saga: Te }),
          Object(r.useEffect)(function() {
            t && t.trim().length > 0 && s();
          }, []);
        const l = { loading: n, error: o, repos: c };
        return We(
          'article',
          {},
          void 0,
          Ge,
          We(
            'div',
            {},
            void 0,
            We(
              je,
              {},
              void 0,
              We(
                T,
                {},
                void 0,
                a.a.createElement(i.FormattedMessage, ke.startProjectHeader),
              ),
              We(
                'p',
                {},
                void 0,
                a.a.createElement(i.FormattedMessage, ke.startProjectMessage),
              ),
            ),
            We(
              we,
              {},
              void 0,
              We(
                T,
                {},
                void 0,
                a.a.createElement(i.FormattedMessage, ke.trymeHeader),
              ),
              We(
                Se,
                { onSubmit: s },
                void 0,
                We(
                  'label',
                  { htmlFor: 'username' },
                  void 0,
                  a.a.createElement(i.FormattedMessage, ke.trymeMessage),
                  We(
                    ye,
                    {},
                    void 0,
                    a.a.createElement(i.FormattedMessage, ke.trymeAtPrefix),
                  ),
                  We(xe, {
                    id: 'username',
                    type: 'text',
                    placeholder: 'mxstbr',
                    value: t,
                    onChange: u,
                  }),
                ),
              ),
              a.a.createElement(he, l),
            ),
          ),
        );
      }
      const Ve = Object(u.b)({
        repos: Object(u.a)(D, function(e) {
          return e.userData.repositories;
        }),
        username: _e(),
        loading: Object(u.a)(D, function(e) {
          return e.loading;
        }),
        error: Object(u.a)(D, function(e) {
          return e.error;
        }),
      });
      function Be(e) {
        return {
          onChangeUsername(t) {
            return e(((n = t.target.value), { type: Pe, username: n }));
            let n;
          },
          onSubmitForm(t) {
            void 0 !== t && t.preventDefault && t.preventDefault(),
            e({ type: Ce.a });
          },
        };
      }
      const Xe = Object(c.connect)(Ve, Be);
      t.default = Object(s.compose)(Xe, r.memo)(Je);
    },
  },
]);
