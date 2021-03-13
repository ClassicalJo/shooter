import { SET_POINTER_COORD } from "./pointerActions"


const initialState = {
    coords: {
        x: 250,
        y: 250,
    },
    show: true,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_POINTER_COORD: return {
            ...state,
            coords: {
                x: action.payload.x,
                y: action.payload.y,
            }

        }
        default: return state
    }
}
