angular.module('templates-app', ['../src/home/home.html']);

angular.module("../src/home/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../src/home/home.html",
    "<h1>home</h1>\n" +
    "");
}]);
