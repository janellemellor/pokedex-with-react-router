import React, { Component } from 'react'
import request from 'superagent';
import PokeItem from './PokeItem.js';

export default class Home extends Component {
    render() {
        return (
            <div>
                <header>Pokedex
                    {/*add in search component here  */}
                </header>

                <main>
                    <ul>
                        {/* .map list of pokemon here. and add links to detail page here? and insert pokeItem here */
                        <PokeItem poke={poke} />
                        
                        }
                            
                    </ul>
                </main>
                

                
            </div>
        )
    }
}
