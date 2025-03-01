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

/*css style for keeping image and text side by side*/
const ImageText = styled.div`
    display: flex;
    flex-direction: row;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 100%;
    padding: 1vh 2vw;

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        padding: 2vh 2vw;
    }
`;

/*css style for text in main*/
const MainText = styled.div`
    font-size: calc(3px + 1vw);
    color: #112D4E;
    align-self: center;
    width: 50%;
    margin: 1vh 1vw;

    @media screen and (max-width: 900px) {
    /*increase text font on smaller screen*/
        font-size: calc(3px + 2vw);
        
    }
`;

/*css style for home page sub text under main*/
const SubMainText = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: calc(3px + 1vw);
    color: #112D4E;
    padding: 1vw;

    @media screen and (max-width: 900px) {
        font-size: calc(3px + 2vw);
    }
`;

/*reduce image size*/
const ImageStyle = styled.img`
    width: 45%;
    padding: 0.5vw;
    margin: 1vh 1vw;
    border-radius: calc(1px + 1vw);

    @media screen and (max-width: 900px) {
    /*center image in smaller screen*/
        max-width: 100%;
        margin: auto;
    }
`;

export default function Home() {
    return (
        <MainContainer>
            <Header2>Home</Header2>
            <ImageText>
                <ImageStyle src="public/Me.jpg" alt="an image of Alex"/>
                <MainText>
                    <p>
                        My name is Alex Chen. I'm a student at Boston University studying Computer Science, 
                        and is expected to graduate in May of 2025. I'm interested in video game development 
                        and is currently working on a 2D pixel styled dungeon crawler.
                    </p>
                </MainText>
            </ImageText>

            <SubMainText>
                <p>
                    In my online resume website, you can find my experiences, projects and other various informations.
                </p>
            </SubMainText>

        </MainContainer>
    );
}