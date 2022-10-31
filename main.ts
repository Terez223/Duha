input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
    strip2.showColor(neopixel.colors(NeoPixelColors.Red))
    strip2.show()
    strip3.showColor(neopixel.colors(NeoPixelColors.Red))
    strip3.show()
})
input.onButtonPressed(Button.AB, function () {
    strip.showRainbow(1, 360)
    strip.rotate(1)
    strip.show()
    strip2.showRainbow(1, 360)
    strip2.rotate(1)
    strip2.show()
    strip3.showRainbow(1, 360)
    strip3.rotate(1)
    strip3.show()
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    strip2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    strip3.showColor(neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
})
let strip3: neopixel.Strip = null
let strip2: neopixel.Strip = null
let strip: neopixel.Strip = null
basic.showLeds(`
    . # # # .
    . # . # .
    # . # . #
    . # . # .
    . # # # .
    `)
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip2 = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
strip2.showRainbow(1, 360)
strip3 = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
strip3.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    strip2.rotate(1)
    strip2.show()
    strip3.rotate(1)
    strip3.show()
})
