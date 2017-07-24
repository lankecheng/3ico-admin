
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
                path: 'home',
                component: (resolve) => {
                    require.ensure(['../views/home.vue'], () => {
                        resolve(require('../views/home.vue'));
                    }, 'app');
                }
            },
            {
                path: 'about',
                component: (resolve) => {
                    require.ensure(['../views/about.vue'], () => {
                        resolve(require('../views/about.vue'));
                    }, 'app');
                }
            },
            {
                path: 'contact',
                component: (resolve) => {
                    require.ensure(['../views/contact.vue'], () => {
                        resolve(require('../views/contact.vue'));
                    }, 'app');
                }
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
            {
                path: 'projects',
                component: (resolve) => {
                    require.ensure(['../views/projects.vue'], () => {
                        resolve(require('../views/projects.vue'));
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
                    }, 'app');
                },
            },
            {
                path: 'admin',
                component: (resolve) => {
                    require.ensure(['../views/admin/admin'], () => {
                        resolve(require('../views/admin/admin'));
                    }, 'app');
                },
            },
            {
                path: 'admin-pay',
                component: (resolve) => {
                    require.ensure(['../views/admin/admin-pay'], () => {
                        resolve(require('../views/admin/admin-pay'));
                    }, 'app');
                },
            },
            {
                path: 'user',
                component: (resolve) => {
                    require.ensure(['../views/admin/user'], () => {
                        resolve(require('../views/admin/user'));
                    }, 'app');
                },
            },
            {
                path: 'user-account',
                component: (resolve) => {
                    require.ensure(['../views/admin/user-account'], () => {
                        resolve(require('../views/admin/user-account'));
                    }, 'app');
                },
            },
            {
                path: 'withdraw-record',
                component: (resolve) => {
                    require.ensure(['../views/admin/withdraw-record'], () => {
                        resolve(require('../views/admin/withdraw-record'));
                    }, 'app');
                },
            },
            {
                path: 'login-record',
                component: (resolve) => {
                    require.ensure(['../views/admin/login-record'], () => {
                        resolve(require('../views/admin/login-record'));
                    }, 'app');
                },
            },
            {
                path: 'asset',
                component: (resolve) => {
                    require.ensure(['../views/admin/asset'], () => {
                        resolve(require('../views/admin/asset'));
                    }, 'app');
                },
            },
            {
                path: 'pay',
                component: (resolve) => {
                    require.ensure(['../views/admin/pay'], () => {
                        resolve(require('../views/admin/pay'));
                    }, 'app');
                },
            },
            {
                path: 'invest',
                component: (resolve) => {
                    require.ensure(['../views/admin/invest'], () => {
                        resolve(require('../views/admin/invest'));
                    }, 'app');
                },
            },
            {
                path: 'withdraw',
                component: (resolve) => {
                    require.ensure(['../views/admin/withdraw'], () => {
                        resolve(require('../views/admin/withdraw'));
                    }, 'app');
                },
            },
            {
                path: 'withdraw/addr',
                component: (resolve) => {
                    require.ensure(['../views/admin/withdraw-addr'], () => {
                        resolve(require('../views/admin/withdraw-addr'));
                    }, 'app');
                },
            },
            {
                path: 'personal',
                component: (resolve) => {
                    require.ensure(['../views/admin/personal'], () => {
                        resolve(require('../views/admin/personal'));
                    }, 'app');
                },
                children: [
                    {
                        path: 'info',
                        component: (resolve) => {
                            require.ensure(['../views/admin/personal/info'], () => {
                                resolve(require('../views/admin/personal/info'));
                            }, 'app');
                        },
                    },
                    {
                        path: 'asset',
                        component: (resolve) => {
                            require.ensure(['../views/admin/personal/asset'], () => {
                                resolve(require('../views/admin/personal/asset'));
                            }, 'app');
                        },
                    },
                    {
                        path: 'password',
                        component: (resolve) => {
                            require.ensure(['../views/admin/personal/password'], () => {
                                resolve(require('../views/admin/personal/password'));
                            }, 'app');
                        },
                    },
                ]
            },
            {
                path: 'projects',
                component: (resolve) => {
                    require.ensure(['../views/admin/project'], () => {
                        resolve(require('../views/admin/project'));
                    }, 'app');
                },
                children: [
                    {
                        path: 'edit',
                        component: (resolve) => {
                            require.ensure(['../views/admin/project/list'], () => {
                                resolve(require('../views/admin/project/list'));
                            }, 'app');
                        },
                    },
                    {
                        path: 'status',
                        component: (resolve) => {
                            require.ensure(['../views/admin/project/list2'], () => {
                                resolve(require('../views/admin/project/list2'));
                            }, 'app');
                        },
                    },
                    {
                        path: 'detail',
                        component: (resolve) => {
                            require.ensure(['../views/admin/project/detail'], () => {
                                resolve(require('../views/admin/project/detail'));
                            }, 'app');
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
