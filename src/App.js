import { Column, Grid, Row} from "carbon-components-react"
import {useEffect, useState} from "react"
import Board from "./components/Board"

const App = () => {
  const [pokemons, setPokemons] = useState([])
  
  const pokemonGen  = 1

  useEffect (() => {
      const url = `http://localhost:8000/pokemons/${pokemonGen}`
      fetch(url)
        .then((response) => response.json())
        .then((result) => setPokemons(result))
  },[])

  return (
    <>
      <Grid>
        <Row>
          <Column>
            <Board pokemons={pokemons} pokemonGen={pokemonGen} />
          </Column>
        </Row>
      </Grid>
    </>
  )
}

export default App
