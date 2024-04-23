import { Pokemon } from './decorators/pokemon-class';

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Fulanikachu';

// console.log(charmander.savePokemonToDB(70));
// charmander.savePokemonToDB(70);

charmander.publicApi = 'https://pokeapi.co/v4';
console.log(charmander);
