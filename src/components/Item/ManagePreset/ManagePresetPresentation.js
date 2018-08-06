import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Spinner from './../../../components/Spinner/Spinner.js';
import settings from './../../../settings/basics.js';


const ManagePresetPresentation = ({

  name,

  formActive,

  handleChange,
  handleSubmit,

  classes,
}) => {

  const { spacing } = settings.grid;

  return(
    <form
      noValidate
      autoComplete="off"
    >
      <Spinner hide={formActive} />
      <TextField
        id="name"
        label="name"
        name="name"
        className={classes.textField}
        value={name}
        onChange={handleChange}
        margin="normal"
      />


      <div style={{ marginTop: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          className={classes.textField}
          onClick={handleSubmit}
        >
          Create
        </Button>
      </div>


      {/* <TextField
        id="description"
        label="Décrivez la voiture"
        name="description"
        type="textarea"
        className={classes.textField}
        value={description}
        onChange={handleChange}
        margin="normal"
      /> */}


      {
        /**
         * ....
         * -----
         */
      }
      {/* <Grid
        container
        className={classes.container}
        justify="center"
        spacing={Number(spacing)}
      >
        <Grid
          className={classes.item}
          item
          xs={6}
        >
          <TextField
            id="price"
            label="Prix ($ CDN)"
            name="price"
            className={classes.textField}
            value={price}
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
        <Grid
          className={classes.item}
          item
          xs={6}
        >
          <TextField
            id="year"
            label="Année"
            name="year"
            type="textarea"
            className={classes.textField}
            value={year}
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
      </Grid> */}
 

      {
        /**
         * ....
         * -----
         */
      }
      {/* <Grid
        container
        className={classes.container}
        justify="center"
        spacing={Number(spacing)}
      >
        <Grid
          className={classes.item}
          item
          xs={6}
        >
          <TextField
            id="kilometers"
            label="Kilometres"
            name="kilometers"
            className={classes.textField}
            value={kilometers}
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
        <Grid
          className={classes.item}
          item
          xs={6}
        >
          <FormControl className={classes.textField} style={{ marginTop: '15px' }}>
            <InputLabel htmlFor="make">Transmission</InputLabel>
            <Select
              value={transmission}
              onChange={handleChange}
              inputProps={{
                name: 'transmission',
                id: 'transmission',
              }}
            >
              <MenuItem value="Manuelle">Manuelle</MenuItem>
              <MenuItem value="Automatique">Automatique</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid> */}
 

      {
        /**
          * ....
          * -----
          */
      }
      {/* <Grid
        container
        className={classes.container}
        justify="center"
        spacing={Number(spacing)}
      >
        <Grid
          className={classes.item}
          item
          xs={6}
        >
          <FormControl className={classes.textField}>
            <InputLabel htmlFor="nbDoors">Nombre de portes</InputLabel>
            <Select
              value={nbDoors}
              onChange={handleChange}
              inputProps={{
                name: 'nbDoors',
                id: 'nbDoors',
              }}
            >
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          className={classes.item}
          item
          xs={6}
        >
          <FormControl className={classes.textField}>
            <InputLabel htmlFor="fuelType">Type de carburant</InputLabel>
            <Select
              value={fuelType}
              onChange={handleChange}
              inputProps={{
                name: 'fuelType',
                id: 'fuelType',
              }}
            >
              <MenuItem value="Essence">Essence</MenuItem>
              <MenuItem value="Diesel">Diesel</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid> */}
 

      {
        /**
           * ....
           * -----
           */
      }
      {/* <Grid
        container
        className={classes.container}
        justify="center"
        spacing={Number(spacing)}
      >
        <Grid
          className={classes.item}
          item
          xs={6}
        >
          <FormControl className={classes.textField}>
            <InputLabel htmlFor="make">Marque</InputLabel>
            <Select
              value={make}
              onChange={handleChange}
              inputProps={{
                name: 'age',
                id: 'make',
              }}
            >
              <MenuItem value="Toyota">Toyota</MenuItem>
              <MenuItem value="Volvo">Volvo</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          className={classes.item}
          item
          xs={6}
        >
          <FormControl className={classes.textField}>
            <InputLabel htmlFor="bodyType">Type de corps</InputLabel>
            <Select
              value={bodyType}
              onChange={handleChange}
              inputProps={{
                name: 'bodyType',
                id: 'bodyType',
              }}
            >
              <MenuItem value="SUV, Crossover - 1">SUV, Crossover - 1</MenuItem>
              <MenuItem value="SUV, Crossover - 2">SUV, Crossover - 2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid> */}
 

      {
        /**
            * ....
            * -----
            */
      }
      {/* <Grid
        container
        className={classes.container}
        justify="center"
        spacing={Number(spacing)}
      >
        <Grid
          className={classes.item}
          item
          xs={12}
        >
          <FormControl className={classes.textField}>
            <InputLabel htmlFor="color">Couleur</InputLabel>
            <Select
              value={color}
              onChange={handleChange}
              inputProps={{
                name: 'age',
                id: 'color',
              }}
            >
              <MenuItem value="Rouge">Rouge</MenuItem>
              <MenuItem value="Verte">Verte</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid> */}
 

      {
        /**
             * ....
             * -----
             */
      }
      {/* <Grid
        container
        className={classes.container}
        justify="center"
        spacing={Number(spacing)}
      >
        <Grid
          className={classes.item}
          item
          xs={12}
        >
          <FormControlLabel
            className={classes.textField}
            control={
              <Checkbox
                checked={false}
                onChange={handleChange} 
                name="isVisible"
                id="isVisible"
              />
            }
            label="Is Visible"
          />
        </Grid>
      </Grid> */}




      



          
    </form>
  );

};



/**
 * Component props validation
 */
ManagePresetPresentation.propTypes = {
  name: PropTypes.string,
  // description: PropTypes.string.isRequired,
  // price: PropTypes.string.isRequired,
  // make: PropTypes.string.isRequired,
  // year: PropTypes.string.isRequired,
  // bodyType: PropTypes.string.isRequired,
  // kilometers: PropTypes.string.isRequired,
  // color: PropTypes.string.isRequired,
  // transmission: PropTypes.string.isRequired,
  // nbDoors: PropTypes.string.isRequired,
  // fuelType: PropTypes.string.isRequired,
  // isVisible: PropTypes.bool.isRequired,

  formActive: PropTypes.bool,

  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  classes: PropTypes.shape({}),
};

/**
 * Component props default values
 */
ManagePresetPresentation.defaultProps = {
  name: '',
  formActive: true,
  classes: PropTypes.shape({}),
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
    width: `calc(100% - ${theme.spacing.unit * 2}px)`,
  },
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
});


export default withStyles(styles)(ManagePresetPresentation);
