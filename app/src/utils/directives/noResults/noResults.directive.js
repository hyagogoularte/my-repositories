(function() {
    'use strict';

    angular
        .module('application')
        .directive('noResults', NoResultsDirective);

    function NoResultsDirective() {
        return {
            restrict: 'E',
            replace: true,
            translate: true,
            templateUrl: '../src/utils/directives/noResults/noResults.html'
        };
    }
})();
