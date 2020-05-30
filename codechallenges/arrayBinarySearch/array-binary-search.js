'use strict';

function BinarySearch(arr, a) {

    let startPiont = 0; const n = arr.length; let endPoint = n - 1;

    while(startPiont <= endPoint) {

      let mid = Math.floor((startPiont + endPoint) / 2);

      if (arr[mid] === a) {return mid}

      else if (a > arr[mid]) {startPiont = mid + 1}

      else {endPoint = mid -1}
    
    return -1;

    }
  
  }
