import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GridExample() {
  return (
    <Container >
      <Row style={{width: "100%"}}>
        <Col lg={3}>First column</Col>
        <Col lg={9}>Second column</Col>
      </Row>
    </Container>
  );
}

export default GridExample;