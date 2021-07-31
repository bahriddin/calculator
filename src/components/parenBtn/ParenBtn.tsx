import SignBtn from '../signBtn/SignBtn';

function ParenBtn({ sign, color, bg }: { sign: JSX.Element; color?: string; bg?: string }) {
    return (
        <div onClick={() => console.log(sign)}>
            <SignBtn sign={sign} color={color} />
        </div>
    );
}

export default ParenBtn;