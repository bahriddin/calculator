import { TiBackspaceOutline } from 'react-icons/ti';

function BackspaceBtn({backspace}: {backspace: Function}) {
    return (
        <div onClick={() => {console.log('backspace'); backspace()}}>
            <TiBackspaceOutline size="30px" color="#68b31a" />
        </div>
    );
}

export default BackspaceBtn;