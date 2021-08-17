import "./BackspaceBtn.css";
import { TiBackspaceOutline } from "react-icons/ti";

function BackspaceBtn({ backspace }: { backspace: Function }) {
  return (
    <div
      className="backspaceBtn-div d-flex justify-content-center align-items-center"
      onClick={() => {
        console.log("backspace");
        backspace();
      }}
    >
      <TiBackspaceOutline className="backspace-icon-size" color="#68b31a" />
    </div>
  );
}

export default BackspaceBtn;
