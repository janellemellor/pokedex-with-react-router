import React, { Component } from 'react'
import PokeItem from './PokeItem.js';
import { getPoke } from './pokedexApi.js';

export default class Detail extends Component {
    //set state for poke

    //add componentDidMount with async/await get pokemon data from api

    //update state with poke data

    render() {
        //set up state for poke below

        return (
            <div>
                <PokeItem poke={poke}/>
            </div>
        )
    }
}
