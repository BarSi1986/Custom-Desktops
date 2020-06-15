import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

const QualityArea = styled.div`
height: 90vh;
width: 100%;
background-image: url(${({ image }) => image});
background-size: cover;
    background-position: center;
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

        </QualityArea>
    )
}

export default Quality
