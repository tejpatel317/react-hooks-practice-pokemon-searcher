import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons, setPokemons] = useState([])
  const [userSearch, setUserSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((r) => r.json())
    .then((pokemons) => setPokemons(pokemons))
  }, [])

  function addPokemon(newPokemon) {
    setPokemons([...pokemons, newPokemon])
  }

  const searchPokemon = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(userSearch.toLowerCase())
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search userSearch={userSearch} setUserSearch={setUserSearch}/>
      <br />
      <PokemonCollection pokemons={searchPokemon}/>
    </Container>
  );
}

export default PokemonPage;
