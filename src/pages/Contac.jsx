//import React from 'react'
import fotoCL from '../assets/fotoCoverLetter.png';
import TextContent from '../components/TextContent';

const Contac = () => {
  return (
    <div>
      <img src={fotoCL} alt="fotoCoverLetter" style={{height:'70vh'}} className='my-3 ms-auto me-auto d-block py-3'/>
      <TextContent />
      </div>
  )
}

export default Contac