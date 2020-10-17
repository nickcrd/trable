"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _logger = _interopRequireDefault(require("../utils/logger"));

var _DeviceController = _interopRequireDefault(require("./DeviceController"));

var _TrilaterationManager = _interopRequireDefault(require("../math/TrilaterationManager"));

var LocationController = /*#__PURE__*/function () {
  function LocationController() {
    (0, _classCallCheck2["default"])(this, LocationController);
  }

  (0, _createClass2["default"])(LocationController, [{
    key: "submitNewMeasurement",
    value: function () {
      var _submitNewMeasurement = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(apiUser, targetId, rssi1m, rssiMeasurements, pathLossParam, timestamp) {
        var bleNode;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _logger["default"].info("Received new RSSI measurements { " + "target: " + targetId + ", rssi1m: " + rssi1m + ", rssiMeasurements: " + rssiMeasurements + ", pathLossParam: " + pathLossParam + ",timestamp: " + timestamp + " }");

                _context.next = 3;
                return _DeviceController["default"].getNodeFromApiUserId(apiUser.id);

              case 3:
                bleNode = _context.sent;

                if (!(bleNode == null)) {
                  _context.next = 7;
                  break;
                }

                _logger["default"].warn("Invalid Measurement Batch Received: There is no BLENode corresponding to the API Client ID");

                return _context.abrupt("return");

              case 7:
                _TrilaterationManager["default"].handleNewMeasurement(bleNode, targetId, rssiMeasurements, rssi1m, pathLossParam, timestamp);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function submitNewMeasurement(_x, _x2, _x3, _x4, _x5, _x6) {
        return _submitNewMeasurement.apply(this, arguments);
      }

      return submitNewMeasurement;
    }()
  }]);
  return LocationController;
}();

var _default = new LocationController();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9Mb2NhdGlvbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiTG9jYXRpb25Db250cm9sbGVyIiwiYXBpVXNlciIsInRhcmdldElkIiwicnNzaTFtIiwicnNzaU1lYXN1cmVtZW50cyIsInBhdGhMb3NzUGFyYW0iLCJ0aW1lc3RhbXAiLCJsb2dnZXIiLCJpbmZvIiwiRGV2aWNlQ29udHJvbGxlciIsImdldE5vZGVGcm9tQXBpVXNlcklkIiwiaWQiLCJibGVOb2RlIiwid2FybiIsIlRyaWxhdGVyYXRpb25NYW5hZ2VyIiwiaGFuZGxlTmV3TWVhc3VyZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0lBRU1BLGtCOzs7Ozs7OztpSUFFZ0NDLE8sRUFBd0JDLFEsRUFBa0JDLE0sRUFBZ0JDLGdCLEVBQTRCQyxhLEVBQXVCQyxTOzs7Ozs7QUFDM0lDLG1DQUFPQyxJQUFQLENBQVksc0NBQXNDLFVBQXRDLEdBQW9ETixRQUFwRCxHQUErRCxZQUEvRCxHQUE4RUMsTUFBOUUsR0FBdUYsc0JBQXZGLEdBQWdIQyxnQkFBaEgsR0FBbUksbUJBQW5JLEdBQXlKQyxhQUF6SixHQUF5SyxjQUF6SyxHQUEwTEMsU0FBMUwsR0FBc00sSUFBbE47Ozt1QkFFc0JHLDZCQUFpQkMsb0JBQWpCLENBQXNDVCxPQUFPLENBQUNVLEVBQTlDLEM7OztBQUFoQkMsZ0JBQUFBLE87O3NCQUNGQSxPQUFPLElBQUksSTs7Ozs7QUFDWEwsbUNBQU9NLElBQVAsQ0FBWSw0RkFBWjs7Ozs7QUFJSkMsaURBQXFCQyxvQkFBckIsQ0FBMENILE9BQTFDLEVBQW1EVixRQUFuRCxFQUE2REUsZ0JBQTdELEVBQStFRCxNQUEvRSxFQUF1RkUsYUFBdkYsRUFBc0dDLFNBQXRHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUlPLElBQUlOLGtCQUFKLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4uL21vZGVscy9kZXZpY2UvTG9jYXRpb25cIjtcbmltcG9ydCBLYWxtYW5GaWx0ZXIgZnJvbSBcIi4uL3V0aWxzL0thbG1hbkZpbHRlclwiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vdXRpbHMvbG9nZ2VyXCI7XG5pbXBvcnQge1RyYWJsZUFwaVVzZXJ9IGZyb20gXCIuLi9tb2RlbHMvYXV0aC9UcmFibGVBcGlVc2VyTW9kZWxcIjtcbmltcG9ydCBEZXZpY2VDb250cm9sbGVyIGZyb20gXCIuL0RldmljZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBCTEVOb2RlTW9kZWwsIHtCTEVOb2RlfSBmcm9tIFwiLi4vbW9kZWxzL2RldmljZS9CTEVOb2RlTW9kZWxcIjtcbmltcG9ydCBUcmlsYXRlcmF0aW9uTWFuYWdlciBmcm9tIFwiLi4vbWF0aC9UcmlsYXRlcmF0aW9uTWFuYWdlclwiO1xuXG5jbGFzcyBMb2NhdGlvbkNvbnRyb2xsZXIge1xuXG4gICAgcHVibGljIGFzeW5jIHN1Ym1pdE5ld01lYXN1cmVtZW50KGFwaVVzZXI6IFRyYWJsZUFwaVVzZXIsIHRhcmdldElkOiBzdHJpbmcsIHJzc2kxbTogbnVtYmVyLCByc3NpTWVhc3VyZW1lbnRzOiBudW1iZXJbXSwgcGF0aExvc3NQYXJhbTogbnVtYmVyLCB0aW1lc3RhbXA/OiBudW1iZXIpIHtcbiAgICAgICAgbG9nZ2VyLmluZm8oXCJSZWNlaXZlZCBuZXcgUlNTSSBtZWFzdXJlbWVudHMgeyBcIiArIFwidGFyZ2V0OiBcIiArICB0YXJnZXRJZCArIFwiLCByc3NpMW06IFwiICsgcnNzaTFtICsgXCIsIHJzc2lNZWFzdXJlbWVudHM6IFwiICsgcnNzaU1lYXN1cmVtZW50cyArIFwiLCBwYXRoTG9zc1BhcmFtOiBcIiArIHBhdGhMb3NzUGFyYW0gKyBcIix0aW1lc3RhbXA6IFwiICsgdGltZXN0YW1wICsgXCIgfVwiKVxuXG4gICAgICAgIGNvbnN0IGJsZU5vZGUgPSBhd2FpdCBEZXZpY2VDb250cm9sbGVyLmdldE5vZGVGcm9tQXBpVXNlcklkKGFwaVVzZXIuaWQpXG4gICAgICAgIGlmIChibGVOb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKFwiSW52YWxpZCBNZWFzdXJlbWVudCBCYXRjaCBSZWNlaXZlZDogVGhlcmUgaXMgbm8gQkxFTm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBBUEkgQ2xpZW50IElEXCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBUcmlsYXRlcmF0aW9uTWFuYWdlci5oYW5kbGVOZXdNZWFzdXJlbWVudChibGVOb2RlLCB0YXJnZXRJZCwgcnNzaU1lYXN1cmVtZW50cywgcnNzaTFtLCBwYXRoTG9zc1BhcmFtLCB0aW1lc3RhbXApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9jYXRpb25Db250cm9sbGVyKCkiXX0=