import "./App.css";
import BackspaceBtn from "../backspaceBtn/BackspaceBtn";
import BtnRow from "../btnRow/BtnRow";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { addDigit } from "../../functions";
import { eraseLastChar } from "../../functions";
import { clickPars } from "../../functions";
import { clickPercent } from "../../functions";
import { clickDivide } from "../../functions";
import { clickMultiply } from "../../functions";
import { clickSubt } from "../../functions";
import { clickAdd } from "../../functions";
import { lastCal } from "../../functions";
import { fixNum } from "../../functions";
import { clickPoint } from "../../functions";
import { clickOppTog } from "../../functions";

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
  sign: string | number;
  color?: string;
  bg?: string;
  click: Function;
};
export type RowType = [string | number, string, string, Function][];

const SYMBOLS = ["C", "( )", "%", "÷", "×", "-", "+", "=", ".", "+/-"];
let OPARS = 0;

function App() {
  const [express, setExpress] = useState<Array<string>>([]);
  const row1: RowType = [
    ["C", "#e1694e", "#f8f8f8", clickSymbol],
    ["( )", "#68b31a", "#f8f8f8", clickSymbol],
    ["%", "#68b31a", "#f8f8f8", clickSymbol],
    ["÷", "#68b31a", "#f8f8f8", clickSymbol],
  ];

  const row2: RowType = [
    [7, "#555", "#f8f8f8", clickDigit],
    [8, "#555", "#f8f8f8", clickDigit],
    [9, "#555", "#f8f8f8", clickDigit],
    ["×", "#68b31a", "#f8f8f8", clickSymbol],
  ];

  const row3: RowType = [
    [4, "#555", "#f8f8f8", clickDigit],
    [5, "#555", "#f8f8f8", clickDigit],
    [6, "#555", "#f8f8f8", clickDigit],
    ["-", "#68b31a", "#f8f8f8", clickSymbol],
  ];

  const row4: RowType = [
    [1, "#555", "#f8f8f8", clickDigit],
    [2, "#555", "#f8f8f8", clickDigit],
    [3, "#555", "#f8f8f8", clickDigit],
    ["+", "#68b31a", "#f8f8f8", clickSymbol],
  ];

  const row5: RowType = [
    ["+/-", "#555", "#f8f8f8", clickSymbol],
    [0, "#555", "#f8f8f8", clickDigit],
    [".", "#555", "#f8f8f8", clickSymbol],
    ["=", "#fff", "#68b31a", clickSymbol],
  ];

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
        <div className="height-48 top-sec d-flex flex-column justify-content-between">
          <h1>{express}</h1>
          <div className="mb-3 pr-3 d-flex justify-content-end">
            <BackspaceBtn backspace={backspace} />
          </div>
        </div>
        <div className="height-52 bottom-sec">
          <div className="py-4 h-100 d-flex flex-column justify-content-between align-items-center">
            <BtnRow {...row1} />
            <BtnRow {...row2} />
            <BtnRow {...row3} />
            <BtnRow {...row4} />
            <BtnRow {...row5} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
