export const SET_POINTER_COORD = 'Sets the X and Y values of the mouse'
export const SET_POINTER_SHOW = "Sets show to either true or false"
export const SET_POINTER_LCLICK = "Sets the left click being pressed to true or false"
export const SET_POINTER_RCLICK = "Sets the right click being pressed to true or false"

export function setPointerCoord(coord) {
    return {
        type: SET_POINTER_COORD,
        payload: coord
    }
}

export function setPointerShow(bool) {
    return {
        type: SET_POINTER_SHOW,
        payload: bool
    }
}

export function setPointerLClick(bool) {
    return {
        type: SET_POINTER_LCLICK,
        payload: bool
    }
}

export function setPointerRClick(bool) {
    return {
        type: SET_POINTER_RCLICK,
        payload: bool
    }
}
