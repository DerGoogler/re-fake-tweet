/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/tweet/Tweet.scss":
/*!*****************************************!*\
  !*** ./src/components/tweet/Tweet.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/components/tweet/Tweet.scss?");

/***/ }),

/***/ "./src/styles/default.scss":
/*!*********************************!*\
  !*** ./src/styles/default.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/styles/default.scss?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Paper/Paper.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/FormGroup/FormGroup.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/FormControlLabel/FormControlLabel.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Switch/Switch.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/styled.js\");\n/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material/MoreVert */ \"./node_modules/@mui/icons-material/MoreVert.js\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/AppBar.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/Toolbar.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _mui_material_Fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Fab */ \"./node_modules/@mui/material/Fab/Fab.js\");\n/* harmony import */ var _mui_icons_material_Download__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/Download */ \"./node_modules/@mui/icons-material/Download.js\");\n/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom-to-image */ \"./node_modules/dom-to-image/src/dom-to-image.js\");\n/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ \"./node_modules/file-saver/dist/FileSaver.min.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_tweet_Tweet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tweet/Tweet */ \"./src/components/tweet/Tweet.tsx\");\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material */ \"./node_modules/@mui/icons-material/esm/GitHub.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar StyledFab = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_mui_material_Fab__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    position: \"absolute\",\n    zIndex: 1,\n    top: -30,\n    left: 0,\n    right: 0,\n    margin: \"0 auto\",\n});\nvar App = /** @class */ (function (_super) {\n    __extends(App, _super);\n    function App(props) {\n        var _this = _super.call(this, props) || this;\n        _this.Input = function (props) {\n            var label = props.label, value = props.value, state = props.state;\n            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], { id: \"outlined-basic\", fullWidth: true, margin: \"dense\", label: label, value: value, variant: \"outlined\", onChange: function (event) {\n                    var _a;\n                    _this.setState((_a = {}, _a[state] = event.target.value, _a));\n                } }));\n        };\n        _this.state = {\n            username: \"Der_Googler\",\n            name: \"ＪＩＭＭＹ デーモン\",\n            avatar: \"https://avatars.githubusercontent.com/u/54764558?v=4\",\n            verified: true,\n            locked: false,\n            display: \"default\",\n            text: \"Ok, cool!\",\n            image: \"\",\n            date: \"3:32 PM · Feb 14, 1997\",\n            app: \"Twitter for Android\",\n            retweets: 32000,\n            quotedTweets: 100,\n            likes: 12700,\n        };\n        return _this;\n    }\n    App.prototype.render = function () {\n        var _this = this;\n        var _a = this.state, username = _a.username, name = _a.name, avatar = _a.avatar, verified = _a.verified, locked = _a.locked, display = _a.display, text = _a.text, image = _a.image, date = _a.date, app = _a.app, retweets = _a.retweets, quotedTweets = _a.quotedTweets, likes = _a.likes, isDrawerOpen = _a.isDrawerOpen;\n        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tweet_Tweet__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { id: \"tweet\", config: {\n                        user: {\n                            nickname: username,\n                            name: name,\n                            avatar: avatar,\n                            verified: verified,\n                            locked: locked,\n                        },\n                        display: display,\n                        text: text,\n                        image: image,\n                        date: date,\n                        app: app,\n                        retweets: retweets,\n                        quotedTweets: quotedTweets,\n                        likes: likes,\n                    } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], __assign({ square: true, sx: { pb: \"50px\" } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__[\"default\"], __assign({ sx: { display: \"flex\", width: \"100%\" } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__[\"default\"], __assign({ component: \"main\", sx: { p: 3, width: \"100%\" } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(this.Input, { label: \"Nickname\", value: username, state: \"username\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(this.Input, { label: \"Name\", value: name, state: \"name\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(this.Input, { label: \"Avatar\", value: avatar, state: \"avatar\" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], __assign({ sx: { margin: \"8px\" } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], { control: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], { checked: verified, disabled: locked, onChange: function (event) {\n                                                    _this.setState({ verified: event.target.checked });\n                                                } }), label: \"Verified\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], { control: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], { checked: locked, disabled: verified, onChange: function (event) {\n                                                    _this.setState({ locked: event.target.checked });\n                                                } }), label: \"Locked\" })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], __assign({ select: true, label: \"Display\", margin: \"dense\", value: display, onChange: function (event) {\n                                                _this.setState({ display: event.target.value });\n                                            } }, { children: [\"default\", \"dim\", \"lightsout\"].map(function (option) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__[\"default\"], __assign({ value: option }, { children: option }), option)); }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], { id: \"outlined-multiline-static\", label: \"Text\", multiline: true, margin: \"dense\", rows: 4, value: text, variant: \"outlined\", onChange: function (event) {\n                                                var _a;\n                                                _this.setState((_a = {}, _a[\"text\"] = event.target.value, _a));\n                                            } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(this.Input, { label: \"Date\", value: date, state: \"date\" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(this.Input, { label: \"Image\", value: image, state: \"image\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(this.Input, { label: \"App\", value: app, state: \"app\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(this.Input, { label: \"Re-Tweets\", value: String(retweets), state: \"retweets\" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(this.Input, { label: \"Quoted Tweets\", value: String(quotedTweets), state: \"quotedTweets\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(this.Input, { label: \"Likes\", value: String(likes), state: \"likes\" })] })] })) })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_14__[\"default\"], __assign({ position: \"fixed\", color: \"primary\", sx: { top: \"auto\", bottom: 0 } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_15__[\"default\"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledFab, __assign({ color: \"secondary\", \"aria-label\": \"add\", onClick: function () {\n                                    dom_to_image__WEBPACK_IMPORTED_MODULE_2___default().toBlob(document.getElementById(\"tweet\")).then(function (blob) {\n                                        (0,file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs)(blob, \"\".concat(new Date(), \".png\"));\n                                    });\n                                } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Download__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {}) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__[\"default\"], { sx: { flexGrow: 1 } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_17__[\"default\"], __assign({ color: \"inherit\", onClick: function () {\n                                    window.open(\"https://github.com/DerGoogler/re-fake-tweet\", \"_blank\");\n                                } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {}) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_17__[\"default\"], __assign({ color: \"inherit\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_19__[\"default\"], {}) }))] }) }))] }));\n    };\n    return App;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/App.tsx?");

