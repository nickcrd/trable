"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _requireAuth = _interopRequireDefault(require("../../middlewares/auth/requireAuth"));

var _requirePermission = _interopRequireDefault(require("../../middlewares/auth/requirePermission"));

var _permission = _interopRequireDefault(require("../../utils/permission"));

var _celebrate2 = require("celebrate");

var _LocationController = _interopRequireDefault(require("../../controllers/LocationController"));

var _default = function _default(router) {
  router.post('/submitRSSI', [_requireAuth["default"], (0, _requirePermission["default"])(_permission["default"].sensor.submitRSSI), (0, _celebrate2.celebrate)((0, _defineProperty2["default"])({}, _celebrate2.Segments.BODY, {
    targetId: _celebrate2.Joi.string().required(),
    rssiMeasurements: _celebrate2.Joi.array().required(),
    rssi1m: _celebrate2.Joi.number().required(),
    pathLossParam: _celebrate2.Joi.number().required(),
    timestamp: _celebrate2.Joi.number()
  }))], /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _LocationController["default"].submitNewMeasurement(req.user, req.body.targetId, req.body.rssi1m, req.body.rssiMeasurements, req.body.pathLossParam, req.body.timestamp);

            case 2:
              // eventEmitter.emit(events.newRawRSSIMeasurement, req.body)
              res.json({
                status: 200
              });

            case 3:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbG9jYXRpb24vc3VibWl0UlNTSS50cyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJwb3N0IiwicmVxdWlyZUF1dGgiLCJwZXJtaXNzaW9uIiwic2Vuc29yIiwic3VibWl0UlNTSSIsIlNlZ21lbnRzIiwiQk9EWSIsInRhcmdldElkIiwiSm9pIiwic3RyaW5nIiwicmVxdWlyZWQiLCJyc3NpTWVhc3VyZW1lbnRzIiwiYXJyYXkiLCJyc3NpMW0iLCJudW1iZXIiLCJwYXRoTG9zc1BhcmFtIiwidGltZXN0YW1wIiwicmVxIiwicmVzIiwiTG9jYXRpb25Db250cm9sbGVyIiwic3VibWl0TmV3TWVhc3VyZW1lbnQiLCJ1c2VyIiwiYm9keSIsImpzb24iLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztlQUdlLGtCQUFDQSxNQUFELEVBQW9CO0FBQy9CQSxFQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxhQUFaLEVBQTJCLENBQ3ZCQyx1QkFEdUIsRUFFdkIsbUNBQWtCQyx1QkFBV0MsTUFBWCxDQUFrQkMsVUFBcEMsQ0FGdUIsRUFHdkIsZ0VBQ0tDLHFCQUFTQyxJQURkLEVBQ3FCO0FBQ2JDLElBQUFBLFFBQVEsRUFBRUMsZ0JBQUlDLE1BQUosR0FBYUMsUUFBYixFQURHO0FBRWJDLElBQUFBLGdCQUFnQixFQUFFSCxnQkFBSUksS0FBSixHQUFZRixRQUFaLEVBRkw7QUFHYkcsSUFBQUEsTUFBTSxFQUFFTCxnQkFBSU0sTUFBSixHQUFhSixRQUFiLEVBSEs7QUFJYkssSUFBQUEsYUFBYSxFQUFFUCxnQkFBSU0sTUFBSixHQUFhSixRQUFiLEVBSkY7QUFLYk0sSUFBQUEsU0FBUyxFQUFFUixnQkFBSU0sTUFBSjtBQUxFLEdBRHJCLEVBSHVCLENBQTNCO0FBQUEsNkZBWUcsaUJBQU9HLEdBQVAsRUFBcUJDLEdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNPQywrQkFBbUJDLG9CQUFuQixDQUF3Q0gsR0FBRyxDQUFDSSxJQUE1QyxFQUFtRUosR0FBRyxDQUFDSyxJQUFKLENBQVNmLFFBQTVFLEVBQXNGVSxHQUFHLENBQUNLLElBQUosQ0FBU1QsTUFBL0YsRUFBdUdJLEdBQUcsQ0FBQ0ssSUFBSixDQUFTWCxnQkFBaEgsRUFBa0lNLEdBQUcsQ0FBQ0ssSUFBSixDQUFTUCxhQUEzSSxFQUEwSkUsR0FBRyxDQUFDSyxJQUFKLENBQVNOLFNBQW5LLENBRFA7O0FBQUE7QUFFQztBQUNBRSxjQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBUztBQUFFQyxnQkFBQUEsTUFBTSxFQUFFO0FBQVYsZUFBVDs7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVpIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUJILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgUm91dGVyIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCByZXF1aXJlQXV0aCBmcm9tIFwiLi4vLi4vbWlkZGxld2FyZXMvYXV0aC9yZXF1aXJlQXV0aFwiO1xuaW1wb3J0IHJlcXVpcmVQZXJtaXNzaW9uIGZyb20gXCIuLi8uLi9taWRkbGV3YXJlcy9hdXRoL3JlcXVpcmVQZXJtaXNzaW9uXCI7XG5pbXBvcnQgcGVybWlzc2lvbiBmcm9tIFwiLi4vLi4vdXRpbHMvcGVybWlzc2lvblwiO1xuaW1wb3J0IHtjZWxlYnJhdGUsIEpvaSwgU2VnbWVudHN9IGZyb20gXCJjZWxlYnJhdGVcIjtcbmltcG9ydCBMb2NhdGlvbkNvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJzL0xvY2F0aW9uQ29udHJvbGxlclwiO1xuaW1wb3J0IHtUcmFibGVBcGlVc2VyfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2F1dGgvVHJhYmxlQXBpVXNlck1vZGVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChyb3V0ZXI6IFJvdXRlcikgPT4ge1xuICAgIHJvdXRlci5wb3N0KCcvc3VibWl0UlNTSScsIFtcbiAgICAgICAgcmVxdWlyZUF1dGgsXG4gICAgICAgIHJlcXVpcmVQZXJtaXNzaW9uKHBlcm1pc3Npb24uc2Vuc29yLnN1Ym1pdFJTU0kpLFxuICAgICAgICBjZWxlYnJhdGUoe1xuICAgICAgICAgICAgW1NlZ21lbnRzLkJPRFldOiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0SWQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgICAgIHJzc2lNZWFzdXJlbWVudHM6IEpvaS5hcnJheSgpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICAgICAgcnNzaTFtOiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgICAgICBwYXRoTG9zc1BhcmFtOiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IEpvaS5udW1iZXIoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIF0sIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgYXdhaXQgTG9jYXRpb25Db250cm9sbGVyLnN1Ym1pdE5ld01lYXN1cmVtZW50KHJlcS51c2VyIGFzIFRyYWJsZUFwaVVzZXIsIHJlcS5ib2R5LnRhcmdldElkLCByZXEuYm9keS5yc3NpMW0sIHJlcS5ib2R5LnJzc2lNZWFzdXJlbWVudHMsIHJlcS5ib2R5LnBhdGhMb3NzUGFyYW0sIHJlcS5ib2R5LnRpbWVzdGFtcClcbiAgICAgICAgLy8gZXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRzLm5ld1Jhd1JTU0lNZWFzdXJlbWVudCwgcmVxLmJvZHkpXG4gICAgICAgIHJlcy5qc29uKHsgc3RhdHVzOiAyMDAgfSlcbiAgICB9KVxufSJdfQ==