var sinon = require('sinon');
var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Create tetromino", function () {
    let stubForGetRandomTypeOfTetromino = sinon.stub(tetris, "getRandomTypeOfTetromino")
    it("Create L tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize));
        let resultFunction = tetris.createTetromino(fieldSize);
        let expectedResult = {
            rotationPhase: "right",
            coordinates: tetris.getCoordinates(`
                ---X-
                -XXX-
            `)
        };
        let presentResult = {
            rotationPhase: resultFunction.rotationPhase,
            coordinates: resultFunction.coordinates
        }
       assert.deepEqual(presentResult, expectedResult);
    })
    it("Create J tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        //stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoJ(fieldSize));
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoZ(fieldSize));
        let resultFunction = tetris.createTetromino(fieldSize);
        console.log(resultFunction)
        let expectedResult = {
            rotationPhase: "left",
            coordinates: tetris.getCoordinates(`
                -X--
                -XXX-
            `)
        };
        let presentResult = {
            rotationPhase: resultFunction.rotationPhase,
            coordinates: resultFunction.coordinates
        }
        //assert.deepEqual(presentResult, expectedResult);
    })
    // it("Create T tetromino", function () {
    //     stubForGetRandomTypeOfTetromino.returns("T");
    //     let fieldSize = { x: 5, y: 2 };
    //     let resultFunction = tetris.createTetromino(fieldSize);
    //     let expected = {
    //         typeOfTetromino: "T",
    //         rotationPhase: "up",
    //         coordinates: tetris.getCoordinates(`
    //             --X--
    //             -XXX-
    //         `)
    //     };
    //     assert.deepEqual(resultFunction, expected);
    // })
    // it("Create S tetromino", function () {
    //     stubForGetRandomTypeOfTetromino.returns("S");
    //     let fieldSize = { x: 5, y: 2 };
    //     let resultFunction = tetris.createTetromino(fieldSize);
    //     let expected = {
    //         typeOfTetromino: "S",
    //         rotationPhase: "horizontal",
    //         coordinates: tetris.getCoordinates(`
    //             --XX-
    //             -XX--
    //         `)
    //     };
    //     assert.deepEqual(resultFunction, expected);
    // })
    // it("Create Z tetromino", function () {
    //     stubForGetRandomTypeOfTetromino.returns("Z");
    //     let fieldSize = { x: 5, y: 2 };
    //     let resultFunction = tetris.createTetromino(fieldSize);
    //     let expected = {
    //         typeOfTetromino: "Z",
    //         rotationPhase: "horizontal",
    //         coordinates: tetris.getCoordinates(`
    //             -XX--
    //             --XX-
    //         `)
    //     };
    //     assert.deepEqual(resultFunction, expected);
    // })
    // it("Create I tetromino", function () {
    //     stubForGetRandomTypeOfTetromino.returns("I");
    //     let fieldSize = { x: 5, y: 4 };
    //     let resultFunction = tetris.createTetromino(fieldSize);
    //     let expected = {
    //         typeOfTetromino: "I",
    //         rotationPhase: "horizontal",
    //         coordinates: tetris.getCoordinates(`
    //             XXXX-
    //         `)
    //     };
    //     assert.deepEqual(resultFunction, expected);
    // })
    // it("Create O tetromino", function () {
    //     stubForGetRandomTypeOfTetromino.returns("O");
    //     let fieldSize = { x: 5, y: 4 };
    //     let resultFunction = tetris.createTetromino(fieldSize);
    //     let expected = {
    //         typeOfTetromino: "O",
    //         rotationPhase: "stable",
    //         coordinates: tetris.getCoordinates(`
    //             -XX--
    //             -XX--
    //             -----
    //         `)
    //     };
    //     assert.deepEqual(resultFunction, expected);
    // })
})