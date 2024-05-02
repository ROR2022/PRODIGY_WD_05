//import React from 'react'
import { dataProjects, dataCertifications } from './data/dataProjects'
import ProjectCard from './ProjectCard'

const RorPortfolio = () => {
  return (
    <div>
    <h1 className='text-center my-3 alert alert-success mx-5'>Projects</h1>
    <div className='d-flex flex-wrap justify-content-between align-items-center mx-3 my-3 gap-3'>
        {dataProjects.map((project) => 
            <ProjectCard key={project.id} project={project} />
        )}
    </div>
    <h1 className='text-center my-3 alert alert-success mx-5' >Certifications</h1>
    <div className='d-flex flex-wrap justify-content-between align-items-center mx-3 my-3 gap-3'>
        {dataCertifications.map((cert) => 
            <ProjectCard key={cert.id} project={cert} isCert={true}/>
        )}
        </div>
    </div>
  )
}

export default RorPortfolio