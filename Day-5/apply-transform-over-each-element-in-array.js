/**
 * @author Hafeez Mohamad (https://github.com/Hafeez31)
 *
 * Day 5 - LeetCode 30 Days of JavaScript (2023)
 * Problem link: https://leetcode.com/problems/apply-transform-over-each-element-in-array
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		result.push(fn(arr[i], i));
	}

	return result;
};
