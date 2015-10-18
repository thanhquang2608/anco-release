app.controller('UpdateGaController', function ($rootScope, $scope, $stateParams, $http, AuthService,
    AUTH_EVENTS, NETWORK, $ionicLoading, Dealers, $state) {

    var serviceBase = NETWORK.BASE_URL;

    $scope.getUser = function () {
        $scope.user = AuthService.user();
    }

    $scope.getUser();
    $scope.submited = false;

    $rootScope.$on('$stateChangeStart', function (event, next, current) {
        //console.log("UpdateGiacamController change state");
        $scope.update = false;
        //$scope.initGa();
    });

    $scope.setUpdate = function () {
        $scope.update = true;
    }

    //////// GA
    //// CON CO
    $scope.survey.GA_CC = 0;
    $scope.survey.GA_CC_MUA_TT = 0;
    $scope.survey.GA_CC_GD = 0;
    $scope.survey.GA_CC_LT = 0;
    $scope.survey.GA_CC_LM = 0;
    //// CP
    $scope.survey.GA_CP = 0;
    $scope.survey.GA_CP_MUA_TT = 0;
    $scope.survey.GA_CP_GD = 0;
    $scope.survey.GA_CP_LT = 0;
    $scope.survey.GA_CP_LM = 0;
    //// GF
    $scope.survey.GA_GF = 0;
    $scope.survey.GA_GF_MUA_TT = 0;
    $scope.survey.GA_GF_GD = 0;
    $scope.survey.GA_GF_LT = 0;
    $scope.survey.GA_GF_LM = 0;
    //// JF
    $scope.survey.GA_JF = 0;
    $scope.survey.GA_JF_MUA_TT = 0;
    $scope.survey.GA_JF_GD = 0;
    $scope.survey.GA_JF_LT = 0;
    $scope.survey.GA_JF_LM = 0;
    //// DB
    $scope.survey.GA_DB = 0;
    $scope.survey.GA_DB_MUA_TT = 0;
    $scope.survey.GA_DB_GD = 0;
    $scope.survey.GA_DB_LT = 0;
    $scope.survey.GA_DB_LM = 0;
    //// NH
    $scope.survey.GA_NH = 0;
    $scope.survey.GA_NH_MUA_TT = 0;
    $scope.survey.GA_NH_GD = 0;
    $scope.survey.GA_NH_LT = 0;
    $scope.survey.GA_NH_LM = 0;
    //// ANOTHER
    $scope.survey.GA_ANOTHER = 0;
    $scope.survey.GA_ANOTHER_MUA_TT = 0;
    $scope.survey.GA_ANOTHER_GD = 0;
    $scope.survey.GA_ANOTHER_LT = 0;
    $scope.survey.GA_ANOTHER_LM = 0;

    // ------------------- Ga ------------
    $scope.initGa = function () {
        //console.log("INIT Ga");


        if (Dealers.survey().GA_ID != null) {
            var param = {
                token: AuthService.token()
            }
            $http.get(serviceBase + '/survey/ga/' + Dealers.survey().GA_ID, { params: param, timeout: $rootScope.TIME_OUT })
                .then(
                    function successCallback (res) {
                        //console.log("load gia cam success");
                        var response = res.data;
                        //////// GA
                        //// CON CO
                        $scope.survey.GA_CC = response.CC_KD;
                        $scope.survey.GA_CC_MUA_TT = response.CC_MUA;
                        $scope.survey.GA_CC_GD = response.CC_GADE;
                        $scope.survey.GA_CC_LT = response.CC_LT;
                        $scope.survey.GA_CC_LM = response.CC_LM;
                        //// CP
                        $scope.survey.GA_CP = response.CP_KD;
                        $scope.survey.GA_CP_MUA_TT = response.CP_MUA;
                        $scope.survey.GA_CP_GD = response.CP_GADE;
                        $scope.survey.GA_CP_LT = response.CP_LT;
                        $scope.survey.GA_CP_LM = response.CP_LM;
                        //// GF
                        $scope.survey.GA_GF = response.GF_KD;
                        $scope.survey.GA_GF_MUA_TT = response.GF_MUA;
                        $scope.survey.GA_GF_GD = response.GF_GADE;
                        $scope.survey.GA_GF_LT = response.GF_LT;
                        $scope.survey.GA_GF_LM = response.GF_LM;
                        //// JF
                        $scope.survey.GA_JF = response.JF_KD;
                        $scope.survey.GA_JF_MUA_TT = response.JF_MUA;
                        $scope.survey.GA_JF_GD = response.JF_GADE;
                        $scope.survey.GA_JF_LT = response.JF_LT;
                        $scope.survey.GA_JF_LM = response.JF_LM;
                        //// DB
                        $scope.survey.GA_DB = response.DB_KD;
                        $scope.survey.GA_DB_MUA_TT = response.DB_MUA;
                        $scope.survey.GA_DB_GD = response.DB_GADE;
                        $scope.survey.GA_DB_LT = response.DB_LT;
                        $scope.survey.GA_DB_LM = response.DB_LM;
                        //// NH
                        $scope.survey.GA_NH = response.NH_KD;
                        $scope.survey.GA_NH_MUA_TT = response.NH_MUA;
                        $scope.survey.GA_NH_GD = response.NH_GADE;
                        $scope.survey.GA_NH_LT = response.NH_LT;
                        $scope.survey.GA_NH_LM = response.NH_LM;
                        //// ANOTHER
                        $scope.survey.GA_ANOTHER = response.O_KD;
                        $scope.survey.GA_ANOTHER_MUA_TT = response.O_MUA;
                        $scope.survey.GA_ANOTHER_GD = response.O_GADE;
                        $scope.survey.GA_ANOTHER_LT = response.O_LT;
                        $scope.survey.GA_ANOTHER_LM = response.O_LM;
                    },
                    function errorCallback (response) {
                        $rootScope.processRequestError(response);
                    }
                );
        }
        else {
            //////// GA
            //// CON CO
            $scope.survey.GA_CC = 0;
            $scope.survey.GA_CC_MUA_TT = 0;
            $scope.survey.GA_CC_GD = 0;
            $scope.survey.GA_CC_LT = 0;
            $scope.survey.GA_CC_LM = 0;
            //// CP
            $scope.survey.GA_CP = 0;
            $scope.survey.GA_CP_MUA_TT = 0;
            $scope.survey.GA_CP_GD = 0;
            $scope.survey.GA_CP_LT = 0;
            $scope.survey.GA_CP_LM = 0;
            //// GF
            $scope.survey.GA_GF = 0;
            $scope.survey.GA_GF_MUA_TT = 0;
            $scope.survey.GA_GF_GD = 0;
            $scope.survey.GA_GF_LT = 0;
            $scope.survey.GA_GF_LM = 0;
            //// JF
            $scope.survey.GA_JF = 0;
            $scope.survey.GA_JF_MUA_TT = 0;
            $scope.survey.GA_JF_GD = 0;
            $scope.survey.GA_JF_LT = 0;
            $scope.survey.GA_JF_LM = 0;
            //// DB
            $scope.survey.GA_DB = 0;
            $scope.survey.GA_DB_MUA_TT = 0;
            $scope.survey.GA_DB_GD = 0;
            $scope.survey.GA_DB_LT = 0;
            $scope.survey.GA_DB_LM = 0;
            //// NH
            $scope.survey.GA_NH = 0;
            $scope.survey.GA_NH_MUA_TT = 0;
            $scope.survey.GA_NH_GD = 0;
            $scope.survey.GA_NH_LT = 0;
            $scope.survey.GA_NH_LM = 0;
            //// ANOTHER
            $scope.survey.GA_ANOTHER = 0;
            $scope.survey.GA_ANOTHER_MUA_TT = 0;
            $scope.survey.GA_ANOTHER_GD = 0;
            $scope.survey.GA_ANOTHER_LT = 0;
            $scope.survey.GA_ANOTHER_LM = 0;
        }
        //console.log($scope.giacam);
    }

    $scope.updateGa = function (isValid) {
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

                cc_kd: $scope.survey.GA_CC,
                cc_mua:  $scope.survey.GA_CC == 0 ? 0 : $scope.survey.GA_CC_MUA_TT,
                cc_gade: $scope.survey.GA_CC == 0 ? 0 : parseInt($scope.survey.GA_CC_GD),
                cc_lt:   $scope.survey.GA_CC == 0 ? 0 : parseInt($scope.survey.GA_CC_LT),
                cc_lm:   $scope.survey.GA_CC == 0 ? 0 : parseInt($scope.survey.GA_CC_LM),

                cp_kd: $scope.survey.GA_CP,
                cp_mua:  $scope.survey.GA_CP == 0 ? 0 : $scope.survey.GA_CP_MUA_TT,
                cp_gade: $scope.survey.GA_CP == 0 ? 0 : parseInt($scope.survey.GA_CP_GD),
                cp_lt:   $scope.survey.GA_CP == 0 ? 0 : parseInt($scope.survey.GA_CP_LT),
                cp_lm:   $scope.survey.GA_CP == 0 ? 0 : parseInt($scope.survey.GA_CP_LM),

                gf_kd: $scope.survey.GA_GF,
                gf_mua:  $scope.survey.GA_GF == 0 ? 0 : $scope.survey.GA_GF_MUA_TT,
                gf_gade: $scope.survey.GA_GF == 0 ? 0 : parseInt($scope.survey.GA_GF_GD),
                gf_lt:   $scope.survey.GA_GF == 0 ? 0 : parseInt($scope.survey.GA_GF_LT),
                gf_lm:   $scope.survey.GA_GF == 0 ? 0 : parseInt($scope.survey.GA_GF_LM),

                jf_kd: $scope.survey.GA_JF,
                jf_mua:  $scope.survey.GA_JF == 0 ? 0 : $scope.survey.GA_JF_MUA_TT,
                jf_gade: $scope.survey.GA_JF == 0 ? 0 : parseInt($scope.survey.GA_JF_GD),
                jf_lt:   $scope.survey.GA_JF == 0 ? 0 : parseInt($scope.survey.GA_JF_LT),
                jf_lm:   $scope.survey.GA_JF == 0 ? 0 : parseInt($scope.survey.GA_JF_LM),

                db_kd: $scope.survey.GA_DB,
                db_mua:  $scope.survey.GA_DB == 0 ? 0 : $scope.survey.GA_DB_MUA_TT,
                db_gade: $scope.survey.GA_DB == 0 ? 0 : parseInt($scope.survey.GA_DB_GD),
                db_lt:   $scope.survey.GA_DB == 0 ? 0 : parseInt($scope.survey.GA_DB_LT),
                db_lm:   $scope.survey.GA_DB == 0 ? 0 : parseInt($scope.survey.GA_DB_LM),

                nh_kd: $scope.survey.GA_NH,
                nh_mua:  $scope.survey.GA_NH == 0 ? 0 : $scope.survey.GA_NH_MUA_TT,
                nh_gade: $scope.survey.GA_NH == 0 ? 0 : parseInt($scope.survey.GA_NH_GD),
                nh_lt:   $scope.survey.GA_NH == 0 ? 0 : parseInt($scope.survey.GA_NH_LT),
                nh_lm:   $scope.survey.GA_NH == 0 ? 0 : parseInt($scope.survey.GA_NH_LM),

                o_kd: $scope.survey.GA_ANOTHER,
                o_mua:  $scope.survey.GA_ANOTHER == 0 ? 0 : $scope.survey.GA_ANOTHER_MUA_TT,
                o_gade: $scope.survey.GA_ANOTHER == 0 ? 0 : parseInt($scope.survey.GA_ANOTHER_GD),
                o_lt:   $scope.survey.GA_ANOTHER == 0 ? 0 : parseInt($scope.survey.GA_ANOTHER_LT),
                o_lm:   $scope.survey.GA_ANOTHER == 0 ? 0 : parseInt($scope.survey.GA_ANOTHER_LM)
            }
            if (Dealers.survey().GA_ID) {
                param.gaid = Dealers.survey().GA_ID;
            }
            //console.log(param);

            $http.post(serviceBase + '/survey/create/ga', param, { timeout: $rootScope.TIME_OUT })
                .then(
                    function successCallback (response) {
                        $ionicLoading.hide();
                        $ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
                        $scope.update = false;

                        $state.go('tabs.dealer-detail-sales-vit', {});

                    },
                    function errorCallback (response) {
                        $rootScope.processRequestError(response);
                    }
                );
        }
        else {
            $state.go('tabs.dealer-detail-sales-vit', {});
        }
    }
})