import { Navbar, Nav , Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <Router>
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="/">
        <h2 className="nav-logo">logo</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">

            <a href="https://www.linkedin.com/in/aya-sayed-81446a24a"><h5><FaLinkedinIn/></h5></a>
            <a href="https://www.facebook.com/profile.php?id=100022549220946&mibextid=ZbWKwL"><h5><FaFacebookF/></h5></a>
            <a href="https://instagram.com/ayasayed5196?igshid=MzNlNGNkZWQ4Mg=="><h5><FaInstagram/></h5></a>
          </div>
          <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
          </HashLink>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </Router>
      );
};
