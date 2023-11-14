class Button {
    constructor(x, y, w, h, click_event, static_img_src, hover_img_src, click_img_src) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.click_event = click_event
        this.static_img = undefined
        this.hover_img = undefined
        this.click_img = undefined
        this.static_img_src = static_img_src
        this.hover_img_src = hover_img_src
        this.click_img_src = click_img_src
        this.already_clicked = false
        this.hovering_over = false
    }
    draw() {
        if (input.mouse.x < this.x || input.mouse.y < this.y || input.mouse.x > this.x + this.w || input.mouse.y > this.y + this.h) {
            c.drawImage(this.static_img, this.x, this.y, this.w, this.h)
            this.hovering_over = false
        } else if (!input.mouse.clicked_button || input.mouse.button != 0) {
            c.drawImage(this.hover_img, this.x, this.y, this.w, this.h)
            this.hovering_over = true
        } else if (this.hovering_over) {
            c.drawImage(this.click_img, this.x, this.y, this.w, this.h)
        } else {
            c.drawImage(this.hover_img, this.x, this.y, this.w, this.h)
        }
    }
    click_handler() {
        if (!input.mouse.clicked_button && this.already_clicked) {
            this.already_clicked = false
        }
        if (!this.already_clicked && input.mouse.clicked_button && input.mouse.button == 0 && input.mouse.x >= this.x && input.mouse.y >= this.y && input.mouse.x <= this.x + this.w && input.mouse.y <= this.y + this.h) {
            this.click_event()
        }
        if (input.mouse.clicked_button) {
            this.already_clicked = true
        }
    }
    init_images() {
        this.static_img = new Image()
        this.hover_img = new Image()
        this.click_img = new Image()

        this.static_img.src = this.static_img_src
        this.hover_img.src = this.hover_img_src
        this.click_img.src = this.click_img_src
    }
}

var menu_buttons = []