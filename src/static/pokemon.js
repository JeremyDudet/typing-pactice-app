const fs = require('fs')

// reading a file

const pokemon = fs.readFileSync('./src/lib/pokemon.txt', 'utf8') // synchronous version
const arrayPokemon = pokemon.split(' ')

console.log(arrayPokemon[0])
