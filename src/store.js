import { createStore, combineReducers } from "redux";
import pages from "./features/pages/state/pageReducer"
import pointer from "./features/pointer/state/pointerReducer"
import theater from "./features/theater/state/theaterReducer"
const rootReducer = combineReducers({ pages, pointer, theater })

export default createStore(rootReducer);
