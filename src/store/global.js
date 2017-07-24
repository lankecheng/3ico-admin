import jwtDecode from 'jwt-decode';
import api from '../api';
import i18n from '../i18n';
import {tokenHandle} from '../utils/';

export default {
    namespaced: true,
    state: {
        title: '',
        user: null,
        projects: [],
        admins: [],
        roles: {
            1: {
                text: '管理员',
                val: 1,
            },
            2: {
                text: '项目管理员',
                val: 2,
            },
            3: {
                text: '个人',
                val: 3,
            },
        },
        currencies: {
            0: {
                text: 'ETC',
                val: 0
            }
        },
        withdrawAddrs: [],
        topUpRecords: [],
        investRecords: [],
        withdrawRecords: [],
        adminWithdrawRecords: [],
        investStatus: {
            0: {
                text: '进行中',
                val: 0,
            },
            1: {
                text: '众筹成功',
                val: 1,
            },
            2: {
                text: '众筹失败',
                val: 2,
            },
        },
        feProjects: [],
        users: [],
        userAccounts: [],
        lRecords: [],
    },
    getters: {},
    mutations: {
        SET_TITLE (state, title) {
            state.title = title;
        },
        SET_CUR_USER (state, user) {
            state.user = user;
        },
        SET_PROJECTS(state, projects) {
            state.projects = projects;
        },
        SET_FE_PROJECTS(state, projects) {
            state.feProjects = projects;
        },
        SET_ADMINS(state, admins) {
            state.admins = admins;
        },
        SET_WITHDRAW_ADDRS(state, addrs) {
            state.withdrawAddrs = addrs;
        },
        SET_TOP_UP_RECORDS(state, records) {
            state.topUpRecords = records;
        },
        SET_INVEST_RECORDS(state, records) {
            state.investRecords = records;
        },
        SET_WITHDRAW_RECORDS(state, records) {
            state.withdrawRecords = records;
        },
        SET_USERS(state, users) {
            state.users = users;
        },
        SET_USER_ACCOUNTS(state, accounts) {
            state.userAccounts = accounts;
        },
        SET_L_RECORDS(state, records) {
            state.lRecords = records;
        },
        SET_ADMIN_WITHDRAW_RECORDS(state, records) {
            state.adminWithdrawRecords = records;
        },
    },
    actions: {
        checkNickname({commit}, query) {
            return api.checkNickname(query);
        },
        checkMobile({commit}, query) {
            return api.checkMobile(query);
        },
        getCaptcha({commit}) {
            return api.getCaptcha();
        },
        sendPinCode({commit}, body) {
            return api.postPinCode(body).then((res) => {
                return res.data;
            });
        },
        userCertificate({commit}, body) {
            return api.postUserCertificate(body).then((res) => {
                return res.data;
            });
        },
        getUserInfo ({commit}, query) {
            return api.getUserInfo().then((res) => {
                commit('SET_CUR_USER', res.data.info);
                return res.data;
            });
        },
        login({commit}, body = {}) {
            return api.login(body).then((res) => {
                const data = res.data || {};
                const token = data.token;
                const user = jwtDecode(token)
                commit('SET_CUR_USER', user);
                tokenHandle.set(token);
                localStorage.setItem('uid', user.uid);
                return res.data;
            });
        },
        logout({commit}, body = {}) {
            return api.logout(body).then((res) => {
                tokenHandle.remove();
                return res.data;
            });
        },
        register({commit}, body = {}) {
            return api.register(body).then((res) => {
                const data = res.data || {};
                const token = data.token;
                const user = jwtDecode(token)
                commit('SET_CUR_USER', user);
                tokenHandle.set(token);
                localStorage.setItem('uid', user.uid);
                return res.data;
            });
        },
        getProjects({commit}, query = {}) {
            return api.getProjects(query).then((res) => {
                commit('SET_PROJECTS', res.data.projects);
                return res.data;
            });
        },
        createProject({commit}, body = {}) {
            return api.postProject(body).then((res) => {
                return res.data;
            });
        },
        modifyProject({commit}, body = {}) {
            return api.modifyProject(body).then((res) => {
                return res.data;
            });
        },
        publishProject({commit}, body = {}) {
            return api.publishProject(body).then((res) => {
                return res.data;
            });
        },
        stopProject({commit}, body = {}) {
            return api.stopProject(body).then((res) => {
                return res.data;
            });
        },
        successProject({commit}, body = {}) {
            return api.successProject(body).then((res) => {
                return res.data;
            });
        },
        failProject({commit}, body = {}) {
            return api.failProject(body).then((res) => {
                return res.data;
            });
        },
        delayProject({commit}, body = {}) {
            return api.delayProject(body).then((res) => {
                return res.data;
            });
        },
        getProjectIntro({commit}, query = {}) {
            return api.getProjectIntro(query).then((res) => {
                return res.data;
            });
        },
        modifyProjectIntro({commit}, body = {}) {
            return api.postProjectIntro(body).then((res) => {
                return res.data;
            });
        },
        getAdmins({commit}, query = {}) {
            return api.getAdmins(query).then((res) => {
                commit('SET_ADMINS', res.data.project_admins);
                return res.data;
            });
        },
        createAdmin({commit}, body) {
            return api.postAdmin(body).then((res) => {
                return res.data;
            });
        },
        changeUserPwd({commit}, body) {
            return api.putUserPwd(body).then((res) => {
                return res.data;
            });
        },
        changeUserTradePwd({commit}, body) {
            return api.putUserTradePwd(body).then((res) => {
                return res.data;
            });
        },
        getWithdrawAddrs({commit}, query) {
            return api.getWithdrawAddrs().then((res) => {
                commit('SET_WITHDRAW_ADDRS', res.data.withdrawal_addrs);
                return res.data;
            });
        },
        createWithdrawAddr({commit}, body) {
            return api.putWithdrawAddr(body).then((res) => {
                return res.data;
            });
        },
        delWithdrawAddr({commit}, body) {
            return api.delWithdrawAddr(body).then((res) => {
                return res.data;
            });
        },
        getTopUpAddr({commit}) {
            return api.getTopUpAddr().then((res) => {
                return res.data;
            });
        },
        postTopUp({commit}, body) {
            return api.postTopUp(body).then((res) => {
                return res.data;
            });
        },
        postAdminTopUp({commit}, body) {
            return api.postAdminTopUp(body).then((res) => {
                return res.data;
            });
        },
        getTopUpRecords({commit}) {
            return api.getTopUpRecords().then((res) => {
                commit('SET_TOP_UP_RECORDS', res.data.top_up_records);
                return res.data;
            });
        },
        getInvestRecords({commit}) {
            return api.getInvestRecords().then((res) => {
                commit('SET_INVEST_RECORDS', res.data.invest_records);
                return res.data;
            });
        },
        getWithdrawRecords({commit}) {
            return api.getWithdrawRecords().then((res) => {
                commit('SET_WITHDRAW_RECORDS', res.data.withdrawal_records);
                return res.data;
            });
        },
        postWithdrawApply({commit}, body) {
            return api.postWithdrawApply(body).then((res) => {
                return res.data;
            });
        },
        getFEProjects({commit}, query) {
            return api.getFEProjects(query).then((res) => {
                commit('SET_FE_PROJECTS', res.data.projects);
                return res.data;
            });
        },
        postAssistVerify({commit}) {
            return api.postAssistVerify().then((res) => {
                return res.data;
            });
        },
        getUsers({commit}, query) {
            return api.getUsers(query).then((res) => {
                commit('SET_USERS', res.data.users);
                return res.data;
            });
        },
        getUserAccounts({commit}, query) {
            return api.getUserAccounts(query).then((res) => {
                commit('SET_USER_ACCOUNTS', res.data.user_accounts);
                return res.data;
            });
        },
        getLRecords({commit}, query) {
            return api.getLRecords(query).then((res) => {
                commit('SET_L_RECORDS', res.data.login_logout_records);
                return res.data;
            });
        },
        getAdminWithdrawRecords({commit}, query) {
            return api.getAdminWithdrawRecords(query).then((res) => {
                commit('SET_ADMIN_WITHDRAW_RECORDS', res.data.withdrawal_records);
                return res.data;
            });
        },
        cancelAdminWithdraw({commit}, body) {
            return api.postAdminWithdrawCancel(body).then((res) => {
                return res.data;
            });
        },
        approveAdminWithdraw({commit}, body) {
            return api.postAdminWithdrawApprove(body).then((res) => {
                return res.data;
            });
        },
        successAdminWithdraw({commit}, body) {
            return api.postAdminWithdrawSuccess(body).then((res) => {
                return res.data;
            });
        },
    },
};
