angular.module('templates-app', ['../src/home/home.html']);

angular.module("../src/home/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../src/home/home.html",
    "<section>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-6\">\n" +
    "            <label for=\"searchUser\">{{'search_for_a_github_user' | translate}}</label>\n" +
    "            {{homeController.teste}}\n" +
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
    "    <div id=\"list\" class=\"row list-repositories\">\n" +
    "        <article>\n" +
    "            <section class=\"col-md-4\" ng-repeat=\"repository in homeController.repositories\">\n" +
    "                <div class=\"repository\">\n" +
    "                    <figure class=\"language-avatar\">\n" +
    "                        <img src=\"../../assets/images/{{repository.language | validateLanguage}}.png\" alt=\"{{repository.language}}\" class=\"img-circle\">\n" +
    "                    </figure>\n" +
    "                    <div class=\"repository-info\">\n" +
    "                        <div class=\"box-info\">\n" +
    "                            <div class=\"info-repository\">\n" +
    "                                <h4>{{repository.name}}</h4>\n" +
    "                            </div>\n" +
    "                            <div class=\"info-owner\">\n" +
    "                                <h6>{{repository.owner.login}}</h6>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"additional-info\">\n" +
    "                            <div class=\"info-forks\">\n" +
    "                                <span class=\"glyphicon glyphicon-random\" aria-hidden=\"true\"></span> {{repository.forks}} Forks\n" +
    "                            </div>\n" +
    "                            <div class=\"info-stars\">\n" +
    "                                <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span> {{repository.stars}} Stars\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </section>\n" +
    "        </article>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);
