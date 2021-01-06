import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Btn.css";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
      textAlign:`center`,
      fontFamily:`'Baloo 2', cursive`,
      height:`8vh`,
      display:`flex`,
      justifyContent:`center`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0rem 0rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            borderRight:`solid 2px white`,
            borderLeft:`solid 2px white`,
            paddingLeft:`0.3rem`,
            paddingRight:`0.3rem`,
          }}
        >
         {siteTitle} App
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
