var sinon = require('sinon');
var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Tests for function tick", function () {
    let stubForGetRandomTypeOfTetromino = sinon.stub(tetris, "getRandomTypeOfTetromino")
    it("test tick for L tetromino", function () {
        stubForGetRandomTypeOfTetromino.returns("L")
        let fieldSize = { x: 5, y: 5 }
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.tick()
        let expected = tetris.getCoordinates(`
            -----
            ---X-
            -XXX-
            -----
            -----
        `)
        
        // assert.deepEqual(elementTetris.tetromino.coordinates, expected)
        // elementTetris.tick()
        // let nextExpected = tetris.getCoordinates(`
        //     -----
        //     -----
        //     ---X-
        //     -XXX-
        //     -----
        // `)
        // assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    })
    // it("test tick for J tetromino", function () {
    //     stubForGetRandomTypeOfTetromino.returns("J")
    //     let fieldSize = { x: 7, y: 5 }
    //     let elementTetris = new tetris.Tetris(fieldSize)
    //     elementTetris.tick()
    //     let expected = tetris.getCoordinates(`
    //         -------
    //         --X----
    //         --XXX--
    //         -------
    //         -------
    //     `)
        
    //     assert.deepEqual(elementTetris.tetromino.coordinates, expected)
    //     elementTetris.tick()
    //     let nextExpected = tetris.getCoordinates(`
    //         -------
    //         -------
    //         --X----
    //         --XXX--
    //         -------
    //     `)
    //     assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    // })
    // it("test tick for T tetromino", function () {
    //     stubForGetRandomTypeOfTetromino.returns("T")
    //     let fieldSize = { x: 7, y: 5 }
    //     let elementTetris = new tetris.Tetris(fieldSize)
    //     elementTetris.tick()
    //     let expected = tetris.getCoordinates(`
    //         -------
    //         ---X---
    //         --XXX--
    //         -------
    //         -------
    //     `)
        
    //     assert.deepEqual(elementTetris.tetromino.coordinates, expected)
    //     elementTetris.tick()
    //     let nextExpected = tetris.getCoordinates(`
    //         -------
    //         -------
    //         ---X---
    //         --XXX--
    //         -------
    //     `)
    //     assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    // })
    // it("test tick for S tetromino", function () {
    //     stubForGetRandomTypeOfTetromino.returns("S")
    //     let fieldSize = { x: 7, y: 5 }
    //     let elementTetris = new tetris.Tetris(fieldSize)
    //     elementTetris.tick()
    //     let expected = tetris.getCoordinates(`
    //         -------
    //         ---XX--
    //         --XX---
    //         -------
    //         -------
    //     `)
        
    //     assert.deepEqual(elementTetris.tetromino.coordinates, expected)
    //     elementTetris.tick()
    //     let nextExpected = tetris.getCoordinates(`
    //         -------
    //         -------
    //         ---XX--
    //         --XX---
    //         -------
    //     `)
    //     assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    // })
    // it("test tick for Z tetromino", function () {
    //     stubForGetRandomTypeOfTetromino.returns("Z")
    //     let fieldSize = { x: 5, y: 5 }
    //     let elementTetris = new tetris.Tetris(fieldSize)
    //     elementTetris.tick()
    //     let expected = tetris.getCoordinates(`
    //         -----
    //         -XX--
    //         --XX-
    //         -----
    //         -----
    //     `)
        
    //     assert.deepEqual(elementTetris.tetromino.coordinates, expected)
    //     elementTetris.tick()
    //     let nextExpected = tetris.getCoordinates(`
    //         -----
    //         -----
    //         -XX--
    //         --XX-
    //         -----
    //     `)
    //     assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    // })
    // it("test tick for I tetromino", function () {
    //     stubForGetRandomTypeOfTetromino.returns("I")
    //     let fieldSize = { x: 7, y: 5 }
    //     let elementTetris = new tetris.Tetris(fieldSize)
    //     elementTetris.tick()
    //     let expected = tetris.getCoordinates(`
    //         -------
    //         -XXXX--
    //         -------
    //         -------
    //         -------
    //         -------
    //     `)
        
    //     assert.deepEqual(elementTetris.tetromino.coordinates, expected)
    //     elementTetris.tick()
    //     let nextExpected = tetris.getCoordinates(`
    //         -------
    //         -------
    //         -XXXX--
    //         -------
    //         -------
    //     `)
    //     assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    // })
    // it("test tick for O tetromino", function () {
    //     stubForGetRandomTypeOfTetromino.returns("O")
    //     let fieldSize = { x: 7, y: 5 }
    //     let elementTetris = new tetris.Tetris(fieldSize)
    //     elementTetris.tick()
    //     let expected = tetris.getCoordinates(`
    //         -------
    //         --XX---
    //         --XX---
    //         -------
    //         -------
    //         -------
    //     `)
        
    //     assert.deepEqual(elementTetris.tetromino.coordinates, expected)
    //     elementTetris.tick()
    //     let nextExpected = tetris.getCoordinates(`
    //         -------
    //         -------
    //         --XX---
    //         --XX---
    //         -------
    //     `)
    //     assert.deepEqual(elementTetris.tetromino.coordinates, nextExpected)
    // })
})