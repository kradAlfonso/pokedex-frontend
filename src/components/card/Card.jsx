import {ListItem, Tile, UnorderedList} from "carbon-components-react";
import { useEffect, useState } from "react";

const Card = ({pokemon}) =>{
    
    const [image, setImage] = useState(pokemon.front_default);
    
    useEffect(() => setImage(pokemon.front_default), [pokemon]);

    const changeImage = () => {
        setImage((image === pokemon.back_default) ? pokemon.front_default : pokemon.back_default);
    }

    const capitalFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    
    return(
        <>
            <Tile style={{width: 160, height: 276}} >
                <h4><strong>{capitalFirstLetter(pokemon.name)}</strong></h4>
                <h6>Pokedex #{pokemon.id}</h6>
                <img onClick = {()=>changeImage()} src={image}  id="pokemongImage" alt="pokemonImage"></img>
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