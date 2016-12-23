angular.module('templates-app', ['../src/home/home.html']);

angular.module("../src/home/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../src/home/home.html",
    "<section>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-6\">\n" +
    "            <label for=\"searchUser\">{{'search_for_a_github_user' | translate}}</label>\n" +
    "            <div class=\"input-group\">\n" +
    "                <input name=\"data[search]\" class=\"form-control\" id=\"search\" type=\"text\" placeholder=\"Pesquisar Itens\">\n" +
    "                <span class=\"input-group-btn\">\n" +
    "	                 <button class=\"btn btn-primary\" type=\"button\">\n" +
    "						<span class=\"glyphicon glyphicon-search\"></span>\n" +
    "                </button>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div id=\"list\" class=\"row\">\n" +
    "        <ol class=\"list-repositories\">\n" +
    "            <li class=\"repository\">\n" +
    "                <figure class=\"language-avatar\">\n" +
    "                    <img src=\"img_pulpit.jpg\" alt=\"The Pulpit Rock\" class=\"img-circle\">\n" +
    "                </figure>\n" +
    "                <div class=\"repository-info\">\n" +
    "                    <div class=\"info-repository\">\n" +
    "                        <h4>REPOSITORIO</h4>\n" +
    "                        <!-- CRIAR LINK -->\n" +
    "                    </div>\n" +
    "                    <div class=\"info-owner\">\n" +
    "                        <h6>OWNER</h6>\n" +
    "                        <!-- CRIAR LINK -->\n" +
    "                    </div>\n" +
    "                    <div class=\"additional-info\">\n" +
    "                        <div class=\"info-forks\">\n" +
    "                            <span class=\"glyphicon glyphicon-random\" aria-hidden=\"true\"></span> Forks\n" +
    "                        </div>\n" +
    "                        <div class=\"info-stars\">\n" +
    "                            <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span> Stars\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "        </ol>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);
