/*!
 * name: @feizheng/next-arrayify
 * description: Simpliy to array.
 * homepage: https://github.com/afeiship/next-arrayify
 * version: 1.0.0
 * date: 2020-06-04T23:09:17.373Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.arrayify = function (inTarget) {
    if (inTarget == null) return []
    return Array.isArray(inTarget) ? inTarget : [inTarget];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.arrayify;
  }
})();

//# sourceMappingURL=next-arrayify.js.map
