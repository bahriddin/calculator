import SignBtn from "../signBtn/SignBtn";
import { DigitBtnType } from "../app/App";

function DigitBtn({ digit, color, bg }: DigitBtnType) {
  return (
    <div onClick={() => console.log(digit)}>
      <SignBtn sign={digit} color={color} bg={bg} />
    </div>
  );
}

export default DigitBtn;
