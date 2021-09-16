// for clickDigit function
export function addDigit(prev: string[], digit: number) {
  const symbols = ["÷", "×", "-", "+", "("];
  const sliced = prev.slice();
  const last = sliced.splice(sliced.length - 1, 1)[0];

  if (last === undefined) {
    return [`${digit}`];
  } else {
    if (last === ")" || last === "%") {
      return [...sliced, last, "×", `${digit}`];
    } else {
      if (!symbols.includes(last)) {
        if (last !== "0") {
          return [...sliced, last + `${digit}`];
        } else {
          return [...sliced, `${digit}`];
        }
      } else {
        return [...sliced, last, `${digit}`];
      }
    }
  }
}

// for backspace function
export function eraseLastChar(
  prev: string[],
  OPARS: number
): [string[], number] {
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

    return newLast === ""
      ? [[...sliced], OPARS]
      : [[...sliced, newLast], OPARS];
  } else {
    return [[], OPARS];
  }
}

// for '()' click button in clickSymbol function
export function clickPars(prev: string[], OPARS: number): [string[], number] {
  const symbols = ["+", "-", "÷", "×"];
  const sliced = prev.slice();
  const len = sliced.length;
  const last = sliced.slice(len - 1, len)[0];

  if (last === undefined) {
    return [["("], OPARS + 1];
  }
    
  if (last === "(") {
    OPARS++;
    return [[...sliced, "("], OPARS];
  }
  
  if (!isNaN(Number(last))) {
    if (OPARS === 0) {
      OPARS++;
      return [[...sliced, "×", "("], OPARS];
    } else {
      OPARS--;
      return [[...sliced, ")"], OPARS];
    }
  } else {
    if (symbols.includes(last)) {
      OPARS++;
      return [[...sliced, "("], OPARS];
    } else {
      if (last === ")" && OPARS > 0) {
        OPARS--;
        return [[...sliced, ")"], OPARS];
      } else {
        OPARS++;
        return [[...sliced, "×", "("], OPARS];
      }
    }

  }
  
}

// for '%' click button in clickSymbol function
export function clickPercent(prev: string[]) {
  const symbols = ["+", "-", "×", "÷", "%", "("];
  const sliced = prev.slice();
  const len = sliced.length;
  const last = sliced.slice(len - 1)[0];

  if (sliced.length === 0 || symbols.includes(last)) {
    return sliced;
  } else {
    return [...sliced, "%"];
  }
}

// for '÷' click button in clickSymbol function
export function clickDivide(prev: string[]) {
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
}

// for '×' click button in clickSymbol function
export function clickMultiply(prev: string[]) {
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
}

// for '-' click button in clickSymbol function
export function clickSubt(prev: string[]) {
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
}

// for '+' click button in clickSymbol function
export function clickAdd(prev: string[]) {
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
}

// calculation simple expressions
function simpleCal(express: Array<string>) {
  const symbols = ["+", "-", "×", "÷", "("];
  let sliced = express.slice();

  if (sliced.length === 0) {
    return [];
  }

  if (sliced[0] === "-") {
    sliced.splice(0, 2, `-${sliced[1]}`);
  }

  while (sliced.includes("%")) {
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

// for determine parentheses indexes
function findPars(express: Array<string>, OPARS: number): [number[], number] {
  const len = express.length;
  let begPar = -1,
    endPar = -1;
  let oPars = 0;

  for (let i = 0; i < len; i++) {
    if (express[i] === "(") {
      oPars++;
      if (begPar < 0) {
        begPar = i;
      }
    }

    if (express[i] === ")") {
      oPars--;
      if (oPars === 0) {
        endPar = i;
        break;
      }
    }
  }

  if (endPar !== -1) {
    return [[begPar, endPar], OPARS];
  } else {
    OPARS--;
    return [[begPar, express.length], OPARS];
  }
}

// for last calculation for equal btn in clickSymbol function
export function lastCal(
  express: Array<string>,
  OPARS: number
): [string[], number] {
  let opars = OPARS;
  if (!express.includes("(") && !express.includes(")")) {
    return [simpleCal(express), opars];
  } else {
    const findPar = findPars(express, opars);
    const parInds = findPar[0];
    opars = findPar[1];
    const first = express.slice(0, parInds[0]);
    const erasedPar = express.slice(parInds[0] + 1, parInds[1]);
    const left = express.slice(parInds[1] + 1);
    return [
      lastCal([...first, lastCal(erasedPar, opars)[0][0], ...left], opars)[0],
      opars,
    ];
  }
}

export function fixNum(num: string) {
  if (num.includes(".")) {
    const ind = num.indexOf(".");
    const frac = num.slice(ind + 1);
    return frac.length > 10 ? `${Number(num).toFixed(10)}` : num;
  } else {
    return num;
  }
}

// for '.' click button in clickSymbol function
export function clickPoint(prev: string[]) {
  const symbols = ["+", "-", "×", "÷", "("];
  const sliced = prev.slice();
  const len = sliced.length;
  const last = sliced.splice(len - 1, len)[0];

  if (last === undefined) {
    return ["0."];
  }

  if (last === ")" || last === "%") {
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
}

// for '+/-' click button in clickSymbol function
export function clickOppTog(prev: string[], OPARS: number): [string[], number] {
  const symbols = ["-", "+", "×", "÷", "("];
  const sliced = prev.slice();
  const len = sliced.length;
  const last = sliced.splice(len - 1, 1)[0];

  if (last === undefined) {
    OPARS++;
    return [["(", "-"], OPARS];
  } else {
    const sLen = sliced.length;
    if (sliced[sLen - 1] === "(" && last === "-") {
      OPARS--;
      sliced.splice(sLen - 1, 1);
      return [sliced, OPARS];
    } else {
      if (last === ")" || last === "%") {
        OPARS++;
        return [[...sliced, last, "×", "(", "-"], OPARS];
      } else {
        if (symbols.includes(last)) {
          OPARS++;
          return [[...sliced, last, "(", "-"], OPARS];
        } else {
          const sLen = sliced.length;
          if (sliced[sLen - 2] + sliced[sLen - 1] === "(-") {
            OPARS--;
            sliced.splice(sLen - 2, 2);
            return [[...sliced, last], OPARS];
          } else {
            OPARS++;
            return [[...sliced, "(", "-", last], OPARS];
          }
        }
      }
    }
  }
}

// for output component
export function addCommas(num: string) {
  let isNeg = false;
  if (num[0] === "-") {
    isNeg = true;
    num = num.slice(1);
  }

  if (!num.includes(".")) {
    const len = num.length;
    let res = "";

    for (let i = len - 1; i >= 0; i -= 3) {
      const com = i === 0 || i === 1 || i === 2 ? "" : ",";
      const first = num[i - 2] !== undefined ? num[i - 2] : "";
      const second = num[i - 1] !== undefined ? num[i - 1] : "";
      res = com + first + second + num[i] + res;
    }

    return isNeg ? `-${res}` : res;
  } else {
    const indPoint = num.indexOf(".");
    const int = num.slice(0, indPoint);
    const len = int.length;
    let res = "";

    for (let i = len - 1; i >= 0; i -= 3) {
      const com = i === 0 || i === 1 || i === 2 ? "" : ",";
      const first = int[i - 2] !== undefined ? int[i - 2] : "";
      const second = int[i - 1] !== undefined ? int[i - 1] : "";
      res = com + first + second + int[i] + res;
    }
    return isNeg ? `-${res + num.slice(indPoint)}` : res + num.slice(indPoint);
  }
}
