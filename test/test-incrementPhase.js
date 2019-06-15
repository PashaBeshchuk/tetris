var assert = require('chai').assert;
var tetris = require('../tetris');
describe("I, Z, S-tetromino rotation phases", function (){
    it("I-tetromino changes its phase from vertical to horizontal", function(){
        let typeOfTetromino = "I"
        let phaseRotation = "vertical"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "horizontal"
        assert.equal(expectedPhase, changePhase)
    })
    it("I-tetromino changes its phase from horizontal to vertical", function(){
        let typeOfTetromino = "I"
        let phaseRotation = "horizontal"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "vertical"
        assert.equal(expectedPhase, changePhase)
    })
    it("Z-tetromino changes its phase from vertical to horizontal", function(){
        let typeOfTetromino = "Z"
        let phaseRotation = "vertical"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "horizontal"
        assert.equal(expectedPhase, changePhase)
    })
    it("Z-tetromino changes its phase from horizontal to vertical", function(){
        let typeOfTetromino = "Z"
        let phaseRotation = "horizontal"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "vertical"
        assert.equal(expectedPhase, changePhase)
    })
    it("S-tetromino changes its phase from vertical to horizontal", function(){
        let typeOfTetromino = "S"
        let phaseRotation = "vertical"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "horizontal"
        assert.equal(expectedPhase, changePhase)
    })
    it("S-tetromino changes its phase from horizontal to vertical", function(){
        let typeOfTetromino = "S"
        let phaseRotation = "horizontal"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "vertical"
        assert.equal(expectedPhase, changePhase)
    })
})
describe("L, J, T-tetromino rotation phases", function (){
    it("L-tetromino changes its phase from up to left", function () {
        let typeOfTetromino = "L"
        let phaseRotation = "up"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "left"
        assert.equal(expectedPhase, changePhase)
    })
    it("L-tetromino changes its phase from left to down", function () {
        let typeOfTetromino = "L"
        let phaseRotation = "left"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "down"
        assert.equal(expectedPhase, changePhase)
    })
    it("L-tetromino changes its phase from down to right", function () {
        let typeOfTetromino = "L"
        let phaseRotation = "down"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "right"
        assert.equal(expectedPhase, changePhase)
    })
    it("L-tetromino changes its phase from right to up", function () {
        let typeOfTetromino = "L"
        let phaseRotation = "right"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "up"
        assert.equal(expectedPhase, changePhase)
    })

    it("J-tetromino changes its phase from up to left", function () {
        let typeOfTetromino = "J"
        let phaseRotation = "up"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "left"
        assert.equal(expectedPhase, changePhase)
    })
    it("J-tetromino changes its phase from left to down", function () {
        let typeOfTetromino = "J"
        let phaseRotation = "left"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "down"
        assert.equal(expectedPhase, changePhase)
    })
    it("J-tetromino changes its phase from down to right", function () {
        let typeOfTetromino = "J"
        let phaseRotation = "down"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "right"
        assert.equal(expectedPhase, changePhase)
    })
    it("J-tetromino changes its phase from right to up", function () {
        let typeOfTetromino = "J"
        let phaseRotation = "right"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "up"
        assert.equal(expectedPhase, changePhase)
    })

    it("T-tetromino changes its phase from up to left", function () {
        let typeOfTetromino = "T"
        let phaseRotation = "up"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "left"
        assert.equal(expectedPhase, changePhase)
    })
    it("T-tetromino changes its phase from left to down", function () {
        let typeOfTetromino = "T"
        let phaseRotation = "left"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "down"
        assert.equal(expectedPhase, changePhase)
    })
    it("T-tetromino changes its phase from down to right", function () {
        let typeOfTetromino = "T"
        let phaseRotation = "down"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "right"
        assert.equal(expectedPhase, changePhase)
    })
    it("T-tetromino changes its phase from right to up", function () {
        let typeOfTetromino = "T"
        let phaseRotation = "right"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "up"
        assert.equal(expectedPhase, changePhase)
    })
})

describe("O-tetromino rotation phases", function (){
    it("O-tetromino changes its phase from stable to stable", function () {
        let typeOfTetromino = "O"
        let phaseRotation = "stable"
        let changePhase = tetris.incrementPhase(typeOfTetromino, phaseRotation)
        let expectedPhase = "stable"
        assert.equal(expectedPhase, changePhase)
    })
})