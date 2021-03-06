let tetris = {
	checkThatTheFieldIsFree: function (arrayOfCoordinates, localField) {
		if (!this.allItemsOnTheField(arrayOfCoordinates, localField)) {
			return false
		}
		for (let coordinate of arrayOfCoordinates) {
			if (localField[coordinate.y][coordinate.x]) {
				return false
			}
		}
		return true;
	},
	
	allItemsOnTheField: function (arrayOfCoordinates, localField) {
		let lengthField_X = localField[0].length;
		let lengthField_Y = localField.length;

		for (let coordinate of arrayOfCoordinates) {
			if (
				(coordinate.x < 0 || coordinate.y < 0) ||
				(coordinate.x >= lengthField_X) ||
				(coordinate.y >= lengthField_Y)
			) {
				return false;
			}
		}
		return true
	},
	buildField: function (stringField) {
		let arr = stringField.split("\n")
		for (let k = 0; k < arr.length; k++) {
			for (let z = 0; z < arr[k].length; z++) {
				if (arr[k][z] !== "-" && arr[k][z] !== "X" && arr[k][z] != false) {
					throw new Error("invalid symbol")
				}
			}
		}

		let newArr = []

		for (let i = 0; i < arr.length; i++) {
			let elementsForNewArray = []
			for (let j = 0; j < arr[i].length; j++) {
				if (arr[i][j] === "-") {
					elementsForNewArray.push(false)
				} else if (arr[i][j] === "X") {
					elementsForNewArray.push(true)
				}
			}
			if (elementsForNewArray.length !== 0) {
				newArr.push(elementsForNewArray)
			}
		}
		if (newArr.length === 0) {
			throw new Error("field whitespace")
		}
		return newArr;
	},

	getCoordinates: function (stringOfCoordinates) {
		let fieldArray = stringOfCoordinates.split("\n")
		let quantityElem = 0;
		let arrayOfCoordinates = []

		for (let i = 0, axisIndex_Y = 0; i < fieldArray.length; i++) {
			if (fieldArray[i] !== "") {

				for (let j = 0, axisIndex_X = 0; j < fieldArray[i].length; j++) {
					let obj = {}

					if (fieldArray[i][j] === "-") {
						axisIndex_X++
					} if (fieldArray[i][j] === "X") {
						obj.x = axisIndex_X
						obj.y = axisIndex_Y
						quantityElem++;

						arrayOfCoordinates.push(obj)
						axisIndex_X++
					}
				}
				axisIndex_Y++;
			}

		}
		return arrayOfCoordinates.sort(this.orderCoordinates);
	},

	buildTetromino: function (stringOfCoordinates) {
		let arrayOfCoordinates = [];
		this.getCoordinates(stringOfCoordinates).forEach(function (coordinates) {
			arrayOfCoordinates.push(Object.assign({}, coordinates));
		})
		if (arrayOfCoordinates.length !== 4) {
			throw new Error("tetromino size is not correct");
		}
		return arrayOfCoordinates;
	},
	rotateElement: function (coordinatesElement, coordinatesPivot) {
		let coordinateDifference_X = coordinatesPivot.y - coordinatesElement.y
		let coordinateDifference_Y = coordinatesPivot.x - coordinatesElement.x
		return { x: coordinatesPivot.x - coordinateDifference_X, y: coordinatesPivot.y + coordinateDifference_Y }
	},
	rotatesArrayOfCoordinates: function (arrayCoordinates, coordinatePivot) {
		let localArrayCoordinates = []
		for (let arrayElement of arrayCoordinates) {
			localArrayCoordinates.push(this.rotateElement(arrayElement, coordinatePivot))
		}
		return localArrayCoordinates.sort(this.orderCoordinates);
	},
	orderCoordinates: function (firstCoordinate, secondCoordinate) {
		if (firstCoordinate.x === secondCoordinate.x) {
			return firstCoordinate.y - secondCoordinate.y;
		}
		return firstCoordinate.x - secondCoordinate.x;
	},
	calculatorCoordinateOfTopLeft: function (arrayCoordinates) {
		let coordinateOfTopLeft = {};
		for (let i = 0; i < arrayCoordinates.length; i++) {
			if (coordinateOfTopLeft.x > arrayCoordinates[i].x || coordinateOfTopLeft.x === undefined) {
				coordinateOfTopLeft.x = arrayCoordinates[i].x;
			}
			if (coordinateOfTopLeft.y > arrayCoordinates[i].y || coordinateOfTopLeft.y === undefined) {
				coordinateOfTopLeft.y = arrayCoordinates[i].y;
			}
		}
		return coordinateOfTopLeft
	},
	shiftCoordinate: function (coordinate, shift) {
		let newCoordinates = {};
		newCoordinates.x = coordinate.x + shift.x;
		newCoordinates.y = coordinate.y + shift.y;
		return newCoordinates;
	},
	shiftCoordinates: function (arrayCoordinates, shift) {
		let newCoordinates = []
		for (let elem of arrayCoordinates) {
			newCoordinates.push(this.shiftCoordinate(elem, shift))
		}
		return newCoordinates
	},
	rotateTetromino: function (typeOfTetromino, tetrominoCoordinates) {
		let shift = typeOfTetromino.determineShift()
		let pivot = this.calculatorCoordinateOfTopLeft(tetrominoCoordinates);
		let newCoordinates = this.rotatesArrayOfCoordinates(tetrominoCoordinates, pivot)
		let result = this.shiftCoordinates(newCoordinates, shift)
		return result.sort(this.orderCoordinates);
	},
	Tetromino: class {
		constructor(typeOfTetromino, rotationPhase, coordinates) {
			this._typeOfTetromino = typeOfTetromino
			this._rotationPhase = rotationPhase;
			this._coordinates = coordinates;
		}
		get rotationPhase() {
			return this._rotationPhase
		}
		get coordinates() {
			return this._coordinates
		}
		get typeOfTetromino() {
			return this._typeOfTetromino
		}
		set coordinates(newCoordinatesOfTetramino){
			return this._coordinates = newCoordinatesOfTetramino
		}
		set rotationPhase(newRotationPhase){
			return this._rotationPhase = newRotationPhase
		}
		rotateTetromino(field) {
			let tetrominoRotateResult = tetris.rotateTetromino(this._typeOfTetromino,this._coordinates)
			if (tetris.checkThatTheFieldIsFree(tetrominoRotateResult, field)) {
				this._rotationPhase = this._typeOfTetromino.incrementPhase(this._typeOfTetromino, this._rotationPhase)
				this.typeOfTetromino.startingPhaseOfTetromino = this._rotationPhase
				this._coordinates = tetrominoRotateResult
				return tetrominoRotateResult
			} else {
				return this._coordinates
			}
		}
		moveTetromino(field, shift) {
			let shiftTetrominoResult = tetris.shiftCoordinates(this._coordinates, shift)
			if (tetris.checkThatTheFieldIsFree(shiftTetrominoResult, field)) {
				this._coordinates = shiftTetrominoResult
				return shiftTetrominoResult
			} else {
				return this._coordinates
			}
		}
		canMoveDown(field) {
			let shift = { x: 0, y: 1 }
			let shiftTetrominoResult = tetris.shiftCoordinates(this._coordinates, shift)
			return tetris.checkThatTheFieldIsFree(shiftTetrominoResult, field)
		}
		incrementPhase(typeOfTetromino, currentRotationPhaseOfTetromino) {
			let numberPhase = typeOfTetromino.arrayPhases.indexOf(currentRotationPhaseOfTetromino)
			if (numberPhase !== typeOfTetromino.arrayPhases.length - 1) {
				return typeOfTetromino.arrayPhases[numberPhase + 1]
			} else {
				return typeOfTetromino.arrayPhases[0]
			}
		}
	},
	Field: class {
		constructor(field) {
			if (Array.isArray(field)) {
				this.field = field
			} else {
				this.field = []
				for (let i = 0; i < field.y; i++) {
					let array = []
					for (let j = 0; j < field.x; j++) {
						array.push(false)
					}
					this.field.push(array)
				}
			}
			this.fieldSize = { x: this.field[0].length, y: this.field.length }
		}
		addTetrominoToField(coordinatesOfTetromino) {
			for (let i = 0; i < coordinatesOfTetromino.length; i++) {
				this.field[coordinatesOfTetromino[i].y][coordinatesOfTetromino[i].x] = true
			}
			return this.field
		}
		cleanFilledRows() {
			for (let i = 0; i < this.fieldSize.y; i++) {
				let sumFullCells = 0
				for (let j = 0; j < this.fieldSize.x; j++) {
					if (this.field[i][j]) {
						sumFullCells++
					}
				}
				if (this.fieldSize.x === sumFullCells) {
					let partOfTheField = []
					for (let i = 0; i < this.fieldSize.x; i++) {
						partOfTheField.push(false)
					}
					this.field.splice(i, 1);
					this.field.unshift(partOfTheField)

				}
			}
			return this.field
		}
	},
	getRandomTypeOfTetromino: function (fieldSize) {
		let arrayTypeOfTetramino = [new this.TetrominoL(fieldSize), new this.TetrominoJ(fieldSize), new this.TetrominoT(fieldSize), new this.TetrominoS(fieldSize), new this.TetrominoZ(fieldSize), new this.TetrominoI(fieldSize), new this.TetrominoO(fieldSize)];
		return arrayTypeOfTetramino[Math.floor(Math.random() * arrayTypeOfTetramino.length)];
	},
	createTetromino: function (fieldSize) {
		let typeOfTetromino = this.getRandomTypeOfTetromino(fieldSize)
		let phase = typeOfTetromino.startingPhaseOfTetromino
		let coodinates = typeOfTetromino.initCoordinates(fieldSize)
		return new this.Tetromino(typeOfTetromino, phase, coodinates)
	},
	Tetris: class {
		constructor(fieldSize, gameOverCallback) {
			this.fieldSize = fieldSize;
			this.createOfTetromino = tetris.createTetromino(this.fieldSize)
			this.tetromino = new tetris.Tetromino(this.createOfTetromino.typeOfTetromino, this.createOfTetromino.rotationPhase, this.createOfTetromino.coordinates)
			this.coordinatesOfTetramino = this.tetromino.coordinates
			this.field = new tetris.Field(this.fieldSize)
			this.gameOverCallback = gameOverCallback
		}
		tick() {
			let shift = { x: 0, y: 1 }
			if (this.tetromino.canMoveDown(this.field.field)) {
				this.coordinatesOfTetramino = this.tetromino.moveTetromino(this.field.field, shift)
			} else {
				this.field.addTetrominoToField(this.coordinatesOfTetramino)
				this.createOfTetromino = tetris.createTetromino(this.fieldSize)
				this.tetromino = new tetris.Tetromino(this.createOfTetromino.typeOfTetromino, this.createOfTetromino.rotationPhase, this.createOfTetromino.coordinates)
				this.coordinatesOfTetramino = this.tetromino.coordinates
				this.field.cleanFilledRows()
				if (!tetris.checkThatTheFieldIsFree(this.coordinatesOfTetramino, this.field.field)) {
					this.gameOverCallback()
				}
			}
		}
		moveLeft() {
			let shift = { x: -1, y: 0 }
			this.coordinatesOfTetramino = this.tetromino.moveTetromino(this.field.field, shift)
		}
		moveRight() {
			let shift = { x: 1, y: 0 }
			this.coordinatesOfTetramino = this.tetromino.moveTetromino(this.field.field, shift)
		}
		moveDown() {
			let shift = { x: 0, y: 1 }
			this.coordinatesOfTetramino = this.tetromino.moveTetromino(this.field.field, shift)
		}
		rotate() {
			this.coordinatesOfTetramino = this.tetromino.rotateTetromino(this.field.field)
		}
	},
	displayField: function (fieldSize, tetromino, field) {
		let fieldImage = "\n            ";
		for (let y = 0; y < fieldSize.y; y++) {
			for (let x = 0; x < fieldSize.x; x++) {
				if (field[y][x]) {
					fieldImage += `o`
				} else if (this.coordinateMatchingCheck(tetromino, x, y)) {
					fieldImage += `X`
				} else {
					fieldImage += `-`
				}
			}
			fieldImage += "\n            ";
		}
		return fieldImage
	},
	coordinateMatchingCheck: function (tetromino, x, y) {
		for (let i = 0; i < tetromino.length; i++) {
			if (tetromino[i].x === x && tetromino[i].y === y) {
				return true;
			}
		}
		return false
	}
}
//1 Попрвить конструктор и добавить поле
tetris.TetrominoL = class extends tetris.Tetromino {
	constructor(fieldSize) {
		super();
		this.fieldSize = fieldSize;
		this.arrayPhases = ["up", "left", "down", "right"];
		this.startingPhaseOfTetromino = "right";
	}
	determineShift() {
		if (this.startingPhaseOfTetromino === "up") {
			return { x: 0, y: 1 };
		}
		if (this.startingPhaseOfTetromino === "left") {
			return { x: 0, y: 2 };
		}
		if (this.startingPhaseOfTetromino === "down") {
			return { x: 0, y: 1 };
		}
		if (this.startingPhaseOfTetromino === "right") {
			return { x: 0, y: 2 };
		}
	}
	initCoordinates() {
		let arrayForTetromino = tetris.getCoordinates(`
			--X
			XXX
		`);
		let shift = { x: Math.floor((this.fieldSize.x / 2) - 1), y: 0 }
		return tetris.shiftCoordinates(arrayForTetromino, shift);
	}
}
//2
tetris.TetrominoJ = class extends tetris.Tetromino {
	constructor(fieldSize) {
		super();
		this.fieldSize = fieldSize;
		this.arrayPhases = ["up", "left", "down", "right"];
		this.startingPhaseOfTetromino = "left";
	}
	determineShift() {
		if (this.startingPhaseOfTetromino === "up") {
			return { x: 0, y: 1 };
		}
		if (this.startingPhaseOfTetromino === "left") {
			return { x: 0, y: 2 };
		}
		if (this.startingPhaseOfTetromino === "down") {
			return { x: 0, y: 1 };
		}
		if (this.startingPhaseOfTetromino === "right") {
			return { x: 0, y: 2 };
		}
	}
	initCoordinates() {
		let arrayForTetromino = tetris.getCoordinates(`
			X--
			XXX
		`);
		let shift = { x: Math.floor((this.fieldSize.x / 2) - 1), y: 0 }
		return tetris.shiftCoordinates(arrayForTetromino, shift);
	}
}
//3
tetris.TetrominoT = class extends tetris.Tetromino {
	constructor(fieldSize) {
		super();
		this.fieldSize = fieldSize;
		this.arrayPhases = ["up", "left", "down", "right"];
		this.startingPhaseOfTetromino = "up";
	}
	determineShift() {
		if (this.startingPhaseOfTetromino === "up") {
			return { x: 0, y: 2 };
		}
		if (this.startingPhaseOfTetromino === "left") {
			return { x: 0, y: 2 };
		}
		if (this.startingPhaseOfTetromino === "down") {
			return { x: 1, y: 1 };
		}
		if (this.startingPhaseOfTetromino === "right") {
			return { x: -1, y: 1 };
		}
	}
	initCoordinates() {
		let arrayForTetromino = tetris.getCoordinates(`
			-X-
			XXX
		`);
		let shift = { x: Math.floor((this.fieldSize.x / 2) - 1), y: 0 }
		return tetris.shiftCoordinates(arrayForTetromino, shift);
	}
}
//4
tetris.TetrominoS = class extends tetris.Tetromino {
	constructor(fieldSize) {
		super();
		this.fieldSize = fieldSize;
		this.arrayPhases = ["vertical", "horizontal"];
		this.startingPhaseOfTetromino = "horizontal";
	}
	determineShift() {
		if (this.startingPhaseOfTetromino === "horizontal") {
			return { x: 0, y: 2 };
		}
		if (this.startingPhaseOfTetromino === "vertical") {
			return { x: 0, y: 1 };
		}
	}
	initCoordinates() {
		let arrayForTetromino = tetris.getCoordinates(`
			-XX
			XX-
		`);
		let shift = { x: Math.floor((this.fieldSize.x / 2) - 1), y: 0 }
		return tetris.shiftCoordinates(arrayForTetromino, shift);
	}
}
//5
tetris.TetrominoZ = class extends tetris.Tetromino {
	constructor(fieldSize) {
		super();
		this.fieldSize = fieldSize;
		this.arrayPhases = ["vertical", "horizontal"];
		this.startingPhaseOfTetromino = "horizontal";
	}
	determineShift() {
		if (this.startingPhaseOfTetromino === "horizontal") {
			return { x: 0, y: 2 };
		}
		if (this.startingPhaseOfTetromino === "vertical") {
			return { x: 0, y: 1 };
		}
	}
	initCoordinates() {
		let arrayForTetromino = tetris.getCoordinates(`
			XX-
			-XX
		`);
		let shift = { x: Math.floor((this.fieldSize.x / 2) - 1), y: 0 }
		return tetris.shiftCoordinates(arrayForTetromino, shift);
	}
}

