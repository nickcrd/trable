"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var GenericResponse = /*#__PURE__*/function () {
  function GenericResponse(status, message) {
    (0, _classCallCheck2["default"])(this, GenericResponse);
    (0, _defineProperty2["default"])(this, "status", void 0);
    (0, _defineProperty2["default"])(this, "message", void 0);
    this.status = status;
    this.message = message;
  }

  (0, _createClass2["default"])(GenericResponse, [{
    key: "wasSuccessful",
    value: function wasSuccessful() {
      return this.status === 200;
    }
  }]);
  return GenericResponse;
}();

var _default = GenericResponse;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvR2VuZXJpY1Jlc3BvbnNlLnRzIl0sIm5hbWVzIjpbIkdlbmVyaWNSZXNwb25zZSIsInN0YXR1cyIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxlO0FBS0YsMkJBQVlDLE1BQVosRUFBNEJDLE9BQTVCLEVBQThDO0FBQUE7QUFBQTtBQUFBO0FBQzFDLFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNIOzs7O29DQUUrQjtBQUM1QixhQUFPLEtBQUtELE1BQUwsS0FBZ0IsR0FBdkI7QUFDSDs7Ozs7ZUFHVUQsZSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdlbmVyaWNSZXNwb25zZSB7XG5cbiAgICBwdWJsaWMgc3RhdHVzOiBudW1iZXI7XG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXR1czogbnVtYmVyLCBtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIH1cblxuICAgIHB1YmxpYyB3YXNTdWNjZXNzZnVsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IDIwMDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdlbmVyaWNSZXNwb25zZSJdfQ==