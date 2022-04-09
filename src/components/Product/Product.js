import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



const Product = (props) => {
    // console.log(props);
    const {img,name,seller,price,stock,key}=props.product;
    return (
        <div className='product'>
            <div>
                    <img src={img} alt="" />
            </div>
            <div className='product-name'>
                    <h4><Link to={"/product/"+key}>{name}</Link></h4>
                    <br />
                    <br />
                    <p><small>by:{seller}</small></p>
                    <p>${price}</p>
                    
                    <p><small>Only {stock} left in stock </small></p>
                    
                    { props.showAddToCart && <button className='main-button' 
                    onClick={()=>props.handleAddProduct(props.product)}>
                        <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>}

            </div>
           
        </div>
    );
};

export default Product;