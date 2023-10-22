import { controlsMusic } from "./elements.js"
import state from "./state.js"
import * as sounds from "./sounds.js"

export function selectMusic(music) {
    if (state.musicSelected != false) {
        sounds[state.musicSelected].pause()
    }

    if (state.musicSelected == music) {
        state.musicSelected = false
        controlsMusic.classList = ''
        return
    }

    state.musicSelected = music
    controlsMusic.classList = music

    if (typeof sounds[state.musicSelected] == "undefined") {
        state.musicSelected = false
        controlsMusic.classList = ''
        return
    }

    sounds[state.musicSelected].play()
}