const nx = require('@feizheng/next-js-core2');
require('../src/next-arrayify');

describe('api.basic test', () => {
  test('nx.arrayify met null/undefined target', function () {
    expect(nx.arrayify(null)).toEqual([]);
    expect(nx.arrayify(undefined)).toEqual([]);
  });

  test('nx.arrayify met normal target', () => {
    expect(nx.arrayify('')).toEqual([''])
    expect(nx.arrayify(false)).toEqual([false])
    expect(nx.arrayify([1, 2, 3])).toEqual([1, 2, 3])
  })
});
