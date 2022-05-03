/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let missing = 0;
    let count = 0;
    let i = 1;
    let j = 0;

    while (count < k) {
        if (arr[j] < i) {
            j++;
        }
        else {
            if (arr[j] != i) {
                missing = i;
                count++;
            }
            i++;
        }
    }
    return missing;
};

let arr = [2, 3, 4, 7, 11], k = 5;
console.log(findKthPositive(arr, k));