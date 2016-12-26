(function() {
    'use strict';

    angular
        .module('application')
        .controller('ApplicationController', ApplicationController);

    function ApplicationController($translate) {
        var thiz = this;

        thiz.pageTitle = 'SocialBase - Test';

        thiz.onChooseLang = function(value) {
            $translate.use(value);
        };
    }

})();
