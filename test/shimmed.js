'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Number.isInteger.length, 1, 'Number.isInteger has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Number.isInteger.name, 'isInteger', 'Number.isInteger has name "isInteger"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Math, 'isInteger'), 'Number.isInteger is not enumerable');
		et.end();
	});

	runTests(Number.isInteger, t);

	t.end();
});
