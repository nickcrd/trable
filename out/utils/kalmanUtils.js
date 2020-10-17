"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKalmanFilter = getKalmanFilter;
exports.getDefaultKalmanFilter = void 0;

var _KalmanFilter = _interopRequireDefault(require("./KalmanFilter"));

var _nodeConfigTs = require("node-config-ts");

var kalmanFiltersMap = new Map();

var getDefaultKalmanFilter = function getDefaultKalmanFilter() {
  return new _KalmanFilter["default"]({
    R: _nodeConfigTs.config.kalmanFilterConfig.R,
    Q: _nodeConfigTs.config.kalmanFilterConfig.Q
  });
};
/** @deprecated */


exports.getDefaultKalmanFilter = getDefaultKalmanFilter;

function getKalmanFilter(node) {
  if (!kalmanFiltersMap.has(node._id)) {
    kalmanFiltersMap.set(node._id, getDefaultKalmanFilter());
  }

  return kalmanFiltersMap.get(node._id);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9rYWxtYW5VdGlscy50cyJdLCJuYW1lcyI6WyJrYWxtYW5GaWx0ZXJzTWFwIiwiTWFwIiwiZ2V0RGVmYXVsdEthbG1hbkZpbHRlciIsIkthbG1hbkZpbHRlciIsIlIiLCJjb25maWciLCJrYWxtYW5GaWx0ZXJDb25maWciLCJRIiwiZ2V0S2FsbWFuRmlsdGVyIiwibm9kZSIsImhhcyIsIl9pZCIsInNldCIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUVBLElBQUlBLGdCQUEyQyxHQUFHLElBQUlDLEdBQUosRUFBbEQ7O0FBRU8sSUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFNO0FBQ3hDLFNBQU8sSUFBSUMsd0JBQUosQ0FBaUI7QUFBRUMsSUFBQUEsQ0FBQyxFQUFFQyxxQkFBT0Msa0JBQVAsQ0FBMEJGLENBQS9CO0FBQWtDRyxJQUFBQSxDQUFDLEVBQUVGLHFCQUFPQyxrQkFBUCxDQUEwQkM7QUFBL0QsR0FBakIsQ0FBUDtBQUNILENBRk07QUFJUDs7Ozs7QUFDTyxTQUFTQyxlQUFULENBQXlCQyxJQUF6QixFQUF3QztBQUMzQyxNQUFJLENBQUNULGdCQUFnQixDQUFDVSxHQUFqQixDQUFxQkQsSUFBSSxDQUFDRSxHQUExQixDQUFMLEVBQXFDO0FBQ2xDWCxJQUFBQSxnQkFBZ0IsQ0FBQ1ksR0FBakIsQ0FBcUJILElBQUksQ0FBQ0UsR0FBMUIsRUFBK0JULHNCQUFzQixFQUFyRDtBQUNGOztBQUNELFNBQU9GLGdCQUFnQixDQUFDYSxHQUFqQixDQUFxQkosSUFBSSxDQUFDRSxHQUExQixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JMRU5vZGV9IGZyb20gXCIuLi9tb2RlbHMvZGV2aWNlL0JMRU5vZGVNb2RlbFwiO1xuaW1wb3J0IEthbG1hbkZpbHRlciBmcm9tIFwiLi9LYWxtYW5GaWx0ZXJcIjtcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwibm9kZS1jb25maWctdHNcIjtcblxudmFyIGthbG1hbkZpbHRlcnNNYXA6IE1hcDxzdHJpbmcsIEthbG1hbkZpbHRlcj4gPSBuZXcgTWFwKClcblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRLYWxtYW5GaWx0ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBLYWxtYW5GaWx0ZXIoeyBSOiBjb25maWcua2FsbWFuRmlsdGVyQ29uZmlnLlIsIFE6IGNvbmZpZy5rYWxtYW5GaWx0ZXJDb25maWcuUSB9KVxufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRLYWxtYW5GaWx0ZXIobm9kZTogQkxFTm9kZSkge1xuICAgIGlmICgha2FsbWFuRmlsdGVyc01hcC5oYXMobm9kZS5faWQpKSB7XG4gICAgICAga2FsbWFuRmlsdGVyc01hcC5zZXQobm9kZS5faWQsIGdldERlZmF1bHRLYWxtYW5GaWx0ZXIoKSlcbiAgICB9XG4gICAgcmV0dXJuIGthbG1hbkZpbHRlcnNNYXAuZ2V0KG5vZGUuX2lkKVxufSJdfQ==