import styled from "styled-components";
import { Link } from "react-router-dom";

/*screen > 750px should not exceed 30% of width of parent*/
const NavContainer = styled.nav`
    width: 30%
`;

/*css style for the unordered list of internal links inside nav*/
const NavUl = styled.ul`
    list-style: none; 
    display: flex;
    flex-direction: column; 
    justify-content: space-evenly;
    background-color: #DBE2EF;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;

/*css style for the list of links*/
const NavList = styled.li`
    font-family: "Gill Sans", sans-serif;
    font-size: calc(1px + 2vw);
    padding: 2vh 1vw;
    margin: 3vh;
    border: solid #3F72AF;
    border-radius: calc(1px + 1vw);
    background-color: #3F72AF;
`;

/*css style for links inside nav*/
const NavLink = styled(Link)`
    color: #F9F7F7;
    text-decoration: none; 
`;

export default function Navigation(){
    return (
        <>
            <NavContainer>
                <NavUl>
                    <NavList><NavLink to="/">Home</NavLink></NavList>
                    <NavList></NavList>
                </NavUl>
            </NavContainer>
        </>
    )
   
}
