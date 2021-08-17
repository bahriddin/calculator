import "./App.css";
import BackspaceBtn from "../backspaceBtn/BackspaceBtn";
import DarkModeBtn from "../darkMode/DarkModeBtn";
import HistoryBtn from "../historyBtn/HistoryBtn";
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
  const [bgColor, setBgColor] = useState<string>("#fff");
  const [digColor, setDigColor] = useState<string>("#555");
  const row1: RowType = [
    ["C", "#e1694e", "#f8f8f8", clickSymbol],
    ["( )", "#68b31a", "#f8f8f8", clickSymbol],
    ["%", "#68b31a", "#f8f8f8", clickSymbol],
    ["÷", "#68b31a", "#f8f8f8", clickSymbol],
  ];

  const row2: RowType = [
    [7, digColor, "#f8f8f8", clickDigit],
    [8, digColor, "#f8f8f8", clickDigit],
    [9, digColor, "#f8f8f8", clickDigit],
    ["×", "#68b31a", "#f8f8f8", clickSymbol],
  ];

  const row3: RowType = [
    [4, digColor, "#f8f8f8", clickDigit],
    [5, digColor, "#f8f8f8", clickDigit],
    [6, digColor, "#f8f8f8", clickDigit],
    ["-", "#68b31a", "#f8f8f8", clickSymbol],
  ];

  const row4: RowType = [
    [1, digColor, "#f8f8f8", clickDigit],
    [2, digColor, "#f8f8f8", clickDigit],
    [3, digColor, "#f8f8f8", clickDigit],
    ["+", "#68b31a", "#f8f8f8", clickSymbol],
  ];

  const row5: RowType = [
    ["+/-", digColor, "#f8f8f8", clickSymbol],
    [0, digColor, "#f8f8f8", clickDigit],
    [".", digColor, "#f8f8f8", clickSymbol],
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
    <Container style={{ backgroundColor: bgColor }}>
      <div className="height-100 px-2">
        <div className="height-48 top-sec d-flex flex-column justify-content-between">
          <h1>{express}</h1>
          <div className="mb-3 px-3 d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <div className="mr-5">
                <HistoryBtn />
              </div>
              <DarkModeBtn />
            </div>
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
