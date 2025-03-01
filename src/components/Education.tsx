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

/*css style for keeping image and text side by side*/
const ImageText = styled.div`
    display: flex;
    flex-direction: row;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 100%;
    padding: 1vh 2vw;

    /*mobile device screen 750 -1000px*/
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column; 
        padding: 2vh 2vw;
    }
`;

/*css style for text in main*/
const SchoolsDiv = styled.div`
    font-size: calc(4px + 1vw);
    color: #112D4E;
    align-self: center;
    width: 50%;
    margin: 1vh 1vw;

    /*mobile device screen 750 -1000px*/
    @media screen and (max-width: 900px) {

    /*increase text font on smaller screen*/
        font-size: calc(3px + 2vw);
    }
`;

const DateText = styled.p`
    font-size: calc(2px + 1vw);
    padding: 1vh;

    /*mobile device screen 750 -1000px*/
    @media screen and (max-width: 900px) {
        font-size: calc(2px + 2vw);
    }
`;

/*reduce image size*/
const ImageStyle = styled.img`
    width: 45%;
    padding: 0.5vw;
    margin: 1vh 1vw;
    border-radius: calc(15px + 10vw);

    /*mobile device screen 750 -1000px*/
    @media screen and (max-width: 900px) {

    /*center image in smaller screen*/
        max-width: 100%;
        margin: auto;
    }
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
                <ImageStyle src="public/BU.png" alt="an image of the seal of Boston University"/>
            </ImageText>
        </MainContainer>
    )
}