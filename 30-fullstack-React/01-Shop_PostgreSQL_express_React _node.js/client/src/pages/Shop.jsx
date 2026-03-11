import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar.jsx";
import BrandBar from "../components/BrandBar.jsx";
import DeviceList from "../components/DeviceList.jsx";
import "./style.css"

const Shop = () => {
  return (
    <div>
      <Container>
          <Row className="mt-3">
              <Col md={3}>
                  <TypeBar/>
              </Col>
              <Col md={9}>
                  <BrandBar/>
                  <DeviceList />
              </Col>
          </Row>
      </Container>
    </div>
  );
};

export default Shop;
