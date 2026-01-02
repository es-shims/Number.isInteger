'use strict';

var isIntegralNumber = require('math-intrinsics/isInteger');

module.exports = function isInteger(value) {
	return isIntegralNumber(value);
};
