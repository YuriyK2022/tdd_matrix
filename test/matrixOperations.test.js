const Mtrx2 = require("../Mtrx2");  // Path to the Mtrx2 module
const Mtrx = require("mtrx");       // Path to the standard Mtrx library
const { expect } = require("chai"); // Path to the Chai library

describe("Matrix Operations:", () => {
  // Test for matrix addition
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
