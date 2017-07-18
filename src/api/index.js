/**
 * 全局api
 */

import io from './io';

export default {
    checkNickname(query) {
        return io.get('/api/assist/check_nick', {
            params: query
        });
    },
    checkMobile(query) {
        return io.get('/api/assist/check_mobile', {
            params: query
        });
    },
    getUserInfo(query) {
        return io.get('/api/user/info', {
            params: {
                uid: localStorage.getItem('uid')
            }
        });
    },
    getCaptcha() {
        return io.get('/api/assist/captcha');
    },
    login(body) {
        return io.post('/api/auth/login', body);
    },
    logout(body) {
        return io.post('/api/auth/logout', body);
    },
    register(body) {
        return io.post('/api/auth/register', body);
    },
    getProjects(query) {
        return io.get('/api/project_admin/list', {
            params: {
                uid: localStorage.getItem('uid')
            }
        });
    },
    postProject(body) {
        const uid = localStorage.getItem('uid') || 0;

        body.personal_max = body.personal_max - 0;
        body.target_amount = body.target_amount - 0;

        // const data = Object.assign({}, {
        //     uid: Number(uid)
        // }, body);
        return io.post('/api/project_admin/create', body);
    },
    publishProject(body) {
        return io.post('/api/project_admin/publish', body);
    },

    getProjectIntro(query) {
        return io.get('/api/project_admin/intro', {
            params: query
        });
    },
    postProjectIntro(body) {
        return io.post('/api/project_admin/modify_intro', body);
    },
    getAdmins() {
        return io.get('/api/bg/list_project_admin');
    },
    postAdmin(body) {
        return io.post('/api/bg/create_project_admin', body);
    },
    postPinCode(body) {
        return io.post('/api/assist/send_pin_code', body);
    },
    postUserCertificate(body) {
        return io.post('/api/user/certificate', body);
    },
    putUserPwd(body) {
        return io.put('/api/user/pwd', body);
    },
    putUserTradePwd(body) {
        return io.put('/api/user/trading_pwd', body);
    },
}
