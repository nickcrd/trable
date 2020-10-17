"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _http = _interopRequireDefault(require("http"));

var _database = _interopRequireDefault(require("./config/database"));

var _logger = _interopRequireDefault(require("./utils/logger"));

var _DeviceRouter = _interopRequireDefault(require("./routes/device/DeviceRouter"));

var _ApiRouter = _interopRequireDefault(require("./routes/ApiRouter"));

var _genericErrorHandler = _interopRequireDefault(require("./middlewares/genericErrorHandler"));

var _validationErrorHandler = _interopRequireDefault(require("./middlewares/validationErrorHandler"));

var Sentry = _interopRequireWildcard(require("@sentry/node"));

var _LocationRouter = _interopRequireDefault(require("./routes/location/LocationRouter"));

var _MapRouter = _interopRequireDefault(require("./routes/map/MapRouter"));

var _nodeConfigTs = require("node-config-ts");

var _getManifest = _interopRequireDefault(require("./routes/getManifest"));

var _SocketManager = _interopRequireDefault(require("./sockets/SocketManager"));

var TrableApp = /*#__PURE__*/function () {
  function TrableApp() {
    (0, _classCallCheck2["default"])(this, TrableApp);
    (0, _defineProperty2["default"])(this, "expressApp", void 0);
    this.expressApp = (0, _express["default"])();
    this.loadModules();
    this.registerMiddlewares();
  }

  (0, _createClass2["default"])(TrableApp, [{
    key: "loadModules",
    value: function loadModules() {
      // Init Sentry Logger
      if (_nodeConfigTs.config.sentryUrl) {
        _logger["default"].info("Initializing Sentry");

        Sentry.init({
          dsn: _nodeConfigTs.config.sentryUrl
        });
        this.expressApp.use(Sentry.Handlers.requestHandler());
      }

      new _database["default"](_nodeConfigTs.config.mongoUrl).connect();
    }
  }, {
    key: "registerMiddlewares",
    value: function registerMiddlewares() {
      this.expressApp.use((0, _morgan["default"])('dev', {
        stream: {
          write: function write(msg) {
            return _logger["default"].debug(msg.trim());
          }
        }
      }));
      this.expressApp.use(_express["default"].json());
      this.expressApp.use((0, _cookieParser["default"])());
    }
  }, {
    key: "registerRouters",
    value: function registerRouters(routers) {
      var _this = this;

      routers.forEach(function (router) {
        _this.expressApp.use(router.baseRoute, router.expressRouter);
      });
      return this;
    }
  }, {
    key: "start",
    value: function start(port) {
      // Register manifest roue
      (0, _getManifest["default"])(this.expressApp); // Error handlers need to be registered last

      this.expressApp.use(Sentry.Handlers.errorHandler());
      this.expressApp.use(_validationErrorHandler["default"]);
      this.expressApp.use(_genericErrorHandler["default"]);
      this.expressApp.options('*', require('cors')());
      var httpServer = new _http["default"].Server(this.expressApp);

      _SocketManager["default"].setupSockets(httpServer);

      httpServer.listen(port, function () {
        _logger["default"].info("TRABLE BACKEND ------------------------------");

        _logger["default"].info(" Started Trable server on port " + port);

        _logger["default"].info("---------------------------------------------");
      });
      return this;
    }
  }]);
  return TrableApp;
}();

