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
          {/* switch says load exactly one of these */}
          <Switch>
            {/* anything without a question mark is assumed to be required in the URL */}
            {/* if routes are like functions, colons indicate what is the 'parameter' of the route */}
            <Route exact path="/:pokemon?" component={PokeList} />
            {/* adding the "info" piece prevents collisons with the :pokemon? route */}
            <Route exact path="/info/about-pokedex" component={About} />
            {/* adding the "detail" piece prevents collisons with the :pokemon? route */}
            <Route exact path="/detail/:pokeId" component={Detail} />
          </Switch>

          </div>
      </Router>

      
    )};
}


