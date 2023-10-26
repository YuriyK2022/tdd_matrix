function matrixAddition(matrix1, matrix2) {
    if (
      matrix1.length !== matrix2.length ||
      matrix1[0].length !== matrix2[0].length
    ) {
      throw new Error("Matrix dimensions must match for addition.");
    }
  
    const result = [];
    for (let i = 0; i < matrix1.length; i++) {
      const row = [];
      for (let j = 0; j < matrix1[0].length; j++) {
        row.push(matrix1[i][j] + matrix2[i][j]);
      }
      result.push(row);
    }
  
    return result;
  }
  
  // Export the matrixAddition function
  module.exports = {
    matrixAddition,
    // Add other matrix operations here
  };
  