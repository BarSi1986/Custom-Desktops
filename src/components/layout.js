import React from "react"
import { createGlobalStyle, ThemeProvider } from 'styled-components'


const theme = {
  fonts: {
    museomoderno: "'MuseoModerno', cursive;",
    logo: "'Saira Stencil One', cursive;"
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
  p{
    font-weight: 200;
    font-size: 20px;
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
