import React from 'react';
import PropTypes from 'prop-types';
import DBItem from './../../../services/DBItem.class.js';
import ItemCreateFormPresentation from './ItemCreateFormPresentation.js';

class ItemCreateForm extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      formInactive: true,
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

    // console.log('**********************');
    // console.log('**********************');
    // console.log('targetNam=', targetName);
    // console.log('event.target.value=', event.target.value);
    // console.log('**********************');
    // console.log('**********************');

  }


  handleSubmit() {

    this.setState({ formInactive: true });
    DBItem.save(this.state.form).then((itemCreated) => {
      
      // console.log('....itemCreated=', itemCreated);

      const form = DBItem.getEmptyItem();
      this.setState({
        form,
        formInactive: false,
      });

    });
    
  }

  render() {

    // Don't render component if ...
    if (!this.state || !this.props.presets) {

      return false;

    }

    return (
      <ItemCreateFormPresentation
        {...this.state.form}
        presets={this.props.presets}
        formInactive={this.state.formInactive}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

/**
 * Component props validation
 */
ItemCreateForm.propTypes = {
  presets: PropTypes.arrayOf(PropTypes.shape({})),
};

/**
 * Component props default values
 */
ItemCreateForm.defaultProps = {
  presets: null,
};


export default ItemCreateForm;
