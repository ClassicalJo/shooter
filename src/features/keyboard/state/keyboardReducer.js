import { KEY_PRESSED, KEY_RELEASED } from "./keyboardActions"

let initialState = {
    map: []
}

export default function keyboardReducer (state = initialState, action) {
    switch (action.type) {
        case KEY_PRESSED: return {
            ...state,
            map: [...state.map, action.payload]
        }
        case KEY_RELEASED: return {
            ...state,
            map: state.map.filter(key => key !== action.payload)
        }
        default: return state
    }
}
