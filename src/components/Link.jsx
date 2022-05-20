import React, {useEffect, useState} from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

const useTemp = () => {
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [copied])
  return [copied, () => setCopied(true)]
}

const Link = ({shortLink, originalLink}) => {
  const [copied, update] = useTemp()
  return (
    <>
      <div className="bg-slate-300 p-4 rounded-xl flex flex-col lg:flex-row items-center justify-between border-gray-300 focus:outline-none focus:ring shadow-[6px_6px_0_0_#666] hover:shadow-none active:bg-pink-50 transition">
        <p className="font-sans text-sm font-normal leading-relaxed text-gray-600 font-base whitespace-nowrap overflow-x-hidden text-ellipsis max-w-[30ch]">
          {originalLink}
        </p>
        <p>
          <CopyToClipboard text={shortLink} onCopy={() => update()}>
            <a className="font-sans font-normal text-xl leading-relaxed text-gray-800 font-base cursor-pointer transition hover:scale-150 hover:text-gray-400">
              {shortLink}
            </a>
          </CopyToClipboard>
        </p>
      </div>
      <span
        className={`text-sm opacity-1 ${
          !copied && 'opacity-0 duration-500 transition-opacity'
        }`}
      >
        Copied Successfully!
      </span>
    </>
  )
}

export default Link
