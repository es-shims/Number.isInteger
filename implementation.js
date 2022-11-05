'use strict';

var IsIntegralNumber = require('es-abstract/2022/IsIntegralNumber');

module.exports = function isInteger(value) {
	return IsIntegralNumber(value);
};
