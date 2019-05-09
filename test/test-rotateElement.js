var assert = require('chai').assert;
var tetris = require('../tetris')
describe("element rotation around the axis", function () {
    let elementTetromino = getCoordinates(`
		---
		--X
		---
	`)

    it("element move up one from the right", function () {
        let stepElementTetromino = rotateElement(elementTetromino)
        let expectedResult = getCoordinates(`
			--X
			---
			---
		`)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("element move left one from the top", function () {
        let stepElementTetromino = rotateElement(elementTetromino)
        let expectedResult = getCoordinates(`
			-X-
			---
			---
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("second step element movement left top", function () {
        let stepElementTetromino = rotateElement(elementTetromino)
        let expectedResult = getCoordinates(`
			X--
			---
			---
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("element move down one from the left", function () {
        let stepElementTetromino = rotateElement(elementTetromino)
        let expectedResult = getCoordinates(`
			---
			X--
			---
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("second step element movement down left", function () {
        let stepElementTetromino = rotateElement(elementTetromino)
        let expectedResult = getCoordinates(`
			---
			---
			X--
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("element move right one from the down", function () {
        let stepElementTetromino = rotateElement(elementTetromino)
        let expectedResult = getCoordinates(`
			---
			---
			-X-
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("second step of element right below", fucntion(){
        let stepElementTetromino = rotateElement(elementTetromino)
		let expectedResult = getCoordinates(`
			---
			---
			--X
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("tetramino on the starting position", fucntion(){
        let stepElementTetromino = rotateElement(elementTetromino)
		let expectedResult = getCoordinates(`
			---
			--X
			---
        `)
        assert.deepEqual(expectedResult, stepElementTetromino)
    })


})