<?php
function binary_search($arr,$item){
    if(!count($arr)){
        return;
    }
    $len = count($arr);
    $low = 0;
    $high = $len - 1;

    while($low<$high){
        $mid = ($low+$high)/2;
        $guess = $arr[$mid];

        if($item == $guess){
            return $mid;
        }
        if($guess > $item){
            $high = $mid -1;
        }
        if($guess < $item){
            $low = $mid + 1;
        }
    }
    return null;

}
