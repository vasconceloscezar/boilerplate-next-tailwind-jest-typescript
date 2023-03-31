import React from 'react'

export const Preloader = () => {
  return (
    <div className="fixed z-[999] flex h-full w-full items-center justify-center bg-quaternary ">
      <div className="flex">
        <Dot delay="delay-0" />
        <Dot delay="delay-200" />
        <Dot delay="delay-400" />
      </div>
    </div>
  )
}

const Dot = ({ delay }) => (
  <div
    role="presentation"
    className={`mx-1 h-6 w-6 animate-bounce rounded-full border-2 border-primary ${delay}`}
  ></div>
)
