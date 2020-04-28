import React, { FC, useState } from "react"

const ContactForm: FC = () => {
  const [state, setState] = useState({ name: "", email: "", message: "" })

  const handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    setState({ ...state, [name]: value })
  }

  const resetForm = event => {
    event.preventDefault()
    setState({ ...state, name: "", email: "", message: "" })
  }

  return (
    <div className="border border-blueGray-700">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="w-full max-w-sm flex flex-col mx-auto"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="md:flex md:items-center my-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="name"
            >
              Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-400 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-600"
              id="name"
              name="name"
              type="text"
              value={state.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="name"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-400 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-600"
              id="email"
              name="email"
              type="text"
              value={state.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Message
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className="rounded contact-input form-textarea w-full border-2 border-gray-600"
              name="message"
              value={state.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end mr-4">
          <button
            className="my-4 border-blueGray-900 border-2 px-4 py-2 rounded hover:bg-blueGray-900 hover:text-gray-200"
            type="submit"
          >
            Send
          </button>
          <div
            className="my-4 ml-8 border-blueGray-900 border-2 px-4 py-2 rounded hover:bg-blueGray-900 hover:text-gray-200"
            role="button"
            onClick={resetForm}
          >
            Reset Form
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
