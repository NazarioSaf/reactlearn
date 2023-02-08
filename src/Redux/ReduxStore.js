import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogseReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SideBarReducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogseReducer,
    sideBar: sidebarReducer
});


let store = createStore(reducers);



export default store;