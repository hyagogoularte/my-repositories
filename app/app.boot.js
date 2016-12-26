(function() {
    'use strict';

    angular
        .module('application', [
            'templates-app',
            'templates-common',
            'ui.router',
            'pascalprecht.translate'
        ])
        .run(run);

    function run($rootScope, $state) {
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            if (typeof(current) !== 'undefined') {
                $templateCache.remove(current.templateUrl);
            }
        });
    }
})();
