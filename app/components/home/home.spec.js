describe('HomeController', function() {
    var HomeController, HomeService, $scope, $httpBackend;

    beforeEach(module('pascalprecht.translate'));
    beforeEach(module('application'));

    beforeEach(inject(function($controller, $rootScope, _$translate_, _$httpBackend_) {
        $scope = $rootScope.$new();
        $translate = _$translate_;
        $httpBackend = _$httpBackend_;

        HomeController = $controller('components.home.HomeController', {
            $scope: $scope,
            $translate: $translate
        });

    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should pass a dummy test', function() {
        expect(HomeController).toBeTruthy();
    });

    it('should have HomeController defined', function() {
        expect(HomeController).toBeDefined();
    });

    it('should have the appropriate default values', function() {
        expect(HomeController.repositories).toEqual([]);
    });

    it('should loading be false when is started controller', function() {
        expect(HomeController.loading).toBe(true);
    });
/*
    describe('Successful repositories retrieval', function() {
        it('should get repositories from github api when controller is loaded', function() {

            spyOn(RequestService, 'getRepositories');
            $httpBackend.when('GET', 'assets/locale/locale-en_EN.json').respond(200);

            // ApplicationController.onChooseLang('en_EN');
            // expect($translate.use).toHaveBeenCalledWith('en_EN');
        });
    })*/

    /* 
       it('should switch the translation from portuguese to english', function() {
            $httpBackend.when('GET', 'assets/locale/locale-en_EN.json').respond(200);
            spyOn($translate, 'use');

            HomeController.onChooseLang('en_EN');
            expect($translate.use).toHaveBeenCalledWith('en_EN');
        });

        it('should have a predefined language after start', function() {
            expect($translate.use()).toEqual('pt_BR');
        });

        it('should switch the translation from portuguese to english', function() {
            $httpBackend.when('GET', 'assets/locale/locale-en_EN.json').respond(200);
            spyOn($translate, 'use');

            HomeController.onChooseLang('en_EN');
            expect($translate.use).toHaveBeenCalledWith('en_EN');
        });
*/
});
