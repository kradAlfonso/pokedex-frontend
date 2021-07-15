import { Grid, Row, Column, Loading } from "carbon-components-react";
import { useState } from "react";
import Card from "../Card";

const Board = ({ pokemons, pokemonGen }) => {
  const [generation, setGeneration] = useState(0);
  
  // Splits the given array into sub-arrays of a given max length.
  const chunk = (array, chunkLength) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkLength) {
      chunks.push(array.slice(i, i + chunkLength));
    }
    return chunks;
  };

  if (generation === pokemonGen) {
    return (
      <>
        <br />
        <Grid>
          {chunk(pokemons, 5).map((row) => {
            return (
              <>
                <Row>
                  {row.map((pokemon) => {
                    return (
                      <Column>
                        <Card pokemon={pokemon} />
                      </Column>
                    );
                  })}
                </Row>
                <br />
              </>
            );
          })}
        </Grid>
      </>
    );
  } else {
    setGeneration(pokemonGen);
    return <Loading />;
  }
};

export default Board;
