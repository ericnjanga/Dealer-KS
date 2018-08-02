/**
 * Class dedicated to items
 */
import { database } from './services-init.js';

const nodeName = 'itemColors';
const emptyItem = {
  name: '',
};

class DBItemColor {
  // Get a item from the database ...
  // (returns a promise which resolves when the snapshot is ready) 
  static get(uid) {
    // return new Promise((resolve, reject) => {
    //   database.ref('/'+nodeName+'/' + uid).once('value').then(function(snapshot) {
    //     resolve(snapshot.val());
    //   });
    // });
  }

  // Returns a subset (item properties) of an object's properties (object containing many more properties). 
  // https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties 
  static getBasicProperties(data) {
    // const properties = (({
    //   displayName, email, phoneNumber, photoURL, biography, visible, lat, lng, uid 
    // }) => ({
    //   displayName, email, phoneNumber, photoURL, biography, visible, lat, lng, uid 
    // }))(data);
    // return properties;
  }


  static getEmptyItem() {
    return {...emptyItem};
  }

  /**
   * Save item data in database:
   * - Make sure to create a new key and save it (if record is new)
   * - Otherwise just update the record
   */
  static save(itemObj) {

    const listRef = database.ref(nodeName);
    const item = { ...itemObj };
    const updates = {};
    item.createdOn = Date.now();

    return new Promise((resolve) => {

      if (!item.id) {
        
        // Get a key for a new Post.
        item.id = listRef.push().key;
      
      }

      updates[`/${item.id}`] = item;

      resolve(item);

      return listRef.update(updates);
    });// [end] promise
  }

  //Update item info in the database
  static updateProfile(preferences) {
    // let authObject = this.getCurrentitem();
    // let tpl_item = {   
    //   biography    : preferences.biography,
    //   visible      : preferences.visible,
    //   displayName  : preferences.displayName,
    //   phoneNumber  : preferences.phoneNumber
    // };
    // //These properties will always come from the auth service
    // //In case item change these outside our app (Google, Yahoo, ...), it will see changes reflected here
    // tpl_item.photoURL     = authObject.photoURL;
    // tpl_item.email        = authObject.email;
    // //Create or update item record in the database
    // let record = {};
    // record['/'+nodeName+'/'+ authObject.uid] = tpl_item;
    // return database.ref().update(record); 
  }

  
  /**
   * Return database node (for external use)
   */
  static getNode() {

    return database.ref(nodeName);

  }

  // return currently logged item info
  static getCurrentitem() {
    // return auth.currentitem;
  } 


  // Delete a post
  static remove(id) {

    return database.ref(`${nodeName}/${id}`).remove();
    
  }
}

export default DBItemColor;
