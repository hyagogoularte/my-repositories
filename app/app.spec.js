describe('ApplicationController', function() {
    var ApplicationController, $scope, $translate, $httpBackend;

    beforeEach(module('pascalprecht.translate'));
    beforeEach(module('application'));

    beforeEach(inject(function($controller, $rootScope, _$translate_, _$httpBackend_) {
        $scope = $rootScope.$new();
        $translate = _$translate_;
        ApplicationController = $controller('ApplicationController', {
            $scope: $scope,
            $translate: $translate
        });

        $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should pass a dummy test', function() {
        expect(ApplicationController).toBeTruthy();
    });

    it('should have ApplicationController defined', function() {
        expect(ApplicationController).toBeDefined();
    });

    it('should have a predefined language after start', function() {
        expect($translate.use()).toEqual('pt_BR');
    });

    it('should have the appropriate default values', function() {
        expect(ApplicationController.pageTitle).toEqual('SocialBase - Test');
    });

    it('should switch the translation from portuguese to english', function() {
        $httpBackend.when('GET', 'assets/locale/locale-en_EN.json').respond(200);
        spyOn($translate, 'use');

        ApplicationController.onChooseLang('en_EN');
        expect($translate.use).toHaveBeenCalledWith('en_EN');
    });

});
