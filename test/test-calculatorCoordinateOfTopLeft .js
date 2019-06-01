var assert = require('chai').assert;
var tetris = require('../tetris')
describe("Calculate coordinate of top-left corner ", function(){
    it("Arrays is many elements, coordinates next to each other and matches coordinate of one of the elements", function(){
        arrayOfCoordinates = tetris.getCoordinates(`
            -----
            --XX-
            --XX-
            -----
            -----
        `)
        let topLeftCorner = tetris.calculatorCoordinateOfTopLeft(arrayOfCoordinates)
        expectedResult = tetris.getCoordinates(`
            -----
            --X--
            -----
            -----
            -----
        `)
        assert.deepEqual(topLeftCorner, expectedResult);
    })
    it("Arrays is many elements, coordinates spaced apart and mathes coordinate of one of the elements", function(){
        arrayOfCoordinates = tetris.getCoordinates(`
            -----
            -X--X
            -----
            ---X-
            -----
        `)
        let topLeftCorner = tetris.calculatorCoordinateOfTopLeft(arrayOfCoordinates)
        expectedResult = tetris.getCoordinates(`
            -----
            -X---
            -----
            -----
            -----
        `)
        assert.deepEqual(topLeftCorner, expectedResult);
    })
    it("Array is 2 elements, coordinates spaced apart and not match coordinate of any of the elements", function(){
        arrayOfCoordinates = tetris.getCoordinates(`
            -----
            ---X-
            -----
            -X---
            -----
        `)
        let topLeftCorner = tetris.calculatorCoordinateOfTopLeft(arrayOfCoordinates)
        expectedResult = tetris.getCoordinates(`
            -----
            -X---
            -----
            -----
            -----
        `)
        assert.deepEqual(topLeftCorner, expectedResult);
    })
    it("Array is 2 elements, coordinates next to each other and matches coordinate of one of the elements", function(){
        arrayOfCoordinates = tetris.getCoordinates(`
            -----
            -X---
            -X---
            -----
            -----
        `)
        let topLeftCorner = tetris.calculatorCoordinateOfTopLeft(arrayOfCoordinates)
        expectedResult = tetris.getCoordinates(`
            -----
            -X---
            -----
            -----
            -----
        `)
        assert.deepEqual(topLeftCorner, expectedResult);
    })
    it("Array is 1 element", function(){
        arrayOfCoordinates = tetris.getCoordinates(`
            -------
            --X----
            -------
            -------
            -------
            
        `)
        let topLeftCorner = tetris.calculatorCoordinateOfTopLeft(arrayOfCoordinates)
        expectedResult = tetris.getCoordinates(`
            -------
            --X----
            -------
            -------
            -------
        `)
        assert.deepEqual(topLeftCorner, expectedResult);
    })
})
