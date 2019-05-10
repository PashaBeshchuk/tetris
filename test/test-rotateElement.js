var assert = require('chai').assert;
var tetris = require('../tetris')
describe("element rotation around the axis", function () {
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

    it("element move up one from the right", function () {
        let stepElementTetromino = tetris.rotateElement(fulcrum, elementTetromino)
        let expectedResult = tetris.getCoordinates(`
			--X
			---
			---
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("element move left one from the top", function () {
        let stepElementTetromino = tetris.rotateElement(fulcrum, elementTetromino)
        let expectedResult = tetris.getCoordinates(`
			-X-
			---
			---
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("second step element movement left top", function () {
        let stepElementTetromino = tetris.rotateElement(fulcrum, elementTetromino)
        let expectedResult = tetris.getCoordinates(`
			X--
			---
			---
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("element move down one from the left", function () {
        let stepElementTetromino = tetris.rotateElement(fulcrum, elementTetromino)
        let expectedResult = tetris.getCoordinates(`
			---
			X--
			---
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("second step element movement down left", function () {
        let stepElementTetromino = tetris.rotateElement(fulcrum, elementTetromino)
        let expectedResult = tetris.getCoordinates(`
			---
			---
			X--
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("element move right one from the down", function () {
        let stepElementTetromino = tetris.rotateElement(fulcrum, elementTetromino)
        let expectedResult = tetris.getCoordinates(`
			---
			---
			-X-
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("second step of element right below", function(){
        let stepElementTetromino = tetris.rotateElement(fulcrum, elementTetromino)
		let expectedResult = tetris.getCoordinates(`
			---
			---
			--X
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("tetramino on the starting position", function(){
        let stepElementTetromino = tetris.rotateElement(fulcrum, elementTetromino)
		let expectedResult = tetris.getCoordinates(`
			---
			--X
			---
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })


})