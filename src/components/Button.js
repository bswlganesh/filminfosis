import React from 'react'

export default function Button({children}) {
  return (
    <button className="w-64 text-xl text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-5 py-2.5 font-medium">
             {children}
    </button>
  )
}
