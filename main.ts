basic.showLeds(`
    . # # # .
    . # # # .
    # # # # #
    . # # # .
    . # # # .
    `)
let strip = neopixel.create(DigitalPin.P0, 20, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
let strip2 = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
strip2.showRainbow(1, 360)
let strip3 = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
strip3.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    strip2.rotate(1)
    strip2.show()
    strip3.rotate(1)
    strip3.show()
})
