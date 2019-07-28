let tetris = require('./tetris');
module.exports = {
    init: function () {
        let fieldSIze = { x: 5, y: 5 };
        let keyCodeRightButton = 39;
		let keyCodeLeftButton =  37;
		let keyCodeUpButton = 38;
		let keyCodeDownButton = 40;
        let newTetris = new tetris.Tetris(fieldSIze, stopTick);
        let tick = setInterval(newTetris.tick, 1000);
        window.addEventListener("keydown", keyboardHandler)
        keyboardHandler(event.keyCode, newTetris)
        function keyboardHandler(keyCode, tetris) {
            switch (keyCode) {
                case keyCodeRightButton:
                    newTetris.moveRight()
                    break;
                case keyCodeLeftButton:
                    newTetris.moveLeft()
                    break;
                case keyCodeUpButton:
                    newTetris.rotate()
                    break;
                case keyCodeDownButton:
                    newTetris.moveDown()
                    break;
            }
        }
        function stopTick() {
            clearInterval(tick)
        }
    }
}