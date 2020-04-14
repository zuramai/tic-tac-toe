const canvas = document.getElementById('canvas')
const imgX = document.getElementById('x');
const imgO = document.getElementById('o');
const game = new Game
game.init(canvas,imgX,imgO)


canvas.addEventListener('click', function(e) {
    let mousePosition = getMousePosition(canvas,e)

    game.handleClick(mousePosition);
})