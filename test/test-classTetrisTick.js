var sinon = require('sinon');
var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Tests for function tick", function () {
    let stubForGetRandomTypeOfTetromino = sinon.stub(tetris, "getRandomTypeOfTetromino")
    it("test tick for L tetromino", function () {
        let fieldSize = { x: 5, y: 5 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize))
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.tick()
        let expected = tetris.getCoordinates(`
            -----
            ---X-
            -XXX-
            -----
            -----
        `)
        
        assert.deepEqual(elementTetris.tetromino.coordinates, expected)
        elementTetris.tick()
        let nextExpected = tetris.getCoordinates(`
            -----
            -----
            ---X-
            -XXX-
            -----
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    })
    it("test tick for J tetromino", function () {
        let fieldSize = { x: 7, y: 5 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoJ(fieldSize))
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.tick()
        let expected = tetris.getCoordinates(`
            -------
            --X----
            --XXX--
            -------
            -------
        `)
        
        assert.deepEqual(elementTetris.tetromino.coordinates, expected)
        elementTetris.tick()
        let nextExpected = tetris.getCoordinates(`
            -------
            -------
            --X----
            --XXX--
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    })
    it("test tick for T tetromino", function () {
        let fieldSize = { x: 7, y: 5 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoT(fieldSize))
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.tick()
        let expected = tetris.getCoordinates(`
            -------
            ---X---
            --XXX--
            -------
            -------
        `)
        
        assert.deepEqual(elementTetris.tetromino.coordinates, expected)
        elementTetris.tick()
        let nextExpected = tetris.getCoordinates(`
            -------
            -------
            ---X---
            --XXX--
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    })
    it("test tick for S tetromino", function () {
        let fieldSize = { x: 7, y: 5 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoS(fieldSize))
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.tick()
        let expected = tetris.getCoordinates(`
            -------
            ---XX--
            --XX---
            -------
            -------
        `)
        
        assert.deepEqual(elementTetris.tetromino.coordinates, expected)
        elementTetris.tick()
        let nextExpected = tetris.getCoordinates(`
            -------
            -------
            ---XX--
            --XX---
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    })
    it("test tick for Z tetromino", function () {
        let fieldSize = { x: 5, y: 5 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoZ(fieldSize))
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.tick()
        let expected = tetris.getCoordinates(`
            -----
            -XX--
            --XX-
            -----
            -----
        `)
        
        assert.deepEqual(elementTetris.tetromino.coordinates, expected)
        elementTetris.tick()
        let nextExpected = tetris.getCoordinates(`
            -----
            -----
            -XX--
            --XX-
            -----
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    })
    it("test tick for I tetromino", function () {
        let fieldSize = { x: 7, y: 5 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoI(fieldSize))
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.tick()
        let expected = tetris.getCoordinates(`
            -------
            -XXXX--
            -------
            -------
            -------
            -------
        `)
        
        assert.deepEqual(elementTetris.tetromino.coordinates, expected)
        elementTetris.tick()
        let nextExpected = tetris.getCoordinates(`
            -------
            -------
            -XXXX--
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    })
    it("test tick for O tetromino", function () {
        let fieldSize = { x: 7, y: 5 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoO(fieldSize))
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.tick()
        let expected = tetris.getCoordinates(`
            -------
            --XX---
            --XX---
            -------
            -------
            -------
        `)
        
        assert.deepEqual(elementTetris.tetromino.coordinates, expected)
        elementTetris.tick()
        let nextExpected = tetris.getCoordinates(`
            -------
            -------
            --XX---
            --XX---
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    })
})