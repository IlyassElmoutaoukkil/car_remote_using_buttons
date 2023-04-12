let previousClickValue = false
let click = false
let left = false
let right = false
let up = false
let down = false
radio.setGroup(2)
basic.forever(function () {
    down = pins.digitalReadPin(DigitalPin.P2) == 1
    up = pins.digitalReadPin(DigitalPin.P1) == 1
    right = pins.digitalReadPin(DigitalPin.P3) == 1
    left = pins.digitalReadPin(DigitalPin.P0) == 1
    console.log(down)
    click = input.buttonIsPressed(Button.A)
if ((input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) && previousClickValue != click) {
        previousClickValue = click
        radio.sendNumber(0)
        return
    }
    previousClickValue = click
    if (down) {
        return radio.sendNumber(2)
    }
    if (up) {
        return radio.sendNumber(1)
    }
    if (right) {
        return radio.sendNumber(4)
    }
    if (left) {
        return radio.sendNumber(3)
    }
    return radio.sendNumber(5)
})
