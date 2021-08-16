import { Row, Col } from "react-bootstrap";
import { RowType } from "../app/App";
import SignBtn from "../signBtn/SignBtn";

function BtnRow(row: RowType) {
  return (
    <Row xs={4}>
      <Col>
        <SignBtn
          sign={row[0][0]}
          color={row[0][1]}
          bg={row[0][2]}
          click={row[0][3]}
        />
      </Col>
      <Col>
        <SignBtn
          sign={row[1][0]}
          color={row[1][1]}
          bg={row[1][2]}
          click={row[1][3]}
        />
      </Col>
      <Col>
        <SignBtn
          sign={row[2][0]}
          color={row[2][1]}
          bg={row[2][2]}
          click={row[2][3]}
        />
      </Col>
      <Col>
        <SignBtn
          sign={row[3][0]}
          color={row[3][1]}
          bg={row[3][2]}
          click={row[3][3]}
        />
      </Col>
    </Row>
  );
}

export default BtnRow;
