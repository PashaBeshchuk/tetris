let assert = require('chai').assert;
let tetris = require('../tetris');
let sinon = require("sinon")
describe("Identification starting phase tetromino", function () {
    let stubForGetRandomTypeOfTetromino = sinon.stub(tetris, "getRandomTypeOfTetromino")
    let fieldSize = { x: 10, y: 2 };
    it("Starting phase L tetromino", function () {
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let identificationPhase = typeOfTetromino.typeOfTetromino.startingPhaseOfTetromino
        let expected = "right"
        assert.deepEqual(identificationPhase, expected)
    })
    it("Starting phase J tetromino", function () {
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoJ(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let identificationPhase = typeOfTetromino.typeOfTetromino.startingPhaseOfTetromino
        let expected = "left"
        assert.deepEqual(identificationPhase, expected)
    })
    it("Starting phase T tetromino", function () {
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoT(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let identificationPhase = typeOfTetromino.typeOfTetromino.startingPhaseOfTetromino
        let expected = "up"
        assert.deepEqual(identificationPhase, expected)
    })
    it("Starting phase Z tetromino", function () {
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoZ(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let identificationPhase = typeOfTetromino.typeOfTetromino.startingPhaseOfTetromino
        let expected = "horizontal"
        assert.deepEqual(identificationPhase, expected)
    })
    it("Starting phase S tetromino", function () {
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoS(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let identificationPhase = typeOfTetromino.typeOfTetromino.startingPhaseOfTetromino
        let expected = "horizontal"
        assert.deepEqual(identificationPhase, expected)
    })
    it("Starting phase I tetromino", function () {
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoI(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let identificationPhase = typeOfTetromino.typeOfTetromino.startingPhaseOfTetromino
        let expected = "horizontal"
        assert.deepEqual(identificationPhase, expected)
    })
    it("Starting phase O tetromino", function () {
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoO(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let identificationPhase = typeOfTetromino.typeOfTetromino.startingPhaseOfTetromino
        let expected = "stable"
        assert.deepEqual(identificationPhase, expected)
    })
})