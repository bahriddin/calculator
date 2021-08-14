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
let OPARS = 0;

function App() {
  const [express, setExpress] = useState<Array<string>>([]);

  function clickDigit(digit: number) {
    setExpress((prev) => {
      const symbols = ["÷", "×", "-", "+", "("];
      const sliced = prev.slice();
      const last = sliced.splice(sliced.length - 1, 1)[0];

      if (last === undefined) {
        return [`${digit}`];
      } else {
        if (last === ")" || last === '%') {
          return [...sliced, last, "×", `${digit}`];
        } else {
          if (!symbols.includes(last)) {
            return [...sliced, last + `${digit}`];
          } else {
            return [...sliced, last, `${digit}`];
          }
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

        if (last[len - 1] === "(") {
          OPARS--;
        }

        if (last[len - 1] === ")") {
          OPARS++;
        }

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
    const index = SYMBOLS.indexOf(symbol);

    switch (index) {
      case 0: // C
        setExpress([]);
        OPARS = 0;
        break;

      case 1: // ()
        setExpress((prev) => {
          const symbols = ["+", "-", "÷", "×"];
          const sliced = prev.slice();
          const len = sliced.length;
          const last = sliced.slice(len - 1, len)[0];

          if (last === undefined) {
            OPARS++;
            return ["("];
          } else {
            if (last === "(") {
              OPARS++;
              return [...sliced, "("];
            } else {
              if (!isNaN(Number(last))) {
                if (OPARS === 0) {
                  OPARS++;
                  return [...sliced, "×", "("];
                } else {
                  OPARS--;
                  return [...sliced, ")"];
                }
              } else {
                if (symbols.includes(last)) {
                  OPARS++;
                  return [...sliced, "("];
                } else {
                  if (last === ")" && OPARS > 0) {
                    OPARS--;
                    return [...sliced, ")"];
                  } else {
                    OPARS++;
                    return [...sliced, "×", "("];
                  }
                }
              }
            }
          }
        });
        break;

      case 2: // %
        setExpress((prev) => {
          const symbols = ["+", "-", "×", "÷", "%", "("];
          const sliced = prev.slice();
          const len = sliced.length;
          const last = sliced.slice(len - 1)[0];

          if (sliced.length === 0 || symbols.includes(last)) {
            return sliced;
          } else {
            return [...sliced, "%"];
          }
        });
        break;

      case 3: // ÷
        setExpress((prev) => {
          const symbols = ["÷", "×", "+", "-"];
          const sliced = prev.slice();
          const len = sliced.length;
          const last = sliced.splice(len - 1, 1)[0];

          if (last === undefined) {
            return [];
          } else {
            if (last === "(") {
              return [...sliced, "("];
            } else {
              if (symbols.includes(last)) {
                return [...sliced, "÷"];
              } else {
                return [...sliced, last, "÷"];
              }
            }
          }
        });
        break;

      case 4: // ×
        setExpress((prev) => {
          const symbols = ["÷", "×", "+", "-"];
          const sliced = prev.slice();
          const len = sliced.length;
          const last = sliced.splice(len - 1, 1)[0];

          if (last === undefined) {
            return [];
          } else {
            if (last === "(") {
              return [...sliced, "("];
            } else {
              if (symbols.includes(last)) {
                return [...sliced, "×"];
              } else {
                return [...sliced, last, "×"];
              }
            }
          }
        });
        break;

      case 5: // -
        setExpress((prev) => {
          const symbols = ["÷", "×", "+", "-"];
          const sliced = prev.slice();
          const len = sliced.length;
          const last = sliced.splice(len - 1, 1)[0];

          if (last === undefined) {
            return [];
          } else {
            if (last === "(") {
              return [...sliced, "("];
            } else {
              if (symbols.includes(last)) {
                return [...sliced, "-"];
              } else {
                return [...sliced, last, "-"];
              }
            }
          }
        });
        break;

      case 6: // +
        setExpress((prev) => {
          const symbols = ["÷", "×", "+", "-"];
          const sliced = prev.slice();
          const len = sliced.length;
          const last = sliced.splice(len - 1, 1)[0];

          if (last === undefined) {
            return [];
          } else {
            if (last === "(") {
              return [...sliced, "("];
            } else {
              if (symbols.includes(last)) {
                return [...sliced, "+"];
              } else {
                return [...sliced, last, "+"];
              }
            }
          }
        });
        break;

      case 7: // =
        setExpress((prev) => lastCal(prev));
        break;

      case 8: // .
        setExpress((prev) => {
          const symbols = ["+", "-", "×", "÷", "("];
          const sliced = prev.slice();
          const len = sliced.length;
          const last = sliced.splice(len - 1, len)[0];

          if (last === undefined) {
            return ['0.'];
          }

          if (last === ")" || last === '%') {
            return [...sliced, last, "×", "0."];
          }

          if (symbols.includes(last)) {
            return [...sliced, last, "0."];
          }

          if (!last.includes(".")) {
            return [...sliced, last + "."];
          } else {
            return [...sliced, last];
          }
        });
        break;

      case 9: // +/-
        setExpress((prev) => {
          const symbols = ["-", "+", "×", "÷", "("];
          const sliced = prev.slice();
          const len = sliced.length;
          const last = sliced.splice(len - 1, 1)[0];

          if (last === undefined) {
            OPARS++;
            return ["(", "-"];
          } else {
            const sLen = sliced.length;
            if (sliced[sLen - 1] === "(" && last === "-") {
              OPARS--;
              sliced.splice(sLen - 1, 1);
              return sliced;
            } else {
              if (last === ")" || last === "%") {
                OPARS++;
                return [...sliced, last, "×", "(", "-"];
              } else {
                if (symbols.includes(last)) {
                  OPARS++;
                  return [...sliced, last, "(", "-"];
                } else {
                  const sLen = sliced.length;
                  if (sliced[sLen - 2] + sliced[sLen - 1] === "(-") {
                    OPARS--;
                    sliced.splice(sLen - 2, 2);
                    return [...sliced, last];
                  } else {
                    OPARS++;
                    return [...sliced, "(", "-", last];
                  }
                }
              }
            }
          }
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

function simpleCal(express: Array<string>) {
  const symbols = ["+", "-", "×", "÷", "("];
  let sliced = express.slice();

  if (sliced.length === 0) {
    return [];
  }

  if (sliced[0] === "-") {
    sliced.splice(0, 2, `-${sliced[1]}`);
  }

  if (sliced.includes("%")) {
    const ind = sliced.indexOf("%");
    sliced.splice(ind - 1, 2, `${Number(sliced[ind - 1]) / 100}`);
  }

  const len = sliced.length;
  const last = sliced.slice(len - 1, len)[0];

  if (!symbols.includes(last)) {
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

function lastCal(express: Array<string>): string[] {
  if (!express.includes('(') && !express.includes(')')) {
    return simpleCal(express);
  }
  else {
    const parInds = findPars(express);
    const first = express.slice(0, parInds[0]);
    const erasedPar = express.slice(parInds[0] + 1, parInds[1]);
    const left = express.slice(parInds[1] + 1);
    return lastCal([...first, lastCal(erasedPar)[0], ...left]);
  }
}

function findPars(express: Array<string>) {
  const len = express.length;
  let begPar = -1, endPar = -1;
  let oPars = 0;

  for (let i = 0; i < len; i++) {
    if (express[i] === '(') {
      oPars++;
      if (begPar < 0) {
        begPar = i;
      }
    }

    if (express[i] === ')') {
      oPars--;
      if (oPars === 0) {
        endPar = i;
        break;
      }
    }
  }

  return [begPar, endPar];
}

export default App; 
