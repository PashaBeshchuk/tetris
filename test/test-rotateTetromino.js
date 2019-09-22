let assert = require('chai').assert;
let tetris = require('../tetris');
let sinon = require('sinon')
let stubForGetRandomTypeOfTetromino = sinon.stub(tetris, "getRandomTypeOfTetromino")
describe("O-tetromino", function () {
    it("O-tetromino rotation phase", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoO(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.rotationPhase = "stable"
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            -XX--
            -XX--
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino.typeOfTetromino, typeOfTetromino.rotationPhase, tetrominoCoordinates);
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
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoJ(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.rotationPhase = "down"
        let tetrominoCoordinates = tetris.buildTetromino(`
            --X--
            --X--
            -XX--
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino.typeOfTetromino, typeOfTetromino.rotationPhase, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -XXX-
            ---X-
            -----
            -----
        `);
        assert.deepEqual(result, expectedResult);
    });
    it("J-tetromino rotation right to up", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoJ(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.rotationPhase = "right"
        let tetrominoCoordinates = tetris.buildTetromino(`
            -XXX-
            ---X-
            -----
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino.typeOfTetromino, typeOfTetromino.rotationPhase, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -XX--
            -X---
            -X---
            -----
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("J-tetromino rotation up to left", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoJ(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.rotationPhase = "up"
        let tetrominoCoordinates = tetris.buildTetromino(`
            -XX--
            -X---
            -X---
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino.typeOfTetromino, typeOfTetromino.rotationPhase, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -X---
            -XXX-
            -----
            -----
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("J-tetromino rotation left to down", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoJ(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.rotationPhase = "left"
        let tetrominoCoordinates = tetris.buildTetromino(`
            -X---
            -XXX-
            -----
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino.typeOfTetromino, typeOfTetromino.rotationPhase, tetrominoCoordinates);
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
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.rotationPhase = "down"
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --X--
            --X--
            --XX-
        `);
        let result = tetris.rotateTetromino(typeOfTetromino.typeOfTetromino, typeOfTetromino.rotationPhase, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            ----X
            --XXX
            -----
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("L-tetromino rotation right to up", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.rotationPhase = "right"
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            ----X
            --XXX
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino.typeOfTetromino, typeOfTetromino.rotationPhase, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --XX-
            ---X-
            ---X-
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("L-tetromino rotation up to left", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.rotationPhase = "up"
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --XX-
            ---X-
            ---X-
        `);
        let result = tetris.rotateTetromino(typeOfTetromino.typeOfTetromino, typeOfTetromino.rotationPhase, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --XXX
            --X--
            -----
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("L-tetromino rotation left to down", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.rotationPhase = "left"
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --XXX
            --X--
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino.typeOfTetromino, typeOfTetromino.rotationPhase, tetrominoCoordinates);
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
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoT(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.rotationPhase = "up"
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --X--
            -XXX-
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino.typeOfTetromino, typeOfTetromino.rotationPhase, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --X--
            -XX--
            --X-- 
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("T-tetromino rotation left to down", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoT(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.rotationPhase = "left"
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --X--
            -XX--
            --X-- 
        `);
        let result = tetris.rotateTetromino(typeOfTetromino.typeOfTetromino, typeOfTetromino.rotationPhase, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            -----
            -XXX-
            --X-- 
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("T-tetromino rotation down to right", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoT(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.rotationPhase = "down"
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            -----
            -XXX-
            --X-- 
        `);
        let result = tetris.rotateTetromino(typeOfTetromino.typeOfTetromino, typeOfTetromino.rotationPhase, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --X--
            --XX-
            --X-- 
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("T-tetromino rotation right to up", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoT(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.rotationPhase = "right"
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --X--
            --XX-
            --X-- 
        `);
        let result = tetris.rotateTetromino(typeOfTetromino.typeOfTetromino, typeOfTetromino.rotationPhase, tetrominoCoordinates);
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
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoZ(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.rotationPhase = "horizontal"
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            -XX--
            --XX-
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino.typeOfTetromino, typeOfTetromino.rotationPhase, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            --X--
            -XX--
            -X---
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("Z-tetromino rotation vertical to horizontal", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoZ(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.rotationPhase = "vertical"
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --X--
            -XX--
            -X---
        `);
        let result = tetris.rotateTetromino(typeOfTetromino.typeOfTetromino, typeOfTetromino.rotationPhase, tetrominoCoordinates);
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
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoS(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.rotationPhase = "horizontal"
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            --XX-
            -XX--
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino.typeOfTetromino, typeOfTetromino.rotationPhase, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            -X---
            -XX--
            --X--
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("S-tetromino rotation vertical to horizontal", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoS(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.rotationPhase = "vertical";
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            -X---
            -XX--
            --X--
        `);
        let result = tetris.rotateTetromino(typeOfTetromino.typeOfTetromino, typeOfTetromino.rotationPhase, tetrominoCoordinates);
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
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoI(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.rotationPhase = "vertical";
        let tetrominoCoordinates = tetris.buildTetromino(`
            --X--
            --X--
            --X--
            --X--
        `);
        let result = tetris.rotateTetromino(typeOfTetromino.typeOfTetromino, typeOfTetromino.rotationPhase, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            -----
            -XXXX
            -----
            -----
        `);
        assert.deepEqual(result, expectedResult);
    });

    it("I-tetromino rotation horizontal to vertical", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoI(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.rotationPhase = "horizontal";
        let tetrominoCoordinates = tetris.buildTetromino(`
            -----
            -XXXX
            -----
            -----
        `);
        let result = tetris.rotateTetromino(typeOfTetromino.typeOfTetromino, typeOfTetromino.rotationPhase, tetrominoCoordinates);
        let expectedResult = tetris.buildTetromino(`
            --X--
            --X--
            --X--
            --X--
        `);
        assert.deepEqual(result, expectedResult);
    });
});
