var input = {
    mouse: {
        x: 0,
        y: 0,
        clicked_button: 0,
        button: 0
    },
    keyboard: {}
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

document.addEventListener('keydown', function(e) {
    input.keyboard[e.key] = true
})

document.addEventListener('keyup', function(e) {
    input.keyboard[e.key] = false
})