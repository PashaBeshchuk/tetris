let tetris = require('./tetris');
module.exports = {
    init: function () {
        let fieldSIze = { x: 5, y: 5 };
        let newTetris = new tetris.Tetris(fieldSIze, stopTick());
        let tick = setInterval(newTetris.tick, 1000);

        keyboardHandler()   
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
        },
        function stopTick() {
            clearInterval(tick)
            console.log("stopTick")
        }
    }
}