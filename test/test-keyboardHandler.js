var sinon = require('sinon');
var assert = require('chai').assert;
var tetris = require('../tetris');
describe("The function that handles the keyboard", function () {
    let stubForGetRandomTypeOfTetromino = sinon.stub(tetris, "getRandomTypeOfTetromino");
    it("Right key is pressed", function () {
        stubForGetRandomTypeOfTetromino.returns("L")
        let kyeCode = "keyCodeRightButton";
        let fieldSize = { x:5, y:3 }
        let classTetris = new tetris.Tetris(fieldSize)
        let resultKeyboardHandler = tetris.keyboardHandler(kyeCode, classTetris)
        let expected = tetris.getCoordinates(`
            ----X
            --XXX
            -----
        `)
        assert.deepEqual(classTetris.tetromino.coordinates, expected)
    })
    it("Left key is pressed", function () {
        stubForGetRandomTypeOfTetromino.returns("L")
        let kyeCode = "keyCodeLeftButton";
        let fieldSize = { x:5, y:3 }
        let classTetris = new tetris.Tetris(fieldSize)
        let resultKeyboardHandler = tetris.keyboardHandler(kyeCode, classTetris)
        let expected = tetris.getCoordinates(`
            --X--
            XXX--
            -----
        `)
        assert.deepEqual(classTetris.tetromino.coordinates, expected)
    })
    it("Down key is pressed", function () {
        stubForGetRandomTypeOfTetromino.returns("L")
        let kyeCode = "keyCodeDownButton";
        let fieldSize = { x:5, y:3 }
        let classTetris = new tetris.Tetris(fieldSize)
        let resultKeyboardHandler = tetris.keyboardHandler(kyeCode, classTetris)
        let expected = tetris.getCoordinates(`
            -----
            ---X-
            -XXX-
        `)
        assert.deepEqual(classTetris.tetromino.coordinates, expected)
    })
    it("Up key is pressed", function () {
        stubForGetRandomTypeOfTetromino.returns("L")
        let kyeCode = "keyCodeUpButton";
        let fieldSize = { x:5, y:3 }
        let classTetris = new tetris.Tetris(fieldSize)
        let resultKeyboardHandler = tetris.keyboardHandler(kyeCode, classTetris)
        let expected = tetris.getCoordinates(`
            -XX--
            --X--
            --X--
        `)
        assert.deepEqual(classTetris.tetromino.coordinates, expected)
    })
})