import "./DigitBtn.css";

function DigitBtn({ digit }: { digit: number }) {
  return <div className="digit-div d-inline-block rounded-circle">{digit}</div>;
}

export default DigitBtn;
