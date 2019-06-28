var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Add tetromino to field", function () {
    it("Add L tetromino to filed", function () {
        let coordinatesTetromino = tetris.getCoordinates(`
            -X---
            -X---
            -XX--
        `)
        let fieldSize = { x: 6, y: 5 }
        let field = new tetris.Field(fieldSize)
        let addTotromino = field.addTetrominoToField(coordinatesTetromino)
        let expectedResult = tetris.buildField(`
            -X----
            -X----
            -XX---
            ------
            ------
        `)
        assert.deepEqual(addTotromino, expectedResult)
    })
    it("Add J tetromino to filed", function () {
        let coordinatesTetromino = tetris.getCoordinates(`
            --X--
            XXX--
            -----
        `)
        let fieldSize = { x: 5, y: 4 }
        let field = new tetris.Field(fieldSize)
        let addTotromino = field.addTetrominoToField(coordinatesTetromino)
        let expectedResult = tetris.buildField(`
            --X--
            XXX--
            -----
            -----
        `)
        assert.deepEqual(addTotromino, expectedResult)
    })
    it("Add T tetromino to filed", function () {
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -XXX-
            --X--
        `)
        let fieldSize = { x: 5, y: 4 }
        let field = new tetris.Field(fieldSize)
        let addTotromino = field.addTetrominoToField(coordinatesTetromino)
        let expectedResult = tetris.buildField(`
            -----
            -XXX-
            --X--
            -----
        `)
        assert.deepEqual(addTotromino, expectedResult)
    })
    it("Add I tetromino to filed", function () {
        let coordinatesTetromino = tetris.getCoordinates(`
            ----X-
            ----X-
            ----X-
            ----X-
        `)
        let fieldSize = { x: 6, y: 4 }
        let field = new tetris.Field(fieldSize)
        let addTotromino = field.addTetrominoToField(coordinatesTetromino)
        let expectedResult = tetris.buildField(`
            ----X-
            ----X-
            ----X-
            ----X-
        `)
        assert.deepEqual(addTotromino, expectedResult)
    })
    it("Add Z tetromino to filed", function () {
        let coordinatesTetromino = tetris.getCoordinates(`
            XX--
            -XX-
        `)
        let fieldSize = { x: 4, y: 3 }
        let field = new tetris.Field(fieldSize)
        let addTotromino = field.addTetrominoToField(coordinatesTetromino)
        let expectedResult = tetris.buildField(`
            XX--
            -XX-
            ----
        `)
        assert.deepEqual(addTotromino, expectedResult)
    })
    it("Add S tetromino to filed", function () {
        let coordinatesTetromino = tetris.getCoordinates(`
            -X--
            -XX-
            --X-
        `)
        let fieldSize = { x: 4, y: 3 }
        let field = new tetris.Field(fieldSize)
        let addTotromino = field.addTetrominoToField(coordinatesTetromino)
        let expectedResult = tetris.buildField(`
            -X--
            -XX-
            --X-
        `)
        assert.deepEqual(addTotromino, expectedResult)
    })
    it("Add O tetromino to filed", function () {
        let coordinatesTetromino = tetris.getCoordinates(`
            ----
            -XX-
            -XX-
        `)
        let fieldSize = { x: 4, y: 3 }
        let field = new tetris.Field(fieldSize)
        let addTotromino = field.addTetrominoToField(coordinatesTetromino)
        let expectedResult = tetris.buildField(`
            ----
            -XX-
            -XX-
        `)
        assert.deepEqual(addTotromino, expectedResult)
    })
})