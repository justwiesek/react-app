import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import "./App.css";

import Navbar from '../components/Navbar/Navbar';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';
import Backdrop from '../components/Backdrop/Backdrop';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Destination from '../components/Destinations/Destination';
import Contact from '../components/Contact/Contact';


class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  toggleClickHandler = () => {
    this.setState( (prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    } );
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
     
  return (
      <div className="App">

        <Navbar title="Magical travels" toggleClickHandler={this.toggleClickHandler} />
        <BurgerMenu click={this.backdropClickHandler} show={this.state.sideDrawerOpen} /> 
        {backdrop}
        <Switch>
          <Route exact path="/react-app" render={() => <Home title="magical travel" />} />
          <Route path="/about" render={() => <About title="about us" />} />
          <Route path="/destination" render={() => <Destination title="popular destinations" />} />
          <Route path="/contact" render={() => <Contact title="Contact us" />} />
        </Switch>
      </div>
  );
};
};

export default App;
