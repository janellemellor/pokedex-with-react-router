import React, { Component } from 'react'
import PokeItem from './PokeItem.js';
import { getPoke } from './pokedexApi.js';

export default class Detail extends Component {
    
    state = { poke: {} }
    
    async componentDidMount() {
        const pokeData = await getPoke(this.props.matchparams.pokeId);

        if (pokeData.response.results) {
        
        this.setState({ poke: pokeData.response.results[0] })
        }
    }
    

    render() {
        const { poke } = this.state;

        return (
            <div>
                <PokeItem poke={poke}/>
            </div>
        )
    }
}
