import DigitBtn from '../digitBtn/DigitBtn';

function App() {
    return (
        <div className="d-flex justify-content-between">
            <DigitBtn digit={0} />
            <DigitBtn digit={1} />
            <DigitBtn digit={2} />
            <DigitBtn digit={3} />
        </div>
    );
}

export default App;