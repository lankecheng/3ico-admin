
const routes = [
    {
        path: '/',
        component: (resolve) => {
            require.ensure(['../views/index.vue'], () => {
                resolve(require('../views/index.vue'));
            }, 'app');
        },
        children: [
            {
                path: '',
                redirect: 'admin',
            },
            {
                path: 'register',
                component: (resolve) => {
                    require.ensure(['../views/register.vue'], () => {
                        resolve(require('../views/register.vue'));
                    }, 'app');
                }
            },

            {
                path: 'login',
                component: (resolve) => {
                    require.ensure(['../views/login.vue'], () => {
                        resolve(require('../views/login.vue'));
                    }, 'app');
                }
            },
        ]
    },
    {
        path: '/admin',
        component: require('../views/admin/index.vue'),
        children: [
            {
                path: '',
                redirect: 'console',
            },
            {
                path: 'console',
                component: (resolve) => {
                    require.ensure(['../views/admin/console'], () => {
                        resolve(require('../views/admin/console'));
                    }, 'console');
                },
            },
            {
                path: 'admin',
                component: (resolve) => {
                    require.ensure(['../views/admin/admin'], () => {
                        resolve(require('../views/admin/admin'));
                    }, 'admin');
                },
                meta: {
                    index: '/admin',
                },
            },
            {
                path: 'user',
                component: (resolve) => {
                    require.ensure(['../views/admin/user'], () => {
                        resolve(require('../views/admin/user'));
                    }, 'user');
                },
                meta: {
                    index: '/user',
                },
            },
            {
                path: 'asset',
                component: (resolve) => {
                    require.ensure(['../views/admin/asset'], () => {
                        resolve(require('../views/admin/asset'));
                    }, 'asset');
                },
                meta: {
                    index: '/asset',
                },
            },
            {
                path: 'personal',
                component: (resolve) => {
                    require.ensure(['../views/admin/personal'], () => {
                        resolve(require('../views/admin/personal'));
                    }, 'personal');
                },
                meta: {
                    index: '/personal',
                },
                children: [
                    {
                        path: 'info',
                        component: (resolve) => {
                            require.ensure(['../views/admin/personal/info'], () => {
                                resolve(require('../views/admin/personal/info'));
                            }, 'personal');
                        },
                        meta: {
                            index: '/personal/info',
                        },
                    },
                    {
                        path: 'asset',
                        component: (resolve) => {
                            require.ensure(['../views/admin/personal/asset'], () => {
                                resolve(require('../views/admin/personal/asset'));
                            }, 'personal');
                        },
                        meta: {
                            index: '/personal/asset',
                        },
                    },
                    {
                        path: 'password',
                        component: (resolve) => {
                            require.ensure(['../views/admin/personal/password'], () => {
                                resolve(require('../views/admin/personal/password'));
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
                    require.ensure(['../views/admin/project'], () => {
                        resolve(require('../views/admin/project'));
                    }, 'project');
                },
                meta: {
                    index: '/project',
                },
                children: [
                    {
                        path: 'list',
                        component: (resolve) => {
                            require.ensure(['../views/admin/project/list'], () => {
                                resolve(require('../views/admin/project/list'));
                            }, 'project');
                        },
                        meta: {
                            index: '/project/list',
                        },
                    },
                    {
                        path: 'detail',
                        component: (resolve) => {
                            require.ensure(['../views/admin/project/detail'], () => {
                                resolve(require('../views/admin/project/detail'));
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
        path: '*',
        component: (resolve) => {
            require.ensure(['../views/404.vue'], () => {
                resolve(require('../views/404.vue'));
            }, 'app');
        }
    },
];

export default routes;
