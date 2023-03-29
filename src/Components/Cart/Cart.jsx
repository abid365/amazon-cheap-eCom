import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const cart = props.cart; // option-1
    //const {cart} = props; //option-2
    console.log(cart);
    
    let totalPrice = 0;
    let totalPriceShipping = 0;
    for (const product of cart){
        totalPrice = totalPrice + product.price;
        totalPriceShipping = totalPriceShipping + product.shipping;
    }

    const tax = totalPrice*7/100 ;
    const grandTotal = totalPrice + tax + totalPriceShipping;

    return (
        <div className='cart-style'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalPriceShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand totalPrice: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;