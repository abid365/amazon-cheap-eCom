import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props)
    const {img, name, seller, ratings, price, quantity} = props.product;
    const handleAddToCart = props.handleAddToCart;
    
    return (
        <div className='product'>
            <div className="image-style">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p className="">Price:${price}</p>
                <div className="sub-info">
                    <p>Manufacturer: {seller}</p>
                    <p>Ratiings: {ratings} Star </p>
                </div>
            </div>
            <button onClick={()=>{handleAddToCart(props.product)}} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;