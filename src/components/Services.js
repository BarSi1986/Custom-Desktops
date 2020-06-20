import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

const ServicesSection = styled.div`
    height: 120vh;
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

const OuterCircle = styled.div`
    width: 280px;
    height: 280px;
    background: linear-gradient(90deg, #C4C4C4, #7B0118);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`
const InnerCircle = styled.div`
    width: 270px;
    height: 270px;
    background: ${p => p.theme.colors.linear_hero_two};
    border-radius: 50%;
    transform: translateY(-8px);

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    h2{
        color: ${p => p.theme.colors.light};
        font-weight: 300;
    }
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
                <OuterCircle>
                    <InnerCircle>
                        <h2>BEST PERFORMANCE</h2>
                    </InnerCircle>
                </OuterCircle>

                <OuterCircle>
                    <InnerCircle>
                        <h2>BEST PRICE</h2>
                    </InnerCircle>
                </OuterCircle>

                <OuterCircle>
                    <InnerCircle>
                        <h2>FAST SHIPPING</h2>
                    </InnerCircle>
                </OuterCircle>
            </RightSide>
        </ServicesSection>

    )
}

export default Services
