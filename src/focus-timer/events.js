import { controlsTimer, controlsMusic } from "./elements.js"
import * as actions from "./actions.js"
import * as music from "./music.js"

export function registerControls() {
    controlsTimer.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }
        actions[action]()
    })
}

export function setMusic() {
    controlsMusic.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        music.selectMusic(action)
    })
}