import request from 'superagent';


export const getPoke = (pokeId) => request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${pokeId}`)

