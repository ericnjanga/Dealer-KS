import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import './AdminPortalPresentation.css';

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

  const introText = `Chocolate bar apple pie lollipop brownie carrot 
  cake halvah chocolate bar. Toffee candy tiramisu gummi bears. Halvah 
  cake cheesecake. Chocolate bar apple pie lollipop brownie carrot cake 
  halvah chocolate bar`;

  return (
    <section style={style.container}>

      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3" style={{ marginBottom: '20px' }}>
          Bienvenue chez <b>Dealer KS</b>
        </Typography>
        <Typography component="p">
          {introText}
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
      </Paper>
      ????
    </section>
  );

};

/**
 * Component props validation
 */
AdminPortalPresentation.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  // title: PropTypes.string,
  // children: PropTypes.shape({}).isRequired,
  style: PropTypes.shape({}),
};

/**
 * Component props default values
 */
AdminPortalPresentation.defaultProps = {
  id: null,
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
