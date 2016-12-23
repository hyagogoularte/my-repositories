(function() {
    'use strict';

    angular
        .module('application')
        .controller('GenericFactory', GenericFactory);

    function GenericFactory($http) {

        GenericFactory.getData = function(url, params) {
            return $http({
                method: 'GET',
                url: url,
                params: params
            });
        };

        return GenericFactory;
    }
})();
