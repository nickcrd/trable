"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = requireAuth;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _getTokenFromHeader = _interopRequireDefault(require("../../utils/getTokenFromHeader"));

var _AuthController = _interopRequireDefault(require("../../controllers/AuthController"));

var _GenericResponse = _interopRequireDefault(require("../../models/GenericResponse"));

function requireAuth(_x, _x2, _x3) {
  return _requireAuth.apply(this, arguments);
}

function _requireAuth() {
  _requireAuth = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = (0, _getTokenFromHeader["default"])(req);

            if (!(token == undefined)) {
              _context.next = 4;
              break;
            }

            res.status(401).json(new _GenericResponse["default"](401, "Unauthorized"));
            return _context.abrupt("return");

          case 4:
            _AuthController["default"].validateJWT(token).then(function (apiUser) {
              req.user = apiUser;
              next();
            })["catch"](function (err) {
              res.status(401).json(new _GenericResponse["default"](401, "Unauthorized"));
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _requireAuth.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy9hdXRoL3JlcXVpcmVBdXRoLnRzIl0sIm5hbWVzIjpbInJlcXVpcmVBdXRoIiwicmVxIiwicmVzIiwibmV4dCIsInRva2VuIiwidW5kZWZpbmVkIiwic3RhdHVzIiwianNvbiIsIkdlbmVyaWNSZXNwb25zZSIsIkF1dGhDb250cm9sbGVyIiwidmFsaWRhdGVKV1QiLCJ0aGVuIiwiYXBpVXNlciIsInVzZXIiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7U0FFOEJBLFc7Ozs7OytGQUFmLGlCQUEyQkMsR0FBM0IsRUFBeUNDLEdBQXpDLEVBQXdEQyxJQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTEMsWUFBQUEsS0FESyxHQUNHLG9DQUFtQkgsR0FBbkIsQ0FESDs7QUFBQSxrQkFFUEcsS0FBSyxJQUFJQyxTQUZGO0FBQUE7QUFBQTtBQUFBOztBQUdQSCxZQUFBQSxHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixJQUFJQywyQkFBSixDQUFvQixHQUFwQixFQUF5QixjQUF6QixDQUFyQjtBQUhPOztBQUFBO0FBT1hDLHVDQUFlQyxXQUFmLENBQTJCTixLQUEzQixFQUFrQ08sSUFBbEMsQ0FBdUMsVUFBQUMsT0FBTyxFQUFJO0FBQzlDWCxjQUFBQSxHQUFHLENBQUNZLElBQUosR0FBV0QsT0FBWDtBQUNBVCxjQUFBQSxJQUFJO0FBQ1AsYUFIRCxXQUdTLFVBQUFXLEdBQUcsRUFBSTtBQUNaWixjQUFBQSxHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixJQUFJQywyQkFBSixDQUFvQixHQUFwQixFQUF5QixjQUF6QixDQUFyQjtBQUNILGFBTEQ7O0FBUFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGdldFRva2VuRnJvbUhlYWRlciBmcm9tIFwiLi4vLi4vdXRpbHMvZ2V0VG9rZW5Gcm9tSGVhZGVyXCI7XG5pbXBvcnQgQXV0aENvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJzL0F1dGhDb250cm9sbGVyXCI7XG5pbXBvcnQgR2VuZXJpY1Jlc3BvbnNlIGZyb20gXCIuLi8uLi9tb2RlbHMvR2VuZXJpY1Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVBdXRoKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XG4gICAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbkZyb21IZWFkZXIocmVxKVxuICAgIGlmICh0b2tlbiA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24obmV3IEdlbmVyaWNSZXNwb25zZSg0MDEsIFwiVW5hdXRob3JpemVkXCIpKVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQXV0aENvbnRyb2xsZXIudmFsaWRhdGVKV1QodG9rZW4pLnRoZW4oYXBpVXNlciA9PiB7XG4gICAgICAgIHJlcS51c2VyID0gYXBpVXNlclxuICAgICAgICBuZXh0KClcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDQwMSkuanNvbihuZXcgR2VuZXJpY1Jlc3BvbnNlKDQwMSwgXCJVbmF1dGhvcml6ZWRcIikpXG4gICAgfSlcbn0iXX0=