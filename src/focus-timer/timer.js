import * as elements from "./elements.js"
import state from "./state.js"

export function updateDisplay (minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    elements.timerMinutes.textContent = String(minutes).padStart(2,"0")
    elements.timerSeconds.textContent = String(seconds).padStart(2,"0")
}