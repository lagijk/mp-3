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

/*css style for keeping image and text side by side*/
const ImageText = styled.div`
    display: flex;
    flex-direction: row;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 100%;
    padding: 1vh 2vw;
`;

/*css style for text in main*/
const SchoolsDiv = styled.div`
    font-size: calc(3px + 2vw);
    color: #112D4E;
    align-self: center;
    width: 50%;
    margin: 1vh 1vw;
`;

const DateText = styled.p`
    font-size: calc(2px + 1vw);
    padding: 1vh;
`;

export default function Education() {
    return (
        <MainContainer>
            <Header2>Education</Header2>
            <ImageText>
            <SchoolsDiv>
                <ul>
                    <li>
                        <p>John Dewey High School. Brooklyn, NY</p>
                        <DateText>Sep. 2017 - Jun. 2018</DateText>
                    </li>
                    <li>
                        <p>New Explorations into Science, Technology and Math High School. New York, NY</p>
                        <DateText>Sep. 2018 - Jun. 2021</DateText>
                    </li>
                    <li>
                        <p>Boston University. Boston, MA</p>
                        <p>Bachelor of Arts in Computer Science</p>
                        <DateText>Sep. 2021 - May 2025</DateText>
                    </li>
                </ul>
            </SchoolsDiv>

            </ImageText>
        </MainContainer>
    )
}