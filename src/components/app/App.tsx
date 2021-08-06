import "./App.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DigitBtn from "../digitBtn/DigitBtn";
import BackspaceBtn from "../backspaceBtn/BackspaceBtn";
import SymbolBtn from "../symbolBtn/SymbolBtn";

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

function App() {
  const [express, setExpress] = useState<Array<string>>(['asda', 'adsdas']);

  function clickDigit(digit: number) {
    setExpress((prev) => {
      const sliced = prev.slice();
      const len = sliced.length;
      const last = sliced.splice(len - 1, 1);
      
      sliced.push(last + String(digit));

      return sliced;
    });
  }

  function backspace() {
    setExpress((prev) => {
      const sliced = prev.slice();
      const len = sliced.length;
      const last = sliced.splice(len - 1, 1)[0];
      const lastLen = last.length;
      let lastRes = '';

      for (let i = 0; i < lastLen - 1; i++) {
        lastRes += last[i];
      }

      sliced.push(lastRes);

      return sliced;
    });
  }

  function clickSymbol(symbol: string) {
    const symbols = ["C", "( )", "%", "÷", "×", "-", "+", "=", '.', '+/-'];
    const index = symbols.indexOf(symbol);

    switch (index) {
      case 0: // C
        setExpress(['']);
        break;

      case 1: // ()
        break;

      case 2: // %
        break;

      case 3: // ÷
        break;

      case 4: // ×
        break;

      case 5: // -
        break;

      case 6: // +
        
        break;

      case 7: // =
        break;

      case 8: // .
        break;

      case 9: // +/-
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
