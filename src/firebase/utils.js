import { database } from './index';

export const getAllBrands = () => {
  return database
    .ref('/brands')
    .once('value')
    .then((snapshot) => {
      return snapshot.val();
    });
};

// Limit number of items to get: https://firebase.google.com/docs/database/web/lists-of-data?authuser=0#get_a_database_reference
export const getFirstProducts = (number) => {
  const productsRef = database.ref('/products');
  const limitedProducts = number ? productsRef.limitToFirst(number) : productsRef;

  return limitedProducts.once('value').then((snapshot) => {
    return snapshot.val();
  });
};

export const getAllProducts = () => {
  return getFirstProducts();
};

export const getProductById = (productId) => {
  return database
    .ref('/products/' + productId)
    .once('value')
    .then((snapshot) => {
      return snapshot.val();
    });
};
