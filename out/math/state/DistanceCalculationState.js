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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _kalmanUtils = require("../../utils/kalmanUtils");

var DistanceCalculationState = /*#__PURE__*/function () {
  function DistanceCalculationState(rssiAt1m, pathLossParameterN, kalmanFilter) {
    (0, _classCallCheck2["default"])(this, DistanceCalculationState);
    (0, _defineProperty2["default"])(this, "kalmanFilter", void 0);
    (0, _defineProperty2["default"])(this, "rssiMeasurements", []);
    (0, _defineProperty2["default"])(this, "rssiAt1m", void 0);
    (0, _defineProperty2["default"])(this, "pathLossParameter", void 0);
    (0, _defineProperty2["default"])(this, "isMoving", false);
    (0, _defineProperty2["default"])(this, "movingScalar", 1);
    this.kalmanFilter = kalmanFilter !== null && kalmanFilter !== void 0 ? kalmanFilter : (0, _kalmanUtils.getDefaultKalmanFilter)();
    this.rssiAt1m = rssiAt1m;
    this.pathLossParameter = pathLossParameterN;
  }

  (0, _createClass2["default"])(DistanceCalculationState, [{
    key: "addMeasurement",
    value: function addMeasurement(rssi, timestamp) {
      // Filter then push
      // Disabled Kalman Filter since it actually made the measurements worse, not sure why.
      rssi = this.kalmanFilter.filter(rssi, this.isMoving ? this.movingScalar : 0);
      this.rssiMeasurements.push({
        timestamp: timestamp,
        rssi: rssi
      });
    }
  }, {
    key: "averageRSSI",
    value: function averageRSSI() {
      var total = 0;
      this.rssiMeasurements.forEach(function (measurement) {
        return total += measurement.rssi;
      });
      return total / this.rssiMeasurements.length;
    }
  }, {
    key: "calculateDistanceInMeters",
    value: function () {
      var _calculateDistanceInMeters = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var distance;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.rssiMeasurements.length == 0)) {
                  _context.next = 2;
                  break;
                }

                throw NaN;

              case 2:
                // Old Calculation:
                // let distance = Math.pow(10, (this.txPower - this.averageRSSI()) / 20)  // 10^((txPower-rssi)/20)
                //  return distance / 1000
                distance = Math.pow(10, (this.averageRSSI() - this.rssiAt1m) / (-10 * this.pathLossParameter)); // 10 ^ (RSSI-rssi1m/(-10n))

                return _context.abrupt("return", distance);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function calculateDistanceInMeters() {
        return _calculateDistanceInMeters.apply(this, arguments);
      }

      return calculateDistanceInMeters;
    }()
  }, {
    key: "amountOfMeasurements",
    value: function amountOfMeasurements() {
      return this.rssiMeasurements.length;
    }
  }]);
  return DistanceCalculationState;
}();

