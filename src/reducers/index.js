import {combineReducers} from "redux";
import { userReducer ,historyReducer } from "./reducer";


export default combineReducers({
    user : userReducer,
    
 
});
