import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

const Link = ({shortLink, originalLink}) => {
  return (
    <div className="bg-slate-300 p-4 rounded-xl flex items-center justify-between border-gray-300 focus:outline-none focus:ring shadow-[6px_6px_0_0_#666] hover:shadow-none active:bg-pink-50 transition">
      <p className="font-sans font-normal leading-relaxed text-gray-800 font-base">
        {originalLink}
      </p>
        <p>
      <CopyToClipboard text={shortLink}>
          <a className="font-sans font-normal leading-relaxed text-gray-800 font-base cursor-pointer">
            {shortLink}
          </a>
      </CopyToClipboard>
        </p>
    </div>
  )
}

export default Link
