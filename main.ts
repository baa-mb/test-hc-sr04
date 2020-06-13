let distanz = 0
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    distanz = sonar.ping(
    DigitalPin.P12,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showNumber(distanz)
    basic.pause(100)
    serial.writeNumber(distanz)
    serial.writeString("")
})
