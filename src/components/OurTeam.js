import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

const TeamWrapper = styled.div`
    height: 110vh;
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

    h2{
      color: ${p => p.theme.colors.light};
      position: absolute;
      top: 150px;
      left: 50%;
      transform: translateX(-50%);    }

      display: flex;
`

const MemberSection = styled.div`
  flex-grow: 1;
  border: 1 px solid white;
  color: ${p => p.theme.colors.light};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p{
    padding-top: 30px;
    max-width: 300px;
    text-align: center;
  }
`

const Avatar = styled.div`
  background: ${p => p.theme.colors.light};
  width: 200px;
  height: 200px;
  border-radius: 50%;
`

const Sign = styled.p`
  font-family: ${p => p.theme.fonts.signs};
  font-size: 50px;
  transform: rotate(-10deg);
  margin-top: 10px;
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
      <h2>MEET OUR TEAM</h2>
      <MemberSection>
        <Avatar />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia itaque optio porro aspernatur sequi animi nesciunt vero sint reiciendis? Excepturi nemo perspiciatis corrupti exercitationem fuga esse eum odit ut doloremque</p>
        <Sign>Alexander Johnson</Sign>
      </MemberSection>
      <MemberSection>
        <Avatar />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia itaque optio porro aspernatur sequi animi nesciunt vero sint reiciendis? Excepturi nemo perspiciatis corrupti exercitationem fuga esse eum odit ut doloremque</p>
        <Sign>John Doe</Sign>
      </MemberSection>

    </TeamWrapper>
  )
}

export default OurTeam
