var sinon = require('sinon');
var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Create tetromino", function () {
    let stubForGetRandomTypeOfTetromino = sinon.stub(tetris, "getRandomTypeOfTetromino")
    it("Create L tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize));
        let resultFunction = tetris.createTetromino(fieldSize);
        let expectedResult = {
            rotationPhase: "right",
            coordinates: tetris.getCoordinates(`
                ---X-
                -XXX-
            `)
        };
        let presentResult = {
            rotationPhase: resultFunction.rotationPhase,
            coordinates: resultFunction.coordinates
        }
       assert.deepEqual(presentResult, expectedResult);
    })
    it("Create J tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoJ(fieldSize));
        let resultFunction = tetris.createTetromino(fieldSize);
        let expectedResult = {
            rotationPhase: "left",
            coordinates: tetris.getCoordinates(`
                -X--
                -XXX-
            `)
        };
        let presentResult = {
            rotationPhase: resultFunction.rotationPhase,
            coordinates: resultFunction.coordinates
        }
        assert.deepEqual(presentResult, expectedResult);
    })
    it("Create T tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoT(fieldSize));
        let resultFunction = tetris.createTetromino(fieldSize);
        let expectedResult = {
            rotationPhase: "up",
            coordinates: tetris.getCoordinates(`
                --X--
                -XXX-
            `)
        };
        let presentResult = {
            rotationPhase: resultFunction.rotationPhase,
            coordinates: resultFunction.coordinates
        }
        assert.deepEqual(presentResult, expectedResult);
    })
    it("Create S tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoS(fieldSize));
        let resultFunction = tetris.createTetromino(fieldSize);
        let expectedResult = {
            rotationPhase: "horizontal",
            coordinates: tetris.getCoordinates(`
                --XX-
                -XX--
            `)
        };
        let presentResult = {
            rotationPhase: resultFunction.rotationPhase,
            coordinates: resultFunction.coordinates
        }
        assert.deepEqual(presentResult, expectedResult);
    })
    it("Create Z tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoZ(fieldSize));
        let resultFunction = tetris.createTetromino(fieldSize);
        let expectedResult = {
            rotationPhase: "horizontal",
            coordinates: tetris.getCoordinates(`
                -XX--
                --XX-
            `)
        };
        let presentResult = {
            rotationPhase: resultFunction.rotationPhase,
            coordinates: resultFunction.coordinates
        }
        assert.deepEqual(presentResult, expectedResult);
    })
    it("Create I tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoI(fieldSize));
        let resultFunction = tetris.createTetromino(fieldSize);
        let expectedResult = {
            rotationPhase: "horizontal",
            coordinates: tetris.getCoordinates(`
                XXXX-
            `)
        };
        let presentResult = {
            rotationPhase: resultFunction.rotationPhase,
            coordinates: resultFunction.coordinates
        }
        assert.deepEqual(presentResult, expectedResult);
    })
    it("Create O tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoO(fieldSize));
        let resultFunction = tetris.createTetromino(fieldSize);
        let expectedResult = {
            rotationPhase: "stable",
            coordinates: tetris.getCoordinates(`
                -XX--
                -XX--
                -----
            `)
        };
        let presentResult = {
            rotationPhase: resultFunction.rotationPhase,
            coordinates: resultFunction.coordinates
        }
        assert.deepEqual(presentResult, expectedResult);
    })
})