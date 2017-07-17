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
        admins: []
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
        SET_ADMINS(state, admins) {
            state.admins = admins;
        }
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
        publishProject({commit}, body = {}) {
            return api.publishProject(body).then((res) => {
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
        }
    },
};
