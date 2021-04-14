import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers';
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}; 
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};
// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
const store = createStore(rootReducer, loadState()  );

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveState(store.getState()));

export default store;
