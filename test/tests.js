'use strict';

module.exports = function (isInteger, t) {
	t.test('should be truthy on integers', function (st) {
		st.equal(isInteger(4), true);
		st.equal(isInteger(4.0), true);
		st.equal(isInteger(1234), true);
		st.equal(isInteger(-1234), true);
		st.equal(isInteger(Math.pow(2, 53) - 1), true);
		st.equal(isInteger(-Math.pow(2, 53) + 1), true);
		st.equal(isInteger(0), true);
		st.equal(isInteger(-0), true);
		st.end();
	});

	t.test('should be false when the type is not number', function (st) {
		st.equal(isInteger(undefined), false);
		st.equal(isInteger(null), false);
		st.equal(isInteger('foo'), false);
		st.equal(isInteger({ valueOf: function () { return 3; } }), false);
		st.equal(isInteger({ valueOf: function () { throw new Error(); } }), false);

		if (typeof BigInt === 'function') { st.equal(isInteger(BigInt(2)), false); }

		st.end();
	});

	t.test('should be false when NaN', function (st) {
		st.equal(isInteger(NaN), false);
		st.end();
	});

	t.test('should be false when ∞', function (st) {
		st.equal(isInteger(Infinity), false);
		st.equal(isInteger(-Infinity), false);
		st.end();
	});

	t.test('should be false when number is not integer', function (st) {
		st.equal(isInteger(3.4), false);
		st.equal(isInteger(-3.4), false);
		st.end();
	});

	t.test('should be true when abs(number) is 2^53 or larger', function (st) {
		st.equal(isInteger(Math.pow(2, 53)), true);
		st.equal(isInteger(Math.pow(2, 54)), true);
		st.equal(isInteger(-Math.pow(2, 53)), true);
		st.equal(isInteger(-Math.pow(2, 54)), true);
		st.end();
	});
};
