import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleRemoveFromCart}) => {
    const {id, img, price, name, quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-details">
                <p className="product-title">{name}</p>
                <p className="">Price: <span className="orange-text">{price} </span></p>
                <p className="">Order Quantity: <span className="orange-text"></span>{quantity} </p>
            </div>
            <button onClick={()=>{handleRemoveFromCart(id)}} className="button-dlt"><FontAwesomeIcon className='del-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;