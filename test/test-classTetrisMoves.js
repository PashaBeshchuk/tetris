var sinon = require('sinon');
var assert = require('chai').assert;
var tetris = require('../tetris');
describe("All moves tetromino", function () {
    let stubForGetRandomTypeOfTetromino = sinon.stub(tetris, "getRandomTypeOfTetromino");
    it("Mini Game", function () {
        stubForGetRandomTypeOfTetromino.returns("O")
        let fieldSize = { x: 8, y: 6 }
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.moveLeft()
        let expectedMoveRight = tetris.getCoordinates(`
            --XX----
            --XX----
            --------
            --------
            --------
            --------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveRight)
        elementTetris.tick()
        elementTetris.tick()
        elementTetris.tick()
        elementTetris.tick()
        let expectedWhenCantMove = tetris.getCoordinates(`
            --------
            --------
            --------
            --------
            --XX----
            --XX----
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedWhenCantMove)
        stubForGetRandomTypeOfTetromino.returns("J")
        elementTetris.tick()
        let expectedField = tetris.buildField(`
            --------
            --------
            --------
            --------
            --XX----
            --XX----
        `)
        assert.deepEqual(elementTetris.field.field, expectedField)
        let expectedNewTetrominoJ = tetris.getCoordinates(`
            ---X----
            ---XXX--
            --------
            --------
            --------
            --------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedNewTetrominoJ)
        elementTetris.rotate()
        elementTetris.moveRight()
        elementTetris.moveRight()
        elementTetris.moveRight()
        elementTetris.moveDown()
        elementTetris.moveDown()
        elementTetris.moveDown()
        let expectedRotateMoveRightAndMovesDownJ = tetris.getCoordinates(`
            --------
            --------
            --------
            -------X
            -------X
            ------XX
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedRotateMoveRightAndMovesDownJ)
        stubForGetRandomTypeOfTetromino.returns("S")
        elementTetris.tick()
        let expectedFieldAddJ = tetris.buildField(`
            --------
            --------
            --------
            -------X
            --XX---X
            --XX--XX
        `)
        assert.deepEqual(elementTetris.field.field, expectedFieldAddJ)
        let expectedNewTetrominoS = tetris.getCoordinates(`
            ----XX--
            ---XX---
            --------
            --------
            --------
            --------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedNewTetrominoS)
        elementTetris.moveRight()
        elementTetris.tick()
        elementTetris.tick()
        elementTetris.tick()
        elementTetris.tick()
        let expectedMoveRightTicksS = tetris.getCoordinates(`
            --------
            --------
            --------
            --------
            -----XX-
            ----XX--
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveRightTicksS)
        stubForGetRandomTypeOfTetromino.returns("L")
        elementTetris.tick()
        let expectedFieldAddS = tetris.buildField(`
            --------
            --------
            --------
            -------X
            --XX-XXX
            --XXXXXX
        `)
        assert.deepEqual(elementTetris.field.field, expectedFieldAddS)
        let expectedNewTetrominoL = tetris.getCoordinates(`
            -----X--
            ---XXX--
            --------
            --------
            --------
            --------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedNewTetrominoL)
        elementTetris.rotate()
        elementTetris.rotate()
        elementTetris.rotate()
        elementTetris.moveLeft()
        elementTetris.moveLeft()
        elementTetris.moveLeft()
        elementTetris.moveLeft()
        elementTetris.tick()
        elementTetris.tick()
        elementTetris.tick()
        let expectedRotatesMovesLeftAndTickL = tetris.getCoordinates(`
            --------
            --------
            --------
            X-------
            X-------
            XX------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedRotatesMovesLeftAndTickL)
        stubForGetRandomTypeOfTetromino.returns("Z")
        elementTetris.tick()
        let expectedFieldAddL = tetris.buildField(`
            --------
            --------
            --------
            --------
            X------X
            X-XX-XXX
        `)
        assert.deepEqual(elementTetris.field.field, expectedFieldAddL)
        let expectedNewTetrominoZ = tetris.getCoordinates(`
            ---XX---
            ----XX--
            --------
            --------
            --------
            --------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedNewTetrominoZ)
        elementTetris.rotate()
        elementTetris.moveLeft()
        elementTetris.moveLeft()
        elementTetris.tick()
        elementTetris.tick()
        elementTetris.tick()
        let expectedRotatesMovesLeftAndTicksZ = tetris.getCoordinates(`
            --------
            --------
            --------
            --X-----
            -XX-----
            -X------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedRotatesMovesLeftAndTicksZ)
        stubForGetRandomTypeOfTetromino.returns("I")
        elementTetris.tick()
        let expectedFieldAddZ = tetris.buildField(`
            --------
            --------
            --------
            --X-----
            XXX----X
            XXXX-XXX
        `)
        assert.deepEqual(elementTetris.field.field, expectedFieldAddZ)
        let expectedNewTetrominoI = tetris.getCoordinates(`
            --XXXX--
            --------
            --------
            --------
            --------
            --------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedNewTetrominoI)
        elementTetris.moveRight()
        elementTetris.tick()
        elementTetris.tick()
        elementTetris.tick()
        elementTetris.tick()
        let expectedMoveLeftAndTicksI = tetris.getCoordinates(`
            --------
            --------
            --------
            --------
            ---XXXX-
            --------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveLeftAndTicksI)
        stubForGetRandomTypeOfTetromino.returns("I")
        elementTetris.tick()
        let expectedFieldAddI = tetris.buildField(`
            --------
            --------
            --------
            --------
            --X-----
            XXXX-XXX
        `)
        assert.deepEqual(elementTetris.field.field, expectedFieldAddI)
        let expectedNewTetrominoISecomd = tetris.getCoordinates(`
            --XXXX--
            --------
            --------
            --------
            --------
            --------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedNewTetrominoISecomd)
        elementTetris.tick()
        elementTetris.rotate()
        elementTetris.moveRight()
        elementTetris.moveRight()
        elementTetris.tick()
        let expectedTicksRotateMovesRightI = tetris.getCoordinates(`
            --------
            -----X--
            -----X--
            -----X--
            -----X--
            --------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedTicksRotateMovesRightI)
        stubForGetRandomTypeOfTetromino.returns("O")
        elementTetris.tick()
        let expectedFieldAddISecond = tetris.buildField(`
            --------
            -----X--
            -----X--
            -----X--
            --X--X--
            XXXX-XXX
        `)
        assert.deepEqual(elementTetris.field.field, expectedFieldAddISecond)
        let expectedNewTetrominoOSecond = tetris.getCoordinates(`
            ---XX---
            ---XX---
            --------
            --------
            --------
            --------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedNewTetrominoOSecond)
        elementTetris.moveRight()
        elementTetris.moveRight()
        elementTetris.tick()
        elementTetris.tick()
        elementTetris.tick()
        let expectedMovesRightTicksO = tetris.getCoordinates(`
            --------
            --------
            --------
            ---XX---
            ---XX---
            --------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMovesRightTicksO)
        stubForGetRandomTypeOfTetromino.returns("I")
        elementTetris.tick()
        let expectedFieldAddOSecond = tetris.buildField(`
        --------
        -----X--
        -----X--
        ---XXX--
        --XXXX--
        XXXX-XXX
    `)
        assert.deepEqual(elementTetris.field.field, expectedFieldAddOSecond)
        elementTetris.tick()
        let expectedFieldAddOThird = tetris.buildField(`
        --XXXX--
        -----X--
        -----X--
        ---XXX--
        --XXXX--
        XXXX-XXX
    `)
        assert.deepEqual(elementTetris.field.field, expectedFieldAddOThird)
    })
})