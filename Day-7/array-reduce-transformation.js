/**
 * @author Hafeez Mohamad (https://github.com/Hafeez31)
 *
 * Day 7 - LeetCode 30 Days of JavaScript (2023)
 * Problem link: https://leetcode.com/problems/array-reduce-transformation
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
	let val = init;

	for (let i = 0; i < nums.length; i++) {
		val = fn(val, nums[i]);
	}

	return val;
};
