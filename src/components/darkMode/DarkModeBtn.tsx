import { MdWbSunny } from "react-icons/md";

function DarkModeBtn({ color }: { color: string }) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <MdWbSunny size="25px" color={color} />
    </div>
  );
}

export default DarkModeBtn;
