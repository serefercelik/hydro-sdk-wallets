import { createStore, combineReducers } from "redux";
import { WalletReducer } from "../src";

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass WalletReducer under 'WalletReducer' key
  WalletReducer
});

const store = createStore(rootReducer);
