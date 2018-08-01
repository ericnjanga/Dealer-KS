import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { appText } from './../../settings/dummy-data.js';

import ItemCreateForm from './../Item/ItemCreateForm/ItemCreateForm.js';

const AdminPortalPresentation = ({
  id,
  name,
  email,
  phoneNumber,
  country,

  handleChange,
  handleSubmit,

  classes,
  spacing,
  style
}) => {
 

  return (
    <section style={style.container}>

      <Grid
        container
        justify="center"
        spacing={Number('16')}
      >
        <Grid
          className={classes.item}
          item
          xs={12}
          sm={12}
          md={4}
        >
          <Paper className={classes.section} elevation={1}>
            <Typography variant="headline" component="h3" style={{ marginBottom: '20px' }}>
              Inventaire
            </Typography> 
            <p>?????</p>
          </Paper>
        </Grid>
        <Grid
          className={classes.item}
          item
          xs={12}
          sm={12}
          md={4}
        >
          <Paper className={classes.section} elevation={1}>
            <Typography variant="headline" component="h3" style={{ marginBottom: '20px' }}>
              Marques
            </Typography> 
            <p>?????</p>
          </Paper>

          <Paper className={classes.section} elevation={1}>
            <Typography variant="headline" component="h3" style={{ marginBottom: '20px' }}>
              Types de corps
            </Typography> 
            <p>?????</p>
          </Paper>

          <Paper className={classes.section} elevation={1}>
            <Typography variant="headline" component="h3" style={{ marginBottom: '20px' }}>
              Couleurs
            </Typography> 
            <p>?????</p>
          </Paper>
        </Grid>
        <Grid
          className={classes.item}
          item
          xs={12}
          sm={12}
          md={4}
        >
          <Paper className={classes.section} elevation={1}>
            <Typography variant="headline" component="h3" style={{ marginBottom: '20px' }}>
              Voiture
            </Typography>

            <ItemCreateForm />
          </Paper>
        </Grid>
      </Grid>


        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            

            <NavLink to={`/`}>
              Main Site
            </NavLink>

          </Toolbar>
        </AppBar>




      
    </section>
  );

};

/**
 * Component props validation
 */
AdminPortalPresentation.propTypes = {
  spacing: PropTypes.string,
  style: PropTypes.shape({}),
};

/**
 * Component props default values
 */
AdminPortalPresentation.defaultProps = {
  // id: null,
  spacing: '40',
  style: { // Default styles
    container: {
      padding: '80px 30px 30px 30px',
      backgroundColor: 'rgb(199, 207, 212)',
      // position: 'fixed',
      // width: '100%',
      // height: '100%',
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: 'rgba(0, 0, 0, 0.5)',
      // zIndex: '20',
    },
  },
};


const styles = theme => ({
  root: {
    marginBottom: '30px',
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    maxWidth: '400px',
  },
  section: {
    position: 'relative',
    marginBottom: '30px',
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    // maxWidth: '400px',
  },
});

export default withStyles(styles)(AdminPortalPresentation); 
