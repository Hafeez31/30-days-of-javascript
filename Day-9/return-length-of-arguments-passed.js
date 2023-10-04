/**
 * @author Hafeez Mohamad (https://github.com/Hafeez31)
 *
 * Day 9 - LeetCode 30 Days of JavaScript (2023)
 * Problem link: https://leetcode.com/problems/return-length-of-arguments-passed
 */

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
	return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
