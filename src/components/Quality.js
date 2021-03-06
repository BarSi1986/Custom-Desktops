import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

const QualityArea = styled.div`
height: 130vh;
width: 100%;
background-image: url(${({ image }) => image});
background-size: cover;
background-position: right center;
position: relative;
background-repeat: no-repeat;
`

const ContentArea = styled.div`
    height: 180px;
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
        <h2>WE PROVIDE QUALITY</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero minima similique praesentium eum dolor doloribus dolorum esse eligendi dolor vero elit!</p>
      </ContentArea>

    </QualityArea>
  )
}

export default Quality
