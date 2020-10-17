"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _express = require("express");

var TrableRouter = function TrableRouter(baseRoute) {
  (0, _classCallCheck2["default"])(this, TrableRouter);
  (0, _defineProperty2["default"])(this, "baseRoute", void 0);
  (0, _defineProperty2["default"])(this, "expressRouter", void 0);
  this.baseRoute = baseRoute !== null && baseRoute !== void 0 ? baseRoute : "/";
  this.expressRouter = (0, _express.Router)();
  this.registerRoutes();
};

exports["default"] = TrableRouter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvVHJhYmxlUm91dGVyLnRzIl0sIm5hbWVzIjpbIlRyYWJsZVJvdXRlciIsImJhc2VSb3V0ZSIsImV4cHJlc3NSb3V0ZXIiLCJyZWdpc3RlclJvdXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztJQUU4QkEsWSxHQUsxQixzQkFBWUMsU0FBWixFQUEyQztBQUFBO0FBQUE7QUFBQTtBQUN2QyxPQUFLQSxTQUFMLEdBQWlCQSxTQUFqQixhQUFpQkEsU0FBakIsY0FBaUJBLFNBQWpCLEdBQThCLEdBQTlCO0FBQ0EsT0FBS0MsYUFBTCxHQUFxQixzQkFBckI7QUFDQSxPQUFLQyxjQUFMO0FBQ0gsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJleHByZXNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFRyYWJsZVJvdXRlclxue1xuICAgIHB1YmxpYyBiYXNlUm91dGU6IHN0cmluZ1xuICAgIHB1YmxpYyBleHByZXNzUm91dGVyOiBSb3V0ZXJcblxuICAgIGNvbnN0cnVjdG9yKGJhc2VSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuYmFzZVJvdXRlID0gYmFzZVJvdXRlID8/IFwiL1wiXG4gICAgICAgIHRoaXMuZXhwcmVzc1JvdXRlciA9IFJvdXRlcigpXG4gICAgICAgIHRoaXMucmVnaXN0ZXJSb3V0ZXMoKVxuICAgIH1cblxuICAgIGFic3RyYWN0IHJlZ2lzdGVyUm91dGVzKCk6IHZvaWRcbn0iXX0=