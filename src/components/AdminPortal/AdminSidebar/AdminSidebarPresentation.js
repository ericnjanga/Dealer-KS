import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import settings, { appText } from './../../../settings/basics.js';


const AdminSidebarPresentation = ({
  toggle,
  active,
  pageSections,
  handleChange,
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
        {
          pageSections.map(({ name, title, active, linkList }) => {
            return (
              <nav
                key={name}
                className={classes.sidebarnav}
              >
                <div>
                  <Button
                    className={classes.sidebarnavtitle}
                    onClick={(event) => handleChange('pageSections', name)}
                  >
                    {title}
                  </Button>
                </div>

                {
                  active &&
                  <ul className={classes.sidebarnavlist}>
                    {
                      // console.log('>>>pageSection=', pageSection)
                      linkList &&
                      linkList.map((link) => {
                        return (
                          <li
                            key={link.name}
                            className={classes.sidebarnavitem}
                          >
                            <Button
                              className={classes.sidebarnavitembtn}
                              // onClick={handleChange}
                              datatype="xxx"
                            >
                              {link.title}
                            </Button>
                          </li>
                        )
                      })
                    }
                  </ul>
                }
              </nav>
            )
          })
        }
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
  pageSections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,

  handleChange: PropTypes.func.isRequired,
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
    // border: '2px solid lime',
  },
  sidebarnavtitle: {
    color: '#1DB2D4',
    // borderBottom: '2px solid lime',
    marginBottom: '5px',
    textTransform: 'uppercase',
    fontSize: '18px',
    width: '100%',
    justifyContent: 'left',
    textAlign: 'left',
    paddingLeft: '0',
  },
  sidebarnavlist: {
    marginBottom: '30px',
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
  sidebarnavitembtn: {
    color: '#fff',
    width: '100%',
    justifyContent: 'left',
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

