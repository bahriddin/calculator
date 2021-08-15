import { Row, Col } from "react-bootstrap";
import DigitBtn from "../digitBtn/DigitBtn";
import SymbolBtn from "../symbolBtn/SymbolBtn";

function BtnRow(row: [string | number, string, string, Function][]) {
  return (
    <Row xs={4}>
      {typeof row[0][0] === "number" ? (
        <Col>
          <DigitBtn
            digit={row[0][0]}
            color={row[0][1]}
            bg={row[0][2]}
            clickDigit={() => row[0][3](row[0][0])}
          />
        </Col>
      ) : (
        <Col>
          <SymbolBtn
            sign={row[0][0]}
            color={row[0][1]}
            bg={row[0][2]}
            clickSymbol={() => row[0][3](row[0][0])}
          />
        </Col>
      )}
      {typeof row[1][0] === "number" ? (
        <Col>
          <DigitBtn
            digit={row[1][0]}
            color={row[1][1]}
            bg={row[1][2]}
            clickDigit={() => row[1][3](row[1][0])}
          />
        </Col>
      ) : (
        <Col>
          <SymbolBtn
            sign={row[1][0]}
            color={row[1][1]}
            bg={row[1][2]}
            clickSymbol={() => row[1][3](row[1][0])}
          />
        </Col>
      )}
      {typeof row[2][0] === "number" ? (
        <Col>
          <DigitBtn
            digit={row[2][0]}
            color={row[2][1]}
            bg={row[2][2]}
            clickDigit={() => row[2][3](row[2][0])}
          />
        </Col>
      ) : (
        <Col>
          <SymbolBtn
            sign={row[2][0]}
            color={row[2][1]}
            bg={row[2][2]}
            clickSymbol={() => row[2][3](row[2][0])}
          />
        </Col>
      )}
      {typeof row[3][0] === "number" ? (
        <Col>
          <DigitBtn
            digit={row[3][0]}
            color={row[3][1]}
            bg={row[3][2]}
            clickDigit={() => row[3][3](row[3][0])}
          />
        </Col>
      ) : (
        <Col>
          <SymbolBtn
            sign={row[3][0]}
            color={row[3][1]}
            bg={row[3][2]}
            clickSymbol={() => row[3][3](row[3][0])}
          />
        </Col>
      )}
    </Row>
  );
}

export default BtnRow;
