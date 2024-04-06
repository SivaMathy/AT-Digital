import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/logo.png";
export const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="row-one">
          <Col >
            <div style={{ paddingTop: "11px", width: "413px" }}>
              <p className="tittle">
                <img
                  src={Logo}
                  width="238"
                  height="25"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </p>
              <p>
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve single objective - your
                business results.
              </p>
            </div>
          </Col>
          <Col lg="3" >
            <div>
              <p class="footer-heading">Our Technologies</p>
              <div class="footer-content">
                <ul>
                  <li>ReactJS</li>
                  <li>Gatsby</li>
                  <li>NextJS</li>
                  <li>NodeJS</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col  lg="3">
            <div>
              <p class="footer-heading">Our Services</p>
              <div class="footer-content">
                <ul>
                  <li>Social media Marketing</li>
                  <li>Web & Mobile App Development</li>
                  <li>Data & Analytics</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row-two">
          <div class="col-md-5 mx-auto horizontal-line"></div>
        </Row>
        <Row className="row-three">
          <div className="col-md-3 mx-auto">
            Privacy Policy | Terms & Conditions
          </div>
        </Row>
      </Container>
    </div>
  );
};
