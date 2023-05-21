import logo from '../assets/alfa-coin.jpg'

export const PrimaryImg = {logo}
export const Apis = {
    //start auth
    login: '/auth/login',
    register: '/auth/register',
    regSecond: '/auth/update',
    changePassword: '/auth/password-change',
    uploadPhoto: '/auth/photoUpload',
    getMe: "/auth/get-me",
    //end auth
    sendPhoto: '/attachment/upload',
    deletePhoto: '/attachment',
//     getPhoto: 'http://localhost/api/v1/attachment/download?id=',
    getPhoto: 'https://main--incredible-maamoul-f59b93.netlify.app/api/v1/attachment/download?id=',
    coin: '/coin',
    pools: '/pools',
    getInvest: '/pools/inv/pool',
    invest: '/pools/inv',
    vips: '/vips',
    feedback: '/feedback',
    withdrawal: '/withdrawal',
    notification: '/notification',
    message: '/notification/message',
    getOneMessage: '/notification/message/one',
    archivePay: '/archive-pay',

}
