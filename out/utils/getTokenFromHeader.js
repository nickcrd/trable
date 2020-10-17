"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getAuthTokenFromHeader;

function getAuthTokenFromHeader(req) {
  var header = req.headers.authorization;

  if (header && header.split(' ')[0] === 'Bearer') {
    return header.split(' ')[1];
  }

  return undefined;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9nZXRUb2tlbkZyb21IZWFkZXIudHMiXSwibmFtZXMiOlsiZ2V0QXV0aFRva2VuRnJvbUhlYWRlciIsInJlcSIsImhlYWRlciIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwic3BsaXQiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFZSxTQUFTQSxzQkFBVCxDQUFnQ0MsR0FBaEMsRUFBa0U7QUFDN0UsTUFBTUMsTUFBTSxHQUFHRCxHQUFHLENBQUNFLE9BQUosQ0FBWUMsYUFBM0I7O0FBQ0EsTUFBSUYsTUFBTSxJQUFJQSxNQUFNLENBQUNHLEtBQVAsQ0FBYSxHQUFiLEVBQWtCLENBQWxCLE1BQXlCLFFBQXZDLEVBQWlEO0FBQzdDLFdBQU9ILE1BQU0sQ0FBQ0csS0FBUCxDQUFhLEdBQWIsRUFBa0IsQ0FBbEIsQ0FBUDtBQUNIOztBQUNELFNBQU9DLFNBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVxdWVzdH0gZnJvbSBcImV4cHJlc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QXV0aFRva2VuRnJvbUhlYWRlcihyZXE6IFJlcXVlc3QpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IGhlYWRlciA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb25cbiAgICBpZiAoaGVhZGVyICYmIGhlYWRlci5zcGxpdCgnICcpWzBdID09PSAnQmVhcmVyJykge1xuICAgICAgICByZXR1cm4gaGVhZGVyLnNwbGl0KCcgJylbMV07XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWRcbn1cbiJdfQ==