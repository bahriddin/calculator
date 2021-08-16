import "./SignBtn.css";
import { SignBtnType } from "../app/App";

function SignBtn({ sign, color, bg, click }: SignBtnType) {
  return (
    <div
      style={{ color: color, backgroundColor: bg }}
      onClick={() => click(sign)}
      className="sign-div d-inline-block rounded-circle text-center"
    >
      <div className="d-flex justify-content-center align-items-center h-100">
        {sign}
      </div>
    </div>
  );
}

export default SignBtn;
