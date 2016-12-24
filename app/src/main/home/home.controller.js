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

    function HomeController(GenericFactory) {
        var thiz = this;
        var url = 'https://api.github.com/users/hyagogoularte/repos';

        thiz.loading = true;
        thiz.repositories = [];

        GenericFactory.getData(url).then(function(response) {
            thiz.repositories = response.data;
            thiz.loading = false;
        });
    }

    HomeController.$inject = ['src.GenericFactory'];
})();
