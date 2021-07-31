import SignBtn from '../signBtn/SignBtn'

function DigitBtn({ digit, color, bg }: { digit: number; color?: string; bg?: string }) {
    return (
        <div className="d-flex justify-content-center" onClick={() => console.log(digit)}>
            <SignBtn sign={digit} color={color} bg={bg} />
        </div>
    );
}

export default DigitBtn;