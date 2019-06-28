var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Move tetromino", function () {
    it("Move left L tetromino", function () {
        let typeOfTetromino = "L";
        let phase = "right";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("Move down-left L tetromino", function () {
        let typeOfTetromino = "L";
        let phase = "right";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        let shift = { x: 0, y: 1 };
        let nextShift = { x: -1, y: 0 };
        let lTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = lTetromino.moveTetromino(field, shift);
        let nextResultMoveTetromino = lTetromino.moveTetromino(field, nextShift);
        let expected = tetris.getCoordinates(`
            -----
            -----
            ---X-
            -XXX-
        `)
        assert.deepEqual(nextResultMoveTetromino, expected)
    })
    
    it("L tetromino can not move, there is an element on the way", function () {
        let typeOfTetromino = "L";
        let phase = "right";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("L tetromino can not move, the element is out of the field", function () {
        let typeOfTetromino = "L";
        let phase = "left";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            --XXX
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
        let lTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = lTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            --XXX
            --X--
            -----
        `);
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("L tetromino can not move, item too low", function () {
        let typeOfTetromino = "L";
        let phase = "up";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            --XX-
            ---X-
            ---X-
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: 0, y: 1 };
        let lTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = lTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            --XX-
            ---X-
            ---X-
        `);
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("Move down J tetromino", function () {
        let typeOfTetromino = "J";
        let phase = "up";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        let shift = { x: 0, y: 1 };
        let jTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = jTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            -XX--
            -X---
            -X---
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("Move right-down J tetromino", function () {
        let typeOfTetromino = "J";
        let phase = "up";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        let shift = { x: 1, y: 0 };
        let nextShift = { x: 0, y: 1 };
        let jTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = jTetromino.moveTetromino(field, shift);
        let nextResultMoveTetromino = jTetromino.moveTetromino(field, nextShift);
        let expected = tetris.getCoordinates(`
            -----
            --XX-
            --X--
            --X--
        `)
        assert.deepEqual(nextResultMoveTetromino, expected)
    })
    it("J tetromino can not move, there is an element on the way", function () {
        let typeOfTetromino = "J";
        let phase = "up";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("J tetromino can not move, item too left", function () {
        let typeOfTetromino = "J";
        let phase = "down";
        let coordinatesTetromino = tetris.getCoordinates(`
            -X---
            -X---
            XX---
            -----
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: -1, y: 0 };
        let jTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = jTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -X---
            -X---
            XX---
            -----
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("J tetromino can not move, item too right", function () {
        let typeOfTetromino = "J";
        let phase = "down";
        let coordinatesTetromino = tetris.getCoordinates(`
            ----X
            ----X
            ---XX
            -----
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: 1, y: 0 };
        let jTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = jTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            ----X
            ----X
            ---XX
            -----
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("J tetromino can not move, item too down", function () {
        let typeOfTetromino = "J";
        let phase = "right";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -----
            -XXX-
            ---X-
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: 0, y: 1 };
        let jTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = jTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            -----
            -XXX-
            ---X-
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("Move right T tetromino", function () {
        let typeOfTetromino = "T";
        let phase = "up";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("Move left-down T tetromino", function () {
        let typeOfTetromino = "T";
        let phase = "up";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        let shift = { x: -1, y: 0 };
        let nextShift = { x: 0, y: 1 };
        let tTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = tTetromino.moveTetromino(field, shift);
        let nextResultMoveTetromino = tTetromino.moveTetromino(field, nextShift);
        let expected = tetris.getCoordinates(`
            -----
            -----
            -X---
            XXX--
        `)
        assert.deepEqual(nextResultMoveTetromino, expected)
    })
    it("T tetromino can not move, item too right", function () {
        let typeOfTetromino = "T";
        let phase = "up";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            ---X-
            --XXX
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
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("T tetromino can not move, item too left", function () {
        let typeOfTetromino = "T";
        let phase = "left";
        let coordinatesTetromino = tetris.getCoordinates(`
            -X---
            XX---
            -X---
            ----- 
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: -1, y: 0 };
        let tTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = tTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -X---
            XX---
            -X---
            ----- 
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("T tetromino can not move, item too down", function () {
        let typeOfTetromino = "T";
        let phase = "down";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -----
            -XXX-
            --X-- 
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: 0, y: 1 };
        let tTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = tTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            -----
            -XXX-
            --X-- 
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("Move down Z tetromino", function () {
        let typeOfTetromino = "Z";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        let shift = { x: 0, y: 1 };
        let zTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = zTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            -XX--
            --XX-
            -----
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("Move down-right Z tetromino", function () {
        let typeOfTetromino = "Z";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        let shift = { x: 0, y: 1 };
        let nextShift = { x: 1, y: 0 };
        let zTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = zTetromino.moveTetromino(field, shift);
        let nextResultMoveTetromino = zTetromino.moveTetromino(field, nextShift);
        let expected = tetris.getCoordinates(`
            -----
            --XX-
            ---XX
            -----
        `)
        assert.deepEqual(nextResultMoveTetromino, expected)
    })
    it("Z tetromino can not move, there is an element on the way", function () {
        let typeOfTetromino = "Z";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("Z tetromino can not move, item too down", function () {
        let typeOfTetromino = "Z";
        let phase = "vertical";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            --X--
            -XX--
            -X---
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: 0, y: 1 };
        let zTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = zTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            --X--
            -XX--
            -X---
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("Z tetromino can not move, item too left", function () {
        let typeOfTetromino = "Z";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            XX---
            -XX--
            -----
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: -1, y: 0 };
        let zTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = zTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            XX---
            -XX--
            -----
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("Z tetromino can not move, item too right", function () {
        let typeOfTetromino = "Z";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            --XX-
            ---XX
            -----
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: 1, y: 0 };
        let zTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = zTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            --XX-
            ---XX
            -----
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("Move right S tetromino", function () {
        let typeOfTetromino = "S";
        let phase = "vertical";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("Move right-down S tetromino", function () {
        let typeOfTetromino = "S";
        let phase = "vertical";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        let nextShift = { x: 0, y: 1 };
        let sTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = sTetromino.moveTetromino(field, shift);
        let nextResultMoveTetromino = sTetromino.moveTetromino(field, nextShift);
        let expected = tetris.getCoordinates(`
            -----
            --X--
            --XX-
            ---X-
        `)
        assert.deepEqual(nextResultMoveTetromino, expected)
    })
    it("S tetromino can not move, there is an element on the way", function () {
        let typeOfTetromino = "S";
        let phase = "vertical";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("S tetromino can not move, item too left", function () {
        let typeOfTetromino = "S";
        let phase = "vertical";
        let coordinatesTetromino = tetris.getCoordinates(`
            X----
            XX---
            -X---
            -----
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: -1, y: 0 };
        let sTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = sTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            X----
            XX---
            -X---
            -----
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("S tetromino can not move, item too right", function () {
        let typeOfTetromino = "S";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            ---XX
            --XX-
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
            -----
            ---XX
            --XX-
            -----
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("S tetromino can not move, item too down", function () {
        let typeOfTetromino = "S";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -----
            ---XX
            --XX-
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: 0, y: 1 };
        let sTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = sTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            -----
            ---XX
            --XX-
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("Move left I tetromino", function () {
        let typeOfTetromino = "I";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("Move left-down I tetromino", function () {
        let typeOfTetromino = "I";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        let nextShift = { x: 0, y: 1 };
        let iTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = iTetromino.moveTetromino(field, shift);
        let nextResultMoveTetromino = iTetromino.moveTetromino(field, nextShift);
        let expected = tetris.getCoordinates(`
            -----
            -----
            XXXX-
            -----
        `)
        assert.deepEqual(nextResultMoveTetromino, expected)
    })
    it("I tetromino can not move, there is an element on the way", function () {
        let typeOfTetromino = "I";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("I tetromino can not move, item too right", function () {
        let typeOfTetromino = "I";
        let phase = "vertical";
        let coordinatesTetromino = tetris.getCoordinates(`
            ----X
            ----X
            ----X
            ----X
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: 1, y: 0 };
        let iTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = iTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            ----X
            ----X
            ----X
            ----X
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("I tetromino can not move, item too left", function () {
        let typeOfTetromino = "I";
        let phase = "vertical";
        let coordinatesTetromino = tetris.getCoordinates(`
            X----
            X----
            X----
            X----
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
            X----
            X----
            X----
            X----
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("I tetromino can not move, item too down", function () {
        let typeOfTetromino = "I";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -----
            -----
            XXXX-
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: 0, y: 1 };
        let iTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = iTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            -----
            -----
            XXXX-
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("Move down O tetromino", function () {
        let typeOfTetromino = "O";
        let phase = "stable";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        let shift = { x: 0, y: 1 };
        let oTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = oTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            -XX--
            -XX--
            -----
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("Move down-right O tetromino", function () {
        let typeOfTetromino = "O";
        let phase = "stable";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        let shift = { x: 0, y: 1 };
        let nextShift = { x: 1, y: 0 };
        let oTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = oTetromino.moveTetromino(field, shift);
        let nextResultMoveTetromino = oTetromino.moveTetromino(field, nextShift);
        let expected = tetris.getCoordinates(`
            -----
            --XX-
            --XX-
            -----
        `)
        assert.deepEqual(nextResultMoveTetromino, expected)
    })
    it("O tetromino can not move, there is an element on the way", function () {
        let typeOfTetromino = "O";
        let phase = "stable";
        let coordinatesTetromino = tetris.getCoordinates(`
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
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("O tetromino can not move, item too right", function () {
        let typeOfTetromino = "O";
        let phase = "stable";
        let coordinatesTetromino = tetris.getCoordinates(`
            ---XX
            ---XX
            -----
            -----
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: 1, y: 0 };
        let oTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = oTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            ---XX
            ---XX
            -----
            -----
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("O tetromino can not move, item too left", function () {
        let typeOfTetromino = "O";
        let phase = "stable";
        let coordinatesTetromino = tetris.getCoordinates(`
            XX---
            XX---
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
        let oTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = oTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            XX---
            XX---
            -----
            -----
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
    it("O tetromino can not move, item too down", function () {
        let typeOfTetromino = "O";
        let phase = "stable";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -----
            -XX--
            -XX--
        `)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let shift = { x: 0, y: 1 };
        let oTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = oTetromino.moveTetromino(field, shift);
        let expected = tetris.getCoordinates(`
            -----
            -----
            -XX--
            -XX--
        `)
        assert.deepEqual(resultMoveTetromino, expected)
    })
})