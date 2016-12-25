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
                    controller: 'components.home.HomeController',
                    controllerAs: 'homeController',
                    templateUrl: '../components/home/home.html'
                }}

        });
    }
})();
