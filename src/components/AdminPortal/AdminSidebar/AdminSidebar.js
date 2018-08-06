import React from 'react';
import AdminSidebarPresentation from './AdminSidebarPresentation.js';


class AdminSidebar extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      active: true, //sidebar open
    };
    this.toggle = this.toggle.bind(this);

  }

  toggle() {

    this.setState({ active: !this.state.active });

  }

  render() {

    return (
      <AdminSidebarPresentation
        toggle={this.toggle}
        {...this.props}
        {...this.state}
      />
    );

  }
}

export default AdminSidebar;
