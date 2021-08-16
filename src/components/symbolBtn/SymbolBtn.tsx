import SignBtn from "../signBtn/SignBtn";
import { SymbolBtnType } from "../app/App";

function SymbolBtn({ sign, color, bg, clickSymbol }: SymbolBtnType) {
  return (
    <div
      onClick={() => {
        console.log(sign);
        // clickSymbol(sign);
      }}
    >
      {/* <SignBtn sign={sign} color={color} bg={bg} /> */}
    </div>
  );
}

export default SymbolBtn;
