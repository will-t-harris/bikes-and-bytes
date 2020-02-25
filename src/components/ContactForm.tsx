import React, { useState, FC } from "react"
import axios from "axios"

const ContactForm: FC = () => {
  const [state, setState] = useState({
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message",
  })

  const handleFormSubmit = event => {
    event.preventDefault()

    setState({ ...state, buttonText: "...sending" })

    let data = {
      name: state.name,
      email: state.email,
      message: state.message,
    }

    axios
      .post("API_URI", data)
      .then(res => {
        setState({ ...state, sent: true })
        resetForm()
      })
      .catch(() => {
        console.log("Message not sent...") // TODO HANDLE ERROR CASE
      })
  }

  const resetForm = () => {
    setState({
      name: "",
      message: "",
      email: "",
      sent: true,
      buttonText: "Message Sent!",
    })
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="message-input">Your Message</label>
      <textarea
        name="message"
        placeholder="Please write your message here"
        value="state.message"
        required
      />

      <label htmlFor="message-name">Your Name</label>
      <input
        onChange={setState({ ...state, email: "" })}
        name="email"
        type="email"
        placeholder="Your email address?"
        required
        value={state.email}
      />

      <div className="">
        <button type="submit">{state.buttonText}</button>
      </div>
    </form>
  )
}

export default ContactForm
