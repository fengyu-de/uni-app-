# styte-uniapp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
1.样式{
    支持scss,下载scss  npm uninstall sass-loader（卸载当前版本） npm install sass sass-loader@7.3.1 --save-dev 
    app.vue 中的style是全局样式(每个组件都会生效)
}
2.配置{
    pages.json文件
    pages:小程序的页面配置(vue路由) 那个路径在前面那个页面就最先显示
    globalStyle:全局配置(底部导航和顶部背景文字)
}
3.页面周期{
    在about文件里面
}

