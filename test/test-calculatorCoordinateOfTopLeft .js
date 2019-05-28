var assert = require('chai').assert;
var tetris = require('../tetris')
describe("Coordinates next to each other and arrays is many elements, matches coordinate of one of the elements", function(){
    it("Arrays is many elements", function(){
        arrayOfCoordinates = tetris.getCoordinates(`
            -----
            --XX-
            ---X-
            ---X-
            -----
        `)
        let topLeftCorner = calculatorCoordinateOfTopLeft(arrayOfCoordinates)
        expectedResult = tetris.getCoordinates(`
            -----
            -X---
            -----
            -----
            -----
        `)
    })
})
describe("Coordinates spaced apart, is 2 elements, does not match coordinate of any of the elements", function(){
    it("Arrays is many elements", function(){
        arrayOfCoordinates = tetris.getCoordinates(`
            -----
            -----
            ----X
            -----
            ---X-
        `)
        let topLeftCorner = calculatorCoordinateOfTopLeft(arrayOfCoordinates)
        expectedResult = tetris.getCoordinates(`
            X----
            -----
            -----
            -----
            -----
        `)
    })

})
describe("Coordinates spaced apart, is 2 elements, does not match coordinate of any of the elements", function(){
    it("Arrays is many elements", function(){
        arrayOfCoordinates = tetris.getCoordinates(`
            -----
            -----
            ----X
            -----
            ---X-
        `)
        let topLeftCorner = calculatorCoordinateOfTopLeft(arrayOfCoordinates)
        expectedResult = tetris.getCoordinates(`
            X----
            -----
            -----
            -----
            -----
        `)
})

describe("Coordinates spaced apart, is 2 elements, does not match coordinate of any of the elements", function(){
    it("Arrays is many elements", function(){
        arrayOfCoordinates = tetris.getCoordinates(`
            -------
            -------
            -------
            ------X
            -------
            
        `)
        let topLeftCorner = calculatorCoordinateOfTopLeft(arrayOfCoordinates)
        expectedResult = tetris.getCoordinates(`
            X------
            -------
            -------
            -------
            -------
        `)
    })
})

