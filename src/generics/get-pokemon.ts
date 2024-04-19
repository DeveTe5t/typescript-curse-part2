import axios from "axios";
import { Pokemon } from '../interfaces/pokemon';


export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {

    // console.log('Hey from getPokemon!');
    // if (true) throw new Error('Help!');

    // const response = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    // console.log(response.data);

    // return response.data;
    return data;
}