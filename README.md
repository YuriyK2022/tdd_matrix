# tdd_matrix
Implement the TDD (test driven development) approach for developing library operations on matrices from the https://github.com/zhufuge/Mtrx libraries using the Mocha, Chai libraries and using 2x2, 3x3, 3x2 matrices for examples
# Installation
1. Clone the Mtrx repository to your local machine
```sh
$ git clone https://github.com/zhufuge/Mtrx.git
```
2. Go to Mtrx folder and install all dependencies:
```sh
$ cd Mtrx
$ npm install
```
# First Step - Create simple test
3. In the work directory, create folder test and create file matrixOperations.test.js.
Create simple test for addition two matrices (as example).
New function matrixAddition() is on implemenetd yet.
```js
const Mtrx2 = require("../Mtrx2");  // Path to the Mtrx2 module
const Mtrx = require("mtrx");       // Path to the standard Mtrx library
const { expect } = require("chai"); // Path to the Chai library

describe("Matrix Operations:", () => {
  // Test for matrix addition
  describe("matrixAddition:", () => {
      it("should add two 3x3 matrices", () => {
      const matrix1 = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
      const matrix2 = new Mtrx([[3, 2, 1], [3, 4, 2], [1, 1, 1]]);
      const result = Mtrx2.matrixAddition(matrix1, matrix2);
      const expected = new Mtrx([[4, 4, 4], [7, 9, 8], [8, 9, 10]]);
      expect(result).to.deep.equal(expected);
    })
  })
  
  // Add tests for other matrix operations (multiplication, subtraction, etc)
})
```

