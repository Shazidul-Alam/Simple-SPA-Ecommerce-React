import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Product from '../Product/Product';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Cart = (props) => {
    const cart=props.cart;
    // console.log(cart);
    //const total=cart.reduce((total,prd)=> total+prd.price,0)
    let total=0;
    for(let i=0;i< cart.length;i++){
        const product=cart[i];
        total=total+product.price;
        total.toFixed(2);
    }

    let shipping=0;
    if(total>100){
        shipping=0;
    }
    else if(total>50){
        shipping=4.99;
    }
    else if(total>0){
        shipping=12.99
    }

    const tax=Math.round(total/10);
    const grandTotal= Number(total)+shipping+tax


    return (
        <div>
            <h4>Order Summary</h4>
            <p>Item Ordered:{cart.length}</p>
            <p>Product Price:{total}</p>
            <p><small>Shipping:{shipping}</small></p>
            <p>
                <small>TAX + VAT :{tax}</small>
            </p>
            <p>Total Price:{grandTotal}</p>
            <br />

            <Link to="/review">
            <button className="main-button">Review Cart</button>
            </Link>
            
        </div>
    );
};

export default Cart;