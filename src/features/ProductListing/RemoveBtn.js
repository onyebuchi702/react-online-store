import * as React from 'react';

const RemoveBtn = (props) => {
  return (
    <div>
      <button
        onClick={() => props.removeFromCart(props.cartItem)}>
        Remove
      </button>
    </div>
  );
};

export default RemoveBtn;
