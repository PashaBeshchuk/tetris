var sinon = require('sinon');
var assert = require('chai').assert;
var tetris = require('../tetris');
var init = require('../init');
describe("All moves tetromino", function () {
    let stubForGetRandomTypeOfTetromino = sinon.stub(tetris, "getRandomTypeOfTetromino");
    let callback = sinon.spy()
    it("Mini Game", function () {
        stubForGetRandomTypeOfTetromino.returns("O")
        let fieldSize = { x: 8, y: 6 }
        let gameTetris = new tetris.Tetris(fieldSize, callback)
        gameTetris.moveLeft()
        let expectedMoveRightOTetromino = tetris.getCoordinates(`
            --XX----
            --XX----
            --------
            --------
            --------
            --------
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedMoveRightOTetromino)
        gameTetris.tick()
        gameTetris.tick()
        gameTetris.tick()
        gameTetris.tick()
        let expectedWhenCantMoveOTetromino = tetris.getCoordinates(`
            --------
            --------
            --------
            --------
            --XX----
            --XX----
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedWhenCantMoveOTetromino)
        stubForGetRandomTypeOfTetromino.returns("J")
        gameTetris.tick()
        let expectedField = tetris.buildField(`
            --------
            --------
            --------
            --------
            --XX----
            --XX----
        `)
        assert.deepEqual(gameTetris.field.field, expectedField)
        let expectedNewTetrominoJ = tetris.getCoordinates(`
            ---X----
            ---XXX--
            --------
            --------
            --------
            --------
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedNewTetrominoJ)
        gameTetris.rotate()
        gameTetris.moveRight()
        gameTetris.moveRight()
        gameTetris.moveRight()
        gameTetris.moveDown()
        gameTetris.moveDown()
        gameTetris.moveDown()
        let expectedRotateMoveRightAndMovesDownJ = tetris.getCoordinates(`
            --------
            --------
            --------
            -------X
            -------X
            ------XX
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedRotateMoveRightAndMovesDownJ)
        stubForGetRandomTypeOfTetromino.returns("S")
        gameTetris.tick()
        let expectedFieldAddJ = tetris.buildField(`
            --------
            --------
            --------
            -------X
            --XX---X
            --XX--XX
        `)
        assert.deepEqual(gameTetris.field.field, expectedFieldAddJ)
        let expectedNewTetrominoS = tetris.getCoordinates(`
            ----XX--
            ---XX---
            --------
            --------
            --------
            --------
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedNewTetrominoS)
        gameTetris.moveRight()
        gameTetris.tick()
        gameTetris.tick()
        gameTetris.tick()
        gameTetris.tick()
        let expectedMoveRightTicksS = tetris.getCoordinates(`
            --------
            --------
            --------
            --------
            -----XX-
            ----XX--
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedMoveRightTicksS)
        stubForGetRandomTypeOfTetromino.returns("L")
        gameTetris.tick()
        let expectedFieldAddS = tetris.buildField(`
            --------
            --------
            --------
            -------X
            --XX-XXX
            --XXXXXX
        `)
        assert.deepEqual(gameTetris.field.field, expectedFieldAddS)
        let expectedNewTetrominoL = tetris.getCoordinates(`
            -----X--
            ---XXX--
            --------
            --------
            --------
            --------
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedNewTetrominoL)
        gameTetris.rotate()
        gameTetris.rotate()
        gameTetris.rotate()
        gameTetris.moveLeft()
        gameTetris.moveLeft()
        gameTetris.moveLeft()
        gameTetris.moveLeft()
        gameTetris.tick()
        gameTetris.tick()
        gameTetris.tick()
        let expectedRotatesMovesLeftAndTickL = tetris.getCoordinates(`
            --------
            --------
            --------
            X-------
            X-------
            XX------
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedRotatesMovesLeftAndTickL)
        stubForGetRandomTypeOfTetromino.returns("Z")
        gameTetris.tick()
        let expectedFieldAddL = tetris.buildField(`
            --------
            --------
            --------
            --------
            X------X
            X-XX-XXX
        `)
        assert.deepEqual(gameTetris.field.field, expectedFieldAddL)
        let expectedNewTetrominoZ = tetris.getCoordinates(`
            ---XX---
            ----XX--
            --------
            --------
            --------
            --------
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedNewTetrominoZ)
        gameTetris.rotate()
        gameTetris.moveLeft()
        gameTetris.moveLeft()
        gameTetris.tick()
        gameTetris.tick()
        gameTetris.tick()
        let expectedRotatesMovesLeftAndTicksZ = tetris.getCoordinates(`
            --------
            --------
            --------
            --X-----
            -XX-----
            -X------
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedRotatesMovesLeftAndTicksZ)
        stubForGetRandomTypeOfTetromino.returns("I")
        gameTetris.tick()
        let expectedFieldAddZ = tetris.buildField(`
            --------
            --------
            --------
            --X-----
            XXX----X
            XXXX-XXX
        `)
        assert.deepEqual(gameTetris.field.field, expectedFieldAddZ)
        let expectedNewTetrominoI = tetris.getCoordinates(`
            --XXXX--
            --------
            --------
            --------
            --------
            --------
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedNewTetrominoI)
        gameTetris.moveRight()
        gameTetris.tick()
        gameTetris.tick()
        gameTetris.tick()
        gameTetris.tick()
        let expectedMoveLeftAndTicksI = tetris.getCoordinates(`
            --------
            --------
            --------
            --------
            ---XXXX-
            --------
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedMoveLeftAndTicksI)
        stubForGetRandomTypeOfTetromino.returns("I")
        gameTetris.tick()
        let expectedFieldAddI = tetris.buildField(`
            --------
            --------
            --------
            --------
            --X-----
            XXXX-XXX
        `)
        assert.deepEqual(gameTetris.field.field, expectedFieldAddI)
        let expectedNewTetrominoISecomd = tetris.getCoordinates(`
            --XXXX--
            --------
            --------
            --------
            --------
            --------
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedNewTetrominoISecomd)
        gameTetris.tick()
        gameTetris.rotate()
        gameTetris.moveRight()
        gameTetris.moveRight()
        gameTetris.tick()
        let expectedTicksRotateMovesRightI = tetris.getCoordinates(`
            --------
            -----X--
            -----X--
            -----X--
            -----X--
            --------
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedTicksRotateMovesRightI)
        stubForGetRandomTypeOfTetromino.returns("O")
        gameTetris.tick()
        let expectedFieldAddISecond = tetris.buildField(`
            --------
            -----X--
            -----X--
            -----X--
            --X--X--
            XXXX-XXX
        `)
        assert.deepEqual(gameTetris.field.field, expectedFieldAddISecond)
        let expectedNewTetrominoOSecond = tetris.getCoordinates(`
            ---XX---
            ---XX---
            --------
            --------
            --------
            --------
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedNewTetrominoOSecond)
        gameTetris.moveRight()
        gameTetris.moveRight()
        gameTetris.tick()
        gameTetris.tick()
        gameTetris.tick()
        let expectedMovesRightTicksO = tetris.getCoordinates(`
            --------
            --------
            --------
            ---XX---
            ---XX---
            --------
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedMovesRightTicksO)
        stubForGetRandomTypeOfTetromino.returns("I")
        gameTetris.tick()
        let expectedFieldAddIThird = tetris.buildField(`
            --------
            -----X--
            -----X--
            ---XXX--
            --XXXX--
            XXXX-XXX
        `)
        assert.deepEqual(gameTetris.field.field, expectedFieldAddIThird)
        gameTetris.tick()
        let expectedFieldAddIFifth = tetris.buildField(`
            --XXXX--
            -----X--
            -----X--
            ---XXX--
            --XXXX--
            XXXX-XXX
        `)
        assert.deepEqual(gameTetris.field.field, expectedFieldAddIFifth)
        gameTetris.tick()
        assert(callback.called)
    })
})