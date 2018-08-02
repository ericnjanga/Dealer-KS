import React from 'react';
import AdminPortalPresentation from './AdminPortalPresentation.js';
import { Redirect } from 'react-router-dom';

import { AdminContext } from './../../services/services-init.js';
import DBItem from './../../services/DBItem.class.js';
import DBItemColor from './../../services/DBItemColor.class.js';

class AdminPortal extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      makePanelActive: true,
      bodytypePanelActive: true,
      colorPanelActive: true,
    };
    this.handleColorDelete = this.handleColorDelete.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

  }


  /**
   * Fill user state with default values
   * (empty values is nothing has been saved to the state)
   */
  componentDidMount() {

    console.log('****-*****', this.props.admin);





    /**
     * GET ALL ITEMS
     * -------------
     * Save a reverse list of items in the state
     */
    DBItem.getNode().on('value', (snapshot) => {

      const nodeVal = snapshot.val();
      const tempsItems = [];
      if (nodeVal) {//Avoid error if there is no DB objects 
        const itemsMap = new Map(Object.entries(nodeVal));
        itemsMap.forEach((value) => {
          const post = Object.assign({}, value);
          // push values in a regular array
          tempsItems.push(post);
        }); // itemsMap
      }//nodeVal
      // save array in state
      const itemsReverse = tempsItems.reverse();
      console.log('>>>>itemsReverse=', itemsReverse);
      const items = [...itemsReverse];
      console.log('>>>>items=', items);
      this.setState({ items });

    }); // [end] items ...


    /**
     * GET ALL COLORS
     * -------------
     * Save a reverse list of items in the state
     */
    DBItemColor.getNode().on('value', (snapshot) => {
  
      const nodeVal = snapshot.val();
      const tempsItems = [];
      if (nodeVal) {//Avoid error if there is no DB objects 
        const itemsMap = new Map(Object.entries(nodeVal));
        itemsMap.forEach((value) => {
          const post = Object.assign({}, value);
          // push values in a regular array
          tempsItems.push(post);
        }); // itemsMap
      }//nodeVal
      // save array in state
      const itemsReverse = tempsItems.reverse();
      console.log('>>>>itemsReverse=', itemsReverse);
      const itemColors = [...itemsReverse];
      console.log('>>>>items=', itemColors);
      this.setState({ itemColors });
  
    }); // [end] Colors ...

  } // [end] componentDidMount


  handleItemDelete(key) {

    // still need to delete the attached image
    DBItem.remove(key);
  }


  handleColorDelete(key) {
    DBItemColor.remove(key);
  }




  /**
   * - Save text field changes in the state
   */
  handleChange(event) {

    // const targetName = event.target.name;
    // const { user } = this.state;
    // user[targetName] = event.target.value;
    // this.setState({ user });

  }


  /**
   * - Save user data in the database
   * - Then save the same data in localStorage
   * - Set this component as inactive
   */
  handleSubmit() {

    // DBItem.save({ ...this.state.user }).then(({
    //   id, name, email, phoneNumber, country,
    // }) => {

    //   localStorage.setItem('ks-user-id', id);
    //   localStorage.setItem('ks-user-name', name);
    //   localStorage.setItem('ks-user-email', email);
    //   localStorage.setItem('ks-user-phoneNumber', phoneNumber);
    //   localStorage.setItem('ks-user-country', country);

    // });

    // this.setState({ active: !this.state.active });

  }


  render() {

    // // Return to home page if there is no admin data
    // if (!this.props.admin) {

    //   return (
    //     <div>
    //       <Redirect to="/" />
    //     </div>
    //   );

    // }

    // return (
    //   <AdminContext.Consumer>
    //     {
    //       admin => (
    //         <AdminPortalPresentation/>
    //       )
    //     }
    //   </AdminContext.Consumer>
    // );


    // Temporary
    // ---------------

    // Don't render component if ...
    if (!this.state || !this.state.items || !this.state.itemColors || this.state.formActive) {

      return false;

    }


    return (
      <AdminPortalPresentation
        {...this.state}
        handleColorDelete={this.handleColorDelete}
        handleItemDelete={this.handleItemDelete}
      />
    );

  }

}

export default AdminPortal;
