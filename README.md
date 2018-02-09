# 

> 

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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

###webpack modify:

```
#modify webpack.base.conf.js

resolve:{
   alias:{
      'vue$':'vue/dist/vue.js' // 'vue/dist/vue.common.js' for webpack 1
   }
}
```

###vuex install:
```
npm install vuex --save
#store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

#reference:
https://vuex.vuejs.org/en/installation.html
```
###iview install:
```
npm install iview --save
#reference:
https://www.iviewui.com/docs/guide/install
```