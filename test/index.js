'use strict';

var isInteger = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(isInteger, t);

	t.end();
});