/***/ }),

/***/ "./src/components/icons/CommentIcon.tsx":
/*!**********************************************!*\
  !*** ./src/components/icons/CommentIcon.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nfunction CommentIcon() {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", __assign({ viewBox: \"0 0 24 24\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"g\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", { d: \"M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z\" }) }) })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentIcon);\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/components/icons/CommentIcon.tsx?");

/***/ }),

/***/ "./src/components/icons/DropIcon.tsx":
/*!*******************************************!*\
  !*** ./src/components/icons/DropIcon.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nfunction DropIcon() {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", __assign({ viewBox: \"0 0 24 24\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"g\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", { d: \"M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z\" }) }) })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropIcon);\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/components/icons/DropIcon.tsx?");

/***/ }),

/***/ "./src/components/icons/LikeIcon.tsx":
/*!*******************************************!*\
  !*** ./src/components/icons/LikeIcon.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nfunction LikeIcon() {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", __assign({ viewBox: \"0 0 24 24\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"g\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", { d: \"M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z\" }) }) })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikeIcon);\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/components/icons/LikeIcon.tsx?");

/***/ }),

/***/ "./src/components/icons/LockIcon.tsx":
/*!*******************************************!*\
  !*** ./src/components/icons/LockIcon.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nfunction LockIcon() {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", __assign({ viewBox: \"0 0 24 24\", \"aria-label\": \"Locked account\", className: \"lock-icon-svg\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"g\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", { d: \"M19.75 7.31h-1.88c-.19-3.08-2.746-5.526-5.87-5.526S6.32 4.232 6.13 7.31H4.25C3.01 7.31 2 8.317 2 9.56v10.23c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V9.56c0-1.242-1.01-2.25-2.25-2.25zm-7 8.377v1.396c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.396c-.764-.3-1.307-1.04-1.307-1.91 0-1.137.92-2.058 2.057-2.058 1.136 0 2.057.92 2.057 2.056 0 .87-.543 1.61-1.307 1.91zM7.648 7.31C7.838 5.06 9.705 3.284 12 3.284s4.163 1.777 4.352 4.023H7.648z\" }) }) })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LockIcon);\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/components/icons/LockIcon.tsx?");

/***/ }),

/***/ "./src/components/icons/RetweetIcon.tsx":
/*!**********************************************!*\
  !*** ./src/components/icons/RetweetIcon.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nfunction RetweetIcon() {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", __assign({ viewBox: \"0 0 24 24\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"g\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", { d: \"M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z\" }) }) })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RetweetIcon);\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/components/icons/RetweetIcon.tsx?");

/***/ }),

