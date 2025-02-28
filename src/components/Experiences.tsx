import styled from "styled-components";

/*screen > 1000px should not have main exceed 70% of width of parent
css style of overall main tag*/
const MainContainer = styled.main`
    width: 70%;
    display: flex;
    flex-direction: column;
    background-color: #F9F7F7;
`;

/*css style for secondary header(internal link title)*/
const Header2 = styled.h2`
    font-family: "Gill Sans", sans-serif;
    color: #112D4E;
    text-align: center;
    padding: 1vh;
`;

/*css styling for header 3, internship name in this case*/
const Header3 = styled.h3`
    font-size: calc(3px + 1vw);
    padding: 0.5vh;
`;

/*css style for text in main*/
const MainText = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: calc(4px + 1vw);
    color: #112D4E;
    align-self: center;
    width: 65%;
    margin: 1vh 1vw;
    padding: 0.5vh;
`;

/*css styling for all dates of internship*/
const DateText = styled.p`
    font-size: calc(2px + 1vw);
    padding: 1vh;
`;

export default function Experiences() {
    return (
        <MainContainer>
            <Header2>Experiences</Header2>
            <MainText>
                <Header3>Riot Games United States Summer Internship. Los Angeles, CA</Header3>
                <DateText>June 2023 - August 2023</DateText>    
                <ul>
                    <li><p>Worked with a team of developers on character movement's reaction with the new environment in League of Legends.</p></li>
                    <li><p>Helped fix a visual bug of characters appearing to be falling out of the environment.</p></li>
                    <li><p>Created a mini-game of guessing the name of character abilities for other developers to play internally.</p></li>
                </ul>
                <Header3>Riot Games United States Summer Internship. Los Angeles, CA</Header3>
                <DateText>June 2024 - August 2024</DateText>
                <ul>
                    <li><p>Continued working on character movement with a team of developers from last internship in League of Legends.</p></li>
                    <li><p>Worked on mouse smoothing to enchance character movements in the new ARAM map.</p></li>
                    <li><p>Helped fix various bugs of characters getting stuck in walls when using flash in the new ARAM map.</p></li>
                </ul>
            </MainText>
            
        </MainContainer>
    )
}