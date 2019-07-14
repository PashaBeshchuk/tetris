var sinon = require('sinon');
var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Create tetromino", function () {
    it("Create L tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        let resultFunction = tetris.createTetromino(fieldSize);
        let expected = {
            typeOfTetromino: "L",
            rotationPhase: "right",
            coordinates: tetris.getCoordinates(`
                -XXX-
                -X---
            `)
        };
        assert.deepEqual(resultFunction, expected);
    })
    it("Create J tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        let resultFunction = tetris.createTetromino(fieldSize);
        let expected = {
            typeOfTetromino: "J",
            rotationPhase: "left",
            coordinates: tetris.getCoordinates(`
                -XXX-
                ---X-
            `)
        };
        assert.deepEqual(resultFunction, expected);
    })
    it("Create T tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        let resultFunction = tetris.createTetromino(fieldSize);
        let expected = {
            typeOfTetromino: "T",
            rotationPhase: "up",
            coordinates: tetris.getCoordinates(`
                --X--
                -XXX-
            `)
        };
        assert.deepEqual(resultFunction, expected);
    })
    it("Create S tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        let resultFunction = tetris.createTetromino(fieldSize);
        let expected = {
            typeOfTetromino: "S",
            rotationPhase: "horizontal",
            coordinates: tetris.getCoordinates(`
                --XX-
                -XX--
            `)
        };
        assert.deepEqual(resultFunction, expected);
    })
    it("Create Z tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        let resultFunction = tetris.createTetromino(fieldSize);
        let expected = {
            typeOfTetromino: "Z",
            rotationPhase: "horizontal",
            coordinates: tetris.getCoordinates(`
                -XX--
                --XX-
            `)
        };
        assert.deepEqual(resultFunction, expected);
    })
    it("Create I tetromino", function () {
        let fieldSize = { x: 5, y: 4 };
        let resultFunction = tetris.createTetromino(fieldSize);
        let expected = {
            typeOfTetromino: "I",
            rotationPhase: "vertical",
            coordinates: tetris.getCoordinates(`
                --X--
                --X--
                --X--
                --X--
            `)
        };
        assert.deepEqual(resultFunction, expected);
    })
    it("Create O tetromino", function () {
        let fieldSize = { x: 5, y: 4 };
        let resultFunction = tetris.createTetromino(fieldSize);
        let expected = {
            typeOfTetromino: "O",
            rotationPhase: "stable",
            coordinates: tetris.getCoordinates(`
                -XX--
                -XX--
                -----
            `)
        };
        assert.deepEqual(resultFunction, expected);
    })
})