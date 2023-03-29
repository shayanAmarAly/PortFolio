import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import JS from "../../public/JS.gif"
import Next from "../../public/nextGIF.gif"
import tail from "../../public/tail.gif"

const Skills = () => {
  return (
    <>
      <h1 className='text-center font-bold text-3xl tablet:text-6xl text-gray-100 my-16'> Portfolio </h1>
      <div className="flex flex-wrap justify-evenly gap-5 px-5 tablet:px-2">
        <div className="bg-slate-100 w-80 ">
          <img src="https://media.tenor.com/ZmeOX7hgUfUAAAAd/reactjs-nextjs.gif" alt="" className="w-80"/>
            <h1 className="font-bold p-2 text-2xl my-3">Panaverse website</h1>
            <p className="text-xl p-2 my-2">This project is based on next and tailwind css</p>
            <button className="border-2 border-slate-800 rounded my-5 mx-2 p-2">
      <Link href="https://github.com/shayanAmarAly/PANAVERSE">
      Checkout repo</Link></button>
        </div>
        <div className="bg-slate-100 w-80 ">
          <img src="https://media4.giphy.com/media/l0HlTy9x8FZo0XO1i/200.webp?cid=ecf05e47tq6490hjuc8qckdgbuccrkwghtaqk4gac1la81hb&rid=200.webp&ct=g" alt="" className="w-80"/>
            <h1 className="font-bold p-2 text-2xl my-3">Todo app</h1>
            <p className="text-xl p-2 my-2">This project is based on next and tailwind css</p>
            <button className="border-2 border-slate-800 rounded my-5 mx-2 p-2">
      <Link href="https://github.com/shayanAmarAly/todo-app">
      Checkout repo</Link></button>
        </div>
        <div className="bg-slate-100 w-80 ">
          <img src="https://allma.si/blog/wp-content/uploads/2020/12/nextjs-app.gif" alt="" className="w-80"/>
            <h1 className="font-bold p-2 text-2xl my-3">Javascript projects</h1>
            <p className="text-xl p-2 my-2">This project is based on next and tailwind css</p>
            <button className="border-2 border-slate-800 rounded my-5 mx-2 p-2">
      <Link href="https://github.com/shayanAmarAly/JavaScript_practice_piaic38">
      Checkout repo</Link></button>
        </div>

      </div>
    </>
  )
}

export default Skills
