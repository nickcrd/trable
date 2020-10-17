"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Vector3 = /*#__PURE__*/function () {
  function Vector3() {
    var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0, 0];
    (0, _classCallCheck2["default"])(this, Vector3);
    (0, _defineProperty2["default"])(this, "points", void 0);
    this.points = {
      x: points[0],
      y: points[1],
      z: points[2]
    };
  }

  (0, _createClass2["default"])(Vector3, [{
    key: "toString",
    value: function toString() {
      return "Vector3{" + this.points.x + ", " + this.points.y + ", " + this.points.z + "}";
    }
  }, {
    key: "add",
    value: function add(b) {
      this.x += b.x;
      this.y += b.y;
      this.z += b.z;
      return this;
    }
  }, {
    key: "substract",
    value: function substract(b) {
      this.x -= b.x;
      this.y -= b.y;
      this.z -= b.z;
      return this;
    }
  }, {
    key: "scale",
    value: function scale(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
      return this;
    }
  }, {
    key: "cross",
    value: function cross(b) {
      this.x = this.y * b.z - this.z * b.y;
      this.y = this.z * b.x - this.x * b.z;
      this.z = this.x * b.y - this.y * b.x;
      return this;
    }
  }, {
    key: "to",
    value: function to(target) {
      return new Vector3([target.x - this.x, target.y - this.y, target.z - this.z]);
    }
  }, {
    key: "x",
    get: function get() {
      return this.points.x;
    },
    set: function set(value) {
      this.points.x = value;
    }
  }, {
    key: "y",
    get: function get() {
      return this.points.y;
    },
    set: function set(value) {
      this.points.y = value;
    }
  }, {
    key: "z",
    get: function get() {
      return this.points.z;
    },
    set: function set(value) {
      this.points.z = value;
    }
  }], [{
    key: "fromLocation",
    value: function fromLocation(point) {
      return new Vector3([point.x, point.y, point.z]);
    }
  }]);
  return Vector3;
}();

