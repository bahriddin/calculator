import SignBtn from '../signBtn/SignBtn';

function ClearBtn({ sign, color, bg }: { sign: string; color?: string; bg?: string }) {
    return (
        <div onClick={() => console.log(sign)}>
            <SignBtn sign={sign} color={color} />
        </div>
    );
}

export default ClearBtn;