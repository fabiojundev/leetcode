/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let hashmap = {}; // sub => index
    
    for( i = 0, j = nums.length -1; i < nums.length && i <= j ; i++, j-- ) {
        const diff1 = target - nums[i];
        const diff2 = target - nums[j];

        if( hashmap[diff1] !== undefined ) { //found
           return  i < hashmap[diff1]
                    ? [ i + 1, hashmap[diff1] + 1 ] 
                    : [ hashmap[diff1] + 1, i + 1 ];
        }
        hashmap[nums[i]] = i;

        if( hashmap[diff2] !== undefined ) {
            return j > hashmap[diff2] 
                    ? [ hashmap[diff2] + 1, j + 1 ]
                    : [ j + 1, hashmap[diff2] + 1 ];
        }
        hashmap[nums[j]] = j;
    }
};

const nums = [5,25,75];
const target = 100;

console.log(twoSum(nums, target));