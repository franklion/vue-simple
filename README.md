# vue-simple

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



## ESlint Setup

``` bash
# update node.js version
use nvm to install lastest version

# update npm version
npm update

# install dependencies
npm install -D vue-eslint-parser eslint-plugin-html eslint-plugin-vue babel-eslint eslint

# init eslint
eslint --init

# copy setting file to .eslintrc.json
copy and paste(請參考.eslintrc.json)

# install ESLint plugin for VSCode
[VSCode] 安裝 擴充功能 ESLint

# setting VSCode
[VSCode] 檔案->喜好設定->設定->右上角 工作區設定->貼上設定
{
    "eslint.enable": true,
    "eslint.nodePath": null,
    "eslint._legacyModuleResolve": false,
    "eslint.workingDirectories": [
      "./src"
    ],
    "eslint.options": { 
      "configFile": "../.eslintrc.json"
    },
    "eslint.trace.server": "off",
    "eslint.run": "onSave",
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      { "language": "html", "autoFix": true },
      { "language": "vue", "autoFix": true }
    ]
}

```
