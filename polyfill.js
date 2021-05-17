'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return Number.isInteger || implementation;
};
