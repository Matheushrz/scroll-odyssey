import React from 'react'
import { motion } from 'framer-motion'
import { Stars } from './components/Stars'

export default function App(){
  return (
    <div className="relative">
      <Stars />
      <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
          <a href="#" className="font-orbitron text-xl font-bold text-space-cyan">Lost Planets</a>
          <nav className="hidden md:flex gap-6 text-sm text-white/80">
            <a href="#intro" className="hover:text-white">Intro</a>
            <a href="#nyx" className="hover:text-white">Planet Nyx</a>
            <a href="#aether" className="hover:text-white">Planet Aether</a>
            <a href="#umbra" className="hover:text-white">Planet Umbra</a>
          </nav>
        </div>
      </header>

      {/* Intro */}
      <section id="intro" className="section min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:1}} className="font-orbitron text-5xl md:text-7xl font-extrabold">
          Scroll Odyssey
        </motion.h1>
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.4,duration:1}} className="mt-4 max-w-2xl text-lg text-white/80">
          A journey through the forgotten corners of the galaxy. Discover worlds unseen and secrets untold.
        </motion.p>
      </section>

      {/* Planet Nyx */}
      <section id="nyx" className="section min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div initial={{opacity:0,scale:.8}} whileInView={{opacity:1,scale:1}} transition={{duration:1}} className="planet w-48 h-48 animate-float"></motion.div>
        <h2 className="font-orbitron text-4xl mt-8">Planet Nyx</h2>
        <p className="mt-4 max-w-xl text-center text-white/70">
          An icy world where oceans are frozen into glass-like plains. Its surface reflects the faint light of distant stars.
        </p>
      </section>

      {/* Planet Aether */}
      <section id="aether" className="section min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div initial={{opacity:0,scale:.8}} whileInView={{opacity:1,scale:1}} transition={{duration:1}} className="planet w-56 h-56 animate-pulseGlow bg-gradient-to-tr from-space-purple to-space-cyan"></motion.div>
        <h2 className="font-orbitron text-4xl mt-8">Planet Aether</h2>
        <p className="mt-4 max-w-xl text-center text-white/70">
          Wrapped in violet storms, Aether crackles with endless lightning. The air itself glows in radiant hues.
        </p>
      </section>

      {/* Planet Umbra */}
      <section id="umbra" className="section min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div initial={{opacity:0,scale:.8}} whileInView={{opacity:1,scale:1}} transition={{duration:1}} className="planet w-44 h-44 animate-float bg-gradient-to-br from-black to-space-purple"></motion.div>
        <h2 className="font-orbitron text-4xl mt-8">Planet Umbra</h2>
        <p className="mt-4 max-w-xl text-center text-white/70">
          Shrouded in darkness, Umbra barely reflects any light. Its horizon is lit only by the glow of dying suns.
        </p>
      </section>

      {/* Ending */}
      <section id="end" className="section min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h2 className="font-orbitron text-4xl">Infinity Awaits</h2>
        <p className="mt-4 max-w-xl text-white/70">
          The voyage never truly ends. The universe expands beyond imagination, waiting for explorers like you.
        </p>
        <a href="https://github.com/Matheushrz" target="_blank" className="mt-6 px-6 py-3 rounded-xl bg-space-purple hover:bg-space-glow text-white font-medium shadow-lg">
          Join the Journey
        </a>
      </section>
    </div>
  )
}
