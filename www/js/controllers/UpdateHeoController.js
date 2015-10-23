app.controller('UpdateHeoController', function ($rootScope, $scope, $stateParams, $http, AuthService,
    AUTH_EVENTS, NETWORK, $ionicLoading, Dealers, $state) {
    
    /////// HEO
    //// ANCO
    $scope.heo = {};
    $scope.heo.HEO_ANCO = 0;
    $scope.heo.HEO_ANCO_MUA_TT = 0;
    $scope.heo.HEO_ANCO_SL = 0;
    $scope.heo.HEO_ANCO_HEO = 0;
    $scope.heo.HEO_ANCO_THIT = 0;
    $scope.heo.HEO_ANCO_NAI = 0;
    //// CONCO
    $scope.heo.HEO_CONCO = 0;
    $scope.heo.HEO_CONCO_MUA_TT = 0;
    $scope.heo.HEO_CONCO_SL = 0;
    $scope.heo.HEO_CONCO_HEO = 0;
    $scope.heo.HEO_CONCO_THIT = 0;
    $scope.heo.HEO_CONCO_NAI = 0;
    //// CP
    $scope.heo.HEO_CP = 0;
    $scope.heo.HEO_CP_MUA_TT = 0;
    $scope.heo.HEO_CP_SL = 0;
    $scope.heo.HEO_CP_HEO = 0;
    $scope.heo.HEO_CP_THIT = 0;
    $scope.heo.HEO_CP_NAI = 0;
    //// CG
    $scope.heo.HEO_CG = 0;
    $scope.heo.HEO_CG_MUA_TT = 0;
    $scope.heo.HEO_CG_SL = 0;
    $scope.heo.HEO_CG_HEO = 0;
    $scope.heo.HEO_CG_THIT = 0;
    $scope.heo.HEO_CG_NAI = 0;
    //// GF
    $scope.heo.HEO_GF = 0;
    $scope.heo.HEO_GF_MUA_TT = 0;
    $scope.heo.HEO_GF_SL = 0;
    $scope.heo.HEO_GF_HEO = 0;
    $scope.heo.HEO_GF_THIT = 0;
    $scope.heo.HEO_GF_NAI = 0;
    //// ANOTHER
    $scope.heo.HEO_ANOTHER = 0;
    $scope.heo.HEO_ANOTHER_MUA_TT = 0;
    $scope.heo.HEO_ANOTHER_SL = 0;
    $scope.heo.HEO_ANOTHER_HEO = 0;
    $scope.heo.HEO_ANOTHER_THIT = 0;
    $scope.heo.HEO_ANOTHER_NAI = 0;

    var serviceBase = NETWORK.BASE_URL;

    $scope.getUser = function () {
        $scope.user = AuthService.user();
    }

    $scope.getUser();
    $scope.submited = false;
   

    $rootScope.$on(AUTH_EVENTS.authenticated, function (event) {
        //console.log("DealerController on AUTH_EVENTS");
        $scope.user = AuthService.user();
        $scope.loadDealers();
    });
    $rootScope.$on('$stateChangeStart', function (event, next, current) {
        //console.log("DealerController change state");
        update = false;
        //$scope.initHeo();
    });

    $scope.setUpdate = function () {
        $scope.update = true;
    }

    // ------------------- HEO ------------
    $scope.initHeo = function() {
        //console.log("INIT HEO");
        

        if (Dealers.survey().HEO_ID != null) {
            var param = {
                token: AuthService.token()
            }
            $http.get(serviceBase + '/survey/heo/' + Dealers.survey().HEO_ID, { params: param, timeout: $rootScope.TIME_OUT })
                .then(
                    function successCallback (res) {
                        var response = res.data;
                        //console.log("load heo success");
                        $scope.heo.HEO_ANCO = response.AC_KD;
                        $scope.heo.HEO_ANCO_MUA_TT = response.AC_MUA;
                        $scope.heo.HEO_ANCO_SL = response.AC_SL;
                        $scope.heo.HEO_ANCO_HEO = response.AC_CON;
                        $scope.heo.HEO_ANCO_THIT = response.AC_THIT;
                        $scope.heo.HEO_ANCO_NAI = response.AC_NAI;

                        $scope.heo.HEO_CONCO = response.CC_KD;
                        $scope.heo.HEO_CONCO_MUA_TT = response.CC_MUA;
                        $scope.heo.HEO_CONCO_SL = response.CC_SL;
                        $scope.heo.HEO_CONCO_HEO = response.CC_CON;
                        $scope.heo.HEO_CONCO_THIT = response.CC_THIT;
                        $scope.heo.HEO_CONCO_NAI = response.CC_NAI;

                        $scope.heo.HEO_CP = response.CP_KD;
                        $scope.heo.HEO_CP_MUA_TT = response.CP_MUA;
                        $scope.heo.HEO_CP_SL = response.CP_SL;
                        $scope.heo.HEO_CP_HEO = response.CP_CON;
                        $scope.heo.HEO_CP_THIT = response.CP_THIT;
                        $scope.heo.HEO_CP_NAI = response.CP_NAI;

                        $scope.heo.HEO_CG = response.CG_KD;
                        $scope.heo.HEO_CG_MUA_TT = response.CG_MUA;
                        $scope.heo.HEO_CG_SL = response.CG_SL;
                        $scope.heo.HEO_CG_HEO = response.CG_CON;
                        $scope.heo.HEO_CG_THIT = response.CG_THIT;
                        $scope.heo.HEO_CG_NAI = response.CG_NAI;

                        $scope.heo.HEO_GF = response.GF_KD;
                        $scope.heo.HEO_GF_MUA_TT = response.GF_MUA;
                        $scope.heo.HEO_GF_SL = response.GF_SL;
                        $scope.heo.HEO_GF_HEO = response.GF_CON;
                        $scope.heo.HEO_GF_THIT = response.GF_THIT;
                        $scope.heo.HEO_GF_NAI = response.GF_NAI;

                        $scope.heo.HEO_ANOTHER = response.O_KD;
                        $scope.heo.HEO_ANOTHER_MUA_TT = response.O_MUA;
                        $scope.heo.HEO_ANOTHER_SL = response.O_SL;
                        $scope.heo.HEO_ANOTHER_HEO = response.O_CON;
                        $scope.heo.HEO_ANOTHER_THIT = response.O_THIT;
                        $scope.heo.HEO_ANOTHER_NAI = response.O_NAI;

                    },
                    function errorCallback (response) {
                        $rootScope.processRequestError(response);
                    }
                );
        }
        else {
            /////// HEO
            //// ANCO
            $scope.heo.HEO_ANCO = 0;
            $scope.heo.HEO_ANCO_MUA_TT = 0;
            $scope.heo.HEO_ANCO_SL = 0;
            $scope.heo.HEO_ANCO_HEO = 0;
            $scope.heo.HEO_ANCO_THIT = 0;
            $scope.heo.HEO_ANCO_NAI = 0;
            //// CONCO
            $scope.heo.HEO_CONCO = 0;
            $scope.heo.HEO_CONCO_MUA_TT = 0;
            $scope.heo.HEO_CONCO_SL = 0;
            $scope.heo.HEO_CONCO_HEO = 0;
            $scope.heo.HEO_CONCO_THIT = 0;
            $scope.heo.HEO_CONCO_NAI = 0;
            //// CP
            $scope.heo.HEO_CP = 0;
            $scope.heo.HEO_CP_MUA_TT = 0;
            $scope.heo.HEO_CP_SL = 0;
            $scope.heo.HEO_CP_HEO = 0;
            $scope.heo.HEO_CP_THIT = 0;
            $scope.heo.HEO_CP_NAI = 0;
            //// CG
            $scope.heo.HEO_CG = 0;
            $scope.heo.HEO_CG_MUA_TT = 0;
            $scope.heo.HEO_CG_SL = 0;
            $scope.heo.HEO_CG_HEO = 0;
            $scope.heo.HEO_CG_THIT = 0;
            $scope.heo.HEO_CG_NAI = 0;
            //// GF
            $scope.heo.HEO_GF = 0;
            $scope.heo.HEO_GF_MUA_TT = 0;
            $scope.heo.HEO_GF_SL = 0;
            $scope.heo.HEO_GF_HEO = 0;
            $scope.heo.HEO_GF_THIT = 0;
            $scope.heo.HEO_GF_NAI = 0;
            //// ANOTHER
            $scope.heo.HEO_ANOTHER = 0;
            $scope.heo.HEO_ANOTHER_MUA_TT = 0;
            $scope.heo.HEO_ANOTHER_SL = 0;
            $scope.heo.HEO_ANOTHER_HEO = 0;
            $scope.heo.HEO_ANOTHER_THIT = 0;
            $scope.heo.HEO_ANOTHER_NAI = 0;
        }
        //console.log("HEO VALUE");
        //console.log($scope.heo);
    }

    $scope.updateHeo = function (ac_pc, isValid) {
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

                ac_kd: $scope.heo.HEO_ANCO,
                ac_mua:  $scope.heo.HEO_ANCO == 0 ? 0 : $scope.heo.HEO_ANCO_MUA_TT,
                ac_sl:   $scope.heo.HEO_ANCO == 0 ? 0 : parseInt($scope.heo.HEO_ANCO_SL),
                ac_con:  $scope.heo.HEO_ANCO == 0 ? 0 : parseInt($scope.heo.HEO_ANCO_HEO),
                ac_thit: $scope.heo.HEO_ANCO == 0 ? 0 : parseInt($scope.heo.HEO_ANCO_THIT),
                ac_nai:  $scope.heo.HEO_ANCO == 0 ? 0 : parseInt($scope.heo.HEO_ANCO_NAI),

                cc_kd: $scope.heo.HEO_CONCO,
                cc_mua:  $scope.heo.HEO_CONCO == 0 ? 0 : $scope.heo.HEO_CONCO_MUA_TT,
                cc_sl:   $scope.heo.HEO_CONCO == 0 ? 0 : parseInt($scope.heo.HEO_CONCO_SL),
                cc_con:  $scope.heo.HEO_CONCO == 0 ? 0 : parseInt($scope.heo.HEO_CONCO_HEO),
                cc_thit: $scope.heo.HEO_CONCO == 0 ? 0 : parseInt($scope.heo.HEO_CONCO_THIT),
                cc_nai:  $scope.heo.HEO_CONCO == 0 ? 0 : parseInt($scope.heo.HEO_CONCO_NAI),

                cp_kd: $scope.heo.HEO_CP,
                cp_mua:  $scope.heo.HEO_CP == 0 ? 0 : $scope.heo.HEO_CP_MUA_TT,
                cp_sl:   $scope.heo.HEO_CP == 0 ? 0 : parseInt($scope.heo.HEO_CP_SL),
                cp_con:  $scope.heo.HEO_CP == 0 ? 0 : parseInt($scope.heo.HEO_CP_HEO),
                cp_thit: $scope.heo.HEO_CP == 0 ? 0 : parseInt($scope.heo.HEO_CP_THIT),
                cp_nai:  $scope.heo.HEO_CP == 0 ? 0 : parseInt($scope.heo.HEO_CP_NAI),

                cg_kd: $scope.heo.HEO_CG,
                cg_mua:  $scope.heo.HEO_CG == 0 ? 0 : $scope.heo.HEO_CG_MUA_TT,
                cg_sl:   $scope.heo.HEO_CG == 0 ? 0 : parseInt($scope.heo.HEO_CG_SL),
                cg_con:  $scope.heo.HEO_CG == 0 ? 0 : parseInt($scope.heo.HEO_CG_HEO),
                cg_thit: $scope.heo.HEO_CG == 0 ? 0 : parseInt($scope.heo.HEO_CG_THIT),
                cg_nai:  $scope.heo.HEO_CG == 0 ? 0 : parseInt($scope.heo.HEO_CG_NAI),

                gf_kd: $scope.heo.HEO_GF,
                gf_mua:  $scope.heo.HEO_GF == 0 ? 0 : $scope.heo.HEO_GF_MUA_TT,
                gf_sl:   $scope.heo.HEO_GF == 0 ? 0 : parseInt($scope.heo.HEO_GF_SL),
                gf_con:  $scope.heo.HEO_GF == 0 ? 0 : parseInt($scope.heo.HEO_GF_HEO),
                gf_thit: $scope.heo.HEO_GF == 0 ? 0 : parseInt($scope.heo.HEO_GF_THIT),
                gf_nai:  $scope.heo.HEO_GF == 0 ? 0 : parseInt($scope.heo.HEO_GF_NAI),

                o_kd: $scope.heo.HEO_ANOTHER,
                o_mua:  $scope.heo.HEO_ANOTHER == 0 ? 0 : $scope.heo.HEO_ANOTHER_MUA_TT,
                o_sl:   $scope.heo.HEO_ANOTHER == 0 ? 0 : parseInt($scope.heo.HEO_ANOTHER_SL),
                o_con:  $scope.heo.HEO_ANOTHER == 0 ? 0 : parseInt($scope.heo.HEO_ANOTHER_HEO),
                o_thit: $scope.heo.HEO_ANOTHER == 0 ? 0 : parseInt($scope.heo.HEO_ANOTHER_THIT),
                o_nai:  $scope.heo.HEO_ANOTHER == 0 ? 0 : parseInt($scope.heo.HEO_ANOTHER_NAI)
            }

            var valid = checkValidData(param);
            if (!valid) {
                $ionicLoading.hide();
                $ionicLoading.show({ template: 'Dữ liệu nhập chưa đúng, vui lòng kiểm tra lại!\n', noBackdrop: true, duration: 2000 });
                return;
            }

            if (Dealers.survey().HEO_ID != null) {
                param.heoid = Dealers.survey().HEO_ID;
            }
            //console.log(param);

            $http.post(serviceBase + '/survey/create/heo', param, { timeout: $rootScope.TIME_OUT })
                .then(
                    function successCallback (response) {
                        $ionicLoading.hide();
                        $ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
                        //console.log("AC_PC: " + $scope.user.AC_PC);

                        $scope.update = false;
                        //if ($scope.user.AC_PC == 0)
                        //    $state.go('tabs.dealer-detail-sales-giacam', {});
                        //else
                        $state.go('tabs.dealer-detail-sales-ga', {});

                    },
                    function errorCallback (response) {
                        $rootScope.processRequestError(response);
                    }
                );
        }
        else {
            //console.log("AC_PC: " + $scope.user.AC_PC);

            $scope.update = false;
            //if ($scope.user.AC_PC == 0)
            //    $state.go('tabs.dealer-detail-sales-giacam', {});
            //else
                $state.go('tabs.dealer-detail-sales-ga', {});
        }

    }

})