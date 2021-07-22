import { Grid, Row, Column, Loading } from "carbon-components-react";
import Card from "../Card";

const Board = ({ pokemons, pokemonGen }) => {

  // Splits the given array into sub-arrays of a given max length.
  const chunk = (array, chunkLength) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkLength) {
      chunks.push(array.slice(i, i + chunkLength));
    }
    return chunks;
  };
  
  console.log(pokemons.length);

  if (pokemons.length === getPokeGen(pokemonGen)) {
    return (
      <>
       <br />
       <Grid>
          {chunk(pokemons,5
          ).map((row) => {
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
    return <Loading />;
  }
};


const getPokeGen = (gen) => {
  let pokeNum = 0;
  
  switch (gen) {
    case 1:
      pokeNum = 151;
      break;
    case 2:
      pokeNum = 100;
      break;

    case 3:
      pokeNum = 135;
      break;

    case 4:
      pokeNum = 107;
      break;

    case 5:
      pokeNum = 156;
      break;

    case 6:
      pokeNum = 72;
      break;

    case 7:
      pokeNum = 88;
      break;

    case 8:
      pokeNum = 84;
      break;
  }
  return pokeNum;
};


export default Board;
