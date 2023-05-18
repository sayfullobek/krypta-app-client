export const Apis = {
    //start auth
    login: '/auth/login',
    register: '/auth/register',
    regSecond: '/auth/update',
    changePassword: '/auth/password-change',
    uploadPhoto: '/auth/photoUpload',
    //end auth
    sendPhoto: '/attachment/upload',
    deletePhoto: '/attachment',
    getPhoto: 'https://krypta-server.herokuapp.com/api/v1/attachment/download?id=',

    coin: '/coin',
    pools: '/pools',
    vips: '/vips',
    feedback: '/feedback'
}
