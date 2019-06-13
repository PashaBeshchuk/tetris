var assert = require('chai').assert;
var tetris = require('../tetris');
describe("O-tetromino", function () {
    it("O-tetromino rotation phase", function () {
        let typeOfTetromino = "O";
        let rotationPhaseOfTetromino = "stable";
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            -XX--
            -XX--
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            -XX--
            -XX--
            -----
        `);
        assert.deepEqual(result, expectedResult);
    });
});

describe("J-tetromino", function () {
    it("J-tetromino rotation down to right", function () {
        let typeOfTetromino = "J";
        let rotationPhaseOfTetromino = "down";
        let tetrominoCoordinates = tetris.buildTetromino(`
            --X--
            --X--
            -XX--
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -XXX-
            ---X-
            -----
            -----
        `);
        assert.deepEqual(result, expectedResult);
    });
    it("J-tetromino rotation right to up", function () {
        let typeOfTetromino = "J";
        let rotationPhaseOfTetromino = "right";
        let tetrominoCoordinates = tetris.buildTetromino(`
            -XXX-
            ---X-
            -----
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -XX--
            -X---
            -X---
            -----
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("J-tetromino rotation up to left", function () {
        let typeOfTetromino = "J";
        let rotationPhaseOfTetromino = "up";
        let tetrominoCoordinates = tetris.buildTetromino(`
            -XX--
            -X---
            -X---
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -X---
            -XXX-
            -----
            -----
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("J-tetromino rotation left to down", function () {
        let typeOfTetromino = "J";
        let rotationPhaseOfTetromino = "left";
        let tetrominoCoordinates = tetris.buildTetromino(`
            -X---
            -XXX-
            -----
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            --X--
            --X--
            -XX--
            -----
        `);
        assert.deepEqual(result, expectedResult);
    });
});

describe("L-tetromino", function () {
    it("L-tetromino rotation down to right", function () {
        let typeOfTetromino = "L";
        let rotationPhaseOfTetromino = "down";
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --X--
            --X--
            --XX-
        `);
        let result = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            ----X
            --XXX
            -----
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("L-tetromino rotation right to up", function () {
        let typeOfTetromino = "L";
        let rotationPhaseOfTetromino = "right";
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            ----X
            --XXX
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --XX-
            ---X-
            ---X-
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("L-tetromino rotation up to left", function () {
        let typeOfTetromino = "L";
        let rotationPhaseOfTetromino = "up";
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --XX-
            ---X-
            ---X-
        `);
        let result = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --XXX
            --X--
            -----
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("L-tetromino rotation left to down", function () {
        let typeOfTetromino = "L";
        let rotationPhaseOfTetromino = "left";
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --XXX
            --X--
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --X--
            --X--
            --XX-
        `);
        assert.deepEqual(result, expectedResult);
    });
});

describe("T-tetromino", function () {
    it("T-tetromino rotation up to left", function () {
        let typeOfTetromino = "T";
        let rotationPhaseOfTetromino = "up";
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --X--
            -XXX-
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --X--
            -XX--
            --X-- 
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("T-tetromino rotation left to down", function () {
        let typeOfTetromino = "T";
        let rotationPhaseOfTetromino = "left";
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --X--
            -XX--
            --X-- 
        `);
        let result = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            -----
            -XXX-
            --X-- 
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("T-tetromino rotation down to right", function () {
        let typeOfTetromino = "T";
        let rotationPhaseOfTetromino = "down";
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            -----
            -XXX-
            --X-- 
        `);
        let result = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --X--
            --XX-
            --X-- 
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("T-tetromino rotation right to up", function () {
        let typeOfTetromino = "T";
        let rotationPhaseOfTetromino = "right";
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --X--
            --XX-
            --X-- 
        `);
        let result = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --X--
            -XXX-
            ----- 
        `);
        assert.deepEqual(result, expectedResult);
    });
});

describe("Z-tetromino", function () {
    it("Z-tetromino rotation horizontal to vertical", function () {
        let typeOfTetromino = "Z";
        let rotationPhaseOfTetromino = "horizontal";
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            -XX--
            --XX-
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --X--
            -XX--
            -X---
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("Z-tetromino rotation vertical to horizontal", function () {
        let typeOfTetromino = "Z";
        let rotationPhaseOfTetromino = "vertical";
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --X--
            -XX--
            -X---
        `);
        let result = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            -XX--
            --XX-
            -----
        `);
        assert.deepEqual(result, expectedResult);
    });
});

describe("S-tetromino", function () {
    it("S-tetromino rotation horizontal to vertical", function () {
        let typeOfTetromino = "S";
        let rotationPhaseOfTetromino = "horizontal";
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --XX-
            -XX--
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            -X---
            -XX--
            --X--
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("S-tetromino rotation vertical to horizontal", function () {
        let typeOfTetromino = "S";
        let rotationPhaseOfTetromino = "vertical";
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            -X---
            -XX--
            --X--
        `);
        let result = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --XX-
            -XX--
            -----
        `);
        assert.deepEqual(result, expectedResult);
    });
});

describe("I-tetromino", function () {
    it("I-tetromino rotation vertical to horizontal", function () {
        let typeOfTetromino = "I";
        let rotationPhaseOfTetromino = "vertical";
        let tetrominoCoordinates = tetris.buildTetromino(`
            --X--
            --X--
            --X--
            --X--
        `);
        let result = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            -XXXX
            -----
            -----
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("I-tetromino rotation horizontal to vertical", function () {
        let typeOfTetromino = "I";
        let rotationPhaseOfTetromino = "horizontal";
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            -XXXX
            -----
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            --X--
            --X--
            --X--
            --X--
        `);
        assert.deepEqual(result, expectedResult);
    });
});