/***/ "./src/components/icons/ShareIcon.tsx":
/*!********************************************!*\
  !*** ./src/components/icons/ShareIcon.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nfunction ShareIcon() {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", __assign({ viewBox: \"0 0 24 24\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"g\", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", { d: \"M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", { d: \"M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z\" })] }) })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareIcon);\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/components/icons/ShareIcon.tsx?");

/***/ }),

/***/ "./src/components/icons/VerifiedIcon.tsx":
/*!***********************************************!*\
  !*** ./src/components/icons/VerifiedIcon.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nfunction VerifiedIcon() {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", __assign({ viewBox: \"0 0 24 24\", \"aria-label\": \"Verified account\", className: \"verified-icon-svg\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"g\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", { d: \"M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z\" }) }) })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerifiedIcon);\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/components/icons/VerifiedIcon.tsx?");

/***/ }),

/***/ "./src/components/tweet/Actions.tsx":
/*!******************************************!*\
  !*** ./src/components/tweet/Actions.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _icons_CommentIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/CommentIcon */ \"./src/components/icons/CommentIcon.tsx\");\n/* harmony import */ var _icons_RetweetIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/RetweetIcon */ \"./src/components/icons/RetweetIcon.tsx\");\n/* harmony import */ var _icons_LikeIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/LikeIcon */ \"./src/components/icons/LikeIcon.tsx\");\n/* harmony import */ var _icons_ShareIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/ShareIcon */ \"./src/components/icons/ShareIcon.tsx\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\n\nfunction Actions() {\n    var actions = [\n        {\n            color: 'blue',\n            icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_CommentIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}),\n        },\n        {\n            color: 'green',\n            icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_RetweetIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}),\n        },\n        {\n            color: 'red',\n            icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_LikeIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}),\n        },\n        {\n            color: 'blue',\n            icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_ShareIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}),\n        },\n    ];\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"bottom-buttons\" }, { children: actions.map(function (action, key) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"bottom-button \".concat(action.color) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { children: action.icon }) }), key)); }) })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Actions);\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/components/tweet/Actions.tsx?");

/***/ }),

/***/ "./src/components/tweet/Content.tsx":
/*!******************************************!*\
  !*** ./src/components/tweet/Content.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _hooks_useText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useText */ \"./src/hooks/useText.tsx\");\n/* harmony import */ var _ImagesContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImagesContainer */ \"./src/components/tweet/ImagesContainer.tsx\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\nfunction Content(_a) {\n    var config = _a.config;\n    var text = (0,_hooks_useText__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(config.text);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"tweet-content\" }, { children: [text && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"txt\" }, { children: text })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ImagesContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { config: config })] })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/components/tweet/Content.tsx?");

/***/ }),

