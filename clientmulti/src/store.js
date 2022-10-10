import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import setAuthToken from './utils/setAuthToken';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
/*
const rootReducer = combineReducers({
  count: CountReducer,
});
 */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['bookmarks']
};

const rootReducer2 = combineReducers({
  booksReducer: persistReducer(persistConfig, rootReducer)
});
const store = createStore(rootReducer2, applyMiddleware(ReduxThunk));
let currentState = store.getState().booksReducer;
console.log(currentState);
store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  let previousState = currentState;
  currentState = store.getState().booksReducer;
  // if the token changes set the value in localStorage and axios headers
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    setAuthToken(token);
  }
});

export default store;
export const persistor = persistStore(store);
