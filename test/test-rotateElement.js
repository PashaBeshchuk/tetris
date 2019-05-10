var assert = require('chai').assert;
var tetris = require('../tetris')
describe("element rotation around the axis 3x3", function () {

    it("element move the top", function () {
        let elementTetromino = tetris.getCoordinates(`
            ---
            --X
            ---
        `)

        let fulcrum = tetris.getCoordinates(`
            ---
            -X-
            ---
        `)
        let stepElementTetromino = tetris.rotateElement(fulcrum, elementTetromino)
        let expectedResult = tetris.getCoordinates(`
			-X-
			---
			---
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("element move the left", function () {
        let elementTetromino = tetris.getCoordinates(`
            ---
            --X
            ---
        `)

        let fulcrum = tetris.getCoordinates(`
            ---
            -X-
            ---
        `)
        let stepElementTetromino = tetris.rotateElement(fulcrum, elementTetromino)
        let expectedResult = tetris.getCoordinates(`
			---
			X--
			---
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("element move the right", function () {
        let elementTetromino = tetris.getCoordinates(`
            ---
            --X
            ---
        `)

        let fulcrum = tetris.getCoordinates(`
            ---
            -X-
            ---
        `)
        let stepElementTetromino = tetris.rotateElement(fulcrum, elementTetromino)
        let expectedResult = tetris.getCoordinates(`
			---
			---
			-X-
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("the item returns to its original position", function(){
        let elementTetromino = tetris.getCoordinates(`
            ---
            --X
            ---
        `)

        let fulcrum = tetris.getCoordinates(`
            ---
            -X-
            ---
        `)
        let stepElementTetromino = tetris.rotateElement(fulcrum, elementTetromino)
		let expectedResult = tetris.getCoordinates(`
			---
			--X
			---
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })


})

describe("element rotation around the axis 5x5", function () {

    it("element move the top", function () {
        let elementTetromino = tetris.getCoordinates(`
            -----
            -----
            ----X
            -----
            -----
            
        `)

        let fulcrum = tetris.getCoordinates(`
            -----
            -----
            --X--
            -----
            -----
        `)
        let stepElementTetromino = tetris.rotateElement(fulcrum, elementTetromino)
        let expectedResult = tetris.getCoordinates(`
            --X--
            -----
            -----
            -----
            -----
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("element move the left", function () {
        let elementTetromino = tetris.getCoordinates(`
            -----
            -----
            ----X
            -----
            -----
            
        `)

        let fulcrum = tetris.getCoordinates(`
            -----
            -----
            --X--
            -----
            -----
        `)
        let stepElementTetromino = tetris.rotateElement(fulcrum, elementTetromino)
        let expectedResult = tetris.getCoordinates(`
            -----
            -----
            X----
            -----
            -----
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("element move the right", function () {
        let elementTetromino = tetris.getCoordinates(`
            -----
            -----
            ----X
            -----
            -----
        `)

        let fulcrum = tetris.getCoordinates(`
            -----
            -----
            --X--
            -----
            -----
        `)
        let stepElementTetromino = tetris.rotateElement(fulcrum, elementTetromino)
        let expectedResult = tetris.getCoordinates(`
            -----
            -----
            -----
            -----
            --X--
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("the item returns to its original position", function(){
        let elementTetromino = tetris.getCoordinates(`
            -----
            -----
            ----X
            -----
            -----
        `)

        let fulcrum = tetris.getCoordinates(`
            -----
            -----
            --X--
            -----
            -----
        `)
        let stepElementTetromino = tetris.rotateElement(fulcrum, elementTetromino)
		let expectedResult = tetris.getCoordinates(`
            -----
            -----
            ----X
            -----
            -----
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })
})