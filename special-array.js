/**
 * @param {number[]} nums
 * @return {number}
 * 
 * [1,2,3,4,5,6,7,8,9] => 5
 * [1,2,3,4,5,6,7,8,9,10,11] => 6
 * [1,2,3,4,5,6,7,8,9,10,11,12] => -1
 * [3,5] => 2
 * [3,5,7] => 3
 * [3,5,7,9] => -1
 * [0,4,3,0,4] => 3
 */
 var specialArray = function(nums) {

    let count = 0;
    let left = 1;
    let right = nums.length;
    let x = 0; //mid

    while( left <= right ) {
        x = ~~( ( left + right )/2 );
        count = 0;

        if( x > 0 && nums.length >= x ) {
            for( i = 0; i < nums.length; i++ ) {
                if( nums[ i ] >= x ) {
                    count++;
                }
            }
        }

        if( count == x ) {
            return x;
        }

        if( count < x ) {
            right = x - 1;
        }
        else {
            left = x + 1;
        }
    }

    return -1;
};

const nums = [3,5];
console.log(specialArray(nums));