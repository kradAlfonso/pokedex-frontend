import { useState } from "react"
import {
  Grid,
  Row,
  Column,
  Loading,
  Dropdown,
} from "carbon-components-react"
import Card from "../Card"

const items = [
    {
      id: 'option-0',
      text: '1 Generation',
    },
    {
      id: 'option-1',
      text: '2 Generation',
    },
    {
      id: 'option-2',
      text: '3 Generation',
    },
    {
      id: 'option-3',
      text: '4 Generation',
    },
    {
      id: 'option-4',
      text: '5 Generation',
    },
    {
      id: 'option-5',
      text: '6 Generation',
    },
    {
      id: 'option-6',
      text: '7 Generation',
    },
    {
      id: 'option-7',
      text: '8 Generation',
    }
  ];
  
const Board = ({ pokemons, pokemonGen }) => {

  // Splits the given array into sub-arrays of a given max length.
  const chunk = (array, chunkLength) => {
    const chunks = []
    for (let i = 0 ; i < array.length ; i += chunkLength) {
      chunks.push(array.slice(i, i + chunkLength))
    }
    return chunks
  }
  
    return (
      <>
        <Dropdown style={{width: 600}}
            id="default"
            label="It is time to choice a generation"
            items={items}
            itemToString={(item) => (item ? item.text : '')}
            />
        <br />
        <Grid>
          {chunk(
              pokemons,
              5
          ).map((row) => {
            return (
              <>
                <Row>
                  {row.map((pokemon) => {
                    return (
                      <Column>
                        <Card pokemon={pokemon} />
                      </Column>
                    )
                  })}
                </Row>
                <br />
              </>
            )
          })}
        </Grid>
      </>
    )
}

export default Board