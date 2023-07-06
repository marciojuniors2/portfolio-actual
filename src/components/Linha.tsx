import React, { useState, useEffect } from 'react'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { FaReact } from 'react-icons/fa'

interface LineEffectProps {
  scrolly: number
}

interface LineStyle {
  height: string
  transition: string
  background: string
  width: string
  position: 'absolute'
  top: string
  left: string
  boxShadow: string
}

const Linha: React.FC<LineEffectProps> = ({ scrolly }) => {
  const sectionHeight = 100 // Altura de cada seção em vh
  const sectionCount = 3 // Número de seções
  const totalHeight = sectionHeight * sectionCount // Altura total da página em vh

  const [lineHeight, setLineHeight] = useState(sectionHeight) // Altura inicial da linha é a altura da primeira seção

  useEffect(() => {
    const newLineHeight = Math.min(sectionHeight + scrolly, totalHeight) // Calcular a nova altura da linha
    setLineHeight(newLineHeight)
  }, [scrolly])

  const lineStyle: LineStyle = {
    height: `${lineHeight}vh`,
    transition: '4s',
    background: `linear-gradient(to bottom, #00FFFF ${
      (lineHeight / totalHeight) * 100
    }%, #FF1493 ${(lineHeight / totalHeight) * 10}%)`,
    width: '3px',
    position: 'absolute',
    top: '0',
    left: '80px',
    boxShadow: '0px 0px 10px rgba(246, 240, 240, 0.5)',
  }

  const icon1Opacity = Math.min(lineHeight / (sectionHeight * 1.5), 1)
  const icon2Opacity = Math.min(
    (lineHeight - sectionHeight * 1.6) / (sectionHeight * 0.4),
    1,
  )

  return (
    <>
      <div style={lineStyle}></div>
      <div className="icon1" style={{ opacity: icon1Opacity }}>
        <FaReact className="reactIcon" color="white" size={40} />
      </div>
      <div className="icon2" style={{ opacity: icon2Opacity }}>
        <MdOutlineWorkOutline className="past" color="white" size={40} />
      </div>
      <p
        style={{ position: 'fixed', top: '10px', left: '10px', color: 'white' }}
      >
        Altura da linha: {lineHeight}vh
      </p>
    </>
  )
}

export default Linha
