import React, { Component } from 'react'
import request from 'superagent';
import PokeItem from './PokeItem.js';
import SearchPoke from './SearchPoke.js';
import { Link } from 'react-router-dom';
import Pagination from './Pagination.js';


export default class PokeList extends Component {
    state = {
        pokemon: [],
        searchQuery: this.props.match.params.pokemon,
        //add page state
        page: 1
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
            //add page state to this.setState above
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
            //may need to update state of page above?
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

        //update page state here too?

        // explicitely send the user to this url
        this.props.history.push(this.state.searchQuery)
    
        }

    //add an async event handler to the page button

    //create a variable to set the number of the current page

    //create a variable that calculates the new page by incrementing to the current page

    //set state of new page

    //hit API for the pokemon and set in state

    //set state of search results?

    //set state of the page (maybe add Math.ceil here)






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
                    <Pagination />
                    {/* pass props to pagination page. Button event handler, page state */}
                    <ul>
                        {/* build a list of pokemon (could write this as a function in render and pass it down) */}
                         {this.state.pokemon.map(poke => 
                         <Link  key={poke.id} to={`/detail/${poke.pokemon}`}>
                            <PokeItem poke={poke}/>
                         </Link>  
                         )}  
                    </ul>
                </main>
                

                
            </div>
        )
    }
}
