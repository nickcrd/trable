"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

/*
    From http://github.com/wouterbulten/kalmanjs
    Copyright 2015-2018 Wouter Bulten
    MIT License

    Edited by @nickcrd to support Typescript
 */
var KalmanFilter = /*#__PURE__*/function () {
  /**
   * Create 1-dimensional kalman filter
   * @param  {Number} options.R Process noise
   * @param  {Number} options.Q Measurement noise
   * @param  {Number} options.A State vector
   * @param  {Number} options.B Control vector
   * @param  {Number} options.C Measurement vector
   * @return {KalmanFilter}
   */
  function KalmanFilter() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$R = _ref.R,
        R = _ref$R === void 0 ? 1 : _ref$R,
        _ref$Q = _ref.Q,
        Q = _ref$Q === void 0 ? 1 : _ref$Q,
        _ref$A = _ref.A,
        A = _ref$A === void 0 ? 1 : _ref$A,
        _ref$B = _ref.B,
        B = _ref$B === void 0 ? 0 : _ref$B,
        _ref$C = _ref.C,
        C = _ref$C === void 0 ? 1 : _ref$C;

    (0, _classCallCheck2["default"])(this, KalmanFilter);
    (0, _defineProperty2["default"])(this, "R", void 0);
    (0, _defineProperty2["default"])(this, "Q", void 0);
    (0, _defineProperty2["default"])(this, "A", void 0);
    (0, _defineProperty2["default"])(this, "B", void 0);
    (0, _defineProperty2["default"])(this, "C", void 0);
    (0, _defineProperty2["default"])(this, "cov", void 0);
    (0, _defineProperty2["default"])(this, "x", void 0);
    this.R = R; // noise power desirable

    this.Q = Q; // noise power estimated

    this.A = A;
    this.C = C;
    this.B = B;
    this.cov = NaN;
    this.x = NaN; // estimated signal without noise
  }
  /**
   * Filter a new value
   * @param  {Number} z Measurement
   * @param  {Number} u Control
   * @return {Number}
   */


  (0, _createClass2["default"])(KalmanFilter, [{
    key: "filter",
    value: function filter(z) {
      var u = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (isNaN(this.x)) {
        this.x = 1 / this.C * z;
        this.cov = 1 / this.C * this.Q * (1 / this.C);
      } else {
        // Compute prediction
        var predX = this.predict(u);
        var predCov = this.uncertainty(); // Kalman gain

        var K = predCov * this.C * (1 / (this.C * predCov * this.C + this.Q)); // Correction

        this.x = predX + K * (z - this.C * predX);
        this.cov = predCov - K * this.C * predCov;
      }

      return this.x;
    }
    /**
     * Predict next value
     * @param  {Number} [u] Control
     * @return {Number}
     */

  }, {
    key: "predict",
    value: function predict() {
      var u = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.A * this.x + this.B * u;
    }
    /**
     * Return uncertainty of filter
     * @return {Number}
     */

  }, {
    key: "uncertainty",
    value: function uncertainty() {
      return this.A * this.cov * this.A + this.R;
    }
    /**
     * Return the last filtered measurement
     * @return {Number}
     */

  }, {
    key: "lastMeasurement",
    value: function lastMeasurement() {
      return this.x;
    }
    /**
     * Set measurement noise Q
     * @param {Number} noise
     */

  }, {
    key: "setMeasurementNoise",
    value: function setMeasurementNoise(noise) {
      this.Q = noise;
    }
    /**
     * Set the process noise R
     * @param {Number} noise
     */

  }, {
    key: "setProcessNoise",
    value: function setProcessNoise(noise) {
      this.R = noise;
    }
  }]);
  return KalmanFilter;
}();

