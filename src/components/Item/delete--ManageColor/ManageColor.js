import React from 'react';
import PropTypes from 'prop-types';
import DBItemColor from './../../../services/DBItemColor.class.js';
import ManageColorPresentation from './ManageColorPresentation.js';

class ManageColor extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      formInactive: true,
      form: {
        name: '',
        // description: '',
        // price: '',
        // make: '',
        // year: '',
        // bodyType: '',
        // kilometers: '',
        // color: '',
        // transmission: '',
        // nbDoors: '',
        // fuelType: '',
        // isVisible: true,
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

    console.log('....DBItemColor()');

    this.setState({ formInactive: false });
    DBItemColor.save(this.state.form).then((itemCreated) => {
      
      console.log('....itemCreated=', itemCreated);

      const form = DBItemColor.getEmptyItem();
      this.setState({
        form,
        formInactive: true,
      });

    });
    
  }

  render() {

    return (
      <ManageColorPresentation
        {...this.state.form}
        formInactive={this.state.formInactive}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default ManageColor;
