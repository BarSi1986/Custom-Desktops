import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Icon from '../images/olive-branch.svg'

const ServicesSection = styled.div`
    height: 130vh;
    display: flex;
`

const LeftSide = styled.div`
    flex-basis: 50%;
    background-image: url(${({ image }) => image});
    background-size: cover;
    background-position: bottom center;
`

const RightSide = styled.div`
    flex-basis: 50%;
    background: linear-gradient(
        ${p => p.theme.colors.linear_hero_two},
        #110D13
    );
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const InnerCircle = styled.div`
    width: 220px;
    height: 270px;
    background: none;
    border-radius: 50%;
    transform: translateY(-8px);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    h3{
        color: ${p => p.theme.colors.light};
        font-weight: 300;
    }
`

const StyledIcon = styled(Icon)`
    position: absolute;
    width: 320px;
    height: 320px;
    top: 0px;
    opacity: .4;
`

const Services = () => {
    const service_img = useStaticQuery(graphql`
    query ServicesImgQuery {
        file(relativePath: {eq: "adventages-section-img.png"}) {
          childImageSharp {
            fluid {
                src
            }
          }
        }
      }
    `)
    return (
        <ServicesSection>
            <LeftSide image={service_img.file.childImageSharp.fluid.src}>

            </LeftSide>

            <RightSide>
                <InnerCircle>
                    <StyledIcon />
                    <h3>BEST PERFORMANCE</h3>
                </InnerCircle>

                <InnerCircle>
                    <StyledIcon />
                    <h3>BEST PRICE</h3>
                </InnerCircle>

                <InnerCircle>
                    <StyledIcon />
                    <h3>FAST SHIPPING</h3>
                </InnerCircle>
            </RightSide>
        </ServicesSection>

    )
}

export default Services
