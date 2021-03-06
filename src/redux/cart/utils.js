// https://github.com/ZhangMYihua/lesson-26-complete/blob/master/src/redux/cart/cart.utils.js

export const addProductToCart = (cart, product) => {
  const existingItem = cart.find((item) => item.product.id === product.id);

  if (existingItem) {
    return cart.map((item) =>
      item.product.id === product.id ? { ...item, amount: item.amount + 1 } : item,
    );
  }

  return [...cart, { product, amount: 1 }];
};

export const removeProductFromCart = (cart, product) => {
  return cart.filter((item) => item.product.id !== product.id);
};

export const Takeout1ProductFromCart = (cart, product) => {
  return cart.map((item) =>
    item.product.id === product.id ? { ...item, amount: Math.max(0, item.amount - 1) } : item,
  );
};
