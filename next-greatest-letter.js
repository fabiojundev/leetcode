/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length -1;
    let mid = 0;
    
    while( left <= right ) {
        mid = ~~( ( left + right )/2 );
        const char = letters[ mid ];

        if( char == target ) {
            while( letters[ mid + 1 ] == target ) {
                mid++;
            }
            if( mid == letters.length -1 ) {
                return letters[ 0 ];
            }
            return letters[ mid + 1 ];
        }

        if( char > target ) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    if( target < letters[ mid ] ) {
        return letters[ mid ];    
    }
    if( mid == letters.length -1 ) {
        return letters[ 0 ];
    }
    return letters[ mid +1 ];
};



const letters = ["c","f","j"];
const target = "a";

console.log("****output:", nextGreatestLetter( letters, target ) );