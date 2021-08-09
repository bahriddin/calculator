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

const SYMBOLS = ["C", "( )", "%", "÷", "×", "-", "+", "=", ".", "+/-"];

function App() {
  const [express, setExpress] = useState<Array<string>>([]);

  function clickDigit(digit: number) {
    setExpress((prev) => {
      const symbols = ["%", "÷", "×", "-", "+"];
      const sliced = prev.slice();
      const last = sliced.splice(sliced.length - 1, 1)[0];

      if (last === undefined) {
        return [`${digit}`];
      } else {
        if (!symbols.includes(last)) {
          return [...sliced, last + `${digit}`];
        } else {
          return [...sliced, last, `${digit}`];
        }
      }
    });
  }

  function backspace() {
    setExpress((prev) => {
      const sliced = prev.slice();
      const last = sliced.splice(sliced.length - 1, 1)[0];

      if (last !== undefined) {
        const len = last.length;
        let newLast = "";

        for (let i = 0; i < len - 1; i++) {
          newLast += last[i];
        }

        return newLast === "" ? [...sliced] : [...sliced, newLast];
      } else {
        return [];
      }
    });
  }

  function clickSymbol(symbol: string) {
    // const symbols = ["(", ")", "%", "÷", "×", "-", "+", ".",];
    const index = SYMBOLS.indexOf(symbol);

    switch (index) {
      case 0: // C
        setExpress([]);
        break;

      case 1: // ()
        break;

      case 2: // %
        break;

      case 3: // ÷
        setExpress((prev) => {
          const sliced = prev.slice();
          const len = sliced.length;
          const last = sliced.slice(len - 1, len)[0];

          return SYMBOLS.includes(last) || last === undefined
            ? [...sliced]
            : [...sliced, "÷"];
        });
        break;

      case 4: // ×
        setExpress((prev) => {
          const sliced = prev.slice();
          const len = sliced.length;
          const last = sliced.slice(len - 1, len)[0];

          return SYMBOLS.includes(last) || last === undefined
            ? [...sliced]
            : [...sliced, "×"];
        });
        break;

      case 5: // -
        setExpress((prev) => {
          const sliced = prev.slice();
          const len = sliced.length;
          const last = sliced.slice(len - 1, len)[0];

          return SYMBOLS.includes(last) || last === undefined
            ? [...sliced]
            : [...sliced, "-"];
        });
        break;

      case 6: // +
        setExpress((prev) => {
          const sliced = prev.slice();
          const len = sliced.length;
          const last = sliced.slice(len - 1, len)[0];

          return SYMBOLS.includes(last) || last === undefined
            ? [...sliced]
            : [...sliced, "+"];
        });
        break;

      case 7: // =
        setExpress((prev) => lastCal(prev));
        break;

      case 8: // .
        setExpress((prev) => {
          const symbols = ["+", "-", "×", "÷", '(', ')', '%'];
          const sliced = prev.slice();
          const len = sliced.length;
          const last = sliced.splice(len - 1, len)[0];
          
          if (last === undefined) {
            return [];
          }

          if (symbols.includes(last)) {
            return [...sliced, last, '.'];
          }

          if (!last.includes('.')) {
            return [...sliced, last + '.'];
          }
          else {
            return [...sliced, last];
          }
        });
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

function lastCal(express: Array<string>) {
  let sliced = express.slice();

  if (sliced.length === 0) {
    return [];
  }

  const len = sliced.length;
  const last = sliced.slice(len - 1, len)[0];

  if (!SYMBOLS.includes(last)) {
    let sLen = len;
    let newSliced: Array<string> = [];
    let res = Number(sliced[0]);

    for (let i = 1; i < sLen; i += 2) {
      if (sliced[i] === "+" || sliced[i] === "-") {
        newSliced.push(String(res), sliced[i]);
        res = Number(sliced[i + 1]);
      }

      if (sliced[i] === "×") {
        res *= Number(sliced[i + 1]);
      }

      if (sliced[i] === "÷") {
        res /= Number(sliced[i + 1]);
      }
    }

    newSliced.push(String(res));
    sliced = newSliced;
    sLen = sliced.length;
    newSliced = [sliced[0]];

    for (let i = 1; i < sLen; i += 2) {
      if (sliced[i] === "+") {
        newSliced[0] = String(Number(newSliced[0]) + Number(sliced[i + 1]));
      } else {
        newSliced[0] = String(Number(newSliced[0]) - Number(sliced[i + 1]));
      }
    }

    return [newSliced[0]];
  } else {
    return sliced;
  }
}

export default App;
