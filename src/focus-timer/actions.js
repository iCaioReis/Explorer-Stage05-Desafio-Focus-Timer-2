import state from "./state.js"
import * as timer from "./timer.js"
import * as elements from "./elements.js"

export function togglerRunning (){}

export function reset(){}

export function addTime(){
    let minutes = parseInt(elements.timerMinutes.textContent) + 5

    minutes > 60 ? minutes = 60 : minutes = minutes

    elements.timerMinutes.textContent = String(minutes).padStart(2,"0")
}

export function lessTime(){
    let minutes = parseInt(elements.timerMinutes.textContent) - 5

    minutes <= 0 ? minutes = 5 : minutes = minutes

    elements.timerMinutes.textContent = String(minutes).padStart(2,"0")
}