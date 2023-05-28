import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { motion } from 'framer-motion'


import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
    </>
  )
}

export default About