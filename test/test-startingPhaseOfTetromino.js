var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Identification starting phase tetromino", function () {
    it("Starting phase L tetromino", function () {
        let typeOfTetromino = "L"
        let identificationPhase = tetris.startingPhaseOfTetromino(typeOfTetromino)
        let expected = "right"
        assert.deepEqual(identificationPhase, expected)
    })
    it("Starting phase J tetromino", function () {
        let typeOfTetromino = "J"
        let identificationPhase = tetris.startingPhaseOfTetromino(typeOfTetromino)
        let expected = "left"
        assert.deepEqual(identificationPhase, expected)
    })
    it("Starting phase T tetromino", function () {
        let typeOfTetromino = "T"
        let identificationPhase = tetris.startingPhaseOfTetromino(typeOfTetromino)
        let expected = "up"
        assert.deepEqual(identificationPhase, expected)
    })
    it("Starting phase Z tetromino", function () {
        let typeOfTetromino = "Z"
        let identificationPhase = tetris.startingPhaseOfTetromino(typeOfTetromino)
        let expected = "horizontal"
        assert.deepEqual(identificationPhase, expected)
    })
    it("Starting phase S tetromino", function () {
        let typeOfTetromino = "S"
        let identificationPhase = tetris.startingPhaseOfTetromino(typeOfTetromino)
        let expected = "horizontal"
        assert.deepEqual(identificationPhase, expected)
    })
    it("Starting phase I tetromino", function () {
        let typeOfTetromino = "I"
        let identificationPhase = tetris.startingPhaseOfTetromino(typeOfTetromino)
        let expected = "horizontal"
        assert.deepEqual(identificationPhase, expected)
    })
    it("Starting phase O tetromino", function () {
        let typeOfTetromino = "O"
        let identificationPhase = tetris.startingPhaseOfTetromino(typeOfTetromino)
        let expected = "stable"
        assert.deepEqual(identificationPhase, expected)
    })
})