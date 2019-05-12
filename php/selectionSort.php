<?php
function selectionSort($arr){

    $len = count($arr);

    for ($i = 0; $i < $len - 1; $i++) {
        $smallest = $arr[i];
        $small_index = i;
        for ($j = i + 1; $j < $len; $j++) {
            if ($smallest > $arr[j]) {
                $smallest = $arr[j];
                $small_index = j;
            }
        }
        $temp = $arr[i];
        $arr[j] = $temp;
        $arr[i] = $smallest;
    }
}

?>
