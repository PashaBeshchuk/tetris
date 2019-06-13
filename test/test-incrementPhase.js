var assert = require('chai').assert;
var tetris = require('../tetris');
describe("I, Z, S-tetromino rotation phases", function (){
    it("I-tetromino chenges its phase from vertical to horizontal", function(){
        let typeOfTetromino = "I"
        let phaseRotation = "vertical"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "horizontal"
        assert.equal(expectedPhase, changePhase)
    })
    it("I-tetromino chenges its phase from horizontal to vertical", function(){
        let typeOfTetromino = "I"
        let phaseRotation = "horizontal"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "vertical"
        assert.equal(expectedPhase, changePhase)
    })
    it("Z-tetromino chenges its phase from vertical to horizontal", function(){
        let typeOfTetromino = "Z"
        let phaseRotation = "vertical"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "horizontal"
        assert.equal(expectedPhase, changePhase)
    })
    it("Z-tetromino chenges its phase from horizontal to vertical", function(){
        let typeOfTetromino = "Z"
        let phaseRotation = "horizontal"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "vertical"
        assert.equal(expectedPhase, changePhase)
    })
    it("S-tetromino chenges its phase from vertical to horizontal", function(){
        let typeOfTetromino = "S"
        let phaseRotation = "vertical"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "horizontal"
        assert.equal(expectedPhase, changePhase)
    })
    it("S-tetromino chenges its phase from horizontal to vertical", function(){
        let typeOfTetromino = "S"
        let phaseRotation = "horizontal"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "vertical"
        assert.equal(expectedPhase, changePhase)
    })
})
