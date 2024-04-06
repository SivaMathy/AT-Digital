import { Container, Row, Col } from "react-bootstrap";
import Img1 from "../assets/service.png";
import Img2 from "../assets/service2.png";
import { ButtonComponent } from "./ButtonComponent";
export const Services = () => {
  return (
    <Container>
      <Row className="justify-content-md-center align-items-center serviceItems">
        <Col xs={12} md={6} className="d-flex flex-column align-items-center">
          <img
            src={Img1}
           
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Col>
        <Col  xs={12} md={6} className="d-flex flex-column align-items-center">
          <h2 className="heading">Web & Mobile App Development</h2>
          <p className="content">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <div style={{ textAlign: "left" }}>
            <ButtonComponent text="LEARN MORE"></ButtonComponent>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center align-items-center serviceItems">
        <Col xs={12} md={6} className="d-flex flex-column align-items-center">
          <h2 className="heading">Digital Strategy Consulting</h2>
          <p className="content">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <div style={{ textAlign: "left" }} >
            <ButtonComponent text="LEARN MORE"></ButtonComponent>
          </div>
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column align-items-center">
          <img
            src={Img2}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Col>
      </Row>
    </Container>
  );
};
