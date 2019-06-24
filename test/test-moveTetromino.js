var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Move tetromino", function () {
    it("Move L tetromino", function (){
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
        let lTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = lTetromino.moveTetromino(coordinates, field);
        let expected = tetris.getCoordinates(`
            -----
            -----
            ----X
            --XXX
        `)
    })
    it("L tetromino can not move, there is an element on the way", function (){
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
            --X--
        `);
        let lTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = lTetromino.moveTetromino(coordinates, field);
        let expected = tetris.getCoordinates(`
            -----
            ----X
            --XXX
            -----
        `)
    })
    it("Move J tetromino", function (){
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
        let jTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = jTetromino.moveTetromino(coordinates, field);
        let expected = tetris.getCoordinates(`
            -----
            -XX--
            -X---
            -X---
        `)
    })
    it("J tetromino can not move, there is an element on the way", function (){
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
        let lTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = jTetromino.moveTetromino(coordinates, field);
        let expected = tetris.getCoordinates(`
            -XX--
            -X---
            -X---
            -----
        `)
    })
})