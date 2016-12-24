(function() {
    'use strict';

    angular
        .module('application')
        .constant('ACCESS_TOKEN', {
            github: {
                token: '9af259102217634f64e3018d2ab3c87fd0b2ad5b'
            }
        })
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
