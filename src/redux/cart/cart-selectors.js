import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => Object.keys(cartItems).reduce((sum, id) =>  sum + cartItems[id].quantity, 0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => Object.keys(cartItems).reduce((sum, id) =>  sum + (cartItems[id].price * cartItems[id].quantity), 0)
)
