app.controller('SurveyController', function ($rootScope, $scope, $state, $http, $ionicHistory, $ionicPlatform,
     AuthService, SurveyService, Dealers, AUTH_EVENTS, $ionicLoading, $ionicPopup, NETWORK) {
    //FOR upload image
    $scope.sum = 0;
    $scope.success = 0;
    $scope.failure = 0;

    $scope.serviceBase = NETWORK.BASE_URL;
    //Model
    ////adress
    $scope.provineId = "";
    $scope.provineName = "";
    $scope.districtId = "";
    $scope.wardId = ""

    $scope.dealerCode = "";
    //$scope.surveyCode autoscreate in server

    ////GPS
    $scope.lat = "";
    $scope.long = "";
    $scope.submited = false;

    ////Dealer
    $scope.dealer = {};
    $scope.dealerIndex = -1;
    $scope.dealer.AC_PC = 2;
    $scope.dealer.day = 1;
    $scope.dealer.month = 1;
    $scope.dealerLabel = "";
    $scope.dealerName = "";
    $scope.dealerBirthday = "";
    $scope.dealerIdCard = "";
    $scope.dealerIdCardImgFront = "";
    $scope.dealerIdCardImgBehind = "";
    $scope.dealerPhone = "";
    $scope.dealerImg = "";
    $scope.shopImg = "";
    $scope.warehouseImg = "";

    //// Survey
    $scope.survey = {};
    $scope.surveyID = -1;
    $scope.survey.NUOI_TT = 0;
    /////// HEO
    //// ANCO
    $scope.survey.HEO_ANCO = 0;
    $scope.survey.HEO_ANCO_MUA_TT = 0;
    // $scope.survey.HEO_ANCO_SL = 0;
    // $scope.survey.HEO_ANCO_HEO = 0;
    // $scope.survey.HEO_ANCO_THIT = 0;
    // $scope.survey.HEO_ANCO_NAI = 0;
    //// CONCO
    $scope.survey.HEO_CONCO = 0;
    $scope.survey.HEO_CONCO_MUA_TT = 0;
    // $scope.survey.HEO_CONCO_SL = 0;
    // $scope.survey.HEO_CONCO_HEO = 0;
    // $scope.survey.HEO_CONCO_THIT = 0;
    // $scope.survey.HEO_CONCO_NAI = 0;
    //// CP
    $scope.survey.HEO_CP = 0;
    $scope.survey.HEO_CP_MUA_TT = 0;
    // $scope.survey.HEO_CP_SL = 0;
    // $scope.survey.HEO_CP_HEO = 0;
    // $scope.survey.HEO_CP_THIT = 0;
    // $scope.survey.HEO_CP_NAI = 0;
    //// CG
    $scope.survey.HEO_CG = 0;
    $scope.survey.HEO_CG_MUA_TT = 0;
    // $scope.survey.HEO_CG_HEO = 0;
    // $scope.survey.HEO_CG_THIT = 0;
    // $scope.survey.HEO_CG_NAI = 0;
    //// GF
    $scope.survey.HEO_GF = 0;
    $scope.survey.HEO_GF_MUA_TT = 0;
    // $scope.survey.HEO_GF_HEO = 0;
    // $scope.survey.HEO_GF_THIT = 0;
    // $scope.survey.HEO_GF_NAI = 0;
    //// ANOTHER
    $scope.survey.HEO_ANOTHER = 0;
    $scope.survey.HEO_ANOTHER_MUA_TT = 0;
    // $scope.survey.HEO_ANOTHER_HEO = 0;
    // $scope.survey.HEO_ANOTHER_THIT = 0;
    // $scope.survey.HEO_ANOTHER_NAI = 0;
    $scope.heo_anco_error = undefined;
    $scope.heo_conco_error = undefined;
    $scope.heo_cp_error = undefined;
    $scope.heo_cg_error = undefined;
    $scope.heo_gf_error = undefined;
    $scope.heo_o_error = undefined;

    //////// GA
    //// CON CO
    $scope.survey.GA_CC = 0;
    $scope.survey.GA_CC_MUA_TT = 0;
    // $scope.survey.GA_CC_GD = 0;
    // $scope.survey.GA_CC_LT = 0;
    // $scope.survey.GA_CC_LM = 0;
    //// CP
    $scope.survey.GA_CP = 0;
    $scope.survey.GA_CP_MUA_TT = 0;
    // $scope.survey.GA_CP_GD = 0;
    // $scope.survey.GA_CP_LT = 0;
    // $scope.survey.GA_CP_LM = 0;
    //// GF
    $scope.survey.GA_GF = 0;
    $scope.survey.GA_GF_MUA_TT = 0;
    // $scope.survey.GA_GF_GD = 0;
    // $scope.survey.GA_GF_LT = 0;
    // $scope.survey.GA_GF_LM = 0;
    //// JF
    $scope.survey.GA_JF = 0;
    $scope.survey.GA_JF_MUA_TT = 0;
    // $scope.survey.GA_JF_GD = 0;
    // $scope.survey.GA_JF_LT = 0;
    // $scope.survey.GA_JF_LM = 0;
    //// DB
    $scope.survey.GA_DB = 0;
    $scope.survey.GA_DB_MUA_TT = 0;
    // $scope.survey.GA_DB_GD = 0;
    // $scope.survey.GA_DB_LT = 0;
    // $scope.survey.GA_DB_LM = 0;
    //// NH
    $scope.survey.GA_NH = 0;
    $scope.survey.GA_NH_MUA_TT = 0;
    // $scope.survey.GA_NH_GD = 0;
    // $scope.survey.GA_NH_LT = 0;
    // $scope.survey.GA_NH_LM = 0;
    //// ANOTHER
    $scope.survey.GA_ANOTHER = 0;
    $scope.survey.GA_ANOTHER_MUA_TT = 0;
    // $scope.survey.GA_ANOTHER_GD = 0;
    // $scope.survey.GA_ANOTHER_LT = 0;
    // $scope.survey.GA_ANOTHER_LM = 0;

    //////// VIT
    ///// CON CO
    $scope.survey.VIT_CC = 0;
    $scope.survey.VIT_CC_MUA_TT = 0;
    // $scope.survey.VIT_CC_VD = 0;
    // $scope.survey.VIT_CC_VT = 0;
    //// DH
    $scope.survey.VIT_DH = 0;
    $scope.survey.VIT_DH_MUA_TT = 0;
    // $scope.survey.VIT_DH_VD = 0;
    // $scope.survey.VIT_DH_VT = 0;
    ///// CG
    $scope.survey.VIT_CG = 0;
    $scope.survey.VIT_CG_MUA_TT = 0;
    // $scope.survey.VIT_CG_VD = 0;
    // $scope.survey.VIT_CG_VT = 0;
    //// NH
    $scope.survey.VIT_NH = 0;
    $scope.survey.VIT_NH_MUA_TT = 0;
    // $scope.survey.VIT_NH_VD = 0;
    // $scope.survey.VIT_NH_VT = 0;
    //// GF
    $scope.survey.VIT_GF = 0;
    $scope.survey.VIT_GF_MUA_TT = 0
    // $scope.survey.VIT_GF_VD = 0;
    // $scope.survey.VIT_GF_VT = 0;
    //// LT
    $scope.survey.VIT_LT = 0;
    $scope.survey.VIT_LT_MUA_TT = 0;
    // $scope.survey.VIT_LT_VD = 0;
    // $scope.survey.VIT_LT_VT = 0;
    //// ANOTHER
    $scope.survey.VIT_ANOTHER = 0;
    $scope.survey.VIT_ANOTHER_MUA_TT = 0;
    // $scope.survey.VIT_ANOTHER_VD = 0;
    // $scope.survey.VIT_ANOTHER_VT = 0;

    //////// BO
    //// CON CO
    $scope.survey.BO_CC = 0;
    $scope.survey.BO_CC_MUA_TT = 0;
    // $scope.survey.BO_CC_SL = 0;
    //// DH
    $scope.survey.BO_DH = 0;
    $scope.survey.BO_DH_MUA_TT = 0
    // $scope.survey.BO_DH_SL = 0;
    //// CP
    $scope.survey.BO_CP = 0;
    $scope.survey.BO_CP_MUA_TT = 0;
    // $scope.survey.BO_CP_SL = 0;
    //// UP
    $scope.survey.BO_UP = 0;
    $scope.survey.BO_UP_MUA_TT = 0;
    // $scope.survey.BO_UP_SL = 0;
    //// ANOTHER
    $scope.survey.BO_ANOTHER = 0;
    $scope.survey.BO_ANOTHER_MUA_TT = 0;
    // $scope.survey.BO_ANOTHER_SL = 0;

    ////// GIA CAM
    $scope.survey.GIACAM_KD = 0;
    // $scope.survey.GIA_CAM_GA = 0;
    // $scope.survey.GIA_CAM_VIT = 0;
    // $scope.survey.GIA_CAM_CUT = 0;

    $scope.daiLyCap2 = "";
    $scope.hoTraiDangBan = "";
    $scope.chanNuoiTT = false;
    $scope.nai = "";
    $scope.thit = "";
    $scope.noc = "";

    $scope.heo = "";
    $scope.ga = "";
    $scope.vit = "";
    $scope.bo = "";
    //End model;

    $scope.dates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    $scope.months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    $scope.getUser = function () {
        $scope.user = AuthService.user();

        if ($scope.user.Provinces.length > 0) {
            $scope.provinces = $scope.user.Provinces;
            $scope.dealer.provinceId = $scope.user.Provinces[0].ProvinceId;
            $scope.provinceName = $scope.user.Provinces[0].ProvinceName;
            $scope.dealer.province = $scope.user.Provinces[0];

            loadDistrict();
        }
    }

    $scope.getUser();


    $rootScope.$on(AUTH_EVENTS.authenticated, function (event) {
        $scope.getUser();
        // loadProvinces();
    });

    $scope.$on('$ionicView.enter', function () {
        if ($scope.flag) {
            $ionicHistory.clearCache();
            $ionicHistory.clearHistory();
        }
    });

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        
    });

    // check change sate to set needUpdate = false
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        $scope.flag = false;
        if (fromState.name == "tabs.survey" && toState.name == "login")
            event.preventDefault();
        else if (fromState.name == "tabs.newsurvey" && toState.name == "tabs.survey") {
            $scope.flag = true;
        }
    });
    $scope.update = false;
    //use to check update image
    $scope.update1 = false;
    $scope.update2 = false;
    $scope.update3 = false;
    $scope.update4 = false;
    $scope.update5 = false;

    $scope.setUpdate = function () {
        //console.log("SET UPDATE");
        $scope.update = true;
    }
    $scope.setUpdateImage = function (id) {
        switch (id) {
            case 1: $scope.update1 = true; break;
            case 2: $scope.update2 = true; break;
            case 3: $scope.update3 = true; break;
            case 4: $scope.update4 = true; break;
            case 5: $scope.update5 = true; break;
        }
    }

    $scope.getPhoto = function (id) {
        $scope.id = id;

        $scope.popupChooseImage = $ionicPopup.show({
            templateUrl: 'templates/popup-choose-picture.html',
            title: 'Chọn ảnh từ',
            scope: $scope
        });
    }

    $scope.takePhoto = function (id, from) {
        $scope.id = id;

        switch (from) {
            case 0:
                $scope.takePhotoFromCamera(id);
                break;
            case 1:
                $scope.takePhotoFromAlbum(id);
                break;
        }
    }

    $scope.takePhotoFromCamera = function (id) {
        if ($scope.popupChooseImage) {
            $scope.popupChooseImage.close();
        }

        var options = {
            quality: 75,
            destinationType: Camera.DestinationType.FILE_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            //allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            popoverOptions: CameraPopoverOptions,
            targetWidth: 500,
            targetHeight: 500,
            saveToPhotoAlbum: false
        };

        navigator.camera.getPicture(onSuccess, onFail, options);
    }

    $scope.takePhotoFromAlbum = function (id) {
        if ($scope.popupChooseImage) {
            $scope.popupChooseImage.close();
        }

        // var options = {
        //     quality: 75,
        //     destinationType: Camera.DestinationType.FILE_URL,
        //     sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        //     //allowEdit: true,
        //     encodingType: Camera.EncodingType.JPEG,
        //     popoverOptions: CameraPopoverOptions,
        //     targetWidth: 500,
        //     targetHeight: 500
        // };
        // navigator.camera.getPicture(onSuccess, onFail, options);

        window.imagePicker.getPictures(
            function (results) {
                var uri = results[0];
                onSuccess(uri);
            },
            onFail,
            {
                maximumImagesCount: 1,
                width: 500,
                height: 500,
                quality: 75
            }
        );
    }

    function onSuccess(imageURI) {
        $scope.$apply(function () {
            switch ($scope.id) {
                case 1:
                    $scope.imgCMND1 = imageURI;
                    $scope.setUpdateImage($scope.id);
                    break;
                case 2:
                    $scope.imgCMND2 = imageURI;
                    $scope.setUpdateImage($scope.id);
                    break;
                case 3:
                    $scope.imgDealer = imageURI;
                    $scope.setUpdateImage($scope.id);
                    break;
                case 4:
                    $scope.imgShop = imageURI;
                    $scope.setUpdateImage($scope.id);
                    break;
                case 5:
                    $scope.imgWarehouse = imageURI;
                    $scope.setUpdateImage($scope.id);
                    break;
            }
        });
    }

    function onFail(message) {
        console.log('Failed because: ' + message);
    }

    // ---------------------HEO--------------------------
    $scope.saveHeo = function (ac_pc, isValid) {
        $scope.submited = true;
        console.log("HEO NEED UPDATE");
        console.log($scope.update);
        if (!isValid) {
            $ionicLoading.hide();
            $ionicLoading.show({ template: 'Dữ liệu nhập chưa đúng, vui lòng kiểm tra lại!\n', noBackdrop: true, duration: 2000 });
            return;
        }

        if ($scope.update) {
            //console.log("func: saveHeo " + SurveyService.getSurveyID());

            var param = {
                token: AuthService.token(),
                surveyid: SurveyService.getSurveyID(),
                ac_kd: $scope.survey.HEO_ANCO,
                ac_mua: $scope.survey.HEO_ANCO == 0 ? 0 : $scope.survey.HEO_ANCO_MUA_TT,
                ac_sl: $scope.survey.HEO_ANCO == 0 ? 0 : parseInt($scope.survey.HEO_ANCO_SL),
                ac_con: $scope.survey.HEO_ANCO == 0 ? 0 : parseInt($scope.survey.HEO_ANCO_HEO),
                ac_thit: $scope.survey.HEO_ANCO == 0 ? 0 : parseInt($scope.survey.HEO_ANCO_THIT),
                ac_nai: $scope.survey.HEO_ANCO == 0 ? 0 : parseInt($scope.survey.HEO_ANCO_NAI),

                cc_kd: $scope.survey.HEO_CONCO,
                cc_mua: $scope.survey.HEO_CONCO == 0 ? 0 : $scope.survey.HEO_CONCO_MUA_TT,
                cc_sl: $scope.survey.HEO_CONCO == 0 ? 0 : parseInt($scope.survey.HEO_CONCO_SL),
                cc_con: $scope.survey.HEO_CONCO == 0 ? 0 : parseInt($scope.survey.HEO_CONCO_HEO),
                cc_thit: $scope.survey.HEO_CONCO == 0 ? 0 : parseInt($scope.survey.HEO_CONCO_THIT),
                cc_nai: $scope.survey.HEO_CONCO == 0 ? 0 : parseInt($scope.survey.HEO_CONCO_NAI),

                cp_kd: $scope.survey.HEO_CP,
                cp_mua: $scope.survey.HEO_CP == 0 ? 0 : $scope.survey.HEO_CP_MUA_TT,
                cp_sl: $scope.survey.HEO_CP == 0 ? 0 : parseInt($scope.survey.HEO_CP_SL),
                cp_con: $scope.survey.HEO_CP == 0 ? 0 : parseInt($scope.survey.HEO_CP_HEO),
                cp_thit: $scope.survey.HEO_CP == 0 ? 0 : parseInt($scope.survey.HEO_CP_THIT),
                cp_nai: $scope.survey.HEO_CP == 0 ? 0 : parseInt($scope.survey.HEO_CP_NAI),

                cg_kd: $scope.survey.HEO_CG,
                cg_mua: $scope.survey.HEO_CG == 0 ? 0 : $scope.survey.HEO_CG_MUA_TT,
                cg_sl: $scope.survey.HEO_CG == 0 ? 0 : parseInt($scope.survey.HEO_CG_SL),
                cg_con: $scope.survey.HEO_CG == 0 ? 0 : parseInt($scope.survey.HEO_CG_HEO),
                cg_thit: $scope.survey.HEO_CG == 0 ? 0 : parseInt($scope.survey.HEO_CG_THIT),
                cg_nai: $scope.survey.HEO_CG == 0 ? 0 : parseInt($scope.survey.HEO_CG_NAI),

                gf_kd: $scope.survey.HEO_GF,
                gf_mua: $scope.survey.HEO_GF == 0 ? 0 : $scope.survey.HEO_GF_MUA_TT,
                gf_sl: $scope.survey.HEO_GF == 0 ? 0 : parseInt($scope.survey.HEO_GF_SL),
                gf_con: $scope.survey.HEO_GF == 0 ? 0 : parseInt($scope.survey.HEO_GF_HEO),
                gf_thit: $scope.survey.HEO_GF == 0 ? 0 : parseInt($scope.survey.HEO_GF_THIT),
                gf_nai: $scope.survey.HEO_GF == 0 ? 0 : parseInt($scope.survey.HEO_GF_NAI),

                o_kd: $scope.survey.HEO_ANOTHER,
                o_mua: $scope.survey.HEO_ANOTHER == 0 ? 0 : $scope.survey.HEO_ANOTHER_MUA_TT,
                o_sl: $scope.survey.HEO_ANOTHER == 0 ? 0 : parseInt($scope.survey.HEO_ANOTHER_SL),
                o_con: $scope.survey.HEO_ANOTHER == 0 ? 0 : parseInt($scope.survey.HEO_ANOTHER_HEO),
                o_thit: $scope.survey.HEO_ANOTHER == 0 ? 0 : parseInt($scope.survey.HEO_ANOTHER_THIT),
                o_nai: $scope.survey.HEO_ANOTHER == 0 ? 0 : parseInt($scope.survey.HEO_ANOTHER_NAI)
            }

            var valid = checkValidData(param);
            if (!valid) {
                $ionicLoading.hide();
                $ionicLoading.show({ template: 'Dữ liệu nhập chưa đúng, vui lòng kiểm tra lại!\n', noBackdrop: true, duration: 2000 });
                return;
            }

            $ionicLoading.show({ template: 'Đang lưu...' });

            if ($scope.survey.HEO_ID) {
                param.heoid = $scope.survey.HEO_ID;
            }
            //console.log(param);

            $http.post($scope.serviceBase + '/survey/create/heo', param, { timeout: $rootScope.TIME_OUT })
                .then(
                    function successCallback(response) {
                        $ionicLoading.hide();
                        //$ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
                        //console.log("AC_PC: " + ac_pc);
                        $scope.survey.HEO_ID = response.data.HeoId;
                        $scope.update = false;
                        //if (ac_pc == 0)
                        //    $state.go('tabs.sales-giacam', {});
                        //else
                        $state.go('tabs.sales-ga', {});

                    },
                    function errorCallback(response) {
                        $rootScope.processRequestError(response);
                    }
                );
        }
        else {
            $scope.update = false;
            //if (ac_pc == 0)
            //    $state.go('tabs.sales-giacam', {});
            //else
            $state.go('tabs.sales-ga', {});
        }
    }

    function checkValidData(data) {
        var errorPercent = "Tổng sản lượng phải bằng 100%";
        var valid = true;

        // ANCO
        if ((data.ac_con + data.ac_thit + data.ac_nai != 100) && (data.ac_con + data.ac_thit + data.ac_nai != 0)) {
            $scope.heo_anco_error = errorPercent;
            valid = false;
        }

        // CONCO
        if ((data.cc_con + data.cc_thit + data.cc_nai != 100) && (data.cc_con + data.cc_thit + data.cc_nai != 0)) {
            $scope.heo_conco_error = errorPercent;
            valid = false;
        }


        // CP
        if ((data.cp_con + data.cp_thit + data.cp_nai != 100) && (data.cp_con + data.cp_thit + data.cp_nai != 0)) {
            $scope.heo_cp_error = errorPercent;
            valid = false;
        }

        // CG
        if ((data.cg_con + data.cg_thit + data.cg_nai != 100) && (data.cg_con + data.cg_thit + data.cg_nai != 0)) {
            $scope.heo_cg_error = errorPercent;
            valid = false;
        }

        // GF
        if ((data.gf_con + data.gf_thit + data.gf_nai != 100) && (data.gf_con + data.gf_thit + data.gf_nai != 0)) {
            $scope.heo_gf_error = errorPercent;
            valid = false;
        }

        // OTHER
        if ((data.o_con + data.o_thit + data.o_nai != 100) && (data.o_con + data.o_thit + data.o_nai != 0)) {
            $scope.heo_o_error = errorPercent;
            valid = false;
        }

        return valid;
    }

    // ---------------------GA--------------------------
    $scope.saveGa = function (isValid) {

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
                surveyid: SurveyService.getSurveyID(),

                cc_kd: $scope.survey.GA_CC,
                cc_mua: $scope.survey.GA_CC == 0 ? 0 : $scope.survey.GA_CC_MUA_TT,
                cc_gade: $scope.survey.GA_CC == 0 ? 0 : parseInt($scope.survey.GA_CC_GD),
                cc_lt: $scope.survey.GA_CC == 0 ? 0 : parseInt($scope.survey.GA_CC_LT),
                cc_lm: $scope.survey.GA_CC == 0 ? 0 : parseInt($scope.survey.GA_CC_LM),

                cp_kd: $scope.survey.GA_CP,
                cp_mua: $scope.survey.GA_CP == 0 ? 0 : $scope.survey.GA_CP_MUA_TT,
                cp_gade: $scope.survey.GA_CP == 0 ? 0 : parseInt($scope.survey.GA_CP_GD),
                cp_lt: $scope.survey.GA_CP == 0 ? 0 : parseInt($scope.survey.GA_CP_LT),
                cp_lm: $scope.survey.GA_CP == 0 ? 0 : parseInt($scope.survey.GA_CP_LM),

                gf_kd: $scope.survey.GA_GF,
                gf_mua: $scope.survey.GA_GF == 0 ? 0 : $scope.survey.GA_GF_MUA_TT,
                gf_gade: $scope.survey.GA_GF == 0 ? 0 : parseInt($scope.survey.GA_GF_GD),
                gf_lt: $scope.survey.GA_GF == 0 ? 0 : parseInt($scope.survey.GA_GF_LT),
                gf_lm: $scope.survey.GA_GF == 0 ? 0 : parseInt($scope.survey.GA_GF_LM),

                jf_kd: $scope.survey.GA_JF,
                jf_mua: $scope.survey.GA_JF == 0 ? 0 : $scope.survey.GA_JF_MUA_TT,
                jf_gade: $scope.survey.GA_JF == 0 ? 0 : parseInt($scope.survey.GA_JF_GD),
                jf_lt: $scope.survey.GA_JF == 0 ? 0 : parseInt($scope.survey.GA_JF_LT),
                jf_lm: $scope.survey.GA_JF == 0 ? 0 : parseInt($scope.survey.GA_JF_LM),

                db_kd: $scope.survey.GA_DB,
                db_mua: $scope.survey.GA_DB == 0 ? 0 : $scope.survey.GA_DB_MUA_TT,
                db_gade: $scope.survey.GA_DB == 0 ? 0 : parseInt($scope.survey.GA_DB_GD),
                db_lt: $scope.survey.GA_DB == 0 ? 0 : parseInt($scope.survey.GA_DB_LT),
                db_lm: $scope.survey.GA_DB == 0 ? 0 : parseInt($scope.survey.GA_DB_LM),

                nh_kd: $scope.survey.GA_NH,
                nh_mua: $scope.survey.GA_NH == 0 ? 0 : $scope.survey.GA_NH_MUA_TT,
                nh_gade: $scope.survey.GA_NH == 0 ? 0 : parseInt($scope.survey.GA_NH_GD),
                nh_lt: $scope.survey.GA_NH == 0 ? 0 : parseInt($scope.survey.GA_NH_LT),
                nh_lm: $scope.survey.GA_NH == 0 ? 0 : parseInt($scope.survey.GA_NH_LM),

                o_kd: $scope.survey.GA_ANOTHER,
                o_mua: $scope.survey.GA_ANOTHER == 0 ? 0 : $scope.survey.GA_ANOTHER_MUA_TT,
                o_gade: $scope.survey.GA_ANOTHER == 0 ? 0 : parseInt($scope.survey.GA_ANOTHER_GD),
                o_lt: $scope.survey.GA_ANOTHER == 0 ? 0 : parseInt($scope.survey.GA_ANOTHER_LT),
                o_lm: $scope.survey.GA_ANOTHER == 0 ? 0 : parseInt($scope.survey.GA_ANOTHER_LM)
            }
            if ($scope.survey.GA_ID) {
                param.gaid = $scope.survey.GA_ID;
            }
            //console.log(param);

            $http.post($scope.serviceBase + '/survey/create/ga', param, { timeout: $rootScope.TIME_OUT })
                .then(
                    function successCallback(response) {
                        $ionicLoading.hide();
                        //$ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
                        $scope.survey.GA_ID = response.data.GaId;
                        $scope.update = false;

                        $state.go('tabs.sales-vit', {});

                    },
                    function errorCallback(response) {
                        $rootScope.processRequestError(response);
                    }
                );
        }
        else {
            $scope.update = false;
            $state.go('tabs.sales-vit', {});
        }
    }
    // ---------------------VIT--------------------------
    $scope.saveVit = function (isValid) {
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
                surveyid: SurveyService.getSurveyID(),

                cg_kd: $scope.survey.VIT_CG,
                cg_mua: $scope.survey.VIT_CG == 0 ? 0 : $scope.survey.VIT_CG_MUA_TT,
                cg_vd: $scope.survey.VIT_CG == 0 ? 0 : parseInt($scope.survey.VIT_CG_VD),
                cg_vt: $scope.survey.VIT_CG == 0 ? 0 : parseInt($scope.survey.VIT_CG_VT),

                cc_kd: $scope.survey.VIT_CC,
                cc_mua: $scope.survey.VIT_CC == 0 ? 0 : $scope.survey.VIT_CC_MUA_TT,
                cc_vd: $scope.survey.VIT_CC == 0 ? 0 : parseInt($scope.survey.VIT_CC_VD),
                cc_vt: $scope.survey.VIT_CC == 0 ? 0 : parseInt($scope.survey.VIT_CC_VT),

                dh_kd: $scope.survey.VIT_DH,
                dh_mua: $scope.survey.VIT_DH == 0 ? 0 : $scope.survey.VIT_DH_MUA_TT,
                dh_vd: $scope.survey.VIT_DH == 0 ? 0 : parseInt($scope.survey.VIT_DH_VD),
                dh_vt: $scope.survey.VIT_DH == 0 ? 0 : parseInt($scope.survey.VIT_DH_VT),

                nh_kd: $scope.survey.VIT_NH,
                nh_mua: $scope.survey.VIT_NH == 0 ? 0 : $scope.survey.VIT_NH_MUA_TT,
                nh_vd: $scope.survey.VIT_NH == 0 ? 0 : parseInt($scope.survey.VIT_NH_VD),
                nh_vt: $scope.survey.VIT_NH == 0 ? 0 : parseInt($scope.survey.VIT_NH_VT),

                gf_kd: $scope.survey.VIT_GF,
                gf_mua: $scope.survey.VIT_GF == 0 ? 0 : $scope.survey.VIT_GF_MUA_TT,
                gf_vd: $scope.survey.VIT_GF == 0 ? 0 : parseInt($scope.survey.VIT_GF_VD),
                gf_vt: $scope.survey.VIT_GF == 0 ? 0 : parseInt($scope.survey.VIT_GF_VT),

                lt_kd: $scope.survey.VIT_LT,
                lt_mua: $scope.survey.VIT_LT == 0 ? 0 : $scope.survey.VIT_LT_MUA_TT,
                lt_vd: $scope.survey.VIT_LT == 0 ? 0 : parseInt($scope.survey.VIT_LT_VD),
                lt_vt: $scope.survey.VIT_LT == 0 ? 0 : parseInt($scope.survey.VIT_LT_VT),

                o_kd: $scope.survey.VIT_ANOTHER,
                o_mua: $scope.survey.VIT_ANOTHER == 0 ? 0 : $scope.survey.VIT_ANOTHER_MUA_TT,
                o_vd: $scope.survey.VIT_ANOTHER == 0 ? 0 : parseInt($scope.survey.VIT_ANOTHER_VD),
                o_vt: $scope.survey.VIT_ANOTHER == 0 ? 0 : parseInt($scope.survey.VIT_ANOTHER_VT)
            }
            if ($scope.survey.VIT_ID) {
                param.vitid = $scope.survey.VIT_ID;
            }
            //console.log(param);

            $http.post($scope.serviceBase + '/survey/create/vit', param, { timeout: $rootScope.TIME_OUT })
                .then(
                    function successCallback(response) {
                        $ionicLoading.hide();
                        //$ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
                        $scope.survey.VIT_ID = response.data.VitId;
                        $scope.update = false;

                        //$state.go('tabs.sales-bo', {}, { reload: true });
                        $state.go('tabs.sales-bo');

                    },
                    function errorCallback(response) {
                        $rootScope.processRequestError(response);
                    }
                );
        }
        else {
            $scope.update = false;
            //$state.go('tabs.sales-bo', {}, { reload: true });
            $state.go('tabs.sales-bo');
        }
    }
    // ---------------------BO--------------------------
    $scope.saveBo = function (isValid) {
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
                surveyid: SurveyService.getSurveyID(),

                cc_kd: $scope.survey.BO_CC,
                cc_mua: $scope.survey.BO_CC == 0 ? 0 : $scope.survey.BO_CC_MUA_TT,
                cc_sl: $scope.survey.BO_CC == 0 ? 0 : parseInt($scope.survey.BO_CC_SL),

                dh_kd: $scope.survey.BO_DH,
                dh_mua: $scope.survey.BO_DH == 0 ? 0 : $scope.survey.BO_DH_MUA_TT,
                dh_sl: $scope.survey.BO_DH == 0 ? 0 : parseInt($scope.survey.BO_DH_SL),

                cp_kd: $scope.survey.BO_CP,
                cp_mua: $scope.survey.BO_CP == 0 ? 0 : $scope.survey.BO_CP_MUA_TT,
                cp_sl: $scope.survey.BO_CP == 0 ? 0 : parseInt($scope.survey.BO_CP_SL),

                up_kd: $scope.survey.BO_UP,
                up_mua: $scope.survey.BO_UP == 0 ? 0 : $scope.survey.BO_UP_MUA_TT,
                up_sl: $scope.survey.BO_UP == 0 ? 0 : parseInt($scope.survey.BO_UP_SL),

                o_kd: $scope.survey.BO_ANOTHER,
                o_mua: $scope.survey.BO_ANOTHER == 0 ? 0 : $scope.survey.BO_ANOTHER_MUA_TT,
                o_sl: $scope.survey.BO_ANOTHER == 0 ? 0 : parseInt($scope.survey.BO_ANOTHER_SL)
            }
            if ($scope.survey.BO_ID) {
                param.boid = $scope.survey.BO_ID;
            }
            //console.log(param);

            $http.post($scope.serviceBase + '/survey/create/bo', param, { timeout: $rootScope.TIME_OUT })
                .then(
                    function successCallback(response) {
                        $ionicLoading.hide();
                        //$ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
                        $scope.BO_ID = response.data.BoId;
                        $scope.update = false;
                        $ionicHistory.clearCache();
                        $state.go('tabs.survey', {}, { reload: true });

                    },
                    function errorCallback(response) {
                        $rootScope.processRequestError(response);
                    }
                );
        }
        else {
            $scope.update = false;
            $ionicHistory.clearCache();
            $state.go('tabs.survey', {}, { reload: true });
        }
    }
    // ---------------------GIA CAM--------------------------
    $scope.saveGiaCam = function (isValid) {
        $scope.submited = true;

        if (!isValid) {
            $ionicLoading.hide();
            $ionicLoading.show({ template: 'Dữ liệu nhập chưa đúng, vui lòng kiểm tra lại!\n', noBackdrop: true, duration: 2000 });
            return;
        }

        if ($scope.update) {
            $ionicLoading.show({ template: 'Đang lưu...' });

            var kd = $scope.survey.GIACAM_KD;
            var ga = parseFloat($scope.survey.GIA_CAM_GA);
            var vit = parseFloat($scope.survey.GIA_CAM_VIT);
            var cut = parseFloat($scope.survey.GIA_CAM_CUT);

            if ($scope.survey.GIACAM_KD == 0) {
                ga = 0;
                vit = 0;
                cut = 0;
            }

            var param = {
                token: AuthService.token(),
                surveyid: SurveyService.getSurveyID(),

                kd: kd,
                ga: ga,
                vit: vit,
                cut: cut
            }

            if ($scope.survey.GIA_CAM_ID) {
                param.giacamid = $scope.survey.GIA_CAM_ID;
            }

            //console.log(param);

            $http.post($scope.serviceBase + '/survey/create/giacam', param, { timeout: $rootScope.TIME_OUT })
                .then(
                    function successCallback(response) {
                        $ionicLoading.hide();
                        $ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
                        $scope.survey.GIA_CAM_ID = response.data.giaCamId;
                        $scope.update = false;
                        $ionicHistory.clearCache();
                        $state.go('tabs.survey', {}, { reload: true });

                    },
                    function errorCallback(response) {
                        $rootScope.processRequestError(response);
                    }
                );
        }
        else {
            $ionicHistory.clearCache();
            $state.go('tabs.survey', {}, { reload: true });
        }
    }
    // ---------------------Dealer------------------------
    function loadProvinces() {
        var param = {
            token: AuthService.token(),
            region: $scope.user.RegionId,
            ac_pc: $scope.user.AC_PC
        }

        //console.log(param);

        $http.get($scope.serviceBase + '/provinces', { params: param, timeout: $rootScope.TIME_OUT })
            .then(
                function successCallback(response) {
                    $scope.provinces = [];
                    $scope.provinces.push.apply($scope.provinces, response.data);

                    if ($scope.provinces.length > 0) {
                        $scope.dealer.provinceId = $scope.provinces[0].ProvinceId;
                        loadDistrict();
                    }
                },
                function errorCallback(response) {
                    $rootScope.processRequestError(response);
                }
            );
    }

    $scope.setDealer = function (index) {
        var dealer = $scope.dealers[index];
        $scope.update = true;

        if (!dealer) return;

        $scope.dealer.dealerId = dealer.DealerId;
        $scope.dealer.dealerCode = dealer.DealerCode;
        $scope.dealer.dealerName = dealer.DealerName;
        $scope.dealer.districtId = dealer.DistrictId;
        $scope.dealer.districtName = dealer.DistrictName;
        $scope.dealer.district = {DistrictId : dealer.DistrictId, DistrictName : dealer.DistrictName};
        $scope.dealer.wardName = dealer.WardName;
        $scope.dealer.wardId = dealer.WardId;
        $scope.dealer.ward = {WardId : dealer.WardId, WardName : dealer.WardName};
        $scope.dealer.address = dealer.Address;

        $scope.loadWard();
        //console.log($scope.dealer);
    }

    $scope.clearDealerSelected = function () {
        //$scope.update = true;
        $scope.dealer.dealerId = undefined;
        $scope.dealer.dealerCode = undefined;
        $scope.dealer.dealerName = undefined;
        $scope.dealer.districtId = undefined;
        $scope.dealer.districtName = undefined;
        $scope.dealer.address = undefined;
        $scope.dealer.wardId = undefined;
        $scope.dealer.district = undefined;
        $scope.dealer.ward = undefined;

        if ($scope.districts) {
            if ($scope.districts.length > 0) {
                $scope.dealer.district = $scope.districts[0];

                if ($scope.wards) {
                    if ($scope.wards.length > 0) {
                        $scope.dealer.ward = $scope.wards[0];
                    }
                } else {
                    $scope.loadWard();
                }
            }
        } else {
            loadDistrict();
        }
    }

    $scope.checkInput = function () {
        // if ($scope.survey.SL_DL2 != undefined && !isInt($scope.survey.SL_DL2))
        //     return false;
        // if ($scope.survey.SL_HO != undefined && !isInt($scope.survey.SL_HO))
        //     return false;
        // if ($scope.survey.NUOI_TT != undefined && !isInt($scope.survey.NUOI_TT))
        //     return false;
        // if ($scope.survey.SL_NAI != undefined && !isInt($scope.survey.SL_NAI))
        //     return false;
        // if ($scope.survey.SL_THIT != undefined && !isInt($scope.survey.SL_THIT))
        //     return false;
        // if ($scope.survey.SL_NOC != undefined && !isInt($scope.survey.SL_NOC))
        //     return false;

        // if ($scope.dealer.cmnd != undefined && !isInt($scope.dealer.cmnd))
        //     return false;

        // if ($scope.dealer.phoneNumber != undefined && !isInt($scope.dealer.phoneNumber))
        //     return false;

        // if ($scope.dealer.dealerName == undefined || $scope.dealer.dealerName == "")
        //     return false;
        // if ($scope.dealer.fullName == undefined || $scope.dealer.fullName == "")
        //     return false;

        // if ($scope.dealer.year != undefined && !isInt($scope.dealer.year))
        //     return false;

        return true;
    }

    function isInt(value) {
        var x;
        return isNaN(value) ? !1 : (x = parseInt(value), (0 | x) === x);
    }
    $scope.initSurvey = function () {
        //$ionicLoading.hide();
        //$ionicLoading.show({ template: 'I am created\n', noBackdrop: true, duration: 2000 });
    }
    $ionicPlatform.on("resume", function (event) {
        //$ionicLoading.hide();
        //$ionicLoading.show({
        //    template: event
        //    //template: 'I am comeback\nUpdate1: ' + $scope.update1 + '\nUpdate2: ' + $scope.update2
        //    //+ '\nUpdate3: ' + $scope.update3
        //    //+ '\nUpdate4: ' + $scope.update4
        //    //+ '\nUpdate5: ' + $scope.update5
        //    , noBackdrop: true, duration: 2000
        //});
    });

    function getProvinceName(provinceId) {
        //console.log($scope.provinces);
        for (var i = 0; i < $scope.provinces.length; i++) {
            if ($scope.provinces[i].ProvinceId == provinceId)
                return $scope.provinces[i].ProvinceName;
        }
        return "";
    }

    $scope.saveDealer = function (isValid) {
        $scope.submited = true;

        if (!isValid || ($scope.dealer.AC_PC != '2' && $scope.dealerIndex < 0)) {
            $ionicLoading.hide();
            $ionicLoading.show({ template: 'Dữ liệu nhập chưa đúng, vui lòng kiểm tra lại!\n', noBackdrop: true, duration: 2000 });
            return;
        }

        if ($scope.update) {
            $ionicLoading.show({ template: 'Đang lưu...' });

            var mBirthday = $scope.dealer.day + "/" + $scope.dealer.month + "/";
            if (typeof $scope.dealer.year !== "undefined" && $scope.dealer.year != null) {
                mBirthday = mBirthday + $scope.dealer.year;
            }

            var param = {
                token: AuthService.token(),

                ac_pc: $scope.dealer.AC_PC,
                dealername: $scope.dealer.dealerName,
                dealercode: $scope.dealer.dealerCode,
                fullname: $scope.dealer.fullName,
                phonenumber: $scope.dealer.phoneNumber,
                birthday: mBirthday,
                //districtid: $scope.dealer.districtId,
                wardid: $scope.dealer.ward.WardId,
                address: $scope.dealer.address,
                cmnd: $scope.dealer.cmnd,
                // cmndfont : $scope.dealer.cmndFront,
                // cmndback : $scope.dealer.cmndBack,

                long: confirmLong,
                lat: confirmLat,
                // dealerphoto : $scope.survey.dealerPhoto,
                // storephoto : $scope.survey.storePhoto,
                // stockphoto : $scope.survey.stockPhoto,
                sldl2: parseInt($scope.survey.SL_DL2),
                slho: parseInt($scope.survey.SL_HO),
                nuoitt: $scope.survey.NUOI_TT,
                slnai: $scope.survey.NUOI_TT == 0 ? 0 : parseInt($scope.survey.SL_NAI),
                slthit: $scope.survey.NUOI_TT == 0 ? 0 : parseInt($scope.survey.SL_THIT),
                slnoc: $scope.survey.NUOI_TT == 0 ? 0 : parseInt($scope.survey.SL_NOC),
                saleid: $scope.user.SaleRepId
            }

            if ($scope.dealer.dealerId) {
                param.dealerid = $scope.dealer.dealerId;
            }

            console.log(param);

            $http.post($scope.serviceBase + '/survey/create_or_update', param, { timeout: $rootScope.TIME_OUT })
                .then(
                    function successCallback(response) {
                        //console.log(response);
                        SurveyService.setSurveyID(response.data.SurveyId);
                        console.log("provinceID = " + $scope.dealer.provinceId);
                        //var provinceName = getProvinceName($scope.dealer.provinceId);

                        if ($scope.surveyID != -1) {
                            // if update dealer -> edit first item in list dealer                       
                            Dealers.updateDealerBySurveyId(response.data.SurveyId, $scope.dealer.dealerName, $scope.provinceName, $scope.dealer.address, null);
                        }
                        else {
                            // if create dealer -> add temp data to list dealer
                            Dealers.dealerPush({
                                "SurveyId": response.data.SurveyId, "DealerPhoto": "",
                                "DealerName": $scope.dealer.dealerName, "ProvinceName": $scope.provinceName, "Address": $scope.dealer.address
                            });
                        }
                        $scope.surveyID = response.data.SurveyId;
                        $scope.dealer.dealerId = response.data.DealerId;




                        // Upload image
                        $scope.sum = 0;
                        $scope.success = 0;
                        $scope.failure = 0;

                        if ($scope.update1)
                            $scope.sum++;
                        if ($scope.update2)
                            $scope.sum++;
                        if ($scope.update3)
                            $scope.sum++;
                        if ($scope.update4)
                            $scope.sum++;
                        if ($scope.update5)
                            $scope.sum++;

                        if ($scope.sum == 0)
                            SurveyService.setUploadImageFinish(true);
                        else
                            SurveyService.setUploadImageFinish(false);

                        //if ($scope.sum == 0) {
                            $ionicLoading.hide();
                            //$ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
                        //}

                        if ($scope.update1)
                            uploadImage($scope.imgCMND1, 1);
                        if ($scope.update2)
                            uploadImage($scope.imgCMND2, 2);
                        if ($scope.update3)
                            uploadImage($scope.imgDealer, 3);
                        if ($scope.update4)
                            uploadImage($scope.imgShop, 4);
                        if ($scope.update5)
                            uploadImage($scope.imgWarehouse, 5);

                        //$window.location.href = "#/tab/sales-heo";
                        $scope.submited = true;
                        $scope.update = false;
                        $state.go('tabs.sales-heo');

                    },
                    function errorCallback(response) {
                        $rootScope.processRequestError(response);
                    }
                );
        }
        else {
            // Upload image
            $scope.sum = 0;
            $scope.success = 0;
            $scope.failure = 0;
            if ($scope.update1)
                $scope.sum++;
            if ($scope.update2)
                $scope.sum++;
            if ($scope.update3)
                $scope.sum++;
            if ($scope.update4)
                $scope.sum++;
            if ($scope.update5)
                $scope.sum++;

            if ($scope.sum == 0)
                SurveyService.setUploadImageFinish(true);
            else
                SurveyService.setUploadImageFinish(false);

            // if need update image -> update
            if ($scope.update1)
                uploadImage($scope.imgCMND1, 1);
            if ($scope.update2)
                uploadImage($scope.imgCMND2, 2);
            if ($scope.update3)
                uploadImage($scope.imgDealer, 3);
            if ($scope.update4)
                uploadImage($scope.imgShop, 4);
            if ($scope.update5)
                uploadImage($scope.imgWarehouse, 5);
            // Khong co gi thay doi thi k lam gi ca
            $scope.submited = true;
            $state.go('tabs.sales-heo');
        }
    }

    $scope.uploadImageFinish = SurveyService.getUploadImageFinish();
    $rootScope.$on('uploadImagesFinish', function (event) {
        console.log('uploadImagesFinish');
        $scope.$apply(function() {
            $scope.uploadImageFinish = true;
            SurveyService.setUploadImageFinish(true);
        })
    });

    // ---upload image
    function uploadImage(uri, typeId) {
        //console.log(uri);
        var fileURL = uri;
        //var options = {
        //    fileKey: "uploadFile",
        //    fileName: fileURL.substr(fileURL.lastIndexOf('/') + 1),
        //    chunkedMode: false,
        //    mimeType: "image/jpeg"
        //};

        var params = {
            dealerid: $scope.dealer.dealerId,
            surveyid: SurveyService.getSurveyID(),
            type: typeId
        };

        // $scope.showToast('Start uploading!\n');
        //$scope.showToast('start upload ' + uri, 'short', 'bottom');
        var win = function (r) {
            // $scope.showToast('Upload success!\n');
            //$scope.showToast("SUCCESS: " + JSON.stringify(r.response), 'long', 'bottom');
            $scope.success++;
            switch (typeId) {
                case 1: $scope.update1 = false; break;
                case 2: $scope.update2 = false; break;
                case 3:
                    // update dealer photo
                    // $ionicLoading.hide();
                    // $ionicLoading.show({ template: 'typeId = ' + typeId, noBackdrop: true, duration: 2000 });
                    var serverResult = JSON.stringify(r.response);
                    var serverImageUrl = JSON.parse(r.response).file[0].fd;
                    Dealers.setImageToFirstItem(null, null, null, serverImageUrl);
                    $scope.update3 = false;
                    break;
                case 4: $scope.update4 = false; break;
                case 5: $scope.update5 = false; break;
            }

            if ($scope.success + $scope.failure == $scope.sum) {
                var imgFailed = "";
                if ($scope.failure > 0) {
                    if ($scope.update1)
                        imgFailed += "Mặt trước CMND\n"
                    if ($scope.update2)
                        imgFailed += "Mặt sau CMND\n"
                    if ($scope.update3)
                        imgFailed += "Chủ đại lý\n"
                    if ($scope.update4)
                        imgFailed += "Cửa hàng\n"
                    if ($scope.update5)
                        imgFailed += "Kho\n"
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Upload ảnh thất bại.\n' + imgFailed, noBackdrop: true, duration: 2000 });
                    $rootScope.$broadcast('uploadImagesFinish');
                }
                else {
                    $ionicLoading.hide();
                    $rootScope.$broadcast('uploadImagesFinish');
                    //$ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!\n', noBackdrop: true, duration: 2000 });
                }
            }

        }

        var fail = function (error) {
            $scope.failure++;
            if ($scope.success + $scope.failure == $scope.sum) {
                var imgFailed = "";
                if ($scope.failure > 0) {
                    if ($scope.update1)
                        imgFailed += "Mặt trước CMND\n"
                    if ($scope.update2)
                        imgFailed += "Mặt sau CMND\n"
                    if ($scope.update3)
                        imgFailed += "Chủ đại lý\n"
                    if ($scope.update4)
                        imgFailed += "Cửa hàng\n"
                    if ($scope.update5)
                        imgFailed += "Kho\n"
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Upload ảnh thất bại.\n' + imgFailed, noBackdrop: true, duration: 2000 });
                    $rootScope.$broadcast('uploadImagesFinish');
                }
            }
            //$ionicLoading.show({ template: 'upload failed!\n', noBackdrop: true, duration: 2000 });
            // $scope.showToast("ERROR: " + JSON.stringify(err), 'long', 'bottom');
        }

        var options = new FileUploadOptions();
        options.fileKey = "uploadFile";
        options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
        options.mimeType = "image/jpeg";
        options.params = params;
        try {
            var ft = new FileTransfer();
            ft.onprogress = function (progressEvent) {
                // $scope.showToast("PROGRESS: " + JSON.stringify(err), 'long', 'bottom');
            };
            ft.upload(fileURL, encodeURI($scope.serviceBase + '/images/upload'), win, fail, options);
        }
        catch (err) {
            // $scope.showToast('exception ' + err, 'short', 'bottom');
        }
    }

    $scope.showToast = function (message, duration, location) {
        window.plugins.toast.show(message, duration, location,
            function (success) {
                //console.log("The toast was shown");
            }, function (error) {
                //console.log("The toast was not shown due to " + error);
            });
    }

    $scope.loadDealer = function () {

        if ($scope.dealer.AC_PC == 2) {
            return;
        }

        $scope.dealer.dealerCode = undefined;
        $scope.dealerIndex = -1;
        //$scope.update = true;

        var param = {
            token: AuthService.token(),
            province: $scope.dealer.provinceId,
            ac_pc: $scope.dealer.AC_PC,
            uac_pc: $scope.user.AC_PC
        }

        //console.log(param);

        $http.get($scope.serviceBase + '/dealers', { params: param, timeout: $rootScope.TIME_OUT })
            .then(
                function successCallback(response) {
                    $scope.dealers = [];
                    $scope.dealers.push.apply($scope.dealers, response.data);
                    console.log($scope.dealers);
                    if ($scope.dealers.length > 0) {
                        $scope.setDealer(0);
                    }
                },
                function errorCallback(response) {
                    $rootScope.processRequestError(response);
                }
            );
    }
    // ------------------- CLEAR DATA--------------------------------
    function clearData() {
        ////Dealer
        $scope.dealer = {};
        $scope.dealerIndex = -1;
        $scope.dealer.AC_PC = 2;
        $scope.dealer.day = 1;
        $scope.dealer.month = 1;
        $scope.dealerLabel = "";
        $scope.dealerName = "";
        $scope.dealerBirthday = "";
        $scope.dealerIdCard = "";
        $scope.dealerIdCardImgFront = "";
        $scope.dealerIdCardImgBehind = "";
        $scope.dealerPhone = "";
        $scope.dealerImg = "";
        $scope.shopImg = "";
        $scope.warehouseImg = "";

        //// Survey
        $scope.survey = {};
        $scope.survey.NUOI_TT = 0;
        /////// HEO
        $scope.survey.HEO_ANCO = 0;
        $scope.survey.HEO_ANCO_MUA_TT = 0;
        $scope.survey.HEO_CONCO = 0;
        $scope.survey.HEO_CONCO_MUA_TT = 0;
        $scope.survey.HEO_CP = 0;
        $scope.survey.HEO_CP_MUA_TT = 0;
        $scope.survey.HEO_CG = 0;
        $scope.survey.HEO_CG_MUA_TT = 0;
        $scope.survey.HEO_GF = 0;
        $scope.survey.HEO_GF_MUA_TT = 0;
        $scope.survey.HEO_ANOTHER = 0;
        $scope.survey.HEO_ANOTHER_MUA_TT = 0;
        //////// GA
        $scope.survey.GA_CC = 0;
        $scope.survey.GA_CC_MUA_TT = 0;
        $scope.survey.GA_CP = 0;
        $scope.survey.GA_CP_MUA_TT = 0;
        $scope.survey.GA_GF = 0;
        $scope.survey.GA_GF_MUA_TT = 0;
        $scope.survey.GA_JF = 0;
        $scope.survey.GA_JF_MUA_TT = 0;
        $scope.survey.GA_DB = 0;
        $scope.survey.GA_DB_MUA_TT = 0;
        $scope.survey.GA_NH = 0;
        $scope.survey.GA_NH_MUA_TT = 0;
        $scope.survey.GA_ANOTHER = 0;
        $scope.survey.GA_ANOTHER_MUA_TT = 0;
        //////// VIT
        $scope.survey.VIT_CC = 0;
        $scope.survey.VIT_CC_MUA_TT = 0;
        $scope.survey.VIT_DH = 0;
        $scope.survey.VIT_DH_MUA_TT = 0;
        $scope.survey.VIT_CG = 0;
        $scope.survey.VIT_CG_MUA_TT = 0;
        $scope.survey.VIT_NH = 0;
        $scope.survey.VIT_NH_MUA_TT = 0;
        $scope.survey.VIT_GF = 0;
        $scope.survey.VIT_GF_MUA_TT = 0;
        $scope.survey.VIT_LT = 0;
        $scope.survey.VIT_LT_MUA_TT = 0;
        $scope.survey.VIT_ANOTHER = 0;
        $scope.survey.VIT_ANOTHER_MUA_TT = 0;
        //////// BO
        $scope.survey.BO_CC = 0;
        $scope.survey.BO_CC_MUA_TT = 0;
        $scope.survey.BO_DH = 0;
        $scope.survey.BO_DH_MUA_TT = 0;
        $scope.survey.BO_CP = 0;
        $scope.survey.BO_CP_MUA_TT = 0;
        $scope.survey.BO_UP = 0;
        $scope.survey.BO_UP_MUA_TT = 0;
        $scope.survey.BO_ANOTHER = 0;
        $scope.survey.BO_ANOTHER_MUA_TT = 0;

        $scope.daiLyCap2 = "";
        $scope.hoTraiDangBan = "";
        $scope.chanNuoiTT = false;
        $scope.nai = "";
        $scope.thit = "";
        $scope.noc = "";

        $scope.heo = "";
        $scope.ga = "";
        $scope.vit = "";
        $scope.bo = "";
    }

    $scope.complete = function () {
        $ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
        clearData();
        $state.go('tabs.survey', {}, { reload: true });
    };

    $scope.loadDistrict = function() {
        loadDistrict();
    }

    function loadDistrict() {
        var param = {
            token: AuthService.token(),
            province: $scope.dealer.province.ProvinceId,
            uac_pc: $scope.user.AC_PC
        }

        $http.get($scope.serviceBase + '/districts', { params: param, timeout: $rootScope.TIME_OUT })
            .then(
                function successCallback(response) {
                    $scope.districts = [];
                    $scope.dealer.district = {};
                    $scope.districts.push.apply($scope.districts, response.data);

                    if ($scope.districts.length > 0) {
                        $scope.dealer.districtId = $scope.districts[0].DistrictId;
                        $scope.dealer.district = $scope.districts[0];

                        $scope.loadWard();

                        if(!$scope.$$phase) {
                            $scope.$apply();
                        }
                    }
                },
                function errorCallback(response) {
                    $rootScope.processRequestError(response);
                }
            );
    }

    $scope.loadWard = function () {
        var param = {
            token: AuthService.token(),
            district: $scope.dealer.district.DistrictId,
        }

        $http.get($scope.serviceBase + '/wards', { params: param, timeout: $rootScope.TIME_OUT })
            .then(
                function successCallback(response) {
                    $scope.wards = [];
                    $scope.wards.push.apply($scope.wards, response.data);

                    // if (!$scope.dealer.wardId && $scope.wards.length > 0) {
                    //     $scope.dealer.wardId = $scope.wards[0].WardId;
                    // } else {

                    // }

                    if (!$scope.dealer.wardId && $scope.wards.length > 0) {
                        $scope.dealer.ward = $scope.wards[0];
                    } else {
                        angular.forEach($scope.wards, function(value, key) {
                            if ($scope.dealer.wardId == value.WardId) {
                                $scope.dealer.ward = value;
                            }
                        });
                    }

                    if(!$scope.$$phase) {
                        $scope.$apply();
                    }
                },
                function errorCallback(response) {
                    $rootScope.processRequestError(response);
                }
            );
    }

    function id(element) {
        return document.getElementById(element);
    }

    //document.addEventListener("deviceready", onDeviceReady, false);
    // ---------------------------GPS---------------------------------
    $scope.watch = function () {
        //navigator.splashscreen.hide();
        //console.log("run");
        geolocationApp = new geolocationApp();
        geolocationApp.run();
    }
    var confirmLong = 0;
    var confirmLat = 0;
    $scope.gpsConfirm = function () {
        console.log("GPS confirm");
        confirmLong = $scope.survey.long;
        confirmLat = $scope.survey.lat;
    }

    function geolocationApp() {
    }

    geolocationApp.prototype = {
        _watchID: null,

        run: function () {
            var that = this;
            that._handleWatch.apply(that, arguments);
            //document.getElementById("watchButton").addEventListener("click", function () {
            //    that._handleWatch.apply(that, arguments);
            //}, false);
            //document.getElementById("refreshButton").addEventListener("click", function () {
            //    that._handleRefresh.apply(that, arguments);
            //}, false);
        },

        _handleRefresh: function () {
            var options = {
                enableHighAccuracy: true
            },
                that = this;

            that._setResults("Waiting for geolocation information...");

            navigator.geolocation.getCurrentPosition(function () {
                that._onSuccess.apply(that, arguments);
            }, function () {
                that._onError.apply(that, arguments);
            }, options);
        },

        _handleWatch: function () {
            var that = this;
            // If watch is running, clear it now. Otherwise, start it.
            //button = document.getElementById("watchButton");

            if (that._watchID != null) {
                that._setResults();
                navigator.geolocation.clearWatch(that._watchID);
                that._watchID = null;

                //button.innerHTML = "Start Geolocation Watch";
            }
            else {
                that._setResults("Waiting for geolocation information...");
                // Update the watch every second.
                var options = {
                    frequency: 5000,
                    enableHighAccuracy: true
                };
                that._watchID = navigator.geolocation.watchPosition(function () {
                    that._onSuccess.apply(that, arguments);
                }, function () {
                    that._onError.apply(that, arguments);
                }, options);
                //button.innerHTML = "Clear Geolocation Watch";

            }
        },

        _onSuccess: function (position) {
            // Successfully retrieved the geolocation information. Display it all.
            this._setResults('(' + Math.round(position.coords.latitude * 1000) / 1000 + ', ' +
                             Math.round(position.coords.longitude * 1000) / 1000 + ')');
            //this._setResults('Latitude: ' + position.coords.latitude + ', ' +
            //                 'Longitude: ' + position.coords.longitude + ', ' +
            //                 //'Altitude: ' + position.coords.altitude + '<br />' +
            //                 //'Accuracy: ' + position.coords.accuracy + '<br />' +
            //                 //'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
            //                 //'Heading: ' + position.coords.heading + '<br />' +
            //                 //'Speed: ' + position.coords.speed + '<br />' +
            //                 'Timestamp: ' + new Date(position.timestamp).toLocaleTimeString().split(" ")[0] + '<br />');

            $scope.$apply(function () {
                $scope.survey.lat = position.coords.latitude;
                $scope.survey.long = position.coords.longitude;
            });
        },

        _onError: function (error) {
            this._setResults('code: ' + error.code + '<br/>' +
                             'message: ' + error.message + '<br/>');
        },

        _setResults: function (value) {
            if (document.getElementById("latlong") != null) {
                if (!value) {
                    document.getElementById("latlong").innerHTML = "error";
                }
                else {
                    document.getElementById("latlong").innerHTML = value;
                }
            }
        }
    }
});