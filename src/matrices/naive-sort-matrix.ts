(() => {
  type PositionItem = {
    row: number;
    col: number;
  };
  const naiveSortMatrix = (matrix: number[][]): PositionItem[] => {
    const positions: PositionItem[] = [];
    let currentMax = 0;
    matrix.forEach((row, i) =>
      row.forEach((item, j) => {
        if (item > currentMax) {
          currentMax = item;
          positions.unshift({ row: i, col: j });
        }
      })
    );
    return positions;
  };

  let test = [
    [10, 20, 30],
    [11, 21, 31],
    [12, 22, 32],
  ];
  console.table(test);
  console.table(naiveSortMatrix(test));
})();
//complexity O(n^2)
