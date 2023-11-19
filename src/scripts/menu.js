buttons["menu"] = [
    new Button(200, 100, 400, 150, function () { scene = "menu/map" },
    "resources/menu/buttons/map_static.png", "resources/menu/buttons/map_hover.png", "resources/menu/buttons/map_click.png"),
    new Button(200, 670, 400, 150, function () { close() },
    "resources/menu/buttons/map_static.png", "resources/menu/buttons/map_hover.png", "resources/menu/buttons/map_click.png")
]

buttons["menu/map"] = [
    new Button(300, 600, 400, 200, function () { scene = "game" },
    "resources/menu/buttons/map_static.png", "resources/menu/buttons/map_hover.png", "resources/menu/buttons/map_click.png")
]

function drawMenu() {

}