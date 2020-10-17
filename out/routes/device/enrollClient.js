"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _DeviceController = _interopRequireDefault(require("../../controllers/DeviceController"));

var _GenericResponse = _interopRequireDefault(require("../../models/GenericResponse"));

var _logger = _interopRequireDefault(require("../../utils/logger"));

var _default = function _default(router) {
  // TODO: Add ratelimit middleware
  router.get('/enrollClient', /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var result;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _DeviceController["default"].createApiUserForClient();

            case 3:
              result = _context.sent;
              res.json(result);
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              res.status(500).json(new _GenericResponse["default"](500, _context.t0.toString()));

              _logger["default"].error("An error occurred during request: " + _context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGV2aWNlL2Vucm9sbENsaWVudC50cyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJEZXZpY2VDb250cm9sbGVyIiwiY3JlYXRlQXBpVXNlckZvckNsaWVudCIsInJlc3VsdCIsImpzb24iLCJzdGF0dXMiLCJHZW5lcmljUmVzcG9uc2UiLCJ0b1N0cmluZyIsImxvZ2dlciIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O2VBRWUsa0JBQUNBLE1BQUQsRUFBb0I7QUFDL0I7QUFDQUEsRUFBQUEsTUFBTSxDQUFDQyxHQUFQLENBQVcsZUFBWDtBQUFBLDZGQUE0QixpQkFBT0MsR0FBUCxFQUFxQkMsR0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVDQyw2QkFBaUJDLHNCQUFqQixFQUZEOztBQUFBO0FBRWRDLGNBQUFBLE1BRmM7QUFHcEJILGNBQUFBLEdBQUcsQ0FBQ0ksSUFBSixDQUFTRCxNQUFUO0FBSG9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS3BCSCxjQUFBQSxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCRCxJQUFoQixDQUFxQixJQUFJRSwyQkFBSixDQUFvQixHQUFwQixFQUF5QixZQUFNQyxRQUFOLEVBQXpCLENBQXJCOztBQUNBQyxpQ0FBT0MsS0FBUCxDQUFhLGtEQUFiOztBQU5vQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE1Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgUm91dGVyIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBEZXZpY2VDb250cm9sbGVyIGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9EZXZpY2VDb250cm9sbGVyXCI7XG5pbXBvcnQgR2VuZXJpY1Jlc3BvbnNlIGZyb20gXCIuLi8uLi9tb2RlbHMvR2VuZXJpY1Jlc3BvbnNlXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCIuLi8uLi91dGlscy9sb2dnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHJvdXRlcjogUm91dGVyKSA9PiB7XG4gICAgLy8gVE9ETzogQWRkIHJhdGVsaW1pdCBtaWRkbGV3YXJlXG4gICAgcm91dGVyLmdldCgnL2Vucm9sbENsaWVudCcsIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IERldmljZUNvbnRyb2xsZXIuY3JlYXRlQXBpVXNlckZvckNsaWVudCgpXG4gICAgICAgICAgICByZXMuanNvbihyZXN1bHQpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihuZXcgR2VuZXJpY1Jlc3BvbnNlKDUwMCwgZXJyb3IudG9TdHJpbmcoKSkpXG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgcmVxdWVzdDogXCIgKyBlcnJvcilcbiAgICAgICAgfVxuICAgIH0pXG59Il19