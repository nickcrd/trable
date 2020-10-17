"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _DeviceController = _interopRequireDefault(require("../../controllers/DeviceController"));

var _GenericResponse = _interopRequireDefault(require("../../models/GenericResponse"));

var _requireAuth = _interopRequireDefault(require("../../middlewares/auth/requireAuth"));

var _requirePermission = _interopRequireDefault(require("../../middlewares/auth/requirePermission"));

var _celebrate2 = require("celebrate");

var _permission = _interopRequireDefault(require("../../utils/permission"));

var _logger = _interopRequireDefault(require("../../utils/logger"));

/* ... */
var _default = function _default(router) {
  router.post('/enrollNode', [_requireAuth["default"], (0, _requirePermission["default"])(_permission["default"].admin.enrollNodes), (0, _celebrate2.celebrate)((0, _defineProperty2["default"])({}, _celebrate2.Segments.BODY, {
    displayName: _celebrate2.Joi.string().required(),
    location: _celebrate2.Joi.object({
      x: _celebrate2.Joi.number().required(),
      y: _celebrate2.Joi.number().required(),
      z: _celebrate2.Joi.number().required()
    }).required()
  }))], /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var result;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _DeviceController["default"].createApiUserForNode(req.body.displayName, req.body.location);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGV2aWNlL2Vucm9sbE5vZGUudHMiXSwibmFtZXMiOlsicm91dGVyIiwicG9zdCIsInJlcXVpcmVBdXRoIiwicGVybWlzc2lvbiIsImFkbWluIiwiZW5yb2xsTm9kZXMiLCJTZWdtZW50cyIsIkJPRFkiLCJkaXNwbGF5TmFtZSIsIkpvaSIsInN0cmluZyIsInJlcXVpcmVkIiwibG9jYXRpb24iLCJvYmplY3QiLCJ4IiwibnVtYmVyIiwieSIsInoiLCJyZXEiLCJyZXMiLCJEZXZpY2VDb250cm9sbGVyIiwiY3JlYXRlQXBpVXNlckZvck5vZGUiLCJib2R5IiwicmVzdWx0IiwianNvbiIsInN0YXR1cyIsIkdlbmVyaWNSZXNwb25zZSIsInRvU3RyaW5nIiwibG9nZ2VyIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBO2VBQ2Usa0JBQUNBLE1BQUQsRUFBb0I7QUFDL0JBLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGFBQVosRUFBMkIsQ0FDdkJDLHVCQUR1QixFQUV2QixtQ0FBa0JDLHVCQUFXQyxLQUFYLENBQWlCQyxXQUFuQyxDQUZ1QixFQUd2QixnRUFDS0MscUJBQVNDLElBRGQsRUFDcUI7QUFDYkMsSUFBQUEsV0FBVyxFQUFFQyxnQkFBSUMsTUFBSixHQUFhQyxRQUFiLEVBREE7QUFFYkMsSUFBQUEsUUFBUSxFQUFFSCxnQkFBSUksTUFBSixDQUFXO0FBQ2pCQyxNQUFBQSxDQUFDLEVBQUVMLGdCQUFJTSxNQUFKLEdBQWFKLFFBQWIsRUFEYztBQUVqQkssTUFBQUEsQ0FBQyxFQUFFUCxnQkFBSU0sTUFBSixHQUFhSixRQUFiLEVBRmM7QUFHakJNLE1BQUFBLENBQUMsRUFBRVIsZ0JBQUlNLE1BQUosR0FBYUosUUFBYjtBQUhjLEtBQVgsRUFJUEEsUUFKTztBQUZHLEdBRHJCLEVBSHVCLENBQTNCO0FBQUEsNkZBYUcsaUJBQU9PLEdBQVAsRUFBcUJDLEdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFMEJDLDZCQUFpQkMsb0JBQWpCLENBQXNDSCxHQUFHLENBQUNJLElBQUosQ0FBU2QsV0FBL0MsRUFBNERVLEdBQUcsQ0FBQ0ksSUFBSixDQUFTVixRQUFyRSxDQUYxQjs7QUFBQTtBQUVXVyxjQUFBQSxNQUZYO0FBR0tKLGNBQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTRCxNQUFUO0FBSEw7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFLS0osY0FBQUEsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkQsSUFBaEIsQ0FBcUIsSUFBSUUsMkJBQUosQ0FBb0IsR0FBcEIsRUFBeUIsWUFBTUMsUUFBTixFQUF6QixDQUFyQjs7QUFDQUMsaUNBQU9DLEtBQVAsQ0FBYSxrREFBYjs7QUFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWJIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBc0JILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgUm91dGVyIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBEZXZpY2VDb250cm9sbGVyIGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9EZXZpY2VDb250cm9sbGVyXCI7XG5pbXBvcnQgR2VuZXJpY1Jlc3BvbnNlIGZyb20gXCIuLi8uLi9tb2RlbHMvR2VuZXJpY1Jlc3BvbnNlXCI7XG5pbXBvcnQgcmVxdWlyZUF1dGggZnJvbSBcIi4uLy4uL21pZGRsZXdhcmVzL2F1dGgvcmVxdWlyZUF1dGhcIjtcbmltcG9ydCByZXF1aXJlUGVybWlzc2lvbiBmcm9tIFwiLi4vLi4vbWlkZGxld2FyZXMvYXV0aC9yZXF1aXJlUGVybWlzc2lvblwiO1xuaW1wb3J0IHtjZWxlYnJhdGUsIEpvaSwgU2VnbWVudHN9IGZyb20gXCJjZWxlYnJhdGVcIjtcbmltcG9ydCBwZXJtaXNzaW9uIGZyb20gXCIuLi8uLi91dGlscy9wZXJtaXNzaW9uXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCIuLi8uLi91dGlscy9sb2dnZXJcIjtcblxuLyogLi4uICovXG5leHBvcnQgZGVmYXVsdCAocm91dGVyOiBSb3V0ZXIpID0+IHtcbiAgICByb3V0ZXIucG9zdCgnL2Vucm9sbE5vZGUnLCBbXG4gICAgICAgIHJlcXVpcmVBdXRoLFxuICAgICAgICByZXF1aXJlUGVybWlzc2lvbihwZXJtaXNzaW9uLmFkbWluLmVucm9sbE5vZGVzKSxcbiAgICAgICAgY2VsZWJyYXRlKHtcbiAgICAgICAgICAgIFtTZWdtZW50cy5CT0RZXToge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogSm9pLm9iamVjdCh7XG4gICAgICAgICAgICAgICAgICAgIHg6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgICAgICAgICB5OiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgICAgICAgICAgejogSm9pLm51bWJlcigpLnJlcXVpcmVkKClcbiAgICAgICAgICAgICAgICB9KS5yZXF1aXJlZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgXSwgYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRGV2aWNlQ29udHJvbGxlci5jcmVhdGVBcGlVc2VyRm9yTm9kZShyZXEuYm9keS5kaXNwbGF5TmFtZSwgcmVxLmJvZHkubG9jYXRpb24pXG4gICAgICAgICAgICByZXMuanNvbihyZXN1bHQpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihuZXcgR2VuZXJpY1Jlc3BvbnNlKDUwMCwgZXJyb3IudG9TdHJpbmcoKSkpXG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgcmVxdWVzdDogXCIgKyBlcnJvcilcbiAgICAgICAgfVxuICAgIH0pXG59Il19