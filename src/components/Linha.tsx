import React, { ReactNode } from 'react'

interface LineEffectProps {
  screen: number
  scrolly: number
  icon?: ReactNode
}

const Linha: React.FC<LineEffectProps> = ({ scrolly, icon, screen }) => {
  const transitionDuration = 5 // Duração da transição em segundos
  const initialHeight = screen // Altura inicial em vh (viewport height)

  const lineStyle = {
    height: `${scrolly ? initialHeight : 10}vh`,
    transition: `height ${transitionDuration}s`,
    background: `linear-gradient(to bottom, #00FFFF ${
      (scrolly / (window.innerHeight - initialHeight)) * 100
    }%, #FF1493 ${(scrolly / (window.innerHeight - initialHeight)) * 10}%)`, // Gradiente com cores variáveis (mais neon)
    width: '3px',
    position: 'absolute',
    top: '0',
    left: '80px',
    boxShadow: '0px 0px 10px rgba(246, 240, 240, 0.5)', // Efeito de sombra
  }

  const showIcon = scrolly >= initialHeight / 2

  return (
    <>
      <div style={lineStyle}></div>
      {showIcon && (
        <>
          <div className="icons">{icon}</div>
        </>
      )}
    </>
  )
}

export default Linha
