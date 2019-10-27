import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "assets/img/logo-no-bg.png"
import twitterSvg from "assets/svg/twitter.svg"
import instagramSvg from "assets/svg/instagram.svg"
import grubHubSvg from "assets/svg/grub-hub.svg"

import { StyledNav } from "./StyledNav"

const Nav = ({ siteTitle }) => (
  <StyledNav>
    <div className="nav-container">
      <Link to="/">
        <img src={logo} />
      </Link>
      <ul>
        <li>
          {/* <img src={twitterSvg} alt="" /> */}
          Home
        </li>
        <li>About</li>
        <li>Contact</li>
        <li>Menu</li>
        <li>
          <a href="https://wizardly-jang-d732c8.netlify.com/">Store</a>
        </li>
        <li>
          <a href="https://loving-kilby-fc3f0a.netlify.com/">Order Online</a>
        </li>

        {/* <img src={instagramSvg} alt="" /> */}
        {/* <img src={grubHubSvg} alt="" /> */}
      </ul>
    </div>
  </StyledNav>
)

export default Nav
