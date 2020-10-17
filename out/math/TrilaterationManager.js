"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TrilaterationManager = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _LocationCalcState = _interopRequireDefault(require("./state/LocationCalcState"));

var _logger = _interopRequireDefault(require("../utils/logger"));

var _SocketManager = _interopRequireDefault(require("../sockets/SocketManager"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var TrilaterationManager = /*#__PURE__*/function () {
  function TrilaterationManager() {
    (0, _classCallCheck2["default"])(this, TrilaterationManager);
    (0, _defineProperty2["default"])(this, "calculationStates", new Map());
    setInterval(this.calculationLoop.bind(this), 10 * 1000);
  }

  (0, _createClass2["default"])(TrilaterationManager, [{
    key: "handleNewMeasurement",
    value: function handleNewMeasurement(node, clientId, rssi, rssi1m, pathLossParam, timestamp) {
      var _this$calculationStat;

      if (!this.calculationStates.has(clientId)) {
        this.calculationStates.set(clientId, new _LocationCalcState["default"](clientId));
      }

      (_this$calculationStat = this.calculationStates.get(clientId)) === null || _this$calculationStat === void 0 ? void 0 : _this$calculationStat.handleNewRSSIMeasurementBatch(node, rssi, rssi1m, pathLossParam, timestamp);
    }
  }, {
    key: "calculationLoop",
    value: function () {
      var _calculationLoop = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _iterator, _step, _step$value, userId, calcState, position;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _logger["default"].debug("New Calculation Loop --------------------");

                _iterator = _createForOfIteratorHelper(this.calculationStates);
                _context.prev = 2;

                _iterator.s();

              case 4:
                if ((_step = _iterator.n()).done) {
                  _context.next = 19;
                  break;
                }

                _step$value = (0, _slicedToArray2["default"])(_step.value, 2), userId = _step$value[0], calcState = _step$value[1];
                _context.prev = 6;
                _context.next = 9;
                return calcState.calculatePosition();

              case 9:
                position = _context.sent;

                _SocketManager["default"].notifyClientPositionChange(userId, position);

                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](6);

                _logger["default"].warn("Trilateration Failed: " + _context.t0.message);

              case 16:
                if (calcState.shouldDiscardState()) {
                  this.calculationStates["delete"](userId);
                } else {
                  calcState.resetState();
                }

              case 17:
                _context.next = 4;
                break;

              case 19:
                _context.next = 24;
                break;

              case 21:
                _context.prev = 21;
                _context.t1 = _context["catch"](2);

                _iterator.e(_context.t1);

              case 24:
                _context.prev = 24;

                _iterator.f();

                return _context.finish(24);

              case 27:
                _logger["default"].debug("End Calculation Loop --------------------");

              case 28:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 21, 24, 27], [6, 13]]);
      }));

      function calculationLoop() {
        return _calculationLoop.apply(this, arguments);
      }

      return calculationLoop;
    }()
  }]);
  return TrilaterationManager;
}();

exports.TrilaterationManager = TrilaterationManager;

