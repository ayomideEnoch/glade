import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Mission from "../components/sections/mission"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"

const IndexPage = () => (
  <Layout>
    <SEO title="Home | Glade" />
    <Navigation />
    <Header />
    <Mission />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage
