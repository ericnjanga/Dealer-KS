import React from 'react';
import MainCarouselPresentation from './MainCarouselPresentation.js';
import { dummyPosts } from './../../settings/dummy-data.js';

class MainCarousel extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      title: '*** carousel title',
      items: dummyPosts,
    };

  }

  render() {

    // console.log('???????---->', this.state );

    return (
      <MainCarouselPresentation {...this.state} />
    );

  }

}

export default MainCarousel;
