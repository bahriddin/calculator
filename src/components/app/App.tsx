import "./App.css";
import DigitBtn from "../digitBtn/DigitBtn";
import BackspaceBtn from "../backspaceBtn/BackspaceBtn";
import SymbolBtn from "../symbolBtn/SymbolBtn";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { addDigit } from "../../functions";
import { eraseLastChar } from "../../functions";
import { clickPars } from "../../functions";
import { clickPercent } from "../../functions";
import { clickDivide } from "../../functions";
import { clickMultiply } from '../../functions'; 
import { clickSubt } from '../../functions';
import { clickAdd } from '../../functions';
import { lastCal } from '../../functions';
import { fixNum } from '../../functions';
import { clickPoint } from '../../functions';
import { clickOppTog } from '../../functions'; 

export type DigitBtnType = {
  digit: number;
  color?: string;
  bg?: string;
  clickDigit: Function;
};
export type SymbolBtnType = {
  sign: string;
  color?: string;
  bg?: string;
  clickSymbol: Function;
};
export type SignBtnType = {
  sign: string | number | JSX.Element;
  color?: string;
  bg?: string;
};

const SYMBOLS = ["C", "( )", "%", "÷", "×", "-", "+", "=", ".", "+/-"];
let OPARS = 0;

function App() {
  const [express, setExpress] = useState<Array<string>>([]);

  function clickDigit(digit: number) {
    setExpress((prev) => addDigit(prev, digit));
  }

  function backspace() {
    setExpress((prev) => {
      const res = eraseLastChar(prev, OPARS);
      OPARS = res[1];
      return res[0];
    });
  }

  function clickSymbol(symbol: string) {
    const index = SYMBOLS.indexOf(symbol);

    switch (index) {
      case 0: // C
        setExpress([]);
        OPARS = 0;
        break;

      case 1: // ()
        setExpress((prev) => {
          const res = clickPars(prev, OPARS);
          OPARS = res[1];
          return res[0];
        });
        break;

      case 2: // %
        setExpress((prev) => clickPercent(prev));
        break;

      case 3: // ÷
        setExpress((prev) => clickDivide(prev));
        break;

      case 4: // ×
        setExpress((prev) => clickMultiply(prev));
        break;

      case 5: // -
        setExpress((prev) => clickSubt(prev));
        break;

      case 6: // +
        setExpress((prev) => clickAdd(prev));
        break;

      case 7: // =
        setExpress((prev) => {
          const res = lastCal(prev, OPARS);
          OPARS = res[1];
          return [fixNum(res[0][0])];
        });
        break;

      case 8: // .
        setExpress((prev) => clickPoint(prev));
        break;

      case 9: // +/-
        setExpress((prev) => {
          const res = clickOppTog(prev, OPARS);
          OPARS = res[1];
          return res[0];
        });
        break;
    }
  }

  return (
    <Container>
      <div className="height-100 px-2">
        <div className="height-44 top-sec d-flex flex-column justify-content-between">
          <h1>{express}</h1>
          <div className="mb-4 pr-3 d-flex justify-content-end">
            <BackspaceBtn backspace={backspace} />
          </div>
        </div>
        <div className="height-56 bottom-sec">
          <div className="py-4 h-100 d-flex flex-column justify-content-between align-items-center">
            <Row xs={4}>
              <Col>
                <SymbolBtn sign="C" color="#e1694e" clickSymbol={clickSymbol} />
              </Col>
              <Col>
                <SymbolBtn
                  sign="( )"
                  color="#68b31a"
                  clickSymbol={clickSymbol}
                />
              </Col>
              <Col>
                <SymbolBtn sign="%" color="#68b31a" clickSymbol={clickSymbol} />
              </Col>
              <Col>
                <SymbolBtn sign="÷" color="#68b31a" clickSymbol={clickSymbol} />
              </Col>
            </Row>

            <Row xs={4}>
              <Col>
                <DigitBtn digit={7} clickDigit={clickDigit} />
              </Col>
              <Col>
                <DigitBtn digit={8} clickDigit={clickDigit} />
              </Col>
              <Col>
                <DigitBtn digit={9} clickDigit={clickDigit} />
              </Col>
              <Col>
                <SymbolBtn sign="×" color="#68b31a" clickSymbol={clickSymbol} />
              </Col>
            </Row>

            <Row xs={4}>
              <Col>
                <DigitBtn digit={4} clickDigit={clickDigit} />
              </Col>
              <Col>
                <DigitBtn digit={5} clickDigit={clickDigit} />
              </Col>
              <Col>
                <DigitBtn digit={6} clickDigit={clickDigit} />
              </Col>
              <Col>
                <SymbolBtn sign="-" color="#68b31a" clickSymbol={clickSymbol} />
              </Col>
            </Row>

            <Row xs={4}>
              <Col>
                <DigitBtn digit={1} clickDigit={clickDigit} />
              </Col>
              <Col>
                <DigitBtn digit={2} clickDigit={clickDigit} />
              </Col>
              <Col>
                <DigitBtn digit={3} clickDigit={clickDigit} />
              </Col>
              <Col>
                <SymbolBtn sign="+" color="#68b31a" clickSymbol={clickSymbol} />
              </Col>
            </Row>

            <Row xs={4}>
              <Col>
                <SymbolBtn sign="+/-" clickSymbol={clickSymbol} />
              </Col>
              <Col>
                <DigitBtn digit={0} clickDigit={clickDigit} />
              </Col>
              <Col>
                <SymbolBtn sign="." clickSymbol={clickSymbol} />
              </Col>
              <Col>
                <SymbolBtn
                  sign="="
                  color="#fff"
                  bg="#68b31a"
                  clickSymbol={clickSymbol}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
