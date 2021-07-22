import {
    Header,
    HeaderName,
  } from "carbon-components-react";
  
  const Header_ = () => {
    return (
      <>
        <Header aria-label="Pokedex" style={{height: "70px", backgroundImage: "url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png')"}}>
          <HeaderName href="#" prefix="">
            <p><h4 style={{color: "yellow", marginTop: "-25px"}}>Pokedex <strong>App</strong></h4></p>
          </HeaderName>
        </Header>
      </>
    );
  };
  
  export default Header_;