4. Run the test using Mocha:
```sh
$ npm test
```
5. Test is failed, because the matrix function matrixAddition() is not implemented yet:
![image](https://github.com/YuriyK2022/tdd_matrix/assets/118524489/59ac5fd3-931e-405b-867b-b25100d947b6)

# Second Step - Implement matrixAddition() function:
6. Now, implement the matrix addition function in the Mtrx2.js file and ssve in the path: ...\test_matrix\Mtrx\src
```js
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
  
};
```
# Third Step - Rerun test with new matrixAddition() function:
7. Run the test using Mocha:
```sh
$ npm test
```
8. Now, test is passed, because the new function matrixAddition() is implemented:

![image](https://github.com/YuriyK2022/tdd_matrix/assets/118524489/cb018731-8b26-41dd-bf8e-cca5d592f6f8)

9. At the same manner we will continue to add more tests and matrix operations, following the TDD cycle:
-   Write a failing test
-   Implement the feature
-   Verify that the test passes

This iterative process ensures that your matrix operations are well-tested and functioning as expected.

# All tests from matrixOperations.test.js file:
```js
const Mtrx2 = require("../Mtrx2");  // Path to the Mtrx2 module
const Mtrx = require("mtrx");       // Path to the standard Mtrx library
const { expect } = require("chai"); // Path to the Chai library

describe("Matrix Operations:", () => {
  describe("matrixAddition:", () => {
    it("should add two 2x2 matrices", () => {
      const matrix1 = new Mtrx([[1, 2], [3, 4]]);
      const matrix2 = new Mtrx([[5, 6], [7, 8]]);
      const result = Mtrx2.matrixAddition(matrix1, matrix2);
      const expected = new Mtrx([[6, 8], [10, 12]]);
      expect(result).to.deep.equal(expected);
    })
    it("should add two 3x3 matrices", () => {
      const matrix1 = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
      const matrix2 = new Mtrx([[3, 2, 1], [3, 4, 2], [1, 1, 1]]);
      const result = Mtrx2.matrixAddition(matrix1, matrix2);
      const expected = new Mtrx([[4, 4, 4], [7, 9, 8], [8, 9, 10]]);
      expect(result).to.deep.equal(expected);
    })
  })
  describe("matrixSubstraction: ", () => {
    it("should subtract two 3X3 matrices", () => {
      const matrix1 = new Mtrx([[6, 5, 8], [11, 12, 14], [21, 11, 7]]);
      const matrix2 = new Mtrx([[2, 10, 11], [18, 4, 1], [22, 9, 4]]);
      const result = Mtrx2.matrixSubtraction(matrix1, matrix2);
      const expected = new Mtrx([[4, -5, -3], [-7, 8, 13], [-1, 2, 3]]);
      expect(result).to.deep.equal(expected);
    })
    it("should subtract two 2X2 matrices", () => {
      const matrix1 = new Mtrx([[3, 8], [11, 24]]);
      const matrix2 = new Mtrx([[21, 15], [13, 17]]);
      const result = Mtrx2.matrixSubtraction(matrix1, matrix2);
      const expected = new Mtrx([[-18, -7], [-2, 7]]);
      expect(result).to.deep.equal(expected);
    })
  })
  describe("matrixMultiplication: ", () => {
    it("should multiply two 3X3 matrices", () => {
      const matrix1 = new Mtrx([[6, 5, 8], [11, 12, 14], [21, 11, 7]]);
      const matrix2 = new Mtrx([[2, 10, 11], [18, 4, 1], [22, 9, 4]]);
      const result = Mtrx2.matrixMultiplication(matrix1, matrix2);
      const expected = new Mtrx([[278, 152, 103], [546, 284, 189], [394, 317, 270]]);
      expect(result).to.deep.equal(expected);
    })
    it("should multiply two 2X2 matrices", () => {
      const matrix1 = new Mtrx([[6, 5], [11, 12]]);
      const matrix2 = new Mtrx([[2, 10], [18, 4]]);
      const result = Mtrx2.matrixMultiplication(matrix1, matrix2);
      const expected = new Mtrx([[102, 80], [238, 158]]);
      expect(result).to.deep.equal(expected);
    })
  })
  describe("matrixDeterminant:", () => {
    it("should calculate the determinant of 2x2 matrix", () => {
      const matrix = new Mtrx([
        [1, 2],
        [3, 4]
      ])
      const result = Mtrx2.matrixDeterminant2x2(matrix);
      const expected = -2;
      expect(result).to.equal(expected);
    })
    it("should calculate the determinant of 3x3 matrix", () => {
      const matrix = new Mtrx([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ])
      const result = Mtrx2.matrixDeterminant3x3(matrix);
      const expected = 0;
      expect(result).to.equal(expected);
    })
  })
  describe("Matrix Transposition: ", () => {
    it("should transpose 3x3 matrix", () => {
      const matrix = new Mtrx([
        [1, 3, 5],
        [7, 9, 11], 
        [13, 15, 17]
      ])
      const result = Mtrx2.transposeMatrix(matrix);
      const expected = new Mtrx([
        [1, 7, 13],
        [3, 9, 15],
        [5, 11, 17]
      ])
      expect(result).to.deep.equal(expected);
    })
    it("should transpose 3x2 matrix", () => {
      const matrix = new Mtrx([
        [1, 3],
        [7, 9], 
        [13, 15]
      ])
      const result = Mtrx2.transposeMatrix(matrix);
      const expected = new Mtrx([
        [1, 7, 13],
        [3, 9, 15]
      ])
      expect(result).to.deep.equal(expected);
    })
  })
  // Add tests for other matrix operations (multiplication, subtraction, etc)
})

```
# The following tests were created:
-   matrixAddition
-   matrixSubstraction
-   matrixMultiplication
-   matrixDeterminant
-   Matrix Transposition
# The following functions were created:
-   matrixAddition()
-   matrixSubstraction()
-   matrixMultiplication()
-   matrixDeterminant2x2()
-   matrixDeterminant3x3()
-   transposeMatrix()
# Custom functions from Mtrx2.js file:
```js
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
```
# Run full tests:
```sh
$ npm test
```
# All test is passed:

![image](https://github.com/YuriyK2022/tdd_matrix/assets/118524489/fe8b3159-c171-461f-8dcb-01c1ffbb8a97)

