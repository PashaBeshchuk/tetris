var tetris=function(t){var e={};function o(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(i,r,function(e){return t[e]}.bind(null,r));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){let i=o(1);e.tetris=i},function(t,e){let o={checkThatTheFieldIsFree:function(t,e){if(!this.allItemsOnTheField(t,e))return!1;for(let o of t)if(e[o.y][o.x])return!1;return!0},allItemsOnTheField:function(t,e){let o=e[0].length,i=e.length;for(let e of t)if(e.x<0||e.y<0||e.x>=o||e.y>=i)return!1;return!0},buildField:function(t){let e=t.split("\n");for(let t=0;t<e.length;t++)for(let o=0;o<e[t].length;o++)if("-"!==e[t][o]&&"X"!==e[t][o]&&0!=e[t][o])throw new Error("invalid symbol");let o=[];for(let t=0;t<e.length;t++){let i=[];for(let o=0;o<e[t].length;o++)"-"===e[t][o]?i.push(!1):"X"===e[t][o]&&i.push(!0);0!==i.length&&o.push(i)}if(0===o.length)throw new Error("field whitespace");return o},getCoordinates:function(t){let e=t.split("\n"),o=[];for(let t=0,i=0;t<e.length;t++)if(""!==e[t]){for(let r=0,n=0;r<e[t].length;r++){let s={};"-"===e[t][r]&&n++,"X"===e[t][r]&&(s.x=n,s.y=i,0,o.push(s),n++)}i++}return o.sort(this.orderCoordinates)},buildTetromino:function(t){let e=[];if(this.getCoordinates(t).forEach(function(t){e.push(Object.assign({},t))}),4!==e.length)throw new Error("tetromino size is not correct");return e},rotateElement:function(t,e){let o=e.y-t.y,i=e.x-t.x;return{x:e.x-o,y:e.y+i}},rotatesArrayOfCoordinates:function(t,e){let o=[];for(let i of t)o.push(this.rotateElement(i,e));return o.sort(this.orderCoordinates)},orderCoordinates:function(t,e){return t.x===e.x?t.y-e.y:t.x-e.x},calculatorCoordinateOfTopLeft:function(t){let e={};for(let o=0;o<t.length;o++)(e.x>t[o].x||void 0===e.x)&&(e.x=t[o].x),(e.y>t[o].y||void 0===e.y)&&(e.y=t[o].y);return e},shiftCoordinate:function(t,e){let o={};return o.x=t.x+e.x,o.y=t.y+e.y,o},shiftCoordinates:function(t,e){let o=[];for(let i of t)o.push(this.shiftCoordinate(i,e));return o},rotateTetromino:function(t,e,o){let i=t.determineShift(e),r=this.calculatorCoordinateOfTopLeft(o),n=this.rotatesArrayOfCoordinates(o,r);return this.shiftCoordinates(n,i).sort(this.orderCoordinates)},Tetromino:class{constructor(t,e,o){this._typeOfTetromino=t,this._rotationPhase=e,this._coordinates=o}get rotationPhase(){return this._rotationPhase}get coordinates(){return this._coordinates}get typeOfTetromino(){return this._typeOfTetromino}set coordinates(t){return this._coordinates=t}set rotationPhase(t){return this._rotationPhase=t}rotateTetromino(t){let e=o.rotateTetromino(this._typeOfTetromino,this._rotationPhase,this._coordinates);return o.checkThatTheFieldIsFree(e,t)?(this._rotationPhase=this._typeOfTetromino.incrementPhase(this._typeOfTetromino,this._rotationPhase),this._coordinates=e,e):this._coordinates}moveTetromino(t,e){let i=o.shiftCoordinates(this._coordinates,e);return o.checkThatTheFieldIsFree(i,t)?(this._coordinates=i,i):this._coordinates}canMoveDown(t){let e=o.shiftCoordinates(this._coordinates,{x:0,y:1});return o.checkThatTheFieldIsFree(e,t)}incrementPhase(t,e){let o=t.arrayPhases.indexOf(e);return o!==t.arrayPhases.length-1?t.arrayPhases[o+1]:t.arrayPhases[0]}},Field:class{constructor(t){if(Array.isArray(t))this.field=t;else{this.field=[];for(let e=0;e<t.y;e++){let e=[];for(let o=0;o<t.x;o++)e.push(!1);this.field.push(e)}}this.fieldSize={x:this.field[0].length,y:this.field.length}}addTetrominoToField(t){for(let e=0;e<t.length;e++)this.field[t[e].y][t[e].x]=!0;return this.field}cleanFilledRows(){for(let t=0;t<this.fieldSize.y;t++){let e=0;for(let o=0;o<this.fieldSize.x;o++)this.field[t][o]&&e++;if(this.fieldSize.x===e){let e=[];for(let t=0;t<this.fieldSize.x;t++)e.push(!1);this.field.splice(t,1),this.field.unshift(e)}}return this.field}},getRandomTypeOfTetromino:function(t){let e=[new this.TetrominoL(t),new this.TetrominoJ(t),new this.TetrominoT(t),new this.TetrominoS(t),new this.TetrominoZ(t),new this.TetrominoI(t),new this.TetrominoO(t)];return e[Math.floor(Math.random()*e.length)]},createTetromino:function(t){let e=this.getRandomTypeOfTetromino(t),o=e.startingPhaseOfTetromino,i=e.initCoordinates(t);return new this.Tetromino(e,o,i)},Tetris:class{constructor(t,e){this.fieldSize=t,this.createOfTetromino=o.createTetromino(this.fieldSize),this.tetromino=new o.Tetromino(this.createOfTetromino.typeOfTetromino,this.createOfTetromino.rotationPhase,this.createOfTetromino.coordinates),this.coordinatesOfTetramino=this.tetromino.coordinates,this.field=new o.Field(this.fieldSize),this.gameOverCallback=e}tick(){let t={x:0,y:1};this.tetromino.canMoveDown(this.field.field)?this.coordinatesOfTetramino=this.tetromino.moveTetromino(this.field.field,t):(this.field.addTetrominoToField(this.coordinatesOfTetramino),this.createOfTetromino=o.createTetromino(this.fieldSize),this.tetromino=new o.Tetromino(this.createOfTetromino.typeOfTetromino,this.createOfTetromino.rotationPhase,this.createOfTetromino.coordinates),this.coordinatesOfTetramino=this.tetromino.coordinates,this.field.cleanFilledRows(),o.checkThatTheFieldIsFree(this.coordinatesOfTetramino,this.field.field)||this.gameOverCallback())}moveLeft(){this.coordinatesOfTetramino=this.tetromino.moveTetromino(this.field.field,{x:-1,y:0})}moveRight(){this.coordinatesOfTetramino=this.tetromino.moveTetromino(this.field.field,{x:1,y:0})}moveDown(){this.coordinatesOfTetramino=this.tetromino.moveTetromino(this.field.field,{x:0,y:1})}rotate(){this.coordinatesOfTetramino=this.tetromino.rotateTetromino(this.field.field)}},displayField:function(t,e,o){let i="\n            ";for(let r=0;r<t.y;r++){for(let n=0;n<t.x;n++)o[r][n]?i+="o":this.coordinateMatchingCheck(e,n,r)?i+="X":i+="-";i+="\n            "}return i},coordinateMatchingCheck:function(t,e,o){for(let i=0;i<t.length;i++)if(t[i].x===e&&t[i].y===o)return!0;return!1}};o.TetrominoL=class extends o.Tetromino{constructor(){super(),this.arrayPhases=["up","left","down","right"],this.startingPhaseOfTetromino="right"}determineShift(t){return"up"===t?{x:0,y:1}:"left"===t?{x:0,y:2}:"down"===t?{x:0,y:1}:"right"===t?{x:0,y:2}:void 0}initCoordinates(t){let e=o.getCoordinates("\n\t\t\t--X\n\t\t\tXXX\n\t\t"),i={x:Math.floor(t.x/2-1),y:0};return o.shiftCoordinates(e,i)}},o.TetrominoJ=class extends o.Tetromino{constructor(){super(),this.arrayPhases=["up","left","down","right"],this.startingPhaseOfTetromino="left"}determineShift(t){return"up"===t?{x:0,y:1}:"left"===t?{x:0,y:2}:"down"===t?{x:0,y:1}:"right"===t?{x:0,y:2}:void 0}initCoordinates(t){let e=o.getCoordinates("\n\t\t\tX--\n\t\t\tXXX\n\t\t"),i={x:Math.floor(t.x/2-1),y:0};return o.shiftCoordinates(e,i)}},o.TetrominoT=class extends o.Tetromino{constructor(){super(),this.arrayPhases=["up","left","down","right"],this.startingPhaseOfTetromino="up"}determineShift(t){return"up"===t?{x:0,y:2}:"left"===t?{x:0,y:2}:"down"===t?{x:1,y:1}:"right"===t?{x:-1,y:1}:void 0}initCoordinates(t){let e=o.getCoordinates("\n\t\t\t-X-\n\t\t\tXXX\n\t\t"),i={x:Math.floor(t.x/2-1),y:0};return o.shiftCoordinates(e,i)}},o.TetrominoS=class extends o.Tetromino{constructor(){super(),this.arrayPhases=["vertical","horizontal"],this.startingPhaseOfTetromino="horizontal"}determineShift(t){return"horizontal"===t?{x:0,y:2}:"vertical"===t?{x:0,y:1}:void 0}initCoordinates(t){let e=o.getCoordinates("\n\t\t\t-XX\n\t\t\tXX-\n\t\t"),i={x:Math.floor(t.x/2-1),y:0};return o.shiftCoordinates(e,i)}},o.TetrominoZ=class extends o.Tetromino{constructor(){super(),this.arrayPhases=["vertical","horizontal"],this.startingPhaseOfTetromino="horizontal"}determineShift(t){return"horizontal"===t?{x:0,y:2}:"vertical"===t?{x:0,y:1}:void 0}initCoordinates(t){let e=o.getCoordinates("\n\t\t\tXX-\n\t\t\t-XX\n\t\t"),i={x:Math.floor(t.x/2-1),y:0};return o.shiftCoordinates(e,i)}},o.TetrominoI=class extends o.Tetromino{constructor(){super(),this.arrayPhases=["vertical","horizontal"],this.startingPhaseOfTetromino="horizontal"}determineShift(t){return"horizontal"===t?{x:1,y:2}:"vertical"===t?{x:-1,y:1}:void 0}initCoordinates(t){let e=o.getCoordinates("\n\t\t\tXXXX\n\t\t"),i={x:Math.floor(t.x/2-1)-1,y:0};return o.shiftCoordinates(e,i)}},o.TetrominoO=class extends o.Tetromino{constructor(){super(),this.arrayPhases=["stable"],this.startingPhaseOfTetromino="stable"}determineShift(t){if("stable"===t)return{x:0,y:1}}initCoordinates(t){let e=o.getCoordinates("\n\t\t\tXX\n\t\t\tXX\n\t\t"),i={x:Math.floor(t.x/2-1),y:0};return o.shiftCoordinates(e,i)}},t.exports=o}]);