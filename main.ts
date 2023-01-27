radio.setGroup(1)
basic.forever(function () {
    led.plotBarGraph(
    input.magneticForce(Dimension.Strength),
    450
    )
    if (input.magneticForce(Dimension.Strength) > 450) {
        radio.sendNumber(22)
    }
})
