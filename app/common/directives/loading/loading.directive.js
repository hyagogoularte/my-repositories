(function() {
    'use strict';

    angular
        .module('application')
        .directive('loading', LoadingDirective);

    function LoadingDirective() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../common/directives/loading/loading.html'
        };
    }
})();
