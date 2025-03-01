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

const Header3 = styled.h3`
    color: #112D4E;
    font-family: "Gill Sans", sans-serif;
    padding: 1vw 1vh;
    width: 60%;

    /*mobile device screen 750 -1000px*/
    @media screen and (max-width: 900px) {
        width: 50%;
    }
`;

/*css style for text in main*/
const MainText = styled.div`
    display: flex;
    flex-direction: row;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 2vh 2vw;

    /*mobile device screen 750 -1000px*/
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column; 
        width: 100%;
    }
`;

const TableTD = styled.td`
    font-size: calc(4px + 1vw);
    color: #112D4E;
    border: solid 1px #3F72AF;
    padding: 1vw 1vh;

    /*mobile device screen 750 -1000px*/
    @media screen and (max-width: 900px) {
    /*increase text font on smaller screen*/
        font-size: calc(4px + 2vw);
        align-self: center;
        width: 50%;
        margin: 1vh 1vw;
    }
`;

/*reduce image size*/
const ImageStyle = styled.img`
    height: 100%;
    width: 45%;
    padding: 1vh 2vw;

    /*mobile device screen 750 -1000px*/
    @media screen and (max-width: 900px) {
    /*center image in smaller screen*/
        max-width: 100%;
        margin: auto;
    }
`;

/*css style for image div*/
const ImageDiv = styled.div`
    display: block;
    unicode-bidi: isolate;
`;

export default function Technical() {
    return (
        <MainContainer>
            <Header2>Technical Skills</Header2>
            <MainText>
                <table>
                    <tbody>
                        <tr>
                            <TableTD><Header3>Languages</Header3></TableTD>
                            <TableTD>
                                <p>
                                    Java, Python, C#, SQL, Assembly, OCaml, Go, HTML, CSS, JavaScript
                                </p>
                            </TableTD>
                        </tr>
                        <tr>
                            <TableTD><Header3>Frameworks</Header3></TableTD>
                            <TableTD>
                                <p>React, Node.js, Flask</p>
                            </TableTD>
                        </tr>
                        <tr>
                            <TableTD><Header3>Developer Tools</Header3></TableTD>
                            <TableTD>
                                <p>Git, Visual Studio Code, Unity, Aseprite</p>
                            </TableTD>
                        </tr>
                        <tr>
                            <TableTD><Header3>Libraries</Header3></TableTD>
                            <TableTD>
                                <p>Pandas, NumPy, Matplotlib</p>
                            </TableTD>
                        </tr>
                    </tbody>
                </table>
            </MainText>

            <ImageDiv>
                <ImageStyle src="public/csLang.jpg" alt="an image of a list of CS programming languages"/> 
                <ImageStyle src="public/unityLogo.jpg" alt="an image of Unity's logo"/> 
            </ImageDiv>
        
        </MainContainer>
    )
}