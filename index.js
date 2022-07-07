var loaderUtils = require("loader-utils");
// 默认参数
var defaultConfig = {
  unitToConvert: "px",
  viewportWidth: 375,
  unitPrecision: 5,
  viewportUnit: "rem",
  fontViewportUnit: "rem",
  minPixelValue: 1,
};
var templateRegExp = /<template>([\s\S]+)<\/template>/gi;
var pxRegExp = /(\d+)(\.\d+)?px/;

module.exports = function (source) {
  var opts = loaderUtils.getOptions(this);
  console.log(opts);
  var defaults = Object.assign({}, defaultConfig, opts);
  var _source = "";
  if (templateRegExp.test(source)) {
    _source = source.match(templateRegExp)[0];
  }
  var pxGlobalRegExp = new RegExp(pxRegExp.source, "g");
  if (pxGlobalRegExp.test(_source)) {
    var _a = _source.replace(
      pxGlobalRegExp,
      createPxReplace(
        defaults.viewportWidth,
        defaults.minPixelValue,
        defaults.unitPrecision,
        defaults.viewportUnit
      )
    );
    return source.replace(templateRegExp, _a);
  } else {
    return source;
  }
};
function createPxReplace(
  viewportSize,
  minPixelValue,
  unitPrecision,
  viewportUnit
) {
  return function ($0, $1) {
    if (!$1) return;
    var pixels = parseFloat($1);
    if (pixels <= minPixelValue) return;
    return toFixed((pixels / viewportSize) * 10, unitPrecision) + viewportUnit;
  };
}

function toFixed(number, precision) {
  var multiplier = Math.pow(10, precision + 1),
    wholeNumber = Math.floor(number * multiplier);
  return (Math.round(wholeNumber / 10) * 10) / multiplier;
}
