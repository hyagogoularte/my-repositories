(function() {
    'use strict';

    angular
        .module('application')
        .controller('ApplicationController', ApplicationController);

    function ApplicationController($translate) {
        var app = this;

        app.pageTitle = 'SocialBase - Test';

        app.toggleLang = function() {
            if ($translate.use() === 'en_EN') {
                $translate.use('pt_BR');
            } else {
                $translate.use('en_EN');
            }
        };
    }

})();
