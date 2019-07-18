var sinon = require('sinon');
var assert = require('chai').assert;
var tetris = require('../tetris');
describe("All moves tetromino", function () {
    let stubForGetRandomTypeOfTetromino = sinon.stub(tetris, "getRandomTypeOfTetromino");
    it("All Moves L tetromino", function () {
        stubForGetRandomTypeOfTetromino.returns("L")
        let fieldSize = { x: 7, y: 5 }
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.moveRight()
        let expectedMoveRight = tetris.getCoordinates(`
            -----X-
            ---XXX-
            -------
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveRight)
        elementTetris.rotate()
        let expectedRotate = tetris.getCoordinates(`
            ---XX--
            ----X--
            ----X--
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedRotate)
        elementTetris.moveDown()
        let expectedMoveDown = tetris.getCoordinates(`
            -------
            ---XX--
            ----X--
            ----X--
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveDown)
        elementTetris.moveLeft()
        let expectedMoveLeft = tetris.getCoordinates(`
            -------
            --XX---
            ---X---
            ---X---
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveLeft)
        elementTetris.tick()
        let expectedTick = tetris.getCoordinates(`
            -------
            -------
            --XX---
            ---X---
            ---X---
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedTick)
        stubForGetRandomTypeOfTetromino.returns("O")
        elementTetris.tick()
        let expectedCantMoveDownAndNewTetromino = tetris.getCoordinates(`
            --XX---
            --XX---
            -------
            -------
            -------
        `)
       assert.deepEqual(elementTetris.tetromino.coordinates, expectedCantMoveDownAndNewTetromino)
       let expectedField = tetris.buildField(`
            -------
            -------
            --XX---
            ---X---
            ---X---
        `)
        assert.deepEqual(elementTetris.field.field, expectedField)
        
    })

    it("All Moves J tetromino", function () {
        stubForGetRandomTypeOfTetromino.returns("J")
        let fieldSize = { x: 7, y: 5 }
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.moveRight()
        let expectedMoveRight = tetris.getCoordinates(`
            ---X---
            ---XXX-
            -------
            -------
            -------
        `)
        
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveRight)
        elementTetris.rotate()
        let expectedRotate = tetris.getCoordinates(`
            ----X--
            ----X--
            ---XX--
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedRotate)
        elementTetris.moveDown()
        let expectedMoveDown = tetris.getCoordinates(`
            -------
            ----X--
            ----X--
            ---XX--
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveDown)
        elementTetris.moveLeft()
        let expectedMoveLeft = tetris.getCoordinates(`
            -------
            ---X---
            ---X---
            --XX---
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveLeft)
        elementTetris.tick()
        let expectedTick = tetris.getCoordinates(`
            -------
            -------
            ---X---
            ---X---
            --XX---
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedTick)
        stubForGetRandomTypeOfTetromino.returns("T")
        elementTetris.tick()
        let expectedCantMoveDownAndNewTetromino = tetris.getCoordinates(`
            ---X---
            --XXX--
            -------
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedCantMoveDownAndNewTetromino)
        let expectedField = tetris.buildField(`
            -------
            -------
            ---X---
            ---X---
            --XX---
        `)
        assert.deepEqual(elementTetris.field.field, expectedField)
    })
    it("All Moves T tetromino", function () {
        stubForGetRandomTypeOfTetromino.returns("T")
        let fieldSize = { x: 7, y: 5 }
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.rotate()
        let expectedRotate = tetris.getCoordinates(`
            ---X---
            --XX---
            ---X---
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedRotate)
        elementTetris.moveLeft()
        let expectedMoveLeft = tetris.getCoordinates(`
            --X----
            -XX----
            --X----
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveLeft)
        elementTetris.moveDown()
        let expectedMoveDown = tetris.getCoordinates(`
            -------
            --X----
            -XX----
            --X----
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveDown)
        elementTetris.moveRight()
        let expectedMoveRight = tetris.getCoordinates(`
            -------
            ---X---
            --XX---
            ---X---
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveRight)
        elementTetris.tick()
        let expectedTick = tetris.getCoordinates(`
            -------
            -------
            ---X---
            --XX---
            ---X---
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedTick)
        stubForGetRandomTypeOfTetromino.returns("S")
        elementTetris.tick()
        let expectedCantMoveDownAndNewTetromino = tetris.getCoordinates(`
            ---XX--
            --XX---
            -------
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedCantMoveDownAndNewTetromino)
        let expectedField = tetris.buildField(`
            -------
            -------
            ---X---
            --XX---
            ---X---
        `)
        assert.deepEqual(elementTetris.field.field, expectedField)
    })
    it("All Moves S tetromino", function () {
        stubForGetRandomTypeOfTetromino.returns("S")
        let fieldSize = { x: 7, y: 5 }
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.rotate()
        let expectedRotate = tetris.getCoordinates(`
            --X----
            --XX---
            ---X---
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedRotate)
        elementTetris.moveRight()
        let expectedMoveRight = tetris.getCoordinates(`
            ---X---
            ---XX--
            ----X--
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveRight)
        elementTetris.moveDown()
        let expectedMoveDown = tetris.getCoordinates(`
            -------
            ---X---
            ---XX--
            ----X--
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveDown)
        elementTetris.moveLeft()
        let expectedMoveLeft = tetris.getCoordinates(`
            -------
            --X----
            --XX---
            ---X---
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveLeft)
        elementTetris.tick()
        let expectedTick = tetris.getCoordinates(`
            -------
            -------
            --X----
            --XX---
            ---X---
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedTick)
        stubForGetRandomTypeOfTetromino.returns("Z")
        elementTetris.tick()
        let expectedCantMoveDownAndNewTetromino = tetris.getCoordinates(`
            --XX---
            ---XX--
            -------
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedCantMoveDownAndNewTetromino)
        let expectedField = tetris.buildField(`
            -------
            -------
            --X----
            --XX---
            ---X---
        `)
        assert.deepEqual(elementTetris.field.field, expectedField)
    })
    it("All Moves Z tetromino", function () {
        stubForGetRandomTypeOfTetromino.returns("Z")
        let fieldSize = { x: 7, y: 5 }
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.rotate()
        let expectedRotate = tetris.getCoordinates(`
            ---X---
            --XX---
            --X----
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedRotate)
        elementTetris.moveRight()
        let expectedMoveRight = tetris.getCoordinates(`
            ----X--
            ---XX--
            ---X---
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveRight)
        elementTetris.moveDown()
        let expectedMoveDown = tetris.getCoordinates(`
            -------
            ----X--
            ---XX--
            ---X--
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveDown)
        elementTetris.moveLeft()
        let expectedMoveLeft = tetris.getCoordinates(`
            -------
            ---X---
            --XX---
            --X---
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveLeft)
        elementTetris.tick()
        let expectedTick = tetris.getCoordinates(`
            -------
            -------
            ---X---
            --XX---
            --X----
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedTick)
        stubForGetRandomTypeOfTetromino.returns("I")
        elementTetris.tick()
        let expectedCantMoveDownAndNewTetromino = tetris.getCoordinates(`
            -XXXX--
            -------
            -------
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedCantMoveDownAndNewTetromino)
        let expectedField = tetris.buildField(`
            -------
            -------
            ---X---
            --XX---
            --X----
        `)
        assert.deepEqual(elementTetris.field.field, expectedField)
    })
    it("All Moves I tetromino", function () {
        stubForGetRandomTypeOfTetromino.returns("I")
        let fieldSize = { x: 7, y: 5 }
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.moveDown()
        let expectedMoveDown = tetris.getCoordinates(`
            -------
            -XXXX--
            -------
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveDown)
        elementTetris.rotate()
        let expectedRotate = tetris.getCoordinates(`
            --X----
            --X----
            --X----
            --X----
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedRotate)
        elementTetris.moveLeft()
        let expectedMoveLeft = tetris.getCoordinates(`
            -X-----
            -X-----
            -X-----
            -X-----
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveLeft)
        elementTetris.moveRight()
        let expectedMoveRight = tetris.getCoordinates(`
            --X----
            --X----
            --X----
            --X----
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveRight)
        elementTetris.tick()
        let expectedTick = tetris.getCoordinates(`
            -------
            --X----
            --X----
            --X----
            --X----
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedTick)
        elementTetris.tick()
        let expectedCantMoveDownAndNewTetromino = tetris.getCoordinates(`
            -XXXX--
            -------
            -------
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedCantMoveDownAndNewTetromino)
        let expectedField = tetris.buildField(`
            -------
            --X----
            --X----
            --X----
            --X----
        `)
        assert.deepEqual(elementTetris.field.field, expectedField)
    })
    it("All Moves O tetromino", function () {
        stubForGetRandomTypeOfTetromino.returns("O")
        let fieldSize = { x: 7, y: 5 }
        let elementTetris = new tetris.Tetris(fieldSize)
        elementTetris.moveDown()
        let expectedMoveDown = tetris.getCoordinates(`
            -------
            --XX---
            --XX---
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveDown)
        elementTetris.moveRight()
        let expectedMoveRight = tetris.getCoordinates(`
            -------
            ---XX--
            ---XX--
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveRight)
        elementTetris.rotate()
        let expectedRotate = tetris.getCoordinates(`
            -------
            ---XX--
            ---XX--
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedRotate)
        elementTetris.moveLeft()
        let expectedMoveLeft = tetris.getCoordinates(`
            -------
            --XX---
            --XX---
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedMoveLeft)
        elementTetris.tick()
        let expectedTick = tetris.getCoordinates(`
            -------
            -------
            --XX---
            --XX---
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedTick)
        elementTetris.tick()
        stubForGetRandomTypeOfTetromino.returns("L")
        elementTetris.tick()
        let expectedCantMoveDownAndNewTetromino = tetris.getCoordinates(`
            ----X--
            --XXX--
            -------
            -------
            -------
        `)
        assert.deepEqual(elementTetris.tetromino.coordinates, expectedCantMoveDownAndNewTetromino)
        // let expectedField = tetris.buildField(`
        //     -------
        //     -------
        //     -------
        //     --XX---
        //     --XX---
        // `)
        // assert.deepEqual(elementTetris.field.field, expectedField)
    })
})