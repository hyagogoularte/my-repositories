describe('HomeController', function() {
    describe('isCurrentUrl', function() {
        var HomeController, $scope, rootScope, httpBackend;

        beforeEach(module('pascalprecht.translate'));
        beforeEach(module('application'));

        beforeEach(inject(function($controller, $rootScope, _$translate_, _$httpBackend_) {
            $scope = $rootScope.$new();
            $translate = _$translate_;
            HomeController = $controller('components.home.HomeController', {
                $scope: $scope,
                $translate: $translate
            });

            $httpBackend = _$httpBackend_;
        }));

        it('should pass a dummy test', function() {
            expect(HomeController).toBeTruthy();
        });

   /*     it('should switch the translation from portuguese to english', function() {
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
});
