import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product)
    const {img, name, seller, price, quantity} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6>{name}</h6>
        </div>
    );
};

export default Product;