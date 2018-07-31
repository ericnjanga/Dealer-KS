import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/icons/Lock';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const AdminDialogPresentation = ({
  handleDialogClose,
  handleAdminChange,
  handleAdminSubmit,
  dialogOpen,
  name,
  password,
  classes,
}) => {
  return (
    <div>
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Connection Administrateur'}
          <Icon className={classes.icon} />
        </DialogTitle>
        <DialogContent>
          <form
            noValidate
            autoComplete="off"
            style={{ marginBottom: '20px' }}
          >
            <TextField
              id="name"
              label="Name"
              name="name"
              value={name}
              onChange={handleAdminChange}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="password"
              label="Password"
              name="password"
              value={password}
              onChange={handleAdminChange}
              className={classes.textField}
              margin="normal"
            />
          </form>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleDialogClose} color="primary" autoFocus> */}
          <Button onClick={handleAdminSubmit} color="primary" autoFocus>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


/**
 * Component props validation
 */
AdminDialogPresentation.propTypes = {
  handleDialogClose: PropTypes.func.isRequired,
  handleAdminChange: PropTypes.func.isRequired,
  handleAdminSubmit: PropTypes.func.isRequired,
  dialogOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  classes: PropTypes.shape({}),
};

/**
 * Component props default values
 */
AdminDialogPresentation.defaultProps = {

  classes: PropTypes.shape({}),

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
  icon: {
    position: 'relative',
    top: '4px',
    left: '10px',
    color: '#666',
  },
});


export default withStyles(styles)(AdminDialogPresentation);
