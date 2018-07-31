import React from 'react';
import PropTypes from 'prop-types';

import OwlCarousel from 'react-owl-carousel';
import Item from './../../components/Item/Item.js';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import './MainCarouselPresentation.css';

const MainCarouselPresentation = ({ title, items, style }) => {

  // console.log('>>>>>>>items=', items);

  if (!items) {

    return false;

  }

  return (
    <section style={style.container}>
      {
        title && <h1 style={style.title}>{title}</h1>
      }
      <OwlCarousel
        className="owl-theme"
        autoplay
        loop
        margin={10}
      >
        {
          items.map(item => {
            return <Item {...item} />
          })
        }
      </OwlCarousel>
    </section>
  );

};

/**
 * Component props validation
 */
MainCarouselPresentation.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  style: PropTypes.shape({}),
};

/**
 * Component props default values
 */
MainCarouselPresentation.defaultProps = {
  title: '----',
  style: { // Default styles
    container: {
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
    },
  },
};

export default MainCarouselPresentation;
