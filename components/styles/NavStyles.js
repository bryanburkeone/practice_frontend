import styled from 'styled-components';

const NavStyles = styled.ul`
    display: flex;
    align-self: center;
    justify-content: space-between;
    padding-right: 40px;
    font-weight: bolder;
    font-family: 'Raleway', sans-serif;
    font-size: larger;
    margin-top: 0;
     @media (max-width: 768px) {
      justify-content: space-around;
    }

`;

export default NavStyles;
