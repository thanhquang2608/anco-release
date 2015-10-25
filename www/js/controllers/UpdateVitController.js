app.controller('UpdateVitController', function ($rootScope, $scope, $stateParams, $http, AuthService,
    AUTH_EVENTS, NETWORK, $ionicLoading, Dealers, $state) {

    var serviceBase = NETWORK.BASE_URL;

    $scope.getUser = function () {
        $scope.user = AuthService.user();
    }

    $scope.getUser();
    $scope.submited = false;

    $rootScope.$on('$stateChangeStart', function (event, next, current) {
        //console.log("UpdateVitController change state");
        $scope.update = false;
        //$scope.initVit();
    });

    $scope.setUpdate = function () {
        $scope.update = true;
    }

    //////// VIT
    ///// CON CO
    $scope.survey.VIT_CC = 0;
    $scope.survey.VIT_CC_MUA_TT = 0;
    $scope.survey.VIT_CC_VD = 0;
    $scope.survey.VIT_CC_VT = 0;
    //// DH
    $scope.survey.VIT_DH = 0;
    $scope.survey.VIT_DH_MUA_TT = 0;
    $scope.survey.VIT_DH_VD = 0;
    $scope.survey.VIT_DH_VT = 0;
    ///// CG
    $scope.survey.VIT_CG = 0;
    $scope.survey.VIT_CG_MUA_TT = 0;
    $scope.survey.VIT_CG_VD = 0;
    $scope.survey.VIT_CG_VT = 0;
    //// NH
    $scope.survey.VIT_NH = 0;
    $scope.survey.VIT_NH_MUA_TT = 0;
    $scope.survey.VIT_NH_VD = 0;
    $scope.survey.VIT_NH_VT = 0;
    //// GF
    $scope.survey.VIT_GF = 0;
    $scope.survey.VIT_GF_MUA_TT = 0
    $scope.survey.VIT_GF_VD = 0;
    $scope.survey.VIT_GF_VT = 0;
    //// LT
    $scope.survey.VIT_LT = 0;
    $scope.survey.VIT_LT_MUA_TT = 0;
    $scope.survey.VIT_LT_VD = 0;
    $scope.survey.VIT_LT_VT = 0;
    //// ANOTHER
    $scope.survey.VIT_ANOTHER = 0;
    $scope.survey.VIT_ANOTHER_MUA_TT = 0;
    $scope.survey.VIT_ANOTHER_VD = 0;
    $scope.survey.VIT_ANOTHER_VT = 0;
    // ------------------- Ga ------------
    $scope.initVit = function () {
        //console.log("INIT Ga");


        if (Dealers.survey().VIT_ID != null) {
            var param = {
                token: AuthService.token()
            }
            $http.get(serviceBase + '/survey/vit/' + Dealers.survey().VIT_ID, { params: param, timeout: $rootScope.TIME_OUT })
                .then(
                    function successCallback (res) {
                        var response = res.data;
                        //console.log("load gia cam success");
                        //////// VIT
                        ///// CON CO
                        $scope.survey.VIT_CC = response.CC_KD;
                        $scope.survey.VIT_CC_MUA_TT = response.CC_MUA;
                        $scope.survey.VIT_CC_VD = response.CC_VD;
                        $scope.survey.VIT_CC_VT = response.CC_VT;
                        //// DH
                        $scope.survey.VIT_DH = response.DH_KD;
                        $scope.survey.VIT_DH_MUA_TT = response.DH_MUA;
                        $scope.survey.VIT_DH_VD = response.DH_VD;
                        $scope.survey.VIT_DH_VT = response.DH_VT;
                        ///// CG
                        $scope.survey.VIT_CG = response.CG_KD;
                        $scope.survey.VIT_CG_MUA_TT = response.CG_MUA;
                        $scope.survey.VIT_CG_VD = response.CG_VD;
                        $scope.survey.VIT_CG_VT = response.CG_VT;
                        //// NH
                        $scope.survey.VIT_NH = response.NH_KD;
                        $scope.survey.VIT_NH_MUA_TT = response.NH_MUA;
                        $scope.survey.VIT_NH_VD = response.NH_VD;
                        $scope.survey.VIT_NH_VT = response.NH_VT;
                        //// GF
                        $scope.survey.VIT_GF = response.GF_KD;
                        $scope.survey.VIT_GF_MUA_TT = response.GF_MUA;
                        $scope.survey.VIT_GF_VD = response.GF_VD;
                        $scope.survey.VIT_GF_VT = response.GF_VT;
                        //// LT
                        $scope.survey.VIT_LT = response.LT_KD;
                        $scope.survey.VIT_LT_MUA_TT = response.LT_MUA;
                        $scope.survey.VIT_LT_VD = response.LT_VD;
                        $scope.survey.VIT_LT_VT = response.LT_VT;
                        //// ANOTHER
                        $scope.survey.VIT_ANOTHER = response.O_KD;
                        $scope.survey.VIT_ANOTHER_MUA_TT = response.O_MUA;
                        $scope.survey.VIT_ANOTHER_VD = response.O_VD;
                        $scope.survey.VIT_ANOTHER_VT = response.O_VT;
                    },
                    function errorCallback (response) {
                        $rootScope.processRequestError(response);
                    }
                );
        }
        else {
            //////// VIT
            ///// CON CO
            $scope.survey.VIT_CC = 0;
            $scope.survey.VIT_CC_MUA_TT = 0;
            $scope.survey.VIT_CC_VD = 0;
            $scope.survey.VIT_CC_VT = 0;
            //// DH
            $scope.survey.VIT_DH = 0;
            $scope.survey.VIT_DH_MUA_TT = 0;
            $scope.survey.VIT_DH_VD = 0;
            $scope.survey.VIT_DH_VT = 0;
            ///// CG
            $scope.survey.VIT_CG = 0;
            $scope.survey.VIT_CG_MUA_TT = 0;
            $scope.survey.VIT_CG_VD = 0;
            $scope.survey.VIT_CG_VT = 0;
            //// NH
            $scope.survey.VIT_NH = 0;
            $scope.survey.VIT_NH_MUA_TT = 0;
            $scope.survey.VIT_NH_VD = 0;
            $scope.survey.VIT_NH_VT = 0;
            //// GF
            $scope.survey.VIT_GF = 0;
            $scope.survey.VIT_GF_MUA_TT = 0
            $scope.survey.VIT_GF_VD = 0;
            $scope.survey.VIT_GF_VT = 0;
            //// LT
            $scope.survey.VIT_LT = 0;
            $scope.survey.VIT_LT_MUA_TT = 0;
            $scope.survey.VIT_LT_VD = 0;
            $scope.survey.VIT_LT_VT = 0;
            //// ANOTHER
            $scope.survey.VIT_ANOTHER = 0;
            $scope.survey.VIT_ANOTHER_MUA_TT = 0;
            $scope.survey.VIT_ANOTHER_VD = 0;
            $scope.survey.VIT_ANOTHER_VT = 0;
        }
        //console.log($scope.giacam);
    }

    $scope.updateVit = function (isValid) {
        $scope.submited = true;

        if (!isValid) {
            $ionicLoading.hide();
            $ionicLoading.show({ template: 'Dữ liệu nhập chưa đúng, vui lòng kiểm tra lại!\n', noBackdrop: true, duration: 2000 });
            return;
        }

        if ($scope.update) {
            $ionicLoading.show({ template: 'Đang lưu...' });

            var param = {
                token: AuthService.token(),
                surveyid: Dealers.survey().SurveyId,

                cg_kd: $scope.survey.VIT_CG,
                cg_mua: $scope.survey.VIT_CG == 0 ? 0 : $scope.survey.VIT_CG_MUA_TT,
                cg_vd:  $scope.survey.VIT_CG == 0 ? 0 : parseInt($scope.survey.VIT_CG_VD),
                cg_vt:  $scope.survey.VIT_CG == 0 ? 0 : parseInt($scope.survey.VIT_CG_VT),

                cc_kd: $scope.survey.VIT_CC,
                cc_mua: $scope.survey.VIT_CC == 0 ? 0 : $scope.survey.VIT_CC_MUA_TT,
                cc_vd:  $scope.survey.VIT_CC == 0 ? 0 : parseInt($scope.survey.VIT_CC_VD),
                cc_vt:  $scope.survey.VIT_CC == 0 ? 0 : parseInt($scope.survey.VIT_CC_VT),

                dh_kd: $scope.survey.VIT_DH,
                dh_mua: $scope.survey.VIT_DH == 0 ? 0 : $scope.survey.VIT_DH_MUA_TT,
                dh_vd:  $scope.survey.VIT_DH == 0 ? 0 : parseInt($scope.survey.VIT_DH_VD),
                dh_vt:  $scope.survey.VIT_DH == 0 ? 0 : parseInt($scope.survey.VIT_DH_VT),

                nh_kd: $scope.survey.VIT_NH,
                nh_mua: $scope.survey.VIT_CG == 0 ? 0 : $scope.survey.VIT_NH_MUA_TT,
                nh_vd: $scope.survey.VIT_CG == 0 ? 0 : parseInt($scope.survey.VIT_NH_VD),
                nh_vt: $scope.survey.VIT_CG == 0 ? 0 : parseInt($scope.survey.VIT_NH_VT),

                gf_kd: $scope.survey.VIT_GF,
                gf_mua: $scope.survey.VIT_GF == 0 ? 0 : $scope.survey.VIT_GF_MUA_TT,
                gf_vd:  $scope.survey.VIT_GF == 0 ? 0 : parseInt($scope.survey.VIT_GF_VD),
                gf_vt:  $scope.survey.VIT_GF == 0 ? 0 : parseInt($scope.survey.VIT_GF_VT),

                lt_kd: $scope.survey.VIT_LT,
                lt_mua: $scope.survey.VIT_LT == 0 ? 0 : $scope.survey.VIT_LT_MUA_TT,
                lt_vd:  $scope.survey.VIT_LT == 0 ? 0 : parseInt($scope.survey.VIT_LT_VD),
                lt_vt:  $scope.survey.VIT_LT == 0 ? 0 : parseInt($scope.survey.VIT_LT_VT),

                o_kd: $scope.survey.VIT_ANOTHER,
                o_mua: $scope.survey.VIT_ANOTHER == 0 ? 0 : $scope.survey.VIT_ANOTHER_MUA_TT,
                o_vd:  $scope.survey.VIT_ANOTHER == 0 ? 0 : parseInt($scope.survey.VIT_ANOTHER_VD),
                o_vt:  $scope.survey.VIT_ANOTHER == 0 ? 0 : parseInt($scope.survey.VIT_ANOTHER_VT)
            }
            if (Dealers.survey().VIT_ID) {
                param.vitid = Dealers.survey().VIT_ID;
            }
            //console.log(param);

            $http.post(serviceBase + '/survey/create/vit', param, { timeout: $rootScope.TIME_OUT })
                .then(
                    function successCallback (response) {
                        $ionicLoading.hide();
                        //$ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
                        $scope.update = false;

                        $state.go('tabs.dealer-detail-sales-bo', {}, { reload: true });

                    },
                    function errorCallback (response) {
                        $rootScope.processRequestError(response);
                    }
                );
        }
        else {
            $state.go('tabs.dealer-detail-sales-bo', {}, { reload: true });
        }
    }
})