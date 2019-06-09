var assert = require('chai').assert;
var tetris = require('../tetris');
describe("O-tetromino", function () {
    it("O-tetromino rotation phase", function () {
        let typeOfTetromino = "O";
        let rotationPhaseOfTetromino = ["stable"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            ----
            -XX-
            -XX-
            ----
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            ----
            -XX-
            -XX-
            ----
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });
});

describe("J-tetromino", function () {
    it("J-tetromino rotation phase", function () {
        let typeOfTetromino = "J";
        let rotationPhaseOfTetromino = ["stable"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            --X-
            --X-
            -XX-
            ----
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            ----
            ----
            -XXX
            ---X
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });
});
