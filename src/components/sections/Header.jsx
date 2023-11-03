
import styled from "styled-components";
import {Navbar} from "../Navbar"


const StyledHeader = styled.header`
  width: 100%; 
position: fixed;

`;

export const Header = () => {
 
  return (
    <StyledHeader>
      <Navbar/>
    </StyledHeader>
  );
};
