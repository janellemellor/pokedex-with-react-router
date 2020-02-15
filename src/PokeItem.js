import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        const { poke } = this.props;
        const {
            title,
            img, 
            type1, 
            type2, 
            ability1, 
            ability2
        } = poke;

        return (
            <div>
                <h3>{ title }</h3>
                <img src={ img } alt=''></img>    
                <p>Type 1: { type1 }</p>
                <p>Type 2: { type2 }</p>
                <p>Ability 1: { ability1 }</p>
                <p>Ability 2: { ability2 }</p>
            </div>
        )
    }
}
