input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("Left")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Left") {
        basic.showArrow(ArrowNames.West)
    } else if (receivedString == "Right") {
        basic.showArrow(ArrowNames.East)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("Right")
})
radio.setGroup(69)
