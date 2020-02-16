import React, { Component } from 'react'

export default class SearchPoke extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input
                value={this.props.searchQuery}
                onChange={this.props.onChange}/>
              
                <button>GetPokemon!</button>
            </form>
        )
    }
}
