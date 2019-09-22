let assert = require('chai').assert;
let tetris = require('../tetris');
let sinon = require("sinon")
let stubForGetRandomTypeOfTetromino = sinon.stub(tetris, "getRandomTypeOfTetromino")
describe("Rotate all tetromino", function () {
    it("L-tetromino rotation", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let rotateTetrominoUp = typeOfTetromino.rotateTetromino(field);
        let rotateTetrominoLeft = typeOfTetromino.rotateTetromino(field);
        let rotateTetrominoDown = typeOfTetromino.rotateTetromino(field);
        let rotateTetrominoRight = typeOfTetromino.rotateTetromino(field);
        let expected = tetris.getCoordinates(`
            ---X-
            -XXX-
            -----
            -----
        `);
       assert.deepEqual(rotateTetrominoRight, expected);
    })

    it("J-tetromino rotation", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoJ(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let rotateTetrominoUp = typeOfTetromino.rotateTetromino(field);
        let rotateTetrominoLeft = typeOfTetromino.rotateTetromino(field);
        let rotateTetrominoDown = typeOfTetromino.rotateTetromino(field);
        let rotateTetrominoRight = typeOfTetromino.rotateTetromino(field);
        let expected = tetris.getCoordinates(`
            -X---
            -XXX-
            -----
            -----
        `);
        assert.deepEqual(rotateTetrominoRight, expected)
    })

    it("T-tetromino rotation", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoT(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let rotateTetrominoLeft = typeOfTetromino.rotateTetromino(field)
        let rotateTetrominoDown = typeOfTetromino.rotateTetromino(field)
        let rotateTetrominoRight = typeOfTetromino.rotateTetromino(field)
        let rotateTetrominoUp = typeOfTetromino.rotateTetromino(field)
        let expected = tetris.getCoordinates(`
            --X--
            -XXX-
            ----- 
            ----- 
        `);
        assert.deepEqual(rotateTetrominoUp, expected)
    })

    it("Z-tetromino rotation", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoZ(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let rotateTetrominoVertical = typeOfTetromino.rotateTetromino(field)
        let rotateTetrominoHorizontal = typeOfTetromino.rotateTetromino(field)
        let expected = tetris.getCoordinates(`
            -XX--
            --XX-
            -----
            -----
        `);
        assert.deepEqual(rotateTetrominoHorizontal, expected)
    })

    it("S-tetromino rotation", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoS(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let rotateTetrominoVertical = typeOfTetromino.rotateTetromino(field)
        let rotateTetrominoHorizontal = typeOfTetromino.rotateTetromino(field)
        let expected = tetris.getCoordinates(`
            --XX-
            -XX--
            -----
            -----
        `);
        assert.deepEqual(rotateTetrominoHorizontal, expected)
    });

    it("I-tetromino rotation", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoI(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let rotateTetromino = typeOfTetromino.rotateTetromino(field)
        let expected = tetris.getCoordinates(`
            XXXX-
            -----
            -----
            -----
        `);
       assert.deepEqual(rotateTetromino, expected)
    });

    it("O-tetromino rotation", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoO(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let rotateTetrominoFirst = typeOfTetromino.rotateTetromino(field)
        let rotateTetrominoSecond = typeOfTetromino.rotateTetromino(field)
        let rotateTetrominoThird = typeOfTetromino.rotateTetromino(field)
        let rotateTetrominoFourth = typeOfTetromino.rotateTetromino(field)
        let expected = tetris.getCoordinates(`
            -XX--
            -XX--
            -----
            -----
        `);
        assert.deepEqual(rotateTetrominoFourth, expected)
    }); 
})
describe("Tetramino can not rotate", function () {
    it("L tetromino can not rotate, there is an element on the way", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        let field = tetris.buildField(`
            -----
            -----
            --X--
            -----
        `);
        let rotateTetromino = typeOfTetromino.rotateTetromino(field);
        let expected = tetris.getCoordinates(`
            ---X-
            -XXX-
            -----
            -----
        `);
        assert.deepEqual(rotateTetromino, expected);
    })
    //тут можно переприсвоить typeOfTetromino.coordinates и попробовать сделать тест
    it("L tetromino can not rotate, too right to the edge", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.coordinates = tetris.getCoordinates(`
            -----
            ---XX
            ----X
            ----X
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let rotateTetromino = typeOfTetromino.rotateTetromino(field);
        let expected = tetris.getCoordinates(`
            -----
            ---XX
            ----X
            ----X
        `);
       assert.deepEqual(rotateTetromino, expected);
    })

    it("J tetromino can not rotate, there is an element on the way", function () {
        let fieldSize = { x:5, y:4 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoJ(fieldSize));
        let typeOfTetromino = tetris.createTetromino(fieldSize)
        typeOfTetromino.coordinates = tetris.getCoordinates(`
            -XX--
            -X---
            -X---
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            ---X-
            -----
        `);
        let rotateTetromino = typeOfTetromino.rotateTetromino(field);
        let expected = tetris.getCoordinates(`
            -XX--
            -X---
            -X---
            -----
        `);
        console.log(expected)
        console.log(rotateTetromino)
        //assert.deepEqual(rotateTetromino, expected)
    })

//     it("J tetromino can not rotate, too down to the edge", function () {
//         let typeOfTetromino = "J";
//         let phase = "left";
//         let coordinatesTetromino = tetris.getCoordinates(`
//             -----
//             -----
//             --XXX
//             --X--
//         `);
//         let field = tetris.buildField(`
//             -----
//             -----
//             -----
//             -----
//         `);
//         let jTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
//         let rotateTetromino = jTetromino.rotateTetromino(field);
//         let expected = tetris.getCoordinates(`
//             -----
//             -----
//             --XXX
//             --X--
//         `);
//         assert.deepEqual(rotateTetromino, expected)
//     })
//     it("T tetromino can not rotate, there is an element on the way", function () {
//         let typeOfTetromino = "T";
//         let phase = "left";
//         let coordinatesTetromino = tetris.getCoordinates(`
//             -----
//             --X--
//             -XX--
//             --X-- 
//         `);
//         let field = tetris.buildField(`
//             -----
//             -----
//             ---X-
//             -----
//         `);
//         let tTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
//         let rotateTetromino = tTetromino.rotateTetromino(field)

//         let expected = tetris.getCoordinates(`
//             -----
//             --X--
//             -XX--
//             --X-- 
//         `);
//         assert.deepEqual(rotateTetromino, expected)
//     })
//     it("T tetromino can not rotate, too left to the edge", function () {
//         let typeOfTetromino = "T";
//         let phase = "right";
//         let coordinatesTetromino = tetris.getCoordinates(`
//             -----
//             X----
//             XX---
//             X----
//         `);
//         let field = tetris.buildField(`
//             -----
//             -----
//             -----
//             -----
//         `);
//         let tTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
//         let rotateTetromino = tTetromino.rotateTetromino(field)
//         let expected = tetris.getCoordinates(`
//             -----
//             X----
//             XX---
//             X----
//         `);
//         assert.deepEqual(rotateTetromino, expected)
//     })
//     it("Z tetromino can not rotate, there is an element on the way", function () {
//         let typeOfTetromino = "Z";
//         let phase = "vertical";
//         let coordinatesTetromino = tetris.getCoordinates(`
//             -----
//             --X--
//             -XX--
//             -X---
//         `);
//         let field = tetris.buildField(`
//             -----
//             -----
//             ---X-
//             -----
//         `);
//         let zTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
//         let rotateTetromino = zTetromino.rotateTetromino(field)
//         let expected = tetris.getCoordinates(`
//             -----
//             --X--
//             -XX--
//             -X---
//         `);
//         assert.deepEqual(rotateTetromino, expected)
//     })
//     it("Z tetromino can not rotate, too down to the edge", function () {
//         let typeOfTetromino = "Z";
//         let phase = "horizontal";
//         let coordinatesTetromino = tetris.getCoordinates(`
//             -----
//             -----
//             -XX--
//             --XX-
//         `);
//         let field = tetris.buildField(`
//             -----
//             -----
//             -----
//             -----
//         `);
//         let zTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
//         let rotateTetromino = zTetromino.rotateTetromino(field)
//         let expected = tetris.getCoordinates(`
//             -----
//             -----
//             -XX--
//             --XX-
//         `);
//         assert.deepEqual(rotateTetromino, expected)
//     })
//     it("S tetromino can not rotate, there is an element on the way", function () {
//         let typeOfTetromino = "S";
//         let phase = "vertical";
//         let coordinatesTetromino = tetris.getCoordinates(`
//             -----
//             -X---
//             -XX--
//             --X--
//         `);
//         let field = tetris.buildField(`
//             -----
//             ---X-
//             -----
//             -----
//         `);
//         let sTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
//         let rotateTetromino = sTetromino.rotateTetromino(field)
//         let expected = tetris.getCoordinates(`
//             -----
//             -X---
//             -XX--
//             --X--
//         `);
//         assert.deepEqual(rotateTetromino, expected)
//     })
//     it("S tetromino can not rotate, too right to the edge", function () {
//         let typeOfTetromino = "S";
//         let phase = "vertical";
//         let coordinatesTetromino = tetris.getCoordinates(`
//             -----
//             ---X-
//             ---XX
//             ----X
//         `);
//         let field = tetris.buildField(`
//             -----
//             -----
//             -----
//             -----
//         `);
//         let sTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
//         let rotateTetromino = sTetromino.rotateTetromino(field)
//         let expected = tetris.getCoordinates(`
//             -----
//             ---X-
//             ---XX
//             ----X
//         `);
//         assert.deepEqual(rotateTetromino, expected)
//     })
//     it("I tetromino can not rotate, there is an element on the way", function () {
//         let typeOfTetromino = "I";
//         let phase = "horizontal";
//         let coordinatesTetromino = tetris.getCoordinates(`
//             --X--
//             --X--
//             --X--
//             --X--
//         `);
//         let field = tetris.buildField(`
//             -----
//             -X---
//             -----
//             -----
//         `);
//         let iTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
//         let rotateTetromino = iTetromino.rotateTetromino(field)
//         let expected = tetris.getCoordinates(`
//             --X--
//             --X--
//             --X--
//             --X--
//         `);
//         assert.deepEqual(rotateTetromino, expected)
//     })

//     it("I tetromino can not rotate, too down to the edge", function () {
//         let typeOfTetromino = "I";
//         let phase = "horizontal";
//         let coordinatesTetromino = tetris.getCoordinates(`
//             -----
//             -----
//             -XXXX
//             -----
//         `);
//         let field = tetris.buildField(`
//             -----
//             -----
//             -----
//             -----
//         `);
//         let iTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
//         let rotateTetromino = iTetromino.rotateTetromino(field)
//         let expected = tetris.getCoordinates(`
//             -----
//             -----
//             -XXXX
//             -----
//         `);
//         assert.deepEqual(rotateTetromino, expected)
//     })
//     it("O tetromino can not rotate, too down to the edge and field have element", function () {
//         let typeOfTetromino = "O";
//         let phase = "stable";
//         let coordinatesTetromino = tetris.getCoordinates(`
//             -----
//             -----
//             XX---
//             XX---
//         `);
//         let field = tetris.buildField(`
//             -----
//             -----
//             --X--
//             -----
//         `);
//         let oTetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinatesTetromino)
//         let rotateTetromino = oTetromino.rotateTetromino(field)
//         let expected = tetris.getCoordinates(`
//             -----
//             -----
//             XX---
//             XX---
//         `);
//         assert.deepEqual(rotateTetromino, expected)
//     })
})