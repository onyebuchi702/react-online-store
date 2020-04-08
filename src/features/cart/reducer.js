const cartReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD':
      return [...state, action.payload]

    case 'REMOVE':
      const firstMatchIndex = state.indexOf(action.payload) //returns the first of the item to be removed
      return state.filter((item, index) => index !== firstMatchIndex)

    default:
      return state;
  }
}

export default cartReducer;
