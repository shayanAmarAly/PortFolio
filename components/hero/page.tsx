"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import heroImg from "../../public/heroo.gif"
import git from "../../public/github5.png"
import linkedin from "../../public/linkedin2.png"

const Hero = () => {
  return (
    <>
      <div className='flex flex-col my-10 bgGradient justify-center items-center desktop:justify-start desktop:items-start desktop:flex desktop:flex-row desktop:w-full tablet:py-28'>
        <div className='text-center justify-center items-center desktop:justify-start desktop:items-start desktop:w-1/2 desktop:my-14 desktop:mx-10 desktop:text-left space-y-2 flex flex-col'>
          <div><h1 className='text-2xl tablet:text-4xl font-bold text-[#186d76]'>Frontend Developer</h1></div>
          <div><h1 className='text-2xl tablet:text-4xl font-bold text-slate-100'>Muhammad Shayan Ali 👋</h1></div>
          <div><p className='text-xl text-center my-3 desktop:text-left text-slate-200 tablet:my-10'>
            Hi I am shayan. A full-stack developer with expertise in both frontend and backend developer based in Karachi, Pakistan. 🎈 {}
          </p></div>
          <div className='flex gap-3'>
            <Link href={'https://github.com/shayanAmarAly'}>
              <Image src={git} alt={""} className={"w-8 h-8"}></Image></Link>
            <Link href={"https://www.linkedin.com/in/shayan-amaraly-907800247/"}>
              <Image src={linkedin} alt={""} className={"w-8 h-8"}></Image>
            </Link>
          </div>
        </div>
        <div className='tablet:w-3/4 tablet:m-auto desktop:p-5 tablet:py-10 '>
          <Image src={heroImg} alt={"shayan FED"} className={"p-5"}></Image>
        </div>
      </div>
    </>
  )
}

export default Hero
