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
  // TODO: Do something with the heartbeat, currently only used to verify if token is valid
  router.get('/heartbeat', [_requireAuth["default"]], /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              res.json({
                status: 200
              });

            case 1:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGV2aWNlL2hlYXJ0YmVhdC50cyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJnZXQiLCJyZXF1aXJlQXV0aCIsInJlcSIsInJlcyIsImpzb24iLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7ZUFFZSxrQkFBQ0EsTUFBRCxFQUFvQjtBQUMvQjtBQUNBQSxFQUFBQSxNQUFNLENBQUNDLEdBQVAsQ0FBVyxZQUFYLEVBQXlCLENBQUNDLHVCQUFELENBQXpCO0FBQUEsNkZBQXdDLGlCQUFPQyxHQUFQLEVBQXFCQyxHQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3BDQSxjQUFBQSxHQUFHLENBQUNDLElBQUosQ0FBUztBQUFFQyxnQkFBQUEsTUFBTSxFQUFFO0FBQVYsZUFBVDs7QUFEb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHSCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIFJvdXRlciB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgcmVxdWlyZUF1dGggZnJvbSBcIi4uLy4uL21pZGRsZXdhcmVzL2F1dGgvcmVxdWlyZUF1dGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHJvdXRlcjogUm91dGVyKSA9PiB7XG4gICAgLy8gVE9ETzogRG8gc29tZXRoaW5nIHdpdGggdGhlIGhlYXJ0YmVhdCwgY3VycmVudGx5IG9ubHkgdXNlZCB0byB2ZXJpZnkgaWYgdG9rZW4gaXMgdmFsaWRcbiAgICByb3V0ZXIuZ2V0KCcvaGVhcnRiZWF0JywgW3JlcXVpcmVBdXRoXSwgYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXMuanNvbih7IHN0YXR1czogMjAwIH0pXG4gICAgfSlcbn0iXX0=