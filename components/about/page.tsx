import Image from 'next/image'
import React from 'react'
import fb from "../../public/Fb.png"
import twitter from "../../public/twitter.png"
import git from "../../public/git.png"
import about from "../../public/about.jpg"
import info from "../../public/information.png"

const About = () => {
  return (
    <div className='imageBG bg-cover bg-center flex flex-col tablet:w-full tablet:m-auto tablet:bg-slate-800 tablet:flex-row tablet:h-[50rem]'>
      <div className='w-11/12 tablet:w-1/2 m-auto flex flex-col justify-center items-center pt-10'>
        <Image src={about} alt={""} width={"0"} height={"0"} className={"w-48 h-48 border-8 rounded-full border-[#0bb0af]"}></Image>
        <h1 className='text-3xl font-bold mt-5 text-gray-100'>M SHAYAN ALY</h1>
        <div className='flex space-x-5 py-3'>
          <Image src={git} alt={"social media"}></Image>
          <Image src={twitter} alt={"social media"}></Image>
          <Image src={fb} alt={"social media"}></Image>
        </div>
      </div>
      <div className='space-x-3 tablet:w-2/3 tablet:mx-20 tablet:mt-[18%] desktop:mt-[17%] tablet:pt-12 desktop:pt-0'>
        <div className='flex items-baseline space-x-3 mx-3 text-gray-300'>
          <Image src={info} className={"w-5"} alt={"about shayan"}></Image>
          <h1 className='text-2xl font-bold mt-5 desktop:text-3xl'>About</h1>
        </div>
        <h3 className='text-2xl font-bold mt-3 desktop:text-3xl text-gray-200'>Frontend Developer</h3>
        <p className='mt-3 pb-10 text-gray-300'>I am a Full Stack Developer. As a Full Stack 
        Developer, I am responsible for designing, building, and maintaining web applications from front to back. 
        I have a solid understanding of both the front-end and back-end technologies required to create a dynamic and interactive user experience.
          <br /><br />
          On the front-end, I am proficient in HTML, CSS, and JavaScript, as well as various front-end frameworks such as React, Angular, and Vue.
          On the back-end, I am experienced in server-side technologies such as Node.js, Ruby on Rails, and Django. 
          </p>
      </div>
    </div>
  )
}

export default About
