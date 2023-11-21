function game() {
    player()
    enemy()
    collision_objects.forEach(object => {
        object.move()
        object.draw_hitbox()
    });
}