let tetris = require('./tetris');
module.exports = {
    init: function () {
        let fieldSIze = { x: 5, y: 5 };
        let keyCodeRightButton = 39;
		let keyCodeLeftButton =  37;
		let keyCodeUpButton = 38;
		let keyCodeDownButton = 40;
        let tetris = new tetris.Tetris(fieldSIze, stopTick);
        let tick = setInterval(newTetris.tick, 1000);
        window.addEventListener("keydown", keyboardHandler)
        function keyboardHandler(event) {
            switch (event.keyCode) {
                case keyCodeRightButton:
                    tetris.moveRight()
                    break;
                case keyCodeLeftButton:
                    tetris.moveLeft()
                    break;
                case keyCodeUpButton:
                    tetris.rotate()
                    break;
                case keyCodeDownButton:
                    tetris.moveDown()
                    break;
            }
        }
        function stopTick() {
            clearInterval(tick)
        }
    }
}