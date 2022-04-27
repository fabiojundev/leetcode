/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let hashmap = {}; // sub => index
    
    for( i = 0; i < nums.length; i++ ) {
        const diff = target - nums[i];

        if( hashmap[diff] !== undefined ) { //found
           return [ hashmap[diff], i ];
        }
        else {
            hashmap[nums[i]] = i;
        }
    }
};

console.log( twoSum( [2, 7, 11, 15], 9 ) );