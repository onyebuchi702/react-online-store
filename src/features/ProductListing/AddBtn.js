import * as React from 'react';

const AddBtn = (props) => {
  return (
    <div>
      <button
        onClick={() => props.addToCart(props.product)}>
        Add to cart ({
          (props.cartItem && props.cartItem.quantity) || 0
        })
      </button>
    </div>
  );
};

export default AddBtn;
