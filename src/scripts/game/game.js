function game() {
    player()
    collision_objects.forEach(object => {
        object.move()
        object.draw()
    });
}