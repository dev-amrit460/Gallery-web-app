import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import "../components/btn.css"
import Provider from "../components/Provider"

const Round = () => (
  <Layout>
    <SEO title="Home" />
    

  <div className="d-flex justify-content-center align-items-center" id="heading3"> 
      
    <div className="box ">
    <Provider/>
     </div>
    </div>
    

  </Layout>
)

export default Round;
