module.exports = {
	//тетрамино массив из 4 координат [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}]
	// field это массив двухмерный булин значений, если true в ней есть блок, false блока нет
	rotateLine: function (field, tetromino) {
		let lengthField_X = field[0].length;
		let lengthField_Y = field.length;
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

		function checkThatTheFieldIsFree(arrayOfCoordinates) {
			if (allItemsOnTheField(arrayOfCoordinates) === false) {
				return false
			}
			for (let coordinate of arrayOfCoordinates) {
				if (field[coordinate.y][coordinate.x] === true) {
					return false
				}
			}
			return true;
		}

		function allItemsOnTheField(arrayOfCoordinates) {
			for (let coordinate of arrayOfCoordinates) {
				if (
					(coordinate.x < 0 || coordinate.y < 0) ||
					(coordinate.x > (lengthField_X - 1)) ||
					(coordinate.y > (lengthField_Y - 1))
				) {
					return false;
				}
			}
			return true
		}

		if ((arrCoordinates_Y[0] === arrCoordinates_Y[1]) && (arrCoordinates_Y[2] === arrCoordinates_Y[3]) && (arrCoordinates_Y[1] === arrCoordinates_Y[2])) {

			for (let i of turningPoint) {
				i.x = arrCoordinates_X[1];
				i.y = arrCoordinates_Y[0] + a;
				a++;
			}

			if (checkThatTheFieldIsFree(turningPoint)) {
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

			if (checkThatTheFieldIsFree(cloneTetromino)) {
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
				if (checkThatTheFieldIsFree(newCoordinates)) {
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
				if (checkThatTheFieldIsFree(newCoordinates)) {
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

				if (checkThatTheFieldIsFree(newCoordinates)) {
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

				if (checkThatTheFieldIsFree(newCoordinates)) {
					return newCoordinates
				} else {
					return localTetromino
				}
			}
			return fourth_rotation_L(localTetromino)
		}

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
				if (arr[k][z] != "-" && arr[k][z] != "X" && arr[k][z] != false) {
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
			if (elementsForNewArray.length != 0) {
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
		if (arrayOfCoordinates.length != 4) {
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
		let xCoordinateDifference = firstCoordinate.x - secondCoordinate.x;
		if (xCoordinateDifference === 0) {
			let yCoordinateDifference = firstCoordinate.y - secondCoordinate.y;
			return yCoordinateDifference;
		}
		return xCoordinateDifference;
	}
}