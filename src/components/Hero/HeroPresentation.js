import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import './HeroPresentation.css';

const HeroPresentation = ({ container, style }) => {

  return (
    <header className="hero" style={style.container}>
      <div>
        <h1 className="hero-title">Les meilleures voitures</h1>
        <p>*******Chocolate bar apple pie lollipop brownie carrot cake halvah chocolate bar. Toffee candy tiramisu gummi bears. Halvah cake cheesecake. Chocolate bar apple pie lollipop brownie carrot cake halvah chocolate bar. </p>
        
        <Button variant="contained" color="secondary">
          Contact Us
        </Button>
      </div>
    </header>
  );

};

/**
 * Component props validation
 */
HeroPresentation.propTypes = {
  // title: PropTypes.string,
  // children: PropTypes.shape({}).isRequired,
  style: PropTypes.shape({}),
};

/**
 * Component props default values
 */
HeroPresentation.defaultProps = {
  // title: '',
  style: { // Default styles
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
};

export default HeroPresentation;
