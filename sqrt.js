/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let left = 0;
    let right = x;
    let mid = 0;

    while (left <= right) {
        mid = ~~((left + right) / 2);
        let pow = mid * mid;

        console.log(left, right, mid, pow);
        if (pow == x) {
            return mid;
        }
        if (x < pow) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    return  Math.floor((left + right) / 2);
};

const args = [0, 1, 4, 8, 9, 10, 6, 8];
args.map(x => console.log("----sqrt (%d): %d", x, mySqrt(x)));
