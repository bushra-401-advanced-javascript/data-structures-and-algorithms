'use strict';

function insertShiftArray(arr, val) {

    if (arr.length % 2 == 0) {
        let insertAt = (arr.length / 2) ;
        arr.splice(insertAt, 0, val);
      }   
      else {
        let insertAt = (((arr.length) -1) / 2) + 1 ;
        arr.splice(insertAt, 0, val);
      }
       return arr
}