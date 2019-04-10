module.exports = {
	//тетрамино массив из 4 координат [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}]
	// field это массив двухмерный булин значений, если true в ней есть блок, false блока нет
	rotateLine: function(field, tetramino){
		let lengthField_X = field[0].length;
		let lengthField_Y = field.length;
		let turningPoint = [];
		let arrCoordinates_X  = [];
		let arrCoordinates_Y  = [];
		let a = -1;
		let localTetramino = []
		
		tetramino.forEach(function(elem){
			localTetramino.push(Object.assign({},elem));
		})
		tetramino.forEach(function(elem){
			turningPoint.push(Object.assign({},elem));
		})
		
		for(let elem of turningPoint){
			arrCoordinates_X.push(elem.x);
			arrCoordinates_Y.push(elem.y);
		}
		
		if((arrCoordinates_Y[0] == arrCoordinates_Y[1]) && (arrCoordinates_Y[2] == arrCoordinates_Y[3]) && (arrCoordinates_Y[1] == arrCoordinates_Y[2])){
			
			for(let i of turningPoint){
				i.x = arrCoordinates_X[1];
				i.y = arrCoordinates_Y[0] + a;
				a++;
			}
			let newPosition = allItemsOnTheField(turningPoint)
			if(checkThatTheFieldIsFree(newPosition)){
				return localTetramino
			}else{
				return newPosition
			}
		}
		
		if((arrCoordinates_X[0] == arrCoordinates_X[1]) && (arrCoordinates_X[2] == arrCoordinates_X[3]) && (arrCoordinates_X[1] == arrCoordinates_X[2])){
			let cloneTetramino = [];
				turningPoint.forEach(function(elem){
				cloneTetramino.push(Object.assign({},elem));
			})				
			for(let i of cloneTetramino){
				i.y = arrCoordinates_Y[1];
				i.x = arrCoordinates_X[0] + a;
				a++;
			}
			
			let newPosition = allItemsOnTheField(cloneTetramino)
			if(checkThatTheFieldIsFree(newPosition)){
				return localTetramino
			}else{
				return newPosition
			}
		}
		
		function allItemsOnTheField(elem){
			for(let i of elem){
				if((i.x < 0 || i.y < 0)  || (i.x >= lengthField_X) || (i.y >= lengthField_Y)){
					return localTetramino;
				}
			}
			return elem;
		}
			
		function checkThatTheFieldIsFree(elem){
			let coordinates_X =[]
			let coordinates_Y =[]
			for(let i of elem){
				coordinates_X.push(i.x)
				coordinates_Y.push(i.y)
			}
			
			for(let i = 0; i < arrCoordinates_X.length; i++){
				if(field[coordinates_Y[i]][coordinates_X[i]] == true){
					return true
				}
			}
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
	
	buildTetramino: function(coordinats){
		let math = coordinats.split("\n")
		let arrCoordinats = []
		let quantityElem = 0;
		
		for(let i = 0, elem_Y = 0; i < math.length; i++){
			if(math[i]!= false){
				
				for(let j = 0, elem_X = 0; j < math[i].length; j++){
					let obj = {}
					if(math[i][j]!= false){
						if(math[i][j] == "X"){
							console.log(math[i][j])
							obj.x = elem_X
							obj.y = elem_Y
							quantityElem++;
							
							arrCoordinats.push(obj)
							
						}
						elem_X++
					}
					
				}
				elem_Y++
			}
			
		}
		let condition = true;
		while (condition) {
			for(let i = 0, j = 1; j < arrCoordinats.length; i++, j++){
				if(arrCoordinats[i].x > arrCoordinats[j].x){
					let b  = arrCoordinats[j];
					arrCoordinats[j] = arrCoordinats[i];
					arrCoordinats[i] = b
				} 
				
			}
			if(arrCoordinats[0].x <= arrCoordinats[1].x && arrCoordinats[1].x <= arrCoordinats[2].x && arrCoordinats[2].x <= arrCoordinats[3].x){
				condition = false
			}					
		}
		if(quantityElem != 4){
			throw error;
		}
		return arrCoordinats;
		
	}
	
}