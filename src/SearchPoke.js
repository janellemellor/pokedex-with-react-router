import React, { Component } from 'react'

export default class SearchPoke extends Component {
    render() {
        return (
            // Use the callbacks that live on the List component
            <form onSubmit={this.props.handleSubmit}>
                <input
                value={this.props.searchQuery}
                onChange={this.props.onChange}/>
              
                <button>GetPokemon!</button>
            </form>
        )
    }
}
