"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var fs = _interopRequireWildcard(require("fs"));

var util = _interopRequireWildcard(require("util"));

var readFilePromise = util.promisify(fs.readFile);

var MapController = /*#__PURE__*/function () {
  function MapController() {
    (0, _classCallCheck2["default"])(this, MapController);
    (0, _defineProperty2["default"])(this, "mapConfigCached", void 0);
  }

  (0, _createClass2["default"])(MapController, [{
    key: "getMapConfig",
    value: function () {
      var _getMapConfig = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var mapConfigStr, mapConfig;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.mapConfigCached) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", this.mapConfigCached);

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return readFilePromise('config/mapConfig.json', 'utf8');

              case 5:
                mapConfigStr = _context.sent;
                mapConfig = JSON.parse(mapConfigStr);
                this.mapConfigCached = mapConfig;
                return _context.abrupt("return", mapConfig);

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                throw _context.t0;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 11]]);
      }));

      function getMapConfig() {
        return _getMapConfig.apply(this, arguments);
      }

      return getMapConfig;
    }()
  }]);
  return MapController;
}();

var _default = new MapController();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9NYXBDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbInJlYWRGaWxlUHJvbWlzZSIsInV0aWwiLCJwcm9taXNpZnkiLCJmcyIsInJlYWRGaWxlIiwiTWFwQ29udHJvbGxlciIsIm1hcENvbmZpZ0NhY2hlZCIsIm1hcENvbmZpZ1N0ciIsIm1hcENvbmZpZyIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUMsRUFBRSxDQUFDQyxRQUFsQixDQUF4Qjs7SUFFTUMsYTs7Ozs7Ozs7Ozs7Ozs7O3FCQUlNLEtBQUtDLGU7Ozs7O2lEQUNFLEtBQUtBLGU7Ozs7O3VCQUllTixlQUFlLENBQUMsdUJBQUQsRUFBMEIsTUFBMUIsQzs7O0FBQXBDTyxnQkFBQUEsWTtBQUNBQyxnQkFBQUEsUyxHQUFZQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWCxDO0FBRWxCLHFCQUFLRCxlQUFMLEdBQXVCRSxTQUF2QjtpREFFT0EsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQU9KLElBQUlILGFBQUosRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJ1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tIFwidXRpbFwiO1xuXG5jb25zdCByZWFkRmlsZVByb21pc2UgPSB1dGlsLnByb21pc2lmeShmcy5yZWFkRmlsZSlcblxuY2xhc3MgTWFwQ29udHJvbGxlciB7XG4gICAgcHJpdmF0ZSBtYXBDb25maWdDYWNoZWQ6IG9iamVjdCB8IHVuZGVmaW5lZFxuXG4gICAgcHVibGljIGFzeW5jIGdldE1hcENvbmZpZygpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgICAgICBpZiAodGhpcy5tYXBDb25maWdDYWNoZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcENvbmZpZ0NhY2hlZFxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG1hcENvbmZpZ1N0ciA9IGF3YWl0IHJlYWRGaWxlUHJvbWlzZSgnY29uZmlnL21hcENvbmZpZy5qc29uJywgJ3V0ZjgnKVxuICAgICAgICAgICAgY29uc3QgbWFwQ29uZmlnID0gSlNPTi5wYXJzZShtYXBDb25maWdTdHIpXG5cbiAgICAgICAgICAgIHRoaXMubWFwQ29uZmlnQ2FjaGVkID0gbWFwQ29uZmlnXG5cbiAgICAgICAgICAgIHJldHVybiBtYXBDb25maWdcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE1hcENvbnRyb2xsZXIoKSJdfQ==