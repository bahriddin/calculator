import "./SignBtn.css";

function DigitBtn({ sign }: { sign: number | string }) {
  return (
    <div className="sign-div d-inline-block rounded-circle text-center">
      <div className="d-flex justify-content-center align-items-center h-100">
        {sign}
      </div>
    </div>
  );
}

export default DigitBtn;
