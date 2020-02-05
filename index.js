/**
 * Number.isInteger() - Polyfill
 *
 * @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 * @ref https://tc39.es/ecma262/#sec-number.isinteger
 */

'use strict';

(function () {
  Number.isInteger = Number.isInteger || function (value) {
    return (
      typeof value === 'number' && // 7.2.6§1
      !(value !== value || value == Infinity || value == -Infinity) && // 7.2.6§2
      Math.floor(Math.abs(value)) === Math.abs(value) // 7.2.6§3
    )
  };
})();
