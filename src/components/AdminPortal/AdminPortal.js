import React from 'react';
import AdminPortalPresentation from './AdminPortalPresentation.js';
import DBUser from './../../services/DBUser.class.js';

class AdminPortal extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      active: true, // component visibility
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  /**
   * Fill user state with default values
   * (empty values is nothing has been saved to the state)
   */
  componentDidMount() {

    const user = {
      id: localStorage.getItem('ks-user-id') ? localStorage.getItem('ks-user-id') : null,
      name: localStorage.getItem('ks-user-name') ? localStorage.getItem('ks-user-name') : '',
      email: localStorage.getItem('ks-user-email') ? localStorage.getItem('ks-user-email') : '',
      phoneNumber: localStorage.getItem('ks-user-phoneNumber') ? localStorage.getItem('ks-user-phoneNumber') : '',
      country: localStorage.getItem('ks-user-country') ? localStorage.getItem('ks-user-country') : '',
    };

    this.setState({ user });

  }


  /**
   * - Save text field changes in the state
   */
  handleChange(event) {

    const targetName = event.target.name;
    const { user } = this.state;
    user[targetName] = event.target.value;
    this.setState({ user });

  }


  /**
   * - Save user data in the database
   * - Then save the same data in localStorage
   * - Set this component as inactive
   */
  handleSubmit() {

    DBUser.save({ ...this.state.user }).then(({
      id, name, email, phoneNumber, country,
    }) => {

      localStorage.setItem('ks-user-id', id);
      localStorage.setItem('ks-user-name', name);
      localStorage.setItem('ks-user-email', email);
      localStorage.setItem('ks-user-phoneNumber', phoneNumber);
      localStorage.setItem('ks-user-country', country);

    });

    this.setState({ active: !this.state.active });

  }


  render() {

    if (!this.state.active) {

      return false;

    }

    return (
      this.state.user ?
        <AdminPortalPresentation
          {...this.state.user}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        :
        <span />
    );

  }

}

export default AdminPortal;
