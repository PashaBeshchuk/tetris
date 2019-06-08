var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Shift coordinates", function () {
    it("Coordinates is in place", function () {
        let coordinates = tetris.getCoordinates(`
            ----
            -XXX
            -X--
            ----
        `)
        let shift = { x: 0, y: 0 }
        let newPositionsCoordinates = tetris.shiftCoordinates(coordinates, shift)
        let expectedResult = tetris.getCoordinates(`
            ----
            -XXX
            -X--
            ----
        `)
    })

    it("Coordinate is negative", function () {
        let coordinates = tetris.getCoordinates(`
            ----
            -XXX
            -X--
            ----
        `)
        let shift = { x: -1, y: -2 }
        let newPositionsCoordinates = tetris.shiftCoordinates(coordinates, shift)
        let expectedResult = [{ x: 0, y: -1 }, { x: 0, y: 0 }, { x: 1, y: -1 }, { x: 2, y: -1 }]
    })
    it("Coordinates shift", function () {
        let coordinates = tetris.getCoordinates(`
            ----
            -XX-
            --X-
            --X-
            ----
        `)
        let shift = { x: 1, y: 1 }
        let newPositionsCoordinates = tetris.shiftCoordinates(coordinates, shift)
        let expectedResult = tetris.getCoordinates(`
            ----
            ----
            --XX
            ---X
            ---X
        `)
    })
})