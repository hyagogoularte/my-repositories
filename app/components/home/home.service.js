(function() {
    'use strict';

    angular
        .module('application')
        .factory('components.home.HomeService', HomeService);

    function HomeService(GenericFactory, ACCESS_TOKEN) {

        HomeService.getRepositories = function(user) {
            var url = 'https://api.github.com/users/:user/repos';
            return GenericFactory.getData(url.replace(':user', user));
        };

        HomeService.putStarOnRepository = function(owner, repositoryName) {
            var url = 'https://api.github.com/user/starred/:owner/:repo?access_token=:token';
            return GenericFactory.putData(url.replace(':owner', owner).replace(':repo', repositoryName).replace(':token', ACCESS_TOKEN.github.token));
        };

        HomeService.removeStarOnRepository = function(owner, repositoryName) {
            var url = 'https://api.github.com/user/starred/:owner/:repo?access_token=:token';
            return GenericFactory.deleteData(url.replace(':owner', owner).replace(':repo', repositoryName).replace(':token', ACCESS_TOKEN.github.token));
        };

        HomeService.getRepository = function(owner, repositoryName) {
            var url = 'https://api.github.com/repos/:owner/:repo';
            return GenericFactory.getData(url.replace(':owner', owner).replace(':repo', repositoryName));
        };

        HomeService.getStargazers = function(owner, repositoryName) {
            //https://api.github.com/repos/hyagogoularte/my-repositories/stargazers
            var url = 'https://api.github.com/repos/:owner/:repo/stargazers';
            return GenericFactory.getData(url.replace(':owner', owner).replace(':repo', repositoryName));
        };
        return HomeService;
    }

    HomeService.$inject = ['shared.factory.GenericFactory', 'ACCESS_TOKEN'];
})();
