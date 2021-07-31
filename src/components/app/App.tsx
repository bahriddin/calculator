import "./App.css";
// import DigitsRow from "../digitsRow/DigitsRow";
import { Container, Row, Col } from "react-bootstrap";
import { RiParenthesesFill } from "react-icons/ri";
import { RiDivideFill } from "react-icons/ri";
import { FiX } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
// import { TiBackspaceOutline } from 'react-icons/ti';
import DigitBtn from "../digitBtn/DigitBtn";
import ClearBtn from "../clearBtn/ClearBtn";
import ParenBtn from "../parenBtn/ParenBtn";
import RemainBtn from "../remainBtn/RemainBtn";
import DivideBtn from "../divideBtn/DivideBtn";
import MultiplyBtn from '../multiplyBtn/MultiplyBtn';
import MinusBtn from '../minusBtn/MinusBtn';
import PlusBtn from '../plusBtn/PlusBtn';
import EqualBtn from '../equalBtn/EqualBtn';

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
                <ClearBtn sign="C" color="#e1694e" />
              </Col>
              <Col>
                <ParenBtn sign={<RiParenthesesFill />} color="#68b31a" />
              </Col>
              <Col>
                <RemainBtn sign="%" color="#68b31a" />
              </Col>
              <Col>
                <DivideBtn sign={<RiDivideFill />} color="#68b31a" />
              </Col>
            </Row>

            <Row xs={4}>
              <Col>
                <DigitBtn digit={7} />
              </Col>
              <Col>
                <DigitBtn digit={8} />
              </Col>
              <Col>
                <DigitBtn digit={9} />
              </Col>
              <Col>
                <MultiplyBtn sign={<FiX />} color="#68b31a" />
              </Col>
            </Row>

            <Row xs={4}>
              <Col>
                <DigitBtn digit={4} />
              </Col>
              <Col>
                <DigitBtn digit={5} />
              </Col>
              <Col>
                <DigitBtn digit={6} />
              </Col>
              <Col>
                <MinusBtn sign={<FiMinus />} color="#68b31a" />
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
                <PlusBtn sign={<FiPlus />} color="#68b31a" />
              </Col>
            </Row>

            <Row xs={4}>
              <Col>
                <DigitBtn digit={1} />
              </Col>
              <Col>
                <DigitBtn digit={0} />
              </Col>
              <Col>
                <DigitBtn digit={3} />
              </Col>
              <Col>
                <EqualBtn sign="=" color="#fff" bg="#68b31a" />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
