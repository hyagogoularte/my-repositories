(function() {
    'use strict';

    angular
        .module('application')
        .config(HomeConfig);

    function HomeConfig($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                'main': {
                    controller: 'src.main.home.HomeController',
                    controllerAs: 'homeController',
                    templateUrl: '../src/main/home/home.html'
                }}

        });
    }
})();
