"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AuthController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var jwt = _interopRequireWildcard(require("jsonwebtoken"));

var _TrableApiUserModel = _interopRequireDefault(require("../models/auth/TrableApiUserModel"));

var _nodeConfigTs = require("node-config-ts");

var AuthController = /*#__PURE__*/function () {
  function AuthController(JWT_SECRET) {
    (0, _classCallCheck2["default"])(this, AuthController);
    (0, _defineProperty2["default"])(this, "JWT_SECRET", void 0);
    this.JWT_SECRET = JWT_SECRET;
  }

  (0, _createClass2["default"])(AuthController, [{
    key: "generateJWTfor",
    value: function () {
      var _generateJWTfor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(user) {
        var _this = this;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  jwt.sign({
                    id: user._id,
                    iat: user.tokenLastIssued
                  }, _this.JWT_SECRET, function (err, encoded) {
                    if (encoded) {
                      resolve(encoded);
                    }

                    reject(err);
                  });
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function generateJWTfor(_x) {
        return _generateJWTfor.apply(this, arguments);
      }

      return generateJWTfor;
    }()
  }, {
    key: "verifyAndDecodeJWT",
    value: function () {
      var _verifyAndDecodeJWT = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(token) {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  jwt.verify(token, _this2.JWT_SECRET, {
                    algorithms: ["HS256"]
                  }, function (err, decoded) {
                    if (decoded) {
                      resolve(decoded);
                    }

                    reject(err);
                  });
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function verifyAndDecodeJWT(_x2) {
        return _verifyAndDecodeJWT.apply(this, arguments);
      }

      return verifyAndDecodeJWT;
    }()
  }, {
    key: "validateJWTFields",
    value: function validateJWTFields(token) {
      if (Object.prototype.hasOwnProperty.call(token, "id") && Object.prototype.hasOwnProperty.call(token, "iat")) {
        return true;
      } else {
        throw new Error("Fields are missing in JWT");
      }
    }
  }, {
    key: "validateIssueTime",
    value: function validateIssueTime(token, apiUser) {
      if (Object.prototype.hasOwnProperty.call(token, "iat") && typeof token.iat === 'number') {
        var iat = token.iat;
        return apiUser.tokenLastIssued === iat;
      }

      return false;
    }
  }, {
    key: "getUserFromJWT",
    value: function () {
      var _getUserFromJWT = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(token) {
        var apiUser, isValid;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _TrableApiUserModel["default"].findById(token.id);

              case 2:
                apiUser = _context3.sent;

                if (!(apiUser == null)) {
                  _context3.next = 5;
                  break;
                }

                throw new Error("TrableAPIUser for id " + token.id + " is null");

              case 5:
                isValid = this.validateIssueTime(token, apiUser);

                if (isValid) {
                  _context3.next = 8;
                  break;
                }

                throw new Error("The token was revoked or doesn't match with the issued timestamp stored");

              case 8:
                return _context3.abrupt("return", apiUser);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getUserFromJWT(_x3) {
        return _getUserFromJWT.apply(this, arguments);
      }

      return getUserFromJWT;
    }()
  }, {
    key: "validateJWT",
    value: function () {
      var _validateJWT = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(token) {
        var decodedToken;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.verifyAndDecodeJWT(token);

              case 2:
                decodedToken = _context4.sent;
                this.validateJWTFields(decodedToken);
                _context4.next = 6;
                return this.getUserFromJWT(decodedToken);

              case 6:
                return _context4.abrupt("return", _context4.sent);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function validateJWT(_x4) {
        return _validateJWT.apply(this, arguments);
      }

      return validateJWT;
    }()
  }]);
  return AuthController;
}();

exports.AuthController = AuthController;

var _default = new AuthController(_nodeConfigTs.config.authSecret);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9BdXRoQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJBdXRoQ29udHJvbGxlciIsIkpXVF9TRUNSRVQiLCJ1c2VyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJqd3QiLCJzaWduIiwiaWQiLCJfaWQiLCJpYXQiLCJ0b2tlbkxhc3RJc3N1ZWQiLCJlcnIiLCJlbmNvZGVkIiwidG9rZW4iLCJ2ZXJpZnkiLCJhbGdvcml0aG1zIiwiZGVjb2RlZCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkVycm9yIiwiYXBpVXNlciIsIlRyYWJsZUFwaVVzZXJNb2RlbCIsImZpbmRCeUlkIiwiaXNWYWxpZCIsInZhbGlkYXRlSXNzdWVUaW1lIiwidmVyaWZ5QW5kRGVjb2RlSldUIiwiZGVjb2RlZFRva2VuIiwidmFsaWRhdGVKV1RGaWVsZHMiLCJnZXRVc2VyRnJvbUpXVCIsImNvbmZpZyIsImF1dGhTZWNyZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUdBOztJQUVhQSxjO0FBR1QsMEJBQVlDLFVBQVosRUFBZ0M7QUFBQTtBQUFBO0FBQzVCLFNBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0g7Ozs7OzJIQUUyQkMsSTs7Ozs7OztpREFDakIsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ0Msa0JBQUFBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTO0FBQUVDLG9CQUFBQSxFQUFFLEVBQUVOLElBQUksQ0FBQ08sR0FBWDtBQUFnQkMsb0JBQUFBLEdBQUcsRUFBRVIsSUFBSSxDQUFDUztBQUExQixtQkFBVCxFQUFzRCxLQUFJLENBQUNWLFVBQTNELEVBQXVFLFVBQUVXLEdBQUYsRUFBcUJDLE9BQXJCLEVBQXFEO0FBQ3hILHdCQUFJQSxPQUFKLEVBQWE7QUFDVFQsc0JBQUFBLE9BQU8sQ0FBQ1MsT0FBRCxDQUFQO0FBQ0g7O0FBQ0RSLG9CQUFBQSxNQUFNLENBQUNPLEdBQUQsQ0FBTjtBQUNILG1CQUxEO0FBTUgsaUJBUE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnSUFVcUJFLEs7Ozs7Ozs7a0RBQ3JCLElBQUlYLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENDLGtCQUFBQSxHQUFHLENBQUNTLE1BQUosQ0FBV0QsS0FBWCxFQUFrQixNQUFJLENBQUNiLFVBQXZCLEVBQW1DO0FBQUVlLG9CQUFBQSxVQUFVLEVBQUUsQ0FBRSxPQUFGO0FBQWQsbUJBQW5DLEVBQStELFVBQUNKLEdBQUQsRUFBTUssT0FBTixFQUFrQjtBQUM3RSx3QkFBSUEsT0FBSixFQUFhO0FBQ1RiLHNCQUFBQSxPQUFPLENBQUNhLE9BQUQsQ0FBUDtBQUNIOztBQUNEWixvQkFBQUEsTUFBTSxDQUFDTyxHQUFELENBQU47QUFDSCxtQkFMRDtBQU1ILGlCQVBNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FVY0UsSyxFQUFxQjtBQUMxQyxVQUFJSSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ1AsS0FBckMsRUFBNEMsSUFBNUMsS0FDQUksTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNQLEtBQXJDLEVBQTRDLEtBQTVDLENBREosRUFDd0Q7QUFDcEQsZUFBTyxJQUFQO0FBQ0gsT0FIRCxNQUdPO0FBQ0gsY0FBTSxJQUFJUSxLQUFKLENBQVUsMkJBQVYsQ0FBTjtBQUNIO0FBQ0o7OztzQ0FFeUJSLEssRUFBWVMsTyxFQUFpQztBQUNuRSxVQUFJTCxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ1AsS0FBckMsRUFBMkMsS0FBM0MsS0FBc0QsT0FBT0EsS0FBSyxDQUFDSixHQUFiLEtBQXFCLFFBQS9FLEVBQTBGO0FBQ3RGLFlBQU1BLEdBQVcsR0FBR0ksS0FBSyxDQUFDSixHQUExQjtBQUNBLGVBQU9hLE9BQU8sQ0FBQ1osZUFBUixLQUE0QkQsR0FBbkM7QUFDSDs7QUFDRCxhQUFPLEtBQVA7QUFDSDs7Ozs0SEFFMkJJLEs7Ozs7Ozs7dUJBQ0ZVLCtCQUFtQkMsUUFBbkIsQ0FBNEJYLEtBQUssQ0FBQ04sRUFBbEMsQzs7O0FBQWhCZSxnQkFBQUEsTzs7c0JBQ0ZBLE9BQU8sSUFBSSxJOzs7OztzQkFDTCxJQUFJRCxLQUFKLENBQVUsMEJBQTBCUixLQUFLLENBQUNOLEVBQWhDLEdBQXFDLFVBQS9DLEM7OztBQUdKa0IsZ0JBQUFBLE8sR0FBVSxLQUFLQyxpQkFBTCxDQUF1QmIsS0FBdkIsRUFBOEJTLE9BQTlCLEM7O29CQUNYRyxPOzs7OztzQkFDSyxJQUFJSixLQUFKLENBQVUseUVBQVYsQzs7O2tEQUdIQyxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lIQUdjVCxLOzs7Ozs7O3VCQUNNLEtBQUtjLGtCQUFMLENBQXdCZCxLQUF4QixDOzs7QUFBckJlLGdCQUFBQSxZO0FBQ04scUJBQUtDLGlCQUFMLENBQXVCRCxZQUF2Qjs7dUJBQ2EsS0FBS0UsY0FBTCxDQUFvQkYsWUFBcEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUlOLElBQUk3QixjQUFKLENBQW1CZ0MscUJBQU9DLFVBQTFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IFRyYWJsZUFwaVVzZXJNb2RlbCwge1RyYWJsZUFwaVVzZXJ9IGZyb20gXCIuLi9tb2RlbHMvYXV0aC9UcmFibGVBcGlVc2VyTW9kZWxcIjtcbmltcG9ydCB7VHJhYmxlRW50aXR5VHlwZX0gZnJvbSBcIi4uL21vZGVscy9hdXRoL1RyYWJsZUVudGl0eVR5cGVcIjtcbmltcG9ydCBhcHAgZnJvbSBcIi4uL2FwcFwiO1xuaW1wb3J0IHtjb25maWd9IGZyb20gXCJub2RlLWNvbmZpZy10c1wiO1xuXG5leHBvcnQgY2xhc3MgQXV0aENvbnRyb2xsZXIge1xuICAgIHByaXZhdGUgSldUX1NFQ1JFVDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoSldUX1NFQ1JFVDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuSldUX1NFQ1JFVCA9IEpXVF9TRUNSRVRcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2VuZXJhdGVKV1Rmb3IodXNlcjogVHJhYmxlQXBpVXNlcik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBqd3Quc2lnbih7IGlkOiB1c2VyLl9pZCwgaWF0OiB1c2VyLnRva2VuTGFzdElzc3VlZCB9LCB0aGlzLkpXVF9TRUNSRVQsICggZXJyOiBFcnJvciB8IG51bGwsIGVuY29kZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbmNvZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZW5jb2RlZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHZlcmlmeUFuZERlY29kZUpXVCh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGp3dC52ZXJpZnkodG9rZW4sIHRoaXMuSldUX1NFQ1JFVCwgeyBhbGdvcml0aG1zOiBbIFwiSFMyNTZcIiBdfSwgKGVyciwgZGVjb2RlZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkZWNvZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGVjb2RlZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIHZhbGlkYXRlSldURmllbGRzKHRva2VuOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0b2tlbiwgXCJpZFwiKSAmJlxuICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRva2VuLCBcImlhdFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaWVsZHMgYXJlIG1pc3NpbmcgaW4gSldUXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHZhbGlkYXRlSXNzdWVUaW1lKHRva2VuOiBhbnksIGFwaVVzZXI6IFRyYWJsZUFwaVVzZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0b2tlbixcImlhdFwiKSAmJiAodHlwZW9mIHRva2VuLmlhdCA9PT0gJ251bWJlcicpKSB7XG4gICAgICAgICAgICBjb25zdCBpYXQ6IG51bWJlciA9IHRva2VuLmlhdFxuICAgICAgICAgICAgcmV0dXJuIGFwaVVzZXIudG9rZW5MYXN0SXNzdWVkID09PSBpYXRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldFVzZXJGcm9tSldUKHRva2VuOiBhbnkpOiBQcm9taXNlPFRyYWJsZUFwaVVzZXI+IHtcbiAgICAgICAgY29uc3QgYXBpVXNlciA9IGF3YWl0IFRyYWJsZUFwaVVzZXJNb2RlbC5maW5kQnlJZCh0b2tlbi5pZClcbiAgICAgICAgaWYgKGFwaVVzZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVHJhYmxlQVBJVXNlciBmb3IgaWQgXCIgKyB0b2tlbi5pZCArIFwiIGlzIG51bGxcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLnZhbGlkYXRlSXNzdWVUaW1lKHRva2VuLCBhcGlVc2VyKVxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSB0b2tlbiB3YXMgcmV2b2tlZCBvciBkb2Vzbid0IG1hdGNoIHdpdGggdGhlIGlzc3VlZCB0aW1lc3RhbXAgc3RvcmVkXCIpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXBpVXNlclxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB2YWxpZGF0ZUpXVCh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxUcmFibGVBcGlVc2VyPiB7XG4gICAgICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGF3YWl0IHRoaXMudmVyaWZ5QW5kRGVjb2RlSldUKHRva2VuKVxuICAgICAgICB0aGlzLnZhbGlkYXRlSldURmllbGRzKGRlY29kZWRUb2tlbilcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0VXNlckZyb21KV1QoZGVjb2RlZFRva2VuKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEF1dGhDb250cm9sbGVyKGNvbmZpZy5hdXRoU2VjcmV0KSJdfQ==