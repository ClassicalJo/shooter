import { THEATER_READY } from "./theaterActions"

let initialState = {
    ready: false,
}

function theater(state = initialState, action) {
    switch (action.type) {
        case THEATER_READY: return { ...state, ready: true }
        default: return state
    }
}

export default theater
