(function() {
    'use strict';

    angular
        .module('application')
        .filter('validateLanguage', HomeFilter)
        .controller('src.home.HomeController', HomeController);

    function HomeFilter() {
        return function(input) {
            if (angular.isUndefined(input) || input === null) {
                return 'no-language';
            }

            return angular.lowercase(input);
        };
    }

    function HomeController(GenericFactory) {
        var home = this;
        var loading = true;
        var url = 'https://api.github.com/users/hyagogoularte/repos';

        home.repositories = [];
        home.teste = 'tete11';

        GenericFactory.getData(url).then(function(response) {
            home.repositories = response.data;
            loading = false;
        });
    }

    HomeController.$inject = ['src.GenericFactory'];
})();
