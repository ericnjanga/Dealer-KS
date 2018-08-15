import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';





export const AdminForms = ({ name, active }) => {

  // console.log(name, active);

  if(!active){
    return false;
  }
  return (
    <div>
      {
        name === 'admin' &&
        <FormAdminInfo />
      }
      {
        name === 'infos' &&
        <FormSiteInfo />
      }
    </div>
  );
};

export const FormAdminInfo = ({ active }) => {
  return (
    <div>form admin info</div>
  );
};

export const FormSiteInfo = ({ active }) => {
  return (
    <div>form site info</div>
  );
};


const Formsiteinfofdvd = () => {

  return (
    <div>form site info admin</div>
    // <React.Fragment>

    //   <Grid
    //     container
    //     // justify="center"
    //     spacing={'40px'}
    //   >
    //     <Grid
    //       // className={classes.item}
    //       item
    //       xs={6}
    //     >
    //       <FormControl 
    //       // className={classes.textField} 
    //       style={{ marginTop: '15px' }}>
    //         <TextField
    //           id="adminUsername"
    //           label="adminUsername"
    //           name="adminUsername"
    //           // className={classes.textField}
    //           value={'adminUsername'}
    //           // onChange={handleChange}
    //           margin="normal"
    //         />
    //       </FormControl>
    //     </Grid>

    //     <Grid
    //       // className={classes.item}
    //       item
    //       xs={6}
    //     >
    //       <FormControl 
    //       // className={classes.textField} 
    //       style={{ marginTop: '15px' }}>
    //         <TextField
    //           id="adminPassword"
    //           label="adminPassword"
    //           name="adminPassword"
    //           // className={classes.textField}
    //           value={'adminPassword'}
    //           // onChange={handleChange}
    //           margin="normal"
    //         />
    //       </FormControl>
    //     </Grid>

    //     <Grid
    //       // className={classes.item}
    //       item
    //       xs={6}
    //     >
    //       <FormControl 
    //       // className={classes.textField} 
    //       style={{ marginTop: '15px' }}>
    //         <TextField
    //           id="name"
    //           label="name"
    //           name="name"
    //           // className={classes.textField}
    //           value={'name'}
    //           // onChange={handleChange}
    //           margin="normal"
    //         />
    //       </FormControl>
    //     </Grid>

    //     <Grid
    //       // className={classes.item}
    //       item
    //       xs={6}
    //     >
    //       <FormControl 
    //       // className={classes.textField} 
    //       style={{ marginTop: '15px' }}>
    //         <TextField
    //           id="about"
    //           label="about"
    //           name="about"
    //           multiline
    //           rowsMax="4"
    //           // className={classes.textField}
    //           value={'about'}
    //           // onChange={handleChange}
    //           margin="normal"
    //         />
    //       </FormControl>
    //     </Grid>

    //     <Grid
    //       // className={classes.item}
    //       item
    //       xs={6}
    //     >
    //       <FormControl 
    //       // className={classes.textField} 
    //       style={{ marginTop: '15px' }}>
    //         <TextField
    //           id="email"
    //           label="email"
    //           name="email"
    //           // className={classes.textField}
    //           value={'email'}
    //           // onChange={handleChange}
    //           margin="normal"
    //         />
    //       </FormControl>
    //     </Grid>

    //     <Grid
    //       // className={classes.item}
    //       item
    //       xs={6}
    //     >
    //       <FormControl 
    //       // className={classes.textField} 
    //       style={{ marginTop: '15px' }}>
    //         <TextField
    //           id="phoneNumber"
    //           label="phoneNumber"
    //           name="phoneNumber"
    //           // className={classes.textField}
    //           value={'phoneNumber'}
    //           // onChange={handleChange}
    //           margin="normal"
    //         />
    //       </FormControl>
    //     </Grid>

    //     <Grid
    //       // className={classes.item}
    //       item
    //       xs={6}
    //     >
    //       <FormControl 
    //       // className={classes.textField} 
    //       style={{ marginTop: '15px' }}>
    //         <TextField
    //           id="address"
    //           label="address"
    //           name="address"
    //           // className={classes.textField}
    //           value={'address'}
    //           // onChange={handleChange}
    //           margin="normal"
    //         />
    //       </FormControl>
    //     </Grid>

    //     <Grid
    //       // className={classes.item}
    //       item
    //       xs={12}
    //     >
    //       <FormControl 
    //       // className={classes.textField} 
    //       style={{ marginTop: '15px' }}>
    //         <Button variant="contained" color="primary" className={'classes.button'}>
    //           Sauvegarder
    //         </Button>
    //       </FormControl>
    //     </Grid>
        
    //   </Grid>
    // </React.Fragment>
  );

}

// export default Formsiteinfo;

