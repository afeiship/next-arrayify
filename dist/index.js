/*!
 * name: @jswork/next-arrayify
 * description: Simpliy to array.
 * homepage: https://github.com/afeiship/next-arrayify
 * version: 1.0.0
 * date: 2020-11-21 10:17:10
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.arrayify = function (inTarget) {
    if (inTarget == null) return [];
    return Array.isArray(inTarget) ? inTarget : [inTarget];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.arrayify;
  }
})();
