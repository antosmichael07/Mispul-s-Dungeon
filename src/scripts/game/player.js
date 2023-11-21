class Player extends Collision_object {
    constructor(x, y, w, h) {
        super(x, y, w, h, "player", 3, "green")
    }
    register_input() {
        if (input.keyboard.w) {
            this.direction = "w" + this.direction[1]
        } else if (this.direction[0] == "w") {
            this.direction = "0" + this.direction[1]
        }
        if (input.keyboard.a) {
            this.direction = this.direction[0] + "a"
        } else if (this.direction[1] == "a") {
            this.direction = this.direction[0] + "0"
        }
        if (input.keyboard.s) {
            this.direction = "s" + this.direction[1] 
        } else if (this.direction[0] == "s") {
            this.direction = "0" + this.direction[1]
        }
        if (input.keyboard.d) {
            this.direction = this.direction[0] + "d"
        } else if (this.direction[1] == "d") {
            this.direction = this.direction[0] + "0"
        }
    }
}

collision_objects.push(new Player(100, 100, 100, 100))
var playerIndex = collision_objects.length - 1

function player() {
    collision_objects[playerIndex].register_input()
}