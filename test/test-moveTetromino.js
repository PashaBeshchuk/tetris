var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Move tetromino", function () {
    it("Move left L tetromino", function () {
        let coordinates = tetris.getCoordinates(`
            -----
            ----X
            --XXX
            -----
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: -1, y: 0 };
        let lTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = lTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            ---X-
            -XXX-
            -----
        `)
    })
    it("L tetromino can not move, there is an element on the way", function () {
        let coordinates = tetris.getCoordinates(`
            -----
            ----X
            --XXX
            -----
        `)
        let field = tetris.buildField(`
            -----
            ---X-
            -----
            -----
        `);
        let shift = { x: -1, y: 0 };
        let lTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = lTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            ----X
            --XXX
            -----
        `)
    })
    it("Move down J tetromino", function () {
        let coordinates = tetris.getCoordinates(`
            -XX--
            -X---
            -X---
            -----
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: 0, y: -1 };
        let jTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = jTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            -XX--
            -X---
            -X---
        `)
    })
    it("J tetromino can not move, there is an element on the way", function () {
        let coordinates = tetris.getCoordinates(`
            -XX--
            -X---
            -X---
            -----
        `)
        let field = tetris.buildField(`
            -----
            --X--
            -----
            -----
        `);
        let shift = { x: 0, y: -1 };
        let jTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = jTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -XX--
            -X---
            -X---
            -----
        `)
    })
    it("Move right T tetromino", function () {
        let coordinates = tetris.getCoordinates(`
            -----
            --X--
            -XXX-
            -----
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: 1, y: 0 };
        let tTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = tTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            ---X-
            --XXX
            -----
        `)
    })
    it("T tetromino can not move, there is an element on the way", function () {
        let coordinates = tetris.getCoordinates(`
            -----
            --X--
            -XXX-
            -----
        `)
        let field = tetris.buildField(`
            -----
            ---X-
            -----
            -----
        `);
        let shift = { x: 1, y: 0 };
        let tTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = tTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            --X--
            -XXX-
            -----
        `)
    })
    it("Move down Z tetromino", function () {
        let coordinates = tetris.getCoordinates(`
            -XX--
            --XX-
            -----
            -----
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: 0, y: -1 };
        let zTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = zTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            -XX--
            --XX-
            -----
        `)
    })
    it("Z tetromino can not move, there is an element on the way", function () {
        let coordinates = tetris.getCoordinates(`
            -XX--
            --XX-
            -----
            -----
        `)
        let field = tetris.buildField(`
            -----
            -X---
            -----
            -----
        `);
        let shift = { x: 0, y: -1 };
        let zTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = zTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -XX--
            --XX-
            -----
            -----
        `)
    })
    it("Move right S tetromino", function () {
        let coordinates = tetris.getCoordinates(`
            -X---
            -XX--
            --X--
            -----
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: 1, y: 0 };
        let sTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = sTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            --X--
            --XX-
            ---X-
            -----
        `)
    })
    it("S tetromino can not move, there is an element on the way", function () {
        let coordinates = tetris.getCoordinates(`
            -X---
            -XX--
            --X--
            -----
        `)
        let field = tetris.buildField(`
            --X--
            -----
            -----
            -----
        `);
        let shift = { x: 1, y: 0 };
        let sTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = sTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -X---
            -XX--
            --X--
            -----
        `)
    })
    it("Move left I tetromino", function () {
        let coordinates = tetris.getCoordinates(`
            -----
            -XXXX
            -----
            -----
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: -1, y: 0 };
        let iTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = iTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            XXXX-
            -----
            -----
        `)
    })
    it("I tetromino can not move, there is an element on the way", function () {
        let coordinates = tetris.getCoordinates(`
            -----
            -XXXX
            -----
            -----
        `)
        let field = tetris.buildField(`
            -----
            X----
            -----
            -----
        `);
        let shift = { x: -1, y: 0 };
        let iTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = iTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            -XXXX
            -----
            -----
        `)
    })
    it("Move down O tetromino", function () {
        let coordinates = tetris.getCoordinates(`
            -XX--
            -XX--
            -----
            -----
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: 0, y: -1 };
        let oTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = oTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            -XX--
            -XX--
            -----
        `)
    })
    it("O tetromino can not move, there is an element on the way", function () {
        let coordinates = tetris.getCoordinates(`
            -XX--
            -XX--
            -----
            -----
        `)
        let field = tetris.buildField(`
            -----
            -----
            -X---
            -----
        `);
        let shift = { x: 0, y: -1 };
        let oTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = oTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -XX--
            -XX--
            -----
            -----
        `)
    })
})