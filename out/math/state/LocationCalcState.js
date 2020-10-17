"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _DistanceCalculationState = _interopRequireDefault(require("./DistanceCalculationState"));

var _DeviceController = _interopRequireDefault(require("../../controllers/DeviceController"));

var _logger = _interopRequireDefault(require("../../utils/logger"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var LocationCalcState = /*#__PURE__*/function () {
  // Map: BLENode._id -> DistanceCalculationState
  // Location Calc States are unique for each user
  function LocationCalcState(userId) {
    (0, _classCallCheck2["default"])(this, LocationCalcState);
    (0, _defineProperty2["default"])(this, "calculationStates", new Map());
    (0, _defineProperty2["default"])(this, "userId", void 0);
    (0, _defineProperty2["default"])(this, "trilat", require('trilat'));
    this.userId = userId;
  }

  (0, _createClass2["default"])(LocationCalcState, [{
    key: "handleNewRSSIMeasurement",
    value: function handleNewRSSIMeasurement(node, rssi, rssi1m, pathLossParam, timestamp) {
      if (this.calculationStates.has(node.id)) {
        // @ts-ignore
        this.calculationStates.get(node.id).addMeasurement(timestamp, rssi);
        return;
      }

      var distanceCalcState = new _DistanceCalculationState["default"](rssi1m, pathLossParam);
      distanceCalcState.addMeasurement(rssi, timestamp);
      this.calculationStates.set(node.id, distanceCalcState);
    }
  }, {
    key: "handleNewRSSIMeasurementBatch",
    value: function handleNewRSSIMeasurementBatch(node, rssiMeasurements, rssi1m, pathLossParam, timestamp) {
      if (this.calculationStates.has(node.id)) {
        var _distanceCalcState = this.calculationStates.get(node.id);

        rssiMeasurements.forEach(function (rssi) {
          return _distanceCalcState === null || _distanceCalcState === void 0 ? void 0 : _distanceCalcState.addMeasurement(rssi);
        });
        return;
      }

      var distanceCalcState = new _DistanceCalculationState["default"](rssi1m, pathLossParam);
      rssiMeasurements.forEach(function (rssi) {
        return distanceCalcState.addMeasurement(rssi);
      });
      this.calculationStates.set(node.id, distanceCalcState);
    }
  }, {
    key: "doTrilateration",
    value: function () {
      var _doTrilateration = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(distancesToNodes) {
        var input, _iterator, _step, _step$value, location, distance, output;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // The trilat module requires input to be an array containing [X of node location, Y of node location, Radius]
                input = [];
                _iterator = _createForOfIteratorHelper(distancesToNodes);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    _step$value = (0, _slicedToArray2["default"])(_step.value, 2), location = _step$value[0], distance = _step$value[1];
                    input.push([location.x, location.y, distance]);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                _logger["default"].debug("Trilateration: Input is " + input);

                _context.next = 6;
                return this.trilat(input);

              case 6:
                output = _context.sent;

                _logger["default"].debug("Result: " + output);

                return _context.abrupt("return", {
                  x: output[0],
                  y: output[1],
                  z: 0
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function doTrilateration(_x) {
        return _doTrilateration.apply(this, arguments);
      }

      return doTrilateration;
    }()
  }, {
    key: "calculatePosition",
    value: function () {
      var _calculatePosition = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var distancesMap, _iterator2, _step2, _step2$value, nodeId, calcState, distance, bleNode;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // TODO: Filter measurements to only include ones with atleast MathConstants.MINIMUM_RSSI_MEASUREMENTS
                // const calcStates = Array.from(this.calculationStates.values())
                //     .filter((calcState) => calcState.amountOfMeasurements() >= MathConstants.MINIMUM_RSSI_MEASUREMENTS)
                distancesMap = new Map();
                _iterator2 = _createForOfIteratorHelper(this.calculationStates);
                _context2.prev = 2;

                _iterator2.s();

              case 4:
                if ((_step2 = _iterator2.n()).done) {
                  _context2.next = 19;
                  break;
                }

                _step2$value = (0, _slicedToArray2["default"])(_step2.value, 2), nodeId = _step2$value[0], calcState = _step2$value[1];
                _context2.next = 8;
                return calcState.calculateDistanceInMeters();

              case 8:
                distance = _context2.sent;
                _context2.next = 11;
                return _DeviceController["default"].getNodeFromCache(nodeId);

              case 11:
                bleNode = _context2.sent;

                if (!(bleNode == undefined)) {
                  _context2.next = 15;
                  break;
                }

                _logger["default"].warn("Node " + nodeId + " was not found.");

                return _context2.abrupt("continue", 17);

              case 15:
                distancesMap.set(bleNode.location, distance);
                console.log(bleNode.displayName + " -> " + distance);

              case 17:
                _context2.next = 4;
                break;

              case 19:
                _context2.next = 24;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2["catch"](2);

                _iterator2.e(_context2.t0);

              case 24:
                _context2.prev = 24;

                _iterator2.f();

                return _context2.finish(24);

              case 27:
                console.log(distancesMap.size);

                if (!(distancesMap.size < 3)) {
                  _context2.next = 30;
                  break;
                }

                throw Error("Not enough nodes to perform trilateration for user " + this.userId + " (Needs at least 3 nodes)");

              case 30:
                return _context2.abrupt("return", this.doTrilateration(distancesMap));

              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 21, 24, 27]]);
      }));

      function calculatePosition() {
        return _calculatePosition.apply(this, arguments);
      }

      return calculatePosition;
    }()
  }, {
    key: "shouldDiscardState",
    value: function shouldDiscardState() {
      return this.calculationStates.size == 0;
    }
  }, {
    key: "resetState",
    value: function resetState() {
      this.calculationStates = new Map();
    }
  }]);
  return LocationCalcState;
}();

