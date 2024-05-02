//import React, { Children } from 'react'
import { useState, useEffect } from "react";
import MyNavbar from "../components/MyNavbar";
import PropTypes from "prop-types";

const BasicTemplate = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    //console.log(position);
    setScrollPosition(position);
  };
  useEffect(() => {
    // Agregar evento de desplazamiento cuando el componente se monta
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento de desplazamiento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {}, [scrollPosition]);
  return (
    <>
      <header
        style={{
          position: scrollPosition === 0 ? "static" : "fixed",
          zIndex: "99999",
        }}
        className="w-100"
      >
        <MyNavbar />
      </header>
      <main>{children}</main>
      <footer className="">
        <div className="alert alert-info text-center">
          Internship Prodigy Infotech 2024
        </div>
      </footer>
    </>
  );
};

BasicTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicTemplate;
