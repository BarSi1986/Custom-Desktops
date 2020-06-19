import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

const TeamWrapper = styled.div`
    height: 90vh;
    background-image: url(${({ image }) => image});
    background-size: cover;
    background-position: center;
    position: relative;
    background: linear-gradient(#0E0E10, #360D3E);

    &::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0;
        background-image: url(${({ image }) => image});
        background-size: cover;
        background-position: center;
    }
`


const OurTeam = () => {
    const team_img = useStaticQuery(graphql`
    query TeamImgQuery {
        file(relativePath: {eq: "our-team-img.png"}) {
          childImageSharp {
            fluid {
                src
            }
          }
        }
      }
    `)
    return (
        <TeamWrapper image={team_img.file.childImageSharp.fluid.src}>

        </TeamWrapper>
    )
}

export default OurTeam
