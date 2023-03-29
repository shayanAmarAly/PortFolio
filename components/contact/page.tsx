import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import whatsapp from "../../public/whatsapp.png"
import email from "../../public/gmail.png"
import linkedIn from "../../public/linkedin2.png"
import git from "../../public/github5.png"

const Contact = () => {
  return (
    <div className="text-center tablet:m-auto tablet:w-11/12 text-slate-500">
      <div className='px-3'>
        <h1 className="text-2xl font-bold my-10 tablet:text-5xl tablet:my-14 text-slate-300 ">Contact</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, ipsum?</p>
      </div>
      <div className="m-5 my-5 tablet:m-auto tablet:w-5/6 tablet:my-20 tablet:grid tablet:grid-cols-2 tablet:grid-rows-2 tablet:gap-10">
        <div className="flex items-center ">
          <Image src={whatsapp} alt="" className='w-[25px]' />
          <p className='text-lg font-bold ml-5'>+92 3468742593</p>
        </div>
        <div className="flex w-1/2 items-center my-2">
<<<<<<< HEAD
          <Image src={git} alt="" className='w-[25px]' />
=======
          <Image src={git} alt="" className='w-[10%]' />
>>>>>>> fc2e268c1f37c87b2b435a485033d3e229c7f0e2
          <Link href={'https://github.com/shayanAmarAly/'}>
          <p className='text-lg font-bold ml-5 text-ellipsis'>github.com</p></Link>
        </div>
        <div className="flex w-full items-center ">
          <Image src={email} alt="" className='w-[25px]' />
          <Link href={"shayanamaraly@gmail.com"}>
<<<<<<< HEAD
            <p className='text-lg font-bold ml-5 truncate tablet:text-clip'>shayan117@gmail.com</p></Link>
=======
            <p className='text-lg font-bold ml-5 truncate tablet:text-clip'>shayanamaraly69@gmail.com</p></Link>
>>>>>>> fc2e268c1f37c87b2b435a485033d3e229c7f0e2
        </div>
        <div className="flex w-1/2 items-center my-2">
          <Image src={linkedIn} alt="" className='w-[25px]' />
          <Link href={"https://www.linkedin.com/in/shayan-amaraly-907800247/"}>
            <p className='text-lg font-bold ml-5'>Linkedin.com</p></Link>
        </div>
      </div>
    </div>

  )
}

export default Contact
