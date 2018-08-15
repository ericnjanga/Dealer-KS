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
      pageSections: [...settings.pageSections]
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

  // pure function athat get a source, gets its copy, look over it
  // activate corresponding item, deactivate the rest of items
  activateSource(source, item) {

  }

  /**
   * - Multi function method
   */
  handleChange({ action, dir, isSublink, root, targetName, parent }) {

    // console.log('>>>parent=', parent);
    console.log('>>>action, dir=', action, dir, targetName);

    // activate/deactivate page links
    if (action === 'activate') {

      const { state } = this;
      const root = state[dir[0]];



      //--- each time user clicks,
      // find a way to provide the right source
      // to this function
      activateSource();

      // update state with what that function returns

     

        // for (let i = 0, l = root.length; i < l; i += 1) {
        //   if (root[i].name !== targetName) {
        //     root[i].active = false;

        //     if(isSublink) {
        //       let subRoot = root[i].linkList
        //       for (let j = 0, k = subRoot.length; j < k; j += 1) {
        //         if (subRoot[j].name !== targetName) {
        //           subRoot[j].active = false;  
        //         } else {
        //           subRoot[j].active = true;
        //         }
        //       }

        //     }

        //   } else {
        //     root[i].active = true;
        //   }
        // }

      // } 
      
      // else {

      //   console.log('>>>>sublinkRoot', state.sublinkRoot);

      //   for(let j = 0, l = state.sublinkRoot.length; j < l; j += 1) {

      //   }

      // }
      

      console.log(state[dir[0]]);

      this.setState({ [dir[0]]:root });
  
    }

    /*
    if(root && root === 'pageSections') {

      if (targetName) {


      // console.log('1>>>>>>', root);
      // console.log('1>>>>>>', targetName);
  
        const { pageSections } = this.state;
        for (let i = 0, l = pageSections.length; i < l; i += 1) {
  
          if (pageSections[i].name !== targetName) {
  
            pageSections[i].active = false; // deactivate
            // console.log('1>>>>>>', pageSections[i]);
  
          } else {
  
            pageSections[i].active = true; // activate
            // console.log('2>>>>>>', pageSections[i]);
  
          }
  
        }
  
        this.setState({ pageSections });
  
      }

    }
    */

    



    if (parent && parent== root && root === 'linkList' && targetName) {

    }



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
