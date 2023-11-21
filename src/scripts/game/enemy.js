class Enemy extends Collision_object {
    constructor (x, y, w, h, speed) {
        super(x, y, w, h, "enemy", speed, "red")
    }
}

function enemy() {
    collision_objects.forEach(object => {
        if (object.id == "enemy") {
            object.brain()
        }
    });
}