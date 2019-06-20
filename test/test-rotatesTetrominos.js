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
        let lTetromino = new Tetromino(typeOfTetromino, phase, coordinatesTetromino)
        let rotateTetromino = finalTetraminoRotate(lTetromino.typeOfTetromino, lTetromino.typeOfTetromino, lTetromino.initialCoordinates)
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
        let jTetromino = new Tetromino(typeOfTetromino, phase, coordinatesTetromino)
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
        let tTetromino = new Tetromino(typeOfTetromino, phase, coordinatesTetromino)
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
        let zTetromino = new Tetromino(typeOfTetromino, phase, coordinatesTetromino)
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
        let sTetromino = new Tetromino(typeOfTetromino, phase, coordinatesTetromino)
    })

    it("I-tetromino rotation", function () {
        let typeOfTetromino = "I";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -XXXX
            -----
            -----
        `);
        let iTetromino = new Tetromino(typeOfTetromino, phase, coordinatesTetromino)
    })

    it("O-tetromino rotation", function () {
        let typeOfTetromino = "O";
        let phase = "stable";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -XX--
            -XX--
            -----
        `);
        let oTetromino = new Tetromino(typeOfTetromino, phase, coordinatesTetromino)
    })
})