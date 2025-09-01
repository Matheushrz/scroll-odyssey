import React from 'react'

export const Nebula: React.FC = () => {
  return (
    <div className="nebula fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-32 w-[48rem] h-[48rem] rounded-full bg-nebula-600/25 blur-[120px] animate-nebula-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[52rem] h-[52rem] rounded-full bg-aura-500/20 blur-[120px] animate-nebula-pulse" style={{animationDelay:'-6s'}}></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-nebula-400/16 blur-[100px]"></div>
    </div>
  )
}
