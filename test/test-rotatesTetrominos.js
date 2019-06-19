var assert = require('chai').assert;
var tetris = require('../tetris');
class Tetromino {
    constructor(typeTetromino, initialRotationPhase, initialCoordinates) {
        this.typeTetromino = typeTetromino
        this.initialRotationPhase = initialRotationPhase;
        this.initialCoordinates = initialCoordinates;
    }
    tetris.rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates) {
        let shift = this.determineShift(typeOfTetromino, rotationPhaseOfTetromino)
        let pivot = this.calculatorCoordinateOfTopLeft(tetrominoCoordinates);
        let newCoordinates = this.rotatesArrayOfCoordinates(tetrominoCoordinates, pivot)
        let result = this.shiftCoordinates(newCoordinates, shift)
        return result.sort(this.orderCoordinates);
    }

    tetris.incrementPhase(typeOfTetromino, currentRotationPhaseOfTetromino) {
        let arrayPhases = [];
        if (typeOfTetromino === "I" || typeOfTetromino === "S" || typeOfTetromino === "Z") {
            arrayPhases = ["vertical", "horizontal"];
        }
        if (typeOfTetromino === "L" || typeOfTetromino === "J" || typeOfTetromino === "T") {
            arrayPhases = ["up", "left", "down", "right"];
        }
        if (typeOfTetromino === "O") {
            arrayPhases = ["stable"];
        }
        let phaseNumber = arrayPhases.indexOf(currentRotationPhaseOfTetromino)
        if (phaseNumber !== arrayPhases.length - 1) {
            return arrayPhases[phaseNumber + 1]
        } else {
            return arrayPhases[0]
        }
    }
}

describe("Class tetramino", function () {

    it("L-tetromino rotation", function () {
        let typeTetromino = "L";
        let phase = "rihgt";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            ----X
            --XXX
            -----
        `);
        let lTetromino = new Tetromino(typeTetromino, phase, coordinatesTetromino)
    })

    it("J-tetromino rotation", function () {
        let typeTetromino = "J";
        let phase = "rihgt";
        let coordinatesTetromino = tetris.getCoordinates(`
            -XXX-
            ---X-
            -----
            -----
        `);
        let jTetromino = new Tetromino(typeTetromino, phase, coordinatesTetromino)
    })

    it("T-tetromino rotation", function () {
        let typeTetromino = "T";
        let phase = "up";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            --X--
            -XXX-
            ----- 
        `);
        let tTetromino = new Tetromino(typeTetromino, phase, coordinatesTetromino)
    })

    it("Z-tetromino rotation", function () {
        let typeTetromino = "Z";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -XX--
            --XX-
            -----
        `);
        let zTetromino = new Tetromino(typeTetromino, phase, coordinatesTetromino)
    })

    it("S-tetromino rotation", function () {
        let typeTetromino = "S";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            --XX-
            -XX--
            -----
        `);
        let sTetromino = new Tetromino(typeTetromino, phase, coordinatesTetromino)
    })

    it("I-tetromino rotation", function () {
        let typeTetromino = "I";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -XXXX
            -----
            -----
        `);
        let iTetromino = new Tetromino(typeTetromino, phase, coordinatesTetromino)
    })

    it("O-tetromino rotation", function () {
        let typeTetromino = "O";
        let phase = "stable";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -XX--
            -XX--
            -----
        `);
        let oTetromino = new Tetromino(typeTetromino, phase, coordinatesTetromino)
    })
})