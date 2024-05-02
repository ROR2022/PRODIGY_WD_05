import Offcanvas from "react-bootstrap/Offcanvas";
import PropTypes from "prop-types";
import BasicNav from "./BasicNav";

const MyOffCanvas = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton className="">
        <Offcanvas.Title>Internship Prodigy Infotech</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <BasicNav isOffcanvas={true} handleCloseOffcanvas={handleClose} />
      </Offcanvas.Body>
      <footer className="">
        <div className="alert alert-info text-center">
          Internship Prodigy Infotech 2024
        </div>
      </footer>
    </Offcanvas>
  );
};

MyOffCanvas.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default MyOffCanvas;
