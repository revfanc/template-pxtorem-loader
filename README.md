# template-pxtorem-loader

一个可以将 vue 标签内样式 px 转换 rem 的 webpack loader

### install

```npm
npm install template-pxtorem-loader --save-dev
```

### Use

vue-cli4

```javascript
{
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .test(/\.vue$/)
      .use("template-pxtorem-loader")
      .loader("template-pxtorem-loader")
      .tap((options) => {
        options = {
          viewportWidth: 375,
        };
        return options;
      })
      .end();
  };
}
```

vue-cli2

```text
{
    test: /\.(vue|jsx?)$/,
    loader: 'template-pxtorem-loader',
    options: {

    }
}
```

### Example

```html
from

<h3 style="width: 375px; height: 50px; font-size: 14px">Test</h3>
```

```html
To
<h3 style="width: 10rem; height: 1.33333rem; font-size: 0.37333rem;">Test</h3>
```

### option

默认配置

```javascript
defaultConfig = {
  unitToConvert: "px",
  viewportWidth: 375,
  unitPrecision: 5,
  viewportUnit: "rem",
  fontViewportUnit: "rem",
  minPixelValue: 1,
};
```

### 参考

该项目来源于 style-vw-loader

https://github.com/hyy1115/style-vw-loader
