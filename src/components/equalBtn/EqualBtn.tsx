import SignBtn from '../signBtn/SignBtn';

function EqualBtn({sign, color, bg}: {sign: string; color?: string; bg?: string}) {
    return (
        <div>
            <SignBtn sign={sign} color={color} bg={bg} />
        </div>
    );
}

export default EqualBtn;