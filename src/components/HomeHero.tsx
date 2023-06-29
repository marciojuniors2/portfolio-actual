import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Earth from './Earth';
import { motion } from 'framer-motion';

import astro from '../../public/astro1.png'
import banner from '../../public/banner.png';

function HomeHero() {
  const [text, setText] = useState('');

  useEffect(() => {
    const helloText = 'Hello ';
    let index = 0;

    const animateText = () => {
      setText(helloText.substring(0, index + 1));
      index++;
      if (index === helloText.length) {
        index = 0;
      }
    };

    const timer = setInterval(animateText, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="-z-10 h-[95vh] w-2/3 float-right">
        <Image alt="" fill src={banner} objectFit="cover" quality={100} />
      </div>
  
      <div className="flex flex-col md:flex-row">
        <div id="left" className="w-full md:w-1/2">
          <h1>{text}</h1>
        </div>
        <div id="right" className="w-full md:w-1/2 max-2xl:mr-32 xl:items-center ">
          <div className="relative md:right-96">
            <Earth />
          </div>
  
          <div className="relative min-[374px]:bottom-1/2 left-36 lg:left-72  ">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4,
                ease: 'linear',
                repeat: Infinity
              }}
            >
              <Image alt="" className='min-[374px]:h-72 w-56 sm:h-72 w-72 md:h-[500px] md:w-[400px]' height={500} src={astro} quality={100} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default HomeHero;
