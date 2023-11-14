function drawMenu() {
    if (scene.split("/")[1] == "") {
        menu_buttons.forEach(button => {
            button.draw()
            button.click_handler()
        });
    }
}

menu_buttons.push(new Button(
    300,
    150,
    400,
    200,
    function () {
        console.log("clicked map")
    },
    "resources/menu/buttons/map_static.png",
    "resources/menu/buttons/map_hover.png",
    "resources/menu/buttons/map_click.png"
))

menu_buttons.forEach(button => {
    button.init_images()
});