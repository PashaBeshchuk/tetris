var sinon = require('sinon');
var assert = require('chai').assert;
var tetris = require('../tetris');
describe("All moves tetromino", function () {
    let stubForGetRandomTypeOfTetromino = sinon.stub(tetris, "getRandomTypeOfTetromino");
    let callback = sinon.spy()
    it("Mini Game", function () {
        let fieldSize = { x: 8, y: 6 }
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoO(fieldSize))
        let gameTetris = new tetris.Tetris(fieldSize, callback)
        gameTetris.moveLeft()
        let expectedMoveLeftOTetromino = tetris.getCoordinates(`
            --XX----
            --XX----
            --------
            --------
            --------
            --------
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedMoveLeftOTetromino)
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
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoJ(fieldSize))
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
        let expectedRotateMovesRightAndMovesDownJ = tetris.getCoordinates(`
            --------
            --------
            --------
            -------X
            -------X
            ------XX
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedRotateMovesRightAndMovesDownJ)
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoS(fieldSize))
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
        let expectedMoveRightAndTicksS = tetris.getCoordinates(`
            --------
            --------
            --------
            --------
            -----XX-
            ----XX--
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedMoveRightAndTicksS)
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoL(fieldSize))
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
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoZ(fieldSize))
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
        let expectedRotateMovesLeftAndTicksZ = tetris.getCoordinates(`
            --------
            --------
            --------
            --X-----
            -XX-----
            -X------
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedRotateMovesLeftAndTicksZ)
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoI(fieldSize))
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
        let expectedMoveRightAndTicksI = tetris.getCoordinates(`
            --------
            --------
            --------
            --------
            ---XXXX-
            --------
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedMoveRightAndTicksI)
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoI(fieldSize))
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
        let expectedTickRotateAndMovesRightI = tetris.getCoordinates(`
            --------
            -----X--
            -----X--
            -----X--
            -----X--
            --------
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedTickRotateAndMovesRightI)
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoO(fieldSize))
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
        let expectedMovesRightAndTicksO = tetris.getCoordinates(`
            --------
            --------
            --------
            ---XX---
            ---XX---
            --------
        `)
        assert.deepEqual(gameTetris.tetromino.coordinates, expectedMovesRightAndTicksO)
        stubForGetRandomTypeOfTetromino.returns(new tetris.TetrominoI(fieldSize))
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