webpackHotUpdate("static/development/pages/index.js",{

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
false,

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
false,

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
false,

/***/ "./components/MenuMain/MenuList/MealByPlace.tsx":
/*!******************************************************!*\
  !*** ./components/MenuMain/MenuList/MealByPlace.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react */ "../node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../API */ "./components/API.tsx");
/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../I18n */ "./components/I18n.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./components/MenuMain/MenuList/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en.d.yml */ "./components/MenuMain/MenuList/en.d.yml");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_en_d_yml__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/home/wldh/MoNet/menu/src/components/MenuMain/MenuList/MealByPlace.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






;

var MealByPlace = function MealByPlace(props) {
  var _useAPI = Object(_API__WEBPACK_IMPORTED_MODULE_3__["useAPI"])(),
      getMenu = _useAPI.getMenu,
      isMenuLoaded = _useAPI.isMenuLoaded;

  var _useI18n = Object(_I18n__WEBPACK_IMPORTED_MODULE_4__["default"])(_en_d_yml__WEBPACK_IMPORTED_MODULE_6___default.a),
      t = _useI18n.t;

  var place = props.place,
      type = props.type;
  var menu = getMenu(place, type);
  var menuLists = [__jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, t('DOM 생성 중 오류가 발생했습니다.')))];

  if (menu) {
    if (menu instanceof Array) {
      menuLists = [__jsx("div", {
        "data-list": true,
        key: "".concat(place, "-").concat(type, "-").concat(Math.random()),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, menu.map(function (m) {
        return __jsx("p", {
          key: "".concat(place, "-").concat(type, "-i").concat(Math.random()),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, m);
      }))];
    } else {
      var menuTitles = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(menu);

      menuLists = [];

      for (var idx = 0; idx < menuTitles.length; idx += 1) {
        menuLists.push(__jsx("div", {
          "data-list": true,
          key: "".concat(place, "-").concat(type, "-").concat(Math.random()),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, __jsx("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, menuTitles[idx]), menu[menuTitles[idx]].map(function (m) {
          return __jsx("p", {
            key: "".concat(place, "-").concat(type, "-i").concat(Math.random()),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          }, m);
        })));
      }
    }
  }

  return __jsx("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.menuList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, isMenuLoaded(place) ? menuLists : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    width: "95%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    width: "75%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    width: "40%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MealByPlace);

/***/ })

})
//# sourceMappingURL=index.js.37d4dbec88fa5253a13d.hot-update.js.map