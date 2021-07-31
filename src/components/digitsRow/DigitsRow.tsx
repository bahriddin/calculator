import DigitBtn from "../signBtn/SignBtn";
import { Row, Col } from "react-bootstrap";

function DigitsRow({
  first,
  second,
  third,
  fourth,
}: {
  first: [sign: string | number | JSX.Element, color?: string, bg?: string];
  second: [sign: string | number | JSX.Element, color?: string, bg?: string];
  third: [sign: string | number | JSX.Element, color?: string, bg?: string];
  fourth: [sign: string | number | JSX.Element, color?: string, bg?: string];
}) {
  return (
    <Row xs={4}>
      <Col>
        <DigitBtn sign={first[0]} color={first[1]} bg={first[2]} />
      </Col>
      <Col>
        <DigitBtn sign={second[0]} color={second[1]} bg={second[2]} />
      </Col>
      <Col>
        <DigitBtn sign={third[0]} color={third[1]} bg={third[2]} />
      </Col>
      <Col>
        <DigitBtn sign={fourth[0]} color={fourth[1]} bg={fourth[2]} />
      </Col>
    </Row>
  );
}

export default DigitsRow;
