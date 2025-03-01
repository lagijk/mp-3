import styled from 'styled-components';

const FooterContainer = styled.footer`
    font-family: Arial, sans-serif;
    background-color: #112D4E;
    color: #F9F7F7;
    font-size: calc(1px + 1vw);
    padding: 1vh 1vw;
    align-items: baseline;

    /*mobile device screen 750 -1000px*/
    @media screen and (max-width: 900px) {
        font-size: calc(4px + 1vw);
    }
`;

const FooterLink = styled.a`
    text-decoration: none; 
    color: #F9F7F7;
`

export default function Footer() {
    return (
        /*Footer tag with copyrights statement, dummy copyrights link, and copyrights logo*/
        <FooterContainer>
            <p>All rights reserved by Alex Chen: <FooterLink href="">Credits</FooterLink> &#169;</p>
        </FooterContainer>
    )
}