import React, { Component } from 'react'
import request from 'superagent';
import PokeItem from './PokeItem.js';
import SearchPoke from './SearchPoke.js';
import { Link } from 'react-router-dom';


export default class PokeList extends Component {
     //set state for poke and search query. ('pokemon' is key for name in API object)
    state = {
        pokemon: [],
        searchQuery: this.props.match.params.pokemon,
    }
   

    //set up async function for componentDidMount
    async componentDidMount() {
        if(this.props.match.params.pokemon) {
            const pokeData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.props.match.params.pokemon}`)

            this.setState({ pokemon: pokeData.response.results })
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const pokeData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.searchQuery}`)

        this.setState({ pokemon: pokeData.response.results })

        //history.push is a react router method
        this.props.history.push(this.state.searchQuery)
        }


    render() {
        return (
            <div>
                <header>Pokedex
                    <SearchPoke
                        searchQuery={this.state.searchQuery} 
                        onChange={e => this.setState({ searchQuery: e.target.value })}
                        handleSubmit={this.handleSubmit}
                    />
                </header>

                <main>
                    <ul>
                         {this.state.pokemon.map(poke => 
                         <Link to={`pokemon/${poke.title}`}>
                            <PokeItem poke={poke} />
                         </Link>  
                         )}  
                    </ul>
                </main>
                

                
            </div>
        )
    }
}
