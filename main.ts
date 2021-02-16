input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("Back")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("Left")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Left") {
        basic.showArrow(ArrowNames.West)
    } else if (receivedString == "Right") {
        basic.showArrow(ArrowNames.East)
    } else if (receivedString == "Forward") {
        basic.showArrow(ArrowNames.North)
    } else if (receivedString == "Back") {
        basic.showArrow(ArrowNames.South)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("Right")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("Forward")
})
basic.showIcon(IconNames.Heart)
radio.setGroup(69)
