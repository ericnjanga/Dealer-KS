import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ImgIcon from '@material-ui/icons/AddAPhoto';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Spinner from './../../../components/Spinner/Spinner.js';

import FormControlLabel from '@material-ui/core/FormControlLabel';

import Grid from '@material-ui/core/Grid';

const ImgUpload = () => {
  return(
    <div style={{ padding:'30px', border:'3px dashed #009dff' }}>
      <ImgIcon />
    </div>
  );
}


const ManageColorPresentation = ({

  title,
  description,
  price,
  make,
  year,
  bodyType,
  kilometers,
  color,
  transmission,
  nbDoors,
  fuelType,
  isVisible,

  formActive,

  presets,

  handleChange,
  handleSubmit,

  classes,
  spacing,
  style,
}) => {

  return(
    <form
       
      noValidate
      autoComplete="off"
      style={{ marginBottom: '20px' }}
    >
      <Spinner hide={formActive} />
      <ImgUpload />
      <TextField
        id="title"
        label="Title"
        name="title"
        className={classes.textField}
        value={title}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        id="description"
        label="Décrivez la voiture"
        name="description"
        type="textarea"
        className={classes.textField}
        value={description}
        onChange={handleChange}
        margin="normal"
      />


      {
        /**
         * ....
         * -----
         */
      }
      <Grid
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
      </Grid>
 

      {
        /**
         * ....
         * -----
         */
      }
      <Grid
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
      </Grid>
 

      {
        /**
          * ....
          * -----
          */
      }
      <Grid
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
      </Grid>
 

      {
        /**
           * ....
           * -----
           */
      }
      <Grid
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
            <InputLabel
              htmlFor={presets[0].name}
            >{presets[0].name}
            </InputLabel>
            <Select
              value={color}
              onChange={handleChange}
              inputProps={{
                name: presets[0].name,
                id: presets[0].name,
              }}
            >
              {
                presets[0].list &&
                presets[0].list.map(({ id, name })=>
                  <MenuItem key={id} value={name}>{name}</MenuItem>
                )
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid
          className={classes.item}
          item
          xs={6}
        >
          <FormControl className={classes.textField}>
            <InputLabel
              htmlFor={presets[1].name}
            >{presets[1].name}
            </InputLabel>
            <Select
              value={color}
              onChange={handleChange}
              inputProps={{
                name: presets[1].name,
                id: presets[1].name,
              }}
            >
              {
                presets[1].list &&
                presets[1].list.map(({ id, name })=>
                  <MenuItem key={id} value={name}>{name}</MenuItem>
                )
              }
            </Select>
          </FormControl>
        </Grid>
      </Grid>
 

      {
        /**
            * ....
            * -----
            */
      }
      <Grid
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
            <InputLabel
              htmlFor={presets[2].name}
            >{presets[2].name}
            </InputLabel>
            <Select
              value={color}
              onChange={handleChange}
              inputProps={{
                name: presets[2].name,
                id: presets[2].name,
              }}
            >
              {
                presets[2].list &&
                presets[2].list.map(({ id, name })=>
                  <MenuItem key={id} value={name}>{name}</MenuItem>
                )
              }
            </Select>
          </FormControl>
        </Grid>
      </Grid>
 

      {
        /**
             * ....
             * -----
             */
      }
      <Grid
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
      </Grid>




      



          

      <div style={{ marginTop: '40px' }}>
        <Button
          variant="contained"
          color="primary"
          className={classes.textField}
          onClick={handleSubmit}
        >
          Create...
        </Button>
      </div>
    </form>
  );

};


/**
 * Component props validation
 */
ManageColorPresentation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  bodyType: PropTypes.string.isRequired,
  kilometers: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  transmission: PropTypes.string.isRequired,
  nbDoors: PropTypes.string.isRequired,
  fuelType: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,

  formActive: PropTypes.bool,

  presets: PropTypes.arrayOf(PropTypes.shape({})),

  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,

  spacing: PropTypes.string,
  style: PropTypes.shape({}),
};

/**
 * Component props default values
 */
ManageColorPresentation.defaultProps = {
  presets: PropTypes.arrayOf(PropTypes.shape({})),
  spacing: '16',
  formActive: true,
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
    width: `calc(100% - ${theme.spacing.unit * 2}px)`,
  },
});


export default withStyles(styles)(ManageColorPresentation);
