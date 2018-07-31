import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/icons/Lock';
import { appText } from './../../settings/dummy-data.js';
import { format } from 'util';

import AdminDialogPresentation from './AdminDialogPresentation.js';
// import './AuthPortalPresentation.css';

const AuthPortalPresentation = ({
  name,
  email,
  phoneNumber,
  country,
  adminName,
  adminPassword,

  dialogOpen,

  handleChange,
  handleSubmit,
  handleDialogClickOpen,
  handleDialogClose,
  handleAdminChange,
  handleAdminSubmit,

  classes,
  style,
}) => {

  return (
    <section style={style.container}>

      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3" style={{ marginBottom: '20px' }}>
          Bienvenue chez <b>Dealer KS</b>
        </Typography>
        <Typography component="p">
          {appText.loginIntro}
        </Typography>

        <form
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
        </form>


        <Button
          variant="fab"
          mini 
          aria-label="Add"
          className={classes.button}
          onClick={handleDialogClickOpen}
          style={{ position:'absolute', right:'10px', bottom:'10px' }}
        >
          <Icon />
        </Button>
      </Paper>
      
      <AdminDialogPresentation
        handleDialogClose={handleDialogClose}
        dialogOpen={dialogOpen}
        name={adminName}
        password={adminPassword}
        handleAdminChange={handleAdminChange}
        handleAdminSubmit={handleAdminSubmit}
      />
    </section>
  );

};


/**
 * Component props validation
 */
AuthPortalPresentation.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  adminName: PropTypes.string.isRequired,
  adminPassword: PropTypes.string.isRequired,

  dialogOpen: PropTypes.bool.isRequired,

  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleDialogClickOpen: PropTypes.func.isRequired,
  handleDialogClose: PropTypes.func.isRequired,
  handleAdminChange: PropTypes.func.isRequired,
  handleAdminSubmit: PropTypes.func.isRequired,

  classes: PropTypes.shape({}),
  style: PropTypes.shape({}),
};

/**
 * Component props default values
 */
AuthPortalPresentation.defaultProps = {

  classes: PropTypes.shape({}),
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
    position: 'relative',
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

export default withStyles(styles)(AuthPortalPresentation); 
