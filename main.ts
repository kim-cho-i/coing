basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P1)) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
})
