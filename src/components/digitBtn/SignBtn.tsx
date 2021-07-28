import "./SignBtn.css";

function DigitBtn({ sign }: { sign: number | string }) {
  return (
    <div className="sign-div d-inline-block rounded-circle text-center">
      <div className="inner-sign-div">{sign}</div>
    </div>
  );
}

export default DigitBtn;
