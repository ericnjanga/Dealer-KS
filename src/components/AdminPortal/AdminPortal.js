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
      // presets: [...settings.presets],
      pageSections: [...settings.pageSections],
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    const presets = this.state.pageSections[2];
    const { pageSections } = this.state;

    for (let i = 0, l = presets.linkList.length; i < l; i += 1) {

      DBItem.getNode(presets.linkList[i].name).on('value', (snapshot) => {

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
        presets.linkList[i].list = [];
        const itemsReverse = tempsItems.reverse();
        presets.linkList[i].list = [...itemsReverse];
        pageSections.presets = presets;
        this.setState({ pageSections });

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
  handleChange(event) {

    const dataType = event.target.getAttribute('datatype').split('/');

    

    if (dataType[0] && dataType[0] === 'pageSections' && dataType.length === 1 ) {


      console.log('>>>>>>', this.state[dataType[0]]);

      // if (dataType[0] === 'pageSections') {

      //   const { pageSections } = this.state;
      //   if (dataType[1] && dataType[1] === 'presets') {
  
      //     const presets = pageSections[2];
  
      //   }

      // }

    }

    // const targetName = event.target.name;
    // const targetValue = event.target.value ==='true' ? false : true;
    // const presets = this.state.pageSections[2];
    // const { pageSections } = this.state;
    // // const { presets } = this.state;

    // for(let i in presets) { 
    //   if (presets.linkList[i].name === targetName) {
    //     presets.linkList[i].active = targetValue;
    //     break;
    //   }
    // } 

    // // console.log(`${targetName} - ${targetValue}`);

    // pageSections.presets = presets;
    // this.setState({ pageSections });
    // // this.setState({ presets });

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

    return this.state && this.state.items && this.state.pageSections;

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
        handleChange={this.handleChange}
      />
    );

  }

}

export default AdminPortal;
