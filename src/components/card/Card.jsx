import {ListItem, Tile, UnorderedList} from "carbon-components-react";
import { useState } from "react";

const Card = ({pokemonImage = "",pokemonName = "",pokemonTypes = [],pokemonMoves = []}) =>{
    return(
        <>
            <Tile>
                <h4><strong>{pokemonName}</strong></h4>
                <img src={pokemonImage}></img>
                <br></br>
                <strong>Type:</strong>&nbsp;{pokemonTypes.map((t) => t.type.name + " ")}
                <br/>
                <br/>
                <strong>Moves:</strong>
                <UnorderedList>
                    {/* <ListItem>{pokemonMoves[0]}</ListItem>
                    <ListItem>{pokemonMoves[1]}</ListItem>
                    <ListItem>{pokemonMoves[2]}</ListItem> */}
                </UnorderedList>
            </Tile>
        </>
    );
};

export default Card;