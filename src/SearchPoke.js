import React, { Component } from 'react'

export default class SearchPoke extends Component {
    render() {
        return (
            <form>
                {/* will need to pass props from PokeList for event handler for on submit, for getting the value (text) from the search bar, and an event handler for onChange */}
                <button>GetPokemon!</button>
            </form>
        )
    }
}
