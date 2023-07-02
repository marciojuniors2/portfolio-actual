import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Earth from './Earth'
import { motion } from 'framer-motion'
import astro from '../../public/astro1.png'
import banner from '../../public/banner.png'
// import Linha from './Linha'
// import { FaReact } from 'react-icons/fa'

interface props {
  scroll: number
}

function HomeHero({ scroll }: props) {
  const [text, setText] = useState('')

  useEffect(() => {
    const helloText = 'Hello, I am Marcio jr, <br/> Developer Full Stack'
    let index = 0

    const animateText = () => {
      setText(helloText.substring(0, index + 1))
      index++
      if (index === helloText.length) {
        index = 0
      }
    }

    const timer = setInterval(animateText, 200)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const screen = 100

  return (
    <div className={`flex flex-col w-screen h-[${screen}vh] bg-gradient-to-b`}>
      {/* <Linha
        scrolly={scroll}
        icon={
          <FaReact
            className="reactIcon animate-bounce"
            size={40}
            color="white"
          />
        }
      /> */}

      <div className="-z-10 float-right">
        <Image alt="" fill src={banner} objectFit="cover" quality={100} />
      </div>

      <div id="2divs" className="flex w-screen h-screen">
        <div id="left" className="flex  md:w-1/2 items-center justify-center">
          <h1
            className="absolute text-slate-100 top-24 text-3xl left-[50px] sm:left-32 md:text-5xl md:top-1/2 "
            dangerouslySetInnerHTML={{ __html: text }}
          ></h1>
        </div>

        <div id="right" className="flex flex-col md:w-1/2">
          <div className="flex-grow flex items-center justify-center">
            <div>
              <Earth />
            </div>
          </div>

          <div className="relative min-[374px] bottom-3/4 left-28 lg:left-64">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              <Image
                alt=""
                className="h-72 w-72 md:h-[500px] md:w-[400px]"
                src={astro}
                quality={100}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
