webpackHotUpdate("styles",{

/***/ "./components/MenuMain/Footer/style.scss":
/*!***********************************************!*\
  !*** ./components/MenuMain/Footer/style.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"cookieDialog":"_84e9d0","actionSpinner":"BGWyPO","activeSpinner":"ERXCFE","version":"B4jsoi"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1582646728289");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.63b4ab8b1cd5d0de1afa.hot-update.js.map