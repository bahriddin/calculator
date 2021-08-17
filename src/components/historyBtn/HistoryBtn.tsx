import { BsClock } from "react-icons/bs";

function HistoryBtn({ color }: { color: string }) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <BsClock size="23px" color={color} />
    </div>
  );
}

export default HistoryBtn;