var app = new TrableApp().registerRouters([new _ApiRouter["default"]("v1", [new _DeviceRouter["default"](), new _LocationRouter["default"](), new _MapRouter["default"]()])]).start(8080);
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAudHMiXSwibmFtZXMiOlsiVHJhYmxlQXBwIiwiZXhwcmVzc0FwcCIsImxvYWRNb2R1bGVzIiwicmVnaXN0ZXJNaWRkbGV3YXJlcyIsImNvbmZpZyIsInNlbnRyeVVybCIsImxvZ2dlciIsImluZm8iLCJTZW50cnkiLCJpbml0IiwiZHNuIiwidXNlIiwiSGFuZGxlcnMiLCJyZXF1ZXN0SGFuZGxlciIsIk1vbmdvQ29ubmVjdGlvbiIsIm1vbmdvVXJsIiwiY29ubmVjdCIsInN0cmVhbSIsIndyaXRlIiwibXNnIiwiZGVidWciLCJ0cmltIiwiZXhwcmVzcyIsImpzb24iLCJyb3V0ZXJzIiwiZm9yRWFjaCIsInJvdXRlciIsImJhc2VSb3V0ZSIsImV4cHJlc3NSb3V0ZXIiLCJwb3J0IiwiZXJyb3JIYW5kbGVyIiwidmFsaWRhdGlvbkVycm9ySGFuZGxlciIsImdlbmVyaWNFcnJvckhhbmRsZXIiLCJvcHRpb25zIiwicmVxdWlyZSIsImh0dHBTZXJ2ZXIiLCJodHRwIiwiU2VydmVyIiwiU29ja2V0TWFuYWdlciIsInNldHVwU29ja2V0cyIsImxpc3RlbiIsImFwcCIsInJlZ2lzdGVyUm91dGVycyIsIkFwaVJvdXRlciIsIkRldmljZVJvdXRlciIsIkxvY2F0aW9uUm91dGVyIiwiTWFwUm91dGVyIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0lBRU1BLFM7QUFHRix1QkFBYztBQUFBO0FBQUE7QUFDVixTQUFLQyxVQUFMLEdBQWtCLDBCQUFsQjtBQUNBLFNBQUtDLFdBQUw7QUFDQSxTQUFLQyxtQkFBTDtBQUNIOzs7O2tDQUVxQjtBQUNsQjtBQUNBLFVBQUlDLHFCQUFPQyxTQUFYLEVBQXNCO0FBQ2xCQywyQkFBT0MsSUFBUCxDQUFZLHFCQUFaOztBQUNBQyxRQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWTtBQUFFQyxVQUFBQSxHQUFHLEVBQUVOLHFCQUFPQztBQUFkLFNBQVo7QUFDQSxhQUFLSixVQUFMLENBQWdCVSxHQUFoQixDQUFvQkgsTUFBTSxDQUFDSSxRQUFQLENBQWdCQyxjQUFoQixFQUFwQjtBQUNIOztBQUVGLFVBQUlDLG9CQUFKLENBQW9CVixxQkFBT1csUUFBM0IsRUFBcUNDLE9BQXJDO0FBQ0Y7OzswQ0FFNkI7QUFDMUIsV0FBS2YsVUFBTCxDQUFnQlUsR0FBaEIsQ0FBb0Isd0JBQU8sS0FBUCxFQUFjO0FBQUVNLFFBQUFBLE1BQU0sRUFBRTtBQUFFQyxVQUFBQSxLQUFLLEVBQUUsZUFBQUMsR0FBRztBQUFBLG1CQUFJYixtQkFBT2MsS0FBUCxDQUFhRCxHQUFHLENBQUNFLElBQUosRUFBYixDQUFKO0FBQUE7QUFBWjtBQUFWLE9BQWQsQ0FBcEI7QUFDQSxXQUFLcEIsVUFBTCxDQUFnQlUsR0FBaEIsQ0FBb0JXLG9CQUFRQyxJQUFSLEVBQXBCO0FBQ0EsV0FBS3RCLFVBQUwsQ0FBZ0JVLEdBQWhCLENBQW9CLCtCQUFwQjtBQUNIOzs7b0NBRXNCYSxPLEVBQXlCO0FBQUE7O0FBQzVDQSxNQUFBQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsVUFBQ0MsTUFBRCxFQUFZO0FBQ3hCLFFBQUEsS0FBSSxDQUFDekIsVUFBTCxDQUFnQlUsR0FBaEIsQ0FBb0JlLE1BQU0sQ0FBQ0MsU0FBM0IsRUFBc0NELE1BQU0sQ0FBQ0UsYUFBN0M7QUFDSCxPQUZEO0FBR0EsYUFBTyxJQUFQO0FBQ0g7OzswQkFFWUMsSSxFQUFjO0FBQ3ZCO0FBQ0EsbUNBQVksS0FBSzVCLFVBQWpCLEVBRnVCLENBSXZCOztBQUNBLFdBQUtBLFVBQUwsQ0FBZ0JVLEdBQWhCLENBQW9CSCxNQUFNLENBQUNJLFFBQVAsQ0FBZ0JrQixZQUFoQixFQUFwQjtBQUNBLFdBQUs3QixVQUFMLENBQWdCVSxHQUFoQixDQUFvQm9CLGtDQUFwQjtBQUNBLFdBQUs5QixVQUFMLENBQWdCVSxHQUFoQixDQUFvQnFCLCtCQUFwQjtBQUdBLFdBQUsvQixVQUFMLENBQWdCZ0MsT0FBaEIsQ0FBd0IsR0FBeEIsRUFBNkJDLE9BQU8sQ0FBQyxNQUFELENBQVAsRUFBN0I7QUFFQSxVQUFNQyxVQUFVLEdBQUcsSUFBSUMsaUJBQUtDLE1BQVQsQ0FBZ0IsS0FBS3BDLFVBQXJCLENBQW5COztBQUNBcUMsZ0NBQWNDLFlBQWQsQ0FBMkJKLFVBQTNCOztBQUVBQSxNQUFBQSxVQUFVLENBQUNLLE1BQVgsQ0FBa0JYLElBQWxCLEVBQXdCLFlBQU07QUFDMUJ2QiwyQkFBT0MsSUFBUCxDQUFZLCtDQUFaOztBQUNBRCwyQkFBT0MsSUFBUCxDQUFZLG9DQUFvQ3NCLElBQWhEOztBQUNBdkIsMkJBQU9DLElBQVAsQ0FBWSwrQ0FBWjtBQUNILE9BSkQ7QUFLQSxhQUFPLElBQVA7QUFDSDs7Ozs7QUFHTCxJQUFNa0MsR0FBRyxHQUFHLElBQUl6QyxTQUFKLEdBQ1AwQyxlQURPLENBQ1MsQ0FBRSxJQUFJQyxxQkFBSixDQUFjLElBQWQsRUFBb0IsQ0FDL0IsSUFBSUMsd0JBQUosRUFEK0IsRUFFL0IsSUFBSUMsMEJBQUosRUFGK0IsRUFHL0IsSUFBSUMscUJBQUosRUFIK0IsQ0FBcEIsQ0FBRixDQURULEVBTVBDLEtBTk8sQ0FNRCxJQU5DLENBQVo7ZUFRZU4sRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgc29ja2V0aW8sIHtTb2NrZXR9IGZyb20gXCJzb2NrZXQuaW9cIlxuaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tIFwiY29va2llLXBhcnNlclwiO1xuaW1wb3J0IG1vcmdhbiBmcm9tIFwibW9yZ2FuXCI7XG5cbmltcG9ydCBodHRwIGZyb20gXCJodHRwXCJcblxuaW1wb3J0IE1vbmdvQ29ubmVjdGlvbiBmcm9tIFwiLi9jb25maWcvZGF0YWJhc2VcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4vdXRpbHMvbG9nZ2VyXCI7XG5cbmltcG9ydCBUcmFibGVSb3V0ZXIgZnJvbSBcIi4vcm91dGVzL1RyYWJsZVJvdXRlclwiO1xuaW1wb3J0IERldmljZVJvdXRlciBmcm9tIFwiLi9yb3V0ZXMvZGV2aWNlL0RldmljZVJvdXRlclwiO1xuaW1wb3J0IEFwaVJvdXRlciBmcm9tIFwiLi9yb3V0ZXMvQXBpUm91dGVyXCI7XG5cbmltcG9ydCBnZW5lcmljRXJyb3JIYW5kbGVyIGZyb20gXCIuL21pZGRsZXdhcmVzL2dlbmVyaWNFcnJvckhhbmRsZXJcIjtcbmltcG9ydCB2YWxpZGF0aW9uRXJyb3JIYW5kbGVyIGZyb20gXCIuL21pZGRsZXdhcmVzL3ZhbGlkYXRpb25FcnJvckhhbmRsZXJcIjtcblxuaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gXCJAc2VudHJ5L25vZGVcIjtcbmltcG9ydCBMb2NhdGlvblJvdXRlciBmcm9tIFwiLi9yb3V0ZXMvbG9jYXRpb24vTG9jYXRpb25Sb3V0ZXJcIjtcbmltcG9ydCBNYXBSb3V0ZXIgZnJvbSBcIi4vcm91dGVzL21hcC9NYXBSb3V0ZXJcIjtcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwibm9kZS1jb25maWctdHNcIjtcbmltcG9ydCBnZXRNYW5pZmVzdCBmcm9tIFwiLi9yb3V0ZXMvZ2V0TWFuaWZlc3RcIjtcbmltcG9ydCBBdXRoQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy9BdXRoQ29udHJvbGxlclwiO1xuaW1wb3J0IEdlbmVyaWNSZXNwb25zZSBmcm9tIFwiLi9tb2RlbHMvR2VuZXJpY1Jlc3BvbnNlXCI7XG5pbXBvcnQgU29ja2V0TWFuYWdlciBmcm9tIFwiLi9zb2NrZXRzL1NvY2tldE1hbmFnZXJcIjtcblxuY2xhc3MgVHJhYmxlQXBwIHtcbiAgICBwdWJsaWMgZXhwcmVzc0FwcDogZXhwcmVzcy5BcHBsaWNhdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV4cHJlc3NBcHAgPSBleHByZXNzKCk7XG4gICAgICAgIHRoaXMubG9hZE1vZHVsZXMoKVxuICAgICAgICB0aGlzLnJlZ2lzdGVyTWlkZGxld2FyZXMoKVxuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZE1vZHVsZXMoKSB7XG4gICAgICAgIC8vIEluaXQgU2VudHJ5IExvZ2dlclxuICAgICAgICBpZiAoY29uZmlnLnNlbnRyeVVybCkge1xuICAgICAgICAgICAgbG9nZ2VyLmluZm8oXCJJbml0aWFsaXppbmcgU2VudHJ5XCIpXG4gICAgICAgICAgICBTZW50cnkuaW5pdCh7IGRzbjogY29uZmlnLnNlbnRyeVVybCB9KTtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc0FwcC51c2UoU2VudHJ5LkhhbmRsZXJzLnJlcXVlc3RIYW5kbGVyKCkpXG4gICAgICAgIH1cblxuICAgICAgIG5ldyBNb25nb0Nvbm5lY3Rpb24oY29uZmlnLm1vbmdvVXJsKS5jb25uZWN0KClcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZ2lzdGVyTWlkZGxld2FyZXMoKSB7XG4gICAgICAgIHRoaXMuZXhwcmVzc0FwcC51c2UobW9yZ2FuKCdkZXYnLCB7IHN0cmVhbTogeyB3cml0ZTogbXNnID0+IGxvZ2dlci5kZWJ1Zyhtc2cudHJpbSgpKSB9fSkpO1xuICAgICAgICB0aGlzLmV4cHJlc3NBcHAudXNlKGV4cHJlc3MuanNvbigpKTtcbiAgICAgICAgdGhpcy5leHByZXNzQXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyUm91dGVycyhyb3V0ZXJzOiBUcmFibGVSb3V0ZXJbXSkge1xuICAgICAgICByb3V0ZXJzLmZvckVhY2goKHJvdXRlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5leHByZXNzQXBwLnVzZShyb3V0ZXIuYmFzZVJvdXRlLCByb3V0ZXIuZXhwcmVzc1JvdXRlcilcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydChwb3J0OiBudW1iZXIpIHtcbiAgICAgICAgLy8gUmVnaXN0ZXIgbWFuaWZlc3Qgcm91ZVxuICAgICAgICBnZXRNYW5pZmVzdCh0aGlzLmV4cHJlc3NBcHApXG5cbiAgICAgICAgLy8gRXJyb3IgaGFuZGxlcnMgbmVlZCB0byBiZSByZWdpc3RlcmVkIGxhc3RcbiAgICAgICAgdGhpcy5leHByZXNzQXBwLnVzZShTZW50cnkuSGFuZGxlcnMuZXJyb3JIYW5kbGVyKCkpXG4gICAgICAgIHRoaXMuZXhwcmVzc0FwcC51c2UodmFsaWRhdGlvbkVycm9ySGFuZGxlcilcbiAgICAgICAgdGhpcy5leHByZXNzQXBwLnVzZShnZW5lcmljRXJyb3JIYW5kbGVyKVxuXG5cbiAgICAgICAgdGhpcy5leHByZXNzQXBwLm9wdGlvbnMoJyonLCByZXF1aXJlKCdjb3JzJykoKSlcblxuICAgICAgICBjb25zdCBodHRwU2VydmVyID0gbmV3IGh0dHAuU2VydmVyKHRoaXMuZXhwcmVzc0FwcClcbiAgICAgICAgU29ja2V0TWFuYWdlci5zZXR1cFNvY2tldHMoaHR0cFNlcnZlcilcblxuICAgICAgICBodHRwU2VydmVyLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gICAgICAgICAgICBsb2dnZXIuaW5mbyhcIlRSQUJMRSBCQUNLRU5EIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxuICAgICAgICAgICAgbG9nZ2VyLmluZm8oXCIgU3RhcnRlZCBUcmFibGUgc2VydmVyIG9uIHBvcnQgXCIgKyBwb3J0KVxuICAgICAgICAgICAgbG9nZ2VyLmluZm8oXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufVxuXG5jb25zdCBhcHAgPSBuZXcgVHJhYmxlQXBwKClcbiAgICAucmVnaXN0ZXJSb3V0ZXJzKFsgbmV3IEFwaVJvdXRlcihcInYxXCIsIFtcbiAgICAgICAgICAgIG5ldyBEZXZpY2VSb3V0ZXIoKSxcbiAgICAgICAgICAgIG5ldyBMb2NhdGlvblJvdXRlcigpLFxuICAgICAgICAgICAgbmV3IE1hcFJvdXRlcigpXG4gICAgICAgIF0pXSlcbiAgICAuc3RhcnQoODA4MClcblxuZXhwb3J0IGRlZmF1bHQgYXBwIl19