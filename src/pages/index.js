import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
  return (
    <Layout>
      <div>
        Home page
        <StaticImage src="../assets/renato_large.png" />
        <StaticImage src="../assets/danny_large.png" />
      </div>
    </Layout>
  )
}

export default Home
