/*
 # cartesian Product
 # time complexity ===> O(nm)
*/

function cartesianProduct(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(cartesianProduct(arr1, arr2));

/************************************************************************ */
/************************************************************************ */

/*
 # climbingStarcase
 # time complexity ===> O(n)
*/

function climbingStarcase(n) {
  const nOfWays = [1, 2];
  for (let i = 2; i < n; i++) {
    nOfWays[i] = nOfWays[i - 1] + nOfWays[i - 2];
  }
  return nOfWays[n - 1];
}

console.log(climbingStarcase(3));
console.log(climbingStarcase(5));
