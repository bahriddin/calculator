import { TiBackspaceOutline } from 'react-icons/ti';

function BackspaceBtn() {
    return (
        <div onClick={() => console.log('backspace')}>
            <TiBackspaceOutline size="30px" color="#68b31a" />
        </div>
    );
}

export default BackspaceBtn;