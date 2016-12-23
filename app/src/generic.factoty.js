(function() {
    'use strict';

    angular
        .module('application')
        .factory('src.GenericFactory', GenericFactory);

    function GenericFactory($http) {

        GenericFactory.getData = function(url, params) {
            params = params || {};
            return $http({
                method: 'GET',
                url: url,
                params: params
            });
        };

        return GenericFactory;
    }

    GenericFactory.$inject = ['$http'];
})();
