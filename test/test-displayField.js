var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Build and display field", function () {
    it("Build and display field 5x5", function () {
        let fieldSize = { x: 5, y: 5 };
        let fieldStatus = tetris.buildField(`
            -----
            -----
            -XXX-
            -----
            -----
        `)
        let tetromino = tetris.getCoordinates(`
            ---X-
            -XXX-
            -----
            -----
            -----
        `)
        let field = tetris.displayField(fieldSize, tetromino, fieldStatus);
        let expected = `
            ---X-
            -XXX-
            -ooo-
            -----
            -----
        `
        assert.deepEqual(expected, field)
    })
    it("Build and display field 7x3", function () {
        let fieldSize = { x: 7, y: 3 };
        let fieldStatus = tetris.buildField(`
            -------
            -X--XX-
            -X--XX-
        `)
        let tetromino = tetris.getCoordinates(`
            XX-----
            X------
            X------
        `)
        let field = tetris.displayField(fieldSize, tetromino, fieldStatus);
        let expected = `
            XX-----
            Xo--oo-
            Xo--oo-
        `
        assert.deepEqual(expected, field)
    })
    it("Build and display field 7x3", function () {
        let fieldSize = { x: 3, y: 8 };
        let fieldStatus = tetris.buildField(`
            ---
            ---
            ---
            ---
            ---
            -X-
            -X-
            -X-
        `)
        let tetromino = tetris.getCoordinates(`
            ---
            ---
            ---
            -X-
            XXX
            ---
            ---
            ---
        `)
        let field = tetris.displayField(fieldSize, tetromino, fieldStatus);
        let expected = `
            ---
            ---
            ---
            -X-
            XXX
            -o-
            -o-
            -o-
        `
        assert.deepEqual(expected, field)
    })
})