import React, { Component } from 'react'
import request from 'superagent';
import PokeItem from './PokeItem.js';
//will need to inport searchPoke

export default class Home extends Component {
    //set state for poke and search query

    //set up async function for componentdid Mount
        //if search params match a name/id in the pokedex api
        //get data from the api
        //update state with the data results

    //create an async function to get the data from the url (including search params)
    //update state again with the poke data results

    //create an event handler to set state based on the value(text) from the search bar


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
