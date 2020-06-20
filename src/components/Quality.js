import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

const QualityArea = styled.div`
height: 110vh;
width: 100%;
background-image: url(${({ image }) => image});
background-size: cover;
background-position: bottom center;
position: relative;
`

const ContentArea = styled.div`
    height: 200px;
    max-width: 450px;
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

const Quality = () => {

  const quality_img = useStaticQuery(graphql`
    query QualityImgQuery {
        file(relativePath: {eq: "provide-quality-img.png"}) {
          childImageSharp {
            fluid {
                src
            }
          }
        }
      }
    `)
  return (
    <QualityArea image={quality_img.file.childImageSharp.fluid.src}>

      <ContentArea>
        <h1>WE PROVIDE QUALITY</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero minima similique praesentium eum dolor doloribus dolorum esse eligendi dolor vero elit!</p>
      </ContentArea>

    </QualityArea>
  )
}

export default Quality
