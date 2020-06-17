import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productFilterSortingReducer from './product-filter-sorting/reducer';
import cartReducer from './cart/reducer';
import productsReducer from './products/reducer';

// Update new keys for localstorage when new updates break the app
const keyVersions = ['phonee_fix1', 'phonee'];

keyVersions.slice(1).forEach((key) => {
  localStorage.removeItem('persist:' + key);
});

const persistConfig = {
  key: keyVersions[0],
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  productFilterSorting: productFilterSortingReducer,
  cart: cartReducer,
  products: productsReducer,
});

export default persistReducer(persistConfig, rootReducer);

// Followed this: https://github.com/ZhangMYihua/lesson-26-complete/blob/master/src/redux/root-reducer.js
