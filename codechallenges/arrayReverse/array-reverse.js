'use strict';

function arrayReverse(arr) {
    let reversedArr =[];
    let len = arr.length - 1;
    arr.forEach((num, idx) => {
        reversedArr.push(arr[len-idx]);
    })
    return reversedArr
} 