import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import JS from "../../public/JS.gif"
import Next from "../../public/nextGif.gif"
import tail from "../../public/tail.gif"

const Skills = () => {
  return (
    <>
    <h1 className='text-center font-bold text-3xl tablet:text-6xl text-gray-100 my-16'> Portfolio </h1>
    <div className="tablet:m-auto tablet:flex tablet:w-4/5 tablet:flex-row tablet:space-x-3">
      <div className="m-3 max-w-sm overflow-hidden rounded shadow-2xl w-11/12">
        <Image className="w-full" src={JS} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-gray-400 text-clip overflow-hidden">Panaverse website</div>
          <p className="text-base text-gray-300 text-clip overflow-hidden">This project is based on next and tailwind css</p>
        </div>
      </div>
      <div className="m-3 max-w-sm overflow-hidden rounded shadow-2xl w-11/12">
        <Image className="w-full" src={Next} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-gray-400">Todo app</div>
          <p className="text-base text-gray-300">This project is based on next and tailwind css</p>
        </div>
      </div>
      <div className="m-3 max-w-sm overflow-hidden rounded shadow-2xl w-11/12">
        <Image className="w-full" src={tail} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-gray-400">Javascript projects</div>
          <p className="text-base text-gray-300">This project is based on next and tailwind css</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Skills
