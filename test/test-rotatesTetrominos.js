var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Class tetramino", function (){
    class Tetromino {
        constructor(typeTetramoni, initialRotationPhase, initialCoordinates){
            this.typeTetramoni = typeTetramoni
            this.initialRotationPhase = initialRotationPhase;
            this.initialCoordinates = initialCoordinates;
        }
        rotateTetromino(typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates) {
            let shift = this.determineShift(typeOfTetromino, rotationPhaseOfTetromino)
            let pivot = this.calculatorCoordinateOfTopLeft(tetrominoCoordinates);
            let newCoordinates = this.rotatesArrayOfCoordinates(tetrominoCoordinates, pivot)
            let result = this.shiftCoordinates(newCoordinates, shift)
            return result.sort(this.orderCoordinates);
        }

        incrementPhase (typeOfTetromino, currentRotationPhaseOfTetromino) {
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
            let numberPhase = arrayPhases.indexOf(currentRotationPhaseOfTetromino)
            if (numberPhase !== arrayPhases.length - 1) {
                return arrayPhases[numberPhase + 1]
            } else {
                return arrayPhases[0]
            }
        }

        determineShift (typeOfTetromino, rotationPhaseOfTetromino) {
            if (typeOfTetromino === "O") {
                if (rotationPhaseOfTetromino === "stable") {
                    return { x: 0, y: 1 };
                }
            }
            if (typeOfTetromino === "J") {
                if (rotationPhaseOfTetromino === "up") {
                    return { x: 0, y: 1 };
                }
                if (rotationPhaseOfTetromino === "left") {
                    return { x: 0, y: 2 };
                }
                if (rotationPhaseOfTetromino === "down") {
                    return { x: 0, y: 1 };
                }
                if (rotationPhaseOfTetromino === "right") {
                    return { x: 0, y: 2 };
                }
            }
            if (typeOfTetromino === "L") {
                if (rotationPhaseOfTetromino === "up") {
                    return { x: 0, y: 1 };
                }
                if (rotationPhaseOfTetromino === "left") {
                    return { x: 0, y: 2 };
                }
                if (rotationPhaseOfTetromino === "down") {
                    return { x: 0, y: 1 };
                }
                if (rotationPhaseOfTetromino === "right") {
                    return { x: 0, y: 2 };
                }
            }
            if (typeOfTetromino === "T") {
                if (rotationPhaseOfTetromino === "up") {
                    return { x: 0, y: 2 };
                }
                if (rotationPhaseOfTetromino === "left") {
                    return { x: 0, y: 2 };
                }
                if (rotationPhaseOfTetromino === "down") {
                    return { x: 1, y: 1 };
                }
                if (rotationPhaseOfTetromino === "right") {
                    return { x: -1, y: 1 };
                }
            }
            if (typeOfTetromino === "S") {
                if (rotationPhaseOfTetromino === "horizontal") {
                    return { x: 0, y: 2 };
                }
                if (rotationPhaseOfTetromino === "vertical") {
                    return { x: 0, y: 1 };
                }
            }
            if (typeOfTetromino === "Z") {
                if (rotationPhaseOfTetromino === "horizontal") {
                    return { x: 0, y: 2 };
                }
                if (rotationPhaseOfTetromino === "vertical") {
                    return { x: 0, y: 1 };
                }
            }
            if (typeOfTetromino === "I") {
                if (rotationPhaseOfTetromino === "horizontal") {
                    return { x: 1, y: 2 };
                }
                if (rotationPhaseOfTetromino === "vertical") {
                    return { x: -1, y: 1 };
                }
            }
        } 
    }
    it("L-tetromino rotation", function(){
        let typeTetromino = "L";
        let phase = "rihgt";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            ----X
            --XXX
            -----
        `);
        let LTetromino = new Tetromino(typeTetromino, phase, coordinatesTetromino)
    })

    it("J-tetromino rotation", function(){
        let typeTetromino = "J";
        let phase = "rihgt";
        let coordinatesTetromino = tetris.getCoordinates(`
            -XXX-
            ---X-
            -----
            -----
        `);
        let JTetromino = new Tetromino(typeTetromino, phase, coordinatesTetromino)
    })

    it("T-tetromino rotation", function(){
        let typeTetromino = "T";
        let phase = "up";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            --X--
            -XXX-
            ----- 
        `);
        let TTetromino = new Tetromino(typeTetromino, phase, coordinatesTetromino)
    })

    it("Z-tetromino rotation", function(){
        let typeTetromino = "Z";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -XX--
            --XX-
            -----
        `);
        let ZTetromino = new Tetromino(typeTetromino, phase, coordinatesTetromino)
    })

    it("S-tetromino rotation", function(){
        let typeTetromino = "S";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            --XX-
            -XX--
            -----
        `);
        let STetromino = new Tetromino(typeTetromino, phase, coordinatesTetromino)
    })

    it("I-tetromino rotation", function(){
        let typeTetromino = "I";
        let phase = "horizontal";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -XXXX
            -----
            -----
        `);
        let TTetromino = new Tetromino(typeTetromino, phase, coordinatesTetromino)
    })

    it("O-tetromino rotation", function(){
        let typeTetromino = "O";
        let phase = "stable";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            -XX--
            -XX--
            -----
        `);
        let TTetromino = new Tetromino(typeTetromino, phase, coordinatesTetromino)
    })
})