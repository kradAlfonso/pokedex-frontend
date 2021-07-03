import {ListItem, Tile, UnorderedList} from "carbon-components-react";

const Card = ({pokemonImage = "",pokemonName = "",pokemonTypes = [],pokemonMoves = []}) =>{
    
    var  pokemonImageToDisplay = pokemonImage.front_default;
    const changeImage = () => {
        pokemonImageToDisplay =  (pokemonImageToDisplay === pokemonImage.back_default) ? pokemonImage.front_default : pokemonImage.back_default
        document.getElementById("pokemongImage").src= pokemonImageToDisplay
    }

    const capitalFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    
    return(
        <>
            <Tile>
                <h4><strong>{capitalFirstLetter(pokemonName)}</strong></h4>
                <img onClick = {()=>changeImage()} src={pokemonImageToDisplay}  id="pokemongImage"></img>
                <br></br>
                <strong>Type:</strong>&nbsp;{pokemonTypes.map((t) => capitalFirstLetter(t.type.name) + " ")}
                <br/>
                <br/>
                <strong>Moves:</strong>
                <UnorderedList>
                    {pokemonMoves.slice(0,3).map(m => {
                        return <ListItem>{capitalFirstLetter(m.move.name)}</ListItem>
                    })}
                </UnorderedList>
            </Tile>
        </>
    );
};

export default Card;