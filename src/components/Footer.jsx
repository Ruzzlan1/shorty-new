import React, {useState} from 'react'
import darkModeImg from '../assets/colorful.png'

const Footer = ({setDark}) => {
  function setDarkMode() {
    setDark(prevMode => !prevMode)
  }
  return (
    <footer className="mt-10 row-start-3 dark:text-white">
      <p className="font-normal font-sans">
        Made by{' '}
        <a href="https://github.com/Ruzzlan1">
          <span className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-2 py-2 text-sm mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Ruslan Qurbanov .
          </span>
        </a>
      </p>
      <p className="mt-5">
        Check out the source on{' '}
        <a href="https://github.com/Ruzzlan1/shorty-new" className="underline">
          Github!
        </a>
      </p>
      <div className="flex justify-center items-center mt-3">
        <button onClick={setDarkMode}>
          <img src={darkModeImg} alt="some image.." className="max-w-[30px]" />
        </button>
      </div>
    </footer>
  )
}

export default Footer
