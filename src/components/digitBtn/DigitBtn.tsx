import "./DigitBtn.css";
import SignBtn from "../signBtn/SignBtn";
import { DigitBtnType } from "../app/App";

function DigitBtn({ digit, color, bg, clickDigit }: DigitBtnType) {
  return (
    <div
      onClick={() => {
        console.log(digit);
        clickDigit(digit);
      }}
      className="digitBtn-div"
    >
      <SignBtn sign={digit} color={color} bg={bg} />
    </div>
  );
}

export default DigitBtn;
