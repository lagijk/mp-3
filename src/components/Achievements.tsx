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

/*css styling for the main list of text */
const MainText = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: calc(6px + 1vw);
    color: #112D4E;
    align-self: center;
    width: 80%;
    margin: 1vh 1vw;
    padding: 0.5vh 2vw;
`;

/*css style for award names*/
const AwardText = styled.p`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: calc(6px + 1vw);
    color: #112D4E;
    align-self: center;
    width: 100%;
    margin: 1vh 1vw;
    padding: 1vh;
`;

/*css style for school names*/
const SchoolName = styled.p`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: calc(4px + 1vw);
    color: #3F72AF;;
    align-self: center;
    width: 100%;
    margin: 1vh 1vw;
`

export default function Achievements() {
    return (
        <MainContainer>
            <Header2>Achievements</Header2>
            <MainText>
                <ul>
                    <li>
                        <AwardText>College of Arts & Sciences Dean's List for Fall 2024</AwardText>
                        <SchoolName>Boston University</SchoolName>
                    </li>
                    <li>
                        <AwardText>College of Arts & Sciences Dean's List for Fall 2023</AwardText>
                        <SchoolName>Boston University</SchoolName>
                    </li>
                    <li>
                        <AwardText>College of Arts & Sciences Dean's List for Fall 2022</AwardText>
                        <SchoolName>Boston University</SchoolName>
                    </li>
                    <li>
                        <AwardText>College of Arts & Sciences Dean's List for Spring 2022</AwardText>
                        <SchoolName>Boston University</SchoolName>
                    </li>
                    <li>
                        <AwardText>High Honor Roll</AwardText>
                        <SchoolName>New Explorations into Science, Technology and Math High School</SchoolName>
                    </li>
                    <li>
                        <AwardText>Highest Unweighted GPA of 9th Grade</AwardText>
                        <SchoolName>John Dewey High School</SchoolName>
                    </li>
                </ul>
            </MainText>
        </MainContainer>
    )
}