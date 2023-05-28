import logo from '../assets/alfa-coin.jpg'
import {baseUrl} from "./baseUrl";

export const PrimaryImg = {logo}
export const Apis = {
    //start auth
    login: '/auth/login',
    register: '/auth/register',
    regSecond: '/auth/update',
    changePassword: '/auth/password-change',
    uploadPhoto: '/auth/photoUpload',
    getMe: "/auth/get-me",
    addCantForgetPassword: '/auth/a-password-that-cannot-be-forgotten',
    //end auth
    sendPhoto: '/attachment/upload',
    deletePhoto: '/attachment',
    getPhoto: baseUrl + '/attachment/download?id=',
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
    moneyExit: '/auth/me-withdrawal-of-money-from-the-account',
    help: '/help',
    aboutAppGet: '/about-the-app',
    investmentUser: '/investment-user',
    deposit: '/deposit',
    history: '/get-me-history',
    updateUserVip: '/vips/vip-in-user',
    userProfitByVip: '/auth/profit-by-vip'
}