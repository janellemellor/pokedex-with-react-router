import React, { Component } from 'react'
import PokeItem from './PokeItem.js';

export default class Detail extends Component {
    render() {
        return (
            <div>
                <PokeItem poke={poke}/>
            </div>
        )
    }
}
