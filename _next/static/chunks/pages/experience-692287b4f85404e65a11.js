_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [9],
  {
    "42TL": function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return d;
        });
      var c = a("nKUr"),
        r = (a("q1tI"), a("tYuD")),
        l = a("DE+6");
      function n() {
        return Object(c.jsxs)("section", {
          className: "bg-white dark:bg-black",
          children: [
            // Object(c.jsx)("div", {
            //   className: "max-w-6xl mx-auto h-48 bg-white dark:bg-black",
            //   children: Object(c.jsx)("h1", {
            //     className:
            //       "text-5xl md:text-9xl font-bold py-20 text-center md:text-left",
            //     children: "Experience",
            //   }),
            // }),
            // Object(c.jsx)("div", {
            //   className: "bg-[#F1F1F1] dark:bg-black -mt-4 pb-16",
            //   children: Object(c.jsx)("div", {
            //     className:
            //       "grid grid-cols-1 dark:bg-black max-w-xl mx-auto pt-40",
            //     children: l.a.experience.map(function (e, t) {
            //       return Object(c.jsxs)(c.Fragment, {
            //         children: [
            //           Object(c.jsx)(
            //             s,
            //             {
            //               title: e.title,
            //               desc: e.desc,
            //               year: e.year,
            //               company: e.company,
            //               companyLink: e.companyLink,
            //             },
            //             t
            //           ),
            //           t === l.a.experience.length - 1
            //             ? null
            //             : Object(c.jsxs)("div", {
            //                 className:
            //                   "divider-container flex flex-col items-center -mt-2",
            //                 children: [
            //                   Object(c.jsx)("div", {
            //                     className:
            //                       "w-4 h-4 bg-black dark:bg-gray-500 rounded-full relative z-10",
            //                     children: Object(c.jsx)("div", {
            //                       className:
            //                         "w-4 h-4 bg-black dark:bg-gray-500 rounded-full relative z-10 animate-ping",
            //                     }),
            //                   }),
            //                   Object(c.jsx)("div", {
            //                     className:
            //                       "w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2",
            //                   }),
            //                 ],
            //               }),
            //         ],
            //       });
            //     }),
            //   }),
            // }),
            Object(c.jsx)("div", {
              className: "max-w-6xl mx-auto h-48 bg-white dark:bg-black",
              children: Object(c.jsx)("h1", {
                className:
                  "text-5xl md:text-9xl font-bold text-center md:text-left",
                children: "Certifications",
              }),
            }),
            Object(c.jsx)("section", {
              className: "text-gray-600 body-font",
              children: Object(c.jsx)("div", {
                className: "max-w-6xl container px-5 sm:py-24 mx-auto",
                children: Object(c.jsx)("div", {
                  className: "flex flex-wrap -m-2",
                  children: l.a.certifications.map(function (e, t) {
                    return Object(c.jsx)(c.Fragment, {
                      children: Object(c.jsx)(
                        i,
                        { name: e.name, company: e.company, link: e.link },
                        t
                      ),
                    });
                  }),
                }),
              }),
            }),
          ],
        });
      }
      var s = function (e) {
          var t = e.title,
            a = e.desc,
            r = e.year,
            l = e.company;
          return Object(c.jsxs)("div", {
            className:
              "relative experience-card border p-4 rounded-md shadow-xl bg-white z-10 mx-4",
            children: [
              Object(c.jsx)("h1", {
                className:
                  "absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-500",
                children: r,
              }),
              Object(c.jsx)("h1", {
                className: "font-semibold text-xl dark:text-black",
                children: t,
              }),
              Object(c.jsx)("p", { className: "text-gray-500", children: l }),
              Object(c.jsx)("p", {
                className: "text-gray-600 my-2",
                children: a,
              }),
            ],
          });
        },
        i = function (e) {
          var t = e.name,
            a = e.company,
            r = e.link;
          return Object(c.jsx)("div", {
            className: "p-2 lg:w-1/3 md:w-1/2 w-full",
            children: Object(c.jsx)("div", {
              className:
                "h-full flex items-center border-gray-200 border p-4 rounded-lg dark:bg-white",
              children: Object(c.jsxs)("div", {
                className: "flex-grow",
                children: [
                  Object(c.jsx)("h2", {
                    className: "text-gray-900 title-font font-medium",
                    children: t,
                  }),
                  Object(c.jsx)("p", {
                    className: "text-gray-500",
                    children: a,
                  }),
                  Object(c.jsxs)("a", {
                    href: r,
                    target: "_blank",
                    className:
                      "font-semibold group flex flex-row space-x-2 w-full items-center text-gray-900",
                    children: [
                      Object(c.jsx)("p", {
                        className: "text-sm",
                        children: "View Certificate ",
                      }),
                      Object(c.jsx)("div", {
                        className:
                          "transform group-hover:translate-x-2 transition duration-300",
                        children: "\u2192",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      function d() {
        return Object(c.jsx)(r.a, {
          title: "Experience - Judy Flores",
          children: Object(c.jsx)(n, {}),
        });
      }
    },
    AlE6: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/experience",
        function () {
          return a("42TL");
        },
      ]);
    },
  },
  [["AlE6", 0, 2, 1, 3]],
]);
