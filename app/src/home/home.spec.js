// describe( 'home section', function() {

//   var controller, rootScope, httpBackend;

//   beforeEach(module('pascalprecht.translate'));
//   beforeEach(module('application'));


//   beforeEach( module( function( $translateProvider ) {
//     $translateProvider.registerAvailableLanguageKeys(['pt_BR', 'en_EN']);
//   }));

//   beforeEach(inject( function($injector){
//       controller = $injector.get('$controller');
//       rootScope = $injector.get('$rootScope');
//       httpBackend = $injector.get('$httpBackend');
//   }));

//   it( 'should have a predefined language after start', inject(function($translate) {
//     expect($translate.use()).toEqual('pt_BR');
//   }));

//   it( 'should switch the translation from english to german', inject(function($translate) {
//     httpBackend.when('GET', 'assets/locale/locale-en_EN.json').respond(200);
//     spyOn($translate, 'use');
  
//     var applicationController = controller('ApplicationController', {});
  
//     applicationController.toggleLang();
  
//     expect($translate.use).toHaveBeenCalledWith('en_EN');
//   }));


// });
