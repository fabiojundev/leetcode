/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let missing = [];
    let i = 1;
    let j = 0;

    while (missing.length < k) {
        if (arr[j] < i) {
            j++;
        }
        else if (arr[j] != i) {
            missing.push(i);
            i++;
        }
        else {
            i++;
        }
    }
    return missing.pop();
};

let arr = [2, 3, 4, 7, 11], k = 5;
console.log(findKthPositive(arr, k));