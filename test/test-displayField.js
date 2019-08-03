var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Build and display field", function () {
    it("Build and display field 5x5", function () {
        let fieldSize = { x: 5, y: 5 };
        let field = tetris.displayField(fieldSize);
        let expected = `
            -----
            -----
            -----
            -----
            -----
        `

        assert.deepEqual(field, expected)
    })
    it("Build and display field 7x3", function () {
        let fieldSize = { x: 7, y: 3 };
        let field = tetris.displayField(fieldSize);
        let expected = `
            -------
            -------
            -------
        `
        assert.deepEqual(field, expected)
    })
    it("Build and display field 7x3", function () {
        let fieldSize = { x: 3, y: 8 };
        let field = tetris.displayField(fieldSize);
        let expected = `
            ---
            ---
            ---
            ---
            ---
            ---
            ---
            ---
        `
        assert.deepEqual(field, expected)
    })
})