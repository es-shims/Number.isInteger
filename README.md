# Number.isInteger <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Number.isInteger` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-number.isinteger).

## Getting started

```sh
npm install --save number.isinteger
```

## Usage/Examples

```js
console.log(Number.isInteger(-3)); // true
console.log(Number.isInteger(2 ** 54)); // true
console.log(Number.isInteger(2.3)); // false
console.log(Number.isInteger(Infinity)); // false
console.log(Number.isInteger("7")); // false
```

## Tests

Clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/number.isinteger
[npm-version-svg]: https://versionbadg.es/es-shims/Number.isInteger.svg
[deps-svg]: https://david-dm.org/es-shims/Number.isInteger.svg
[deps-url]: https://david-dm.org/es-shims/Number.isInteger
[dev-deps-svg]: https://david-dm.org/es-shims/Number.isInteger/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Number.isInteger#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/number.isinteger.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/number.isinteger.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/number.isinteger.svg
[downloads-url]: https://npm-stat.com/charts.html?package=number.isinteger
