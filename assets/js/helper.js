
function getMousePosition(canvas, e) {
    let client = canvas.getBoundingClientRect();
    return {
        x: e.clientX - client.x,
        y: e.clientY - client.y
    }
}