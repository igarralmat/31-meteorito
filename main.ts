input.onButtonPressed(Button.A, function () {
    Jokalaria.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Jokalaria.move(1)
})
let Meteoritoa: game.LedSprite = null
let Pausa = 0
let Jokalaria: game.LedSprite = null
Jokalaria = game.createSprite(2, 4)
basic.forever(function () {
    Pausa = randint(1000, 1500)
    Meteoritoa = game.createSprite(0, 4)
    for (let index = 0; index < 4; index++) {
        Meteoritoa.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    if (Meteoritoa.isTouching(Jokalaria)) {
        game.gameOver()
    }
})
