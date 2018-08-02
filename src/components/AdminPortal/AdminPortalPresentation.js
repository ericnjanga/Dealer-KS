import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { appText } from './../../settings/dummy-data.js';

import ItemCreateForm from './../Item/ItemCreateForm/ItemCreateForm.js';
import ManageColor from './../Item/ManageColor/ManageColor.js';
import TableDisplay from './../TableDisplay/TableDisplay.js';

import './AdminPortalPresentation.css';

const AdminPortalPresentation = ({
  items,
  itemColors,

  makePanelActive,
  bodytypePanelActive,
  colorPanelActive,

  handleColorDelete,
  handleItemDelete,

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
          sm={6}
          md={6}
        >
          <TableDisplay
            heroText="Inventaire de voiture"
            data={items}
            headers={['title', 'createdOn', 'color']}
            handleDelete={handleItemDelete}
          />
        </Grid>
        <Grid
          className={classes.item}
          item
          xs={12}
          sm={3}
          md={3}
        >
 
  

          {
            makePanelActive &&
            <Paper className={classes.section} elevation={1}>
              <Typography variant="title" id="tableTitle" className={classes.hero}>
                Marque
              </Typography>
              <p>?????</p>
            </Paper>
          }


          {
            bodytypePanelActive &&
            <Paper className={classes.section} elevation={1}>
              <Typography variant="headline" component="h3" style={{ marginBottom: '20px' }}>
                Types de corps
              </Typography> 
              <p>#########</p>
            </Paper>
          }


          {
            colorPanelActive &&
            <Paper className={classes.section} elevation={1}>
              <Typography variant="title" id="tableTitle" className={classes.hero}>
              Couleurs
              </Typography>
              <ManageColor />

              <TableDisplay
                data={itemColors}
                headers={['name']}
                handleDelete={handleColorDelete}
              />
            </Paper>
          }


          

        </Grid>
        <Grid
          className={classes.item}
          item
          xs={12}
          sm={3}
          md={3}
        >
          <Paper className={classes.section} elevation={1}>
            <Typography variant="headline" component="h3" style={{ marginBottom: '20px' }}>
              Voiture
            </Typography>

            <ItemCreateForm
              colorList={itemColors}
            />
          </Paper>
        </Grid>
      </Grid>


        <AppBar
          position="fixed"
          className={`${classes.appBar} admin-menubar`}
        >
          <Toolbar>
            

            <NavLink to={`/`}>
              Main Site
            </NavLink>


            <FormControlLabel
              control={
                <Checkbox
                  checked={colorPanelActive}
                  // onChange={this.handleChange('checkedB')}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Editer les couleurs"
            />


            <FormControlLabel
              control={
                <Checkbox
                  checked={bodytypePanelActive}
                  // onChange={this.handleChange('checkedB')}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Editer les types de corps"
            />


            <FormControlLabel 
              className={classes.menubar}
              control={
                <Checkbox
                  checked={makePanelActive}
                  // onChange={this.handleChange('checkedB')}
                  value="checkedB"
                  color="primary"
                  className={classes.menubar}
                />
              }
              label="Editer les marques"
            />
 

          </Toolbar>
        </AppBar>




      
    </section>
  );

};







/**
 * Component props validation
 */
AdminPortalPresentation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  itemColors: PropTypes.arrayOf(PropTypes.shape({})),
  handleColorDelete: PropTypes.func,
  handleItemDelete: PropTypes.func,

  makePanelActive: PropTypes.bool.isRequired,
  bodytypePanelActive: PropTypes.bool.isRequired,
  colorPanelActive: PropTypes.bool.isRequired,

  style: PropTypes.shape({}),
};

/**
 * Component props default values
 */
AdminPortalPresentation.defaultProps = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  itemColors: PropTypes.arrayOf(PropTypes.shape({})),
  handleColorDelete: null,
  handleItemDelete: null,
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
  hero: {
    textAlign: 'left',
    padding: '20px 20px 0 0',
    // fontWeight: 'bold',
    fontSize: '20px',
  },
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
    // paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    // maxWidth: '400px',
  },
  menubar: {
    
      color: '#fff',
    
  },
});

export default withStyles(styles)(AdminPortalPresentation); 
