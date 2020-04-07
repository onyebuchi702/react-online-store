import React from 'react'

export default function ProductListItem(props) {

  const itemInCart = props.cart.filter(item => item.id === props.product.id)[0]
  const item = props.product

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
          <button
            type="button"
            onClick={() => props.addToCart(item)}>
            Add to cart
            ({
              (itemInCart && itemInCart.quantity )|| 0
            })
          </button>
          <button
            type="button"
            onClick={() => props.removeFromCart(props.product)}>
            Remove
          </button>
        </div>
    </div>
  )
}
