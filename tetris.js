module.exports = {
	//тетрамино массив из 4 координат [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}]
	// field это массив двухмерный булин значений, если true в ней есть блок, false блока нет
	rotateLine: function(field, tetromino){
		let lengthField_X = field[0].length;
		let lengthField_Y = field.length;
		let turningPoint = [];
		let arrCoordinates_X  = [];
		let arrCoordinates_Y  = [];
		let a = -1;
		let localTetromino = []
			
		
		tetromino.forEach(function(elem){
			localTetromino.push(Object.assign({},elem));
		})
		tetromino.forEach(function(elem){
			turningPoint.push(Object.assign({},elem));
		})
		
		for(let elem of turningPoint){
			arrCoordinates_X.push(elem.x);
			arrCoordinates_Y.push(elem.y);
		}
		
		function checkThatTheFieldIsFree(elem){
			if(allItemsOnTheField(elem) === false){
				return localTetromino
			}
			for(let i of elem){
				if(field[i.y][i.x] == true){
					return localTetromino
				}
			}
			return elem;
		}
		
		function allItemsOnTheField(elem){
			for(let i of elem){
				if((i.x < 0 || i.y < 0)  || (i.x > (lengthField_X-1)) || (i.y > (lengthField_Y-1))){
					return false;
				}
			}
			return true
		}
		
		if((arrCoordinates_Y[0] == arrCoordinates_Y[1]) && (arrCoordinates_Y[2] == arrCoordinates_Y[3]) && (arrCoordinates_Y[1] == arrCoordinates_Y[2])){
			
			for(let i of turningPoint){
				i.x = arrCoordinates_X[1];
				i.y = arrCoordinates_Y[0] + a;
				a++;
			}
			
			let newPosition = checkThatTheFieldIsFree(turningPoint)
			return newPosition
		}
		
		if((arrCoordinates_X[0] == arrCoordinates_X[1]) && (arrCoordinates_X[2] == arrCoordinates_X[3]) && (arrCoordinates_X[1] == arrCoordinates_X[2])){
			let cloneTetromino = [];
				turningPoint.forEach(function(elem){
				cloneTetromino.push(Object.assign({},elem));
			})				
			for(let i of cloneTetromino){
				i.y = arrCoordinates_Y[1];
				i.x = arrCoordinates_X[0] + a;
				a++;
			}
			
			let newPosition = checkThatTheFieldIsFree(cloneTetromino)
			return newPosition
		}
		
		
		if(arrCoordinates_X[0] < arrCoordinates_X[1] && arrCoordinates_X[1] < arrCoordinates_X[2] && arrCoordinates_X[2] == arrCoordinates_X[3] && arrCoordinates_Y[0] == arrCoordinates_Y[1]&& arrCoordinates_Y[1] > arrCoordinates_Y[2] && arrCoordinates_Y[2] < arrCoordinates_Y[3]){
			function first_rotation_L(tetromino){
				let newCoordinates = []
				for(let i = 0, j = 0; i < tetromino.length; i++, j++){
					let obj = {}
					if(j == 0){
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y-1;
					}else if(j == 1){
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y-1;
					}else if( j == 2){
						obj.x = tetromino[i].x-1;
						obj.y = tetromino[i].y+1;
					}else if( j == 3){
						obj.x = tetromino[i].x-1;
						obj.y = tetromino[i].y+1;
					}
					newCoordinates.push(obj)
				}
				return checkThatTheFieldIsFree(newCoordinates)
			}
			return first_rotation_L(localTetromino)
		}
		
		if(arrCoordinates_X[0] < arrCoordinates_X[1] && arrCoordinates_X[1] == arrCoordinates_X[2] && arrCoordinates_X[2] == arrCoordinates_X[3] && arrCoordinates_Y[0] == arrCoordinates_Y[1] && arrCoordinates_Y[1] < arrCoordinates_Y[2] && arrCoordinates_Y[2] < arrCoordinates_Y[3]){
			function second_rotation_L(tetromino){
				let newCoordinates = []
				for(let i = 0, j = 0; i < tetromino.length; i++, j++){
					let obj = {}
					if(j == 0){
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y;
					}else if(j == 1){
						obj.x = tetromino[i].x-1;
						obj.y = tetromino[i].y+1;
					}else if( j == 2){
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y-1;
					}else if( j == 3){
						obj.x = tetromino[i].x+1;
						obj.y = tetromino[i].y-2;
					}
					newCoordinates.push(obj)
				}
				return checkThatTheFieldIsFree(newCoordinates)
			}
			return second_rotation_L(localTetromino)
		}
		
		if(arrCoordinates_X[0] == arrCoordinates_X[1] && arrCoordinates_X[1] < arrCoordinates_X[2] && arrCoordinates_X[2] < arrCoordinates_X[3] && arrCoordinates_Y[0] < arrCoordinates_Y[1] && arrCoordinates_Y[1] > arrCoordinates_Y[2] && arrCoordinates_Y[2] == arrCoordinates_Y[3]){
			function third_rotation_L(tetromino){
				let newCoordinates = []
				for(let i = 0, j = 0; i < tetromino.length; i++, j++){
					let obj = {}
					if(j == 0){
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y;
					}else if(j == 1){
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y;
					}else if( j == 2){
						obj.x = tetromino[i].x-1;
						obj.y = tetromino[i].y+2;
					}else if( j == 3){
						obj.x = tetromino[i].x-1;
						obj.y = tetromino[i].y+2;
					}
					newCoordinates.push(obj)
				}
				
				return checkThatTheFieldIsFree(newCoordinates)
			}
			return third_rotation_L(localTetromino)
		}
		
		if(arrCoordinates_X[0] == arrCoordinates_X[1] && arrCoordinates_X[1] == arrCoordinates_X[2] && arrCoordinates_X[2] < arrCoordinates_X[3] && arrCoordinates_Y[0] < arrCoordinates_Y[1] && arrCoordinates_Y[1] < arrCoordinates_Y[2] && arrCoordinates_Y[2] == arrCoordinates_Y[3]){
			function fourth_rotation_L(tetromino){
				let newCoordinates = []
				for(let i = 0, j = 0; i < tetromino.length; i++, j++){
					let obj = {}
					if(j == 0){
						obj.x = tetromino[i].x;
						obj.y = tetromino[i].y+1;
					}else if(j == 1){
						obj.x = tetromino[i].x+1;
						obj.y = tetromino[i].y;
					}else if( j == 2){
						obj.x = tetromino[i].x+2;
						obj.y = tetromino[i].y-2;
					}else if( j == 3){
						obj.x = tetromino[i].x+1;
						obj.y = tetromino[i].y-1;
					}
					newCoordinates.push(obj)
				}
				
				return checkThatTheFieldIsFree(newCoordinates)
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
	buildField: function(stringField){
		
		let arr = stringField.split("\n")
		for(let k = 0; k < arr.length; k++){
			for(let z = 0; z < arr[k].length; z++){
				if( arr[k][z] != "-" && arr[k][z] != "X" && arr[k][z] != false) {
					throw new Error("invalid symbol")
				}
			}
		}
		
		let newArr = []
		
		for(let i = 0; i < arr.length; i++){
			let elementsForNewArray = []
			for(let j = 0; j < arr[i].length; j++){
			if(arr[i][j] == "-"){
				elementsForNewArray.push(false)
			}else if(arr[i][j] == "X"){
				elementsForNewArray.push(true)
			 }
			}
			if(elementsForNewArray.length != 0){
				newArr.push(elementsForNewArray)
			}
		}
		if(newArr.length == 0){
			throw new Error("field whitespace")		
		}
		return newArr;
	},
	
	getCoordinates: function(stringOfCoordinates){
		let fieldArray = stringOfCoordinates.split("\n")
		let quantityElem = 0;
		let arrayOfCoordinates = []
		
		for(let i = 0, axisIndex_Y = 0; i < fieldArray.length; i++){
			if(fieldArray[i]!= 0){
				
				for(let j = 0, axisIndex_X = 0; j < fieldArray[i].length; j++){
					let obj = {}
					if(fieldArray[i][j]!= 0){
						if(fieldArray[i][j] == "X"){
							obj.x = axisIndex_X
							obj.y = axisIndex_Y
							quantityElem++;
							
							arrayOfCoordinates.push(obj);
							
						}
						axisIndex_X++;
					}
					
				}
				axisIndex_Y++;
			}
			
		}
		return arrayOfCoordinates;
	},
	
	buildTetromino: function(stringOfCoordinates){
		let arrayOfCoordinates = [];
		module.exports.getCoordinates(stringOfCoordinates);
		module.exports.getCoordinates(stringOfCoordinates).forEach(function(elem){
			arrayOfCoordinates.push(Object.assign({},elem));
		})
		let repeatCycle = true;
		while (repeatCycle) {
			for(let i = 0, j = 1; j < arrayOfCoordinates.length; i++, j++){
				if(arrayOfCoordinates[i].x > arrayOfCoordinates[j].x){
					let b  = arrayOfCoordinates[j];
					arrayOfCoordinates[j] = arrayOfCoordinates[i];
					arrayOfCoordinates[i] = b;
				} 
				
			}
			if(arrayOfCoordinates[0].x <= arrayOfCoordinates[1].x && arrayOfCoordinates[1].x <= arrayOfCoordinates[2].x && arrayOfCoordinates[2].x <= arrayOfCoordinates[3].x){
				repeatCycle = false
			}					
		}
		if(arrayOfCoordinates.length != 4){
			throw new Error("tetromino size is not correct");
		} 
		return arrayOfCoordinates;
		
	}
	
}