import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import settings, { appText } from './../../../settings/basics.js';


const AdminSidebarPresentation = ({
  toggle,
  active,
  presets,
  classes,
}) => {

  return (
    <div
      className={ active ? classes.rootActive : classes.rootInactive }
    >
      <Hero
        toggle={toggle}
        classes={classes}
        opened={active}
      />
      <div
        className={ active ? classes.containerActive : classes.containerInactive }
      >
        <nav className={classes.sidebarnav}>
          <h2 className={classes.sidebarnavtitle}>Site Info</h2>
          <ul className={classes.sidebarnavlist}>
            <li className={classes.sidebarnavitem}>Texts</li>
          </ul>
        </nav>

        <nav className={classes.sidebarnav}>
          <h2 className={classes.sidebarnavtitle}>Liste de voitures</h2>
          <ul className={classes.sidebarnavlist}>
            <li className={classes.sidebarnavitem}>Toutes les voitures</li>
          </ul>
        </nav>

        <nav className={classes.sidebarnav}>
          <h2 className={classes.sidebarnavtitle}>Modifier les paramètres</h2>
          <ul className={classes.sidebarnavlist}>
          {
            presets.map((preset) => {
              return (<li
                key={preset.name}
                className={classes.sidebarnavitem}>{preset.name}</li>)
            })
          }
          </ul>
        </nav>
      </div>
    </div>
  );

};


/**
 * Component props validation
 */
AdminSidebarPresentation.propTypes = {
  toggle: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  presets: PropTypes.arrayOf(PropTypes.shape({})).isRequired,

  classes: PropTypes.shape({}),
};

/**
 * Component props default values
 */
AdminSidebarPresentation.defaultProps = {
  classes: PropTypes.shape({}),
};


const styles = theme => ({

  rootActive: {
    width: '400px',
    textAlign: 'left',
    padding: '30px',
    backgroundColor: '#520000',
    transition: 'all 0.5s',
  },
  rootInactive: {
    width: '100px',
    textAlign: 'left',
    padding: '30px 0',
    backgroundColor: '#520000',
    transition: 'all 0.5s',
  },


  containerActive: {
    opacity: '1',
    transition: 'opacity 0.5s',
  },
  containerInactive: {
    opacity: '0',
    transition: 'opacity 0.5s',
  },

  sidebarnav: {
    marginBottom: '30px',
    // border: '2px solid lime',
  },
  sidebarnavtitle: {
    color: '#1DB2D4',
    // border: '2px solid lime',
    marginBottom: '5px',
    textTransform: 'uppercase',
    fontSize: '18px',
  },
  sidebarnavlist: {
    listStyleType: 'none',
    marginTop: '0',
    paddingLeft: '0',
    // border: '2px solid orange',
  },
  sidebarnavitem: {
    marginBottom: '10px',
    fontSize: '18px',
    color: '#fff',
    // border: '2px solid lime',
  },

  heroRoot: {
    position: 'relative',
    display: 'flex',
  },
  herotitleActive: {
    opacity: '1',
    position: 'absolute',
    color: '#fff',
    transition: 'opacity 0.5s',
  },
  herotitleInactive: {
    opacity: '0',
    position: 'absolute',
    color: '#fff',
    transition: 'opacity 0.2s',
  },
  herobuttonActive: {
    marginLeft: 'auto',
  },
  herobuttonInactive: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  herobtnicon: {
    fontSize: '60px',
    color: '#fff',
  },
});

export default withStyles(styles)(AdminSidebarPresentation);


//....
//....

const BtnToggle = ({
  toggle,
  opened,
  classes,
}) => {
  return (
    <IconButton
      className={ opened ? classes.herobuttonActive : classes.herobuttonInactive }
      aria-label="Delete"
      onClick={toggle}
    >
      {
        opened ?
          <CloseIcon className={classes.herobtnicon} /> :
          <MenuIcon className={classes.herobtnicon} />
      }
    </IconButton>
  );

};


const Hero = ({
  toggle,
  opened,
  classes,
}) => {
  return (
    <div className={classes.heroRoot}>
      <h1
        className={ opened ? classes.herotitleActive : classes.herotitleInactive}
      >
        <span style={{ opacity: '0.5' }}>Admin</span>
        { appText.brand }
      </h1>
      <BtnToggle
        toggle={toggle}
        opened={opened}
        classes={classes}
      />
    </div>
  );

};

//....
//....

