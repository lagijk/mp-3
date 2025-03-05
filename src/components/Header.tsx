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

    /*mobile device screen 750 -1000px*/
    @media screen and (max-width: 900px) {
    /*screen < 750px should have content aligned center*/
        text-align: center;
        font-size: calc(6px + 3vw);
    }
`;

export default function Header() {
    return (
        <HeaderContainer>
            <h1>Alex Chen</h1>
            <p>Alex's online resume</p>
        </HeaderContainer>
    )
}