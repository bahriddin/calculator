import { MdWbSunny } from "react-icons/md";

function DarkModeBtn({ color, toggle }: { color: string; toggle: Function }) {
  return (
    <div
      onClick={() => {
        toggle();
        console.log("darkmode");
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <MdWbSunny size="25px" color={color} />
    </div>
  );
}

export default DarkModeBtn;
