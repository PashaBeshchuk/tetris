var assert = require('chai').assert;
var tetris = require('../tetris')
describe("Incoming array is empty", function () {
    if ("Array is empty", function () {
        let arrayOfCoordinates = [];
        let pivot = tetris.getCoordinates(`
            -----
            -----
            -----
            -X---
            -----
            -----
            -----
        `);
        let stepArrayCoordinates = tetris.rotatesArrayOfCoordinates(arrayOfCoordinates, pivot);
        let expectedResult = [];
        assert.deepEqual(stepElementTetromino, expectedResult);
    });
});

describe("Incoming array has 1 element", function () {
    it("Next coordinates will be beyond the field", function () {
        let arrayOfCoordinates = tetris.getCoordinates(`
            -X--
            ----
            ----
            ----
            ----
        `);
        let pivot = tetris.getCoordinates(`
            ----
            ----
            -X--
            ----
            ----
        `);

        let stepArrayCoordinates = tetris.rotatesArrayOfCoordinates(arrayOfCoordinates, pivot);
        let expectedResult = [{ x: -1, y: 2 }];
        assert.deepEqual(stepElementTetromino, expectedResult);
    });

    it("Coordinates move down form pivot", function () {
        let arrayOfCoordinates = [{ x: -1, y: 2 }];
        let pivot = tetris.getCoordinates(`
            ----
            ----
            -X--
            ----
            ----
        `);
        let stepArrayCoordinates = tetris.rotatesArrayOfCoordinates(arrayOfCoordinates, pivot);
        let expectedResult = tetris.getCoordinates(`
            ----
            ----
            ----
            ----
            -X--
        `);
        assert.deepEqual(stepElementTetromino, expectedResult);
    });

    it("Coordinates move left form pivot", function () {
        let arrayOfCoordinates = tetris.getCoordinates(`
            ----
            ----
            ----
            ----
            -X--
        `);

        let pivot = tetris.getCoordinates(`
            ----
            ----
            -X--
            ----
            ----
        `);
        let stepArrayCoordinates = tetris.rotatesArrayOfCoordinates(arrayOfCoordinates, pivot);
        let expectedResult = tetris.getCoordinates(`
            ----
            ----
            ---X
            ----
            ----
        `);
        assert.deepEqual(stepElementTetromino, expectedResult);
    });

    it("Coordinates move top form pivot", function (){
        let arrayOfCoordinates = tetris.getCoordinates(`
            ----
            ----
            ---X
            ----
            ----
        `);

        let pivot = tetris.getCoordinates(`
            ----
            ----
            -X--
            ----
            ----
        `);
        let stepArrayCoordinates = tetris.rotatesArrayOfCoordinates(arrayOfCoordinates, pivot);
        let expectedResult = tetris.getCoordinates(`
            -X--
            ----
            ----
            ----
            ----
        `);
        assert.deepEqual(stepElementTetromino, expectedResult);
    })
});