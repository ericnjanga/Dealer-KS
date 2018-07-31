import React from 'react';
import PropTypes from 'prop-types';

import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

/*
 * Note: You have to put <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
 * in the index.html tp have this work ($ in global scope)
*/

const Carousel = ({ title, children, style }) => {

  // console.log('.+++---', global.$('p').length);
  // console.log('.+++---', global);
  // console.log('....jQuery='

  return(
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
        { children }
        {/* <div className="item"><h4>1</h4></div>
        <div className="item"><h4>2</h4></div>
        <div className="item"><h4>3</h4></div>
        <div className="item"><h4>4</h4></div>
        <div className="item"><h4>5</h4></div>
        <div className="item"><h4>6</h4></div>
        <div className="item"><h4>7</h4></div>
        <div className="item"><h4>8</h4></div>
        <div className="item"><h4>9</h4></div>
        <div className="item"><h4>10</h4></div>
        <div className="item"><h4>11</h4></div>
        <div className="item"><h4>12</h4></div>  */}
      </OwlCarousel>{/*  */}
    </section>
  );

};

/**
 * Component props validation
 */
Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.shape({}).isRequired,
  style: PropTypes.shape({}),
};

/**
 * Component props default values
 */
Carousel.defaultProps = {
  title: '',
  style: { // Default styles
    container: {
      background: '#2e566e',
      padding: '30px 0',
    },
    title: {
      margin: '0 0 20px 0',
      textAlign: 'center',
    },
  },
};

export default Carousel;
