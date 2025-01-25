_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [11],
  {
    D85t: function (t, e, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/projects",
        function () {
          return c("RHEb");
        },
      ]);
    },
    RHEb: function (t, e, c) {
      "use strict";
      c.r(e),
        c.d(e, "default", function () {
          return i;
        });
      var l = c("nKUr"),
        r = (c("q1tI"), c("tYuD")),
        s = c("DE+6");
      function n() {
        return Object(l.jsxs)("section", {
          className: "bg-white dark:bg-black",
          children: [
            Object(l.jsx)("div", {
              className: "max-w-6xl mx-auto h-48 bg-white dark:bg-black",
              children: Object(l.jsx)("h1", {
                className:
                  " text-5xl md:text-9xl font-bold py-20 text-center md:text-left",
                children: "Projects",
              }),
            }),
            Object(l.jsx)("div", {
              className: "bg-[#F1F1F1] dark:bg-black",
              children: Object(l.jsx)("div", {
                className:
                  "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40",
                children: s.a.projects.map(function (t, e) {
                  return Object(l.jsx)(a, {
                    title: t.title,
                    link: t.link,
                    imgUrl: t.imgUrl,
                    number: "".concat(e + 1),
                  });
                }),
              }),
            }),
          ],
        });
      }
      var a = function (t) {
        var e = t.title,
          c = t.link,
          r = t.imgUrl,
          s = t.number;
        return Object(l.jsx)("a", {
          href: c,
          className: "w-full block shadow-2xl",
          children: Object(l.jsxs)("div", {
            className: "relative overflow-hidden",
            children: [
              Object(l.jsx)("div", {
                className: "h-72 object-cover",
                children: Object(l.jsx)("img", {
                  src: r,
                  alt: "portfolio",
                  className:
                    "transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full",
                }),
              }),
              Object(l.jsx)("h1", {
                className:
                  "absolute top-10 left-10 text-gray-50 font-bold text-xl bg-black rounded-md px-2",
                children: e,
              }),
              Object(l.jsx)("h1", {
                className:
                  "absolute bottom-10 left-10 text-gray-50 font-bold text-xl",
                children: 1 === s.length ? "0" + s : s,
              }),
            ],
          }),
        });
      };
      function i() {
        return Object(l.jsx)(r.a, {
          title: "Projects - Judy Flores",
          children: Object(l.jsx)(n, {}),
        });
      }
    },
  },
  [["D85t", 0, 2, 1, 3]],
]);
