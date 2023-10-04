/**
 * @author Hafeez Mohamad (https://github.com/Hafeez31)
 *
 * Day 10 - LeetCode 30 Days of JavaScript (2023)
 * Problem link: https://leetcode.com/problems/allow-one-function-call
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
	let isCalled = false;

	return function (...args) {
		if (isCalled) return undefined;

		isCalled = true;
		return fn(...args);
	};
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
