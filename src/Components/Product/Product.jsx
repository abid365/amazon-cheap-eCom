import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const {img, name, seller, ratings, price, quantity} = props.product;
    const handleTOCart = props.handleTOCart;
    
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
            <button onClick={()=>{handleTOCart(props.product)}} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;