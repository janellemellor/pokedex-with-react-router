import React, { Component } from 'react'
import PokeItem from './PokeItem.js';
import { getPoke } from './pokedexApi.js';

export default class Detail extends Component {
    
    state = { poke: {} }
    
    // async means we will do some fetching in here
    // componentDidMount means this will happen ONCE after the initial 'mount' of the component. 
    async componentDidMount() {
        // make a fetch using 'this.props.match.params.pokeId'. which comes from the URL (Thanks to react router and our detail/:pokeID? route. The colon in the route definition means it will be passed as a prop to the this component)
        const pokeData = await getPoke(this.props.match.params.pokeId);

        // may not need line 16?
        if (pokeData.body.results) {
        console.log(pokeData);

        //set the poke state to the value of the fetch
        // may only need to set poke: pokeData.body below
        this.setState({ poke: pokeData.body.results[0] })
        }
    }
    

    render() {
        const { poke } = this.state;

        return (
            <div>
                {/* render a pokeItem, passing the pokemon state as a prop */}
                {/* this might look like <PokeItem poke={this.state.pokemon} */}
                <PokeItem poke={ poke }/>
            </div>
        )
    }
}
