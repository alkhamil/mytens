import { combineReducers } from "redux";

// Import all reducers
import repoReducer from "./repoReducer";

const reducers = combineReducers({
    repo: repoReducer,
})

export default reducers;