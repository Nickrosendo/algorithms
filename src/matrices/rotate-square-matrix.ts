(() => {
  const rotateSquareMatrix = (
    matrix: number[][],
    direction: "clockwise" | "counterClockWise"
  ) => {
    if (handlers[direction]) {
      handlers[direction](matrix);
    }
  };
  const handlers = {
    clockwise: (matrix: number[][]) => {},
    counterClockWise: (matrix: number[][]) => {
      const length = matrix.length;
      const halfLength = Math.floor(matrix.length / 2);
      for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
          let temp: number = matrix[i][j];
          matrix[i][j] = matrix[j][i];
          matrix[j][i] = temp;
        }
      }
      console.table(matrix);

      for (let i = 0; i < length; i++) {
        for (let j = 0; j < halfLength; j++) {
          let temp: number = matrix[i][j];
          matrix[i][j] = matrix[i][length - 1 - j];
          matrix[i][length - 1 - j] = temp;
        }
      }
    },
  };

  let test = [
    [10, 20, 30],
    [11, 21, 31],
    [12, 22, 32],
  ];
  console.table(test);
  rotateSquareMatrix(test, 'counterClockWise');
  console.table(test);
})();
