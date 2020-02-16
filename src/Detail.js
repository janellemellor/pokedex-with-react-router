import React, { Component } from 'react'
import PokeItem from './PokeItem.js';
import { getPoke } from './pokedexApi.js';

export default class Detail extends Component {
    
    state = { poke: {} }
    
    async componentDidMount() {
        const pokeData = await getPoke(this.props.match.params.pokeId);

        if (pokeData.body.results) {
        console.log(pokeData);
        this.setState({ poke: pokeData.body.results[0] })
        }
    }
    

    render() {
        const { poke } = this.state;

        return (
            <div>
                <PokeItem poke={ poke }/>
            </div>
        )
    }
}
