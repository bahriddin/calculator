import "./DigitBtn.css";

function DigitBtn({ digit }: { digit: number }) {
  return (
    <div className="d-inline-block rounded-circle">
      <div className="digit-div">{digit}</div>
    </div>
  );
}

export default DigitBtn;
