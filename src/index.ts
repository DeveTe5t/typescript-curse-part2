import { getPokemon } from "./generics/get-pokemon";

// console.log(getPokemon());
getPokemon(4)
    .then(pokemon => console.log(pokemon))
    .catch(error => console.error(error))
    .finally(() => console.log('End of getPokemon!'));