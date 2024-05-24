import { applyMiddleware, combineReducers, legacy_createStore as createStore, } from "redux";
import search from "./reducers/search.ts";
import users from "./reducers/users.ts";
import preloader from "./reducers/preloader.ts";
import rooms from "./reducers/rooms.ts";
import messagesSender from "./reducers/messages.ts";
import auth from "./reducers/auth.ts";
import visualState from "./reducers/visualState.ts";
import { thunk as thunkMiddleware } from "redux-thunk";
let reducersStack = combineReducers({
    search,
    users,
    preloader,
    rooms,
    messagesSender,
    auth,
    visualState,
});
let store = createStore(reducersStack, applyMiddleware(thunkMiddleware));
export default store;
window.store = store;
