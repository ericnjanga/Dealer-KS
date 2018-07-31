import React from 'react';
import HeroContainer from './HeroContainer.js';
import HeroPresentation from './HeroPresentation.js';

const Hero = () => {

  return (
    <HeroPresentation container={HeroContainer} />
  );

};

export default Hero;
