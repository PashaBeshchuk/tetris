var sinon = require('sinon');
var assert = require('chai').assert;
var tetris = require('../tetris');
describe("All tetromino move right", function () {
    let stubForGetRandomTypeOfTetromino = sinon.stub(tetris, "getRandomTypeOfTetromino");
    it('Move L tetromino right', function () {
        stubForGetRandomTypeOfTetromino.returns("L")
        let fieldSize = { x: 7, y: 3 }
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.moveRight()
        let expected = tetris.getCoordinates(`
            -----X-
            ---XXX-
            -------
        `)
        
        assert.deepEqual(elementTetris.tetromino.coordinates, expected)
        elementTetris.moveRight()
        let nextExpected = tetris.getCoordinates(`
            ------X
            ----XXX
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    })
    it('Move J tetromino right', function () {
        stubForGetRandomTypeOfTetromino.returns("J")
        let fieldSize = { x: 7, y: 3 }
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.moveRight()
        let expected = tetris.getCoordinates(`
            ---X---
            ---XXX-
            -------
        `)
        
        assert.deepEqual(elementTetris.tetromino.coordinates, expected)
        elementTetris.moveRight()
        let nextExpected = tetris.getCoordinates(`
            ----X--
            ----XXX
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    })
    it('Move T tetromino right', function () {
        stubForGetRandomTypeOfTetromino.returns("T")
        let fieldSize = { x: 7, y: 3 }
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.moveRight()
        let expected = tetris.getCoordinates(`
            ----X--
            ---XXX-
            -------
        `)
        
        assert.deepEqual(elementTetris.tetromino.coordinates, expected)
        elementTetris.moveRight()
        let nextExpected = tetris.getCoordinates(`
            -----X-
            ----XXX
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    })
    it('Move S tetromino right', function () {
        stubForGetRandomTypeOfTetromino.returns("S")
        let fieldSize = { x: 7, y: 3 }
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.moveRight()
        let expected = tetris.getCoordinates(`
            ----XX-
            ---XX--
            -------
        `)
        
        assert.deepEqual(elementTetris.tetromino.coordinates, expected)
        elementTetris.moveRight()
        let nextExpected = tetris.getCoordinates(`
            -----XX
            ----XX-
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    })
    it('Move Z tetromino right', function () {
        stubForGetRandomTypeOfTetromino.returns("Z")
        let fieldSize = { x: 7, y: 3 }
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.moveRight()
        let expected = tetris.getCoordinates(`
            ---XX--
            ----XX-
            -------
        `)
        
        assert.deepEqual(elementTetris.tetromino.coordinates, expected)
        elementTetris.moveRight()
        let nextExpected = tetris.getCoordinates(`
            ----XX-
            -----XX
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    })
    it('Move I tetromino right', function () {
        stubForGetRandomTypeOfTetromino.returns("I")
        let fieldSize = { x: 7, y: 3 }
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.moveRight()
        let expected = tetris.getCoordinates(`
            --XXXX-
            -------
            -------
        `)
        
        assert.deepEqual(elementTetris.tetromino.coordinates, expected)
        elementTetris.moveRight()
        let nextExpected = tetris.getCoordinates(`
            ---XXXX
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    })
    it('Move O tetromino right', function () {
        stubForGetRandomTypeOfTetromino.returns("O")
        let fieldSize = { x: 7, y: 3 }
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.moveRight()
        let expected = tetris.getCoordinates(`
            ---XX--
            ---XX--
            -------
        `)
        
        assert.deepEqual(elementTetris.tetromino.coordinates, expected)
        elementTetris.moveRight()
        let nextExpected = tetris.getCoordinates(`
            ----XX-
            ----XX-
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    })
})