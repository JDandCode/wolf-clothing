// export const addItemToCart = (cartItems, cartItemToAdd) => {
//     const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
//     if(existingCartItem) {
//         return cartItems.map(cartItem => 
//             cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}: cartItem     
//         )
//     }
//     return [...cartItems, {...cartItemToAdd, quantity: 1}]
// };

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const {id} = cartItemToAdd;
    const existingCartItem = cartItems.hasOwnProperty(id);
    
    if(!existingCartItem) cartItems[id] = {...cartItemToAdd, quantity: 0};

    cartItems[id].quantity = cartItems[id].quantity + 1;

    const newCart = Object.assign({}, cartItems);
    return newCart;
}

export const removeItemFromCart = (cartItems, {id}) => {
    if(cartItems[id].quantity === 1) return clearItemFromCart(cartItems, cartItems[id]);
    cartItems[id].quantity = cartItems[id].quantity - 1;

    const newCart = Object.assign({}, cartItems);
    return newCart;
}

export const clearItemFromCart = (cartItems, {id}) => {
    const {[id]: omitted, ...newCartItems} = cartItems;
    return newCartItems;
}
