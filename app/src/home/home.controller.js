(function() {
    'use strict';

    angular
        .module('application')
        .controller('src.home.HomeController', HomeController);

    function HomeController(GenericFactory) {
        var loading = true;
        console.log('1te');
        var url = 'https://api.github.com/users/hyagogoularte/repos';

        GenericFactory.getData(url).then(function(response) {
            console.log(response);
        });
    }

    HomeController.$inject = ['src.GenericFactory'];
})();
