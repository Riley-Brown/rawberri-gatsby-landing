import React from "react"
import { StyledContact } from "./StyledContact"
import contactSvg from "assets/svg/contact.svg"
import phone from "assets/svg/phone.svg"
import mapIcon from "assets/svg/map-pin.svg"
import clockIcon from "assets/svg/clock.svg"

export default function Contact() {
  return (
    <StyledContact>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div>
          <a
            href="https://www.google.com/maps/place/Rawberri/@34.0877319,-118.3790825,18.79z/data=!4m5!3m4!1s0x0:0x4a13a9506a05676e!8m2!3d34.0880338!4d-118.3785666"
            target="_blank"
          >
            <img src={mapIcon} alt="" />
            <span>8582 Santa Monica Blvd, West Hollywood, CA 90069</span>
          </a>
        </div>
        <div>
          <a href="tel:3106527010">
            <img src={phone} alt="" />
            <span>(310) 652-7010</span>
          </a>
        </div>
        <div>
          <a href="tel:3106527010">
            <img src={clockIcon} alt="" />
            <span>Open Now</span>
          </a>
        </div>
        <div className="form">
          <h3>Send us a message!</h3>
          <form>
            <label htmlFor="contact-email">Email</label>
            <input type="email" id="contact-email" />
            <label htmlFor="contact-message">Message</label>
            <textarea name="message" id="contact-message" cols="30" rows="10" />
          </form>
        </div>
      </div>

      <img src={contactSvg} alt="" />
    </StyledContact>
  )
}
