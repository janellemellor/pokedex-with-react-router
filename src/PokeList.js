import React, { Component } from 'react'
import request from 'superagent';
import PokeItem from './PokeItem.js';
import SearchPoke from './SearchPoke.js';
import { Link } from 'react-router-dom';


export default class PokeList extends Component {
    state = {
        pokemon: [],
        searchQuery: this.props.match.params.pokemon,
    }
   
// when the component initially mounts...
    async componentDidMount() {
        // if there is a pokemon in the URL
        if(this.props.match.params.pokemon) {
            //Make the fetch (could use getPoke?)
            const pokeData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.props.match.params.pokemon}`)
            console.log(`pokedata results ${pokeData}`);
            // set the state
            this.setState({ pokemon: pokeData.body.results })
        }
    }

    // resets the characters if 1) we've searched before and 2) there is no search param
    async componentWillUpdate(nextProps) {
        const param = this.props.match.params.pokemon;
        let nextParam = nextProps.match.params.pokemon;
        if (param !== nextParam && !nextParam) {
           this.setState({ 
               pokemon: [],
               searchQuery: ''
            })         
        }
    }
    // on submit (when you hit search button)
    handleSubmit = async (e) => {
        // prevents refresh
        e.preventDefault();

        // go make a fetch passing arguments stored in state
        const pokeData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`)
        
        // use the data from the fetch to update state
        this.setState({ pokemon: pokeData.body.results })

        // explicitely send the user to this url
        this.props.history.push(this.state.searchQuery)
    
        }


    render() {
        return (
            <div>
                <header>Pokedex
                    <SearchPoke
                    // pass some callbacks so we can manipulate parent state from the child
                        searchQuery={this.state.searchQuery} 
                        onChange={e => this.setState({ searchQuery: e.target.value })}
                        handleSubmit={this.handleSubmit}
                    />
                </header>

                <main>
                    <ul>
                        {/* build a list of pokemon (could write this as a function in render and pass it down) */}
                         {this.state.pokemon.map(poke => 
                         <Link to={`/detail/${poke.pokemon}`}>
                            <PokeItem poke={poke} key={poke.id}/>
                         </Link>  
                         )}  
                    </ul>
                </main>
                

                
            </div>
        )
    }
}
