import { Column, Grid, Row, Dropdown } from "carbon-components-react";
import { useEffect, useState } from "react";
import Board from "./components/Board";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [generation, setGeneration] = useState(Number(JSON.parse(sessionStorage.getItem("generation"))) || 1);

  useEffect(() => {
    const url = `http://localhost:8000/pokemons/${generation}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => setPokemons(result));
  }, [generation]);

  return (
    <>
      <Grid style={{ marginTop: "4rem" }}>
        <Row>
          <Column>
            <Dropdown
              id="inline"
              titleText="Generation"
              label={Number(JSON.parse(sessionStorage.getItem("generation"))) || 1}
              type="inline"
              items={[1, 2, 3, 4, 5, 6, 7, 8]}
              itemToString={(item) => (item ? String(item) : "")}
              onChange={(gen) => 
              {
                setGeneration(gen.selectedItem);
                sessionStorage.setItem("generation",gen.selectedItem);
              }}
            />
            <Board pokemons={pokemons} pokemonGen={generation} />
          </Column>
        </Row>
      </Grid>
    </>
  );
};

export default App;
