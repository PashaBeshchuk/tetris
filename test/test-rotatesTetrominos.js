var assert = require('chai').assert;
var tetris = require('../tetris');

describe("Class tetramino", function () {

    it("L-tetromino rotation", function () {
        let typeOfTetromino = "L";
        let phase = "rihgt";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            ----X
            --XXX
            -----
        `);
        let field = tetris.buildField(`
            ----
            ----
            ----
            ----
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
        let phase = "rihgt";
        let coordinatesTetromino = tetris.getCoordinates(`
            -XXX-
            ---X-
            -----
            -----
        `);
        let field = tetris.buildField(`
            ----
            ----
            ----
            ----
        `);
        let jTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetrominoUp    = tetris.rotateTetromino(field);
        let rotateTetrominoLeft  = tetris.rotateTetromino(field);
        let rotateTetrominoDown  = tetris.rotateTetromino(field);
        let rotateTetrominoRight = tetris.rotateTetromino(field);
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
        let tTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetrominoLeft  = tetris.rotateTetromino(tTetromino.typeOfTetromino, tTetromino.typeOfTetromino, tTetromino.initialCoordinates)
        let rotateTetrominoDown  = tetris.rotateTetromino(tTetromino.typeOfTetromino, tTetromino.typeOfTetromino, tTetromino.initialCoordinates)
        let rotateTetrominoRight = tetris.rotateTetromino(tTetromino.typeOfTetromino, tTetromino.typeOfTetromino, tTetromino.initialCoordinates)
        let rotateTetrominoUp    = tetris.rotateTetromino(tTetromino.typeOfTetromino, tTetromino.typeOfTetromino, tTetromino.initialCoordinates)
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
        let zTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetrominoVertical    = tetris.rotateTetromino(zTetromino.typeOfTetromino, zTetromino.typeOfTetromino, zTetromino.initialCoordinates)
        let rotateTetrominoHorizontal  = tetris.rotateTetromino(zTetromino.typeOfTetromino, zTetromino.typeOfTetromino, zTetromino.initialCoordinates)
        let rotateTetrominoVerticalSecond    = tetris.rotateTetromino(zTetromino.typeOfTetromino, zTetromino.typeOfTetromino, zTetromino.initialCoordinates)
        let rotateTetrominoHorizontalSecond  = tetris.rotateTetromino(zTetromino.typeOfTetromino, zTetromino.typeOfTetromino, zTetromino.initialCoordinates)
        let expected = tetris.getCoordinates(`
            -----
            -XX--
            --XX-
            -----
        `);
        assert.deepEqual(rotateTetrominoHorizontalSecond, expected)
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
        let sTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetrominoVertical    = tetris.rotateTetromino(sTetromino.typeOfTetromino, sTetromino.typeOfTetromino, sTetromino.initialCoordinates)
        let rotateTetrominoHorizontal  = tetris.rotateTetromino(sTetromino.typeOfTetromino, sTetromino.typeOfTetromino, sTetromino.initialCoordinates)
        let rotateTetrominoVerticalSecond    = tetris.rotateTetromino(sTetromino.typeOfTetromino, sTetromino.typeOfTetromino, sTetromino.initialCoordinates)
        let rotateTetrominoHorizontalSecond  = tetris.rotateTetromino(sTetromino.typeOfTetromino, sTetromino.typeOfTetromino, sTetromino.initialCoordinates)
        let expected = tetris.getCoordinates(`
            -----
            --XX-
            -XX--
            -----
        `);
        assert.deepEqual(rotateTetrominoHorizontalSecond, expected)
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
        let iTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetrominoVertical    = tetris.rotateTetromino(iTetromino.typeOfTetromino, iTetromino.typeOfTetromino, iTetromino.initialCoordinates)
        let rotateTetrominoHorizontal  = tetris.rotateTetromino(iTetromino.typeOfTetromino, iTetromino.typeOfTetromino, iTetromino.initialCoordinates)
        let rotateTetrominoVerticalSecond    = tetris.rotateTetromino(iTetromino.typeOfTetromino, iTetromino.typeOfTetromino, iTetromino.initialCoordinates)
        let rotateTetrominoHorizontalSecond  = tetris.rotateTetromino(iTetromino.typeOfTetromino, iTetromino.typeOfTetromino, iTetromino.initialCoordinates)
        let expected = tetris.getCoordinates(`
            -----
            -XXXX
            -----
            -----
        `);
        assert.deepEqual(rotateTetrominoHorizontalSecond, expected)
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
        let oTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetrominoFirst  = tetris.rotateTetromino(iTetromino.typeOfTetromino, iTetromino.typeOfTetromino, iTetromino.initialCoordinates)
        let rotateTetrominoSecond = tetris.rotateTetromino(iTetromino.typeOfTetromino, iTetromino.typeOfTetromino, iTetromino.initialCoordinates)
        let rotateTetrominoThird  = tetris.rotateTetromino(iTetromino.typeOfTetromino, iTetromino.typeOfTetromino, iTetromino.initialCoordinates)
        let rotateTetrominoFourth  = tetris.rotateTetromino(iTetromino.typeOfTetromino, iTetromino.typeOfTetromino, iTetromino.initialCoordinates)
        let expected = tetris.getCoordinates(`
            -----
            -XX--
            -XX--
            -----
        `);
        assert.deepEqual(rotateTetrominoFourth, expected)
    });
})