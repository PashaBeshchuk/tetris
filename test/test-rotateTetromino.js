var assert = require('chai').assert;
var tetris = require('../tetris');
describe("O-tetromino", function () {
    it("O-tetromino rotation phase", function () {
        let typeOfTetromino = "O";
        let rotationPhaseOfTetromino = ["stable"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            -XX--
            -XX--
            -----
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            -XX--
            -XX--
            -----
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });
});

describe("J-tetromino", function () {
    it("J-tetromino rotation up", function () {
        let typeOfTetromino = "J";
        let rotationPhaseOfTetromino = ["left", "down", "right", "up"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            --X--
            --X--
            -XX--
            -----
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -XXX-
            ---X-
            -----
            -----
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });
    it("J-tetromino rotation left", function () {
        let typeOfTetromino = "J";
        let rotationPhaseOfTetromino = ["left", "down", "right", "up"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            -XXX-
            ---X-
            -----
            -----
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -XX--
            -X---
            -X---
            -----
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });

    it("J-tetromino rotation down", function () {
        let typeOfTetromino = "J";
        let rotationPhaseOfTetromino = ["left", "down", "right", "up"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            -XX--
            -X---
            -X---
            -----
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -X---
            -XXX-
            -----
            -----
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });

    it("J-tetromino rotation right", function () {
        let typeOfTetromino = "J";
        let rotationPhaseOfTetromino = ["left", "down", "right", "up"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            -X---
            -XXX-
            -----
            -----
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            --X--
            --X--
            -XX--
            -----
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });
});

describe("L-tetromino", function () {
    it("L-tetromino rotation up", function () {
        let typeOfTetromino = "L";
        let rotationPhaseOfTetromino = ["left", "down", "right", "up"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --X--
            --X--
            --XX-
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            ----X
            --XXX
            -----
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });

    it("L-tetromino rotation left", function () {
        let typeOfTetromino = "L";
        let rotationPhaseOfTetromino = ["left", "down", "right", "up"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            ----X
            --XXX
            -----
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --XX-
            ---X-
            ---X-
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });

    it("L-tetromino rotation down", function () {
        let typeOfTetromino = "L";
        let rotationPhaseOfTetromino = ["left", "down", "right", "up"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --XX-
            ---X-
            ---X-
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --XXX
            --X--
            -----
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });

    it("L-tetromino rotation right", function () {
        let typeOfTetromino = "L";
        let rotationPhaseOfTetromino = ["left", "down", "right", "up"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --XXX
            --X--
            -----
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --X--
            --X--
            --XX-
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });
});

describe("T-tetromino", function () {
    it("T-tetromino rotation left", function () {
        let typeOfTetromino = "T";
        let rotationPhaseOfTetromino = ["left", "down", "right", "up"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --X--
            -XXX-
            -----
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --X--
            -XX--
            --X-- 
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });

    it("T-tetromino rotation down", function () {
        let typeOfTetromino = "T";
        let rotationPhaseOfTetromino = ["left", "down", "right", "up"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --X--
            -XX--
            --X-- 
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            -----
            -XXX-
            --X-- 
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });

    it("T-tetromino rotation right", function () {
        let typeOfTetromino = "T";
        let rotationPhaseOfTetromino = ["left", "down", "right", "up"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            -----
            -XXX-
            --X-- 
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --X--
            --XX-
            --X-- 
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });

    it("T-tetromino rotation top", function () {
        let typeOfTetromino = "T";
        let rotationPhaseOfTetromino = ["left", "down", "right", "up"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --X--
            --XX-
            --X-- 
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --X--
            -XXX-
            ----- 
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });
});

describe("Z-tetromino", function () {
    it("Z-tetromino rotation vertical", function () {
        let typeOfTetromino = "Z";
        let rotationPhaseOfTetromino = ["vertical", "horizontal"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            -XX--
            --XX-
            -----
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --X--
            -XX--
            -X---
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });

    it("Z-tetromino rotation horizontal", function () {
        let typeOfTetromino = "Z";
        let rotationPhaseOfTetromino = ["vertical", "horizontal"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --X--
            -XX--
            -X---
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            -XX--
            --XX-
            -----
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });
});

describe("S-tetromino", function () {
    it("S-tetromino rotation vertical", function () {
        let typeOfTetromino = "S";
        let rotationPhaseOfTetromino = ["vertical", "horizontal"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --XX-
            -XX--
            -----
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            -X---
            -XX--
            --X--
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });

    it("S-tetromino rotation horizontal", function () {
        let typeOfTetromino = "S";
        let rotationPhaseOfTetromino = ["vertical", "horizontal"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            -X---
            -XX--
            --X--
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --XX-
            -XX--
            -----
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });
});

describe("I-tetromino", function () {
    it("I-tetromino rotation vertical", function () {
        let typeOfTetromino = "I";
        let rotationPhaseOfTetromino = ["vertical", "horizontal"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            --X--
            --X--
            --X--
            --X--
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            -XXXX
            -----
            -----
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });

    it("I-tetromino rotation vertical", function () {
        let typeOfTetromino = "I";
        let rotationPhaseOfTetromino = ["vertical", "horizontal"];
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            -XXXX
            -----
            -----
        `);
        let resultFunction = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            --X--
            --X--
            --X--
            --X--
        `);
        assert.deepEqual(resultFunction, expectedResult);
    });
});
