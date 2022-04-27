<?php
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($val = 0, $left = null, $right = null) {
 *         $this->val = $val;
 *         $this->left = $left;
 *         $this->right = $right;
 *     }
 * }
 */
class Solution {

    /**
     * @param Integer[] $arr1
     * @param Integer[] $arr2
     * @param Integer $d
     * @return Integer
     */
    function findTheDistanceValue($arr1, $arr2, $d) {
        // $arr2 = array_unique( $arr2 );
        sort( $arr2 );
        $dist = 0;
        
        error_log(print_r( $arr2, 1));
        for( $i = 0; $i < count( $arr1); $i++ ) {
            $left = 0;
            $right = count( $arr2 ) - 1;
            $dist++;
            
            while( $left <= $right ) {
                $mid = floor( ($left + $right)/2 );
                $diff = $arr1[ $i ] - $arr2[ $mid ];
                
                error_log("[i]: $i, arr1[$i]: {$arr1[ $i ]}, arr2[$mid]: {$arr2[ $mid ]}, left: $left, right: $right, mid: $mid, diff: $diff, diff <= d:" . ($diff <= $d));
                if( abs( $diff ) <= $d  ) {
                    $dist--;
                    error_log("decrease dist: $dist");
                    break;
                }
                else {
                    if( $diff < 0 ) {
                        $right = $mid -1;
                    }
                    else {
                        $left = $mid + 1;
                    }
                }
            }
            error_log("dist: $dist");
        }
        
        return $dist;
    }
}

$s = new Solution;
$arr1 = [-3,10,2,8,0,10];
$arr2 = [-9,-1,-4,-9,-8];
$d = 9;
$out = $s->findTheDistanceValue($arr1, $arr2, $d);
error_log(print_r( $out, 1));

?>
