import "./App.css";
import {useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import DigitBtn from "../digitBtn/DigitBtn";
import BackspaceBtn from '../backspaceBtn/BackspaceBtn';
import SymbolBtn from "../symbolBtn/SymbolBtn";

export type DigitBtnType = { digit: number; color?: string; bg?: string, clickDigit: Function };
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

function App() {
  const [result, setResult] = useState<string>('');

  function clickDigit(digit: number) {
    setResult((prev) => prev + String(digit));
  }

  function clickSymbol(symbol: string) {
    const symbols = ['C', '( )', '%', '÷', '×', '-', '+', '='];
    const index = symbols.indexOf(symbol);

    switch (index) {
      case 0: 
        setResult('');
    }
  }

  return (
    <Container>
      <div className="height-100 px-2">
        <div className="height-44 top-sec d-flex flex-column justify-content-between">
          <h1>{result}</h1>
          <div className="mb-4 pr-3 d-flex justify-content-end">
            <BackspaceBtn />
          </div>
        </div>
        <div className="height-56 bottom-sec">
          <div className="py-4 h-100 d-flex flex-column justify-content-between align-items-center">
            <Row xs={4}>
              <Col>
                <SymbolBtn sign="C" color="#e1694e" clickSymbol={clickSymbol} />
              </Col>
              <Col>
                <SymbolBtn sign="( )" color="#68b31a" clickSymbol={clickSymbol} />
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
                <SymbolBtn sign="-" color="#68b31a" clickSymbol={clickSymbol}  />
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
                <SymbolBtn sign="=" color="#fff" bg="#68b31a" clickSymbol={clickSymbol} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
