import React from 'react';
import PropTypes from 'prop-types';
import DBItem from './../../../services/DBItem.class.js';
import ItemCreateFormPresentation from './ItemCreateFormPresentation.js';

class ItemCreateForm extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      formActive: true,
      form: {
        title: '',
        description: '',
        price: '',
        make: '',
        year: '',
        bodyType: '',
        kilometers: '',
        color: '',
        transmission: '',
        nbDoors: '',
        fuelType: '',
        isVisible: true,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(event) {

    const targetName = event.target.name;
    const { form } = this.state;
    form[targetName] = event.target.value;
    this.setState({ form });

  }


  handleSubmit() {

    console.log('....DBItem()');

    this.setState({ formActive: false });
    DBItem.save(this.state.form).then((itemCreated) => {
      
      console.log('....itemCreated=', itemCreated);

      const form = DBItem.getEmptyItem();
      this.setState({
        form,
        formActive: false,
      });

    });
    
  }

  render() {

    return (
      <ItemCreateFormPresentation
        {...this.state.form}
        formActive={this.state.formActive}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default ItemCreateForm;
