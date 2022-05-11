import React from 'react'

const Input = ({fullLink, handleChange}) => {
  return (
    <input
      className="shortener-input w-full p-4 border-[2.5px] border-gray-200 rounded-md indent-2 lg:px-4 lg:py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
      type="url"
      placeholder="Shorten a link here.."
      name="fullLink"
      value={fullLink}
      onChange={handleChange}
      required
      pattern="(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})"
      autoFocus
    />
  )
}

export default Input
