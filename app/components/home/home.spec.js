describe('HomeController', function() {
    var HomeController, HomeServiceMock, $scope, $httpBackend;

    beforeEach(module('application'));

    beforeEach(module(function() {
        HomeServiceMock = {
            getRepositories: function(user) {},
            putStarOnRepository: function(repository) {}
        };
    }));

    beforeEach(inject(function($controller, $rootScope, _$httpBackend_) {
        $scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;

        HomeController = $controller('components.home.HomeController', {
            $scope: $scope,
            HomeService: HomeServiceMock
        });

    }));

    it('should pass a dummy test', function() {
        expect(HomeController).toBeTruthy();
    });

    it('should have HomeController defined', function() {
        expect(HomeController).toBeDefined();
    });

    it('should have the appropriate default values', function() {
        expect(HomeController.repositories).toEqual([]);
    });

    it('should loading be true when is started controller', function() {
        expect(HomeController.loading).toBe(true);
    });

    it('should call getRepositories method', function() {
        spyOn(HomeServiceMock, 'getRepositories').andCallThrough();
        HomeServiceMock.getRepositories('hyagogoularte');

        expect(HomeServiceMock.getRepositories).toHaveBeenCalled();
    });
});
