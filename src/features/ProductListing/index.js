// import React from 'react'
import * as React from 'react';
import { connect } from 'react-redux'
import ProductListItem from './ProductListItem'
import { cartItemsWithQuantities } from '../cart'

function ProductListing(props) {
  return (
    <div className="product-listing">
      {
        props.products.map(product =>
          <ProductListItem
            product={product}
            addToCart={props.addToCart}
            cart={cartItemsWithQuantities(props.cart)}
            removeFromCart={props.removeFromCart}/>
        )
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'Add', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)
