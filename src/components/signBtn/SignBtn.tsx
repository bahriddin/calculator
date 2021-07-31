import "./SignBtn.css";

function DigitBtn({
  sign,
  color,
  bg,
}: {
  sign: number | string | JSX.Element;
  color?: string;
  bg?: string;
}) {
  return (
    <div
      style={{ color: color, backgroundColor: bg }}
      className="sign-div d-inline-block rounded-circle text-center"
    >
      <div className="d-flex justify-content-center align-items-center h-100">
        {sign}
      </div>
    </div>
  );
}

export default DigitBtn;
