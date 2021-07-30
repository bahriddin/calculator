import "./App.css";
import DigitsRow from "../digitsRow/DigitsRow";
import { Container } from "react-bootstrap";
import { RiParenthesesFill } from 'react-icons/ri';
import { RiDivideFill } from 'react-icons/ri';
import { FiX } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
// import { TiBackspaceOutline } from 'react-icons/ti';

function App() {
  return (
    <Container>
      <div className="height-100">
        <div className="height-45 top-sec">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
          veniam.s
        </div>
        <div className="height-55">
          <div className="d-flex flex-column justify-content-between align-items-center py-4 h-100">
            <DigitsRow
              first={['C', "#e1694e", "#f8f8f8"]}
              second={[<RiParenthesesFill />, "#68b31a"]}
              third={["%", "#68b31a"]}
              fourth={[<RiDivideFill />, "#68b31a"]}
            />
            <DigitsRow
              first={[7]}
              second={[8]}
              third={[9]}
              fourth={[<FiX />, "#68b31a"]}
            />
            <DigitsRow
              first={[4]}
              second={[5]}
              third={[6]}
              fourth={[<FiMinus />, "#68b31a"]}
            />
            <DigitsRow
              first={[1]}
              second={[2]}
              third={[3]}
              fourth={[<FiPlus />, "#68b31a"]}
            />
            <DigitsRow
              first={["+/-"]}
              second={[0]}
              third={["."]}
              fourth={["=", "#fafafa", "#68b31a"]}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
