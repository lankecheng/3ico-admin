import Vue from 'vue';

export const bus = new Vue();

export const tokenHandle = {
    get() {
        return localStorage.getItem('token');
    },
    set(token) {
        return localStorage.setItem('token', token);
    },
    remove() {
        return localStorage.removeItem('token');
    }
};
