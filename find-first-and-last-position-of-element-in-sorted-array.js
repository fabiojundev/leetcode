/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    let left = 0;
    let right = nums.length - 1;
    let mid = 0;
    let first = -1;
    let last = -1;

    while (left <= right) {
        mid = ~~((left + right) / 2);

        if (nums[mid] == target) {

            if (first > mid || first == -1) {
                first = mid;
            }

            if (last < mid || last == -1) {
                last = mid;
            }

            if (nums[first - 1] != target && nums[last + 1] != target) {
                break;
            }
            else if( nums[first - 1] == target ) {
                left = --first;
            }
            else if( nums[last + 1] == target ) {
                right = ++last;
            }
        }
        else {
            if (nums[mid] > target) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
    }

    return [first, last];
};

const nums = [1, 2, 3];
const target = 1;
console.log("RES:", searchRange(nums, target));
