import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom';
import { AdminContext } from './../../services/services-init.js';


import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: '10',
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};



const Filters = ({ handleChange }) => {

  return(
    <div>
      <FormControl className={'classes.formControl'}>
        <InputLabel htmlFor="age-simple">Marque</InputLabel>
        <Select
          value={'--test filter--'}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={'classes.formControl'}>
        <InputLabel htmlFor="age-simple">Model</InputLabel>
        <Select
          value={'--test filter--'}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={'classes.formControl'}>
        <InputLabel htmlFor="age-simple">Année</InputLabel>
        <Select
          value={'--test filter--'}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

    </div>
  );

}

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleFiltersChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <AdminContext.Consumer>
        {
          admin => (

            <div className={classes.root}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
                  }
                  label={auth ? 'Logout' : 'Login'}
                />
              </FormGroup>
              <AppBar position="fixed" className={classes.appBar}>
                <Toolbar> 
                  <IconButton onClick={this.props.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                  </IconButton>
    
                  <Typography variant="title" color="inherit" className={classes.flex}>
                    Photos
                  </Typography>
    
                  {
                    admin &&
                    <NavLink to={`/admin`}>
                      Admin Portal
                    </NavLink>
                  }
    
                  <Filters handleChange={this.handleFiltersChange} /> 
                  {auth && (
                    <div>
                      <IconButton
                        aria-owns={open ? 'menu-appbar' : null}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit"
                      >
                        <AccountCircle />
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={open}
                        onClose={this.handleClose}
                      >
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                      </Menu>
                    </div>
                  )}
                </Toolbar>
              </AppBar>
            </div>

          )
        }
      </AdminContext.Consumer>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);