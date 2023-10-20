import { controlsTimer } from "./elements.js"
import * as actions from "./actions.js"

export function registerControls() {
    controlsTimer.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        //if(typeof actions[action] != "function") {
        //    return
        //}
        actions[action]()
        //console.log(action)
    })
}