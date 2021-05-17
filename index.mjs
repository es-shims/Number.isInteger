import callBind from 'call-bind';

import getPolyfill from 'number.isinteger/polyfill';

export default callBind(getPolyfill(), Number);

export { default as getPolyfill } from 'number.isinteger/polyfill';
export { default as implementation } from 'number.isinteger/implementation';
export { default as shim } from 'number.isinteger/shim';
