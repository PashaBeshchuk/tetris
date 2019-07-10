var assert = require('chai').assert;
var tetris = require('../tetris');
describe("Can move down tetromino or can't", function () {
    it("L tetromino can't move down", function () {
        let typeOfTetromino = "L";
        let phase = "up";
        let coordinates = tetris.getCoordinates(`
            --XX-
            ---X-
            ---X-
            -----
        `);
        let field = tetris.buildField(`
            -----
            --X--
            -----
            -----
        `);
        let tetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinates);
        let resultOfMovement = tetromino.canMoveDown(field)
        let expectedResult = false
        assert.deepEqual(resultOfMovement, expectedResult)
    })
    it("L tetromino can move down", function () {
        let typeOfTetromino = "L";
        let phase = "up";
        let coordinates = tetris.getCoordinates(`
            --XX-
            ---X-
            ---X-
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let tetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinates);
        let resultOfMovement = tetromino.canMoveDown(field)
        let expectedResult = true
        assert.deepEqual(resultOfMovement, expectedResult)
    })
    it("J tetromino can't move down", function () {
        let typeOfTetromino = "J";
        let phase = "right";
        let coordinates = tetris.getCoordinates(`
            -XXX-
            ---X-
            -----
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            --XXX
            -----
        `);
        let tetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinates);
        let resultOfMovement = tetromino.canMoveDown(field)
        let expectedResult = false
        assert.deepEqual(resultOfMovement, expectedResult)
    })
    it("J tetromino can move down", function () {
        let typeOfTetromino = "J";
        let phase = "right";
        let coordinates = tetris.getCoordinates(`
            -XXX-
            ---X-
            -----
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            -XX--
            -----
        `);
        let tetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinates);
        let resultOfMovement = tetromino.canMoveDown(field)
        let expectedResult = true
        assert.deepEqual(resultOfMovement, expectedResult)
    })
    it("T tetromino can't move down", function () {
        let typeOfTetromino = "T";
        let phase = "down";
        let coordinates = tetris.getCoordinates(`
            -XXX-
            --X--
            -----
            -----
        `);
        let field = tetris.buildField(`
            -----
            ---X-
            -----
            -----
        `);
        let tetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinates);
        let resultOfMovement = tetromino.canMoveDown(field)
        let expectedResult = false
        assert.deepEqual(resultOfMovement, expectedResult)
    })
    it("T tetromino can move down", function () {
        let typeOfTetromino = "T";
        let phase = "down";
        let coordinates = tetris.getCoordinates(`
            -XXX-
            --X--
            -----
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let tetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinates);
        let resultOfMovement = tetromino.canMoveDown(field)
        let expectedResult = true
        assert.deepEqual(resultOfMovement, expectedResult)
    })
    it("Z tetromino can't move down", function () {
        let typeOfTetromino = "Z";
        let phase = "horizontal";
        let coordinates = tetris.getCoordinates(`
            -----
            --XX-
            ---XX
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            --X--
            -----
        `);
        let tetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinates);
        let resultOfMovement = tetromino.canMoveDown(field)
        let expectedResult = false
        assert.deepEqual(resultOfMovement, expectedResult)
    })
    it("Z tetromino can move down", function () {
        let typeOfTetromino = "Z";
        let phase = "horizontal";
        let coordinates = tetris.getCoordinates(`
            -----
            --XX-
            ---XX
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let tetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinates);
        let resultOfMovement = tetromino.canMoveDown(field)
        let expectedResult = true
        assert.deepEqual(resultOfMovement, expectedResult)
    })
    it("S tetromino can't move down", function () {
        let typeOfTetromino = "S";
        let phase = "vertical";
        let coordinates = tetris.getCoordinates(`
            --X--
            --XX-
            ---X-
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            --X--
            -----
        `);
        let tetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinates);
        let resultOfMovement = tetromino.canMoveDown(field)
        let expectedResult = false
        assert.deepEqual(resultOfMovement, expectedResult)
    })
    it("S tetromino can move down", function () {
        let typeOfTetromino = "S";
        let phase = "vertical";
        let coordinates = tetris.getCoordinates(`
            --X--
            --XX-
            ---X-
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let tetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinates);
        let resultOfMovement = tetromino.canMoveDown(field)
        let expectedResult = true
        assert.deepEqual(resultOfMovement, expectedResult)
    })
    it("I tetromino can't move down", function () {
        let typeOfTetromino = "I";
        let phase = "horizontal";
        let coordinates = tetris.getCoordinates(`
            -----
            XXXX-
            -----
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            ---X-
            -----
        `);
        let tetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinates);
        let resultOfMovement = tetromino.canMoveDown(field)
        let expectedResult = false
        assert.deepEqual(resultOfMovement, expectedResult)
    })
    it("I tetromino can move down", function () {
        let typeOfTetromino = "I";
        let phase = "horizontal";
        let coordinates = tetris.getCoordinates(`
            -----
            XXXX-
            -----
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let tetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinates);
        let resultOfMovement = tetromino.canMoveDown(field)
        let expectedResult = true
        assert.deepEqual(resultOfMovement, expectedResult)
    })
    it("O tetromino can't move down", function () {
        let typeOfTetromino = "O";
        let phase = "stable";
        let coordinates = tetris.getCoordinates(`
            --XX-
            --XX-
            -----
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            ---X-
            -----
        `);
        let tetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinates);
        let resultOfMovement = tetromino.canMoveDown(field)
        let expectedResult = false
        assert.deepEqual(resultOfMovement, expectedResult)
    })
    it("O tetromino can move down", function () {
        let typeOfTetromino = "O";
        let phase = "stable";
        let coordinates = tetris.getCoordinates(`
            --XX-
            --XX-
            -----
            -----
        `);
        let field = tetris.buildField(`
            -----
            -----
            -----
            -----
        `);
        let tetromino = new tetris.Tetromino(typeOfTetromino, phase, coordinates);
        let resultOfMovement = tetromino.canMoveDown(field)
        let expectedResult = true
        assert.deepEqual(resultOfMovement, expectedResult)
    })
})