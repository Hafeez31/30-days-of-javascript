/**
 * @author Hafeez Mohamad (https://github.com/Hafeez31)
 *
 * Day 3 - LeetCode 30 Days of JavaScript (2023)
 * Problem link: https://leetcode.com/problems/to-be-or-not-to-be
 */

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (value1) {
	function toBe(value2) {
		if (value1 === value2) return true;
		throw Error("Not Equal");
	}

	function notToBe(value2) {
		if (value1 !== value2) return true;
		throw Error("Equal");
	}

	return { toBe, notToBe };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
