import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { AdminContext } from './../../services/services-init.js';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

const AppDrawer = ({ drawer, toggleDrawer }) => {
  // state = {
  //   top: false,
  //   left: false,
  //   bottom: false,
  //   right: false,
  // };

  // toggleDrawer = (side, open) => () => {
  //   this.setState({
  //     [side]: open,
  //   });
  // };
  
    // const { classes } = this.props;

  const SideList = ({ admin }) => {

    console.log('.....admin=', admin);

    return (
      <ul className={'classes.list'}>
        <li>item 1</li>
        <li>item 1</li>
        <li>item 1</li>
        <li>item 1</li>
        {
          admin &&
          <li>
            <NavLink to={`/admin`}>
              Admin Portal
            </NavLink>
            {/* <Button variant="contained" color="secondary">
              Edit mode / ON
            </Button> */}
          </li>
        }
      </ul>
    );

  };


  const fullList = (
    <div className={'classes.fullList'}>
      <p>Powder liquorice soufflé icing cotton candy soufflé cake jelly-o. Donut sugar plum lemon drops.</p>
      {/* <List>{mailFolderListItems}</List>
      <Divider />
      <List>{otherMailFolderListItems}</List> */}
    </div>
  );
  // , toggleDrawer 

  return (
    <AdminContext.Consumer>
      {
        admin => (
          <div>
            <Drawer open={drawer.left} onClose={toggleDrawer('left', false)}>
              <div
                tabIndex={0}
                role="button"
                onClick={toggleDrawer('left', false)}
                onKeyDown={toggleDrawer('left', false)}
              >
                <SideList admin={admin} />
              </div>
            </Drawer>
          </div>
        )
      }
    </AdminContext.Consumer>
  );
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

{/* <AdminContext.Consumer>
  <div>
    {
      admin => (
        console.log('>>>>>admin=', admin)
      )
    }
  </div>
</AdminContext.Consumer> */}

export default withStyles(styles)(AppDrawer);