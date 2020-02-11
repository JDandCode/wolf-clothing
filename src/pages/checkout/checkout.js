import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors';

import './checkout.scss'; 


const CheckoutPage = ({cartItems, total}) => {
  return (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            Object.keys(cartItems).map(id => <CheckoutItem key={id} quantity={cartItems[id].quantity} cartItem={cartItems[id]}/>)
        }
        <div className='total'>
            <span>Total: ${total}</span>
        </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
 
export default connect(mapStateToProps)(CheckoutPage);