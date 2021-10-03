import isInteger, * as isIntegerModule from 'number.isinteger';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(isInteger, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(isIntegerModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = isIntegerModule;
	t.equal((await import('number.isinteger/shim')).default, shim, 'shim named export matches deep export');
	t.equal((await import('number.isinteger/implementation')).default, implementation, 'implementation named export matches deep export');
	t.equal((await import('number.isinteger/polyfill')).default, getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
