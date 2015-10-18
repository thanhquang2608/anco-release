app.controller('LoginController', function ($scope, $state, $ionicPopup, $ionicLoading, AuthService, REGIONS, USERS) {
    $scope.regions = REGIONS;

    $scope.users = USERS;

    // AC1003 @p5Zq8@
    // 8 PC1738 @p2Oh6@
    // PC1979 @p7Xb1@
    $scope.user = {};
    // $scope.user.region = 104;
    // $scope.user.AC_PC = 0;

    $scope.data = {};

    // Nếu đã đăng nhập rồi thì chuyển sang trang home
    if (AuthService.isAuthenticated()) {
        $state.go("tabs.survey");
    }

    $scope.login = function (userdata) {
        $ionicLoading.show({ template: 'Đang đăng nhập...' });
        AuthService.login($scope.user).then(
            function (response) {
                $ionicLoading.hide();
                $scope.user.password = null;
                $state.go('tabs.survey', {}, { reload: true });
            },

            function (err) {
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                     title: 'Đăng nhập thất bại!',
                     template: err.data.message
                });
         });
    };
});