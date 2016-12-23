(function() {
  'use strict';

  angular
    .module('application')
    .config(ApplicationConfig);

  function ApplicationConfig($urlRouterProvider, $httpProvider, $translateProvider) {
    $urlRouterProvider.otherwise('home');
    
    $translateProvider.registerAvailableLanguageKeys(['pt_BR', 'en_EN'], {
      'pt_*': 'pt_BR',
      'en_*': 'en_EN'
    });

    $translateProvider.useStaticFilesLoader({
      prefix: 'assets/locale/locale-',
      suffix: '.json'
    });

    $translateProvider.use('pt_BR');
  }
})();
