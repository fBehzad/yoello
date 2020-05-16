export const addItem = (cartItems, addCartItem) => {
  const existingItem = cartItems.find((item) => item.id === addCartItem.id);
  if (existingItem) {
    return cartItems.map((item) => item.id === addCartItem.id
      ? {...item, quantity: item.quantity + 1}
      : item
    )
  }
  return [...cartItems, {...addCartItem, quantity: 1}];
};

export const removeItem = (cartItems,removeItem)=>{
  const existingItem = cartItems.find((item)=> item.id === removeItem.id);
  if(existingItem.quantity ===1){
    return cartItems.filter((item)=> item.id !== removeItem.id)
  }
  return  cartItems.map((cartItem)=>
  cartItem.id === removeItem.id ? {...cartItem,quantity:cartItem.quantity -1}:
  cartItem
  )
}