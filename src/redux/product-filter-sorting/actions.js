export const types = {
  SET_SORTING: 'SET_SORTING',
  SET_PRICE_FILTER: 'SET_PRICE_FILTER',
  TOGGLE_BRAND: 'TOGGLE_BRAND',
  REMOVE_ALL_FILTERS: 'REMOVE_ALL_FILTERS',
  RESET_SORTING: 'RESET_SORTING',
};

export const setSorting = (payload) => ({
  type: types.SET_SORTING,
  payload,
});

export const setPriceFilter = (payload) => ({
  type: types.SET_PRICE_FILTER,
  payload,
});

export const toggleBrand = (payload) => ({
  type: types.TOGGLE_BRAND,
  payload,
});

export const removeAllFilters = () => ({
  type: types.REMOVE_ALL_FILTERS,
});

export const resetSorting = () => ({
  type: types.RESET_SORTING,
});
