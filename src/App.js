import { Button, Column, Grid, Row, Search} from "carbon-components-react";
import {useState} from "react"
import Card from "./components/card";

const App = () => {
  const [pokemonImageTemp, setPokemonImage] = useState("");
  const [pokemonNameTemp, setPokemonName] = useState("");
  const [pokemonTypesTemp, setPokemonTypes] = useState([]);
  const [pokemonMovesTemp, setPokemonMoves] = useState([]);
  const [inputName, setInputName] = useState("charizard");
  
  const getPokemon = (pokemonName) => {
    if(""!=pokemonName)
    {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setPokemonImage(result.sprites);
          setPokemonName(result.name);
          setPokemonTypes(Array.from(result.types));
          setPokemonMoves(Array.from(result.moves));
        });
    }
  };

  return (
    <>
      <Grid>
        <Row>
          <Column>
            <Card
              pokemonImage = {pokemonImageTemp} 
              pokemonName  = {pokemonNameTemp}
              pokemonTypes = {pokemonTypesTemp}
              pokemonMoves = {pokemonMovesTemp}
            />
            <Search placeholder="charizard" id="pokeSearch" onChange={() => 
              setInputName(document.getElementById("pokeSearch").value)
            } />
            <Button onClick={() => 
              {  
                getPokemon(inputName.toLowerCase());
                console.log("Get Pokemon " + inputName);
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
