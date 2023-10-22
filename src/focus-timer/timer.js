import * as elements from "./elements.js"
import state from "./state.js"
import { reset } from "./actions.js"
import { kichenTimer } from "./sounds.js"

export function updateDisplay (minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    elements.timerMinutes.textContent = String(minutes).padStart(2,"0")
    elements.timerSeconds.textContent = String(seconds).padStart(2,"0")
}

export function countDown(){

    clearTimeout(state.countDownId)

    if(!state.isRunning){
        return
    }
    
    let minutes = Number (elements.timerMinutes.textContent)
    let seconds = Number (elements.timerSeconds.textContent)

    seconds--

    if (seconds < 0){
        minutes--
        seconds = 59
    }

    if(minutes < 0){
        kichenTimer.play()
        reset()
        return 0
    }

    updateDisplay(minutes,seconds)

    state.countDownId = setTimeout( () => countDown(), 1000)
}