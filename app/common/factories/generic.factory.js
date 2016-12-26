(function() {
    'use strict';

    angular
        .module('application')
        .factory('shared.factory.GenericFactory', GenericFactory);

    function GenericFactory($http) {
        function request(method, url, params) {
            return $http({
                method: method,
                url: url,
                params: params
            });
        }

        GenericFactory.getData = function(url, params) {
            params = params || {};
            return request('GET', url, params);
        };

        GenericFactory.putData = function(url, params) {
            params = params || {};
            return request('PUT', url, params);
        };

        GenericFactory.deleteData = function(url, params) {
            params = params || {};
            return request('DELETE', url, params);
        };

        return GenericFactory;
    }

    GenericFactory.$inject = ['$http'];
})();
