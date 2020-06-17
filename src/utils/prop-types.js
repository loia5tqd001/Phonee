import PropTypes from 'prop-types';

export const productProps = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  crossPrice: PropTypes.number,
  image: PropTypes.string.isRequired,
};

export const brandProps = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  productIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};
