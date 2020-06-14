import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/Hero'
import NavBar from '../components/NavBar'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NavBar />
    <Hero />
  </Layout>
)

export default IndexPage
