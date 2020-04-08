// Helper functions
const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id) // get current shopping cart without items we gonna add

const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0] //get index of current shopping cart with items we gonna add

const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item)
  return cartItem === undefined
    ? [ ...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
    : [ ...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }]
}

const removeFromCart = (cart, item) => {
  return item.quantity === 1
   ? [ ...cartWithoutItem(cart, item) ]
   : [ ...cartWithoutItem(cart, item), { ...item, quantity: item.quantity -1 }]
}

const removeAllFromCart = (cart, item) => {
  return [ ...cartWithoutItem(cart, item) ]
}

// CartReducer
const cartReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD':
      return addToCart(state, action.payload)

    case 'REMOVE':
      // const firstMatchIndex = state.indexOf(action.payload) //returns the first of the item to be removed
      // return state.filter((item, index) => index !== firstMatchIndex)
      return removeFromCart(state, action.payload)

    case 'REMOVE_ALL':
      // const firstMatchIndex = state.indexOf(action.payload) //returns the first of the item to be removed
      // return state.filter((item, index) => index !== firstMatchIndex)
      return removeFromCart(state, action.payload)

    default:
      return state;
  }
}

export default cartReducer;
