import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchComponent from "./components/SearchComponent/SearchComponent";
import {NAMES} from "./data/data";
import {CounterComponent} from "./components/CounterComponent/CounterComponent";
import PokemonList from "./components/PokemonList/PokemonList";

function App() {
  return (
    <div className="App">
      <SearchComponent data={NAMES}/>
        <hr/>
        <CounterComponent/>
      <hr/>
      <PokemonList/>
    </div>
  );
}

export default App;
