'use strict';

var IsIntegralNumber = require('es-abstract/2021/IsIntegralNumber');

module.exports = function isInteger(value) {
	return IsIntegralNumber(value);
};
