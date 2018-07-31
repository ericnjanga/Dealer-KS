import React from 'react';
import { storiesOf } from '@storybook/react';



import Carousel from './../components/Carousel/Carousel.js';
import Item from './../components/Item/Item.js';
import { dummyPosts, dummyPost } from './../settings/dummy-data.js';


/**
 * List
 * ---------
 */
storiesOf('List', module)
  .add('--------', () => {

    return (
      <Carousel title={'Les Affaires de la semaine'}>
        {
          dummyPosts.map(item =>{
            return <Item key={item.title} {...item} />
          })
        }
      </Carousel>
    );

  })
  ;


/**
 * Item
 * ---------
 */
storiesOf('Item', module)
  .add('No text field and No image', () => {

    return (
      <div style={{ margin:'0 auto', width:'300px' }}>
        <Item
          {...dummyPost}
        />
      </div>
    );

  })
  .add('Not visible', () => {

    return (
      <div style={{ margin:'0 auto', width:'300px' }}>
        <Item
          {...dummyPost}
          isVisible={false}
        />
      </div>
    );

  });

