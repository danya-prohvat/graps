const arr = [
  1, 32, 432, -3, 0, 0, 122, -21, -112221, 32, 1, 2, 3, 4, 5, -432, -1, -90,
  -32, 4,
];

let count = 0;

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) indexMin = j;
      count += 1;
    }
    let temp = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = temp;
  }
  return arr;
}

console.log(selectionSort(arr));
console.log("count:" + count); // O(n^2)
