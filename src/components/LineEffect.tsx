import React from 'react'

interface LineEffectProps {
  scrollY: number
}

const LineEffect: React.FC<LineEffectProps> = ({ scrollY }) => {
  const transitionDuration = 5 // Duração da transição em segundos
  const initialHeight = 100 // Altura inicial em pixels

  const lineStyle = {
    height: `${initialHeight + scrollY}px`,
    transition: `height ${transitionDuration}s`,
    background: `linear-gradient(to bottom, #FF1493 ${
      (scrollY / 100) * 50
    }%, #00FFFF ${(scrollY / 100) * 50}%)`, // Gradiente com cores variáveis (mais neon)
    width: '3px',
    position: 'fixed',
    top: '0',
    left: '90px',
    zIndex: -1,
  }

  return <div style={lineStyle}></div>
}

export default LineEffect
