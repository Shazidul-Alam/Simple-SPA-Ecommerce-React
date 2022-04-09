import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity}=props.product;
    const reviewItemStyle={
        borderBottom:'1px solid lightgrey',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'150px',
    }
    return (
        <div style= {reviewItemStyle}className="review-item">
            <h2 className="product-name">{name}</h2>
            <p>{quantity}</p>
            <button className="main-button">Delete Item</button>
        </div>
    );
};

export default ReviewItem;