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

var _mapConfig = _interopRequireDefault(require("./mapConfig"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MapRouter = /*#__PURE__*/function (_TrableRouter) {
  (0, _inherits2["default"])(MapRouter, _TrableRouter);

  var _super = _createSuper(MapRouter);

  function MapRouter() {
    (0, _classCallCheck2["default"])(this, MapRouter);
    return _super.call(this, "/map");
  }

  (0, _createClass2["default"])(MapRouter, [{
    key: "registerRoutes",
    value: function registerRoutes() {
      (0, _mapConfig["default"])(this.expressRouter);
    }
  }]);
  return MapRouter;
}(_TrableRouter2["default"]);

exports["default"] = MapRouter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbWFwL01hcFJvdXRlci50cyJdLCJuYW1lcyI6WyJNYXBSb3V0ZXIiLCJleHByZXNzUm91dGVyIiwiVHJhYmxlUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztJQUVxQkEsUzs7Ozs7QUFDakIsdUJBQWM7QUFBQTtBQUFBLDZCQUNKLE1BREk7QUFFYjs7OztxQ0FFc0I7QUFDbkIsaUNBQVUsS0FBS0MsYUFBZjtBQUNIOzs7RUFQa0NDLHlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWJsZVJvdXRlciBmcm9tIFwiLi4vVHJhYmxlUm91dGVyXCI7XG5pbXBvcnQgbWFwQ29uZmlnIGZyb20gXCIuL21hcENvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBSb3V0ZXIgZXh0ZW5kcyBUcmFibGVSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcIi9tYXBcIik7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJSb3V0ZXMoKTogdm9pZCB7XG4gICAgICAgIG1hcENvbmZpZyh0aGlzLmV4cHJlc3NSb3V0ZXIpXG4gICAgfVxufSJdfQ==