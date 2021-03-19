export const KEY_PRESSED = "Maps the key pressed to the list of keys being pressed"
export const KEY_RELEASED = "Notifies the key released for cleanup"

export function pressKey(str) {
    return {
        type: KEY_PRESSED,
        payload: str
    }
}

export function releaseKey(str) {
    return {
        type: KEY_RELEASED,
        payload: str
    }
}
