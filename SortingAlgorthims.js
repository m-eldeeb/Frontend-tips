/* 
  # Bubble sorting
  # time complexity => O(n^2)
*/

// function BubbleSort(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }

// let array = [-9, 5, 88, 3, 789, -5];
// BubbleSort(array);
// console.log(array);



/* 
  # Insertion sorting
  # time complexity => O(n^2)
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

let array = [-9, 5, 88, 3, 789, -5];
insertionSort(array);
console.log(array);

/* 
  # Quick sorting
  # time complexity => O(n^2) [Worst Case]
  # time complexity => O(nlogn) [Avg Case]
  
*/

// function QuickSort(arr) {
//   if (arr.length < 2) return arr;
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...QuickSort(left), pivot, ...QuickSort(right)];
// }

// arr = [-6, 20, 8, -2, 4];
// console.log(arr);

// console.log(QuickSort(arr));




/* 
  # Quick sorting with better space complexity

*/

// function quickSort(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     const pivot = partition(arr, left, right);
//     quickSort(arr, left, pivot - 1);
//     quickSort(arr, pivot + 1, right);
//   }
//   return arr;
// }

// function partition(arr, left, right) {
//   const pivot = arr[right];
//   let i = left;
//   for (let j = left; j < right; j++) {
//     if (arr[j] < pivot) {
//       swap(arr, i, j);
//       i++;
//     }
//   }
//   swap(arr, i, right);
//   return i;
// }

// function swap(arr, i, j) {
//   const temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// const arr = [8, 20, -2, 4, -6];
// quickSort(arr);
// console.log(arr); 


/* 
  # merge sorting
  
  # time complexity => O(nlogn) [Avg Case]
  
*/


// function mergedSort(arr) {
//   if (arr.length < 2) return arr;
//   const mid = Math.floor(arr.length / 2);
//   const leftArray = arr.slice(0, mid);
//   const rightArray = arr.slice(mid);
//   return merge(mergedSort(leftArray), mergedSort(rightArray));
// }

// function merge(leftArray, rightArray) {
//   const sortedArray = [];
//   while (leftArray.length && rightArray.length) {
//     if (leftArray[0] <= rightArray[0]) {
//       sortedArray.push(leftArray.shift());
//     } else {
//       sortedArray.push(rightArray.shift());
//     }
//   }
//   return [...sortedArray, ...leftArray, ...rightArray];
// }

// console.log(mergedSort([8, 20, -2, 4, -6]));
