webpackJsonp([0],{

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(23);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout() {
        _classCallCheck(this, Layout);

        var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

        _this.state = {
            title: "It works!"
        };
        return _this;
    }

    _createClass(Layout, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "p",
                    null,
                    "This is a test para"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Another testt"
                ),
                _react2.default.createElement(
                    "h1",
                    null,
                    this.state.title
                )
            );
        }
    }]);

    return Layout;
}(_react2.default.Component);

exports.default = Layout;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(23);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Layout = __webpack_require__(87);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById("app");
_reactDom2.default.render(_react2.default.createElement(_Layout2.default, null), app);

/***/ })

},[88]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9BcHAuanMiXSwibmFtZXMiOlsiTGF5b3V0Iiwic3RhdGUiLCJ0aXRsZSIsIkNvbXBvbmVudCIsImFwcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7O0FBQ2pCLHNCQUFjO0FBQUE7O0FBQUE7O0FBRVYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG1CQUFPO0FBREUsU0FBYjtBQUZVO0FBS2I7Ozs7aUNBRVE7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUdJO0FBQUE7QUFBQTtBQUFNLHlCQUFLRCxLQUFMLENBQVdDO0FBQWpCO0FBSEosYUFESjtBQU9IOzs7O0VBaEIrQixnQkFBTUMsUzs7a0JBQXJCSCxNOzs7Ozs7Ozs7O0FDRnJCOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUksTUFBTUMsU0FBU0MsY0FBVCxDQUF5QixLQUF6QixDQUFaO0FBQ0EsbUJBQVNDLE1BQVQsQ0FBaUIscURBQWpCLEVBQTZCSCxHQUE3QixFIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJJdCB3b3JrcyFcIixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgYSB0ZXN0IHBhcmE8L3A+XG4gICAgICAgICAgICAgICAgPHA+QW5vdGhlciB0ZXN0dDwvcD5cbiAgICAgICAgICAgICAgICA8aDE+eyB0aGlzLnN0YXRlLnRpdGxlIH08L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBcImFwcFwiICk7XG5SZWFjdERPTS5yZW5kZXIoIDxMYXlvdXQgLz4sIGFwcCApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvQXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==