exports["default"] = LocationCalcState;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXRoL3N0YXRlL0xvY2F0aW9uQ2FsY1N0YXRlLnRzIl0sIm5hbWVzIjpbIkxvY2F0aW9uQ2FsY1N0YXRlIiwidXNlcklkIiwiTWFwIiwicmVxdWlyZSIsIm5vZGUiLCJyc3NpIiwicnNzaTFtIiwicGF0aExvc3NQYXJhbSIsInRpbWVzdGFtcCIsImNhbGN1bGF0aW9uU3RhdGVzIiwiaGFzIiwiaWQiLCJnZXQiLCJhZGRNZWFzdXJlbWVudCIsImRpc3RhbmNlQ2FsY1N0YXRlIiwiRGlzdGFuY2VDYWxjdWxhdGlvblN0YXRlIiwic2V0IiwicnNzaU1lYXN1cmVtZW50cyIsImZvckVhY2giLCJkaXN0YW5jZXNUb05vZGVzIiwiaW5wdXQiLCJsb2NhdGlvbiIsImRpc3RhbmNlIiwicHVzaCIsIngiLCJ5IiwibG9nZ2VyIiwiZGVidWciLCJ0cmlsYXQiLCJvdXRwdXQiLCJ6IiwiZGlzdGFuY2VzTWFwIiwibm9kZUlkIiwiY2FsY1N0YXRlIiwiY2FsY3VsYXRlRGlzdGFuY2VJbk1ldGVycyIsIkRldmljZUNvbnRyb2xsZXIiLCJnZXROb2RlRnJvbUNhY2hlIiwiYmxlTm9kZSIsInVuZGVmaW5lZCIsIndhcm4iLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheU5hbWUiLCJzaXplIiwiRXJyb3IiLCJkb1RyaWxhdGVyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUVBOzs7Ozs7OztJQUVxQkEsaUI7QUFFakI7QUFNQTtBQUNBLDZCQUFZQyxNQUFaLEVBQTRCO0FBQUE7QUFBQSxnRUFOdUMsSUFBSUMsR0FBSixFQU12QztBQUFBO0FBQUEscURBSFhDLE9BQU8sQ0FBQyxRQUFELENBR0k7QUFDeEIsU0FBS0YsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7Ozs7NkNBRStCRyxJLEVBQWVDLEksRUFBY0MsTSxFQUFnQkMsYSxFQUF1QkMsUyxFQUFvQjtBQUNwSCxVQUFJLEtBQUtDLGlCQUFMLENBQXVCQyxH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Q0MsR0FBUixDQUFZSixPQUFPLENBQUNLLFdBQVIsR0FBc0IsTUFBdEIsR0FBK0JwQixRQUEzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0prQixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlWLFlBQVksQ0FBQ1ksSUFBekI7O3NCQUVJWixZQUFZLENBQUNZLElBQWIsR0FBb0IsQzs7Ozs7c0JBQ2RDLEtBQUssQ0FBQyx3REFBd0QsS0FBSzNDLE1BQTdELEdBQXNFLDJCQUF2RSxDOzs7a0RBR1IsS0FBSzRDLGVBQUwsQ0FBcUJkLFlBQXJCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FHMEI7QUFDakMsYUFBUSxLQUFLdEIsaUJBQUwsQ0FBdUJrQyxJQUF2QixJQUErQixDQUF2QztBQUNIOzs7aUNBRW1CO0FBQ2hCLFdBQUtsQyxpQkFBTCxHQUF5QixJQUFJUCxHQUFKLEVBQXpCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JMRU5vZGV9IGZyb20gXCIuLi8uLi9tb2RlbHMvZGV2aWNlL0JMRU5vZGVNb2RlbFwiO1xuaW1wb3J0IERpc3RhbmNlQ2FsY3VsYXRpb25TdGF0ZSBmcm9tIFwiLi9EaXN0YW5jZUNhbGN1bGF0aW9uU3RhdGVcIjtcbmltcG9ydCBEZXZpY2VDb250cm9sbGVyIGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9EZXZpY2VDb250cm9sbGVyXCI7XG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4uLy4uL21vZGVscy9kZXZpY2UvTG9jYXRpb25cIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4uLy4uL3V0aWxzL2xvZ2dlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvbkNhbGNTdGF0ZSB7XG5cbiAgICAvLyBNYXA6IEJMRU5vZGUuX2lkIC0+IERpc3RhbmNlQ2FsY3VsYXRpb25TdGF0ZVxuICAgIHByaXZhdGUgY2FsY3VsYXRpb25TdGF0ZXM6IE1hcDxzdHJpbmcsIERpc3RhbmNlQ2FsY3VsYXRpb25TdGF0ZT4gPSBuZXcgTWFwKClcbiAgICBwcml2YXRlIHVzZXJJZDogc3RyaW5nXG5cbiAgICBwcml2YXRlIHRyaWxhdCA9IHJlcXVpcmUoJ3RyaWxhdCcpXG5cbiAgICAvLyBMb2NhdGlvbiBDYWxjIFN0YXRlcyBhcmUgdW5pcXVlIGZvciBlYWNoIHVzZXJcbiAgICBjb25zdHJ1Y3Rvcih1c2VySWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZFxuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVOZXdSU1NJTWVhc3VyZW1lbnQobm9kZTogQkxFTm9kZSwgcnNzaTogbnVtYmVyLCByc3NpMW06IG51bWJlciwgcGF0aExvc3NQYXJhbTogbnVtYmVyLCB0aW1lc3RhbXA/OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FsY3VsYXRpb25TdGF0ZXMuaGFzKG5vZGUuaWQpKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0aW9uU3RhdGVzLmdldChub2RlLmlkKS5hZGRNZWFzdXJlbWVudCh0aW1lc3RhbXAsIHJzc2kpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkaXN0YW5jZUNhbGNTdGF0ZSA9IG5ldyBEaXN0YW5jZUNhbGN1bGF0aW9uU3RhdGUocnNzaTFtLCBwYXRoTG9zc1BhcmFtKVxuICAgICAgICBkaXN0YW5jZUNhbGNTdGF0ZS5hZGRNZWFzdXJlbWVudChyc3NpLCB0aW1lc3RhbXApXG5cbiAgICAgICAgdGhpcy5jYWxjdWxhdGlvblN0YXRlcy5zZXQobm9kZS5pZCwgZGlzdGFuY2VDYWxjU3RhdGUpXG4gICAgfVxuXG4gICAgcHVibGljIGhhbmRsZU5ld1JTU0lNZWFzdXJlbWVudEJhdGNoKG5vZGU6IEJMRU5vZGUsIHJzc2lNZWFzdXJlbWVudHM6IG51bWJlcltdLCByc3NpMW06IG51bWJlciwgcGF0aExvc3NQYXJhbTogbnVtYmVyLCB0aW1lc3RhbXA/OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FsY3VsYXRpb25TdGF0ZXMuaGFzKG5vZGUuaWQpKSB7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZUNhbGNTdGF0ZSA9IHRoaXMuY2FsY3VsYXRpb25TdGF0ZXMuZ2V0KG5vZGUuaWQpO1xuICAgICAgICAgICAgcnNzaU1lYXN1cmVtZW50cy5mb3JFYWNoKHJzc2kgPT4gZGlzdGFuY2VDYWxjU3RhdGU/LmFkZE1lYXN1cmVtZW50KHJzc2kpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGlzdGFuY2VDYWxjU3RhdGUgPSBuZXcgRGlzdGFuY2VDYWxjdWxhdGlvblN0YXRlKHJzc2kxbSwgcGF0aExvc3NQYXJhbSlcbiAgICAgICAgcnNzaU1lYXN1cmVtZW50cy5mb3JFYWNoKHJzc2kgPT4gZGlzdGFuY2VDYWxjU3RhdGUuYWRkTWVhc3VyZW1lbnQocnNzaSkpXG5cbiAgICAgICAgdGhpcy5jYWxjdWxhdGlvblN0YXRlcy5zZXQobm9kZS5pZCwgZGlzdGFuY2VDYWxjU3RhdGUpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBkb1RyaWxhdGVyYXRpb24oZGlzdGFuY2VzVG9Ob2RlczogTWFwPExvY2F0aW9uLCBudW1iZXI+KTogUHJvbWlzZTxMb2NhdGlvbj4ge1xuXG4gICAgICAgIC8vIFRoZSB0cmlsYXQgbW9kdWxlIHJlcXVpcmVzIGlucHV0IHRvIGJlIGFuIGFycmF5IGNvbnRhaW5pbmcgW1ggb2Ygbm9kZSBsb2NhdGlvbiwgWSBvZiBub2RlIGxvY2F0aW9uLCBSYWRpdXNdXG4gICAgICAgIGxldCBpbnB1dDogbnVtYmVyW11bXSA9IFtdXG4gICAgICAgIGZvciAoY29uc3QgW2xvY2F0aW9uLCBkaXN0YW5jZV0gb2YgZGlzdGFuY2VzVG9Ob2Rlcykge1xuICAgICAgICAgICAgaW5wdXQucHVzaChbbG9jYXRpb24ueCwgbG9jYXRpb24ueSwgZGlzdGFuY2VdKVxuICAgICAgICB9XG5cbiAgICAgICAgbG9nZ2VyLmRlYnVnKFwiVHJpbGF0ZXJhdGlvbjogSW5wdXQgaXMgXCIgKyBpbnB1dClcbiAgICAgICAgbGV0IG91dHB1dCA9IGF3YWl0IHRoaXMudHJpbGF0KGlucHV0KVxuICAgICAgICBsb2dnZXIuZGVidWcoXCJSZXN1bHQ6IFwiICtvdXRwdXQpXG5cbiAgICAgICAgcmV0dXJuIHsgeDogb3V0cHV0WzBdLCB5OiBvdXRwdXRbMV0sIHo6IDAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjYWxjdWxhdGVQb3NpdGlvbigpOiBQcm9taXNlPExvY2F0aW9uPiB7XG5cbiAgICAgICAgLy8gVE9ETzogRmlsdGVyIG1lYXN1cmVtZW50cyB0byBvbmx5IGluY2x1ZGUgb25lcyB3aXRoIGF0bGVhc3QgTWF0aENvbnN0YW50cy5NSU5JTVVNX1JTU0lfTUVBU1VSRU1FTlRTXG4gICAgICAgIC8vIGNvbnN0IGNhbGNTdGF0ZXMgPSBBcnJheS5mcm9tKHRoaXMuY2FsY3VsYXRpb25TdGF0ZXMudmFsdWVzKCkpXG4gICAgICAgIC8vICAgICAuZmlsdGVyKChjYWxjU3RhdGUpID0+IGNhbGNTdGF0ZS5hbW91bnRPZk1lYXN1cmVtZW50cygpID49IE1hdGhDb25zdGFudHMuTUlOSU1VTV9SU1NJX01FQVNVUkVNRU5UUylcblxuICAgICAgICB2YXIgZGlzdGFuY2VzTWFwOiBNYXA8TG9jYXRpb24sIG51bWJlcj4gPSBuZXcgTWFwKClcbiAgICAgICAgZm9yIChjb25zdCBbbm9kZUlkLCBjYWxjU3RhdGVdIG9mIHRoaXMuY2FsY3VsYXRpb25TdGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gYXdhaXQgY2FsY1N0YXRlLmNhbGN1bGF0ZURpc3RhbmNlSW5NZXRlcnMoKVxuXG4gICAgICAgICAgICBjb25zdCBibGVOb2RlID0gYXdhaXQgRGV2aWNlQ29udHJvbGxlci5nZXROb2RlRnJvbUNhY2hlKG5vZGVJZClcbiAgICAgICAgICAgIGlmIChibGVOb2RlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKFwiTm9kZSBcIiArIG5vZGVJZCArIFwiIHdhcyBub3QgZm91bmQuXCIpXG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3RhbmNlc01hcC5zZXQoYmxlTm9kZS5sb2NhdGlvbiBhcyBMb2NhdGlvbiwgZGlzdGFuY2UpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhibGVOb2RlLmRpc3BsYXlOYW1lICsgXCIgLT4gXCIgKyBkaXN0YW5jZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGRpc3RhbmNlc01hcC5zaXplKVxuXG4gICAgICAgIGlmIChkaXN0YW5jZXNNYXAuc2l6ZSA8IDMpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTm90IGVub3VnaCBub2RlcyB0byBwZXJmb3JtIHRyaWxhdGVyYXRpb24gZm9yIHVzZXIgXCIgKyB0aGlzLnVzZXJJZCArIFwiIChOZWVkcyBhdCBsZWFzdCAzIG5vZGVzKVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZG9UcmlsYXRlcmF0aW9uKGRpc3RhbmNlc01hcClcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdWxkRGlzY2FyZFN0YXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHRoaXMuY2FsY3VsYXRpb25TdGF0ZXMuc2l6ZSA9PSAwKVxuICAgIH1cblxuICAgIHB1YmxpYyByZXNldFN0YXRlKCkge1xuICAgICAgICB0aGlzLmNhbGN1bGF0aW9uU3RhdGVzID0gbmV3IE1hcCgpXG4gICAgfVxufSJdfQ==