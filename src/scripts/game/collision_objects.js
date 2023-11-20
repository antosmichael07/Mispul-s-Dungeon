var collision_objects = []

class Collision_object {
    constructor(x, y, w, h, id, speed, color = "purple") {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.id = id
        this.speed = speed
        this.straight_speed = speed
        this.diagonal_speed = Math.round(speed / 1.41421356237)
        this.direction = "00"
        this.color = color
    }
    move() {
        if (this.direction[0] != "0" && this.direction[1] != "0") {
            this.speed = this.diagonal_speed
        } else {
            this.speed = this.straight_speed
        }
        if (this.direction[0] == "w") {
            var collision_object_in_way_y = "false"
            for (var i = 0; i < collision_objects.length; i++) {
                if (collision_objects[i] == this) {
                    continue
                }
                if (
                    (
                        (this.x >= collision_objects[i].x && this.x < collision_objects[i].x + collision_objects[i].w) ||
                        (this.x + this.w > collision_objects[i].x && this.x + this.w < collision_objects[i].x + collision_objects[i].w) ||
                        (this.x <= collision_objects[i].x && this.x < collision_objects[i].x + collision_objects[i].w && this.x + this.w > collision_objects[i].x && this.x + this.w >= collision_objects[i].x + collision_objects[i].w)
                    )
                    &&
                    (
                        (this.y > collision_objects[i].y && this.y - this.speed < collision_objects[i].y) ||
                        (this.y > collision_objects[i].y + collision_objects[i].h - 1 && this.y - this.speed < collision_objects[i].y + collision_objects[i].h)
                    )
                ) {
                    if (collision_objects[i].y + collision_objects[i].h > collision_object_in_way_y) {
                        collision_object_in_way_y = collision_objects[i].y + collision_objects[i].h
                    } else if (collision_object_in_way_y == "false") {
                        collision_object_in_way_y = collision_objects[i].y + collision_objects[i].h
                    }
                }
            }
            if (collision_object_in_way_y != "false") {
                this.y = collision_object_in_way_y
            } else {
                this.y -= this.speed
            }
        } else if (this.direction[0] == "s") {
            var collision_object_in_way_y = "false"
            for (var i = 0; i < collision_objects.length; i++) {
                if (collision_objects[i] == this) {
                    continue
                }
                if (
                    (
                        (this.x >= collision_objects[i].x && this.x < collision_objects[i].x + collision_objects[i].w) ||
                        (this.x + this.w > collision_objects[i].x && this.x + this.w < collision_objects[i].x + collision_objects[i].w) ||
                        (this.x <= collision_objects[i].x && this.x < collision_objects[i].x + collision_objects[i].w && this.x + this.w > collision_objects[i].x && this.x + this.w >= collision_objects[i].x + collision_objects[i].w)
                    )
                    &&
                    (
                        (this.y + this.h - 1 < collision_objects[i].y && this.y + this.h + this.speed > collision_objects[i].y) ||
                        (this.y + this.h < collision_objects[i].y + collision_objects[i].h - 1 && this.y + this.h + this.speed > collision_objects[i].y + collision_objects[i].h)
                    )
                ) {
                    if (collision_objects[i].y < collision_object_in_way_y) {
                        collision_object_in_way_y = collision_objects[i].y
                    } else if (collision_object_in_way_y == "false") {
                        collision_object_in_way_y = collision_objects[i].y
                    }
                }
            }
            if (collision_object_in_way_y != "false") {
                this.y = collision_object_in_way_y - this.h
            } else {
                this.y += this.speed
            }
        }
        if (this.direction[1] == "a") {
            var collision_object_in_way_x = "false"
            for (var i = 0; i < collision_objects.length; i++) {
                if (collision_objects[i] == this) {
                    continue
                }
                if (
                    (
                        (this.y >= collision_objects[i].y && this.y < collision_objects[i].y + collision_objects[i].h) ||
                        (this.y + this.h > collision_objects[i].y && this.y + this.h < collision_objects[i].y + collision_objects[i].h) ||
                        (this.y <= collision_objects[i].y && this.y < collision_objects[i].y + collision_objects[i].h && this.y + this.h > collision_objects[i].y && this.y + this.h >= collision_objects[i].y + collision_objects[i].h)
                    )
                    &&
                    (
                        (this.x > collision_objects[i].x && this.x - this.speed < collision_objects[i].x) ||
                        (this.x > collision_objects[i].x + collision_objects[i].w - 1 && this.x - this.speed < collision_objects[i].x + collision_objects[i].w)
                    )
                ) {
                    if (collision_objects[i].x + collision_objects[i].w > collision_object_in_way_x) {
                        collision_object_in_way_x = collision_objects[i].x + collision_objects[i].w
                    } else if (collision_object_in_way_x == "false") {
                        collision_object_in_way_x = collision_objects[i].x + collision_objects[i].w
                    }
                }
            }
            if (collision_object_in_way_x != "false") {
                this.x = collision_object_in_way_x
            } else {
                this.x -= this.speed
            }
        } else if (this.direction[1] == "d") {
            var collision_object_in_way_x = "false"
            for (var i = 0; i < collision_objects.length; i++) {
                if (collision_objects[i] == this) {
                    continue
                }
                if (
                    (
                        (this.y >= collision_objects[i].y && this.y < collision_objects[i].y + collision_objects[i].h) ||
                        (this.y + this.h > collision_objects[i].y && this.y + this.h < collision_objects[i].y + collision_objects[i].h) ||
                        (this.y <= collision_objects[i].y && this.y < collision_objects[i].y + collision_objects[i].h && this.y + this.h > collision_objects[i].y && this.y + this.h >= collision_objects[i].y + collision_objects[i].h)
                    )
                    &&
                    (
                        (this.x + this.w - 1 < collision_objects[i].x && this.x + this.w + this.speed > collision_objects[i].x) ||
                        (this.x + this.w < collision_objects[i].x + collision_objects[i].w - 1 && this.x + this.w + this.speed > collision_objects[i].x + collision_objects[i].w)
                    )
                ) {
                    if (collision_objects[i].x < collision_object_in_way_x) {
                        collision_object_in_way_x = collision_objects[i].x
                    } else if (collision_object_in_way_x == "false") {
                        collision_object_in_way_x = collision_objects[i].x
                    }
                }
            }
            if (collision_object_in_way_x != "false") {
                this.x = collision_object_in_way_x - this.w
            } else {
                this.x += this.speed
            }
        }
    }
    draw_hitbox() {
        c.fillStyle = this.color
        c.fillRect(this.x, this.y, this.w, this.h)
    }
}