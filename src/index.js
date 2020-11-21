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
