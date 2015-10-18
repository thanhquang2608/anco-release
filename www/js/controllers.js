var app = angular.module('starter.controllers', []);

app.controller('AppCtrl', function ($rootScope, $scope, $state, $ionicPopup, $ionicLoading, AuthService, AUTH_EVENTS, NETWORK_EVENTS) {
    $rootScope.TIME_OUT = 60000;

    $scope.$on(AUTH_EVENTS.notAuthorized, function (event) {
        var alertPopup = $ionicPopup.alert({
            title: 'Unauthorized!',
            template: 'You are not allowed to access this resource.'
        });
    });

    $scope.$on(AUTH_EVENTS.notAuthenticated, function (event) {
        AuthService.logout();
        $state.go('login');
        var alertPopup = $ionicPopup.alert({
            title: 'Session Lost!',
            template: 'Sorry, You have to login again.'
        });
    });

    $scope.$on(NETWORK_EVENTS.nointernet, function (event) {
        $ionicLoading.hide();
        var alertPopup = $ionicPopup.alert({
            template: 'Không kết nối được với server'
        });
    });

    $scope.$on(NETWORK_EVENTS.timeout, function (event) {
        $ionicLoading.hide();
        var alertPopup = $ionicPopup.alert({
            template: 'Kết nối timeout'
        });
    });

    $scope.setCurrentUsername = function (name) {
        $scope.username = name;
    };

    $scope.$on('$ionicView.beforeEnter', function () {
        console.log('enter');
        var stateName = $state.current.name;
        if (stateName === 'tabs.survey' || stateName === 'tabs.dealers' || stateName === 'tabs.account') {
            $rootScope.hideTabs = false;
        } else {
            $rootScope.hideTabs = true;
        }
    });

    $rootScope.processRequestError =  function(response) {
        if (response.status != 0 && response.status != 408) {
            var alertPopup = $ionicPopup.alert({
                 title: 'Thất bại!',
                 template: err.data.message
            });
        }
    }
})

.controller('HomeCtrl', function ($scope) {

});