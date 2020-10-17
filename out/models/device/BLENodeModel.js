"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var BLENodeSchema = new _mongoose.Schema({
  displayName: {
    type: String,
    required: false
  },
  location: {
    x: {
      type: Number
    },
    y: {
      type: Number
    },
    z: {
      type: Number
    }
  },
  apiUserId: {
    type: _mongoose.Schema.Types.ObjectId,
    required: true
  }
});

var _default = _mongoose["default"].model("nodes", BLENodeSchema);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvZGV2aWNlL0JMRU5vZGVNb2RlbC50cyJdLCJuYW1lcyI6WyJCTEVOb2RlU2NoZW1hIiwiU2NoZW1hIiwiZGlzcGxheU5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJsb2NhdGlvbiIsIngiLCJOdW1iZXIiLCJ5IiwieiIsImFwaVVzZXJJZCIsIlR5cGVzIiwiT2JqZWN0SWQiLCJtb25nb29zZSIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFTQSxJQUFNQSxhQUFxQixHQUFHLElBQUlDLGdCQUFKLENBQVc7QUFDckNDLEVBQUFBLFdBQVcsRUFBRTtBQUFFQyxJQUFBQSxJQUFJLEVBQUVDLE1BQVI7QUFBaUJDLElBQUFBLFFBQVEsRUFBRTtBQUEzQixHQUR3QjtBQUVyQ0MsRUFBQUEsUUFBUSxFQUFFO0FBQ05DLElBQUFBLENBQUMsRUFBRTtBQUFFSixNQUFBQSxJQUFJLEVBQUVLO0FBQVIsS0FERztBQUVOQyxJQUFBQSxDQUFDLEVBQUU7QUFBRU4sTUFBQUEsSUFBSSxFQUFFSztBQUFSLEtBRkc7QUFHTkUsSUFBQUEsQ0FBQyxFQUFFO0FBQUVQLE1BQUFBLElBQUksRUFBRUs7QUFBUjtBQUhHLEdBRjJCO0FBT3JDRyxFQUFBQSxTQUFTLEVBQUU7QUFBRVIsSUFBQUEsSUFBSSxFQUFFRixpQkFBT1csS0FBUCxDQUFhQyxRQUFyQjtBQUErQlIsSUFBQUEsUUFBUSxFQUFFO0FBQXpDO0FBUDBCLENBQVgsQ0FBOUI7O2VBVWVTLHFCQUFTQyxLQUFULENBQXdCLE9BQXhCLEVBQWlDZixhQUFqQyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7U2NoZW1hLCBEb2N1bWVudCB9IGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IExvY2F0aW9uIGZyb20gXCIuL0xvY2F0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQkxFTm9kZSBleHRlbmRzIERvY3VtZW50IHtcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nXG4gICAgbG9jYXRpb246IExvY2F0aW9uXG4gICAgYXBpVXNlcklkOiBzdHJpbmdcbn1cblxuY29uc3QgQkxFTm9kZVNjaGVtYTogU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgZGlzcGxheU5hbWU6IHsgdHlwZTogU3RyaW5nICwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgbG9jYXRpb246IHtcbiAgICAgICAgeDogeyB0eXBlOiBOdW1iZXIgfSxcbiAgICAgICAgeTogeyB0eXBlOiBOdW1iZXIgfSxcbiAgICAgICAgejogeyB0eXBlOiBOdW1iZXIgfVxuICAgIH0sXG4gICAgYXBpVXNlcklkOiB7IHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVxdWlyZWQ6IHRydWUgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsPEJMRU5vZGU+KFwibm9kZXNcIiwgQkxFTm9kZVNjaGVtYSk7Il19