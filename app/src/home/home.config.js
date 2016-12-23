(function() {
    'use strict';

    angular
        .module('application.home', ['ui.router'])
        .config(HomeConfig);

    function HomeConfig($stateProvider) {
        console.log('state', $stateProvider);
        
        $stateProvider.state('home', {
            url: '/home',
            views: {
                "main": {
                    controller: 'HomeController',
                    controllerAs: 'home',
                    templateUrl: '../src/home/home.html'
                }
            }
        });
    }
})();
