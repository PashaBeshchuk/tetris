module.exports = {
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
				if (module.exports.checkThatTheFieldIsFree(newCoordinates, field)) {
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
				if (module.exports.checkThatTheFieldIsFree(newCoordinates, field)) {
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

				if (module.exports.checkThatTheFieldIsFree(newCoordinates, field)) {
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

				if (module.exports.checkThatTheFieldIsFree(newCoordinates, field)) {
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
	determineShift: function (typeOfTetromino, rotationPhaseOfTetromino) {
		if (typeOfTetromino === "O") {
			if (rotationPhaseOfTetromino === "stable") {
				return { x: 0, y: 1 };
			}
		}
		if (typeOfTetromino === "J") {
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
		if (typeOfTetromino === "L") {
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
		if (typeOfTetromino === "T") {
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
		if (typeOfTetromino === "S") {
			if (rotationPhaseOfTetromino === "horizontal") {
				return { x: 0, y: 2 };
			}
			if (rotationPhaseOfTetromino === "vertical") {
				return { x: 0, y: 1 };
			}
		}
		if (typeOfTetromino === "Z") {
			if (rotationPhaseOfTetromino === "horizontal") {
				return { x: 0, y: 2 };
			}
			if (rotationPhaseOfTetromino === "vertical") {
				return { x: 0, y: 1 };
			}
		}
		if (typeOfTetromino === "I") {
			if (rotationPhaseOfTetromino === "horizontal") {
				return { x: 1, y: 2 };
			}
			if (rotationPhaseOfTetromino === "vertical") {
				return { x: -1, y: 1 };
			}
		}
	},
	rotateTetromino: function (typeOfTetromino, rotationPhaseOfTetromino, tetrominoCoordinates) {
		let shift = this.determineShift(typeOfTetromino, rotationPhaseOfTetromino)
		let pivot = this.calculatorCoordinateOfTopLeft(tetrominoCoordinates);
		let newCoordinates = this.rotatesArrayOfCoordinates(tetrominoCoordinates, pivot)
		let result = this.shiftCoordinates(newCoordinates, shift)
		return result.sort(this.orderCoordinates);
	},
	incrementPhase: function (typeOfTetromino, currentRotationPhaseOfTetromino) {
		let arrayPhases = [];
		if (typeOfTetromino === "I" || typeOfTetromino === "S" || typeOfTetromino === "Z") {
			arrayPhases = ["vertical", "horizontal"];
		}
		if (typeOfTetromino === "L" || typeOfTetromino === "J" || typeOfTetromino === "T") {
			arrayPhases = ["up", "left", "down", "right"];
		}
		if (typeOfTetromino === "O") {
			arrayPhases = ["stable"];
		}
		let numberPhase = arrayPhases.indexOf(currentRotationPhaseOfTetromino)
		if (numberPhase !== arrayPhases.length - 1) {
			return arrayPhases[numberPhase + 1]
		} else {
			return arrayPhases[0]
		}
	},
	Tetromino: class {
		constructor(typeOfTetromino, rotationPhase, coordinates) {
			this.typeOfTetromino = typeOfTetromino
			this.rotationPhase = rotationPhase;
			this.coordinates = coordinates;
		}
		rotateTetromino(field) {
			let tetrominoRotateResult = module.exports.rotateTetromino(this.typeOfTetromino, this.rotationPhase, this.coordinates)
			if (module.exports.checkThatTheFieldIsFree(tetrominoRotateResult, field)) {
				this.rotationPhase = module.exports.incrementPhase(this.typeOfTetromino, this.rotationPhase)
				this.coordinates = tetrominoRotateResult
				return tetrominoRotateResult
			} else {
				return this.coordinates
			}
		}
		moveTetromino(field, shift) {
			let shiftTetrominoResult = module.exports.shiftCoordinates(this.coordinates, shift)
			if (module.exports.checkThatTheFieldIsFree(shiftTetrominoResult, field)) {
				this.coordinates = shiftTetrominoResult
				return shiftTetrominoResult
			} else {
				return this.coordinates
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
	startingPhaseOfTetromino: function (typeOfTetromino) {
		switch (typeOfTetromino) {
			case "L":
				return "right";
			case "J":
				return "left";
			case "T":
				return "up";
			case "Z":
				return "horizontal";
			case "S":
				return "horizontal";
			case "I":
				return "vertical"
			case "O":
				return "stable";
		}
	},
	getRandomTypeOfTetromino: function () {
		let arrayTypeOfTetramino = ["L", "J", "T", "S", "Z", "I", "O"];
		return arrayTypeOfTetramino[Math.floor(Math.random() * arrayTypeOfTetramino.length)];
	},
	initCoordinates: function (typeOfTetromino, fieldSize) {
		let localFieldSize = Object.assign({}, fieldSize);
		let arrayForTetromino = [];
		let j;
		let k;
		if (typeOfTetromino === "I") {
			j = -2;
			k = 0;
		}
		if (typeOfTetromino === "L" || typeOfTetromino === "J" || typeOfTetromino === "T" || typeOfTetromino === "S") {
			j = -1;
			k = 1;
		}
		if (typeOfTetromino === "Z" || typeOfTetromino === "O") {
			j = -1;
			k = 0;
		}
		for (let i = 0; i < 4; i++ , j++) {
			let coordinatesTetromino = {};
			if (i === 3) {
				if (typeOfTetromino === "T" || typeOfTetromino === "Z" || typeOfTetromino === "S" || typeOfTetromino === "O") {
					j = 0;
					k = 0;
				}
				if (typeOfTetromino === "L") {
					j = 1;
					k = 0;
				}
				if (typeOfTetromino === "J") {
					j = -1;
					k = 0;
				}
			}
			if (i === 1) {
				if (typeOfTetromino === "Z") {
					k = 1;
				}
				if (typeOfTetromino === "O") {
					j = -1;
					k = 1;
				}
			}
			if (i === 2) {
				if (typeOfTetromino === "Z") {
					k = 1;
				}
				if (typeOfTetromino === "S") {
					k = 0;
				}
				if (typeOfTetromino === "O") {
					j = 0;
					k = 1;
				}
			}
			coordinatesTetromino.x = coordinatesTetromino.x = (localFieldSize.x / 2) + j;
			coordinatesTetromino.y = k;
			arrayForTetromino.push(coordinatesTetromino);
		}
		return arrayForTetromino.sort(this.orderCoordinates);
	}
}
