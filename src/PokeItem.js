import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        const { poke } = this.props;
        const {
            pokemon,
            url_image, 
            type_1, 
            type_2, 
            ability_1, 
            ability_2,
            id,
        } = poke;

        return (
            <li key={ id }>
                <h3>{ pokemon }</h3>
                <img src={ url_image } alt=''></img>    
                <p>Type 1: { type_1 }</p>
                <p>Type 2: { type_2 }</p>
                <p>Ability 1: { ability_1 }</p>
                <p>Ability 2: { ability_2 }</p>
            </li>
        )
    }
}
