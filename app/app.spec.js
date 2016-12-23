describe('ApplicationController', function() {
    describe('isCurrentUrl', function() {
        var ApplicationController, $location, $scope, $translate, rootScope, httpBackend;

        beforeEach(module('pascalprecht.translate'));
        beforeEach(module('application'));

        beforeEach(inject(function($controller, _$location_, $rootScope, _$translate_, _$httpBackend_) {
            $location = _$location_;
            $scope = $rootScope.$new();
            $translate = _$translate_;
            ApplicationController = $controller('ApplicationController', {
                $location: $location,
                $scope: $scope,
                $translate: $translate
            });

            $httpBackend = _$httpBackend_;
        }));

        it('should pass a dummy test', function() {
            expect(ApplicationController).toBeTruthy();
        });

        it('should have a predefined language after start', function() {
            expect($translate.use()).toEqual('pt_BR');
        });

        it('should switch the translation from english to german', function() {
            $httpBackend.when('GET', 'assets/locale/locale-en_EN.json').respond(200);
            spyOn($translate, 'use');

            ApplicationController.toggleLang();

            expect($translate.use).toHaveBeenCalledWith('en_EN');
        });

    });
});
