app.controller('UpdateGiacamController', function ($rootScope, $scope, $stateParams, $http, AuthService,
    AUTH_EVENTS, NETWORK, $ionicLoading, Dealers, $state, $ionicHistory, $ionicViewService) {       

    var serviceBase = NETWORK.BASE_URL;

    $scope.getUser = function () {
        $scope.user = AuthService.user();
    }

    $scope.getUser();
    $scope.submited = false;

    $rootScope.$on('$stateChangeStart', function (event, next, current) {
        //console.log("UpdateGiacamController change state");
        $scope.update = false;
        //$scope.initGiaCam();
    });

    $scope.setUpdate = function () {
        $scope.update = true;
    }

    $scope.giacam = {};
    $scope.giacam.GIACAM_KD = 0;
    $scope.giacam.GIA_CAM_GA = 0;
    $scope.giacam.GIA_CAM_VIT = 0;
    $scope.giacam.GIA_CAM_CUT = 0;
    // ------------------- GIA CAM ------------
    $scope.initGiaCam = function() {
        //console.log("INIT GIA CAM");
        

        if (Dealers.survey().GIACAM_ID != null) {
            var param = {
                token: AuthService.token()
            }
            $http.get(serviceBase + '/survey/giacam/' + Dealers.survey().GIACAM_ID, { params: param })
                .success(function (response) {
                    //console.log("load gia cam success");
                    $scope.giacam.GIACAM_KD = response.KD;
                    $scope.giacam.GIA_CAM_GA = response.Ga;
                    $scope.giacam.GIA_CAM_VIT = response.Vit;
                    $scope.giacam.GIA_CAM_CUT = response.Cut;
                }).error(function (err, status) {
                    //console.log("load dealers error " + err);
                });
        }
        else {
            $scope.giacam.GIACAM_KD = 0;
            $scope.giacam.GIA_CAM_GA = 0;
            $scope.giacam.GIA_CAM_VIT = 0;
            $scope.giacam.GIA_CAM_CUT = 0;
        }
        //console.log($scope.giacam);
    }

    $scope.updateGiaCam = function (isValid) {
        $scope.submited = true;

        if (!isValid) {
            $ionicLoading.hide();
            $ionicLoading.show({ template: 'Dữ liệu nhập chưa đúng, vui lòng kiểm tra lại!\n', noBackdrop: true, duration: 2000 });
            return;
        }

        if ($scope.update) {
            $ionicLoading.show({ template: 'Đang lưu...' });
            //console.log(Dealers.survey());
            var param = {
                token: AuthService.token(),
                surveyid: Dealers.survey().SurveyId,

                kd: $scope.giacam.GIACAM_KD,
                ga:  $scope.giacam.GIACAM_KD == 0 ? 0 : parseFloat($scope.giacam.GIA_CAM_GA),
                vit: $scope.giacam.GIACAM_KD == 0 ? 0 : parseFloat($scope.giacam.GIA_CAM_VIT),
                cut: $scope.giacam.GIACAM_KD == 0 ? 0 : parseFloat($scope.giacam.GIA_CAM_CUT)
            }
            if (Dealers.survey().GIACAM_ID) {
                param.giacamid = Dealers.survey().GIACAM_ID;
            }
            //console.log("Param");
            //console.log(param);

            $http.post(serviceBase + '/survey/create/giacam', param)
                .success(function (response) {
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
                    $scope.update = false;

                    $state.go('tabs.dealers', {}, { reload: true });

                }).error(function (err, status) {
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Lỗi trong quá trình xử lý!\n' + err.toString(), noBackdrop: true, duration: 2000 });
                });
        }
        else {
            $state.go('tabs.dealers', {}, { reload: true });
        }
    }
})