import SignBtn from '../signBtn/SignBtn';

function MinusBtn({sign, color, bg}: {sign: JSX.Element; color?: string; bg?: string}) {
    return (
        <div onClick={() => console.log(sign)}>
            <SignBtn sign={sign} color={color} bg={bg} />
        </div>
    );
}

export default MinusBtn;