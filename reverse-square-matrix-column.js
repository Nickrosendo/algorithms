const reverseSquareMatrixCollumn = (arr, colIndex) => {
  
  let start = 0;
  let end = arr.length - 1;
  while(start < end) {
    let temp = arr[start][colIndex];
    arr[start][colIndex] = arr[end][colIndex];
    arr[end][colIndex] = temp;

    start++;
    end--;
  }
}

const test = [[10, 20, 30], [11, 21, 31], [12, 22, 32]];
console.table(test);
reverseSquareMatrixCollumn(test, 2);
console.table(test);
