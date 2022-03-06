input.onButtonPressed(Button.A, function () {
    bpm = bpm - 1
    music.playMelody("- - - - - - - - ", bpm - 1)
})
input.onButtonPressed(Button.B, function () {
    bpm = bpm + 1
    music.playMelody("- - - - - - - - ", bpm + 1)
})
let bpm = 0
music.setBuiltInSpeakerEnabled(true)
music.playMelody("- - - - - - - - ", 60)
bpm = 60
basic.forever(function () {
    basic.showNumber(bpm)
})
