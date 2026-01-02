// utils/cartUtils.js
export const updateCartState = (cart) => {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartValue = cart.reduce(
    (acc, item) => acc + item.offerPrice * item.quantity,
    0
  );

  return {
    cart,
    totalItems,
    totalPrice: cartValue,
  };
};
