var assert = require('chai').assert;
var tetris = require('../tetris')
describe("Rotation where afte element has positive,negative, top, off the diagonal", function () {
    it("element move the left field 4x7", function () {
        let elementTetromino = tetris.getCoordinates(`
            --X--
            -----
            -----
            -----
            -----
            -----
            -----
        `)

        let pivot = tetris.getCoordinates(`
            -----
            -----
            -----
            -X---
            -----
            -----
            -----
        `)

        let stepElementTetromino = tetris.rotateElement(elementTetromino[0], pivot[0])
        let expectedResult = { x: -2, y: 2 }
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("element move the bottom field 4x7", function () {
        let elementTetromino = { x: -2, y: 2 }

        let pivot = tetris.getCoordinates(`
            -----
            -----
            -----
            -X---
            -----
            -----
            -----
        `)

        let stepElementTetromino = tetris.rotateElement(elementTetromino, pivot[0])
        let expectedResult = tetris.getCoordinates(`
            -----
            -----
            -----
            -----
            -----
            -----
            X----
        `)
        assert.deepEqual(expectedResult[0], stepElementTetromino)
    })

    it("element move the right field 4x7", function () {
        let elementTetromino = tetris.getCoordinates(`
            -----
            -----
            -----
            -----
            -----
            -----
            X----
        `)

        let pivot = tetris.getCoordinates(`
            -----
            -----
            -----
            -X---
            -----
            -----
            -----
        `)

        let stepElementTetromino = tetris.rotateElement(elementTetromino[0], pivot[0])
        let expectedResult = tetris.getCoordinates(`
            -----
            -----
            -----
            -----
            ----X
            -----
            -----
        `)
        assert.deepEqual(expectedResult[0], stepElementTetromino)
    })

    it("element move the top field 4x7", function () {
        let elementTetromino = tetris.getCoordinates(`
            -----
            -----
            -----
            -----
            ----X
            -----
            -----
        `)

        let pivot = tetris.getCoordinates(`
            -----
            -----
            -----
            -X---
            -----
            -----
            -----
        `)

        let stepElementTetromino = tetris.rotateElement(elementTetromino[0], pivot[0])
        let expectedResult = tetris.getCoordinates(`
            --X--
            -----
            -----
            -----
            -----
            -----
            -----
        `)
        assert.deepEqual(expectedResult[0], stepElementTetromino)
    })
})

describe("Rotation where starts to the left,on the diagonal, has negative coordinates", function () {
    it("element move the right on the diagonal field 3x5", function () {
        let elementTetromino = tetris.getCoordinates(`
            -----
            -----
            X----
        `)
        let pivot = tetris.getCoordinates(`
            --X--
            -----
            -----
        `)
        let stepElementTetromino = tetris.rotateElement(elementTetromino[0], pivot[0])
        let expectedResult = tetris.getCoordinates(`
            -----
            -----
            ----X
        `)
        assert.deepEqual(expectedResult[0], stepElementTetromino)

    })

    it("element move the top on the diagonal field 3x5", function () {
        let elementTetromino = tetris.getCoordinates(`
            -----
            -----
            ----X
        `)
        let pivot = tetris.getCoordinates(`
            --X--
            -----
            -----
        `)
        let stepElementTetromino = tetris.rotateElement(elementTetromino[0], pivot[0])
        let expectedResult = { x: 4, y: -2 }
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("element move the left on the diagonal field 3x5", function () {
        let elementTetromino = { x: 4, y: -2 }
        let pivot = tetris.getCoordinates(`
            --X--
            -----
            -----
        `)
        let stepElementTetromino = tetris.rotateElement(elementTetromino, pivot[0])
        let expectedResult = { x: 0, y: -2 }
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("element move the bottom on the diagonal field 3x5", function () {
        let elementTetromino = { x: 0, y: -2 }
        let pivot = tetris.getCoordinates(`
            --X--
            -----
            -----
        `)
        let stepElementTetromino = tetris.rotateElement(elementTetromino, pivot[0])
        let expectedResult = tetris.getCoordinates(`
            -----
            -----
            X----
        `)
        assert.deepEqual(expectedResult[0], stepElementTetromino)
    })
})

describe("Rotation where starts to the right, pivot has same x and y coordinates", function () {
    it("element move the top field 5x5", function () {
        let elementTetromino = tetris.getCoordinates(`
            -----
            ----X
            -----
            -----
            -----
        `)
        let pivot = tetris.getCoordinates(`
            -----
            -----
            --X--
            -----
            -----
        `)

        let stepElementTetromino = tetris.rotateElement(elementTetromino[0], pivot[0])
        let expectedResult = tetris.getCoordinates(`
            -X---
            -----
            -----
            -----
            -----
        `)
        assert.deepEqual(expectedResult[0], stepElementTetromino)
    })

    it("element move the left field 5x5", function () {
        let elementTetromino = tetris.getCoordinates(`
            -X---
            -----
            -----
            -----
            -----
        `)
        let pivot = tetris.getCoordinates(`
            -----
            -----
            --X--
            -----
            -----
        `)

        let stepElementTetromino = tetris.rotateElement(elementTetromino[0], pivot[0])
        let expectedResult = tetris.getCoordinates(`
            -----
            -----
            -----
            X----
            -----
        `)
        assert.deepEqual(expectedResult[0], stepElementTetromino)
    })

    it("element move the bottom field 5x5", function () {
        let elementTetromino = tetris.getCoordinates(`
            -----
            -----
            -----
            X----
            -----
        `)
        let pivot = tetris.getCoordinates(`
            -----
            -----
            --X--
            -----
            -----
        `)

        let stepElementTetromino = tetris.rotateElement(elementTetromino[0], pivot[0])
        let expectedResult = tetris.getCoordinates(`
            -----
            -----
            -----
            -----
            ---X-
        `)
        assert.deepEqual(expectedResult[0], stepElementTetromino)
    })

    it("element move the right field 5x5", function () {
        let elementTetromino = tetris.getCoordinates(`
            -----
            -----
            -----
            -----
            ---X-
        `)
        let pivot = tetris.getCoordinates(`
            -----
            -----
            --X--
            -----
            -----
        `)

        let stepElementTetromino = tetris.rotateElement(elementTetromino[0], pivot[0])
        let expectedResult = tetris.getCoordinates(`
            -----
            ----X
            -----
            -----
            -----
        `)
        assert.deepEqual(expectedResult[0], stepElementTetromino)
    })
})

describe("Rotation where starts to the bottom, pivot has different x and y coordinates", function () {
    it("element move the left field 6x6", function () {
        let elementTetromino = tetris.getCoordinates(`
            ------
            ------
            ------
            ------
            ------
            ---X--
        `)
        let pivot = tetris.getCoordinates(`
            ------
            ------
            --X---
            ------
            ------
            ------
        `)
        let stepElementTetromino = tetris.rotateElement(elementTetromino[0], pivot[0])
        let expectedResult = tetris.getCoordinates(`
            ------
            -----X
            ------
            ------
            ------
            ------
        `)
        assert.deepEqual(expectedResult[0], stepElementTetromino)
    })

    it("element move the top field 6x6", function () {
        let elementTetromino = tetris.getCoordinates(`
            ------
            -----X
            ------
            ------
            ------
            ------
        `)
        let pivot = tetris.getCoordinates(`
            ------
            ------
            --X---
            ------
            ------
            ------
        `)
        let stepElementTetromino = tetris.rotateElement(elementTetromino[0], pivot[0])
        let expectedResult = { x: 1, y: -1 }
        assert.deepEqual(expectedResult, stepElementTetromino)
    })

    it("element move the top field 6x6", function () {
        let elementTetromino = { x: 1, y: -1 }
        let pivot = tetris.getCoordinates(`
            ------
            ------
            --X---
            ------
            ------
            ------
        `)
        let stepElementTetromino = tetris.rotateElement(elementTetromino, pivot[0])
        let expectedResult = { x: -1, y: 3 }
        assert.deepEqual(expectedResult, stepElementTetromino)
    })
    it("element move the top field 6x6", function () {
        let elementTetromino = { x: -1, y: 3 }
        let pivot = tetris.getCoordinates(`
            ------
            ------
            --X---
            ------
            ------
            ------
        `)
        let stepElementTetromino = tetris.rotateElement(elementTetromino, pivot[0])
        let expectedResult = tetris.getCoordinates(`
            ------
            ------
            ------
            ------
            ------
            ---X--
        `)
        assert.deepEqual(expectedResult[0], stepElementTetromino)
    })
})

describe("Rotation where pivot coordinates coincides with element coordinates", function () {
    it("element not move field 4x4", function () {
        let elementTetromino = tetris.getCoordinates(`
            ----
            ----
            -X--
            ----
        `)
        let pivot = tetris.getCoordinates(`
            ----
            ----
            -X--
            ----
        `)
        let stepElementTetromino = tetris.rotateElement(elementTetromino[0], pivot[0])
        let expectedResult = tetris.getCoordinates(`
            ----
            ----
            -X--
            ----
        `)
        assert.deepEqual(expectedResult[0], stepElementTetromino)
    })
})