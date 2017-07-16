
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
            },
            {
                path: 'admin',
                component: (resolve) => {
                    require.ensure(['../views/admin'], () => {
                        resolve(require('../views/admin'));
                    }, 'admin');
                },
                meta: {
                    index: '/admin',
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
                    index: '/user',
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
                    index: '/asset',
                },
            },
            {
                path: 'personal',
                component: (resolve) => {
                    require.ensure(['../views/personal'], () => {
                        resolve(require('../views/personal'));
                    }, 'personal');
                },
                meta: {
                    index: '/personal',
                },
                children: [
                    {
                        path: 'info',
                        component: (resolve) => {
                            require.ensure(['../views/personal/info'], () => {
                                resolve(require('../views/personal/info'));
                            }, 'personal');
                        },
                        meta: {
                            index: '/personal/info',
                        },
                    },
                    {
                        path: 'asset',
                        component: (resolve) => {
                            require.ensure(['../views/personal/asset'], () => {
                                resolve(require('../views/personal/asset'));
                            }, 'personal');
                        },
                        meta: {
                            index: '/personal/asset',
                        },
                    },
                    {
                        path: 'password',
                        component: (resolve) => {
                            require.ensure(['../views/personal/password'], () => {
                                resolve(require('../views/personal/password'));
                            }, 'personal');
                        },
                        meta: {
                            index: '/personal/password',
                        },
                    },
                ]
            },
            {
                path: 'project',
                component: (resolve) => {
                    require.ensure(['../views/project'], () => {
                        resolve(require('../views/project'));
                    }, 'project');
                },
                meta: {
                    index: '/project',
                },
                children: [
                    {
                        path: 'list',
                        component: (resolve) => {
                            require.ensure(['../views/project/list'], () => {
                                resolve(require('../views/project/list'));
                            }, 'project');
                        },
                        meta: {
                            index: '/project/list',
                        },
                    },
                    {
                        path: 'detail',
                        component: (resolve) => {
                            require.ensure(['../views/project/detail'], () => {
                                resolve(require('../views/project/detail'));
                            }, 'project');
                        },
                        meta: {
                            index: '/project/detail',
                        },
                    },
                ]
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
