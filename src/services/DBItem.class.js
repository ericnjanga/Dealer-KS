/**
 * Class dedicated to users
 */
import { database } from './services-init.js';

const nodeName = 'users';

class DBUser {
  // Get a user from the database ...
  // (returns a promise which resolves when the snapshot is ready) 
  static get(uid) {
    // return new Promise((resolve, reject) => {
    //   database.ref('/'+nodeName+'/' + uid).once('value').then(function(snapshot) {
    //     resolve(snapshot.val());
    //   });
    // });
  }

  // Returns a subset (user properties) of an object's properties (object containing many more properties). 
  // https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties 
  static getBasicProperties(data) {
    // const properties = (({
    //   displayName, email, phoneNumber, photoURL, biography, visible, lat, lng, uid 
    // }) => ({
    //   displayName, email, phoneNumber, photoURL, biography, visible, lat, lng, uid 
    // }))(data);
    // return properties;
  }

  /**
   * Save user data in database:
   * - Make sure to create a new key and save it (if record is new)
   * - Otherwise just update the record
   */
  static save(userObj) {

    const listRef = database.ref(nodeName);
    const user = { ...userObj };
    const updates = {};
    user.createdOn = Date.now();

    return new Promise((resolve) => {

      if (!user.id) {
        
        // Get a key for a new Post.
        user.id = listRef.push().key;
      
      }

      updates[`/${user.id}`] = user;

      resolve(user);

      return listRef.update(updates);
    });// [end] promise
  }

  //Update user info in the database
  static updateProfile(preferences) {
    // let authObject = this.getCurrentUser();
    // let tpl_user = {   
    //   biography    : preferences.biography,
    //   visible      : preferences.visible,
    //   displayName  : preferences.displayName,
    //   phoneNumber  : preferences.phoneNumber
    // };
    // //These properties will always come from the auth service
    // //In case user change these outside our app (Google, Yahoo, ...), it will see changes reflected here
    // tpl_user.photoURL     = authObject.photoURL;
    // tpl_user.email        = authObject.email;
    // //Create or update user record in the database
    // let record = {};
    // record['/'+nodeName+'/'+ authObject.uid] = tpl_user;
    // return database.ref().update(record); 
  }

  
  /**
   * Return database node (for external use)
   */
  static getNode() {

    return database.ref(nodeName);

  }

  //return currently logged user info
  static getCurrentUser() {
    // return auth.currentUser;
  } 
}

export default DBUser;