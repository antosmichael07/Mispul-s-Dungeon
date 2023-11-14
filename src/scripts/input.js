var input = {
    mouse: {
        x: 0,
        y: 0,
        clicked_button: 0,
        button: 0
    }
}

document.addEventListener('mousemove', function(e) {
    input.mouse.x = e.clientX
    input.mouse.y = e.clientY
})

document.addEventListener('mousedown', function(e) {
    input.mouse.x = e.clientX
    input.mouse.y = e.clientY
    input.mouse.clicked_button = true
    input.mouse.button = e.button
})

document.addEventListener('mouseup', function(e) {
    input.mouse.clicked_button = false
})