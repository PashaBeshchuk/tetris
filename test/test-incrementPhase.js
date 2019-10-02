let assert = require('chai').assert;
let tetris = require('../tetris');
let sinon = require('sinon');
let stubForGetRandomTypeOfTetromino = sinon.stub(tetris, "getRandomTypeOfTetromino")
describe("I, Z, S-tetromino rotation phases", function (){
    it("I-tetromino changes its phase from vertical to horizontal", function(){
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoI(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let phaseRotation = "horizontal"
        let changePhase = typeOfTetromino.incrementPhase(typeOfTetromino.typeOfTetromino, phaseRotation)
        let expectedPhase = "vertical"
        assert.equal(expectedPhase, changePhase)
    })
    it("I-tetromino changes its phase from horizontal to vertical", function(){
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoI(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let phaseRotation = "vertical"
        let changePhase = typeOfTetromino.incrementPhase(typeOfTetromino.typeOfTetromino, phaseRotation)
        let expectedPhase = "horizontal"
        assert.equal(expectedPhase, changePhase)
    })
    it("Z-tetromino changes its phase from vertical to horizontal", function(){
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoZ(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let phaseRotation = "vertical"
        let changePhase = typeOfTetromino.incrementPhase(typeOfTetromino.typeOfTetromino, phaseRotation)
        let expectedPhase = "horizontal"
        assert.equal(expectedPhase, changePhase)
    })
    it("Z-tetromino changes its phase from horizontal to vertical", function(){
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoZ(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let phaseRotation = "horizontal"
        let changePhase = typeOfTetromino.incrementPhase(typeOfTetromino.typeOfTetromino, phaseRotation)
        let expectedPhase = "vertical"
        assert.equal(expectedPhase, changePhase)
    })
    it("S-tetromino changes its phase from vertical to horizontal", function(){
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoS(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let phaseRotation = "vertical"
        let changePhase = typeOfTetromino.incrementPhase(typeOfTetromino.typeOfTetromino, phaseRotation)
        let expectedPhase = "horizontal"
        assert.equal(expectedPhase, changePhase)
    })
    it("S-tetromino changes its phase from horizontal to vertical", function(){
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoS(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let phaseRotation = "horizontal"
        let changePhase = typeOfTetromino.incrementPhase(typeOfTetromino.typeOfTetromino, phaseRotation)
        let expectedPhase = "vertical"
        assert.equal(expectedPhase, changePhase)
    })
})
describe("L, J, T-tetromino rotation phases", function (){
    it("L-tetromino changes its phase from up to left", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let phaseRotation = "up"
        let changePhase = typeOfTetromino.incrementPhase(typeOfTetromino.typeOfTetromino, phaseRotation)
        let expectedPhase = "left"
        assert.equal(expectedPhase, changePhase)
    })
    it("L-tetromino changes its phase from left to down", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let phaseRotation = "left"
        let changePhase = typeOfTetromino.incrementPhase(typeOfTetromino.typeOfTetromino, phaseRotation)
        let expectedPhase = "down"
        assert.equal(expectedPhase, changePhase)
    })
    it("L-tetromino changes its phase from down to right", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let phaseRotation = "down"
        let changePhase = typeOfTetromino.incrementPhase(typeOfTetromino.typeOfTetromino, phaseRotation)
        let expectedPhase = "right"
        assert.equal(expectedPhase, changePhase)
    })
    it("L-tetromino changes its phase from right to up", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let phaseRotation = "right"
        let changePhase = typeOfTetromino.incrementPhase(typeOfTetromino.typeOfTetromino, phaseRotation)
        let expectedPhase = "up"
        assert.equal(expectedPhase, changePhase)
    })

    it("J-tetromino changes its phase from up to left", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoJ(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let phaseRotation = "up"
        let changePhase = typeOfTetromino.incrementPhase(typeOfTetromino.typeOfTetromino, phaseRotation)
        let expectedPhase = "left"
        assert.equal(expectedPhase, changePhase)
    })
    it("J-tetromino changes its phase from left to down", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoJ(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let phaseRotation = "left"
        let changePhase = typeOfTetromino.incrementPhase(typeOfTetromino.typeOfTetromino, phaseRotation)
        let expectedPhase = "down"
        assert.equal(expectedPhase, changePhase)
    })
    it("J-tetromino changes its phase from down to right", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoJ(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let phaseRotation = "down"
        let changePhase = typeOfTetromino.incrementPhase(typeOfTetromino.typeOfTetromino, phaseRotation)
        let expectedPhase = "right"
        assert.equal(expectedPhase, changePhase)
    })
    it("J-tetromino changes its phase from right to up", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoJ(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let phaseRotation = "right"
        let changePhase = typeOfTetromino.incrementPhase(typeOfTetromino.typeOfTetromino, phaseRotation)
        let expectedPhase = "up"
        assert.equal(expectedPhase, changePhase)
    })

    it("T-tetromino changes its phase from up to left", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoT(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let phaseRotation = "up"
        let changePhase = typeOfTetromino.incrementPhase(typeOfTetromino.typeOfTetromino, phaseRotation)
        let expectedPhase = "left"
        assert.equal(expectedPhase, changePhase)
    })
    it("T-tetromino changes its phase from left to down", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoT(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let phaseRotation = "left"
        let changePhase = typeOfTetromino.incrementPhase(typeOfTetromino.typeOfTetromino, phaseRotation)
        let expectedPhase = "down"
        assert.equal(expectedPhase, changePhase)
    })
    it("T-tetromino changes its phase from down to right", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoT(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let phaseRotation = "down"
        let changePhase = typeOfTetromino.incrementPhase(typeOfTetromino.typeOfTetromino, phaseRotation)
        let expectedPhase = "right"
        assert.equal(expectedPhase, changePhase)
    })
    it("T-tetromino changes its phase from right to up", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoT(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let phaseRotation = "right"
        let changePhase = typeOfTetromino.incrementPhase(typeOfTetromino.typeOfTetromino, phaseRotation)
        let expectedPhase = "up"
        assert.equal(expectedPhase, changePhase)
    })
})

describe("O-tetromino rotation phases", function (){
    it("O-tetromino changes its phase from stable to stable", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoO(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let phaseRotation = "stable"
        let changePhase = typeOfTetromino.incrementPhase(typeOfTetromino.typeOfTetromino, phaseRotation)
        let expectedPhase = "stable"
        assert.equal(expectedPhase, changePhase)
    })
})