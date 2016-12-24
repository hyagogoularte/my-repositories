(function() {
    'use strict';

    angular
        .module('application')
        .filter('validateLanguage', HomeFilter)
        .controller('src.main.home.HomeController', HomeController);

    function HomeFilter() {
        return function(input) {
            if (angular.isUndefined(input) || input === null) {
                return 'no-language';
            }

            return angular.lowercase(input);
        };
    }

    function HomeController(HomeService) {
        var thiz = this;

        thiz.loading = true;
        thiz.repositories = [];

        HomeService.getRepositories('hyagogoularte').then(function(response) {
            thiz.repositories = response.data;
            thiz.loading = false;
        });

        thiz.onClickSettarOnRepository = function(repository) {
            var owner = repository.owner.login;
            var repositoryName = repository.name;

            HomeService.putStarOnRepository(owner, repositoryName).then(function(response) {
                HomeService.getRepository(owner, repositoryName).then(function(response) {
                    repository.stargazers_count = response.data.stargazers_count;
                });
            });
        };
    }

    HomeController.$inject = ['src.main.home.HomeService'];
})();
