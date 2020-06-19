import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const HeroWrapper = styled.div`
    height: 100vh;
    display: flex;
`

const LeftContent = styled.div`
    background: linear-gradient(135deg,
        ${p => p.theme.colors.linear_hero_one}, 
        ${p => p.theme.colors.linear_hero_two});
    flex-grow: 1;
    position: relative;
`

const ContentArea = styled.div`
    height: 280px;
    max-width: 380px;
    position: absolute;
    top: 50%;
    left: 80px;
    transform: translateY(-50%);
    color: ${p => p.theme.colors.light};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

const LearnMoreBtn = styled.button`
    background: none;
    border: 1px solid ${p => p.theme.colors.light};
    color: ${p => p.theme.colors.light};
`

const RightImage = styled.div`
    flex-grow: 1;
    background-image: url(${({ image }) => image});
    background-size: cover;
    background-position: center;
`

const SocialIconsArea = styled.div`
    width: 200px;
    position: absolute;
    left: 80px;
    bottom: 50px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`

const StyledIcon = styled(FontAwesomeIcon)`
    color: ${p => p.theme.colors.light};
    font-size: 25px;
`

const SocialStyledBtn = styled.button`
    background: none;
    border-radius: 50px;
    border: none;
    width: 50px;
    height: 50px;
    padding: 0;
    outline: none;

`

const Hero = () => {
    const hero_img = useStaticQuery(graphql`
    query HeroImgQuery {
        file(relativePath: {eq: "hero-section-img.png"}) {
          childImageSharp {
            fluid {
                src
            }
          }
        }
      }
    `)

    return (
        <HeroWrapper>
            <LeftContent>
                <ContentArea>
                    <h1>BE READY FOR IT</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero minima similique praesentium eum dolor doloribus dolorum esse eligendi dolor vero elit!</p>
                    <LearnMoreBtn>LEARN MORE</LearnMoreBtn>
                </ContentArea>

                <SocialIconsArea>

                    <SocialStyledBtn>
                        <StyledIcon icon={faFacebookF} />
                    </SocialStyledBtn>
                    <SocialStyledBtn>
                        <StyledIcon icon={faInstagram} />
                    </SocialStyledBtn>
                    <SocialStyledBtn>
                        <StyledIcon icon={faTwitter} />
                    </SocialStyledBtn>

                </SocialIconsArea>

            </LeftContent>
            <RightImage image={hero_img.file.childImageSharp.fluid.src}>
            </RightImage>
        </HeroWrapper>
    )
}

export default Hero
