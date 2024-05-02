import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import MyOffCanvas from "./MyOffCanvas";
import { useEffect, useState, useLayoutEffect } from "react";
import BasicNav from "./BasicNav";
import logoProdigy from "../assets/logoProdigy.jpeg";
import { useMediaQuery } from "react-responsive";

const MyNavbar = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [isMobile, setIsMobile] = useState(useMediaQuery({ query: "(max-width: 768px)" }));
  const [width, setWidth] = useState(window.innerWidth);
  const handleShowOffCanvas = () => setShowOffCanvas(true);
  //const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  useEffect(() => {
    if (width <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);
  return (
    <>
    {!showOffCanvas? (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <div>
            <img src={logoProdigy} alt="logoProdigy" className="rounded-circle" style={{width:'60px'}} />
          <span className="ms-2">
            {isMobile ? "Prodigy" : "Internship Prodigy Infotech"}
            
            </span>
          </div>
          </Navbar.Brand>
        <Navbar.Toggle
          onClick={handleShowOffCanvas}
          aria-controls="basic-navbar-nav"
        />
        
          <Navbar.Collapse id="basic-navbar-nav">
            <BasicNav isOffcanvas={false} />
          </Navbar.Collapse>
        
        
      </Container>
    </Navbar>
    ):
    <MyOffCanvas show={showOffCanvas} setShow={setShowOffCanvas} />
  }
    </>
  );
};

export default MyNavbar;
