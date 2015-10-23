angular.module('starter.services', [])

.factory('Dealers', function ($localstorage, STORAGE_KEYS) {
     //Might use a resource here that returns a JSON array

     //Some fake testing data
    var LIST_DEALERS_KEY = STORAGE_KEYS.list_dealers;
    var dealers = [];
    var dealer = {};
    var survey = {};

    function saveDealer() {
        $localstorage.setObject(LIST_DEALERS_KEY, dealers);
    }

    return {
        updateDealerBySurveyId: function (surveyId, dealerName, provinceName, address, URL) {
            //console.log(dealers);
            for (var i = 0; i < dealers.length; i++) {
                if (dealers[i].SurveyId == surveyId) {
                    //console.log("I'm find it!");
                    if (dealerName != null)
                        dealers[i].DealerName = dealerName;
                    if (provinceName != null)
                        dealers[i].ProvinceName = provinceName;
                    if (address != null)
                        dealers[i].Address = address;
                    if (URL != null)
                        dealers[i].DealerPhoto = URL;
                    saveDealer();
                    return;
                }
            }
        },
        setImageToFirstItem: function(dealerName, provinceName, address, URL){
            if (dealers.length > 0) {
                if(dealerName != null)
                    dealers[0].DealerName = dealerName;
                if (provinceName != null)
                    dealers[0].ProvinceName = provinceName;
                if (address != null)
                    dealers[0].Address = address;
                if (URL != null)
                    dealers[0].DealerPhoto = URL;

                saveDealer();
            }
        },
        all: function () {
           dealers = $localstorage.getObject(LIST_DEALERS_KEY);
           //console.log(dealers);
           return dealers;
            //return dealers;
        },
        dealerPush: function (item) {
            dealers = $localstorage.getObject(LIST_DEALERS_KEY);
            if(dealers != null && dealers.length > 0) {
                dealers.unshift(item);
                saveDealer();
            }
        },
        remove: function (dealer) {
            dealers.splice(dealers.indexOf(dealer), 1);
            saveDealer();
        },
        get: function (surveyId) {
            for (var i = 0; i < dealers.length; i++) {
                if (dealers[i].SurveyId === parseInt(surveyId)) {
                    return dealers[i];
                }
            }
            return null;
        },
        setDealers: function (data) {
            dealers = [];
            dealers = data;
            saveDealer();
        },
        setSurvey: function (data) {
            survey = data;
        },
        survey: function(){
            return survey;
        },
        setDealer: function (data) {
            dealer = data;
            if (dealer.BirthDate != null) {
                var date = dealer.BirthDate.split('/');
                dealer.day = parseInt(date[0]);
                dealer.month = parseInt(date[1]);
                dealer.year = parseInt(date[2]);
                //console.log(dealer.day + ", " + dealer.month + ", " + dealer.year);
            }

        },
        dealer: function () {
            return dealer;
        },
        getDay: function () {
            return dealer.day;
        },
        getMonth: function () {
            return dealer.month;
        }
    };
})

.service('SurveyService', function () {
    var uploadImageFinish = false;
    var surveyID = -2;
    var AC_PC = undefined;
    return {
        getSurveyID: function () {
            return surveyID;
        },
        setSurveyID: function (id) {
            surveyID = id;
        },
        getUploadImageFinish: function () {
            return uploadImageFinish;
        },
        setUploadImageFinish: function (stt) {
            uploadImageFinish = stt;
        }
    }
})

