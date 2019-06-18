var assert = require('chai').assert;
var tetris = require('../tetris');
describe("rotate L-tetromino", function (){
    class Tetromino {
        constructor(tetramino, phase, coordinates){
            this.typeTetramoni = tetramino
            this.initialRotationPhase = phase;
            this.initialCoordinates = coordinates;
        }
        _rotateTetromino(){
					
        }
        _incrementPhase(){
            
        }
        _finelRotationTetromino(field){

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