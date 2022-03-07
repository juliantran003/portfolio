"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/header.js


function Header() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "header",
        "data-aos": "fade-down",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: "Julian Tran"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "header__menu",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/about",
                        children: "about"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/experience",
                        children: "experience"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/work",
                        children: "work"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/contact",
                        children: "contact"
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/socials.js

function Socials() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "socials",
        "data-aos": "fade-up",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: "https://github.com/juliantran003",
                target: "_blank",
                rel: "noreferrer",
                children: [
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fa-brands fa-github"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: "https://www.linkedin.com/in/julian-tran-6b4081206/",
                target: "_blank",
                rel: "noreferrer",
                children: [
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fa-brands fa-linkedin-in"
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/email.js

function Email() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "email",
        "data-aos": "fade-up",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: "mailto:juliantran003@gmail.com",
            children: "juliantran003@gmail.com"
        })
    }));
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/burgerMenu.js



function BurgerMenu() {
    // States
    const { 0: burger , 1: setBurger  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            !burger && /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "burgerMenu",
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fa-solid fa-bars",
                    onClick: ()=>setBurger(true)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: !burger ? "burgerMenu__menu__hidden" : "burgerMenu__menu",
                children: [
                    burger && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fa-solid fa-xmark burgerMenu__x",
                        onClick: ()=>setBurger(false)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            onClick: ()=>setBurger(false)
                            ,
                            children: "home"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/about",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            onClick: ()=>setBurger(false)
                            ,
                            children: "about"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/experience",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            onClick: ()=>setBurger(false)
                            ,
                            children: "experience"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/work",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            onClick: ()=>setBurger(false)
                            ,
                            children: "work"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/contact",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            onClick: ()=>setBurger(false)
                            ,
                            children: "contact"
                        })
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./public/favicon.ico
/* harmony default export */ const favicon = ({"src":"/_next/static/media/favicon.ec0a9f42.ico","height":48,"width":48});
;// CONCATENATED MODULE: ./components/layout.js



// Components




// Favicon

function Layout({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/apple-touch-icon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon-32x32.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon-16x16.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "manifest",
                        href: "/site.webmanifest"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "mask-icon",
                        href: "/safari-pinned-tab.svg",
                        color: "#02183a"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "msapplication-TileColor",
                        content: "#02183a"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        content: "#ffffff"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "https://kit.fontawesome.com/fe9e3b2e41.js",
                crossOrigin: "anonymous"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Socials, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(BurgerMenu, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Email, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            })
        ]
    }));
};

;// CONCATENATED MODULE: external "aos"
const external_aos_namespaceObject = require("aos");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js







function App({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        // Scroll Animation function usin AOS package
        external_aos_default().init({
            duration: 800
        });
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
};


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664], () => (__webpack_exec__(479)));
module.exports = __webpack_exports__;

})();