exports["default"] = Vector3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXRoL21vZGVscy9WZWN0b3IzLnRzIl0sIm5hbWVzIjpbIlZlY3RvcjMiLCJwb2ludHMiLCJ4IiwieSIsInoiLCJiIiwic2NhbGFyIiwidGFyZ2V0IiwidmFsdWUiLCJwb2ludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxPO0FBR2pCLHFCQUFnQztBQUFBLFFBQXBCQyxNQUFvQix1RUFBWCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFXO0FBQUE7QUFBQTtBQUM1QixTQUFLQSxNQUFMLEdBQWM7QUFBQ0MsTUFBQUEsQ0FBQyxFQUFHRCxNQUFNLENBQUMsQ0FBRCxDQUFYO0FBQWdCRSxNQUFBQSxDQUFDLEVBQUVGLE1BQU0sQ0FBQyxDQUFELENBQXpCO0FBQThCRyxNQUFBQSxDQUFDLEVBQUVILE1BQU0sQ0FBQyxDQUFEO0FBQXZDLEtBQWQ7QUFDSDs7OzsrQkE4QlU7QUFDUCxhQUFPLGFBQWEsS0FBS0EsTUFBTCxDQUFZQyxDQUF6QixHQUE2QixJQUE3QixHQUFvQyxLQUFLRCxNQUFMLENBQVlFLENBQWhELEdBQW9ELElBQXBELEdBQTJELEtBQUtGLE1BQUwsQ0FBWUcsQ0FBdkUsR0FBMEUsR0FBakY7QUFDSDs7O3dCQUVVQyxDLEVBQXFCO0FBQzVCLFdBQUtILENBQUwsSUFBVUcsQ0FBQyxDQUFDSCxDQUFaO0FBQ0EsV0FBS0MsQ0FBTCxJQUFVRSxDQUFDLENBQUNGLENBQVo7QUFDQSxXQUFLQyxDQUFMLElBQVVDLENBQUMsQ0FBQ0QsQ0FBWjtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7OEJBRWdCQyxDLEVBQXFCO0FBQ2xDLFdBQUtILENBQUwsSUFBVUcsQ0FBQyxDQUFDSCxDQUFaO0FBQ0EsV0FBS0MsQ0FBTCxJQUFVRSxDQUFDLENBQUNGLENBQVo7QUFDQSxXQUFLQyxDQUFMLElBQVVDLENBQUMsQ0FBQ0QsQ0FBWjtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7MEJBRVlFLE0sRUFBeUI7QUFDbEMsV0FBS0osQ0FBTCxJQUFVSSxNQUFWO0FBQ0EsV0FBS0gsQ0FBTCxJQUFVRyxNQUFWO0FBQ0EsV0FBS0YsQ0FBTCxJQUFVRSxNQUFWO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7OzswQkFFWUQsQyxFQUFxQjtBQUM5QixXQUFLSCxDQUFMLEdBQVUsS0FBS0MsQ0FBTCxHQUFTRSxDQUFDLENBQUNELENBQVosR0FBa0IsS0FBS0EsQ0FBTCxHQUFTQyxDQUFDLENBQUNGLENBQXRDO0FBQ0EsV0FBS0EsQ0FBTCxHQUFVLEtBQUtDLENBQUwsR0FBU0MsQ0FBQyxDQUFDSCxDQUFaLEdBQWtCLEtBQUtBLENBQUwsR0FBU0csQ0FBQyxDQUFDRCxDQUF0QztBQUNBLFdBQUtBLENBQUwsR0FBVSxLQUFLRixDQUFMLEdBQVNHLENBQUMsQ0FBQ0YsQ0FBWixHQUFrQixLQUFLQSxDQUFMLEdBQVNFLENBQUMsQ0FBQ0gsQ0FBdEM7QUFDQSxhQUFPLElBQVA7QUFDSDs7O3VCQUVTSyxNLEVBQWlCO0FBQ3ZCLGFBQU8sSUFBSVAsT0FBSixDQUFZLENBQ2ZPLE1BQU0sQ0FBQ0wsQ0FBUCxHQUFXLEtBQUtBLENBREQsRUFFZkssTUFBTSxDQUFDSixDQUFQLEdBQVcsS0FBS0EsQ0FGRCxFQUdmSSxNQUFNLENBQUNILENBQVAsR0FBVyxLQUFLQSxDQUhELENBQVosQ0FBUDtBQUtIOzs7d0JBOURPO0FBQ0osYUFBTyxLQUFLSCxNQUFMLENBQVlDLENBQW5CO0FBQ0gsSztzQkFVS00sSyxFQUFPO0FBQ1QsV0FBS1AsTUFBTCxDQUFZQyxDQUFaLEdBQWdCTSxLQUFoQjtBQUNIOzs7d0JBVk87QUFDSixhQUFPLEtBQUtQLE1BQUwsQ0FBWUUsQ0FBbkI7QUFDSCxLO3NCQVVLSyxLLEVBQU87QUFDVCxXQUFLUCxNQUFMLENBQVlFLENBQVosR0FBZ0JLLEtBQWhCO0FBQ0g7Ozt3QkFWTztBQUNKLGFBQU8sS0FBS1AsTUFBTCxDQUFZRyxDQUFuQjtBQUNILEs7c0JBVUtJLEssRUFBTztBQUNULFdBQUtQLE1BQUwsQ0FBWUcsQ0FBWixHQUFnQkksS0FBaEI7QUFDSDs7O2lDQTFCbUJDLEssRUFBMEI7QUFDMUMsYUFBTyxJQUFJVCxPQUFKLENBQVksQ0FBQ1MsS0FBSyxDQUFDUCxDQUFQLEVBQVVPLEtBQUssQ0FBQ04sQ0FBaEIsRUFBbUJNLEtBQUssQ0FBQ0wsQ0FBekIsQ0FBWixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4uLy4uL21vZGVscy9kZXZpY2UvTG9jYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yMyB7XG4gICAgcHJpdmF0ZSBwb2ludHM6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwb2ludHMgPSBbMCwgMCwgMF0pIHtcbiAgICAgICAgdGhpcy5wb2ludHMgPSB7eCA6IHBvaW50c1swXSwgeTogcG9pbnRzWzFdLCB6OiBwb2ludHNbMl19XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21Mb2NhdGlvbihwb2ludDogTG9jYXRpb24pOiBWZWN0b3IzIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKFtwb2ludC54LCBwb2ludC55LCBwb2ludC56XSlcbiAgICB9XG5cbiAgICBnZXQgeCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRzLnhcbiAgICB9XG5cbiAgICBnZXQgeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRzLnlcbiAgICB9XG5cbiAgICBnZXQgeigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRzLnpcbiAgICB9XG5cbiAgICBzZXQgeCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnBvaW50cy54ID0gdmFsdWVcbiAgICB9XG5cbiAgICBzZXQgeSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnBvaW50cy55ID0gdmFsdWVcbiAgICB9XG5cbiAgICBzZXQgeih2YWx1ZSkge1xuICAgICAgICB0aGlzLnBvaW50cy56ID0gdmFsdWVcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiVmVjdG9yM3tcIiArIHRoaXMucG9pbnRzLnggKyBcIiwgXCIgKyB0aGlzLnBvaW50cy55ICsgXCIsIFwiICsgdGhpcy5wb2ludHMueiArXCJ9XCJcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkKGI6IFZlY3RvcjMpOiBWZWN0b3IzIHtcbiAgICAgICAgdGhpcy54ICs9IGIueFxuICAgICAgICB0aGlzLnkgKz0gYi55XG4gICAgICAgIHRoaXMueiArPSBiLnpcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBwdWJsaWMgc3Vic3RyYWN0KGI6IFZlY3RvcjMpOiBWZWN0b3IzIHtcbiAgICAgICAgdGhpcy54IC09IGIueFxuICAgICAgICB0aGlzLnkgLT0gYi55XG4gICAgICAgIHRoaXMueiAtPSBiLnpcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBwdWJsaWMgc2NhbGUoc2NhbGFyOiBudW1iZXIpOiBWZWN0b3IzIHtcbiAgICAgICAgdGhpcy54ICo9IHNjYWxhclxuICAgICAgICB0aGlzLnkgKj0gc2NhbGFyXG4gICAgICAgIHRoaXMueiAqPSBzY2FsYXJcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBwdWJsaWMgY3Jvc3MoYjogVmVjdG9yMyk6IFZlY3RvcjMge1xuICAgICAgICB0aGlzLnggPSAodGhpcy55ICogYi56KSAtICh0aGlzLnogKiBiLnkpXG4gICAgICAgIHRoaXMueSA9ICh0aGlzLnogKiBiLngpIC0gKHRoaXMueCAqIGIueilcbiAgICAgICAgdGhpcy56ID0gKHRoaXMueCAqIGIueSkgLSAodGhpcy55ICogYi54KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHB1YmxpYyB0byh0YXJnZXQ6IFZlY3RvcjMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKFtcbiAgICAgICAgICAgIHRhcmdldC54IC0gdGhpcy54LFxuICAgICAgICAgICAgdGFyZ2V0LnkgLSB0aGlzLnksXG4gICAgICAgICAgICB0YXJnZXQueiAtIHRoaXMuelxuICAgICAgICBdKVxuICAgIH1cblxuXG59Il19