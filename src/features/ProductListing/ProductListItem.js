import React from 'react'
import AddBtn from './AddBtn'
import RemoveBtn from './RemoveBtn'

export default function ProductListItem(props) {

  // return the first item of the array
  // const itemInCart = props.cart.filter(item => item.id === props.product.id)[0]

  return (
    <div className="product-list-item">
      <h3>{ props.product.name }</h3>
      <img
        src={`/products/${props.product.image}`}
        alt=""
        title={ props.product.name }
        height={100}/>
      <div>{ props.product.description }</div>
        <div>${ props.product.price }</div>
        <div>
          <AddBtn
            cartItem={props.cartItem}
            product={props.product}
            addToCart={props.addToCart}
          />
          {props.cartItem ?
              <RemoveBtn
                cartItem={props.cartItem}
                product={props.product}
                removeFromCart={props.removeFromCart}
              />
            : null
          }
        </div>
    </div>
  )
}
