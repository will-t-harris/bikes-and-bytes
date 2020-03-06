import React, { FC, useState } from "react"

const ContactForm: FC = () => {
  const [state, setState] = useState({ name: "", email: "", message: "" })

  const handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    setState({ ...state, [name]: value })
  }

  return (
    <div className="flex justify-center border border-blueGray-700">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name:{" "}
            <input
              className="my-4 rounded contact-input"
              type="text"
              name="name"
              value={state.name}
              onChange={handleInputChange}
              required
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:{" "}
            <input
              className="my-4 rounded contact-input"
              type="email"
              name="email"
              value={state.email}
              onChange={handleInputChange}
              required
            />
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea
              className="rounded contact-input"
              name="message"
              cols={22}
              value={state.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </label>
        </p>
        <p>
          <div className="flex justify-end">
            <button
              className="my-4 border-blueGray-900 border-2 px-4 py-2 rounded hover:bg-blueGray-900 hover:text-gray-200"
              type="submit"
            >
              Send
            </button>
          </div>
        </p>
      </form>
    </div>
  )
}

export default ContactForm
