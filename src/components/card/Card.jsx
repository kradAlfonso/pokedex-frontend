import {ListItem, Tile, UnorderedList} from "carbon-components-react";

const Card = ({pokemon}) =>{

    var  pokemonImageToDisplay = pokemon.sprites.front_default;
    const changeImage = () => {
        pokemonImageToDisplay =  (pokemonImageToDisplay === pokemon.sprites.f.back_default) ? pokemon.sprites.front_default : pokemon.sprites.back_default
        document.getElementById("pokemongImage").src= pokemonImageToDisplay
    }

    const capitalFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    
    return(
        <>
            <Tile>
                <h4><strong>{capitalFirstLetter(pokemon.name)}</strong></h4>
                <h6>Pokedex #{pokemon.id}</h6>
                <img onClick = {()=>changeImage()} src={pokemonImageToDisplay}  id="pokemongImage"></img>
                <br></br>
                <strong>Type:</strong>&nbsp;{pokemon.types.map((t) => capitalFirstLetter(t.type.name) + " ")}
                <br/>
                <br/>
                <strong>Moves:</strong>
                <UnorderedList>
                    {pokemon.moves.slice(0,3).map(m => {
                        return <ListItem>{capitalFirstLetter(m.move.name)}</ListItem>
                    })}
                </UnorderedList>
            </Tile>
        </>
    );
};

export default Card;