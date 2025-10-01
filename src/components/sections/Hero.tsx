'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="section-padding pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            We build software, much of it{' '}
            <span className="text-gradient">open source</span>, that aims to advance the frontier of crypto for everyone.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <p className="text-xl text-gray-600 leading-relaxed">
            Paradigm is a research-driven crypto investment firm that funds companies and protocols from their earliest stages.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
            Collaborate with us
            <ArrowRight size={20} />
          </button>
          <button className="btn-secondary text-lg px-8 py-4">
            Read the Colossus review profile
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
