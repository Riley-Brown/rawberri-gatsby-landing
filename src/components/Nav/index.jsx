import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useLayoutEffect, useState } from "react"
import logo from "assets/img/logo-no-bg.png"
import twitterSvg from "assets/svg/twitter.svg"
import instagramSvg from "assets/svg/instagram.svg"
import grubHubSvg from "assets/svg/grub-hub.svg"
import { CSSTransition } from "react-transition-group"

import { StyledNav } from "./StyledNav"

import MobileNav from "./MobileNav"

const Nav = ({ siteTitle, pathname }) => {
  const [isMobile, setIsMobile] = useState(true)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 1100px)")
    if (mq.matches) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
    mq.addListener(() => {
      console.log(mq.matches)
      if (mq.matches) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    })
  }, [])

  return (
    <StyledNav showMobileMenu={showMobileMenu}>
      <div className="nav-container">
        <Link to="/">
          <img src={logo} />
        </Link>
        <MobileNav isMobile={isMobile} showMobileMenu={showMobileMenu}>
          <ul onClick={() => setShowMobileMenu(false)}>
            <li data-active={pathname && pathname === "/"}>
              <Link to="/">Home</Link>
            </li>
            <li data-active={pathname && pathname.includes("/about")}>
              <Link to="/about">About</Link>
            </li>
            <li data-active={pathname && pathname.includes("/contact")}>
              <Link to="/contact">Contact</Link>
            </li>
            <li data-active={pathname === "/menu"}>
              <a
                href="http://places.singleplatform.com/rawberri-3/menu"
                target="_blank"
              >
                Menu
              </a>
            </li>
            <li>
              <a href="https://wizardly-jang-d732c8.netlify.com/">Store</a>
            </li>
            <li>
              <a href="https://loving-kilby-fc3f0a.netlify.com/">
                Order Online
              </a>
            </li>
          </ul>
        </MobileNav>
        <div
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="menu-icon"
          name="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </StyledNav>
  )
}

export default Nav
