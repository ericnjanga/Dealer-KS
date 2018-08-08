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
import settings from './../../settings/basics.js';

import ItemCreateForm from './../Item/ItemCreateForm/ItemCreateForm.js';

import TableDisplay from './../TableDisplay/TableDisplay.js';

import AdminPreset from './AdminPreset.js';
import AdminSidebar from './AdminSidebar/AdminSidebar.js';

import './AdminPortalPresentation.css';


const PageSectionPresentation = ({
  name,
  title,
  active,
  linkList
}) => {

  if(! active) {
    return false;
  }

  const root = {
    display: 'flex',
    padding: '30px',
    height: '100vh',
    overflowY: 'scroll',
  };

  return (
    <section style={root}>
      <h2>{ title }</h2>
    </section>
  );
}

const AdminPortalPresentation = ({
  items,
  pageSections,

  handleEdit,
  handleDelete,
  handleChange,

  classes,
}) => {

  const { spacing } = settings.grid;

  return (
    <section className={classes.container}>

      <AdminSidebar
        handleChange={handleChange}
        pageSections={pageSections}
      />


      <section className={classes.maincontent}>
        {
          pageSections.map((pageSection) =>
            <PageSectionPresentation
              key={pageSection.name}
              {...pageSection}
            />
          )
        }


        {
          /**
           * Liste de voitures
           * -----------------------
           */
          // pageSections.carlisting.active &&
          // <section style={{ border: '3px solid lime '}}>
          //   <h2>Liste de voitures</h2>
          //   <Grid
          //     container
          //     justify="center"
          //     spacing={spacing}
          //   >
          //     <Grid
          //       item
          //       xs={12}
          //       sm={9}
          //       md={9}
          //     >
          //       <TableDisplay
          //         heroText="Inventaire de voiture"
          //         data={items}
          //         headers={['title', 'createdOn', 'color']}
          //         handleEdit={handleEdit}
          //         handleDelete={handleDelete}
          //       />
          //     </Grid>

          //     <Grid
          //       item
          //       xs={12}
          //       sm={3}
          //       md={3}
          //     >
          //       <Paper className={classes.section} elevation={1}>
          //         <Typography variant="headline" component="h3" style={{ marginBottom: '20px' }}>
          //           Ajouter Une Voiture
          //         </Typography>

          //         {/* <ItemCreateForm
          //           presets={pageSections[2]}
          //         />
          //          */}
          //       </Paper>
          //     </Grid>
          //   </Grid>
          // </section>
        }


        {
          /**
           * Modifier les parametres
           * -----------------------
           */
          // pageSections.presets.active &&
          // <section style={{ border: '3px solid lime '}}>
          //   <h2>Modifier les parametres</h2>

          //   <Grid
          //     container
          //     justify="center"
          //     spacing={spacing}
          //   >
          //     {
          //       console.log('********pageSections=', pageSections)
          //       pageSections[2].map((preset) => {

          //         return (
          //           <Grid
          //             item
          //             xs={12}
          //             sm={4}
          //             md={4}
          //           >
          //             <AdminPreset
          //               key={preset.name}
          //               {...preset}
          //               tableData={{
          //                 data: preset.list,
          //                 headers: ['name'],
          //                 presetDelete: preset.name,
          //                 handleDelete,
          //               }}
          //             />
          //           </Grid>
          //         );
          //       })
          //     }
          //   </Grid>
          // </section>
        }





        {/* <AppBar
          className={`${classes.appBar} admin-menubar`}
        >
          <Toolbar>
          
            <NavLink to={`/`}>
              Main Site
            </NavLink>

            { // Display checkboxes to toggle presets visibility
              presets.map(({ name, title, active }) => {
                return (
                  <FormControlLabel
                    key={name}
                    control={
                      <Checkbox
                        name={name}
                        value={`${active}`}
                        checked={active}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={`Editer: ${title}`}
                  />
                );
              })
            }
          </Toolbar>
        </AppBar> */}

      </section>
    </section>
  );

};


/**
 * Component props validation
 */
AdminPortalPresentation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  pageSections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  handleChange: PropTypes.func.isRequired,

  classes: PropTypes.shape({}),
};

/**
 * Component props default values
 */
AdminPortalPresentation.defaultProps = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  handleEdit: null,
  handleDelete: null,
  classes: PropTypes.shape({}),
};


const styles = theme => ({

  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: 'rgb(199, 207, 212)',
  },
  maincontent: {
    width: '100%',
    backgroundColor: 'rgb(199, 207, 212)',
  },
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
