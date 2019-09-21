let assert = require('chai').assert;
let tetris = require('../tetris');
let sinon = require("sinon")
let stubForGetRandomTypeOfTetromino = sinon.stub(tetris, "getRandomTypeOfTetromino")
describe("Initial coordinates tetromino field 10 x 2", function () {
    it("Initial coordinates L tetromino", function () {
        let fieldSize = { x: 10, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            ------X---
            ----XXX---
        `)
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates J tetromino", function () {
        let fieldSize = { x: 10, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoJ(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            ----X-----
            ----XXX---
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates T tetromino", function () {
        let fieldSize = { x: 10, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoT(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            -----X----
            ----XXX---
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates Z tetromino", function () {
        let fieldSize = { x: 10, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoZ(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            ----XX----
            -----XX---
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates S tetromino", function () {
        let fieldSize = { x: 10, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoS(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            -----XX---
            ----XX----
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates I tetromino", function () {
        let fieldSize = { x: 10, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoI(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            ---XXXX---
            ----------
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates O tetromino", function () {
        let fieldSize = { x: 10, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoO(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            ----XX----
            ----XX----
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
})

 describe("Initial coordinates tetromino field 6 x 2", function () {
    it("Initial coordinates L tetromino", function () {
        let fieldSize = { x: 6, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
           ----X-
           --XXX-
        `)
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates J tetromino", function () {
        let fieldSize = { x: 6, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoJ(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            --X---
            --XXX-
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates T tetromino", function () {
        let fieldSize = { x: 6, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoT(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            ---X--
            --XXX-
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates Z tetromino", function () {
        let fieldSize = { x: 6, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoZ(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            --XX--
            ---XX-
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates S tetromino", function () {
        let fieldSize = { x: 6, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoS(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            ---XX-
            --XX--
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates I tetromino", function () {
        let fieldSize = { x: 6, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoI(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            -XXXX-
            ------
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates O tetromino", function () {
        let fieldSize = { x: 6, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoO(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            --XX--
            --XX--
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
})
describe("Initial coordinates tetromino field 8 x 2", function () {
    it("Initial coordinates L tetromino", function () {
        let fieldSize = { x: 8, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            -----X--
            ---XXX--
        `)
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates J tetromino", function () {
        let fieldSize = { x: 8, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoJ(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            ---X----
            ---XXX--
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates T tetromino", function () {
        let fieldSize = { x: 8, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoT(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            ----X---
            ---XXX--
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates Z tetromino", function () {
        let fieldSize = { x: 8, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoZ(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            ---XX---
            ----XX--
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates S tetromino", function () {
        let fieldSize = { x: 8, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoS(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            ----XX--
            ---XX---
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates I tetromino", function () {
        let fieldSize = { x: 8, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoI(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            --XXXX--
            --------
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates O tetromino", function () {
        let fieldSize = { x: 8, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoO(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            ---XX---
            ---XX---
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
})
describe("Initial coordinates tetromino field 5 x 2", function () {
    it("Initial coordinates L tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
           ---X-
           -XXX-
        `)
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates J tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoJ(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            -X---
            -XXX-
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates T tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoT(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            --X--
            -XXX-
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates Z tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoZ(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            -XX--
            --XX-
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates S tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoS(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            --XX-
            -XX--
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates I tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoI(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            XXXX-
            -----
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
    it("Initial coordinates O tetromino", function () {
        let fieldSize = { x: 5, y: 2 };
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoO(fieldSize))
        let typeOfTetromino = tetris.createTetromino(fieldSize)  
        let coordinatesTetromino = typeOfTetromino.typeOfTetromino.initCoordinates(fieldSize)
        let expected = tetris.getCoordinates(`
            -XX--
            -XX--
        `);
        assert.deepEqual(coordinatesTetromino, expected)
    })
})