import styled from "styled-components";

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

const Header3 = styled.h3`
    text-align: center;
    padding: 1vw 1vh;
`;

/*css styling for overall calculator*/
const CalcContainer = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #112D4E;
`;

/*css style for overall input, including input button and label*/
const CalcInput = styled.div`
    font-size: calc(4px + 1vw);
    display: flex;
    flex-direction: row;
    width: 100%;

    /*mobile device screen 750 -1000px*/
    @media screen and (max-width: 900px) {
        font-size: calc(4px + 2vw);
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
`;

/*css styling for all buttons*/
const CalcButton = styled.div`
    width: 60%;
    padding: 2vh 2vw;
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
`;

/*css styling for result of calculator*/
const Output = styled.h3`
    width: 50%;
    border: calc(1px + 0.1vw) solid #3F72AF;
    border-radius: calc(1px + 1vw);
    background-color: #F5F5F5;
    padding: 2vh 1vw;
    margin-left: auto;
    margin-right: auto;
`;

export default function Projects() {
    return (
        <MainContainer>
            
        </MainContainer>
    )
}