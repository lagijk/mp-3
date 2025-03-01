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

const Header3 = styled.h3`
    color: #112D4E;
    font-family: "Gill Sans", sans-serif;
    padding: 1vw 1vh;
    width: 60%;
`;

/*css style for text in main*/
const MainText = styled.div`
    display: flex;
    flex-direction: row;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 2vh 2vw;
`;

const TableTD = styled.td`
    font-size: calc(4px + 1vw);
    color: #112D4E;
    border: solid 1px #3F72AF;
    padding: 1vw 1vh;
`

/*reduce image size*/
const ImageStyle = styled.img`
    height: 100%;
    width: 45%;
    padding: 1vh 2vw;
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