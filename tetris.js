let tetris = {
	//тетрамино массив из 4 координат [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}]
	// field это массив двухмерный булин значений, если true в ней есть блок, false блока нет
	rotateLine: function (field, tetromino) {
		let turningPoint = [];
		let arrCoordinates_X = [];
		let arrCoordinates_Y = [];
		let a = -1;
		let localTetromino = []

		tetromino.forEach(function (coordinates) {
			localTetromino.push(Object.assign({}, coordinates));
		})
		tetromino.forEach(function (coordinates) {
			turningPoint.push(Object.assign({}, coordinates));
		})

		for (let elem of turningPoint) {
			arrCoordinates_X.push(elem.x);
			arrCoordinates_Y.push(elem.y);
		}

		if ((arrCoordinates_Y[0] === arrCoordinates_Y[1]) && (arrCoordinates_Y[2] === arrCoordinates_Y[3]) && (arrCoordinates_Y[1] === arrCoordinates_Y[2])) {

			for (let i of turningPoint) {
				i.x = arrCoordinates_X[1];
				i.y = arrCoordinates_Y[0] + a;
				a++;
			}

			if (this.checkThatTheFieldIsFree(turningPoint, field)) {
				return turningPoint
			} else {
				return localTetromino
			}

		}

		if ((arrCoordinates_X[0] === arrCoordinates_X[1]) && (arrCoordinates_X[2] === arrCoordinates_X[3]) && (arrCoordinates_X[1] === arrCoordinates_X[2])) {
			let cloneTetromino = [];
			turningPoint.forEach(function (coordinates) {
				cloneTetromino.push(Object.assign({}, coordinates));
			})
			for (let i of cloneTetromino) {
				i.y = arrCoordinates_Y[1];
				i.x = arrCoordinates_X[0] + a;
				a++;
			}

			if (this.checkThatTheFieldIsFree(cloneTetromino, field)) {
				return cloneTetromino
			} else {
				return localTetromino
			}

		}


		if (arrCoordinates_X[0] < arrCoordinates_X[1] && arrCoordinates_X[1] < arrCoordinates_X[2] && arrCoordinates_X[2] === arrCoordinates_X[3] && arrCoordinates_Y[0] === arrCoordinates_Y[1] && arrCoordinates_Y[1] > arrCoordinates_Y[2] && arrCoordinates_Y[2] < arrCoordinates_Y[3]) {
			function first_rotation_L(tetromino) {
				let newCoordinates = []
				for (let i = 0, j = 0; i < tetromino.length; i++ , j++) {
					let obj = {}
					if (j === 0) {
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y - 1;
					} else if (j === 1) {
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y - 1;
					} else if (j === 2) {
						obj.x = tetromino[i].x - 1;
						obj.y = tetromino[i].y + 1;
					} else if (j === 3) {
						obj.x = tetromino[i].x - 1;
						obj.y = tetromino[i].y + 1;
					}
					newCoordinates.push(obj)
				}
				if (tetris.checkThatTheFieldIsFree(newCoordinates, field)) {
					return newCoordinates
				} else {
					return localTetromino
				}
			}
			return first_rotation_L(localTetromino)
		}

		if (arrCoordinates_X[0] < arrCoordinates_X[1] && arrCoordinates_X[1] === arrCoordinates_X[2] && arrCoordinates_X[2] === arrCoordinates_X[3] && arrCoordinates_Y[0] === arrCoordinates_Y[1] && arrCoordinates_Y[1] < arrCoordinates_Y[2] && arrCoordinates_Y[2] < arrCoordinates_Y[3]) {
			function second_rotation_L(tetromino) {
				let newCoordinates = []
				for (let i = 0, j = 0; i < tetromino.length; i++ , j++) {
					let obj = {}
					if (j === 0) {
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y;
					} else if (j === 1) {
						obj.x = tetromino[i].x - 1;
						obj.y = tetromino[i].y + 1;
					} else if (j === 2) {
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y - 1;
					} else if (j === 3) {
						obj.x = tetromino[i].x + 1;
						obj.y = tetromino[i].y - 2;
					}
					newCoordinates.push(obj)
				}
				if (tetris.checkThatTheFieldIsFree(newCoordinates, field)) {
					return newCoordinates
				} else {
					return localTetromino
				}
			}
			return second_rotation_L(localTetromino)
		}

		if (arrCoordinates_X[0] === arrCoordinates_X[1] && arrCoordinates_X[1] < arrCoordinates_X[2] && arrCoordinates_X[2] < arrCoordinates_X[3] && arrCoordinates_Y[0] < arrCoordinates_Y[1] && arrCoordinates_Y[1] > arrCoordinates_Y[2] && arrCoordinates_Y[2] === arrCoordinates_Y[3]) {
			function third_rotation_L(tetromino) {
				let newCoordinates = []
				for (let i = 0, j = 0; i < tetromino.length; i++ , j++) {
					let obj = {}
					if (j === 0) {
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y;
					} else if (j === 1) {
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y;
					} else if (j === 2) {
						obj.x = tetromino[i].x - 1;
						obj.y = tetromino[i].y + 2;
					} else if (j === 3) {
						obj.x = tetromino[i].x - 1;
						obj.y = tetromino[i].y + 2;
					}
					newCoordinates.push(obj)
				}

				if (tetris.checkThatTheFieldIsFree(newCoordinates, field)) {
					return newCoordinates
				} else {
					return localTetromino
				}
			}
			return third_rotation_L(localTetromino)
		}

		if (arrCoordinates_X[0] === arrCoordinates_X[1] && arrCoordinates_X[1] === arrCoordinates_X[2] && arrCoordinates_X[2] < arrCoordinates_X[3] && arrCoordinates_Y[0] < arrCoordinates_Y[1] && arrCoordinates_Y[1] < arrCoordinates_Y[2] && arrCoordinates_Y[2] === arrCoordinates_Y[3]) {
			function fourth_rotation_L(tetromino) {
				let newCoordinates = []
				for (let i = 0, j = 0; i < tetromino.length; i++ , j++) {
					let obj = {}
					if (j === 0) {
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y + 1;
					} else if (j === 1) {
						obj.x = tetromino[i].x + 1;
						obj.y = tetromino[i].y;
					} else if (j === 2) {
						obj.x = tetromino[i].x + 2;
						obj.y = tetromino[i].y - 2;
					} else if (j === 3) {
						obj.x = tetromino[i].x + 1;
						obj.y = tetromino[i].y - 1;
					}
					newCoordinates.push(obj)
				}

				if (tetris.checkThatTheFieldIsFree(newCoordinates, field)) {
					return newCoordinates
				} else {
					return localTetromino
				}
			}
			return fourth_rotation_L(localTetromino)
		}

	},

	checkThatTheFieldIsFree: function (arrayOfCoordinates, field) {
		if (!this.allItemsOnTheField(arrayOfCoordinates, field)) {
			return false
		}
		for (let coordinate of arrayOfCoordinates) {
			if (field[coordinate.y][coordinate.x]) {
				return false
			}
		}
		return true;
	},

	allItemsOnTheField: function (arrayOfCoordinates, field) {
		let lengthField_X = field[0].length;
		let lengthField_Y = field.length;
		for (let coordinate of arrayOfCoordinates) {
			if ((coordinate.x < 0 || coordinate.y < 0) || (coordinate.x >= lengthField_X) || (coordinate.y >= lengthField_Y)) {
				return false;
			}
		}
		return true
	},

	/*
		-----
		-X-X-
		-XXX-
		XXX-X

		transform into
		[
			[false,false,false,false,false],
			[false,true, false,true, false],
			[false,true, true ,true, false],
			[true, true, true, false,true ]
		
		]
		
	*/
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
	rotateTetromino: function (typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates) {
		let shift = this.determineShift(typeOfTetromino, rotationPhaseOfTetromino)
		let pivot = this.calculatorCoordinateOfTopLeft(tetrominoCoordinates);
		let newCoordinates = this.rotatesArrayOfCoordinates(tetrominoCoordinates, pivot)
		let result = this.shiftCoordinates(newCoordinates, shift)
		return result.sort(this.orderCoordinates);
	},
	Tetromino: class {
		constructor(typeOfTetromino, rotationPhase, coordinates) {
			this.typeOfTetromino = typeOfTetromino
			this.rotationPhase = rotationPhase;
			this.coordinates = coordinates;
		}
		rotateTetromino(field) {
			let tetrominoRotateResult = tetris.rotateTetromino(this.typeOfTetromino, this.rotationPhase, this.coordinates)
			if (tetris.checkThatTheFieldIsFree(tetrominoRotateResult, field)) {
				this.rotationPhase = tetris.incrementPhase(this.typeOfTetromino, this.rotationPhase)
				this.coordinates = tetrominoRotateResult
				return tetrominoRotateResult
			} else {
				return this.coordinates
			}
		}
		moveTetromino(field, shift) {
			let shiftTetrominoResult = tetris.shiftCoordinates(this.coordinates, shift)
			if (tetris.checkThatTheFieldIsFree(shiftTetrominoResult, field)) {
				this.coordinates = shiftTetrominoResult
				return shiftTetrominoResult
			} else {
				return this.coordinates
			}
		}
		canMoveDown(field) {
			let shift = { x: 0, y: 1 }
			let shiftTetrominoResult = tetris.shiftCoordinates(this.coordinates, shift)
			return tetris.checkThatTheFieldIsFree(shiftTetrominoResult, field)
		}
		incrementPhase(currentRotationPhaseOfTetromino){
			let numberPhase = this.arrayPhases.indexOf(currentRotationPhaseOfTetromino)
			if (numberPhase !== this.arrayPhases.length - 1) {
				return this.arrayPhases[numberPhase + 1]
			} else {
				return this.arrayPhases[0]
			}
		}
		determineShift(){}
		initCoordinates(fieldSize){}
		keyboardHandler(event){
			switch (event.keyCode) {
				case keyCodeRightButton:
					Tetris.moveRight()
					break;
				case keyCodeLeftButton:
					Tetris.moveLeft()
					break;
				case keyCodeUpButton:
					Tetris.rotate()
					break;
				case keyCodeDownButton:
					Tetris.moveDown()
					break;
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
	getRandomTypeOfTetromino: function () {
		let arrayTypeOfTetramino = ["L", "J", "T", "S", "Z", "I", "O"];
		return arrayTypeOfTetramino[Math.floor(Math.random() * arrayTypeOfTetramino.length)];
	},
	createTetromino: function (fieldSize) {
		let typeOfTetromino = this.getRandomTypeOfTetromino()
		let phase = this.startingPhaseOfTetromino(typeOfTetromino)
		let coodinates = this.initCoordinates(typeOfTetromino, fieldSize)
		return new this.Tetromino(typeOfTetromino, phase, coodinates)
	},
	Tetris: class {
		constructor(fieldSize, gameOverCallback) {
			this.fieldSize = fieldSize;
			this.typeOfTetromino = tetris.getRandomTypeOfTetromino()
			this.coordinatesOfTetramino = tetris.initCoordinates(this.typeOfTetromino, this.fieldSize)
			this.tetromino = tetris.createTetromino(this.fieldSize)
			this.field = new tetris.Field(this.fieldSize)
			this.gameOverCallback = gameOverCallback
		}
		tick() {
			let shift = { x: 0, y: 1 }
			if (this.tetromino.canMoveDown(this.field.field)) {
				this.tetromino.moveTetromino(this.field.field, shift)
			} else {
				this.field.addTetrominoToField(this.tetromino.coordinates)
				this.tetromino = tetris.createTetromino(this.fieldSize)
				this.field.cleanFilledRows()
				if (!tetris.checkThatTheFieldIsFree(this.tetromino.coordinates, this.field.field)) {
					this.gameOverCallback()
				}
			}
		}
		moveLeft() {
			let shift = { x: -1, y: 0 }
			this.tetromino.moveTetromino(this.field.field, shift)
		}
		moveRight() {
			let shift = { x: 1, y: 0 }
			this.tetromino.moveTetromino(this.field.field, shift)
		}
		moveDown() {
			let shift = { x: 0, y: 1 }
			this.tetromino.moveTetromino(this.field.field, shift)
		}
		rotate() {
			this.tetromino.rotateTetromino(this.field.field)
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
//1
class TetrominoL extends tetris.Tetromino {
	constructor() {
		super();
		this.arrayPhases = ["up", "left", "down", "right"];
		this.startingPhaseOfTetromino = "right";
	}
	determineShift() {
		if (rotationPhaseOfTetromino === "up") {
			return { x: 0, y: 1 };
		}
		if (rotationPhaseOfTetromino === "left") {
			return { x: 0, y: 2 };
		}
		if (rotationPhaseOfTetromino === "down") {
			return { x: 0, y: 1 };
		}
		if (rotationPhaseOfTetromino === "right") {
			return { x: 0, y: 2 };
		}
	}
	initCoordinates(fieldSize){
		let arrayForTetromino = tetris.getCoordinates(`
			--X
			XXX
		`);
		let shift = { x: Math.floor((fieldSize.x / 2) - 1), y: 0 }
		return tetris.shiftCoordinates(arrayForTetromino, shift);
	}
}
//2
class TetrominoJ extends tetris.Tetromino {
	constructor() {
		super();
		this.arrayPhases = ["up", "left", "down", "right"];
		this.startingPhaseOfTetromino = "right";
	}
	determineShift() {
		if (rotationPhaseOfTetromino === "up") {
			return { x: 0, y: 1 };
		}
		if (rotationPhaseOfTetromino === "left") {
			return { x: 0, y: 2 };
		}
		if (rotationPhaseOfTetromino === "down") {
			return { x: 0, y: 1 };
		}
		if (rotationPhaseOfTetromino === "right") {
			return { x: 0, y: 2 };
		}
	}
	initCoordinates(fieldSize){
		let arrayForTetromino = tetris.getCoordinates(`
			X--
			XXX
		`);
		let shift = { x: Math.floor((fieldSize.x / 2) - 1), y: 0 }
		return tetris.shiftCoordinates(arrayForTetromino, shift);
	}
}
//3
class TetrominoT extends tetris.Tetromino {
	constructor() {
		super();
		this.arrayPhases = ["up", "left", "down", "right"];
		this.startingPhaseOfTetromino = "up";
	}
	determineShift() {
		if (rotationPhaseOfTetromino === "up") {
			return { x: 0, y: 2 };
		}
		if (rotationPhaseOfTetromino === "left") {
			return { x: 0, y: 2 };
		}
		if (rotationPhaseOfTetromino === "down") {
			return { x: 1, y: 1 };
		}
		if (rotationPhaseOfTetromino === "right") {
			return { x: -1, y: 1 };
		}
	}
	initCoordinates(fieldSize){
		let arrayForTetromino = tetris.getCoordinates(`
			-X-
			XXX
		`);
		let shift = { x: Math.floor((fieldSize.x / 2) - 1), y: 0 }
		return tetris.shiftCoordinates(arrayForTetromino, shift);
	}
}
//4
class TetrominoS extends tetris.Tetromino {
	constructor() {
		super();
		this.arrayPhases = ["vertical", "horizontal"];
		this.startingPhaseOfTetromino = "horizontal";
	}
	determineShift() {
		if (rotationPhaseOfTetromino === "horizontal") {
			return { x: 0, y: 2 };
		}
		if (rotationPhaseOfTetromino === "vertical") {
			return { x: 0, y: 1 };
		}
	}
	initCoordinates(fieldSize){
		let arrayForTetromino = tetris.getCoordinates(`
			-XX
			XX-
		`);
		let shift = { x: Math.floor((fieldSize.x / 2) - 1), y: 0 }
		return tetris.shiftCoordinates(arrayForTetromino, shift);
	}
}
//5
class TetrominoZ extends tetris.Tetromino {
	constructor() {
		super();
		this.arrayPhases = ["vertical", "horizontal"];
		this.startingPhaseOfTetromino = "horizontal";
	}
	determineShift() {
		if (rotationPhaseOfTetromino === "horizontal") {
			return { x: 0, y: 2 };
		}
		if (rotationPhaseOfTetromino === "vertical") {
			return { x: 0, y: 1 };
		}
	}
	initCoordinates(fieldSize){
		let arrayForTetromino = tetris.getCoordinates(`
			XX-
			-XX
		`);
		let shift = { x: Math.floor((fieldSize.x / 2) - 1), y: 0 }
		return tetris.shiftCoordinates(arrayForTetromino, shift);
	}
}

//6
class TetrominoI extends tetris.Tetromino {
	constructor() {
		super();
		this.arrayPhases = ["vertical", "horizontal"];
		this.startingPhaseOfTetromino = "horizontal";
	}
	determineShift() {
		if (rotationPhaseOfTetromino === "horizontal") {
			return { x: 1, y: 2 };
		}
		if (rotationPhaseOfTetromino === "vertical") {
			return { x: -1, y: 1 };
		}
	}
	initCoordinates(fieldSize){
		let arrayForTetromino = tetris.getCoordinates(`
			XXXX
		`);
		let shift = { x: (Math.floor((fieldSize.x / 2) - 1)-1), y: 0 }
		return tetris.shiftCoordinates(arrayForTetromino, shift);
	}
}

//7
class TetrominoO extends tetris.Tetromino {
	constructor() {
		super();
		this.arrayPhases = ["stable"];
		this.startingPhaseOfTetromino = "stable";
	}
	determineShift() {
		if (rotationPhaseOfTetromino === "stable") {
			return { x: 0, y: 1 };
		}
	}
	initCoordinates(fieldSize){
		let arrayForTetromino = tetris.getCoordinates(`
			XX
			XX
		`);
		let shift = { x: Math.floor((fieldSize.x / 2) - 1), y: 0 }
		return tetris.shiftCoordinates(arrayForTetromino, shift);
	}
}

let tetrominoL = new TetrominoL
let tetrominoJ = new TetrominoJ
let tetrominoT = new TetrominoT
let tetrominoS = new TetrominoS
let tetrominoZ = new TetrominoZ
let tetrominoI = new TetrominoI
let tetrominoO = new TetrominoO

module.exports = tetris
