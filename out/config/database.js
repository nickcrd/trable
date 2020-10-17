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

var _mongoose = _interopRequireDefault(require("mongoose"));

var _logger = _interopRequireDefault(require("../utils/logger"));

var MongoConnection = /*#__PURE__*/function () {
  function MongoConnection(mongoUrl) {
    (0, _classCallCheck2["default"])(this, MongoConnection);
    (0, _defineProperty2["default"])(this, "mongoUrl", void 0);
    this.mongoUrl = mongoUrl;
  }

  (0, _createClass2["default"])(MongoConnection, [{
    key: "connect",
    value: function () {
      var _connect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _logger["default"].info("Attempting to connect to MongoDB database...");

                _mongoose["default"].connect(this.mongoUrl, {
                  useNewUrlParser: true,
                  useUnifiedTopology: true
                }).then(function () {
                  _logger["default"].info("Connected to MongoDB database");
                })["catch"](function (err) {
                  _logger["default"].error("An error occurred while trying to connect to the MongoDB database", {
                    error: err.toString()
                  });
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connect() {
        return _connect.apply(this, arguments);
      }

      return connect;
    }()
  }]);
  return MongoConnection;
}();

var _default = MongoConnection;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvZGF0YWJhc2UudHMiXSwibmFtZXMiOlsiTW9uZ29Db25uZWN0aW9uIiwibW9uZ29VcmwiLCJsb2dnZXIiLCJpbmZvIiwibW9uZ29vc2UiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidGhlbiIsImVyciIsImVycm9yIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7SUFFTUEsZTtBQUdGLDJCQUFZQyxRQUFaLEVBQThCO0FBQUE7QUFBQTtBQUMxQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNIOzs7Ozs7Ozs7O0FBR0dDLG1DQUFPQyxJQUFQLENBQVksOENBQVo7O0FBQ0FDLHFDQUFTQyxPQUFULENBQWlCLEtBQUtKLFFBQXRCLEVBQWdDO0FBQUVLLGtCQUFBQSxlQUFlLEVBQUUsSUFBbkI7QUFBeUJDLGtCQUFBQSxrQkFBa0IsRUFBRTtBQUE3QyxpQkFBaEMsRUFBcUZDLElBQXJGLENBQTBGLFlBQU07QUFDNUZOLHFDQUFPQyxJQUFQLENBQVksK0JBQVo7QUFDSCxpQkFGRCxXQUVTLFVBQUFNLEdBQUcsRUFBSTtBQUNaUCxxQ0FBT1EsS0FBUCxDQUFhLG1FQUFiLEVBQWtGO0FBQUVBLG9CQUFBQSxLQUFLLEVBQUVELEdBQUcsQ0FBQ0UsUUFBSjtBQUFULG1CQUFsRjtBQUNILGlCQUpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQVNPWCxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vdXRpbHMvbG9nZ2VyXCI7XG5cbmNsYXNzIE1vbmdvQ29ubmVjdGlvbiB7XG4gICAgcHJpdmF0ZSBtb25nb1VybDogc3RyaW5nXG5cbiAgICBjb25zdHJ1Y3Rvcihtb25nb1VybDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubW9uZ29VcmwgPSBtb25nb1VybFxuICAgIH1cblxuICAgIGFzeW5jIGNvbm5lY3QoKSB7XG4gICAgICAgIGxvZ2dlci5pbmZvKFwiQXR0ZW1wdGluZyB0byBjb25uZWN0IHRvIE1vbmdvREIgZGF0YWJhc2UuLi5cIilcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdCh0aGlzLm1vbmdvVXJsLCB7IHVzZU5ld1VybFBhcnNlcjogdHJ1ZSwgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbG9nZ2VyLmluZm8oXCJDb25uZWN0ZWQgdG8gTW9uZ29EQiBkYXRhYmFzZVwiKVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgdHJ5aW5nIHRvIGNvbm5lY3QgdG8gdGhlIE1vbmdvREIgZGF0YWJhc2VcIiwgeyBlcnJvcjogZXJyLnRvU3RyaW5nKCkgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vbmdvQ29ubmVjdGlvbjtcbiJdfQ==