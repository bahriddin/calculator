import "./DarkModeBtn.css";
import { MdWbSunny } from "react-icons/md";

function DarkModeBtn({ color, toggle }: { color: string; toggle: Function }) {
  return (
    <div
      onClick={() => {
        toggle();
        console.log("darkmode");
      }}
      className="darkmode-div d-flex justify-content-center align-items-center"
    >
      <MdWbSunny className="darkmode-icon-size" color={color} />
    </div>
  );
}

export default DarkModeBtn;
