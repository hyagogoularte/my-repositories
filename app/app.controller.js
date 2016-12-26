(function() {
    'use strict';

    angular
        .module('application')
        .controller('ApplicationController', ApplicationController);

    function ApplicationController($translate) {
        var app = this;

        app.pageTitle = 'SocialBase - Test';

        app.onChooseLang = function(value) {
            $translate.use(value);
        };
    }

})();
