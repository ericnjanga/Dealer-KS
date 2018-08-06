import React from 'react';
import AdminPortalPresentation from './AdminPortalPresentation.js';
import settings from './../../settings/basics.js';
// import { Redirect } from 'react-router-dom';

// import { AdminContext } from './../../services/services-init.js';
import DBItem from './../../services/DBItem.class.js';

class AdminPortal extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      presets: [...settings.presets],
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCK1Change = this.handleCK1Change.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

  }


  /**
   * Fill user state with default values
   * (empty values is nothing has been saved to the state)
   */
  componentDidMount() {

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
      const items = [...itemsReverse];
      this.setState({ items });

    }); // [end] items ...


    /**
     * GET ALL Presets
     * -------------
     * Save a reverse list of items in the "list" property of each individual "preset" object
     * (Replace the whole "preset" object back in the state)
     */
    const { presets } = this.state;

    for (let i = 0, l = presets.length; i < l; i += 1) {

      DBItem.getNode(presets[i].name).on('value', (snapshot) => {

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
        presets[i].list = [];
        const itemsReverse = tempsItems.reverse();
        presets[i].list = [...itemsReverse];
        this.setState({ presets });

      }); // [end] GET ALL Presets

    }

  } // [end] componentDidMount


  handleDelete(key, preset) {

    // still need to delete the attached image
    DBItem.remove(key, preset);

  }

  handleEdit(key, preset) {

    console.log('-----edit-----');

    // // still need to delete the attached image
    // DBItem.remove(key, preset);

  }





  /**
   * - Save text field changes in the state
   */
  handleCK1Change(event) {

    const targetName = event.target.name;
    const targetValue = event.target.value ==='true' ? false : true;
    const { presets } = this.state;

    for(let i in presets) { 
      if (presets[i].name === targetName) {
        presets[i].active = targetValue;
        break;
      }
    } 

    // console.log(`${targetName} - ${targetValue}`);
 
    this.setState({ presets });

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


  componentReady() {

    return this.state && this.state.items && this.state.presets;

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
    if (!this.componentReady()) {

      return false;

    }

    return (
      <AdminPortalPresentation
        {...this.state}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
        handleCK1Change={this.handleCK1Change}
      />
    );

  }

}

export default AdminPortal;
