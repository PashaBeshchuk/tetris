var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Class tetramino", function (){
    class Tetromino {
        constructor(typeTetramoni, initialRotationPhase, initialCoordinates){
            this.typeTetramoni = typeTetramoni
            this.initialRotationPhase = initialRotationPhase;
            this.initialCoordinates = initialCoordinates;
        }
        _rotateTetromino(){
					
        }
        _incrementPhase(){
            
        }
        _finelRotationTetromino(){

        }
            
    }
    it("L-tetromino rotation", function(){
        let typeTetromino = "L";
        let coordinatesTetromino = tetris.getCoordinates(`
            -----
            ----X
            --XXX
            -----
        `);
        let phase = "rihgt";
        //let LTetromino = class Tetramino(typeTetramoni, phase, coordinatesTetromino);
    })
})