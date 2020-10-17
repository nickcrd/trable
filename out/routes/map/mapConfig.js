"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _MapController = _interopRequireDefault(require("../../controllers/MapController"));

var _GenericResponse = _interopRequireDefault(require("../../models/GenericResponse"));

var _default = function _default(router) {
  router.get('/mapConfig', /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var mapConfig;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _MapController["default"].getMapConfig();

            case 3:
              mapConfig = _context.sent;
              res.json(mapConfig);
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              res.status(500).json(new _GenericResponse["default"](500, _context.t0.toString()));
              throw _context.t0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbWFwL21hcENvbmZpZy50cyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJNYXBDb250cm9sbGVyIiwiZ2V0TWFwQ29uZmlnIiwibWFwQ29uZmlnIiwianNvbiIsInN0YXR1cyIsIkdlbmVyaWNSZXNwb25zZSIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O2VBRWUsa0JBQUNBLE1BQUQsRUFBb0I7QUFDL0JBLEVBQUFBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFlBQVg7QUFBQSw2RkFBeUIsaUJBQU9DLEdBQVAsRUFBcUJDLEdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFT0MsMEJBQWNDLFlBQWQsRUFGUDs7QUFBQTtBQUVYQyxjQUFBQSxTQUZXO0FBR2pCSCxjQUFBQSxHQUFHLENBQUNJLElBQUosQ0FBU0QsU0FBVDtBQUhpQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtqQkgsY0FBQUEsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkQsSUFBaEIsQ0FBcUIsSUFBSUUsMkJBQUosQ0FBb0IsR0FBcEIsRUFBeUIsWUFBSUMsUUFBSixFQUF6QixDQUFyQjtBQUxpQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgUm91dGVyIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBNYXBDb250cm9sbGVyIGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9NYXBDb250cm9sbGVyXCI7XG5pbXBvcnQgR2VuZXJpY1Jlc3BvbnNlIGZyb20gXCIuLi8uLi9tb2RlbHMvR2VuZXJpY1Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChyb3V0ZXI6IFJvdXRlcikgPT4ge1xuICAgIHJvdXRlci5nZXQoJy9tYXBDb25maWcnLCBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBtYXBDb25maWcgPSBhd2FpdCBNYXBDb250cm9sbGVyLmdldE1hcENvbmZpZygpXG4gICAgICAgICAgICByZXMuanNvbihtYXBDb25maWcpXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihuZXcgR2VuZXJpY1Jlc3BvbnNlKDUwMCwgZXJyLnRvU3RyaW5nKCkpKVxuICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICB9KVxufSJdfQ==