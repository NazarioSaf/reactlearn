import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogseReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SideBarReducer";
import usersReducer from "./UsersReducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogseReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer
});


let store = createStore(reducers);



export default store;