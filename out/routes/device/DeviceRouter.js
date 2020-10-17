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

var _enrollClient = _interopRequireDefault(require("./enrollClient"));

var _enrollNode = _interopRequireDefault(require("./enrollNode"));

var _heartbeat = _interopRequireDefault(require("./heartbeat"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DeviceRouter = /*#__PURE__*/function (_TrableRouter) {
  (0, _inherits2["default"])(DeviceRouter, _TrableRouter);

  var _super = _createSuper(DeviceRouter);

  function DeviceRouter() {
    (0, _classCallCheck2["default"])(this, DeviceRouter);
    return _super.call(this, "/devices");
  }

  (0, _createClass2["default"])(DeviceRouter, [{
    key: "registerRoutes",
    value: function registerRoutes() {
      (0, _enrollClient["default"])(this.expressRouter);
      (0, _enrollNode["default"])(this.expressRouter);
      (0, _heartbeat["default"])(this.expressRouter);
    }
  }]);
  return DeviceRouter;
}(_TrableRouter2["default"]);

exports["default"] = DeviceRouter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGV2aWNlL0RldmljZVJvdXRlci50cyJdLCJuYW1lcyI6WyJEZXZpY2VSb3V0ZXIiLCJleHByZXNzUm91dGVyIiwiVHJhYmxlUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVxQkEsWTs7Ozs7QUFDakIsMEJBQWM7QUFBQTtBQUFBLDZCQUNKLFVBREk7QUFFYjs7OztxQ0FFc0I7QUFDbkIsb0NBQWEsS0FBS0MsYUFBbEI7QUFDQSxrQ0FBVyxLQUFLQSxhQUFoQjtBQUNBLGlDQUFVLEtBQUtBLGFBQWY7QUFDSDs7O0VBVHFDQyx5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFibGVSb3V0ZXIgZnJvbSBcIi4uL1RyYWJsZVJvdXRlclwiO1xuaW1wb3J0IGVucm9sbENsaWVudCBmcm9tIFwiLi9lbnJvbGxDbGllbnRcIjtcbmltcG9ydCBlbnJvbGxOb2RlIGZyb20gXCIuL2Vucm9sbE5vZGVcIjtcbmltcG9ydCBoZWFydGJlYXQgZnJvbSBcIi4vaGVhcnRiZWF0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldmljZVJvdXRlciBleHRlbmRzIFRyYWJsZVJvdXRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFwiL2RldmljZXNcIik7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJSb3V0ZXMoKTogdm9pZCB7XG4gICAgICAgIGVucm9sbENsaWVudCh0aGlzLmV4cHJlc3NSb3V0ZXIpXG4gICAgICAgIGVucm9sbE5vZGUodGhpcy5leHByZXNzUm91dGVyKVxuICAgICAgICBoZWFydGJlYXQodGhpcy5leHByZXNzUm91dGVyKVxuICAgIH1cbn0iXX0=