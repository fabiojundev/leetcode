/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hashmap = {}; // sub => index

    for (i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (hashmap[diff] !== undefined) { //found
            return [ i + 1, hashmap[diff] + 1];
        }
        else {
            hashmap[nums[i]] = i;
            let left = 0;
            let right = nums.length - 1;
            let mid = 0;
            while (left <= right) {
                mid = ~~((left + right) / 2);
                if (nums[mid] === diff && mid !== i) {
                    return [i + 1, mid + 1];
                }
                hashmap[nums[mid]] = mid;
                if (nums[mid] <= diff) {
                    left = mid + 1;
                }
                else {
                    right = mid - 1;
                }
            }
        }
    }
};

console.log(twoSum([-1,-1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], -2));