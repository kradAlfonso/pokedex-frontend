import { Button, Column, Grid, Row } from "carbon-components-react";
import {useState} from "react"
import Card from "./components/card";

const App = () => {
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonMoves, setPokemonMoves] = useState([]);
  const getPokemon = (pokemonName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setPokemonImage(result.sprites.front_default);
        setPokemonName(result.name);
        setPokemonTypes(Array.from(result.types));
        setPokemonMoves(Array.from(result.moves));
      });
  };

  return (
    <>
      <Grid>
        <Row>
          <Column>
            <Card
              pokemonImage = {pokemonImage} 
              pokemonName  = {pokemonName}
              pokemonTypes = {pokemonTypes}
              // pokemonMoves = {pokemonMoves}
            />
            <Button onClick={() => 
              {
                getPokemon("charizard");
                console.log("Get Pokemon Charizard");
              } 
            }>
              Load Card...
            </Button>
          </Column>
        </Row>
      </Grid>
    </>
  );
};

export default App;
