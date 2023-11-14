const canvas = document.getElementById("canvas")
const c = canvas.getContext("2d")

var scene = "menu/"

function main() {
    c.fillStyle = "#202020"
    c.fillRect(0, 0, 1920, 1080)

    if (scene.split("/")[0] == "menu") {
        drawMenu()
    }

    c.fillStyle = "#FFFFFF"
    c.fillRect(0, 0, 1920, 1)
    c.fillRect(0, 1079, 1920, 1)

    setTimeout(main, 1000 / 60)
}

main()