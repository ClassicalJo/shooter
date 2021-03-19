import { SET_POINTER_COORD, SET_POINTER_LCLICK, SET_POINTER_RCLICK } from "./pointerActions"


const initialState = {
    coords: {
        x: 250,
        y: 250,
    },
    lClick: false,
    rClick: false,
    show: true,
}

export default function pointerReducer (state = initialState, action) {
    switch (action.type) {
        case SET_POINTER_COORD: return {
            ...state,
            coords: {
                x: action.payload.x,
                y: action.payload.y,
            }
        }
        case SET_POINTER_LCLICK: return {
            ...state,
            lClick: action.payload
        }
        case SET_POINTER_RCLICK: return {
            ...state,
            rClick: action.payload
        }
        default: return state
    }
}
