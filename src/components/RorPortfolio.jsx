import {useState,useEffect} from 'react'
import {
  dataProjects,
  dataCertifications,
  dataProblemSolution,
} from "./data/dataProjects";
import ProjectCard from "./ProjectCard";
import { useMediaQuery } from "react-responsive";

const RorPortfolio = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 991px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });
  const [myWidth, setMyWidth] = useState('100vw');
  useEffect(() => {
    if (isMobile) {
      setMyWidth('100vw')
    } else if (isTablet) {
      setMyWidth('50vw')
    } else if (isDesktop) {
      setMyWidth('50vw')
    }
  }, [isMobile, isTablet, isDesktop]);
  useEffect(() => {
    console.log(myWidth);
  },[myWidth]);
  return (
    <div className="d-flex bg-dark justify-content-between align-items-center">
      <div style={{overflow:'auto', width:'30vw', maxHeight:'100vh'}} className="">
        <h2 className="text-center my-3 border rounded text-white mx-5 fs-1 py-3">
          Problem Solution
        </h2>
        <div className="d-flex flex-wrap justify-content-center align-items-center mx-3 my-3 gap-3">
          {dataProblemSolution.map((problem) => (
            <ProjectCard key={problem.id} project={problem} />
          ))}
        </div>
      </div>
      <div style={{overflow:'auto', width:'30vw', maxHeight:'100vh'}}>
        <h2 className="text-center my-3 border rounded text-white mx-5 fs-1 py-3">
          Projects
        </h2>
        <div className="d-flex flex-wrap justify-content-center align-items-center mx-3 my-3 gap-3">
          {dataProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div style={{overflow:'auto', width:'30vw', maxHeight:'100vh'}}>
        <h2 className="text-center my-3 border rounded text-white mx-5 fs-1 py-3">
          Certifications
        </h2>
        <div  className="d-flex flex-wrap justify-content-center align-items-center mx-3 my-3 gap-3">
          {dataCertifications.map((cert) => (
            <ProjectCard key={cert.id} project={cert} isCert={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RorPortfolio;
