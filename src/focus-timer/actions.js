import state from "./state.js"
import * as timer from "./timer.js"
import * as elements from "./elements.js"

export function toggleRunning (){
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countDown()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

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