(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    '8937ca26cad1b574ef33': function(e, n, a) {
      a.r(n);
      let o;
      const r = a('8af190b70a6bc55c6f1b');
      const t = a.n(r);
      const c = a('ab039aecd4a1d4fedc0e');
      const d = a('c611ca373eec6f4e262d');
      const f = Object(c.defineMessages)({
        header: {
          id: ''.concat('boilerplate.containers.NotFoundPage', '.header'),
          defaultMessage: 'Page not found.',
        },
      });
      function i(e, n, a, r) {
        o ||
          (o =
            (typeof Symbol === 'function' &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103);
        const t = e && e.defaultProps;
        const c = arguments.length - 3;
        if ((n || c === 0 || (n = { children: void 0 }), n && t))
          for (const d in t) void 0 === n[d] && (n[d] = t[d]);
        else n || (n = t || {});
        if (c === 1) n.children = r;
        else if (c > 1) {
          for (var f = new Array(c), i = 0; i < c; i++) f[i] = arguments[i + 3];
          n.children = f;
        }
        return {
          $$typeof: o,
          type: e,
          key: void 0 === a ? null : `${a}`,
          ref: null,
          props: n,
          _owner: null,
        };
      }
      function l() {
        return i(
          'article',
          {},
          void 0,
          i(d.a, {}, void 0, t.a.createElement(c.FormattedMessage, f.header)),
        );
      }
      a.d(n, 'default', function() {
        return l;
      });
    },
  },
]);
