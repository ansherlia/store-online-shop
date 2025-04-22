const productInCart = (cartItems, product) => {
  const productCart = cartItems.items.find((item) => item.id === product.id);
  return productCart;
};

export { productInCart };