exports["default"] = KalmanFilter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9LYWxtYW5GaWx0ZXIudHMiXSwibmFtZXMiOlsiS2FsbWFuRmlsdGVyIiwiUiIsIlEiLCJBIiwiQiIsIkMiLCJjb3YiLCJOYU4iLCJ4IiwieiIsInUiLCJpc05hTiIsInByZWRYIiwicHJlZGljdCIsInByZWRDb3YiLCJ1bmNlcnRhaW50eSIsIksiLCJub2lzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7SUFPcUJBLFk7QUFVakI7Ozs7Ozs7OztBQVNBLDBCQUFzRDtBQUFBLG1GQUFKLEVBQUk7QUFBQSxzQkFBekNDLENBQXlDO0FBQUEsUUFBekNBLENBQXlDLHVCQUFyQyxDQUFxQztBQUFBLHNCQUFsQ0MsQ0FBa0M7QUFBQSxRQUFsQ0EsQ0FBa0MsdUJBQTlCLENBQThCO0FBQUEsc0JBQTNCQyxDQUEyQjtBQUFBLFFBQTNCQSxDQUEyQix1QkFBdkIsQ0FBdUI7QUFBQSxzQkFBcEJDLENBQW9CO0FBQUEsUUFBcEJBLENBQW9CLHVCQUFoQixDQUFnQjtBQUFBLHNCQUFiQyxDQUFhO0FBQUEsUUFBYkEsQ0FBYSx1QkFBVCxDQUFTOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFbEQsU0FBS0osQ0FBTCxHQUFTQSxDQUFULENBRmtELENBRXRDOztBQUNaLFNBQUtDLENBQUwsR0FBU0EsQ0FBVCxDQUhrRCxDQUd0Qzs7QUFFWixTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLRSxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLRSxHQUFMLEdBQVdDLEdBQVg7QUFDQSxTQUFLQyxDQUFMLEdBQVNELEdBQVQsQ0FUa0QsQ0FTcEM7QUFDakI7QUFFRDs7Ozs7Ozs7OzsyQkFNT0UsQyxFQUFrQjtBQUFBLFVBQVBDLENBQU8sdUVBQUgsQ0FBRzs7QUFFckIsVUFBSUMsS0FBSyxDQUFDLEtBQUtILENBQU4sQ0FBVCxFQUFtQjtBQUNmLGFBQUtBLENBQUwsR0FBVSxJQUFJLEtBQUtILENBQVYsR0FBZUksQ0FBeEI7QUFDQSxhQUFLSCxHQUFMLEdBQVksSUFBSSxLQUFLRCxDQUFWLEdBQWUsS0FBS0gsQ0FBcEIsSUFBeUIsSUFBSSxLQUFLRyxDQUFsQyxDQUFYO0FBQ0gsT0FIRCxNQUlLO0FBRUQ7QUFDQSxZQUFNTyxLQUFLLEdBQUcsS0FBS0MsT0FBTCxDQUFhSCxDQUFiLENBQWQ7QUFDQSxZQUFNSSxPQUFPLEdBQUcsS0FBS0MsV0FBTCxFQUFoQixDQUpDLENBTUQ7O0FBQ0EsWUFBTUMsQ0FBQyxHQUFHRixPQUFPLEdBQUcsS0FBS1QsQ0FBZixJQUFvQixLQUFNLEtBQUtBLENBQUwsR0FBU1MsT0FBVCxHQUFtQixLQUFLVCxDQUF6QixHQUE4QixLQUFLSCxDQUF4QyxDQUFwQixDQUFWLENBUEMsQ0FTRDs7QUFDQSxhQUFLTSxDQUFMLEdBQVNJLEtBQUssR0FBR0ksQ0FBQyxJQUFJUCxDQUFDLEdBQUksS0FBS0osQ0FBTCxHQUFTTyxLQUFsQixDQUFsQjtBQUNBLGFBQUtOLEdBQUwsR0FBV1EsT0FBTyxHQUFJRSxDQUFDLEdBQUcsS0FBS1gsQ0FBVCxHQUFhUyxPQUFuQztBQUNIOztBQUVELGFBQU8sS0FBS04sQ0FBWjtBQUNIO0FBRUQ7Ozs7Ozs7OzhCQUtlO0FBQUEsVUFBUEUsQ0FBTyx1RUFBSCxDQUFHO0FBQ1gsYUFBUSxLQUFLUCxDQUFMLEdBQVMsS0FBS0ssQ0FBZixHQUFxQixLQUFLSixDQUFMLEdBQVNNLENBQXJDO0FBQ0g7QUFFRDs7Ozs7OztrQ0FJYztBQUNWLGFBQVMsS0FBS1AsQ0FBTCxHQUFTLEtBQUtHLEdBQWYsR0FBc0IsS0FBS0gsQ0FBNUIsR0FBaUMsS0FBS0YsQ0FBN0M7QUFDSDtBQUVEOzs7Ozs7O3NDQUlrQjtBQUNkLGFBQU8sS0FBS08sQ0FBWjtBQUNIO0FBRUQ7Ozs7Ozs7d0NBSW9CUyxLLEVBQWU7QUFDL0IsV0FBS2YsQ0FBTCxHQUFTZSxLQUFUO0FBQ0g7QUFFRDs7Ozs7OztvQ0FJZ0JBLEssRUFBZTtBQUMzQixXQUFLaEIsQ0FBTCxHQUFTZ0IsS0FBVDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBGcm9tIGh0dHA6Ly9naXRodWIuY29tL3dvdXRlcmJ1bHRlbi9rYWxtYW5qc1xuICAgIENvcHlyaWdodCAyMDE1LTIwMTggV291dGVyIEJ1bHRlblxuICAgIE1JVCBMaWNlbnNlXG5cbiAgICBFZGl0ZWQgYnkgQG5pY2tjcmQgdG8gc3VwcG9ydCBUeXBlc2NyaXB0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEthbG1hbkZpbHRlciB7XG4gICAgUjogbnVtYmVyXG4gICAgUTogbnVtYmVyXG4gICAgQTogbnVtYmVyXG4gICAgQjogbnVtYmVyXG4gICAgQzogbnVtYmVyXG5cbiAgICBjb3Y6IG51bWJlclxuICAgIHg6IG51bWJlclxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIDEtZGltZW5zaW9uYWwga2FsbWFuIGZpbHRlclxuICAgICAqIEBwYXJhbSAge051bWJlcn0gb3B0aW9ucy5SIFByb2Nlc3Mgbm9pc2VcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG9wdGlvbnMuUSBNZWFzdXJlbWVudCBub2lzZVxuICAgICAqIEBwYXJhbSAge051bWJlcn0gb3B0aW9ucy5BIFN0YXRlIHZlY3RvclxuICAgICAqIEBwYXJhbSAge051bWJlcn0gb3B0aW9ucy5CIENvbnRyb2wgdmVjdG9yXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBvcHRpb25zLkMgTWVhc3VyZW1lbnQgdmVjdG9yXG4gICAgICogQHJldHVybiB7S2FsbWFuRmlsdGVyfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHtSID0gMSwgUSA9IDEsIEEgPSAxLCBCID0gMCwgQyA9IDF9ID0ge30pIHtcblxuICAgICAgICB0aGlzLlIgPSBSOyAvLyBub2lzZSBwb3dlciBkZXNpcmFibGVcbiAgICAgICAgdGhpcy5RID0gUTsgLy8gbm9pc2UgcG93ZXIgZXN0aW1hdGVkXG5cbiAgICAgICAgdGhpcy5BID0gQTtcbiAgICAgICAgdGhpcy5DID0gQztcbiAgICAgICAgdGhpcy5CID0gQjtcbiAgICAgICAgdGhpcy5jb3YgPSBOYU47XG4gICAgICAgIHRoaXMueCA9IE5hTjsgLy8gZXN0aW1hdGVkIHNpZ25hbCB3aXRob3V0IG5vaXNlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlsdGVyIGEgbmV3IHZhbHVlXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB6IE1lYXN1cmVtZW50XG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB1IENvbnRyb2xcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZmlsdGVyKHo6IG51bWJlciwgdSA9IDApIHtcblxuICAgICAgICBpZiAoaXNOYU4odGhpcy54KSkge1xuICAgICAgICAgICAgdGhpcy54ID0gKDEgLyB0aGlzLkMpICogejtcbiAgICAgICAgICAgIHRoaXMuY292ID0gKDEgLyB0aGlzLkMpICogdGhpcy5RICogKDEgLyB0aGlzLkMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICAvLyBDb21wdXRlIHByZWRpY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHByZWRYID0gdGhpcy5wcmVkaWN0KHUpO1xuICAgICAgICAgICAgY29uc3QgcHJlZENvdiA9IHRoaXMudW5jZXJ0YWludHkoKTtcblxuICAgICAgICAgICAgLy8gS2FsbWFuIGdhaW5cbiAgICAgICAgICAgIGNvbnN0IEsgPSBwcmVkQ292ICogdGhpcy5DICogKDEgLyAoKHRoaXMuQyAqIHByZWRDb3YgKiB0aGlzLkMpICsgdGhpcy5RKSk7XG5cbiAgICAgICAgICAgIC8vIENvcnJlY3Rpb25cbiAgICAgICAgICAgIHRoaXMueCA9IHByZWRYICsgSyAqICh6IC0gKHRoaXMuQyAqIHByZWRYKSk7XG4gICAgICAgICAgICB0aGlzLmNvdiA9IHByZWRDb3YgLSAoSyAqIHRoaXMuQyAqIHByZWRDb3YpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMueDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVkaWN0IG5leHQgdmFsdWVcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IFt1XSBDb250cm9sXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIHByZWRpY3QodSA9IDApIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLkEgKiB0aGlzLngpICsgKHRoaXMuQiAqIHUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB1bmNlcnRhaW50eSBvZiBmaWx0ZXJcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdW5jZXJ0YWludHkoKSB7XG4gICAgICAgIHJldHVybiAoKHRoaXMuQSAqIHRoaXMuY292KSAqIHRoaXMuQSkgKyB0aGlzLlI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBsYXN0IGZpbHRlcmVkIG1lYXN1cmVtZW50XG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGxhc3RNZWFzdXJlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgbWVhc3VyZW1lbnQgbm9pc2UgUVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBub2lzZVxuICAgICAqL1xuICAgIHNldE1lYXN1cmVtZW50Tm9pc2Uobm9pc2U6IG51bWJlcikge1xuICAgICAgICB0aGlzLlEgPSBub2lzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHByb2Nlc3Mgbm9pc2UgUlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBub2lzZVxuICAgICAqL1xuICAgIHNldFByb2Nlc3NOb2lzZShub2lzZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuUiA9IG5vaXNlO1xuICAgIH1cbn0iXX0=