/**
 * @author Hafeez Mohamad (https://github.com/Hafeez31)
 *
 * Day 2 - LeetCode 30 Days of JavaScript (2023)
 * Problem link: https://leetcode.com/problems/counter
 */

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
	return function () {
		return n++;
	};
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
