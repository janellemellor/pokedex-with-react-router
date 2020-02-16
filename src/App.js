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
          <Link to="/">return home</Link>
          <Link to='/about-pokedex'>About Pokedex</Link>
          <Switch>
            <Route exact path='/' component={PokeList} />
            <Route exact path='/about-pokedex' component={About} />
            <Route exact path='/detail/:pokeId' component={Detail} />
          </Switch>

         
        



          </div>
      </Router>

      
    )};
}


