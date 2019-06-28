var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Generation empty field", function () {
    it("Generation field 5x5", function () {
        let fieldSize = { x: 5, y: 5 }
        let field = new tetris.Field(fieldSize)
        let generationField = field.generationField(fieldSize)
        let expectedResult = tetris.buildField(`
            -----
            -----
            -----
            -----
            -----
        `)
        assert.deepEqual(generationField, expectedResult)
    })
    it("Generation field 7x9", function () {
        let fieldSize = { x: 7, y: 9 }
        let field = new tetris.Field(fieldSize)
        let generationField = field.generationField(fieldSize)
        let expectedResult = tetris.buildField(`
            -------
            -------
            -------
            -------
            -------
            -------
            -------
            -------
            -------
        `)
        assert.deepEqual(generationField, expectedResult)
    })
    it("Generation field 2x5", function () {
        let fieldSize = { x: 2, y: 5 }
        let field = new tetris.Field(fieldSize)
        let generationField = field.generationField(fieldSize)
        let expectedResult = tetris.buildField(`
            --
            --
            --
            --
            --
        `)
        assert.deepEqual(generationField, expectedResult)
    })
})