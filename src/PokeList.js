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
   

    async componentDidMount() {
        if(this.props.match.params.pokemon) {
            const pokeData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.props.match.params.pokemon}`)
            console.log(`pokedata results ${pokeData}`);
            this.setState({ pokemon: pokeData.body.results })
        }
    }

    async componentWillUpdate(nextProps) {
        const param = this.props.match.params.pokemon;
        let nextParam = nextProps.match.params.pokemon;
        if (param !== nextParam && !nextParam) {
           this.setState({ 
               pokemon: [],
               searchQuery: ''
            })         }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const pokeData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`)
        
        this.setState({ pokemon: pokeData.body.results })

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
