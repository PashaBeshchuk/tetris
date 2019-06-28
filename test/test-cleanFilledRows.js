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
    })
})