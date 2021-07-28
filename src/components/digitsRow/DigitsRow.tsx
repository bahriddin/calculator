import DigitBtn from "../digitBtn/SignBtn";
import { Row, Col } from "react-bootstrap";

function DigitsRow({
  first,
  second,
  third,
  fourth,
}: {
  first: number | string;
  second: number | string;
  third: number | string;
  fourth: number | string;
}) {
  return (
    <Row xs={4}>
      <Col>
        <DigitBtn sign={first} />
      </Col>
      <Col>
        <DigitBtn sign={second} />
      </Col>
      <Col>
        <DigitBtn sign={third} />
      </Col>
      <Col>
        <DigitBtn sign={fourth} />
      </Col>
    </Row>
  );
}

export default DigitsRow;
