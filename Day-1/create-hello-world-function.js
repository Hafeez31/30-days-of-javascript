/**
 * @author Hafeez Mohamad (https://github.com/Hafeez31)
 *
 * Day 1 - LeetCode 30 Days of JavaScript (2023)
 * Problem link: https://leetcode.com/problems/create-hello-world-function
 */

/**
 * @return {Function}
 */
var createHelloWorld = function () {
	return function (...args) {
		return "Hello World";
	};
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
