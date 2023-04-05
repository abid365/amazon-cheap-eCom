import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, handleClearCart, children}) => {
    // const cart = props.cart; // option-1
    //const {cart} = props; //option-2
    console.log(cart);
    
    let totalPrice = 0;
    let totalPriceShipping = 0;
    let quantity = 0;
    for (const product of cart){
        
        // if(product.quantity === 0){
        //     product.quantity =1;
        // }

        //shortcut of if is line:17 
        // product.quantity = product.quantity || 1; 
        totalPrice = totalPrice + product.price * product.quantity;
        totalPriceShipping = totalPriceShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice*7/100 ;
    const grandTotal = totalPrice + tax + totalPriceShipping;

    return (
        <div className='cart-style'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping: ${totalPriceShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand totalPrice: ${grandTotal.toFixed(2)}</h5>
            <button onClick={handleClearCart} className='btn-clearcart'><span>Clear Cart</span> <FontAwesomeIcon  icon={faTrashAlt} /></button>
            {children}
        </div>
    );
};

export default Cart;