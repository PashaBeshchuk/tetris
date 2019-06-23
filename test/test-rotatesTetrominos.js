var assert = require('chai').assert;
var tetris = require('../tetris');

describe("Rotate all tetromino", function () {

    it("L-tetromino rotation", function () {
        let typeOfTetromino = "L";
        let phase = "right";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            ----X
            --XXX
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);

        let lTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let rotateTetrominoUp    = lTetromino.rotateTetromino(field);
        let rotateTetrominoLeft  = lTetromino.rotateTetromino(field);
        let rotateTetrominoDown  = lTetromino.rotateTetromino(field);
        let rotateTetrominoRight = lTetromino.rotateTetromino(field);
        let expected = tetris.getCoordinates(`
            -----
            ----X
            --XXX
            -----
        `); 
        assert.deepEqual(rotateTetrominoRight, expected);
    })


    it("J-tetromino rotation", function () {
        let typeOfTetromino = "J";
        let phase = "right";
        let coordinatesTetromino = tetris.getCoordinates(`
            -XXX-
            ---X-
            -----
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let jTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetrominoUp    = jTetromino.rotateTetromino(field);
        let rotateTetrominoLeft  = jTetromino.rotateTetromino(field);
        let rotateTetrominoDown  = jTetromino.rotateTetromino(field);
        let rotateTetrominoRight = jTetromino.rotateTetromino(field);
        let expected = tetris.getCoordinates(`
            -XXX-
            ---X-
            -----
            -----
        `);
        assert.deepEqual(rotateTetrominoRight, expected)
    })

    it("T-tetromino rotation", function () {
        let typeOfTetromino = "T";
        let phase = "up";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            --X--
            -XXX-
            ----- 
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let tTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetrominoLeft  = tTetromino.rotateTetromino(field)
        let rotateTetrominoDown  = tTetromino.rotateTetromino(field)
        let rotateTetrominoRight = tTetromino.rotateTetromino(field)
        let rotateTetrominoUp    = tTetromino.rotateTetromino(field)
        let expected = tetris.getCoordinates(`
            -----
            --X--
            -XXX-
            ----- 
        `);
        assert.deepEqual(rotateTetrominoUp, expected)
    })

    it("Z-tetromino rotation", function () {
        let typeOfTetromino = "Z";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -XX--
            --XX-
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let zTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetrominoVertical    = zTetromino.rotateTetromino(field)
        let rotateTetrominoHorizontal  = zTetromino.rotateTetromino(field)
        let expected = tetris.getCoordinates(`
            -----
            -XX--
            --XX-
            -----
        `);
        assert.deepEqual(rotateTetrominoHorizontal, expected)
    })

    it("S-tetromino rotation", function () {
        let typeOfTetromino = "S";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            --XX-
            -XX--
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let sTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetrominoVertical    = sTetromino.rotateTetromino(field)
        let rotateTetrominoHorizontal  = sTetromino.rotateTetromino(field)
        let expected = tetris.getCoordinates(`
            -----
            --XX-
            -XX--
            -----
        `);
        assert.deepEqual(rotateTetrominoHorizontal, expected)
    });

    it("I-tetromino rotation", function () {
        let typeOfTetromino = "I";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -XXXX
            -----
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let iTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetrominoVertical    = iTetromino.rotateTetromino(field)
        let rotateTetrominoHorizontal  = iTetromino.rotateTetromino(field)
        let expected = tetris.getCoordinates(`
            -----
            -XXXX
            -----
            -----
        `);
        assert.deepEqual(rotateTetrominoHorizontal, expected)
    });

    it("O-tetromino rotation", function () {
        let typeOfTetromino = "O";
        let phase = "stable";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -XX--
            -XX--
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let oTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetrominoFirst  = oTetromino.rotateTetromino(field)
        let rotateTetrominoSecond = oTetromino.rotateTetromino(field)
        let rotateTetrominoThird  = oTetromino.rotateTetromino(field)
        let rotateTetrominoFourth = oTetromino.rotateTetromino(field)
        let expected = tetris.getCoordinates(`
            -----
            -XX--
            -XX--
            -----
        `);
        assert.deepEqual(rotateTetrominoFourth, expected)
    });``
})
describe("Tetramino can not rotate", function (){
    it("L tetromino can not rotate, there is an element on the way", function (){
        let typeOfTetromino = "L";
        let phase = "right";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            ----X
            --XXX
            -----
        `);
        let field = tetris.buildField(`
            -----
            --X--
            -----
            -----
        `);
        let lTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let rotateTetromino = lTetromino.rotateTetromino(field);
        let expected = tetris.getCoordinates(`
            -----
            ----X
            --XXX
            -----
        `); 
        assert.deepEqual(rotateTetromino, expected);
    })
    it("L tetromino can not rotate, too right to the edge", function (){
        let typeOfTetromino = "L";
        let phase = "up";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            ---XX
            ----X
            ----X
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let lTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let rotateTetromino = lTetromino.rotateTetromino(field);
        let expected = tetris.getCoordinates(`
            -----
            ---XX
            ----X
            ----X
        `); 
        assert.deepEqual(rotateTetromino, expected);
    })

    it("J tetromino can not rotate, there is an element on the way", function (){
        let typeOfTetromino = "J";
        let phase = "up";
        let coordinatesTetromino = tetris.getCoordinates(`
            -XX--
            -X---
            -X---
            -----
        `);
        let field = tetris.buildField(`
            -----
            ---X-
            -----
            -----
        `);
        let jTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetromino = jTetromino.rotateTetromino(field);
        let expected = tetris.getCoordinates(`
            -XX--
            -X---
            -X---
            -----
        `);
        assert.deepEqual(rotateTetromino, expected)
    })

    it("J tetromino can not rotate, too down to the edge", function (){
        let typeOfTetromino = "J";
        let phase = "left";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -----
            --XXX
            --X--
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let jTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetromino = jTetromino.rotateTetromino(field);
        let expected = tetris.getCoordinates(`
            -----
            -----
            --XXX
            --X--
        `);
        assert.deepEqual(rotateTetromino, expected)
    })
    it("T tetromino can not rotate, there is an element on the way", function (){
        let typeOfTetromino = "T";
        let phase = "left";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            --X--
            -XX--
            --X-- 
        `);
        let field = tetris.buildField(`
            -----
            -----
            ---X-
            -----
        `);
        let tTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetromino  = tTetromino.rotateTetromino(field)
        
        let expected = tetris.getCoordinates(`
            -----
            --X--
            -XX--
            --X-- 
        `);
        assert.deepEqual(rotateTetromino, expected)
    })
    it("T tetromino can not rotate, too left to the edge", function (){
        let typeOfTetromino = "T";
        let phase = "right";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            X----
            XX---
            X----
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let tTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetromino  = tTetromino.rotateTetromino(field)
        let expected = tetris.getCoordinates(`
            -----
            X----
            XX---
            X----
        `);
        assert.deepEqual(rotateTetromino, expected)
    })
    it("Z tetromino can not rotate, there is an element on the way", function (){
        let typeOfTetromino = "Z";
        let phase = "vertical";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            --X--
            -XX--
            -X---
        `);
        let field = tetris.buildField(`
            -----
            -----
            ---X-
            -----
        `);
        let zTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetromino = zTetromino.rotateTetromino(field)
        let expected = tetris.getCoordinates(`
            -----
            --X--
            -XX--
            -X---
        `);
        assert.deepEqual(rotateTetromino, expected)
    })
    it("Z tetromino can not rotate, too down to the edge", function (){
        let typeOfTetromino = "Z";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -----
            -XX--
            --XX-
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let zTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetromino = zTetromino.rotateTetromino(field)
        let expected = tetris.getCoordinates(`
            -----
            -----
            -XX--
            --XX-
        `);
        assert.deepEqual(rotateTetromino, expected)
    })
    it("S tetromino can not rotate, there is an element on the way", function (){
        let typeOfTetromino = "S";
        let phase = "vertical";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -X---
            -XX--
            --X--
        `);
        let field = tetris.buildField(`
            -----
            ---X-
            -----
            -----
        `);
        let sTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetromino = sTetromino.rotateTetromino(field)
        let expected = tetris.getCoordinates(`
            -----
            -X---
            -XX--
            --X--
        `);
        assert.deepEqual(rotateTetromino, expected)
    })
    it("S tetromino can not rotate, too right to the edge", function (){
        let typeOfTetromino = "S";
        let phase = "vertical";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            ---X-
            ---XX
            ----X
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let sTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetromino = sTetromino.rotateTetromino(field)
        let expected = tetris.getCoordinates(`
            -----
            ---X-
            ---XX
            ----X
        `);
        assert.deepEqual(rotateTetromino, expected)
    })
    it("I tetromino can not rotate, there is an element on the way", function (){
        let typeOfTetromino = "I";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
            --X--
            --X--
            --X--
            --X--
        `);
        let field = tetris.buildField(`
            -----
            -X---
            -----
            -----
        `);
        let iTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetromino = iTetromino.rotateTetromino(field)
        let expected = tetris.getCoordinates(`
            --X--
            --X--
            --X--
            --X--
        `);
        assert.deepEqual(rotateTetromino, expected)
    })

    it("I tetromino can not rotate, too down to the edge", function (){
        let typeOfTetromino = "I";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -----
            -XXXX
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let iTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetromino = iTetromino.rotateTetromino(field)
        let expected = tetris.getCoordinates(`
            -----
            -----
            -XXXX
            -----
        `);
        assert.deepEqual(rotateTetromino, expected)
    })
    it("O tetromino can not rotate, too down to the edge and field have element", function (){
        let typeOfTetromino = "O";
        let phase = "stable";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -----
            XX---
            XX---
        `);
        let field = tetris.buildField(`
            -----
            -----
            --X--
            -----
        `);
        let oTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetromino  = oTetromino.rotateTetromino(field)
        let expected = tetris.getCoordinates(`
            -----
            -----
            XX---
            XX---
        `);
        assert.deepEqual(rotateTetromino, expected)
    })
})