import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Product from '../Product/Product';


const Cart = (props) => {
    const cart=props.cart;
    //  console.log(cart);
    //const total=cart.reduce((total,prd)=> total+prd.price,0)
    let total=0;
    for(let i=0;i< cart.length;i++){
        const product=cart[i];
        total=total+ (product.price * product.quantity) ;
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
            {
                props.children
            }

            
            
        </div>
    );
};

export default Cart;