let strip = neopixel.create(DigitalPin.P0, 45, NeoPixelMode.RGB)
basic.forever(function () {
    strip.rotate(1)
    basic.showLeds(`
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        `)
    strip.show()
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        `)
})
