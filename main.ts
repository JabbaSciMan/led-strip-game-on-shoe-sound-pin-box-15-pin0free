input.onPinPressed(TouchPin.P0, function () {
    B += -0.5
    printStrips()
})
input.onButtonPressed(Button.A, function () {
    if (Green_Won == 0 && Red_Won == 0) {
        B += 1
        printStrips()
    }
})
input.onPinPressed(TouchPin.P2, function () {
    music.setTempo(120)
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
})
function printStrips () {
    Strip_A.setPixelColor(A % Strip_Length, neopixel.colors(NeoPixelColors.Red))
    strip_B.setPixelColor(B % Strip_Length, neopixel.colors(NeoPixelColors.Green))
    Strip_A.show()
    Strip_A.clear()
    strip_B.show()
    strip_B.clear()
}
input.onButtonPressed(Button.B, function () {
    if (Green_Won == 0 && Red_Won == 0) {
        A += 1
        printStrips()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    A += -0.5
    printStrips()
})
function reset () {
    Round = 2
    Green_Won = 0
    Red_Won = 0
    A = 0
    B = 0
    Strip_A.show()
    strip_B.show()
}
let strip_B: neopixel.Strip = null
let Strip_A: neopixel.Strip = null
let Strip_Length = 0
let B = 0
let A = 0
let Red_Won = 0
let Green_Won = 0
let Round = 0
pins.setAudioPin(AnalogPin.P15)
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Resistive)
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Resistive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Resistive)
Round = 2
Green_Won = 0
Red_Won = 0
A = 0
B = 0
Strip_Length = 24
Strip_A = neopixel.create(DigitalPin.P13, Strip_Length, NeoPixelMode.RGB)
strip_B = neopixel.create(DigitalPin.P14, Strip_Length, NeoPixelMode.RGB)
Strip_A.setBrightness(50)
strip_B.setBrightness(50)
Strip_A.clear()
strip_B.clear()
Strip_A.show()
strip_B.show()
basic.forever(function () {
    while (Red_Won == 1) {
        soundExpression.giggle.playUntilDone()
    }
    while (Green_Won == 1) {
        soundExpression.sad.playUntilDone()
    }
})
basic.forever(function () {
    if (A > Round * Strip_Length - 2) {
        if (Green_Won == 0) {
            Red_Won = 1
            for (let index = 0; index < 20; index++) {
                Strip_A.showColor(neopixel.colors(NeoPixelColors.Red))
                basic.pause(100)
                Strip_A.clear()
                Strip_A.show()
                basic.pause(100)
            }
            reset()
        }
    }
    if (B > Round * Strip_Length - 2) {
        if (Red_Won == 0) {
            Green_Won = 1
            for (let index = 0; index < 20; index++) {
                strip_B.showColor(neopixel.colors(NeoPixelColors.Green))
                basic.pause(100)
                strip_B.clear()
                strip_B.show()
                basic.pause(100)
            }
            reset()
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (!(Green_Won) && !(Red_Won)) {
            music.setTempo(400)
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
            music.playTone(196, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
            music.playTone(165, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Double))
            music.playTone(220, music.beat(BeatFraction.Whole))
            music.playTone(247, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
            music.playTone(233, music.beat(BeatFraction.Whole))
            music.playTone(220, music.beat(BeatFraction.Whole))
            basic.pause(2000)
        }
    }
})
