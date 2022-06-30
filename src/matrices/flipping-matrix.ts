function flippingMatrix(matrix: number[][]): number {
  
  let length = matrix.length;
  let halfLength = Math.floor(matrix.length / 2);
  let sum: number = 0;
  for(let i = 0; i < halfLength; i++) {
    for( let j = 0; j < halfLength; j++) {
      const subMatrixMax = Math.max(matrix[i][j], matrix[i][length-j-1], matrix[length - i - 1][j], matrix[length -i-1][length-j-1]);
      sum += subMatrixMax; 
    }
  } 
  return sum;
}
// complexity O(n^2)
