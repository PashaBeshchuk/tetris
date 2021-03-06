var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Check situation on field", function () {
    it("Check situation where there's no filled rows", function () {
        let fieldSize = tetris.buildField(`
            -----
            -----
            -----
        `)
        let field = new tetris.Field(fieldSize)
        let resultCheckField = field.cleanFilledRows()
        let expectedResult = tetris.buildField(`
            -----
            -----
            -----
        `)
        assert.deepEqual(resultCheckField, expectedResult)
    })
    it("Check situation where there's 1 filled row", function () {
        let fieldSize = tetris.buildField(`
            -XXX-
            XXXXX
            -----
        `)
        let field = new tetris.Field(fieldSize)
        let resultCheckField = field.cleanFilledRows()
        let expectedResult = tetris.buildField(`
            -----
            -XXX-
            -----
        `)
        assert.deepEqual(resultCheckField, expectedResult)
    })
    it("Check situation where there's more than 1 filled row", function () {
        let fieldSize = tetris.buildField(`
            -----
            XXXXX
            -XXX-
            XXXXX
            -----
        `)
        let field = new tetris.Field(fieldSize)
        let resultCheckField = field.cleanFilledRows()
        let expectedResult = tetris.buildField(`
            -----
            -----
            -----
            -XXX-
            -----
        `)
        assert.deepEqual(resultCheckField, expectedResult)
    })
    it("Rows are cleaned both above and below", function () {
        let fieldSize = tetris.buildField(`
            X--
            XXX
            --X
            XXX
            -X-
        `)
        let field = new tetris.Field(fieldSize)
        let resultCheckField = field.cleanFilledRows()
        let expectedResult = tetris.buildField(`
            ---
            ---
            X--
            --X
            -X-
        `)
        assert.deepEqual(resultCheckField, expectedResult)
    })
    it("Remove lines and add L tetromino", function () {
        let fieldSize = tetris.buildField(`
            X--
            XXX
            --X
            XXX
            -X-
        `)
        let coordinatesTetromino_L = tetris.getCoordinates(`
            XXX
            X--
        `)
        let field = new tetris.Field(fieldSize)
        let firstResultCheckField = field.cleanFilledRows()
        let addTetromino = field.addTetrominoToField(coordinatesTetromino_L)
        let secondResultCheckField = field.cleanFilledRows()
        let expectedResult = tetris.buildField(`
            ---
            X--
            X--
            --X
            -X-
        `)
        assert.deepEqual(secondResultCheckField, expectedResult)
    })
    it("Cycle remove lines and add tetrominos", function () {
        let fieldSize = tetris.buildField(`
            X--
            XXX
            --X
            XXX
            -X-
        `)
        let field = new tetris.Field(fieldSize)
        let firstResultCheckField = field.cleanFilledRows()
        let expectedResult = tetris.buildField(`
            ---
            ---
            X--
            --X
            -X-
        `)
        assert.deepEqual(firstResultCheckField, expectedResult)
        let coordinatesTetromino_L = tetris.getCoordinates(`
            XXX
            X--
        `)
        let addTetrominoL = field.addTetrominoToField(coordinatesTetromino_L)
        let secondResultCheckField = field.cleanFilledRows()
        let expectedResult2 = tetris.buildField(`
            ---
            X--
            X--
            --X
            -X-
        `)
        assert.deepEqual(secondResultCheckField, expectedResult2)
        let coordinatesTetromino_Z = tetris.getCoordinates(`
            XX-
            -XX
        `)
        let addTetrominoZ = field.addTetrominoToField(coordinatesTetromino_Z)
        let thirdResultCheckField = field.cleanFilledRows()
        let expectedResult3 = tetris.buildField(`
            ---
            XX-
            X--
            --X
            -X-
        `)
        assert.deepEqual(thirdResultCheckField, expectedResult3)
        let coordinatesTetromino_J = tetris.getCoordinates(`
            XXX
            --X
        `)
        let addTetrominoJ = field.addTetrominoToField(coordinatesTetromino_J)
        let forthResultCheckField = field.cleanFilledRows()
        let expectedResult4 = tetris.buildField(`
            ---
            ---
            X--
            --X
            -X-
        `)
        assert.deepEqual(forthResultCheckField, expectedResult4)
    })
    it("Full line in the middle of the field", function () {
        let fieldSize = tetris.buildField(`
            ---
            ---
            ---
            -XX
            -X-
        `)
        let coordinatesTetromino_I = tetris.getCoordinates(`
            ---
            X--
            X--
            X--
            X--
        `)
        let field = new tetris.Field(fieldSize)
        let addTetrominoI = field.addTetrominoToField(coordinatesTetromino_I)
        let resultCheckField = field.cleanFilledRows()
        let expectedResult = tetris.buildField(`
            ---
            ---
            X--
            X--
            XX-
        `)
        assert.deepEqual(resultCheckField, expectedResult)
    })
    it("Full line in the down of the field", function () {
        let fieldSize = tetris.buildField(`
            ---
            ---
            ---
            ---
            -XX
        `)
        let coordinatesTetromino_J = tetris.getCoordinates(`
            ---
            ---
            ---
            XXX
            X--
        `)
        let field = new tetris.Field(fieldSize)
        let addTetrominoI = field.addTetrominoToField(coordinatesTetromino_J)
        let resultCheckField = field.cleanFilledRows()
        let expectedResult = tetris.buildField(`
            ---
            ---
            ---
            ---
            ---
        `)
        assert.deepEqual(resultCheckField, expectedResult)
    })
})