/*
  # Linear search algorthim
  # time complexity ==> O(n)
*/

// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) return i;
//   }
//   return -1;
// }

// console.log(linearSearch([1, 5, 3, 6, 4, 55], 55));
// console.log(linearSearch([1, 5, 3, 6, 4, 55], 6));
// console.log(linearSearch([1, 5, 3, 6, 4, 55], 80));

/*
  # Binary search algorthim
    -- array must be sorted 
    -- time complexity ==> O(logn)
*/

// function binarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;

//   while (leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (target === arr[middleIndex]) {
//       return middleIndex;
//     }
//     if (target < arr[middleIndex]) {
//       rightIndex = middleIndex - 1;
//     } else {
//       leftIndex = middleIndex + 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch([1, 2, 5, 3, 55], 55));
// console.log(binarySearch([2, 3, 4, 5, 6, 8, 9, 10], 6));

/*
  # recursive binary search algorthim
    -- array must be sorted 
    -- time complexity ==> O(logn)
    
*/

// function recursiveBinarySearch(arr, target) {
//   return search(arr, target, 0, arr.length - 1);
// }

// function search(arr, target, leftIndex, rightIndex) {
//   if (leftIndex > rightIndex) return -1;

//   let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//   if (target === arr[middleIndex]) return middleIndex;

//   if (target < arr[middleIndex]) {
//     return search(arr, target, leftIndex, middleIndex - 1);
//   } else {
//     return search(arr, target, middleIndex + 1, rightIndex);
//   }
// }
// console.log(recursiveBinarySearch([1, 2, 5, 3, 55], 55));
// console.log(recursiveBinarySearch([2, 3, 4, 5, 6, 8, 9, 10], 6));