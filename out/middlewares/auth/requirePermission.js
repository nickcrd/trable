"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = requirePermission;

var _GenericResponse = _interopRequireDefault(require("../../models/GenericResponse"));

function requirePermission(permission) {
  return function (req, res, next) {
    if (!req.user) {
      res.status(401).json(new _GenericResponse["default"](401, "Unauthorized"));
      return;
    } // Convert single string to string[] so we can use one single line to check for perms


    if (typeof permission === 'string') {
      permission = [permission];
    }

    var trableUser = req.user;

    if ('permissions' in trableUser) {
      var hasPerm = permission.every(function (perm) {
        return trableUser.permissions.includes(perm);
      });

      if (hasPerm) {
        next();
      } else {
        res.status(403).json(new _GenericResponse["default"](401, "Missing permission (" + permission.toString() + ") to perform action."));
      }
    } else {
      res.status(401).json(new _GenericResponse["default"](401, "Unauthorized"));
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy9hdXRoL3JlcXVpcmVQZXJtaXNzaW9uLnRzIl0sIm5hbWVzIjpbInJlcXVpcmVQZXJtaXNzaW9uIiwicGVybWlzc2lvbiIsInJlcSIsInJlcyIsIm5leHQiLCJ1c2VyIiwic3RhdHVzIiwianNvbiIsIkdlbmVyaWNSZXNwb25zZSIsInRyYWJsZVVzZXIiLCJoYXNQZXJtIiwiZXZlcnkiLCJwZXJtIiwicGVybWlzc2lvbnMiLCJpbmNsdWRlcyIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7QUFJZSxTQUFTQSxpQkFBVCxDQUEyQkMsVUFBM0IsRUFBMEQ7QUFDckUsU0FBTyxVQUFDQyxHQUFELEVBQWVDLEdBQWYsRUFBOEJDLElBQTlCLEVBQXFEO0FBQ3hELFFBQUksQ0FBQ0YsR0FBRyxDQUFDRyxJQUFULEVBQWU7QUFDWEYsTUFBQUEsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsSUFBSUMsMkJBQUosQ0FBb0IsR0FBcEIsRUFBeUIsY0FBekIsQ0FBckI7QUFDQTtBQUNILEtBSnVELENBTXhEOzs7QUFDQSxRQUFJLE9BQU9QLFVBQVAsS0FBc0IsUUFBMUIsRUFBb0M7QUFDaENBLE1BQUFBLFVBQVUsR0FBRyxDQUFFQSxVQUFGLENBQWI7QUFDSDs7QUFFRCxRQUFNUSxVQUFVLEdBQUdQLEdBQUcsQ0FBQ0csSUFBdkI7O0FBQ0EsUUFBSSxpQkFBaUJJLFVBQXJCLEVBQ0E7QUFDSSxVQUFNQyxPQUFPLEdBQUdULFVBQVUsQ0FBQ1UsS0FBWCxDQUFpQixVQUFBQyxJQUFJO0FBQUEsZUFBSUgsVUFBVSxDQUFDSSxXQUFYLENBQXVCQyxRQUF2QixDQUFnQ0YsSUFBaEMsQ0FBSjtBQUFBLE9BQXJCLENBQWhCOztBQUNBLFVBQUlGLE9BQUosRUFBYTtBQUNUTixRQUFBQSxJQUFJO0FBQ1AsT0FGRCxNQUVPO0FBQ0hELFFBQUFBLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLElBQUlDLDJCQUFKLENBQW9CLEdBQXBCLEVBQXlCLHlCQUF5QlAsVUFBVSxDQUFDYyxRQUFYLEVBQXpCLEdBQWdELHNCQUF6RSxDQUFyQjtBQUNIO0FBQ0osS0FSRCxNQVFPO0FBQ0haLE1BQUFBLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLElBQUlDLDJCQUFKLENBQW9CLEdBQXBCLEVBQXlCLGNBQXpCLENBQXJCO0FBQ0g7QUFDSixHQXZCRDtBQXdCSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IEdlbmVyaWNSZXNwb25zZSBmcm9tIFwiLi4vLi4vbW9kZWxzL0dlbmVyaWNSZXNwb25zZVwiO1xuaW1wb3J0IHsgVHJhYmxlQXBpVXNlciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvYXV0aC9UcmFibGVBcGlVc2VyTW9kZWxcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4uLy4uL3V0aWxzL2xvZ2dlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlUGVybWlzc2lvbihwZXJtaXNzaW9uOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIHJldHVybiAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKCFyZXEudXNlcikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24obmV3IEdlbmVyaWNSZXNwb25zZSg0MDEsIFwiVW5hdXRob3JpemVkXCIpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29udmVydCBzaW5nbGUgc3RyaW5nIHRvIHN0cmluZ1tdIHNvIHdlIGNhbiB1c2Ugb25lIHNpbmdsZSBsaW5lIHRvIGNoZWNrIGZvciBwZXJtc1xuICAgICAgICBpZiAodHlwZW9mIHBlcm1pc3Npb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBwZXJtaXNzaW9uID0gWyBwZXJtaXNzaW9uIF1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRyYWJsZVVzZXIgPSByZXEudXNlciBhcyBUcmFibGVBcGlVc2VyXG4gICAgICAgIGlmICgncGVybWlzc2lvbnMnIGluIHRyYWJsZVVzZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGhhc1Blcm0gPSBwZXJtaXNzaW9uLmV2ZXJ5KHBlcm0gPT4gdHJhYmxlVXNlci5wZXJtaXNzaW9ucy5pbmNsdWRlcyhwZXJtKSlcbiAgICAgICAgICAgIGlmIChoYXNQZXJtKSB7XG4gICAgICAgICAgICAgICAgbmV4dCgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKG5ldyBHZW5lcmljUmVzcG9uc2UoNDAxLCBcIk1pc3NpbmcgcGVybWlzc2lvbiAoXCIgKyBwZXJtaXNzaW9uLnRvU3RyaW5nKCkgK1wiKSB0byBwZXJmb3JtIGFjdGlvbi5cIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMSkuanNvbihuZXcgR2VuZXJpY1Jlc3BvbnNlKDQwMSwgXCJVbmF1dGhvcml6ZWRcIikpXG4gICAgICAgIH1cbiAgICB9XG59Il19