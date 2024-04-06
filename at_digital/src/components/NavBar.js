import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div>
      <Navbar 
        expand="lg"
        className={scrolled ? "scrolled" : ""}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="238"
              height="25"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="white-toggler-icon ">
            <span className="navbar-toggler-icon">
          
            </span>
          </Navbar.Toggle>

          <Navbar.Collapse
            id="basic-navbar-nav text"
            className="justify-content-end"
          >
            <Nav className="ms-auto ">
              <Nav.Link href="#service" style={{color:'white' ,fontSize:'14px'}}>
                SERVICES
              </Nav.Link>
              <Nav.Link href="#aboutus" style={{color:'white' ,fontSize:'14px'}}>
                ABOUT US
              </Nav.Link>
              <Nav.Link href="#contactus" style={{color:'white' ,fontSize:'14px'}}>
                CONTACT US
              </Nav.Link>
              <Nav.Link href="#careers" style={{color:'white' ,fontSize:'14px'}}>
                CAREERS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
