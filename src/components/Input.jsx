import React from 'react'

const Input = ({fullLink,handleChange}) => {
  return (
    <input
      className="shortener-input"
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
