(() => {
  const reverseSquareMatrixCollumn = (arr: number[][], colIndex: number) => {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      let temp: number = arr[start][colIndex];
      arr[start][colIndex] = arr[end][colIndex];
      arr[end][colIndex] = temp;

      start++;
      end--;
    }
  };

  let test = [
    [10, 20, 30],
    [11, 21, 31],
    [12, 22, 32],
  ];
  console.table(test);
  reverseSquareMatrixCollumn(test, 2);
  console.table(test);
})();
