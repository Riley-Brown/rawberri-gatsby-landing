import React, { useState, useEffect } from "react"
import { StyledContact } from "./StyledContact"
import contactSvg from "assets/svg/contact.svg"
import phone from "assets/svg/phone.svg"
import mapIcon from "assets/svg/map-pin.svg"
import clockIcon from "assets/svg/clock.svg"
import formSpinner from "assets/svg/formSpinner.svg"

import moment from "moment"
import axios from "axios"

export default function Contact() {
  const dayOfWeek = Number(moment().day())
  const currentHour = Number(moment().format("HH"))

  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const hours = [
    {
      openFormatted: "8am",
      closeFormatted: "8pm",
      open: 8,
      close: 20,
    },
    {
      openFormatted: "8am",
      closeFormatted: "10pm",
      open: 8,
      close: 22,
    },
    {
      openFormatted: "8am",
      closeFormatted: "10pm",
      open: 8,
      close: 22,
    },
    {
      openFormatted: "8am",
      closeFormatted: "10pm",
      open: 8,
      close: 22,
    },
    {
      openFormatted: "8am",
      closeFormatted: "10pm",
      open: 8,
      close: 22,
    },
    {
      openFormatted: "8am",
      closeFormatted: "10pm",
      open: 8,
      close: 22,
    },
    {
      openFormatted: "8am",
      closeFormatted: "10pm",
      open: 8,
      close: 22,
    },
  ]

  useEffect(() => {
    if (
      currentHour > hours[dayOfWeek].open &&
      currentHour < hours[dayOfWeek].close
    ) {
      setOpen(true)
    }
  }, [])

  // form encode for netlify
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const onSubmit = e => {
    e.preventDefault()
    setSaving(true)
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
    axios
      .post("/", encode({ "form-name": "contact", email, message }), config)
      .then(() => setSaved(true))
      .catch(err => {
        console.log(err)
        setSaving(false)
      })
  }

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
          <img src={clockIcon} alt="" />
          <span>
            {open
              ? `Open Now: ${hours[dayOfWeek].openFormatted}-${hours[dayOfWeek].closeFormatted}`
              : "Currently Closed"}
          </span>
        </div>
        <div className="form-container">
          <h3>Send us a message!</h3>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="contact-email">Email</label>
              <input
                type="email"
                id="contact-email"
                required
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="contact-message">Message</label>
              <textarea
                name="message"
                id="contact-message"
                cols="30"
                rows="5"
                required
                onChange={e => setMessage(e.target.value)}
              />
            </div>
            <div>
              {saved ? (
                <span>Message sent! We will get back to you soon.</span>
              ) : (
                <button type="submit">
                  {saving ? "Sending..." : "Send"}
                  {saving && <img src={formSpinner} alt="Loading" />}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="img-container">
        <img src={contactSvg} alt="" />
      </div>
    </StyledContact>
  )
}
