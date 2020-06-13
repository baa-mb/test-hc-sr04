basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    basic.showNumber(sonar.ping(
    DigitalPin.P12,
    DigitalPin.P1,
    PingUnit.Centimeters
    ))
    basic.pause(500)
})
