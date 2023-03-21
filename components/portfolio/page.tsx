import React from 'react'
import Image from 'next/image'
import HTML from "../../public/html.png"
import CSS from "../../public/css-3.png"
import JS from "../../public/javascript.png"
import ReactJS from "../../public/react.png"
import NextJS from "../../public/next.avif"
import Bootstrap from "../../public/bootstrap.png"
import Tailwind from "../../public/tailwind.png"
import TS from "../../public/TS.jpg"
import Chakra from "../../public/chakra.png"

const Portfolio = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center my-3 text-white tablet:my-7 tablet:text-5xl'>Skills </h1>
      <div className='flex flex-wrap justify-center w-11/12 m-auto gap-y-1 text-slate-200 tablet:flex tablet:flex-wrap tablet:space-x-5 tablet:justify-between'>
        <div className='w-36  flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-bold my-2'>HTML</h1>
          <Image src={HTML} alt={""}></Image>
          <div className="bg-[#304255] h-2 rounded-full my-3 w-20">
            <div className="bg-[#ff7900] h-full rounded-full w-full"></div></div>
        </div>
        <div className='w-36  flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-bold my-2'>CSS</h1>
          <Image src={CSS} alt={""}></Image>
          <div className="bg-[#304255] h-2 rounded-full my-3 w-20">
            <div className="bg-[#0096f2] h-full rounded-full w-full"></div></div>
        </div>
        <div className='w-36  flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-bold my-2'>JavaScript</h1>
          <Image src={JS} alt={""}></Image>
          <div className="bg-[#304255] h-2 rounded-full my-3 w-20">
            <div className="bg-[#e4b82d] h-full rounded-full w-3/4"></div></div>
        </div>
        <div className='w-36  flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-bold my-2'>Bootstrap</h1>
          <Image src={Bootstrap} alt={""} className={"w-[45%] my-2"}></Image>
          <div className="bg-[#304255] h-2 rounded-full my-3 w-20">
            <div className="bg-[#7b42b4] h-full rounded-full w-11/12"></div></div>
        </div>
        <div className='w-36  flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-bold my-2'>Tailwind</h1>
          <Image src={Tailwind} alt={""} className={"w-[60%]"}></Image>
          <div className="bg-[#304255] h-2 rounded-full my-3 w-20">
            <div className="bg-[#00b8d7] h-full rounded-full w-5/6"></div></div>
        </div>
        <div className='w-36  flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-bold my-2'>Chakra</h1>
          <Image src={Chakra} alt={""} className={"w-[70%] my-2"}></Image>
          <div className="bg-[#304255] h-2 rounded-full my-3 w-20">
            <div className="bg-[#00c9be] h-full rounded-full w-3/4"></div></div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
