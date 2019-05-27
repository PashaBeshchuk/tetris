var assert = require('chai').assert;
var tetris = require('../tetris')
describe("Incoming array is empty", function () {
    it("Array is empty", function () {
        let arrayOfCoordinates = [];
        let pivot = { x: 1, y: 1 }
        let stepArrayCoordinates = tetris.rotatesArrayOfCoordinates(arrayOfCoordinates, pivot[0]);
        let expectedResult = [];
        assert.deepEqual(stepArrayCoordinates, expectedResult);
    });
});

describe("Incoming array has 1 element", function () {
    it("Next coordinate will be beyond the field", function () {
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

        let stepArrayCoordinates = tetris.rotatesArrayOfCoordinates(arrayOfCoordinates, pivot[0]);
        let expectedResult = [{ x: -1, y: 2 }];
        assert.deepEqual(stepArrayCoordinates, expectedResult);
    });

    it("Coordinate move down form pivot", function () {
        let arrayOfCoordinates = [{ x: -1, y: 2 }];
        let pivot = tetris.getCoordinates(`
            ----
            ----
            -X--
            ----
            ----
        `);
        let stepArrayCoordinates = tetris.rotatesArrayOfCoordinates(arrayOfCoordinates, pivot[0]);
        let expectedResult = tetris.getCoordinates(`
            ----
            ----
            ----
            ----
            -X--
        `);
        assert.deepEqual(stepArrayCoordinates, expectedResult);
    });

    it("Coordinate move left form pivot", function () {
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
        let stepArrayCoordinates = tetris.rotatesArrayOfCoordinates(arrayOfCoordinates, pivot[0]);
        let expectedResult = tetris.getCoordinates(`
            ----
            ----
            ---X
            ----
            ----
        `);
        assert.deepEqual(stepArrayCoordinates, expectedResult);
    });

    it("Coordinate move top form pivot", function () {
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
        let stepArrayCoordinates = tetris.rotatesArrayOfCoordinates(arrayOfCoordinates, pivot[0]);
        let expectedResult = tetris.getCoordinates(`
            -X--
            ----
            ----
            ----
            ----
        `);
        assert.deepEqual(stepArrayCoordinates, expectedResult);
    });
});

describe("Incoming array has more than 1 element and that are next to each other", function () {
    it("Next coordinates will be beyond the field", function () {
        let arrayOfCoordinates = tetris.getCoordinates(`
            -XX-
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
        let stepArrayCoordinates = tetris.rotatesArrayOfCoordinates(arrayOfCoordinates, pivot[0]);
        let expectedResult = [{ x: -1, y: 1 }, { x: -1, y: 2 }];
        assert.deepEqual(stepArrayCoordinates, expectedResult);
    });

    it("Coordinates move down form pivot", function () {
        let arrayOfCoordinates = [{ x: -1, y: 1 }, { x: -1, y: 2 }];
        let pivot = tetris.getCoordinates(`
            ----
            ----
            -X--
            ----
            ----
        `);
        let stepArrayCoordinates = tetris.rotatesArrayOfCoordinates(arrayOfCoordinates, pivot[0]);
        let expectedResult = tetris.getCoordinates(`
            ----
            ----
            ----
            ----
            XX--
        `);
        assert.deepEqual(stepArrayCoordinates, expectedResult);
    });

    it("Coordinates move left form pivot", function () {
        let arrayOfCoordinates = tetris.getCoordinates(`
            ----
            ----
            ----
            ----
            XX--
        `);

        let pivot = tetris.getCoordinates(`
            ----
            ----
            -X--
            ----
            ----
        `);
        let stepArrayCoordinates = tetris.rotatesArrayOfCoordinates(arrayOfCoordinates, pivot[0]);
        let expectedResult = tetris.getCoordinates(`
            ----
            ----
            ---X
            ---X
            ----
        `);
        assert.deepEqual(stepArrayCoordinates, expectedResult);
    });

    it("Coordinates move top form pivot", function () {
        let arrayOfCoordinates = tetris.getCoordinates(`
            ----
            ----
            ---X
            ---X
            ----
        `);

        let pivot = tetris.getCoordinates(`
            ----
            ----
            -X--
            ----
            ----
        `);
        let stepArrayCoordinates = tetris.rotatesArrayOfCoordinates(arrayOfCoordinates, pivot[0]);
        let expectedResult = tetris.getCoordinates(`
            -XX-
            ----
            ----
            ----
            ----
        `);
        assert.deepEqual(stepArrayCoordinates, expectedResult);
    });
});

describe("Incoming array has more than 1 element and that are next to each other", function () {
    it("Coordinates move left form pivot", function () {
        let arrayOfCoordinates = tetris.getCoordinates(`
            -------
            -------
            -------
            -------
            -----X-
            ---XX--
        `);

        let pivot = tetris.getCoordinates(`
            -------
            -------
            -------
            ---X---
            -------
            -------
            
        `);
        let stepArrayCoordinates = tetris.rotatesArrayOfCoordinates(arrayOfCoordinates, pivot[0]);
        let expectedResult = tetris.getCoordinates(`
            -------
            ----X--
            -----X-
            -----X-
            -------
            -------
        `);
        assert.deepEqual(stepArrayCoordinates, expectedResult);
    });

    it("Coordinate move top form pivot", function () {
        let arrayOfCoordinates = tetris.getCoordinates(`
            -------
            ----X--
            -----X-
            -----X-
            -------
            -------
        `);

        let pivot = tetris.getCoordinates(`
            -------
            -------
            -------
            ---X---
            -------
            -------
            
        `);
        let stepArrayCoordinates = tetris.rotatesArrayOfCoordinates(arrayOfCoordinates, pivot[0]);
        let expectedResult = tetris.getCoordinates(`
            -------
            --XX---
            -X-----
            -------
            -------
            -------
        `);
        assert.deepEqual(stepArrayCoordinates, expectedResult);
    });
    it("Coordinate move right form pivot", function () {
        let arrayOfCoordinates = tetris.getCoordinates(`
            -------
            --XX---
            -X-----
            -------
            -------
            -------
        `);

        let pivot = tetris.getCoordinates(`
            -------
            -------
            -------
            ---X---
            -------
            -------
            
        `);
        let stepArrayCoordinates = tetris.rotatesArrayOfCoordinates(arrayOfCoordinates, pivot[0]);
        let expectedResult = tetris.getCoordinates(`
            -------
            -------
            -------
            -X-----
            -X-----
            --X----
        `);
        assert.deepEqual(stepArrayCoordinates, expectedResult);
    });
    it("Coordinate move down form pivot", function () {
        let arrayOfCoordinates = tetris.getCoordinates(`
            -------
            -------
            -------
            -X-----
            -X-----
            --X----
        `);

        let pivot = tetris.getCoordinates(`
            -------
            -------
            -------
            ---X---
            -------
            -------
            
        `);
        let stepArrayCoordinates = tetris.rotatesArrayOfCoordinates(arrayOfCoordinates, pivot[0]);
        let expectedResult = tetris.getCoordinates(`
            -------
            -------
            -------
            -------
            -----X-
            ---XX--
        `);
        assert.deepEqual(stepArrayCoordinates, expectedResult);
    });
})