var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Shift coordinate", function () {
    it("Coordinate is in place", function () {
        let coordinate = tetris.getCoordinates(`
            ---
            -X-
            ---
        `)
        let shift = { x: 0, y: 0 }
        let newPositionCoordinate = tetris.shiftCoordinate(coordinate, shift)
        let expectedResult = tetris.getCoordinates(`
            ---
            -X-
            ---
        `)
    })

    it("Coordinate is negative", function () {
        let coordinate = tetris.getCoordinates(`
            ---
            -X-
            ---
        `)
        let shift = { x: -1, y: -2 }
        let newPositionCoordinate = tetris.shiftCoordinate(coordinate, shift)
        let expectedResult = { x: 0, y: -1 }
    })

    it("Coordinate shift", function () {
        let coordinate = tetris.getCoordinates(`
            ----
            -X--
            ----
            ----
        `)
        let shift = { x: 1, y: 2 }
        let newPositionCoordinate = tetris.shiftCoordinate(coordinate, shift)
        let expectedResult = tetris.getCoordinates(`
            ----
            ----
            ----
            --X-
        `)
    })
})