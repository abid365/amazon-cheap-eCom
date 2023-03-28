import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const cart = props.cart; // option-1
    //const {cart} = props; //option-2
    console.log(cart);
    
    return (
        <div className='cart-style'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price:</p>
            <p>Total Shipping Charge: </p>
            <p>Tax: </p>
            <h5>Grand Total: </h5>
        </div>
    );
};

export default Cart;