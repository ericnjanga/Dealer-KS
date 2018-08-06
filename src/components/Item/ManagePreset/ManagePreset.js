import React from 'react';
import PropTypes from 'prop-types';
import DBItem from './../../../services/DBItem.class.js';
import DBItemColor from './../../../services/DBItemColor.class.js';
import ManagePresetPresentation from './ManagePresetPresentation.js';

class ManagePreset extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      name: this.props.name,
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


  // componentDidMount() {
  //   console.log('>>>>>', this.state);
  // }


  handleChange(event) {

    const targetName = event.target.name;
    const { form } = this.state;
    form[targetName] = event.target.value;
    this.setState({ form });

  }


  handleSubmit() {

    console.log('....DBItemColor()');

    this.setState({ formInactive: false });
    DBItem.savePreset(this.state.name, this.state.form).then((itemCreated) => {
      
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
      <ManagePresetPresentation
        {...this.state.form}
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
ManagePreset.propTypes = {
  name: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // active: PropTypes.bool.isRequired,
  // style: PropTypes.shape({}),
};

/**
 * Component props default values
 */
ManagePreset.defaultProps = {
};

export default ManagePreset;
