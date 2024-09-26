import axios from "axios";

export const fetchPokemon = async (name: string) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return data;
  };