//import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { FaCode } from "react-icons/fa";

const ModalCard = ({project, showModal, setShowModal, isCert}) => {
    const {title, description, url, imageURL, codeLink} = project
    const handleClose = () => setShowModal(false);
  return (
    <div>
    <Modal   show={showModal} onHide={handleClose} centered>
        <Modal.Header className='bg-light' closeButton>
          <Modal.Title >
            <div className='d-flex justify-content-center align-items-center gap-2'>
            <img src={imageURL} alt={title} style={{width:'50px'}}/>
            <span>{title}</span>
            </div>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-light'>
          <span>{description}</span>
          
          </Modal.Body>
        {!isCert &&
        <Modal.Footer className='bg-light'>
        <Link className='btn btn-outline-success' to={url}>GO</Link>
      {codeLink && <Button variant="outline-secondary" href={codeLink}><FaCode/></Button>}
      
    </Modal.Footer>
        }
        
      </Modal>
      </div>
  )
}

ModalCard.propTypes = {
    project: PropTypes.object.isRequired,
    showModal: PropTypes.bool.isRequired,
    setShowModal: PropTypes.func.isRequired,
    isCert: PropTypes.bool
    }

export default ModalCard