/***/ "./src/components/tweet/ImagesContainer.tsx":
/*!**************************************************!*\
  !*** ./src/components/tweet/ImagesContainer.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _hooks_useImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useImage */ \"./src/hooks/useImage.tsx\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\nfunction ImagesContainer(_a) {\n    var config = _a.config;\n    var image = (0,_hooks_useImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(config.image);\n    switch (image.length) {\n        case 1:\n            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"image-container\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", { src: image[0], alt: \"\" }) })));\n        case 2:\n            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"images-container two-image-container\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OneImageColumn, { side: \"left\", image: image[0] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"vertical-spacer\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OneImageColumn, { side: \"right\", image: image[1] })] })));\n        case 3:\n            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"images-container three-image-container\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OneImageColumn, { side: \"left\", image: image[0] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"vertical-spacer\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TwoImagesColumn, { side: \"right\", image1: image[1], image2: image[2] })] })));\n        case 4:\n            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"images-container four-image-container\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TwoImagesColumn, { side: \"left\", image1: image[0], image2: image[2] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"vertical-spacer\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TwoImagesColumn, { side: \"right\", image1: image[1], image2: image[3] })] })));\n        default:\n            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});\n    }\n    function OneImageColumn(_a) {\n        var side = _a.side, image = _a.image;\n        side = sanitizeSide(side);\n        var borderSide = getBorderSide(side);\n        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"full-height-image \".concat(side, \"-image t\").concat(borderSide, \" b\").concat(borderSide) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", { src: image, alt: \"\" }) })));\n    }\n    function TwoImagesColumn(_a) {\n        var side = _a.side, image1 = _a.image1, image2 = _a.image2;\n        side = sanitizeSide(side);\n        var borderSide = getBorderSide(side);\n        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"\".concat(side, \"-col\") }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"half-height-image t\".concat(borderSide) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", { src: image1, alt: \"\" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"horizontal-spacer\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"half-height-image b\".concat(borderSide) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", { src: image2, alt: \"\" }) }))] })));\n    }\n    function sanitizeSide(side) {\n        return side === \"right\" || side === \"left\" ? side : \"left\";\n    }\n    function getBorderSide(side) {\n        return side.charAt(0);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImagesContainer);\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/components/tweet/ImagesContainer.tsx?");

/***/ }),

/***/ "./src/components/tweet/Impact.tsx":
/*!*****************************************!*\
  !*** ./src/components/tweet/Impact.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nfunction Impact(_a) {\n    var config = _a.config;\n    if (config.retweets === 0 && config.quotedTweets === 0 && config.likes === 0) {\n        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});\n    }\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"rt-likes\" }, { children: [config.retweets !== 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", __assign({ className: \"fake-link num-rts\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", { children: styleNumber(config.retweets) }), \" \", getText(\"Retweet\", config.retweets)] }))), config.quotedTweets !== 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", __assign({ className: \"fake-link num-quotes\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", { children: styleNumber(config.quotedTweets) }), \" \", getText(\"Quoted Tweet\", config.quotedTweets)] }))), config.likes !== 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", __assign({ className: \"fake-link num-likes\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", { children: styleNumber(config.likes) }), \" \", getText(\"Like\", config.likes)] })))] })));\n    function styleNumber(num) {\n        var div = num / 1000000;\n        if (div >= 1) {\n            return div.toFixed(1).replace(/([0-9]+(\\.[0-9]+[1-9])?)(\\.?0+$)/, \"$1\") + \"M\";\n        }\n        div = num / 1000;\n        if (div >= 1) {\n            return div.toFixed(1).replace(/([0-9]+(\\.[0-9]+[1-9])?)(\\.?0+$)/, \"$1\") + \"K\";\n        }\n        return num;\n    }\n    function getText(text, count) {\n        return count === 1 ? text : text + \"s\";\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Impact);\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/components/tweet/Impact.tsx?");

/***/ }),

/***/ "./src/components/tweet/Metadata.tsx":
/*!*******************************************!*\
  !*** ./src/components/tweet/Metadata.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nfunction Metadata(_a) {\n    var config = _a.config;\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"metadata\" }, { children: [config.date, \" \\u00B7 \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", __assign({ className: \"fake-link app\" }, { children: config.app }))] })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Metadata);\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/components/tweet/Metadata.tsx?");

/***/ }),

/***/ "./src/components/tweet/Tweet.tsx":
/*!****************************************!*\
  !*** ./src/components/tweet/Tweet.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Tweet_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tweet.scss */ \"./src/components/tweet/Tweet.scss\");\n/* harmony import */ var _UserInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserInfo */ \"./src/components/tweet/UserInfo.tsx\");\n/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content */ \"./src/components/tweet/Content.tsx\");\n/* harmony import */ var _Metadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Metadata */ \"./src/components/tweet/Metadata.tsx\");\n/* harmony import */ var _Impact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Impact */ \"./src/components/tweet/Impact.tsx\");\n/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Actions */ \"./src/components/tweet/Actions.tsx\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\n\n\n\n\nvar Tweet = /** @class */ (function (_super) {\n    __extends(Tweet, _super);\n    function Tweet(props) {\n        var _this = _super.call(this, props) || this;\n        _this.state = {};\n        return _this;\n    }\n    Tweet.prototype.render = function () {\n        var config = this.props.config;\n        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({}, this.props, { className: \"tweet \" + config.display }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { config: config }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Content__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { config: config }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Metadata__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { config: config }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Impact__WEBPACK_IMPORTED_MODULE_6__[\"default\"], { config: config }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Actions__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {})] })));\n    };\n    return Tweet;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component)));\n/*function Tweet({ config }: { config: TweetConfig }) {\n  const display = useDisplay(config.display);\n\n  return (\n    <div className={\"tweet \" + display}>\n      <UserInfo config={config} />\n      <Content config={config} />\n      <Metadata config={config} />\n      <Impact config={config} />\n      <Actions />\n    </div>\n  );\n}*/\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tweet);\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/components/tweet/Tweet.tsx?");

/***/ }),

