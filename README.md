# Vue SPA 项目模板
> 请通过[meitu-cli](http://npm.meitu-inc.com/#@meitu/meitu-cli)来初始化该类型项目，该仓库作为源代码维护

## 初始化
```
meitu init vue-spa xxx
```

初始化结束后请运行```git remote add origin git@gitlab.meitu.com:fex/[projectName].git```关联具体项目仓库


## 开发构建
```
npm run dev 后访问http://localhost:9000/，端口可在配置项里配置
```

## 部署构建

> 传test参数可部署测试环境，会读取不同配置

```
npm run build[:test]
```

## 默认安装依赖库 

- [vue](https://cn.vuejs.org/)
- [vuex](https://vuex.vuejs.org/zh-cn/)
- [vue-router](https://router.vuejs.org/zh-cn/)
- [axios](https://www.npmjs.com/package/axios)
- [vee-validate](http://vee-validate.logaretm.com/)
- [lodash](https://lodash.com/)
- [moment](http://momentjs.com/)
- [bluebird](http://bluebirdjs.com/docs/getting-started.html)
- [es6-promise](https://www.npmjs.com/package/es6-promise)

目录说明 
===

### build 

> 构建文件，已实现基础构建功能，区分开发/测试/生产环境构建

### config 

- 项目配置项，区分开发/测试/生产配置，具体配置项请看代码注释
- 考虑到多人协作时不同开发人员开发配置不同，为避免代码冲突，development.js已加入.gitignore，项目初始化时生成的是.development.js，复制一份development.js并进行配置即可


### src

> 源码 

- `api` : 异步io接口统一管理，基于[axios](https://www.npmjs.com/package/axios)
- `assets` : 通用静态资源
- `components` : 通用vue组件 
- `constants` : 项目常量
- `i18n` : 语言包
- `router` : 路由，基于[vue-router](https://router.vuejs.org/zh-cn/)
- `store` : 状态管理，基于[vuex](https://vuex.vuejs.org/zh-cn/)
- `utils` : 通用工具库
- `views` : 业务组件(正常情况下根据模块划分目录，如果模块内有公用资源、常量、组件等，建议在模块内建assets/constants/components等目录存放)
- `index.template.html` : 入口模板
- `index.js` : 入口文件 

### dist 

> 构建代码

### test

> 测试用例，功能暂未实现 

## 开发规范
> 请遵循团队协议规范
- [javascript-style-guide](http://f2er.meitu.com/docs/#/javascript-style-guide/)
- [css-style-guide](http://f2er.meitu.com/docs/#/css-style-guide/)

## 默认支持的开发功能
- `HMR`
- `ESlint` : 可配置开关
- `babel` : es2015/stage-1

#### 该模板目前只支持前后端分离的纯前端项目开发，只跑过美妆后台，如有坑可丢给hgk解决 





