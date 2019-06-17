var assert = require('chai').assert;
var tetris = require('../tetris');
describe("rotate L-tetromino", function (){
    class Tetramino = {
        constructor(tetramino, phase, coordinates){
            this.typeTetramoni = tetramino
            this.initialRotationPhase = phase;
            this.initialCoordinates = coordinates;
        }
        tetris.rotateTetromino(){
					
        }
        tetris.incrementPhase(){
            
        }
        tetris.finelRotationTetromino(field){

        }
            
    }
    it("L-tetromino rotation", function(){
        let typeTetramoni = "L";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            ----X
            --XXX
            -----
        `);
        let phase = "rihgt";
        let L-tetromino = class Tetramino(typeTetramoni, phase, coordinatesTetromino);
    })
})