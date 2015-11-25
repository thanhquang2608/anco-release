angular.module('starter')

.constant('AUTH_EVENTS', {
    authenticated: 'authenticated',
    logout: 'logout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
})

.constant('NETWORK_EVENTS', {
    nointernet: 'nointernet',
    timeout: 'timeout'
})

.constant('STORAGE_KEYS', {
    list_dealers : 'AncoListDealersKey',
    token_key : 'AncoTokenKey',
    user_key : 'AncoUserKey',
    appversion_key : 'AppVersionKey'
})

.constant('USER_ROLES', {
    admin: 'admin_role',
    public: 'public_role'
})

.constant('NETWORK', {
    // BASE_URL: 'http://192.168.1.69:1337'
    // BASE_URL: 'http://survey-anco.rhcloud.com'
    // BASE_URL: 'http://server-tintmanco.rhcloud.com'
    // BASE_URL: 'http://localhost:1337'
    BASE_URL: 'http://113.161.152.115:1337/'
    
})

.constant('REGIONS', [
                        {id:100, name: 'MIỀN TÂY'},
                        {id:101, name: 'MIỀN ĐÔNG & HCM'},
                        {id:102, name: 'MIỀN TRUNG & CAO NGUYÊN'},
                        {id:103, name: 'NAM SÔNG HỒNG'},
                        {id:104, name: 'BẮC SÔNG HỒNG'},
                     ]
)

.constant('USERS', []
)