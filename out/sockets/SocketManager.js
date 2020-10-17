"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SocketManager = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _socket = _interopRequireDefault(require("socket.io"));

var _socketAuthMiddleware = _interopRequireDefault(require("../middlewares/auth/socketAuthMiddleware"));

var _logger = _interopRequireDefault(require("../utils/logger"));

var SocketManager = /*#__PURE__*/function () {
  function SocketManager() {
    (0, _classCallCheck2["default"])(this, SocketManager);
    (0, _defineProperty2["default"])(this, "socketIdMap", new Map());
    (0, _defineProperty2["default"])(this, "io", void 0);
  }

  (0, _createClass2["default"])(SocketManager, [{
    key: "setupSockets",
    value: function setupSockets(server) {
      var _this$io, _this$io2;

      this.io = (0, _socket["default"])(server, {
        // Got wrong typebindings, so i'll just set it to type any
        handlePreflightRequest: function handlePreflightRequest(req, res) {
          var headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": req.headers.origin,
            "Access-Control-Allow-Credentials": true
          };
          res.writeHead(200, headers);
          res.end();
        }
      });
      (_this$io = this.io) === null || _this$io === void 0 ? void 0 : _this$io.use(_socketAuthMiddleware["default"]);
      (_this$io2 = this.io) === null || _this$io2 === void 0 ? void 0 : _this$io2.on('connection', function (socket) {
        /*
        this.socketIdMap.forEach((value, key) => {
            io.to(value).emit('hello', "You're API User " + key)
        })
          */
      });
      /*
      setInterval(() => {
          this.socketIdMap.forEach((value, key) => {
              this.io?.to(value).emit('updateLocation', {x: Math.random() * 3, y: Math.random() * 5 })
          })
      }, 5000)
      */

      /* setInterval(() => {
           this.socketIdMap.forEach((value, key) => {
               this.io?.to(value).emit('updateLocation', {x: (Math.random() * 0.5) + 3, y: (Math.random() * 1) + 2 })
           })
       }, 5000)
        */
    }
  }, {
    key: "notifyClientPositionChange",
    value: function notifyClientPositionChange(userId, location) {
      var _this$io3;

      _logger["default"].info("New Location Update: ", {
        userId: userId,
        location: location
      });

      (_this$io3 = this.io) === null || _this$io3 === void 0 ? void 0 : _this$io3.to(this.socketIdMap.get(userId)).emit('updateLocation', location);
    }
  }]);
  return SocketManager;
}();

exports.SocketManager = SocketManager;

