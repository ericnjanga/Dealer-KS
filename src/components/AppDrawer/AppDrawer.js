import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
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

  const sideList = (
    <ul className={'classes.list'}>
      <li>item 1</li>
      <li>item 1</li>
      <li>item 1</li>
      <li>item 1</li>
      <li>
        <Button variant="contained" color="secondary">
          Edit mode / ON
        </Button>
      </li>
      {/* <List>{mailFolderListItems}</List>
      <Divider />
      <List>{otherMailFolderListItems}</List> */}
    </ul>
  );

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
    <div>
      {/* <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
      <Button onClick={toggleDrawer('right', true)}>Open Right</Button>
      <Button onClick={toggleDrawer('top', true)}>Open Top</Button>
      <Button onClick={toggleDrawer('bottom', true)}>Open Bottom</Button> */}
      <Drawer open={drawer.left} onClose={toggleDrawer('left', false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer('left', false)}
          onKeyDown={toggleDrawer('left', false)}
        >
          {sideList}
        </div>
      </Drawer>
      {/* <Drawer anchor="top" open={this.state.top} onClose={toggleDrawer('top', false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer('top', false)}
          onKeyDown={toggleDrawer('top', false)}
        >
          {fullList}
        </div>
      </Drawer>
      <Drawer
        anchor="bottom"
        open={this.state.bottom}
        onClose={toggleDrawer('bottom', false)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer('bottom', false)}
          onKeyDown={toggleDrawer('bottom', false)}
        >
          {fullList}
        </div>
      </Drawer>
      <Drawer anchor="right" open={this.state.right} onClose={toggleDrawer('right', false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer('right', false)}
          onKeyDown={toggleDrawer('right', false)}
        >
          {sideList}
        </div>
      </Drawer> */}
    </div>
  );
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppDrawer);