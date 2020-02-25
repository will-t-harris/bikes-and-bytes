import React, { FC } from "react"

const ContactForm: FC = () => {
  return (
    <div className="border border-blueGray-700">
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
            <input className="my-4 rounded" type="text" name="name" required />
          </label>
        </p>
        <p>
          <label>
            Your Email:{" "}
            <input
              className="my-4 rounded"
              type="email"
              name="email"
              required
            />
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea
              className="rounded w-1/6"
              name="message"
              required
            ></textarea>
          </label>
        </p>
        <p>
          <button
            className="my-4 border-blueGray-900 border-2 px-4 py-2 rounded hover:bg-blueGray-900 hover:text-gray-200"
            type="submit"
          >
            Send
          </button>
        </p>
      </form>
    </div>
  )
}

export default ContactForm