exports["default"] = DistanceCalculationState;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXRoL3N0YXRlL0Rpc3RhbmNlQ2FsY3VsYXRpb25TdGF0ZS50cyJdLCJuYW1lcyI6WyJEaXN0YW5jZUNhbGN1bGF0aW9uU3RhdGUiLCJyc3NpQXQxbSIsInBhdGhMb3NzUGFyYW1ldGVyTiIsImthbG1hbkZpbHRlciIsInBhdGhMb3NzUGFyYW1ldGVyIiwicnNzaSIsInRpbWVzdGFtcCIsImZpbHRlciIsImlzTW92aW5nIiwibW92aW5nU2NhbGFyIiwicnNzaU1lYXN1cmVtZW50cyIsInB1c2giLCJ0b3RhbCIsImZvckVhY2giLCJtZWFzdXJlbWVudCIsImxlbmd0aCIsIk5hTiIsImRpc3RhbmNlIiwiTWF0aCIsInBvdyIsImF2ZXJhZ2VSU1NJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBRXFCQSx3QjtBQVVqQixvQ0FBWUMsUUFBWixFQUE4QkMsa0JBQTlCLEVBQTBEQyxZQUExRCxFQUF1RjtBQUFBO0FBQUE7QUFBQSwrREFSOUIsRUFROEI7QUFBQTtBQUFBO0FBQUEsdURBSG5FLEtBR21FO0FBQUEsMkRBRmhFLENBRWdFO0FBQ25GLFNBQUtBLFlBQUwsR0FBb0JBLFlBQXBCLGFBQW9CQSxZQUFwQixjQUFvQkEsWUFBcEIsR0FBb0MsMENBQXBDO0FBQ0EsU0FBS0YsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLRyxpQkFBTCxHQUF5QkYsa0JBQXpCO0FBQ0g7Ozs7bUNBRWNHLEksRUFBY0MsUyxFQUFvQjtBQUM3QztBQUVBO0FBQ0FELE1BQUFBLElBQUksR0FBRyxLQUFLRixZQUFMLENBQWtCSSxNQUFsQixDQUF5QkYsSUFBekIsRUFBZ0MsS0FBS0csUUFBTCxHQUFnQixLQUFLQyxZQUFyQixHQUFvQyxDQUFwRSxDQUFQO0FBQ0EsV0FBS0MsZ0JBQUwsQ0FBc0JDLElBQXRCLENBQTJCO0FBQUNMLFFBQUFBLFNBQVMsRUFBVEEsU0FBRDtBQUFZRCxRQUFBQSxJQUFJLEVBQUpBO0FBQVosT0FBM0I7QUFDSDs7O2tDQUU2QjtBQUMxQixVQUFJTyxLQUFLLEdBQUcsQ0FBWjtBQUNBLFdBQUtGLGdCQUFMLENBQXNCRyxPQUF0QixDQUE4QixVQUFBQyxXQUFXO0FBQUEsZUFBSUYsS0FBSyxJQUFJRSxXQUFXLENBQUNULElBQXpCO0FBQUEsT0FBekM7QUFFQSxhQUFPTyxLQUFLLEdBQUcsS0FBS0YsZ0JBQUwsQ0FBc0JLLE1BQXJDO0FBQ0g7Ozs7Ozs7Ozs7c0JBR08sS0FBS0wsZ0JBQUwsQ0FBc0JLLE1BQXRCLElBQWdDLEM7Ozs7O3NCQUMxQkMsRzs7O0FBR1Y7QUFDQTtBQUNBO0FBRUlDLGdCQUFBQSxRLEdBQVdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEVBQVQsRUFBYSxDQUFDLEtBQUtDLFdBQUwsS0FBcUIsS0FBS25CLFFBQTNCLEtBQXdDLENBQUMsRUFBRCxHQUFNLEtBQUtHLGlCQUFuRCxDQUFiLEMsRUFBb0Y7O2lEQUM1RmEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJDQUdtQjtBQUMxQixhQUFPLEtBQUtQLGdCQUFMLENBQXNCSyxNQUE3QjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEthbG1hbkZpbHRlciBmcm9tIFwiLi4vLi4vdXRpbHMvS2FsbWFuRmlsdGVyXCI7XG5pbXBvcnQge2dldERlZmF1bHRLYWxtYW5GaWx0ZXJ9IGZyb20gXCIuLi8uLi91dGlscy9rYWxtYW5VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXN0YW5jZUNhbGN1bGF0aW9uU3RhdGUge1xuICAgIGthbG1hbkZpbHRlcjogS2FsbWFuRmlsdGVyXG4gICAgcnNzaU1lYXN1cmVtZW50czoge3RpbWVzdGFtcD86IG51bWJlciwgcnNzaTogbnVtYmVyfVtdID0gW11cblxuICAgIHJzc2lBdDFtOiBudW1iZXJcbiAgICBwYXRoTG9zc1BhcmFtZXRlcjogbnVtYmVyXG5cbiAgICBpc01vdmluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIG1vdmluZ1NjYWxhcjogbnVtYmVyID0gMVxuXG4gICAgY29uc3RydWN0b3IocnNzaUF0MW06IG51bWJlciwgcGF0aExvc3NQYXJhbWV0ZXJOOiBudW1iZXIsIGthbG1hbkZpbHRlcj86IEthbG1hbkZpbHRlcikge1xuICAgICAgICB0aGlzLmthbG1hbkZpbHRlciA9IGthbG1hbkZpbHRlciA/PyBnZXREZWZhdWx0S2FsbWFuRmlsdGVyKClcbiAgICAgICAgdGhpcy5yc3NpQXQxbSA9IHJzc2lBdDFtXG4gICAgICAgIHRoaXMucGF0aExvc3NQYXJhbWV0ZXIgPSBwYXRoTG9zc1BhcmFtZXRlck5cbiAgICB9XG5cbiAgICBhZGRNZWFzdXJlbWVudChyc3NpOiBudW1iZXIsIHRpbWVzdGFtcD86IG51bWJlcikge1xuICAgICAgICAvLyBGaWx0ZXIgdGhlbiBwdXNoXG5cbiAgICAgICAgLy8gRGlzYWJsZWQgS2FsbWFuIEZpbHRlciBzaW5jZSBpdCBhY3R1YWxseSBtYWRlIHRoZSBtZWFzdXJlbWVudHMgd29yc2UsIG5vdCBzdXJlIHdoeS5cbiAgICAgICAgcnNzaSA9IHRoaXMua2FsbWFuRmlsdGVyLmZpbHRlcihyc3NpLCAodGhpcy5pc01vdmluZyA/IHRoaXMubW92aW5nU2NhbGFyIDogMCkpXG4gICAgICAgIHRoaXMucnNzaU1lYXN1cmVtZW50cy5wdXNoKHt0aW1lc3RhbXAsIHJzc2l9KVxuICAgIH1cblxuICAgIHByaXZhdGUgYXZlcmFnZVJTU0koKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIHRvdGFsID0gMDtcbiAgICAgICAgdGhpcy5yc3NpTWVhc3VyZW1lbnRzLmZvckVhY2gobWVhc3VyZW1lbnQgPT4gdG90YWwgKz0gbWVhc3VyZW1lbnQucnNzaSlcblxuICAgICAgICByZXR1cm4gdG90YWwgLyB0aGlzLnJzc2lNZWFzdXJlbWVudHMubGVuZ3RoO1xuICAgIH1cblxuICAgIGFzeW5jIGNhbGN1bGF0ZURpc3RhbmNlSW5NZXRlcnMoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgaWYgKHRoaXMucnNzaU1lYXN1cmVtZW50cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgTmFOXG4gICAgICAgIH1cblxuICAgICAgICAvLyBPbGQgQ2FsY3VsYXRpb246XG4gICAgICAgIC8vIGxldCBkaXN0YW5jZSA9IE1hdGgucG93KDEwLCAodGhpcy50eFBvd2VyIC0gdGhpcy5hdmVyYWdlUlNTSSgpKSAvIDIwKSAgLy8gMTBeKCh0eFBvd2VyLXJzc2kpLzIwKVxuICAgICAgICAvLyAgcmV0dXJuIGRpc3RhbmNlIC8gMTAwMFxuXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGgucG93KDEwLCAodGhpcy5hdmVyYWdlUlNTSSgpIC0gdGhpcy5yc3NpQXQxbSkgLyAoLTEwICogdGhpcy5wYXRoTG9zc1BhcmFtZXRlcikpIC8vIDEwIF4gKFJTU0ktcnNzaTFtLygtMTBuKSlcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlXG4gICAgfVxuXG4gICAgcHVibGljIGFtb3VudE9mTWVhc3VyZW1lbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yc3NpTWVhc3VyZW1lbnRzLmxlbmd0aFxuICAgIH1cblxufSJdfQ==