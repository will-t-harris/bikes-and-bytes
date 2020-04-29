import React, { FC, useState, SyntheticEvent } from "react"

const ContactForm: FC = () => {
  const [state, setState] = useState({ name: "", email: "", message: "" })

  const handleInputChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement
    const value = target.value
    const name = target.name

    setState({ ...state, [name]: value })
  }

  const resetForm = (event: SyntheticEvent) => {
    event.preventDefault()
    setState({ ...state, name: "", email: "", message: "" })
  }

  return (
    <div className="border-t-8 border-b-8 border-blueGray-700">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="w-full max-w-lg flex flex-col mx-auto"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="md:grid md:grid-cols-6 md:grid-rows-1 my-6">
          <div className="md:col-start-1 flex">
            <label
              className="self-center text-gray-600 font-bold mb-1 md:mb-0 pr-4"
              htmlFor="name"
            >
              Name
            </label>
          </div>
          <div className="md:col-start-2 md:col-span-5">
            <input
              className="contact-input appearance-none border-gray-600 rounded w-full py-2 px-4 text-gray-700 leading-tight"
              id="name"
              name="name"
              type="text"
              value={state.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-6 md:grid-rows-1 mb-6">
          <div className="md:col-start-1 flex">
            <label
              className="self-center text-gray-600 font-bold mb-1 md:mb-0 pr-4"
              htmlFor="name"
            >
              Email
            </label>
          </div>
          <div className="md:col-start-2 md:col-span-5">
            <input
              className="contact-input appearance-none border-gray-600 rounded w-full py-2 px-4 text-gray-700 leading-tight"
              id="email"
              name="email"
              type="text"
              value={state.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-6 md:grid-rows-1">
          <div className="md:col-start-1 flex">
            <label className="self-center text-gray-600 font-bold mb-1 md:mb-0 pr-4">
              Message
            </label>
          </div>
          <div className="md:col-start-2 md:col-span-5">
            <textarea
              className="rounded contact-input px-3 py-2 leading-normal w-full border-gray-600"
              name="message"
              value={state.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
        </div>
        <div className="grid grid-cols-6">
          <button
            className="col-start-2 col-span-2 my-4 border-blueGray-900 border-2 px-8 py-2 rounded hover:bg-blueGray-900 hover:text-gray-200"
            type="submit"
          >
            SEND
          </button>
          <div
            className="col-start-5 col-span-2 my-4 border-blueGray-900 border-2 px-8 py-2 rounded hover:bg-blueGray-900 hover:text-gray-200 text-center"
            role="button"
            onClick={resetForm}
          >
            RESET
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