//6
tetris.TetrominoI = class extends tetris.Tetromino {
	constructor(fieldSize) {
		super();
		this.fieldSize = fieldSize;
		this.arrayPhases = ["vertical", "horizontal"];
		this.startingPhaseOfTetromino = "horizontal";
	}
	determineShift() {
		if (this.startingPhaseOfTetromino === "horizontal") {
			return { x: 1, y: 2 };
		}
		if (this.startingPhaseOfTetromino === "vertical") {
			return { x: -1, y: 1 };
		}
	}
	initCoordinates() {
		let arrayForTetromino = tetris.getCoordinates(`
			XXXX
		`);
		let shift = { x: (Math.floor((this.fieldSize.x / 2) - 1) - 1), y: 0 }
		return tetris.shiftCoordinates(arrayForTetromino, shift);
	}
}

//7
tetris.TetrominoO = class extends tetris.Tetromino {
	constructor(fieldSize) {
		super();
		this.fieldSize = fieldSize;
		this.arrayPhases = ["stable"];
		this.startingPhaseOfTetromino = "stable";
	}
	determineShift() {
		if (this.startingPhaseOfTetromino === "stable") {
			return { x: 0, y: 1 };
		}
	}
	initCoordinates() {
		let arrayForTetromino = tetris.getCoordinates(`
			XX
			XX
		`);
		let shift = { x: Math.floor((this.fieldSize.x / 2) - 1), y: 0 }
		return tetris.shiftCoordinates(arrayForTetromino, shift);
	}
}


module.exports = tetris
