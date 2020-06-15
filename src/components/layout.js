import React from "react"
import { createGlobalStyle, ThemeProvider } from 'styled-components'


const theme = {
  fonts: {
    museomoderno: "'MuseoModerno', cursive",
    logo: "'Saira Stencil One', cursive",
    header: "'Montserrat', sans-serif"
  },
  colors: {
    dark: "#101010",
    light: "#F5F5F7",

    linear_hero_one: "#37103E",
    linear_hero_two: "#120D12",

    linear_team_one: "#0E0E10",
    linear_team_two: "#360D3E",
  }
}

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${p => p.theme.fonts.museomoderno};
  }
  body{
    background: ${p => p.theme.colors.dark};
  }
  h1,h2{
    font-family: ${p => p.theme.fonts.header};
    letter-spacing: 2px;
  }
  p{
    font-weight: 200;
    font-size: 20px;
  }
  button{
    font-family: ${p => p.theme.fonts.header};
    font-weight: 300;
    padding: 15px 40px;
    font-size: 17px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: 0.4s cubic-bezier(0.17,0.2,0.05,1.0);
    &:hover{
      background: rgba(255,255,255, 0.2);
    }
  }
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Layout
