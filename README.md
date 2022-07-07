# template-pxtorem-loader

一个可以将 vue 标签内样式 px 转换 rem 的 webpack loader

### install

```npm
npm install template-pxtorem-loader --save-dev
```

### Use

vue-cli3

```javascript
{
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .test(/\.vue$/)
      .use("template-pxtorem-loader")
      .loader("template-pxtorem-loader");
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

<h3 style="font-size: 28px;margin-top: 10px" width="500px">Test</h3>
```

```html
To
<h3 width="66.66667vw" style="font-size: 3.73333rem; margin-top: 1.33333rem;">
  Test
</h3>
```

### option

默认配置

```javascript
defaultsProp = {
  unitToConvert: "px",
  viewportWidth: 750,
  unitPrecision: 5,
  viewportUnit: "px",
  fontViewportUnit: "px",
  minPixelValue: 1,
};
```

### 参考

该项目来源于style-vw-loader

https://github.com/hyy1115/style-vw-loader
