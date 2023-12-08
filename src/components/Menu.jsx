import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledMenu = styled.nav`
  height: 50px;
  width: 75vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 2rem 0;
  background-color: aliceblue;
  border-radius: 50px;

  a {
    color: black;
    text-decoration: none;
    width: 30%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 100ms;

    &:hover {
      background-color: pink;
      color: black;
      transform: scale(1.05);
    }
  }

  .active {
    /* active para deixar o menu com cor diferente para sabe em qual pagina você clicou */
    background-color: pink;
    /* color: white; */
  }
`;

function Menu() {
  return (
    //era nav no lugar do StyledMenu
    <StyledMenu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/ClassicRock">Classic Rock</NavLink>
      <NavLink to="/HeavyMetal">Heavy Metal</NavLink>
    </StyledMenu>
  );
}

export default Menu;
