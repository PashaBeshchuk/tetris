var sinon = require('sinon');
var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Create tetromino", function () {
    let stub = sinon.stub(tetris,"getRandomTypeOfTetromino")
    it("Create L tetromino", function () {
        stub.returns("L");
        let fieldSize = { x: 5, y: 2 };
        let resultFunction = tetris.createTetromino(fieldSize);
        let expected = {
            typeOfTetromino: "L",
            rotationPhase: "right",
            coordinates: tetris.getCoordinates(`
                ---X-
                -XXX-
            `)
        };
        assert.deepEqual(resultFunction, expected);
    })
    it("Create J tetromino", function () {
        stub.returns("J");
        let fieldSize = { x: 5, y: 2 };
        let resultFunction = tetris.createTetromino(fieldSize);
        let expected = {
            typeOfTetromino: "J",
            rotationPhase: "left",
            coordinates: tetris.getCoordinates(`
                -X--
                -XXX-
            `)
        };
        assert.deepEqual(resultFunction, expected);
    })
    it("Create T tetromino", function () {
        stub.returns("T");
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
        stub.returns("S");
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
        stub.returns("Z");
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
        stub.returns("I");
        let fieldSize = { x: 5, y: 4 };
        let resultFunction = tetris.createTetromino(fieldSize);
        let expected = {
            typeOfTetromino: "I",
            rotationPhase: "horizontal",
            coordinates: tetris.getCoordinates(`
                XXXX-
            `)
        };
        assert.deepEqual(resultFunction, expected);
    })
    it("Create O tetromino", function () {
        stub.returns("O");
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
        stub.restore()
        assert.deepEqual(resultFunction, expected);
    })
})