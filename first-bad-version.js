/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        if( n == 1 ) {
            return 1;
        }
        let left = 1;
        let right = n;
        let mid = 0;
        let notBad = 0;
        let bad = 0;

        while (left <= right) {
            mid = ~~((left + right) / 2);

            console.log("left: %d, right: %d, mid: %d, notBad: %d, bad: %d, isbad(%d): %d",left, right, mid, notBad, bad, mid, isBadVersion(mid));

            if (isBadVersion(mid)) {
                bad = mid;
                right = mid - 1;
                if( notBad > 0 && mid == notBad + 1 ) {
                    return mid;
                }
            }
            else { 
                notBad = mid;
                left = mid + 1;
                if( bad > 0 && mid == bad - 1 ) {
                    return mid + 1;
                }
            }
        }
        return bad;
    };
};

const isBadVersion = (version) => {
    return version >= 2;
}

console.log("----solution:", solution(isBadVersion)(3));
