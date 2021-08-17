import "./HistoryBtn.css";
import { BsClock } from "react-icons/bs";

function HistoryBtn({ color }: { color: string }) {
  return (
    <div className="historyBtn-div d-flex justify-content-center align-items-center">
      <BsClock size="23px" color={color} />
    </div>
  );
}

export default HistoryBtn;
