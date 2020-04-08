import * as React from 'react';
import { connect } from 'react-redux'

function sort(items) {
  return items.sort((a, b) => a.id < b.id) // sort by id
}

function Cart(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          sort(props.cart).map(item => <tr>
              <td>{ item.name }</td>
              <td>{ item.quantity }</td>
              <td>
                <button onClick={(e) => props.addToCart(item)}>+</button>
                <button onClick={(e) => props.removeFromCart(item)}>-</button>
              </td>
              <td>
                <button
                  onClick={(e) => props.removeAllFromCart(item)}>
                  Remove all from cart
                </button>
              </td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item})
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item})
    },
    removeAllFromCart: (item) => {
      dispatch({ type: 'REMOVE_ALL', payload: item})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

// export const cartItemsWithQuantities = (cartItems) => {
//   return cartItems.reduce((acc, item) => {
//     const filteredItem = acc.filter(item2 => item2.id === item.id)[0]
//     filteredItem !== undefined
//       ? filteredItem.quantity++
//       : acc.push({...item, quantity: 1})
//     return acc
//   }, [])
// };

// so basically you can add the same item with the same id twice if its not there then it adds it to the acc with push
// cart [
//   {
//     id: 1
//   },
//   {
//     id: 1
//   },
//   {
//     id: 2
//   },
// ]
//
// acc or accumulator = []
//
// acc.push({...item, quantity: 1})

// after adding the accumulator will look like this
// acc or accumulator = [
// {
//   id: 1,
      // quantity: 1
// }]
