import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const FooterWrapper = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: space-around;
`

const FooterSection = styled.div`
    flex-grow: 1;
    color: ${p => p.theme.colors.light};

    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 230px;

    h3{
        margin-bottom: 20px;
    }
`

const Logo = styled.p`
    font-family: ${p => p.theme.fonts.logo};
    color: ${p => p.theme.colors.light};
    font-size: 35px;
`

const SocialLinks = styled.div`
    display: flex;
`

const StyledIcon = styled(FontAwesomeIcon)`
    color: ${p => p.theme.colors.light};
    font-size: 25px;
    margin-right: 15px;
    cursor: pointer;
`

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterSection>
                <Logo>LOGO</Logo>
                <p>ul. Paderewskiego 1986</p>
                <p>42-800 Wartenau</p>
            </FooterSection>
            <FooterSection>
                <h3>UEFUL LINKS</h3>
                <p>Home</p>
                <p>Works</p>
                <p>About</p>
                <p>Contact</p>
            </FooterSection>
            <FooterSection>
                <h3>FOLLOW US ON:</h3>
                <SocialLinks>
                    <StyledIcon icon={faFacebookF} />
                    <p>facebook</p>
                </SocialLinks>
                <SocialLinks>
                    <StyledIcon icon={faInstagram} />
                    <p>instagram</p>
                </SocialLinks>
                <SocialLinks>
                    <StyledIcon icon={faTwitter} />
                    <p>twitter</p>
                </SocialLinks>
            </FooterSection>
        </FooterWrapper>
    )
}

export default Footer
