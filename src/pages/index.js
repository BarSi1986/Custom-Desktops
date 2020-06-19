import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Quality from '../components/Quality'
import Team from '../components/OurTeam'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NavBar />
    <Hero />
    <Services />
    <Quality />
    <Team />
  </Layout>
)

export default IndexPage
