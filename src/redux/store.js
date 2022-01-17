import { createStore, applyMiddleware, combineReducers } from 'redux'
import { authReducer, serviceReducer, userReducer} from './reducer'
import * as actions from "./actions";
import thunk from 'redux-thunk'

const reducers = combineReducers({
  authStore: authReducer,
  userStore: userReducer,
  serviceStore: serviceReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

const update = () => {
  console.log(store.getState())
}
store.subscribe(update)
store.dispatch(actions.verifyAuth());


export default store;