import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Pokemon} from "../../interfaces/Pokemon";

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
            setPokemonList(response.data.results);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Listado de Pokemones</h2>
            <ul>
                {pokemonList.slice(0, 10).map(pokemon => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonList;
