import { createStore, combineReducers } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import cartReducer from '../features/cart/reducer'

const rootReducer = combineReducers({
  cart: cartReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// or
// const store = createStore(
//   rootReducer,
//   composeWithDevTools() // to use redux devtools
// )

export default store
