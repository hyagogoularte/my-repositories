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
            templateUrl: '../common/directives/noResults/noResults.html'
        };
    }
})();
