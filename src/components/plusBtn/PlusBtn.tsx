import SignBtn from "../signBtn/SignBtn";
import { SignBtnType } from "../app/App";

function PlusBtn({ sign, color, bg }: SignBtnType) {
  return (
    <div onClick={() => console.log(sign)}>
      <SignBtn sign={sign} color={color} bg={bg} />
    </div>
  );
}

export default PlusBtn;