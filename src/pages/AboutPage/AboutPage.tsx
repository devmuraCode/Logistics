import AboutUs from '@/components/aboutUs/AboutUs'
import Advantage from '@/components/advantage/Advantage'
import Headers from '@/components/headers/Headers'
import Section from '@/components/section/Section'

import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <div>
      <AboutUs />
      <Headers />
      <Advantage />
    </div>
  )
}

export default AboutPage