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
    it("Move T tetromino", function (){
        let coordinates = tetris.getCoordinates(`
            --X--
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
        let tTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = tTetromino.moveTetromino(coordinates, field);
        let expected = tetris.getCoordinates(`
            -----
            --X--
            -XX--
            --X-- 
        `)
    })
    it("T tetromino can not move, there is an element on the way", function (){
        let coordinates = tetris.getCoordinates(`
            --X--
            -XX--
            --X--
            -----
        `)
        let field = tetris.buildField(`
            -----
            -----
            -X---
            -----
        `);
        let tTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = tTetromino.moveTetromino(coordinates, field);
        let expected = tetris.getCoordinates(`
            --X--
            -XX--
            --X--
            -----
        `)
    })
    it("Move Z tetromino", function (){
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
        let zTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = zTetromino.moveTetromino(coordinates, field);
        let expected = tetris.getCoordinates(`
            -----
            -XX--
            --XX-
            -----
        `)
    })
    it("Z tetromino can not move, there is an element on the way", function (){
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
        let zTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = zTetromino.moveTetromino(coordinates, field);
        let expected = tetris.getCoordinates(`
            -XX--
            --XX-
            -----
            -----
        `)
    })
    it("Move S tetromino", function (){
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
        let sTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = sTetromino.moveTetromino(coordinates, field);
        let expected = tetris.getCoordinates(`
            -----
            -X---
            -XX--
            --X--
        `)
    })
    it("S tetromino can not move, there is an element on the way", function (){
        let coordinates = tetris.getCoordinates(`
            -X---
            -XX--
            --X--
            -----
        `)
        let field = tetris.buildField(`
            -----
            -----
            -X---
            -----
        `);
        let sTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = sTetromino.moveTetromino(coordinates, field);
        let expected = tetris.getCoordinates(`
            -X---
            -XX--
            --X--
            -----
        `)
    })
    it("Move I tetromino", function (){
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
        let iTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = iTetromino.moveTetromino(coordinates, field);
        let expected = tetris.getCoordinates(`
            -----
            -----
            -XXXX
            -----
        `)
    })
    it("I tetromino can not move, there is an element on the way", function (){
        let coordinates = tetris.getCoordinates(`
            -----
            -XXXX
            -----
            -----
        `)
        let field = tetris.buildField(`
            -----
            -----
            ----X
            -----
        `);
        let iTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = iTetromino.moveTetromino(coordinates, field);
        let expected = tetris.getCoordinates(`
            -----
            -XXXX
            -----
            -----
        `)
    })
    it("Move O tetromino", function (){
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
        let oTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = oTetromino.moveTetromino(coordinates, field);
        let expected = tetris.getCoordinates(`
            -----
            -XX--
            -XX--
            -----
        `)
    })
    it("O tetromino can not move, there is an element on the way", function (){
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
        let oTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino);
        let resultMoveTetromino = oTetromino.moveTetromino(coordinates, field);
        let expected = tetris.getCoordinates(`
            -XX--
            -XX--
            -----
            -----
        `)
    })
})