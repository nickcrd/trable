"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _requireAuth = _interopRequireDefault(require("../../middlewares/auth/requireAuth"));

var _default = function _default(router) {
  router.get('/current', [_requireAuth["default"]], /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbG9jYXRpb24vY3VycmVudExvY2F0aW9uLnRzIl0sIm5hbWVzIjpbInJvdXRlciIsImdldCIsInJlcXVpcmVBdXRoIiwicmVxIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7O2VBRWUsa0JBQUNBLE1BQUQsRUFBb0I7QUFDL0JBLEVBQUFBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQVgsRUFBdUIsQ0FBQ0MsdUJBQUQsQ0FBdkI7QUFBQSw2RkFBc0MsaUJBQU9DLEdBQVAsRUFBcUJDLEdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTSCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIFJvdXRlciB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgR2VuZXJpY1Jlc3BvbnNlIGZyb20gXCIuLi8uLi9tb2RlbHMvR2VuZXJpY1Jlc3BvbnNlXCI7XG5pbXBvcnQgcmVxdWlyZUF1dGggZnJvbSBcIi4uLy4uL21pZGRsZXdhcmVzL2F1dGgvcmVxdWlyZUF1dGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHJvdXRlcjogUm91dGVyKSA9PiB7XG4gICAgcm91dGVyLmdldCgnL2N1cnJlbnQnLCBbcmVxdWlyZUF1dGhdLCBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgLyogdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IERldmljZUNvbnRyb2xsZXIuY3JlYXRlQXBpVXNlckZvckNsaWVudCgpXG4gICAgICAgICAgICByZXMuanNvbihyZXN1bHQpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihuZXcgR2VuZXJpY1Jlc3BvbnNlKDUwMCwgZXJyb3IudG9TdHJpbmcoKSkpXG4gICAgICAgIH1cbiAgICAgICAgKi9cbiAgICB9KVxufSJdfQ==