var _default = new SocketManager();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb2NrZXRzL1NvY2tldE1hbmFnZXIudHMiXSwibmFtZXMiOlsiU29ja2V0TWFuYWdlciIsIk1hcCIsInNlcnZlciIsImlvIiwiaGFuZGxlUHJlZmxpZ2h0UmVxdWVzdCIsInJlcSIsInJlcyIsImhlYWRlcnMiLCJvcmlnaW4iLCJ3cml0ZUhlYWQiLCJlbmQiLCJ1c2UiLCJzb2NrZXRBdXRoTWlkZGxld2FyZSIsIm9uIiwic29ja2V0IiwidXNlcklkIiwibG9jYXRpb24iLCJsb2dnZXIiLCJpbmZvIiwidG8iLCJzb2NrZXRJZE1hcCIsImdldCIsImVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztJQUdhQSxhOzs7MERBR2lDLElBQUlDLEdBQUosRTs7Ozs7O2lDQUd0QkMsTSxFQUFxQjtBQUFBOztBQUNyQyxXQUFLQyxFQUFMLEdBQVUsd0JBQVFELE1BQVIsRUFBZ0I7QUFDdEI7QUFDQUUsUUFBQUEsc0JBQXNCLEVBQUUsZ0NBQUNDLEdBQUQsRUFBV0MsR0FBWCxFQUF3QjtBQUM1QyxjQUFNQyxPQUFPLEdBQUc7QUFDWiw0Q0FBZ0MsNkJBRHBCO0FBRVosMkNBQStCRixHQUFHLENBQUNFLE9BQUosQ0FBWUMsTUFGL0I7QUFHWixnREFBb0M7QUFIeEIsV0FBaEI7QUFLQUYsVUFBQUEsR0FBRyxDQUFDRyxTQUFKLENBQWMsR0FBZCxFQUFtQkYsT0FBbkI7QUFDQUQsVUFBQUEsR0FBRyxDQUFDSSxHQUFKO0FBQ0g7QUFWcUIsT0FBaEIsQ0FBVjtBQWFBLHVCQUFLUCxFQUFMLHNEQUFTUSxHQUFULENBQWFDLGdDQUFiO0FBRUEsd0JBQUtULEVBQUwsd0RBQVNVLEVBQVQsQ0FBWSxZQUFaLEVBQTBCLFVBQUNDLE1BQUQsRUFBb0I7QUFDMUM7Ozs7O0FBT0gsT0FSRDtBQVNBOzs7Ozs7OztBQVFEOzs7Ozs7QUFPRjs7OytDQUVpQ0MsTSxFQUFnQkMsUSxFQUFvQjtBQUFBOztBQUNsRUMseUJBQU9DLElBQVAsQ0FBWSx1QkFBWixFQUFxQztBQUFFSCxRQUFBQSxNQUFNLEVBQUVBLE1BQVY7QUFBa0JDLFFBQUFBLFFBQVEsRUFBRUE7QUFBNUIsT0FBckM7O0FBQ0Esd0JBQUtiLEVBQUwsd0RBQVNnQixFQUFULENBQVksS0FBS0MsV0FBTCxDQUFpQkMsR0FBakIsQ0FBcUJOLE1BQXJCLENBQVosRUFBMkNPLElBQTNDLENBQWdELGdCQUFoRCxFQUFrRU4sUUFBbEU7QUFDSDs7Ozs7OztlQUlVLElBQUloQixhQUFKLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cCBmcm9tIFwiaHR0cFwiO1xuaW1wb3J0IHNvY2tldHMsIHtTb2NrZXR9IGZyb20gJ3NvY2tldC5pbydcbmltcG9ydCBzb2NrZXRBdXRoTWlkZGxld2FyZSBmcm9tIFwiLi4vbWlkZGxld2FyZXMvYXV0aC9zb2NrZXRBdXRoTWlkZGxld2FyZVwiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vdXRpbHMvbG9nZ2VyXCI7XG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4uL21vZGVscy9kZXZpY2UvTG9jYXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIFNvY2tldE1hbmFnZXIge1xuXG4gICAgLy8gTWFwOiBBcGlVc2VyLklEIC0+IFNvY2tldC5JRFxuICAgIHB1YmxpYyBzb2NrZXRJZE1hcDogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXAoKVxuICAgIHByaXZhdGUgaW86IHNvY2tldHMuU2VydmVyIHwgdW5kZWZpbmVkXG5cbiAgICBwdWJsaWMgc2V0dXBTb2NrZXRzKHNlcnZlcjogaHR0cC5TZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5pbyA9IHNvY2tldHMoc2VydmVyLCB7XG4gICAgICAgICAgICAvLyBHb3Qgd3JvbmcgdHlwZWJpbmRpbmdzLCBzbyBpJ2xsIGp1c3Qgc2V0IGl0IHRvIHR5cGUgYW55XG4gICAgICAgICAgICBoYW5kbGVQcmVmbGlnaHRSZXF1ZXN0OiAocmVxOiBhbnksIHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCI6IFwiQ29udGVudC1UeXBlLCBBdXRob3JpemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IHJlcS5oZWFkZXJzLm9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiOiB0cnVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXMud3JpdGVIZWFkKDIwMCwgaGVhZGVycyk7XG4gICAgICAgICAgICAgICAgcmVzLmVuZCgpO1xuICAgICAgICAgICAgfX0pXG5cblxuICAgICAgICB0aGlzLmlvPy51c2Uoc29ja2V0QXV0aE1pZGRsZXdhcmUpXG5cbiAgICAgICAgdGhpcy5pbz8ub24oJ2Nvbm5lY3Rpb24nLCAoc29ja2V0OiBTb2NrZXQpID0+IHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICB0aGlzLnNvY2tldElkTWFwLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpby50byh2YWx1ZSkuZW1pdCgnaGVsbG8nLCBcIllvdSdyZSBBUEkgVXNlciBcIiArIGtleSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0pO1xuICAgICAgICAvKlxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldElkTWFwLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlvPy50byh2YWx1ZSkuZW1pdCgndXBkYXRlTG9jYXRpb24nLCB7eDogTWF0aC5yYW5kb20oKSAqIDMsIHk6IE1hdGgucmFuZG9tKCkgKiA1IH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCA1MDAwKVxuICAgICAgICAqL1xuXG4gICAgICAgLyogc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXRJZE1hcC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbz8udG8odmFsdWUpLmVtaXQoJ3VwZGF0ZUxvY2F0aW9uJywge3g6IChNYXRoLnJhbmRvbSgpICogMC41KSArIDMsIHk6IChNYXRoLnJhbmRvbSgpICogMSkgKyAyIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCA1MDAwKVxuXG4gICAgICAgICovXG4gICAgfVxuXG4gICAgcHVibGljIG5vdGlmeUNsaWVudFBvc2l0aW9uQ2hhbmdlKHVzZXJJZDogc3RyaW5nLCBsb2NhdGlvbjogTG9jYXRpb24pIHtcbiAgICAgICAgbG9nZ2VyLmluZm8oXCJOZXcgTG9jYXRpb24gVXBkYXRlOiBcIiwgeyB1c2VySWQ6IHVzZXJJZCwgbG9jYXRpb246IGxvY2F0aW9uIH0pXG4gICAgICAgIHRoaXMuaW8/LnRvKHRoaXMuc29ja2V0SWRNYXAuZ2V0KHVzZXJJZCkhKS5lbWl0KCd1cGRhdGVMb2NhdGlvbicsIGxvY2F0aW9uKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU29ja2V0TWFuYWdlcigpXG4iXX0=