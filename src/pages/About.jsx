//import React from 'react'
import fotoCV from '../assets/fotoCVROR.png';
import TextContent from '../components/TextContent';

const About = () => {
  return (
    <div>
        <img src={fotoCV} alt="fotoCV" className='my-3 ms-auto me-auto d-block' />
        <TextContent />
    </div>
  )
}

export default About