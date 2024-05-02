//import React from 'react'
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoProdigy from "../assets/logoProdigy.jpeg";
import { FaCode } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";
import { BiSpreadsheet } from "react-icons/bi";
import { CgLoadbarDoc } from "react-icons/cg";
import { IoMdLogIn } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { BsStopwatch } from "react-icons/bs";
import { RiGalleryView2 } from "react-icons/ri";
import { GiTicTacToe } from "react-icons/gi";
import PropTypes from "prop-types";

const TitleDropdown = ({isOffcanvas}) => {
  return (
    <span className={isOffcanvas===true?"btn btn-outline-info w-100":"btn btn-outline-info"}>
      <PiLinkSimpleBold style={{ width: "50px" }} />
    </span>
  );
};
TitleDropdown.propTypes = {
  isOffcanvas: PropTypes.bool,
};

const urlLogoMiniso="https://minisolove.miniso.com.mx/logoMinisoIco192.png";

const BasicNav = ({ isOffcanvas, handleCloseOffcanvas }) => {

  const handleClose = () => {
    if (handleCloseOffcanvas) {
      handleCloseOffcanvas(true);
    }
  }
  return (
    <Nav className={isOffcanvas === true ? "d-flex flex-column" : "ms-auto"}>
      <Nav.Link href="#/about" className={isOffcanvas===true?'w-100':''} onClick={handleClose}>
        <div className={isOffcanvas===true?"btn btn-outline-info w-100":"btn btn-outline-info"}>
          <span className="d-flex justify-content-center align-items-center ">
            <BiSpreadsheet style={{ width: "30px" }} />
            CV
          </span>
        </div>
      </Nav.Link>
      <Nav.Link href="#/contact" className={isOffcanvas===true?'w-100':''} onClick={handleClose}>
        <div className={isOffcanvas===true?"btn btn-outline-info w-100":"btn btn-outline-info"}>
          <span className="d-flex justify-content-center align-items-center">
            <CgLoadbarDoc style={{ width: "30px" }} />
            CL
          </span>
        </div>
      </Nav.Link>
      <Nav.Link href="#/stopwatch" className={isOffcanvas===true?'w-100':''} onClick={handleClose}>
        <div className={isOffcanvas===true?"btn btn-outline-info w-100":"btn btn-outline-info"}>
          <span className="d-flex justify-content-center align-items-center">
            <BsStopwatch style={{ width: "30px" }} />
            Stopwatch
          </span>
        </div>
      </Nav.Link>
      <Nav.Link href="#/tictactoe" className={isOffcanvas===true?'w-100':''} onClick={handleClose}>
        <div className={isOffcanvas===true?"btn btn-outline-info w-100":"btn btn-outline-info"}>
          <span className="d-flex justify-content-center align-items-center">
            <GiTicTacToe style={{ width: "30px" }} />
            Tic-Tac-Toe
          </span>
        </div>
      </Nav.Link>
      <Nav.Link href="#/portfolio" className={isOffcanvas===true?'w-100':''} onClick={handleClose}>
        <div className={isOffcanvas===true?"btn btn-outline-info w-100":"btn btn-outline-info"}>
          <span className="d-flex justify-content-center align-items-center">
            <RiGalleryView2 style={{ width: "30px" }} />
            Portfolio
          </span>
        </div>
      </Nav.Link>
      <NavDropdown title={<TitleDropdown isOffcanvas={isOffcanvas} />} id="basic-nav-dropdown">
        <NavDropdown.Item href="https://prodigyinfotech.dev/">
          <div className="d-flex justify-content-start align-items-center">
            <img
            className="rounded-circle"
              style={{ width: "30px" }}
              src={logoProdigy}
              alt="logoProdigy"
            />
            <span className="ms-2">Prodigy Infotech</span>
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item href="https://www.linkedin.com/in/ramiro-ocampo-5a661b1a7/">
          <div className="d-flex justify-content-start align-items-center">
            <FaLinkedin style={{ width: "50px", marginLeft:'-10px', marginRight:'-5px' }} className="" />
            <span>Developer ReactJS-NodeJS</span>
          </div>
        </NavDropdown.Item>

        <NavDropdown.Item href="https://minisolove.miniso.com.mx/">
          <div className="d-flex justify-content-start align-items-center gap-2">
          <img className="rounded-circle ms-1" style={{width:'20px'}} src={urlLogoMiniso} alt="logoMiniso" />
          <span>Minisolove</span>
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item href="http://18.116.42.126/">
          <div className="d-flex justify-content-start align-items-center">
            <IoMdLogIn style={{ width: "50px", marginLeft:'-10px', marginRight:'-5px' }}  className=""/>
          <span>Basic Login app</span>
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/ROR2022">
          <div className="d-flex justify-content-start align-items-center">
            <FaGithub style={{ width: "50px", marginLeft:'-10px', marginRight:'-5px' }} className="" />
          <span>Github</span>
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/ROR2022/PRODIGY_WD_05">
          <div className="d-flex justify-content-start align-items-center">
          <FaCode style={{ width: "50px", marginLeft:'-10px', marginRight:'-5px' }} />
          <span>Code</span>
          </div>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://docs.google.com/document/d/104ek8dOTdOU6RcDMtGT-g1T--FWxq2earIDvMZoQ79E/edit?usp=sharing">
          CV_Dev_ReactJS-NodeJS
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

BasicNav.propTypes = {
  isOffcanvas: PropTypes.bool.isRequired,
  handleCloseOffcanvas: PropTypes.func,
};

export default BasicNav;
