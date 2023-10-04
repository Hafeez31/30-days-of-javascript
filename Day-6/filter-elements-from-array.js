/**
 * @author Hafeez Mohamad (https://github.com/Hafeez31)
 *
 * Day 6 - LeetCode 30 Days of JavaScript (2023)
 * Problem link: https://leetcode.com/problems/filter-elements-from-array
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i], i)) result.push(arr[i]);
	}

	return result;
};