.service('AuthService', function ($rootScope, $q, $http, $localstorage, USER_ROLES, AUTH_EVENTS, NETWORK, STORAGE_KEYS) {
    var serviceBase = NETWORK.BASE_URL;
    var LOCAL_TOKEN_KEY = STORAGE_KEYS.token_key;
    var LOCAL_USER_KEY = STORAGE_KEYS.user_key;
    var LIST_DEALERS_KEY = STORAGE_KEYS.list_dealers;
    var APP_VERSION_KEY = STORAGE_KEYS.appversion_dealers;
    var isAuthenticated = false;
    var role = '';
    var authToken;
    var user;
    var appVersion = '';

    function loadUserCredentials() {
        var token = $localstorage.get(LOCAL_TOKEN_KEY);
        var appVersion = $localstorage.get(APP_VERSION_KEY);
        var retrievedUser = $localstorage.get(LOCAL_USER_KEY);
        //console.log(retrievedUser);
        if (token && retrievedUser) {
            useCredentials(token);
            user = JSON.parse(retrievedUser);
        }

    }

    function storeUserCredentials(u, token) {
        $localstorage.set(LOCAL_TOKEN_KEY, token);
        $localstorage.set(LOCAL_USER_KEY, JSON.stringify(u));
        useCredentials(token);
        user = u;
        $rootScope.$broadcast(AUTH_EVENTS.authenticated);
    }

    function useCredentials(token) {
        isAuthenticated = true;
        authToken = token;
        //console.log(token);

        // Set the token as header for your requests!
        // $http.defaults.headers.common['X-Auth-Token'] = 'Bearer ' + token;
        // $http.defaults.headers.common.Authorization = 'Bearer ' + token;
    }

    function checkVersion(currentVersion) {
        if (appVersion != currentVersion) {
            destroyUserCredentials();
            $localstorage.set(APP_VERSION_KEY, currentVersion);
            appVersion = currentVersion;
        }
    }

    function destroyUserCredentials() {
        authToken = undefined;
        username = '';
        isAuthenticated = false;
        $localstorage.deleteObject(LOCAL_TOKEN_KEY);
        $localstorage.deleteObject(LOCAL_USER_KEY);
        $localstorage.deleteObject(LIST_DEALERS_KEY);
    }

    var login = function (userdata) {
        //console.log("login");
        return $q(function (resolve, reject) {
            var id = userdata.id;
            var pass = userdata.password;


            var param = {
                id: id,
                password: pass
            }

            $http.post(serviceBase + '/login', param, {timeout: $rootScope.TIME_OUT} )
                .then(function successCallback(response) {
                    var user = response.data.user;
                    var token = response.data.token;

                    storeUserCredentials(user, token);
                    resolve('Login success.');
                }, function errorCallback(response) {
                    if (response.status != 0 && response.status != 408) {
                        console.log("login failed, statusCode: " + response.status);
                        reject(response);
                    } 
                });
        });
    };

    var logout = function () {
        destroyUserCredentials();
    };

    var isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        return (isAuthenticated && authorizedRoles.indexOf(role) !== -1);
    };

    loadUserCredentials();

    return {
        login: login,
        logout: logout,
        isAuthorized: isAuthorized,
        checkVersion: checkVersion,
        appVersion: function () { return appVersion; },
        token: function () { return authToken; },
        isAuthenticated: function () { return isAuthenticated; },
        user: function () { return user; }
    };
})

.factory('AuthInterceptor', function ($rootScope, $q, AUTH_EVENTS) {
    return {
        responseError: function (response) {
            $rootScope.$broadcast({
                401: AUTH_EVENTS.notAuthenticated,
                403: AUTH_EVENTS.notAuthorized
            }[response.status], response);
            return $q.reject(response);
        }
    };
})

.factory('NetworkInterceptor', function ($rootScope, $q, NETWORK_EVENTS) {
    var networkInterceptor = {
        
        request: function (config) {
            config.timeout = 60000;
            return config;
        },

        responseError: function (rejection) {
            switch (rejection.status){
                case 0 :
                    $rootScope.$broadcast(NETWORK_EVENTS.nointernet);
                    break;
                case 408 :
                    $rootScope.$broadcast(NETWORK_EVENTS.timeout);
                    break;
            }

            return $q.reject(rejection);
        }
    };

    return networkInterceptor;
})

.config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
    $httpProvider.interceptors.push('NetworkInterceptor');
})

.factory('$localstorage', function() {
  return {
    set: function(key, value) {
      window.localStorage.setItem(key, value);
    },

    get: function(key, defaultValue) {
      return window.localStorage.getItem(key) || defaultValue;
    },

    setObject: function(key, value) {
      window.localStorage.setItem(key, JSON.stringify(value));
    },

    getObject: function(key) {
        if (window.localStorage.getItem(key) === null || window.localStorage.getItem(key) === undefined) {
           return undefined;
        } else {
            return JSON.parse(window.localStorage.getItem(key) || '{}');
        }
    },

    deleteObject : function(key) {
        window.localStorage.removeItem(key);
    }
  }
});
