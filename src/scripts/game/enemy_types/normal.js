class Enemy_normal extends Enemy {
    constructor(x, y, w, h) {
        super(x, y, w, h, 1)
    }
    brain() {
        if (collision_objects[playerIndex].y + (collision_objects[playerIndex].h / 2) < this.y + (this.h / 2) - (collision_objects[playerIndex].h / 8)) {
            this.direction = "w" + this.direction[1]
        } else if (collision_objects[playerIndex].y + (collision_objects[playerIndex].h / 2) > this.y + (this.h / 2) + (collision_objects[playerIndex].h / 8)) {
            this.direction = "s" + this.direction[1]
        } else {
            this.direction = "0" + this.direction[1]
        }
        if (collision_objects[playerIndex].x + (collision_objects[playerIndex].w / 2) < this.x + (this.w / 2) - (collision_objects[playerIndex].w / 8)) {
            this.direction = this.direction[0] + "a"
        } else if (collision_objects[playerIndex].x + (collision_objects[playerIndex].w / 2) > this.x + (this.w / 2) + (collision_objects[playerIndex].w / 8)) {
            this.direction = this.direction[0] + "d"
        } else {
            this.direction = this.direction[0] + "0"
        }
    }
}