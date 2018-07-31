import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import logo from './logo.svg';
import 'typeface-roboto';
import './App.css';

import AuthPortal from './components/AuthPortal/AuthPortal.js';

import Hero from './components/Hero/Hero.js';
import MainCarousel from './components/MainCarousel/MainCarousel.js';

import MenuAppBar from './components/MenuAppBar/MenuAppBar.js';
import AppDrawer from './components/AppDrawer/AppDrawer.js';
import Carousel from './components/Carousel/Carousel.js';


import List from './components/List.js';


//CarsListTing
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const DealsOfTheWeek = () => {

  return(
    <section>
      <h1>Deals of the Week</h1>
    </section>
  );

} 


const ContactCTA = () => {

  return(
    <section>
      <p>ContactCTA</p>
    </section>
  );

}



const CarsListTingStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
const CarsListTing = ({ classes }) => {




  return(
    <div className="container" style={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper style={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>  
  );

}


const Footer = () => {

  return(
    <section>
      main footer
    </section>
  );

}


class App extends Component {
  state = {
    drawer: {
      left: false,
    },
  };


  toggleDrawer = (side, open) => () => {
    let state = this.state;
    state.drawer[side] = open;
    this.setState({ state });
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <AuthPortal />
          <AppDrawer {...this.state} toggleDrawer={this.toggleDrawer} />
          <MenuAppBar toggleDrawer={this.toggleDrawer} />
          <Hero />
          <MainCarousel />
          {/* <Carousel title={'Les Affaires de la semaine'}>
            
              <div>*************</div>
              <div>*************</div>
              <div>*************</div>
              <div>*************</div>
              <div>*************</div>
              <div>*************</div>
              <div>*************</div>
              <div>*************</div>
           
          </Carousel> */}
          {/* <DealsOfTheWeek /> */}
          <ContactCTA />
          <CarsListTing classes={CarsListTingStyles} />
          <Footer />
        </div>
      </React.Fragment>
    );
  }

}

export default App;
