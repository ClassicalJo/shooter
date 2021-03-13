import { CHANGE_PAGE } from "./pageActions"

const initialState = {
    currentPage: "home",
    height: null,
    width: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_PAGE: return { ...state, currentPage: action.payload }
        default: return state
    }
}
