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

var _TrableRouter2 = _interopRequireDefault(require("./TrableRouter"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ApiRouter = /*#__PURE__*/function (_TrableRouter) {
  (0, _inherits2["default"])(ApiRouter, _TrableRouter);

  var _super = _createSuper(ApiRouter);

  function ApiRouter(version, routers) {
    var _this;

    (0, _classCallCheck2["default"])(this, ApiRouter);
    _this = _super.call(this, "/api/" + version);
    routers.forEach(function (router) {
      _this.expressRouter.use(router.baseRoute, router.expressRouter);
    });
    return _this;
  }

  (0, _createClass2["default"])(ApiRouter, [{
    key: "registerRoutes",
    value: function registerRoutes() {}
  }]);
  return ApiRouter;
}(_TrableRouter2["default"]);

exports["default"] = ApiRouter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvQXBpUm91dGVyLnRzIl0sIm5hbWVzIjpbIkFwaVJvdXRlciIsInZlcnNpb24iLCJyb3V0ZXJzIiwiZm9yRWFjaCIsInJvdXRlciIsImV4cHJlc3NSb3V0ZXIiLCJ1c2UiLCJiYXNlUm91dGUiLCJUcmFibGVSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRXFCQSxTOzs7OztBQUNqQixxQkFBWUMsT0FBWixFQUE2QkMsT0FBN0IsRUFBc0Q7QUFBQTs7QUFBQTtBQUNsRCw4QkFBTSxVQUFVRCxPQUFoQjtBQUVBQyxJQUFBQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsVUFBQUMsTUFBTSxFQUFJO0FBQ3RCLFlBQUtDLGFBQUwsQ0FBbUJDLEdBQW5CLENBQXVCRixNQUFNLENBQUNHLFNBQTlCLEVBQXlDSCxNQUFNLENBQUNDLGFBQWhEO0FBQ0gsS0FGRDtBQUhrRDtBQU1yRDs7OztxQ0FFc0IsQ0FBRTs7O0VBVFVHLHlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWJsZVJvdXRlciBmcm9tIFwiLi9UcmFibGVSb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpUm91dGVyIGV4dGVuZHMgVHJhYmxlUm91dGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2ZXJzaW9uOiBzdHJpbmcsIHJvdXRlcnM6IFRyYWJsZVJvdXRlcltdKSB7XG4gICAgICAgIHN1cGVyKFwiL2FwaS9cIiArIHZlcnNpb24pO1xuXG4gICAgICAgIHJvdXRlcnMuZm9yRWFjaChyb3V0ZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5leHByZXNzUm91dGVyLnVzZShyb3V0ZXIuYmFzZVJvdXRlLCByb3V0ZXIuZXhwcmVzc1JvdXRlcilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZWdpc3RlclJvdXRlcygpOiB2b2lkIHt9XG59Il19