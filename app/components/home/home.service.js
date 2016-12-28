(function() {
    'use strict';

    angular
        .module('application')
        .service('components.home.HomeService', HomeService);

    function HomeService(GenericFactory) {
        var URL_GITHUB_API = 'https://api.github.com';

        this.getRepositories = function(user) {
            var url = URL_GITHUB_API + '/users/:user/repos';
            return GenericFactory.getData(url.replace(':user', user));
        };

        this.putStarOnRepository = function(owner, repositoryName) {
            // esse token é temporario, somente para teste.
            var url = URL_GITHUB_API + '/user/starred/:owner/:repo?access_token=:token';
            return GenericFactory.putData(url.replace(':owner', owner).replace(':repo', repositoryName).replace(':token', '7$39$67$70$b7$22$53$58$3c$d6$83$4b$a9$ae$8e$d2$43$00$bd$41$8').replace(/[$]+/g, ''));
        };

        this.getRepository = function(owner, repositoryName) {
            var url = URL_GITHUB_API + '/repos/:owner/:repo';
            return GenericFactory.getData(url.replace(':owner', owner).replace(':repo', repositoryName));
        };

        this.getStargazers = function(owner, repositoryName) {
            var url = URL_GITHUB_API + '/repos/:owner/:repo/stargazers';
            return GenericFactory.getData(url.replace(':owner', owner).replace(':repo', repositoryName));
        };
    }

    HomeService.$inject = ['shared.factory.GenericFactory'];
})();
