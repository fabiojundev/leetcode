/**
 * @param {number} n
 * @return {number}
 */
 var arrangeCoins = function(n) {
    let left = 1;
    let right = n;
    let mid = 0;
    let complete = 0;
    let incomplete = 0;

    while (left <= right) {
        mid = ~~((left + right) / 2);
        if (mid * (1 + mid) / 2 <= n) {
            complete = mid;
            left = mid + 1;
        }
        else {
            incomplete = mid;
            right = mid - 1;
        }
    }
    return complete;
};
