"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _TrableRouter2 = _interopRequireDefault(require("../TrableRouter"));

var _currentLocation = _interopRequireDefault(require("./currentLocation"));

var _submitRSSI = _interopRequireDefault(require("./submitRSSI"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var LocationRouter = /*#__PURE__*/function (_TrableRouter) {
  (0, _inherits2["default"])(LocationRouter, _TrableRouter);

  var _super = _createSuper(LocationRouter);

  function LocationRouter() {
    (0, _classCallCheck2["default"])(this, LocationRouter);
    return _super.call(this, "/location");
  }

  (0, _createClass2["default"])(LocationRouter, [{
    key: "registerRoutes",
    value: function registerRoutes() {
      (0, _currentLocation["default"])(this.expressRouter);
      (0, _submitRSSI["default"])(this.expressRouter);
    }
  }]);
  return LocationRouter;
}(_TrableRouter2["default"]);

exports["default"] = LocationRouter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbG9jYXRpb24vTG9jYXRpb25Sb3V0ZXIudHMiXSwibmFtZXMiOlsiTG9jYXRpb25Sb3V0ZXIiLCJleHByZXNzUm91dGVyIiwiVHJhYmxlUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVxQkEsYzs7Ozs7QUFDakIsNEJBQWM7QUFBQTtBQUFBLDZCQUNKLFdBREk7QUFFYjs7OztxQ0FFc0I7QUFDbkIsdUNBQWdCLEtBQUtDLGFBQXJCO0FBQ0Esa0NBQVcsS0FBS0EsYUFBaEI7QUFDSDs7O0VBUnVDQyx5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFibGVSb3V0ZXIgZnJvbSBcIi4uL1RyYWJsZVJvdXRlclwiO1xuaW1wb3J0IGN1cnJlbnRMb2NhdGlvbiBmcm9tIFwiLi9jdXJyZW50TG9jYXRpb25cIjtcbmltcG9ydCBzdWJtaXRSU1NJIGZyb20gXCIuL3N1Ym1pdFJTU0lcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25Sb3V0ZXIgZXh0ZW5kcyBUcmFibGVSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcIi9sb2NhdGlvblwiKTtcbiAgICB9XG5cbiAgICByZWdpc3RlclJvdXRlcygpOiB2b2lkIHtcbiAgICAgICAgY3VycmVudExvY2F0aW9uKHRoaXMuZXhwcmVzc1JvdXRlcilcbiAgICAgICAgc3VibWl0UlNTSSh0aGlzLmV4cHJlc3NSb3V0ZXIpXG4gICAgfVxufSJdfQ==