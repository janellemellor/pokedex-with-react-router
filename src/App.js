import React, { Component } from 'react';
import './App.css';
import {
  Route, 
  Switch, 
  Link, 
  BrowserRouter as Router,
} from 'react-router-dom';
import Detail from './Detail.js';
import PokeList from './PokeList.js';
import About from './About.js';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link className="page-links" to="/">return home</Link>
          <Link className="page-links" to="/info/about-pokedex">About Pokedex</Link>
          <Switch>
            <Route exact path="/:pokemon?" component={PokeList} />
            <Route exact path="/info/about-pokedex" component={About} />
            <Route exact path="/detail/:pokeId" component={Detail} />
          </Switch>

          </div>
      </Router>

      
    )};
}


