import { createStore, combineReducers } from "redux";
import pages from "./features/pages/state/pageReducer"
import pointer from "./features/pointer/state/pointerReducer"
import keyboard from "./features/keyboard/state/keyboardReducer"
import theater from "./features/theater/state/theaterReducer"
const rootReducer = combineReducers({ pages, pointer, theater, keyboard })

export default createStore(rootReducer);
