'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimMathIsInteger() {
	var polyfill = getPolyfill();
	// TODO
	return polyfill;
};
