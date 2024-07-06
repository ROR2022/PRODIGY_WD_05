//import React from 'react'
import { dataProjects, dataCertifications, dataProblemSolution } from './data/dataProjects'
import ProjectCard from './ProjectCard'

const RorPortfolio = () => {
  return (
    <div>
      <h2 className='text-center my-3 alert alert-success mx-5 fs-1'>Problem Solution</h2>
      <div className='d-flex flex-wrap justify-content-between align-items-center mx-3 my-3 gap-3'>
        {dataProblemSolution.map((problem) => 
            <ProjectCard key={problem.id} project={problem} />
        )}
    </div>
    <h2 className='text-center my-3 alert alert-success mx-5 fs-1'>Projects</h2>
    <div className='d-flex flex-wrap justify-content-between align-items-center mx-3 my-3 gap-3'>
        {dataProjects.map((project) => 
            <ProjectCard key={project.id} project={project} />
        )}
    </div>
    <h2 className='text-center my-3 alert alert-success mx-5 fs-1'>Certifications</h2>
    <div className='d-flex flex-wrap justify-content-between align-items-center mx-3 my-3 gap-3'>
        {dataCertifications.map((cert) => 
            <ProjectCard key={cert.id} project={cert} isCert={true}/>
        )}
        </div>
    </div>
  )
}

export default RorPortfolio