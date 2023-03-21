import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Hero from '@/components/hero/page'
import About from '@/components/about/page'
import Portfolio from '@/components/portfolio/page'
import Skills from '@/components/skills/page'
import Contact from '@/components/contact/page'
import Footer from '@/components/footer/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>
    <Hero></Hero>
    <About/>
    <Portfolio/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  )
}
