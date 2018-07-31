import React from 'react';
import PropTypes from 'prop-types';
import Currency from 'react-currency-formatter';


const Price = ({
  quantity,
  currency,
  style,
}) => {

  return (
    <span style={style}>
      <Currency
        quantity={quantity}
        currency={currency}
      />
    </span>
  );

};

/**
 * Component props validation
 */
Price.propTypes = {
  quantity: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
};

/**
 * Component props default values
 */
Price.defaultProps = {
  style: PropTypes.shape({}),
};

export default Price;
