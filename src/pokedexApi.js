import request from 'superagent';


export const getPoke = (pokeId) => request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${pokeId}`)

// may not need _id=? also may be "pokemon" in order to search by name