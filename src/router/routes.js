
const routes = [
    {
        path: '/',
        component: require('../views/index.vue'),
        children: [
            {
                path: '',
                redirect: 'console',
            },
            {
                path: 'console',
                component: (resolve) => {
                    require.ensure(['../views/console'], () => {
                        resolve(require('../views/console'));
                    }, 'console');
                },
                meta: {
                    index: 'console',
                },
            },
            {
                path: 'admin',
                component: (resolve) => {
                    require.ensure(['../views/admin'], () => {
                        resolve(require('../views/admin'));
                    }, 'admin');
                },
                meta: {
                    index: 'admin',
                },
            },
            {
                path: 'user',
                component: (resolve) => {
                    require.ensure(['../views/user'], () => {
                        resolve(require('../views/user'));
                    }, 'user');
                },
                meta: {
                    index: 'user',
                },
            },
            {
                path: 'asset',
                component: (resolve) => {
                    require.ensure(['../views/asset'], () => {
                        resolve(require('../views/asset'));
                    }, 'asset');
                },
                meta: {
                    index: 'asset',
                },
            },
        ],
    },

    {
        path: '/register',
        component: (resolve) => {
            require.ensure(['../views/register.vue'], () => {
                resolve(require('../views/register.vue'));
            }, 'login');
        }
    },

    {
        path: '/login',
        component: (resolve) => {
            require.ensure(['../views/login.vue'], () => {
                resolve(require('../views/login.vue'));
            }, 'register');
        }
    },

    {
        path: '*',
        component: (resolve) => {
            require.ensure(['../views/404.vue'], () => {
                resolve(require('../views/404.vue'));
            }, '404');
        }
    },
];

export default routes;
