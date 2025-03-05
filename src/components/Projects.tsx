import styled from "styled-components";
import Calculator from "./Calculator";

/*screen > 1000px should not have main exceed 70% of width of parent
css style of overall main tag*/
const MainContainer = styled.main`
    width: 70%;
    display: flex;
    flex-direction: column;
    background-color: #F9F7F7;

    /*mobile device screen 750 -1000px*/
    @media screen and (max-width: 900px) {
    /*screen < 1000px should occupy 100% of the width of its parent*/
        width: 100%;
    }
`;

/*css style for secondary header(internal link title)*/
const Header2 = styled.h2`
    font-family: "Gill Sans", sans-serif;
    color: #112D4E;
    text-align: center;
    padding: 1vh;
`;

/*css styling for personal project*/
const PersonalDiv = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #112D4E;
    padding: 1vh 1vw;
    text-align: center;
`;

/*css styling for main texts of personal projeect*/
const TableTD = styled.td`
    font-size: calc(4px + 1vw);
    color: #112D4E;
    border: solid 2px #3F72AF;
    padding: 1vw 1vh;

    /*mobile device screen 750 -1000px*/
    @media screen and (max-width: 900px) {
    /*increase text font on smaller screen*/
        font-size: calc(7px + 1vw);
    }
`;


export default function Projects() {
    return (
        <MainContainer>
            <Header2>Projects</Header2>
            <PersonalDiv>
                <table>
                    <tbody>
                        <tr>
                            <TableTD>Untitled Game</TableTD>
                        </tr>
                        <tr>
                            <TableTD>
                                <video width="320" controls>
                                    <source src="/videos/gameDev_FixedPathing.mp4"/>
                                </video>
                            </TableTD>
                        </tr>
                        <tr>
                            <TableTD>
                                <p>An ongoing 2D pixel dungeon crawler game developed in Unity with procedural dungeon generation and A* pathfinding. 
                                    The game used Aseprite for character and environment design. 
                                </p>
                            </TableTD>
                        </tr>
                    </tbody>
                </table>
            </PersonalDiv>

            <Calculator/>

        </MainContainer>
    )
}