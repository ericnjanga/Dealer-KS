import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

const AdminPortalPresentation = ({
  id,
  name,
  email,
  phoneNumber,
  country,

  handleChange,
  handleSubmit,

  classes,
  style
}) => {
 

  return (
    <section style={style.container}>


        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            

            <NavLink to={`/`}>
              Main Site
            </NavLink>

          </Toolbar>
        </AppBar>




      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3" style={{ marginBottom: '20px' }}>
          Admin ... <b>Dealer KS</b>
        </Typography> 

        {/* <form
          className={classes.container}
          noValidate
          autoComplete="off"
          style={{ marginBottom: '20px' }}
        >
          <TextField
            id="name"
            label="Name"
            name="name"
            className={classes.textField}
            value={name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            id="email"
            label="Email"
            name="email"
            className={classes.textField}
            value={email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            id="phoneNumber"
            label="Numero de téléphone"
            name="phoneNumber"
            className={classes.textField}
            value={phoneNumber}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            id="country"
            label="Pays"
            name="country"
            className={classes.textField}
            value={country}
            onChange={handleChange}
            margin="normal"
          />

          <div style={{ marginTop: '40px' }}>
            <Button
              variant="contained"
              color="primary"
              className={classes.textField}
              onClick={handleSubmit}
            >
              Entrez dans le site
            </Button>
          </div>
        </form> */}
      </Paper>
    </section>
  );

};

/**
 * Component props validation
 */
AdminPortalPresentation.propTypes = {
  // id: PropTypes.string,
  // name: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // phoneNumber: PropTypes.string.isRequired,
  // country: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
};

/**
 * Component props default values
 */
AdminPortalPresentation.defaultProps = {
  // id: null,
  style: { // Default styles
    container: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: '20',
    },
  },
};


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    maxWidth: '400px',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

export default withStyles(styles)(AdminPortalPresentation); 
