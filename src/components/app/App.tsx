import "./App.css";
// import {useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { RiParenthesesFill } from "react-icons/ri";
import { RiDivideFill } from "react-icons/ri";
import { FiX } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import DigitBtn from "../digitBtn/DigitBtn";
import ClearBtn from "../clearBtn/ClearBtn";
import ParenBtn from "../parenBtn/ParenBtn";
import RemainBtn from "../remainBtn/RemainBtn";
import DivideBtn from "../divideBtn/DivideBtn";
import MultiplyBtn from "../multiplyBtn/MultiplyBtn";
import MinusBtn from "../minusBtn/MinusBtn";
import PlusBtn from "../plusBtn/PlusBtn";
import EqualBtn from "../equalBtn/EqualBtn";
import PosNegBtn from "../posNegBtn/PosNegBtn";
import PointBtn from "../pointBtn/PointBtn";
import BackspaceBtn from '../backspaceBtn/BackspaceBtn';
import SymbolBtn from "../symbolBtn/SymbolBtn";

export type DigitBtnType = { digit: number; color?: string; bg?: string };
export type SignBtnType = {
  sign: string | number | JSX.Element;
  color?: string;
  bg?: string;
};

function App() {
  // const [result, setResult] = useState<number>();

  // function addNumToRes(digit: number) {
  //   setResult((prev: number | undefined) => {
  //     if (prev !== undefined) {
  //       let strRes = prev.toString();
  //     strRes += `${digit}`;
      
  //     return Number(strRes);
  //     } 
  //     else {
  //       return digit;
  //     }
  //   });
  // }

  return (
    <Container>
      <div className="height-100 px-2">
        <div className="height-44 top-sec d-flex flex-column justify-content-between">
          <h1>0123456789</h1>
          <div className="mb-4 pr-3 d-flex justify-content-end">
            <BackspaceBtn />
          </div>
        </div>
        <div className="height-56 bottom-sec">
          <div className="py-4 h-100 d-flex flex-column justify-content-between align-items-center">
            <Row xs={4}>
              <Col>
                <SymbolBtn sign="C" color="#e1694e" />
              </Col>
              <Col>
                <SymbolBtn sign="( )" color="#68b31a" />
              </Col>
              <Col>
                <SymbolBtn sign="%" color="#68b31a" />
              </Col>
              <Col>
                <SymbolBtn sign="÷" color="#68b31a" />
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
                <SymbolBtn sign="×" color="#68b31a" />
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
                <SymbolBtn sign="-" color="#68b31a" />
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
                <SymbolBtn sign="+" color="#68b31a" />
              </Col>
            </Row>

            <Row xs={4}>
              <Col>
                <SymbolBtn sign="+/-" />
              </Col>
              <Col>
                <DigitBtn digit={0} />
              </Col>
              <Col>
                <SymbolBtn sign="." />
              </Col>
              <Col>
                <SymbolBtn sign="=" color="#fff" bg="#68b31a" />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
