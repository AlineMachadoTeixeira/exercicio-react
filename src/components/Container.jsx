import styled from "styled-components";

const StyledContainer = styled.main`
  width: 75vw;
  min-height: 75vh;
  margin: auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;
  border-radius: 5px;

  h1 {
    text-align: center;
  }
`;

function Container({ children }) {
  return (
    <StyledContainer>
      <h1>Exercício React</h1>
      {children}
    </StyledContainer>
  );
}

export default Container;
