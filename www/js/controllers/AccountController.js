app.controller('AccountController', function ($rootScope, $scope, $state, $http, $ionicPopup, AuthService, AUTH_EVENTS) {
	$scope.getUser = function() {
        $scope.user = AuthService.user();
    }
   
    $scope.getUser();

    $rootScope.$on(AUTH_EVENTS.authenticated, function (event) {
       $scope.user = AuthService.user();
    });

    $scope.logout = function () {
        AuthService.logout();
        $state.go('login');
    };
});