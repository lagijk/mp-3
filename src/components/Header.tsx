import styled from 'styled-components';

/*css style for header, content on screen > 750px should be aligned left*/
const HeaderContainer = styled.header`
    font-family: 'Brush Script MT', 'Brush Script std', cursive;
    font-size: calc(5px + 2vw);
    color: #F9F7F7;
    background-color: #3F72AF;
    display: flex;
    flex-direction: column;
    padding: 2vw;
`;

/*custom css style for subtitle under header*/
const SubTitleDiv = styled.p`
    font-family: "Gill Sans", sans-serif;
    font-size: calc(5px + 1vw);
    padding: 1vh 1vw
`;

export default function Header() {
    return (
        <HeaderContainer>
            <h1>Alex Chen</h1>
            <SubTitleDiv>Alex's online resume</SubTitleDiv>
        </HeaderContainer>
    )
}