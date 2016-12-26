(function() {
    'use strict';

    angular
        .module('application')
        .factory('components.home.HomeService', HomeService);

    function HomeService(GenericFactory) {

        HomeService.getRepositories = function(user) {
            var url = 'https://api.github.com/users/:user/repos';
            return GenericFactory.getData(url.replace(':user', user));
        };

        HomeService.putStarOnRepository = function(owner, repositoryName) {
            // esse token é temporario, somente para teste.
            var url = 'https://api.github.com/user/starred/:owner/:repo?access_token=:token';
            return GenericFactory.putData(url.replace(':owner', owner).replace(':repo', repositoryName).replace(':token', '7$39$67$70$b7$22$53$58$3c$d6$83$4b$a9$ae$8e$d2$43$00$bd$41$8').replace(/[$]+/g,''));
        };

        HomeService.getRepository = function(owner, repositoryName) {
            var url = 'https://api.github.com/repos/:owner/:repo';
            return GenericFactory.getData(url.replace(':owner', owner).replace(':repo', repositoryName));
        };

        HomeService.getStargazers = function(owner, repositoryName) {
            var url = 'https://api.github.com/repos/:owner/:repo/stargazers';
            return GenericFactory.getData(url.replace(':owner', owner).replace(':repo', repositoryName));
        };
        return HomeService;
    }

    HomeService.$inject = ['shared.factory.GenericFactory'];
})();
