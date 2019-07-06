var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Initial coordinates tetromino", function () {
    it("Initial coordinates L tetromino", function () {
        let typeOfTetromino = "L"
        let field = {x: 10, y:2}
        let coordinatesTetromino = tetris.initCoordinates(typeOfTetromino,field)
        let expected = tetris.getCoordinates(`
            ------X---
            ----XXX---
        `)
    })
    it("Initial coordinates J tetromino", function () {
        let typeOfTetromino = "J"
        let field = {x: 10, y:2}
        let coordinatesTetromino = tetris.initCoordinates(typeOfTetromino,field)
        let expected = tetris.getCoordinates(`
            ----X-----
            ----XXX---
        `)
    })
    it("Initial coordinates T tetromino", function () {
        let typeOfTetromino = "T"
        let field = {x: 10, y:2}
        let coordinatesTetromino = tetris.initCoordinates(typeOfTetromino,field)
        let expected = tetris.getCoordinates(`
            -----X----
            ----XXX---
        `)
    })
    it("Initial coordinates Z tetromino", function () {
        let typeOfTetromino = "Z"
        let field = {x: 10, y:2}
        let coordinatesTetromino = tetris.initCoordinates(typeOfTetromino,field)
        let expected = tetris.getCoordinates(`
            ----XX----
            -----XX---
        `)
    })
    it("Initial coordinates S tetromino", function () {
        let typeOfTetromino = "S"
        let field = {x: 10, y:2}
        let coordinatesTetromino = tetris.initCoordinates(typeOfTetromino,field)
        let expected = tetris.getCoordinates(`
            -----XX---
            ----XX----
        `)
    })
    it("Initial coordinates I tetromino", function () {
        let typeOfTetromino = "I"
        let field = {x: 10, y:2}
        let coordinatesTetromino = tetris.initCoordinates(typeOfTetromino,field)
        let expected = tetris.getCoordinates(`
            ---XXXX---
            ----------
        `)
    })
    it("Initial coordinates O tetromino", function () {
        let typeOfTetromino = "O"
        let field = {x: 10, y:2}
        let coordinatesTetromino = tetris.initCoordinates(typeOfTetromino,field)
        let expected = tetris.getCoordinates(`
            ----XX----
            ----XX----
        `)
    })
})