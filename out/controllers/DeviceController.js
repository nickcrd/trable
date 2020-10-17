"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DeviceController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _TrableApiUserModel = _interopRequireDefault(require("../models/auth/TrableApiUserModel"));

var _TrableEntityType = require("../models/auth/TrableEntityType");

var _currentEpochSeconds = _interopRequireDefault(require("../utils/currentEpochSeconds"));

var _AuthController = _interopRequireDefault(require("./AuthController"));

var _BLENodeModel = _interopRequireDefault(require("../models/device/BLENodeModel"));

var _permission = _interopRequireDefault(require("../utils/permission"));

var _hashIdUtil = require("../utils/hashIdUtil");

var _logger = _interopRequireDefault(require("../utils/logger"));

var DeviceController = /*#__PURE__*/function () {
  function DeviceController() {
    (0, _classCallCheck2["default"])(this, DeviceController);
    (0, _defineProperty2["default"])(this, "bleNodeCache", new Map());
    (0, _defineProperty2["default"])(this, "DEFAULT_CLIENT_PERMS", []);
    (0, _defineProperty2["default"])(this, "DEFAULT_NODE_PERMS", [_permission["default"].sensor.submitRSSI]);
    (0, _defineProperty2["default"])(this, "apiUserNodeIdCache", new Map());
  }

  (0, _createClass2["default"])(DeviceController, [{
    key: "createApiUserForClient",
    value: function () {
      var _createApiUserForClient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var apiUser, apiKey, bleAdvertisementId;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _TrableApiUserModel["default"].create({
                  entityType: _TrableEntityType.TrableEntityType.CLIENT,
                  permissions: this.DEFAULT_CLIENT_PERMS,
                  tokenLastIssued: (0, _currentEpochSeconds["default"])()
                });

              case 2:
                apiUser = _context.sent;
                _context.next = 5;
                return _AuthController["default"].generateJWTfor(apiUser);

              case 5:
                apiKey = _context.sent;
                // Need to do + "" so it's a string even when built to plain js, otherwise hashids will throw an error
                bleAdvertisementId = _hashIdUtil.hashids.encodeHex(apiUser._id + "");
                return _context.abrupt("return", {
                  clientId: apiUser._id,
                  bleAdvertisementId: bleAdvertisementId,
                  apiKey: apiKey
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createApiUserForClient() {
        return _createApiUserForClient.apply(this, arguments);
      }

      return createApiUserForClient;
    }()
  }, {
    key: "createApiUserForNode",
    value: function () {
      var _createApiUserForNode = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(displayName, location) {
        var apiUser, bleNode, apiKey;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _TrableApiUserModel["default"].create({
                  entityType: _TrableEntityType.TrableEntityType.NODE,
                  permissions: this.DEFAULT_NODE_PERMS,
                  tokenLastIssued: (0, _currentEpochSeconds["default"])()
                });

              case 2:
                apiUser = _context2.sent;
                _context2.next = 5;
                return _BLENodeModel["default"].create({
                  displayName: displayName,
                  location: location,
                  apiUserId: apiUser._id
                });

              case 5:
                bleNode = _context2.sent;
                _context2.next = 8;
                return _AuthController["default"].generateJWTfor(apiUser);

              case 8:
                apiKey = _context2.sent;
                return _context2.abrupt("return", {
                  nodeId: bleNode.id,
                  apiKey: apiKey
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createApiUserForNode(_x, _x2) {
        return _createApiUserForNode.apply(this, arguments);
      }

      return createApiUserForNode;
    }()
  }, {
    key: "getNodeFromCache",
    value: function () {
      var _getNodeFromCache = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        var bleNode;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.bleNodeCache.has(id)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", this.bleNodeCache.get(id));

              case 2:
                _context3.next = 4;
                return _BLENodeModel["default"].findById(id).exec();

              case 4:
                bleNode = _context3.sent;

                if (bleNode) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt("return", undefined);

              case 9:
                return _context3.abrupt("return", bleNode);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getNodeFromCache(_x3) {
        return _getNodeFromCache.apply(this, arguments);
      }

      return getNodeFromCache;
    }()
  }, {
    key: "getNodeFromApiUserId",
    value: function () {
      var _getNodeFromApiUserId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(apiUserId) {
        var nodeId, bleNode;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.apiUserNodeIdCache.has(apiUserId)) {
                  _context4.next = 3;
                  break;
                }

                nodeId = this.apiUserNodeIdCache.get(apiUserId);
                return _context4.abrupt("return", this.getNodeFromCache(nodeId));

              case 3:
                _context4.next = 5;
                return _BLENodeModel["default"].findOne({
                  apiUserId: apiUserId
                }).exec();

              case 5:
                bleNode = _context4.sent;

                if (!(bleNode == null)) {
                  _context4.next = 9;
                  break;
                }

                _logger["default"].warn("Invalid Measurement Received: There is no BLENode corresponding to the API Client ID");

                return _context4.abrupt("return");

              case 9:
                this.apiUserNodeIdCache.set(apiUserId, bleNode.id);
                return _context4.abrupt("return", this.getNodeFromCache(apiUserId));

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getNodeFromApiUserId(_x4) {
        return _getNodeFromApiUserId.apply(this, arguments);
      }

      return getNodeFromApiUserId;
    }()
  }]);
  return DeviceController;
}();

exports.DeviceController = DeviceController;

var _default = new DeviceController();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9EZXZpY2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIkRldmljZUNvbnRyb2xsZXIiLCJNYXAiLCJwZXJtaXNzaW9uIiwic2Vuc29yIiwic3VibWl0UlNTSSIsIlRyYWJsZUFwaVVzZXJNb2RlbCIsImNyZWF0ZSIsImVudGl0eVR5cGUiLCJUcmFibGVFbnRpdHlUeXBlIiwiQ0xJRU5UIiwicGVybWlzc2lvbnMiLCJERUZBVUxUX0NMSUVOVF9QRVJNUyIsInRva2VuTGFzdElzc3VlZCIsImFwaVVzZXIiLCJBdXRoQ29udHJvbGxlciIsImdlbmVyYXRlSldUZm9yIiwiYXBpS2V5IiwiYmxlQWR2ZXJ0aXNlbWVudElkIiwiaGFzaGlkcyIsImVuY29kZUhleCIsIl9pZCIsImNsaWVudElkIiwiZGlzcGxheU5hbWUiLCJsb2NhdGlvbiIsIk5PREUiLCJERUZBVUxUX05PREVfUEVSTVMiLCJCTEVOb2RlTW9kZWwiLCJhcGlVc2VySWQiLCJibGVOb2RlIiwibm9kZUlkIiwiaWQiLCJibGVOb2RlQ2FjaGUiLCJoYXMiLCJnZXQiLCJmaW5kQnlJZCIsImV4ZWMiLCJ1bmRlZmluZWQiLCJhcGlVc2VyTm9kZUlkQ2FjaGUiLCJnZXROb2RlRnJvbUNhY2hlIiwiZmluZE9uZSIsImxvZ2dlciIsIndhcm4iLCJzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFFQTs7QUFDQTs7QUFDQTs7SUFFYUEsZ0I7OzsyREFFb0MsSUFBSUMsR0FBSixFO21FQUVKLEU7aUVBQ0YsQ0FBQ0MsdUJBQVdDLE1BQVgsQ0FBa0JDLFVBQW5CLEM7aUVBMERXLElBQUlILEdBQUosRTs7Ozs7Ozs7Ozs7Ozt1QkF0RHhCSSwrQkFBbUJDLE1BQW5CLENBQTBCO0FBQzVDQyxrQkFBQUEsVUFBVSxFQUFFQyxtQ0FBaUJDLE1BRGU7QUFFNUNDLGtCQUFBQSxXQUFXLEVBQUUsS0FBS0Msb0JBRjBCO0FBRzVDQyxrQkFBQUEsZUFBZSxFQUFFO0FBSDJCLGlCQUExQixDOzs7QUFBaEJDLGdCQUFBQSxPOzt1QkFNZUMsMkJBQWVDLGNBQWYsQ0FBOEJGLE9BQTlCLEM7OztBQUFmRyxnQkFBQUEsTTtBQUVOO0FBQ01DLGdCQUFBQSxrQixHQUFxQkMsb0JBQVFDLFNBQVIsQ0FBa0JOLE9BQU8sQ0FBQ08sR0FBUixHQUFjLEVBQWhDLEM7aURBRXBCO0FBQ0hDLGtCQUFBQSxRQUFRLEVBQUVSLE9BQU8sQ0FBQ08sR0FEZjtBQUVISCxrQkFBQUEsa0JBQWtCLEVBQUVBLGtCQUZqQjtBQUdIRCxrQkFBQUEsTUFBTSxFQUFFQTtBQUhMLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tJQU91Qk0sVyxFQUFxQkMsUTs7Ozs7Ozt1QkFDN0JsQiwrQkFBbUJDLE1BQW5CLENBQTBCO0FBQzVDQyxrQkFBQUEsVUFBVSxFQUFFQyxtQ0FBaUJnQixJQURlO0FBRTVDZCxrQkFBQUEsV0FBVyxFQUFFLEtBQUtlLGtCQUYwQjtBQUc1Q2Isa0JBQUFBLGVBQWUsRUFBRTtBQUgyQixpQkFBMUIsQzs7O0FBQWhCQyxnQkFBQUEsTzs7dUJBTWdCYSx5QkFBYXBCLE1BQWIsQ0FBb0I7QUFDdENnQixrQkFBQUEsV0FBVyxFQUFFQSxXQUR5QjtBQUV0Q0Msa0JBQUFBLFFBQVEsRUFBRUEsUUFGNEI7QUFHdENJLGtCQUFBQSxTQUFTLEVBQUVkLE9BQU8sQ0FBQ087QUFIbUIsaUJBQXBCLEM7OztBQUFoQlEsZ0JBQUFBLE87O3VCQU1lZCwyQkFBZUMsY0FBZixDQUE4QkYsT0FBOUIsQzs7O0FBQWZHLGdCQUFBQSxNO2tEQUVDO0FBQ0hhLGtCQUFBQSxNQUFNLEVBQUVELE9BQU8sQ0FBQ0UsRUFEYjtBQUVIZCxrQkFBQUEsTUFBTSxFQUFFQTtBQUZMLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhIQU1tQmMsRTs7Ozs7O3FCQUN0QixLQUFLQyxZQUFMLENBQWtCQyxHQUFsQixDQUFzQkYsRUFBdEIsQzs7Ozs7a0RBQ08sS0FBS0MsWUFBTCxDQUFrQkUsR0FBbEIsQ0FBc0JILEVBQXRCLEM7Ozs7dUJBR1dKLHlCQUFhUSxRQUFiLENBQXNCSixFQUF0QixFQUEwQkssSUFBMUIsRTs7O0FBQWhCUCxnQkFBQUEsTzs7b0JBQ0RBLE87Ozs7O2tEQUNNUSxTOzs7a0RBRUFSLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0lBUW1CRCxTOzs7Ozs7cUJBQzFCLEtBQUtVLGtCQUFMLENBQXdCTCxHQUF4QixDQUE0QkwsU0FBNUIsQzs7Ozs7QUFDTUUsZ0JBQUFBLE0sR0FBUyxLQUFLUSxrQkFBTCxDQUF3QkosR0FBeEIsQ0FBNEJOLFNBQTVCLEM7a0RBQ1IsS0FBS1csZ0JBQUwsQ0FBc0JULE1BQXRCLEM7Ozs7dUJBR1dILHlCQUFhYSxPQUFiLENBQXFCO0FBQUNaLGtCQUFBQSxTQUFTLEVBQUVBO0FBQVosaUJBQXJCLEVBQTZDUSxJQUE3QyxFOzs7QUFBaEJQLGdCQUFBQSxPOztzQkFDRkEsT0FBTyxJQUFJLEk7Ozs7O0FBQ1hZLG1DQUFPQyxJQUFQLENBQVksc0ZBQVo7Ozs7O0FBSUoscUJBQUtKLGtCQUFMLENBQXdCSyxHQUF4QixDQUE0QmYsU0FBNUIsRUFBdUNDLE9BQU8sQ0FBQ0UsRUFBL0M7a0RBQ08sS0FBS1EsZ0JBQUwsQ0FBc0JYLFNBQXRCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFHQSxJQUFJM0IsZ0JBQUosRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFibGVBcGlVc2VyTW9kZWwsIHtUcmFibGVBcGlVc2VyLCBUcmFibGVBcGlVc2VyU2NoZW1hfSBmcm9tIFwiLi4vbW9kZWxzL2F1dGgvVHJhYmxlQXBpVXNlck1vZGVsXCI7XG5pbXBvcnQge1RyYWJsZUVudGl0eVR5cGV9IGZyb20gXCIuLi9tb2RlbHMvYXV0aC9UcmFibGVFbnRpdHlUeXBlXCI7XG5pbXBvcnQgY3VycmVudEVwb2NoU2Vjb25kcyBmcm9tIFwiLi4vdXRpbHMvY3VycmVudEVwb2NoU2Vjb25kc1wiO1xuaW1wb3J0IEF1dGhDb250cm9sbGVyIGZyb20gXCIuL0F1dGhDb250cm9sbGVyXCI7XG5pbXBvcnQge0NsaWVudEVucm9sbG1lbnRSZXNwb25zZX0gZnJvbSBcIi4uL21vZGVscy9kZXZpY2UvQ2xpZW50RW5yb2xsbWVudFJlc3BvbnNlXCI7XG5pbXBvcnQge05vZGVFbnJvbGxtZW50UmVzcG9uc2V9IGZyb20gXCIuLi9tb2RlbHMvZGV2aWNlL05vZGVFbnJvbGxtZW50UmVzcG9uc2VcIjtcbmltcG9ydCBCTEVOb2RlTW9kZWwsIHtCTEVOb2RlfSBmcm9tIFwiLi4vbW9kZWxzL2RldmljZS9CTEVOb2RlTW9kZWxcIjtcbmltcG9ydCBMb2NhdGlvbiBmcm9tIFwiLi4vbW9kZWxzL2RldmljZS9Mb2NhdGlvblwiO1xuaW1wb3J0IHBlcm1pc3Npb24gZnJvbSBcIi4uL3V0aWxzL3Blcm1pc3Npb25cIjtcbmltcG9ydCB7aGFzaGlkc30gZnJvbSBcIi4uL3V0aWxzL2hhc2hJZFV0aWxcIlxuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vdXRpbHMvbG9nZ2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBEZXZpY2VDb250cm9sbGVyIHtcblxuICAgIHByaXZhdGUgYmxlTm9kZUNhY2hlOiBNYXA8c3RyaW5nLCBCTEVOb2RlPiA9IG5ldyBNYXAoKVxuXG4gICAgcHJpdmF0ZSBERUZBVUxUX0NMSUVOVF9QRVJNUzogc3RyaW5nW10gPSBbXVxuICAgIHByaXZhdGUgREVGQVVMVF9OT0RFX1BFUk1TOiBzdHJpbmdbXSA9IFtwZXJtaXNzaW9uLnNlbnNvci5zdWJtaXRSU1NJXVxuXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUFwaVVzZXJGb3JDbGllbnQoKTogUHJvbWlzZTxDbGllbnRFbnJvbGxtZW50UmVzcG9uc2U+IHtcblxuICAgICAgICBjb25zdCBhcGlVc2VyID0gYXdhaXQgVHJhYmxlQXBpVXNlck1vZGVsLmNyZWF0ZSh7XG4gICAgICAgICAgICBlbnRpdHlUeXBlOiBUcmFibGVFbnRpdHlUeXBlLkNMSUVOVCxcbiAgICAgICAgICAgIHBlcm1pc3Npb25zOiB0aGlzLkRFRkFVTFRfQ0xJRU5UX1BFUk1TLFxuICAgICAgICAgICAgdG9rZW5MYXN0SXNzdWVkOiBjdXJyZW50RXBvY2hTZWNvbmRzKClcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBhcGlLZXkgPSBhd2FpdCBBdXRoQ29udHJvbGxlci5nZW5lcmF0ZUpXVGZvcihhcGlVc2VyKVxuXG4gICAgICAgIC8vIE5lZWQgdG8gZG8gKyBcIlwiIHNvIGl0J3MgYSBzdHJpbmcgZXZlbiB3aGVuIGJ1aWx0IHRvIHBsYWluIGpzLCBvdGhlcndpc2UgaGFzaGlkcyB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgICAgIGNvbnN0IGJsZUFkdmVydGlzZW1lbnRJZCA9IGhhc2hpZHMuZW5jb2RlSGV4KGFwaVVzZXIuX2lkICsgXCJcIilcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xpZW50SWQ6IGFwaVVzZXIuX2lkLFxuICAgICAgICAgICAgYmxlQWR2ZXJ0aXNlbWVudElkOiBibGVBZHZlcnRpc2VtZW50SWQsXG4gICAgICAgICAgICBhcGlLZXk6IGFwaUtleVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUFwaVVzZXJGb3JOb2RlKGRpc3BsYXlOYW1lOiBzdHJpbmcsIGxvY2F0aW9uOiBMb2NhdGlvbik6IFByb21pc2U8Tm9kZUVucm9sbG1lbnRSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCBhcGlVc2VyID0gYXdhaXQgVHJhYmxlQXBpVXNlck1vZGVsLmNyZWF0ZSh7XG4gICAgICAgICAgICBlbnRpdHlUeXBlOiBUcmFibGVFbnRpdHlUeXBlLk5PREUsXG4gICAgICAgICAgICBwZXJtaXNzaW9uczogdGhpcy5ERUZBVUxUX05PREVfUEVSTVMsXG4gICAgICAgICAgICB0b2tlbkxhc3RJc3N1ZWQ6IGN1cnJlbnRFcG9jaFNlY29uZHMoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGJsZU5vZGUgPSBhd2FpdCBCTEVOb2RlTW9kZWwuY3JlYXRlKHtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgICAgIGFwaVVzZXJJZDogYXBpVXNlci5faWRcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBhcGlLZXkgPSBhd2FpdCBBdXRoQ29udHJvbGxlci5nZW5lcmF0ZUpXVGZvcihhcGlVc2VyKVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBub2RlSWQ6IGJsZU5vZGUuaWQsXG4gICAgICAgICAgICBhcGlLZXk6IGFwaUtleVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldE5vZGVGcm9tQ2FjaGUoaWQ6IHN0cmluZyk6IFByb21pc2U8QkxFTm9kZSB8IHVuZGVmaW5lZD4ge1xuICAgICAgICBpZiAodGhpcy5ibGVOb2RlQ2FjaGUuaGFzKGlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmxlTm9kZUNhY2hlLmdldChpZClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJsZU5vZGUgPSBhd2FpdCBCTEVOb2RlTW9kZWwuZmluZEJ5SWQoaWQpLmV4ZWMoKVxuICAgICAgICBpZiAoIWJsZU5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBibGVOb2RlXG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBhcGlVc2VyTm9kZUlkQ2FjaGU6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwKClcblxuICAgIHB1YmxpYyBhc3luYyBnZXROb2RlRnJvbUFwaVVzZXJJZChhcGlVc2VySWQ6IHN0cmluZyk6IFByb21pc2U8QkxFTm9kZSB8IHVuZGVmaW5lZD4ge1xuICAgICAgICBpZiAodGhpcy5hcGlVc2VyTm9kZUlkQ2FjaGUuaGFzKGFwaVVzZXJJZCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVJZCA9IHRoaXMuYXBpVXNlck5vZGVJZENhY2hlLmdldChhcGlVc2VySWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXROb2RlRnJvbUNhY2hlKG5vZGVJZCEpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYmxlTm9kZSA9IGF3YWl0IEJMRU5vZGVNb2RlbC5maW5kT25lKHthcGlVc2VySWQ6IGFwaVVzZXJJZH0pLmV4ZWMoKVxuICAgICAgICBpZiAoYmxlTm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBsb2dnZXIud2FybihcIkludmFsaWQgTWVhc3VyZW1lbnQgUmVjZWl2ZWQ6IFRoZXJlIGlzIG5vIEJMRU5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgQVBJIENsaWVudCBJRFwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hcGlVc2VyTm9kZUlkQ2FjaGUuc2V0KGFwaVVzZXJJZCwgYmxlTm9kZS5pZClcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZUZyb21DYWNoZShhcGlVc2VySWQpXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IERldmljZUNvbnRyb2xsZXIoKSJdfQ==