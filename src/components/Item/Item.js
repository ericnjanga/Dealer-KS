import React from 'react';
import PropTypes from 'prop-types';
import Figure from './../Figure.js';
import Currency from 'react-currency-formatter';


const Price = ({ quantity, currency, style}) => {

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
 * Component representing an item
 * @param {*} title
 * @param {*} description
 * @param {*} img
 * @param {*} date
 * @param {*} transmission
 * @param {*} kilometers
 * @param {*} style
 */
const Item = ({
  title,
  description,
  img,
  date,
  transmission,
  kilometers,
  isVisible,
  style,
}) => {

  if (!isVisible) {

    return false;

  }

  return (
    <li style={style.container}>
      { img && <Figure src={img} alt={title} /> }
      <div style={style.txtContainer}>
        <h3 style={style.title}>{title}</h3>

        <div style={style.price}>
          <Price
            quantity="45685"
            currency="CAD"
            style={style.price1}
          />
          <Price
            quantity="45685"
            currency="XAF"
            style={style.price2}
          />
          <div style={style.date}>{date}</div>
        </div>
        { description && <div style={style.description}>{description}</div> }

        <footer style={style.footer}>
          <div>{transmission}</div>
          <div>{kilometers} km</div>
        </footer>
      </div>
    </li>
  );

};

/**
 * Component props validation
 */
Item.propTypes = {
  title: PropTypes.string.isRequired, // specify the optional field
  description: PropTypes.string, // (optional)
  transmission: PropTypes.string.isRequired,
  kilometers: PropTypes.string.isRequired,
  img: PropTypes.string, // (optional)
  date: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  style: PropTypes.shape({
    container: PropTypes.shape({
      listStyle: PropTypes.string,
      margin: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      padding: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }),
    title: PropTypes.shape({
      margin: PropTypes.string,
    }),
  }),
};

/**
 * Component props default values
 */
Item.defaultProps = {
  description: '',
  img: 'http://via.placeholder.com/500x500',
  style: { // Default styles
    container: {
      listStyle: 'none',
      margin: '50px 0',
      background: '#fff',
      borderRadius: '.25rem',
      boxShadow: '0px 0px 1px 0px rgba(160,160,160,1)',
      cursor: 'pointer',
    },
    txtContainer: {
      padding: '20px',
    },
    title: {
      margin: '0 0 20px 0',
      // padding: '20px',
      textAlign: 'left',
      fontWeight: '300',
      fontSize: '22px',
      color: '#5a6466',
    },
    price: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '15px',
    },
    date: {
      position: 'absolute',
      right: '0',
      color: '#5a6466',
    },
    price1: {
      fontSize: '22px',
      fontWeight: '700',
      color: '#0077d2',
    },
    price2: {
      color: '#000',
      fontWeight: '700',
    },
    description: {
      textAlign: 'left',
      lineHeight: '25px',
      color: '#5a6466',
      marginBottom: '15px',
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      color: '#5a6466',
      textTransform: 'capitalize',
    },
  },
};

export default Item;
