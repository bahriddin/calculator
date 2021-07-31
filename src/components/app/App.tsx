import "./App.css";
import DigitsRow from "../digitsRow/DigitsRow";
import { Container, Row, Col } from "react-bootstrap";
import { RiParenthesesFill } from "react-icons/ri";
import { RiDivideFill } from "react-icons/ri";
import { FiX } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
// import { TiBackspaceOutline } from 'react-icons/ti';
import DigitBtn from "../digitBtn/DigitBtn";

function App() {
  return (
    <Container>
      <div className="height-100">
        <div className="height-45 top-sec">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
          veniam.s
        </div>
        <div className="height-55 bottom-sec">
          <div className="py-4 h-100 d-flex flex-column justify-content-between align-items-center">
            <Row xs={4}>
              <Col>
                <DigitBtn digit={1} />
              </Col>
              <Col>
                <DigitBtn digit={2} />
              </Col>
              <Col>
                <DigitBtn digit={3} />
              </Col>
              <Col>
                <DigitBtn digit={4} />
              </Col>
            </Row>

            <Row xs={4}>
              <Col>
                <DigitBtn digit={1} />
              </Col>
              <Col>
                <DigitBtn digit={2} />
              </Col>
              <Col>
                <DigitBtn digit={3} />
              </Col>
              <Col>
                <DigitBtn digit={4} />
              </Col>
            </Row>

            <Row xs={4}>
              <Col>
                <DigitBtn digit={1} />
              </Col>
              <Col>
                <DigitBtn digit={2} />
              </Col>
              <Col>
                <DigitBtn digit={3} />
              </Col>
              <Col>
                <DigitBtn digit={4} />
              </Col>
            </Row>

            <Row xs={4}>
              <Col>
                <DigitBtn digit={1} />
              </Col>
              <Col>
                <DigitBtn digit={2} />
              </Col>
              <Col>
                <DigitBtn digit={3} />
              </Col>
              <Col>
                <DigitBtn digit={4} />
              </Col>
            </Row>

            <Row xs={4}>
              <Col>
                <DigitBtn digit={1} />
              </Col>
              <Col>
                <DigitBtn digit={2} />
              </Col>
              <Col>
                <DigitBtn digit={3} />
              </Col>
              <Col>
                <DigitBtn digit={4} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
