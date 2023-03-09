import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PokemonList from './PokemonList';
const axios = require('axios');
jest.mock('axios');
describe('PokemonList', () => {
    it('renders a list of 10 pokemons', async () => {
        const mockResponse = {
            data: {
                results: [
                    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
                    { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
                    { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
                    { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
                    { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
                    { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' },
                    { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
                    { name: 'wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/' },
                    { name: 'blastoise', url: 'https://pokeapi.co/api/v2/pokemon/9/' },
                    { name: 'caterpie', url: 'https://pokeapi.co/api/v2/pokemon/10/' },
                ],
            },
        };



        const mockAxios = axios.get.mockResolvedValueOnce(mockResponse);

        render(<PokemonList />);

        await waitFor(() => {
            const pokemonListItems = screen.getAllByRole('listitem');
            expect(pokemonListItems).toHaveLength(10);
            expect(pokemonListItems[0]).toHaveTextContent('bulbasaur');
            expect(pokemonListItems[9]).toHaveTextContent('caterpie');
            expect(mockAxios).toHaveBeenCalled();
        });
    });
});