var _default = new TrilaterationManager();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRoL1RyaWxhdGVyYXRpb25NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIlRyaWxhdGVyYXRpb25NYW5hZ2VyIiwiTWFwIiwic2V0SW50ZXJ2YWwiLCJjYWxjdWxhdGlvbkxvb3AiLCJiaW5kIiwibm9kZSIsImNsaWVudElkIiwicnNzaSIsInJzc2kxbSIsInBhdGhMb3NzUGFyYW0iLCJ0aW1lc3RhbXAiLCJjYWxjdWxhdGlvblN0YXRlcyIsImhhcyIsInNldCIsIkxvY2F0aW9uQ2FsY1N0YXRlIiwiZ2V0IiwiaGFuZGxlTmV3UlNTSU1lYXN1cmVtZW50QmF0Y2giLCJsb2dnZXIiLCJkZWJ1ZyIsInVzZXJJZCIsImNhbGNTdGF0ZSIsImNhbGN1bGF0ZVBvc2l0aW9uIiwicG9zaXRpb24iLCJTb2NrZXRNYW5hZ2VyIiwibm90aWZ5Q2xpZW50UG9zaXRpb25DaGFuZ2UiLCJ3YXJuIiwibWVzc2FnZSIsInNob3VsZERpc2NhcmRTdGF0ZSIsInJlc2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOzs7Ozs7OztJQUdhQSxvQjtBQUlULGtDQUFjO0FBQUE7QUFBQSxnRUFGOEMsSUFBSUMsR0FBSixFQUU5QztBQUNWQyxJQUFBQSxXQUFXLENBQUMsS0FBS0MsZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBRCxFQUFrQyxLQUFLLElBQXZDLENBQVg7QUFDSDs7Ozt5Q0FFMkJDLEksRUFBZUMsUSxFQUFrQkMsSSxFQUFnQkMsTSxFQUFnQkMsYSxFQUF1QkMsUyxFQUFvQjtBQUFBOztBQUNwSSxVQUFJLENBQUMsS0FBS0MsaUJBQUwsQ0FBdUJDLEdBQXZCLENBQTJCTixRQUEzQixDQUFMLEVBQTJDO0FBQ3ZDLGFBQUtLLGlCQUFMLENBQXVCRSxHQUF2QixDQUEyQlAsUUFBM0IsRUFBcUMsSUFBSVEsNkJBQUosQ0FBc0JSLFFBQXRCLENBQXJDO0FBQ0g7O0FBRUQsb0NBQUtLLGlCQUFMLENBQXVCSSxHQUF2QixDQUEyQlQsUUFBM0IsaUZBQXNDVSw2QkFBdEMsQ0FBb0VYLElBQXBFLEVBQTBFRSxJQUExRSxFQUFnRkMsTUFBaEYsRUFBd0ZDLGFBQXhGLEVBQXVHQyxTQUF2RztBQUNIOzs7Ozs7Ozs7OztBQUdHTyxtQ0FBT0MsS0FBUCxDQUFhLDJDQUFiOzt1REFDZ0MsS0FBS1AsaUI7Ozs7Ozs7Ozs7OytFQUEzQlEsTSxtQkFBUUMsUzs7O3VCQUVhQSxTQUFTLENBQUNDLGlCQUFWLEU7OztBQUFqQkMsZ0JBQUFBLFE7O0FBQ05DLDBDQUFjQywwQkFBZCxDQUF5Q0wsTUFBekMsRUFBaURHLFFBQWpEOzs7Ozs7Ozs7QUFFQUwsbUNBQU9RLElBQVAsQ0FBWSwyQkFBMkIsWUFBSUMsT0FBM0M7OztBQUdKLG9CQUFJTixTQUFTLENBQUNPLGtCQUFWLEVBQUosRUFBb0M7QUFDaEMsdUJBQUtoQixpQkFBTCxXQUE4QlEsTUFBOUI7QUFDSCxpQkFGRCxNQUVPO0FBQ0hDLGtCQUFBQSxTQUFTLENBQUNRLFVBQVY7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUxYLG1DQUFPQyxLQUFQLENBQWEsMkNBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFLTyxJQUFJbEIsb0JBQUosRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2NhdGlvbiBmcm9tIFwiLi4vbW9kZWxzL2RldmljZS9Mb2NhdGlvblwiO1xuaW1wb3J0IERpc3RhbmNlQ2FsY3VsYXRpb25TdGF0ZSBmcm9tIFwiLi9zdGF0ZS9EaXN0YW5jZUNhbGN1bGF0aW9uU3RhdGVcIjtcbmltcG9ydCBMb2NhdGlvbkNhbGNTdGF0ZSBmcm9tIFwiLi9zdGF0ZS9Mb2NhdGlvbkNhbGNTdGF0ZVwiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vdXRpbHMvbG9nZ2VyXCI7XG5pbXBvcnQgU29ja2V0TWFuYWdlciBmcm9tIFwiLi4vc29ja2V0cy9Tb2NrZXRNYW5hZ2VyXCI7XG5pbXBvcnQge0JMRU5vZGV9IGZyb20gXCIuLi9tb2RlbHMvZGV2aWNlL0JMRU5vZGVNb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgVHJpbGF0ZXJhdGlvbk1hbmFnZXIge1xuXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGlvblN0YXRlczogTWFwPHN0cmluZywgTG9jYXRpb25DYWxjU3RhdGU+ID0gbmV3IE1hcCgpXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5jYWxjdWxhdGlvbkxvb3AuYmluZCh0aGlzKSwgMTAgKiAxMDAwKVxuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVOZXdNZWFzdXJlbWVudChub2RlOiBCTEVOb2RlLCBjbGllbnRJZDogc3RyaW5nLCByc3NpOiBudW1iZXJbXSwgcnNzaTFtOiBudW1iZXIsIHBhdGhMb3NzUGFyYW06IG51bWJlciwgdGltZXN0YW1wPzogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5jYWxjdWxhdGlvblN0YXRlcy5oYXMoY2xpZW50SWQpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0aW9uU3RhdGVzLnNldChjbGllbnRJZCwgbmV3IExvY2F0aW9uQ2FsY1N0YXRlKGNsaWVudElkKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRpb25TdGF0ZXMuZ2V0KGNsaWVudElkKT8uaGFuZGxlTmV3UlNTSU1lYXN1cmVtZW50QmF0Y2gobm9kZSwgcnNzaSwgcnNzaTFtLCBwYXRoTG9zc1BhcmFtLCB0aW1lc3RhbXApXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNhbGN1bGF0aW9uTG9vcCgpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFwiTmV3IENhbGN1bGF0aW9uIExvb3AgLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcbiAgICAgICAgZm9yIChsZXQgW3VzZXJJZCwgY2FsY1N0YXRlXSBvZiB0aGlzLmNhbGN1bGF0aW9uU3RhdGVzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gYXdhaXQgY2FsY1N0YXRlLmNhbGN1bGF0ZVBvc2l0aW9uKClcbiAgICAgICAgICAgICAgICBTb2NrZXRNYW5hZ2VyLm5vdGlmeUNsaWVudFBvc2l0aW9uQ2hhbmdlKHVzZXJJZCwgcG9zaXRpb24pXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIud2FybihcIlRyaWxhdGVyYXRpb24gRmFpbGVkOiBcIiArIGVyci5tZXNzYWdlKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2FsY1N0YXRlLnNob3VsZERpc2NhcmRTdGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGlvblN0YXRlcy5kZWxldGUodXNlcklkKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxjU3RhdGUucmVzZXRTdGF0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbG9nZ2VyLmRlYnVnKFwiRW5kIENhbGN1bGF0aW9uIExvb3AgLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRyaWxhdGVyYXRpb25NYW5hZ2VyKCkiXX0=