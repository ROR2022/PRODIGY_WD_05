import {useState} from 'react'
import PropTypes from 'prop-types'
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalCard from './ModalCard';
import { Link } from 'react-router-dom';

const ProjectCard = ({project, isCert}) => {
    const {title, shortDescription, url, imageURL} = project;
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(true);
    }
  return (
    <Card style={{ width: isCert?'36rem':'18rem' }} className='bg-warning bg-opacity-10'>
        {showModal && <ModalCard project={project} showModal={showModal} setShowModal={setShowModal} isCert={isCert}/>}
      <Card.Img variant="top" src={imageURL} style={{height:'400px', cursor:'pointer'}}   className='px-2 pt-2' onClick={handleModal}/>
      <Card.Body>
        <Card.Title>
            <div className='text-center'>
            {title}
            </div>
            </Card.Title>
        <Card.Text>
          <span className={isCert?'text-center w-100 d-block':''}>
            {shortDescription}
            </span>
        </Card.Text>
        
        {!isCert &&
          <Link className='btn btn-outline-success' to={url}>GO THERE</Link>
        }
        
      </Card.Body>
    </Card>
  )
}

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
    isCert: PropTypes.bool
    }

export default ProjectCard