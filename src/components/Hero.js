import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

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

const RightImage = styled.div`
    flex-grow: 1;
    background-image: url(${({ image }) => image});
    background-size: cover;
    background-position: center;
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

            </LeftContent>
            <RightImage image={hero_img.file.childImageSharp.fluid.src}>
            </RightImage>
        </HeroWrapper>
    )
}

export default Hero
