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

function matrixSubtraction(matrix1, matrix2) {
  if (
    matrix1.length !== matrix2.length ||
    matrix1[0].length !== matrix2[0].length
  ) {
    throw new Error("Matrix dimensions must match for subtraction.");
  }
  
  const result = [];
  for (let i = 0; i < matrix1.length; i++) {
    const row = [];
    for (let j = 0; j < matrix1[0].length; j++) {
      row.push(matrix1[i][j] - matrix2[i][j]);
    }
    result.push(row);
  }
  
  return result;
}

function matrixMultiplication(matrix1, matrix2) {
  const rows1 = matrix1.length;
  const cols1 = matrix1[0].length;
  const rows2 = matrix2.length;
  const cols2 = matrix2[0].length;

  if (cols1 !== rows2) {
    throw new Error("Matrix dimensions are incompatible for multiplication.");
  }

  const result = new Array(rows1).fill(null).map(() => new Array(cols2).fill(0));

  for (let i = 0; i < rows1; i++) {
    for (let j = 0; j < cols2; j++) {
      for (let k = 0; k < cols1; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  return result;
}

function matrixDeterminant2x2(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  if (rows !== cols) {
    throw new Error("Matrix must be square for determinant calculation.");
  }

  if (rows === 1) {
    return matrix[0][0];
  } else if (rows === 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  
  return determinant;
}

function matrixDeterminant3x3(matrix) {
  if (matrix.length !== 3 || matrix[0].length !== 3) {
    throw new Error("Matrix must be a 3x3 matrix for determinant calculation.");
  }

  // Calculate the 3x3 determinant using the formula
  const a = matrix[0][0];
  const b = matrix[0][1];
  const c = matrix[0][2];
  const d = matrix[1][0];
  const e = matrix[1][1];
  const f = matrix[1][2];
  const g = matrix[2][0];
  const h = matrix[2][1];
  const i = matrix[2][2];

  const determinant =
    a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);

  return determinant;
}

function transposeMatrix(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const transposedMatrix = [];
  for (let j = 0; j < numCols; j++) {
    const newRow = [];
    for (let i = 0; i < numRows; i++) {
      newRow.push(matrix[i][j]);
    }
    transposedMatrix.push(newRow);
  }

  return transposedMatrix;
}

// Export the matrixAddition function
module.exports = {
  matrixAddition,
  matrixSubtraction,
  matrixMultiplication,
  matrixDeterminant2x2,
  matrixDeterminant3x3,
  transposeMatrix,
  
};
  