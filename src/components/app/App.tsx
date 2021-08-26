import "./App.css";
import BackspaceBtn from "../backspaceBtn/BackspaceBtn";
import DarkModeBtn from "../darkMode/DarkModeBtn";
import HistoryBtn from "../historyBtn/HistoryBtn";
import BtnRow from "../btnRow/BtnRow";
import Output from "../output/Output";
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
  // [appBg, btnBg, digCol, clearCol, symCol, equalBg, upCol, borBotCol, output, output's_math_operator]
  const [colors, setColors] = useState<Array<string>>([
    "#fcfcfc",
    "#f8f8f8",
    "#555555",
    "#e4684c",
    "#569415",
    "#68b31a",
    "#878787",
    "#f4f4f4",
    "#555555",
    "#569415",
  ]);
  const row1: RowType = [
    ["C", colors[3], colors[1], clickSymbol],
    ["( )", colors[4], colors[1], clickSymbol],
    ["%", colors[4], colors[1], clickSymbol],
    ["÷", colors[4], colors[1], clickSymbol],
  ];

  const row2: RowType = [
    [7, colors[2], colors[1], clickDigit],
    [8, colors[2], colors[1], clickDigit],
    [9, colors[2], colors[1], clickDigit],
    ["×", colors[4], colors[1], clickSymbol],
  ];

  const row3: RowType = [
    [4, colors[2], colors[1], clickDigit],
    [5, colors[2], colors[1], clickDigit],
    [6, colors[2], colors[1], clickDigit],
    ["-", colors[4], colors[1], clickSymbol],
  ];

  const row4: RowType = [
    [1, colors[2], colors[1], clickDigit],
    [2, colors[2], colors[1], clickDigit],
    [3, colors[2], colors[1], clickDigit],
    ["+", colors[4], colors[1], clickSymbol],
  ];

  const row5: RowType = [
    ["+/-", colors[2], colors[1], clickSymbol],
    [0, colors[2], colors[1], clickDigit],
    [".", colors[2], colors[1], clickSymbol],
    ["=", "#fafafa", colors[5], clickSymbol],
  ];

  function backspace() {
    setExpress((prev) => {
      const res = eraseLastChar(prev, OPARS);
      OPARS = res[1];
      return res[0];
    });
  }

  function darkMode() {
    const lightMode = [
      "#fcfcfc",
      "#f8f8f8",
      "#555555",
      "#e4684c",
      "#569415",
      "#68b31a",
      "#878787",
      "#f4f4f4",
      "#555555",
      "#569415",
    ];
    const darkMode = [
      "#010101",
      "#1f1f1f",
      "#fafafa",
      "#e1694e",
      "#9cd260",
      "#427e04",
      "#a5a5a5",
      "#212121",
      "#fafafa",
      "#9cd260",
    ];
    setColors((prev) => {
      return prev[0] === "#fcfcfc" ? darkMode : lightMode;
    });
  }

  function clickDigit(digit: number) {
    setExpress((prev) => addDigit(prev, digit));
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
    <div className="tallest-div">
      <Container style={{ backgroundColor: colors[0] }} className="width-50">
        <div className="height-100 px-2">
          <div
            style={{ borderBottom: `1px solid ${colors[7]}` }}
            className="height-48 top-sec d-flex flex-column justify-content-between"
          >
            <div className="d-flex flex-column justify-content-between h-75">
              <div style={{ overflow: "auto" }} className="mt-4 text-right">
                <Output
                  express={express}
                  color={colors[8]}
                  oColor={colors[9]}
                />
              </div>
              <h3 style={{ color: colors[8] }} className="text-right">
                45
              </h3>
            </div>
            <div
              className="mb-3 px-3 d-flex justify-content-between align-items-center"
              id="upper-icons"
            >
              <div className="d-flex align-items-center justify-content-between left-up-icons">
                <HistoryBtn color={colors[6]} />
                <DarkModeBtn color={colors[6]} toggle={darkMode} />
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
    </div>
  );
}

export default App;
