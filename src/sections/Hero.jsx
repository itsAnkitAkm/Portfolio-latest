import { section } from 'motion/react-client'
import React from 'react'
import HeroText from '../components/HeroText'

function Hero() {
  return (
    <section className='flex item-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
        <HeroText />
    </section>
  )
}

export default Hero