/***/ "./src/components/tweet/UserInfo.tsx":
/*!*******************************************!*\
  !*** ./src/components/tweet/UserInfo.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _icons_DropIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/DropIcon */ \"./src/components/icons/DropIcon.tsx\");\n/* harmony import */ var _icons_VerifiedIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/VerifiedIcon */ \"./src/components/icons/VerifiedIcon.tsx\");\n/* harmony import */ var _icons_LockIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/LockIcon */ \"./src/components/icons/LockIcon.tsx\");\n/* harmony import */ var react_twemoji__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-twemoji */ \"./node_modules/react-twemoji/lib/Twemoji/index.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\n\nfunction UserInfo(_a) {\n    var config = _a.config;\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"user-info\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"avatar-container\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", { className: \"avatar\", src: config.user.avatar, alt: config.user.name + \" avatar\" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"user-info-right\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"drop-button\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_DropIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"user-name\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_twemoji__WEBPACK_IMPORTED_MODULE_4__[\"default\"], __assign({ options: { className: \"twemoji-sm\" }, \n                                // @ts-ignore\n                                className: \"user-name-txt\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", __assign({ className: \"fake-link\" }, { children: config.user.name })) })), config.user.verified && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"icon\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_VerifiedIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}) }))), config.user.locked && !config.user.verified && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"icon\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_LockIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}) })))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"user-nickname\" }, { children: [\"@\", config.user.nickname] }))] }))] })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInfo);\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/components/tweet/UserInfo.tsx?");

/***/ }),

/***/ "./src/hooks/useImage.tsx":
/*!********************************!*\
  !*** ./src/hooks/useImage.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useImage(rawImage) {\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), image = _a[0], setImage = _a[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n        var imgArray;\n        if (!rawImage) {\n            imgArray = [];\n        }\n        else {\n            imgArray = rawImage && Array.isArray(rawImage) ? rawImage : [rawImage];\n        }\n        setImage(imgArray);\n    }, [rawImage]);\n    return image;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useImage);\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/hooks/useImage.tsx?");

/***/ }),

/***/ "./src/hooks/useText.tsx":
/*!*******************************!*\
  !*** ./src/hooks/useText.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_process_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-process-string */ \"./node_modules/react-process-string/dist/index.js\");\n/* harmony import */ var react_process_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_process_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_twemoji__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-twemoji */ \"./node_modules/react-twemoji/lib/Twemoji/index.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n// @ts-ignore\n\n\nfunction useText(rawText) {\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(rawText), text = _a[0], setText = _a[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n        setText(react_process_string__WEBPACK_IMPORTED_MODULE_2___default()([\n            {\n                regex: /(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:(?:@|＠)(?!\\/))([a-zA-Z0-9/_]{1,15})(?:\\b(?!@|＠)|$)/,\n                fn: handleMention,\n            },\n            {\n                regex: /(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:#(?!\\/))([a-zA-Z0-9/_]{1,280})(?:\\b(?!#)|$)/,\n                fn: handleHashtag,\n            },\n            {\n                regex: /(\\u00a9|\\u00ae|[\\u2000-\\u3300]|\\ud83c[\\ud000-\\udfff]|\\ud83d[\\ud000-\\udfff]|\\ud83e[\\ud000-\\udfff])/,\n                fn: handleEmoji,\n            },\n        ])(rawText));\n    }, [rawText]);\n    return text;\n}\nfunction handleMention(key, result) {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", { children: [' ', (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", __assign({ className: \"fake-link mention\" }, { children: [\"@\", result[1]] }))] }, key));\n}\nfunction handleHashtag(key, result) {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", { children: [' ', (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", __assign({ className: \"fake-link mention\" }, { children: [\" #\", result[1]] }))] }, key));\n}\nfunction handleEmoji(key, result) {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_twemoji__WEBPACK_IMPORTED_MODULE_3__[\"default\"], __assign({ options: { className: 'twemoji-bg' }, \n        // @ts-ignore\n        style: { display: 'inline' } }, { children: result[1] }), key));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useText);\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/hooks/useText.tsx?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/CssBaseline/CssBaseline.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var _styles_default_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/default.scss */ \"./src/styles/default.scss\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme */ \"./src/theme.tsx\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\n// Styles\n\n\n// Setup root node where our React app will be attached to\nvar root = document.createElement(\"app\");\ndocument.body.appendChild(root);\n// Render the app component\n(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.render)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], __assign({ theme: _theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"] }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}) }) })] })) }), document.querySelector(\"app\"));\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/index.tsx?");

/***/ }),

/***/ "./src/theme.tsx":
/*!***********************!*\
  !*** ./src/theme.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/createTheme.js\");\n\n// Create a Material-UI theme instance\n// https://mui.com/customization/theming/\nvar theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    palette: {\n        primary: {\n            main: \"#0076ff\",\n        },\n        secondary: {\n            main: \"#004ba0\",\n        },\n    },\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n\n//# sourceURL=webpack://re-fake-tweet/./src/theme.tsx?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkre_fake_tweet"] = self["webpackChunkre_fake_tweet"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;