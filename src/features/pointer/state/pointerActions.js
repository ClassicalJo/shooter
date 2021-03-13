export const SET_POINTER_COORD = 'Sets the X and Y values of the mouse'
export const SET_POINTER_SHOW = "Sets show to either true or false"

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
