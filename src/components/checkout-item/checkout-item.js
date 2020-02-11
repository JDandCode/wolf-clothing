import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItemFromCart } from '../../redux/cart/cart-actions';

import './checkout-item.scss';
 
const CheckoutItem = ({cartItem, clearItem, addItem, removeItem, quantity}) => {
    const {imageUrl, price, name} = cartItem;
  return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>

        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' 
            onClick={() => clearItem(cartItem)}>
            &#10005;
        </div>

    </div>
  )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItemFromCart(item))
})
 
export default connect(null, mapDispatchToProps)(CheckoutItem);